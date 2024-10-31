/*!
 * Masonry v3.0.3
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(c){var b=Array.prototype.indexOf?function(d,e){return d.indexOf(e)}:function(e,h){for(var f=0,d=e.length;f<d;f++){var g=e[f];if(g===h){return f}}return -1};function a(e,f){var d=e.create("masonry");d.prototype._resetLayout=function(){this.getSize();this._getMeasurement("columnWidth","outerWidth");this._getMeasurement("gutter","outerWidth");this.measureColumns();var g=this.cols;this.colYs=[];while(g--){this.colYs.push(0)}this.maxY=0};d.prototype.measureColumns=function(){var g=this._getSizingContainer();var i=this.items[0];var h=i&&i.element;if(!this.columnWidth){this.columnWidth=h?f(h).outerWidth:this.size.innerWidth}this.columnWidth+=this.gutter;this._containerWidth=f(g).innerWidth;this.cols=Math.floor((this._containerWidth+this.gutter)/this.columnWidth);this.cols=Math.max(this.cols,1)};d.prototype._getSizingContainer=function(){return this.options.isFitWidth?this.element.parentNode:this.element};d.prototype._getItemLayoutPosition=function(p){p.getSize();var m=Math.ceil(p.size.outerWidth/this.columnWidth);m=Math.min(m,this.cols);var g=this._getColGroup(m);var h=Math.min.apply(Math,g);var n=b(g,h);var l={x:this.columnWidth*n,y:h};var o=h+p.size.outerHeight;var j=this.cols+1-g.length;for(var k=0;k<j;k++){this.colYs[n+k]=o}return l};d.prototype._getColGroup=function(j){if(j===1){return this.colYs}var k=[];var l=this.cols+1-j;for(var g=0;g<l;g++){var h=this.colYs.slice(g,g+j);k[g]=Math.max.apply(Math,h)}return k};d.prototype._manageStamp=function(g){var n=f(g);var l=this._getElementOffset(g);var k=this.options.isOriginLeft?l.left:l.right;var h=k+n.outerWidth;var p=Math.floor(k/this.columnWidth);p=Math.max(0,p);var j=Math.floor(h/this.columnWidth);j=Math.min(this.cols-1,j);var o=(this.options.isOriginTop?l.top:l.bottom)+n.outerHeight;for(var m=p;m<=j;m++){this.colYs[m]=Math.max(o,this.colYs[m])}};d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var g={height:this.maxY};if(this.options.isFitWidth){g.width=this._getContainerFitWidth()}return g};d.prototype._getContainerFitWidth=function(){var h=0;var g=this.cols;while(--g){if(this.colYs[g]!==0){break}h++}return(this.cols-h)*this.columnWidth-this.gutter};d.prototype.resize=function(){var g=this._getSizingContainer();var i=f(g);var h=this.size&&i;if(h&&i.innerWidth===this._containerWidth){return}this.layout();delete this.resizeTimeout};return d}if(typeof define==="function"&&define.amd){define(["outlayer","get-size"],a)}else{c.Masonry=a(c.Outlayer,c.getSize)}})(window);