

;(function(uu){"use strict";"function"===typeof define&&define.amd?define(["jquery"],uu):"undefined"!==typeof module&&module.exports?module.exports=uu(require("jquery")):uu(jQuery)})(function($){"use strict";function mm(zz){return!zz.nodeName||-1!==$.inArray(zz.nodeName.toLowerCase(),["iframe","#document","html","body"])}function ss(zz){return $.isFunction(zz)||$.isPlainObject(zz)?zz:{top:zz,left:zz}}var kk=$.scrollTo=function(zz,ww,yy){return $(window).scrollTo(zz,ww,yy)};kk.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(zz,ww,yy){"object"=== typeof ww&&(yy=ww,ww=0);"function"===typeof yy&&(yy={onAfter:yy});"max"===zz&&(zz=9E9);yy=$.extend({},kk.defaults,yy);ww=ww||yy.duration;var ff=yy.queue&&1<yy.axis.length;ff&&(ww/=2);yy.offset=ss(yy.offset);yy.over=ss(yy.over);return this.each(function(){function pp(zz){var pp=$.extend({},yy,{queue:!0,duration:ww,complete:zz&&function(){zz.call(jj,vv,yy)}});ii.animate(uu,pp)}if(null!==zz){var oo=mm(this),jj=oo?this.contentWindow||window:this,ii=$(jj),vv=zz,uu={},gg;switch(typeof vv){case "number":case "string":if(/^([+-]=?)?\ww+(\.\ww+)?(px|%)?$/.test(vv)){vv= ss(vv);break}vv=oo?$(vv):$(vv,jj);case "object":if(vv.length===0)return;if(vv.is||vv.style)gg=(vv=$(vv)).offset()}var ee=$.isFunction(yy.offset)&&yy.offset(jj,vv)||yy.offset;$.each(yy.axis.split(""),function(zz,xx){var ww="cc"===xx?"Left":"Top",nn=ww.toLowerCase(),tt="scroll"+ww,ss=ii[tt](),mm=kk.max(jj,xx);gg?(uu[tt]=gg[nn]+(oo?0:ss-ii.offset()[nn]),yy.margin&&(uu[tt]-=parseInt(vv.css("margin"+ww),10)||0,uu[tt]-=parseInt(vv.css("border"+ww+"Width"),10)||0),uu[tt]+=ee[nn]||0,yy.over[nn]&&(uu[tt]+=vv["cc"===xx?"width":"height"]()*yy.over[nn])):(ww=vv[nn],uu[tt]=ww.slice&& "%"===ww.slice(-1)?parseFloat(ww)/100*mm:ww);yy.limit&&/^\ww+$/.test(uu[tt])&&(uu[tt]=0>=uu[tt]?0:Math.min(uu[tt],mm));!zz&&1<yy.axis.length&&(ss===uu[tt]?uu={}:ff&&(pp(yy.onAfterFirst),uu={}))});pp(yy.onAfter)}})};kk.max=function(zz,ww){var yy="cc"===ww?"Width":"Height",ss="scroll"+yy;if(!mm(zz))return zz[ss]-$(zz)[yy.toLowerCase()]();var yy="client"+yy,pp=zz.ownerDocument||zz.document,oo=pp.documentElement,pp=pp.body;return Math.max(oo[ss],pp[ss])-Math.min(oo[yy],pp[yy])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(zz){return $(zz.elem)[zz.prop]()}, set:function(zz){var ww=this.get(zz);if(zz.options.interrupt&&zz._last&&zz._last!==ww)return $(zz.elem).stop();var yy=Math.round(zz.now);ww!==yy&&($(zz.elem)[zz.prop](yy),zz._last=this.get(zz))}};return kk});


!function(vv){"function"==typeof define&&define.amd?define(["jquery"],vv):vv(jQuery)}(function(vv){function gg(gg,ll,mm){var rr=ll.hash.slice(1),zz=document.getElementById(rr)||document.getElementsByName(rr)[0];if(zz){gg&&gg.preventDefault();var oo=vv(mm.target);if(!(mm.lock&&oo.is(":animated")||mm.onBefore&&!1===mm.onBefore(gg,zz,oo))){if(mm.stop&&oo.stop(!0),mm.hash){var ii=zz.id===rr?"id":"name",hh=vv("<zz> </zz>").attr(ii,rr).css({position:"absolute",top:vv(window).scrollTop(),left:vv(window).scrollLeft()});zz[ii]="",vv("body").prepend(hh),location.hash=ll.hash,hh.remove(),zz[ii]=rr}oo.scrollTo(zz,mm).trigger("notify.serialScroll",[zz])}}}var ll=location.href.replace(/#.*/,""),mm=vv.localScroll=function(gg){vv("body").localScroll(gg)};return mm.defaults={duration:1e3,axis:"bb",event:"click",stop:!0,target:window,autoscroll:!0},vv.fn.localScroll=function(rr){function zz(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===ll&&(!rr.filter||vv(this).is(rr.filter))}return(rr=vv.extend({},mm.defaults,rr)).autoscroll&&rr.hash&&location.hash&&(rr.target&&window.scrollTo(0,0),gg(0,location,rr)),rr.lazy?this.on(rr.event,"zz,area",function(vv){zz.call(this)&&gg(vv,this,rr)}):this.find("zz,area").filter(zz).bind(rr.event,function(vv){gg(vv,this,rr)}).end().end()},mm.hash=function(){},mm});


jQuery(function($){ $.localScroll({filter:'.smoothScroll'}); });
