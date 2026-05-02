/**
 * ============================================================
 *  PORTFOLIO CONFIG  —  Edit this file to update ALL content
 *  No other file needs to change when updating resume details
 * ============================================================
 */

export const CONFIG = {
  /* ── PERSONAL ───────────────────────────────────────────── */
  personal: {
    name: "Shivanoor Vignesh",
    tagline: "AI Engineer & Full-Stack Developer",
    titles: [
      // cycles in the hero type-animation
      "AI Engineer",
      "LLM & RAG Specialist",
      "Full-Stack Developer",
      "Workflow Automation Builder",
    ],
    shortBio:
      "I build intelligent systems — from RAG pipelines and local LLM deployments to end-to-end web applications. Currently engineering AI products at Aurus Inc, Pune.",
    about: `I'm Shivanoor Vignesh, an AI Engineer and Full-Stack Developer passionate about bridging the gap between cutting-edge AI research and real-world software products.

At Aurus Inc I design and ship production AI systems: Retrieval-Augmented Generation (RAG) pipelines, local LLM deployments with Ollama, and intelligent workflow automations using n8n — all purpose-built to solve tangible business problems without sacrificing reliability or security.

My engineering foundation spans Java, Python, React, Spring Boot, and Node.js, giving me the full-stack fluency to own features end-to-end — from backend API design to polished frontend interfaces.

Outside work I explore the frontier of open-source LLMs, contribute to ML research mini-projects, and enjoy competitive CTF challenges. I believe the best software is built by people who stay perpetually curious.`,
    location: "Hyderabad / Pune, India",
    email: "vigneshshivanoor@gmail.com",
    phone: "+91 7738363524",
    resumeUrl: "/resume.pdf", // place your PDF in /public/resume.pdf
  },

  /* ── SOCIAL LINKS ───────────────────────────────────────── */
  social: {
    github: "https://github.com/vigneshShivanoor",
    linkedin: "https://www.linkedin.com/in/shivanoor-vignesh-541085270/",
  },

  /* ── GITHUB ─────────────────────────────────────────────── */
  github: {
    username: "vigneshShivanoor",
    // Projects to pin at the top of the GitHub section (must match repo names exactly)
    pinned: [
      "Industry_Based_Projects_Learning_DataScience_Machine_Learning_Projects",
      "bus-tracking",
      "ieee-gcet-website",
    ],
    // Repos to hide entirely from the portfolio list
    exclude: [],
    // Label overrides: { 'repo-name': ['Tag1', 'Tag2'] }
    tagOverrides: {
      Industry_Based_Projects_Learning_DataScience_Machine_Learning_Projects: [
        "ML",
        "Python",
        "Deep Learning",
        "TensorFlow",
      ],
      "bus-tracking": ["Web Dev", "Java", "JavaScript"],
      "ieee-gcet-website": ["Web Dev", "React"],
    },
  },

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    {
      category: "AI / ML",
      icon: "🤖",
      items: [
        "Large Language Models (LLMs)",
        "RAG Pipelines",
        "Prompt Engineering",
        "Vector Databases (ChromaDB, FAISS)",
        "LangChain",
        "Ollama",
        "Hugging Face",
        "scikit-learn",
        "TensorFlow",
      ],
    },
    {
      category: "Automation & Tooling",
      icon: "⚙️",
      items: [
        "n8n (Workflow Automation)",
        "REST API Integration",
        "Webhook Orchestration",
        "Jupyter Notebook",
        "Git / GitHub",
      ],
    },
    {
      category: "Backend",
      icon: "🖥️",
      items: [
        "Java",
        "Python",
        "Spring Framework (MVC, Boot)",
        "Flask",
        "Node.js",
        "RESTful APIs",
        "MySQL",
        "MongoDB",
        "PHP",
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        "React.js",
        "Angular",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3 / Tailwind",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      items: [
        "Microsoft Azure",
        "AWS (S3, EC2)",
        "Vercel",
        "Netlify",
        "VS Code",
      ],
    },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      id: "aurus",
      role: "AI Engineer",
      company: "Aurus Inc",
      location: "Pune, India",
      period: "Oct 2025 – Present",
      type: "Full-time",
      current: true,
      bullets: [
        "Designed and deployed RAG pipelines integrating vector databases with LLMs for intelligent, context-aware document search and Q&A — reducing manual lookup time significantly.",
        "Implemented local LLM inference using Ollama, enabling privacy-first AI deployments without cloud API dependency.",
        "Built multi-step AI workflow automations in n8n — covering data ingestion, email summarisation, and report generation.",
        "Engineered prompt engineering strategies and few-shot templates to improve LLM response quality across classification, summarisation, and structured extraction tasks.",
        "Benchmarked open-source LLMs (LLaMA, Mistral, Phi) for task-specific suitability, contributing to model selection decisions.",
        "Collaborated cross-functionally on API design, backend logic, and frontend integration within a unified development lifecycle.",
      ],
    },
    {
      id: "accelq",
      role: "Software Tester (Intern)",
      company: "ACCELQ",
      location: "Hyderabad, India",
      period: "May 2023 – Jun 2023",
      type: "Internship",
      current: false,
      bullets: [
        "Executed structured test cases for enterprise SaaS applications using ACCELQ's AI-powered test automation platform.",
        "Collaborated with QA and development teams through regression, functional, and exploratory testing cycles.",
      ],
    },
    {
      id: "brainovision",
      role: "Full-Stack Intern (Java Web Dev)",
      company: "BrainOVision Solutions India Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Mar 2023 – May 2023",
      type: "Internship",
      current: false,
      bullets: [
        "Completed intensive full-stack training in Java, delivering a functional web application using Spring MVC, JSP, and MySQL.",
        "Gained working knowledge of RESTful API design, MVC architecture, and front-end integration.",
      ],
    },
  ],

  /* ── FEATURED PROJECTS (non-GitHub / highlighted) ──────── */
  featuredProjects: [
    {
      id: "rag-doc-assistant",
      title: "AI-Powered Document Assistant (RAG System)",
      description:
        "End-to-end Retrieval-Augmented Generation system using LangChain, ChromaDB / FAISS, and an Ollama-hosted LLM. Implements intelligent chunking, embedding pipelines, and semantic similarity search to answer domain-specific queries over large PDF corpora with source citations.",
      tags: ["AI", "RAG", "LLM", "LangChain", "Python", "Ollama"],
      category: "AI",
      github: "https://github.com/vigneshShivanoor/Document_Based_Rag",
      demo: null,
      featured: true,
    },

    {
      id: "Industry_Based_Projects_Learning_DataScience_Machine_Learning_Projects",
      title:
        "Industry-Based Project Learning – Machine Learning & Data Science",
      description:
        "Completed industry-based project learning in Machine Learning and Data Science with 1.8+ assignments and 2.5+ capstone projects.\n\nKey Projects:\n\n1. Schirmer’s Test (February 2024)\n- Analyzed eye health data to identify dry eye symptoms\n- Performed data preprocessing and statistical analysis\n\n2. Data Visualization and Inference Modeling – The Case (March 2024)\n- Conducted exploratory data analysis using Pandas, Matplotlib, and Seaborn\n- Built inference models to identify trends and patterns\n\n3. Contextual Text Extraction from PDF Files Using Machine Learning Practices (March 2024)\n- Developed NLP-based solution to extract contextual information from PDFs\n- Implemented text preprocessing and feature extraction techniques\n\n4. Exploring Crime Analysis with LAPD Leveraging Machine Learning for Public Safety (April 2024)\n- Built predictive models to analyze crime patterns\n- Used machine learning algorithms for classification and insights\n\n5. Leukemia Cancer Detection Using Image Classification (May 2024)\n- Designed CNN-based deep learning model for image classification\n- Achieved high accuracy in leukemia detection from medical images",
      tags: ["ML", "Python", "Flask", "Deep Learning", "CNN"],
      category: "ML",
      github:
        "https://github.com/vigneshShivanoor/Industry_Based_Project_Learning_DataScience_Machine_Learning_Projects",
      demo: null,
      featured: true,
    },
    {
      id: "leave-management",
      title: "GCET Faculty Leave Management System",
      description:
        "Full-featured leave management portal for college faculty using React.js — supporting leave applications, withdrawals, and HOD/Principal approvals through a transparent digital workflow.",
      tags: ["Web Dev", "React", "JavaScript"],
      category: "Web Dev",
      github:
        "https://github.com/vigneshShivanoor/GCET_Faculty_Leave_Management_System",
      demo: null,
      featured: false,
    },
    {
      id: "bus-tracking",
      title: "College Bus Tracking System",
      description:
        "Real-time bus tracking web application for college transport using Java/PHP backend, JavaScript/php, HTML/CSS — with integrated complaint management and mobile-responsive design.",
      tags: ["Web Dev", "Java", "JavaScript", "PHP"],
      category: "Web Dev",
      github: "https://github.com/vigneshShivanoor/Bus-Tracking-using-php",
      demo: null,
      featured: false,
    },
    {
      id: "ieee-website",
      title: "IEEE Student Branch Website — GCET",
      description:
        "Responsive institutional website for the IEEE Student Branch using React.js — featuring event announcements, project showcases, online membership registration, and social media integration.",
      tags: ["Web Dev", "React", "JavaScript"],
      category: "Web Dev",
      github:
        "https://github.com/vigneshShivanoor/IEEE_Student_Branch_Website_GCET",
      demo: null,
      featured: false,
    },
  ],

  /* ── PROJECT FILTER CATEGORIES ──────────────────────────── */
  projectCategories: ["All", "AI", "ML", "Web Dev"],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Geethanjali College of Engineering & Technology",
      location: "Hyderabad, India",
      period: "2021 – 2025",
      score: "CGPA: 8.48",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      period: "2019 – 2021",
      score: "93.20%",
    },
    {
      degree: "High School",
      institution: "St. Anthony Grammar High School",
      location: "Hyderabad, India",
      period: "2009 – 2019",
      score: "92% / 9.2 CGPA",
    },
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────── */
  certifications: [
    {
      title: "Full Stack Web Development (Java)",
      issuer: "BrainOVision Solutions",
      date: "Jun – Jul 2023",
      icon: "🏆",
    },
    {
      title: "Java Fundamentals",
      issuer: "Oracle",
      date: "Jul 2023",
      icon: "☕",
    },
    {
      title: "Industrial Project Based Learning — Data Science",
      issuer: "GCET",
      date: "Oct 2023 – May 2024",
      icon: "📊",
    },
    {
      title: "Internship Certificate — Software Testing",
      issuer: "ACCELQ",
      date: "May 2023",
      icon: "🧪",
    },
    {
      title: "Internship Certificate — Java Web Development",
      issuer: "BrainOVision Solutions",
      date: "Feb – Jun 2023",
      icon: "💻",
    },
    {
      title: "3rd Prize — Capture The Flag (CTF) Event",
      issuer: "IEEE Student Branch, GCET",
      date: "2024",
      icon: "🚩",
    },
  ],

  /* ── EMAILJS ─────────────────────────────────────────────── */
  // Sign up free at https://emailjs.com — fill these in your .env file
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  },
};
