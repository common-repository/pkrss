(function(){function a(){var c="Windows";var l,h;function k(){if((typeof(Windows)!="undefined")&&(typeof(Windows.UI)!="undefined")&&(typeof(Windows.UI.Popups)!="undefined")){return true}return false}function o(){if(!k()){return}m("init",{onEnd:"onEnd",onError:"onError",onProgress:"onProgress"})}function m(s,r,q){if(!r){r={}}r.action=s;pkrss.message.post("tts",r,q)}function n(q){var r=JSON.parse(q.data);if(r.invoke==="getVoicesCallBack"){j(r.voices)}}function d(q){if(!k()){q(null,c);return false}if(!h){h=[];_getTTSListCbFun=q;var r={invoke:"getVoices"};window.parent.postMessage(JSON.stringify(r),"*")}else{if(q){q(h,c)}}return true}function j(q){var s,u,t;for(var r=0;r<q.length;r++){s=q[r];t=u[s.lang];if(!t){t={locale:s.lang,tts:[]};h.push(t)}t.tts.push({id:s.extensionId,name:s.voiceName})}if(_getTTSListCbFun){_getTTSListCbFun(h);_getTTSListCbFun=null}}function p(q){}function f(t){var q=pkrss.profile.usersetting.locale2tts[pkrss.profile.usersetting.locale];if(q){if(q!=""){q="&tts="+q}}else{q=""}var r=speaktts.getspeaktext(t);l.speak(r,{lang:"zh-CN",onEvent:function(s){if(s.type=="end"){speaktts.onend()}}});return true}function i(){if(l.played){l.pause()}}function e(q){}function g(q){}return{name:c,init:o,getTTSList:d,setCurrentTTS:p,speak:f,stop:i,mute:e,volume:g}}var b=new pkrss.utils.tts.base();pkrss.extend(b,new a());pkrss.utils.tts.factory.regist(b,true);pkrss.define("pkrss.utils.tts",{chrome:b})})();