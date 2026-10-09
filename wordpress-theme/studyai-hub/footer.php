<?php
/**
 * Footer template for StudyAI Hub WordPress Theme
 */
?>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo" style="margin-bottom: 1rem;">
          <span class="logo-icon">AI</span>
          <span>StudyAI Hub</span>
        </a>
        <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6;">
          StudyAI Hub is the dedicated SEO resource designed exclusively for B.Tech Computer Science Engineering students.
        </p>
      </div>
      <div class="footer-col">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="<?php echo esc_url(home_url('/ai-coding-tools/')); ?>">AI Coding Tools</a></li>
          <li><a href="<?php echo esc_url(home_url('/ai-dsa-tools/')); ?>">AI DSA Tools</a></li>
          <li><a href="<?php echo esc_url(home_url('/ai-ml-tools/')); ?>">AI/ML Tools</a></li>
          <li><a href="<?php echo esc_url(home_url('/ai-study-tools/')); ?>">Study &amp; Exams</a></li>
          <li><a href="<?php echo esc_url(home_url('/ai-placement-tools/')); ?>">Placement Prep</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Key Articles</h4>
        <ul class="footer-links">
          <li><a href="<?php echo esc_url(home_url('/blog/best-ai-tools-for-btech-cse-students/')); ?>">Best AI Tools for CSE</a></li>
          <li><a href="<?php echo esc_url(home_url('/blog/best-ai-coding-tools-for-cse-students/')); ?>">Top AI Coding Tools</a></li>
          <li><a href="<?php echo esc_url(home_url('/blog/best-ai-tools-for-dsa-preparation/')); ?>">DSA AI Preparation</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About StudyAI Hub</a></li>
          <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a></li>
          <li><a href="<?php echo esc_url(home_url('/sitemap.xml')); ?>">XML Sitemap</a></li>
          <li><a href="<?php echo esc_url(home_url('/robots.txt')); ?>">Robots.txt</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; <?php echo date('Y'); ?> StudyAI Hub. Developed for B.Tech Computer Science Engineering Students. Built for CSET489 Mini-Project.</p>
      <p>SEO Optimized &bull; Fast Performance &bull; Semantic Schema</p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
