/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
(function(d){var a=document.documentElement;var e=function(){};if(a.addEventListener){e=function(h,g,f){h.addEventListener(g,f,false)}}else{if(a.attachEvent){e=function(h,g,f){h[g+f]=f.handleEvent?function(){var i=d.event;i.target=i.target||i.srcElement;f.handleEvent.call(f,i)}:function(){var i=d.event;i.target=i.target||i.srcElement;f.call(h,i)};h.attachEvent("on"+g,h[g+f])}}}var c=function(){};if(a.removeEventListener){c=function(h,g,f){h.removeEventListener(g,f,false)}}else{if(a.detachEvent){c=function(i,g,f){i.detachEvent("on"+g,i[g+f]);try{delete i[g+f]}catch(h){i[g+f]=undefined}}}}var b={bind:e,unbind:c};if(typeof define==="function"&&define.amd){define(b)}else{d.eventie=b}})(this);