/*! YDUI v1.0.0 by YDCSS (c) 2016 Licensed MIT */ 
!function(t,e){"use strict";var n={},i=t.document,a=t.navigator&&t.navigator.userAgent||"";n.util={isMobile:!!a.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in i.documentElement,isIOS:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isWeixin:a.indexOf("MicroMessenger")>-1,parseOptions:function(t){if(e.isPlainObject(t))return t;var n=t?t.indexOf("{"):-1,i={};if(-1!=n)try{i=new Function("","var json = "+t.substr(n)+"; return JSON.parse(JSON.stringify(json));")()}catch(a){}return i}},e(t).on("load",function(){"function"==typeof FastClick&&FastClick.attach(i.body)}),e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("webkitTransitionEnd",function(){n=!0});var a=function(){n||e(i).trigger("webkitTransitionEnd")};setTimeout(a,t)},"function"==typeof define?define(n):t.YDUI=n}(window,jQuery),!function(t,e){"use strict";function n(t,n){this.$element=e(t),this.closeElement=n,this.toggleClass="actionsheet-toggle"}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e(this),o=a.data("ydui.actionsheet");o||(a.data("ydui.actionsheet",o=new n(this,t.closeElement)),t&&"object"!=e.type(t)||o.open()),"string"==e.type(t)&&o[t]&&o[t].apply(o,i)})}var a=t.document,o=e(a),r=e(a.body),s=e('<div class="mask-black"></div>');n.prototype.open=function(){var t=this;r.append(s),s.on("click.ydui.actionsheet.mask",function(){t.close()}),t.closeElement&&o.on("click.ydui.actionsheet",t.closeElement,function(){t.close()}),t.$element.addClass(t.toggleClass).trigger("open.ydui.actionsheet")},n.prototype.close=function(){var t=this;s.off("click.ydui.actionsheet.mask").remove(),t.$element.removeClass(t.toggleClass).trigger("close.ydui.actionsheet")},o.on("click.ydui.actionsheet.data-api","[data-ydui-actionsheet]",function(n){n.preventDefault();var a=t.YDUI.util.parseOptions(e(this).data("ydui-actionsheet")),o=e(a.target),r=o.data("ydui.actionsheet")?"open":a;i.call(o,r)}),e.fn.actionSheet=i}(window,jQuery),!function(t,e,n){"use strict";var i=n.dialog=n.dialog||{},a=e(t.document.body);i.confirm=function(t,i,o){var r=arguments.length;if(2>r)return void console.error("From YDUI's confirm: Please set two or three parameters!!!");if("function"!=e.type(arguments[1])&&2==r&&!arguments[1]instanceof Array)return void console.error("From YDUI's confirm: The second parameter must be a function or array!!!");2==r&&(o=i,i=t,t="提示");var s=o;"function"===e.type(o)&&(s=[{txt:"取消",color:!1},{txt:"确定",color:!0,callback:function(){o&&o()}}]);var c=e('<div id="YDUI_CONFRIM">   <div class="mask-black"></div>   <div class="m-confirm">       <div class="confirm-hd"><strong class="confirm-title">'+t+'</strong></div>       <div class="confirm-bd">'+i+"</div>   </div></div>").remove(),l=e('<div class="confirm-ft"></div>');e.each(s,function(t,i){var a;"boolean"==e.type(i.color)?a=e('<a href="javascript:;" class="confirm-btn '+(i.color?"primary":"default")+'">'+(i.txt||"")+"</a>"):"string"==e.type(i.color)&&(a=e('<a href="javascript:;" style="color: '+i.color+'">'+(i.txt||"")+"</a>")),function(t){a.on("click",function(){s[t].stay||(n.pageScroll.unlock(),c.remove()),s[t].callback&&s[t].callback()})}(t),l.append(a)}),c.find(".m-confirm").append(l),n.pageScroll.lock(),a.append(c)},i.alert=function(t,i){var o=e('<div id="YDUI_ALERT">   <div>       <div class="mask-black"></div>       <div class="m-confirm m-alert">           <div class="confirm-bd">'+(t||"YDUI Touch")+'</div>           <div class="confirm-ft">               <a href="javascript:;" class="confirm-btn primary">确定</a>           </div>       </div>   </div></div>').remove();n.pageScroll.lock(),a.append(o),o.find("a").on("click",function(){o.remove(),n.pageScroll.unlock(),"function"===e.type(i)&&i()})},i.toast=function(t,i,o,r){var s=arguments.length;if(2>s)return void console.error("From YDUI's toast: Please set two or more parameters!!!");var c=e('<div id="YDUI_TOAST">   <div class="mask-white"></div>   <div class="m-toast">       <div class="'+("error"==i?"toast-error-ico":"toast-success-ico")+'"></div>       <p class="toast-content">'+(t||"")+"</p>   </div></div>").remove();n.pageScroll.lock(),a.append(c),"function"===e.type(o)&&arguments.length>=3&&(r=o,o=2e3);var l=setTimeout(function(){clearTimeout(l),n.pageScroll.unlock(),c.remove(),"function"===e.type(r)&&r()},(~~o||2e3)+100)},i.loading=function(){return{open:function(t){var i=e('<div id="YDUI_LOADING">    <div class="mask-white"></div>    <div class="m-loading">        <div class="loading-hd">            <div class="loading-leaf loading-leaf-0"></div>            <div class="loading-leaf loading-leaf-1"></div>            <div class="loading-leaf loading-leaf-2"></div>            <div class="loading-leaf loading-leaf-3"></div>            <div class="loading-leaf loading-leaf-4"></div>            <div class="loading-leaf loading-leaf-5"></div>            <div class="loading-leaf loading-leaf-6"></div>            <div class="loading-leaf loading-leaf-7"></div>            <div class="loading-leaf loading-leaf-8"></div>            <div class="loading-leaf loading-leaf-9"></div>            <div class="loading-leaf loading-leaf-10"></div>            <div class="loading-leaf loading-leaf-11"></div>        </div>        <p class="loading-txt">'+(t||"数据加载中")+"</p>    </div></div>").remove();n.pageScroll.lock(),a.append(i)},close:function(){n.pageScroll.unlock(),e("#YDUI_LOADING").remove()}}}()}(window,jQuery,YDUI),!function(){"use strict";function t(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700;for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,r=0,s=a.length;s>r;r++)o[a[r]]=n(o[a[r]],o);t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var a=Node.prototype.removeEventListener;"click"===e?a.call(t,e,n.hijacked||n,i):a.call(t,e,n,i)},t.addEventListener=function(e,n,i){var a=Node.prototype.addEventListener;"click"===e?a.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):a.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}var e=/iP(ad|hone|od)/.test(navigator.userAgent),n=/OS [6-7]_\d/.test(navigator.userAgent);t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if("file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.focus=function(t){var e,n=["date","time","month","number","email"];t.setSelectionRange&&-1===n.indexOf(t.type)?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,i;return t.targetTouches.length>1?!0:(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i=window.getSelection(),i.rangeCount&&!i.isCollapsed?!0:(this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0))},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,i,a,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,n&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=s.tagName.toLowerCase(),"label"===a)e=this.findControl(s),e&&(this.focus(s),s=e);else if(this.needsFocus(s))return t.timeStamp-i>100||window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),"select"!==a&&(this.targetElement=null,t.preventDefault()),!1);return o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.attach=function(n,i){return e?new t(n,i):void 0},window.FastClick=t}(),!function(t,e){"use strict";function n(e,n){this.$element=t(e),this.bindEvent(n)}var i=t(e.document);n.prototype.bindEvent=function(n){var i=this,a=i.checkInView;n.call(i,a(i.$element)),t(e).on("scroll resize",function(){n.call(i,a(i.$element))})},n.prototype.checkInView=function(n){var a=i.scrollTop(),o=i.scrollTop()+t(e).height(),r=n.offset(),s=r.top,c=s+n.height(),l=0;return l=s>=a&&o>=s&&o>=c?3:s>=a&&o>s?1:c>a&&o>=c?4:a>s&&c>o?2:0},t.fn.inView=function(t){return this.each(function(){new n(this,t)})}}(jQuery,window),!function(t,e){"use strict";function n(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i||{}),this.init()}function i(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=t(this),o=a.data("ydui.keyboard");o||a.data("ydui.keyboard",o=new n(this,e)),"string"==t.type(e)&&o[e]&&o[e].apply(o,i)})}var a=t(e.document.body),o=e.YDUI.util.isMobile?"touchstart":"click";n.DEFAULTS={disorder:!1,title:"安全键盘"},n.prototype.init=function(){function e(){for(var t="",e=0;6>e;e++)t+="<li><i></i></li>";return t}var n=this;n.inputNums="",n.toggleClass="keyboard-show";var i='<div class="keyboard-head"><strong>输入数字密码</strong></div><div class="keyboard-error"></div><ul class="keyboard-password J_FillPwdBox">'+e()+"</ul>",a='<div class="keyboard-title">'+n.options.title+'</div><ul class="keyboard-numbers"></ul>';n.$element.prepend(i).append(a),n.$numsBox=n.$element.find(".keyboard-numbers"),n.$mask=t('<div class="mask-black"></div>')},n.prototype.open=function(){var t=this,e=t.$element,n=t.$numsBox;e.addClass(t.toggleClass),(t.options.disorder||1!=n.data("loaded-nums"))&&n.data("loaded-nums",1).html(t.createNumsHtml()),a.append(t.$mask),t.bindEvent()},n.prototype.close=function(){var t=this;t.$mask.remove(),t.$element.removeClass(t.toggleClass),t.unbindEvent(),t.inputNums="",t.fillPassword(),t.clearError()},n.prototype.bindEvent=function(){var e=this,n=e.$element;e.$mask.on(o+".ydui.keyboard.mask",function(t){t.preventDefault(),e.close()}),n.on(o+".ydui.keyboard.nums",".J_Nums",function(n){n.preventDefault(),e.inputNums.length>=6||(e.inputNums=e.inputNums+t(this).html(),e.clearError(),e.fillPassword())}),n.on(o+".ydui.keyboard.backspace",".J_Backspace",function(t){t.preventDefault(),e.backspace()}),n.on(o+".ydui.keyboard.cancel",".J_Cancel",function(t){t.preventDefault(),e.close()})},n.prototype.unbindEvent=function(){this.$element.off(o+".ydui.keyboard"),t(e).off("hashchange.ydui.keyboard")},n.prototype.fillPassword=function(){var e=this,n=e.inputNums,i=n.length,a=e.$element.find(".J_FillPwdBox").find("li");a.find("i").hide(),a.filter(":lt("+i+")").find("i").show(),i>=6&&e.$element.trigger(t.Event("done.ydui.keyboard",{password:n}))},n.prototype.clearError=function(){this.$element.find(".keyboard-error").html("")},n.prototype.error=function(t){var e=this;e.$element.find(".keyboard-error").html(t),e.inputNums="",e.fillPassword()},n.prototype.backspace=function(){var t=this,e=t.inputNums;e&&(t.inputNums=e.substr(0,e.length-1)),t.fillPassword()},n.prototype.createNumsHtml=function(){var e=this,n=e.createNums();e.options.disorder&&e.upsetOrder(n);var i=[];return t.each(n,function(t){t%3==0&&(t>=n.length-2?i.push('<li><a href="javascript:;" class="J_Cancel">取消</a>'+n.slice(t,t+3).join("")+'<a href="javascript:;" class="J_Backspace"></a></li>'):i.push("<li>"+n.slice(t,t+3).join("")+"</li>"))}),i.join("")},n.prototype.createNums=function(){var t=this,e=t.options.disorder;if(e&&t.cacheNums)return t.cacheNums;for(var n=[],i=1;10>=i;i++)n.push('<a href="javascript:;" class="J_Nums">'+i%10+"</div>");return e||(t.cacheNums=n),n},n.prototype.upsetOrder=function(t){for(var e,n,i,a=Math.floor,o=Math.random,r=t.length,s=a(r/2)+1;s--;)e=a(o()*r),n=a(o()*r),e!==n&&(i=t[e],t[e]=t[n],t[n]=i);return t},t.fn.keyBoard=i}(jQuery,window),!function(t,e){"use strict";var n=t.document;e.pageScroll=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,n.addEventListener("touchmove",t))},unlock:function(){e=!1,n.removeEventListener("touchmove",t)}}}()}(window,YDUI),!function(t,e){"use strict";function n(t,e){this.pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",a.apply(this,arguments)}function i(t,e){this.pathTemplate="M 0,{center} L 100,{center}",a.apply(this,arguments)}function a(t,n){this.$element=e(t),this.options=e.extend({},a.DEFAULTS,n||{})}function o(t,a){var o=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=e(this),s=r.data("ydui.progressbar");s||("line"==a?r.data("ydui.progressbar",s=new i(this,t)):r.data("ydui.progressbar",s=new n(this,t)),t&&"object"!=e.type(t)||s.show().set()),"string"==e.type(t)&&s[t]&&s[t].apply(s,o)})}var r=t.document,s=t.YDUI.util;n.prototype=new a,n.prototype.getPathString=function(t){var e=this,n=50-t/2;return e.render(e.pathTemplate,{radius:n,"2radius":2*n})},n.prototype.initSvg=function(t){t.setAttribute("viewBox","0 0 100 100"),t.style.display="block",t.style.width="100%"},i.prototype=new a,i.prototype.getPathString=function(t){var e=this;return e.render(e.pathTemplate,{center:t/2})},i.prototype.initSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none"),t.style.width="100%",t.style.height="100%"},a.DEFAULTS={strokeWidth:4,strokeColor:"#E5E5E5",trailWidth:4,trailColor:"#646464",fill:null,progress:.5},a.prototype.set=function(t){var e=this,n=e.trailPath.getTotalLength();t||(t=e.options.progress),t>1&&(t=1),e.trailPath.style.strokeDashoffset=n-t*n},a.prototype.show=function(){var t=this,e=t.options.progress,n=t.createSvgView(),i=t.$element,a=n.trailPath,o=a.getTotalLength();return a.style.strokeDasharray=o+" "+o,i.append(n.svg),i.inView(function(n){1!=i.data("loaded")&&n>0&&(i.data("loaded",1),t.trailPath.style.strokeDashoffset=o-e*o)}),this},a.prototype.createSvgView=function(){var t=this,e=t.options,n=r.createElementNS("http://www.w3.org/2000/svg","svg");t.initSvg(n,e);var i=t.createPath(e);n.appendChild(i);var a=null;return(e.trailColor||e.trailWidth)&&(a=t.createTrailPath(e),a.style.strokeDashoffset=a.getTotalLength(),n.appendChild(a)),t.svg=n,t.trailPath=a,{svg:n,trailPath:a}},a.prototype.createTrailPath=function(t){var e=this,n=e.getPathString(t.trailWidth);return e.createPathElement(n,t.trailColor,t.trailWidth)},a.prototype.createPath=function(t){var e=this,n=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(n=t.trailWidth);var i=e.getPathString(n);return e.createPathElement(i,t.strokeColor,t.strokeWidth,t.fill)},a.prototype.createPathElement=function(t,e,n,i){var a=r.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",t),a.setAttribute("stroke",e),a.setAttribute("stroke-width",n),i?a.setAttribute("fill",i):a.setAttribute("fill-opacity","0"),a},a.prototype.render=function(t,e){var n=t;for(var i in e)if(e.hasOwnProperty(i)){var a=e[i],o="\\{"+i+"\\}",r=new RegExp(o,"g");n=n.replace(r,a)}return n},e("[data-ydui-progressbar-cricle]").each(function(){var t=e(this),n=s.parseOptions(t.data("ydui-progressbar-cricle"));o.call(t,n,"cricle")}),e("[data-ydui-progressbar-line]").each(function(){var t=e(this),n=s.parseOptions(t.data("ydui-progressbar-line"));o.call(t,n,"line")}),e.fn.progressBar=o}(window,jQuery),!function(t,e){"use strict";function n(t,n){this.$btn=e(t),this.run=n.run||!1,this.secs=n.secs||60,this.disClass=n.disClass||"",this.runStr=n.runStr||"{%s}秒后重新获取",this.resetStr=n.resetStr||"重新获取验证码",this.timer=null}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e(this),o=a.data("ydui.sendcode");o||(a.data("ydui.sendcode",o=new n(this,t)),"object"==e.type(t)&&t.run&&o.start()),"string"==e.type(t)&&o[t]&&o[t].apply(o,i)})}n.prototype.start=function(){var t=this,e=t.secs;t.$btn.html(t.getStr(e)).css("pointer-events","none").addClass(t.disClass),t.timer=setInterval(function(){e--,t.$btn.html(t.getStr(e)),0>=e&&(t.resetBtn(),clearInterval(t.timer))},1e3)},n.prototype.getStr=function(t){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)},n.prototype.resetBtn=function(){var t=this;t.$btn.html(t.resetStr).css("pointer-events","auto").removeClass(t.disClass)},e(t).on("load",function(){e("[data-ydui-sendcode]").each(function(){var n=e(this);i.call(n,t.YDUI.util.parseOptions(n.data("ydui-sendcode")))})}),e.fn.sendCode=i}(window,jQuery),!function(t,e){"use strict";function n(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i||{}),this.init()}function i(e){return this.each(function(){var i=t(this),a=i.data("ydui.slider");a||i.data("ydui.slider",new n(this,e))})}n.DEFAULTS={speed:300,autoplay:3e3,lazyLoad:!1,pagination:".slider-pagination",wrapperClass:"slider-wrapper",slideClass:"slider-item",bulletClass:"slider-pagination-item",bulletActiveClass:"slider-pagination-item-active"},n.prototype.init=function(){var t=this,e=t.options,n=t.$element;t.index=1,t.autoPlayTimer=null,t.$pagination=n.find(e.pagination),t.$wrapper=n.find("."+e.wrapperClass),t.itemNums=t.$wrapper.find("."+e.slideClass).length,e.lazyLoad&&t.loadImage(0),t.createBullet(),t.cloneItem().bindEvent()},n.prototype.bindEvent=function(){var n=this,i=n.touchEvents();n.$wrapper.find("."+n.options.slideClass).on(i.start,function(t){n.onTouchStart(t)}).on(i.move,function(t){n.onTouchMove(t)}).on(i.end,function(t){n.onTouchEnd(t)}),t(e).on("resize",function(){n.setSlidesSize()}),~~n.options.autoplay>0&&n.autoPlay(),n.$wrapper.on("click",function(t){n.touches.allowClick||t.preventDefault()})},n.prototype.cloneItem=function(){var t=this,e=t.$wrapper,n=t.$wrapper.find("."+t.options.slideClass),i=n.filter(":first-child").clone(),a=n.filter(":last-child").clone();return e.prepend(a),e.append(i),t.setSlidesSize(),t},n.prototype.createBullet=function(){var t=this;if(t.$pagination[0]){var e='<span class="'+(t.options.bulletClass+" "+t.options.bulletActiveClass)+'"></span>';t.$pagination.append(e+new Array(t.itemNums).join('<span class="'+t.options.bulletClass+'"></span>'))}},n.prototype.activeBullet=function(){var t=this;if(t.$pagination[0]){var e=t.itemNums,n=t.index%e>=e?0:t.index%e-1,i=t.options.bulletActiveClass;!!t.$pagination[0]&&t.$pagination.find("."+t.options.bulletClass).removeClass(i).eq(n).addClass(i)}},n.prototype.setSlidesSize=function(){var t=this,e=t.$wrapper.width();t.$wrapper.css("transform","translate3d(-"+e+"px,0,0)"),t.$wrapper.find("."+t.options.slideClass).css({width:e})},n.prototype.autoPlay=function(){var t=this;t.autoPlayTimer=setInterval(function(){t.index>t.itemNums&&(t.index=1,t.setTranslate(0,-t.$wrapper.width())),t.setTranslate(t.options.speed,-(++t.index*t.$wrapper.width()))},t.options.autoplay)},n.prototype.stopAutoplay=function(){var t=this;return clearInterval(t.autoPlayTimer),t},n.prototype.loadImage=function(t){var e=this,n=e.$wrapper.find("."+e.options.slideClass).eq(t).find("img"),i=n.data("src");1!=n.data("load")&&!!i&&n.attr("src",i).data("load",1)},n.prototype.setTranslate=function(t,e){var n=this;n.options.lazyLoad&&n.loadImage(n.index),n.activeBullet(),n.$wrapper.css({transitionDuration:t+"ms",transform:"translate3d("+e+"px,0,0)"})},n.prototype.touches={moveTag:0,startClientX:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1},n.prototype.onTouchStart=function(t){t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,n=e.touches;if(n.allowClick=!0,n.isTouchEvent="touchstart"===t.type,(n.isTouchEvent||!("which"in t)||3!==t.which)&&0==n.moveTag){n.moveTag=1,n.startClientX=t.clientX,n.touchStartTime=Date.now();var i=e.itemNums;if(0==e.index)return e.index=i,void e.setTranslate(0,-i*e.$wrapper.width());e.index>i&&(e.index=1,e.setTranslate(0,-e.$wrapper.width()))}},n.prototype.onTouchMove=function(t){t.preventDefault(),t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,n=e.touches;if(n.allowClick=!1,!n.isTouchEvent||"mousemove"!==t.type){var i=n.moveOffset=t.clientX-n.startClientX;0!=i&&0!=n.moveTag&&(1==n.moveTag&&(e.stopAutoplay(),n.moveTag=2),2==n.moveTag&&e.setTranslate(0,-e.index*e.$wrapper.width()+i))}},n.prototype.onTouchEnd=function(){var t=this,e=t.options.speed,n=t.$wrapper.width(),i=t.touches,a=i.moveOffset;if(setTimeout(function(){i.allowClick=!0},0),1==i.moveTag&&(i.moveTag=0),2==i.moveTag){i.moveTag=0;var o=Date.now()-i.touchStartTime;o>300&&Math.abs(a)<=.5*t.$wrapper.width()?t.setTranslate(e,-t.index*t.$wrapper.width()):t.setTranslate(e,-((a>0?--t.index:++t.index)*n))}},n.prototype.touchEvents=function(){var t=e.Modernizr&&!!e.Modernizr.touch||function(){return!!("ontouchstart"in e||e.DocumentTouch&&document instanceof DocumentTouch)}();return{start:t?"touchstart":"mousedown",move:t?"touchmove":"mousemove",end:t?"touchend":"mouseup"}},t(e).on("load",function(){t("[data-ydui-slider]").each(function(){var n=t(this);n.slider(e.YDUI.util.parseOptions(n.data("ydui-slider")))})}),t.fn.slider=i}(jQuery,window),!function(t,e){"use strict";function n(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i||{}),this.init(),this.bindEvent(),this.transitioning=!1}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e(this),o=a.data("ydui.tab");o||a.data("ydui.tab",o=new n(e(this),t)),"string"==e.type(t)&&o[t]&&o[t].apply(o,i)})}n.TRANSITION_DURATION=150,n.DEFAULTS={nav:".tab-nav-item",panel:".tab-panel-item",activeClass:"tab-active"},n.prototype.init=function(){var t=this,e=t.$element;t.$nav=e.find(t.options.nav),t.$panel=e.find(t.options.panel)},n.prototype.bindEvent=function(){var t=this;t.$nav.each(function(n){e(this).on("click.ydui.tab",function(){t.open(n)})})},n.prototype.open=function(t){var n=this;t="number"==e.type(t)?t:n.$nav.filter(t).index();var i=n.$nav.eq(t);n.transitioning||i.hasClass(n.options.activeClass)||(n.transitioning=!0,i.trigger(e.Event("open.ydui.tab",{index:t})),n.active(i,n.$nav),n.active(n.$panel.eq(t),n.$panel,function(){i.trigger({type:"opened.ydui.tab",index:t}),n.transitioning=!1}))},n.prototype.active=function(t,i,a){function o(){"function"==e.type(a)&&a()}var r=this,s=r.options.activeClass,c=i.filter("."+s);t.one("webkitTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION),c.removeClass(s),t.addClass(s)},e(t).on("load",function(){e("[data-ydui-tab]").each(function(){var n=e(this);n.tab(t.YDUI.util.parseOptions(n.data("ydui-tab")))})}),e.fn.tab=i}(window,jQuery),!function(win,$){"use strict";function storage(t){var e=util;return{set:function(n,i){t.setItem(n,e.serialize(i))},get:function(n){return e.deserialize(t.getItem(n))},remove:function(e){t.removeItem(e)},clear:function(){t.clear()}}}var util=win.YDUI.util=win.YDUI.util||{},doc=win.document;util.timestampTotime=function(t,e){var n={},i=Math.floor,a=function(t){return 10>t?"0"+t:t};n.f=e%1e3,e=i(e/1e3),n.s=e%60,e=i(e/60),n.m=e%60,e=i(e/60),n.h=e%24,n.d=i(e/24);var o=function(t){return"$1"+a(t)+"$2"};return t=t.replace(/\{([^{]*?)%d(.*?)\}/g,o(n.d)),t=t.replace(/\{([^{]*?)%h(.*?)\}/g,o(n.h)),t=t.replace(/\{([^{]*?)%m(.*?)\}/g,o(n.m)),t=t.replace(/\{([^{]*?)%s(.*?)\}/g,o(n.s)),t=t.replace(/\{([^{]*?)%f(.*?)\}/g,o(n.f))},util.countdown=function(t,e,n){var i=this,a=(new Date).getTime(),o=setInterval(function(){var r=(new Date).getTime(),s=e-r+a;s>0?n(i.timestampTotime(t,s)):(clearInterval(o),"function"==$.type(n)&&n(""))},50)},util.calc=function(arg1,arg2,op){var ra=1,rb=1,m;try{ra=arg1.toString().split(".")[1].length}catch(e){}try{rb=arg2.toString().split(".")[1].length}catch(e){}switch(m=Math.pow(10,Math.max(ra,rb)),op){case"+":case"-":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m);break;case"*":ra=Math.pow(10,ra),rb=Math.pow(10,rb),m=ra*rb,arg1=Math.round(arg1*ra),arg2=Math.round(arg2*rb);break;case"/":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m),m=1}try{var result=eval("(("+arg1+")"+op+"("+arg2+"))/"+m)}catch(e){}return result},util.getImgBase64=function(t,e){var n=this,i="",a=t.files[0];if(a){if(!/image\/\w+/.test(a.type))return void n.tipMes("请上传图片文件","error");var o=new FileReader;o.readAsDataURL(a),o.onload=function(){i=this.result,"function"===$.type(e)&&e(i)}}},util.getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=win.location.search.substr(1).match(e),i="";return null!=n&&(i=decodeURIComponent(n[2])),i},util.serialize=function(t){return"string"===$.type(t)?t:JSON.stringify(t)},util.deserialize=function(t){if("string"===$.type(t))try{return JSON.parse(t)}catch(e){return t||void 0}},util.localStorage=function(){return storage(win.localStorage)}(),util.sessionStorage=function(){return storage(win.sessionStorage)}(),util.cookie=function(){return{get:function(t){var e=doc.cookie.match("(?:^|;)\\s*"+t+"=([^;]*)");return e&&e[1]?decodeURIComponent(e[1]):""},set:function(t,e,n,i,a,o){var r=String(encodeURIComponent(e)),s=n;"number"===$.type(s)&&(s=new Date,s.setTime(s.getTime()+1e3*n)),s instanceof Date&&(r+="; expires="+s.toUTCString()),!!i&&(r+="; domain="+i),r+="; path="+(a||"/"),o&&(r+="; secure"),doc.cookie=t+"="+r}}}()}(window,jQuery);