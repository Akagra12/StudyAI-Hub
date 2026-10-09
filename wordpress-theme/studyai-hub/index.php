<?php
/**
 * Main Template File (Fallback)
 */
get_header(); ?>

<main class="container" style="padding-top: 2.5rem; padding-bottom: 4rem;">
  <div class="section-header">
    <h1 class="section-title"><?php single_post_title(); ?></h1>
  </div>

  <div class="grid-3">
    <?php
    if (have_posts()) :
      while (have_posts()) : the_post();
    ?>
      <div class="card">
        <h2 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="card-text"><?php the_excerpt(); ?></div>
        <div class="card-meta">
          <span><?php echo get_the_date(); ?></span>
          <a href="<?php the_permalink(); ?>">Read More &rarr;</a>
        </div>
      </div>
    <?php
      endwhile;
    endif;
    ?>
  </div>
</main>

<?php get_footer(); ?>
