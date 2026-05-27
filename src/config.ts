export const siteConfig = {
  name: "Aryan Reddy Kalluri",
  title: "Software Engineer",
  accentColor: "#1d4ed8",
  social: {
    email: "areddykalluri@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryanreddykalluri/",
    github: "https://github.com/ARK2306",
  },
  aboutMe:
    "I'm a Master's student in Computer Science at Vanderbilt University (graduating May 2026) who builds backend systems and cloud infrastructure meant to actually run in production. My work centers on Spring Boot microservices, multi-tenant REST APIs with JWT-scoped tenant isolation, PostgreSQL with Flyway migrations, and CI/CD pipelines on GitHub Actions. I'm increasingly focused on AI-integrated backend work — Spring AI, OpenAI function-calling, RAG over PGVector — because that's where the interesting backend problems live right now. Before Vanderbilt I interned at Cloud4C as a DevOps engineer, where I shipped Jenkins pipelines and Terraform-managed Azure infrastructure. Outside coursework I run a Proxmox homelab with Docker and Cloudflare Tunnels, because the fastest way to learn infrastructure is to break it at 2am and fix it yourself.",
  skills: [
    "Java",
    "Spring Boot",
    "Spring AI",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "GCP",
    "Azure",
    "React",
    "Python",
  ],
  projects: [
    {
      name: "AviClear — AI-Powered Aviation Briefing API",
      description:
        "Spring AI aviation API that translates METARs, TAFs, and NOTAMs into plain English via OpenAI GPT-4 function-calling. RAG retrieval over 2,400+ FAA documents loaded into PGVector. Deployed to GKE with Terraform-provisioned infra, GitHub Actions CI/CD, and kube-prometheus-stack observability.",
      github: "https://github.com/ARK2306/AviClear",
      live: "https://avi-clear.vercel.app/",
      skills: ["Spring AI", "OpenAI", "PGVector", "GKE", "Terraform"],
    },
    {
      name: "Nexus — Multi-Tenant Task Management API",
      description:
        "Production-grade multi-tenant REST API with Spring Boot and Spring Security 6. Tenant isolation enforced at the service layer via org-scoped JWT claims and a TenantContext ThreadLocal — cross-tenant access returns 403, never 404. PostgreSQL with Flyway, MapStruct DTOs, 70%+ service-layer test coverage with JUnit and Mockito, shipped via GitHub Actions to GHCR.",
      github: "https://github.com/ARK2306/multi-tenant-task-api",
      live: "https://nexus-multi-tenant-task-api.vercel.app/",
      skills: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker"],
    },
    {
      name: "Vigil — Service Health Monitoring Platform",
      description:
        "Self-hosted service monitoring platform with @Scheduled health checks every 60s, SLA computation, paginated incident history, and response-time anomaly detection. Spring AI ChatClient generates plain-English root cause summaries from incident telemetry. Deployed to bare-metal Proxmox via GitHub Actions SSH; exposed over Cloudflare Tunnel with zero open inbound ports.",
      live: "https://status.arkhomelab.com",
      skills: [
        "Spring Boot",
        "Spring AI",
        "PostgreSQL",
        "Proxmox",
        "Cloudflare",
      ],
    },
  ],
  experience: [
    {
      company: "Cloud4C (a Capgemini company)",
      title: "DevOps Engineer Intern",
      dateRange: "Jan 2024 – May 2024",
      bullets: [
        "Built Jenkins CI/CD pipelines for 6+ Spring Boot and React microservices on Azure, cutting deploy failures 30%",
        "Containerized services with Docker and ran Prometheus + Grafana for 99.9% uptime across 3 environments",
        "Automated Azure infrastructure with Terraform and Ansible, reducing environment spin-up from ~4hr to under 1hr",
        "Integrated unit and integration test execution into pre-merge gates across 6+ pipelines, surfacing 20+ alerts",
      ],
    },
    {
      company: "Srshta Tech",
      title: "Software Engineer Intern",
      dateRange: "May 2023 – Aug 2023",
      bullets: [
        "Resolved 5+ backend defects in a Spring Boot REST API across request validation, JPA, and exception flows",
        "Reproduced production bugs with debugger and SLF4J logs; instrumented logging across 3+ service modules",
        "Added Bean Validation annotations and typed exception handlers across 3+ REST endpoints",
      ],
    },
    {
      company: "Server Basket",
      title: "Software Engineer Intern",
      dateRange: "May 2022 – Aug 2022",
      bullets: [
        "Built Node.js/Express REST APIs on PostgreSQL for an internal sales/ticketing platform handling 500+ daily transactions",
        "Shipped 10+ feature endpoints for ticket assignment, lead tracking, and order workflows with JWT auth and RBAC",
        "Built React/Redux client portals (8+ screens) with OAuth, deployed to 20+ client teams in daily ops",
      ],
    },
  ],
  education: [
    {
      school: "Vanderbilt University",
      degree: "Master of Science in Computer Science",
      achievements: [
        "GPA: 3.85",
        "Coursework in distributed systems, cloud computing, and AI",
      ],
    },
  ],
};
