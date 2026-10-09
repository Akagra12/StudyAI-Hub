// StudyAI Hub – Interactive UI, Theme Engine, Tool Finder & Comparison Logic
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Theme Engine (Dark / Light Mode)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('studyai_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('studyai_theme', theme);
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = theme === 'light' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    });
  }

  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  });

  // 2. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const siteNav = document.getElementById('siteNav');
  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const isExpanded = siteNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // 3. Tool Search & Category Filter
  const searchInput = document.getElementById('toolSearchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.tool-item-card');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterTools() {
    let visibleCount = 0;
    toolCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.card-text')?.textContent || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      const bestFor = (card.querySelector('.card-best-for')?.textContent || '').toLowerCase();

      const matchesCat = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = !searchQuery || 
        title.includes(searchQuery) || 
        desc.includes(searchQuery) || 
        tags.includes(searchQuery) ||
        bestFor.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const noResultsMsg = document.getElementById('noResultsMessage');
    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterTools();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterTools();
    });
  });

  // 4. Interactive "AI Tool Finder" (Wizard Filter)
  const finderCategory = document.getElementById('finderCategory');
  const finderTask = document.getElementById('finderTask');
  const finderPricing = document.getElementById('finderPricing');
  const finderResetBtn = document.getElementById('finderResetBtn');

  function runToolFinder() {
    if (!finderCategory || !finderTask || !finderPricing) return;

    const catVal = finderCategory.value;
    const taskVal = finderTask.value;
    const priceVal = finderPricing.value;

    let visibleCount = 0;
    toolCards.forEach(card => {
      const cat = card.getAttribute('data-category') || '';
      const price = card.getAttribute('data-pricing') || '';
      const tasks = card.getAttribute('data-task') || '';

      const matchCat = catVal === 'all' || cat === catVal;
      const matchPrice = priceVal === 'all' || price === priceVal;
      const matchTask = taskVal === 'all' || tasks.includes(taskVal);

      if (matchCat && matchPrice && matchTask) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Scroll smoothly to results if filtered
    const targetGrid = document.getElementById('featured-tools');
    if (targetGrid) {
      targetGrid.scrollIntoView({ behavior: 'smooth' });
    }

    const noResultsMsg = document.getElementById('noResultsMessage');
    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (finderCategory) finderCategory.addEventListener('change', runToolFinder);
  if (finderTask) finderTask.addEventListener('change', runToolFinder);
  if (finderPricing) finderPricing.addEventListener('change', runToolFinder);
  if (finderResetBtn) {
    finderResetBtn.addEventListener('click', () => {
      finderCategory.value = 'all';
      finderTask.value = 'all';
      finderPricing.value = 'all';
      filterTools();
    });
  }

  // 5. Interactive "Compare Tools" System (Up to 3 Tools)
  const TOOL_DATA = {
    'copilot': {
      name: 'GitHub Copilot',
      category: 'Coding & IDE',
      bestFor: 'Real-time inline tab autocomplete',
      pricing: '100% Free via Student Pack',
      difficulty: 'Beginner',
      useCase: 'Boilerplate Java/C++ code, regex, unit tests in VS Code & JetBrains',
      platforms: 'VS Code, IntelliJ, PyCharm, CLion, Neovim',
      pros: 'Free for students, fast latency, supports all major languages',
      cons: 'Does not refactor full repositories at once',
      url: '/ai-tool-reviews/github-copilot/'
    },
    'cursor': {
      name: 'Cursor AI',
      category: 'Coding & IDE',
      bestFor: 'Multi-file refactoring & codebase chat',
      pricing: 'Free tier (2000 completions) / $20 Pro',
      difficulty: 'Intermediate',
      useCase: 'Capstone full-stack MERN/Django projects and debugging terminal build errors',
      platforms: 'Standalone Editor (VS Code Fork)',
      pros: 'Understands entire project repository, multi-file edits',
      cons: 'High memory usage on huge repositories',
      url: '/ai-tool-reviews/cursor-ai/'
    },
    'chatgpt-dsa': {
      name: 'ChatGPT for DSA',
      category: 'DSA & Algorithms',
      bestFor: 'Algorithm intuition & Socratic hints',
      pricing: 'Free Tier Available (GPT-4o-mini / GPT-4o)',
      difficulty: 'Beginner to Advanced',
      useCase: 'Dynamic programming recurrence relations, recursion trees, Big-O derivations',
      platforms: 'Web Browser, Mobile, Desktop App',
      pros: 'Conversational logic breakdown, dry-runs sample arrays',
      cons: 'Risk of copying answers if prompted carelessly',
      url: '/ai-tool-reviews/chatgpt-for-dsa/'
    },
    'leetcode-ai': {
      name: 'LeetCode AI Debugger',
      category: 'DSA & Diagnostics',
      bestFor: 'Failing test cases & TLE bottlenecks',
      pricing: 'Integrated with LeetCode Premium',
      difficulty: 'Intermediate',
      useCase: 'Resolving boundary conditions and off-by-one errors during timed practice',
      platforms: 'LeetCode Web Platform',
      pros: 'Zero context switching, knows exact problem test cases',
      cons: 'Requires paid LeetCode subscription',
      url: '/ai-tool-reviews/leetcode-ai-debugger/'
    },
    'colab': {
      name: 'Google Colab AI',
      category: 'Machine Learning',
      bestFor: 'Cloud Nvidia T4 GPU execution',
      pricing: '100% Free tier (12h GPU runtime)',
      difficulty: 'Beginner to Intermediate',
      useCase: 'Deep learning semester labs, PyTorch neural networks, Pandas pipelines',
      platforms: 'Cloud Jupyter Notebook',
      pros: 'Free cloud GPU, zero local driver installation, Google Drive sync',
      cons: 'Session timeouts after inactivity',
      url: '/ai-tool-reviews/google-colab-ai/'
    },
    'huggingface': {
      name: 'Hugging Face Hub',
      category: 'Machine Learning',
      bestFor: 'Pre-trained models, datasets & free web demos',
      pricing: '100% Free & Open Source',
      difficulty: 'Intermediate to Advanced',
      useCase: 'Fine-tuning transformers and hosting live Gradio/Streamlit capstone demos',
      platforms: 'Python API & Cloud Web Spaces',
      pros: '500,000+ open-source models, free public Spaces hosting',
      cons: 'Requires understanding of Python ML pipelines',
      url: '/ai-tool-reviews/hugging-face-hub/'
    },
    'notion-ai': {
      name: 'Notion AI for CSE',
      category: 'Study & Notes',
      bestFor: 'Semester wikis & summarizing lecture PDFs',
      pricing: 'Free Notion Plus for Students',
      difficulty: 'Beginner',
      useCase: 'Structuring Operating Systems, DBMS, and Computer Networks revision tables',
      platforms: 'Web, Windows, macOS, Mobile',
      pros: 'Markdown code blocks, LaTeX math support, structured wikis',
      cons: 'Requires initial template organization',
      url: '/ai-tool-reviews/notion-ai-for-cse/'
    },
    'interview-warmup': {
      name: 'Google Interview Warmup',
      category: 'Placement Preparation',
      bestFor: 'Spoken technical & behavioral mock practice',
      pricing: '100% Free by Google (No login)',
      difficulty: 'Beginner',
      useCase: 'On-campus placement rounds and STAR framework behavioral interview prep',
      platforms: 'Web Browser (Microphone required)',
      pros: 'Instant feedback on software engineering terminology & talking points',
      cons: 'Fixed question bank rather than dynamic follow-ups',
      url: '/ai-tool-reviews/interview-warmup-by-google/'
    }
  };

  let selectedTools = [];
  const compareBar = document.getElementById('stickyCompareBar');
  const compareCountBadge = document.getElementById('compareCountBadge');
  const openCompareModalBtn = document.getElementById('openCompareModalBtn');
  const compareModal = document.getElementById('compareModal');
  const closeCompareModalBtn = document.getElementById('closeCompareModalBtn');
  const compareTableContainer = document.getElementById('compareTableContainer');
  const clearCompareBtn = document.getElementById('clearCompareBtn');

  function updateCompareUI() {
    if (!compareBar || !compareCountBadge) return;
    
    compareCountBadge.textContent = selectedTools.length;
    if (selectedTools.length >= 2) {
      compareBar.classList.add('show');
    } else {
      compareBar.classList.remove('show');
    }

    // Sync checkboxes
    document.querySelectorAll('.compare-tool-checkbox').forEach(cb => {
      const toolId = cb.getAttribute('data-tool-id');
      cb.checked = selectedTools.includes(toolId);
      // Disable others if 3 selected
      if (!selectedTools.includes(toolId) && selectedTools.length >= 3) {
        cb.disabled = true;
      } else {
        cb.disabled = false;
      }
    });
  }

  document.querySelectorAll('.compare-tool-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const toolId = e.target.getAttribute('data-tool-id');
      if (e.target.checked) {
        if (selectedTools.length < 3 && !selectedTools.includes(toolId)) {
          selectedTools.push(toolId);
        }
      } else {
        selectedTools = selectedTools.filter(id => id !== toolId);
      }
      updateCompareUI();
    });
  });

  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      selectedTools = [];
      updateCompareUI();
    });
  }

  function renderComparisonModal() {
    if (!compareTableContainer || selectedTools.length < 2) return;

    const tools = selectedTools.map(id => TOOL_DATA[id]).filter(Boolean);
    
    let html = '<table class="compare-table"><thead><tr><th>Criteria</th>';
    tools.forEach(t => {
      html += `<th>${t.name}</th>`;
    });
    html += '</tr></thead><tbody>';

    const rows = [
      { key: 'category', label: 'Category' },
      { key: 'bestFor', label: 'Best For' },
      { key: 'pricing', label: 'Student Pricing' },
      { key: 'difficulty', label: 'Difficulty Level' },
      { key: 'useCase', label: 'B.Tech CSE Use Case' },
      { key: 'platforms', label: 'Platforms / IDEs' },
      { key: 'pros', label: 'Pros' },
      { key: 'cons', label: 'Cons' }
    ];

    rows.forEach(r => {
      html += `<tr><th>${r.label}</th>`;
      tools.forEach(t => {
        html += `<td>${t[r.key]}</td>`;
      });
      html += '</tr>';
    });

    // Action row
    html += '<tr><th>Full Review</th>';
    tools.forEach(t => {
      html += `<td><a href="${t.url}" class="btn btn-primary btn-sm">Read Review &rarr;</a></td>`;
    });
    html += '</tr></tbody></table>';

    compareTableContainer.innerHTML = html;
  }

  if (openCompareModalBtn && compareModal) {
    openCompareModalBtn.addEventListener('click', () => {
      renderComparisonModal();
      compareModal.classList.add('open');
    });
  }

  if (closeCompareModalBtn && compareModal) {
    closeCompareModalBtn.addEventListener('click', () => {
      compareModal.classList.remove('open');
    });
  }

  if (compareModal) {
    compareModal.addEventListener('click', (e) => {
      if (e.target === compareModal) {
        compareModal.classList.remove('open');
      }
    });
  }

  // 6. Accessible FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      btn.setAttribute('aria-expanded', !isExpanded);
      const icon = btn.querySelector('.faq-icon');
      if (icon) icon.textContent = isExpanded ? '+' : '−';
      
      if (answer) {
        answer.style.display = isExpanded ? 'none' : 'block';
      }
    });
  });

  // 7. Copy Code Snippet Buttons
  document.querySelectorAll('pre').forEach(pre => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code snippet');
    pre.appendChild(copyBtn);

    copyBtn.addEventListener('click', () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      });
    });
  });

  // 8. Scroll Spy for Table of Contents in Articles
  const tocLinks = document.querySelectorAll('.toc-list a[href^="#"]');
  if (tocLinks.length > 0) {
    const headers = Array.from(tocLinks).map(link => {
      const targetId = link.getAttribute('href').substring(1);
      return document.getElementById(targetId);
    }).filter(Boolean);

    window.addEventListener('scroll', () => {
      let currentActiveId = '';
      const scrollPos = window.scrollY + 120;

      headers.forEach(h => {
        if (h.offsetTop <= scrollPos) {
          currentActiveId = h.id;
        }
      });

      tocLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentActiveId}`) {
          link.classList.add('active-toc');
        } else {
          link.classList.remove('active-toc');
        }
      });
    }, { passive: true });
  }
});
