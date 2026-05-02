/**
 * CBRN Syndicate Pillar Definitions
 *
 * 4 pillars × 2 daily slots → ~15 articles/pillar/month rotation
 * Topic selection: dayOfYear % topics.length within selected pillar
 */

export type PillarId = "A" | "B" | "C" | "D";

export interface PillarTopic {
  topic: string;
  angle: string;
  keyEntities: string[];
}

export interface Pillar {
  id: PillarId;
  name: string;
  focus: string;
  topics: PillarTopic[];
}

export const PILLARS: Record<PillarId, Pillar> = {
  A: {
    id: "A",
    name: "Historical CBRN Anchors",
    focus: "Real CBRN incidents framed as dual-use lessons for the K-defense market",
    topics: [
      {
        topic: "Tokyo Subway Sarin Attack 1995",
        angle: "Aum Shinrikyo's chemical attack and what it teaches about urban CBRN response gaps",
        keyEntities: ["Aum Shinrikyo", "Sarin", "Tokyo", "Kasumigaseki", "JSDF"],
      },
      {
        topic: "Salisbury Novichok Incident 2018",
        angle: "GRU's nerve agent strike and NATO's wet-decontamination doctrine failure in urban terrain",
        keyEntities: ["Sergei Skripal", "Novichok A-234", "OPCW", "MI6", "Salisbury"],
      },
      {
        topic: "Halabja Chemical Attack 1988",
        angle: "Saddam-era CWA strike against Kurdish civilians and the precedent for civil-targeting CBRN deterrence",
        keyEntities: ["Halabja", "Mustard gas", "Sarin", "Kurdistan", "Iran-Iraq War"],
      },
      {
        topic: "Goiania Radiological Accident 1987",
        angle: "Cesium-137 source exposure in Brazil and the dual-use case for civilian radiation detection",
        keyEntities: ["Cs-137", "IAEA", "Goiania", "Orphan source", "Radiological dispersal"],
      },
      {
        topic: "Anthrax Letters Bioterrorism 2001",
        angle: "Post-9/11 anthrax attacks and the gap in biological agent stand-off detection",
        keyEntities: ["Bacillus anthracis", "FBI Amerithrax", "USPS", "BioWatch", "Bruce Ivins"],
      },
      {
        topic: "Bhopal Industrial Disaster 1984",
        angle: "Methyl isocyanate release at Union Carbide as the largest civilian chemical mass-casualty event",
        keyEntities: ["Bhopal", "Methyl isocyanate", "Union Carbide", "TLV", "Mass casualty"],
      },
      {
        topic: "Three Mile Island Partial Meltdown 1979",
        angle: "TMI-2 incident as a study in radiological emergency response and public-trust collapse",
        keyEntities: ["TMI-2", "NRC", "Iodine-131", "Containment", "INES Level 5"],
      },
      {
        topic: "Aum Shinrikyo Matsumoto Sarin 1994",
        angle: "The forgotten precursor attack 9 months before Tokyo subway and the intelligence failure",
        keyEntities: ["Matsumoto", "Aum Shinrikyo", "Sarin", "Japanese police", "Cult intelligence"],
      },
    ],
  },

  B: {
    id: "B",
    name: "CBRN-CADS Detection Technology",
    focus: "Sensor stack, AI classification, and field deployment of UAM KoreaTech's CBRN-CADS platform",
    topics: [
      {
        topic: "Ion Mobility Spectrometry vs Raman for CWA Field Detection",
        angle: "Comparative analysis of IMS and Raman spectroscopy in mobile CBRN scenarios",
        keyEntities: ["IMS", "Raman", "FT-IR", "CWA", "JCAD", "M-22"],
      },
      {
        topic: "Edge AI for Real-Time CBRN Classification",
        angle: "On-device inference reducing CBRN-CADS false-positive rates from 12% to under 2%",
        keyEntities: ["TensorRT", "Edge inference", "TPU", "False positive", "ROC curve"],
      },
      {
        topic: "Drone-Based Stand-off CBRN Detection",
        angle: "UAV-mounted sensor arrays vs human reconnaissance teams for hot-zone characterization",
        keyEntities: ["UAV", "Stand-off", "LIDAR", "Hot zone", "Reconnaissance"],
      },
      {
        topic: "Wearable CBRN Sensors for First Responders",
        angle: "Civilian fire-EMS dosimetry and chemical badge integration with municipal command",
        keyEntities: ["Dosimeter", "Wearable sensor", "EMS", "Bluetooth Low Energy", "Municipal C2"],
      },
      {
        topic: "Bayesian Threat Fusion in Multi-Sensor CBRN Networks",
        angle: "Combining IMS, Raman, gamma spectroscopy, and biological PCR for sub-second threat consensus",
        keyEntities: ["Bayesian fusion", "Multi-modal sensor", "Gamma spectroscopy", "qPCR"],
      },
      {
        topic: "5G-Enabled CBRN Mesh Networks for Mass Events",
        angle: "Distributed sensor mesh deployed at stadiums, airports, and political conventions",
        keyEntities: ["5G mesh", "Mass event security", "URLLC", "Edge computing"],
      },
    ],
  },

  C: {
    id: "C",
    name: "BLIS-D Decontamination & Lattice Integration",
    focus: "Bleed-air dry decontamination, NATO STANAG compliance, and Anduril Lattice interoperability",
    topics: [
      {
        topic: "BLIS-D vs Wet Decon: 30:1 Efficiency in Urban Scenarios",
        angle: "Quantitative comparison: water consumption, time-to-clear, and infrastructure footprint",
        keyEntities: ["BLIS-D", "Wet decontamination", "DS2", "STB", "Urban CBRN"],
      },
      {
        topic: "NATO STANAG 2103 Compliance Roadmap for Korean Industry",
        angle: "Technical bridge between K-defense product certification and NATO interoperability requirements",
        keyEntities: ["STANAG 2103", "NATO certification", "AAP-21", "Interoperability"],
      },
      {
        topic: "Anduril Lattice Entity Schema for CBRN Hazmat Sources",
        angle: "Publishing CBRN-CADS detections as Lattice Entities with platform_type:Animal+ and Hazmat extensions",
        keyEntities: ["Lattice", "Anduril", "Entity schema", "AbriIndex", "TEMPLATE_TRACK"],
      },
      {
        topic: "KAS Part 21/23 for Civil Aircraft Decon Equipment",
        angle: "Korean Airworthiness Standards alignment for BLIS-D civil aviation deployment",
        keyEntities: ["KAS Part 21", "KAS Part 23", "MOLIT", "Type certification"],
      },
      {
        topic: "Mass Casualty Decon: BLIS-D Throughput at 1000+ Casualties",
        angle: "Real-world scenario modeling for stadium attack response with BLIS-D mobile units",
        keyEntities: ["Mass casualty", "Triage", "Decon throughput", "Mobile decon"],
      },
      {
        topic: "Bleed-Air Engineering: From Aircraft ECS to CBRN Decon",
        angle: "How aircraft environmental control systems' bleed-air principles transfer to chemical neutralization",
        keyEntities: ["Bleed air", "Environmental control system", "Pressure ratio", "Heat exchanger"],
      },
    ],
  },

  D: {
    id: "D",
    name: "Tactical Prompt & Decision Intelligence",
    focus: "TIP-12 framework, PPF (Persona Profiling Framework), and AI-augmented CBRN decision-making",
    topics: [
      {
        topic: "Sergei Skripal as Risk-Blind Persona: TIP-12 Case Study",
        angle: "Applying TIP-12's 16-character framework to historical CBRN target's blind spots",
        keyEntities: ["TIP-12", "Risk-blind", "PPF", "Persona Profiling", "Skripal"],
      },
      {
        topic: "PIQ (Prompt Intelligence Quotient) for CBRN Operators",
        angle: "Measuring AI-collaboration capability in CBRN response teams - 5-minute self-diagnostic",
        keyEntities: ["PIQ", "Prompt engineering", "Stanford Symbolic Systems", "Self-assessment"],
      },
      {
        topic: "Cognitive Load in CBRN Officer Decision-Making",
        angle: "Studies on 30-second decision windows in chemical alarms and AI co-pilot interventions",
        keyEntities: ["Cognitive load", "Decision window", "AI co-pilot", "C2 system"],
      },
      {
        topic: "TIP-12 16 Characters Mapped to CBRN Roles",
        angle: "From Sun Tzu to Hannibal: matching commander archetypes to CBRN crisis roles",
        keyEntities: ["TIP-12", "16 characters", "Sun Tzu", "Hannibal", "Yi Sun-sin"],
      },
      {
        topic: "AI-Augmented NATO RFI Response: Tactical Prompting at Scale",
        angle: "Using structured prompts to accelerate Request-For-Information cycles in multinational CBRN ops",
        keyEntities: ["NATO RFI", "Tactical prompting", "Structured query", "Multinational ops"],
      },
      {
        topic: "Aum Shinrikyo Decision Pattern Analysis via Persona Framework",
        angle: "Reverse-engineering cult command structure with TIP-12 Visionary-Aggressor-Operator typology",
        keyEntities: ["Aum Shinrikyo", "Asahara", "PPF", "Cult command structure", "TIP-12"],
      },
    ],
  },
};

/**
 * Selects pillar based on day-of-year + slot.
 * Pattern: odd days → C/D, even days → A/B
 * Each pillar appears every 2 days at consistent slot.
 */
export function selectPillar(date: Date, slot: "morning" | "evening"): Pillar {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  const slotOffset = slot === "morning" ? 0 : 1;
  const index = (dayOfYear * 2 + slotOffset) % 4;
  const order: PillarId[] = ["A", "B", "C", "D"];
  const pillarId = order[index];
  return PILLARS[pillarId];
}

/**
 * Selects topic within pillar based on day-of-year.
 * Topics rotate at the pillar's natural cadence.
 */
export function selectTopic(pillar: Pillar, date: Date): PillarTopic {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  const topicIndex = dayOfYear % pillar.topics.length;
  return pillar.topics[topicIndex];
}
