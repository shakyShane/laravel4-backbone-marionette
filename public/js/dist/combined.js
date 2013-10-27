!function(a,b){function c(a){var b=a.length,c=ib.type(a);return ib.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||"function"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}function d(a){var b=xb[a]={};return ib.each(a.match(kb)||[],function(a,c){b[c]=!0}),b}function e(a,c,d,e){if(ib.acceptData(a)){var f,g,h=ib.expando,i="string"==typeof c,j=a.nodeType,k=j?ib.cache:a,l=j?a[h]:a[h]&&h;if(l&&k[l]&&(e||k[l].data)||!i||d!==b)return l||(j?a[h]=l=_.pop()||ib.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=ib.noop)),("object"==typeof c||"function"==typeof c)&&(e?k[l]=ib.extend(k[l],c):k[l].data=ib.extend(k[l].data,c)),f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[ib.camelCase(c)]=d),i?(g=f[c],null==g&&(g=f[ib.camelCase(c)])):g=f,g}}function f(a,b,c){if(ib.acceptData(a)){var d,e,f,g=a.nodeType,i=g?ib.cache:a,j=g?a[ib.expando]:ib.expando;if(i[j]){if(b&&(f=c?i[j]:i[j].data)){ib.isArray(b)?b=b.concat(ib.map(b,ib.camelCase)):b in f?b=[b]:(b=ib.camelCase(b),b=b in f?[b]:b.split(" "));for(d=0,e=b.length;e>d;d++)delete f[b[d]];if(!(c?h:ib.isEmptyObject)(f))return}(c||(delete i[j].data,h(i[j])))&&(g?ib.cleanData([a],!0):ib.support.deleteExpando||i!=i.window?delete i[j]:i[j]=null)}}}function g(a,c,d){if(d===b&&1===a.nodeType){var e="data-"+c.replace(zb,"-$1").toLowerCase();if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:yb.test(d)?ib.parseJSON(d):d}catch(f){}ib.data(a,c,d)}else d=b}return d}function h(a){var b;for(b in a)if(("data"!==b||!ib.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function i(){return!0}function j(){return!1}function k(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function l(a,b,c){if(b=b||0,ib.isFunction(b))return ib.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return ib.grep(a,function(a){return a===b===c});if("string"==typeof b){var d=ib.grep(a,function(a){return 1===a.nodeType});if(Rb.test(b))return ib.filter(b,d,!c);b=ib.filter(b,d)}return ib.grep(a,function(a){return ib.inArray(a,b)>=0===c})}function m(a){var b=Ub.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function n(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function o(a){var b=a.getAttributeNode("type");return a.type=(b&&b.specified)+"/"+a.type,a}function p(a){var b=ec.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function q(a,b){for(var c,d=0;null!=(c=a[d]);d++)ib._data(c,"globalEval",!b||ib._data(b[d],"globalEval"))}function r(a,b){if(1===b.nodeType&&ib.hasData(a)){var c,d,e,f=ib._data(a),g=ib._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)ib.event.add(b,c,h[c][d])}g.data&&(g.data=ib.extend({},g.data))}}function s(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!ib.support.noCloneEvent&&b[ib.expando]){e=ib._data(b);for(d in e.events)ib.removeEvent(b,d,e.handle);b.removeAttribute(ib.expando)}"script"===c&&b.text!==a.text?(o(b).text=a.text,p(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),ib.support.html5Clone&&a.innerHTML&&!ib.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&bc.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function t(a,c){var d,e,f=0,g=typeof a.getElementsByTagName!==V?a.getElementsByTagName(c||"*"):typeof a.querySelectorAll!==V?a.querySelectorAll(c||"*"):b;if(!g)for(g=[],d=a.childNodes||a;null!=(e=d[f]);f++)!c||ib.nodeName(e,c)?g.push(e):ib.merge(g,t(e,c));return c===b||c&&ib.nodeName(a,c)?ib.merge([a],g):g}function u(a){bc.test(a.type)&&(a.defaultChecked=a.checked)}function v(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=yc.length;e--;)if(b=yc[e]+c,b in a)return b;return d}function w(a,b){return a=b||a,"none"===ib.css(a,"display")||!ib.contains(a.ownerDocument,a)}function x(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ib._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&w(d)&&(f[g]=ib._data(d,"olddisplay",B(d.nodeName)))):f[g]||(e=w(d),(c&&"none"!==c||!e)&&ib._data(d,"olddisplay",e?c:ib.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function y(a,b,c){var d=rc.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=ib.css(a,c+xc[f],!0,e)),d?("content"===c&&(g-=ib.css(a,"padding"+xc[f],!0,e)),"margin"!==c&&(g-=ib.css(a,"border"+xc[f]+"Width",!0,e))):(g+=ib.css(a,"padding"+xc[f],!0,e),"padding"!==c&&(g+=ib.css(a,"border"+xc[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=kc(a),g=ib.support.boxSizing&&"border-box"===ib.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=lc(a,b,f),(0>e||null==e)&&(e=a.style[b]),sc.test(e))return e;d=g&&(ib.support.boxSizingReliable||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a){var b=W,c=uc[a];return c||(c=C(a,b),"none"!==c&&c||(jc=(jc||ib("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b.documentElement),b=(jc[0].contentWindow||jc[0].contentDocument).document,b.write("<!doctype html><html><body>"),b.close(),c=C(a,b),jc.detach()),uc[a]=c),c}function C(a,b){var c=ib(b.createElement(a)).appendTo(b.body),d=ib.css(c[0],"display");return c.remove(),d}function D(a,b,c,d){var e;if(ib.isArray(b))ib.each(b,function(b,e){c||Ac.test(a)?d(a,e):D(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ib.type(b))d(a,b);else for(e in b)D(a+"["+e+"]",b[e],c,d)}function E(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(kb)||[];if(ib.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function F(a,c,d,e){function f(i){var j;return g[i]=!0,ib.each(a[i]||[],function(a,i){var k=i(c,d,e);return"string"!=typeof k||h||g[k]?h?!(j=k):b:(c.dataTypes.unshift(k),f(k),!1)}),j}var g={},h=a===Rc;return f(c.dataTypes[0])||!g["*"]&&f("*")}function G(a,c){var d,e,f=ib.ajaxSettings.flatOptions||{};for(e in c)c[e]!==b&&((f[e]?a:d||(d={}))[e]=c[e]);return d&&ib.extend(!0,a,d),a}function H(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(h in k)h in d&&(c[k[h]]=d[h]);for(;"*"===j[0];)j.shift(),f===b&&(f=a.mimeType||c.getResponseHeader("Content-Type"));if(f)for(h in i)if(i[h]&&i[h].test(f)){j.unshift(h);break}if(j[0]in d)g=j[0];else{for(h in d){if(!j[0]||a.converters[h+" "+j[0]]){g=h;break}e||(e=h)}g=g||e}return g?(g!==j[0]&&j.unshift(g),d[g]):b}function I(a,b){var c,d,e,f,g={},h=0,i=a.dataTypes.slice(),j=i[0];if(a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i[1])for(e in a.converters)g[e.toLowerCase()]=a.converters[e];for(;d=i[++h];)if("*"!==d){if("*"!==j&&j!==d){if(e=g[j+" "+d]||g["* "+d],!e)for(c in g)if(f=c.split(" "),f[1]===d&&(e=g[j+" "+f[0]]||g["* "+f[0]])){e===!0?e=g[c]:g[c]!==!0&&(d=f[0],i.splice(h--,0,d));break}if(e!==!0)if(e&&a["throws"])b=e(b);else try{b=e(b)}catch(k){return{state:"parsererror",error:e?k:"No conversion from "+j+" to "+d}}}j=d}return{state:"success",data:b}}function J(){try{return new a.XMLHttpRequest}catch(b){}}function K(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function L(){return setTimeout(function(){$c=b}),$c=ib.now()}function M(a,b){ib.each(b,function(b,c){for(var d=(ed[b]||[]).concat(ed["*"]),e=0,f=d.length;f>e;e++)if(d[e].call(a,b,c))return})}function N(a,b,c){var d,e,f=0,g=dd.length,h=ib.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$c||L(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ib.extend({},b),opts:ib.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$c||L(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ib.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(O(k,j.opts.specialEasing);g>f;f++)if(d=dd[f].call(j,a,k,j.opts))return d;return M(j,k),ib.isFunction(j.opts.start)&&j.opts.start.call(a,j),ib.fx.timer(ib.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function O(a,b){var c,d,e,f,g;for(e in a)if(d=ib.camelCase(e),f=b[d],c=a[e],ib.isArray(c)&&(f=c[1],c=a[e]=c[0]),e!==d&&(a[d]=c,delete a[e]),g=ib.cssHooks[d],g&&"expand"in g){c=g.expand(c),delete a[d];for(e in c)e in a||(a[e]=c[e],b[e]=f)}else b[d]=f}function P(a,b,c){var d,e,f,g,h,i,j,k,l,m=this,n=a.style,o={},p=[],q=a.nodeType&&w(a);c.queue||(k=ib._queueHooks(a,"fx"),null==k.unqueued&&(k.unqueued=0,l=k.empty.fire,k.empty.fire=function(){k.unqueued||l()}),k.unqueued++,m.always(function(){m.always(function(){k.unqueued--,ib.queue(a,"fx").length||k.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],"inline"===ib.css(a,"display")&&"none"===ib.css(a,"float")&&(ib.support.inlineBlockNeedsLayout&&"inline"!==B(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",ib.support.shrinkWrapBlocks||m.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(e in b)if(g=b[e],ad.exec(g)){if(delete b[e],i=i||"toggle"===g,g===(q?"hide":"show"))continue;p.push(e)}if(f=p.length){h=ib._data(a,"fxshow")||ib._data(a,"fxshow",{}),"hidden"in h&&(q=h.hidden),i&&(h.hidden=!q),q?ib(a).show():m.done(function(){ib(a).hide()}),m.done(function(){var b;ib._removeData(a,"fxshow");for(b in o)ib.style(a,b,o[b])});for(e=0;f>e;e++)d=p[e],j=m.createTween(d,q?h[d]:0),o[d]=h[d]||ib.style(a,d),d in h||(h[d]=j.start,q&&(j.end=j.start,j.start="width"===d||"height"===d?1:0))}}function Q(a,b,c,d,e){return new Q.prototype.init(a,b,c,d,e)}function R(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=xc[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function S(a){return ib.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var T,U,V=typeof b,W=a.document,X=a.location,Y=a.jQuery,Z=a.$,$={},_=[],ab="1.9.1",bb=_.concat,cb=_.push,db=_.slice,eb=_.indexOf,fb=$.toString,gb=$.hasOwnProperty,hb=ab.trim,ib=function(a,b){return new ib.fn.init(a,b,U)},jb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,kb=/\S+/g,lb=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,mb=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,nb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ob=/^[\],:{}\s]*$/,pb=/(?:^|:|,)(?:\s*\[)+/g,qb=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rb=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,sb=/^-ms-/,tb=/-([\da-z])/gi,ub=function(a,b){return b.toUpperCase()},vb=function(a){(W.addEventListener||"load"===a.type||"complete"===W.readyState)&&(wb(),ib.ready())},wb=function(){W.addEventListener?(W.removeEventListener("DOMContentLoaded",vb,!1),a.removeEventListener("load",vb,!1)):(W.detachEvent("onreadystatechange",vb),a.detachEvent("onload",vb))};ib.fn=ib.prototype={jquery:ab,constructor:ib,init:function(a,c,d){var e,f;if(!a)return this;if("string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:mb.exec(a),!e||!e[1]&&c)return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);if(e[1]){if(c=c instanceof ib?c[0]:c,ib.merge(this,ib.parseHTML(e[1],c&&c.nodeType?c.ownerDocument||c:W,!0)),nb.test(e[1])&&ib.isPlainObject(c))for(e in c)ib.isFunction(this[e])?this[e](c[e]):this.attr(e,c[e]);return this}if(f=W.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return d.find(a);this.length=1,this[0]=f}return this.context=W,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):ib.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),ib.makeArray(a,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return db.call(this)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a){var b=ib.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return ib.each(this,a,b)},ready:function(a){return ib.ready.promise().done(a),this},slice:function(){return this.pushStack(db.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},map:function(a){return this.pushStack(ib.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:cb,sort:[].sort,splice:[].splice},ib.fn.init.prototype=ib.fn,ib.extend=ib.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),"object"==typeof h||ib.isFunction(h)||(h={}),j===i&&(h=this,--i);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(ib.isPlainObject(d)||(c=ib.isArray(d)))?(c?(c=!1,g=a&&ib.isArray(a)?a:[]):g=a&&ib.isPlainObject(a)?a:{},h[e]=ib.extend(k,g,d)):d!==b&&(h[e]=d));return h},ib.extend({noConflict:function(b){return a.$===ib&&(a.$=Z),b&&a.jQuery===ib&&(a.jQuery=Y),ib},isReady:!1,readyWait:1,holdReady:function(a){a?ib.readyWait++:ib.ready(!0)},ready:function(a){if(a===!0?!--ib.readyWait:!ib.isReady){if(!W.body)return setTimeout(ib.ready);ib.isReady=!0,a!==!0&&--ib.readyWait>0||(T.resolveWith(W,[ib]),ib.fn.trigger&&ib(W).trigger("ready").off("ready"))}},isFunction:function(a){return"function"===ib.type(a)},isArray:Array.isArray||function(a){return"array"===ib.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?$[fb.call(a)]||"object":typeof a},isPlainObject:function(a){if(!a||"object"!==ib.type(a)||a.nodeType||ib.isWindow(a))return!1;try{if(a.constructor&&!gb.call(a,"constructor")&&!gb.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||gb.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw Error(a)},parseHTML:function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||W;var d=nb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=ib.buildFragment([a],b,e),e&&ib(e).remove(),ib.merge([],d.childNodes))},parseJSON:function(c){return a.JSON&&a.JSON.parse?a.JSON.parse(c):null===c?c:"string"==typeof c&&(c=ib.trim(c),c&&ob.test(c.replace(qb,"@").replace(rb,"]").replace(pb,"")))?Function("return "+c)():(ib.error("Invalid JSON: "+c),b)},parseXML:function(c){var d,e;if(!c||"string"!=typeof c)return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return d&&d.documentElement&&!d.getElementsByTagName("parsererror").length||ib.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&ib.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(sb,"ms-").replace(tb,ub)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:hb&&!hb.call("﻿ ")?function(a){return null==a?"":hb.call(a)}:function(a){return null==a?"":(a+"").replace(lb,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ib.merge(d,"string"==typeof a?[a]:a):cb.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(eb)return eb.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if("number"==typeof d)for(;d>f;f++)a[e++]=c[f];else for(;c[f]!==b;)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;for(c=!!c;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&(i[i.length]=e);else for(f in a)e=b(a[f],f,d),null!=e&&(i[i.length]=e);return bb.apply([],i)},guid:1,proxy:function(a,c){var d,e,f;return"string"==typeof c&&(f=a[c],c=a,a=f),ib.isFunction(a)?(d=db.call(arguments,2),e=function(){return a.apply(c||this,d.concat(db.call(arguments)))},e.guid=a.guid=a.guid||ib.guid++,e):b},access:function(a,c,d,e,f,g,h){var i=0,j=a.length,k=null==d;if("object"===ib.type(d)){f=!0;for(i in d)ib.access(a,c,i,d[i],!0,g,h)}else if(e!==b&&(f=!0,ib.isFunction(e)||(h=!0),k&&(h?(c.call(a,e),c=null):(k=c,c=function(a,b,c){return k.call(ib(a),c)})),c))for(;j>i;i++)c(a[i],d,h?e:e.call(a[i],i,c(a[i],d)));return f?a:k?c.call(a):j?c(a[0],d):g},now:function(){return(new Date).getTime()}}),ib.ready.promise=function(b){if(!T)if(T=ib.Deferred(),"complete"===W.readyState)setTimeout(ib.ready);else if(W.addEventListener)W.addEventListener("DOMContentLoaded",vb,!1),a.addEventListener("load",vb,!1);else{W.attachEvent("onreadystatechange",vb),a.attachEvent("onload",vb);var c=!1;try{c=null==a.frameElement&&W.documentElement}catch(d){}c&&c.doScroll&&function e(){if(!ib.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}wb(),ib.ready()}}()}return T.promise(b)},ib.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){$["[object "+b+"]"]=b.toLowerCase()}),U=ib(W);var xb={};ib.Callbacks=function(a){a="string"==typeof a?xb[a]||d(a):ib.extend({},a);var c,e,f,g,h,i,j=[],k=!a.once&&[],l=function(b){for(e=a.memory&&b,f=!0,h=i||0,i=0,g=j.length,c=!0;j&&g>h;h++)if(j[h].apply(b[0],b[1])===!1&&a.stopOnFalse){e=!1;break}c=!1,j&&(k?k.length&&l(k.shift()):e?j=[]:m.disable())},m={add:function(){if(j){var b=j.length;!function d(b){ib.each(b,function(b,c){var e=ib.type(c);"function"===e?a.unique&&m.has(c)||j.push(c):c&&c.length&&"string"!==e&&d(c)})}(arguments),c?g=j.length:e&&(i=b,l(e))}return this},remove:function(){return j&&ib.each(arguments,function(a,b){for(var d;(d=ib.inArray(b,j,d))>-1;)j.splice(d,1),c&&(g>=d&&g--,h>=d&&h--)}),this},has:function(a){return a?ib.inArray(a,j)>-1:!(!j||!j.length)},empty:function(){return j=[],this},disable:function(){return j=k=e=b,this},disabled:function(){return!j},lock:function(){return k=b,e||m.disable(),this},locked:function(){return!k},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],!j||f&&!k||(c?k.push(b):l(b)),this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!f}};return m},ib.extend({Deferred:function(a){var b=[["resolve","done",ib.Callbacks("once memory"),"resolved"],["reject","fail",ib.Callbacks("once memory"),"rejected"],["notify","progress",ib.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ib.Deferred(function(c){ib.each(b,function(b,f){var g=f[0],h=ib.isFunction(a[b])&&a[b];e[f[1]](function(){var a=h&&h.apply(this,arguments);a&&ib.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g+"With"](this===d?c.promise():this,h?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?ib.extend(a,d):d}},e={};return d.pipe=d.then,ib.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=db.call(arguments),g=f.length,h=1!==g||a&&ib.isFunction(a.promise)?g:0,i=1===h?a:ib.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?db.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=Array(g),c=Array(g),d=Array(g);g>e;e++)f[e]&&ib.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}}),ib.support=function(){var b,c,d,e,f,g,h,i,j,k,l=W.createElement("div");if(l.setAttribute("className","t"),l.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=l.getElementsByTagName("*"),d=l.getElementsByTagName("a")[0],!c||!d||!c.length)return{};f=W.createElement("select"),h=f.appendChild(W.createElement("option")),e=l.getElementsByTagName("input")[0],d.style.cssText="top:1px;float:left;opacity:.5",b={getSetAttribute:"t"!==l.className,leadingWhitespace:3===l.firstChild.nodeType,tbody:!l.getElementsByTagName("tbody").length,htmlSerialize:!!l.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:!!e.value,optSelected:h.selected,enctype:!!W.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==W.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===W.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},e.checked=!0,b.noCloneChecked=e.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!h.disabled;try{delete l.test}catch(m){b.deleteExpando=!1}e=W.createElement("input"),e.setAttribute("value",""),b.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),b.radioValue="t"===e.value,e.setAttribute("checked","t"),e.setAttribute("name","t"),g=W.createDocumentFragment(),g.appendChild(e),b.appendChecked=e.checked,b.checkClone=g.cloneNode(!0).cloneNode(!0).lastChild.checked,l.attachEvent&&(l.attachEvent("onclick",function(){b.noCloneEvent=!1}),l.cloneNode(!0).click());for(k in{submit:!0,change:!0,focusin:!0})l.setAttribute(i="on"+k,"t"),b[k+"Bubbles"]=i in a||l.attributes[i].expando===!1;return l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===l.style.backgroundClip,ib(function(){var c,d,e,f="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",g=W.getElementsByTagName("body")[0];g&&(c=W.createElement("div"),c.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",g.appendChild(c).appendChild(l),l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=l.getElementsByTagName("td"),e[0].style.cssText="padding:0;margin:0;border:0;display:none",j=0===e[0].offsetHeight,e[0].style.display="",e[1].style.display="none",b.reliableHiddenOffsets=j&&0===e[0].offsetHeight,l.innerHTML="",l.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=4===l.offsetWidth,b.doesNotIncludeMarginInBodyOffset=1!==g.offsetTop,a.getComputedStyle&&(b.pixelPosition="1%"!==(a.getComputedStyle(l,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(l,null)||{width:"4px"}).width,d=l.appendChild(W.createElement("div")),d.style.cssText=l.style.cssText=f,d.style.marginRight=d.style.width="0",l.style.width="1px",b.reliableMarginRight=!parseFloat((a.getComputedStyle(d,null)||{}).marginRight)),typeof l.style.zoom!==V&&(l.innerHTML="",l.style.cssText=f+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=3===l.offsetWidth,l.style.display="block",l.innerHTML="<div></div>",l.firstChild.style.width="5px",b.shrinkWrapBlocks=3!==l.offsetWidth,b.inlineBlockNeedsLayout&&(g.style.zoom=1)),g.removeChild(c),c=l=e=d=null)}),c=f=g=h=d=e=null,b}();var yb=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,zb=/([A-Z])/g;ib.extend({cache:{},expando:"jQuery"+(ab+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?ib.cache[a[ib.expando]]:a[ib.expando],!!a&&!h(a)},data:function(a,b,c){return e(a,b,c)},removeData:function(a,b){return f(a,b)},_data:function(a,b,c){return e(a,b,c,!0)},_removeData:function(a,b){return f(a,b,!0)},acceptData:function(a){if(a.nodeType&&1!==a.nodeType&&9!==a.nodeType)return!1;var b=a.nodeName&&ib.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),ib.fn.extend({data:function(a,c){var d,e,f=this[0],h=0,i=null;if(a===b){if(this.length&&(i=ib.data(f),1===f.nodeType&&!ib._data(f,"parsedAttrs"))){for(d=f.attributes;d.length>h;h++)e=d[h].name,e.indexOf("data-")||(e=ib.camelCase(e.slice(5)),g(f,e,i[e]));ib._data(f,"parsedAttrs",!0)}return i}return"object"==typeof a?this.each(function(){ib.data(this,a)}):ib.access(this,function(c){return c===b?f?g(f,a,ib.data(f,a)):null:(this.each(function(){ib.data(this,a,c)}),b)},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){ib.removeData(this,a)})}}),ib.extend({queue:function(a,c,d){var e;return a?(c=(c||"fx")+"queue",e=ib._data(a,c),d&&(!e||ib.isArray(d)?e=ib._data(a,c,ib.makeArray(d)):e.push(d)),e||[]):b},dequeue:function(a,b){b=b||"fx";var c=ib.queue(a,b),d=c.length,e=c.shift(),f=ib._queueHooks(a,b),g=function(){ib.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),f.cur=e,e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ib._data(a,c)||ib._data(a,c,{empty:ib.Callbacks("once memory").add(function(){ib._removeData(a,b+"queue"),ib._removeData(a,c)})})}}),ib.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),d>arguments.length?ib.queue(this[0],a):c===b?this:this.each(function(){var b=ib.queue(this,a,c);ib._queueHooks(this,a),"fx"===a&&"inprogress"!==b[0]&&ib.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ib.dequeue(this,a)})},delay:function(a,b){return a=ib.fx?ib.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=ib.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};for("string"!=typeof a&&(c=a,a=b),a=a||"fx";h--;)d=ib._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var Ab,Bb,Cb=/[\t\r\n]/g,Db=/\r/g,Eb=/^(?:input|select|textarea|button|object)$/i,Fb=/^(?:a|area)$/i,Gb=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Hb=/^(?:checked|selected)$/i,Ib=ib.support.getSetAttribute,Jb=ib.support.input;ib.fn.extend({attr:function(a,b){return ib.access(this,ib.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ib.removeAttr(this,a)})},prop:function(a,b){return ib.access(this,ib.prop,a,b,arguments.length>1)},removeProp:function(a){return a=ib.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g=0,h=this.length,i="string"==typeof a&&a;if(ib.isFunction(a))return this.each(function(b){ib(this).addClass(a.call(this,b,this.className))});if(i)for(b=(a||"").match(kb)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Cb," "):" ")){for(f=0;e=b[f++];)0>d.indexOf(" "+e+" ")&&(d+=e+" ");c.className=ib.trim(d)}return this},removeClass:function(a){var b,c,d,e,f,g=0,h=this.length,i=0===arguments.length||"string"==typeof a&&a;if(ib.isFunction(a))return this.each(function(b){ib(this).removeClass(a.call(this,b,this.className))});if(i)for(b=(a||"").match(kb)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Cb," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");c.className=a?ib.trim(d):""}return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return ib.isFunction(a)?this.each(function(c){ib(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var e,f=0,g=ib(this),h=b,i=a.match(kb)||[];e=i[f++];)h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e);else(c===V||"boolean"===c)&&(this.className&&ib._data(this,"__className__",this.className),this.className=this.className||a===!1?"":ib._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Cb," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];return arguments.length?(e=ib.isFunction(a),this.each(function(c){var f,g=ib(this);1===this.nodeType&&(f=e?a.call(this,c,g.val()):a,null==f?f="":"number"==typeof f?f+="":ib.isArray(f)&&(f=ib.map(f,function(a){return null==a?"":a+""})),d=ib.valHooks[this.type]||ib.valHooks[this.nodeName.toLowerCase()],d&&"set"in d&&d.set(this,f,"value")!==b||(this.value=f))})):f?(d=ib.valHooks[f.type]||ib.valHooks[f.nodeName.toLowerCase()],d&&"get"in d&&(c=d.get(f,"value"))!==b?c:(c=f.value,"string"==typeof c?c.replace(Db,""):null==c?"":c)):void 0}}),ib.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(ib.support.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&ib.nodeName(c.parentNode,"optgroup"))){if(b=ib(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c=ib.makeArray(b);return ib(a).find("option").each(function(){this.selected=ib.inArray(ib(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attr:function(a,c,d){var e,f,g,h=a.nodeType;return a&&3!==h&&8!==h&&2!==h?typeof a.getAttribute===V?ib.prop(a,c,d):(f=1!==h||!ib.isXMLDoc(a),f&&(c=c.toLowerCase(),e=ib.attrHooks[c]||(Gb.test(c)?Bb:Ab)),d===b?e&&f&&"get"in e&&null!==(g=e.get(a,c))?g:(typeof a.getAttribute!==V&&(g=a.getAttribute(c)),null==g?b:g):null!==d?e&&f&&"set"in e&&(g=e.set(a,d,c))!==b?g:(a.setAttribute(c,d+""),d):(ib.removeAttr(a,c),b)):void 0},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(kb);if(f&&1===a.nodeType)for(;c=f[e++];)d=ib.propFix[c]||c,Gb.test(c)?!Ib&&Hb.test(c)?a[ib.camelCase("default-"+c)]=a[d]=!1:a[d]=!1:ib.attr(a,c,""),a.removeAttribute(Ib?c:d)},attrHooks:{type:{set:function(a,b){if(!ib.support.radioValue&&"radio"===b&&ib.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;return a&&3!==h&&8!==h&&2!==h?(g=1!==h||!ib.isXMLDoc(a),g&&(c=ib.propFix[c]||c,f=ib.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]):void 0},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):Eb.test(a.nodeName)||Fb.test(a.nodeName)&&a.href?0:b}}}}),Bb={get:function(a,c){var d=ib.prop(a,c),e="boolean"==typeof d&&a.getAttribute(c),f="boolean"==typeof d?Jb&&Ib?null!=e:Hb.test(c)?a[ib.camelCase("default-"+c)]:!!e:a.getAttributeNode(c);return f&&f.value!==!1?c.toLowerCase():b
},set:function(a,b,c){return b===!1?ib.removeAttr(a,c):Jb&&Ib||!Hb.test(c)?a.setAttribute(!Ib&&ib.propFix[c]||c,c):a[ib.camelCase("default-"+c)]=a[c]=!0,c}},Jb&&Ib||(ib.attrHooks.value={get:function(a,c){var d=a.getAttributeNode(c);return ib.nodeName(a,"input")?a.defaultValue:d&&d.specified?d.value:b},set:function(a,c,d){return ib.nodeName(a,"input")?(a.defaultValue=c,b):Ab&&Ab.set(a,c,d)}}),Ib||(Ab=ib.valHooks.button={get:function(a,c){var d=a.getAttributeNode(c);return d&&("id"===c||"name"===c||"coords"===c?""!==d.value:d.specified)?d.value:b},set:function(a,c,d){var e=a.getAttributeNode(d);return e||a.setAttributeNode(e=a.ownerDocument.createAttribute(d)),e.value=c+="","value"===d||c===a.getAttribute(d)?c:b}},ib.attrHooks.contenteditable={get:Ab.get,set:function(a,b,c){Ab.set(a,""===b?!1:b,c)}},ib.each(["width","height"],function(a,c){ib.attrHooks[c]=ib.extend(ib.attrHooks[c],{set:function(a,d){return""===d?(a.setAttribute(c,"auto"),d):b}})})),ib.support.hrefNormalized||(ib.each(["href","src","width","height"],function(a,c){ib.attrHooks[c]=ib.extend(ib.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return null==d?b:d}})}),ib.each(["href","src"],function(a,b){ib.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}})),ib.support.style||(ib.attrHooks.style={get:function(a){return a.style.cssText||b},set:function(a,b){return a.style.cssText=b+""}}),ib.support.optSelected||(ib.propHooks.selected=ib.extend(ib.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),ib.support.enctype||(ib.propFix.enctype="encoding"),ib.support.checkOn||ib.each(["radio","checkbox"],function(){ib.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}}),ib.each(["radio","checkbox"],function(){ib.valHooks[this]=ib.extend(ib.valHooks[this],{set:function(a,c){return ib.isArray(c)?a.checked=ib.inArray(ib(a).val(),c)>=0:b}})});var Kb=/^(?:input|select|textarea)$/i,Lb=/^key/,Mb=/^(?:mouse|contextmenu)|click/,Nb=/^(?:focusinfocus|focusoutblur)$/,Ob=/^([^.]*)(?:\.(.+)|)$/;ib.event={global:{},add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r=ib._data(a);if(r){for(d.handler&&(j=d,d=j.handler,f=j.selector),d.guid||(d.guid=ib.guid++),(h=r.events)||(h=r.events={}),(l=r.handle)||(l=r.handle=function(a){return typeof ib===V||a&&ib.event.triggered===a.type?b:ib.event.dispatch.apply(l.elem,arguments)},l.elem=a),c=(c||"").match(kb)||[""],i=c.length;i--;)g=Ob.exec(c[i])||[],o=q=g[1],p=(g[2]||"").split(".").sort(),k=ib.event.special[o]||{},o=(f?k.delegateType:k.bindType)||o,k=ib.event.special[o]||{},m=ib.extend({type:o,origType:q,data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&ib.expr.match.needsContext.test(f),namespace:p.join(".")},j),(n=h[o])||(n=h[o]=[],n.delegateCount=0,k.setup&&k.setup.call(a,e,p,l)!==!1||(a.addEventListener?a.addEventListener(o,l,!1):a.attachEvent&&a.attachEvent("on"+o,l))),k.add&&(k.add.call(a,m),m.handler.guid||(m.handler.guid=d.guid)),f?n.splice(n.delegateCount++,0,m):n.push(m),ib.event.global[o]=!0;a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ib.hasData(a)&&ib._data(a);if(q&&(k=q.events)){for(b=(b||"").match(kb)||[""],j=b.length;j--;)if(h=Ob.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ib.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ib.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)ib.event.remove(a,n+b[j],c,d,!0);ib.isEmptyObject(k)&&(delete q.handle,ib._removeData(a,"events"))}},trigger:function(c,d,e,f){var g,h,i,j,k,l,m,n=[e||W],o=gb.call(c,"type")?c.type:c,p=gb.call(c,"namespace")?c.namespace.split("."):[];if(i=l=e=e||W,3!==e.nodeType&&8!==e.nodeType&&!Nb.test(o+ib.event.triggered)&&(o.indexOf(".")>=0&&(p=o.split("."),o=p.shift(),p.sort()),h=0>o.indexOf(":")&&"on"+o,c=c[ib.expando]?c:new ib.Event(o,"object"==typeof c&&c),c.isTrigger=!0,c.namespace=p.join("."),c.namespace_re=c.namespace?RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=b,c.target||(c.target=e),d=null==d?[c]:ib.makeArray(d,[c]),k=ib.event.special[o]||{},f||!k.trigger||k.trigger.apply(e,d)!==!1)){if(!f&&!k.noBubble&&!ib.isWindow(e)){for(j=k.delegateType||o,Nb.test(j+o)||(i=i.parentNode);i;i=i.parentNode)n.push(i),l=i;l===(e.ownerDocument||W)&&n.push(l.defaultView||l.parentWindow||a)}for(m=0;(i=n[m++])&&!c.isPropagationStopped();)c.type=m>1?j:k.bindType||o,g=(ib._data(i,"events")||{})[c.type]&&ib._data(i,"handle"),g&&g.apply(i,d),g=h&&i[h],g&&ib.acceptData(i)&&g.apply&&g.apply(i,d)===!1&&c.preventDefault();if(c.type=o,!(f||c.isDefaultPrevented()||k._default&&k._default.apply(e.ownerDocument,d)!==!1||"click"===o&&ib.nodeName(e,"a")||!ib.acceptData(e)||!h||!e[o]||ib.isWindow(e))){l=e[h],l&&(e[h]=null),ib.event.triggered=o;try{e[o]()}catch(q){}ib.event.triggered=b,l&&(e[h]=l)}return c.result}},dispatch:function(a){a=ib.event.fix(a);var c,d,e,f,g,h=[],i=db.call(arguments),j=(ib._data(this,"events")||{})[a.type]||[],k=ib.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){for(h=ib.event.handlers.call(this,a,j),c=0;(f=h[c++])&&!a.isPropagationStopped();)for(a.currentTarget=f.elem,g=0;(e=f.handlers[g++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,d=((ib.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),d!==b&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,c){var d,e,f,g,h=[],i=c.delegateCount,j=a.target;if(i&&j.nodeType&&(!a.button||"click"!==a.type))for(;j!=this;j=j.parentNode||this)if(1===j.nodeType&&(j.disabled!==!0||"click"!==a.type)){for(f=[],g=0;i>g;g++)e=c[g],d=e.selector+" ",f[d]===b&&(f[d]=e.needsContext?ib(d,this).index(j)>=0:ib.find(d,this,null,[j]).length),f[d]&&f.push(e);f.length&&h.push({elem:j,handlers:f})}return c.length>i&&h.push({elem:this,handlers:c.slice(i)}),h},fix:function(a){if(a[ib.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Mb.test(e)?this.mouseHooks:Lb.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ib.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||W),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return null==a.pageX&&null!=c.clientX&&(e=a.target.ownerDocument||W,f=e.documentElement,d=e.body,a.pageX=c.clientX+(f&&f.scrollLeft||d&&d.scrollLeft||0)-(f&&f.clientLeft||d&&d.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||d&&d.scrollTop||0)-(f&&f.clientTop||d&&d.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),a.which||g===b||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},click:{trigger:function(){return ib.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):b}},focus:{trigger:function(){if(this!==W.activeElement&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===W.activeElement&&this.blur?(this.blur(),!1):b},delegateType:"focusout"},beforeunload:{postDispatch:function(a){a.result!==b&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=ib.extend(new ib.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ib.event.trigger(e,null,b):ib.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ib.removeEvent=W.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===V&&(a[d]=null),a.detachEvent(d,c))},ib.Event=function(a,c){return this instanceof ib.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?i:j):this.type=a,c&&ib.extend(this,c),this.timeStamp=a&&a.timeStamp||ib.now(),this[ib.expando]=!0,b):new ib.Event(a,c)},ib.Event.prototype={isDefaultPrevented:j,isPropagationStopped:j,isImmediatePropagationStopped:j,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=i,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=i,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i,this.stopPropagation()}},ib.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){ib.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!ib.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),ib.support.submitBubbles||(ib.event.special.submit={setup:function(){return ib.nodeName(this,"form")?!1:(ib.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=ib.nodeName(c,"input")||ib.nodeName(c,"button")?c.form:b;d&&!ib._data(d,"submitBubbles")&&(ib.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),ib._data(d,"submitBubbles",!0))}),b)},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&ib.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return ib.nodeName(this,"form")?!1:(ib.event.remove(this,"._submit"),b)}}),ib.support.changeBubbles||(ib.event.special.change={setup:function(){return Kb.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ib.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),ib.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),ib.event.simulate("change",this,a,!0)})),!1):(ib.event.add(this,"beforeactivate._change",function(a){var b=a.target;Kb.test(b.nodeName)&&!ib._data(b,"changeBubbles")&&(ib.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||ib.event.simulate("change",this.parentNode,a,!0)}),ib._data(b,"changeBubbles",!0))}),b)},handle:function(a){var c=a.target;return this!==c||a.isSimulated||a.isTrigger||"radio"!==c.type&&"checkbox"!==c.type?a.handleObj.handler.apply(this,arguments):b},teardown:function(){return ib.event.remove(this,"._change"),!Kb.test(this.nodeName)}}),ib.support.focusinBubbles||ib.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){ib.event.simulate(b,a.target,ib.event.fix(a),!0)};ib.event.special[b]={setup:function(){0===c++&&W.addEventListener(a,d,!0)},teardown:function(){0===--c&&W.removeEventListener(a,d,!0)}}}),ib.fn.extend({on:function(a,c,d,e,f){var g,h;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(g in a)this.on(g,c,d,a[g],f);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=j;else if(!e)return this;return 1===f&&(h=e,e=function(a){return ib().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=ib.guid++)),this.each(function(){ib.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,ib(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if("object"==typeof a){for(f in a)this.off(f,c,a[f]);return this}return(c===!1||"function"==typeof c)&&(d=c,c=b),d===!1&&(d=j),this.each(function(){ib.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){ib.event.trigger(a,b,this)})},triggerHandler:function(a,c){var d=this[0];return d?ib.event.trigger(a,c,d,!0):b}}),function(a,b){function c(a){return ob.test(a+"")}function d(){var a,b=[];return a=function(c,d){return b.push(c+=" ")>y.cacheLength&&delete a[b.shift()],a[c]=d}}function e(a){return a[N]=!0,a}function f(a){var b=F.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}}function g(a,b,c,d){var e,f,g,h,i,j,k,n,o,p;if((b?b.ownerDocument||b:O)!==F&&E(b),b=b||F,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(!H&&!d){if(e=pb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&L(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return Z.apply(c,$.call(b.getElementsByTagName(a),0)),c;if((g=e[3])&&P.getByClassName&&b.getElementsByClassName)return Z.apply(c,$.call(b.getElementsByClassName(g),0)),c}if(P.qsa&&!I.test(a)){if(k=!0,n=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=l(a),(k=b.getAttribute("id"))?n=k.replace(sb,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=nb.test(a)&&b.parentNode||b,p=j.join(",")}if(p)try{return Z.apply(c,$.call(o.querySelectorAll(p),0)),c}catch(q){}finally{k||b.removeAttribute("id")}}}return u(a.replace(gb,"$1"),b,c,d)}function h(a,b){var c=b&&a,d=c&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function i(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function j(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function k(a){return e(function(b){return b=+b,e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function l(a,b){var c,d,e,f,h,i,j,k=T[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=y.preFilter;h;){(!c||(d=hb.exec(h)))&&(d&&(h=h.slice(d[0].length)||h),i.push(e=[])),c=!1,(d=jb.exec(h))&&(c=d.shift(),e.push({value:c,type:d[0].replace(gb," ")}),h=h.slice(c.length));for(f in y.filter)!(d=mb[f].exec(h))||j[f]&&!(d=j[f](d))||(c=d.shift(),e.push({value:c,type:f,matches:d}),h=h.slice(c.length));if(!c)break}return b?h.length:h?g.error(a):T(a,i).slice(0)}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=R++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=Q+" "+f;if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e)if(j=b[N]||(b[N]={}),(i=j[d])&&i[0]===k){if((h=i[1])===!0||h===x)return h===!0}else if(i=j[d]=[k],i[1]=a(b,c,g)||x,i[1]===!0)return!0}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function q(a,b,c,d,f,g){return d&&!d[N]&&(d=q(d)),f&&!f[N]&&(f=q(f,g)),e(function(e,g,h,i){var j,k,l,m=[],n=[],o=g.length,q=e||t(b||"*",h.nodeType?[h]:h,[]),r=!a||!e&&b?q:p(q,m,a,h,i),s=c?f||(e?a:o||d)?[]:g:r;if(c&&c(r,s,h,i),d)for(j=p(s,n),d(j,[],h,i),k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(e){if(f||a){if(f){for(j=[],k=s.length;k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)}for(k=s.length;k--;)(l=s[k])&&(j=f?_.call(e,l):m[k])>-1&&(e[j]=!(g[j]=l))}}else s=p(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):Z.apply(g,s)})}function r(a){for(var b,c,d,e=a.length,f=y.relative[a[0].type],g=f||y.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return _.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=y.relative[a[h].type])k=[n(o(k),c)];else{if(c=y.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!y.relative[a[d].type];d++);return q(h>1&&o(k),h>1&&m(a.slice(0,h-1)).replace(gb,"$1"),c,d>h&&r(a.slice(h,d)),e>d&&r(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function s(a,b){var c=0,d=b.length>0,f=a.length>0,h=function(e,h,i,j,k){var l,m,n,o=[],q=0,r="0",s=e&&[],t=null!=k,u=D,v=e||f&&y.find.TAG("*",k&&h.parentNode||h),w=Q+=null==u?1:Math.random()||.1;for(t&&(D=h!==F&&h,x=c);null!=(l=v[r]);r++){if(f&&l){for(m=0;n=a[m++];)if(n(l,h,i)){j.push(l);break}t&&(Q=w,x=++c)}d&&((l=!n&&l)&&q--,e&&s.push(l))}if(q+=r,d&&r!==q){for(m=0;n=b[m++];)n(s,o,h,i);if(e){if(q>0)for(;r--;)s[r]||o[r]||(o[r]=Y.call(j));o=p(o)}Z.apply(j,o),t&&!e&&o.length>0&&q+b.length>1&&g.uniqueSort(j)}return t&&(Q=w,D=u),s};return d?e(h):h}function t(a,b,c){for(var d=0,e=b.length;e>d;d++)g(a,b[d],c);return c}function u(a,b,c,d){var e,f,g,h,i,j=l(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&9===b.nodeType&&!H&&y.relative[f[1].type]){if(b=y.find.ID(g.matches[0].replace(ub,vb),b)[0],!b)return c;a=a.slice(f.shift().value.length)}for(e=mb.needsContext.test(a)?0:f.length;e--&&(g=f[e],!y.relative[h=g.type]);)if((i=y.find[h])&&(d=i(g.matches[0].replace(ub,vb),nb.test(f[0].type)&&b.parentNode||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return Z.apply(c,$.call(d,0)),c;break}}return B(a,j)(d,b,H,c,nb.test(a)),c}function v(){}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P={},Q=0,R=0,S=d(),T=d(),U=d(),V=typeof b,W=1<<31,X=[],Y=X.pop,Z=X.push,$=X.slice,_=X.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},ab="[\\x20\\t\\r\\n\\f]",bb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cb=bb.replace("w","w#"),db="([*^$|!~]?=)",eb="\\["+ab+"*("+bb+")"+ab+"*(?:"+db+ab+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cb+")|)|)"+ab+"*\\]",fb=":("+bb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+eb.replace(3,8)+")*)|.*)\\)|)",gb=RegExp("^"+ab+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ab+"+$","g"),hb=RegExp("^"+ab+"*,"+ab+"*"),jb=RegExp("^"+ab+"*([\\x20\\t\\r\\n\\f>+~])"+ab+"*"),kb=RegExp(fb),lb=RegExp("^"+cb+"$"),mb={ID:RegExp("^#("+bb+")"),CLASS:RegExp("^\\.("+bb+")"),NAME:RegExp("^\\[name=['\"]?("+bb+")['\"]?\\]"),TAG:RegExp("^("+bb.replace("w","w*")+")"),ATTR:RegExp("^"+eb),PSEUDO:RegExp("^"+fb),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ab+"*(even|odd|(([+-]|)(\\d*)n|)"+ab+"*(?:([+-]|)"+ab+"*(\\d+)|))"+ab+"*\\)|)","i"),needsContext:RegExp("^"+ab+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ab+"*((?:-\\d)?\\d*)"+ab+"*\\)|)(?=[^-]|$)","i")},nb=/[\x20\t\r\n\f]*[+~]/,ob=/^[^{]+\{\s*\[native code/,pb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,qb=/^(?:input|select|textarea|button)$/i,rb=/^h\d$/i,sb=/'|\\/g,tb=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,ub=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,vb=function(a,b){var c="0x"+b-65536;return c!==c?b:0>c?String.fromCharCode(c+65536):String.fromCharCode(55296|c>>10,56320|1023&c)};try{$.call(O.documentElement.childNodes,0)[0].nodeType}catch(wb){$=function(a){for(var b,c=[];b=this[a++];)c.push(b);return c}}A=g.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},E=g.setDocument=function(a){var d=a?a.ownerDocument||a:O;return d!==F&&9===d.nodeType&&d.documentElement?(F=d,G=d.documentElement,H=A(d),P.tagNameNoComments=f(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),P.attributes=f(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return"boolean"!==b&&"string"!==b}),P.getByClassName=f(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",a.getElementsByClassName&&a.getElementsByClassName("e").length?(a.lastChild.className="e",2===a.getElementsByClassName("e").length):!1}),P.getByName=f(function(a){a.id=N+0,a.innerHTML="<a name='"+N+"'></a><div name='"+N+"'></div>",G.insertBefore(a,G.firstChild);var b=d.getElementsByName&&d.getElementsByName(N).length===2+d.getElementsByName(N+0).length;return P.getIdNotName=!d.getElementById(N),G.removeChild(a),b}),y.attrHandle=f(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==V&&"#"===a.firstChild.getAttribute("href")})?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},P.getIdNotName?(y.find.ID=function(a,b){if(typeof b.getElementById!==V&&!H){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},y.filter.ID=function(a){var b=a.replace(ub,vb);return function(a){return a.getAttribute("id")===b}}):(y.find.ID=function(a,c){if(typeof c.getElementById!==V&&!H){var d=c.getElementById(a);return d?d.id===a||typeof d.getAttributeNode!==V&&d.getAttributeNode("id").value===a?[d]:b:[]}},y.filter.ID=function(a){var b=a.replace(ub,vb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),y.find.TAG=P.tagNameNoComments?function(a,c){return typeof c.getElementsByTagName!==V?c.getElementsByTagName(a):b}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},y.find.NAME=P.getByName&&function(a,c){return typeof c.getElementsByName!==V?c.getElementsByName(name):b},y.find.CLASS=P.getByClassName&&function(a,c){return typeof c.getElementsByClassName===V||H?b:c.getElementsByClassName(a)},J=[],I=[":focus"],(P.qsa=c(d.querySelectorAll))&&(f(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||I.push("\\["+ab+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||I.push(":checked")}),f(function(a){a.innerHTML="<input type='hidden' i=''/>",a.querySelectorAll("[i^='']").length&&I.push("[*^$]="+ab+"*(?:\"\"|'')"),a.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),I.push(",.*:")})),(P.matchesSelector=c(K=G.matchesSelector||G.mozMatchesSelector||G.webkitMatchesSelector||G.oMatchesSelector||G.msMatchesSelector))&&f(function(a){P.disconnectedMatch=K.call(a,"div"),K.call(a,"[s!='']:x"),J.push("!=",fb)}),I=RegExp(I.join("|")),J=RegExp(J.join("|")),L=c(G.contains)||G.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},M=G.compareDocumentPosition?function(a,b){var c;return a===b?(C=!0,0):(c=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b))?1&c||a.parentNode&&11===a.parentNode.nodeType?a===d||L(O,a)?-1:b===d||L(O,b)?1:0:4&c?-1:1:a.compareDocumentPosition?-1:1}:function(a,b){var c,e=0,f=a.parentNode,g=b.parentNode,i=[a],j=[b];if(a===b)return C=!0,0;if(!f||!g)return a===d?-1:b===d?1:f?-1:g?1:0;if(f===g)return h(a,b);for(c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);for(;i[e]===j[e];)e++;return e?h(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},C=!1,[0,0].sort(M),P.detectDuplicates=C,F):F},g.matches=function(a,b){return g(a,null,null,b)},g.matchesSelector=function(a,b){if((a.ownerDocument||a)!==F&&E(a),b=b.replace(tb,"='$1']"),!(!P.matchesSelector||H||J&&J.test(b)||I.test(b)))try{var c=K.call(a,b);if(c||P.disconnectedMatch||a.document&&11!==a.document.nodeType)return c}catch(d){}return g(b,F,null,[a]).length>0},g.contains=function(a,b){return(a.ownerDocument||a)!==F&&E(a),L(a,b)},g.attr=function(a,b){var c;return(a.ownerDocument||a)!==F&&E(a),H||(b=b.toLowerCase()),(c=y.attrHandle[b])?c(a):H||P.attributes?a.getAttribute(b):((c=a.getAttributeNode(b))||a.getAttribute(b))&&a[b]===!0?b:c&&c.specified?c.value:null},g.error=function(a){throw Error("Syntax error, unrecognized expression: "+a)},g.uniqueSort=function(a){var b,c=[],d=1,e=0;if(C=!P.detectDuplicates,a.sort(M),C){for(;b=a[d];d++)b===a[d-1]&&(e=c.push(d));for(;e--;)a.splice(c[e],1)}return a},z=g.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=z(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d];d++)c+=z(b);return c},y=g.selectors={cacheLength:50,createPseudo:e,match:mb,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ub,vb),a[3]=(a[4]||a[5]||"").replace(ub,vb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||g.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&g.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return mb.CHILD.test(a[0])?null:(a[4]?a[2]=a[4]:c&&kb.test(c)&&(b=l(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){return"*"===a?function(){return!0}:(a=a.replace(ub,vb).toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=S[a+" "];return b||(b=RegExp("(^|"+ab+")"+a+"("+ab+"|$)"))&&S(a,function(a){return b.test(a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=g.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===Q&&j[1],m=j[0]===Q&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[Q,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===Q)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[Q,m]),l!==b)););return m-=e,m===d||0===m%d&&m/d>=0}}},PSEUDO:function(a,b){var c,d=y.pseudos[a]||y.setFilters[a.toLowerCase()]||g.error("unsupported pseudo: "+a);return d[N]?d(b):d.length>1?(c=[a,a,"",b],y.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,c){for(var e,f=d(a,b),g=f.length;g--;)e=_.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:e(function(a){var b=[],c=[],d=B(a.replace(gb,"$1"));return d[N]?e(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:e(function(a){return function(b){return g(a,b).length>0}}),contains:e(function(a){return function(b){return(b.textContent||b.innerText||z(b)).indexOf(a)>-1}}),lang:e(function(a){return lb.test(a||"")||g.error("unsupported lang: "+a),a=a.replace(ub,vb).toLowerCase(),function(b){var c;do if(c=H?b.getAttribute("xml:lang")||b.getAttribute("lang"):b.lang)return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===G},focus:function(a){return a===F.activeElement&&(!F.hasFocus||F.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeName>"@"||3===a.nodeType||4===a.nodeType)return!1;return!0},parent:function(a){return!y.pseudos.empty(a)},header:function(a){return rb.test(a.nodeName)},input:function(a){return qb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||b.toLowerCase()===a.type)},first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[0>c?c+b:c]}),even:k(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=0>c?c+b:c;b>++d;)a.push(d);return a})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})y.pseudos[w]=i(w);for(w in{submit:!0,reset:!0})y.pseudos[w]=j(w);B=g.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(b||(b=l(a)),c=b.length;c--;)f=r(b[c]),f[N]?d.push(f):e.push(f);f=U(a,s(e,d))}return f},y.pseudos.nth=y.pseudos.eq,y.filters=v.prototype=y.pseudos,y.setFilters=new v,E(),g.attr=ib.attr,ib.find=g,ib.expr=g.selectors,ib.expr[":"]=ib.expr.pseudos,ib.unique=g.uniqueSort,ib.text=g.getText,ib.isXMLDoc=g.isXML,ib.contains=g.contains}(a);var Pb=/Until$/,Qb=/^(?:parents|prev(?:Until|All))/,Rb=/^.[^:#\[\.,]*$/,Sb=ib.expr.match.needsContext,Tb={children:!0,contents:!0,next:!0,prev:!0};ib.fn.extend({find:function(a){var b,c,d,e=this.length;if("string"!=typeof a)return d=this,this.pushStack(ib(a).filter(function(){for(b=0;e>b;b++)if(ib.contains(d[b],this))return!0}));for(c=[],b=0;e>b;b++)ib.find(a,this[b],c);return c=this.pushStack(e>1?ib.unique(c):c),c.selector=(this.selector?this.selector+" ":"")+a,c},has:function(a){var b,c=ib(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(ib.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(l(this,a,!1))},filter:function(a){return this.pushStack(l(this,a,!0))},is:function(a){return!!a&&("string"==typeof a?Sb.test(a)?ib(a,this.context).index(this[0])>=0:ib.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=Sb.test(a)||"string"!=typeof a?ib(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c.ownerDocument&&c!==b&&11!==c.nodeType;){if(g?g.index(c)>-1:ib.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}return this.pushStack(f.length>1?ib.unique(f):f)},index:function(a){return a?"string"==typeof a?ib.inArray(this[0],ib(a)):ib.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){var c="string"==typeof a?ib(a,b):ib.makeArray(a&&a.nodeType?[a]:a),d=ib.merge(this.get(),c);return this.pushStack(ib.unique(d))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ib.fn.andSelf=ib.fn.addBack,ib.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ib.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ib.dir(a,"parentNode",c)},next:function(a){return k(a,"nextSibling")},prev:function(a){return k(a,"previousSibling")},nextAll:function(a){return ib.dir(a,"nextSibling")},prevAll:function(a){return ib.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return ib.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ib.dir(a,"previousSibling",c)},siblings:function(a){return ib.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ib.sibling(a.firstChild)},contents:function(a){return ib.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ib.merge([],a.childNodes)}},function(a,b){ib.fn[a]=function(c,d){var e=ib.map(this,b,c);return Pb.test(a)||(d=c),d&&"string"==typeof d&&(e=ib.filter(d,e)),e=this.length>1&&!Tb[a]?ib.unique(e):e,this.length>1&&Qb.test(a)&&(e=e.reverse()),this.pushStack(e)}}),ib.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),1===b.length?ib.find.matchesSelector(b[0],a)?[b[0]]:[]:ib.find.matches(a,b)},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!ib(f).is(d));)1===f.nodeType&&e.push(f),f=f[c];return e},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Ub="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Vb=/ jQuery\d+="(?:null|\d+)"/g,Wb=RegExp("<(?:"+Ub+")[\\s/>]","i"),Xb=/^\s+/,Yb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Zb=/<([\w:]+)/,$b=/<tbody/i,_b=/<|&#?\w+;/,ac=/<(?:script|style|link)/i,bc=/^(?:checkbox|radio)$/i,cc=/checked\s*(?:[^=]|=\s*.checked.)/i,dc=/^$|\/(?:java|ecma)script/i,ec=/^true\/(.*)/,fc=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gc={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ib.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},hc=m(W),ic=hc.appendChild(W.createElement("div"));gc.optgroup=gc.option,gc.tbody=gc.tfoot=gc.colgroup=gc.caption=gc.thead,gc.th=gc.td,ib.fn.extend({text:function(a){return ib.access(this,function(a){return a===b?ib.text(this):this.empty().append((this[0]&&this[0].ownerDocument||W).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(ib.isFunction(a))return this.each(function(b){ib(this).wrapAll(a.call(this,b))});if(this[0]){var b=ib(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return ib.isFunction(a)?this.each(function(b){ib(this).wrapInner(a.call(this,b))}):this.each(function(){var b=ib(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ib.isFunction(a);return this.each(function(c){ib(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ib.nodeName(this,"body")||ib(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(a,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,!1,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=0;null!=(c=this[d]);d++)(!a||ib.filter(a,[c]).length>0)&&(b||1!==c.nodeType||ib.cleanData(t(c)),c.parentNode&&(b&&ib.contains(c.ownerDocument,c)&&q(t(c,"script")),c.parentNode.removeChild(c)));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&ib.cleanData(t(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&ib.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return ib.clone(this,a,b)})},html:function(a){return ib.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(Vb,""):b;if(!("string"!=typeof a||ac.test(a)||!ib.support.htmlSerialize&&Wb.test(a)||!ib.support.leadingWhitespace&&Xb.test(a)||gc[(Zb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Yb,"<$1></$2>");try{for(;e>d;d++)c=this[d]||{},1===c.nodeType&&(ib.cleanData(t(c,!1)),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){var b=ib.isFunction(a);return b||"string"==typeof a||(a=ib(a).not(this).detach()),this.domManip([a],!0,function(a){var b=this.nextSibling,c=this.parentNode;c&&(ib(this).remove(),c.insertBefore(a,b))})},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=bb.apply([],a);var e,f,g,h,i,j,k=0,l=this.length,m=this,q=l-1,r=a[0],s=ib.isFunction(r);if(s||!(1>=l||"string"!=typeof r||ib.support.checkClone)&&cc.test(r))return this.each(function(e){var f=m.eq(e);s&&(a[0]=r.call(this,e,c?f.html():b)),f.domManip(a,c,d)});if(l&&(j=ib.buildFragment(a,this[0].ownerDocument,!1,this),e=j.firstChild,1===j.childNodes.length&&(j=e),e)){for(c=c&&ib.nodeName(e,"tr"),h=ib.map(t(j,"script"),o),g=h.length;l>k;k++)f=j,k!==q&&(f=ib.clone(f,!0,!0),g&&ib.merge(h,t(f,"script"))),d.call(c&&ib.nodeName(this[k],"table")?n(this[k],"tbody"):this[k],f,k);if(g)for(i=h[h.length-1].ownerDocument,ib.map(h,p),k=0;g>k;k++)f=h[k],dc.test(f.type||"")&&!ib._data(f,"globalEval")&&ib.contains(i,f)&&(f.src?ib.ajax({url:f.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):ib.globalEval((f.text||f.textContent||f.innerHTML||"").replace(fc,"")));j=e=null}return this}}),ib.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ib.fn[a]=function(a){for(var c,d=0,e=[],f=ib(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),ib(f[d])[b](c),cb.apply(e,c.get());return this.pushStack(e)}}),ib.extend({clone:function(a,b,c){var d,e,f,g,h,i=ib.contains(a.ownerDocument,a);if(ib.support.html5Clone||ib.isXMLDoc(a)||!Wb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ic.innerHTML=a.outerHTML,ic.removeChild(f=ic.firstChild)),!(ib.support.noCloneEvent&&ib.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ib.isXMLDoc(a)))for(d=t(f),h=t(a),g=0;null!=(e=h[g]);++g)d[g]&&s(e,d[g]);if(b)if(c)for(h=h||t(a),d=d||t(f),g=0;null!=(e=h[g]);g++)r(e,d[g]);else r(a,f);return d=t(f,"script"),d.length>0&&q(d,!i&&t(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,n=m(b),o=[],p=0;l>p;p++)if(f=a[p],f||0===f)if("object"===ib.type(f))ib.merge(o,f.nodeType?[f]:f);else if(_b.test(f)){for(h=h||n.appendChild(b.createElement("div")),i=(Zb.exec(f)||["",""])[1].toLowerCase(),k=gc[i]||gc._default,h.innerHTML=k[1]+f.replace(Yb,"<$1></$2>")+k[2],e=k[0];e--;)h=h.lastChild;if(!ib.support.leadingWhitespace&&Xb.test(f)&&o.push(b.createTextNode(Xb.exec(f)[0])),!ib.support.tbody)for(f="table"!==i||$b.test(f)?"<table>"!==k[1]||$b.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)ib.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);for(ib.merge(o,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);h=n.lastChild}else o.push(b.createTextNode(f));for(h&&n.removeChild(h),ib.support.appendChecked||ib.grep(t(o,"input"),u),p=0;f=o[p++];)if((!d||-1===ib.inArray(f,d))&&(g=ib.contains(f.ownerDocument,f),h=t(n.appendChild(f),"script"),g&&q(h),c))for(e=0;f=h[e++];)dc.test(f.type||"")&&c.push(f);return h=null,n},cleanData:function(a,b){for(var c,d,e,f,g=0,h=ib.expando,i=ib.cache,j=ib.support.deleteExpando,k=ib.event.special;null!=(c=a[g]);g++)if((b||ib.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?ib.event.remove(c,d):ib.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j?delete c[h]:typeof c.removeAttribute!==V?c.removeAttribute(h):c[h]=null,_.push(e))}}});var jc,kc,lc,mc=/alpha\([^)]*\)/i,nc=/opacity\s*=\s*([^)]*)/,oc=/^(top|right|bottom|left)$/,pc=/^(none|table(?!-c[ea]).+)/,qc=/^margin/,rc=RegExp("^("+jb+")(.*)$","i"),sc=RegExp("^("+jb+")(?!px)[a-z%]+$","i"),tc=RegExp("^([+-])=("+jb+")","i"),uc={BODY:"block"},vc={position:"absolute",visibility:"hidden",display:"block"},wc={letterSpacing:0,fontWeight:400},xc=["Top","Right","Bottom","Left"],yc=["Webkit","O","Moz","ms"];ib.fn.extend({css:function(a,c){return ib.access(this,function(a,c,d){var e,f,g={},h=0;if(ib.isArray(c)){for(f=kc(a),e=c.length;e>h;h++)g[c[h]]=ib.css(a,c[h],!1,f);return g}return d!==b?ib.style(a,c,d):ib.css(a,c)},a,c,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(a){var b="boolean"==typeof a;return this.each(function(){(b?a:w(this))?ib(this).show():ib(this).hide()})}}),ib.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=lc(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ib.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h,i=ib.camelCase(c),j=a.style;if(c=ib.cssProps[i]||(ib.cssProps[i]=v(j,i)),h=ib.cssHooks[c]||ib.cssHooks[i],d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];if(g=typeof d,"string"===g&&(f=tc.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(ib.css(a,c)),g="number"),!(null==d||"number"===g&&isNaN(d)||("number"!==g||ib.cssNumber[i]||(d+="px"),ib.support.clearCloneStyle||""!==d||0!==c.indexOf("background")||(j[c]="inherit"),h&&"set"in h&&(d=h.set(a,d,e))===b)))try{j[c]=d}catch(k){}}},css:function(a,c,d,e){var f,g,h,i=ib.camelCase(c);return c=ib.cssProps[i]||(ib.cssProps[i]=v(a.style,i)),h=ib.cssHooks[c]||ib.cssHooks[i],h&&"get"in h&&(g=h.get(a,!0,d)),g===b&&(g=lc(a,c,e)),"normal"===g&&c in wc&&(g=wc[c]),""===d||d?(f=parseFloat(g),d===!0||ib.isNumeric(f)?f||0:g):g},swap:function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e}}),a.getComputedStyle?(kc=function(b){return a.getComputedStyle(b,null)},lc=function(a,c,d){var e,f,g,h=d||kc(a),i=h?h.getPropertyValue(c)||h[c]:b,j=a.style;return h&&(""!==i||ib.contains(a.ownerDocument,a)||(i=ib.style(a,c)),sc.test(i)&&qc.test(c)&&(e=j.width,f=j.minWidth,g=j.maxWidth,j.minWidth=j.maxWidth=j.width=i,i=h.width,j.width=e,j.minWidth=f,j.maxWidth=g)),i}):W.documentElement.currentStyle&&(kc=function(a){return a.currentStyle},lc=function(a,c,d){var e,f,g,h=d||kc(a),i=h?h[c]:b,j=a.style;return null==i&&j&&j[c]&&(i=j[c]),sc.test(i)&&!oc.test(c)&&(e=j.left,f=a.runtimeStyle,g=f&&f.left,g&&(f.left=a.currentStyle.left),j.left="fontSize"===c?"1em":i,i=j.pixelLeft+"px",j.left=e,g&&(f.left=g)),""===i?"auto":i}),ib.each(["height","width"],function(a,c){ib.cssHooks[c]={get:function(a,d,e){return d?0===a.offsetWidth&&pc.test(ib.css(a,"display"))?ib.swap(a,vc,function(){return A(a,c,e)}):A(a,c,e):b},set:function(a,b,d){var e=d&&kc(a);return y(a,b,d?z(a,c,d,ib.support.boxSizing&&"border-box"===ib.css(a,"boxSizing",!1,e),e):0)}}}),ib.support.opacity||(ib.cssHooks.opacity={get:function(a,b){return nc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=ib.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===ib.trim(f.replace(mc,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=mc.test(f)?f.replace(mc,e):f+" "+e)}}),ib(function(){ib.support.reliableMarginRight||(ib.cssHooks.marginRight={get:function(a,c){return c?ib.swap(a,{display:"inline-block"},lc,[a,"marginRight"]):b}}),!ib.support.pixelPosition&&ib.fn.position&&ib.each(["top","left"],function(a,c){ib.cssHooks[c]={get:function(a,d){return d?(d=lc(a,c),sc.test(d)?ib(a).position()[c]+"px":d):b}}})}),ib.expr&&ib.expr.filters&&(ib.expr.filters.hidden=function(a){return 0>=a.offsetWidth&&0>=a.offsetHeight||!ib.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||ib.css(a,"display"))},ib.expr.filters.visible=function(a){return!ib.expr.filters.hidden(a)}),ib.each({margin:"",padding:"",border:"Width"},function(a,b){ib.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+xc[d]+b]=f[d]||f[d-2]||f[0];return e}},qc.test(a)||(ib.cssHooks[a+b].set=y)});var zc=/%20/g,Ac=/\[\]$/,Bc=/\r?\n/g,Cc=/^(?:submit|button|image|reset|file)$/i,Dc=/^(?:input|select|textarea|keygen)/i;ib.fn.extend({serialize:function(){return ib.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=ib.prop(this,"elements");return a?ib.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!ib(this).is(":disabled")&&Dc.test(this.nodeName)&&!Cc.test(a)&&(this.checked||!bc.test(a))}).map(function(a,b){var c=ib(this).val();return null==c?null:ib.isArray(c)?ib.map(c,function(a){return{name:b.name,value:a.replace(Bc,"\r\n")}}):{name:b.name,value:c.replace(Bc,"\r\n")}}).get()}}),ib.param=function(a,c){var d,e=[],f=function(a,b){b=ib.isFunction(b)?b():null==b?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=ib.ajaxSettings&&ib.ajaxSettings.traditional),ib.isArray(a)||a.jquery&&!ib.isPlainObject(a))ib.each(a,function(){f(this.name,this.value)});else for(d in a)D(d,a[d],c,f);return e.join("&").replace(zc,"+")},ib.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){ib.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ib.fn.hover=function(a,b){return this.mouseenter(a).mouseleave(b||a)};var Ec,Fc,Gc=ib.now(),Hc=/\?/,Ic=/#.*$/,Jc=/([?&])_=[^&]*/,Kc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Lc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mc=/^(?:GET|HEAD)$/,Nc=/^\/\//,Oc=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Pc=ib.fn.load,Qc={},Rc={},Sc="*/".concat("*");try{Fc=X.href}catch(Tc){Fc=W.createElement("a"),Fc.href="",Fc=Fc.href}Ec=Oc.exec(Fc.toLowerCase())||[],ib.fn.load=function(a,c,d){if("string"!=typeof a&&Pc)return Pc.apply(this,arguments);var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),ib.isFunction(c)?(d=c,c=b):c&&"object"==typeof c&&(g="POST"),h.length>0&&ib.ajax({url:a,type:g,dataType:"html",data:c}).done(function(a){f=arguments,h.html(e?ib("<div>").append(ib.parseHTML(a)).find(e):a)}).complete(d&&function(a,b){h.each(d,f||[a.responseText,b,a])}),this},ib.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ib.fn[b]=function(a){return this.on(b,a)}}),ib.each(["get","post"],function(a,c){ib[c]=function(a,d,e,f){return ib.isFunction(d)&&(f=f||e,e=d,d=b),ib.ajax({url:a,type:c,dataType:f,data:d,success:e})}}),ib.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Fc,type:"GET",isLocal:Lc.test(Ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":ib.parseJSON,"text xml":ib.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?G(G(a,ib.ajaxSettings),b):G(ib.ajaxSettings,a)},ajaxPrefilter:E(Qc),ajaxTransport:E(Rc),ajax:function(a,c){function d(a,c,d,e){var f,l,s,t,v,x=c;2!==u&&(u=2,i&&clearTimeout(i),k=b,h=e||"",w.readyState=a>0?4:0,d&&(t=H(m,w,d)),a>=200&&300>a||304===a?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(ib.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(ib.etag[g]=v)),204===a?(f=!0,x="nocontent"):304===a?(f=!0,x="notmodified"):(f=I(m,t),x=f.state,l=f.data,s=f.error,f=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),w.status=a,w.statusText=(c||x)+"",f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=b,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),--ib.active||ib.event.trigger("ajaxStop")))}"object"==typeof a&&(c=a,a=b),c=c||{};var e,f,g,h,i,j,k,l,m=ib.ajaxSetup({},c),n=m.context||m,o=m.context&&(n.nodeType||n.jquery)?ib(n):ib.event,p=ib.Deferred(),q=ib.Callbacks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Kc.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?h:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((a||m.url||Fc)+"").replace(Ic,"").replace(Nc,Ec[1]+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=ib.trim(m.dataType||"*").toLowerCase().match(kb)||[""],null==m.crossDomain&&(e=Oc.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===Ec[1]&&e[2]===Ec[2]&&(e[3]||("http:"===e[1]?80:443))==(Ec[3]||("http:"===Ec[1]?80:443)))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=ib.param(m.data,m.traditional)),F(Qc,m,c,w),2===u)return w;j=m.global,j&&0===ib.active++&&ib.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Mc.test(m.type),g=m.url,m.hasContent||(m.data&&(g=m.url+=(Hc.test(g)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=Jc.test(g)?g.replace(Jc,"$1_="+Gc++):g+(Hc.test(g)?"&":"?")+"_="+Gc++)),m.ifModified&&(ib.lastModified[g]&&w.setRequestHeader("If-Modified-Since",ib.lastModified[g]),ib.etag[g]&&w.setRequestHeader("If-None-Match",ib.etag[g])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Sc+"; q=0.01":""):m.accepts["*"]);for(f in m.headers)w.setRequestHeader(f,m.headers[f]);if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))return w.abort();v="abort";for(f in{success:1,error:1,complete:1})w[f](m[f]);if(k=F(Rc,m,c,w)){w.readyState=1,j&&o.trigger("ajaxSend",[w,m]),m.async&&m.timeout>0&&(i=setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getScript:function(a,c){return ib.get(a,b,c,"script")},getJSON:function(a,b,c){return ib.get(a,b,c,"json")}}),ib.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ib.globalEval(a),a}}}),ib.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),ib.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=W.head||ib("head")[0]||W.documentElement;return{send:function(b,e){c=W.createElement("script"),c.async=!0,a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,b){(b||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,c.parentNode&&c.parentNode.removeChild(c),c=null,b||e(200,"success"))},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(b,!0)}}}});var Uc=[],Vc=/(=)\?(?=&|$)|\?\?/;ib.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Uc.pop()||ib.expando+"_"+Gc++;return this[a]=!0,a}}),ib.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.jsonp!==!1&&(Vc.test(c.url)?"url":"string"==typeof c.data&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vc.test(c.data)&&"data");return i||"jsonp"===c.dataTypes[0]?(f=c.jsonpCallback=ib.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,i?c[i]=c[i].replace(Vc,"$1"+f):c.jsonp!==!1&&(c.url+=(Hc.test(c.url)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||ib.error(f+" was not called"),h[0]},c.dataTypes[0]="json",g=a[f],a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,Uc.push(f)),h&&ib.isFunction(g)&&g(h[0]),h=g=b}),"script"):b});var Wc,Xc,Yc=0,Zc=a.ActiveXObject&&function(){var a;for(a in Wc)Wc[a](b,!0)};ib.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&J()||K()}:J,Xc=ib.ajaxSettings.xhr(),ib.support.cors=!!Xc&&"withCredentials"in Xc,Xc=ib.support.ajax=!!Xc,Xc&&ib.ajaxTransport(function(c){if(!c.crossDomain||ib.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();if(c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),c.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l;try{if(d&&(e||4===i.readyState))if(d=b,g&&(i.onreadystatechange=ib.noop,Zc&&delete Wc[g]),e)4!==i.readyState&&i.abort();else{l={},h=i.status,j=i.getAllResponseHeaders(),"string"==typeof i.responseText&&(l.text=i.responseText);try{k=i.statusText}catch(m){k=""}h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404}}catch(n){e||f(-1,n)}l&&f(h,k,l,j)},c.async?4===i.readyState?setTimeout(d):(g=++Yc,Zc&&(Wc||(Wc={},ib(a).unload(Zc)),Wc[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(b,!0)}}}});var $c,_c,ad=/^(?:toggle|show|hide)$/,bd=RegExp("^(?:([+-])=|)("+jb+")([a-z%]*)$","i"),cd=/queueHooks$/,dd=[P],ed={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=bd.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){if(c=+f[2],d=f[3]||(ib.cssNumber[a]?"":"px"),"px"!==d&&h){h=ib.css(e.elem,a,!0)||c||1;do i=i||".5",h/=i,ib.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&1!==i&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};ib.Animation=ib.extend(N,{tweener:function(a,b){ib.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ed[c]=ed[c]||[],ed[c].unshift(b)},prefilter:function(a,b){b?dd.unshift(a):dd.push(a)}}),ib.Tween=Q,Q.prototype={constructor:Q,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ib.cssNumber[c]?"":"px")},cur:function(){var a=Q.propHooks[this.prop];return a&&a.get?a.get(this):Q.propHooks._default.get(this)},run:function(a){var b,c=Q.propHooks[this.prop];return this.pos=b=this.options.duration?ib.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Q.propHooks._default.set(this),this}},Q.prototype.init.prototype=Q.prototype,Q.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ib.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){ib.fx.step[a.prop]?ib.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ib.cssProps[a.prop]]||ib.cssHooks[a.prop])?ib.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Q.propHooks.scrollTop=Q.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ib.each(["toggle","show","hide"],function(a,b){var c=ib.fn[b];ib.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(R(b,!0),a,d,e)}}),ib.fn.extend({fadeTo:function(a,b,c,d){return this.filter(w).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ib.isEmptyObject(a),f=ib.speed(b,c,d),g=function(){var b=N(this,ib.extend({},a),f);g.finish=function(){b.stop(!0)},(e||ib._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=null!=a&&a+"queueHooks",f=ib.timers,g=ib._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cd.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem!==this||null!=a&&f[c].queue!==a||(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&ib.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ib._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ib.timers,g=d?d.length:0;for(c.finish=!0,ib.queue(this,a,[]),e&&e.cur&&e.cur.finish&&e.cur.finish.call(this),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),ib.each({slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ib.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ib.speed=function(a,b,c){var d=a&&"object"==typeof a?ib.extend({},a):{complete:c||!c&&b||ib.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ib.isFunction(b)&&b};return d.duration=ib.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ib.fx.speeds?ib.fx.speeds[d.duration]:ib.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){ib.isFunction(d.old)&&d.old.call(this),d.queue&&ib.dequeue(this,d.queue)},d},ib.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ib.timers=[],ib.fx=Q.prototype.init,ib.fx.tick=function(){var a,c=ib.timers,d=0;for($c=ib.now();c.length>d;d++)a=c[d],a()||c[d]!==a||c.splice(d--,1);c.length||ib.fx.stop(),$c=b},ib.fx.timer=function(a){a()&&ib.timers.push(a)&&ib.fx.start()},ib.fx.interval=13,ib.fx.start=function(){_c||(_c=setInterval(ib.fx.tick,ib.fx.interval))},ib.fx.stop=function(){clearInterval(_c),_c=null},ib.fx.speeds={slow:600,fast:200,_default:400},ib.fx.step={},ib.expr&&ib.expr.filters&&(ib.expr.filters.animated=function(a){return ib.grep(ib.timers,function(b){return a===b.elem}).length}),ib.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){ib.offset.setOffset(this,a,b)});var c,d,e={top:0,left:0},f=this[0],g=f&&f.ownerDocument;return g?(c=g.documentElement,ib.contains(c,f)?(typeof f.getBoundingClientRect!==V&&(e=f.getBoundingClientRect()),d=S(g),{top:e.top+(d.pageYOffset||c.scrollTop)-(c.clientTop||0),left:e.left+(d.pageXOffset||c.scrollLeft)-(c.clientLeft||0)}):e):void 0},ib.offset={setOffset:function(a,b,c){var d=ib.css(a,"position");"static"===d&&(a.style.position="relative");var e,f,g=ib(a),h=g.offset(),i=ib.css(a,"top"),j=ib.css(a,"left"),k=("absolute"===d||"fixed"===d)&&ib.inArray("auto",[i,j])>-1,l={},m={};k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),ib.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l)}},ib.fn.extend({position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===ib.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ib.nodeName(a[0],"html")||(c=a.offset()),c.top+=ib.css(a[0],"borderTopWidth",!0),c.left+=ib.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-ib.css(d,"marginTop",!0),left:b.left-c.left-ib.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||W.documentElement;a&&!ib.nodeName(a,"html")&&"static"===ib.css(a,"position");)a=a.offsetParent;return a||W.documentElement})}}),ib.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);ib.fn[a]=function(e){return ib.access(this,function(a,e,f){var g=S(a);return f===b?g?c in g?g[c]:g.document.documentElement[e]:a[e]:(g?g.scrollTo(d?ib(g).scrollLeft():f,d?f:ib(g).scrollTop()):a[e]=f,b)},a,e,arguments.length,null)}}),ib.each({Height:"height",Width:"width"},function(a,c){ib.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){ib.fn[e]=function(e,f){var g=arguments.length&&(d||"boolean"!=typeof e),h=d||(e===!0||f===!0?"margin":"border");return ib.access(this,function(c,d,e){var f;return ib.isWindow(c)?c.document.documentElement["client"+a]:9===c.nodeType?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?ib.css(c,d,h):ib.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=ib,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return ib})}(window),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")
})}(),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?(this._wrapped=a,void 0):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.5.1";var y=x.each=x.forEach=function(a,b,d){if(null!=a)if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g in a)if(x.has(a,g)&&b.call(d,a[g],g,a)===c)return};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b]})},x.where=function(a,b,c){return x.isEmpty(b)?c?void 0:[]:x[c?"find":"filter"](a,function(a){for(var c in b)if(b[c]!==a[c])return!1;return!0})},x.findWhere=function(a,b){return x.where(a,b,!0)},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-1/0;var d={computed:-1/0,value:-1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!b&&x.isEmpty(a))return 1/0;var d={computed:1/0,value:1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d};var B=function(a){return x.isFunction(a)?a:function(b){return b[a]}};x.sortBy=function(a,b,c){var d=B(b);return x.pluck(x.map(a,function(a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")};var C=function(a,b,c,d){var e={},f=B(null==b?x.identity:b);return y(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};x.groupBy=function(a,b,c){return C(a,b,c,function(a,b,c){(x.has(a,b)?a[b]:a[b]=[]).push(c)})},x.countBy=function(a,b,c){return C(a,b,c,function(a,b){x.has(a,b)||(a[b]=0),a[b]++})},x.sortedIndex=function(a,b,c,d){c=null==c?x.identity:B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return b&&x.every(a,x.isArray)?i.apply(c,a):(y(a,function(a){x.isArray(a)||x.isArguments(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c)};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=x.max(x.pluck(arguments,"length").concat(0)),b=new Array(a),c=0;a>c;c++)b[c]=x.pluck(arguments,""+c);return b},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f};var E=function(){};x.bind=function(a,b){var c,d;if(w&&a.bind===w)return w.apply(a,h.call(arguments,1));if(!x.isFunction(a))throw new TypeError;return c=h.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(h.call(arguments)));E.prototype=a.prototype;var e=new E;E.prototype=null;var f=a.apply(e,c.concat(h.call(arguments)));return Object(f)===f?f:e}},x.partial=function(a){var b=h.call(arguments,1);return function(){return a.apply(this,b.concat(h.call(arguments)))}},x.bindAll=function(a){var b=h.call(arguments,1);if(0===b.length)throw new Error("bindAll must be passed function names");return y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:new Date,g=null,f=a.apply(d,e)};return function(){var j=new Date;h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},x.debounce=function(a,b,c){var d,e=null;return function(){var f=this,g=arguments,h=function(){e=null,c||(d=a.apply(f,g))},i=c&&!e;return clearTimeout(e),e=setTimeout(h,b),i&&(d=a.apply(f,g)),d}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return function(){var c=[a];return g.apply(c,arguments),b.apply(this,c)}},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=v||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&b.push(c);return b},x.values=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push(a[c]);return b},x.pairs=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push([c,a[c]]);return b},x.invert=function(a){var b={};for(var c in a)x.has(a,c)&&(b[a[c]]=c);return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)void 0===a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var F=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;var g=a.constructor,h=b.constructor;if(g!==h&&!(x.isFunction(g)&&g instanceof g&&x.isFunction(h)&&h instanceof h))return!1;c.push(a),d.push(b);var i=0,k=!0;if("[object Array]"==e){if(i=a.length,k=i==b.length)for(;i--&&(k=F(a[i],b[i],c,d)););}else{for(var l in a)if(x.has(a,l)&&(i++,!(k=x.has(b,l)&&F(a[l],b[l],c,d))))break;if(k){for(l in b)if(x.has(b,l)&&!i--)break;k=!i}}return c.pop(),d.pop(),k};x.isEqual=function(a,b){return F(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.times=function(a,b,c){for(var d=Array(Math.max(0,a)),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var G={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};G.unescape=x.invert(G.escape);var H={escape:new RegExp("["+x.keys(G.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(G.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(H[a],function(b){return G[a][b]})}}),x.result=function(a,b){if(null==a)return void 0;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),M.call(this,c.apply(x,a))}})};var I=0;x.uniqueId=function(a){var b=++I+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||J).source,(c.interpolate||J).source,(c.evaluate||J).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(L,function(a){return"\\"+K[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var M=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],M.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return M.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),function(){var a=this,b=a.Backbone,c=[];c.push;var d=c.slice;c.splice;var e;e="undefined"!=typeof exports?exports:a.Backbone={},e.VERSION="1.1.0";var f=a._;f||"undefined"==typeof require||(f=require("underscore")),e.$=a.jQuery||a.Zepto||a.ender||a.$,e.noConflict=function(){return a.Backbone=b,this},e.emulateHTTP=!1,e.emulateJSON=!1;var g=e.Events={on:function(a,b,c){if(!i(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,b,c){if(!i(this,"once",a,[b,c])||!b)return this;var d=this,e=f.once(function(){d.off(a,e),b.apply(this,arguments)});return e._callback=b,this.on(a,e,c)},off:function(a,b,c){var d,e,g,h,j,k,l,m;if(!this._events||!i(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;for(h=a?[a]:f.keys(this._events),j=0,k=h.length;k>j;j++)if(a=h[j],g=this._events[a]){if(this._events[a]=d=[],b||c)for(l=0,m=g.length;m>l;l++)e=g[l],(b&&b!==e.callback&&b!==e.callback._callback||c&&c!==e.context)&&d.push(e);d.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=d.call(arguments,1);if(!i(this,"trigger",a,b))return this;var c=this._events[a],e=this._events.all;return c&&j(c,b),e&&j(e,arguments),this},stopListening:function(a,b,c){var d=this._listeningTo;if(!d)return this;var e=!b&&!c;c||"object"!=typeof b||(c=this),a&&((d={})[a._listenId]=a);for(var g in d)a=d[g],a.off(b,c,this),(e||f.isEmpty(a._events))&&delete this._listeningTo[g];return this}},h=/\s+/,i=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var e in c)a[b].apply(a,[e,c[e]].concat(d));return!1}if(h.test(c)){for(var f=c.split(h),g=0,i=f.length;i>g;g++)a[b].apply(a,[f[g]].concat(d));return!1}return!0},j=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}},k={listenTo:"on",listenToOnce:"once"};f.each(k,function(a,b){g[b]=function(b,c,d){var e=this._listeningTo||(this._listeningTo={}),g=b._listenId||(b._listenId=f.uniqueId("l"));return e[g]=b,d||"object"!=typeof c||(d=this),b[a](c,d,this),this}}),g.bind=g.on,g.unbind=g.off,f.extend(e,g);var l=e.Model=function(a,b){var c=a||{};b||(b={}),this.cid=f.uniqueId("c"),this.attributes={},b.collection&&(this.collection=b.collection),b.parse&&(c=this.parse(c,b)||{}),c=f.defaults({},c,f.result(this,"defaults")),this.set(c,b),this.changed={},this.initialize.apply(this,arguments)};f.extend(l.prototype,g,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return f.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e,g,h,i,j,k,l;if(null==a)return this;if("object"==typeof a?(e=a,c=b):(e={})[a]=b,c||(c={}),!this._validate(e,c))return!1;g=c.unset,i=c.silent,h=[],j=this._changing,this._changing=!0,j||(this._previousAttributes=f.clone(this.attributes),this.changed={}),l=this.attributes,k=this._previousAttributes,this.idAttribute in e&&(this.id=e[this.idAttribute]);for(d in e)b=e[d],f.isEqual(l[d],b)||h.push(d),f.isEqual(k[d],b)?delete this.changed[d]:this.changed[d]=b,g?delete l[d]:l[d]=b;if(!i){h.length&&(this._pending=!0);for(var m=0,n=h.length;n>m;m++)this.trigger("change:"+h[m],this,l[h[m]],c)}if(j)return this;if(!i)for(;this._pending;)this._pending=!1,this.trigger("change",this,c);return this._pending=!1,this._changing=!1,this},unset:function(a,b){return this.set(a,void 0,f.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var c in this.attributes)b[c]=void 0;return this.set(b,f.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._changing?this._previousAttributes:this.attributes;for(var e in a)f.isEqual(d[e],b=a[e])||((c||(c={}))[e]=b);return c},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return f.clone(this._previousAttributes)},fetch:function(a){a=a?f.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;return a.success=function(d){return b.set(b.parse(d,a),a)?(c&&c(b,d,a),b.trigger("sync",b,d,a),void 0):!1},K(this,a),this.sync("read",this,a)},save:function(a,b,c){var d,e,g,h=this.attributes;if(null==a||"object"==typeof a?(d=a,c=b):(d={})[a]=b,c=f.extend({validate:!0},c),d&&!c.wait){if(!this.set(d,c))return!1}else if(!this._validate(d,c))return!1;d&&c.wait&&(this.attributes=f.extend({},h,d)),void 0===c.parse&&(c.parse=!0);var i=this,j=c.success;return c.success=function(a){i.attributes=h;var b=i.parse(a,c);return c.wait&&(b=f.extend(d||{},b)),f.isObject(b)&&!i.set(b,c)?!1:(j&&j(i,a,c),i.trigger("sync",i,a,c),void 0)},K(this,c),e=this.isNew()?"create":c.patch?"patch":"update","patch"===e&&(c.attrs=d),g=this.sync(e,this,c),d&&c.wait&&(this.attributes=h),g},destroy:function(a){a=a?f.clone(a):{};var b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(a.success=function(e){(a.wait||b.isNew())&&d(),c&&c(b,e,a),b.isNew()||b.trigger("sync",b,e,a)},this.isNew())return a.success(),!1;K(this,a);var e=this.sync("delete",this,a);return a.wait||d(),e},url:function(){var a=f.result(this,"urlRoot")||f.result(this.collection,"url")||J();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(a){return this._validate({},f.extend(a||{},{validate:!0}))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=f.extend({},this.attributes,a);var c=this.validationError=this.validate(a,b)||null;return c?(this.trigger("invalid",this,c,f.extend(b,{validationError:c})),!1):!0}});var m=["keys","values","pairs","invert","pick","omit"];f.each(m,function(a){l.prototype[a]=function(){var b=d.call(arguments);return b.unshift(this.attributes),f[a].apply(f,b)}});var n=e.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),void 0!==b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,f.extend({silent:!0},b))},o={add:!0,remove:!0,merge:!0},p={add:!0,remove:!1};f.extend(n.prototype,g,{model:l,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return e.sync.apply(this,arguments)},add:function(a,b){return this.set(a,f.extend({merge:!1},b,p))},remove:function(a,b){var c=!f.isArray(a);a=c?[a]:f.clone(a),b||(b={});var d,e,g,h;for(d=0,e=a.length;e>d;d++)h=a[d]=this.get(a[d]),h&&(delete this._byId[h.id],delete this._byId[h.cid],g=this.indexOf(h),this.models.splice(g,1),this.length--,b.silent||(b.index=g,h.trigger("remove",h,this,b)),this._removeReference(h));return c?a[0]:a},set:function(a,b){b=f.defaults({},b,o),b.parse&&(a=this.parse(a,b));var c=!f.isArray(a);a=c?a?[a]:[]:f.clone(a);var d,e,g,h,i,j,k,m=b.at,n=this.model,p=this.comparator&&null==m&&b.sort!==!1,q=f.isString(this.comparator)?this.comparator:null,r=[],s=[],t={},u=b.add,v=b.merge,w=b.remove,x=!p&&u&&w?[]:!1;for(d=0,e=a.length;e>d;d++){if(i=a[d],g=i instanceof l?h=i:i[n.prototype.idAttribute],j=this.get(g))w&&(t[j.cid]=!0),v&&(i=i===h?h.attributes:i,b.parse&&(i=j.parse(i,b)),j.set(i,b),p&&!k&&j.hasChanged(q)&&(k=!0)),a[d]=j;else if(u){if(h=a[d]=this._prepareModel(i,b),!h)continue;r.push(h),h.on("all",this._onModelEvent,this),this._byId[h.cid]=h,null!=h.id&&(this._byId[h.id]=h)}x&&x.push(j||h)}if(w){for(d=0,e=this.length;e>d;++d)t[(h=this.models[d]).cid]||s.push(h);s.length&&this.remove(s,b)}if(r.length||x&&x.length)if(p&&(k=!0),this.length+=r.length,null!=m)for(d=0,e=r.length;e>d;d++)this.models.splice(m+d,0,r[d]);else{x&&(this.models.length=0);var y=x||r;for(d=0,e=y.length;e>d;d++)this.models.push(y[d])}if(k&&this.sort({silent:!0}),!b.silent){for(d=0,e=r.length;e>d;d++)(h=r[d]).trigger("add",h,this,b);(k||x&&x.length)&&this.trigger("sort",this,b)}return c?a[0]:a},reset:function(a,b){b||(b={});for(var c=0,d=this.models.length;d>c;c++)this._removeReference(this.models[c]);return b.previousModels=this.models,this._reset(),a=this.add(a,f.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),a},push:function(a,b){return this.add(a,f.extend({at:this.length},b))},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return this.add(a,f.extend({at:0},b))},shift:function(a){var b=this.at(0);return this.remove(b,a),b},slice:function(){return d.apply(this.models,arguments)},get:function(a){return null==a?void 0:this._byId[a.id]||this._byId[a.cid]||this._byId[a]},at:function(a){return this.models[a]},where:function(a,b){return f.isEmpty(a)?b?void 0:[]:this[b?"find":"filter"](function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},findWhere:function(a){return this.where(a,!0)},sort:function(a){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return a||(a={}),f.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(f.bind(this.comparator,this)),a.silent||this.trigger("sort",this,a),this},pluck:function(a){return f.invoke(this.models,"get",a)},fetch:function(a){a=a?f.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=a.success,c=this;return a.success=function(d){var e=a.reset?"reset":"set";c[e](d,a),b&&b(c,d,a),c.trigger("sync",c,d,a)},K(this,a),this.sync("read",this,a)},create:function(a,b){if(b=b?f.clone(b):{},!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var c=this,d=b.success;return b.success=function(a,b,e){e.wait&&c.add(a,e),d&&d(a,b,e)},a.save(null,b),a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(a,b){if(a instanceof l)return a.collection||(a.collection=this),a;b=b?f.clone(b):{},b.collection=this;var c=new this.model(a,b);return c.validationError?(this.trigger("invalid",this,c.validationError,b),!1):c},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});var q=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];f.each(q,function(a){n.prototype[a]=function(){var b=d.call(arguments);return b.unshift(this.models),f[a].apply(f,b)}});var r=["groupBy","countBy","sortBy"];f.each(r,function(a){n.prototype[a]=function(b,c){var d=f.isFunction(b)?b:function(a){return a.get(b)};return f[a](this.models,d,c)}});var s=e.View=function(a){this.cid=f.uniqueId("view"),a||(a={}),f.extend(this,f.pick(a,u)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},t=/^(\S+)\s*(.*)$/,u=["model","collection","el","id","attributes","className","tagName","events"];f.extend(s.prototype,g,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(a,b){return this.$el&&this.undelegateEvents(),this.$el=a instanceof e.$?a:e.$(a),this.el=this.$el[0],b!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=f.result(this,"events")))return this;this.undelegateEvents();for(var b in a){var c=a[b];if(f.isFunction(c)||(c=this[a[b]]),c){var d=b.match(t),e=d[1],g=d[2];c=f.bind(c,this),e+=".delegateEvents"+this.cid,""===g?this.$el.on(e,c):this.$el.on(e,g,c)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(f.result(this,"el"),!1);else{var a=f.extend({},f.result(this,"attributes"));this.id&&(a.id=f.result(this,"id")),this.className&&(a["class"]=f.result(this,"className"));var b=e.$("<"+f.result(this,"tagName")+">").attr(a);this.setElement(b,!1)}}}),e.sync=function(a,b,c){var d=w[a];f.defaults(c||(c={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var g={type:d,dataType:"json"};if(c.url||(g.url=f.result(b,"url")||J()),null!=c.data||!b||"create"!==a&&"update"!==a&&"patch"!==a||(g.contentType="application/json",g.data=JSON.stringify(c.attrs||b.toJSON(c))),c.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{}),c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){g.type="POST",c.emulateJSON&&(g.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){return a.setRequestHeader("X-HTTP-Method-Override",d),h?h.apply(this,arguments):void 0}}"GET"===g.type||c.emulateJSON||(g.processData=!1),"PATCH"===g.type&&v&&(g.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var i=c.xhr=e.ajax(f.extend(g,c));return b.trigger("request",b,i,c),i};var v=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),w={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var x=e.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},y=/\((.*?)\)/g,z=/(\(\?)?:\w+/g,A=/\*\w+/g,B=/[\-{}\[\]+?.,\\\^$|#\s]/g;f.extend(x.prototype,g,{initialize:function(){},route:function(a,b,c){f.isRegExp(a)||(a=this._routeToRegExp(a)),f.isFunction(b)&&(c=b,b=""),c||(c=this[b]);var d=this;return e.history.route(a,function(f){var g=d._extractParameters(a,f);c&&c.apply(d,g),d.trigger.apply(d,["route:"+b].concat(g)),d.trigger("route",b,g),e.history.trigger("route",d,b,g)}),this},navigate:function(a,b){return e.history.navigate(a,b),this},_bindRoutes:function(){if(this.routes){this.routes=f.result(this,"routes");for(var a,b=f.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){return a=a.replace(B,"\\$&").replace(y,"(?:$1)?").replace(z,function(a,b){return b?a:"([^/]+)"}).replace(A,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){var c=a.exec(b).slice(1);return f.map(c,function(a){return a?decodeURIComponent(a):null})}});var C=e.History=function(){this.handlers=[],f.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},D=/^[#\/]|\s+$/g,E=/^\/+|\/+$/g,F=/msie [\w.]+/,G=/\/$/,H=/[?#].*$/;C.started=!1,f.extend(C.prototype,g,{interval:50,getHash:function(a){var b=(a||this).location.href.match(/#(.*)$/);return b?b[1]:""},getFragment:function(a,b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=this.location.pathname;var c=this.root.replace(G,"");a.indexOf(c)||(a=a.slice(c.length))}else a=this.getHash();return a.replace(D,"")},start:function(a){if(C.started)throw new Error("Backbone.history has already been started");C.started=!0,this.options=f.extend({root:"/"},this.options,a),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var b=this.getFragment(),c=document.documentMode,d=F.exec(navigator.userAgent.toLowerCase())&&(!c||7>=c);this.root=("/"+this.root+"/").replace(E,"/"),d&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!d?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=b;var g=this.location,h=g.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!h)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._hasPushState&&h&&g.hash&&(this.fragment=this.getHash().replace(D,""),this.history.replaceState({},document.title,this.root+this.fragment+g.search))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),C.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();return a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe))),a===this.fragment?!1:(this.iframe&&this.navigate(a),this.loadUrl(),void 0)},loadUrl:function(a){return a=this.fragment=this.getFragment(a),f.any(this.handlers,function(b){return b.route.test(a)?(b.callback(a),!0):void 0})},navigate:function(a,b){if(!C.started)return!1;b&&b!==!0||(b={trigger:!!b});var c=this.root+(a=this.getFragment(a||""));if(a=a.replace(H,""),this.fragment!==a){if(this.fragment=a,""===a&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else{if(!this._wantsHashChange)return this.location.assign(c);this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace))
}return b.trigger?this.loadUrl(a):void 0}},_updateHash:function(a,b,c){if(c){var d=a.href.replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),e.history=new C;var I=function(a,b){var c,d=this;c=a&&f.has(a,"constructor")?a.constructor:function(){return d.apply(this,arguments)},f.extend(c,d,b);var e=function(){this.constructor=c};return e.prototype=d.prototype,c.prototype=new e,a&&f.extend(c.prototype,a),c.__super__=d.prototype,c};l.extend=n.extend=x.extend=s.extend=C.extend=I;var J=function(){throw new Error('A "url" property or function must be specified')},K=function(a,b){var c=b.error;b.error=function(d){c&&c(a,d,b),a.trigger("error",a,d,b)}}}.call(this),Backbone.ChildViewContainer=function(a,b){var c=function(a){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),b.each(a,this.add,this)};b.extend(c.prototype,{add:function(a,b){var c=a.cid;this._views[c]=a,a.model&&(this._indexByModel[a.model.cid]=c),b&&(this._indexByCustom[b]=c),this._updateLength()},findByModel:function(a){return this.findByModelCid(a.cid)},findByModelCid:function(a){var b=this._indexByModel[a];return this.findByCid(b)},findByCustom:function(a){var b=this._indexByCustom[a];return this.findByCid(b)},findByIndex:function(a){return b.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var c=a.cid;a.model&&delete this._indexByModel[a.model.cid],b.any(this._indexByCustom,function(a,b){return a===c?(delete this._indexByCustom[b],!0):void 0},this),delete this._views[c],this._updateLength()},call:function(a){this.apply(a,b.tail(arguments))},apply:function(a,c){b.each(this._views,function(d){b.isFunction(d[a])&&d[a].apply(d,c||[])})},_updateLength:function(){this.length=b.size(this._views)}});var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return b.each(d,function(a){c.prototype[a]=function(){var c=b.values(this._views),d=[c].concat(b.toArray(arguments));return b[a].apply(b,d)}}),c}(Backbone,_),Backbone.Wreqr=function(a,b,c){"use strict";var d={};return d.Handlers=function(a,b){var c=function(a){this.options=a,this._wreqrHandlers={},b.isFunction(this.initialize)&&this.initialize(a)};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events,{setHandlers:function(a){b.each(a,function(a,c){var d=null;b.isObject(a)&&!b.isFunction(a)&&(d=a.context,a=a.callback),this.setHandler(c,a,d)},this)},setHandler:function(a,b,c){var d={callback:b,context:c};this._wreqrHandlers[a]=d,this.trigger("handler:add",a,b,c)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(!b)throw new Error("Handler not found for '"+a+"'");return function(){var a=Array.prototype.slice.apply(arguments);return b.callback.apply(b.context,a)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}}),c}(a,c),d.CommandStorage=function(){var b=function(a){this.options=a,this._commands={},c.isFunction(this.initialize)&&this.initialize(a)};return c.extend(b.prototype,a.Events,{getCommands:function(a){var b=this._commands[a];return b||(b={command:a,instances:[]},this._commands[a]=b),b},addCommand:function(a,b){var c=this.getCommands(a);c.instances.push(b)},clearCommands:function(a){var b=this.getCommands(a);b.instances=[]}}),b}(),d.Commands=function(a){return a.Handlers.extend({storageType:a.CommandStorage,constructor:function(b){this.options=b||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var c=Array.prototype.slice.call(arguments);a.Handlers.prototype.constructor.apply(this,c)},execute:function(a,b){a=arguments[0],b=Array.prototype.slice.call(arguments,1),this.hasHandler(a)?this.getHandler(a).apply(this,b):this.storage.addCommand(a,b)},_executeCommands:function(a,b,d){var e=this.storage.getCommands(a);c.each(e.instances,function(a){b.apply(d,a)}),this.storage.clearCommands(a)},_initializeStorage:function(a){var b,d=a.storageType||this.storageType;b=c.isFunction(d)?new d:d,this.storage=b}})}(d),d.RequestResponse=function(a){return a.Handlers.extend({request:function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);return this.getHandler(a).apply(this,b)}})}(d),d.EventAggregator=function(a,b){var c=function(){};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events),c}(a,c),d}(Backbone,Backbone.Marionette,_);var Marionette=function(a,b,c){"use strict";function d(a){return g.call(a)}function e(a,b){var c=new Error(a);throw c.name=b||"Error",c}var f={};b.Marionette=f,f.$=b.$;var g=Array.prototype.slice;return f.extend=b.Model.extend,f.getOption=function(a,b){if(a&&b){var c;return c=a.options&&b in a.options&&void 0!==a.options[b]?a.options[b]:a[b]}},f.triggerMethod=function(){function a(a,b,c){return c.toUpperCase()}var b=/(^|:)(\w)/gi,d=function(d){var e="on"+d.replace(b,a),f=this[e];return c.isFunction(this.trigger)&&this.trigger.apply(this,arguments),c.isFunction(f)?f.apply(this,c.tail(arguments)):void 0};return d}(),f.MonitorDOMRefresh=function(){function a(a){a._isShown=!0,d(a)}function b(a){a._isRendered=!0,d(a)}function d(a){a._isShown&&a._isRendered&&c.isFunction(a.triggerMethod)&&a.triggerMethod("dom:refresh")}return function(c){c.listenTo(c,"show",function(){a(c)}),c.listenTo(c,"render",function(){b(c)})}}(),function(a){function b(a,b,d,f){var g=f.split(/\s+/);c.each(g,function(c){var f=a[c];f||e("Method '"+c+"' was configured as an event handler, but does not exist."),a.listenTo(b,d,f,a)})}function d(a,b,c,d){a.listenTo(b,c,d,a)}function f(a,b,d,e){var f=e.split(/\s+/);c.each(f,function(c){var e=a[c];a.stopListening(b,d,e,a)})}function g(a,b,c,d){a.stopListening(b,c,d,a)}function h(a,b,d,e,f){b&&d&&(c.isFunction(d)&&(d=d.call(a)),c.each(d,function(d,g){c.isFunction(d)?e(a,b,g,d):f(a,b,g,d)}))}a.bindEntityEvents=function(a,c,e){h(a,c,e,d,b)},a.unbindEntityEvents=function(a,b,c){h(a,b,c,g,f)}}(f),f.Callbacks=function(){this._deferred=f.$.Deferred(),this._callbacks=[]},c.extend(f.Callbacks.prototype,{add:function(a,b){this._callbacks.push({cb:a,ctx:b}),this._deferred.done(function(c,d){b&&(c=b),a.call(c,d)})},run:function(a,b){this._deferred.resolve(b,a)},reset:function(){var a=this._callbacks;this._deferred=f.$.Deferred(),this._callbacks=[],c.each(a,function(a){this.add(a.cb,a.ctx)},this)}}),f.Controller=function(a){this.triggerMethod=f.triggerMethod,this.options=a||{},c.isFunction(this.initialize)&&this.initialize(this.options)},f.Controller.extend=f.extend,c.extend(f.Controller.prototype,b.Events,{close:function(){this.stopListening(),this.triggerMethod("close"),this.unbind()}}),f.Region=function(a){if(this.options=a||{},this.el=f.getOption(this,"el"),!this.el){var b=new Error("An 'el' must be specified for a region.");throw b.name="NoElError",b}if(this.initialize){var c=Array.prototype.slice.apply(arguments);this.initialize.apply(this,c)}},c.extend(f.Region,{buildRegion:function(a,b){var d="string"==typeof a,e="string"==typeof a.selector,f="undefined"==typeof a.regionType,g="function"==typeof a;if(!g&&!d&&!e)throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");var h,i;d&&(h=a),a.selector&&(h=a.selector),g&&(i=a),!g&&f&&(i=b),a.regionType&&(i=a.regionType);var j=new i({el:h});return a.parentEl&&(j.getEl=function(b){var d=a.parentEl;return c.isFunction(d)&&(d=d()),d.find(b)}),j}}),c.extend(f.Region.prototype,b.Events,{show:function(a){this.ensureEl();var b=a.isClosed||c.isUndefined(a.$el),d=a!==this.currentView;d&&this.close(),a.render(),(d||b)&&this.open(a),this.currentView=a,f.triggerMethod.call(this,"show",a),f.triggerMethod.call(a,"show")},ensureEl:function(){this.$el&&0!==this.$el.length||(this.$el=this.getEl(this.el))},getEl:function(a){return f.$(a)},open:function(a){this.$el.empty().append(a.el)},close:function(){var a=this.currentView;a&&!a.isClosed&&(a.close?a.close():a.remove&&a.remove(),f.triggerMethod.call(this,"close"),delete this.currentView)},attachView:function(a){this.currentView=a},reset:function(){this.close(),delete this.$el}}),f.Region.extend=f.extend,f.RegionManager=function(a){var b=a.Controller.extend({constructor:function(b){this._regions={},a.Controller.prototype.constructor.call(this,b)},addRegions:function(a,b){var d={};return c.each(a,function(a,e){"string"==typeof a&&(a={selector:a}),a.selector&&(a=c.defaults({},a,b));var f=this.addRegion(e,a);d[e]=f},this),d},addRegion:function(b,d){var e,f=c.isObject(d),g=c.isString(d),h=!!d.selector;return e=g||f&&h?a.Region.buildRegion(d,a.Region):c.isFunction(d)?a.Region.buildRegion(d,a.Region):d,this._store(b,e),this.triggerMethod("region:add",b,e),e},get:function(a){return this._regions[a]},removeRegion:function(a){var b=this._regions[a];this._remove(a,b)},removeRegions:function(){c.each(this._regions,function(a,b){this._remove(b,a)},this)},closeRegions:function(){c.each(this._regions,function(a){a.close()},this)},close:function(){this.removeRegions();var b=Array.prototype.slice.call(arguments);a.Controller.prototype.close.apply(this,b)},_store:function(a,b){this._regions[a]=b,this._setLength()},_remove:function(a,b){b.close(),delete this._regions[a],this._setLength(),this.triggerMethod("region:remove",a,b)},_setLength:function(){this.length=c.size(this._regions)}}),d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return c.each(d,function(a){b.prototype[a]=function(){var b=c.values(this._regions),d=[b].concat(c.toArray(arguments));return c[a].apply(c,d)}}),b}(f),f.TemplateCache=function(a){this.templateId=a},c.extend(f.TemplateCache,{templateCaches:{},get:function(a){var b=this.templateCaches[a];return b||(b=new f.TemplateCache(a),this.templateCaches[a]=b),b.load()},clear:function(){var a,b=d(arguments),c=b.length;if(c>0)for(a=0;c>a;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}}),c.extend(f.TemplateCache.prototype,{load:function(){if(this.compiledTemplate)return this.compiledTemplate;var a=this.loadTemplate(this.templateId);return this.compiledTemplate=this.compileTemplate(a),this.compiledTemplate},loadTemplate:function(a){var b=f.$(a).html();return b&&0!==b.length||e("Could not find template: '"+a+"'","NoTemplateError"),b},compileTemplate:function(a){return c.template(a)}}),f.Renderer={render:function(a,b){if(!a){var c=new Error("Cannot render the template since it's false, null or undefined.");throw c.name="TemplateNotFoundError",c}var d;return d="function"==typeof a?a:f.TemplateCache.get(a),d(b)}},f.View=b.View.extend({constructor:function(a){c.bindAll(this,"render");var d=Array.prototype.slice.apply(arguments);b.View.prototype.constructor.apply(this,d),this.options=a,f.MonitorDOMRefresh(this),this.listenTo(this,"show",this.onShowCalled,this)},triggerMethod:f.triggerMethod,getTemplate:function(){return f.getOption(this,"template")},mixinTemplateHelpers:function(a){a=a||{};var b=f.getOption(this,"templateHelpers");return c.isFunction(b)&&(b=b.call(this)),c.extend(a,b)},configureTriggers:function(){if(this.triggers){var a={},b=c.result(this,"triggers");return c.each(b,function(b,d){var e=c.isObject(b),f=e?b.event:b;a[d]=function(a){if(a){var c=a.preventDefault,d=a.stopPropagation,g=e?b.preventDefault:c,h=e?b.stopPropagation:d;g&&c&&c(),h&&d&&d()}var i={view:this,model:this.model,collection:this.collection};this.triggerMethod(f,i)}},this),a}},delegateEvents:function(a){this._delegateDOMEvents(a),f.bindEntityEvents(this,this.model,f.getOption(this,"modelEvents")),f.bindEntityEvents(this,this.collection,f.getOption(this,"collectionEvents"))},_delegateDOMEvents:function(a){a=a||this.events,c.isFunction(a)&&(a=a.call(this));var d={},e=this.configureTriggers();c.extend(d,a,e),b.View.prototype.delegateEvents.call(this,d)},undelegateEvents:function(){var a=Array.prototype.slice.call(arguments);b.View.prototype.undelegateEvents.apply(this,a),f.unbindEntityEvents(this,this.model,f.getOption(this,"modelEvents")),f.unbindEntityEvents(this,this.collection,f.getOption(this,"collectionEvents"))},onShowCalled:function(){},close:function(){if(!this.isClosed){var a=this.triggerMethod("before:close");a!==!1&&(this.isClosed=!0,this.triggerMethod("close"),this.unbindUIElements(),this.remove())}},bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=c.result(this,"_uiBindings");this.ui={},c.each(c.keys(a),function(b){var c=a[b];this.ui[b]=this.$(c)},this)}},unbindUIElements:function(){this.ui&&this._uiBindings&&(c.each(this.ui,function(a,b){delete this.ui[b]},this),this.ui=this._uiBindings,delete this._uiBindings)}}),f.ItemView=f.View.extend({constructor:function(){f.View.prototype.constructor.apply(this,d(arguments))},serializeData:function(){var a={};return this.model?a=this.model.toJSON():this.collection&&(a={items:this.collection.toJSON()}),a},render:function(){this.isClosed=!1,this.triggerMethod("before:render",this),this.triggerMethod("item:before:render",this);var a=this.serializeData();a=this.mixinTemplateHelpers(a);var b=this.getTemplate(),c=f.Renderer.render(b,a);return this.$el.html(c),this.bindUIElements(),this.triggerMethod("render",this),this.triggerMethod("item:rendered",this),this},close:function(){this.isClosed||(this.triggerMethod("item:before:close"),f.View.prototype.close.apply(this,d(arguments)),this.triggerMethod("item:closed"))}}),f.CollectionView=f.View.extend({itemViewEventPrefix:"itemview",constructor:function(){this._initChildViewStorage(),f.View.prototype.constructor.apply(this,d(arguments)),this._initialEvents()},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this.render,this))},addChildView:function(a){this.closeEmptyView();var b=this.getItemView(a),c=this.collection.indexOf(a);this.addItemView(a,b,c)},onShowCalled:function(){this.children.each(function(a){f.triggerMethod.call(a,"show")})},triggerBeforeRender:function(){this.triggerMethod("before:render",this),this.triggerMethod("collection:before:render",this)},triggerRendered:function(){this.triggerMethod("render",this),this.triggerMethod("collection:rendered",this)},render:function(){return this.isClosed=!1,this.triggerBeforeRender(),this._renderChildren(),this.triggerRendered(),this},_renderChildren:function(){this.closeEmptyView(),this.closeChildren(),this.collection&&this.collection.length>0?this.showCollection():this.showEmptyView()},showCollection:function(){var a;this.collection.each(function(b,c){a=this.getItemView(b),this.addItemView(b,a,c)},this)},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this._showingEmptyView=!0;var c=new b.Model;this.addItemView(c,a,0)}},closeEmptyView:function(){this._showingEmptyView&&(this.closeChildren(),delete this._showingEmptyView)},getEmptyView:function(){return f.getOption(this,"emptyView")},getItemView:function(){var a=f.getOption(this,"itemView");return a||e("An `itemView` must be specified","NoItemViewError"),a},addItemView:function(a,b,d){var e=f.getOption(this,"itemViewOptions");c.isFunction(e)&&(e=e.call(this,a,d));var g=this.buildItemView(a,b,e);this.addChildViewEventForwarding(g),this.triggerMethod("before:item:added",g),this.children.add(g),this.renderItemView(g,d),this._isShown&&f.triggerMethod.call(g,"show"),this.triggerMethod("after:item:added",g)},addChildViewEventForwarding:function(a){var b=f.getOption(this,"itemViewEventPrefix");this.listenTo(a,"all",function(){var c=d(arguments);c[0]=b+":"+c[0],c.splice(1,0,a),f.triggerMethod.apply(this,c)},this)},renderItemView:function(a,b){a.render(),this.appendHtml(this,a,b)},buildItemView:function(a,b,d){var e=c.extend({model:a},d);return new b(e)},removeItemView:function(a){var b=this.children.findByModel(a);this.removeChildView(b),this.checkEmpty()},removeChildView:function(a){a&&(this.stopListening(a),a.close?a.close():a.remove&&a.remove(),this.children.remove(a)),this.triggerMethod("item:removed",a)},checkEmpty:function(){this.collection&&0!==this.collection.length||this.showEmptyView()},appendHtml:function(a,b){a.$el.append(b.el)},_initChildViewStorage:function(){this.children=new b.ChildViewContainer},close:function(){this.isClosed||(this.triggerMethod("collection:before:close"),this.closeChildren(),this.triggerMethod("collection:closed"),f.View.prototype.close.apply(this,d(arguments)))},closeChildren:function(){this.children.each(function(a){this.removeChildView(a)},this),this.checkEmpty()}}),f.CompositeView=f.CollectionView.extend({constructor:function(){f.CollectionView.prototype.constructor.apply(this,d(arguments))},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView,this),this.listenTo(this.collection,"remove",this.removeItemView,this),this.listenTo(this.collection,"reset",this._renderChildren,this))},getItemView:function(){var a=f.getOption(this,"itemView")||this.constructor;return a||e("An `itemView` must be specified","NoItemViewError"),a},serializeData:function(){var a={};return this.model&&(a=this.model.toJSON()),a},render:function(){this.isRendered=!0,this.isClosed=!1,this.resetItemViewContainer(),this.triggerBeforeRender();var a=this.renderModel();return this.$el.html(a),this.bindUIElements(),this.triggerMethod("composite:model:rendered"),this._renderChildren(),this.triggerMethod("composite:rendered"),this.triggerRendered(),this},_renderChildren:function(){this.isRendered&&(f.CollectionView.prototype._renderChildren.call(this),this.triggerMethod("composite:collection:rendered"))},renderModel:function(){var a={};a=this.serializeData(),a=this.mixinTemplateHelpers(a);var b=this.getTemplate();return f.Renderer.render(b,a)},appendHtml:function(a,b){var c=this.getItemViewContainer(a);c.append(b.el)},getItemViewContainer:function(a){if("$itemViewContainer"in a)return a.$itemViewContainer;var b,d=f.getOption(a,"itemViewContainer");if(d){var g=c.isFunction(d)?d():d;b=a.$(g),b.length<=0&&e("The specified `itemViewContainer` was not found: "+a.itemViewContainer,"ItemViewContainerMissingError")}else b=a.$el;return a.$itemViewContainer=b,b},resetItemViewContainer:function(){this.$itemViewContainer&&delete this.$itemViewContainer}}),f.Layout=f.ItemView.extend({regionType:f.Region,constructor:function(a){a=a||{},this._firstRender=!0,this._initializeRegions(a),f.ItemView.prototype.constructor.call(this,a)},render:function(){this.isClosed&&this._initializeRegions(),this._firstRender?this._firstRender=!1:this.isClosed||this._reInitializeRegions();var a=Array.prototype.slice.apply(arguments),b=f.ItemView.prototype.render.apply(this,a);return b},close:function(){if(!this.isClosed){this.regionManager.close();var a=Array.prototype.slice.apply(arguments);f.ItemView.prototype.close.apply(this,a)}},addRegion:function(a,b){var c={};return c[a]=b,this._buildRegions(c)[a]},addRegions:function(a){return this.regions=c.extend({},this.regions,a),this._buildRegions(a)},removeRegion:function(a){return delete this.regions[a],this.regionManager.removeRegion(a)},_buildRegions:function(a){var b=this,c={regionType:f.getOption(this,"regionType"),parentEl:function(){return b.$el}};return this.regionManager.addRegions(a,c)},_initializeRegions:function(a){var b;this._initRegionManager(),b=c.isFunction(this.regions)?this.regions(a):this.regions||{},this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.closeRegions(),this.regionManager.each(function(a){a.reset()})},_initRegionManager:function(){this.regionManager=new f.RegionManager,this.listenTo(this.regionManager,"region:add",function(a,b){this[a]=b,this.trigger("region:add",a,b)}),this.listenTo(this.regionManager,"region:remove",function(a,b){delete this[a],this.trigger("region:remove",a,b)})}}),f.AppRouter=b.Router.extend({constructor:function(a){b.Router.prototype.constructor.apply(this,d(arguments)),this.options=a||{};var c=f.getOption(this,"appRoutes"),e=this._getController();this.processAppRoutes(e,c)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},processAppRoutes:function(a,b){if(b){var d=c.keys(b).reverse();c.each(d,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return f.getOption(this,"controller")},_addAppRoute:function(a,b,d){var e=a[d];if(!e)throw new Error("Method '"+d+"' was not found on the controller");this.route(b,d,c.bind(e,a))}}),f.Application=function(a){this._initRegionManager(),this._initCallbacks=new f.Callbacks,this.vent=new b.Wreqr.EventAggregator,this.commands=new b.Wreqr.Commands,this.reqres=new b.Wreqr.RequestResponse,this.submodules={},c.extend(this,a),this.triggerMethod=f.triggerMethod},c.extend(f.Application.prototype,b.Events,{execute:function(){var a=Array.prototype.slice.apply(arguments);this.commands.execute.apply(this.commands,a)},request:function(){var a=Array.prototype.slice.apply(arguments);return this.reqres.request.apply(this.reqres,a)},addInitializer:function(a){this._initCallbacks.add(a)},start:function(a){this.triggerMethod("initialize:before",a),this._initCallbacks.run(a,this),this.triggerMethod("initialize:after",a),this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},closeRegions:function(){this._regionManager.closeRegions()},removeRegion:function(a){this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},module:function(){var a=d(arguments);return a.unshift(this),f.Module.create.apply(f.Module,a)},_initRegionManager:function(){this._regionManager=new f.RegionManager,this.listenTo(this._regionManager,"region:add",function(a,b){this[a]=b}),this.listenTo(this._regionManager,"region:remove",function(a){delete this[a]})}}),f.Application.extend=f.extend,f.Module=function(a,b){this.moduleName=a,this.submodules={},this._setupInitializersAndFinalizers(),this.app=b,this.startWithParent=!0,this.triggerMethod=f.triggerMethod},c.extend(f.Module.prototype,b.Events,{addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(c.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&(this._isInitialized=!1,f.triggerMethod.call(this,"before:stop"),c.each(this.submodules,function(a){a.stop()}),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),f.triggerMethod.call(this,"stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,d){if(a){var e=c.flatten([this,this.app,b,f,f.$,c,d]);a.apply(this,e)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new f.Callbacks,this._finalizerCallbacks=new f.Callbacks}}),c.extend(f.Module,{create:function(a,b,e){var f=a,g=d(arguments);g.splice(0,3),b=b.split(".");var h=b.length,i=[];return i[h-1]=e,c.each(b,function(b,c){var d=f;f=this._getModule(d,b,a),this._addModuleDefinition(d,f,i[c],g)},this),f},_getModule:function(a,b,c){var d=a[b];return d||(d=new f.Module(b,c),a[b]=d,a.submodules[b]=d),d},_addModuleDefinition:function(a,b,d,e){var f,g;c.isFunction(d)?(f=d,g=!0):c.isObject(d)?(f=d.define,g=d.startWithParent):g=!0,f&&b.addDefinition(f,e),b.startWithParent=b.startWithParent&&g,b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}}),f}(this,Backbone,_);
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.9 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.1.9',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value !== 'string') {
                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite and existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; ary[i]; i += 1) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                        //End of the line. Keep at least one non-dot
                        //path segment at the front so it can be mapped
                        //correctly to disk. Otherwise, there is likely
                        //no path mapping for a path starting with '..'.
                        //This can still fail, but catches the most reasonable
                        //uses of ..
                        break;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgName, pkgConfig, mapValue, nameParts, i, j, nameSegment,
                foundMap, foundI, foundStarMap, starI,
                baseParts = baseName && baseName.split('/'),
                normalizedBaseParts = baseParts,
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name && name.charAt(0) === '.') {
                //If have a base name, try to normalize against it,
                //otherwise, assume it is a top-level require that will
                //be relative to baseUrl in the end.
                if (baseName) {
                    if (getOwn(config.pkgs, baseName)) {
                        //If the baseName is a package name, then just treat it as one
                        //name to concat the name with.
                        normalizedBaseParts = baseParts = [baseName];
                    } else {
                        //Convert baseName to array, and lop off the last part,
                        //so that . matches that 'directory' and not name of the baseName's
                        //module. For instance, baseName of 'one/two/three', maps to
                        //'one/two/three.js', but we want the directory, 'one/two' for
                        //this normalization.
                        normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    }

                    name = normalizedBaseParts.concat(name.split('/'));
                    trimDots(name);

                    //Some use of packages may use a . path to reference the
                    //'main' module name, so normalize for that.
                    pkgConfig = getOwn(config.pkgs, (pkgName = name[0]));
                    name = name.join('/');
                    if (pkgConfig && name === pkgName + '/' + pkgConfig.main) {
                        name = pkgName;
                    }
                } else if (name.indexOf('./') === 0) {
                    // No baseName, so this is ID is resolved relative
                    // to baseUrl, pull off the leading dot.
                    name = name.substring(2);
                }
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break;
                                }
                            }
                        }
                    }

                    if (foundMap) {
                        break;
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            return name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);
                context.require([id]);
                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        normalizedName = normalize(name, parentName, applyMap);
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                //Array splice in the values since the context code has a
                //local var ref to defQueue, so cannot just reassign the one
                //on context.
                apsp.apply(defQueue,
                           [defQueue.length - 1, 0].concat(globalDefQueue));
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return mod.exports;
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            var c,
                                pkg = getOwn(config.pkgs, mod.map.id);
                            // For packages, only support config targeted
                            // at the main module.
                            c = pkg ? getOwn(config.config, mod.map.id + '/' + pkg.main) :
                                      getOwn(config.config, mod.map.id);
                            return  c || {};
                        },
                        exports: defined[mod.map.id]
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var map, modId, err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                map = mod.map;
                modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    this.fetch();
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            if (this.map.isDefine) {
                                //If setting exports via 'module' is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                cjsModule = this.module;
                                if (cjsModule &&
                                        cjsModule.exports !== undefined &&
                                        //Make sure it is not already the exports value
                                        cjsModule.exports !== this.exports) {
                                    exports = cjsModule.exports;
                                } else if (exports === undefined && this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                req.onResourceLoad(context, this.map, this.depMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' + args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                //Save off the paths and packages since they require special processing,
                //they are additive.
                var pkgs = config.pkgs,
                    shim = config.shim,
                    objs = {
                        paths: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (prop === 'map') {
                            if (!config.map) {
                                config.map = {};
                            }
                            mixin(config[prop], value, true, true);
                        } else {
                            mixin(config[prop], value, true);
                        }
                    } else {
                        config[prop] = value;
                    }
                });

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location;

                        pkgObj = typeof pkgObj === 'string' ? { name: pkgObj } : pkgObj;
                        location = pkgObj.location;

                        //Create a brand new object on pkgs, since currentPackages can
                        //be passed in again, and config.pkgs is the internal transformed
                        //state for all package configs.
                        pkgs[pkgObj.name] = {
                            name: pkgObj.name,
                            location: location || pkgObj.name,
                            //Remove leading dot in main, so main paths are normalized,
                            //and remove any trailing .js, since different package
                            //envs have different conventions: some use a module name,
                            //some use a file name.
                            main: (pkgObj.main || 'main')
                                  .replace(currDirRegExp, '')
                                  .replace(jsSuffixRegExp, '')
                        };
                    });

                    //Done with modifications, assing packages back to context config
                    config.pkgs = pkgs;
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overriden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, pkgs, pkg, pkgPath, syms, i, parentModule, url,
                    parentPath;

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;
                    pkgs = config.pkgs;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');
                        pkg = getOwn(pkgs, parentModule);
                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        } else if (pkg) {
                            //If module name is just the package name, then looking
                            //for the main module.
                            if (moduleName === pkg.name) {
                                pkgPath = pkg.location + '/' + pkg.main;
                            } else {
                                pkgPath = pkg.location;
                            }
                            syms.splice(0, i, pkgPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs ? url +
                                        ((url.indexOf('?') === -1 ? '?' : '&') +
                                         config.urlArgs) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/jrburke/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/jrburke/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation that a build has been done so that
                //only one script needs to be loaded anyway. This may need to be
                //reevaluated if other use cases become common.
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one.
                if (!cfg.baseUrl) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                 //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, '')
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        (context ? context.defQueue : globalDefQueue).push([name, deps, callback]);
    };

    define.amd = {
        jQuery: true
    };


    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this));

define("collections/Orders",[],function(){var e={};return e.All=Backbone.Collection.extend({}),e}),define("views/AppView",["collections/Orders"],function(){return{}}),require(["views/AppView"],function(e){e&&console.log("wahoo, everything is working!")}),define("main",function(){});