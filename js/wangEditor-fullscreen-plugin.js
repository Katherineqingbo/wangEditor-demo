/**
 * 全屏
 */
window.wangEditor.fullscreen = {
	// editor create之后调用
	init: function(editorSelector){
		$(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_fullscreen" href="###" onclick="window.wangEditor.fullscreen.toggleFullscreen(\'' + editorSelector + '\')"><i class="icon-enlarge2"></i></a></div>');
	},
	toggleFullscreen: function(editorSelector){
		$(editorSelector).toggleClass('fullscreen-editor');
		if($(editorSelector + ' ._wangEditor_btn_fullscreen').html() == '<i class="icon-enlarge2"></i>'){
			$(editorSelector + ' ._wangEditor_btn_fullscreen').html('<i class="icon-shrink2"></i>');
		}else{
			$(editorSelector + ' ._wangEditor_btn_fullscreen').html('<i class="icon-enlarge2"></i>');
		}
	}
};
/**
 * 查看源码
 */

window.wangEditor.viewsource = {
	init: function(editorSelector) {
		$(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_viewsource" href="###" onclick="window.wangEditor.viewsource.toggleViewsource(\'' + editorSelector + '\')"><i class="icon-embed2"></i></a></div>');
	},
	toggleViewsource: function(editorSelector) {
		editorHtml = editor.txt.html();
		if($(editorSelector + ' ._wangEditor_btn_viewsource').html() == '<i class="icon-embed2"></i>'){
			editorHtml = editorHtml.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
			$(editorSelector + ' ._wangEditor_btn_viewsource').html('<i class="icon-embed"></i>');
		}else{
			editorHtml = editor.txt.text().replace(/&lt;/ig, "<").replace(/&gt;/ig, ">").replace(/&nbsp;/ig, " ");
			$(editorSelector + ' ._wangEditor_btn_viewsource').html('<i class="icon-embed2"></i>');
		}
		editor.txt.html(editorHtml);
		editor.change && editor.change();	//更新编辑器的内容
	}
};
