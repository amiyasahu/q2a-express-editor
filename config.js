/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.title = false;
	config.removePlugins = 'specialchar, spellchecker, tabletools, pastetext, pastefromword';
	config.defaultLanguage = 'en';
	config.disableNativeSpellChecker = false;
	config.extraPlugins = 'pbckcode';
	config.tabSpaces = 4; 
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config


	config.toolbar = [
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat' ] },	
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ] },
		{ name: 'links', items: [ 'Link', 'Unlink'] },
		{ name: 'image', items: [ 'Image','Flash','Smiley' ] },
		{ name: 'document', items: [ 'Source' ,'CodeSnippet', 'pbckcode' ] }
	];
	
	config.extraAllowedContent= 'img[!src,alt,width,height]; p(*); a(*)';
	config.protectedSource.push('/<([\S]+)[^>]*class="preserve"[^>]*>.*<\/\1>/g' );

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.pbckcode = {
	    // An optional class to your pre tag.
	    cls : '',

	    // The syntax highlighter you will use in the output view
	    highlighter : 'PRETTIFY',

	    // An array of the available modes for you plugin.
	    // The key corresponds to the string shown in the select tag.
	    // The value correspond to the loaded file for ACE Editor.
	    modes : [ ['HTML', 'html'], ['CSS', 'css'], ['PHP', 'php'], ['JS', 'javascript'] ,['JAVA', 'java']],

	    // The theme of the ACE Editor of the plugin.
	    theme : 'monokai',

	    // Tab indentation (in spaces)
	    tab_size : '4',

	    // the root path of ACE Editor. Useful if you want to use the plugin
	    // without any Internet connection
	    // js : "http://q2a.dev/qa-plugin/ra-wysiwyg-editor/ace-min/"
	};

};

	
	
