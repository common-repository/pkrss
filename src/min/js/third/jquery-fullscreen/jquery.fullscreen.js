(function(h){function b(){return document[!f?"fullScreen":"webkit"===f?"webkitIsFullScreen":f+"FullScreen"]}function d(){return document[f?f+"CancelFullScreen":"cancelFullScreen"]()}var a=typeof document.cancelFullScreen!=="undefined",g=["webkit","moz","o","ms","khtml"],f="",e=function(){},c;if(!a){for(c=0;f=g[c];c++){if(typeof document[f+"CancelFullScreen"]!=="undefined"){a=true;break}}}if(a){h.fn.requestFullScreen=function(){return this.each(function(){return this[f?f+"RequestFullScreen":"requestFullScreen"]()})};h.fn.fullScreenChange=function(k){var i=[f+"fullscreenchange"].concat([].slice.call(arguments,0)),j=h(this);return j.bind.apply(j,i)};h.FullScreen={isFullScreen:b,cancelFullScreen:d}}else{h.fn.requestFullScreen=h.fn.fullScreenChange=e;h.FullScreen={isFullScreen:function(){return false},cancelFullScreen:e}}})(jQuery);