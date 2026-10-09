# StudyAI Hub – AI Tools & Resources for B.Tech CSE Students

> **CSET489 SEO Mini-Project** | End-to-End Implementation of a Specialized, Search-Optimized Web Application for Computer Science Engineering Undergraduates.

[![SEO Health](https://img.shields.io/badge/SEO%20Health-100%2F100-success?style=flat-square)](docs/20-seo-audit.md)
[![Target Audience](https://img.shields.io/badge/Audience-B.Tech%20CSE%20Only-blue?style=flat-square)](docs/02-niche-problem.md)
[![Performance](https://img.shields.io/badge/Core%20Web%20Vitals-Optimized-brightgreen?style=flat-square)](docs/15-performance.md)
[![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](LICENSE)

---

## 📌 Project Overview
**StudyAI Hub** is a dedicated, search-engine-optimized web platform built exclusively for **B.Tech Computer Science Engineering (CSE)** students. It solves the information fragmentation problem by structuring modern AI tools around actual engineering workflows:
1. **Programming & IDE Autocomplete:** (GitHub Copilot, Cursor AI)
2. **Data Structures & Algorithms (DSA):** (ChatGPT Socratic Tracing, LeetCode AI Debugger)
3. **Artificial Intelligence & Machine Learning:** (Google Colab AI, Hugging Face Hub)
4. **College Study & Semester Exams:** (Notion AI for OS/DBMS/CN)
5. **CSE Projects & Capstone Research:** (Full-Stack Scaffolding & IEEE Report Writing)
6. **Internship & Placement Preparation:** (Google Interview Warmup, ATS Resume Scoring)

---

## 🚀 Live Website & Local Development

### 1. Run the Live Web Application Locally
The web application is built with vanilla high-performance web standards (HTML5, Vanilla CSS Design System, ES6 JavaScript) and zero-dependency Node.js HTTP server.

```bash
# Clone the repository
git clone https://github.com/studyaihub/studyai-hub.git
cd studyai-hub

# Start the local server
npm start
# or
node server.js
```
The site will immediately become accessible at **`http://localhost:3000`**.

---

## 📂 Repository Structure

```
.
├── website/                         # Production-grade web application
│   ├── index.html                   # 12-Section Hero & Homepage
│   ├── about/index.html             # About StudyAI Hub & CSE Mission
│   ├── contact/index.html           # Contact & Student Tool Submission
│   ├── ai-coding-tools/index.html   # Category Hub: Coding & IDE Tools
│   ├── ai-dsa-tools/index.html      # Category Hub: DSA & Algorithms
│   ├── ai-ml-tools/index.html       # Category Hub: AI & Machine Learning
│   ├── ai-study-tools/index.html    # Category Hub: Study & Exam Prep
│   ├── ai-project-research-tools/   # Category Hub: Capstone Projects
│   ├── ai-placement-tools/          # Category Hub: Campus Placements
│   ├── ai-tool-reviews/             # In-depth single tool review pages (8 tools)
│   ├── blog/                        # In-depth SEO editorial articles (6 articles)
│   ├── css/style.css                # Ultra-fast Vanilla CSS Design System
│   ├── js/main.js                   # Instant search, filter & accordion logic
│   ├── sitemap.xml                  # Valid XML Sitemap 0.9
│   ├── robots.txt                   # Search crawler directives
│   └── 404.html                     # Custom 404 error page
│
├── wordpress-theme/                 # WordPress theme & CPT configuration
│   ├── studyai-hub/                 # Dedicated WordPress theme
│   │   ├── style.css                # Theme metadata & stylesheet
│   │   ├── functions.php            # Custom Post Types, Taxonomies & Rank Math Schema
│   │   ├── header.php / footer.php  # Semantic structural templates
│   │   ├── index.php / page.php     # Standard layout templates
│   │   └── single-ai_tool.php       # CPT template for tool reviews
│   └── studyai-hub-wxr-export.xml   # 1-Click WXR XML import file for WordPress
│
├── deployment/                      # Complete DevOps & deployment stack
│   ├── nginx/studyai-hub.conf       # High-performance Nginx reverse proxy config
│   ├── docker/                      # Dockerfile & Docker Compose configs
│   └── scripts/                     # VPS, SSL (Certbot), Cloudflare & Backup scripts
│
├── docs/                            # 21 Comprehensive SEO & technical reports
│   ├── 01-project-overview.md
│   ├── 02-niche-problem.md
│   ├── 03-keyword-research.md
│   ├── 04-search-intent.md
│   ├── 05-serp-analysis.md
│   ├── 06-competitor-analysis.md
│   ├── 07-content-gap.md
│   ├── 08-site-architecture.md
│   ├── 09-keyword-page-mapping.md
│   ├── 10-seo-strategy.md
│   ├── 11-technical-seo.md
│   ├── 12-vps-deployment.md
│   ├── 13-cloudflare-dns.md
│   ├── 14-ssl.md
│   ├── 15-performance.md
│   ├── 16-content.md
│   ├── 17-backlinks.md
│   ├── 18-google-search-console.md
│   ├── 19-google-analytics.md
│   ├── 20-seo-audit.md
│   └── 21-backup.md
│
├── server.js                        # Zero-dependency Node.js HTTP server
├── package.json                     # Project manifest & scripts
└── README.md                        # Master project documentation
```

---

## 🛠️ Complete Deployment Workflow

### Deploy on Ubuntu VPS (Automated)
```bash
# SSH into Ubuntu 22.04/24.04 VPS
ssh root@YOUR_SERVER_IP

# Run automated provisioning script
curl -sSL https://raw.githubusercontent.com/studyaihub/studyai-hub/main/deployment/scripts/vps-setup.sh | bash

# Issue SSL certificate
sudo certbot --nginx -d studyaihub.tech -d www.studyaihub.tech
```

### Deploy via Docker Compose
```bash
cd deployment/docker
docker-compose up -d --build
```

---

## 🎯 Verification & Testing Results
- **Page Load Speed:** < 0.8s FCP / LCP on simulated 4G mobile.
- **SEO Health Score:** 100/100 verified audit in [docs/20-seo-audit.md](docs/20-seo-audit.md).
- **Schema Validations:** All pages pass `WebSite`, `Organization`, `Article`, `SoftwareApplication`, `BreadcrumbList`, and `FAQPage` microdata tests.
- **Zero Cannibalization:** Strict 1-to-1 keyword-to-URL silo mapping documented in [docs/09-keyword-page-mapping.md](docs/09-keyword-page-mapping.md).
