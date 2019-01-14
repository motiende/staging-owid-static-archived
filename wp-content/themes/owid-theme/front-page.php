<?php 
	// Redirect from admin site for live urls
	if (!is_preview() && $_SERVER['HTTP_HOST'] === "owid.cloud") {
		$url = "https://ourworldindata.org" . $_SERVER['REQUEST_URI'];
		wp_redirect($url, 302);
		exit;
	}

	$themeDir = dirname(__FILE__);
	$cmd = "cd $themeDir && node dist/src/renderPage.js front";
	error_log($cmd);
	exec($cmd, $op);
	echo join("\n", $op);
?>