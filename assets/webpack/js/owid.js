!function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],p=0,h=[];p<s.length;p++)a=s[p],r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(u&&u(e);h.length;)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={3:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([411,0]),n()}({411:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(436),n(412),n(439);var o=n(414),r=n(415),i=n(416);o.Analytics.logEvent("OWID_PAGE_LOAD");var a=document.querySelector("form#search-nav");if(a){var s=a.querySelector("input[type=search]");a.addEventListener("submit",function(t){t.preventDefault(),o.Analytics.logEvent("OWID_SITE_SEARCH",{query:s.value}).then(function(){return a.submit()}).catch(function(){return a.submit()})})}!!document.querySelector("a[data-track-click]")&&document.addEventListener("click",function(t){var e=function(t,e){for(var n=t;n;){if(e(n))return n;n=n.parentElement}return null}(t.target,function(t){return null!=t.getAttribute("data-track-click")});e&&o.Analytics.logEvent("OWID_SITE_CLICK",{text:e.innerText,href:e.getAttribute("href")})}),window.runChartsIndexPage=r.runChartsIndexPage,window.runHeaderMenus=i.runHeaderMenus,i.runHeaderMenus()},412:function(t,e,n){window.$=window.jQuery=n(88),n(413);var o=function(){var t=$("article.page"),e=$(".entry-sidebar");if(t.length&&e.length&&!$(".no-sidebar").length&&!(t.find("h2").length<2)){e.attr("style",""),$(window).off("scroll.toc");var n=$(".articleHeader h1, .article-content h2, .article-content h3").map(function(t,e){return $(e)}),o=null,r=function(){var t=$(document).scrollTop(),r=null;n.each(function(e,n){n.offset().top<=t+50&&(r=e)}),r!=o&&(e.find("li.active").removeClass("active"),null!==(o=r)&&e.find("li").eq(o).addClass("active"))};r(),$(window).on("scroll.toc",r)}};o(),$(window).on("resize.toc",o),$(".search-form").on("submit",function(t){""===$(t.target).find("input[type=search]").val()&&t.preventDefault()}),$(".citation-note").on("click",function(){$(".citation-guideline").toggle()}),$("a.ref sup").removeAttr("title"),$("a.ref sup").tooltip({html:!0,delay:{show:100,hide:500},placement:"auto right",trigger:"manual",title:function(){var t=$(this).closest("a.ref").attr("href");return $(t).html()}}),$("a.ref sup").on("mouseover",function(){var t=$(this);t.tooltip("show"),$("body").on("mouseover.tooltip",function(e){$(e.target).closest(".tooltip").length||$(e.target).closest(".ref").length||(t.tooltip("hide"),$("body").off("mouseover.tooltip"))})}),-1==document.cookie.indexOf("wordpress")&&-1==document.cookie.indexOf("wp-settings")&&-1==document.cookie.indexOf("isAdmin")||$("#wpadminbar").show(),$("html").addClass("js")},413:function(t,e){!function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,n,o){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var r=this.options.trigger.split(" "),i=r.length;i--;){var a=r[i];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,o){n[t]!=o&&(e[t]=o)}),e},e.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState)n.hoverState="in";else{if(clearTimeout(n.timeout),n.hoverState="in",!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)}},e.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},e.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out",!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)}},e.prototype.show=function(){var n=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(n);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(n.isDefaultPrevented()||!o)return;var r=this,i=this.tip(),a=this.getUID(this.type);this.setContent(),i.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&i.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(s);c&&(s=s.replace(l,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var u=this.getPosition(),p=i[0].offsetWidth,h=i[0].offsetHeight;if(c){var f=s,d=this.getPosition(this.$viewport);s="bottom"==s&&u.bottom+h>d.bottom?"top":"top"==s&&u.top-h<d.top?"bottom":"right"==s&&u.right+p>d.width?"left":"left"==s&&u.left-p<d.left?"right":s,i.removeClass(f).addClass(s)}var m=this.getCalculatedOffset(s,u,p,h);this.applyPlacement(m,s);var g=function(){var t=r.hoverState;r.$element.trigger("shown.bs."+r.type),r.hoverState=null,"out"==t&&r.leave(r)};t.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",g).emulateTransitionEnd(e.TRANSITION_DURATION):g()}},e.prototype.applyPlacement=function(e,n){var o=this.tip(),r=o[0].offsetWidth,i=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),s=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),e.top+=a,e.left+=s,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,c=o[0].offsetHeight;"top"==n&&c!=i&&(e.top=e.top+i-c);var u=this.getViewportAdjustedDelta(n,e,l,c);u.left?e.left+=u.left:e.top+=u.top;var p=/top|bottom/.test(n),h=p?2*u.left-r+l:2*u.top-i+c,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(h,o[0][f],p)},e.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(n){var o=this,r=t(this.$tip),i=t.Event("hide.bs."+this.type);function a(){"in"!=o.hoverState&&r.detach(),o.$element&&o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),n&&n()}if(this.$element.trigger(i),!i.isDefaultPrevented())return r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",a).emulateTransitionEnd(e.TRANSITION_DURATION):a(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var n=(e=e||this.$element)[0],o="BODY"==n.tagName,r=n.getBoundingClientRect();null==r.width&&(r=t.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var i=window.SVGElement&&n instanceof window.SVGElement,a=o?{top:0,left:0}:i?null:e.offset(),s={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},r,s,l,a)},e.prototype.getCalculatedOffset=function(t,e,n,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-n}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,n,o){var r={top:0,left:0};if(!this.$viewport)return r;var i=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var s=e.top-i-a.scroll,l=e.top+i-a.scroll+o;s<a.top?r.top=a.top-s:l>a.top+a.height&&(r.top=a.top+a.height-l)}else{var c=e.left-i,u=e.left+i+n;c<a.left?r.left=a.left-c:u>a.right&&(r.left=a.left+a.width-u)}return r},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var n=this;e&&((n=t(e.currentTarget).data("bs."+this.type))||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var o=t(this),r=o.data("bs.tooltip"),i="object"==typeof n&&n;!r&&/destroy|hide/.test(n)||(r||o.data("bs.tooltip",r=new e(this,i)),"string"==typeof n&&r[n]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery)},414:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.logEvent=function(t,e){return e=Object.assign({},{context:{pageHref:window.location.href,pagePath:window.location.pathname,pageTitle:document.title.replace(/ - [^-]+/,"")}},e),new Promise(function(n,o){window.amplitude?window.amplitude.getInstance().logEvent(t,e,function(){n()}):(console.log(t,e),n())})},t}();e.Analytics=o},415:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});var r=n(30),i=n(17),a=n(3);var s=function(){function t(){this.chartItems=[],this.chartItemsByTitle={},this.results=[],this.sections=[],this.query="",this.searchInput=document.querySelector(".chartsSearchInput"),this.sections=Array.from(document.querySelectorAll(".ChartsIndexPage main section"));var t=Array.from(document.querySelectorAll(".ChartsIndexPage main li"));this.chartItems=t.map(function(t){return{title:t.textContent.replace(/₂/g,"2"),li:t,ul:t.closest("ul")}}),this.chartItemsByTitle=i.keyBy(this.chartItems,"title"),this.strings=this.chartItems.map(function(t){return r.prepare(t.title)})}return Object.defineProperty(t.prototype,"searchStrings",{get:function(){return this.chartItems.map(function(t){return r.prepare(t.title)})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"searchResults",{get:function(){return r.go(this.query,this.searchStrings,{threshold:-150})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"resultsByTitle",{get:function(){return i.keyBy(this.searchResults,"target")},enumerable:!0,configurable:!0}),t.prototype.onSearchInput=function(){this.query=this.searchInput.value},t.prototype.render=function(){var t;if(history.replaceState(null,document.title,window.location.pathname+(this.query?"#search="+(t=this.query,encodeURIComponent(t.replace(/ /g,"-"))):"")),this.query){for(var e=0,n=this.chartItems;e<n.length;e++){h=n[e];var o=this.resultsByTitle[h.title];o?(h.li.style.display=null,h.li.children[0].innerHTML=r.highlight(o)):h.li.style.display="none"}for(var i=0,a=this.sections;i<a.length;i++){c=a[i];Array.from(c.querySelectorAll("li")).some(function(t){return"none"!==t.style.display})?c.style.display=null:c.style.display="none"}}else{for(var s=0,l=this.sections;s<l.length;s++){var c;(c=l[s]).style.display=null}for(var u=0,p=this.chartItems;u<p.length;u++){var h;(h=p[u]).ul.append(h.li),h.li.style.display=null,h.li.children[0].innerHTML=h.title}}},t.prototype.run=function(){var t=this;this.searchInput.addEventListener("input",this.onSearchInput),a.autorun(function(){return t.render()});var e,n=window.location.hash.match(/search=(.+)/);n&&(this.searchInput.value=(e=n[1],decodeURIComponent(e).replace(/-/g," "))),this.query=this.searchInput.value},o([a.observable],t.prototype,"query",void 0),o([a.computed],t.prototype,"searchStrings",null),o([a.computed],t.prototype,"searchResults",null),o([a.computed],t.prototype,"resultsByTitle",null),o([a.action.bound],t.prototype,"onSearchInput",null),o([a.action.bound],t.prototype,"run",null),t}();e.runChartsIndexPage=function(){(new s).run()}},416:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{l(o.next(t))}catch(t){i(t)}}function s(t){try{l(o.throw(t))}catch(t){i(t)}}function l(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}l((o=o.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),c=n(28),u=n(3),p=n(5),h=n(27),f=n(26),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.setCategory=function(t){this.activeCategory=t},e.prototype.render=function(){var t=this,e=this.activeCategory,n=this.props.categories;return l.createElement(l.Fragment,null,l.createElement("nav",{id:"owid-topbar"},l.createElement("a",{className:"logo",href:"/"},"Our World in Data"),l.createElement("ul",{className:"desktop"},l.createElement("li",null,l.createElement("form",{id:"search-nav",action:"https://google.com/search",method:"GET"},l.createElement("input",{type:"hidden",name:"sitesearch",value:"ourworldindata.org"}),l.createElement("input",{type:"search",name:"q",placeholder:"Search..."}))),l.createElement("li",null,l.createElement("a",{href:"/charts"},"Charts")),l.createElement("li",null,l.createElement("a",{href:"https://sdg-tracker.org",title:"Sustainable Development Goals"},"SDGs")),l.createElement("li",null,l.createElement("a",{href:"/blog"},"Blog")),l.createElement("li",null,l.createElement("a",{href:"/about"},"About")),l.createElement("li",null,l.createElement("a",{href:"/teaching"},"Teaching")),l.createElement("li",null,l.createElement("a",{href:"/support"},"Donate")))),l.createElement("div",{id:"category-nav",className:"desktop"},l.createElement("ul",null,n.map(function(n){return l.createElement("li",{key:n.slug,className:"category"+(e===n?" active":""),title:n.name},l.createElement("a",{onClick:function(){return t.setCategory(n)}},l.createElement("span",null,n.name)),l.createElement("ul",{className:"entries"},l.createElement("li",null,l.createElement("hr",null)),n.entries.map(function(t){return l.createElement("li",{key:t.slug},l.createElement("a",{className:t.starred?"starred":void 0,title:t.starred?"Starred pages are our best and most complete entries.":void 0,href:"/"+t.slug},t.title))})))}))),l.createElement("div",{id:"entries-nav",className:"desktop"},e&&l.createElement(l.Fragment,null,l.createElement("li",{key:0},l.createElement("hr",null)),e.entries.map(function(t){return l.createElement("li",{key:t.slug},l.createElement("a",{className:t.starred?"starred":void 0,title:t.starred?"Starred pages are our best and most complete entries.":void 0,href:"/"+t.slug},t.title))}))))},i([u.observable.ref],e.prototype,"activeCategory",void 0),i([u.action.bound],e.prototype,"setCategory",null),e=i([p.observer],e)}(l.Component);e.DesktopHeader=d;var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.toggleCategory=function(t){this.activeCategory===t?this.activeCategory=void 0:this.activeCategory=t},e.prototype.render=function(){var t=this,e=this.props.categories,n=this.activeCategory;return l.createElement("div",{id:"topics-dropdown",className:"mobile"},l.createElement("ul",null,l.createElement("li",{className:"header"},l.createElement("h2",null,"Entries")),e.map(function(e){return l.createElement("li",{key:e.slug,className:"category"},l.createElement("a",{onClick:function(){return t.toggleCategory(e)}},l.createElement("span",null,e.name)),n===e&&l.createElement("div",{className:"subcategory-menu"},l.createElement("ul",null,e.entries.map(function(t){return l.createElement("li",{key:t.slug},l.createElement("a",{className:t.starred?"starred":void 0,title:t.starred?"Starred pages are our best and most complete entries.":void 0,href:"/"+t.slug},t.title))}))))}),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"/charts"},"Charts")),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"https://sdg-tracker.org"},"SDGs")),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"/blog"},"Blog")),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"/about"},"About")),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"/teaching"},"Teaching")),l.createElement("li",{className:"end-link"},l.createElement("a",{href:"/support"},"Donate"))))},i([u.observable.ref],e.prototype,"activeCategory",void 0),i([u.action.bound],e.prototype,"toggleCategory",null),e=i([p.observer],e)}(l.Component);e.MobileEntriesMenu=m;var g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.showSearch=!1,e.showCategories=!1,e}return r(e,t),e.prototype.onToggleSearch=function(){this.showSearch=!this.showSearch},e.prototype.onToggleCategories=function(){this.showCategories=!this.showCategories},e.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("nav",{id:"owid-topbar"},l.createElement("a",{className:"logo",href:"/"},"Our World in Data"),l.createElement("ul",{className:"mobile"},l.createElement("li",{className:"nav-button"},l.createElement("a",{onClick:this.onToggleSearch},l.createElement(h.FontAwesomeIcon,{icon:f.faSearch}))),l.createElement("li",{className:"nav-button"},l.createElement("a",{onClick:this.onToggleCategories,"data-expand":"#topics-dropdown",className:"mobile"},l.createElement(h.FontAwesomeIcon,{icon:f.faBars}))))),this.showSearch&&l.createElement("div",{id:"search-dropdown",className:"mobile"},l.createElement("form",{id:"search-nav",action:"https://google.com/search",method:"GET"},l.createElement("input",{type:"hidden",name:"sitesearch",value:"ourworldindata.org"}),l.createElement("input",{type:"search",name:"q",placeholder:"Search...",autoFocus:!0}))),this.showCategories&&l.createElement(m,{categories:this.props.categories}))},i([u.observable],e.prototype,"showSearch",void 0),i([u.observable],e.prototype,"showCategories",void 0),i([u.action.bound],e.prototype,"onToggleSearch",null),i([u.action.bound],e.prototype,"onToggleCategories",null),e=i([p.observer],e)}(l.Component);e.MobileHeader=g;var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onResize=function(){this.width=window.innerWidth},e.prototype.componentDidMount=function(){this.onResize(),window.addEventListener("resize",this.onResize)},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},e.prototype.render=function(){return this.width>1060?l.createElement(d,{categories:this.props.categories}):l.createElement(g,{categories:this.props.categories})},i([u.observable],e.prototype,"width",void 0),i([u.action.bound],e.prototype,"onResize",null),e=i([p.observer],e)}(l.Component);e.SiteHeaderMenus=y;var v=function(){function t(){}return t.prototype.run=function(){return a(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return[4,fetch("/headerMenu.json",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}})];case 1:return[4,e.sent().json()];case 2:return t=e.sent(),c.render(l.createElement(y,{categories:t.categories}),document.querySelector(".SiteHeader")),[2]}})})},t}();e.HeaderMenus=v,e.runHeaderMenus=function(){(new v).run()}},436:function(t,e){t.exports={clearfix:"clearfix",button:"button",ref:"ref",narrow_iframe:"narrow_iframe","article-content":"article-content",tableContainer:"tableContainer",plain:"plain",tablepress:"tablepress",SiteHeader:"SiteHeader","owid-topbar":"owid-topbar",logo:"logo",mobile:"mobile","widget-area":"widget-area","menu-item-1877":"menu-item-1877","entries-nav":"entries-nav",desktop:"desktop","search-nav":"search-nav","category-nav":"category-nav",active:"active",selected:"selected",entries:"entries",right:"right","subcategory-menu":"subcategory-menu","submenu-title":"submenu-title","nav-button":"nav-button","topics-dropdown":"topics-dropdown",header:"header",category:"category","end-link":"end-link","search-dropdown":"search-dropdown",wpadminbar:"wpadminbar",SiteFooter:"SiteFooter",column:"column",subscribe:"subscribe","donation-thanks":"donation-thanks","supporters-left":"supporters-left","supporters-right":"supporters-right","blog-header":"blog-header",blog:"blog","site-content":"site-content",posts:"posts",post:"post","entry-meta":"entry-meta","single-post":"single-post","entry-title":"entry-title",pagination:"pagination","page-numbers":"page-numbers",current:"current","blog-sidebar":"blog-sidebar","blog-content":"blog-content","screen-reader-text":"screen-reader-text","blog-info":"blog-info","blog-abstract":"blog-abstract","fancybox-frame":"fancybox-frame","fancybox-wrap":"fancybox-wrap","chart-wrapper-inner":"chart-wrapper-inner","deep-link":"deep-link","un-button":"un-button","un-bottom":"un-bottom",css3:"css3","archive-pagination":"archive-pagination",star:"star","owid-data":"owid-data",starred:"starred","article-footer":"article-footer",FrontPage:"FrontPage",left:"left","title-author-byline":"title-author-byline","homepage-content":"homepage-content",social:"social","homepage-latest":"homepage-latest","homepage-blog":"homepage-blog",more:"more","homepage-cover":"homepage-cover","lead-in":"lead-in","down-arrow":"down-arrow",subheading:"subheading","homepage-entries":"homepage-entries","owid-presentations":"owid-presentations","homepage-twitter":"homepage-twitter","link-container":"link-container","teaching-hub":"teaching-hub",columns:"columns","primary-button":"primary-button",label:"label",note:"note","authors-byline":"authors-byline",separator:"separator",home:"home","footer-widgets":"footer-widgets","widget-title":"widget-title",LongFormPage:"LongFormPage",articleHeader:"articleHeader",latex:"latex","datasources-hr":"datasources-hr",footnotes:"footnotes",citation:"citation",grapherPreview:"grapherPreview",page:"page",contentContainer:"contentContainer","entry-toc":"entry-toc",section:"section",nosubs:"nosubs",subsection:"subsection","entry-sidebar":"entry-sidebar","sidebar-container":"sidebar-container","citation-note":"citation-note","citation-guideline":"citation-guideline",tooltip:"tooltip",in:"in","tooltip-top":"tooltip-top","bs-tether-element-attached-bottom":"bs-tether-element-attached-bottom","tooltip-arrow":"tooltip-arrow","tooltip-right":"tooltip-right","bs-tether-element-attached-left":"bs-tether-element-attached-left","tooltip-bottom":"tooltip-bottom","bs-tether-element-attached-top":"bs-tether-element-attached-top","tooltip-left":"tooltip-left","bs-tether-element-attached-right":"bs-tether-element-attached-right","tooltip-inner":"tooltip-inner","print-only":"print-only",js:"js","js-only":"js-only","no-print":"no-print",ChartsIndexPage:"ChartsIndexPage",chartsHeader:"chartsHeader"}},439:function(t,e){t.exports={"svg-inline--fa":"svg-inline--fa","fa-lg":"fa-lg","fa-w-1":"fa-w-1","fa-w-2":"fa-w-2","fa-w-3":"fa-w-3","fa-w-4":"fa-w-4","fa-w-5":"fa-w-5","fa-w-6":"fa-w-6","fa-w-7":"fa-w-7","fa-w-8":"fa-w-8","fa-w-9":"fa-w-9","fa-w-10":"fa-w-10","fa-w-11":"fa-w-11","fa-w-12":"fa-w-12","fa-w-13":"fa-w-13","fa-w-14":"fa-w-14","fa-w-15":"fa-w-15","fa-w-16":"fa-w-16","fa-w-17":"fa-w-17","fa-w-18":"fa-w-18","fa-w-19":"fa-w-19","fa-w-20":"fa-w-20","fa-pull-left":"fa-pull-left","fa-pull-right":"fa-pull-right","fa-border":"fa-border","fa-li":"fa-li","fa-fw":"fa-fw","fa-layers":"fa-layers","fa-layers-text":"fa-layers-text","fa-layers-counter":"fa-layers-counter","fa-layers-bottom-right":"fa-layers-bottom-right","fa-layers-bottom-left":"fa-layers-bottom-left","fa-layers-top-right":"fa-layers-top-right","fa-layers-top-left":"fa-layers-top-left","fa-xs":"fa-xs","fa-sm":"fa-sm","fa-1x":"fa-1x","fa-2x":"fa-2x","fa-3x":"fa-3x","fa-4x":"fa-4x","fa-5x":"fa-5x","fa-6x":"fa-6x","fa-7x":"fa-7x","fa-8x":"fa-8x","fa-9x":"fa-9x","fa-10x":"fa-10x","fa-ul":"fa-ul",fa:"fa",fas:"fas",far:"far",fal:"fal",fab:"fab","fa-spin":"fa-spin","fa-pulse":"fa-pulse","fa-rotate-90":"fa-rotate-90","fa-rotate-180":"fa-rotate-180","fa-rotate-270":"fa-rotate-270","fa-flip-horizontal":"fa-flip-horizontal","fa-flip-vertical":"fa-flip-vertical","fa-stack":"fa-stack","fa-stack-1x":"fa-stack-1x","fa-stack-2x":"fa-stack-2x","fa-inverse":"fa-inverse","sr-only":"sr-only","sr-only-focusable":"sr-only-focusable"}}});