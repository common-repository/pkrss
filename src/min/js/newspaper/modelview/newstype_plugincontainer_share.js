pkrss.cls.newstype_plugincontainer_share=function(a){this.init(a)};pkrss.cls.newstype_plugincontainer_share.prototype.init=function(b){var a=pkrss.q("#shareDialogIFrame");if(!a.length){a=pkrss.q('<IFRAME id="shareDialogIFrame" FRAMEBORDER="0" SCROLLING="AUTO" width="100%" height="1024px" marginwidth="0" marginheight="0" ></IFRAME>')}var c=a.parent();if(!c.length||c[0].id!="#div_share"){a.appendTo(pkrss.q("#div_pannel > #div_share"))}a.prop("src",pkrss.ajax.pkurlprefix+"/s/cache/mw/task=htm&o=sharepc&id="+pkrss.profile.usersetting.curshareid+"&uilang="+pksetting.user.uilang+".htm")};pkrss.define("pkrss.model.newstype.plugincontainer",{share:new pkrss.cls.newstype_plugincontainer_share()});pkrss.define("pkrss.model.newstype.plugincontainer",{share:new pkrss.cls.newrssitem_share(0)});