<?php

/**
 * Plugin Name:       Tour Card
 * Description:       Tour Card Block for Gutenberg Editor
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            mizan42047
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cover-video
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


function tour_card_block_init()
{
	register_block_type(__DIR__ . '/build/block');
}
add_action('init', 'tour_card_block_init');
