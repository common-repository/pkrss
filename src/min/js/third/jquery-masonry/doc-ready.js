/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */
(function(d){var b=d.document;var a=[];function c(g){if(typeof g!=="function"){return}if(c.isReady){g()}else{a.push(g)}}c.isReady=false;function f(l){var k=l.type==="readystatechange"&&b.readyState!=="complete";if(c.isReady||k){return}c.isReady=true;for(var h=0,g=a.length;h<g;h++){var j=a[h];j()}}function e(g){g.bind(b,"DOMContentLoaded",f);g.bind(b,"readystatechange",f);g.bind(d,"load",f);return c}if(typeof define==="function"&&define.amd){define(["eventie"],e)}else{d.docReady=e(d.eventie)}})(this);