<?php

/**
 * Plugin Name:       Block Variations
 * Description:       A plugin to add block variations to WordPress core blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            heybran
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-variations
 *
 * @package BlockVariations
 */

namespace BlockVariations;

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

add_action('enqueue_block_editor_assets', function () {
	// Enqueue the block variations script to the block editor.
	wp_enqueue_script(
		'enqueue-block-variations',
		plugin_dir_url(__FILE__) . '/block-variations.js',
		['wp-blocks', 'wp-dom-ready'],
		1.0,
		false
	);

	// Enqueue the block variations style to the block editor.
	$editor_style_url   = plugin_dir_url(__FILE__) . '/block-variations.editor.css';
	wp_enqueue_style(
		'block-variations-editor-style',
		$editor_style_url,
	);
});

add_action('wp_enqueue_scripts', function () {
	// Enqueue the block variations style to the frontend.
	$frontend_style_url   = plugin_dir_url(__FILE__) . '/block-variations.frontend.css';
	wp_enqueue_style(
		'block-variations-frontend-style',
		$frontend_style_url,
	);
});
