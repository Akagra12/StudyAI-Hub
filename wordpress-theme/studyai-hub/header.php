<?php
/**
 * Header template for StudyAI Hub WordPress Theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container header-inner">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo">
      <span class="logo-icon">AI</span>
      <span><?php bloginfo('name'); ?></span>
      <span class="brand-tagline-badge">B.Tech CSE</span>
    </a>

    <button class="mobile-toggle" id="mobileNavToggle" aria-label="Toggle Menu" aria-expanded="false">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>

    <nav class="site-nav" id="siteNav">
      <?php
      if (has_nav_menu('primary')) {
          wp_nav_menu(array(
              'theme_location' => 'primary',
              'container'      => false,
              'menu_class'     => 'nav-links',
              'fallback_cb'    => false,
          ));
      } else {
      ?>
      <ul class="nav-links">
        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-coding-tools/')); ?>">Coding</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-dsa-tools/')); ?>">DSA</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-ml-tools/')); ?>">AI/ML</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-study-tools/')); ?>">Study</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-project-research-tools/')); ?>">Projects</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-placement-tools/')); ?>">Placements</a></li>
        <li><a href="<?php echo esc_url(home_url('/blog/')); ?>">Articles</a></li>
        <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About</a></li>
        <li><a href="<?php echo esc_url(home_url('/ai-tool-reviews/')); ?>" class="nav-cta">Browse All Tools</a></li>
      </ul>
      <?php } ?>
    </nav>
  </div>
</header>
