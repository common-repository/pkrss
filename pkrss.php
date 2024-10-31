<?php 
/**
 * @package pkrss
 * @version 1.0.2
 */
/*
Plugin Name: pkrss
Plugin URI: http://wordpress.org/plugins/pkrss/
Description: Support all over the world Popular RSS news,and translate many language with your mother language. 
Author: liandeliang@gmail.com
Version: 1.0.2
Author URI: http://www.pkrss.com
*/
	
	// http://www.paulund.co.uk/add-menu-item-to-wordpress-admin
	// add_menu_page( "pkrss", "pkrss", 0, "wordpress_topmenu_pkrss", "on_topmenu_pkrss_click", "wp-content/plugins/pkrss/pkrss/images/64x64.png", 20 ); 
	
	// Code for my main menu
	
	function add_pkrss_menu($args) {
		return str_replace('</ul>', '<li class="page_item"><a href="?pagename=__pkrss" title="Global news page">PKRSS</a></li></ul>', $args);
	}
	add_filter('wp_page_menu','add_pkrss_menu');


	function on_404_pkrss($loaded) {
		//var_dump($loaded);exit();
		if(isset($_SERVER['QUERY_STRING'])){
			if($_SERVER['QUERY_STRING'] == 'pagename=__pkrss'){
				$loaded =  'wp-content/plugins/pkrss/page_pkrss.php';
				status_header( 200 );
			}
		}
		return $loaded;
	}
	add_filter('404_template', 'on_404_pkrss');
?>