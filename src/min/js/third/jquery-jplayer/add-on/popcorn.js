(function(r,n){if(!n.addEventListener){r.Popcorn={isSupported:false};var v=("byId forEach extend effects error guid sizeOf isArray nop position disable enable destroyaddTrackEvent removeTrackEvent getTrackEvents getTrackEvent getLastTrackEventId timeUpdate plugin removePlugin compose effect xhr getJSONP getScript").split(/\s+/);while(v.length){r.Popcorn[v.shift()]=function(){}}return}var i=Array.prototype,f=Object.prototype,t=i.forEach,o=i.slice,k=f.hasOwnProperty,q=f.toString,d=r.Popcorn,e=[],u=false,s=false,j={events:{hash:{},apis:{}}},g=(function(){return r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(x,w){r.setTimeout(x,16)}}()),c=function(w){return Object.keys?Object.keys(w):(function(z){var x,y=[];for(x in z){if(k.call(z,x)){y.push(x)}}return y})(w)},p=function(w,x){return new p.p.init(w,x||null)};p.version="@VERSION";p.isSupported=true;p.instances=[];p.p=p.prototype={init:function(y,z){var B,D,x=this;if(typeof y==="function"){if(n.readyState==="complete"){y(n,p);return}e.push(y);if(!u){u=true;var w=function(){s=true;n.removeEventListener("DOMContentLoaded",w,false);for(var F=0,E=e.length;F<E;F++){e[F].call(n,p)}e=null};n.addEventListener("DOMContentLoaded",w,false)}return}if(typeof y==="string"){try{B=n.querySelector(y)}catch(C){throw new Error("Popcorn.js Error: Invalid media element selector: "+y)}}this.media=B||y;D=(this.media.nodeName&&this.media.nodeName.toLowerCase())||"video";this[D]=this.media;this.options=z||{};this.id=this.options.id||p.guid(D);if(p.byId(this.id)){throw new Error("Popcorn.js Error: Cannot use duplicate ID ("+this.id+")")}this.isDestroyed=false;this.data={running:{cue:[]},timeUpdate:p.nop,disabled:{},events:{},hooks:{},history:[],state:{volume:this.media.volume},trackRefs:{},trackEvents:{byStart:[{start:-1,end:-1}],byEnd:[{start:-1,end:-1}],animating:[],startIndex:0,endIndex:0,previousUpdateTime:-1}};p.instances.push(this);var A=function(){if(x.media.currentTime<0){x.media.currentTime=0}x.media.removeEventListener("loadeddata",A,false);var J,F,I,H,G,E;J=x.media.duration;F=J!=J?Number.MAX_VALUE:J+1;p.addTrackEvent(x,{start:F,end:F});if(x.options.frameAnimation){x.data.timeUpdate=function(){p.timeUpdate(x,{});p.forEach(p.manifest,function(L,M){I=x.data.running[M];if(I){G=I.length;for(var K=0;K<G;K++){H=I[K];E=H._natives;E&&E.frame&&E.frame.call(x,{},H,x.currentTime())}}});x.emit("timeupdate");!x.isDestroyed&&g(x.data.timeUpdate)};!x.isDestroyed&&g(x.data.timeUpdate)}else{x.data.timeUpdate=function(K){p.timeUpdate(x,K)};if(!x.isDestroyed){x.media.addEventListener("timeupdate",x.data.timeUpdate,false)}}};Object.defineProperty(this,"error",{get:function(){return x.media.error}});if(x.media.readyState>=2){A()}else{x.media.addEventListener("loadeddata",A,false)}return this}};p.p.init.prototype=p.p;p.byId=function(z){var y=p.instances,x=y.length,w=0;for(;w<x;w++){if(y[w].id===z){return y[w]}}return null};p.forEach=function(A,z,y){if(!A||!z){return{}}y=y||this;var x,w;if(t&&A.forEach===t){return A.forEach(z,y)}if(q.call(A)==="[object NodeList]"){for(x=0,w=A.length;x<w;x++){z.call(y,A[x],x,A)}return A}for(x in A){if(k.call(A,x)){z.call(y,A[x],x,A)}}return A};p.extend=function(x){var w=x,y=o.call(arguments,1);p.forEach(y,function(A){for(var z in A){w[z]=A[z]}});return w};p.extend(p,{noConflict:function(w){if(w){r.Popcorn=d}return p},error:function(w){throw new Error(w)},guid:function(w){p.guid.counter++;return(w?w:"")+(+new Date()+p.guid.counter)},sizeOf:function(x){var w=0;for(var y in x){w++}return w},isArray:Array.isArray||function(w){return q.call(w)==="[object Array]"},nop:function(){},position:function(C){var x=C.getBoundingClientRect(),w={},I=C.ownerDocument,A=n.documentElement,F=n.body,E,G,z,D,H,B;E=A.clientTop||F.clientTop||0;G=A.clientLeft||F.clientLeft||0;z=(r.pageYOffset&&A.scrollTop||F.scrollTop);D=(r.pageXOffset&&A.scrollLeft||F.scrollLeft);H=Math.ceil(x.top+z-E);B=Math.ceil(x.left+D-G);for(var y in x){w[y]=Math.round(x[y])}return p.extend({},w,{top:H,left:B})},disable:function(w,z){if(!w.data.disabled[z]){w.data.disabled[z]=true;for(var x=w.data.running[z].length-1,y;x>=0;x--){y=w.data.running[z][x];y._natives.end.call(w,null,y)}}return w},enable:function(w,z){if(w.data.disabled[z]){w.data.disabled[z]=false;for(var x=w.data.running[z].length-1,y;x>=0;x--){y=w.data.running[z][x];y._natives.start.call(w,null,y)}}return w},destroy:function(w){var y=w.data.events,C=w.data.trackEvents,x,B,z,A;for(B in y){x=y[B];for(z in x){delete x[z]}y[B]=null}for(A in p.registryByName){p.removePlugin(w,A)}C.byStart.length=0;C.byEnd.length=0;if(!w.isDestroyed){w.data.timeUpdate&&w.media.removeEventListener("timeupdate",w.data.timeUpdate,false);w.isDestroyed=true}}});p.guid.counter=1;p.extend(p.p,(function(){var w="load play pause currentTime playbackRate volume duration preload playbackRate autoplay loop controls muted buffered readyState seeking paused played seekable ended",x={};p.forEach(w.split(/\s+/g),function(y){x[y]=function(z){var A;if(typeof this.media[y]==="function"){if(z!=null&&/play|pause/.test(y)){this.media.currentTime=p.util.toSeconds(z)}this.media[y]();return this}if(z!=null){A=this.media[y];this.media[y]=z;if(A!==z){this.emit("attrchange",{attribute:y,previousValue:A,currentValue:z})}return this}return this.media[y]}});return x})());p.forEach("enable disable".split(" "),function(w){p.p[w]=function(x){return p[w](this,x)}});p.extend(p.p,{roundTime:function(){return Math.round(this.media.currentTime)},exec:function(C,B,y){var z=arguments.length,w,x;try{x=p.util.toSeconds(C)}catch(A){}if(typeof x==="number"){C=x}if(typeof C==="number"&&z===2){y=B;B=C;C=p.guid("cue")}else{if(z===1){B=-1}else{w=this.getTrackEvent(C);if(w){if(typeof C==="string"&&z===2){if(typeof B==="number"){y=w._natives.start}if(typeof B==="function"){y=B;B=w.start}}}else{if(z>=2){if(typeof B==="string"){try{x=p.util.toSeconds(B)}catch(A){}B=x}if(typeof B==="number"){y=p.nop()}if(typeof B==="function"){y=B;B=-1}}}}}p.addTrackEvent(this,{id:C,start:B,end:B+1,_running:false,_natives:{start:y||p.nop,end:p.nop,type:"cue"}});return this},mute:function(w){var x=w==null||w===true?"muted":"unmuted";if(x==="unmuted"){this.media.muted=false;this.media.volume=this.data.state.volume}if(x==="muted"){this.data.state.volume=this.media.volume;this.media.muted=true}this.emit(x);return this},unmute:function(w){return this.mute(w==null?false:!w)},position:function(){return p.position(this.media)},toggle:function(w){return p[this.data.disabled[w]?"enable":"disable"](this,w)},defaults:function(w,x){if(p.isArray(w)){p.forEach(w,function(z){for(var y in z){this.defaults(y,z[y])}},this);return this}if(!this.options.defaults){this.options.defaults={}}if(!this.options.defaults[w]){this.options.defaults[w]={}}p.extend(this.options.defaults[w],x);return this}});p.Events={UIEvents:"blur focus focusin focusout load resize scroll unload",MouseEvents:"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave click dblclick",Events:"loadstart progress suspend emptied stalled play pause error loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange"};p.Events.Natives=p.Events.UIEvents+" "+p.Events.MouseEvents+" "+p.Events.Events;j.events.apiTypes=["UIEvents","MouseEvents","Events"];(function(z,A){var y=j.events.apiTypes,B=z.Natives.split(/\s+/g),x=0,w=B.length,C;for(;x<w;x++){A.hash[B[x]]=true}y.forEach(function(H,E){A.apis[H]={};var G=z[H].split(/\s+/g),D=G.length,F=0;for(;F<D;F++){A.apis[H][G[F]]=true}})})(p.Events,j.events);p.events={isNative:function(w){return !!j.events.hash[w]},getInterface:function(C){if(!p.events.isNative(C)){return false}var A=j.events,z=A.apiTypes,D=A.apis,x=0,w=z.length,B,y;for(;x<w;x++){y=z[x];if(D[y][C]){B=y;break}}return B},all:p.Events.Natives.split(/\s+/g),fn:{trigger:function(x,y){var z,w;if(this.data.events[x]&&p.sizeOf(this.data.events[x])){z=p.events.getInterface(x);if(z){w=n.createEvent(z);w.initEvent(x,true,true,r,1);this.media.dispatchEvent(w);return this}p.forEach(this.data.events[x],function(B,A){B.call(this,y)},this)}return this},listen:function(A,z){var w=this,D=true,B=p.events.hooks[A],y=A,x;if(!this.data.events[A]){this.data.events[A]={};D=false}if(B){if(B.add){B.add.call(this,{},z)}if(B.bind){A=B.bind}if(B.handler){x=z;z=function C(E){B.handler.call(w,E,x)}}D=true;if(!this.data.events[A]){this.data.events[A]={};D=false}}this.data.events[A][z.name||(z.toString()+p.guid())]=z;if(!D&&p.events.all.indexOf(A)>-1){this.media.addEventListener(A,function(E){p.forEach(w.data.events[A],function(G,F){if(typeof G==="function"){G.call(w,E)}})},false)}return this},unlisten:function(x,w){if(this.data.events[x]&&this.data.events[x][w]){delete this.data.events[x][w];return this}this.data.events[x]=null;return this}},hooks:{canplayall:{bind:"canplaythrough",add:function(w,y){var x=false;if(this.media.readyState){y.call(this,w);x=true}this.data.hooks.canplayall={fired:x}},handler:function b(w,x){if(!this.data.hooks.canplayall.fired){x.call(this,w);this.data.hooks.canplayall.fired=true}}}}};p.forEach([["trigger","emit"],["listen","on"],["unlisten","off"]],function(w){p.p[w[0]]=p.p[w[1]]=p.events.fn[w[0]]});p.addTrackEvent=function(A,x){var D,E,w;if(x.id){D=A.getTrackEvent(x.id)}if(D){E=true;x=p.extend({},D,x);A.removeTrackEvent(x.id)}if(x&&x._natives&&x._natives.type&&(A.options.defaults&&A.options.defaults[x._natives.type])){x=p.extend({},A.options.defaults[x._natives.type],x)}if(x._natives){x._id=x.id||x._id||p.guid(x._natives.type);A.data.history.push(x._id)}x.start=p.util.toSeconds(x.start,A.options.framerate);x.end=p.util.toSeconds(x.end,A.options.framerate);var y=A.data.trackEvents.byStart,z=A.data.trackEvents.byEnd,C,B;for(C=y.length-1;C>=0;C--){if(x.start>=y[C].start){y.splice(C+1,0,x);break}}for(B=z.length-1;B>=0;B--){if(x.end>z[B].end){z.splice(B+1,0,x);break}}if(x.end>A.media.currentTime&&x.start<=A.media.currentTime){x._running=true;A.data.running[x._natives.type].push(x);if(!A.data.disabled[x._natives.type]){x._natives.start.call(A,null,x)}}if(C<=A.data.trackEvents.startIndex&&x.start<=A.data.trackEvents.previousUpdateTime){A.data.trackEvents.startIndex++}if(B<=A.data.trackEvents.endIndex&&x.end<A.data.trackEvents.previousUpdateTime){A.data.trackEvents.endIndex++}this.timeUpdate(A,null,true);if(x._id){p.addTrackEvent.ref(A,x)}if(E){if(x._natives.type==="cue"){w="cuechange"}else{w="trackchange"}A.emit(w,{id:x.id,previousValue:{time:D.start,fn:D._natives.start},currentValue:{time:x.start,fn:x._natives.start}})}};p.addTrackEvent.ref=function(x,w){x.data.trackRefs[w._id]=w;return x};p.removeTrackEvent=function(D,E){var w,B,x,F=D.data.history.length,y=D.data.trackEvents.byStart.length,G=0,I=0,A=[],z=[],J=[],H=[];while(--y>-1){w=D.data.trackEvents.byStart[G];B=D.data.trackEvents.byEnd[G];if(!w._id){A.push(w);z.push(B)}if(w._id){if(w._id!==E){A.push(w)}if(B._id!==E){z.push(B)}if(w._id===E){I=G;if(w._natives._teardown){w._natives._teardown.call(D,w)}}}G++}y=D.data.trackEvents.animating.length;G=0;if(y){while(--y>-1){x=D.data.trackEvents.animating[G];if(!x._id){J.push(x)}if(x._id&&x._id!==E){J.push(x)}G++}}if(I<=D.data.trackEvents.startIndex){D.data.trackEvents.startIndex--}if(I<=D.data.trackEvents.endIndex){D.data.trackEvents.endIndex--}D.data.trackEvents.byStart=A;D.data.trackEvents.byEnd=z;D.data.trackEvents.animating=J;for(var C=0;C<F;C++){if(D.data.history[C]!==E){H.push(D.data.history[C])}}D.data.history=H;p.removeTrackEvent.ref(D,E)};p.removeTrackEvent.ref=function(x,w){delete x.data.trackRefs[w];return x};p.getTrackEvents=function(A){var B=[],x=A.data.trackEvents.byStart,z=x.length,w=0,y;for(;w<z;w++){y=x[w];if(y._id){B.push(y)}}return B};p.getTrackEvents.ref=function(w){return w.data.trackRefs};p.getTrackEvent=function(x,w){return x.data.trackRefs[w]};p.getTrackEvent.ref=function(x,w){return x.data.trackRefs[w]};p.getLastTrackEventId=function(w){return w.data.history[w.data.history.length-1]};p.timeUpdate=function(C,G){var K=C.media.currentTime,A=C.data.trackEvents.previousUpdateTime,I=C.data.trackEvents,y=I.endIndex,z=I.startIndex,J=I.byStart.length,H=I.byEnd.length,B=p.registryByName,F="trackstart",w="trackend",N,D,L,E,x,M;if(A<=K){while(I.byEnd[y]&&I.byEnd[y].end<=K){N=I.byEnd[y];E=N._natives;x=E&&E.type;if(!E||(!!B[x]||!!C[x])){if(N._running===true){N._running=false;M=C.data.running[x];M.splice(M.indexOf(N),1);if(!C.data.disabled[x]){E.end.call(C,G,N);C.emit(w,p.extend({},N,{plugin:x,type:w}))}}y++}else{p.removeTrackEvent(C,N._id);return}}while(I.byStart[z]&&I.byStart[z].start<=K){D=I.byStart[z];E=D._natives;x=E&&E.type;if(!E||(!!B[x]||!!C[x])){if(D.end>K&&D._running===false){D._running=true;C.data.running[x].push(D);if(!C.data.disabled[x]){E.start.call(C,G,D);C.emit(F,p.extend({},D,{plugin:x,type:F}))}}z++}else{p.removeTrackEvent(C,D._id);return}}}else{if(A>K){while(I.byStart[z]&&I.byStart[z].start>K){D=I.byStart[z];E=D._natives;x=E&&E.type;if(!E||(!!B[x]||!!C[x])){if(D._running===true){D._running=false;M=C.data.running[x];M.splice(M.indexOf(D),1);if(!C.data.disabled[x]){E.end.call(C,G,D);C.emit(w,p.extend({},D,{plugin:x,type:w}))}}z--}else{p.removeTrackEvent(C,D._id);return}}while(I.byEnd[y]&&I.byEnd[y].end>K){N=I.byEnd[y];E=N._natives;x=E&&E.type;if(!E||(!!B[x]||!!C[x])){if(N.start<=K&&N._running===false){N._running=true;C.data.running[x].push(N);if(!C.data.disabled[x]){E.start.call(C,G,N);C.emit(F,p.extend({},N,{plugin:x,type:F}))}}y--}else{p.removeTrackEvent(C,N._id);return}}}}I.endIndex=y;I.startIndex=z;I.previousUpdateTime=K;I.byStart.length<J&&I.startIndex--;I.byEnd.length<H&&I.endIndex--};p.extend(p.p,{getTrackEvents:function(){return p.getTrackEvents.call(null,this)},getTrackEvent:function(w){return p.getTrackEvent.call(null,this,w)},getLastTrackEventId:function(){return p.getLastTrackEventId.call(null,this)},removeTrackEvent:function(w){p.removeTrackEvent.call(null,this,w);return this},removePlugin:function(w){p.removePlugin.call(null,this,w);return this},timeUpdate:function(w){p.timeUpdate.call(null,this,w);return this},destroy:function(){p.destroy.call(null,this);return this}});p.manifest={};p.registry=[];p.registryByName={};p.plugin=function(x,A,w){if(p.protect.natives.indexOf(x.toLowerCase())>=0){p.error("'"+x+"' is a protected function name");return}var z=["start","end"],E={},C,D=typeof A==="function",B=["_setup","_teardown","start","end","frame"];var y=function(I,H){I=I||p.nop;H=H||p.nop;return function(){I.apply(this,arguments);H.apply(this,arguments)}};p.manifest[x]=w=w||A.manifest||{};B.forEach(function(H){A[H]=m(A[H]||p.nop,x)});var G=function(H,J){if(!J){return this}if(J.ranges&&p.isArray(J.ranges)){p.forEach(J.ranges,function(N){var O=p.extend({},J,N);delete O.ranges;this[x](O)},this);return this}var I=J._natives={},M="",K,L;p.extend(I,H);J._natives.type=x;J._running=false;I.start=I.start||I["in"];I.end=I.end||I.out;if(J.once){I.end=y(I.end,function(){this.removeTrackEvent(J._id)})}I._teardown=y(function(){var N=o.call(arguments),O=this.data.running[I.type];N.unshift(null);N[1]._running&&O.splice(O.indexOf(J),1)&&I.end.apply(this,N)},I._teardown);J.compose=J.compose&&J.compose.split(" ")||[];J.effect=J.effect&&J.effect.split(" ")||[];J.compose=J.compose.concat(J.effect);J.compose.forEach(function(N){M=p.compositions[N]||{};B.forEach(function(O){I[O]=y(I[O],M[O])})});J._natives.manifest=w;if(!("start" in J)){J.start=J["in"]||0}if(!J.end&&J.end!==0){J.end=J.out||Number.MAX_VALUE}if(!k.call(J,"toString")){J.toString=function(){var N=["start: "+J.start,"end: "+J.end,"id: "+(J.id||J._id)];if(J.target!=null){N.push("target: "+J.target)}return x+" ( "+N.join(", ")+" )"}}if(!J.target){L="options" in w&&w.options;J.target=L&&"target" in L&&L.target}if(J._natives){J._id=p.guid(J._natives.type)}J._natives._setup&&J._natives._setup.call(this,J);p.addTrackEvent(this,J);p.forEach(H,function(O,N){if(N!=="type"){if(z.indexOf(N)===-1){this.on(N,O)}}},this);return this};p.p[x]=E[x]=function(M,I){var K=arguments.length,H,L,J;if(M&&!I){I=M;M=null}else{H=this.getTrackEvent(M);if(!H){I.id=M}else{I=p.extend({},H,I);p.addTrackEvent(this,I);return this}}this.data.running[x]=this.data.running[x]||[];L=(this.options.defaults&&this.options.defaults[x])||{};J=p.extend({},L,I);return G.call(this,D?A.call(this,J):A,J)};if(w){p.extend(A,{manifest:w})}var F={fn:E[x],definition:A,base:A,parents:[],name:x};p.registry.push(p.extend(E,F,{type:x}));p.registryByName[x]=F;return E};p.plugin.errors=[];function m(w,x){return function(){if(p.plugin.debug){return w.apply(this,arguments)}try{return w.apply(this,arguments)}catch(y){p.plugin.errors.push({plugin:x,thrown:y,source:w.toString()});this.emit("pluginerror",p.plugin.errors)}}}p.plugin.debug=(p.version==="@VERSION");p.removePlugin=function(A,w){if(!w){w=A;A=p.p;if(p.protect.natives.indexOf(w.toLowerCase())>=0){p.error("'"+w+"' is a protected function name");return}var B=p.registry.length,D;for(D=0;D<B;D++){if(p.registry[D].name===w){p.registry.splice(D,1);delete p.registryByName[w];delete p.manifest[w];delete A[w];return}}}var y=A.data.trackEvents.byStart,z=A.data.trackEvents.byEnd,E=A.data.trackEvents.animating,C,x;for(C=0,x=y.length;C<x;C++){if(y[C]&&y[C]._natives&&y[C]._natives.type===w){y[C]._natives._teardown&&y[C]._natives._teardown.call(A,y[C]);y.splice(C,1);C--;x--;if(A.data.trackEvents.startIndex<=C){A.data.trackEvents.startIndex--;A.data.trackEvents.endIndex--}}if(z[C]&&z[C]._natives&&z[C]._natives.type===w){z.splice(C,1)}}for(C=0,x=E.length;C<x;C++){if(E[C]&&E[C]._natives&&E[C]._natives.type===w){E.splice(C,1);C--;x--}}};p.compositions={};p.compose=function(w,x,y){p.manifest[w]=y=y||x.manifest||{};p.compositions[w]=x};p.plugin.effect=p.effect=p.compose;var h=/^(?:\.|#|\[)/;p.dom={debug:false,find:function(w,x){var y=null;w=w.trim();x=x||n;if(w){if(!h.test(w)){y=n.getElementById(w);if(y!==null){return y}}try{y=x.querySelector(w)}catch(z){if(p.dom.debug){throw new Error(z)}}}return y}};var a=/\?/,l={url:"",data:"",dataType:"",success:p.nop,type:"GET",async:true,xhr:function(){return new r.XMLHttpRequest()}};p.xhr=function(w){w.dataType=w.dataType&&w.dataType.toLowerCase()||null;if(w.dataType&&(w.dataType==="jsonp"||w.dataType==="script")){p.xhr.getJSONP(w.url,w.success,w.dataType==="script");return}var x=p.extend({},l,w);x.ajax=x.xhr();if(x.ajax){if(x.type==="GET"&&x.data){x.url+=(a.test(x.url)?"&":"?")+x.data;x.data=null}x.ajax.open(x.type,x.url,x.async);x.ajax.send(x.data||null);return p.xhr.httpData(x)}};p.xhr.httpData=function(y){var z,x=null,A,w=null;y.ajax.onreadystatechange=function(){if(y.ajax.readyState===4){try{x=JSON.parse(y.ajax.responseText)}catch(B){}z={xml:y.ajax.responseXML,text:y.ajax.responseText,json:x};if(!z.xml||!z.xml.documentElement){z.xml=null;try{A=new DOMParser();w=A.parseFromString(y.ajax.responseText,"text/xml");if(!w.getElementsByTagName("parsererror").length){z.xml=w}}catch(B){}}if(y.dataType){z=z[y.dataType]}y.success.call(y.ajax,z)}};return z};p.xhr.getJSONP=function(w,H,y){var E=n.head||n.getElementsByTagName("head")[0]||n.documentElement,F=n.createElement("script"),I=false,z=[],D=/(=)\?(?=&|$)|\?\?/,C,B,x,G,A;if(!y){A=w.match(/(callback=[^&]*)/);if(A!==null&&A.length){B=A[1].split("=")[1];if(B==="?"){B="jsonp"}G=p.guid(B);w=w.replace(/(callback=[^&]*)/,"callback="+G)}else{G=p.guid("jsonp");if(D.test(w)){w=w.replace(D,"$1"+G)}z=w.split(/\?(.+)?/);w=z[0]+"?";if(z[1]){w+=z[1]+"&"}w+="callback="+G}window[G]=function(J){H&&H(J);I=true}}F.addEventListener("load",function(){if(y){H&&H()}if(I){delete window[G]}E.removeChild(F)},false);F.src=w;E.insertBefore(F,E.firstChild);return};p.getJSONP=p.xhr.getJSONP;p.getScript=p.xhr.getScript=function(w,x){return p.xhr.getJSONP(w,x,true)};p.util={toSeconds:function(w,D){var F=/^([0-9]+:){0,2}[0-9]+([.;][0-9]+)?$/,B="Invalid time format",E,z,y,x,A,C;if(typeof w==="number"){return w}if(typeof w==="string"&&!F.test(w)){p.error(B)}E=w.split(":");z=E.length-1;y=E[z];if(y.indexOf(";")>-1){A=y.split(";");C=0;if(D&&(typeof D==="number")){C=parseFloat(A[1],10)/D}E[z]=parseInt(A[0],10)+C}x=E[0];return{1:parseFloat(x,10),2:(parseInt(x,10)*60)+parseFloat(E[1],10),3:(parseInt(x,10)*3600)+(parseInt(E[1],10)*60)+parseFloat(E[2],10)}[E.length||1]}};p.p.cue=p.p.exec;p.protect={natives:c(p.p).map(function(w){return w.toLowerCase()})};p.forEach({listen:"on",unlisten:"off",trigger:"emit",exec:"cue"},function(y,x){var w=p.p[x];p.p[x]=function(){if(typeof console!=="undefined"&&console.warn){console.warn("Deprecated method '"+x+"', "+(y==null?"do not use.":"use '"+y+"' instead."));p.p[x]=w}return p.p[y].apply(this,[].slice.call(arguments))}});r.Popcorn=p})(window,window.document);