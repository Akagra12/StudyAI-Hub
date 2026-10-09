# 19 - Google Analytics 4 (GA4) Configuration & Event Tracking

## Analytics Framework
Google Analytics 4 (GA4) tracks student engagement, session durations, scroll depth, and outbound tool clicks without violating privacy standards.

## Measurement ID & Script Implementation
GA4 is integrated asynchronously with minimal execution overhead:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-STUDYAIHUB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-STUDYAIHUB', {
    'anonymize_ip': true,
    'send_page_view': true
  });
</script>
```

## Custom CSE Engagement Events Tracked
1. **Tool Filter Click (`filter_tool_category`):** Tracks which engineering category students filter for (e.g. `coding`, `dsa`, `ml`).
2. **Search Query (`tool_search`):** Captures real-time queries typed into the tools directory search bar.
3. **Outbound Claim Click (`outbound_student_pack`):** Measures outbound clicks to official GitHub Education, Colab, or Hugging Face portals.
4. **Article Scroll Depth (`scroll_90`):** Tracks deep reading of 10+ minute academic guides.
