#!/usr/bin/env python3
"""
Publish Markdown content to WordPress via REST API
Usage: python publish_wordpress.py <content_path>
Env: WP_SITE_URL, WP_USERNAME, WP_APP_PASSWORD
"""
import os
import sys
import base64
import frontmatter
import markdown
import requests

def main():
    if len(sys.argv) < 2:
        print("Usage: python publish_wordpress.py <content_path>")
        sys.exit(1)

    content_path = sys.argv[1]
    site_url = os.environ.get('WP_SITE_URL', '').rstrip('/')
    username = os.environ.get('WP_USERNAME')
    app_password = os.environ.get('WP_APP_PASSWORD')

    for var, val in [('WP_SITE_URL', site_url), ('WP_USERNAME', username), ('WP_APP_PASSWORD', app_password)]:
        if not val:
            print(f"❌ {var} env var missing")
            sys.exit(1)

    if not os.path.exists(content_path):
        print(f"❌ Content file not found: {content_path}")
        sys.exit(1)

    # Load content
    post = frontmatter.load(content_path)
    title = post.metadata.get('title', 'Untitled')
    excerpt = post.metadata.get('description', post.metadata.get('excerpt', ''))
    categories = post.metadata.get('categories', [])  # numeric IDs preferred
    tags = post.metadata.get('tags', [])
    status = post.metadata.get('status', 'publish')  # publish | draft | future
    publish_date = post.metadata.get('publish_date', None)  # ISO 8601 if scheduled
    featured_media = post.metadata.get('featured_media', None)  # WP media ID
    custom_html = post.metadata.get('custom_html', False)

    # Convert MD to HTML
    if custom_html:
        html_body = post.content
    else:
        html_body = markdown.markdown(
            post.content,
            extensions=['extra', 'tables', 'fenced_code']
        )

    # Auth header (Basic with Application Password)
    creds = f"{username}:{app_password}".encode('utf-8')
    auth_header = base64.b64encode(creds).decode('utf-8')
    headers = {
        'Authorization': f'Basic {auth_header}',
        'Content-Type': 'application/json',
    }

    # Build post body
    post_body = {
        'title': title,
        'content': html_body,
        'excerpt': excerpt,
        'status': status,
    }
    if categories:
        post_body['categories'] = [int(c) if str(c).isdigit() else c for c in categories]
    if tags:
        # Convert string tags to slugs/IDs as needed
        post_body['tags'] = tags
    if publish_date:
        post_body['date'] = publish_date
    if featured_media:
        post_body['featured_media'] = int(featured_media)

    # POST to WordPress REST API
    endpoint = f"{site_url}/wp-json/wp/v2/posts"

    try:
        response = requests.post(endpoint, headers=headers, json=post_body, timeout=30)
        response.raise_for_status()
        data = response.json()
        print(f"✅ Published to WordPress: {data.get('link')}")
        print(f"   Post ID: {data.get('id')}")
        print(f"   Status: {data.get('status')}")
    except requests.exceptions.HTTPError as e:
        print(f"❌ HTTP error: {e}")
        print(f"   Response: {response.text[:500]}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Publish failed: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
