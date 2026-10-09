<?php
/**
 * Single AI Tool Custom Post Type Template
 */
get_header(); ?>

<nav class="breadcrumb-nav" aria-label="Breadcrumb">
  <div class="container">
    <ul class="breadcrumb-list">
      <li class="breadcrumb-item"><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
      <li class="breadcrumb-item"><a href="<?php echo esc_url(home_url('/ai-tool-reviews/')); ?>">AI Tool Reviews</a></li>
      <li class="breadcrumb-item active" aria-current="page"><?php the_title(); ?></li>
    </ul>
  </div>
</nav>

<main class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
  <?php while (have_posts()) : the_post(); ?>
    <div class="article-layout">
      <article class="article-content">
        <div class="tool-header-box">
          <span class="badge badge-category">B.Tech CSE Verified</span>
          <h1 style="font-size: 2.4rem; margin-top: 0.75rem; margin-bottom: 0.5rem;"><?php the_title(); ?></h1>
          <div style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 1.5rem;">
            <?php the_excerpt(); ?>
          </div>
        </div>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </article>

      <aside>
        <div class="sidebar-sticky">
          <h3 class="toc-title">Quick Actions</h3>
          <ul class="toc-list">
            <li><a href="<?php echo esc_url(home_url('/ai-tool-reviews/')); ?>">Browse All Tools</a></li>
            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Suggest Update</a></li>
          </ul>
        </div>
      </aside>
    </div>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>
