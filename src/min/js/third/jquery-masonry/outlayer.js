/*!
 * Outlayer v1.0.0
 * the brains and guts of a layout library
 */
(function(f){var i=f.document;var c=f.console;var n=f.jQuery;var m=function(){};function h(q,p){for(var r in p){q[r]=p[r]}return q}var o=Object.prototype.toString;function d(p){return o.call(p)==="[object Array]"}function a(s){var r=[];if(d(s)){r=s}else{if(typeof s.length==="number"){for(var q=0,p=s.length;q<p;q++){r.push(s[q])}}else{r.push(s)}}return r}var g=(typeof HTMLElement==="object")?function e(p){return p instanceof HTMLElement}:function b(p){return p&&typeof p==="object"&&p.nodeType===1&&typeof p.nodeName==="string"};var j=Array.prototype.indexOf?function(p,q){return p.indexOf(q)}:function(r,s){for(var q=0,p=r.length;q<p;q++){if(r[q]===s){return q}}return -1};function k(p){return p.replace(/(.)([A-Z])/g,function(r,q,s){return q+"-"+s}).toLowerCase()}function l(t,w,q,y,x,z,r){var u=0;var p={};function s(B,A){if(typeof B==="string"){B=i.querySelector(B)}if(!B||!g(B)){if(c){c.error("Bad "+this.settings.namespace+" element: "+B)}return}this.element=B;this.options=h({},this.options);h(this.options,A);var C=++u;this.element.outlayerGUID=C;p[C]=this;this._create();if(this.options.isInitLayout){this.layout()}}s.prototype.settings={namespace:"outlayer",item:r};s.prototype.options={containerStyle:{position:"relative"},isInitLayout:true,isOriginLeft:true,isOriginTop:true,isResizeBound:true,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};h(s.prototype,y.prototype);s.prototype._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);h(this.element.style,this.options.containerStyle);if(this.options.isResizeBound){this.bindResize()}};s.prototype.reloadItems=function(){this.items=this._getItems(this.element.children)};s.prototype._getItems=function(C){var F=this._filterFindItemElements(C);var D=this.settings.item;var B=[];for(var E=0,A=F.length;E<A;E++){var H=F[E];var G=new D(H,this,this.options.itemOptions);B.push(G)}return B};s.prototype._filterFindItemElements=function(A){A=a(A);var B=this.options.itemSelector;if(!B){return A}var F=[];for(var E=0,G=A.length;E<G;E++){var C=A[E];if(z(C,B)){F.push(C)}var H=C.querySelectorAll(B);for(var D=0,I=H.length;D<I;D++){F.push(H[D])}}return F};s.prototype.getItemElements=function(){var B=[];for(var C=0,A=this.items.length;C<A;C++){B.push(this.items[C].element)}return B};s.prototype.layout=function(){this._resetLayout();this._manageStamps();var A=this.options.isLayoutInstant!==undefined?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,A);this._isLayoutInited=true};s.prototype._init=s.prototype.layout;s.prototype._resetLayout=function(){this.getSize()};s.prototype.getSize=function(){this.size=x(this.element)};s.prototype._getMeasurement=function(C,A){var B=this.options[C];var D;if(!B){this[C]=0}else{if(typeof B==="string"){D=this.element.querySelector(B)}else{if(g(B)){D=B}}this[C]=D?x(D)[A]:B}};s.prototype.layoutItems=function(A,B){A=this._getItemsForLayout(A);this._layoutItems(A,B);this._postLayout()};s.prototype._getItemsForLayout=function(B){var E=[];for(var C=0,A=B.length;C<A;C++){var D=B[C];if(!D.isIgnored){E.push(D)}}return E};s.prototype._layoutItems=function(D,H){if(!D||!D.length){this.emitEvent("layoutComplete",[this,D]);return}this._itemsOn(D,"layout",function G(){this.emitEvent("layoutComplete",[this,D])});var C=[];for(var E=0,B=D.length;E<B;E++){var F=D[E];var A=this._getItemLayoutPosition(F);A.item=F;A.isInstant=H;C.push(A)}this._processLayoutQueue(C)};s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}};s.prototype._processLayoutQueue=function(B){for(var C=0,A=B.length;C<A;C++){var D=B[C];this._positionItem(D.item,D.x,D.y,D.isInstant)}};s.prototype._positionItem=function(B,A,D,C){if(C){B.goTo(A,D)}else{B.moveTo(A,D)}};s.prototype._postLayout=function(){var A=this._getContainerSize();if(A){this._setContainerMeasure(A.width,true);this._setContainerMeasure(A.height,false)}};s.prototype._getContainerSize=m;s.prototype._setContainerMeasure=function(A,B){if(A===undefined){return}var C=this.size;if(C.isBorderBox){A+=B?C.paddingLeft+C.paddingRight+C.borderLeftWidth+C.borderRightWidth:C.paddingBottom+C.paddingTop+C.borderTopWidth+C.borderBottomWidth}A=Math.max(A,0);this.element.style[B?"width":"height"]=A+"px"};s.prototype._itemsOn=function(H,D,I){var A=0;var G=H.length;var F=this;function C(){A++;if(A===G){I.call(F)}return true}for(var B=0,E=H.length;B<E;B++){var J=H[B];J.on(D,C)}};s.prototype.ignore=function(B){var A=this.getItem(B);if(A){A.isIgnored=true}};s.prototype.unignore=function(B){var A=this.getItem(B);if(A){delete A.isIgnored}};s.prototype.stamp=function(B){B=this._find(B);if(!B){return}this.stamps=this.stamps.concat(B);for(var C=0,A=B.length;C<A;C++){var D=B[C];this.ignore(D)}};s.prototype.unstamp=function(B){B=this._find(B);if(!B){return}for(var D=0,A=B.length;D<A;D++){var E=B[D];var C=j(this.stamps,E);if(C!==-1){this.stamps.splice(C,1)}this.unignore(E)}};s.prototype._find=function(A){if(!A){return}if(typeof A==="string"){A=this.element.querySelectorAll(A)}A=a(A);return A};s.prototype._manageStamps=function(){if(!this.stamps||!this.stamps.length){return}this._getBoundingRect();for(var C=0,A=this.stamps.length;C<A;C++){var B=this.stamps[C];this._manageStamp(B)}};s.prototype._getBoundingRect=function(){var A=this.element.getBoundingClientRect();var B=this.size;this._boundingRect={left:A.left+B.paddingLeft+B.borderLeftWidth,top:A.top+B.paddingTop+B.borderTopWidth,right:A.right-(B.paddingRight+B.borderRightWidth),bottom:A.bottom-(B.paddingBottom+B.borderBottomWidth)}};s.prototype._manageStamp=m;s.prototype._getElementOffset=function(D){var A=D.getBoundingClientRect();var C=this._boundingRect;var B=x(D);var E={left:A.left-C.left-B.marginLeft,top:A.top-C.top-B.marginTop,right:C.right-A.right-B.marginRight,bottom:C.bottom-A.bottom-B.marginBottom};return E};s.prototype.handleEvent=function(A){var B="on"+A.type;if(this[B]){this[B](A)}};s.prototype.bindResize=function(){if(this.isResizeBound){return}w.bind(f,"resize",this);this.isResizeBound=true};s.prototype.unbindResize=function(){w.unbind(f,"resize",this);this.isResizeBound=false};s.prototype.onresize=function(){if(this.resizeTimeout){clearTimeout(this.resizeTimeout)}var B=this;function A(){B.resize()}this.resizeTimeout=setTimeout(A,100)};s.prototype.resize=function(){var B=x(this.element);var A=this.size&&B;if(A&&B.innerWidth===this.size.innerWidth){return}this.layout();delete this.resizeTimeout};s.prototype.addItems=function(B){var A=this._getItems(B);if(!A.length){return}this.items=this.items.concat(A);return A};s.prototype.appended=function(B){var A=this.addItems(B);if(!A.length){return}this.layoutItems(A,true);this.reveal(A)};s.prototype.prepended=function(B){var A=this._getItems(B);if(!A.length){return}var C=this.items.slice(0);this.items=A.concat(C);this._resetLayout();this.layoutItems(A,true);this.reveal(A);this.layoutItems(C)};s.prototype.reveal=function(B){if(!B||!B.length){return}for(var C=0,A=B.length;C<A;C++){var D=B[C];D.reveal()}};s.prototype.hide=function(B){if(!B||!B.length){return}for(var C=0,A=B.length;C<A;C++){var D=B[C];D.hide()}};s.prototype.getItem=function(D){for(var B=0,A=this.items.length;B<A;B++){var C=this.items[B];if(C.element===D){return C}}};s.prototype.getItems=function(C){if(!C||!C.length){return}var B=[];for(var D=0,A=C.length;D<A;D++){var F=C[D];var E=this.getItem(F);if(E){B.push(E)}}return B};s.prototype.remove=function(B){B=a(B);var E=this.getItems(B);this._itemsOn(E,"remove",function(){this.emitEvent("removeComplete",[this,E])});for(var D=0,A=E.length;D<A;D++){var F=E[D];F.remove();var C=j(this.items,F);this.items.splice(C,1)}};s.prototype.destroy=function(){var C=this.element.style;C.height="";C.position="";C.width="";for(var B=0,A=this.items.length;B<A;B++){var D=this.items[B];D.destroy()}this.unbindResize();delete this.element.outlayerGUID};s.data=function(A){var B=A&&A.outlayerGUID;return B&&p[B]};function v(B,A){B.prototype[A]=h({},s.prototype[A])}s.create=function(D,B){function C(){s.apply(this,arguments)}h(C.prototype,s.prototype);v(C,"options");v(C,"settings");h(C.prototype.options,B);C.prototype.settings.namespace=D;C.data=s.data;C.Item=function A(){r.apply(this,arguments)};C.Item.prototype=new r();C.prototype.settings.item=C.Item;q(function(){var K=k(D);var E=i.querySelectorAll(".js-"+K);var L="data-"+K+"-options";for(var G=0,H=E.length;G<H;G++){var F=E[G];var I=F.getAttribute(L);var N;try{N=I&&JSON.parse(I)}catch(J){if(c){c.error("Error parsing "+L+" on "+F.nodeName.toLowerCase()+(F.id?"#"+F.id:"")+": "+J)}continue}var M=new C(F,N);if(n){n.data(F,D,M)}}});if(n&&n.bridget){n.bridget(D,C)}return C};s.Item=r;return s}if(typeof define==="function"&&define.amd){define(["classie","eventie","doc-ready","eventEmitter","get-size","matches-selector","outlayer/item"],l)}else{f.Outlayer=l(f.classie,f.eventie,f.docReady,f.EventEmitter,f.getSize,f.matchesSelector,f.Outlayer.Item)}})(window);