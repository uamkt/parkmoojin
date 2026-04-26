#!/usr/bin/env python3
"""
Publish Markdown content to Google Blogger via Blogger API v3
Usage: python publish_blogger.py <content_path>
Env: BLOGGER_BLOG_ID, BLOGGER_SA_PATH (service account JSON path)
"""
import os
import sys
import json
import frontmatter
import markdown
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/blogger']

def main():
    if len(sys.argv) < 2:
        print("Usage: python publish_blogger.py <content_path>")
        sys.exit(1)

    content_path = sys.argv[1]
    blog_id = os.environ.get('BLOGGER_BLOG_ID')
    sa_path = os.environ.get('BLOGGER_SA_PATH', '/tmp/credentials/blogger_sa.json')

    if not blog_id:
        print("❌ BLOGGER_BLOG_ID env var missing")
        sys.exit(1)
    if not os.path.exists(sa_path):
        print(f"❌ Service account JSON not found at {sa_path}")
        sys.exit(1)

    # Load content
    if not os.path.exists(content_path):
        print(f"❌ Content file not found: {content_path}")
        sys.exit(1)

    post = frontmatter.load(content_path)
    title = post.metadata.get('title', 'Untitled')
    labels = post.metadata.get('labels', post.metadata.get('tags', []))
    if isinstance(labels, str):
        labels = [labels]
    custom_html = post.metadata.get('custom_html', False)

    # Convert MD body to HTML (or pass through if HTML already)
    if custom_html:
        html_body = post.content
    else:
        html_body = markdown.markdown(
            post.content,
            extensions=['extra', 'tables', 'fenced_code', 'codehilite']
        )

    # Authenticate
    credentials = service_account.Credentials.from_service_account_file(
        sa_path, scopes=SCOPES
    )
    service = build('blogger', 'v3', credentials=credentials)

    # Build post body
    post_body = {
        'kind': 'blogger#post',
        'blog': {'id': blog_id},
        'title': title,
        'content': html_body,
        'labels': labels,
    }

    # Publish
    try:
        result = service.posts().insert(
            blogId=blog_id,
            body=post_body,
            isDraft=False,
            fetchImages=True,
        ).execute()
        print(f"✅ Published to Blogger: {result.get('url')}")
        print(f"   Post ID: {result.get('id')}")
        print(f"   Labels: {', '.join(labels) if labels else '(none)'}")
    except Exception as e:
        print(f"❌ Publish failed: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
