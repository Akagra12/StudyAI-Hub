# 08 - Site Architecture & URL Hierarchy

## Architectural Philosophy
StudyAI Hub follows a clean, shallow-depth, hierarchical **Silo Architecture**. Every page on the website is reachable within a maximum of 2 clicks from the homepage, ensuring optimal crawl budget utilization, fast Googlebot discovery, and smooth link equity distribution.

## Complete URL Taxonomy Structure

```
https://studyaihub.tech/
├── /about/
├── /contact/
├── /sitemap.xml
├── /robots.txt
│
├── /ai-coding-tools/
├── /ai-dsa-tools/
├── /ai-ml-tools/
├── /ai-study-tools/
├── /ai-project-research-tools/
├── /ai-placement-tools/
│
├── /ai-tool-reviews/
│   ├── /github-copilot/
│   ├── /cursor-ai/
│   ├── /chatgpt-for-dsa/
│   ├── /leetcode-ai-debugger/
│   ├── /google-colab-ai/
│   ├── /hugging-face-hub/
│   ├── /notion-ai-for-cse/
│   └── /interview-warmup-by-google/
│
└── /blog/
    ├── /best-ai-tools-for-btech-cse-students/
    ├── /best-ai-coding-tools-for-cse-students/
    ├── /best-ai-tools-for-dsa-preparation/
    ├── /best-ai-tools-for-machine-learning-students/
    ├── /best-ai-tools-for-cse-projects/
    └── /best-free-ai-tools-for-computer-science-students/
```

## Internal Linking & Graph Flow
1. **Homepage to Categories:** The homepage links directly to all 6 core category hubs and featured tools.
2. **Category Hubs to Single Tool Reviews:** Category pages link to their corresponding child tools.
3. **Tool Reviews to Blog Articles:** Single reviews include contextual internal links to related guides (e.g. GitHub Copilot links to the Best Coding Tools guide).
4. **Blog Articles to Tool Reviews:** Long-form guides link directly to verified single tool reviews using descriptive, natural anchor text.
5. **Breadcrumb Navigation:** Every sub-page contains an interactive, schema-backed breadcrumb navigation trail returning to parent hubs and the home page.
