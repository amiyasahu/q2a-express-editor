<?php
/*
        Plugin Name: Q2A Express Editor
        Plugin URI: https://github.com/amiyasahu/q2a-express-editor
        Plugin Update Check URI: https://raw.github.com/amiyasahu/q2a-express-editor/master/qa-plugin.php
        Plugin Description: Syntax Highlighter plugin for q2a , powered by Highlighter.js
        Plugin Version: 1.0
        Plugin Date: 2014-08-14
        Plugin Author: Amiya Sahu
        Plugin Author URI: http://amiyasahu.com
        Plugin License: GPLv2
        Plugin Minimum Question2Answer Version: 1.6
*/


	if (!defined('QA_VERSION')) { // don't allow this page to be requested directly from browser
		header('Location: ../../');
		exit;
	}

	if (!defined('AMI_EXP_EDITOR_DIR')) {
	        define('AMI_EXP_EDITOR_DIR', dirname(__FILE__));
	}
	
	if (!defined('AMI_EXP_EDITOR_DIR_NAME')) {
		    define('AMI_EXP_EDITOR_DIR_NAME', basename(dirname(__FILE__)));
	}


	qa_register_plugin_layer('qa-express-layer.php', 'Q2A Express layer');
	qa_register_plugin_module('editor', 'qa-express.php', 'qa_express', 'Q2A Express Editor');
	qa_register_plugin_module('page', 'qa-express-upload.php', 'qa_express_upload', 'Q2A Express Upload');


/*
	Omit PHP closing tag to help avoid accidental output
*/