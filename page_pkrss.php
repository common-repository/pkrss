<?php

	get_header(); 
	
	$basesrc = 'wp-content/plugins/pkrss/src/min/';
?>
<!--
	<div id="primary" class="site-content">
		<div id="content" role="main">
-->
			<div id="pkrss_oem_container" data-oem="wordpress" style="display:inline-block;width:100%;"></div>
			<script type="text/javascript">window.pk_oem_basesrc = "<?php echo $basesrc ?>";</script>
			<script type="text/javascript" src="<?php echo $basesrc ?>js/newspaper/controller/oem_bootstrap.js"></script>
<!--
		</div> 
	</div> #primary 

<?php get_sidebar(); ?> -->
<?php get_footer(); ?>