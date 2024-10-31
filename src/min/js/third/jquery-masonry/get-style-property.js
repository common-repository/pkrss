/*!
 * getStyleProperty by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */
(function(c){var d="Webkit Moz ms Ms O".split(" ");var b=document.documentElement.style;function a(h){if(!h){return}if(typeof b[h]==="string"){return h}h=h.charAt(0).toUpperCase()+h.slice(1);var f;for(var g=0,e=d.length;g<e;g++){f=d[g]+h;if(typeof b[f]==="string"){return f}}}if(typeof define==="function"&&define.amd){define(function(){return a})}else{c.getStyleProperty=a}})(window);