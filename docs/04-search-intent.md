# 04 - Search Intent Classification & Architecture Mapping

## Search Intent Fundamentals
Search intent (user intent) represents the primary objective of a searcher when entering a query into a search engine. To avoid bounce rates and maximize organic rankings, every target page on StudyAI Hub is built to fulfill a distinct user intent without overlap.

## Intent Taxonomy & Page Mapping

### 1. Informational Intent
- **User Goal:** Wants to learn, understand, or discover concepts, comparisons, and best practices.
- **Example Queries:**
  - `best AI tools for BTech CSE students`
  - `how to use AI for DSA preparation`
  - `free AI tools for computer science engineering`
- **Target Page Format:** Comprehensive long-form editorial guides, step-by-step frameworks, and category hub overviews (`/blog/*` and `/ai-*-tools/`).

### 2. Commercial / Investigation Intent
- **User Goal:** Comparing specific software tools, evaluating pricing models, student discounts, and weighing pros vs cons before adopting.
- **Example Queries:**
  - `github copilot vs cursor ai for students`
  - `is github copilot free for college students`
  - `best AI coding tools for computer science`
- **Target Page Format:** Structured single tool reviews (`/ai-tool-reviews/*`) featuring specification tables, student pricing callouts, and pros/cons matrices.

### 3. Navigational Intent
- **User Goal:** Directly navigating to specific portals or directories.
- **Example Queries:**
  - `StudyAI Hub`
  - `StudyAI Hub coding tools`
- **Target Page Format:** Homepage (`/`) and Category Hubs with clear, crawlable header and footer navigation.

### 4. Transactional Intent
- **User Goal:** Seeking immediate access, downloads, or student pack claims.
- **Example Queries:**
  - `claim github student developer pack`
  - `download cursor ai for college`
- **Target Page Format:** Direct outbound official resource links and step-by-step setup checklists embedded within each tool review page.

## Cannibalization Prevention Strategy
To ensure that multiple pages do not compete for the same query:
- **Broad Broad Category Queries** (e.g. `AI coding tools for students`) are assigned exclusively to `/ai-coding-tools/`.
- **Editorial Ranking Queries** (e.g. `best AI coding tools for CSE students`) are assigned to `/blog/best-ai-coding-tools-for-cse-students/`.
- **Specific Single Tool Queries** (e.g. `GitHub Copilot student review`) are assigned to `/ai-tool-reviews/github-copilot/`.
- **Global Brand & Aggregate Query** (e.g. `AI tools for B.Tech CSE`) is anchored on the Homepage (`/`).
