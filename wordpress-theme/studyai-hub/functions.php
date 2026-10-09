<?php
/**
 * StudyAI Hub – WordPress Theme Functions & Definitions
 * Built for CSET489 SEO Mini-Project
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function studyai_hub_setup() {
    // Add default title tag support
    add_theme_support('title-tag');
    // Add post thumbnails support
    add_theme_support('post-thumbnails');
    // Add HTML5 markup support
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    // Register Nav Menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation Menu', 'studyai-hub'),
        'footer'  => __('Footer Navigation Menu', 'studyai-hub'),
    ));
}
add_action('after_setup_theme', 'studyai_hub_setup');

// Enqueue Styles & Scripts
function studyai_hub_scripts() {
    wp_enqueue_style('studyai-main-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('studyai-main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'studyai_hub_scripts');

// Register Custom Post Type: AI Tools (ai_tool)
function studyai_register_ai_tool_cpt() {
    $labels = array(
        'name'               => _x('AI Tools', 'post type general name', 'studyai-hub'),
        'singular_name'      => _x('AI Tool', 'post type singular name', 'studyai-hub'),
        'menu_name'          => _x('AI Tools', 'admin menu', 'studyai-hub'),
        'name_admin_bar'     => _x('AI Tool', 'add new on admin bar', 'studyai-hub'),
        'add_new'            => _x('Add New', 'ai tool', 'studyai-hub'),
        'add_new_item'       => __('Add New AI Tool', 'studyai-hub'),
        'new_item'           => __('New AI Tool', 'studyai-hub'),
        'edit_item'          => __('Edit AI Tool', 'studyai-hub'),
        'view_item'          => __('View AI Tool', 'studyai-hub'),
        'all_items'          => __('All AI Tools', 'studyai-hub'),
        'search_items'       => __('Search AI Tools', 'studyai-hub'),
        'not_found'          => __('No AI Tools found.', 'studyai-hub'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'ai-tool-reviews', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => 'ai-tool-reviews',
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-superhero-alt',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );

    register_post_type('ai_tool', $args);
}
add_action('init', 'studyai_register_ai_tool_cpt');

// Register Taxonomy: Tool Categories
function studyai_register_tool_taxonomies() {
    $labels = array(
        'name'              => _x('Tool Categories', 'taxonomy general name', 'studyai-hub'),
        'singular_name'     => _x('Tool Category', 'taxonomy singular name', 'studyai-hub'),
        'search_items'      => __('Search Tool Categories', 'studyai-hub'),
        'all_items'         => __('All Tool Categories', 'studyai-hub'),
        'edit_item'         => __('Edit Tool Category', 'studyai-hub'),
        'update_item'       => __('Update Tool Category', 'studyai-hub'),
        'add_new_item'      => __('Add New Tool Category', 'studyai-hub'),
        'new_item_name'     => __('New Tool Category Name', 'studyai-hub'),
        'menu_name'         => __('Tool Categories', 'studyai-hub'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'tool-category'),
        'show_in_rest'      => true,
    );

    register_taxonomy('tool_category', array('ai_tool'), $args);
}
add_action('init', 'studyai_register_tool_taxonomies');

// Rank Math / Yoast SEO JSON-LD Custom Schema Filter
add_filter('rank_math/json_ld', function($data, $jsonld) {
    if (is_singular('ai_tool')) {
        $post_id = get_the_ID();
        $pricing = get_post_meta($post_id, 'student_pricing', true) ?: 'Free Student Access Available';
        $data['SoftwareApplication'] = array(
            '@type' => 'SoftwareApplication',
            'name' => get_the_title(),
            'applicationCategory' => 'DeveloperApplication',
            'operatingSystem' => 'Cross-platform',
            'offers' => array(
                '@type' => 'Offer',
                'price' => '0',
                'priceCurrency' => 'USD',
                'description' => esc_html($pricing)
            )
        );
    }
    return $data;
}, 99, 2);
