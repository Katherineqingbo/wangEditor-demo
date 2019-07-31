
# wangEditor

## 介绍

**wangEditor** —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器。

- 官网：[www.wangEditor.com](http://www.wangeditor.com/)
- 文档：[www.kancloud.cn/wangfupeng/wangeditor3/332599](http://www.kancloud.cn/wangfupeng/wangeditor3/332599)
- 源码：[github.com/wangfupeng1988/wangEditor](https://github.com/wangfupeng1988/wangEditor) （欢迎 star）

![图片](http://images2015.cnblogs.com/blog/138012/201705/138012-20170530202905633-1840158981.png)




## 下载

- 直接下载：[https://github.com/wangfupeng1988/wangEditor/releases](https://github.com/wangfupeng1988/wangEditor/releases)
- 使用`npm`下载：`npm install wangeditor` （注意 `wangeditor` 全部是**小写字母**）
- 使用`bower`下载：`bower install wangEditor` （前提保证电脑已安装了`bower`）
- 使用CDN：[//unpkg.com/wangeditor/release/wangEditor.min.js](https://unpkg.com/wangeditor/release/wangEditor.min.js)


## 使用

```javascript
var E = window.wangEditor
var editor = new E('#div1')
editor.create()
```


## 新建 demo

- 下载源码 `git clone git@github.com:wangfupeng1988/wangEditor.git`
- 安装或者升级最新版本 node（最低`v6.x.x`）
- 进入目录，安装依赖包 `cd wangEditor && npm i`
- 安装包完成之后，windows 用户运行`npm run win-example`，Mac 用户运行`npm run example`
- 打开浏览器访问[localhost:3000/index.html](http://localhost:3000/index.html)
- 用于 React、vue 或者 angular 可查阅[文档](http://www.kancloud.cn/wangfupeng/wangeditor3/332599)中[其他](https://www.kancloud.cn/wangfupeng/wangeditor3/335783)章节中的相关介绍

## 修改wangeditor的菜单UI样式

- [原文查看](https://blog.csdn.net/qq_33010549/article/details/82782267)
- [图标生成](https://icomoon.io/)
- 选中想要的图标，打包，将font文件夹放到css同级目录下，style.css中的样式放到自己的项目中
- 使用对应的class即可

## wangEditor 全屏 & 预览 & 查看源码
- [原文查看](https://blog.csdn.net/qq_36025814/article/details/90212322)
- js

```
/**
 * @todo 全屏
 */
window.wangEditor.fullscreen = {
	// editor create之后调用
	init: function(editorSelector){
		$(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_fullscreen" href="###" οnclick="window.wangEditor.fullscreen.toggleFullscreen(\'' + editorSelector + '\')">全屏</a></div>');
	},
	toggleFullscreen: function(editorSelector){
		$(editorSelector).toggleClass('fullscreen-editor');
		if($(editorSelector + ' ._wangEditor_btn_fullscreen').text() == '全屏'){
			$(editorSelector + ' ._wangEditor_btn_fullscreen').text('退出全屏');
		}else{
			$(editorSelector + ' ._wangEditor_btn_fullscreen').text('全屏');
		}
	}
};
 
/**
 * @todo 查看源码
 */
window.wangEditor.viewsource = {
    init: function(editorSelector) {
    	$(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_viewsource" href="###" οnclick="window.wangEditor.viewsource.toggleViewsource(\'' + editorSelector + '\')">源码</a></div>');
    },
    toggleViewsource: function(editorSelector) {
    	editorHtml = editor.txt.html();
		if($(editorSelector + ' ._wangEditor_btn_viewsource').text() == '源码'){
			editorHtml = editorHtml.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
			$(editorSelector + ' ._wangEditor_btn_viewsource').text('返回');
		}else{
			editorHtml = editor.txt.text().replace(/&lt;/ig, "<").replace(/&gt;/ig, ">").replace(/&nbsp;/ig, " ");
			$(editorSelector + ' ._wangEditor_btn_viewsource').text('源码');
		}
        editor.txt.html(editorHtml);
        editor.change && editor.change();	//更新编辑器的内容
    }
}
```

- 调用

```
var E = window.wangEditor; 
var editor = new E('#contentDiv'); 
editor.create(); 
E.fullscreen.init('#contentDiv');
E.viewsource.init('#contentDiv');

```
