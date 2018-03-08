/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function X(b){return b.replace(E,"").replace(D,",").replace(C,"").replace(B,"").replace(A,"").split(/^$|,+/)
}function W(b){return"'"+b.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"
}function V(ap,ao){function an(c){return af+=c.split(/\n/).length-1,ah&&(c=c.replace(/[\n\r\t\s]+/g," ").replace(/<!--.*?-->/g,"")),c&&(c=aa[1]+W(c)+aa[2]+"\n"),c
}function am(d){var i=af;
if(ai?d=ai(d,ao):al&&(d=d.replace(/\n/g,function(){return af++,"$line="+af+";"
})),0===d.indexOf("=")){var h=ag&&!/^=[=#]/.test(d);
if(d=d.replace(/^=[=#]?|[\s;]*$/g,""),h){var g=d.replace(/\s*\([^\)]+\)/,"");
K[g]||/^(include|print)$/.test(g)||(d="$escape("+d+")")
}else{d="$string("+d+")"
}d=aa[1]+d+aa[2]
}return al&&(d="$line="+i+";"+d),G(X(d),function(e){if(e&&!ae[e]){var c;
c="print"===e?Y:"include"===e?r:K[e]?"$utils."+e:J[e]?"$helpers."+e:"$data."+e,o+=e+"="+c+",",ae[e]=!0
}}),d+"\n"
}var al=ao.debug,ak=ao.openTag,aj=ao.closeTag,ai=ao.parser,ah=ao.compress,ag=ao.escape,af=1,ae={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},ac="".trim,aa=ac?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],Z=ac?"$out+=text;return $out;":"$out.push(text);",Y="function(){var text=''.concat.apply('',arguments);"+Z+"}",r="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+Z+"}",o="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(al?"$line=0,":""),n=aa[0],b="return new String("+aa[3]+");";
G(ap.split(ak),function(e){e=e.split(aj);
var d=e[0],f=e[1];
1===e.length?n+=an(d):(n+=am(d),f&&(n+=an(f)))
});
var a=o+n+b;
al&&(a="try{"+a+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+W(ap)+".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')};}");
try{var ad=new Function("$data","$filename",a);
return ad.prototype=K,ad
}catch(ab){throw ab.temp="function anonymous($data,$filename) {"+a+"}",ab
}}var U=function(d,c){return"string"==typeof c?H(c,{filename:d}):R(d,c)
};
U.version="3.0.0",U.config=function(d,c){T[d]=c
};
var T=U.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},S=U.cache={};
U.render=function(d,c){return H(d,c)
};
var R=U.renderFile=function(e,d){var f=U.get(e)||I({filename:e,name:"Render Error",message:"Template not found"});
return d?f(d):f
};
U.get=function(f){var e;
if(S[f]){e=S[f]
}else{if("object"==typeof document){var h=document.getElementById(f);
if(h){var g=(h.value||h.innerHTML).replace(/^\s*|\s*$/g,"");
e=H(g,{filename:f})
}}}return e
};
var Q=function(d,c){return"string"!=typeof d&&(c=typeof d,"number"===c?d+="":d="function"===c?Q(d.call(d)):""),d
},P={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},O=function(b){return P[b]
},N=function(b){return Q(b).replace(/&(?![\w#]+;)|[<>"']/g,O)
},M=Array.isArray||function(b){return"[object Array]"==={}.toString.call(b)
},L=function(f,e){var h,g;
if(M(f)){for(h=0,g=f.length;
g>h;
h++){e.call(f,f[h],h,f)
}}else{for(h in f){e.call(f,f[h],h)
}}},K=U.utils={$helpers:{},$include:R,$string:Q,$escape:N,$each:L};
U.helper=function(d,c){J[d]=c
};
var J=U.helpers=K.$helpers;
U.onerror=function(e){var d="Template Error\n\n";
for(var f in e){d+="<"+f+">\n"+e[f]+"\n\n"
}"object"==typeof console&&console.error(d)
};
var I=function(b){return U.onerror(b),function(){return"{Template Error}"
}
},H=U.compile=function(e,c){function n(b){try{return new k(b,l)+""
}catch(a){return c.debug?I(a)():(c.debug=!0,H(e,c)(b))
}}c=c||{};
for(var m in T){void 0===c[m]&&(c[m]=T[m])
}var l=c.filename;
try{var k=V(e,c)
}catch(f){return f.filename=l||"anonymous",f.name="Syntax Error",I(f)
}return n.prototype=k.prototype,n.toString=function(){return k.toString()
},l&&c.cache&&(S[l]=n),n
},G=K.$each,F="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",E=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,D=/[^\w$]+/g,C=new RegExp(["\\b"+F.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),B=/^\d[^,]*|,\d[^,]*/g,A=/^,+|,+$/g;
T.openTag="{{",T.closeTag="}}";
var z=function(g,f){var j=f.split(":"),i=j.shift(),h=j.join(":")||"";
return h&&(h=", "+h),"$helpers."+i+"("+g+h+")"
};
T.parser=function(ae,ad){ae=ae.replace(/^\s/,"");
var ac=ae.split(" "),ab=ac.shift(),aa=ac.join(" ");
switch(ab){case"if":ae="if("+aa+"){";
break;
case"else":ac="if"===ac.shift()?" if("+ac.join(" ")+")":"",ae="}else"+ac+"{";
break;
case"/if":ae="}";
break;
case"each":var Z=ac[0]||"$data",Y=ac[1]||"as",y=ac[2]||"$value",x=ac[3]||"$index",w=y+","+x;
"as"!==Y&&(Z="[]"),ae="$each("+Z+",function("+w+"){";
break;
case"/each":ae="});";
break;
case"echo":ae="print("+aa+");";
break;
case"print":case"include":ae=ab+"("+ac.join(",")+");";
break;
default:if(-1!==aa.indexOf("|")){var v=ad.escape;
0===ae.indexOf("#")&&(ae=ae.substr(1),v=!1);
for(var u=0,t=ae.split("|"),s=t.length,r=v?"$escape":"$string",d=r+"("+t[u++]+")";
s>u;
u++){d=z(d,t[u])
}ae="=#"+d
}else{ae=U.helpers[ab]?"=#"+ab+"("+ac.join(",")+");":"="+ae
}}return ae
},"function"==typeof define?define(function(){return U
}):"undefined"!=typeof exports?module.exports=U:this.template=U
}();(function(e){var b=e.screen,a=e.document.documentElement;
if(b.width>1200){a.className+=a.className.length?" root1200":"root1200"
}var c=location.hostname;
if(c.indexOf("cnsuning.com")!=-1){document.domain="cnsuning.com"
}else{if(c.indexOf("suning.com")!=-1){document.domain="suning.com"
}}})(window);
var Util={printf:function(a){var b=arguments,c=1;
return a.replace(/%s/g,function(){return b[c]?b[c++]:""
})
},toClockStr:function(b){var e=Math.floor((b%(24*3600))/3600).toString(),a=Math.floor((b%3600)/(60)).toString(),c=Math.floor(b%60).toString();
e=e.length===1?"0"+e:e;
a=a.length===1?"0"+a:a;
c=c.length===1?"0"+c:c;
return e+":"+a+":"+c
},checkkey:function(b,a){b.value=b.value.replace(/[^\d.]/g,"");
b.value=b.value.replace(/^\./g,"");
b.value=b.value.replace(/\.{2,}/g,".");
b.value=b.value.replace(/^\d{1,10}\.\d{3}?$/g,b.value.substr(0,b.value.length-1));
b.value=b.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
},lazyload:function(a){$(window).scroll(function(){$(a).find("img").each(function(){if($(window).scrollTop()>$(this).offset().top-$(window).height()&&$(this).attr("src2")){$(this).attr("src",$(this).attr("src2")).removeAttr("src2")
}})
})
},alertBox:function(p){var f={id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",hasMask:true,submitRemove:false,iconType:"info",msg:""};
$("#attrWrongInfo").html("");
var a=$.extend({},f,p);
var l=document.getElementById(a.id);
var i=document.documentElement.scrollHeight;
var n=document.body.clientWidth;
var c=!!window.ActiveXObject;
var h=c&&!window.XMLHttpRequest;
var k=a.hasMask?0.7:0;
if($("#mask").length>0){$("#mask").remove()
}var o=document.createElement("div");
o.id="mask";
l.style.display="block";
var m=n/2-l.clientWidth/2;
var b=(document.body.scrollTop||document.documentElement.scrollTop)+window.screen.height/2-l.clientHeight/2-100;
o.style.cssText="position:absolute;top:0;left:0;background:#333;height:"+i+"px;width:"+n+"px;z-index:10010;opacity:"+k+";filter:alpha(opacity="+k*100+");";
document.body.appendChild(o);
if(h){var g=document.createElement("iframe");
g.style.position="absolute";
g.style.top=0;
g.style.left=0;
g.style.zIndex="10010";
g.style.height=i+"px";
g.style.width=n-10+"px";
g.style.filter="alpha(opacity=0)";
document.body.appendChild(g)
}l.style.zIndex="10011";
l.style.cssText=" ;display:block;left:"+m+"px;top:"+b+"px;z-index:10011;";
document.getElementById(a.closeId).onclick=e;
if(document.getElementById(a.submit)){document.getElementById(a.submit).onclick=function(){if(a.submitRemove){if($("#proPop").find(".msg").html().indexOf("此商品库存不足")!=-1||$("#proPop").find(".msg").html().indexOf("您购买的数量超过库存上限")!=-1){window.location.reload()
}e()
}}
}function e(){$("#attrWrongInfo").html("");
l.style.display="none";
o.parentNode.removeChild(o);
if(h){g.parentNode.removeChild(g)
}}var j=$(l).find(".tipIcon");
switch(a.iconType){case"ok":j.attr("class","tipIcon fl tipOK3");
break;
case"info":j.attr("class","tipIcon fl tipInfo3");
break;
case"false":j.attr("class","tipIcon fl tipFalse3");
break;
case"help":j.attr("class","tipIcon fl tipHelp3");
break
}if(a.msg){$(l).find(".msg").html(a.msg)
}},alertBoxForClose:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"help",submitRemove:true,msg:a});
sn.status=false;
if(sn.vendorCode==""){initProductPrice(sn.cityId)
}else{initCShopPrice(sn.cityId)
}},alertErrorBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"false",submitRemove:true,msg:a})
},alertHelpBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"help",submitRemove:true,msg:a})
},alertOkBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"ok",submitRemove:true,msg:a})
}};
var iFourth=iFourth||{ie6:!window.XMLHttpRequest,win:$(window),body:$("body"),mask:$("#J-overlay")};
iFourth.init=function(){$(function(){SFE.base.navPromise&&SFE.base.navPromise.done(iFourth.scrollToNav)
});
iFourth.body=$("body");
iFourth.mask=$("#J-overlay");
iFourth.masterImgShow();
iFourth.imgZoom=zoom;
iFourth.breadcrumb();
iFourth.buyNum();
iFourth.attrChoose();
iFourth.servLabel();
iFourth.TZM.init();
iFourth.proSideIndex();
iFourth.bindShareList();
iFourth.listloop({wrap:"#J-slide1",loopBox:".proinfo-rec-list ul"});
iFourth.bindQRCode();
iFourth.listloop({wrap:"#J-slide2",loopBox:".nopro-rec-list ul",step:{wide:5,narrow:4},scrollWidth:{wide:775,narrow:580}});
iFourth.listloop({wrap:"#J-slide3",loopBox:".nopro-rec-list ul",step:{wide:5,narrow:4},scrollWidth:{wide:775,narrow:580}});
iFourth.zitiPop();
iFourth.procon();
iFourth.Tab(".toppro-tab",".toppro-list",function(c,a,b){});
iFourth.Tab(".tiein-box .tabarea-items",".tiein-box .tabarea-content",function(c,a,b){});
iFourth.Tab(".nogood-rec .ng-tab-items",".nogood-rec .tabarea-content",function(c,a,b){iFourth.mainHeight()
});
iFourth.tiein();
iFourth.tieInRec();
iFourth.setMeal();
iFourth.putRight();
lazyelem.listen();
iFourth.floatBar({zIndex:11000,contents:$("#snSideTools"),align:"right",vertical:"bottom",css:{right:60,marginBottom:260}});
$("#productDetail img").on("load",function(){if(!$(this).data("isLoad")){$(this).data("isLoad",1);
iFourth.win.scroll()
}})
};
iFourth.bookConNav=function(){var e=iFourth.win,f=$(".bookcon"),c=$(".bookcon-side");
var b=f.height(),a=c.height();
if(a>b){f.attr("style","min-height:"+a+"px;_height:"+a+"px")
}f.on("click",".bookcon-side ul li",function(){var g=$(this),h=$(g.attr("rel")).offset().top-45;
g.addClass("current").siblings().removeClass("current");
e.scrollTop(h)
});
e.scroll(function(){if(c.is(":visible")){var g=e.scrollTop(),i=f.offset().top,j=i-36,h=f[0].scrollHeight+i-400;
if(g>j&&g<h){c.css("top",g-i+36+"px")
}else{if(g>=h){c.css("top",h-i+"px")
}else{c.css("top","0")
}}}else{c.css("top","0")
}})
};
iFourth.floatBar=function(){var f={contents:null,align:"right",vertical:"middle",zIndex:7500,css:null,id:null,ieFixed:true};
var i=($.browser.msie)?parseInt($.browser.version):false;
if(arguments.length<1||!(arguments[0] instanceof Object)){return $.error("ECode.floatBar: 参数必须为JSON对象")
}$.extend(f,arguments[0]);
var b={position:"fixed",top:"-9999em",left:"-9999em"};
if(i&&i<=6){b.position="absolute"
}$('<div class="ECode-floatBar"></div>').css(b).appendTo("body");
var j=$("body").find(".ECode-floatBar:last");
j.append(f.contents);
var e=j.width(),a=j.height(),h={zIndex:f.zIndex};
if(f.id!=null){j.attr("id",f.id)
}switch(f.align){case"right":h.left="auto";
h.right=0;
break;
case"left":h.right="auto";
h.left=0;
break;
case"center":h.right="auto";
h.left="50%";
h.marginLeft=-e/2;
break
}switch(f.vertical){case"top":h.top=0;
break;
case"bottom":h.top="auto";
h.bottom=0;
break;
case"middle":h.top="50%";
h.marginTop=-a/2;
if(i&&i<=6){h.marginTop=0
}break
}j.css($.extend(h,f.css));
var c=function(){var o=$(document).scrollTop(),k=$(window).height(),l=$(document).width();
switch(f.vertical){case"top":j.stop().animate({top:o});
break;
case"bottom":var n=k+o-a;
if(f.css.marginBottom!=null){var m=parseInt(f.css.marginBottom);
if(m>=0){n-=m
}}j.css({marginTop:0}).stop().animate({top:n});
break;
case"middle":j.stop().animate({top:k/2+o-a/2});
break
}};
if(f.ieFixed&&i&&i<=6){c();
$(window).scroll(function(){c()
});
$(window).resize(function(){c()
})
}$(window).scroll(function(){var k=$(document).scrollTop();
var l=$("#gotop");
if(k>20){l.show()
}else{l.hide()
}});
var g;
$(".erweima").hover(function(){clearTimeout(g);
$("#ewmPic").show().find("img").attr("src",$("#ewmPic").show().find("img").attr("src3"))
},function(){clearTimeout(g);
g=setTimeout(function(){$("#ewmPic").hide()
},200)
})
};
iFourth.gotop=function(){$("html,body").scrollTop(0)
};
iFourth.lazyAjax=function(b,a){var e={},c=true,h,f,g=iFourth.win;
$(b).each(function(){var i=$(this);
e[i.attr("id")]={obj:i,url:i.attr("data-url"),type:i.attr("data-type"),handle:null,enable:true,_cache:true}
});
g.scroll(function(){if(c){for(f in e){(function(){var m=e[f],o=m.obj,j=m.url,k=m.type||"json",i=m.enable,l=m.handle,n=m.cache!=undefined&&!m.cache?false:true;
trigger=(g.scrollTop()+g.height())>(o.offset().top-(m.height||50));
if(!i||!trigger){return false
}if(j){k=="jsonp"&&$.ajax({url:j,cache:n,dataType:"jsonp",jsonpCallback:l,error:function(p,q){a(o,j,{error:q?q:"unknown"})
}})||$.ajax({url:j,cache:n,type:"get",success:function(p){k=="json"&&a(o,j,p);
k=="html"&&o.html(p);
l(p)
},error:function(p,q){a(o,j,{error:q?q:"unknown"})
}});
e[f].enable=false
}if(k=="function"&&m.handle){m.handle();
e[f].enable=false
}})()
}c=false;
setTimeout(function(){c=true
},200)
}});
g.scroll();
return e
};
iFourth.listloop=function(b){var f={wrap:"",loopBox:"",triggerLeft:".prev",triggerRight:".next",curCount:".cur-count",totalCount:".total-count",step:{wide:4,narrow:4},scrollWidth:{wide:580,narrow:580},hasCount:true,isLoop:true,isLazyLoad:true,delay:0,hasLabel:false,labelObj:null,vertical:false,dots:".pages-container"};
$.extend(f,b);
var o=$(f.wrap),x=o.find(f.triggerLeft),a=o.find(f.triggerRight),z=o.find(f.loopBox).css("left",0),l=z.find("li:not(.hide)"),h=f.step.wide,s=f.scrollWidth.wide,C=Math.ceil(l.length/h),k=l.length,p=o.find(f.curCount),D=o.find(f.totalCount),B=0,u=o.find(f.dots);
if(screen.width<1280){h=f.step.narrow;
s=f.scrollWidth.narrow;
var E=l.length%h;
C=Math.ceil(l.length/h);
C=C==0?1:C;
k=l.length-E
}if(u.length){var e="";
for(var A=0;
A<C;
A++){e+='<span class="page-dot" data-page="'+A+'"></span>'
}u.find(".pages-dot").html(e);
u.find(".page-dot").unbind().click(function(){if($(this).hasClass("current")){return
}var i=$(this).attr("data-page");
B=i;
y(null,i)
})
}u.find(".page-dot").eq(0).addClass("current");
f.hasCount&&D.html(C);
x.unbind().click(function(){v()
});
a.unbind().click(function(){w()
});
p.text("1");
if(!f.isLoop){x.addClass("prev-disable")
}if(C==1){a.addClass("next-disable")
}var r=b.labelObj,c="",m;
if(r){if(C<=1){r.hide()
}r.find(".prev").unbind().click(function(){v()
});
r.find(".next").unbind().click(function(){w()
});
for(m=0;
m<C;
m++){c+="<li></li>"
}r.find("ul").html(c).find("li").click(function(){B=$(this).index();
y(false,B)
}).first().addClass("current")
}function w(){if(C==1||z.is(":animated")){return false
}if(!f.isLoop){B++;
if(B>=C){B=C-1
}y(function(){if(B==C-1){a.addClass("next-disable")
}x.removeClass("prev-disable")
},B);
return
}if(B==C-1){for(var i=0;
i<h;
i++){if(f.vertical){l.eq(i).css({position:"relative",top:C*s+"px"})
}else{l.eq(i).css({position:"relative",left:C*s+"px"})
}}}B++;
y(function(){if(B==C){B=0;
l.removeAttr("style");
if(f.vertical){z.css("top",B*s)
}else{z.css("left",B*s)
}}},B)
}function v(){if(C==1||z.is(":animated")){return false
}if(!f.isLoop){B--;
if(B<=0){B=0
}y(function(){if(B==0){x.addClass("prev-disable")
}a.removeClass("next-disable")
},B);
return
}if(B==0){for(var i=1;
i<=h;
i++){if(f.vertical){l.eq(k-i).css({position:"relative",top:-C*s+"px"})
}else{l.eq(k-i).css({position:"relative",left:-C*s+"px"})
}}}B--;
y(function(){if(B==-1){B=C-1;
l.removeAttr("style");
if(f.vertical){z.css("top",-B*s)
}else{z.css("left",-B*s)
}}},B)
}function y(j,i){q();
if(f.hasCount){if(i>C-1){i=0
}if(i<0){i=C-1
}p.html(i+1)
}if(u.length){u.find(".page-dot").eq(i).addClass("current").siblings().removeClass("current")
}if(!j){j=function(){}
}if(f.vertical){z.stop().animate({top:-B*s},300,j)
}else{z.stop().animate({left:-B*s},300,j)
}t(B==C?0:B);
if(r){r.find("li").removeClass("current").eq(B==C?0:B).addClass("current")
}}function q(){if(!f.isLazyLoad){return
}for(var F=0;
F<h;
F++){var i=l.eq(B*h+F).find("img");
if(i.attr("src3")){i.attr("src",i.attr("src3")).removeAttr("src3").addClass("err-product")
}}}q();
function n(){var G=[],F,H;
G.push('<ul class="pager">');
for(F=1;
F<=C;
F++){G.push("<li"+(F==1?' class="current"':"")+">"+F+"</li>")
}G.push("</ul>");
var i=$(G.join("")).appendTo(o);
i.find("li").hover(function(){var j=$(this).index();
H=setTimeout(function(){z.find("li").eq((j+1)*h).prevAll().andSelf().find("img[src3]").each(function(){var I=$(this);
I.attr("src",I.attr("src3")).removeAttr("src3").addClass("err-product")
});
z.stop().animate({left:-j*s},300);
t(j);
B=j
},100)
},function(){clearTimeout(H)
})
}function t(j){o.find(".pager li").removeClass("current").eq(j).addClass("current")
}if(f.hasLabel){n()
}if(f.delay){var g=setInterval(function(){w()
},f.delay);
o.hover(function(){clearInterval(g)
},function(){g=setInterval(function(){w()
},f.delay)
})
}};
iFourth.singleloop=function(c){var f={wrap:"",loopBox:"",triggerLeft:".prev",triggerRight:".next",curCount:".cur-count",totalCount:".total-count",loopWidth:180,prePageWide:5,prePageNarrow:4,isLoop:false};
$.extend(f,c);
var i=$(f.wrap),g=i.find(f.loopBox).css("left",0),m=i.find(f.triggerLeft),j=i.find(f.triggerRight),a=f.isLoop,n=i.find(f.totalCount),b=i.find(f.curCount),k;
if(screen.width>=1200){k=f.prePageWide
}else{k=f.prePageNarrow
}n.text(i.find("li").size());
b.text("1");
if(i.find("li").size()<=f.prePageWide){m.hide();
j.hide()
}function e(p){var o="+="+f.loopWidth+"px";
l(o,-1,p)
}function h(o){l("-="+f.loopWidth+"px",1,o)
}function l(o,s,r){var t=parseInt(b.html()),q=parseInt(n.html()),p=t+s;
if(parseInt(b.html())<=1){m.addClass("ctr-disabled");
j.removeClass("ctr-disabled")
}if(g.is(":animated")||r.is(".ctr-disabled")){return false
}g.stop().animate({left:o});
b.text(p);
if(!a){if(q-p<k){j.addClass("ctr-disabled");
m.removeClass("ctr-disabled")
}else{m.removeClass("ctr-disabled");
j.removeClass("ctr-disabled")
}}if(p<=1){m.addClass("ctr-disabled")
}}m.unbind().click(function(){e($(this))
});
j.unbind().click(function(){h($(this))
})
};
iFourth.breadcrumb=function(){var a=iFourth.body;
if(iFourth.ie6){$(".breadcrumb .dropdown").each(function(){var b=$(this);
b.css("width",b.width())
})
}$(".breadcrumb .dropdown-text a").click(function(b){b.stopPropagation()
});
a.on("click",".breadcrumb .dropdown",function(b){if($(this).find(".dropdown-option").size()==0){return false
}$(this).toggleClass("dropdown-active").siblings().removeClass("dropdown-active");
b.stopPropagation()
});
a.click(function(){$(".breadcrumb .dropdown").removeClass("dropdown-active")
})
};
iFourth.breadcrumbSize=function(b){var a=b.children().size();
a=a>6?6:a;
b.width(a*80)
};
iFourth.buyNum=function(j){var f=$(".proinfo-num"),a=f.find(".minus"),b=f.find(".plus"),i=f.find("input:text"),h=parseInt(i.attr("max")||j||99),e=parseInt(i.attr("min")||1),g=i.val()?parseInt(i.val()):0;
if(j){h=h>j?j:h
}else{h=h>99?99:h
}function c(){if(g<=e){a.addClass("minus-disable")
}else{a.removeClass("minus-disable")
}g==h&&b.addClass("plus-disable")||b.removeClass("plus-disable")
}a.unbind().click(function(){g=i.val()?parseInt(i.val()):0;
!$(this).is(".minus-disable")&&i.val(--g),c()
});
b.unbind().click(function(){g=i.val()?parseInt(i.val()):0;
!$(this).is(".plus-disable")&&i.val(++g),c()
});
i.unbind().on("blur drop",function(k){var l=i.val();
var m=l?parseInt(l):0;
if(m.toString()==="NaN"){l=l.replace(/[\D]/g,"");
i.val(l);
m=l?parseInt(l):0
}m=m>h?h:m;
if(k.type=="drop"){setTimeout(function(){g=m;
if(l.length){i.val(g)
}c()
},100)
}else{g=m;
if(l.length){i.val(g)
}c()
}}).on("fourth-buy",function(){});
c()
};
iFourth.servLabel=function(){var a;
$(".proinfo-serv span[tooltip], .mainbtns a[tooltip]").hover(function(f){if(f.target.className=="tooltip"){return false
}var c=$(this),b=c.attr("tooltip");
if(b){a=setTimeout(function(){$('<div class="tooltip"><i></i>'+b+"</div>").appendTo(c).fadeIn(100)
},100)
}},function(){clearTimeout(a);
$(this).find(".tooltip").fadeOut(100,function(){$(this).remove()
})
})
};
iFourth.attrChoose=function(){var b=$(".proattr-result"),a=b.find("dd .result-text");
function e(){var f="";
$(".proattr-radio li.selected, .proattr-check li.selected").each(function(){f+='"'+$(this).attr("title")+'" '
});
$(".proinfo-bangke input:checked").each(function(){f+='"'+$(this).next("label").text()+'" '
});
a.text(f);
(f==""&&$("#phonedl li.selected").size()==0)&&b.hide()||b.show()
}function c(){var f=true;
$("#J-TZM dl:visible dd input:hidden").each(function(){if($(this).val()==""){f=false
}});
f&&iFourth.TZM.hide()
}$(".proattr-radio").each(function(){var h=$(this),f=h.find("li:not(.not-able)"),g=h.find("input:hidden");
f.click(function(){var j=$(this);
j.addClass("selected").siblings().removeClass("selected");
g.val(j.attr("data-id"));
if(sn.pageFlag!=undefined&&sn.pageFlag==1){var i=$(this).attr("sid");
$(".arrival-reminder-pop").hide();
gMain.initSubCss(i,$(this).index())
}e();
c()
})
});
$(".proattr-check").each(function(){var h=$(this),f=h.find('li:not(".disabled,.mulit")'),g=h.find("input:hidden");
f.unbind("click").click(function(){var j=$(this),i=[];
j.toggleClass("selected");
h.find("li.selected").each(function(){i.push($(this).attr("data-id"))
});
g.val(i.join("|"));
e();
c()
})
});
$(".proinfo-bangke input").change(function(){e()
});
e()
};
iFourth.TZM={init:function(){var a=this,b=$(".tzm");
this.border=b.find(".tzm-border");
this.btnClose=b.find(".close");
this.btnClose.click(function(){a.hide()
})
},show:function(){this.border.show();
this.btnClose.show();
if($.browser.msie&&$.browser.version=="7.0"){this.border.css("zoom","1")
}},hide:function(){this.border.hide();
this.btnClose.hide()
}};
iFourth.proSideIndex=function(){var b=$(".proinfo-side"),a=$(".proinfo-main"),c=b.height(),e=a.height();
iFourth.mainHeight();
b.hover(function(){$(this).addClass("proinfo-side-hover")
},function(){$(this).removeClass("proinfo-side-hover")
});
$(".proinfo-side-switch").click(function(){var f=$(this),g=f.find("p");
if(b.is(".proinfo-side-show")){g.html("&lt;");
b.removeClass("proinfo-side-show").animate({width:0},300);
f.removeClass("proinfo-side-switch-unfold").animate({right:0},300)
}else{g.html("&gt;");
b.addClass("proinfo-side-show").animate({width:199},300);
f.addClass("proinfo-side-switch-unfold").animate({right:198},300)
}});
if(!$("html").is(".root1200")){b.append('<div class="temp-blank"></div>')
}};
iFourth.mainHeight=function(){var e=$(".proinfo-side").css("height","auto"),a=$(".proinfo-main").css("height","auto");
if(e[0]&&a[0]){var g=e[0].scrollHeight,i=a[0].scrollHeight,f=0;
var c=$(".shopping-guide-l");
var b=c.is(":visible")?663:520;
if(i<g){f=g<b?b:g;
a.height(f-8);
e.height(f)
}else{f=i<b?b:i;
a.height(f-8);
e.height(f)
}}iFourth.win.scroll()
};
iFourth.addCartPop={elem:$("#addCartPop"),init:function(){var b=this,a=this.elem;
a.find(".close").click(function(){b.hide()
})
},hide:function(){this.elem.hide();
iFourth.mask.hide()
},show:function(){var c=this,b=this.elem,a=this.mask,e=$(window);
b.css({marginTop:(e.height()-b.outerHeight())/2,marginLeft:(e.width()-b.outerWidth())/2}).show();
iFourth.mask.show()
}};
iFourth.sideRec=function(){var f=$("#J-sideRec"),c=f.find(".more"),a=f.find(".si-rec-list li"),b=Math.ceil(a.size()/2),e=1;
c.click(function(){e=e==b?1:e+1;
var g=a.hide().eq((e-1)*2);
g.add(g.next().get(0)).show().find("img[src3]").each(function(){var h=$(this);
h.attr("src",h.attr("src3")).removeAttr("src3")
})
})
};
iFourth.procon=function(){var e=$(".procon"),b=$(".procon-toolbar"),c=$("#J-fixBar"),g=c.find(".area"),f=iFourth.win,a=0,h=0;
e.find(".tabarea-items li").click(function(){var i=e.offset().top;
if(f.scrollTop()>i){f.scrollTop(i)
}});
f.scroll(function(){if(!e.length){return
}var i=f.scrollTop(),j=e.offset().top;
if(i>=j&&a==0){b.children().appendTo(g);
c.show();
a=1;
if(!h){iFourth.showDetailQrcode();
h=1
}}if(i<j&&a==1){g.children().appendTo(b).find(".proinfo-mini").hide();
c.hide();
a=0
}})
};
iFourth.fillProconToolbar=function(){var a=$(".procon-toolbar");
var b=$("#mini-cart-container").children();
if(b.length){a.prepend(b)
}var c=$(".procon");
var e=c.find(".proinfo-mini");
c.find(".handle").hover(function(){e.stop().show(200);
iFourth.win.scroll()
},function(){e.stop().hide(200)
})
};
var cDown;
iFourth.countdown={remain:0,endTime:0,flag:0};
iFourth.countdown.setTime=function(){var b=$(".proinfo-cd");
var c=parseInt(b.find("input:hidden").val());
this.endTime=(new Date()).valueOf()+c*1000;
var a=parseInt(c/3600/24);
this.remain=c;
if(a>99){$(".proinfo-cd .d").addClass("d-three");
this.flag=1
}};
iFourth.countdown.down=function(b){var g=$(".proinfo-cd"),i=g.find(".d"),f=g.find(".h"),a=g.find(".m"),e=g.find(".s"),c=this;
this.setTime();
function j(){var q=c.remain,n=c.endTime,m=c.flag;
if(q>=0.1){var o=n-(new Date()).valueOf();
q=c.remain=parseFloat((o*0.001).toFixed(1));
q=q<0?0:q;
var l=q;
var k=0;
var h=0;
var p=0;
p=parseInt(q/3600/24);
h=parseInt(q/3600%24);
k=parseInt(q/60%60);
l=(q%60).toFixed(1);
l=l<10?"0"+l:l.toString();
k=k<10?"0"+k:k.toString();
h=h<10?"0"+h:h.toString();
if(p>=10&&m==1){p=p<100?"0"+p:p.toString()
}else{if(p>=10&&m==0){p=p
}else{if(p<10&&m==1){p="00"+p
}else{p="0"+p
}}}i.text(p);
f.text(h);
a.text(k);
e.text(l);
b(q)
}cDown=setTimeout(arguments.callee,100)
}j()
};
iFourth.putRight=function(a){$("#J-procon-param").on("mouseenter","tr",function(){$(this).find(".err").addClass("hover")
}).on("mouseleave","tr",function(){$(this).find(".err").removeClass("hover")
});
$("#J-procon-param").on("click",".pro-para-help",function(){$(".pro-para-tip").hide();
$(".pro-para-tbl .name-inner").removeAttr("style");
$(this).siblings(".pro-para-tip").show().parent().css("z-index","11")
});
$("#J-procon-param").on("click",".pro-para-tip .close",function(){$(this).parent().hide().parent().removeAttr("style")
})
};
iFourth.zitiPop=function(){$(".btn-ziti").click(function(){$.mDialog({title:"现货门店列表",message:$("#win_ziti"),css:{width:"460px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true})
})
};
iFourth.zengpin=function(){var a=$("#zengpin-popimg"),b;
$(".zengpin tr").hover(function(){clearTimeout(b);
var c=$(this).find(".img img"),e=c.attr("src-large"),f=c.position();
b=setTimeout(function(){if(a.size()==0){a=$('<img style="position:absolute; width:200px; height:200px; border:solid 1px #EEE; z-index:6;"/>').css({left:f.left-205,top:f.top-105}).appendTo(".proinfo-main")
}a.attr("src",e).show().animate({top:f.top-85},200);
$(".proinfo-main").css("z-index",6)
},200)
},function(){clearTimeout(b);
b=setTimeout(function(){a.hide();
$(".proinfo-main").css("z-index",4)
},200)
})
};
iFourth.scodeHelp=function(){var a=$(".proinfo-main"),b;
$(".scode-help-icon").hover(function(){var c=$(this);
clearTimeout(b);
b=setTimeout(function(){var f=$('<div class="scode-help-tip"><i></i>'+c.attr("data-tip")+"</div>"),h=c.position(),g=h.left-50,e=587;
if(g+250>e){g=e-250
}f.css({position:"absolute",top:h.top+25,left:g}).find("i").css("left",h.left-g);
a.append(f)
},100)
},function(){clearTimeout(b);
b=setTimeout(function(){$(".scode-help-tip").remove()
},100)
})
};
iFourth.o2oPop={init:function(c){var b=this,a=$("#win_o2o");
$(".proinfo-o2o li:not(.item1) a").live("click",function(){var e=$(this).closest("li"),f=a.find(".title h3");
if(e.hasClass("item6")){f.text("体验店");
a.addClass("tiyandian")
}else{f.text("门店服务");
a.removeClass("tiyandian")
}$("#win_o2o .areas dd").removeClass("unfold");
b.show();
c(this)
});
iFourth.mask.click(function(){b.hide()
});
a.on("click",".close",function(){b.hide();
iFourth.mask.animate({opacity:0},200,function(){$(this).hide()
})
});
a.on("click",".areas .more",function(){$(this).parent().toggleClass("unfold")
});
a.on("mouseenter mouseleave",".o2o-service-main li",function(f){if(f.type=="mouseenter"){$(this).addClass("hover")
}if(f.type=="mouseleave"){$(this).removeClass("hover")
}})
},show:function(){var b=$("#win_o2o"),a=b.outerHeight();
b.fadeIn(200);
iFourth.mask.show().animate({opacity:0.3},200);
if(iFourth.ie6){b.css("top",iFourth.win.scrollTop()+(iFourth.win.height()-b.outerHeight())/2-20)
}else{b.css("margin-top",-a/2-20)
}},hide:function(){$("#win_o2o").fadeOut(200)
},updateFilter:function(){var a=$("#win_o2o .areas dd ul")[0].clientHeight;
if(iFourth.ie6){if(a>50){$("#win_o2o .areas dd").height(46)
}}if(a>50){$("#win_o2o .more").show()
}else{$("#win_o2o .more").hide()
}},updateContent:function(){var a=$("#win_o2o .o2o-service-main li:visible").size();
if(a<5){$("#win_o2o .watermark").height((5-a)*62)
}else{$("#win_o2o .watermark").height(0)
}}};
iFourth.Tab=function(b,c,a){$(b).children("li").click(function(){var f=$(this),e=$(f.attr("rel")),g=f.attr("data-url"),h=f.attr("data-type")||"json";
if(f.is(".current")){return false
}f.addClass("current").siblings().removeClass("current");
e.siblings(c).hide();
e.show().find("img[src3]").each(function(){var i=$(this);
i.attr("src",i.attr("src3")).removeAttr("src3")
});
if(g&&!f.attr("loaded")){h=="jsonp"&&$.ajax({url:g,dataType:"jsonp",jsonp:"jsonpcallback"})||$.get(g,function(i){h=="json"&&a(e,g,i);
h=="html"&&e.html(i)
});
f.attr("loaded","loaded")
}if(h=="function"){a(e)
}iFourth.win.scroll()
})
};
iFourth.tiein=function(){var a=$(".tiein");
a.on("mouseenter",".tiein-list li",function(){var e=$(this);
e.addClass("hover");
var c=e.attr("data-type");
var b=e.parents(".tiein").find('.tiein-nav a[data-type="'+c+'"]');
if(!b.hasClass("light")){b.addClass("light")
}});
a.on("mouseleave",".tiein-list li",function(){var c=$(this);
c.removeClass("hover");
var b=c.attr("data-type");
c.parents(".tiein").find('.tiein-nav a[data-type="'+b+'"]').removeClass("light")
})
};
iFourth.tieInRec=function(){iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
var e=$("#J-tieIn"),a=e.find(".tiein-nav a"),h=e.find(".tiein-list ul"),j=h.children("li"),f=j.find(".check"),b=e.find(".btn-addcart-mini"),g=e.find(".tiein-count .count em"),k=e.find(".price-total"),i=e.find(".price-diff"),l=i.parents("dl");
e.find(".btn-dir").click(function(){iFourth.tieInTZM.close()
});
function c(){f.filter(":checked").prop("checked",false).click().removeAttr("checked")
}a.click(function(){var q=$(this),o=q.attr("data-type");
if(q.is(".current")){return false
}q.addClass("current").siblings("a").removeClass("current");
var n,p=$(".tiein-main-empty"),m=e.find(".btn-dir");
if(parseInt(o)){n=j.addClass("hide").filter('[data-type="'+o+'"]').removeClass("hide")
}else{n=j.removeClass("hide")
}if(n.size()==0){p.show();
m.hide()
}else{p.hide();
m.show()
}h.css("left",0);
e.find(".next, .prev").unbind();
iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
});
f.click(function(){if($(".tiein-tzm-pop").is(":visible")){return false
}var n=$(this),w=n.parents("li"),m=parseFloat(w.find(".high").val()),u=parseFloat(w.find(".low").val()),q=w.index(),o=w.find("img"),p=o.offset();
var x=n.parents("li"),s=x.find(".tiein-list-tzm"),y=true;
if(iFourth.tieInTZM.enable&&w.find(".handle").size()>0){if(s.attr("loaded")){s.find("dl").each(function(){if($(this).find("li.selected").size()==0){y=false
}});
if(!y){iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.pop(x);
return false
}}else{iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.loadData(x);
return false
}}var v=n.is(":checked");
w[v?"addClass":"removeClass"]("selected");
var t=b.offset();
t.top=t.top-30;
t.left=t.left+25;
if(v){g.text(parseInt(g.text())+1);
k.text((parseFloat(k.text())+u).toFixed(2));
i.text((parseFloat(i.text())+m-u).toFixed(2));
parseFloat(i.text())>0&&l.show()||l.hide();
var r=$('<div><img src="'+o.attr("src")+'" /></div>').attr({id:"animateObj"+q,"class":"add-cart-animateObj"}).css({top:p.top,left:p.left}).appendTo("body");
r.animate({top:b.offset().top-110,left:t.left,width:30,height:30,opacity:1},600,function(){r.animate({top:"+=30px",height:0},400,function(){r.remove();
var z=$('<span class="icon-plusone"></span>').appendTo(b);
z.animate({bottom:"+=10px",opacity:0},600,function(){z.remove()
})
})
})
}else{g.text(parseInt(g.text())-1);
k.text((parseFloat(k.text())-u).toFixed(2));
i.text((parseFloat(i.text())-m+u).toFixed(2));
var r=$("#animateObj"+q);
r.stop().fadeOut(500,function(){r.remove()
});
parseFloat(i.text())>0&&l.show()||l.hide()
}});
e.find(".reset").click(function(){c()
});
j.find(".handle a").click(function(){var n=$(this).parents("li"),m=n.find(".check");
if(m.is(":checked")){m.prop("checked",false).click().removeAttr("checked")
}iFourth.tieInTZM.pop(n)
})
};
iFourth.tieInRec2={init:function(){iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
var e=$("#J-tieIn"),a=e.find(".tiein-nav a"),h=e.find(".tiein-list ul"),k=h.children("li"),f=k.find(".check"),b=e.find(".btn-addcart-mini"),g=e.find(".tiein-count .count em"),l=e.find(".price-total"),j=e.find(".price-diff"),m=j.parents("dl");
e.find(".btn-dir").click(function(){iFourth.tieInTZM.close()
});
this.box=e;
this.list=h;
function c(){e.find(".tiein-list li :checked").prop("checked",false).click().removeAttr("checked")
}var i=[];
k.each(function(){i.push($(this).attr("data-id"))
});
this.existent=i;
a.click(function(){var o=$(this),n=o.attr("data-type");
if(o.is(".current")){return false
}o.addClass("current").siblings("a").removeClass("current");
$(".tiein-main-empty").hide();
if(!n){h.children("li").addClass("hide").filter("[data-rec]").removeClass("hide");
iFourth.tieInRec2.update()
}else{if(o.attr("loaded")){iFourth.tieInRec2.showType(n);
iFourth.tieInRec2.update()
}else{h.children("li").addClass("hide")
}}});
e.off("click",".check").on("click",".check",function(){if($(".tiein-tzm-pop").is(":visible")){return false
}var o=$(this),w=o.is(":checked"),x=o.parents("li"),n=parseFloat(x.find(".high").val()),v=parseFloat(x.find(".low").val()),r=x.index(),p=x.find("img"),q=p.offset();
var y=o.parents("li"),t=y.find(".tiein-list-tzm"),z=true;
if(iFourth.tieInTZM.enable&&x.find(".handle").size()>0){if(t.attr("loaded")){t.find("dl").each(function(){if($(this).find("li.selected").size()==0){z=false
}});
if(!z){iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.pop(y);
return false
}}else{iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.loadData(y);
return false
}}var w=o.is(":checked");
x[w?"addClass":"removeClass"]("selected");
var u=b.offset();
u.top=u.top-30;
u.left=u.left+25;
if(w){g.text(parseInt(g.text())+1);
l.text((parseFloat(l.text())+v).toFixed(2));
j.text((parseFloat(j.text())+n-v).toFixed(2));
parseFloat(j.text())>0&&m.show()||m.hide();
var s=$('<div><img src="'+p.attr("src")+'" /></div>').attr({id:"animateObj"+r,"class":"add-cart-animateObj"}).css({top:q.top,left:q.left}).appendTo("body");
s.animate({top:b.offset().top-110,left:u.left,width:30,height:30,opacity:1},600,function(){s.animate({top:"+=30px",height:0},400,function(){s.remove();
var A=$('<span class="icon-plusone"></span>').appendTo(b);
A.animate({bottom:"+=10px",opacity:0},600,function(){A.remove()
})
})
})
}else{g.text(parseInt(g.text())-1);
l.text((parseFloat(l.text())-v).toFixed(2));
j.text((parseFloat(j.text())-n+v).toFixed(2));
var s=$("#animateObj"+r);
s.stop().fadeOut(500,function(){s.remove()
});
parseFloat(j.text())>0&&m.show()||m.hide()
}});
e.find(".reset").click(function(){c()
});
k.find(".handle a").click(function(){var o=$(this).parents("li"),n=o.find(".check");
if(n.is(":checked")){n.prop("checked",false).click().removeAttr("checked")
}iFourth.tieInTZM.pop(o)
})
},update:function(){this.list.css("left",0);
this.box.find(".next, .prev").unbind();
iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
},showType:function(b){var a=this.list.children("li").addClass("hide").filter('[data-type="'+b+'"]').removeClass("hide");
if(a.size()==0){$(".tiein-main-empty").show()
}}};
iFourth.setMeal=function(){iFourth.listloop({wrap:"#J-slide-setMeal",loopBox:".tiein-list ul:not(.hide)",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
iFourth.listloop({wrap:"#J-setMeal-list",loopBox:".meal-list",triggerLeft:".prev",triggerRight:".next",step:{wide:4,narrow:3},scrollWidth:{wide:880,narrow:660}});
var e=$(".meal-list li").size();
if(screen.width>=1200){if(e<4){$(".meal-wrapper .prev").hide();
$(".meal-wrapper .next").hide()
}}var b=$("#J-setMeal"),a=b.find(".tiein-nav a"),c=b.find(".tiein-list ul"),f=c.children("li");
a.click(function(){var h=$(this),g=h.attr("data-group");
if(h.is(".current")){return false
}h.addClass("current").siblings("a").removeClass("current");
b.find(".tiein-list ul").addClass("hide").filter('[data-group="'+g+'"]').removeClass("hide");
b.find(".next, .prev").unbind();
c.css("left",0);
iFourth.listloop({wrap:"#J-slide-setMeal",loopBox:".tiein-list ul:not(.hide)",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
})
};
iFourth.tieInTZM={enable:false,addCart:false,currentItem:null,loadData:null,subCode:null,init:function(e){var f=this,c=$(".tiein-tzm-pop");
f.enable=true;
f.loadData=e;
var g=$(this),a=g.find("li:not(.disabled,.c-disabled)"),b=g.find("input:hidden");
c.on("click",".main dl dd li:not(.not-able)",function(){var n=$(this);
n.addClass("selected").siblings().removeClass("selected");
if($(this).parents("dl").index()==0){f.subCode.checkDom("c")
}else{f.subCode.checkDom("v")
}var m="已选择：",h="",k=[],l=[],j="",i="";
c.find(".main dl li.selected").each(function(){k.push($(this).attr("title"));
l.push($(this).attr("cid"))
});
m+=k.join("，");
h+=l.join("");
j=$(this).parents("dl").attr("pass");
if(typeof j!="undefined"&&j!=""){CommonFourPage.checkSub(j,this);
$.each(fitInfo,function(p,q){if(typeof q!="undefined"&&q.passPart==j){var o=q.subInfo[0][h];
if(typeof o!="undefined"){$('.tiein-list-tzm[pass="'+j+'"]').siblings(".fitPartNumber").val(o.partNumber);
$(".tiein-tzm-pop .btn-ok").attr("sub",o.partNumber);
$(".tiein-tzm-pop .btn-ok").attr("pass",j)
}}})
}c.find(".tip .normal").text(m).siblings().text("")
});
c.on("click",".btn-ok",function(){iFourth.tieInTZM.select()&&CommonFourPage.getSubFitPrice(this)
});
c.on("click",".close,.btn-cancel",function(){f.close()
})
},pop:function(b){if(b[0]==this.currentItem){return
}$(".tip span.normal").html("");
var a=b.find(".tiein-list-tzm");
if(a.attr("loaded")){iFourth.tieInTZM.show(b)
}else{iFourth.tieInTZM.loadData(b)
}},show:function(e){var g=e.find(".tiein-list-tzm"),h=g.html(),i=$(".tiein-tzm-pop");
g.attr("loaded","loaded");
this.currentItem=e[0];
var c=e.offset().left,f=$(".tiein-box").offset().left;
i.css("left",c-f+120).show().find(".main").html(h);
var k=$(e).attr("pass");
var b=CommonFourPage.CFittingPassInfo[k];
this.subCode=new SubCode(i.find(".main dl").eq(0),i.find(".main dl").length>1?i.find(".main dl").eq(1):"",b.saleInfo,b.partInfo,"p");
var j="已选择：",a=[];
i.find(".main dl li.selected").each(function(){a.push($(this).attr("title"))
});
$.each($(".tiein-tzm-pop li.selected"),function(l,m){$(m).trigger("click")
});
if(a.length>0){j+=a.join("，");
i.find(".tip .normal").text(j).siblings().text("")
}},close:function(){this.currentItem=null;
this.addCart=false;
this.subCode=null;
$(".tiein-tzm-pop").hide().find(".tip span").text("")
},select:function(i){var g=this,k=$(".tiein-tzm-pop"),f=true,a=true,e=k.find(".main dl").eq(0),j=k.find(".main dl").eq(1),c=k.find(".tip .error"),b=0;
if(e.size()>0&&$(e).find("li.selected").length==0){f=false
}if(j.size()>0&&$(j).find("li.selected").length==0){a=false
}if(!f||!a){if(f){c.text("请选择"+$(j).find("li").eq(0).attr("sid"))
}if(a){c.text("请选择"+$(e).find("li").eq(0).attr("sid"))
}if(!f&&!a){c.text("请选择"+$(e).find("li").eq(0).attr("sid")+"和"+$(j).find("li").eq(0).attr("sid"))
}c.siblings().text("");
return b
}var h=$(g.currentItem);
h.find(".tiein-list-tzm").html(k.find(".main").html());
if(i){iFourth.tieInTZM.close();
h.find("input.check").prop("checked",true).click().prop("checked",true)
}b=1;
return b
}};
iFourth.Zoom=function(a,c){var b=$(a);
this.hasvideo=b.find(".imgzoom-video").size();
this.has3D=b.find(".scroll-wrap-box").is(":visible");
this.box=b;
this.mainArea=b.find(".imgzoom-main");
this.popArea=b.find(".imgzoom-pop");
this.shot=b.find(".imgzoom-shot");
this.mainImg=this.mainArea.children("img");
this.largeImg=this.popArea.children("img");
this.thumbList=b.find(".imgzoom-thumb-main ul");
this.thumbItems=this.thumbList.children("li");
this.btnPrev=b.find(".prev");
this.btnNext=b.find(".next");
this.count=this.thumbItems.size();
this.page=1;
this.pageCount=this.count-4;
this.index=0;
this.srcMedium="";
this.srcLarge="";
this.callback=c;
this._init()
};
iFourth.Zoom.prototype={_init:function(){var a=this,c,b=this.thumbItems.find("img").first();
this.srcMedium=b.attr("src-medium");
this.srcLarge=b.attr("src-large");
this.thumbList.css("left",0);
this.btnPrev.addClass("prev-disable");
if(this.thumbItems.size()<=5){this.btnNext.addClass("next-disable")
}else{this.btnNext.removeClass("next-disable")
}this.thumbItems.hover(function(){var e=$(this);
c=setTimeout(function(){a.choose(e.index())
},100)
},function(){clearTimeout(c)
});
this.btnPrev.unbind().click(function(){!$(this).is(".prev-disable")&&a._paging(0)
});
this.btnNext.unbind().click(function(){!$(this).is(".next-disable")&&a._paging(1)
});
this._zoom();
this._video();
this._popInit();
this.choose(0);
this.showNext_prev()
},_paging:function(b){if(b){this.thumbList.animate({left:"-=67px"},200);
this.page++
}else{this.thumbList.animate({left:"+=67px"},200);
this.page--
}if(this.page==this.pageCount){this.btnNext.addClass("next-disable")
}else{this.btnNext.removeClass("next-disable")
}if(this.page==1){this.btnPrev.addClass("prev-disable")
}else{this.btnPrev.removeClass("prev-disable")
}var a=this.thumbItems.eq(this.page+3).find("img[src3]");
a.attr("src",a.attr("src3"))
},_zoom:function(){var b=this,f;
var e=$(".proinfo-main");
this.mainArea.hover(function(g){if(!b.srcLarge){return false
}e.removeClass("promote-zindex");
b.mainArea.mousedown(function(i){b.movePoint=i;
b.moved=false
});
b.mainArea.mousemove(function(j){if(b.movePoint){var i=Math.abs(b.movePoint.clientX-j.clientX)+Math.abs(b.movePoint.clientY-j.clientY);
if(i>10){b.moved=true
}}b._shotPosition(j.pageX,j.pageY)
});
var h=$("#scroll3d-frame")[0];
if(h){h.contentDocument.addEventListener("mousedown",c);
h.contentDocument.addEventListener("mousemove",a)
}f=setTimeout(function(){b.largeImg.attr("src",b.srcLarge);
b.popArea.fadeIn(200);
b.shot.animate({opacity:".5"},200)
},100)
},function(){clearTimeout(f);
var g=$("#scroll3d-frame")[0];
if(g){g.contentDocument.removeEventListener("mousedown",c);
g.contentDocument.removeEventListener("mousemove",a)
}b.mainArea.unbind("mousemove");
b.mainArea.unbind("mousedown");
b.popArea.fadeOut(200);
b.shot.animate({opacity:"0"},200)
});
function c(g){b.movePoint=g;
b.moved=false
}function a(h){if(b.movePoint){var g=Math.abs(b.movePoint.clientX-h.clientX)+Math.abs(b.movePoint.clientY-h.clientY);
if(g>10){b.moved=true
}}}},resetPopInit:function(){this._popInit()
},showPopArea:function(a){var b=this;
b.srcLarge=a;
b.largeImg.attr("src","");
b._timeout=setTimeout(function(){b.largeImg.attr("src",b.srcLarge);
b.popArea.removeAttr("style").fadeIn(200)
},100)
},updateLargeImg:function(b,a){this.largeImg.css({top:b,left:a})
},hidePopArea:function(){var a=this;
clearTimeout(a._timeout);
a.popArea.css("left","-1000px").fadeOut(200)
},_shotPosition:function(g,c){var h=this.mainArea.offset(),f=this.shot;
var a=g-h.left,i=c-h.top,b=a-101,e=i-101;
if($(".tm-style").size()>0){if(a-101<=0){b=0
}if(a+101>=400){b=198
}if(i-101<=0){e=0
}if(i+101>=520){e=299
}}else{if(a-101<=0){b=0
}if(a+101>=400){b=198
}if(i-101<=0){e=0
}if(i+101>=400){e=198
}}f.css({left:b,top:e});
this.largeImg.css({top:-e/400*800,left:-b/400*800})
},_video:function(){var a=$(".imgzoom-video");
$(".imgzoom-video-play").unbind().click(function(){var b=$("#imgzoom_video_con").attr("data-playcode");
var c=$("#imgzoom_video_con").attr("data-playUrl");
iFourth.loadVideo("imgzoom_video_con",b,c);
a.show();
$(this).hide()
});
a.find(".close").unbind().click(function(){var b=$(".playmark-box");
if(b.length&&b.is(":visible")){$(".imgzoom-video-play").show()
}$(this).next().removeAttr("data-init").children().remove();
a.hide()
})
},choose:function(b){var a=this.thumbItems.eq(b),c=this.box.find(".imgzoom-main img"),e=a.find("img");
this.srcMedium=e.attr("src-medium");
this.srcLarge=e.attr("src-large");
this.index=b;
if(this.hasvideo&&this.has3D&&this.index>=2){this.index=this.index-1
}if(this.hasvideo&&!this.has3D&&this.index>=1){this.index=this.index-1
}a.addClass("current").siblings().removeClass("current");
if(this.callback&&typeof(this.callback)=="function"){this.callback(b)
}c.attr("src",this.srcMedium)
},_popInit:function(){var j=this,k=j.$imgview||$(".imgview"),r=k.find(".imgview-main img"),c=k.find(".mask-l"),e=k.find(".mask-r"),q=k.find(".imgview-count span"),g=k.find(".imgview-count em"),a=k.find(".imgview-thumb-main"),o=a.children("ul"),f=o.children("li"),t=k.find(".imgview-thumb .prev"),u=k.find(".imgview-thumb .next"),i=k.find("a.close"),h=1,s=6,m=Math.ceil(f.size()/s),n=0;
if(!k.find(".pop-scroll-wrap").length&&iFourth.win.height()<780){k.addClass("imgview-mini");
s=5;
m=Math.ceil(f.size()/s);
n=1
}function p(v){var w=f.removeClass("current").eq(v).addClass("current");
r.attr("src",w.find("img").attr("src-large"));
j.index=v;
b(Math.ceil((v+1)/s));
g.text(j.index+1)
}function l(){if(j.hasvideo&&j.has3D&&j.index>=1){j.index=j.index+1
}if(j.hasvideo&&!j.has3D&&j.index>=0){j.index=j.index+1
}j.choose(j.index);
k.fadeOut(300);
iFourth.mask.animate({opacity:0},300,function(){$(this).hide()
})
}function b(v){if(v==h){return false
}if(n){o.animate({top:-(v-1)*460},300)
}else{o.animate({top:-(v-1)*552},300)
}h=v
}if(m>1){k.find(".imgview-thumb").removeClass("imgview-thumb-single")
}else{k.find(".imgview-thumb").addClass("imgview-thumb-single")
}o.css("top",0);
g.text(j.index+1);
q.text(f.length);
this.mainArea.unbind("click").click(function(){if(!j.srcLarge){return false
}if(j.has3D&&j.moved&&j.index==0){return
}if(j.hasvideo&&$(".playmark-box").is(":visible")){if(j.has3D){if(j.index==1){return
}}else{if(j.index==0){return
}}}p(j.index);
if(k.height()>iFourth.win.height()){k.css({position:"absolute",top:iFourth.win.scrollTop()+10+"px","margin-top":"0"})
}k.fadeIn(300).find("img[src3]").each(function(){$(this).attr("src",$(this).attr("src3")).removeAttr("src3")
});
iFourth.mask.show().animate({opacity:0.5},300)
});
i.unbind().click(function(){l()
});
iFourth.mask.click(function(){l()
});
f.click(function(){p($(this).index())
});
c.unbind().click(function(){var w=a.children("ul").children("li").size();
var v=j.index<=0?(w-1):(j.index-1);
p(v)
});
e.unbind().click(function(){var w=a.children("ul").children("li").size();
var v=j.index>=(w-1)?0:(j.index+1);
p(v)
});
t.unbind().click(function(){if(o.is(":animated")){return false
}b(h==1?m:h-1)
});
u.unbind().click(function(){if(o.is(":animated")){return false
}b(h==m?1:h+1)
})
},showNext_prev:function(){var f=this.box,e=f.find(".imgzoom-thumb-main"),a=e.find("li").size(),c=f.find(".imgzoom-thumb .prev"),b=f.find(".imgzoom-thumb .next");
if(a>5){c.css("visibility","");
b.css("visibility","")
}else{c.css("visibility","hidden");
b.css("visibility","hidden")
}}};
iFourth.submitFeedBack=function(){var m=$("input[name=priceplace]:checked").val();
var v="";
var a="";
var l="";
var c="";
var b="";
if(m==0){var h=$("#productNetAddr").val();
if(h==""||h=="请输入您发现的销售网址"){$("#productNetAddrTip").removeClass("hide");
$("#productNetAddr").addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入对方商品的网址");
return false
}else{$("#productNetAddrTip").addClass("hide");
$("#productNetAddr").removeClass("price-feedback-text-err")
}if(h.length>200){$("#productNetAddrTip").removeClass("hide");
$("#productNetAddr").addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入有效的网址");
return false
}else{$("#productNetAddrTip").addClass("hide");
$("#productNetAddr").removeClass("price-feedback-text-err")
}h=h.indexOf("#")!=-1?h.substr(0,h.indexOf("#")):h;
v=h;
var q=$("#feedbackPrice1").val()=="单位（元）"?"":$("#feedbackPrice1").val();
if(q==""){$("#feedbackPrice1Tip").removeClass("hide");
$("#feedbackPrice1").addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入对方商品的价格");
return false
}else{$("#feedbackPrice1Tip").addClass("hide");
$("#feedbackPrice1").removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($("#feedbackPrice1"))||q.length>10){$("#feedbackPrice1Tip").removeClass("hide");
$("#feedbackPrice1").addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入有效的金额");
return false
}else{$("#feedbackPrice1Tip").addClass("hide");
$("#feedbackPrice1").removeClass("price-feedback-text-err")
}a=q;
var j=$("#feedbackFreight").val()=="单位（元）"?"":$("#feedbackFreight").val();
if(j!=""){if(!iFourth.checkPrice($("#feedbackFreight"))||j.length>10){$("#feedbackFreightTip").removeClass("hide");
$("#feedbackFreight").addClass("price-feedback-text-err");
$("#feedbackFreightTip span").text("请输入有效的运费");
return false
}else{$("#feedbackFreightTip").addClass("hide");
$("#feedbackFreight").removeClass("price-feedback-text-err")
}}else{$("#feedbackFreightTip").addClass("hide");
$("#feedbackFreight").removeClass("price-feedback-text-err")
}l=j
}else{var f=$("#feedbackRealShopName").val()=="请输入实体店的名称"?"":$("#feedbackRealShopName").val();
if(f==""){$("#feedbackRealShopNameTip").removeClass("hide");
$("#feedbackRealShopName").addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入实体店的名称");
return false
}else{$("#feedbackRealShopNameTip").addClass("hide");
$("#feedbackRealShopName").removeClass("price-feedback-text-err")
}if(f.length>50){$("#feedbackRealShopNameTip").removeClass("hide");
$("#feedbackRealShopName").addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入有效的实体店名称");
return false
}else{$("#feedbackRealShopNameTip").addClass("hide");
$("#feedbackRealShopName").removeClass("price-feedback-text-err")
}v=f;
var q=$("#feedbackPrice2").val()=="单位（元）"?"":$("#feedbackPrice2").val();
if(q==""){$("#feedbackPrice2Tip").removeClass("hide");
$("#feedbackPrice2").addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入实体店商品的价格");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$("#feedbackPrice2").removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($("#feedbackPrice2"))||q.length>10){$("#feedbackPrice2Tip").removeClass("hide");
$("#feedbackPrice2").addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$("#feedbackPrice2").removeClass("price-feedback-text-err")
}a=q;
var s=$("#feedbackCity").val()=="请输入您发现的实体店城市"?"":$(".address-placement span").eq(1).html();
if(s.length>20){$("#feedbackCityTip").removeClass("hide");
$("#feedbackCity").addClass("price-feedback-text-err");
$("#feedbackCityTip span").text("请输入有效的城市");
return false
}else{$("#feedbackCityTip").addClass("hide");
$("#feedbackCity").removeClass("price-feedback-text-err")
}c=s;
var g=$("#foundDate").val();
if(g==""){$("#foundDateTip").removeClass("hide");
$("#foundDate").addClass("price-feedback-text-err")
}else{$("#foundDateTip").addClass("hide");
$("#foundDate").removeClass("price-feedback-text-err")
}b=g.split(" ")[0]
}var p="//"+sn.domain+sn.context+"/SNFeedbackCmd?ftype="+m+"&catalog="+sn.catalogId;
if(typeof sn.categoryName1!="undefined"&&sn.categoryName1!=""){p+="&first="+sn.categoryName1
}if(typeof sn.categoryName2!="undefined"&&sn.categoryName2!=""){p+="&second="+sn.categoryName2
}if(typeof sn.categoryName3!="undefined"&&sn.categoryName3!=""){p+="&third="+sn.categoryName3
}if(typeof sn.categoryName4!="undefined"&&sn.categoryName4!=""){p+="&fouth="+sn.categoryName4
}if(typeof sn.categoryName5!="undefined"&&sn.categoryName5!=""){p+="&fifth="+sn.categoryName5
}p+="&partnumber="+$("#curPartNumber").val();
var x=sn.vendorCode==""?"0":"1";
p+="&vtype="+x;
var n=sn.vendorCode==""?"0000000000":sn.vendorCode;
p+="&vendorCode="+n;
var r=$("#itemDisplayName").html()==null?$("#productDisplayName").html():$("#itemDisplayName").html();
p+="&catName="+r;
var t=window.location.href;
t=t.indexOf("#")!=-1?t.substr(0,t.indexOf("#")):t;
p+="&pageUrl="+t;
var u=sn.priceType=="4"&&PriceShow.serviceType!="3"?sn.promotionPrice:"";
p+="&rushPrice="+u;
var o=sn.priceType=="4"&&PriceShow.serviceType=="3"?sn.promotionPrice:"";
p+="&groupPrice="+o;
var k=sn.priceType=="1"?sn.promotionPrice:"";
p+="&promotionPrice="+k;
var e=sn.priceType=="0"?sn.promotionPrice:"";
p+="&netPrice="+e;
var j=(sn.freight==-1||sn.freight=="免运费")?"":sn.freight;
p+="&freight="+j;
var i=$(".ui-city span").eq(1).html();
p+="&cityName="+i;
var w=d("idsEppLastLogin")!=null?d("idsEppLastLogin"):(d("logonUserIdLastTime")!=null?d("logonUserIdLastTime"):d("idsLoginUserIdLastTime"));
p+="&userNmae="+w;
p+="&compete="+v;
p+="&competePrice="+a;
p+="&competeFreight="+l;
p+="&competeCityname="+c;
p+="&competeTS="+b;
p=encodeURI(p);
$.ajax({url:p,type:"GET",cache:false,async:false,dataType:"jsonp",error:function(y,A,z){},success:function(y){$.unmDialog();
$.mDialog({title:"温馨提示",message:$("#win_success"),css:{width:"480px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true})
}})
};
iFourth.checkFeedBackInput=function(f){var i=f;
if($(i).attr("id")=="productNetAddr"){var b=$(i).val();
if(b==""){$("#productNetAddrTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入对方商品的网址");
return
}else{$("#productNetAddrTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(b.length>200){$("#productNetAddrTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入有效的网址");
return
}else{$("#productNetAddrTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackPrice1"){var c=$(i).val();
if(c==""||c=="单位（元）"){$("#feedbackPrice1Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入对方商品的价格");
return
}else{$("#feedbackPrice1Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($(i))||c.length>10){$("#feedbackPrice1Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice1Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackPrice2"){var c=$(i).val();
if(c==""||c=="单位（元）"){$("#feedbackPrice2Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入实体店商品的价格");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($(i))||c.length>10){$("#feedbackPrice2Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackFreight"){var a=$(i).val();
if(a!=""){if(!iFourth.checkPrice($(i))||a.length>10){$("#feedbackFreightTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackFreightTip span").text("请输入有效的运费");
return
}else{$("#feedbackFreightTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}else{$("#feedbackFreightTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackRealShopName"){var h=$(i).val()=="请输入实体店的名称"?"":$(i).val();
if(h==""){$("#feedbackRealShopNameTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入实体店的名称");
return
}else{$("#feedbackRealShopNameTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(h.length>50){$("#feedbackRealShopNameTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入有效的实体店名称");
return
}else{$("#feedbackRealShopNameTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackCity"){var g=$(i).val();
if(g.length>20){$("#feedbackCityTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackCityTip span").text("请输入有效的城市");
return
}else{$("#feedbackCityTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="foundDate"){var e=$(i).val();
if(e==""){$("#foundDateTip").removeClass("hide");
$(i).addClass("price-feedback-text-err")
}else{$("#foundDateTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}};
iFourth.getCurDate=function(){var h=new Date();
var e=h.getFullYear();
var f=iFourth.add_zero(h.getMonth()+1);
var i=iFourth.add_zero(h.getDate());
var a=iFourth.add_zero(h.getHours());
var c=iFourth.add_zero(h.getMinutes());
var g=iFourth.add_zero(h.getSeconds());
var b=e+"-"+f+"-"+i;
return b
};
iFourth.add_zero=function(a){if(a<10){return"0"+a
}else{return a
}};
iFourth.IsURL=function(c){var b="^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?";
"(([0-9]{1,3}.){3}[0-9]{1,3}";
"([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].";
"(:[0-9]{1,4})?";
"(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
var a=new RegExp(b);
if(a.test(c)){return(true)
}else{return(false)
}};
iFourth.checkPrice=function(b){var e=b.val();
var a=0;
if(e.length!=0){for(var c=0;
c<e.length;
c++){if((e.charAt(c)>"9"||e.charAt(c)<"0")&&e.charAt(c)!="."&&e.charAt(c)!=","){return(false)
}if(e.charAt(c)=="."){a++
}}if(a>1){return(false)
}}else{b.val("");
return false
}return true
};
iFourth.checkkey=function(b,a){b.value=b.value.replace(/[^\d.]/g,"");
b.value=b.value.replace(/^\./g,"");
b.value=b.value.replace(/\.{2,}/g,".");
b.value=b.value.replace(/^\d{1,10}\.\d{3}?$/g,b.value.substr(0,b.value.length-1));
b.value=b.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
};
iFourth.renxingfu=function(){$(".renxf-item").click(function(){var c=$(this);
var b=$("#buyNowAddCart");
if(c.parent().is(".renxf-list-disable")){return false
}if(c.is(".renxf-item-mianxi")&&!c.is(".current")){b.html("我要免息");
b.attr("name","item_"+sn.partNumber+"_basic_instalment-30days");
if(window.Renxf){Renxf.buttonId="rxfmx";
Renxf.buttonClass="btn-mianxi"
}}else{b.html("我要分期");
b.attr("name","item_"+sn.partNumber+"_basic_instalment-months");
if(window.Renxf){Renxf.buttonId="rxffq";
Renxf.buttonClass="btn-fenqi"
}}c.toggleClass("current").siblings().removeClass("current");
if(c.hasClass("current")){b.attr("href","javascript:Renxf.buyNowFreenessPay();")
}else{var a="javascript:Cart.buyNowTime();";
b.html("立即购买").attr("href",a);
b.attr("name","item_"+sn.partNumber+"_gmq_ljgm")
}$(".renxf-box .tzm-border").hide()
});
$(".renxf-btn .btn-fenqi").click(function(){if($(".renxf-list").find(".current").size()==0){$(".renxf-box .tzm-border").show();
return false
}})
};
iFourth.shouhou=function(){var a=$(".sh-box").not(".o2o-box");
a.find(".sh-item").click(function(){$(this).toggleClass("current")
})
};
iFourth.o2o=function(){var b=$(".o2o-box");
b.find(".sh:eq(0)").find(".sh-item").click(function(){$(this).toggleClass("current").siblings().removeClass("current");
a();
o2oParts.select()
});
a();
function a(){if(b.find(".sh-item:eq(0)").hasClass("current")){b.find(".sh:gt(0)").show()
}else{b.find(".sh:gt(0)").hide()
}}};
iFourth.heyueji=function(a){$(".proinfo-hyj-rel dd li").click(function(){$(this).addClass("selected").siblings().removeClass("selected");
a(this);
iFourth.mainHeight()
});
$(".proinfo-hyj dd li").click(function(){var e=$(this),f=e.index(),c=$(".proinfo-hyj-rel"),g=$(".luoji-tip");
c.find("li.selected").removeClass("selected");
if(f==0){c.hide();
g.show();
a(this)
}else{g.hide();
c.show().find("dd ul").hide().eq(f-1).show().children("li:first").click()
}b();
iFourth.mainHeight()
});
function b(){var e=$(".proattr-result"),c=e.find("dd .result-text");
var f="";
$(".proattr-radio li.selected, .proattr-check li.selected").each(function(){f+='"'+$(this).attr("title")+'" '
});
$(".proinfo-bangke input:checked").each(function(){f+='"'+$(this).next("label").text()+'" '
});
c.text(f);
(f==""&&$("#phonedl li.selected").size()==0)&&e.hide()||e.show()
}};
iFourth.presell=function(){var c=$(".proinfo");
var b=$(".proinfo-main");
var a,e;
$(".presell-rule").on("mouseenter",function(g){var f=$(this);
clearTimeout(a);
clearTimeout(e);
a=setTimeout(function(){c.css("z-index",22);
f.find(".content").show(100);
b.addClass("promote-zindex")
},100)
}).on("mouseleave",function(){var f=$(this);
clearTimeout(a);
clearTimeout(e);
e=setTimeout(function(){c.css("z-index","auto");
f.find(".content").hide(100);
b.removeClass("promote-zindex")
},50)
})
};
iFourth.hyjDialog={obj:"",callbackFun:function(b){var a=b.html;
obj.find(".content").html(a);
$(".m-dialog").css("top","20%")
},clickFun:function(){$("#phoneGoLook").click(function(){$.mDialog({css:{width:"692px"},http:function(a,b){obj=a;
$.ajax({url:sn.qkkUrl+"/fourPageLook/goLook.hs?phoneSku="+sn.ninePartNumber+"&provinceId="+sn.provinceCode+"&contractTypeCode="+sn.contractTypeCode+"&operatorId="+sn.operatorId+"&busiType=2&cityId="+sn.cityId,cache:false,dataType:"jsonp",jsonpCallback:"iFourth.hyjDialog.callbackFun",async:false,success:function(c){}})
},closeFn:function(){},title:"套餐变更",overlayClick:true,fadeIn:300,fadeOut:500})
})
}};
iFourth.bindShareList=function(){$(".share").click(function(a){if(a.stopPropagation){a.stopPropagation()
}else{window.event.cancelBubble=true
}$(this).find(".share-list").toggle();
$(this).toggleClass("ex-share")
});
$(document).click(function(){$(".share").removeClass("ex-share");
$(".share").find(".share-list").hide()
})
};
iFourth.bindZenPin=function(){var b=$(".proinfo-promo .zp-b-img");
var a=$(".proinfo-promo dd");
var c;
$(".zengpin .zp-item .s-img").unbind().mouseenter(function(){clearTimeout(c);
b.attr("href",$(this).parent().attr("href"));
b.find("img").attr("src",$(this).attr("src-large"));
b.find(".txt").html($(this).attr("alt"));
b.find(".price").html($(this).attr("data-price"));
b.attr("title",$(this).attr("alt"));
var i=$(".proinfo-promo dd").offset();
var h=$(this).offset();
var e=$(this).parent().width();
var g=h.top-i.top+40;
var f=h.left-i.left-e*0.5;
b.css({top:g,left:f});
b.show()
}).mouseleave(function(){c=setTimeout(function(){b.hide()
},500);
b.hover(function(){clearTimeout(c);
b.show()
},function(){b.hide();
clearTimeout(c)
})
})
};
iFourth.promoFoldFlag=false;
iFourth.promoFoldHeight=0;
iFourth.bindPromo=function(){var o=$(".proinfo-promo .promo-list");
var j=o.find(">li:visible");
var n=$(".proinfo-promo .promo-closeup");
var l=$(".proinfo-promo .promo-show");
var e=$(".ph-price-qrcode");
var q=e.is(":visible")?2:3;
var b=$(".promo-list li:visible label");
if(b.length){var k=[];
b.each(function(){k.push($(this).text())
});
k=k.slice(q-1).slice(-4).reverse();
n.find(".promo-label").remove();
for(var g=0;
g<k.length;
g++){n.prepend('<label class="promo-label">'+k[g]+"</label>")
}}var m='<i class="ng-iconfont down-i">&#xe62e;</i><i class="ng-iconfont up-i">&#xe63a;</i>';
var c=350,h=22;
var f=$("body");
j.each(function(){var i=$(this).find("p");
i.each(function(){var z=$(this);
if(z.height()>h){var B=z[0].childNodes;
var t=B.length;
t>0&&B[0].nodeType==3&&$.trim(B[0].nodeValue)==""&&z[0].removeChild(B[0]);
t=B.length;
t>1&&B[t-1].nodeType==3&&$.trim(B[t-1].nodeValue)==""&&z[0].removeChild(B[t-1]);
var y,r;
var C="";
for(var w=0;
w<B.length;
w++){var s=B[w];
if(s.nodeType==3){C+=s.nodeValue
}else{break
}}B[0].nodeValue=C;
if(B.length>1){y=$(B[1].outerHTML)
}if(B.length>0){r=B[0]
}var A=y?y[0].outerHTML:"";
f.append(y);
var u=c-(y?y.width():0)-15-20;
y&&y.remove();
var v=r.nodeType==3?("<span >"+r.nodeValue+"</span>"):r.outerHTML;
var x=v+m+A;
z.html(x);
z.find(":first").addClass("first-span").attr({"data-width":u}).width(u);
z.addClass("zhedie")
}})
});
j.each(function(){$(this).find("p:not(:first)").not("mt4").addClass("mt4")
});
if(q==3){if(j.eq(0).hasClass("promo-gift")){o.css({top:"-5px"})
}else{o.css({top:"0"})
}}var a=this.promoFoldHeight;
var p=function(){var i=parseInt(j.eq(0).css("margin-bottom").replace("px",""));
i=isNaN(i)?0:i;
if(q==2){a=j.eq(0).height()+i
}if(q==3){var r=parseInt(j.eq(1).css("margin-bottom").replace("px",""));
r=isNaN(r)?0:r;
a=j.eq(0).height()+i+j.eq(1).height()+r
}iFourth.promoFoldHeight=a;
o.css({overflow:"hidden",height:a,position:"relative"})
};
o.off("click").on("click","p .down-i",function(){$(this).parent().removeClass("zhedie");
$(this).parent().find(":first").removeAttr("style");
if(n.is(":visible")){p()
}$("#pointTitle").unbind();
$(".proinfo-promo .tool-tip").hide()
}).on("click","p .up-i",function(){var i=$(this).parent().find(":first");
var r=i.attr("data-width");
i.width(r);
$(this).parent().addClass("zhedie");
if(n.is(":visible")){p()
}if($(this).parents(".prom-list-box").length>0){iFourth.bindYunzuan()
}});
if(j.length>q){p();
n.show();
l.hide()
}else{n.hide();
l.hide();
o.removeAttr("style")
}n.unbind().click(function(){n.toggle();
l.toggle();
o.css({height:"auto",overflow:"visible"});
if(iFourth.thisOnSale.isIe7()){setTimeout(function(){o.css("visibility","hidden").css("visibility","visible")
})
}iFourth.mainHeight()
});
l.unbind().click(function(){n.toggle();
l.toggle();
p();
iFourth.mainHeight()
})
};
iFourth.bindRxf=function(){var k=$(".renxf-box"),f=k.find(".renxf-list:visible").eq(0),h=k.find(".extend-icon"),b=k.find(".fold-icon"),a=0;
if(f.length){f.find(".renxf-item").each(function(){var m=$(this),l=m.position();
if(l.top==0){a=l.left+m.width()+3
}});
a&&k.find(".follow-box").css({left:a,right:"auto"})
}if(f.length&&f.height()>39){f.css("height","39");
b.hide();
h.show();
h.unbind().click(function(){f.css("height","auto");
h.hide();
b.show();
iFourth.mainHeight()
});
b.unbind().click(function(){f.css("height","39");
h.show();
b.hide();
iFourth.mainHeight()
})
}var i=$("#rx_charge_box");
var g=$("#J-TZM");
$(".h-charge-info").hover(function(){var m=$(this);
var r=i.parent().width();
i.html(m.find(".rx-charge").html());
var l=i.width()+2;
var q=m.position().left;
var p=m.width();
var o=m.position().top-40,n=q-l*0.5+p*0.5-9;
if(r-q-p<25&&q+l*0.5+p*0.5+9>=r){n=q-l+p-10;
i.css({top:o,left:n,width:l}).addClass("right-arrow").show()
}else{i.css({top:o,left:n,width:l}).show()
}k.addClass("promote-zindex");
g.addClass("promote-zindex")
},function(){i.hide().removeAttr("style").removeClass("right-arrow");
k.removeClass("promote-zindex");
g.removeClass("promote-zindex")
});
var j=k.find(".rxf-hui"),e=j.find(".s-tooltip");
var c=e.width();
e.css({left:-c+5,width:c});
j.hover(function(){k.addClass("promote-zindex");
e.click()
},function(){k.removeClass("promote-zindex")
})
};
iFourth.bindSh=function(){var c=$(".sh-box"),b=c.find(".sh-list:visible").eq(0),e=c.find(".extend-icon"),g=c.find(".fold-icon"),f=0;
if(b.length){b.find(".sh-item").each(function(){var j=$(this),i=j.position();
if(i.top==0){f=i.left+j.width()+5
}});
f&&c.find(".follow-box").css({left:f,right:"auto"})
}if(b.length&&b.height()>39){b.css("height","39");
g.hide();
e.show();
e.unbind().click(function(){b.css("height","auto");
e.hide();
g.show();
iFourth.mainHeight()
});
g.unbind().click(function(){b.css("height","39");
e.show();
g.hide();
iFourth.mainHeight()
})
}var h=$("#sh_charge_box");
var a=$("#J-TZM");
c.find(".h-charge-info").hover(function(){var l=$(this);
var o=h.parent().width();
h.html(l.find(".sh-charge").html());
var k=h.width()+2;
var j=l.position().left;
var i=l.width();
var n=l.position().top-40,m=j-k*0.5+i*0.5-9;
if(o-j-i<25&&j+k*0.5+i*0.5+9>=o){m=j-k+i-10;
h.css({top:n,left:m,width:k}).addClass("right-arrow").show()
}else{h.css({top:n,left:m,width:k}).show()
}c.addClass("promote-zindex");
a.addClass("promote-zindex")
},function(){h.hide().removeAttr("style").removeClass("right-arrow");
c.removeClass("promote-zindex");
a.removeClass("promote-zindex")
})
};
iFourth.bindColorEx=function(){$(".proinfo-color-ex .clr-item").click(function(){if($(this).hasClass("c-disabled")){return
}$(this).toggleClass("selected").siblings().removeClass("selected")
})
};
iFourth.bindQRCode=function(){var b=0;
var e,a;
var c=150;
$(".mainbtns").on("mouseenter",".qrcode-panel",function(){clearTimeout(a);
clearTimeout(e);
$("#qrCode").click();
var f=$(this);
e=setTimeout(function(){var i=f.offset().top,h=$(window).scrollTop();
var g=$(window).height();
var j=i-h+200;
b=j>g?1:0;
if(b){f.addClass("qrcode-panel-out").find(".qrc-wrapper").addClass(" extend-up").animate({height:"120","margin-top":"-120"},c)
}else{f.addClass("qrcode-panel-out").find(".qrc-wrapper").animate({height:"120"},c)
}iFourth.win.scroll()
},100)
}).on("mouseleave",".qrcode-panel",function(){clearTimeout(a);
clearTimeout(e);
var f=$(this);
a=setTimeout(function(){if(b){f.find(".qrc-wrapper").animate({height:"0","margin-top":"0"},c,function(){f.removeClass("qrcode-panel-out").find(".qrc-wrapper").removeClass("extend-up")
})
}else{f.find(".qrc-wrapper").animate({height:"0"},c,function(){f.removeClass("qrcode-panel-out")
})
}},100)
})
};
iFourth.scrollToNav=function(){window.setTimeout(function(){var a=$(".ng-nav-bar-chanel");
a=a.length?a:$(".sf-navbar");
a=a.length?a:$(".os-main-nav");
if(!a.length){return
}var b=a.offset().top;
if(iFourth.win.scrollTop()<b){$("html,body").animate({scrollTop:b},100)
}},100)
};
iFourth.bindMoreQuan=function(){var b=$("#has-take-panel");
var a=$("#no-take-panel");
$(".pop-coupon-win").on("click","#q-no-take-tab",function(){if($(this).hasClass("current")){return
}$(this).addClass("current").siblings().removeClass("current");
b.hide();
a.show()
});
$(".pop-coupon-win").on("click","#q-has-take-tab",function(){if($(this).hasClass("current")){return
}$(this).addClass("current").siblings().removeClass("current");
b.show();
a.hide();
var f=b.height();
var e=a.height();
if(f>e){var c=parseInt(-(f+90)*0.5);
$(".m-dialog").css("margin-top",c)
}});
iFourth.bindQuanNoTakeListloop();
iFourth.bindQuanHasTakeListloop()
};
iFourth.bindQuanNoTakeListloop=function(){iFourth.listloop({wrap:"#no-take-panel ",loopBox:" ul",step:{wide:3,narrow:3},scrollWidth:{wide:750,narrow:750}})
};
iFourth.bindQuanHasTakeListloop=function(){iFourth.listloop({wrap:"#has-take-panel ",loopBox:" ul",step:{wide:3,narrow:3},scrollWidth:{wide:750,narrow:750}})
};
iFourth.scrollDetailHandle;
iFourth.initDetailScroll=function(){var f;
var c=$("#J-fixBar-1");
var b=function(){var j=$(".d-anchor-panel");
var h=j.find(".d-an-list");
var l=$("#product-detail .prod-detail-container");
var g=h.height();
var k;
var i=h.height()+168;
return function(){var t=$(this).scrollTop();
if(!l.length){return
}k=l.height();
k=k>i?k:i;
j.height(k);
var q=l.offset().top;
var n=t-q;
var u=c.is(":visible");
if(n>0&&n<k-g-198){h.removeClass("d-bottom").addClass("d-fixed");
if(!f){var v;
var m=[];
h.find("li").each(function(){var x=$(this).attr("rel");
var w=$("[moduleId='"+x+"']");
if(w.length){m.push({id:x,top:w.offset().top})
}});
var s=u?t+150+80:t+150;
for(var o=0;
o<m.length;
o++){var r=m[o];
if(r.top<s){v=r.id
}}if(v){var p=h.find('li[rel="'+v+'"]');
p.addClass("d-select").siblings().removeClass("d-select")
}}}else{if(n<=0){h.removeClass("d-fixed d-bottom")
}}if(n>=k-g-198){h.removeClass("d-fixed").addClass("d-bottom")
}}
};
if(this.scrollDetailHandle){this.win.off("scroll",iFourth.scrollDetailHandle)
}this.scrollDetailHandle=b();
this.win.on("scroll",this.scrollDetailHandle);
var e=$(".d-anchor-panel");
var a=e.find(".d-an-list");
a.off("click",".d-an-item").on("click",".d-an-item",function(){var h=$(this);
if(h.hasClass("d-select")){return
}h.addClass("d-select").siblings().removeClass("d-select");
var i=h.attr("rel");
var g=$("[moduleId='"+i+"']").offset().top-50;
if(c.is(":visible")){g-=80
}$(window).scrollTop(g);
f=1;
setTimeout(function(){f=0
},300)
})
};
iFourth.addBZT=function(c,e){var b=$(".proinfo-left .imgzoom-main");
if(b.find("bzt").length>=4){return
}var a=document.createElement("img");
a.setAttribute("src",c);
a.onload=function(){var f=a.width;
var g=a.height;
var i=document.createElement("i");
i.setAttribute("class","bzt");
i.style.width=f+"px";
i.style.height=g+"px";
i.style.backgroundImage="url("+c+")";
switch(e){case 1:i.style.top=0;
i.style.left=0;
break;
case 2:i.style.top=0;
i.style.right=0;
break;
case 3:i.style.bottom=0;
i.style.left=0;
break;
case 4:i.style.bottom=0;
i.style.right=0;
break
}b.append(i)
}
};
iFourth.bindPhoneQrcode=function(){var a=$(".qrcode-region");
a.unbind("hover").hover(function(){var c=$(this);
var b=$(this).find(".ph-cd").length?160+26:160;
c.addClass("ph-q-extend").find(".qrc-wrapper").stop().animate({height:b},150);
iFourth.win.scroll();
c.find(".qrc-wrapper").click()
},function(){var b=$(this);
b.find(".qrc-wrapper").stop().animate({height:"0"},150,function(){b.removeClass("ph-q-extend")
})
})
};
iFourth.qrcodeTO;
iFourth.showDetailQrcode=function(){var b=$(".fix-qr-code .qrcode-region");
var a=parseInt(b.attr("data-time"));
if(!a||a<1){return
}b.addClass("ph-q-extend").find(".qrc-wrapper").stop().animate({height:160},150);
iFourth.win.scroll();
clearTimeout(this.qrcodeTO);
this.qrcodeTO=setTimeout(function(){b.removeClass("ph-q-extend").find(".qrc-wrapper").height(0)
},a*1000)
};
var host=location.hostname;
if(host.indexOf("cnsuning.com")!=-1){document.domain="cnsuning.com"
}else{if(host.indexOf("suning.com")!=-1){document.domain="suning.com"
}}iFourth.isGTIE8=function(){var b=navigator.appName;
if(b==="Microsoft Internet Explorer"){var a=parseInt(navigator.appVersion.split(";")[1].match(/(\d+)\./)[1]);
return a>8
}return true
};
iFourth.isSupportWebGL=function(){try{var a=document.createElement("canvas");
return !!(window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl")))
}catch(b){return false
}return !!(iFourth.isGTIE8()&&iFourth.isSupportWebGL())
};
iFourth.openImgView=function(){$(".imgzoom-shot").click();
$(".imgview .imgview-thumb-main li:first").click()
};
iFourth.popTabFun=function(){var b=location.hostname;
if(b.indexOf("cnsuning.com")!=-1){document.domain="cnsuning.com"
}else{if(b.indexOf("suning.com")!=-1){document.domain="suning.com"
}}if($("#js-scroll3d-frame").length>0){$(".scroll-wrap-box").html($("#js-scroll3d-frame").html())
}$(".scroll-wrap-box").length>0?$(".imgzoom-video-play").hide():$(".imgzoom-video-play").show();
var a=document.getElementById("scroll3d-frame");
$(a).on("load",function(c){$("#scroll3d-frame").contents().find(".sn360show").attr("data-vx",0).click(function(){var e=$(this);
if(Number(e.attr("data-vx"))===0){$(".imgzoom-shot").click();
$(".imgview .imgview-thumb-main li:first").click()
}})
});
$(".imgzoom-shot").click(function(){var c=$("#imgZoom .imgzoom-thumb .imgzoom-thumb-main li.current").index();
if(c!=0){$(".imgview-main .pop-scroll-wrap").hide()
}else{if($("#js-pop-scroll-wrap").length<=0){return
}if($(".pop-scroll-wrap").size()==1){var e=$(".pop-scroll-wrap").data();
if(e&&typeof e=="object"){if(((e.type==2||e.type==0)&&iFourth.isSupportWebGL())){$(".imgview-main .pop-scroll-wrap").html($("#js-pop-scroll-wrap").html()).show()
}else{if(((e.type==1||e.type==3)&&iFourth.isGTIE8())){$(".imgview-main .pop-scroll-wrap").html($("#js-pop-scroll-wrap").html()).show()
}else{$(".pop-scroll-wrap").remove();
$(".imgview-thumb").find("li:first").remove()
}}}}$("#pop-scroll3d-frame")[0].onload=function(){var f=$(".imgview-main .mask-l,.imgview-main .mask-r");
var g=$("#pop-scroll3d-frame").contents().find(".sn360show");
g.attr("data-vx",0).click(function(k){var j=$(this);
var i=$(".imgview-main .mask-l").offset().left+$(".imgview-main .mask-l").width(),h=i+1;
if(Number(j.attr("data-vx"))===0){k.screenX>h?$(".imgview-main .mask-r").click():$(".imgview-main .mask-l").click()
}});
g.mousemove(function(h){if(h.clientX>300){g.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/next.cur),pointer")
}else{g.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/prev.cur),pointer")
}})
}
}});
$(document).on("click",".imgview-thumb-main > ul > li",function(){var c=$(this);
if(c.index()==0){$(".pop-scroll-wrap").show();
if($("#js-pop-scroll-wrap").length>0){$(".pop-scroll-wrap").html($("#js-pop-scroll-wrap").html());
$("#pop-scroll3d-frame")[0].onload=function(){var e=$(".imgview-main .mask-l,.imgview-main .mask-r");
var f=$("#pop-scroll3d-frame").contents().find(".sn360show");
f.attr("data-vx",0).click(function(j){var i=$(this);
var h=$(".imgview-main .mask-l").offset().left+$(".imgview-main .mask-l").width(),g=h+1;
if(Number(i.attr("data-vx"))===0){j.screenX>g?$(".imgview-main .mask-r").click():$(".imgview-main .mask-l").click()
}});
f.mousemove(function(g){if(g.clientX>300){f.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/next.cur),pointer")
}else{f.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/prev.cur),pointer")
}})
}
}}else{$(".pop-scroll-wrap").hide()
}});
$(document).on("click",".imgview .imgview-main .mask-l,.imgview .imgview-main .mask-r",function(){setTimeout(function(){var c=$(".imgview-thumb-main li.current").index();
if(c==0&&$(".pop-scroll-wrap").length>0){if($(".pop-scroll-wrap > script").length>0){$(".pop-scroll-wrap").html($(".pop-scroll-wrap > script").html());
$("#pop-scroll3d-frame")[0].onload=function(){var e=$(".imgview-main .mask-l,.imgview-main .mask-r");
var f=$("#pop-scroll3d-frame").contents().find(".sn360show");
f.attr("data-vx",0).click(function(j){var i=$(this);
var h=$(".imgview-main .mask-l").offset().left+$(".imgview-main .mask-l").width(),g=h+1;
if(Number(i.attr("data-vx"))===0){j.screenX>g?$(".imgview-main .mask-r").click():$(".imgview-main .mask-l").click()
}});
f.mousemove(function(g){if(g.clientX>300){f.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/next.cur),pointer")
}else{f.css("cursor","url(//res.suning.cn/project/pdsWeb/csspc/images/prev.cur),pointer")
}})
}
}$(".pop-scroll-wrap").show()
}else{$(".pop-scroll-wrap").hide()
}},50)
})
};
$(".imgzoom-video-play").hide();
iFourth.commonAllDirec=function(){var c=$(".scroll-wrap-box").length;
var b=$(".playmark-box");
var a=$(".imgzoom-video-play");
if(c>0){b.hide();
a.hide()
}else{b.show();
a.show()
}$(".imgzoom-main").mouseover(function(){if($(".scroll-wrap-box").length>0&&$(".scroll-wrap-box").is(":visible")){$(".imgzoom-shot").hide()
}else{if($(".playmark-box").is(":visible")){$(".imgzoom-shot").hide()
}else{$(".imgzoom-shot").show()
}}});
$(".imgzoom-video > .close").click(function(){$(".bzt").show();
$(".imgzoom-video-play").show()
});
$(".imgzoom-thumb-main li").click(function(){var e=$(this).index();
$(".imgzoom-video").hide();
$(".imgzoom-video > object").remove();
$(".bzt").show();
if(e==0&&$(".scroll-wrap-box").length>0){$(".imgzoom-video-play").hide()
}}).hover(function(){},function(){var e=$(this).index();
if(e!=0&&$(".imgzoom-thumb-main li:first").hasClass("current")&&$(".scroll-wrap-box").length>0){$(".imgzoom-video-play").hide()
}});
$(".imgzoom-video-play").click(function(){$(".bzt").hide();
$(this).hide()
});
$(window).scroll(function(){if($(".prod-detail-container").length<=0){return
}var e=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+$(window).height(),f=$(".prod-detail-container").offset().top;
if(f<e){if($(".js-detail-scroll-wrap").size()==1){var g=$(".js-detail-scroll-wrap").data();
if(g&&typeof g=="object"){if((((g.type==1||g.type==3)&&iFourth.isGTIE8())||((g.type==2||g.type==0)&&iFourth.isSupportWebGL()))&&($(".prod-detail-container").find("#detail-scroll-wrap").length>0)){$(".prod-detail-container .js-detail-scroll-wrap").html($("#detail-scroll-wrap").html());
$(".prod-detail-container .js-detail-scroll-wrap").show()
}}}}});
$(document).on("click","li[rel='#J-procon-param']",function(){if($(".open-area").size()==1){var e=$(".open-area").data();
if(e&&typeof e=="object"){if((((e.type==1||e.type==3)&&iFourth.isGTIE8())||((e.type==2||e.type==0)&&iFourth.isSupportWebGL()))&&($(".open-area script").length>0)){$(".open-area").html($(".open-area script").html());
$(".open-area").show()
}}}})
};
var zoom=window.zoom;
var zoomInitCallback=function(a){};
iFourth.reInit3D=function(){$(".scroll-wrap-box").remove();
$(".imgzoom-thumb-main li:first").remove();
$(".pop-scroll-wrap").remove();
$(".imgview-thumb-main li:first").remove()
};
iFourth.masterImgShow=function(){var a={};
if($(".scroll-wrap-box").size()==1){a=$(".scroll-wrap-box").data();
if(a&&typeof a=="object"){if(((a.type==2||a.type==0)&&iFourth.isSupportWebGL())||((a.type==1||a.type==3)&&iFourth.isGTIE8())){$(".scroll-wrap-box").show();
if($("#js-scroll3d-frame").length){$(".scroll-wrap-box").html($("#js-scroll3d-frame").html())
}iFourth.popTabFun();
iFourth.commonAllDirec()
}else{iFourth.reInit3D();
iFourth.commonAllDirec()
}}}else{iFourth.popTabFun();
iFourth.commonAllDirec()
}$("#imgZoom .imgzoom-thumb-main li").click(function(){$(".imgzoom-video").hide();
$(".imgzoom-video > object").remove()
});
zoom=new iFourth.Zoom("#imgZoom",function(c){var b=c;
var j=$(".scroll-wrap-box").length;
var h=$(".playmark-box");
var g=$(".imgzoom-video-play");
if(j!=0){if(b==1){h.show();
g.show()
}else{h.hide();
g.hide()
}}else{if(b==0){h.show();
g.show()
}else{h.hide();
g.hide()
}}$(".bzt").show();
if(b==0&&$(".scroll-wrap-box").length>0){$(".imgzoom-video-play").hide()
}if((a&&(a.type==2||a.type==0)&&iFourth.isSupportWebGL())||((a.type==1||a.type==3)&&iFourth.isGTIE8())){if(c==0){try{$(".scroll-wrap-box").show();
$(".imgzoom-main > img").hide();
$(".imgzoom-pop").css("left","-1000px")
}catch(f){$(".imgzoom-main > img").show();
$(".imgzoom-pop").removeAttr("style");
$(".scroll-wrap-box").hide()
}}else{$(".imgzoom-main > img").show();
$(".imgzoom-pop").removeAttr("style");
$(".scroll-wrap-box").hide()
}}})
};
$(document).on("click","li[rel='#J-procon-param']",function(){if($(".open-area script").length>0){$(".open-area").html($(".open-area script").html())
}});
iFourth.listMuliEleloop=function(b){var g={wrap:"",loopBox:"",triggerLeft:".prev",triggerRight:".next",curCount:".cur-count",totalCount:".total-count",pagesControl:".pages-container",step:{wide:4,narrow:4},scrollWidth:{wide:580,narrow:580},hasCount:true,isLoop:true,isLazyLoad:false,delay:0,labelObj:null,vertical:false,pageType:2,dots:".pages-container"};
$.extend(g,b);
var o=$(g.wrap),w=o.find(g.triggerLeft),a=o.find(g.triggerRight),y=o.find(g.loopBox).css("left",0),m=y.find("ul:not(.hide)"),k=g.step.wide,s=g.scrollWidth.wide,B=Math.ceil(m.length/k),l=m.length,p=o.find(g.curCount),C=o.find(g.totalCount),c=o.find(g.pagesControl),A=0,t=o.find(g.dots);
if(B<=1){c.hide()
}else{!c.is(":visible")&&c.show()
}if(screen.width<1280){k=g.step.narrow;
s=g.scrollWidth.narrow;
var D=m.length%k;
B=Math.ceil(m.length/k);
B=B==0?1:B;
l=m.length-D
}g.hasCount&&C.html(B);
w.unbind().click(function(){u()
});
a.unbind().click(function(){v()
});
if(t.length){var f="";
for(var z=0;
z<B;
z++){f+='<span class="page-dot" data-page="'+z+'"></span>'
}t.find(".pages-dot").html(f);
t.find(".page-dot").unbind().click(function(){if($(this).hasClass("current")){return
}var i=$(this).attr("data-page");
A=i;
x(null,i)
})
}t.find(".page-dot").eq(0).addClass("current");
if(g.pageType==1){p.text("1")
}if(g.pageType==2){p.find("span").removeClass("current").eq(0).addClass("current")
}if(!g.isLoop){w.addClass("prev-disable")
}if(B==1){a.addClass("next-disable")
}var r=b.labelObj,e="",n;
if(r){if(B<=1){r.hide()
}r.find(".prev").unbind().click(function(){u()
});
r.find(".next").unbind().click(function(){v()
});
for(n=0;
n<B;
n++){e+="<li></li>"
}r.find("ul").html(e).find("li").click(function(){A=$(this).index();
x(false,A)
}).first().addClass("current")
}function v(){if(B==1||y.is(":animated")){return false
}if(!g.isLoop){A++;
if(A>=B){A=B-1
}x(function(){if(A==B-1){a.addClass("next-disable")
}w.removeClass("prev-disable")
},A);
return
}if(A==B-1){for(var i=0;
i<k;
i++){if(g.vertical){m.eq(i).css({position:"relative",top:B*s+"px"})
}else{m.eq(i).css({position:"relative",left:B*s+"px"})
}}}A++;
x(function(){if(A==B){A=0;
m.removeAttr("style");
if(g.vertical){y.css("top",A*s)
}else{y.css("left",A*s)
}}},A)
}function u(){if(B==1||y.is(":animated")){return false
}if(!g.isLoop){A--;
if(A<=0){A=0
}x(function(){if(A==0){w.addClass("prev-disable")
}a.removeClass("next-disable")
},A);
return
}if(A==0){for(var i=1;
i<=k;
i++){if(g.vertical){m.eq(l-i).css({position:"relative",top:-B*s+"px"})
}else{m.eq(l-i).css({position:"relative",left:-B*s+"px"})
}}}A--;
x(function(){if(A==-1){A=B-1;
m.removeAttr("style");
if(g.vertical){y.css("top",-A*s)
}else{y.css("left",-A*s)
}}},A)
}function x(j,i){q();
if(g.hasCount){if(i>B-1){i=0
}if(i<0){i=B-1
}if(g.pageType==1){p.html(i+1)
}if(g.pageType==2){p.find("span").removeClass("current").eq(i).addClass("current")
}}if(!j){j=function(){}
}if(g.vertical){y.stop().animate({top:-A*s},300,j)
}else{y.stop().animate({left:-A*s},300,j)
}if(r){r.find("li").removeClass("current").eq(A==B?0:A).addClass("current")
}}function q(){if(!g.isLazyLoad){return
}for(var E=0;
E<k;
E++){var i=m.eq(A*k+E).find("img");
i.each(function(){var F=$(this);
var j=F.attr("src3");
if(j&&j!="done"){F.attr("src",j).attr("src3","done")
}})
}}q(A);
if(g.delay){var h=setInterval(function(){v()
},g.delay);
o.hover(function(){clearInterval(h)
},function(){h=setInterval(function(){v()
},g.delay)
})
}};
iFourth.bindUMayLike=function(){$(".p-c-umaylike .pages-container").show();
$(".p-c-recent-view .pages-container").show();
iFourth.listMuliEleloop({wrap:".p-c-umaylike .page-scroll-panel",loopBox:".scroll-wrapper",triggerLeft:".l-arrow",triggerRight:".r-arrow",curCount:".pages-dot",step:{wide:1,narrow:1},scrollWidth:{wide:255,narrow:255}});
iFourth.listMuliEleloop({wrap:".p-c-recent-view .page-scroll-panel",loopBox:".scroll-wrapper",triggerLeft:".l-arrow",triggerRight:".r-arrow",curCount:".pages-dot",step:{wide:1,narrow:1},scrollWidth:{wide:255,narrow:255}})
};
iFourth.bindNotSale=function(){iFourth.listMuliEleloop({wrap:"#R-n-similar",loopBox:".scroll-wrapper",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:748,narrow:547}});
iFourth.listMuliEleloop({wrap:"#R-n-hot-sale",loopBox:".scroll-wrapper",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:748,narrow:547}});
iFourth.listMuliEleloop({wrap:"#R-n-klyk",loopBox:".scroll-wrapper",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:748,narrow:547}})
};
iFourth.createCprCheckBox=function(){if(!this.$cprCheckBox){var a='<label for="pdt-cpr-checkbox" class="pdt-cpr-checkbox"><input type="checkbox" id="pdt-cpr-checkbox"/>加入对比</label>';
this.$cprCheckBox=$(a)
}return this.$cprCheckBox
};
iFourth.bindProductCompare=function(){iFourth.unBindProductCompare();
var f=$(".product-compare");
var h=function(){var i=f.find(".p-c-pdts .p-c-pdt");
var j=f.find(".btn-start-compare");
if(i.length<2){j.addClass("s-btn-disabled")
}else{j.removeClass("s-btn-disabled")
}};
var e=function(){var i=$(window).height();
f.height(i);
f.fadeIn();
$("#tab_prod_compare").click();
$(".sn-sidebar").hide();
$(".fix-activity-mode").hide()
};
$(window).resize(function(){if(f.is(":visible")){var i=$(window).height();
f.height(i)
}});
$(".imgzoom-memo .compare").unbind("click").click(function(){iCompare.processCprCheckData();
e();
h()
});
$(".product-compare .p-c-close").unbind("click").click(function(){f.fadeOut();
$(".sn-sidebar").show();
if($(".fix-list > a.fix-item").length>6){$(".fix-activity-mode").show()
}});
f.off("click",".b-delete-s").on("click",".b-delete-s",function(){iCompare.clearPart($(this).parents(".p-c-pdt").attr("compare-info"));
$(this).parents(".p-c-pdt").remove();
var i=f.find(".p-c-pdts .p-c-pdt");
var j=i.length+1;
f.find('.add-prompt[data-placeholder="'+j+'"]').show();
h()
});
f.find(".clear-c-list").unbind("click").click(function(){iCompare.clearAllPart();
f.find(".p-c-pdts .p-c-pdt").remove();
f.find(".add-prompt").show();
f.find(".btn-start-compare").addClass("s-btn-disabled")
});
$("#tab_prod_compare").unbind("click").click(function(){$(".p-compare-panel").show();
if($(".p-c-umaylike .scroll-wrapper ul").length>0){$(".p-c-umaylike").show()
}$(".p-c-recent-view").hide();
$(this).addClass("selected").siblings().removeClass("selected")
});
$("#tab_recent_view").unbind("click").click(function(){$(".p-compare-panel").hide();
$(".p-c-umaylike").hide();
$(".p-c-recent-view").show();
$(this).addClass("selected").siblings().removeClass("selected")
});
var a=this.createCprCheckBox();
var b;
var c=function(o,j){var n=o.attr("com-partinfo");
var k=false;
if(sn.comPartNumbers&&n){for(var l in sn.comPartNumbers){var m=sn.comPartNumbers[l];
if(m==n){k=true
}}}if(!k){a.find("input").prop("checked",false)
}else{a.find("input").prop("checked",true)
}b=setTimeout(function(){o.css("position","relative").append(a);
a.show();
a.css(j);
a.find("input").unbind().change(function(){iCompare.processCprCheckData(a.parent());
if($(this).prop("checked")){e()
}h()
});
a.mouseup(function(){return false
})
},100)
};
var g=function(){clearTimeout(b);
a.removeAttr("style").hide()
};
$(".customer-rec-list,#viewAndBuyContent,.history-rec").off("mouseenter","li").on("mouseenter","li",function(){var k=5,i=5;
var j=$(this);
c(j,{top:k,right:i})
}).off("mouseleave","li").on("mouseleave","li",g);
$("#hotRank").off("mouseenter",'li:not(".no-comparecheck")').on("mouseenter",'li:not(".no-comparecheck")',function(){var k=5,i=5;
var j=$(this);
c(j,{top:k,right:i})
}).off("mouseleave",'li:not(".no-comparecheck")').on("mouseleave",'li:not(".no-comparecheck")',g);
$(".p-c-umaylike,.p-c-recent-view").off("change",".pdt-cpr-checkbox").on("change",".pdt-cpr-checkbox",function(){iCompare.processCprCheckData($(this).parents());
h()
});
$(".btn-start-compare").unbind("click").click(function(){if(!$(this).hasClass("s-btn-disabled")){iCompare.bindCompareBtn()
}});
$("body").mouseup(function(j){var i=f;
if(!i.is(j.target)&&i.has(j.target).length===0){if(!a.is(j.target)&&!$(".enter-compare").is(j.target)){f.fadeOut()
}}})
};
iFourth.unBindProductCompare=function(){$(".customer-rec-list,#viewAndBuyContent,.history-rec").off("mouseenter","li").off("mouseleave","li");
$("#hotRank").off("mouseenter",'li:not(".no-comparecheck")').off("mouseleave",'li:not(".no-comparecheck")')
};
iFourth.calVerticalPdtNum=function(){var e=$(window).height();
var c=$(".product-compare");
var f=106;
var b=e-c.find(".p-c-tabs").height()-15-486;
c.find(".p-c-recent-view .pages-container").height()-30;
var h=Math.round(b/f)-1;
var g=e-c.find(".p-c-tabs").height()-15-c.find(".p-c-recent-view .pages-container").height()-30;
var a=Math.round(g/f)-1;
return{umLikeNum:h,recentViewNum:a}
};
iFourth.bindArrivalRemind=function(){var c='<div class="arrival-reminder-pop"><span class="a-up-arrow"></span><span class="btn-arri-remind"><span class="ar-icon"></span>到货提醒</span><p class="ar-p-text">加入提醒后，有货时小苏会短信提醒您~</p></div>';
var e=$(c);
var f,a;
var b=$(".proinfo-main");
$(".proinfo-color-ex").on("mouseenter",".notic-able",function(){var g=$(this);
clearTimeout(a);
f=setTimeout(function(){g.css("position","relative").append(e);
$(".arrival-reminder-pop .btn-arri-remind").click(function(){var h=g.attr("subpart");
FourPage.subscribeArrivalNotice(h)
});
e.removeAttr("style");
e.show();
b.addClass("promote-zindex")
},100)
}).on("mouseleave",".notic-able",function(){clearTimeout(f);
a=setTimeout(function(){e.hide();
b.removeClass("promote-zindex")
},200)
});
$(".proinfo-buytype").on("mouseenter",".notic-able",function(){var g=$(this);
clearTimeout(a);
f=setTimeout(function(){g.css("position","relative").append(e);
$(".arrival-reminder-pop .btn-arri-remind").click(function(){var h=g.attr("subpart");
FourPage.subscribeArrivalNotice(h)
});
e.css({top:40});
e.show();
b.addClass("promote-zindex")
},100)
}).on("mouseleave",".notic-able",function(){clearTimeout(f);
a=setTimeout(function(){e.hide();
b.removeClass("promote-zindex")
},200)
})
};
var active=active||{};
active.curIndex=0;
active.activeFixFun=function(){var c=navigator.userAgent.toLowerCase();
if(c.indexOf("msie 7.0")>=0||c.indexOf("msie 6.0")>=0){$(".fix-activity-mode").remove();
return
}var h=Math.max(screen.height-110,document.body.clientHeight);
if(navigator.userAgent.toLowerCase().indexOf("msie")>=0){h-=10
}if(h>=880){h=screen.height-95;
$(".fix-activity-mode").css("top","95px")
}else{}var g=$(".fix-hd").outerHeight(),e=$(".fix-footer").outerHeight(),a=h-g-e,f=Math.floor(a/135);
if(f>=6){f=6
}fixBH=f*135+"px";
$(".fix-bd").data("rel",f);
$(".fix-list > a.fix-item:gt("+(f-1)+")").hide();
$(".fix-list > a.fix-item:lt("+(f)+")").find("img").each(function(){if($(this).attr("data-src")!=undefined){$(this).attr("src",$(this).attr("data-src")).removeAttr("data-src")
}});
$(".fix-con").data("rel",fixBH).css("height",fixBH);
active.curIndex+=(f-1);
$(document).on("click",".fix-change-other",function(){var l=$(".fix-list > a.fix-item").length;
$(".fix-list > a.fix-item").hide();
for(var k=0;
k<f;
k++){if(active.curIndex==l-1){active.curIndex=0
}else{active.curIndex=Math.min(active.curIndex+1,l-1)
}$(".fix-list > a.fix-item:eq("+active.curIndex+")").show();
var j=$(".fix-list > a.fix-item:eq("+active.curIndex+")").find("img");
j.each(function(){if($(this).attr("data-src")!=undefined){$(this).attr("src",$(this).attr("data-src")).removeAttr("data-src")
}})
}});
$(document).on("click",".fix-close-point",function(){$(".fix-con").css("overflow","hidden").animate({height:0},200,function(){$(".fix-bd,.fix-footer").animate({opacity:0},0,function(){$(".fix-footer,.fix-bd").hide();
$(".hd-tie").show();
$(".fix-activity-mode").animate({top:"95px"},500)
})
})
});
$(document).on("click",".fix-hd",function(){if($(this).parent(".fix-activity-mode").data("action")!=undefined){return
}$(".hd-tie").hide();
$(".fix-activity-mode").animate({top:0},500,function(){$(".fix-bd,.fix-footer").show().css("opacity",1);
$(".fix-con").animate({height:$(".fix-con").data("rel")},200,function(){$(".fix-con").css("overflow","visible")
})
})
});
$(".fix-close-point").click();
setTimeout(function(){$(".fix-activity-mode").css("opacity",1)
},400);
var b;
$(".fix-list .fix-item").each(function(){$(this).hover(function(){var i=$(this);
b!=undefined?clearTimeout(b):"";
i.siblings().find(".fix-tip-des").hide();
b=setTimeout(function(){i.find(".fix-tip-des").show()
},500)
},function(){clearTimeout(b);
$(this).find(".fix-tip-des").hide()
})
});
$(".fix-close").click(function(){$(".fix-close").attr("name","item_jr_dw_close");
$(".fix-activity-mode").animate({opacity:0},100,function(){$(this).remove()
})
})
};
active.dragFixFun=function(a){this.settings=$.extend({},active.dragFixFun.defaultOptions,a);
return this.init()
};
active.dragFixFun.prototype={init:function(){var f=this,g=f.settings.obj,e=g[0],b={};
var c=function(j,i,h){if(window.addEventListener){j.addEventListener(i,h)
}else{j.attachEvent("on"+i,h)
}};
var a=function(j,i,h){if(window.removeEventListener){j.removeEventListener(i,h)
}else{j.detachEvent("on"+i,h)
}};
c(e,"mousedown",function(h){g.removeData("action");
b.obj=e;
b.defaultpos={dx:g.offset().left,dy:g.offset().top-Math.max(document.documentElement.scrollTop,document.body.scrollTop)};
g.css({right:"auto",left:b.defaultpos.dx,top:b.defaultpos.dy});
b.startpos={x:h.clientX,y:h.clientY};
c(document,"mousemove",function(l){if(g.find(".fix-con").height()>0){b={}
}if(b.obj==undefined){return
}b.movepos={x:l.clientX,y:l.clientY};
var j=b.movepos.x-b.startpos.x;
Math.abs(j)>0?g.data("action","move"):g.removeData("action");
var n=b.movepos.x-b.startpos.x,m=b.movepos.y-b.startpos.y;
var k=Math.min(Math.max(0,b.defaultpos.dx+n),$(window).width()-244),i=Math.min(Math.max(0,b.defaultpos.dy+m),$(window).height()-270);
g.css({right:"auto",left:k,top:i})
});
c(document,"mouseup",function(i){b={}
});
c(e,"mousemove",function(l){if(g.find(".fix-con").height()>0){b={}
}if(b.obj==undefined){return
}b.movepos={x:l.clientX,y:l.clientY};
var j=b.movepos.x-b.startpos.x;
Math.abs(j)>0?g.data("action","move"):g.removeData("action");
var n=b.movepos.x-b.startpos.x,m=b.movepos.y-b.startpos.y;
var k=Math.min(Math.max(0,b.defaultpos.dx+n),$(window).width()-244),i=Math.min(Math.max(0,b.defaultpos.dy+m),$(window).height()-270);
g.css({right:"auto",left:k,top:i})
});
c(e,"mouseup",function(i){b={}
})
});
c(g.find(".hd-logo")[0],"mousemove",function(h){if(h.preventDefault){h.preventDefault()
}return false
});
c(g.find(".fix-hd > img:last")[0],"mousemove",function(h){if(h.preventDefault){h.preventDefault()
}return false
});
return f
}};
active.dragFixFun.defaultOptions={obj:""};
iFourth.detailSide=function(){var a=$(".procon-search"),c=a.find(".key input");
c.on("focus",function(){if(c.val()=="请输入关键字"){c.val("").css("color","#666")
}}).on("blur",function(){if(c.val()==""){c.val("请输入关键字").css("color","#999")
}});
var b=$("#shopSort");
if(b.find(".menu-con, .menu-con-new").length<1){b.hide()
}b.on("click",".fold_title",function(){var e=$(this);
e.parent("dl").toggleClass("on");
e.siblings("dd").toggle()
}).on("mouseenter","dt",function(){var e=$(this);
e.addClass("hover")
}).on("mouseleave","dt",function(){$(this).removeClass("hover")
});
b.on("click",".type-con-new dl dt",function(){var e=$(this);
e.parent("dl").toggleClass("on")
})
};
iFourth.mulitChoiceYb=function(){var b=$(".proinfo-yb");
b.off("mouseenter",".mulit").on("mouseenter",".mulit",function(){var e=$(this);
b.css("z-index",6);
e.removeClass("selected").addClass("hoverli").css("z-index",3).find(".child-list").show()
}).off("mouseleave",".mulit").on("mouseleave",".mulit",function(){var e=$(this);
e.removeClass("hoverli").removeAttr("style").find(".child-list").hide();
b.removeAttr("style");
e.find("a.cur").length&&e.addClass("selected")
});
var a=function(e){var f=e.parents("a");
if(f.hasClass("cur")){f.removeClass("cur");
e.prop("checked",false).parents(".child-list").hide().parent().removeClass("selected hoverli")
}else{var g=f.attr("data-flag");
e.prop("checked",true);
f.addClass("cur").siblings().removeClass("cur").parents(".child-list").hide().parent().addClass("selected").removeClass("hoverli");
f.parent().siblings(".mulita").attr("data-flag",g).find("span").html(f.attr("data-name"))
}iFourth.initYanbao()
};
b.off("click",".child-list .radio").on("click",".child-list .radio",function(){a($(this))
});
b.off("click",".mulit .mulita").on("click",".mulit .mulita",function(i){i.stopPropagation();
var g=$(this);
var h=g.attr("data-flag")||0;
var f=g.next().find("[data-flag='"+h+"'] .radio");
a(f)
});
b.off("click",'li:not(".disabled,.mulit")').on("click",'li:not(".disabled,.mulit")',function(){iFourth.initYanbao()
});
var c=$(document.createElement("div")).hide();
b.append(c);
b.find(".mulit .child-list").each(function(){var h=$(this);
var g;
h.children().each(function(){var j=$(this);
g=g&&g.length>=j.text().length?g:j.text()
});
c.text(g);
h.find(".promote-lebel").eq(0).parents("a").eq(0).data("name");
if(h.find(".promote-lebel").length>0){h.parent().children("a").prepend('<label class="hui"></label>');
h.parent().children("a").find(".promotionSpan").html(h.find(".promote-lebel").eq(0).parents("a").data("name"));
h.parent().children("a").attr("data-flag",h.find(".promote-lebel").eq(0).parents("a").data("flag"))
}var e=h.parent().width()-2;
var i=c.width()+30+30;
var f=e>i?e:i;
h.width(f)
})
};
iFourth.initYanbao=function(){var b=$(".proinfo-yb"),i=b.find("dd ul li"),e=0,f=b.find(".follow-box"),g=b.find(".extend-icon"),c=b.find(".fold-icon"),h;
if(f.data("calPosIndex")===void (0)){i.each(function(l){var m=$(this),k=m.position();
if(k.top==0){f.data("calPosIndex",l)
}if(e){return
}if(k.top>38){e=1;
h=i.filter(":gt("+(l-1)+")")
}})
}h&&h.hide();
iFourth.mainHeight();
var a=f.data("calPosIndex");
var j=i.eq(a).position().left+i.eq(a).width()+5;
f.css({left:j,right:"auto"});
if(h&&h.length){g.show();
g.unbind().click(function(){h.show();
g.hide();
c.show();
iFourth.mainHeight()
});
c.unbind().click(function(){h.hide();
g.show();
c.hide();
iFourth.mainHeight()
})
}};
iFourth.mulitChoiceNcp=function(){var b=$(".ncp");
b.off("mouseenter",".mulit").on("mouseenter",".mulit",function(){var e=$(this);
b.css("z-index",6);
e.removeClass("selected").addClass("hoverli").css("z-index",3).find(".child-list").show()
}).off("mouseleave",".mulit").on("mouseleave",".mulit",function(){var e=$(this);
e.removeClass("hoverli").removeAttr("style").find(".child-list").hide();
b.removeAttr("style");
e.find("a.cur").length&&e.addClass("selected")
});
var a=function(e){var f=e.parents("a");
if(f.hasClass("cur")){f.removeClass("cur");
e.prop("checked",false).parents(".child-list").hide().parent().removeClass("selected hoverli");
f.parent().siblings(".mulita").attr("data-flag",g).find("span").html(f.attr("data-name2"))
}else{var g=f.attr("data-flag");
e.prop("checked",true);
f.addClass("cur").siblings().removeClass("cur").parents(".child-list").hide().parent().addClass("selected").removeClass("hoverli");
f.parent().siblings(".mulita").attr("data-flag",g).find("span").html(f.attr("data-name"))
}iFourth.initNcp()
};
b.off("click",".child-list .radio").on("click",".child-list .radio",function(){a($(this))
});
b.off("click",'li:not(".disabled,.mulit")').on("click",'li:not(".disabled,.mulit")',function(){iFourth.initNcp()
});
var c=$(document.createElement("div")).hide();
b.append(c);
b.find(".mulit .child-list").each(function(){var h=$(this);
var g;
h.children().each(function(){var j=$(this);
g=g&&g.length>=j.text().length?g:j.text()
});
c.text(g);
var e=h.parent().width()-2;
var i=c.width()+30+30;
var f=e>i?e:i;
h.width(f)
})
};
iFourth.initNcp=function(){var b=$(".ncp"),k=b.find("dd ul li"),f=0,h=b.find(".follow-box"),i=b.find(".extend-icon"),c=b.find(".fold-icon"),j;
var e=h.data("calPosIndex")===void (0);
k.each(function(n){var o=$(this),m=o.position();
if(m.top==0){h.data("calPosIndex",n)
}if(f){return
}if(m.top>38){f=1;
j=k.filter(":gt(1)")
}});
if(e){j&&j.hide()
}iFourth.mainHeight();
var a=h.data("calPosIndex");
var l=k.eq(a).position().left+k.eq(a).width()+5;
var g=k.eq(a).position().top;
h.css({left:l,right:"auto",top:g+7});
if(e&&j&&j.length){i.show();
i.unbind().click(function(){j.show();
i.hide();
c.show();
iFourth.mainHeight()
});
c.unbind().click(function(){j.hide();
i.show();
c.hide();
iFourth.mainHeight()
})
}};
iFourth.bindProServTooltip=function(){var b=$(".proinfo-main"),a=$.browser.msie;
$(".proinfo-serv > span").unbind("mouseenter").unbind("mouseleave").hover(function(){var g=$(this);
var f=g.find(".s-tooltip");
if(f.length){var c=f.width();
f.css({left:-c*0.5+g.width()*0.5});
b.addClass("promote-zindex");
var e=g.attr("name");
if(e&&e!=""){g.click();
g.attr("name","")
}}a&&g.css({"z-index":"2"})
},function(){var c=$(this);
b.removeClass("promote-zindex");
setTimeout(function(){a&&c.css({"z-index":"auto"})
})
})
};
iFourth.initKLYK=function(){iFourth.listMuliEleloop({wrap:".customer-rec .customer-rec-list",loopBox:".scroll-wrapper",triggerLeft:".l-arrow",triggerRight:".r-arrow",curCount:".pages-dot",pagesControl:".pages-container",step:{wide:1,narrow:1},scrollWidth:{wide:199,narrow:199},isLazyLoad:true})
};
iFourth.initKLYKLeft=function(){iFourth.listMuliEleloop({wrap:".customer-rec-left .customer-rec-list-left",loopBox:".scroll-wrapper",triggerLeft:".l-arrow",triggerRight:".r-arrow",curCount:".pages-dot",pagesControl:".pages-container",step:{wide:1,narrow:1},scrollWidth:{wide:188,narrow:188},isLazyLoad:true})
};
iFourth.calKLYKNum=function(){var c=$(".proinfo-side").height()-43-46;
var b=3,a=160;
var e=Math.floor(c/a);
if(!isNaN(e)){b=e<3?3:e>6?6:e
}return b
};
iFourth.bindPhoneParameters=function(){var b=$(".phone-parameters");
b.find(".p-params-node").each(function(){var h=$(this);
var f=h.find("ul").height();
var g=h.find(".infos").height();
if(f-1>g&&!h.hasClass("can-extend")){h.addClass("can-extend");
h.find(".pr-explain").hide()
}var e=h.find(".l-label p");
var c=e.height();
if(c>18){if(e.text().length==4){e.addClass("a-2em")
}else{e.addClass("a-left")
}}});
var a="no-hidden";
b.find(".n-container").off("mouseenter").on("mouseenter",function(){var e=$(this);
if(!e.find(".p-down-arrow:visible").length){return
}e.find(".pr-explain").show();
b.find(a).removeClass(a).removeAttr("style");
e.addClass(a);
var c=e.height();
e.css("height",c);
e.click()
}).off("mouseleave").on("mouseleave",function(){var c=$(this);
if(c.hasClass(a)){c.removeClass(a).removeAttr("style")
}c.find(".pr-explain").hide()
})
};
iFourth.bindFreight=function(){var c=$(".proinfo-deliver");
var b=c.find("dd > .s-tooltip");
var a=c.find(".freight");
var e=$(".proinfo-main");
a.unbind().hover(function(){var h=b.parent().offset().left;
var g=a.offset().left;
var f=(g-h+a.width()*0.5)-b.width()*0.5;
e.addClass("promote-zindex");
b.css("left",f);
b.show()
},function(){e.removeClass("promote-zindex");
b.hide()
})
};
iFourth.unBindFreight=function(){var b=$(".proinfo-deliver");
var a=b.find(".freight");
a.length&&a.unbind()
};
iFourth.initNoGoodsRec=function(){iFourth.listMuliEleloop({wrap:"#ng_hot_sale",loopBox:".scroll-wrapper",triggerLeft:".com-prev",triggerRight:".com-next",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:780,narrow:567}});
iFourth.listMuliEleloop({wrap:"#ng_hot_sale_1",loopBox:".scroll-wrapper",triggerLeft:".com-prev",triggerRight:".com-next",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:780,narrow:567}});
iFourth.listMuliEleloop({wrap:"#ng_hot_sale_2",loopBox:".scroll-wrapper",triggerLeft:".com-prev",triggerRight:".com-next",pageType:1,step:{wide:1,narrow:1},scrollWidth:{wide:360,narrow:165}})
};
iFourth.bindPinGo=function(){var f=$("#pin_go_enter .pin-help");
var c=f.find(".pin-prompt");
var e=f.find(".pin-img");
var b=null,a=null;
f.unbind("hover").hover(function(){clearTimeout(a);
b=setTimeout(function(){c.length&&c.show();
e.length&&e.show()
},50);
f.click()
},function(){clearTimeout(b);
a=setTimeout(function(){c.length&&c.hide();
e.length&&e.hide()
},50)
})
};
iFourth.bindPackagesCluster=function(a){iFourth.bindPackages($(".select-fixed-package").not(".select-fixed-package-tv"),a)
};
iFourth.bindPackagesTv=function(a){iFourth.bindPackages($(".select-fixed-package-tv"),a)
};
iFourth.bindPackages=function(t,n){var s=t;
if(!s.length){return
}var m=s.find(".pk-list"),c=m.find(".pack-item"),u=s.find(".extend-icon"),k=s.find(".fold-icon"),i="fold",l=$.browser.msie;
var q=function(){m.removeClass(i);
u.hide();
k.show();
l&&c.removeAttr("style");
iFourth.mainHeight()
};
var j=function(){m.addClass(i);
u.show();
k.hide();
if(l){c.each(function(){var h=$(this);
h.position().top>40&&h.css("visibility","hidden")
})
}iFourth.mainHeight()
};
var p=m.height();
if(p>45){j();
var b=0;
c.each(function(){var v=$(this),h=v.position();
if(h.top==0){b=h.left+v.width()+10
}});
u.css({left:b,right:"auto"});
k.css({left:b,right:"auto"})
}u.unbind().click(function(){q()
});
k.unbind().click(function(){j()
});
var a=s.find("dd").width();
c.each(function(){var w=$(this);
var z=w.position(),D=w.find(".pk-hover-list"),B=D.find(".pk-h-item"),h=B.length,x=B.eq(0).width()+20,A=0;
if(h==1){D.width(320);
var v=D.find("ul");
v.addClass("single");
A=320
}else{if(h>3){A=x*3
}else{A=x*h
}D.width(A)
}var y=z.top+39;
var C=a-z.left-w.width()*0.5-A*0.5;
C=C<0?0:C;
D.css({right:C,top:y});
if(h>3){iFourth.listloop({wrap:D,loopBox:" ul:not(.hide)",step:{wide:3,narrow:3},scrollWidth:{wide:660,narrow:660}})
}});
var f="pk-light";
var r=s.find(".gap-line"),e=$(".proinfo-main"),o="promote-zindex",g={};
c.hover(function(){var x=$(this),v=x.index(),y=x.position(),h=x.find(".pk-hover-list");
r.css({width:x.width()-2,left:y.left+1,top:y.top+39});
clearTimeout(g[v]);
e.addClass(o);
s.css("z-index",11);
h.show();
r.show();
x.addClass(f).siblings().removeClass(f);
var w=h.find("img[src3]");
w.each(function(){var A=$(this);
var z=A.attr("src3");
z&&A.attr("src",z).removeAttr("src3")
});
n&&n(x)
},function(){var w=$(this),v=w.index(),h=w.find(".pk-hover-list");
e.removeClass(o);
s.removeAttr("style");
r.hide();
g[v]=setTimeout(function(){h.hide();
w.removeClass(f)
},50)
})
};
iFourth.Countdown=function(a){this.options=$.extend({remain:0,noFillZero:0},a);
this.endTime=(new Date()).valueOf()+a.remain*1000;
this.day=0;
this.hour=0;
this.minus=0;
this.second=0;
this.isPause=0;
this.start=function(b){var c=this,f=c.options.remain;
if(f>=0.1&&!c.isPause){var e=c.endTime-(new Date()).valueOf();
f=parseFloat((e*0.001).toFixed(1));
c.options.remain=f=f<0?0:f;
c.day=parseInt(f/3600/24);
c.hour=parseInt(f/3600%24);
c.minus=parseInt(f/60%60);
c.second=(f%60).toFixed(1);
if(!c.options.noFillZero){c.day=c.day<10?"0"+c.day:c.day;
c.hour=c.hour<10?"0"+c.hour:c.hour;
c.minus=c.minus<10?"0"+c.minus:c.minus;
c.second=c.second<10?"0"+c.second:c.second
}b&&b();
setTimeout(function(){c.start(b)
},100)
}};
this.stop=function(){this.isPause=1
}
};
iFourth.phoneCountdown=function(){var e=$(".ph-cd-show"),i=e.find(".d"),c=e.find(".h"),a=e.find(".m"),b=e.find(".s"),f=parseInt(e.find("input:hidden").val()),g=new this.Countdown({remain:f});
g.start(function(){i.text(g.day);
c.text(g.hour);
a.text(g.minus);
b.text(g.second)
})
};
iFourth.HolidayActivity={initPages:function(){iFourth.listloop({wrap:".holiday-rec-box .ha-rec-list",loopBox:" ul:not(.hide)",triggerLeft:".l-arrow",triggerRight:".r-arrow",step:{wide:5,narrow:4},scrollWidth:{wide:960,narrow:768}})
}};
iFourth.showErrorDlg=function(a){$("#dlg_error_prompt .d-message").text(a);
$.mDialog({title:"温馨提示",message:$("#dlg_error_prompt"),css:{width:"400px"},overlayClick:true})
};
iFourth.carParts={$carShop:"",$selDropBox:"",$warmBox:"",init:function(){var a=this;
if(a.$carShop){return
}a.$carShop=$(".proinfo-car-shop");
a.$selDropBox=a.$carShop.find(".sel-shop");
a.$warmBox=$(".proinfo-warning-box");
a.$warmBox.find(".exit-wb").unbind().click(function(){a.closeWarmBox()
})
},showWarmBox:function(){var a=this;
a.$carShop.addClass("car-warm-mt");
a.$warmBox.show();
iFourth.mainHeight()
},closeWarmBox:function(){var a=this;
a.$carShop.removeClass("car-warm-mt");
a.$warmBox.hide();
iFourth.mainHeight()
},setSelShopWidth:function(){if(!$.browser.msie){return
}var e=this;
var c=e.$selDropBox.find(".shop-txt").width();
var a=e.$selDropBox.find(".price").width()+5;
var b=c+a+14+10;
e.$selDropBox.width(b)
}};
iFourth.loadVideo=function(h,c,g){if((!h||!c)&&(!h||!g)){return
}var f=$("#"+h);
if(f.attr("data-init")=="1"){return
}var e=0;
if(h=="imgzoom_video_con"){e=1
}if(c!=""){var a=new PPCLoudplayer({id:h,playCode:c,dm:sn.ppyunDomain,autoplay:e,errorCall:function(j,i){}})
}else{if(g!=""){var b=new PPCLoudplayer({id:h,poster:"",playSrc:g,autoplay:e,playCode:"useMp4"})
}}f.attr("data-init","1");
return a
};
iFourth.wrapParamChange=function(b){var a=b.index();
$(".prods-show-rel").hide().eq(a).show()
};
iFourth.wrapParam=function(e,i,j){var m=$(e);
var l=m.find(".hover-liner"),n=m.find(".prods-param-list li"),g=m.find(".prods-param-list"),k,f=n.size(),c=f*180,b;
function h(p,o){k=k===undefined?m.find(".list-wrapper").offset().left:k;
l.stop().animate({left:p-k},200,o)
}n.hover(function(){l.show();
var o=$(this);
b=setTimeout(function(){var p=o.index();
var q=n.eq(p).offset().left;
h(q)
},200)
},function(){clearTimeout(b)
});
g.mouseleave(function(){var p=m.find(".prods-param-list .on");
if(!p.length){return
}var o=p.offset().left;
h(o,function(){l.hide()
})
});
n.click(function(){var p=$(this);
if(p.hasClass("on")){return
}p.addClass("on").siblings().removeClass("on");
var o=p.offset().left;
h(o);
i&&i(p)
}).first().addClass("on");
l.css("left",30+"px");
if(!j&&screen.width>=1200){if(f<=5){m.find(".list-wrapper").css({width:c});
m.find(".prods-show .prev").hide();
m.find(".prods-show .next").hide()
}}else{if(f<=4){m.find(".list-wrapper").css({width:c});
m.find(".prods-show .prev").hide();
m.find(".prods-show .next").hide()
}}m.find(".prods-show .prev").addClass("ctr-disabled");
var a={wrap:e+" .prods-show",loopBox:".prods-param-list",triggerLeft:".prev",triggerRight:".next",loopWidth:180,prePageWide:5,prePageNarrow:4,isLoop:false};
if(j){a.prePageWide=4
}iFourth.singleloop(a)
};
iFourth.packagesDetails={isClick:0,fixedScroll:function(g){var e=$("#J-fixBar-1"),c=$(".pro-detail-pics").eq(0),f=iFourth.win,a=0,b=this;
f.scroll(function(){if(!c.length||!c.is(":visible")){return
}var h=f.scrollTop(),k=c.offset().top;
if(h>=k&&a==0){e.show();
a=1
}if(h<k&&a==1){e.hide();
a=0
}if(b.isClick||g){return
}var i=$(".pro-detail-pics"),j=null;
i.each(function(){var l=$(this).offset().top;
if(h+115>l){j="#"+$(this).attr("id")
}});
if(j&&!e.find('[data-rel="'+j+'"]').hasClass("on")){iFourth.packagesDetails.lightSelected(j)
}})
},initSwitchDetail:function(e,i,j){var m=$(e);
var l=m.find(".hover-liner"),n=m.find(".prods-param-list li"),g=m.find(".prods-param-list"),k,f=n.size(),c=f*80,b;
function h(p,o){k=k===undefined?m.find(".list-wrapper").offset().left:k;
l.stop().animate({left:p-k},200,o)
}n.hover(function(){l.show();
var o=$(this);
b=setTimeout(function(){var p=o.index();
var q=n.eq(p).offset().left;
h(q)
},200)
},function(){clearTimeout(b)
});
g.mouseleave(function(){var p=m.find(".prods-param-list .on");
if(!p.length){return
}var o=p.offset().left;
h(o,function(){l.hide()
})
});
n.click(function(){var p=$(this);
if(p.hasClass("on")){return
}var o=p.offset().left;
h(o);
i&&i(p)
}).first().addClass("on");
if(!j&&screen.width>=1200){if(f<=11){m.find(".list-wrapper").css({width:c});
m.find(" .prev").hide();
m.find(".next").hide()
}}else{if(f<=9){m.find(".list-wrapper").css({width:c});
m.find(".prev").hide();
m.find(".next").hide()
}}m.find(".prev").addClass("ctr-disabled");
var a={wrap:e+" .prods-show-mini",loopBox:".prods-param-list",triggerLeft:".prev",triggerRight:".next",loopWidth:80,prePageWide:11,prePageNarrow:9,isLoop:false};
if(j){a.prePageWide=9
}iFourth.singleloop(a);
this.fixedScroll(j)
},scrollToSelected:function(e){var a=iFourth.packagesDetails;
var c=e.attr("data-rel");
var b=$(c).offset().top-100;
if(e.index()==0){b=b-206+100-40
}a.isClick=1;
$("body,html").animate({scrollTop:b},500,"linear",function(){a.isClick=0
});
a.lightSelected(c)
},bookClick:function(f){var a=iFourth.packagesDetails;
var e=f.attr("data-rel");
a.lightSelected(e);
var c=$(".prod-detail-container");
if(c.length){var b=c.offset().top-50;
iFourth.win.scrollTop(b)
}},lightSelected:function(a){$(".prods-show-container").find('[data-rel="'+a+'"]').addClass("on").siblings().removeClass("on");
$("#J-fixBar-1").find('[data-rel="'+a+'"]').addClass("on").siblings().removeClass("on")
}};
iFourth.packageList={$pkCon:null,$pkList:null,init:function(){var e=this;
e.$pkList=e.$pkList||$(".packages-list .pkg-item");
var a=e.$pkList.length;
var c='<i class="p-i p-i-r">+</i>';
var b=1,f=b*5;
while(a>f){e.$pkList.eq(f-1).append(c).next().children().remove(".p-i");
f=++b*5
}},setMargTop:function(){var a=this;
a.$pkCon=a.$pkCon||$(".packages-list");
a.$pkCon.prev().is(":visible")?a.$pkCon.removeClass("mt15"):a.$pkCon.addClass("mt15")
}};
iFourth.thisOnSale={$timer:null,$onSale:null,isIe7:function(){if($.browser.msie&&($.browser.version=="7.0"||$.browser.version=="6.0")){return true
}else{return false
}},animate:function(b){var h=b.position();
var c=h.left,k=h.top;
var i=b.width();
var g=c+i*0.5-32;
var e=k-35;
if(!this.isIe7()){this.$onSale=this.$onSale||$(".pop-onsale");
this.$onSale.css({left:g,top:e}).addClass("jump");
var f=this.$onSale;
var j=f.position().top;
var a=function(){f.animate({top:j-4},500,function(){f.animate({top:j},100)
})
};
a();
this.$timer=setInterval(function(){a()
},800)
}else{setTimeout(function(){var m=b.offset();
var l=m.left+i*0.5-32;
$("#ie7_onsale").css({left:l,top:m.top-35,"z-index":10}).show()
},1000)
}},stop:function(){if(!this.isIe7()){this.$onSale=this.$onSale||$(".pop-onsale");
this.$onSale.removeClass("jump");
clearInterval(this.$timer)
}else{$("#ie7_onsale").hide()
}}};
iFourth.bindSupportPanel=function(){var b=$(".support-panel .tool-tip");
var a=b.find(".a-up-arrow");
$(".support-panel .sp-item").hover(function(){var g=$(this);
b.html(a[0].outerHTML+g.attr("data-tooltip"));
var e=b.width();
var f=g.width()+25;
var c=g.position().left+(f-e)*0.5;
b.css({left:c,top:"30px"}).show()
},function(){b.hide()
})
};
iFourth.bindSentSupport=function(){var b=$(".sent-support .tool-tip");
var a=b.find(".a-up-arrow");
var c=$(".sent-support .s-s-item");
if($(".sent-support .line2").find(".s-s-item").length==0){$(".sent-support .line1 .ng-iconfont").hide()
}else{$(".sent-support").find(".line2").hide()
}c.unbind("hover").hover(function(){var h=$(this);
b.show().html(a[0].outerHTML+h.attr("data-tooltip"));
b.css("zIndex",111);
var f=b.width();
var g=h.width();
var e;
if($(".line2").find(".s-s-item").length>0){e=h.position().left+(g-f)*0.5+13+20+1;
if(h.parent(".line2").length>0){b.css({left:e,top:"52px"})
}else{b.css({left:e,top:"26px"})
}}else{e=h.position().left+(g-f)*0.5;
b.css({left:e,top:"26px"})
}},function(){b.hide()
});
c.prev("i").hide();
c.each(function(e){if(e==0){return
}$(this).prev("i").show()
});
iFourth.sentCssStyle()
};
iFourth.bindFixedStore=function(){var b=$(".fix-store");
var a=b.find(".ex-box");
var e=b.find(".up-icon"),c=b.find(".down-icon");
b.hover(function(){a.show(100);
e.show();
c.hide()
},function(){a.hide(100);
e.hide();
c.show()
})
};
iFourth.bindHKlyk=function(){iFourth.listloop({wrap:"#J-klyk",loopBox:" ul:not(.hide)",step:{wide:6,narrow:5},scrollWidth:{wide:1140,narrow:910}})
};
iFourth.bindSzytTip=function(){var b=$(".supplier-row .tool-tip");
var a=b.find(".a-up-arrow");
$(".sp-szyt").unbind("hover").hover(function(){var g=$(this);
b.html(a[0].outerHTML+g.attr("data-tooltip"));
var e=b.width();
var f=g.width();
var c=g.position().left+(f-e)*0.5;
b.css({left:c,top:"26px"}).show()
},function(){b.hide()
})
};
iFourth.scratch_card=function(){var f=$("#canvas-box");
var e=0;
var h="cvs_"+e;
f.html('<canvas width="338" height="130" id='+h+"></canvas>");
var g=document.getElementById(h);
var a=g.getContext("2d");
var b=new Image();
function c(j,i,l){var k=j.getBoundingClientRect();
return{x:i-k.left*(j.width/k.width),y:l-k.top*(j.height/k.height)}
}b.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAACCCAMAAAAjQrBGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUxpcebm5tvb2+Hh4eTk5M/Pz+Tk5OTk5OXl5ebm5uXl5dbW1sjIyM7Ozrq6utHR0cHBwXkGMoMAAAAKdFJOUwD///97sLcMP7ILvto4AAAESElEQVR42u2d7ZKjIBBFEbQ0tF/v/7QrjhNJQjtO007Vyu1f2aoDqWol4M3JrKlSNbz8yw0VU/fgWhNVmz2fSY78ZonWoTP3DvfgurilXfZ8qZbOdnvh+34datPvcBeujltaZ8+XaCl9k44mctZ5N/jU0NtwFK38lrLnM233eL+9aRvZW0fDMPSVnZLL4DbcY29pkznfo2u3ez0uP7pwTdYPjn55Odr9At2Ue2z3adtkzvf8DHm7T2n0lZ9oruy4vArjyCVXwn04V3fLeq1z53vEu9xL9etnRL+MDFdk9tWY/NAA98518Vnsc6hfrp0Phy+yI3OoAMeecD9aum9wtiffcydfcGxL3xa+/Tp1hSPCtHwOW2LeARz/0PB+jJr7aXk+sIMdwilhctxVA1cx21P9cVxwzoYjwuTJuop7PAPHPIh9HvW3A23YzUbqJ/aTBVyiwlGfHbuMmqsTBe5MErVdD1udKnCnW4qSFVqq31Jue0KJKp1EoeTFJVEo8T3KJlEoYfFJFEpYLVp6XUux8NUXftieaLLu1PMYOJ7bkyhy1Uw2/b1gVBbcT9yWRDU09WvkT+T9wcgR3M/cmkRF9/VARPy1AHeOM+tX0lt55/hIG9xJzhRm6f0BZwqz9P6AeyZRhVh6V3NRElWKpXcxFyVR5Vh6l3LN/kBakqV3JRclUUVZehdycRIF+06Fi5Io2Hc6XJREwb7T4ZrdiYJ9p8Q9kyjYd2pcOOrDvtPmVtsE9p0m9yXwwL5T5DYnCvadHgcnSrfgRGkXnCj1exRqhHbBiVIvOFEXthQLX33hY3vS3p5wiNI9RB0d9WHp/Zo7+HUeLD0xx7QUlp6cS7cUll4Gl24pLL0MLr09wdKTclwSBftOynFJFCw9KcclUbD0xByXRMHSE3NcEgVLT8yxSRQsPSnHJ1Gw9IQcn0TB0pNybBIFS0/MMUkULL0sLvmMD0svh0u2FPZdDsf+nShYelKO/6IElp6EO3aiYOn9noMTpV1wotQLTpR6wYm6sKVY+OoLH9uT9vYEJ0qtfnSiUL+/T4/+YjlKWM+Wwr7T4kJLYd+pcgb2nTb3sj3BvsvmmrckCvZdLpdKomDf5XBvSRTsu3zuNYmCfafAvSRRsO80uDiJgn2nwnXx/7pbwb5T4PYkCvadFhclUbDvlLiQRMG+0+YM7DttzsC+0+YM7DttLmxPsO/0uG8nCvadFrcnUbDvdLg4iYJ9p8LBiVIvOFEXthROlFLBiVIvOFH6BSfqgvsUTtQFhZaipf95S2HpSThue4KlJ+P4X+fB0pNx/K/zYOnJuINf58HSk3EHSRQsPRnHJ1Gw9IQcm0TB0pNyXBJVon3n6q5tu3rInI9Logq07x7bim2bzPmYJKo8+24/+4QFmzUfk0SVZt9N+65iWpc9X/IZvzD7rjZR1dnz8S0tx77r4pZ22fOlW7pvcCXYd23cUpM93z89No9w9RsAAAAAAABJRU5ErkJggg==";
b.addEventListener("load",function(){a.drawImage(b,0,0);
f.addClass("coup3");
a.globalCompositeOperation="destination-out";
a.fillStyle="rgba(0,0,0,.5)";
a.lineWidth=30;
$(g).on("mousedown",function(j){j=j?j:window.event;
var k=j.srcElement?j.srcElement:j.target;
var l=c(g,j.clientX,j.clientY);
var i=parseInt(l.x);
var m=parseInt(l.y);
a.moveTo(i,m);
$(g).on("mousemove",function(o){o=o?o:window.event;
var p=o.srcElement?o.srcElement:o.target;
if(o.which==1){var q=c(g,o.clientX,o.clientY);
var n=parseInt(q.x);
var r=parseInt(q.y);
a.lineTo(n,r);
a.stroke()
}})
});
$(g).on("mouseup",function(m){$(g).off("mousemove");
var n=a.getImageData(0,0,338,130);
var l=0;
for(var k=0;
k<338*130*4;
k+=4){if(n.data[k+3]==0){l++
}}var j=parseInt(l/(338*130)*100);
if(j>10){CommonFourPage.ScrapeCoupon.resultCoupon()
}})
})
};
iFourth.judgeCanvas=function(){var b=$("#canvas-box");
function a(){return !!document.createElement("canvas").getContext
}if(!a()){b.on("click",function(){CommonFourPage.ScrapeCoupon.resultCoupon()
})
}};
iFourth.judgeCanvasLow=function(){var a=$("#canvas-box");
$(".coupon-box").css("border","5px solid #ccc");
a.removeClass("coup3");
a.addClass("guaceng")
};
iFourth.scrapingRulesShow=function(){var b=$(".coupon-box");
var a=parseInt(b.eq(1).css("marginLeft"),10);
if(a<0){a=-a
}a=a;
b.eq(1).animate({marginLeft:"-"+a+"px"})
};
iFourth.scrapingRuleHide=function(){var b=$(".coupon-box");
var a=parseInt(b.eq(1).css("marginLeft"),10);
if(a<0){a=-a
}a=a;
b.eq(1).animate({marginLeft:a+"px"})
};
iFourth.errMsg_db=function(){var a=$(".btn-errMsg .error-msg");
if(a.hasClass("doubleLine")){if(a.height()<22){a.removeClass("doubleLine")
}}else{if(a.height()>22){a.addClass("doubleLine")
}}};
iFourth.textAnimation=function(){var c=$("#gend-finish"),b=c.find(".gend-finish-tip>span");
var a=2;
if(!c.data("inited")){c.data("inited",true);
setInterval(function(){a++;
a%=3;
if(a===0){b.eq(0).siblings().css({visibility:"hidden"})
}else{b.eq(a).css({visibility:"visible"})
}},500)
}};
iFourth.bindYunzuan=function(){var a=$(".proinfo-promo .tool-tip");
var b=a.find(".a-up-arrow");
if($(".proinfo-promo .prom-list-box").attr("data-tooltip")){$(".proinfo-promo .prom-list-box").unbind().mouseenter(function(){var j=$(this);
a.html(b[0].outerHTML+j.attr("data-tooltip"));
var f=a.width();
var i=j.find(".prom-yun").width();
var c=j.height();
var e=j.position().left+(i-f)*0.5+60;
var g;
var h=0;
$(".ph-price-qrcode:visible").each(function(){h+=$(this).height()+5
});
g=j.position().top+h+c+5;
a.css({left:e,top:g}).show()
}).mouseleave(function(){a.hide()
})
}};
iFourth.hwgDeploy=function(){var b=$(".hwg-newlyBox .spdy li");
var a=$(".hwg-newlyBox .kjts li");
b.off("click").on("click",function(){var f=$(this);
var e=f.find(".down-i");
var g=f.find(".up-i");
var c=f.find(".info");
if(c.css("display")=="none"&&e.css("display")!="none"){b.find(".info").hide();
b.find(".up-i").hide();
b.find(".down-i").show();
e.hide();
c.show();
g.show()
}else{e.show();
c.hide();
g.hide()
}});
a.off("click").on("click",function(){var f=$(this);
var e=f.find(".down-i");
var g=f.find(".up-i");
var c=f.find(".info");
if(c.css("display")=="none"&&e.css("display")!="none"){a.find(".info").hide();
a.find(".up-i").hide();
a.find(".down-i").show();
e.hide();
c.show();
g.show()
}else{e.show();
c.hide();
g.hide()
}})
};
iFourth.hwgTittip=function(){var e=$(".zp-zy-bzBox");
var c=e.find(".tool-tip");
var b=c.find(".a-up-arrow");
var a=e.find("li[data-tooltip]");
a.hover(function(){var i=$(this);
c.html(b[0].outerHTML+i.attr("data-tooltip"));
var g=c.width();
var h=i.width();
var f=i.position().left+(h-g)*0.5;
c.css({left:f,top:"65px"}).show()
},function(){c.hide()
})
};
iFourth.bindProSaoyisao=function(){var a=$(".proinfo-main");
$(".q-bottom").hover(function(){a.addClass("promote-zindex")
},function(){a.removeClass("promote-zindex")
})
};
iFourth.point05Height=function(){var b=0;
var a=setInterval(function(){if(b>=10){clearInterval(a)
}iFourth.mainHeight();
b++
},500)
};
iFourth.Error_correction_box=function(h){$.mDialog({title:"有奖纠错",message:$("#error_correction_box"),css:{width:"420px"},overlayClick:true});
var f,e,b,c=$(".error_correction .word1"),a=$(".error_correction .word2"),g=$(".error_correction #errorParaCode");
f=h.find(".name .name-inner").size()==0?h.find(".name").text():h.find(".name .name-inner>span").text();
e=f=="品牌"?h.find(".val>a").text():h.find(".val").text();
b=h.attr("parameterCode");
c.html(f);
a.html(e);
g.html(b)
};
iFourth.sentCssStyle=function(){var j=$(".line1");
var h=$(".line2");
var a=$(".sent-support ul");
var i=$(".line1 .down-i");
var f=$(".line1 .up-i");
var g=$(".sent-support");
var b=$(".sent-support em");
a.off("mouseenter mouseleave");
if(h.find(".s-s-item").length>0){var c=$(".line1").width();
i.show();
a.hover(function(){g.width(a.width()+b.width());
h.show();
a.width(c+20);
a.addClass("on");
i.hide();
f.show()
},function(){g.width("auto");
h.hide();
a.removeClass("on");
i.show();
f.hide()
})
}if(navigator.userAgent.indexOf("MSIE 7.0")>0){var e=$(".sent-support");
e.parents("dd").eq(0).css("z-index","100");
if($(".proinfo-side").is(":visible")&&(e.size()==1)){e.width("500px");
e.height("26px")
}}};
iFourth.SMSverification=function(){$.mDialog({title:"短信安全验证",message:$("#SMS_securityV"),css:{width:"450px"},overlayClick:true})
};
iFourth.codeCoundDown=function(){var c=$(".SMS_security .info-code .code1");
var b=60;
function a(e){if(b==0){e.removeClass("cxhq");
e.html("获取验证码");
b=60;
flag=false;
return
}else{e.addClass("cxhq");
e.html("重新获取("+b+")");
b--
}setTimeout(function(){a(e)
},1000)
}a(c)
};
function isPhone(b){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
return a.test(b)
}iFourth.sendModifyParam=function(){var c=200;
var f=$("#custContext");
var b=$("#phoneNum");
var a=$("#textErrorMsg");
var e=$("#phoneErrorMsg");
b.focus(function(){$(this).removeClass("error");
e.html("")
});
f.focus(function(){$(this).removeClass("error");
a.html("")
});
f.on("keyup",function(){var g=$(this).val();
c=200-g.length;
a.html("");
if(g.length>=200){a.html("请填写内容（限200字）");
$(this).val(g.substring(0,200))
}})
};
iFourth.otherZoom=function(b,a){iFourth.Zoom.prototype._popInit.apply({mainArea:b,srcLarge:"true",index:0,$imgview:a,choose:function(){}})
};
iFourth.watchUndefined=function(c){try{var b=[];
$.ajaxSetup({beforeSend:function(g,f){var e=f.url;
if(e.indexOf("undefined")>-1){b.push(e);
if(b.length===1){setTimeout(function(){var h=b.join(";");
b=[];
sendSaMessageV2Temp("tingyun","js",h)
},10000)
}}}})
}catch(a){}};var CommonFourPage=CommonFourPage||{};
var Recommend=Recommend||{};
var sn_prd_reg=/^\w*?.suning.com$/;
var sn_pre_reg=/^(\w*)(pre)(\w*)(.cnsuning.com)$/;
var sn_sit_reg=/^(\w*)(sit)(\w*)(.cnsuning.com)$/;
var hostName=document.location.hostname;
var protocol=(("https:"==document.location.protocol)?"https://":"http://");
var server=getServer();
var pdsEnvType="PRD";
var paraCorrectInfo=paraCorrectInfo||{};
var fitInfo=[];
var fitSub=function(b,c,a){this.gType=b;
this.passPart=c;
this.subInfo=a
};
fitSub.prototype={gType:"",passPart:"",subInfo:null};
_tag="|";
var pds_passport_config={base:"authStatus",loginTheme:"b2c_pop",successCallbackUrl:"popupLoginSuccess"};
function judgeEnv(){if(sn_prd_reg.test(hostName)){pdsEnvType="PRD"
}else{if(sn_pre_reg.test(hostName)){pdsEnvType="PRE"
}else{if(sn_sit_reg.test(hostName)){pdsEnvType="SIT"
}}}}(function(b){judgeEnv();
pds_passport_config.base=sn.passportDomain+"/";
pds_passport_config.successCallbackUrl=sn.passportDomain+"/popupLoginSuccess?";
b.fn.AjaxLogin=function(a){var e=window.location.href;
if(typeof e!="undefined"&&e.indexOf("#")>0){window.location.href=e.substring(0,e.indexOf("#"))+"#unknown"
}var c=(typeof d("logonStatus")!="undefined"&&d("logonStatus")!=null)||(typeof sn.memberStatus!="undefined"&&sn.memberStatus.status=="success");
ensureLogin(function(){if(!c){refreshLogin()
}a.success()
},pds_passport_config)
};
initMemberOrgs()
})(jQuery);
function initMemberOrgs(){if(sn.suningJiWuFlag){return
}try{if(typeof(ms_memberOrgs)=="object"&&typeof(ms_memberOrgs.queryMemberStatusInfo)=="function"&&typeof(probeAuthStatus)=="function"){ms_memberOrgs.queryMemberStatusInfo(CommonFourPage.initMemberStatusInfo)
}else{setTimeout(function(){initMemberOrgs()
},100)
}}catch(a){}}CommonFourPage.initMemberStatusInfo=function(a){sn.memberStatus=a
};
function refreshLogin(){if(SFE&&SFE.base&&typeof SFE.base.loginMsg=="function"){SFE.base.loginMsg()
}sn.memberStatus="";
initMemberOrgs();
CommonFourPage.queryMemberStatusInfo();
CommonFourPage.queryMemberType();
sn.custLevel=d("custLevel")==null?"":d("custLevel");
sn.ajaxLogin=true;
getICPSPromInfo(sn.partNumber,"FourPage.promInfoCallback");
cloudInfo.getActivityStatus();
Renxf.cfcFreenessPay()
}function pageIsLogin(e,c){if(scmInfo.pcLoginFlag=="0"){if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){if(typeof e=="function"){e()
}sn.hasLogin="0"
},function(){if(typeof c=="function"){c()
}sn.hasLogin="1"
})
}else{setTimeout(function(){pageIsLogin(e,c)
},300)
}}else{if((typeof d("logonStatus")!="undefined"&&d("logonStatus")!=null)||(typeof sn.memberStatus!="undefined"&&sn.memberStatus.status=="success")){if(typeof e=="function"){e()
}sn.hasLogin="0"
}else{if(sn.hasLogin=="1"){c()
}else{if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){if(typeof e=="function"){e()
}sn.hasLogin="0"
},function(){if(typeof c=="function"){c()
}sn.hasLogin="1"
})
}else{setTimeout(function(){pageIsLogin(e,c)
},300)
}}}}}var passport_config=passport_config||pds_passport_config;
function runAnalyseByClass(a){if(a==""){runAnalyseExpo()
}else{runAnalyseExpoCus(a)
}}function runCustomExpoDataOnce(a){if($.inArray(a,customExpoData)==-1){runCustomExpoData(a);
customExpoData.push(a)
}}function runCustomExpoData(a){if(typeof saExportUtil!="undefined"&&typeof saExportUtil.sendCustomExpoData=="function"){saExportUtil.sendCustomExpoData(a,2)
}else{setTimeout(function(){runCustomExpoData(a)
},1000)
}}var expoCusCount=0;
function runAnalyseExpoCus(a){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a",a)
}else{if(expoCusCount<10){setTimeout(function(){runAnalyseExpoCus(a)
},1000);
expoCusCount++
}}}var expoCount=0;
function runAnalyseExpo(){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a")
}else{if(expoCount<10){setTimeout(runAnalyseExpo,1000);
expoCount++
}}}function sendDatasIndex(g){var b=g.name;
var c=g.id;
var e=c+"|"+b;
var j=protocol+server+"/ajaxClick.gif";
var f=getOnlyIdIndex();
var h="_snck";
_addCookie4Index(h,f,"/","","");
var k=getCookieIndex("_snmp");
var i=f+_tag+k+_tag+e;
var a=j+"?_snmk="+i;
httpGifSendIndex(a)
}function getOnlyIdIndex(){var b=new Date();
var a=Math.round(100000*Math.random());
var c=b.getTime().toString().concat(a);
return c
}function getCookieIndex(b){var e=document.cookie.split("; ");
for(var c=0;
c<e.length;
c++){var a=e[c].split("=");
if(a[0]==b){return unescape(a[1])
}}}function httpGifSendIndex(c){var a=c;
var b=document.createElement("img");
b.src=a
}function getServer(){if(sn_prd_reg.test(hostName)){return"click.suning.cn/sa"
}else{return"clicksit.suning.cn/sa"
}}function _addCookie4Index(e,g,h,a,f){var i=e+"="+escape(g);
if(a!=""){var c=new Date();
c.setTime(c.getTime()+a);
i+=";expires="+c.toGMTString()
}if(h!=""){i+=";path="+h
}var b=hostName;
if(b.indexOf(".suning.com")!=-1){i+=";domain=.suning.com"
}else{if(b.indexOf(".cnsuning.com")!=-1){i+=";domain=.cnsuning.com"
}else{i+=";domain="+f
}}document.cookie=i
}function changeAttr(b){var a=new RegExp("-","g");
return b.indexOf("-")>0?b.replace(a,"%252D"):b
}function getRndArray(b){arr1=new Array();
len=b.length;
for(var a=0;
a<len;
a++){rnd=Math.floor(Math.random()*b.length);
arr1[a]=b[rnd];
b.splice(rnd,1)
}return arr1
}function aps_adboard_romancecpc(a){if(a!=null&&a.length>0){var b='<div class="area-head"><h3>云台推荐</h3></div><ul class="exprec">';
$.each(a,function(c,e){b+='<li><a target="_blank" href="'+e.apsClickUrl+'"><img src="'+e.adSrc+'" alt="'+e.title+'" class="image" /></a>';
b+='<p class="title"><a target="_blank" href="'+e.apsClickUrl+'" title="'+e.title+'">'+e.title+"</a></p>";
b+='<p class="price"><span><i>&yen;</i>'+parseFloat(cmdPrice).toFixed(2)+"</span></p></li>"
});
if(b!=""){$(".apsDIV").html(b).show()
}else{$(".apsDIV").html("").hide()
}}else{$(".apsDIV").html("").hide()
}}CommonFourPage.Recommend={getAPSInfo:function(){if(typeof lazyElems!="undefined"){apsAdboardObj.aps_adboard_loadAdCpc(sn.apsId,sn.categoryId,2,"");
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getAPSInfo()
},100)
}},getShopCategory:function(a,b){$.ajax({url:sn.shopPath+sn.shopMainPh+"/"+a+"/resources/query_category/"+b+".html",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
},getHotRank:function(b,e){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"&&typeof sn.hotRank!="undefined"){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
var c=sn.promotionPrice;
if(sn.priceType=="7-1"||sn.priceType=="7-3"){c=sn.netPrice
}lazyElems.hotRank.url=sn.tuijianDomain+"/recommend-portal/dyBase.jsonp?parameter="+b+"&vendorId="+a+"&catalogueId="+sn.categoryId+"&cityId="+sn.cityId+"&sceneIds=1-4&sceneIds=1-6&sceneIds=1-5&price="+c+"&count=10";
lazyElems.hotRank.enable=true;
lazyElems.hotRank.handle=e;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getHotRank(b,e)
},100)
}},getAlsoBuy:function(b,c){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){if(sn.isBook){lazyElems.viewAndBuyContent.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+b+"&cityId="+sn.cityId+"&sceneIds=1-7&sceneIds=10-2&count=5"
}else{var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
lazyElems.viewAndBuyContent.url=sn.tuijianDomain+"/recommend-portal/dyBase.jsonp?parameter="+b+"&vendorId="+a+"&cityId="+sn.cityId+"&sceneIds=1-2&count=5"
}lazyElems.viewAndBuyContent.enable=true;
lazyElems.viewAndBuyContent.handle=c;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getAlsoBuy(b,c)
},100)
}},getSeeAgain:function(b,c){iFourth.win.scroll();
var a="";
if(sn.isBook){a=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+b+"&cityId="+sn.cityId+"&sceneIds=1-1&count=15"
}else{if(sn.hwgShopFlag){a=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+b+"&cityId="+sn.cityId+"&sceneIds=1-90&count=20"
}else{a=sn.tuijianDomain+"/recommend-portal/dyBase.jsonp?parameter="+b+"&vendorId="+sn.vendorCode+"&cityId="+sn.cityId+"&sceneIds=1-1&count=20"
}}$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){}})
},historyRec:function(c,g,f){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
var e=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?";
if(SFE.base.d("custno")!=null&&SFE.base.d("custno")!=""){e+="&u="+SFE.base.d("custno")
}else{e+="&u="
}var b=SFE.base.d("_snma").split("|");
e+="&c="+(b.length>1?b[1]:"");
e+="&cityId="+sn.cityId+"&vendorId="+a+"&sceneIds=8-3&count=20";
if(f=="com"){$.ajax({url:e,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:g,success:function(h){}})
}else{lazyElems["J-historyRec"].url=e;
lazyElems["J-historyRec"].enable=true;
lazyElems["J-historyRec"].handle=g
}}else{setTimeout(function(){CommonFourPage.Recommend.historyRec(c,g)
},100)
}},getOffSaleRecom:function(b,c){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv3/scenesBiz.jsonp?parameter="+b+"&vendorId="+a+"&catalogueId="+sn.catenIds+"&cityId="+sn.lesCityId+"&sceneIds=11-59&count=20",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){}})
},noPublishItems:function(a,b){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv3/scenesBiz.jsonp?parameter="+a+"&catalogueId="+sn.categoryId+"&cityId="+sn.cityId+"&sceneIds=11-2&sceneIds=10-1&count=10&callback="+b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
},getPromotionContent:function(a,b){if(typeof b=="undefined"){b=""
}if(a=="1"){return b+'<span class="label">大聚惠</span>'
}else{if(a=="2"){return b+'<span class="label">抢购</span>'
}else{if(a=="3"){return b+'<span class="label">团购</span>'
}else{if(a=="4"){return b+'<span class="label">闪购</span>'
}else{if(a=="8"){return b+'<span class="label">促</span>'
}}}}}return""
},specialFestival:function(e,f){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
var b=sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?";
if(SFE.base.d("custno")!=null&&SFE.base.d("custno")!=""){b+="u="+SFE.base.d("custno")
}else{b+="u="
}var c="";
if(SFE.base.d("_snma")!=null&&SFE.base.d("_snma")!=""){c=SFE.base.d("_snma").split("|")
}b+="&c="+(c.length>1?c[1]:"");
b+="&parameter="+e+"&vendorId="+a+"&cityId="+sn.lesCityId+"&sceneIds=1-56&count=18";
lazyElems["J-holiday"].url=b;
lazyElems["J-holiday"].enable=true;
lazyElems["J-holiday"].handle=f;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.specialFestival(e,f)
},100)
}},getShopRecommend:function(e,f){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
var b=sn.tuijianDomain+"/recommend-portal/dyBase.jsonp?";
if(SFE.base.d("custno")!=null&&SFE.base.d("custno")!=""){b+="u="+SFE.base.d("custno")
}else{b+="u="
}var c="";
if(SFE.base.d("_snma")!=null&&SFE.base.d("_snma")!=""){c=SFE.base.d("_snma").split("|")
}b+="&c="+(c.length>1?c[1]:"");
b+="&parameter="+sn.partNumber+"&vendorId="+a+"&cityId="+sn.lesCityId+"&sceneIds=1-71&count=6";
lazyElems["J-manager-rec"].url=b;
lazyElems["J-manager-rec"].enable=true;
lazyElems["J-manager-rec"].handle=f;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getShopRecommend(e,f)
},100)
}},getZypjRank:function(b,c){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"&&typeof sn.promotionPrice!="undefined"){var a=sn.zyHwgFlag?"0000000000":sn.vendorCode;
lazyElems["J-tieIn"].url=sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+b+"&vendorId="+a+"&catGroupId="+sn.catenIds+"&cityId="+sn.cityId+"&sceneIds=8-10&count=12";
lazyElems["J-tieIn"].enable=true;
lazyElems["J-tieIn"].handle=c;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getZypjRank(b,c)
},100)
}},getCdpjBank:function(a){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"&&typeof sn.promotionPrice!="undefined"){lazyElems["J-tieIn"].handle=CommonFourPage.runInitCFittingReady(a,CommonFourPage.initCFitting);
lazyElems["J-tieIn"].enable=true;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getCdpjBank(a)
},100)
}},getSZYT:function(){var b="";
if(sn.vendor.length==10){b=sn.vendor.substr(2,10)
}var c=sn.lesCityId+sn.lesDistrictId+"01";
var a=sn.solpUrl+"/solp/http/SOLP10105_pds_50_"+sn.partNumber+"_"+b+"_"+c+"__"+sn.earliestArriveDate+"_queryB2cInstallable.htm";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"showB2cInstallable",success:function(e){if(e.successFlag=="Y"&&e.goods&&e.goods.good&&e.goods.good.length>0&&e.goods.good[0].successFlag=="Y"){sn.installFlag=e.goods.good[0].installFlag;
initServiceOffInstall();
if(sn.installFlag=="3"){itemService.zySupport()
}}}})
}};
function getItemSaleStatus(c,e){var a=sn.lesCityId+sn.lesDistrictId+"01";
var b=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+c+"_"+sn.vendorCode+"_"+sn.lesCityId+"_"+a+"_1_pc_showSaleStatus.vhtm";
$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:e,success:function(){}})
}function getMobileItemSaleStatus(e,f){var a=sn.vendorCode;
if(sn.shopType=="6"){a="0000000000"
}var b=sn.lesCityId+sn.lesDistrictId+"01";
var c=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+e+"_"+a+"_"+sn.lesCityId+"_"+b+"_2_pc_showSaleStatus.vhtm";
$.ajax({url:c,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:f,success:function(){},error:function(){}})
}function showBigPolySellInfo(i){if((sn.cuxiaoType=="0"||sn.cuxiaoType=="1"||sn.cuxiaoType=="6")&&i&&i.preBigPoly){if(i.preBigPoly.gbBeginDate>sn.nowTime){var c=false;
if(i.preBigPoly.serviceType=="1"&&i.preBigPoly.preBeginDate&&sn.nowTime>i.preBigPoly.preBeginDate){c=true
}else{if(i.preBigPoly.serviceType!="1"){c=true
}}if(c){function b(m){if(parseInt(m)<10){m="0"+m
}return m
}var k=parseInt(i.preBigPoly.gbBeginDate);
var j=new Date(k);
var f=b(j.getMonth()+1);
var h=b(j.getDate());
var a=b(j.getHours());
var g=b(j.getMinutes());
var l=f+"月"+h+"日 "+a+":"+g;
$("#bigPolyTime").html(l);
$("#timePanel2").show();
if(i.preBigPoly.serviceType&&i.preBigPoly.serviceType=="1"){var e="1";
bigPolyMore(e)
}}}}}function bigPolyMore(a){try{var b=sn.juDomain+"/ajax/getColumnAndCateInfo_"+sn.partNumber+"_"+sn.vendorCode+"_1_cateInfoBack.html";
$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"cateInfoBack",success:function(e){if(e&&e.pcurl&&e.pcurl.length>0){if(a=="1"){$("#bigPolyMore").html("<a href="+e.pcurl+' class="more">更多活动 &gt;</a>').show()
}else{if(a=="2"){$("#bigPolyMore2").html("<a href="+e.pcurl+' class="more">更多活动 &gt;</a>').show()
}}}},error:function(){}})
}catch(c){}}function getMobileBigPoly(c,g){PriceShow.initFlag="-1";
PriceShow.promotionType="-1";
PriceShow.beginTime="0";
PriceShow.endTime="0";
PriceShow.warmUpTime="0";
PriceShow.remainNum="-1";
PriceShow.curTime="-1";
PriceShow.price="-1";
PriceShow.maxPerNum="1";
PriceShow.activityFlag="";
PriceShow.serviceType="";
PriceShow.isPhoneBind="";
PriceShow.isBrondPay="";
PriceShow.isLimitTake="";
var a=sn.vendorCode;
if(a==""||a==null||(a.length==10&&a.substring(0,3)=="003")||sn.shopType=="6"){a="0000000000"
}try{var b=sn.itemDomain+"/pds-web/ajax/bigPolyItemComV1_"+c+"_"+a+"_1_.html";
$.ajax({url:b,type:"get",cache:true,dataType:"json",success:function(e){g(e)
},error:function(){}})
}catch(f){}}function psellAlterInfo(a){$("#psellBookMessage").html(a);
$.mDialog({title:"支付失败",message:$("#win_presell"),css:{width:"480px"},overlayClick:true})
}function getICPSPromInfo(k,b){if(sn.cuxiaoSwitch=="1"||sn.hasMemberProm!="Y"){return
}var e=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(sn.shopType=="6"){e="0000000000"
}var i=sn.cuxiaoType;
var c=sn.lesCityId+sn.lesDistrictId+"01";
var h=sn.promotionPrice;
if(i=="7-1"||i=="7-3"){h=sn.netPrice
}var a="3,30";
if(sn.pcNewCouponsFlag=="0"&&sn.prdType!="T"&&sn.custLevel=="161000000100"){a="3,30,60"
}var g="";
if(sn.priceInvData.warrantyList){$.each(sn.priceInvData.warrantyList,function(l,m){if(l==0){g+=m.goodsCode+"-"+m.goodsType
}else{g+=","+m.goodsCode+"-"+m.goodsType
}})
}var j="0";
if(sn.hwgShopFlag){j="1"
}else{if(isSpecialSale()){j="5"
}}var f="";
pageIsLogin(function(){f=d("custno")?d("custno"):"";
var l=sn.icpsDomain+"/icps-web/queryExtendedGift/"+k+"_"+e+"_"+sn.lesCityId+"_"+c+"_"+h+"_"+i+"_"+sn.liquanCount+"_1_"+a+"_pds_"+g+"_"+j+"_"+f+"_"+b+".vhtm";
ajaxICPSPromInfo(l,b)
},function(){var l=sn.icpsDomain+"/icps-web/queryExtendedGift/"+k+"_"+e+"_"+sn.lesCityId+"_"+c+"_"+h+"_"+i+"_"+sn.liquanCount+"_1_"+a+"_pds_"+g+"_"+j+"_"+f+"_"+b+".vhtm";
ajaxICPSPromInfo(l,b)
})
}function ajaxICPSPromInfo(a,b){$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
}function queryCouponAvl(b,a){if(scmInfo.pcAbleCouponsFlag!="1"){return
}couponUserDom="";
var c={memberId:$.cookie("custno")?$.cookie("custno"):"",channelId:"31",cityId:sn.lesCityId,commdtyCode:sn.partNumber,businessSign:"",marketingActivityType:"",productListPrice:sn.promotionPrice,storeId:sn.vendorCode=="0000000000"?"":sn.vendorCode,productQty:"1",freightAmount:"0"};
switch(sn.cuxiaoType){case"0":c.marketingActivityType="0";
break;
case"4-1":c.marketingActivityType="1";
break;
case"4-6":c.marketingActivityType="2";
break;
case"4-5":c.marketingActivityType="3";
break;
case"4-2":c.marketingActivityType="5";
break;
case"4-3":c.marketingActivityType="6";
break;
case"4-4":c.marketingActivityType="7";
break;
case"4-7":c.marketingActivityType="9";
break;
case"4-10":c.marketingActivityType="11";
break;
case"4-9":c.marketingActivityType="13";
break;
case"8-1":c.marketingActivityType="16";
break;
case"8-2":c.marketingActivityType="17";
break;
case"8-3":c.marketingActivityType="18";
break;
case"8-4":c.marketingActivityType="19";
break;
case"12-1":c.marketingActivityType="20";
break;
case"12-2":c.marketingActivityType="20";
break;
case"4-14":c.marketingActivityType="21";
break;
default:c.marketingActivityType="0"
}if(sn.prdType=="T"&&sn.isPreBuy!="1"){c.marketingActivityType="12"
}if(sn.hwgShopFlag){c.businessSign="1"
}else{if(isSpecialSale()){c.businessSign="5"
}else{c.businessSign="0"
}}var e=sn.quanUrl+"/getUsableCoupons.do?callback=queryCouponAvlCallBack&channelId="+c.channelId+"&cityId="+c.cityId+"&commdtyCode="+c.commdtyCode+"&businessSign="+c.businessSign+"&marketingActivityType="+c.marketingActivityType+"&productListPrice="+c.productListPrice+"&storeId="+c.storeId+"&productQty="+c.productQty+"&freightAmount="+c.freightAmount;
$.ajax({url:e,type:"get",dataType:"jsonp",jsonp:"callback",jsonpCallback:"queryCouponAvlCallBack",cache:true,success:function(f){queryCouponProcess(f,a,b)
}})
}function queryCouponProcess(h,e,a){if(h&&h.isSuccess=="1"&&h.couponResultList&&h.couponResultList.length>0){var o="";
var k=0;
var f=[];
for(var j=0;
j<h.couponResultList.length;
j++){f.push(h.couponResultList[j]);
var b=h.couponResultList[j];
if(b.couponType!="10010"&&b.couponType!="10011"){o+='<li class="it-ticket">';
var m=processQuanTimeDom(b.startTime,b.endTime,e);
if(b.couponType=="10001"||b.couponType=="10002"||b.couponType=="10003"){o+='<div class="ti-info yun-quan'
}else{if(b.couponType=="10004"||b.couponType=="10005"||b.couponType=="10006"){o+='<div class="ti-info yi-quan'
}else{if(b.couponType=="10007"||b.couponType=="10008"||b.couponType=="10014"){o+='<div class="ti-info jin-ron-quan'
}else{if(b.couponType=="10009"||b.couponType=="10013"){o+='<div class="ti-info wu-di-quan'
}else{o+='<div class="ti-info you-hui-quan'
}}}}if(m==""){o+=" no-t-valid"
}o+='">';
if(m!=""){o+='<span class="time-valid">'+m+"</span>"
}var g=(parseFloat(b.amount)+"").split(".");
o+='<p class="coupon-price"><i>￥</i><em>'+g[0]+"</em>";
if(g.length>1){o+="<small>."+g[1]+"</small>"
}o+='</p><p class="ti-explain">['+b.bonusRulesDesc+']</p><p class="ti-term">'+getFormatYYMMDD(b.startTime)+" 至 "+getFormatYYMMDD(b.endTime)+'</p></div><div class="ti-operate">';
if(b.couponType=="10002"||b.couponType=="10003"||b.couponType=="10004"||b.couponType=="10005"||b.couponType=="10006"){o+='<p class="txt-result"> <a target="_blank" href="'+sn.tssUrl+"/ticket/tss/pc/"+b.couponRuleId+'.html" name="item_'+sn.ninePartNumber+'_kyqyq_click">查看更多用券商品</a></p>'
}else{o+='<a href="javascript:;" class="btn-im-use cursor-default">已领取</a>'
}o+="</div> </li>";
k++
}}if(a&&a.length>0){$("#getCoupon").removeClass().addClass("w2").html("领券")
}else{$("#getCoupon").removeClass().addClass("w3").html("可用券")
}processCouponCuxiao(a,f);
if(k>0){var c=Math.ceil(k/3);
var l='<a class="btn-dir prev" href="javascript:void(0);"';
if(c<=1){l+=' style="display:none;"'
}l+='><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">'+c+'</i></span><i class="arr"></i></a>';
l+='	<a class="btn-dir next" href="javascript:void(0);"';
if(c<=1){l+=' style="display:none;"'
}l+='><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">'+c+'</i></span><i class="arr"></i></a>';
if(c>1){l+='	<div class="cp-head">可用优惠券(共<span>'+c+"</span>页)</div>"
}else{l+='	<div class="cp-head">可用优惠券</div>'
}l+='	<div class="list-wrap">                                  ';
l+='		<ul class="clearfix">                                  ';
l+=o;
l+="</ul></div></div>";
couponUserDom=l;
if($("#has-take-panel").length>0){$("#has-take-panel").html(couponUserDom).show();
runCustomExpoDataOnce("item_"+sn.ninePartNumber+"_kyqyq_show")
}$(window).resize();
iFourth.bindQuanHasTakeListloop()
}}}var couponList=[];
function processFreeCouponInfo(a){couponList=a;
pageIsLogin(function(){getCouponStatus("couponStatusCallback")
},function(){processCouponCuxiao(couponList)
})
}function processCouponCuxiao(k,g){if((k&&k.length>0)||(g&&g.length>0)){var a=0;
var b=0;
var f="";
if(k&&k.length>0){a=k.length
}if(g&&g.length>0){b=g.length
}for(var e=0;
e<2&&e<a;
e++){var h="有效期"+k[e].couponStartTime+"至"+k[e].couponEndTime;
f+='<a class="p-quan2" title="'+h+'"  href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_promotion_coupon"><i class="quan-border bl"></i><span>¥'+parseFloat(k[e].couponValue)+'</span><i class="bm"></i><span class="p-quan-white">';
if(k[e].couponPromotionLabel.length>11){f+=k[e].couponPromotionLabel.substring(0,11)+"..."
}else{f+=k[e].couponPromotionLabel
}f+='</span><i class="quan-border br"></i></a>'
}for(var c=0;
c<(2-a)&&c<b;
c++){var h="有效期"+g[c].startTime+"至"+g[c].endTime;
f+='<a class="p-quan2" title="'+h+'"  href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_promotion_coupon"><i class="quan-border bl"></i><span>¥'+parseFloat(g[c].amount)+'</span><i class="bm"></i><span class="p-quan-white">';
if(g[c].bonusRulesDesc.length>11){f+=g[c].bonusRulesDesc.substring(0,11)+"..."
}else{f+=g[c].bonusRulesDesc
}f+='</span><i class="quan-border br"></i></a>'
}if(a==0){f+='<a href="javascript:void(0);" class="a-detail" name="item_'+sn.ninePartNumber+'_kyqrk_click">您有'+b+"张可用券></a>";
runCustomExpoDataOnce("item_"+sn.ninePartNumber+"_kyqrk_show")
}else{f+='<a href="javascript:void(0);" class="a-detail" name="item_'+sn.ninePartNumber+'_promotion_coupon">共'+(a+b)+"张优惠券></a>"
}$("#freeCouponBox").html(f);
if(a==0){$("#freeCouponBox a").attr("name","item_"+sn.ninePartNumber+"_kyqrk_click")
}else{$("#freeCouponBox a").attr("name","item_"+sn.ninePartNumber+"_promotion_coupon")
}$("#freeCouponTitle").css("display","block");
$("#freeCouponBox a").off("click").click(function(){couponLoginSataus();
if(couponStatus.lenght>0){couponStatusCallback(couponStatus)
}})
}}function processFreeAndYzCouponInfo(c,a){var g="";
var f={};
var b={};
var h=0;
var e="";
$.each(a,function(j,k){if(j>0){e+=","
}e+=k.activityId
});
$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/ajax/getVoucherValueList.do?ids="+e,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(j){if(j&&j.code=="1"){var i=false;
$.each(j.data,function(k,l){if(l.cloudValue&&l.cloudValue>0&&l.activityId&&l.voucherId){f[l.activityId]=l.cloudValue;
b[l.activityId]=l.voucherId;
i=true
}});
if(i){$.each(a,function(k,l){if(f[l.activityId]){if(h<5){g+='<span class="p-quan"><i class="quan-border bl"></i><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_promotion_coupon">'+l.couponValue+'元</a><i class="quan-border br"></i></span>';
h++
}l.cloudValue=f[l.activityId];
l.voucherId=b[l.activityId];
couponList.push(l)
}})
}}},error:function(){}});
if(sn.scrapeCoupon=="0"&&couponList.length<=0){$("#getCoupon").html("刮券");
$("#freeCouponTitle").show()
}}function couponClickFun(){if(!isSiller){$.getScript(sn.intelligent+"/detect/dt/siller.js"+sn.version,function(){$.mDialog({title:"领券",css:{width:"792px"},http:function(a,b){a.find(".content").html(couponStatusDom);
iFourth.bindMoreQuan();
initSiller();
$("#imgtext").on("input propertychange",function(){if($("#imgtext").val().length>3){validate()
}})
},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300});
if(couponUserDom!=""){$("#has-take-panel").html(couponUserDom).show();
runCustomExpoDataOnce("item_"+sn.ninePartNumber+"_kyqyq_show");
iFourth.bindQuanHasTakeListloop();
$(window).resize()
}});
isSiller=true
}else{$.mDialog({title:"领券",css:{width:"792px"},http:function(a,b){a.find(".content").html(couponStatusDom);
iFourth.bindMoreQuan();
initSiller();
$("#imgtext").on("input propertychange",function(){if($("#imgtext").val().length>3){validate()
}})
},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300});
if(couponUserDom!=""){$("#has-take-panel").html(couponUserDom).show();
runCustomExpoDataOnce("item_"+sn.ninePartNumber+"_kyqyq_show");
iFourth.bindQuanHasTakeListloop();
$(window).resize()
}}}function couponLoginSataus(){if(typeof couponList!="undefined"&&couponList.length>0){pageIsLogin(function(){couponClickFun()
},function(){$("body").AjaxLogin({success:function(){sn.couponLogin=true;
getCouponStatus("couponStatusCallback")
}})
})
}}var isSiller=false;
function getCouponStatus(g,b){if($('link[href*="/detect/static/siller.css"]').length==0){$("<link>").attr({rel:"stylesheet",type:"text/css",href:sn.intelligent+"/detect/static/siller.css"+sn.version}).appendTo("head")
}var a="";
if(typeof b!="undefined"&&b!=""){a=b
}else{for(var e=0;
e<couponList.length;
e++){if(e==couponList.length-1){a+=couponList[e].activityId
}else{a+=couponList[e].activityId+","
}}}var f={actIds:a,channel:1};
var c=sn.quanUrl+"/queryCouponProgress.do";
$.ajax({url:c,type:"get",cache:true,data:f,dataType:"jsonp",jsonpCallback:g,success:function(h){}})
}var couponStatusDom="";
var couponUserDom="";
var couponNumYl=0;
var couponTakeList=[];
var couponStatus=[];
function couponStatusCallback(o,k){couponStatus=o;
couponStatusDom="";
couponNumYl=0;
if(couponList.length>0&&o!=null&&o.activityList.length>0){var r=o.activityList;
var g=o.sysTime;
var b=0;
var e="";
var h=[];
for(var p=0;
p<couponList.length&&p<9;
p++){for(var m=0;
m<r.length;
m++){if(couponList[p].activityId==r[m].activityId){var l=(parseFloat(couponList[p].couponValue)+"").split(".");
if(r[m].isReceive=="2"||(k&&k==couponList[p].activityId)){b++;
if(r[m].isReceive=="2"){h.push(couponList[p])
}var u=couponList[p].activitySecretKey;
var s=couponList[p].activityId;
if(couponList[p].voucherId){s=couponList[p].voucherId
}var q="wl"+couponList[p].activityId;
var c="";
if(couponList[p].cloudValue){c=couponList[p].cloudValue
}var t=processQuanTimeDom(couponList[p].couponStartTime,couponList[p].couponEndTime,g);
e+='<li class="it-ticket">                                          ';
e+='  <div class="ti-info you-hui-quan';
if(t==""){e+=" no-t-valid"
}e+='">';
if(t!=""){e+='<span class="time-valid">'+t+"</span>             "
}e+='<p class="coupon-price"><i>￥</i><em>'+l[0]+"</em>";
if(l.length>1){e+="<small>."+l[1]+"</small>"
}e+="</p>          ";
e+='      <p class="ti-explain">['+couponList[p].activityDesc+"]</p>                     ";
e+='      <p class="ti-term">'+getFormatYYMMDD(couponList[p].couponStartTime)+" 至 "+getFormatYYMMDD(couponList[p].couponEndTime)+"</p>                    ";
e+="  </div>                                                        ";
e+='  <div class="ti-operate" id="'+q+'">                                      ';
if(k&&k==couponList[p].activityId){var a=sn.tssUrl+"/ticket/tss/pc/"+s+".html";
if(r[m].isReceive!="2"){e+='<p class="txt-result"><i class="i-ok"></i> 领取成功，<a href="'+a+'" class="" target="_blank" name="item_'+sn.ninePartNumber+'_coupon_more">查看更多用券商品</a></p>'
}else{e+='<p class="txt-result"><i class="i-ok"></i> 领取成功，您还可<a href="javascript:resetWlBtn(\''+u+"','"+s+"','"+c+'\');" class="">再领一张</a></p>'
}}else{if(couponList[p].cloudValue){e+='        <a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="receiveQuan(\''+u+"','"+s+"','"+q+"','"+c+'\')" class="btn-diamond"><i class="diamond"></i><span>';
e+=couponList[p].cloudValue+"云钻兑换";
e+="        </span></a>"
}else{e+='        <a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="receiveQuan(\''+u+"','"+s+"','"+q+"','"+c+'\')" class="btn-im-use">';
e+="立即领取&gt;";
e+="        </a>"
}}e+="        </div>                                                        ";
e+="</li>         "
}}}}couponStatusDom+='<div class="identity-pop-form" id="identityPopForm" style="display: none"><div class="idty-container"><div class="clearfix" id="slideWords" style="display: none"><div class="lose-img"></div><div class="idty-prompt"><p>活动太火爆，请滑动验证！</p></div></div><div class="clearfix" id="imgWords" style="display: none"><div class="lose-img"></div><div class="idty-prompt"><p>活动太火爆，请输入验证码验证！</p></div></div><div class="idty-area" id="slideCheck" style="display: none"><div><div style="width: 332px;height: 42px; text-align: center;background: #75C72B;" id="slideArea"></div></div></div><div class="idty-area" id="imgCheck" style="display: none"><div class="identity-img "><div class=" clearfix "><div class="idty-input check-err check-correct" id="chenckInfo"><input type="text" id="imgtext"><i class="err-i" style="display: none"></i><i class="correct-i" style="display: none"></i></div><img src="" alt="" class="idtycode-img"> <a href="javascript:;" class="idty-change" onclick="changeValidate()">换一张</a></div><div class="err-box" style="display: none" id="errbox"></div><a href="javascript:;" class="btn-idty" id="validateButton">验证领取</a></div></div><div id="SMSCheck" style="display: none"><div class="page1 SMS_security"><div class="info info-tel"><p>手机号码:<span class="tel-num" id="smsTel"></span></p></div><p class="info info-code"><input type="tel" class="code" id="smsCode" placeholder="请输入验证码"><a class="code1" id="getSmsCode" href="javascript:;">获取验证码</a></p><p class="error-msg" style="display: none" id="smsErrbox">验证码错误</p><div class="btn-box"><a href="javascript:;" class="btn-idty" id="SMSButton">确定</a><a href="javascript:;" class="btn2" id="SMSCancel">取消</a></div></div></div></div></div>';
couponStatusDom+='<div class="pop-coupon-win clearfix" id="couponWin">';
if(b>0){couponStatusDom+='<div class="coupons-body " id="no-take-panel">';
var f=Math.ceil(b/3);
if(f>1){couponStatusDom+='	<a class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">'+f+'</i></span><i class="arr"></i></a>';
couponStatusDom+='	<a class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">'+f+'</i></span><i class="arr"></i></a>';
couponStatusDom+='	<div class="cp-head">可领优惠券(共<span>'+f+"</span>页)</div>"
}else{couponStatusDom+='	<div class="cp-head">可领优惠券</div>'
}couponStatusDom+='	<div class="list-wrap">';
couponStatusDom+='		<ul class="clearfix">';
couponStatusDom+=e;
couponStatusDom+="		</ul>";
couponStatusDom+="	</div>";
couponStatusDom+="</div>"
}else{couponStatusDom+='<div class="coupons-body " id="no-take-panel">';
couponStatusDom+='	<div class="none-tickets">';
couponStatusDom+='	<div class="none-icon"></div>';
couponStatusDom+='	<p class="none-text">没有可领优惠券了</p></div>';
couponStatusDom+="</div>    "
}couponStatusDom+='<div class="coupons-body" id="has-take-panel" style="display:none;"></div>';
couponStatusDom+="</div>";
if(sn.couponLogin){sn.couponLogin=false;
couponClickFun()
}if(k){$("#couponWin").html(couponStatusDom);
iFourth.bindQuanNoTakeListloop();
couponStatusCallback(couponStatus)
}processCouponCuxiao(h);
queryCouponAvl(h,g)
}}function hasTakeCouponCallback(f){var e="";
if(couponList.length>0&&f!=null&&f.activityList.length>0){var c=f.activityList;
for(var b=0;
b<c.length;
b++){e=c[b].activityId;
if(couponStatus&&couponStatus.activityList&&couponStatus.activityList.length>0){for(var a=0;
a<couponStatus.activityList.length;
a++){if(couponStatus.activityList[a].activityId==e){couponStatus.activityList[a]=c[b];
break
}}}}}couponStatusCallback(couponStatus,e)
}function resetWlBtn(e,b,a){var c="wl"+b;
$("#wl"+b).html('<a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="receiveQuan(\''+e+"','"+b+"','"+c+"','"+a+'\')" class="btn-im-use">再领一张&gt;</a>')
}function processQuanTimeDom(j,c,a){var b="";
var i=new Date(a).getTime();
var h=new Date(j).getTime();
var f=new Date(c).getTime();
if(h-i>0){var e=Math.floor((h-i)/86400000);
var g=Math.round(((h-i)%86400000)/3600000);
if(g==24){g=0;
e=e+1
}if(e==0&&(h-i)<3600000){b="1小时内可以使用"
}else{if(e>0&&g>0){b=e+"天"+g+"小时后可以使用"
}else{if(g==0){b=e+"天后可以使用"
}else{b=g+"小时后可以使用"
}}}}else{if(0<f-i&&f-i<86400000){b="即将过期"
}else{if(f-i<=0){b="已过期"
}}}return b
}var quanIdTip="";
var receiveQuanStatus=false;
var sillerQuan={};
var errorResultMsg={VOUCHER_1002:"云钻余额不足(╯︵╰)",VOUCHER_1003:"已经兑完了(╯︵╰)",VOUCHER_1005:"已经兑换过啦，快去使用吧～",VOUCHER_1006:"还不能兑换(╯︵╰)",VOUCHER_1008:"活动还未开始(╯︵╰)",VOUCHER_1009:"活动已经结束(╯︵╰)",VOUCHER_1010:"活动还未开始(╯︵╰)",VOUCHER_1011:"已经兑完了(╯︵╰)",VOUCHER_1013:"账户不符合要求(╯︵╰)",VOUCHER_1014:"等级不符合要求(╯︵╰)",VOUCHER_1015:"已经兑换过同类券(╯︵╰)",VOUCHER_1016:"券还不能兑换(╯︵╰)",VOUCHER_1018:"请先认证账户(╯︵╰)",VOUCHER_1019:"账户不符合要求(╯︵╰)",VOUCHER_1020:"已经兑完了(╯︵╰)",VOUCHER_1026:"验证失败了(╯︵╰)",VOUCHER_9999:"系统繁忙(╯︵╰)"};
function receiveQuan(k,i,b,c){if(c&&c!=""){if(receiveQuanStatus){return
}receiveQuanStatus=true;
if($("#"+b+" .txt-result").length>0){$("#"+b).html('<a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="'+$("#"+b+" a").attr("href")+'" class="btn-im-use ">'+c+"云钻兑换&gt;</a>")
}var j="";
var e="";
var h="";
var f=siller.queryToken();
if(typeof f!="undefined"&&f!=""){j=f
}else{if($("#imgtext").val()!=""){e=$("#imgtext").val()
}else{if($("#smsCode").val()!=""){h=$("#smsCode").val()
}}}var a="";
if(typeof bd!="undefined"&&bd&&bd!="undefined"){a=bd.rst()
}var g={voucherId:i,couponGetSource:"1001",detect:a,sliderToken:j,smsCode:h,vcsCode:e,uuid:uuID};
$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/sendVoucher.do",data:g,cache:true,type:"get",dataType:"jsonp",jsonpCallback:"callbackSendVoucherFun",success:function(m){siller.token="";
$("#imgtext").attr("value","");
$(".correct-i").hide();
$("#errbox").html("").hide();
$("#smsErrbox").html("").hide();
$(".err-i").hide();
$(".correct-i").hide();
$("#identityPopForm").hide();
$("#couponWin").show();
if(m!=null&&m.resultCode=="0"){quanIdTip=b;
getCouponStatus("hasTakeCouponCallback",b.substring(2))
}else{if(m!=null&&m.resultCode=="1012"){sillerQuan.quanCode=k;
sillerQuan.quanID=i;
sillerQuan.id=b;
sillerQuan.cloudValue=c;
siller.show();
$("#identityPopForm").show();
$("#couponWin").hide();
$("#slideWords").show();
$("#slideCheck").show()
}else{if(m!=null&&m.resultCode=="VOUCHER_1022"){$("#validateButton").unbind().click(function(){if($("#imgtext").val()==""||$("#imgtext").val().length==0){$("#errbox").html("<i></i>请您输入验证码").show();
return
}else{if($(".correct-i").css("display")=="none"){$("#errbox").html("<i></i>请您输入正确的验证码").show();
return
}}receiveQuan(k,i,b,c)
});
verificationCode();
$("#identityPopForm").show();
$("#couponWin").hide();
$("#imgCheck").show();
$("#imgWords").show()
}else{if(m!=null&&m.resultCode=="VOUCHER_1024"){verificationCode();
$("#identityPopForm").show();
$("#couponWin").hide();
$("#imgCheck").show();
$("#imgWords").show();
$("#errbox").html("<i></i>验证失败了(╯︵╰)").show()
}else{if(m!=null&&m.resultCode=="VOUCHER_1025"){verificationCode();
$("#identityPopForm").show();
$("#couponWin").hide();
$("#imgCheck").show();
$("#imgWords").show();
$("#errbox").html("<i></i>错误太多次啦(╯︵╰)").show()
}else{$("#identityPopForm").hide();
$("#imgCheck").hide();
$("#imgWords").hide();
$("#couponWin").show();
var o="请稍后再试(╯︵╰)";
if(m&&m.resultCode&&errorResultMsg[m.resultCode]){o=errorResultMsg[m.resultCode]
}var l="";
if(m!=null&&m&&typeof m.resultCode!="undefined"){m.resultCode=m.resultCode.substring(m.resultCode.indexOf("_")+1);
l="（"+m.resultCode+"）"
}$("#"+b).html('<p class="txt-result"><i class="i-err"></i> '+o+l+"</p>")
}}}}}receiveQuanStatus=false
}})
}else{if(receiveQuanStatus){return
}receiveQuanStatus=true;
if($("#"+b+" .txt-result").length>0){$("#"+b).html('<a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="'+$("#"+b+" a").attr("href")+'" class="btn-im-use ">立即领取&gt;</a>')
}$("#"+b+" a").addClass("btn-getting").html("");
var j="";
var f=siller.queryToken();
if(typeof f!="undefined"&&f!=""){j=f
}else{if($("#imgtext").val()!=""){j=$("#imgtext").val()
}else{if($("#smsCode").val()!=""){j=$("#smsCode").val()
}}}var a="";
if(typeof bd!="undefined"&&bd&&bd!="undefined"){a=bd.rst()
}var g={actId:i,actKey:k,channel:"1",cityId:sn.lesCityId,bonusTrigerId:"3",validateCode:j,deviceToken:bd.ptoken(),detect:a,uuid:uuID,sourceId:"2001"};
$.ajax({url:sn.quanUrl+"/lqzx_rsf.do",data:g,cache:true,type:"get",dataType:"jsonp",jsonpCallback:"receiveQuanCallBack",success:function(o){siller.token="";
$("#imgtext").attr("value","");
$("#smsCode").attr("value","");
$("#smsTel").html("");
$(".correct-i").hide();
$("#errbox").html("").hide();
$("#smsErrbox").html("").hide();
$(".err-i").hide();
$(".correct-i").hide();
$("#identityPopForm").hide();
$("#couponWin").show();
$("#SMSCheck").hide();
$("#slideWords").hide();
$("#slideCheck").hide();
$("#imgWords").hide();
$("#imgCheck").hide();
if(o!=null&&o.resultCode=="0"){quanIdTip=b;
getCouponStatus("hasTakeCouponCallback",i)
}else{if(o!=null&&o.resultCode=="1001"){sillerQuan.quanCode=k;
sillerQuan.quanID=i;
sillerQuan.id=b;
siller.show();
$("#identityPopForm").show();
$("#couponWin").hide();
$("#slideWords").show();
$("#slideCheck").show()
}else{if(o!=null&&o.resultCode=="1003"){$("#validateButton").unbind().click(function(){if($("#imgtext").val()==""||$("#imgtext").val().length==0){$("#errbox").html("<i></i>请您输入验证码").show();
return
}else{if($(".correct-i").css("display")=="none"){$("#errbox").html("<i></i>请您输入正确的验证码").show();
return
}}receiveQuan(k,i,b)
});
verificationCode(o.sceneId,o.uuid);
$("#identityPopForm").show();
$("#couponWin").hide();
$("#imgCheck").show();
$("#imgWords").show()
}else{if(o!=null&&o.resultCode=="2004"){$("#getSmsCode").unbind().click(function(){var q=$("#getSmsCode").html();
if(q=="获取验证码"){$.ajax({url:sn.quanUrl+"/sms/getSmsCode.do",cache:true,type:"get",dataType:"jsonp",jsonpCallback:"sms",success:function(r){if(r.errcode&&r.errcode=="1001"){$("#smsErrbox").html("").hide();
iFourth.codeCoundDown()
}else{if(r.errcode&&r.errcode=="1104"){$("#smsErrbox").html("发送短信验证码失败").show()
}else{if(r.errcode&&r.errcode=="1106"){$("#smsErrbox").html("客户端生成短信或者邮件验证码请求失败").show()
}else{if(r.errcode&&r.errcode=="01001"){$("#smsErrbox").html("当日短信发送次数已用完").show()
}else{if(r.errcode&&r.errcode=="01002"){$("#smsErrbox").html("两次发送短信需要间隔一分钟以上").show()
}else{$("#smsErrbox").html("发送短信验证码失败").show()
}}}}}}})
}});
$("#SMSButton").unbind().click(function(){if($("#smsCode").val()==""||$("#smsCode").val().length==0){$("#smsErrbox").html("<i></i>请您输入验证码").show();
return
}receiveQuan(k,i,b,c)
});
$("#SMSCancel").unbind().click(function(){$("#"+b).html('<a name="item_'+sn.ninePartNumber+'_sale_01" href="javascript:void(0);" onclick="receiveQuan(\''+k+"','"+i+"','"+b+'\')" class="btn-im-use ">立即领取&gt;</a>');
$(".correct-i").hide();
$("#errbox").html("").hide();
$("#smsErrbox").html("").hide();
$(".err-i").hide();
$(".correct-i").hide();
$("#identityPopForm").hide();
$("#couponWin").show();
$("#SMSCheck").hide()
});
var m="";
if(o.mobileNum&&o.mobileNum.length>7){m=o.mobileNum;
m=m.substring(0,3)+"****"+m.substring(7)
}$("#smsTel").html(m);
$("#identityPopForm").show();
$("#couponWin").hide();
$("#SMSCheck").show()
}else{if(o!=null&&o.resultCode=="2005"){var m="";
if(o.mobileNum&&o.mobileNum.length>7){m=o.mobileNum;
m=m.substring(0,3)+"****"+m.substring(7)
}$("#smsTel").html(m);
$("#identityPopForm").show();
$("#couponWin").hide();
$("#SMSCheck").show();
$("#smsErrbox").html("<i></i>很抱歉,验证失败请重新输入验证码").show()
}else{if(o!=null&&o.resultCode=="2006"){var m="";
if(o.mobileNum&&o.mobileNum.length>7){m=o.mobileNum;
m=m.substring(0,3)+"****"+m.substring(7)
}$("#smsTel").html(m);
$("#identityPopForm").show();
$("#couponWin").hide();
$("#SMSCheck").show();
$("#smsErrbox").html("<i></i>验证码错误次数过多，请重新获取验证码").show()
}else{if(o!=null&&o.resultCode=="1004"){verificationCode(o.sceneId,o.uuid);
$("#identityPopForm").show();
$("#couponWin").hide();
$("#imgCheck").show();
$("#imgWords").show();
$("#errbox").html("<i></i>很抱歉,验证失败请重新输入验证码").show()
}else{$("#identityPopForm").hide();
$("#imgCheck").hide();
$("#imgWords").hide();
$("#couponWin").show();
var p="没有领到~请稍后再试";
if(o!=null&&o.resultCode=="4"){p="活动太火爆，已经领光了~"
}else{if(o!=null&&o.resultCode=="5"){p="很抱歉，您今天领的券太多了~"
}else{if(o!=null&&o.resultCode=="6"){p="很抱歉，您领的券太多了~"
}else{if(o!=null&&o.resultCode=="13"){p="请先绑定手机"
}else{if(o!=null&&o.resultCode=="15"){p="暂无领取资格"
}else{if(o!=null&&o.resultCode=="16"){p="很抱歉，您不符合优惠券发放条件"
}else{if(o!=null&&(o.resultCode=="17"||o.resultCode=="18"||o.resultCode=="20")){p="无法领取优惠券"
}else{if(o!=null&&o.resultCode=="21"){p="很抱歉，您的会员等级不足"
}else{if(o!=null&&(o.resultCode=="23"||o.resultCode=="24"||o.resultCode=="25")){p="很抱歉，您不符合优惠券发放条件"
}else{if(o!=null&&o.resultCode=="99"){p="请先绑定华夏基金"
}else{if(o!=null&&o.resultCode=="2001"){p="请先绑定手机"
}else{if(o!=null&&o.resultCode=="2002"){p="手机尚未验证"
}else{if(o!=null&&o.resultCode=="2003"){p="系统异常，请稍后再试"
}}}}}}}}}}}}}var l="";
if(o!=null&&o&&typeof o.resultCode!="undefined"){l="（"+o.resultCode+"）"
}$("#"+b).html('<p class="txt-result"><i class="i-err"></i> '+p+l+"</p>")
}}}}}}}receiveQuanStatus=false
}})
}}function ccasd(a){if(typeof sillerQuan.quanCode!="undefined"&&sillerQuan.quanCode!=""&&sillerQuan.cloudValue){receiveQuan(sillerQuan.quanCode,sillerQuan.quanID,sillerQuan.id,sillerQuan.cloudValue)
}else{if(typeof sillerQuan.quanCode!="undefined"&&sillerQuan.quanCode!=""){receiveQuan(sillerQuan.quanCode,sillerQuan.quanID,sillerQuan.id)
}else{$("#identityPopForm").hide();
$("#couponWin").show();
$("#slideWords").hide();
$("#slideCheck").hide()
}}}function initSiller(){siller.init({backImg:"",tip0:"",tip1:"",tip2:"",tip3:"",backWidth:"",backHeight:"",slWidth:"",slHeight:"",fontSize:"",target:"slideArea",callback:ccasd,url:sn.intelligent+"/detect/dt/dragDetect.json"})
}function getShopScoreList(e){if(typeof lazyElems!="undefined"){var a=sn.vendorCode;
var b=$("#shop_code").val();
var c=$("#shop_status").val();
if(!sn.isCShop&&!sn.zyHwgFlag&&b&&c=="0"){a=b
}lazyElems.shopScoreTrend.url=sn.reviewNew+"ajax/getShopScore/"+a+"-"+e+".htm";
lazyElems.shopScoreTrend.enable=true;
lazyElems.shopScoreTrend.handle=e;
iFourth.win.scroll()
}else{setTimeout(function(){getShopScoreList(e)
},100)
}}function verifyBigPoly(){if(PriceShow.isPhoneBind=="1"||PriceShow.isBrondPay=="1"){var a="<dt>购买须知</dt><dd><span>购买前请确认已经</span>";
if(PriceShow.isPhoneBind=="1"&&PriceShow.isBrondPay!="1"){a+='<a id="isPhoneBind" href="'+sn.aqPhone+'" target="_blank" class="b">绑定手机号</a>'
}else{if(PriceShow.isPhoneBind!="1"&&PriceShow.isBrondPay=="1"){a+='<a id="isBrondPay" href="'+sn.paySuning+'" target="_blank" class="b">开通易付宝快捷支付</a>'
}else{if(PriceShow.isPhoneBind=="1"&&PriceShow.isBrondPay=="1"){a+='<a id="isPhoneBind" href="'+sn.aqPhone+'" target="_blank" class="b">绑定手机号</a>&nbsp&nbsp同时&nbsp&nbsp<a id="isBrondPay" href="'+sn.paySuning+'" target="_blank" class="b">开通易付宝快捷支付</a>'
}}}$("#bigPolyVerify").html(a);
$("#bigPolyVerify").show()
}else{$("#bigPolyVerify").hide()
}}function initHistoryCookie(f,b){var a=FourPage.getCookieBonus("smhst");
var g=getEffectivePartNumber(f);
var c=b;
var e="a";
FourPage.updateHistory(a,g,e,c)
}var iDiggerTrackingCodes=function(c,f,a){var h=sn.vendorCode;
if(h==undefined||"undefined"==h||""==h||(h.length==10&&h.substring(0,3)=="003")){h="0000000000"
}var e=sn.categoryName1+":"+sn.categoryName2+":"+sn.categoryName3;
var i=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+c+"_1_400x400.jpg";
var a=a||[];
var b=snga.productStatus?snga.productStatus:"";
var g="";
if(b.indexOf("1")!=-1){g=snga.shipOffset
}else{if(b.indexOf("2")!=-1){g="-1"
}else{if(b.indexOf("3")!=-1||b.indexOf("-99")!=-1){g="-2"
}else{g="-99"
}}}if(sn.vendorCode!=""){g="-99"
}snga.productStatus=sn.isPreBuy==1&&(sn.invStatus=="0"||sn.invStatus=="3"||sn.invStatus=="2")?"-99":snga.productStatus;
a.push(["db","ifc"],["sitecode","T-000130-01"]);
a.push(["gid",getEffectivePartNumber(c),"gcate",f,"supplierID",h,"gprice",sn.promotionPrice,"gcatename",e,"gimgurl",i,"gname",sn.itemDisplayName,"invent",g]);
a.push(["userid",d("custno")],["userflag",""]);
a.push(["_trackPoint"])
};
function processQcode(){if(typeof sn.footTickCatenIds!="undefined"&&sn.catenIds==sn.footTickCatenIds){return
}var e=sn.partNumber;
if(typeof sn.pgFlag!="undefined"&&sn.pgFlag=="Y"&&(!(typeof sn.mobilePrice!="undefined"&&sn.mobilePrice!="")||parseFloat(sn.pgPrice)<parseFloat(sn.mobilePrice))){if(e!=""){$("#mobileTitle label").html("拼团价");
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}var c="<span>拼团价：<i>¥</i>"+parseFloat(sn.pgPrice).toFixed(2)+'</span>                                        <span class="ml10">手机扫码'+sn.pgNum+'人成团</span>                              <span class="qrcode-region">                                      <em class="ph-qr-icon"></em>                                      <i class="ng-iconfont down-i"></i>                              <i class="ng-iconfont up-i"></i>                                <div class="qrc-wrapper">      <img lazy-src="'+qrinit(a,getEffectivePartNumber(e),1)+'" class="b-img" onerror="javascript:$(\'#mobileBox .qrc-wrapper\').hide();">  </div>                                         </span>                                          ';
+'<span href="javascript:;" class="pin-help">                                                     <span class="pin-img">        <img lazy-src="'+sn.newImageDomianDir+'/uimg/cms/img/147306999360062493.jpg" alt=""/>                                                              <span class="tri-pointer-up">                                                             	   <i class="inner-tri"></i>                                                                                 	  </span>                                                                               	  </span>                                                                                     </span>                                                                                     ';
$("#mobileBox").html(c);
$("#mobileTitle").show();
$("#qrCode").hide();
iFourth.bindPinGo();
$("#allcuxiao").show();
iFourth.bindPromo();
iFourth.mainHeight();
$("#fixQrcode span").html("客户端购买");
$("#fixQrcode .b-img").attr("lazy-src",qrinit(a,getEffectivePartNumber(e),2));
$("#fixQrcode").show();
iFourth.showDetailQrcode()
}else{$("#qrCode").hide()
}}else{if(typeof sn.mobilePrice!="undefined"&&sn.mobilePrice!=""){if(e!=""){var b=(parseFloat(sn.promotionPrice)-parseFloat(sn.mobilePrice)).toFixed(2);
if(b>0){$("#mobileTitle label").html("手机专享");
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}var f="";
if(sn.nowTime&&sn.nowTime!=""&&sn.mobileBigEndTime&&sn.mobileBigEndTime!=""&&sn.mobileBigEndTime-sn.nowTime>0){f=(sn.mobileBigEndTime-sn.nowTime)/1000
}var c="<span>优惠价<i>¥</i>"+parseFloat(sn.mobilePrice).toFixed(2)+"</span>                                        ";
c+='<span>可省<em class="save-light">'+b+"</em>元</span>               ";
c+='<span class="ml10">立即扫码抢购</span>                              ';
c+='<span class="qrcode-region">                                    ';
c+='  <em class="ph-qr-icon"></em>                                    ';
c+='  <i class="ng-iconfont down-i"></i>                            ';
c+='  <i class="ng-iconfont up-i"></i>                              ';
c+='  <div class="qrc-wrapper">';
if(f!=""&&f>0){c+='      <span class="ph-cd">                                       ';
c+='          <span class="active-label">距结束</span>                ';
c+='          <span class="ph-cd-show">                               ';
c+='              <em class="d">00</em><span>天</span><em class="h">00</em><span>时</span><em class="m">00</em><span>分</span><em class="s">00.0</em><span>秒</span>';
c+='              <input type="hidden" value="'+f+'"> ';
c+="          </span>                                ";
c+="      </span>                                    "
}c+='      <img lazy-src="'+qrinit(a,getEffectivePartNumber(e),1)+'" class="b-img" onerror="javascript:$(\'#mobileBox .qrc-wrapper\').hide();">';
c+="  </div>                                         ";
c+="</span>                                          "
}$("#mobileBox").html(c);
$("#mobileTitle").show();
iFourth.bindPhoneQrcode();
if(f!=""&&f>0){iFourth.phoneCountdown()
}$("#qrCode").hide();
$("#allcuxiao").show();
iFourth.bindPromo();
iFourth.mainHeight();
$("#fixQrcode span").html(scmInfo.qrCode);
$("#fixQrcode .b-img").attr("lazy-src",qrinit(a,getEffectivePartNumber(e),2));
$("#fixQrcode").show();
iFourth.showDetailQrcode()
}else{$("#qrCode").hide()
}}else{if(typeof sn.newCouponValue!="undefined"&&sn.newCouponValue>0){if(e!=""){$("#mobileTitle label").html("新人专享");
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}var f="";
if(sn.nowTime&&sn.nowTime!=""&&sn.mobileBigEndTime&&sn.mobileBigEndTime!=""&&sn.mobileBigEndTime-sn.nowTime>0){f=(sn.mobileBigEndTime-sn.nowTime)/1000
}var c='<span>新用户客户端专享，新人大礼包¥<em class="save-light">'+sn.newCouponValue+"</em></span>                                        ";
c+='<span class="ml10">立即扫码抢购</span>                              <span class="qrcode-region">                                      <em class="ph-qr-icon"></em>                                      <i class="ng-iconfont down-i"></i>                              <i class="ng-iconfont up-i"></i>                                <div class="qrc-wrapper">      <img lazy-src="'+qrinit(a,getEffectivePartNumber(e),1)+'" class="b-img" onerror="javascript:$(\'#mobileBox .qrc-wrapper\').hide();">  </div>                                         </span>                                          ';
$("#mobileBox").html(c);
$("#mobileTitle").show();
$("#qrCode").hide();
iFourth.bindPinGo();
$("#allcuxiao").show();
iFourth.bindPromo();
iFourth.mainHeight();
$("#fixQrcode span").html(scmInfo.qrCode);
$("#fixQrcode .b-img").attr("lazy-src",qrinit(a,getEffectivePartNumber(e),2));
$("#fixQrcode").show();
iFourth.showDetailQrcode()
}else{$("#qrCode").hide()
}}else{$("#mobileTitle").hide();
if(e!=""){var c='<div class="cli-buy txt">'+scmInfo.qrCode+"</div>";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}$(".qrcode-panel .q-text").addClass("one-row");
$(".qrcode-panel .q-text").html(c);
$("#qrCode").show();
$(".qrcode-panel .b-img").attr("lazy-src",qrinit(a,getEffectivePartNumber(e),1));
$("#fixQrcode span").html("&nbsp;"+scmInfo.qrCode);
$("#fixQrcode .b-img").attr("lazy-src",qrinit(a,getEffectivePartNumber(e),2));
$("#fixQrcode").show();
iFourth.showDetailQrcode();
iFourth.bindProSaoyisao()
}else{$("#qrCode").hide()
}}}}lazyelem.listen();
iFourth.bindPhoneQrcode();
iFourth.mainHeight()
}function qrinit(e,o,a){if(typeof sn.qrCodeBookLongUrl!="undefined"&&sn.isBook){var g="http://code.suning.cn/2uyuGl";
g=encodeURIComponent(g);
var i="";
i+=sn.qrCodeBookLongUrl;
i+="/dzs/landingpage/index_snbook.html?url=http://m.suning.com/product/"+e+"/"+o+".html&";
i+="utm_source=qrcode&utm_medium="+a+"&utm_content=4000&utm_term=02&utm_campaign=&adTypeCode=1013&adId="+o+"_"+e+"&";
i+="channeltype=06&store=4000_01_&haswake=1&downloadurl="+g+"&productType=0";
var f="JPG";
var j="115";
var c="000000";
var p="";
var m="-1";
var b=conversionToString(i);
var l=conversionToString(p);
var k=sn.qrCodeDomainNew+"/qrcode/buildQrCodeUrlPCWap_"+b+"_"+f+"_"+j+"_"+c+"_"+l+"_"+m+".html";
return k
}else{var h="0";
if(isSpecialSale()){h="1"
}else{if(sn.hwgShopFlag){h="2"
}}var i="http://c.m.suning.com/channelwap.htm?appid=1&packnversion=131&channelcode=10061&downflag=1&";
i+="utm_source=qrcode&utm_medium="+a+"&utm_content=4000&utm_term=02&utm_campaign=&adTypeCode=1013&adId="+o+"_"+e+"&";
i+="channeltype=06&store=4000_01_&productType="+h;
var f="JPG";
var j="115";
var c="000000";
var p="";
var m="-1";
var b=conversionToString(i);
var l=conversionToString(p);
var k=sn.qrCodeDomainNew+"/qrcode/buildQrCodeUrlPCWap_"+b+"_"+f+"_"+j+"_"+c+"_"+l+"_"+m+".html";
return k
}}function conversionToString(c){var e="";
if(null!=c&&""!=c.replace(/^\s*|\s*$/,"")){for(var b=0,a=c.length;
b<a;
b++){e+=c.charCodeAt(b).toString(16)+","
}if(null!=e&&""!=e.replace(/^\s*|\s*$/,"")){e=e.substring(0,e.length-1)
}}return e
}function qCodeHide(){$("#qrCode").hide();
$("#mobileTitle").hide();
$("#fixQrcode").hide();
$("#ziti").hide();
iFourth.mainHeight()
}function userCustom(a){$("#shopContent").html(unescape(a));
$("#shopContent img").each(function(){$(this).attr("src",$(this).attr("src2")).removeAttr("src2")
})
}CommonFourPage.FourPage={getFreightInsuranceFlag:function(){sn.yfxian="0";
if(sn.vendorCode!="0000000000"&&!isSpecialSale()&&!sn.hwgShopFlag){if(sn.yunfeixianPC=="0"&&sn.serviceLabel!="1"){var a=sn.solpUrl+"/solp/http/SOLP10301_"+sn.vendorCode+"_P01_01_queryMerchant/pdsyfx.htm";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonpCallback:"pdsyfx",success:function(b){if(b&&b.labelList&&b.labelList.length>0){$("#yfxian").hide();
$("#yfxianService").hide();
$.each(b.labelList,function(c,e){if(e.supplierCode==sn.vendorCode.substring(2,10)&&e.labelCode=="SL00000002"){$("#yfxian").html('<a class="tyfx"  rel="nofollow" href="'+e.docLink+'" target="_blank"><i class="icon"></i>'+e.labelName+'<span class="s-tooltip"><i class="s-t-lion"></i>'+e.labelDesc+'<span class="tri-pointer-up"><i class="inner-tri"></i></span></span>');
$("#yfxianService h3").html(e.labelName);
$("#yfxianService p").html(e.labelDesc+'&nbsp;<a rel="nofollow" href="'+e.docLink+'" target="_blank">详情></a>');
$("#yfxian").show();
$("#yfxianService").show();
$("#snService").show();
$("#snServiceContent").show()
}})
}else{$("#yfxian").hide();
$("#yfxianService").hide()
}},error:function(){$("#yfxian").hide();
$("#yfxianService").hide()
}})
}}else{$("#yfxian").hide();
$("#yfxianService").hide()
}},initReturnOrChange:function(b,f){var c=sn.promotionPrice;
if(sn.cuxiaoType=="7-1"||sn.cuxiaoType=="7-3"){c=""
}var e=sn.zyHwgFlag?"Y":"N";
var a=sn.assssDomain+"/assss-web/noreason/queryNoreasonNew_"+sn.catenIds+"_"+sn.brandCode+"_"+b+"_"+sn.vendorCode+"_"+c+"_"+e+"_"+f+".htm";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonpCallback:f,success:function(){}})
},qualityCSS:function(){if(sn.category1==""||sn.category2==""||sn.brandId==""||sn.modelName==""||sn.category1!="20358"||sn.qualitySwitch=="0"){$("#qualityTitle").hide()
}else{if(typeof gProduct!="undefined"&&gProduct.gors=="0"){$("#qualityTitle").hide()
}else{$.ajax({url:sn.itemDomain+"/pds-web/ajax/qualityCheck_"+sn.partNumber+".html",cache:true,dataType:"json",success:function(a){if(a!=null&&typeof a.qualityFalg!="undefined"&&a.qualityFalg=="Y"){$("#qualityTitle").show()
}else{$("#qualityTitle").hide()
}},error:function(){$("#qualityTitle").hide()
}})
}}},getOverseasFAQ:function(a){if(sn.zyHwgFlag&&sn.overseasFAQSwitch=="0"){if(typeof lazyElems!="undefined"){lazyElems.hwgmarket.url=sn.luaUrl+"/nsHwgAnswerInfo_0000000000_"+sn.passPartNumber+"_"+sn.catenIds+"_"+sn.brandCode+"_CommonFourPage.overseasFAQCallback.html";
lazyElems.hwgmarket.enable=true;
lazyElems.hwgmarket.handle=a;
lazyElems.hwgmarket.type="jsonp";
lazyElems.hwggwxz.url=sn.luaUrl+"/nsHwgAnswerInfo_0000000000_"+sn.passPartNumber+"_"+sn.catenIds+"_"+sn.brandCode+"_CommonFourPage.overseasFAQCallback.html";
lazyElems.hwggwxz.enable=true;
lazyElems.hwggwxz.handle=a;
lazyElems.hwggwxz.type="jsonp"
}else{setTimeout(function(){CommonFourPage.FourPage.getOverseasFAQ(a)
},100)
}}else{CommonFourPage.overseasFAQDefault();
iFourth.hwgDeploy()
}},getPromotiondesc:function(b,c){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"&&typeof sn.promotionPrice!="undefined"){var a=sn.vendorCode;
lazyElems.serviceArea.url=sn.itemDomain+"/pds-web/ajax/itemUniqueInfo_"+b+"_"+a+".html";
lazyElems.serviceArea.enable=true;
lazyElems.serviceArea.handle=c
}else{setTimeout(function(){CommonFourPage.FourPage.getPromotiondesc(b,c)
},100)
}},getAfterSalePic:function(a){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){lazyElems.afterServicePic.url=sn.itemDomain+"/pds-web/ajax/getAfterSale_"+sn.passPartNumber+"_"+sn.vendorCode+"_"+sn.catenIds+"_"+sn.brandId.substring(5)+"_0_"+a+".html";
lazyElems.afterServicePic.enable=true;
lazyElems.afterServicePic.handle=a;
lazyElems.afterServicePic.type="jsonp"
}else{setTimeout(function(){CommonFourPage.FourPage.getAfterSalePic(a)
},100)
}},getAdPicture:function(a){if(scmInfo.cpmAdShowSwitch=="0"){return
}if(!sn.suningJiWuFlag&&!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag||sn.zyHwgFlag||sn.czyHwgFlag){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){lazyElems.sideAdvert.url=sn.cpmAdDomain+"/getCpmDatasGroup?"+sn.cpmAdRequestCode+"&screenType=w";
lazyElems.sideAdvert.enable=true;
lazyElems.sideAdvert.handle=a;
lazyElems.sideAdvert.type="jsonp"
}else{setTimeout(function(){CommonFourPage.FourPage.getAdPicture(a)
},100)
}}},getPhonePromotiondesc:function(b,c){var a=sn.vendorCode;
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemUniqueInfo_"+b+"_"+a+".html",cache:true,dataType:"json",success:function(e){c(e)
},error:function(){}})
},getItemDescInfo:function(b,c){var a=sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getItemdesc_"+b+"_"+a+".html",cache:true,dataType:"json",success:function(e){c(e)
},error:function(){}})
},processItemdescInfo:function(c){sn.promItemDesc="";
sn.promotionDesc="";
var b="";
var a="";
sn.sellPoint="";
$("#promotionDesc").html("").hide();
if(c!=null&&c.length!=0){$.each(c,function(f,g){if(g!=null&&g.descType=="0"){sn.promItemDesc=typeof g.description!="undefined"?g.description:"";
sn.promUrl=typeof g.url!="undefined"?g.url:"";
var e="item_"+sn.ninePartNumber+"_gmp_cuxiaomd";
if(sn.promUrl!=""){sn.promItemDesc='<a target="_blank" href="'+sn.promUrl+'" name="'+e+'" class="btn-prom-point">'+sn.promItemDesc+"</a>"
}}else{if(g!=null&&g.descType=="1"){sn.promotionDesc=typeof g.description!="undefined"?g.description:""
}else{if(g!=null&&g.descType=="3"){b=typeof g.description!="undefined"?g.description:""
}else{if(g!=null&&g.descType=="4"){a=typeof g.description!="undefined"?g.description:""
}}}}});
sn.sellPoint=(a!=""?a:(b!=""?b:""));
if(isNotEmpty(sn.sellPoint)){sn.sellPoint="【"+sn.sellPoint+"】"
}if(typeof sn.phoneFlag!="undefined"&&sn.phoneFlag=="Y"&&sn.vendorCode=="0000000000"&&typeof sn.barePhoneDesc!="undefined"){$("#promotionDesc").html(sn.sellPoint+sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc)
}else{$("#promotionDesc").html(sn.sellPoint+sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc);
if(sn.hwgShopFlag&&sn.promotionDesc!=""){$("#promotionDesc").html("<em class='left-mark'><img src='"+sn.itemDomain+"/pds-web/project/pds/csspc2017/images/mark-left.png'></em>"+sn.sellPoint+sn.promotionDesc+"<em class='right-mark'><img src='"+sn.itemDomain+"/pds-web/project/pds/csspc2017/images/mark-right.png'></em>&nbsp;&nbsp;"+sn.promItemDesc)
}}if($("#promotionDesc").html()!=""){$("#promotionDesc").show()
}else{$("#promotionDesc").hide()
}}},getItemInfoNew:function(a,b){$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfoNew_"+a+"_"+sn.vendorCode+".html",type:"get",cache:true,async:false,dataType:"json",success:function(c){b(c)
}})
},getCommGroup:function(a,b){if(typeof lazyElems!="undefined"){if(a!=""){lazyElems.relClass.url=sn.itemDomain+"/pds-web/ajax/commGroup_"+a+".html";
lazyElems.relClass.enable=true;
lazyElems.relClass.handle=b;
iFourth.win.scroll()
}else{lazyElems.relClass.enable=false;
$("#relClass").html("").hide()
}}else{setTimeout(function(){CommonFourPage.FourPage.getCommGroup(a,b)
},100)
}},onShopSubmitSearch:function(){var i=$("#shopKeyWord");
var f=$("#slowPrice");
var e=$("#highPrice");
var g=$.trim(i.val());
var c=$.trim(f.val());
var a=$.trim(e.val());
var h=/^\d+$/;
if(c!=""&&a!=""){if(!h.test(c)||!h.test(a)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price="+c+"-"+a+"&page=1"
}}else{if(c!=""&&a==""){if(!h.test(c)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price="+c+"-100000000&page=1"
}}else{if(c==""&&a!=""){if(!h.test(a)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price=0-"+a+"&page=1"
}}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&start=0&rows=100"
}}}window.location.href=b
},initPriceSearch:function(){$("#slowPrice").keyup(function a(){var b=document.getElementById("slowPrice").value;
document.getElementById("slowPrice").value=b.replace(/[^0-9]/g,"")
});
$("#highPrice").keyup(function a(){var b=document.getElementById("highPrice").value;
document.getElementById("highPrice").value=b.replace(/[^0-9]/g,"")
})
}};
CommonFourPage.getLiV9=function(f,a){var h="";
try{var c="";
var b="";
if(a==1){c="baoguang_reccviewviewn_1-";
b="item_"+(sn.partNumber).substring(9,18)+"_reccviewviewn_1-"
}else{if(a==2){c="baoguang_reccviewbuyn_1-";
b="item_"+sn.ninePartNumber+"_reccviewbuyn_1-"
}else{if(a==3){c="baoguang_reccbuybuyn_1-";
b="item_"+sn.ninePartNumber+"_reccbuybuyn_1-"
}}}$.each(f.skus,function(e,j){if(e>4){return false
}h+="<li>";
h+='<a target="_blank" name="'+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" href="'+sn.elecProductDomain+"/detail_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+".html#?src="+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'">';
h+='<img class="image" alt="'+j.sugGoodsName+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+j.vendorId+"-"+j.sugGoodsCode+'_1_120x120.jpg" /></a>';
h+='<p class="title"><a target="_blank" id="'+c+(e+1)+"_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" name="'+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+".html#?src="+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'">';
h+=j.sugGoodsName;
h+=j.sugGoodsDes;
h+="</a></p>";
h+='<p class="price"><span><i>&yen; </i>'+j.price+"</span>"+CommonFourPage.Recommend.getPromotionContent(j.promotionType," ")+"</p></li>"
})
}catch(g){}return h
};
CommonFourPage.getShopHotData=function(g){try{var c=g.sugGoods;
var i="";
var h="";
var b="item_"+sn.ninePartNumber+"_recdxln_1-";
var a="baoguang_recdxln_1-";
if(c!=""&&c!=undefined){$.each(c,function(e,j){if(j.resCode!="02"){if(j.sceneId=="10-13"&&j.skus.length>0){var k="";
$.each(j.skus,function(l,m){if(l>4){return false
}k+="<li>";
k+='<a target="_blank" name="'+b+(l+1)+"_p_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+getEffectivePartNumber(m.sugGoodsCode)+".html#?src="+b+(l+1)+"_p_"+m.vendorId+"_"+getEffectivePartNumber(m.sugGoodsCode)+"_"+m.handwork+'" title="'+m.sugGoodsName+'">';
k+='<img class="image" alt="'+m.sugGoodsName+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+m.vendorId+"-"+m.sugGoodsCode+'_1_120x120.jpg" /></a>';
k+='<p class="title"><a target="_blank" id="'+a+(l+1)+"_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" name="'+b+(l+1)+"_c_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+getEffectivePartNumber(m.sugGoodsCode)+".html#?src="+b+(l+1)+"_c_"+m.vendorId+"_"+getEffectivePartNumber(m.sugGoodsCode)+"_"+m.handwork+'">';
k+=m.sugGoodsName;
k+='</a></p><p class="price"><i>&yen;</i>'+m.price+CommonFourPage.Recommend.getPromotionContent(m.promotionType," ")+"</p></li>"
});
if(k!=""){$("#shopHotList").html(k);
$("#shopHot").show()
}else{$("#shopHot").hide()
}}else{$("#shopHot").hide()
}}})
}runAnalyseByClass("baoguang_recdxln")
}catch(f){}};
CommonFourPage.hwgInitCss=function(){$("#ztServ").hide();
$("#zyService").hide();
$(".pro-detail-oversea").show();
$(".after-market").each(function(){$(this).hide()
});
$("#hwgService").show()
};
CommonFourPage.hwgDelivery=function(a){sn.hwgType="";
if(sn.hwgShopFlag&&sn.zyHwgFlag&&sn.itemSource){var b="<span class='w1'>"+sn.itemSource+"品牌</span>";
if(typeof sn.mode!="undefined"&&sn.mode=="01"&&typeof sn.sendCityName!="undefined"&&sn.sendCityName!=""){b+="<span class='line'>|</span><span class='w2'>"+sn.sendCityName+"发货</span>";
$("#bsqProcess").show()
}else{if(typeof sn.mode!="undefined"&&sn.mode!="01"){b+="<span class='line'>|</span><span class='w2'>海外直邮</span>";
$("#hwzyProcess").show()
}}$("#overSeaPlace").html(b);
$("#NationalFlag").show()
}else{if(sn.hwgShopFlag&&sn.itemSource&&!sn.zyHwgFlag){var b="<span class='w1'>"+sn.itemSource+"品牌</span>";
if(sn.ownerPlace&&sn.ownerPlace.indexOf("H")==0){b+="<span class='line'>|</span><span class='w2'>海外直邮</span>";
$("#hwzyProcess").show()
}else{if(sn.ownerPlace&&(sn.ownerPlace.indexOf("B")==0||sn.ownerPlace.indexOf("L")==0)){if(typeof sn.sendCityName!="undefined"&&sn.sendCityName!=""){b+="<span class='line'>|</span><span class='w2'>"+sn.sendCityName+"发货</span>"
}$("#bsqProcess").show()
}}$("#overSeaPlace").html(b);
$("#NationalFlag").show()
}else{$("#NationalFlag").hide()
}}};
CommonFourPage.runInitCFittingReady=function(a,c){CommonFourPage.CFittingPassInfo={};
if(sn.isPreBuy!=2){try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/accessoryRelation_"+sn.vendorCode+"_"+sn.passPartNumber+"_.html",type:"get",async:true,dataType:"json",success:function(e){c(e)
}})
}catch(b){}}};
CommonFourPage.getPassInfo=function(c){var a=$(c).attr("pass");
try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/getShopPassInfo_"+a+"_"+sn.vendorCode+".html",type:"get",async:true,dataType:"json",success:function(f){var g="";
if(f!=null){var e=new fitSub(f.passSubList.length,a,f.charPartNumbers);
fitInfo.push(e);
$.each(f.uniqueSubList,function(k,j){$.each(j,function(i,l){if(i.indexOf("颜色")>=0){g+='<dl pass="'+a+'" class="tiein-tzm-color"><dt>颜色：</dt><dd><ul>';
$.each(l,function(m,o){var p=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+o.partNumber+"_1_30x30.jpg";
g+='<li data-id="'+(m+1)+'" sid="'+i+'" cid="'+o.characterValueId+'" title="'+o.characterValueDisplayName+'"';
if(l.length==1){g+=' class="selected"'
}g+='><a href="javascript:void(0);"><img src="'+p+'" alt="'+o.characterValueDisplayName+'" /><i></i></a></li>'
});
g+="</ul></dd></dl>"
}})
});
$.each(f.uniqueSubList,function(k,j){$.each(j,function(i,l){if(i.indexOf("颜色")<0){g+='<dl pass="'+a+'" class="tiein-tzm-buytype"><dt>'+i+"：</dt><dd><ul>";
$.each(l,function(m,o){g+='<li data-id="'+(m+1)+'" sid="'+i+'" cid="'+o.characterValueId+'" title="'+o.characterValueDisplayName+'"';
if(l.length==1){g+=' class="selected"'
}g+='><a href="javascript:void(0);">'+o.characterValueDisplayName+"<i></i></a></li>"
});
g+="</ul></dd></dl>"
}})
});
c.find(".tiein-list-tzm").attr("pass",a);
c.find(".tiein-list-tzm").html(g);
if(fitSub.gType=="1"){var h=c.find(".tiein-tzm-pop ul li");
$.each(h,function(j,l){var k=$(l).attr("cid");
if(typeof f.charPartNumbers[0][k]=="undefined"){if($(l).parents("dl").is(".tiein-tzm-color")){$(l).removeClass().addClass("c-disabled")
}else{$(l).removeClass().addClass("disabled")
}}});
$(".tiein-tzm-pop .main dl dd li").unbind("click")
}CommonFourPage.processPassInfo(c,f.charPartNumbers)
}else{c.find(".tiein-list-tzm").html("")
}}})
}catch(b){}};
CommonFourPage.processPassInfo=function(e,c){var b=$(e).attr("pass");
var a=sn.lesCityId+sn.lesDistrictId+"01";
$.ajax({url:sn.icpsDomain+"/icps-web/queryCmmdtySource/"+b+"_"+sn.lesCityId+"_"+a+"_1_"+sn.vendorCode+"_PDS_getFitSubState.vhtm",type:"get",async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getFitSubState",success:function(f){CommonFourPage.CFittingPassInfo[b]={saleInfo:f.subCmmdty,partInfo:c[0]};
iFourth.tieInTZM.show(e)
}})
};
CommonFourPage.checkSub=function(b,c){var a=null;
$.each(fitInfo,function(h,g){if(g.passPart==b){a=g.subInfo;
if(g.gType=="2"){if($(c).attr("sid")=="0"){var e=$(c).parents(".tiein-tzm-pop");
var f=$(e).find("ul").eq(1).find("li");
var j=$(c).attr("cid");
$.each(f,function(l,k){var i=$(k).attr("cid");
if(typeof a[0][j+i]=="undefined"){if($(k).parents("dl").is(".tiein-tzm-color")){$(k).removeClass().addClass("c-disabled")
}else{$(k).removeClass().addClass("disabled")
}}})
}}}})
};
CommonFourPage.getSubFitPrice=function(i){var e=$(i).attr("sub");
var g=$(i).attr("pass");
var h=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+e+"_1_100x100.jpg";
var b=sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(e)+".html";
$("li[pass="+g+"] a").eq(0).find("img").attr("src",h);
$("li[pass="+g+"] a").eq(0).attr("href",b);
$("li[pass="+g+"] .title a").attr("href",b);
var f=typeof sn.passPartNumber!="undefined"?sn.curSubPartNumber:sn.partNumber;
var a=sn.lesCityId+sn.lesDistrictId+"01";
var c=sn.icpsDomain+"/icps-web/getAccessoriesPriceForPds/"+e+"_"+sn.vendorCode+"_"+sn.lesCityId+"_"+a+"_1_PC_getCFittingSubFitPrice.vhtm";
$.ajax({url:c,type:"get",async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getCFittingSubFitPrice",success:function(j){if(j!=null&&j.cmmdtys!=null&&j.cmmdtys.length>0){$.each(j.cmmdtys,function(l,q){if(e==q.cmmdtyCode){var k=q.accessoryPrice;
var p=typeof q.discount!="undefined"?q.discount:"0";
var o=(parseFloat(q.price)).toFixed(2);
var m=typeof q.accessoryId!="undefined"&&q.accessoryId!=""?q.accessoryId:"";
if(typeof k!="undefined"&&k!="0"&&k!=""){$(".fitPartNumber[value="+e+"]").siblings("input.high").val(o!=undefined?o:"");
$(".fitPartNumber[value="+e+"]").siblings("input.low").val(k!=undefined?k:"");
$(".fitPartNumber[value="+e+"]").siblings("p.price").html("<span>套餐价：</span><i>&yen;</i>"+k).show();
if(p!="0"){$(".fitPartNumber[value="+e+"]").siblings("span.label").html("已优惠 &yen;"+p).show()
}else{$(".fitPartNumber[value="+e+"]").siblings("span.label").hide()
}if(m!=""){$(".fitPartNumber[value="+e+"]").siblings("input.check").val(m);
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val(m)
}else{$(".fitPartNumber[value="+e+"]").siblings("input.check").val("");
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val("")
}}else{$(".fitPartNumber[value="+e+"]").siblings("p.price").hide();
$(".fitPartNumber[value="+e+"]").siblings("span.label").hide();
$(".fitPartNumber[value="+e+"]").siblings("input.check").val("");
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val("")
}}})
}iFourth.tieInTZM.select(true)
}})
};
CommonFourPage.getCFittingPrice=function(g){var b="";
var a="";
for(var f=0;
f<g.length;
f++){if(f<10){b+=g[f].partNumber;
a+=sn.vendorCode;
if(f!=g.length-1){b+=",";
a+=","
}}}var c=sn.lesCityId+sn.lesDistrictId+"01";
var e=sn.icpsDomain+"/icps-web/getAccessoriesPriceForPds/"+b+"_"+a+"_"+sn.lesCityId+"_"+c+"_1_PC_getCFittingPriceCallback.vhtm";
$.ajax({url:e,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getCFittingPriceCallback",success:function(k){var h=true;
if(k&&k.cmmdtys&&k.cmmdtys.length>0){for(var m=0;
m<k.cmmdtys.length;
m++){var l=k.cmmdtys[m].cmmdtyCode;
var j=k.cmmdtys[m].accessoryPrice;
if(typeof j!="undefined"&&j!=""){$(".fitPartNumber[value="+l+"]").siblings("input.accessoryId").val(typeof k.cmmdtys[m].accessoryId=="undefined"?"":k.cmmdtys[m].accessoryId);
$(".fitPartNumber[value="+l+"]").siblings("input.check").val(typeof k.cmmdtys[m].accessoryId=="undefined"?"":k.cmmdtys[m].accessoryId);
$(".fitPartNumber[value="+l+"]").siblings("p.price").html("<i>&yen;</i>"+parseFloat(k.cmmdtys[m].accessoryPrice).toFixed(2));
$(".fitPartNumber[value="+l+"]").siblings("input.high").val(k.cmmdtys[m].price);
$(".fitPartNumber[value="+l+"]").siblings("input.low").val(k.cmmdtys[m].accessoryPrice);
if(parseFloat(k.cmmdtys[m].discount)>0){$(".fitPartNumber[value="+l+"]").siblings("span.label").html("已优惠&yen;"+parseFloat(k.cmmdtys[m].discount).toFixed(2)).show()
}else{$(".fitPartNumber[value="+l+"]").siblings("span.label").hide()
}$(".fitPartNumber[value="+l+"]").parent().show();
$("li[rel=#J-tieIn]").attr("has-data","true");
$("#listProContent").show();
if(h){h=false;
iFourth.tieInTZM.init(function(i){CommonFourPage.getPassInfo(i)
})
}}else{$(".fitPartNumber[value="+l+"]").parent().remove()
}}}Recommend.dpInitShowCss();
iFourth.tieInRec2.init();
iFourth.win.scroll()
}})
};
CommonFourPage.initCFitting=function(h){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}var a=false;
try{if(h!=""&&h.priceList!=undefined&&h.priceList.length>0){var c='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(h.mainPartNumber)+'.html" target="_blank"><img lazy-src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+h.mainPartNumber+'_1_120x120.jpg" alt="'+sn.itemDisplayName+'"/></a>';
c+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(h.mainPartNumber)+'.html">'+sn.itemDisplayName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i>'+sn.promotionPrice+'</p><i class="plus"></i></div>';
c+='<div class="tiein-nav"><a name="item_'+sn.ninePartNumber+'_dapei_alldp" data-type="0" href="javascript:void(0);" class="current">全部搭配</a>';
c+='</div><div class="tiein-main" id="J-slide-tieIn">';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<div class="tiein-list"><ul id="dapei_slide">';
for(var f=0;
f<h.priceList.length;
f++){if(f<10){var g=h.priceList[f].partNumber;
var b=sn.elecProductDomain+"/"+h.priceList[f].vendorCode+"/"+getEffectivePartNumber(g)+".html";
c+='<li pass="'+g+'" class="" style="display: none;"><a name="item_'+sn.ninePartNumber+'_dapei_tj01p" target="_blank" href="'+b+'">';
if(h.priceList[f].type!="0"){c+='<img alt="'+h.priceList[f].itemDisplayName+'" lazy-src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+h.priceList[f].vendorCode+"-"+h.priceList[f].type+'_1_100x100.jpg" ></a>';
a=true
}else{c+='<img alt="'+h.priceList[f].itemDisplayName+'" lazy-src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+g+'_1_100x100.jpg" ></a>'
}c+='<p class="title"><a name="item_'+sn.ninePartNumber+'_dapei_tj01c" target="_blank" href="'+b+'">'+h.priceList[f].itemDisplayName+"</a></p>";
c+='<p class="price"><i>&yen;</i></p>';
c+='<span class="label" style="display:none;">已优惠&yen;</span>';
if(h.priceList[f].type!="0"){c+='<p pass="'+g+'" class="handle"><a href="javascript:void(0);">选择商品规格</a></p>'
}c+='<i class="plus"></i><input class="fitPartNumber" type="hidden" value="'+g+'"><input class="accessoryId" type="hidden" value=""><input class="high" type="hidden" value=""><input class="low" type="hidden" value=""><input name="item_'+sn.ninePartNumber+'_dapei_tj01p" class="check" value="" type="checkbox">';
if(h.priceList[f].type!="0"){c+='<div class="tiein-list-tzm"></div>'
}c+="</li>"
}}c+="</ul></div></div>";
c+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
c+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">'+sn.promotionPrice+'</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
c+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_dapei_buy02" href="javascript:Cart.addCartPJ();" class="btn-addcart-mini">加入购物车</a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(c);
if(a){$("#J-tieIn").addClass("tiein-tzm")
}else{$("#J-tieIn").removeClass("tiein-tzm")
}$("#pro_jiage").html("<i>&yen</i>"+sn.promotionPrice);
$("#yuanjia").text(sn.promotionPrice);
CommonFourPage.getCFittingPrice(h.priceList);
lazyelem.listen()
}else{$("#J-tieIn").hide();
$("#J-tieIn").html("");
$("li[rel=#J-tieIn]").hide()
}iFourth.win.scroll()
}catch(j){}};
Recommend.initFittingReady=function(a,c){if(sn.isPreBuy!=2){try{$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+a+"&vendorId="+(sn.vendorCode!=""?sn.vendorCode:"0000000000")+"&catGroupId="+sn.catenIds+"&cityId="+sn.cityId+"&sceneIds=8-10&count=12",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){iFourth.win.scroll()
}})
}catch(b){}}};
Recommend.callBackInitFittingReadyNew=function(c){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}try{Recommend.fittingIndexs=[];
Recommend.fitingPartNumber=[];
var b=sn.vendorCode!=""?sn.vendorCode:"0000000000";
var k=c.sugGoods[0];
if(typeof k!="undefined"&&k.resCode!="02"&&k.skus.length>0){for(var f=0;
f<k.skus.length;
f++){k.skus[f].nineCode=paserPartNumber(k.skus[f].sugGoodsCode);
var a=k.skus[f].diffPrice;
var l=k.skus[f].accPrice;
var h=k.skus[f].accPrice;
if(a!=null&&a!=""&&l!=null&&l!=""){h=parseFloat(parseFloat(a)+parseFloat(l)).toFixed(2)
}k.skus[f].highPrice=h;
k.skus[f].eleId="baoguang_rectjdpn_1-"+(f+1)+"_"+k.skus[f].vendorId+"_"+(k.skus[f].sugGoodsCode).substring(9,18)+"_"+k.skus[f].handwork
}k.topUrl=sn.elecProductDomain+"/"+b+"/"+getEffectivePartNumber(sn.partNumber)+".html";
k.topImg=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+b+"-"+sn.partNumber+"_1_120x120.jpg";
k.topName=sn.itemDisplayName;
k.topPrice=sn.promotionPrice;
k.ninePartNumber=sn.ninePartNumber;
k.elecProductDomain=sn.elecProductDomain;
k.vendorCode=b;
k.tmImageDomianDir=sn.newImageDomianDir;
var g=template("tjdp-sr-tmpl",k);
$("#J-tieIn").html(g);
iFourth.tieInRec2.init();
$("li[rel=#J-tieIn]").attr("has-data","true");
$("#listProContent").show();
Recommend.dpInitShowCss();
runAnalyseByClass("baoguang_rectjdpn_1");
lazyelem.listen()
}}catch(j){}};
Recommend.initCatFitting=function(a,c,b){try{if($.inArray(a,Recommend.fittingIndexs)<0){Recommend.fittingIndexs.push(a);
$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+sn.partNumber+"&vendorId="+(sn.vendorCode!=""?sn.vendorCode:"0000000000")+"&catGroupId="+sn.catenIds+"&accCatGroupId="+c+"&cityId="+sn.cityId+"&sceneIds=8-11&count=11",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callBackinitCatFitting",success:function(l){var p=l.sugGoods[0];
if(p!=undefined&&p.resCode!="02"){if(p.skus.length>0){var e="";
var j=sn.categoryId;
for(var m=0;
m<p.skus.length;
m++){var s=p.skus[m].sugGoodsCode;
var k=p.skus[m].vendorId;
if($.inArray(s,Recommend.fitingPartNumber)<0){var h=p.skus[m].diffPrice;
var q=p.skus[m].accPrice;
if(q!=""&&q>0){j=p.skus[m].categoryId;
var o=p.skus[m].accPrice;
if(h!=null&&h!=""&&q!=null&&q!=""){o=parseFloat(parseFloat(h)+parseFloat(q)).toFixed(2)
}Recommend.fitingPartNumber.push(s);
var g=sn.elecProductDomain+"/"+k+"/"+getEffectivePartNumber(s)+".html";
e+='<li class="" data-type="'+a+'" data-id="'+s+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(m+1)+"_p_"+k+"_"+s.substring(9,18)+"_"+p.skus[m].handwork+'" id="baoguang_rectjdpn_'+(a+1)+"-"+(m+1)+"_"+k+"_"+s.substring(9,18)+"_"+p.skus[m].handwork+'" target="_blank" href="'+g+"#?src=item_"+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(m+1)+"_p_"+k+"_"+getEffectivePartNumber(s)+"_"+p.skus[m].handwork+'"><img title="'+p.skus[m].sugGoodsName+'" lazy-src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+k+"-"+s+'_1_100x100.jpg" ></a>';
e+='<p class="title" title="'+p.skus[m].sugGoodsName+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(m+1)+"_c_"+k+"_"+s.substring(9,18)+"_"+p.skus[m].handwork+'" target="_blank" href="'+g+"#?src=item_"+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(m+1)+"_c_"+k+"_"+getEffectivePartNumber(s)+"_"+p.skus[m].handwork+'">'+p.skus[m].sugGoodsName+"</a></p>";
e+='<p class="price"><i>&yen;</i>'+q;
if(p.skus[m].promotionInfo!=""){e+='<label class="com-label ml10">'+p.skus[m].promotionInfo+"</label>"
}e+="</p>";
if(h!=""&&h>0){e+='<span class="label">已优惠&yen;'+h+"</span>"
}if(m<p.skus.length){e+='<i class="plus"></i>'
}e+='<input class="fitPartNumber" type="hidden" value="'+p.skus[m].sugGoodsCode+'">';
e+='<input class="fitVendorCode" type="hidden" value="'+k+'">';
e+='<input class="accessoryId" type="hidden" value="'+p.skus[m].activityId+'">';
e+='<input type="hidden" value="'+o+'" class="high">';
e+='<input type="hidden" value="'+q+'" class="low">';
e+='<input name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(m+1)+"_e_"+k+"_"+s.substring(9,18)+"_"+p.skus[m].handwork+'" class="check"  type="checkbox" value='+p.skus[m].activityId+"></li>"
}}else{var r=iFourth.tieInRec2.list.children("li").filter("'[data-id=\""+s+"\"]'");
if(r.length>0){$(r[0]).attr("data-type",a)
}}}e+='<li class="m-rec-item" data-type="'+a+'"><a target="_blank" name="item_'+sn.ninePartNumber+'_rec_search-more" href="'+scmInfo.searchurl+"/0-"+j+'-0.html" class="btn-m-rec">更多'+b+"</a></li>";
$("#dapei_slide").append(e)
}}iFourth.tieInRec2.showType(a);
iFourth.tieInRec2.update();
lazyelem.listen();
runAnalyseByClass("baoguang_rectjdpn_"+(a+1))
}})
}else{iFourth.tieInRec2.showType(a);
iFourth.tieInRec2.update()
}}catch(f){}};
CommonFourPage.storeService={init:function(){CommonFourPage.storeService.jsdStatus=="0";
iFourth.o2oPop.init(function(){if(sn.isCShop){fillInDistrictInfo();
$("#win_o2o_guideShop").attr("class","current").show();
CommonFourPage.storeService.invokeGuideShop()
}else{fillInDistrictInfo();
$("#win_o2o_spotGoods").attr("class","current").show();
CommonFourPage.storeService.invokeShowSpotGoods()
}})
},jsdShow:function(){if(CommonFourPage.storeService.jsdStatus=="1"){itemService.zySupport()
}},jsdinit:function(){var a=sn.lesCityId+sn.lesDistrictId+"01";
$.ajax({url:sn.jsdUrl+"/getRapidDeliveryInfo/PDS_"+sn.partNumber+"_"+sn.lesCityId+"_"+a+"_jsdCallback.jsonp",type:"get",cache:false,dataType:"jsonp",jsonpCallback:"jsdCallback",success:function(h){if(h&&h[0]&&h[0].existFlag=="1"){var k=h[0].supplierCode;
if(k&&k.length==10){k=k.substring(2,10)
}var e=new Date(parseInt(sn.sendAvalidTime));
var g=(e.getMonth()+1)>9?(e.getMonth()+1):"0"+(e.getMonth()+1);
var c=e.getDate()>9?e.getDate():"0"+e.getDate();
var l=""+e.getFullYear()+g+c;
var f="";
if(scmInfo.solpprescriptionflag=="1"){var b=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();
var i=sn.cmmdtyType;
if(typeof i=="undefined"||i==""){i="DEFU"
}var j=sn.partNumber+"_"+i+"_01_0_"+h[0].plantCode+"_"+h[0].plantCode+"_"+h[0].locatCode+"_"+a+"_"+k+"_"+sn.lesCityId+"_"+l+"_"+b+"_02_00";
f=sn.solpUrl+"/solp/http/SOLP10110_PDS_50_"+j+"_queryB2cAging.htm"
}else{var j=sn.partNumber+"_DEFU_01_0_"+h[0].plantCode+"_"+h[0].plantCode+"_"+h[0].locatCode+"_"+a+"_"+k+"_"+sn.lesCityId+"_"+l;
f=sn.solpUrl+"/solp/http/SOLP10104_PDS_50_"+j+"_queryB2cAging.htm"
}$.ajax({url:f,cache:true,dataType:"jsonp",jsonpCallback:"showB2cAging",success:function(m){if(m&&m.jsdAging&&m.jsdAging!=""){CommonFourPage.storeService.jsdStatus="1";
itemService.zySupport()
}}})
}}})
},judgeIsShowVBuy:function(){if(sn.hasStorage=="Y"&&!isSpecialSale()){if(typeof lazyElems!="undefined"&&$("#shoppingGuide").length>0){sn.selectedDistrictId=typeof sn.selectedDistrictId=="undefined"?"":sn.selectedDistrictId;
lazyElems.shoppingGuide.enable=true;
lazyElems.shoppingGuide.handle=CommonFourPage.storeService.getGuideDoct;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.storeService.judgeIsShowVBuy()
},100)
}}},getGuideDoct:function(){$.ajax({url:sn.moisDomain+"/vp3/storeGuide/"+sn.lesCityId+"-"+sn.lesCityId+""+sn.lesDistrictId+"-"+sn.categoryId+"-"+sn.partNumber+"-getGuideDoctCallback.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getGuideDoctCallback",success:function(a){if(a&&a.code=="0"&&a.data&&a.data.vstore2ndInfos.length>0){var e=a.data;
var c=[];
var b=0;
$.each(e.vstore2ndInfos,function(g,h){if(h.storeCode!=""&&h.storeName!=""&&h.storeAddress!=""){if(h.guideId&&h.guideId!=""&&h.guideName&&h.guideName!=""&&h.guidePhoto&&h.guidePhoto!=""&&h.orderNum&&h.orderNum!=""&&h.starLevel&&h.starLevel!=""){h.guidePhoto=h.guidePhoto.replace("http://","//");
c[b]=h;
b++
}}});
if(b>0){e.vstore2ndInfos=c;
e.moreStoreUrl=sn.vbuyDomain+"/vbuyCity.html?proCode="+sn.provinceCode+"&cityCode="+sn.lesCityId+"&channel=10";
e.vbuyDomain=sn.vbuyDomain;
if(sn.hasStorage=="Y"){if(e.searchStore==1){e.wuhuo="item_"+sn.ninePartNumber+"_O2O_store";
e.wuhuoMore="item_"+sn.ninePartNumber+"_O2O_more-store-phone";
runCustomExpoData("item_"+sn.ninePartNumber+"_O2O_store")
}else{if(e.searchStore==0){e.wuhuo="item_"+sn.ninePartNumber+"_O2O_contact-";
e.wuhuoMore="item_"+sn.ninePartNumber+"_O2O_more-store-electrical";
runCustomExpoData("item_"+sn.ninePartNumber+"_O2O_contact")
}}var f=template("shopingGuidelScriptContent",e);
$("#shoppingGuide").html(f);
$("#shoppingGuide").show();
$("#shopingGuideContent").html("");
$("#shopingGuideContent").hide()
}else{if(e.searchStore==1){e.wuhuo="item_"+sn.ninePartNumber+"_O2O_store-wuhuo";
e.wuhuoMore="item_"+sn.ninePartNumber+"_O2O_more-store-phone-wuhuo";
runCustomExpoData("item_"+sn.ninePartNumber+"_O2O_store-wuhuo")
}else{if(e.searchStore==0){e.wuhuo="item_"+sn.ninePartNumber+"_O2O_contact-wuhuo";
e.wuhuoMore="item_"+sn.ninePartNumber+"_O2O_more-store-electrical-wuhuo";
runCustomExpoData("item_"+sn.ninePartNumber+"_O2O_contact-wuhuo")
}}var f=template("shopingGuideScriptContent",e);
$("#shopingGuideContent").html(f);
$("#shopingGuideContent").show();
$("#shoppingGuide").html("");
$("#shoppingGuide").hide();
Recommend.processNoGoods(CommonFourPage.Recommend.notSaleSugGoods)
}iFourth.win.scroll();
lazyelem.listen();
iFourth.mainHeight()
}else{$("#shopingGuideContent").hide();
$("#shoppingGuide").hide()
}}else{$("#shopingGuideContent").hide();
$("#shoppingGuide").hide()
}}})
},isLineOffHasStorage:function(){var a=15;
$.ajax({url:sn.jsdUrl+"/storeSpecimenSource/001_"+sn.partNumber+"_"+sn.lesCityId+"___"+a+"_getnoGoodsStore.jsonp",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getnoGoodsStore",success:function(h){if(h&&h.length>0&&(h[0].spotshopcode!=""||h[0].modelshopcode!="")){sn.lineOffHasStorage="Y";
var g=h[0].spotshopcode+","+h[0].modelshopcode;
var b=30;
var k=g.split(",");
g="";
var e=0;
for(var c=0;
c<k.length;
c++){if(k[c]!=""&&g.indexOf(k[c])<0){e++;
if(e!=1){g+=","
}g+=k[c];
if(e==b){break
}}}$.ajax({url:sn.moisDomain+"/vp3/guideDoct/"+sn.lesCityId+"-"+sn.categoryId+"-"+sn.lesCityId+""+sn.lesDistrictId+"-"+g+"-CommonFourPage.storeService.vbuyShowCallBackN.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"CommonFourPage.storeService.vbuyShowCallBackN",success:function(i){}})
}else{sn.lineOffHasStorage="N";
if(sn.hasStorage=="Y"){var f=getEffectivePartNumber(sn.partNumber);
$.ajax({url:sn.moisDomain+"/vpurchase2nd/cityVStoreGuide2/"+sn.lesCityId+"-"+f+"-"+sn.categoryId+"-CommonFourPage.storeService.vbuyShowCallBack.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"CommonFourPage.storeService.vbuyShowCallBack",success:function(i){}})
}}}})
},vbuyShowCallBackN:function(b){if(b&&b.code=="0"&&b.data.vstoreList.length>0){var f=b.data.document2.split("#");
var e="";
var a="";
if(sn.hasStorage=="N"){}else{a="vgov-1";
$("#shoppingGuide").removeClass("shopping-guide-old").addClass("shopping-guide")
}e+='<div class="sg-summary">';
e+='<i class="loc-icon"></i><strong>门店现货可售</strong><span>'+b.data.document1+"</span>";
e+='<a href="'+sn.vbuyDomain+"/stores.html?proCode="+sn.provinceCode+"&cityCode="+sn.lesCityId+'&channel=10" target="_blank" class="more-st">更多门店</a>';
e+="</div>";
e+='<div class="sg-l2 clearfix">';
e+='    <ul class="sg-s-point">';
if(f.length>=1){e+='        <li class="s-point"><span class="s-txt"><i></i>'+f[0]+"</span></li>"
}if(f.length>=2){e+='        <li class="s-point"><span class="s-txt"><i></i>'+f[1]+"</span></li>"
}e+="    </ul>";
e+='    <ul class="sg-girls l">';
var c=1;
$.each(b.data.vstoreList,function(g,h){if(c>=5){return false
}if(h.guidePhoto==""||h.guideName==""||h.storeName==""){return true
}e+='       <li class="sg-item l">';
e+='            <div class="girl-info">';
e+='                 <div class="g-portrait">';
e+='                     <img lazy-src="'+h.guidePhoto.replace("http://","//")+'" alt="" />';
e+="                     <i ></i>";
e+="                 </div>";
e+='                <div class="girl-r l">';
e+='                    <div class="store-address ">'+h.storeName+"</div>";
e+="                    <p>"+h.guideName+' <span class="wk-txt">(已接<i class="order-num">'+h.orderNum+"</i>单)</span> </p>";
e+='                    <a target="_blank" name="item_'+sn.ninePartNumber+"_0"+(c+1)+"_"+a+'" href="'+sn.vbuyDomain+"/vbuyshop.html?shopCode="+h.storeCode+"&guideId="+h.guideId+'&channel=10" class="btn-go l">去门店找TA</a>';
e+="                </div>";
e+="            </div>";
e+="         </li>";
c++
});
e+="    </ul>";
e+="</div>";
if(sn.hasStorage=="Y"){$("#shoppingGuide").html("");
$("#shoppingGuide").html(e);
$("#shoppingGuide").show()
}iFourth.win.scroll();
lazyelem.listen()
}},vbuyShowCallBack:function(a){if(a.code=="0"){if(a.data&&a.data.guideCount&&a.data.vstore2ndList&&a.data.guideCount>0&&a.data.vstore2ndList.length>0){$("#shoppingGuide .more-girls .all em").html(a.data.guideCount);
$("#shoppingGuide .more-girls .more-link").attr("href",sn.vbuyDomain+"/vbuyCity.html?proCode="+sn.mdmProvinceId+"&cityCode="+sn.lesCityId+"&channel=10");
var f="";
for(var e=0;
e<a.data.vstore2ndList.length;
e++){if(e>=2){break
}var g=a.data.vstore2ndList[e];
var c=g.guidePhoto.replace("http://","//");
var b=sn.vbuyDomain+"/vbuyshop.html?shopCode="+g.storeCode+"&guideId="+g.guideId+"&channel=10";
f+='<li class="sg-item l">';
f+='<div class="split-line"></div><div class="store-address"><h5 class="store-name"><i></i>'+g.storeName+"</h5></div>";
f+='<div class="girl-info"><div class="g-portrait"><img lazy-src="'+c+'" alt="" class="l"><i></i></div><div class="girl-r l"><p>'+g.guideName;
if(g.saleAge>0){f+='<span class="wk-txt">('+g.saleAge+"年销售经验)</span>"
}f+='</p><span class="star-bg"><i class="star-val" style="overflow: hidden; width: '+g.starLevel*20+'%;"></i></span></div>';
f+='<a name="item_'+sn.ninePartNumber+"_0"+(e+1)+'_vgou" href="'+b+'" class="btn-go l" target="_blank">去门店找TA</a></div></li>'
}$("#shoppingGuide .more-girls a").attr("name","item_"+sn.ninePartNumber+"_03_vgou");
$("#shoppingGuide .sg-girls").html(f);
$("#shoppingGuide").show()
}else{$("#shoppingGuide").hide()
}}else{$("#shoppingGuide").hide()
}iFourth.win.scroll();
lazyelem.listen()
},getGuideShop:function(){if(scmInfo.pcGuideShop=="1"){return
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getGuideShop_"+sn.partNumber+"_"+sn.vendorCode+"_"+sn.mdmCityId+"_.html",type:"get",cache:true,dataType:"json",success:function(a){if((a!=null)&&(a.errCode=="0")){$(".proinfo-o2o").find(".item6").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").hide()
}}})
},invokeGuideShop:function(){$.ajax({url:sn.itemDomain+"/pds-web/ajax/getGuideShop_"+sn.partNumber+"_"+sn.vendorCode+"_"+sn.mdmCityId+"_"+encodeURIComponent(sn.selectedDistrictName)+".html",type:"get",cache:true,dataType:"json",success:function(e){if(e&&e.guideShopList&&e.guideShopList.length!=0){var f=e.guideShopList;
var a="";
for(var b=0;
b<f.length;
b++){$(".o2o-service-main").removeClass("o2o-com-loading");
var c=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
a+=f[b].storeCode+",";
c.attr("class","storeId_"+f[b].storeCode);
$("#o2o-service-clone-storeList-li").parent().append(c)
}if(a!=""){a=a.substring(0,a.length-1)
}fillStoreDetailInfoByCode(a,"很抱歉，该区域暂无门店支持到店试穿服务，正努力开放中。。。");
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-shop").text("很抱歉，该区域暂无门店支持到店试穿服务，正努力开放中。。。");
$("#win_o2o .no-shop").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}})
}};
function fillInDistrictInfo(){$("#o2o_service_clone_li_districtId").siblings("li").remove();
sn.selectedDistrictId="";
sn.selectedDistrictName="";
var a=sn.ipServiceHost+"/districtList-"+sn.mdmCityId+"-districtListCallback.htm";
$.ajax({url:a,type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"districtListCallback",success:function(g){if(g&&g!=""&&g!=null){var e=g.districts;
for(var c=0;
c<e.length;
c++){var f=e[c];
var b=$("#o2o_service_clone_li_districtId").clone().removeAttr("style").removeAttr("id");
b.attr("districtId",f.commerceId);
b.find("a").text(f.name).attr("name","item_"+sn.ninePartNumber+"_mdfw_qu");
$("#o2o_service_clone_li_districtId").parent().append(b);
b.removeClass()
}iFourth.o2oPop.updateFilter()
}$("#o2o_service_clone_li_districtId").removeClass("disable").addClass("current")
}});
$("#o2o_service_ul_districtList li").die().live("click",function(){var b=$("#o2o_service_store_service_ul li.current").attr("id");
if($(this).attr("id")!="o2o_service_clone_li_districtId"){$(this).addClass("current").siblings("li").removeClass("current");
sn.selectedDistrictId=$(this).attr("districtId");
sn.selectedDistrictName=$("#o2o_service_ul_districtList li.current a").html();
if(sn.selectedDistrictName=="全部"){sn.selectedDistrictName=""
}$("#o2o-service-clone-storeList-li").siblings("li").remove();
if(sn.isCShop){CommonFourPage.storeService.invokeGuideShop()
}else{CommonFourPage.storeService.invokeShowSpotGoods()
}}})
}function fillStoreDetailInfoByCode(b,a){$.ajax({url:sn.storeServiceRoot+"pds/ajax/storeinfo-"+b+"-storeDetailInfoCallback.jsonp",type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"storeDetailInfoCallback",success:function(e){for(var c in e){var f=$(".o2o-service-main").find("li.storeId_"+e[c].bwStoreNo);
if(sn.isCShop){f.find("h5").html("<i class='icon'></i><span>"+e[c].storeName+"</span>")
}else{f.find("h5>a").text(e[c].storeName).attr("href",sn.storeServiceRoot+e[c].bwStoreNo+".htm").attr("name","item_"+sn.ninePartNumber+"_mdfw_store")
}f.find("p").text("地址："+e[c].storeAddress).attr("title",e[c].storeAddress);
f.removeAttr("style")
}if($(".o2o-service-main").find("li:visible").length==0){$("#win_o2o .no-shop").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-goods").text(a);
$("#win_o2o .no-goods").show()
}iFourth.o2oPop.updateContent()
}})
}var Renxf=Renxf||{};
Renxf.freenessInfo="";
Renxf.loginFlag="N";
Renxf.hasFlag="N";
Renxf.showRxfProm=false;
Renxf.condition="";
Renxf.needFlag=false;
Renxf.freenessPay=function(){if(typeof sn.footTickCatenIds!="undefined"&&sn.catenIds==sn.footTickCatenIds){return
}if(sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.scodeType!="7"&&sn.renxfSwitch=="1"){Renxf.needFlag=true;
Renxf.cfcFreenessPay()
}else{Renxf.cfcGetProm()
}};
Renxf.turnGrayAtLogin=function(){$("#freenessPay").hide();
iFourth.mainHeight()
};
Renxf.cfcFreenessPay=function(){if(!Renxf.needFlag){return
}Renxf.showRxfProm=false;
var a=sn.vendorCode;
if(sn.vendorCode==""){a="0000000000"
}else{if(isSpecialSale()){a=sn.vendor
}}var b=sn.sncfcDomain+"/sncfc-tps/creditpay/getStagingInfo.do";
var c={version:"1.0.0",instID:"SN-FLP",transTime:getFormatDate(sn.nowTime),serialNumber:uuid().substring(16),merchantID:a,goodID:sn.partNumber,categoryCode:sn.catenIds,brandCode:sn.brandId,goodPrice:accMul(sn.promotionPrice,100)};
$.ajax({url:b,type:"post",async:false,data:c,dataType:"jsonp",jsonpCallback:"newFreenessPay",success:function(e){if(e&&e.responseCode=="0000"){if(e.accountState=="00"){Renxf.condition="0";
if(PriceShow.status!=undefined&&PriceShow.status==1){Renxf.turnGrayAtLogin()
}else{if(Renxf.loginFlag=="Y"){Renxf.buyNowFreenessPay()
}else{Renxf.cfcHaveFreeness(e);
Renxf.showRxfProm=true
}}}else{if(e.accountState=="02"){Renxf.condition="1";
Renxf.cfcHaveFreeness(e);
if(Renxf.loginFlag=="Y"){window.location.href=sn.rxfDomain+"/epps-cpf/accountMgt/assetOverview.do"
}Renxf.showRxfProm=true
}else{Renxf.condition="2";
$("#freenessPay").hide();
$("#rxfTitle").hide();
iFourth.mainHeight()
}}}else{if(e&&e.responseCode=="0005"){Renxf.cfcHaveFreeness(e);
Renxf.showRxfProm=true
}else{if(e&&e.responseCode=="0001"){$("#rxfTitle").hide();
$("#freenessPay").hide();
iFourth.mainHeight()
}}}Renxf.cfcGetProm()
},error:function(){$("#rxfTitle").hide();
$("#freenessPay").hide();
iFourth.mainHeight();
Renxf.cfcGetProm()
}})
};
Renxf.cfcHaveFreeness=function(f){if(typeof f.installmentInfo!="undefined"&&f.installmentInfo!=""&&f.installmentInfo.length>0){var h=f.installmentInfo;
var a="";
for(var b=0;
b<h.length;
b++){var c=h[b].payPeriods;
if(c!=""){c=parseInt(c)
}if(h[b].payAccrual==0){var j=c+"期";
if(c==1){j="1期免息";
a+='<li data-id="'+c+'" class="renxf-item renxf-item-mianxi"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+j+"<br/><i></i></a></li>"
}else{j="¥"+accDiv(h[b].payAmt,100)+"×"+j;
a+='<li data-id="'+c+'" class="renxf-item h-charge-info renxf-hui"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+j+"<i></i></a>";
a+='<i class="hui"></i><div class="rx-charge">0手续费<span class="tri-pointer"><i class="inner-tri"></i></span></div>';
a+="</li>"
}}else{try{var j="¥"+accDiv(h[b].payAmt,100)+"×"+c+"期";
a+='<li data-id="'+c+'" class="renxf-item h-charge-info"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+j+"<i></i></a>";
a+='<div class="rx-charge">含手续费：¥'+accDiv(h[b].payAccrual,100)+"x"+c+'期<span class="tri-pointer"><i class="inner-tri"></i></span></div>';
a+="</li>"
}catch(g){}}}if(a!=""){$("#freenessInfo").html(a);
$("#freenessInfo").show();
$("#freenessPay").show();
iFourth.renxingfu();
Renxf.hasFlag="Y"
}}iFourth.bindRxf();
iFourth.mainHeight();
if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"||PriceShow.isSaleRemind=="Y"){$("#freenessPay").hide()
}};
function getJrPromtion(){if(scmInfo.pcJrPromotionSwitch!="1"||isSpecialSale()||sn.isPreBuy=="1"||sn.isPreBuy=="2"||sn.hwgShopFlag||sn.prdType=="T"){return
}var f=getEffectivePartNumber(sn.partNumber);
var e=accMul(sn.promotionPrice,100);
var c=d("custno")?d("custno"):"";
var g="011001";
if(sn.catenIds=="R9000181"){g="081049"
}var b=sn.vendorCode;
if(sn.vendorCode=="0000000000"||sn.csSwlShopFlag){b="RE5400"
}var a=sn.itemDomain+"/pds-web/ajax/getJrPromotion_PC_"+e+"_"+c+"_"+b+"_"+g+"_"+sn.catenIds+"_"+sn.brandCode+"_"+f+".html";
$.ajax({url:a,type:"get",async:false,dataType:"json",success:function(h){Renxf.freenessInfo=h;
Renxf.cfcProcessPromtion(h)
}})
}Renxf.cfcGetProm=function(){if(Renxf.freenessInfo==""){getJrPromtion()
}else{Renxf.cfcProcessPromtion(Renxf.freenessInfo)
}};
Renxf.cfcProcessPromtion=function(f){if(f.responseCode=="0000"&&f.activityInfoList&&f.activityInfoList.length>0){var a="";
var e="";
for(var b=0;
b<f.activityInfoList.length;
b++){var h=f.activityInfoList[b];
if(h.isPayment=="Y"&&h.isCreditPayment=="Y"&&a==""){a=h
}else{if(h.isPayment=="N"&&h.isCreditPayment=="N"&&e==""){e=h
}}}}if(Renxf.showRxfProm&&a&&a.guideDoc!=""){var g="";
if(a.pcLink){g+='<a href="'+a.pcLink+'">'+a.guideDoc+"</a>"
}else{g+=a.activityMsg
}if(Renxf.condition==""){g+='<a href="javascript:Renxf.cfcLogin();" class="a-detail" name="item_<#if ninePartNumber??>${ninePartNumber}</#if>_gmq_rxfdl">登录查看资格&gt;</a>'
}$("#rxfBox").html(g);
$("#rxfTitle").show();
$("#allcuxiao").show();
iFourth.bindPromo();
iFourth.mainHeight();
iFourth.packageList.setMargTop()
}else{$("#rxfTitle").hide()
}if(e&&e.activityType&&e.guideDoc){if(e.activityType=="1001"){$("#jrPromTitle label").html("支付满减")
}else{if(e.activityType=="1002"){$("#jrPromTitle label").html("支付满折")
}else{if(e.activityType=="1003"){$("#jrPromTitle label").html("随机减")
}}}var c="";
if(e.pcLink){c+=e.guideDoc+'<a class="b ml10 a-detail" href="'+e.pcLink+'" target="_blank" name="item_'+sn.ninePartNumber+'_jrcx_click">查看详情&gt;</a>'
}else{c+=e.guideDoc
}$("#jrPromBox").html(c);
$("#jrPromTitle").show();
$("#allcuxiao").show();
iFourth.bindPromo();
iFourth.mainHeight()
}};
Renxf.cfcLogin=function(){$("body").AjaxLogin({success:function(){Renxf.cfcFreenessPay()
}})
};
CommonFourPage.aftermarket=function(e){$("#amServiceContent").remove();
if(sn.vendorCode=="0000000000"||sn.csSwlShopFlag||isSpecialSale()){$("#zpService").show();
$("#snService").show();
$("#snServiceContent").show()
}else{$("#zpService").hide()
}if(sn.hwgShopFlag){$("#hwgService").show();
$("#snService").show();
$("#snServiceContent").show()
}else{$("#hwgService").hide()
}var c=jQuery.parseJSON(e)==null?e:jQuery.parseJSON(e);
var a="";
var f="";
if(c!=null&&c.itemDetail!=null&&c.itemDetail.service&&c.itemDetail.service!=""){a="<strong>售后内容：</strong>"+c.itemDetail.service
}var g="";
if(sn.vendorCode=="0000000000"||sn.csSwlShopFlag){g+='<div class="after-market-hd" id="suningService"><h4><strong>售后服务</strong></h4></div>';
g+='<div class="after-market-cnt">';
g+='<div class="guarantees">';
g+='<p class="mb20" id="productService">'+a+"</p>";
g+="<p><strong>服务承诺：</strong>苏宁易购向您保证所售商品均为正品行货，与您亲临商场选购的商品享受相同的质量、服务保障，请放心购买；如您购物环节遇到任何问题，请第一时间联系客服人员，我们会尽心为您处理问题。</p>";
g+="<p>网站为您提供的送货、安装、维修等服务可能需收取一定的服务费和远程费，服务中可能涉及的材料费请以服务工程师出示的报价单为准。</p>";
g+="<p>请您收货后与快递人员一起开箱验货，确保产品完好，生产日期认可，如有问题请当场拒收。</p>";
g+="</div>";
g+="</div>";
if(!sn.blackVirFlag){var b=sn.amPdsRelation+"images/return-process.jpg";
if(isSpecialSale()){b=sn.amPdsRelation+"csspc2017/images/TMreturn-process.jpg"
}g+='<div class="after-market-hd">';
g+='<h4><strong>退换货流程</strong></h4><span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
g+="</div>";
g+='<div class="after-market-cnt">';
g+='<div class="return-process"><img width="760" height="140" alt="退换货流程图" lazy-src="'+b+'"></div>';
g+="</div>"
}f+="<dl>";
f+='<dt class="st-title">特别声明：</dt>';
f+='<dd class="st-clause">';
f+="<i></i>"+sn.pcImportantClause;
f+="</dd>";
f+="</dl>";
f+='<div class="border-line"></div>';
f+="<dl>";
f+='<dt class="st-title">价格声明：</dt>';
f+='<dd">';
f+='<p class="st-clause"><i></i>易购价/活动价：易购价/活动价为商品的销售价，是您最终决定是否购买商品的依据。</p>';
f+='<p class="st-clause"><i></i>参考价：商品展示的参考价（或划横线价），可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>';
f+='<p class="st-clause"><i></i>折扣：如无特殊说明，折扣指销售商在参考价或划横线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价、销售商门店挂牌价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>';
f+='<p class="st-clause"><i></i>异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>';
f+="</dd>";
f+="</dl>"
}else{if(sn.swlShopFlag||sn.csSwlShopFlag){g+='<div class="after-market-hd" id="swlSuningService"><h4><strong>售后服务</strong></h4></div>';
g+='	<div class="after-market-cnt">';
g+='		<div class="guarantees">';
g+="		<p>本商家商品保证正品行货，严格按照国家三包政策提供售后服务，因质量问题或实物与描述不符产生的退换货服务运费由本店承担。</p>";
g+="        <p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p>";
g+="	</div>";
g+="</div>";
g+='	<div class="after-market-hd">';
g+='		<h4><strong>退换货流程</strong></h4><span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
g+="	</div>";
g+='<div class="after-market-cnt">';
g+='	<div class="return-process"><img width="760" height="140" alt="退换货流程图" lazy-src="'+sn.amPdsRelation+'images/return-process.jpg"></div>';
g+="</div>";
f+='<dt class="st-title">价格声明：</dt>';
f+='<dd">';
f+='<p class="st-clause"><i></i>易购价/活动价：易购价/活动价为商品的销售价，是您最终决定是否购买商品的依据。</p>';
f+='<p class="st-clause"><i></i>参考价：商品展示的参考价（或划横线价），可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>';
f+='<p class="st-clause"><i></i>折扣：如无特殊说明，折扣指销售商在参考价或划横线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价、销售商门店挂牌价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>';
f+='<p class="st-clause"><i></i>异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>';
f+="</dd>";
f+="</dl>"
}else{g+='<div class="after-market-hd">';
g+="<h4><strong>售后服务</strong></h4>";
g+="</div>";
g+='<div class="after-market-cnt">';
g+='    <div class="guarantees">';
g+='        <p id="cProductService">'+a+"</p>";
g+="    </div>";
g+="</div>";
g+='<div class="after-market-hd">';
g+="    <h4><strong>退货流程</strong></h4>";
g+='    <span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
g+="</div>";
g+='<div class="after-market-cnt">';
g+='    <div class="return-process">';
g+='        <img width="760" height="300" lazy-src="'+sn.amPdsRelation+'images/return-process-cd.jpg" alt="退换货流程图" />';
g+="    </div>";
g+="</div>";
f+="<dl>";
f+='<dt class="st-title">特别声明：</dt>';
f+='<dd class="st-clause">';
f+="<i></i>本站商品信息均来自于苏宁云台商家，其真实性、准确性和合法性由信息发布者（商家）负责。本站不提供任何保证，并不承担任何法律责任。因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保客户收到的货物与网站图片、产地、附件说明完全一致，网站商品的功能参数仅供参考，请以实物为准。若本站没有及时更新，请您谅解！";
f+="</dd>";
f+="</dl>";
f+='<div class="border-line"></div>';
f+="<dl>";
f+='<dt class="st-title">价格声明：</dt>';
f+='<dd">';
f+='<p class="st-clause"><i></i>易购价/活动价：易购价/活动价为商品的销售价，是您最终决定是否购买商品的依据。</p>';
f+='<p class="st-clause"><i></i>参考价：商品展示的参考价（或划横线价），可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>';
f+='<p class="st-clause"><i></i>折扣：如无特殊说明，折扣指销售商在参考价或划横线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价、销售商门店挂牌价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>';
f+='<p class="st-clause"><i></i>异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>';
f+="</dd>";
f+="</dl>"
}}$("#proStatement").html(f);
$("#proStatement").show();
$("#afterService").show();
CommonFourPage.bigPolyaftermarket();
$("#snServiceContent").after("<div id='amServiceContent'>"+g+"</div>");
lazyelem.listen()
};
CommonFourPage.resetSnServiceContent=function(){if(sn.hwgShopFlag||isSpecialSale()){return
}var g='<li class="pms-item"><i class="icon zheng"></i>	<div class="r-info">		<h3>正品保障</h3>		<p>苏宁易购所售商品均为正品行货，购物更放心。<a href="//help.suning.com/page/id-800.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var c='<li class="pms-item"><i class="icon fapiao"></i>	<div class="r-info">		<h3>提供发票</h3>		<p>苏宁易购所售商品可提供机打发票或电子发票，购物更放心。<a href="//help.suning.com/page/channel-23.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var b='<li class="pms-item"><i class="icon songhuo"></i>	<div class="r-info">		<h3>如约送货</h3>		<p>苏宁物流承诺在约定时效前送达商品，收货更放心。<a href="//help.suning.com/page/id-801.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var i='<li class="pms-item"><i class="icon dajian"></i>	<div class="r-info">		<h3>大件商品送货入户</h3>		<p>苏宁物流承诺提供送货上门、搬运到位服务，收货更放心。<a href="//help.suning.com/page/id-801.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var f='<li class="pms-item"><i class="icon anzhuang"></i>	<div class="r-info">		<h3>如约安装</h3>		<p>苏宁售后承诺收货次日上门安装，售后更放心。<a href="//help.suning.com/page/channel-240.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var j='<li class="pms-item"><i class="icon shuangbei"></i>	<div class="r-info">		<h3>安装多收费双倍赔</h3>		<p>苏宁售后承诺安装多收费双倍赔，售后更放心。<a href="//help.suning.com/page/id-478.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var h='<li class="pms-item" id="sevenDayReturn" style="display: none"><i class="icon tui"></i>	<div class="r-info">		<h3>7天无理由</h3>		<p>苏宁易购承诺商品完好可享受无理由退货，服务更放心。<a href="//help.suning.com/page/id-205.htm" target="_blank">详情&gt;</a></p>	</div></li>';
var e='<ul class="snpromise-1"> ';
if(sn.isCShop){e+=g+h
}else{e+='<div class="after-market-send" style="display: none" id="afterSend"><span class="red-dot"></span><span class="text">送至 <span class="text-important" id="serviceCity">'+($("#sncity .pr:not(.dn)").length>0?$("#sncity .pr:not(.dn)").html():"")+$("#sncity .ct").html()+$("#sncity .ds").html()+'</span><span id="serviceSupport">，支持 <span class="text-important">送装一体</span></span><span id="servicePrescription">，23:00前下单，预计<span class="text-important">明天（11月3日）</span>送达</span><span id="serviceShopName"> 由 苏宁销售和发货，供应商提供售后安装服务</span></span></div>';
if(sn.factorySendFlag=="1"){e+=g+c+h
}else{var a="";
if(sn.brandId&&sn.brandId.length>5){a=sn.brandId.substring(0,5)
}if(a&&scmInfo&&scmInfo.luaShbzSyb&&scmInfo.luaShbzSyb.indexOf(a)>=0){e+=g+c+b+i+f+j+h
}else{e+=g+c+b+h
}}}e+="</ul>";
$("#snServiceContent").html(e)
};
CommonFourPage.bigPolyaftermarket=function(){if((sn.cuxiaoType=="4-1"||sn.cuxiaoType=="6-1")&&scmInfo.pcbigPolyInfo=="0"){var a='<div class="after-market-hd"><h4>购物流程</h4></div><div class="after-market-cnt"><div class="buy-process"><img alt="购物流程" lazy-src="'+sn.amPdsRelation+'images/buy-process.jpg" class="err-product"></div></div><div class="after-market-hd"><h4>安全多维的付款方式</h4></div><div class="after-market-cnt"><div class="pay-way"><img alt="购物流程" lazy-src="'+sn.amPdsRelation+'images/pay-way.jpg" class="err-product"></div></div><div class="after-market-hd"><h4>温馨提示</h4></div><div class="after-market-cnt"><div class="jdh-tip"><h3>活动结束标准</h3><p>活动数量全部售完或活动时间结束！</p><h3>温馨提示</h3><p>大聚惠商品均为低价劲爆商品，活动数量有限，需尽快完成下单支付流程。</p></div></div><div class="after-market-hd"><h4>大聚惠价格保护政策说明</h4></div><div class="after-market-cnt"><div class="price-protect-info"><h3>一、申请价格保护的商品与时效限制</h3><p>自2015年4月10日起，凡苏宁易购网站上参加大聚惠活动的商品，自顾客下单成功之日起15日内在同一地区发生降价，顾客通过手机端-我的易购-我的服务-价格保护自助申请，按照苏宁审核时界面展示价格为准。</p> <h3>二、参加“价保申请”的限制条件</h3><p>1、申请“价格保护”的商品仅限同网站商品，比价需与前期购买时送达地址保持一致，且有货状态下申请。</p><p>2、本服务只针对普通个人用户（即开具“普通发票”）消费者，炒货商、经销商、企业客户等不享受“价格保护”。</p><p>3、黄金/季节性商品/海外订购/临期商品/瑕疵品让利等其他特殊商品不享受价格保护。</p><p>4、银行卡分期付款的商品，不享受价保。</p><p>5、套装或商品本身为赠品的商品不支持价保。</p><p>6、商品与订单商品需为同一商家销售的（如遇商户投诉，需顾客自己找对应商家客服，商家直接返现给用户，如客服受理到商家价保时，可为用户联系商家处理此事）。</p> <p>7、经苏宁客服核实，价格差异系因商家价格维护错误且该错误价格没有实际交易成功记录的，不予补差价。</p> <p>8、您需在购买商品购买之日起15天内申请价保；未按期申请的，视为您放弃价保权利。</p><p>9、差价将以自营无敌券形式返还至顾客帐户内，请您在自营无敌券的7天有效期内使用。价保返还后退货的，自营无敌券需要收回；如因自营无敌券已使用等原因导致无法收回的，相应自营无敌券金额将从您的退货款中扣除。</p> <h3>三、补差券额计算方式</h3><p>1、价格保护须将商品购买时的价格“购买价”和申请价保时的价格“对比价”进行比较，且购买价高于对比价。</p><p>2、购买价：</p><p>（1）购买价以您实际支付的金额为准（即不含优惠券、云钻、运费、及任性付优惠），但使用礼品卡结账或本政策返还的自营无敌券，视为您的实际支付金额。</p> <p>（2）支持单个商品的价保，不支持订单维度的价保。</p><p>3、对比价：</p><p>（1）苏宁易购网站渠道销售的以页面公示价格为准。</p><p>（2）“对比价”如是以下活动价格，则不享受价格保护：秒杀、抢购、掌上抢、预约、S码、任性付优惠、银联优惠、满减、领券。</p><p>（3）申请价格保护时商品参加赠品或返券活动的，赠品及券的金额不从对比价中扣减。</p><p>例：某一商品价格100元，并参加满100返10元易券活动,则对比价为100元。</p><p>（4）购买时参加赠品活动的，比价时需有同一赠品活动。</p></div></div>';
$("#djh-after-market-container").html(a).show()
}};
CommonFourPage.resetServiceSupport=function(){if(!sn.isCShop&&sn.hasStorage=="Y"&&!sn.hwgShopFlag){$("#afterSend").show();
if($("#zyService a").length>0&&$("#zyService").css("display")!="none"){var b="";
for(var a=0;
a<$("#zyService a").length;
a++){if(a!=0){b+=" | "
}b+=$($("#zyService a")[a]).html()
}$("#serviceSupport .text-important").html(b);
$("#serviceSupport").show()
}else{$("#serviceSupport").hide()
}if($("#prescription").css("display")!="none"){$("#servicePrescription").html("，"+$("#prescription").html()).show()
}else{$("#servicePrescription").hide()
}$("#serviceShopName").html(" "+$("#shopName").html())
}};
function processShopCategory(b){if(b!=null&&b.ctype=="1"){var c="";
var a=sn.vendorCode;
$.each(b.categoryList,function(f,g){if(g.cgrade=="2"){c+=g.dshow=="0"?'<dl class="on">':"<dl>";
var h=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+g.cid+"_1.html";
var e=sn.point+"_"+getEffectivePartNumber(sn.partNumber)+"_cata_fcata"+((f+1)>10?(f+1):("0"+f));
if(typeof g.curl!="undefined"&&g.curl!=""){c+='<dt class="type-img"><a target="_blank" href="javascript:void(0);" class="folder"></a>';
c+='<a name="'+e+'" target="_blank" href="'+h+'">';
c+='<img src="'+g.curl+'" alt="'+g.cname+'"></a></dt>'
}else{c+='<dt><a href="javascript:void(0);" class="folder"></a>';
c+='<a name="'+e+'" target="_blank" href="'+h+'">'+g.cname+"</a></dt>"
}if(typeof g.curl!="undefined"&&g.curl!=""){c+='<dd class="type-img-detail"><ul class="type-list-img">';
$.each(b.categoryList,function(k,i){if(i.pid==g.pid&&(typeof i.curl!="undefined"&&i.curl!="")&&i.cgrade=="3"){var m=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+i.cid+"_1.html";
var l=sn.point+"_"+sn.partNumber.substring(9)+"_cata_fcata"+((k+1)>10?(k+1):("0"+k));
c+='<li><a name="'+l+'" title="'+i.cname+'" target="_blank" href="'+m+'">';
c+='<img src="'+i.curl+'" alt="'+i.cname+'"></a></li>'
}});
c+="</ul>"
}else{c+="<dd>"
}c+='<ul class="type-list">';
$.each(b.categoryList,function(j,i){if(i.pid==g.pid&&(typeof i.curl=="undefined"||i.curl=="")&&i.cgrade=="3"){var m=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+i.cid+"_1.html";
var l=sn.point+"_"+sn.partNumber.substring(9)+"_cata_fcata"+((j+1)>10?(j+1):("0"+j));
c+='<li><a name="'+l+'" title="'+i.cname+'" target="_blank" href="'+m+'">'+i.cname+"</a></li>"
}});
c+="</ul></dd></dl>"
}});
$(".sfsDIV .type-sort").after(c);
if(c!=""){$(".sfsDIV").attr("id","shopSort").show();
$(".searchDIV").attr("id","").hide();
iFourth.detailSide()
}else{$(".sfsDIV").attr("id","").hide();
$(".searchDIV").attr("id","shopSort").show()
}}else{$(".sfsDIV").attr("id","").hide();
$(".searchDIV").attr("id","shopSort").show()
}}Recommend.saPromotion=function(a){try{if(saCustomDataUtil&&typeof(saCustomDataUtil)=="object"){saCustomDataUtil.sendData("fourpage","activityId",a)
}}catch(b){}};
function getCookieBonus(c){var e=document.cookie.split(";");
for(var b=0;
b<e.length;
b++){var a=e[b].split("=");
if($.trim(a[0])==c){return a[1]
}}return null
}function lingquan(c){var b="";
var a="";
var e="";
if(typeof bd!="undefined"&&bd&&bd!="undefined"){b=bd.rst();
a=bd.ptoken();
e="&detect="+b+"&token="+a
}return c+e
}function getConServationInfo(b,c){var a=sn.itemDomain+"/pds-web/ajax/getConServationInfo_"+b+"_"+sn.lesCityId+".html";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:c,success:function(e){}})
}function conServationInfoBack(a){var b=a.queryStat;
if(b!=undefined){if(b!=""&&b=="01"){$("#jnbtBox").html(scmInfo.jnbtDetail+"<a href='"+scmInfo.jnbtUrl+"' target='_blank' class='b'>  详情</a>");
$("#jnbtTitle").show();
$("#allcuxiao").show()
}}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}}function getDeliveryInfoAble(c,f,g){if(sn.cmmdtyType=="ZSRV"||sn.cmmdtyType=="ZSRW"){var e={};
e.shipOffSet="0";
e.inventoryText="";
e.shipOffSetText="&nbsp;";
if(sn.invStatus=="1"||sn.invStatus=="4"){getDeliveryInfoAging(c)
}f(e)
}else{if(sn.phoneFlag=="Y"&&sn.notSaleFlag){var e={};
e.shipOffSet="-1";
e.inventoryText="";
e.shipOffSetText="";
f(e)
}else{var a=getDeliveryProductInfo(c);
var b=sn.solpUrl+"/solp/http/SOLP10101_PDS_50_"+a+"_queryB2cDeliverable.htm";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:"showB2cDeliverable",success:function(h){var i={};
if(h&&h.successFlag=="Y"&&h.deliverableFlag=="Y"){i.shipOffSet="0";
i.inventoryText="";
i.shipOffSetText="&nbsp;";
if(sn.invStatus=="1"||sn.invStatus=="4"){getDeliveryInfoAging(c)
}}else{i.shipOffSet="-1";
i.inventoryText="";
i.shipOffSetText=""
}f(i)
},error:function(){g();
sendSaMessage("jc-dz-01");
sendSaMessageV2("jc-dz-01")
}})
}}}function getDeliveryInfoAging(c){var a=getDeliveryProductInfo(c,"1");
var b=sn.solpUrl+"/solp/http/SOLP10104_PDS_50_"+a+"_queryB2cAging.htm";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:"showB2cAging",success:function(e){if(e&&e.successFlag=="Y"){getDeliveryText(e)
}},error:function(){}})
}function qualityCheck(){if(sn.category1==""||sn.category2==""||sn.brandId==""||sn.modelName==""||sn.category1!="20358"){return
}var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var b=sn.qualityUrl+"/qualityCheck_"+sn.category1+"_"+sn.category2+"_"+sn.brandId+"_"+sn.modelName+"_"+a+".htm";
$.ajax({url:b,cache:true,async:false,dataType:"jsonp",jsonpCallback:"qCheckCallback",success:function(c){}})
}function qCheckCallback(a){if(a!=null){var b=a.qualityResult;
$("#qualityCheck").attr("src",b);
$("#J-procon-quality").show()
}}function cmsBanner(){var a=sn.cmsBannerUrl+"/api/cp/jsonp/pc_"+sn.category2+".jsonp";
$.ajax({url:a,type:"get",dataType:"jsonp",jsonp:"callback",jsonpCallback:"cmsCallback",error:function(b,e,c){},success:function(b){if(b.data&&b.data!=""&&b.data.length>0){var e=b.data[0];
if(e.tag&&typeof e.tag[0]!="undefined"&&e.tag[0].linkUrl!="undefined"&&e.tag[0].picUrl!="undefined"&&e.tag[0].linkUrl!=""&&e.tag[0].picUrl!=""){var c='<a name="item_'+sn.ninePartNumber+'_dcgg_pro" target="_blank"  href="'+e.tag[0].linkUrl+'"><img  src="'+e.tag[0].picUrl+'"></a>';
$("#cmsActivityBar").html(c);
$("#cmsActivityBar").show()
}else{$("#cmsActivityBar").hide()
}}else{$("#cmsActivityBar").hide()
}}})
}function processIcpsPromInfo(g){$("#purchaseBox").siblings(".promotion-content").remove();
$("#allcuxiao").find("ul li:not(#govTitle,#jrPromTitle) p:not(#pointBox,#yunzuan,#rxfBox,#scodeBox,#yfbBox,#rxfBox)").html("");
$("#allcuxiao").find("ul li:not(#pointTitle,#rxfTitle,#scodeTitle,#yfbTitle,#rxfTitle,#govTitle,#jrPromTitle)").hide();
$("#allcuxiao").hide();
if(($("#rxfBox").length>0&&$("#rxfBox").html()!="")||($("#scodeBox").length>0&&$("#scodeBox").html()!="")||$("#mobileTitle").css("display")=="block"||$("#yfbTitle").css("display")!="none"||$("#govTitle").css("display")!="none"||($("#jrPromTitle").length>0&&$("#jrPromTitle").css("display")!="none")){$("#allcuxiao").show()
}$("#freeCouponBox").hide();
$("#freeCouponTitle").hide();
var b=[];
var e=[];
couponTakeList=[];
sn.giftInfo="";
var f=0;
var h=g.promotions;
var a="";
if(scmInfo.minStartSaleNumSwitch=="1"){var i={limitType:g.limitType,limitCount:g.limitCount,limitLabel:g.limitLabel,startCount:g.startCount}
}else{var i={limitType:g.limitType,limitCount:g.limitCount,limitLabel:g.limitLabel}
}var c=false;
icpsItemlimit(i);
if(h!=null&&h.length>0&&sn.promotionPrice!=""){$.each(h,function(l,o){if(o.activityType=="1"){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}var k="";
if(o.activityLink!=""){if(o.activityLink.indexOf("//")=="-1"){o.activityLink="//"+o.activityLink
}k+=o.activityDesc+" <a href='"+o.activityLink+"' target='_blank' class='b ml10' name='item_"+sn.ninePartNumber+"_promotion_manjian'>活动详情&gt;</a>"
}else{k+=o.activityDesc;
if(sn.mjSwitch=="0"){k+="<a href='"+sn.tssUrl+"/ticket/tss/pc/"+o.activityId+".html' target='_blank' class='b ml10' name='item_"+sn.ninePartNumber+"_promotion_manjian'>更多满减商品&gt;</a>"
}}if($("#voucherBox").html()!=""){$("#voucherBox").after("<p class='promotion-content'>"+k+"</p>")
}else{$("#voucherBox").html(k)
}$("#voucherTitle").css("display","block");
$("#allcuxiao").show()
}else{if(o.activityType=="2"&&!sn.suningJiWuFlag){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}var k="";
if(o.activityLink!=""){k+=" <a href='"+o.activityLink+"' target='_blank' class='b'>"+o.activityDesc+"&gt;</a>"
}else{k+=o.activityDesc
}if($("#newcouponBox").html()!=""){$("#newcouponBox").after("<p class='promotion-content'>"+k+"</p>")
}else{$("#newcouponBox").html(k)
}$("#couponTitle").css("display","none");
$("#couponBox").siblings(".promotion-content").remove();
$("#couponBox").html("");
$("#newcouponTitle").css("display","block");
$("#allcuxiao").show()
}else{if(o.activityType=="3"){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}var j=o.gifts;
if(j!=null&&j.length>0){var m=j.length>5?5:j.length;
var p="";
for(var l=0;
l<m;
l++){if(j[l].giftType=="2"&&yanbaoMap[j[l].giftCode]){j[l].giftName=yanbaoMap[j[l].giftCode].typeName+yanbaoMap[j[l].giftCode].timeLimit+yanbaoMap[j[l].giftCode].limitUnit;
j[l].giftPrice=yanbaoMap[j[l].giftCode].warrantyPrice
}else{if(l==m-1){p+=j[l].giftCode
}else{p+=j[l].giftCode+"-"
}}}getGiftName(p,j)
}}else{if(o.activityType=="4"&&!sn.suningJiWuFlag){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}if(sn.vendorCode!="0000000000"){if(sn.prdType=="S"&&sn.passPartNumber==sn.partNumber){$("#freightfreeTitle").show();
$("#freightfreeBox").html(o.activityDesc);
$("#allcuxiao").show();
if(o.activityLink!=""&&o.activityLink=="1"){sn.cFreightFreeFlag=true;
$("#yunfei").html("");
$("#yunfei").hide()
}}else{sn.promFreight=o.activityDesc;
itemService.setFreeFreight()
}}}else{if(o.activityType=="5"&&!sn.suningJiWuFlag){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}o.activityLink=sn.tssUrl+"/ticket/tss/pc/"+o.activityId+".html";
$("#isXYuanNItemBox").html(o.activityDesc+' <a class="b ml10 a-detail" target="_blank" href="'+o.activityLink+'">查看详情&gt;</a>');
$("#isXYuanNItemTitle").css("display","block");
$("#allcuxiao").show()
}else{if(o.activityType=="6"&&!sn.suningJiWuFlag){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}var k="";
if(o.activityLink!=""){k+=o.activityDesc+" <a href='"+o.activityLink+"' target='_blank' class='b ml10'>活动详情&gt;</a>"
}else{k+=o.activityDesc
}$("#taogouyhBox").html(k);
$("#taogouyhTitle").css("display","block");
$("#lhvoucherTitle").css("display","none");
$("#voucherTitle").css("display","none");
$("#allcuxiao").show()
}else{if(o.activityType=="7"){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}if(f<9){f++;
b.push(o)
}}else{if(o.activityType=="23"){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}var k="";
if(o.activityLink!=""){k+=" <a href='"+o.activityLink+"' target='_blank' class='b'>"+o.activityDesc+"</a>"
}else{k+=o.activityDesc
}if($("#purchaseBox").html()!=""){$("#purchaseBox").after("<p class='promotion-content'>"+k+"</p>")
}else{$("#purchaseBox").html(k)
}$("#purchaseTitle").css("display","block");
$("#allcuxiao").show()
}else{if(sn.pcNewCouponsFlag=="0"&&o.activityType=="1060"&&!sn.suningJiWuFlag){if(o.couponValue!=""){sn.newCouponValue+=parseFloat(o.couponValue)
}}else{if(o.activityType=="1030"&&!sn.suningJiWuFlag){a+=o.activityId+"#";
e.push(o)
}else{if(o.activityType=="24"&&!sn.suningJiWuFlag){if(typeof o.activityId!=""&&o.activityId!=""){a+=o.activityId+"#"
}if(scmInfo&&scmInfo.noProductPackage=="0"){getNocodePackageName(o)
}}else{if(o.activityType=="25"&&!sn.suningJiWuFlag){if(sn.zyHwgFlag){c=true
}}}}}}}}}}}}}});
if(sn.yzCoupon=="0"&&e.length>0){processFreeAndYzCouponInfo(b,e);
$("#freeCouponBox").show()
}else{if(b.length>0){processFreeCouponInfo(b);
$("#freeCouponBox").show()
}else{if(sn.scrapeCoupon=="0"){$("#getCoupon").html("刮券");
$("#freeCouponTitle").show()
}}}}else{if(sn.scrapeCoupon=="0"){$("#getCoupon").html("刮券");
$("#freeCouponTitle").show()
}}if(sn.zyHwgFlag){if(c){$("#hwgTax").html('<em class="ch">本商品税费由苏宁海外购承担</em>');
$("#hwgPricsSn").show()
}else{if(sn.hwgTax&&sn.hwgTax>0){$("#hwgPricsSn .lable-bs").hide();
$("#hwgPricsSn .i-triangle").hide();
$("#hwgPricsSn").show()
}}}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}if(a!=""){Recommend.saPromotion(a.substring(0,a.length-1))
}if(typeof sn.newCouponValue!="undefined"&&sn.newCouponValue>0){processQcode()
}}function getNocodePackageName(c){var e="";
if(c&&c.childCmmmdtys&&c.childCmmmdtys.length>0){var b=c.childCmmmdtys;
for(var a=0;
a<b.length;
a++){if(b[a]&&b[a].cmmdtyCode&&a<20){if(e!=""){e+="-"
}e+=b[a].cmmdtyCode
}}}if(e==""){return
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfoListJsonp_"+e+"_.html",type:"get",async:false,dataType:"json",success:function(f){processNocodePackage(c,f)
}})
}function processNocodePackage(c,g){var b={};
if(g&&g.itemInfoList&&g.itemInfoList.length>0){$.each(g.itemInfoList,function(q,i){b[i.partnumber]=i
})
}if(c&&c.childCmmmdtys&&c.childCmmmdtys.length>0){var p=c.childCmmmdtys;
var k='<dt><span>加购立减</span></dt><dd><ul data-acId ="'+c.activityId+'" class="clearfix">';
var j=[];
for(var h=0;
h<p.length;
h++){if(!j[p[h].cmmdtyType]){j[p[h].cmmdtyType]=[]
}var m=b[p[h].cmmdtyCode];
if(m){var o=typeof m.itemDisplayName=="undefined"?m.itemName:m.itemDisplayName;
if(o){p[h].itemName=o;
j[p[h].cmmdtyType].push(p[h])
}}}var e=j[2];
j[2]=j[1];
j[1]=e;
for(key in j){var f=j[key];
if(f&&f.length>0){var l="";
switch(key){case"1":l="pp体育会员";
break;
case"2":l="pp视频会员";
break;
case"3":l="爱奇艺会员";
break
}k+='<li class="mulit" data-id="'+f[0].cmmdtyType+'"><a href="javascript:void(0);"  class="mulita"><span>'+l+'&nbsp;&nbsp;<span class="promote-lebel">硬件立减'+f[0].otherPayMoney+'元</span></span><em class="ng-iconfont i-down">&#xe62e;</em><em class="ng-iconfont i-up">&#xe63a;</em><i class="flag"></i></a><div class="child-list" style="display: none;">';
for(var h=0;
h<f.length;
h++){var a=f[h].itemName;
if(a.length>25){a=a.substring(0,25)
}k+='<a href="javascript:;"  data-id ="'+f[h].cmmdtyCode+'" title="'+f[h].itemName+'" data-flag="'+h+'" data-name="'+a+"&nbsp;&nbsp;¥"+f[h].snPrice+"&nbsp;&nbsp;<span class=&quot;promote-lebel&quot;>已减"+f[h].otherPayMoney+'元</span>" data-name2="'+a+"&nbsp;&nbsp;¥"+f[h].snPrice+"&nbsp;&nbsp;<span class=&quot;promote-lebel&quot;>立减"+f[h].otherPayMoney+'元</span>"><label><input type="radio" class="radio" name="'+f[h].cmmdtyType+'">'+a+"&nbsp;&nbsp;¥"+f[h].snPrice+"&nbsp;&nbsp;&nbsp;硬件立减"+f[h].otherPayMoney+"元</label></a>"
}k+="</div></li>"
}}k+='</ul><div class="follow-box"><i class="ng-iconfont fold-icon">&#xe63a;</i><i class="ng-iconfont extend-icon" title="更多加购立减">&#xe62e;</i> </div></dd>';
$("#nocodePackage").html(k);
if($("#nocodePackage li").length>0){$("#nocodePackage").show();
iFourth.attrChoose();
iFourth.mulitChoiceNcp();
iFourth.initNcp();
iFourth.mainHeight()
}}}function getGiftName(c,b){if(c!=null&&c!=""){var a=sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemGiftNameJsonp_"+c+"_"+a+"_.html",type:"get",async:false,dataType:"json",success:function(e){$.each(b,function(g,k){if(k.giftType!="2"){if(e!=null&&typeof e.itemInfoList!="undefined"){if(e.itemInfoList!=null&&e.itemInfoList.length>0){var f=e.itemInfoList;
for(var h=0;
h<f.length;
h++){if(f[h].partnumber&&k.giftCode==f[h].partnumber){b[g].giftName=typeof f[h].itemDisplayName=="undefined"?f[h].itemName:f[h].itemDisplayName;
return
}}}}}});
processGiftContent(b)
}})
}else{processGiftContent(b)
}}function processGiftContent(a){if(a!=null&&a.length>0){var g=a.length>5?5:a.length;
var j="<ul>";
var f=0;
for(var c=0;
c<g;
c++){if(a[c].remainQty!=0&&a[c].invStatus=="0"){f=1;
var e="";
if(a[c].giftPrice!=undefined&&a[c].giftPrice!=""){e="&yen;"+parseFloat(a[c].giftPrice).toFixed(2)
}j+='<li class="zp-item">';
if(a[c].giftType=="1"&&a[c].giftCode!=""&&a[c].giftCode.length==18){var h=getEffectivePartNumber(a[c].giftCode);
j+='<a href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+h+'.html" target="_blank" name="item_'+sn.ninePartNumber+"_cuxiao_zengpin"+(c+1)+'">'
}else{j+='<a href="javascript:;" target="_blank" name="item_'+sn.ninePartNumber+"_cuxiao_zengpin"+(c+1)+'">'
}j+='<img class="s-img" name="item_gift_hover" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+a[c].giftCode+'_1_30x30.jpg" alt="'+a[c].giftName+'"  src-large="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+a[c].giftCode+'_1_200x200.jpg" data-price='+e+">";
j+='<div class="zp-info">*'+a[c].onceQty+"</div>";
j+="</a>";
j+="</li>";
if(sn.giftInfo==""){sn.giftInfo=[]
}var b={cmmdtyCode:a[c].giftCode,cmmdtyQty:a[c].onceQty};
sn.giftInfo.push(b)
}}j+="</ul>";
j+="<div class='giftBox-zwjz'>赠完即止</div>";
if(f==0){$("#giftTitle").hide()
}else{$("#giftBox").html(j);
iFourth.bindZenPin();
$("#giftTitle").css("display","block");
$("#allcuxiao").show()
}}}function addCartFourPage(k,m,j,b,g,i,l,a,e){var f=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){f="0000000000"
}var h={cmmdtyCode:m,shopCode:f,activityType:j,cmmdtyQty:k};
if($("#shangmenService").attr("class")=="selected"){h.carShopSerWay="1";
h.carShopCode=""
}else{if($("#daodianService").attr("class")=="selected"){h.carShopSerWay="2";
h.carShopCode=autoParts.storeNumber
}}if(sn.brandFlag=="1"&&typeof sn.flagshipid!="undefined"&&sn.flagshipid!=""){h.supplierCode=sn.flagshipid
}if(typeof b!="undefined"&&b!=""){h.activityId=b
}if(sn.hwgShopFlag){h.overSeasFlag="927HWG"
}if(typeof g!="undefined"&&g.length>0){h.cmmdtyWarrantyVOList=g
}if(typeof i!="undefined"&&i.length>1){h.childCmmdtyVOList=i
}if(typeof i!="undefined"&&i.length==1){h.activityType="01"
}if(typeof e!="undefined"&&e.length>0){h.serveCodeItems=e
}if($("#selectStore .sh-item").hasClass("current")){h.serviceStoreCode=$("#selectStore").attr("data-id");
h.serviceStoreName=$("#selectStore a").html();
if(o2oItem.priceType=="01"){h.commodityType="02"
}else{if(o2oItem.priceType=="02"){h.commodityType="03"
}}}else{if(sn.o2oFlag){h.commodityType="01"
}}var o={provinceCode:sn.provinceCode,cityCode:sn.lesCityId,districtCode:sn.lesCityId+sn.lesDistrictId,cmmdtyVOList:[]};
o.cmmdtyVOList.push(h);
if(a!=""&&a.length>0){$.each(a,function(p,q){o.cmmdtyVOList.push(q)
})
}if(typeof autoParts!="undefined"&&autoParts.mountType!=""){var c={cmmdtyCode:autoParts.partNumber,shopCode:autoParts.vendorCode,activityType:"01",cmmdtyQty:k,carShopSerWay:autoParts.mountType,carShopCode:autoParts.storeNumber};
o.cmmdtyVOList.push(c)
}cart.normal.addCart(o,l,sn.transactionHTTPS)
}function buyNowFourPage(k,m,j,a,h,f,i,o,c,l){var e=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){e="0000000000"
}var g={cmmdtyCode:m,shopCode:e,activityType:j,cmmdtyQty:k};
if($("#shangmenService").attr("class")=="selected"){g.carShopSerWay="1";
g.carShopCode=""
}else{if($("#daodianService").attr("class")=="selected"){g.carShopSerWay="2";
g.carShopCode=autoParts.storeNumber
}}if(sn.brandFlag=="1"&&typeof sn.flagshipid!="undefined"&&sn.flagshipid!=""){g.supplierCode=sn.flagshipid
}if(typeof a!="undefined"&&a!=""){g.activityId=a
}if(j=="02"&&PriceShow.serviceType=="10"){g.subActivityType="10"
}if(j=="23"&&sn.priceType=="4"){g.subActivityType=PriceShow.serviceType
}if(j=="07"&&sn.cuxiaoType=="7-4"){j="17"
}if(sn.hwgShopFlag){g.overSeasFlag="927HWG"
}if(typeof f!="undefined"&&f.length>0){g.cmmdtyWarrantyVOList=f
}if(typeof i!="undefined"&&i.length>0){g.childCmmdtyVOList=i
}if(typeof o!="undefined"&&o.length>0){g.giftVOList=o
}if(typeof c!="undefined"&&c.length>0){g.serveCodeItems=c
}if($("#selectStore .sh-item").hasClass("current")){g.serviceStoreCode=$("#selectStore").attr("data-id");
g.serviceStoreName=$("#selectStore a").html();
if(o2oItem.priceType=="01"){g.commodityType="02"
}else{if(o2oItem.priceType=="02"){g.commodityType="03"
}}}else{if(sn.o2oFlag){g.commodityType="01"
}}var p={provinceCode:sn.provinceCode,cityCode:sn.lesCityId,districtCode:sn.lesCityId+sn.lesDistrictId,cmmdtyVOList:[]};
if(typeof h!="undefined"&&h!=""){p.payPeriods=h
}p.cmmdtyVOList.push(g);
if(typeof autoParts!="undefined"&&autoParts.mountType!=""){var b={cmmdtyCode:autoParts.partNumber,shopCode:autoParts.vendorCode,activityType:"01",cmmdtyQty:k,carShopSerWay:autoParts.mountType,carShopCode:autoParts.storeNumber};
p.cmmdtyVOList.push(b)
}$("body").AjaxLogin({success:function(){cart.normal.buyNow(p,l,sn.transactionHTTPS)
}})
}function activityTimeFormat(h){var e=new Date(parseInt(h));
var f=e.getFullYear();
var g=(e.getMonth()+1)>9?(e.getMonth()+1):"0"+(e.getMonth()+1);
var b=e.getDate()>9?e.getDate():"0"+e.getDate();
var a=e.getHours()>9?e.getHours():"0"+e.getHours();
var i=e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes();
var c=e.getSeconds()>9?e.getSeconds():"0"+e.getSeconds();
return f+"-"+g+"-"+b+" "+a+":"+i+":"+c
}function remindStatus(){if(sn.cuxiaoType=="4-1"||sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-4"||sn.cuxiaoType=="4-7"||sn.cuxiaoType=="4-9"||sn.cuxiaoType=="4-10"){return true
}else{return false
}}CommonFourPage.credentialCSS=function(c,b){sn.qualificationList="0";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
$.ajax({url:sn.itemDomain+"/pds-web/ajax/getSpecialQual_"+a+"_"+sn.catenIds+".html",cache:true,dataType:"json",success:function(f){if(f&&f.qualificationList&&typeof f.qualificationList!="undefined"&&f.qualificationList.length>0){$("#J-procon-credential").html("");
$("#productCommTitle").hide();
$("#credential").show();
for(var e=0;
e<f.qualificationList.length;
e++){$("#J-procon-credential").append("<img lazy-src='"+f.qualificationList[e].qualificationCertiHref+"' width='800'>")
}sn.qualificationList=="1"
}else{$("#credential").hide()
}if(typeof b!="undefined"&&b!=""&&sn.qualificationList!="1"){c(b)
}else{if(!b){c()
}else{$(".proinfo-deliver").html("");
$(".mainbtns.clearfix").hide();
$("#productCommTitle").hide();
$("#productConsultation").hide();
$("#consult").hide();
$("#appraise").hide()
}}},error:function(){$("#credential").hide();
if(typeof b!="undefined"&&b!=""&&sn.qualificationList!="1"){c(b)
}else{if(!b){c()
}}}})
};
CommonFourPage.attachList=sn.attachList;
CommonFourPage.getpartNumberPackageInfo=function getpartNumberPackageInfo(){if(typeof $("#curPartNumber").attr("value")!="undefined"&&$("#curPartNumber").attr("value")!=sn.partNumber){sn.attachList="";
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfoListJsonp_"+sn.partNumber+"_.html",type:"get",async:false,dataType:"json",success:function(c){if(c!=null&&typeof c.itemInfoList!="undefined"&&c.itemInfoList.length>0){if(typeof c.itemInfoList[0].attachedTypeList!="undefined"&&c.itemInfoList[0].attachedTypeList.length>0){for(var b=0;
b<c.itemInfoList[0].attachedTypeList.length;
b++){var a=c.itemInfoList[0].attachedTypeList[b];
if(typeof a.attachedType!="undefined"&&a.attachedType=="1"){sn.attachList=sn.attachList!=""?"-"+a.attachedValue:a.attachedValue
}}}}CommonFourPage.choosePackageMode("choosePackageCallback")
}})
}else{sn.attachList=CommonFourPage.attachList;
CommonFourPage.choosePackageMode("choosePackageCallback")
}};
CommonFourPage.packageHtml="";
CommonFourPage.virPackageHtml="";
CommonFourPage.choosePackageMode=function(k){$("#packageChoice").remove();
$("#virPackageChoice").remove();
CommonFourPage.packageHtml="";
CommonFourPage.virPackageHtml="";
if(typeof sn.attachList!="undefined"&&sn.attachList!=""){var f=sn.attachList.split("-");
var a=f.length<=20?f.length:20;
var c="";
var j=sn.vendorCode==""?"0000000000":sn.vendorCode;
var g="";
for(var h=0;
h<a;
h++){c+=f[h];
g+=j;
if(h!=a-1){c+=",";
g+=","
}}var e=sn.lesCityId+sn.lesDistrictId+"01";
var b=sn.vendorCode==""?"0000000000":sn.vendorCode;
$.ajax({url:sn.icpsDomain+"/icps-web/getCombinePriceFourPage/"+c+"_"+sn.lesCityId+"_"+e+"_"+g+"_1_"+k+".jsonp",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:k,success:function(o){var l=new Array();
if(o!=""&&o.length>0){for(var m=0;
m<o.length;
m++){if(o[m].cmmdtyCode!=""&&(o[m].invStatus=="1"||o[m].invStatus=="4"||o[m].priceType.substring(0,2)=="12"||o[m].priceType.substring(0,2)=="13")){l.push(o[m])
}}}if(l.length>0){CommonFourPage.choosePackageShowList(l,0)
}}})
}};
CommonFourPage.choosePackageShowList=function(a,b){if(b<a.length){$.ajax({url:sn.itemDomain+"/pds-web/ajax/getPackageShowList_"+a[b].cmmdtyCode+"_"+sn.vendorCode+"_choosePackageShowList.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"choosePackageShowList",success:function(g){if(g&&g.productList&&g.productList.length>0){var l="";
var o="";
var e=true;
var p=sn.itemDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(a[b].cmmdtyCode)+".html";
var j="<li class='pack-item' saleFlag='0' packagetype='"+g.bundelType+"' packagepartnumber='"+a[b].cmmdtyCode+"' name='item_"+a[b].cmmdtyCode+"_basic_gdtc-"+(b+1)+"-hover'><a href='"+p+"' title='"+g.cmmdtyTitle+"' class='item-a' target='_blank' name='item_"+a[b].cmmdtyCode+"_basic_gdtc-"+(b+1)+"'>";
for(var h=0;
h<g.productList.length;
h++){var k=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+g.productList[h].subPartNumber+"_1_60x60.jpg";
if(e){if(g.productList.length==1){j+="<img src='"+k+"' alt=''/><span class='p-num'><em>*</em>"+g.productList[h].count+"</span>"
}else{if(h>2){j+="<span class='ellipsis'>...</span>";
e=false
}else{if(h==g.productList.length-1){j+="<img src='"+k+"' alt=''/>"
}else{j+="<img src='"+k+"' alt='' /><span class='mini-plus'>+</span>"
}}}}var f=sn.itemDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(g.productList[h].subPartNumber)+".html";
if(g.bundelType=="2"&&g.productList[h].seq=="2"){l=g.productList[h].subPartNumber;
f="javascript:void(0);"
}var k=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+g.productList[h].subPartNumber+"_1_200x200.jpg";
o+="<li class='pk-h-item' subpartnumber='"+g.productList[h].subPartNumber+"' subcount='"+g.productList[h].count+"' seq='"+g.productList[h].seq+"' weight='"+g.productList[h].weight+"' subCategoryCode='"+g.productList[h].subCategoryCode+"'><div style='height:164px;'>";
if(g.productList[h].count>1){o+="<a class='prod-multi-img' href='"+f+"' title='"+g.productList[h].subPartName+"' target='_blank' name='item_"+g.productList[h].subPartNumber+"_basic_gdtc-product'><img class='multi-img' src3='"+k+"' alt=''><div class='pord-num'><p class='content'>数量:<span class='number'>*"+g.productList[h].count+"</span></p></div></a>"
}else{o+="<a class='prod-img' href='"+f+"' title='"+g.productList[h].subPartName+"' target='_blank' name='item_"+g.productList[h].subPartNumber+"_basic_gdtc-product'><img class='single-img' src3='"+k+"' alt=''></a>"
}o+="</div>";
if(g.bundelType=="2"&&g.productList[h].seq=="2"){o+="<p class='title'>"+g.productList[h].subPartName+"</p>"
}else{o+="<p class='title'><a href='"+f+"' title='"+g.productList[h].subPartName+"' target='_blank' name='item_"+g.productList[h].subPartNumber+"_basic_gdtc-product'>"+g.productList[h].subPartName+"</a></p>";
if(g.bundelType=="3"){o+="<p class='price'></p>"
}}if(h>0){o+="<i class='plus'></i>"
}o+="</li>"
}j+="</a><div class='pk-hover-list'>";
if(g.productList.length>3){j+='<a class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a><a class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>'
}j+="<div class='pages-wrap'><ul class='clearfix'>"+o;
j+="<input type='hidden'  value='"+l+"'/>";
var m="item_"+a[b].cmmdtyCode+"_basic_gdtc-cart";
if(sn.twoFlag){m="item_"+a[b].cmmdtyCode+"_basic_gdtc-cart-1shouji"
}else{if(sn.categoryId==sn.phoneCategoryId){m="item_"+a[b].cmmdtyCode+"_basic_gdtc-cart-shouji"
}}j+="</ul></div><div class='buy-row'><p class='pk-price' id='pkprice'><span class='p-t-name'>套餐价：</span><span class='price'></span></p><a href='javascript:;' class='btn-view-pk btn-disable' target='_blank' name='"+m+"'>加入购物车</a></div></div></li>";
if(g.bundelType=="3"){CommonFourPage.virPackageHtml+=j
}else{CommonFourPage.packageHtml+=j
}}CommonFourPage.choosePackageShowList(a,b+1)
},error:function(){CommonFourPage.choosePackageShowList(a,b+1)
}})
}else{if(CommonFourPage.packageHtml!=""){var c="<dl id='packageChoice' class='select-fixed-package'><dt><span class='w2'>套装</span></dt><dd><ul class='pk-list clearfix'>"+CommonFourPage.packageHtml+"</ul><i class='ng-iconfont fold-icon'>&#xe63a;</i><i class='ng-iconfont extend-icon'>&#xe62e;</i><div class='gap-line'></div></dd>";
"</dl>";
$("#freenessPay").before(c);
iFourth.bindPackagesCluster(CommonFourPage.getPackageSale);
iFourth.mainHeight()
}if(CommonFourPage.virPackageHtml!=""){var c="<dl id='virPackageChoice' class='select-fixed-package select-fixed-package-tv'><dt><span>虚拟套装</span></dt><dd><ul class='pk-list clearfix'>"+CommonFourPage.virPackageHtml+"</ul><i class='ng-iconfont fold-icon'>&#xe63a;</i><i class='ng-iconfont extend-icon'>&#xe62e;</i><div class='gap-line'></div></dd>";
"</dl>";
$("#freenessPay").before(c);
iFourth.bindPackagesTv(CommonFourPage.getPackageSale);
iFourth.mainHeight()
}}};
CommonFourPage.getPackageSale=function(l){if(l.attr("saleflag")=="0"){l.click();
l.attr("saleflag","1");
var p=l.attr("packagetype");
var c=l.attr("packagepartnumber");
var f=sn.lesCityId+sn.lesDistrictId+"01";
var e="";
if(p=="2"){e="04"
}var a="";
var m=l.find(".pk-h-item");
for(var g=0;
g<m.length;
g++){if(!(sn.blackCategoryCode&&sn.blackCategoryCode==o)&&!(p=="2"&&g==1)){var h="";
var o=$(m[g]).attr("subCategoryCode");
var j=$(m[g]).attr("subpartnumber");
var h=typeof $(m[g]).attr("weight")!="undefined"?$(m[g]).attr("weight"):"";
var k=$(m[g]).attr("subcount");
if(a==""){a+=j+"|"+k+"|"+o+"|"+h
}else{a+="-"+j+"|"+k+"|"+o+"|"+h
}}}var f=sn.lesCityId+sn.lesDistrictId+"01";
sn.custLevel=d("custLevel")==null?"":d("custLevel");
var b=sn.luaUrl+"/nspcpackage_"+c+"_"+sn.vendorCode+"_"+sn.lesCityId+"_"+f+"_"+a+"_"+p+"_1_"+sn.custLevel+"_"+sn.shopType+".html";
$.ajax({url:b,type:"get",cache:false,dataType:"jsonp",jsonp:"callback",jsonpCallback:"pcData",success:function(t){if(t&&t.data&&t.data.price&&t.data.price.saleInfo&&t.data.price.saleInfo[0]){var v=t.data.price.saleInfo;
l.find(".pk-price .price").html("<i>¥</i>"+v[0].promotionPrice);
if(p=="3"){var q=t.data.fixedPrice;
for(var s=0;
s<q.length;
s++){if(q[s].netPrice){l.find(".pk-h-item[subpartnumber='"+q[s].partNumber+"'] .price").html("<i>¥</i>"+q[s].netPrice)
}}}if(t.data.invStatus=="1"){var r=v[0];
var u=sn.elecProductDomain+"/"+r.vendorCode+"/"+getEffectivePartNumber(r.partNumber)+".html";
if(r.priceType.substring(0,2)=="12"){l.find(".btn-view-pk").attr("href",u).attr("class","btn-view-pk").html("<i></i>立即预约")
}else{if(r.priceType.substring(0,2)=="13"){l.find(".btn-view-pk").attr("href",u).attr("class","btn-view-pk").html("<i></i>立即预定")
}else{if(r.priceType.indexOf("6-")=="0"){l.find(".btn-view-pk").attr("href",u).attr("class","btn-view-pk").html("<i></i>立即购买")
}else{l.find(".btn-view-pk").click(function(){CommonFourPage.addPackageCart(l,v)
});
l.find(".btn-view-pk").attr("class","btn-view-pk").html("<i></i>加入购物车").removeAttr("target")
}}}}else{l.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}}},error:function(){l.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}})
}};
CommonFourPage.getPackageSolp=function(g,f){var b="";
var a=g.find("input").val();
if(f&&f.length>1){for(var e=1;
e<f.length;
e++){if(f[e].partNumber!=a){b+=getDeliveryInfoProuctUrl(f[e])+"_"
}}}var c=sn.solpUrl+"/solp/http/SOLP10101_PDS_50_"+b+"queryB2cDeliverable.htm";
$.ajax({url:c,cache:true,dataType:"jsonp",jsonpCallback:"showB2cDeliverable",success:function(h){if(h&&h.successFlag=="Y"&&h.deliverableFlag=="Y"){var i=f[0];
var j=sn.elecProductDomain+"/"+i.vendorCode+"/"+getEffectivePartNumber(i.partNumber)+".html";
if(i.priceType.substring(0,2)=="12"){g.find(".btn-view-pk").attr("href",j).attr("class","btn-view-pk").html("<i></i>立即预约")
}else{if(i.priceType.substring(0,2)=="13"){g.find(".btn-view-pk").attr("href",j).attr("class","btn-view-pk").html("<i></i>立即预定")
}else{if(i.priceType.indexOf("6-")=="0"){g.find(".btn-view-pk").attr("href",j).attr("class","btn-view-pk").html("<i></i>立即购买")
}else{g.find(".btn-view-pk").click(function(){CommonFourPage.addPackageCart(g,f)
});
g.find(".btn-view-pk").attr("class","btn-view-pk").html("<i></i>加入购物车").removeAttr("target")
}}}}else{g.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}},error:function(){g.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}})
};
function getDeliveryInfoProuctUrl(a){var h="";
var b="1";
if(a.manageInvFlag=="0"){b="0"
}if(a.factorySendFlag=="1"){b="3"
}var i=a.vendor;
if(i&&i.length==10){i=i.substring(2,10)
}if(typeof a.accountPlace!="undefined"&&a.accountPlace.substring(0,1)=="Z"){storeAddress1=a.accountPlace;
storeAddress2=a.ownerPlace
}else{storeAddress1=a.ownerPlace;
if(a.accountPlace==""){storeAddress2=a.ownerPlace
}else{storeAddress2=a.accountPlace
}}var j=a.deptNo;
var k="";
if(sn.swlShopFlag){k=sn.nowDate;
accountPlace=a.ownerPlace;
j="0001";
b="0"
}else{var e=new Date(parseInt(a.sendAvalidTime.toString()));
var g=(e.getMonth()+1)>9?(e.getMonth()+1):"0"+(e.getMonth()+1);
var c=e.getDate()>9?e.getDate():"0"+e.getDate();
k=""+e.getFullYear()+g+c
}var f=sn.lesCityId+sn.lesDistrictId+"01";
h=a.partNumber+"_01_"+b+"_"+storeAddress1+"_"+storeAddress2+"_"+j+"_"+f+"_"+i+"_"+sn.lesCityId+"_"+k;
return h
}CommonFourPage.getPackageFreightList=function(j,l){var b=j.attr("packagepartnumber");
var c=l[0].promotionPrice;
if(sn.hwgShopFlag&&(sn.ownerPlace.indexOf("H")==0||sn.ownerPlace.indexOf("B")==0||sn.ownerPlace.indexOf("L")==0)){var e="";
for(var g=1;
g<l.length;
g++){var k=l[g];
var h="1";
for(var a=0;
a<j.find("li").length;
a++){if(k.partNumber==$(j.find("li")[a]).attr("subpartnumber")){h=$(j.find("li")[a]).attr("subcount");
break
}}if(e==""){e=k.partNumber+","+k.promotionPrice*h+","+k.ownerPlace
}else{e+="-"+k.partNumber+","+k.promotionPrice*h+","+k.ownerPlace
}}var f=sn.fimsDomain+"/fims/http/FIMS02_"+b+"_"+sn.lesCityId+"_01_"+c+"__"+sn.vendorCode+"_"+e+"_queryAbroadFreightForPage.htm";
$.ajax({url:f,cache:true,dataType:"jsonp",jsonpCallback:"queryFreightForPage",success:function(m){if(typeof m!="undefined"&&m.length>0){var q=false;
for(var p=0;
p<m.length;
p++){if(m[p].vendorCode==sn.vendorCode&&m[p].resultCode=="Y"){q=true;
break
}}if(q){var o=l[0];
var r=sn.elecProductDomain+"/"+o.vendorCode+"/"+getEffectivePartNumber(o.partNumber)+".html";
if(o.priceType.substring(0,2)=="12"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即预约")
}else{if(o.priceType.substring(0,2)=="13"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即预定")
}else{if(o.priceType.indexOf("6-")=="0"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即购买")
}else{j.find(".btn-view-pk").click(function(){CommonFourPage.addPackageCart(j,l)
});
j.find(".btn-view-pk").attr("class","btn-view-pk").html("<i></i>加入购物车").removeAttr("target")
}}}}else{j.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}}},error:function(){j.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}})
}else{var f=sn.fimsDomain+"/fims/http/FIMS01_"+b+"_"+sn.lesCityId+"_01_"+sn.lesCityId+sn.lesDistrictId+"_queryFreightForPage.htm";
$.ajax({url:f,cache:true,dataType:"jsonp",jsonpCallback:"queryFreightForPage",success:function(m){if(typeof m!="undefined"&&m.length>0){var q=false;
for(var p=0;
p<m.length;
p++){if(m[p].vendorCode==sn.vendorCode&&m[p].resultCode=="Y"){q=true;
break
}}if(q){var o=l[0];
var r=sn.elecProductDomain+"/"+o.vendorCode+"/"+getEffectivePartNumber(o.partNumber)+".html";
if(o.priceType.substring(0,2)=="12"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即预约")
}else{if(o.priceType.substring(0,2)=="13"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即预定")
}else{if(o.priceType.indexOf("6-")=="0"){j.find(".btn-view-pk").attr("href",r).attr("class","btn-view-pk").html("<i></i>立即购买")
}else{j.find(".btn-view-pk").click(function(){CommonFourPage.addPackageCart(j,l)
});
j.find(".btn-view-pk").attr("class","btn-view-pk").html("<i></i>加入购物车").removeAttr("target")
}}}}else{j.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}}},error:function(){j.find(".btn-view-pk").attr("class","btn-view-pk btn-disable").html("本地区暂不销售")
}})
}};
CommonFourPage.addPackageCart=function(l,s){var b="";
var u="";
var x=l.attr("packagepartnumber");
var r=l.find("input").val();
var w="";
var m="";
var h="";
var c="";
var a=[];
var o=[];
for(var q=0;
q<l.find("li").length;
q++){var g=$(l.find("li")[q]).attr("subpartnumber");
var t="";
if(g==r){for(var p=1;
p<s.length;
p++){if(s[p].partNumber=r){t=s[p].vendor
}}var f={cmmdtyCode:g,supplierCode:t,cmmdtyQty:$(l.find("li")[q]).attr("subcount"),isCollocation:"1"};
o.push(f)
}else{var k={};
k.shopCode=sn.vendorCode;
k.cmmdtyQty=$(l.find("li")[q]).attr("subcount");
k.cmmdtyCode=g;
a.push(k)
}}if(r!=""){a[0].childCmmdtyWarrantyVOList=o
}var e="12";
var v={cmmdtyVOList:[{activityId:h,activityType:e,subActivityType:c,cmmdtyCode:x,cmmdtyQty:1,shopCode:sn.vendorCode,childCmmdtyVOList:a}]};
cart.normal.addCart(v,quickPackagePress)
};
function quickPackagePress(){}CommonFourPage.getRefPrice=function(a,e,f){if(typeof a=="undefined"||a==""){return""
}var g=new Array();
g=a.split("-");
var b="";
var c="";
if(g.length==2){b=parseFloat(g[0]).toFixed(2);
c=parseFloat(g[1]).toFixed(2)
}else{b=parseFloat(g[0]).toFixed(2);
c=parseFloat(g[0]).toFixed(2)
}if(parseFloat(b)>parseFloat(e)&&parseFloat(c)>parseFloat(f)){return a
}else{return""
}};
function getImageVersion(b){var a=sn.vendorCode;
if(sn.tmShopFlag){a=sn.vendor
}var f=$(".imgzoom-thumb-main");
if(f.attr("curPartNumber")==b){return
}else{f.attr("curPartNumber",b)
}try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/getImgVersion_"+b+"_"+a+"_imageVersionCallBack.html",type:"get",cache:true,dataType:"jsonp",jsonpCallback:"imageVersionCallBack",success:function(g){var e="";
if(g.imgVersion&&g.imgVersion!=""){e=g.imgVersion
}gMain.initSubImage(e,b)
},error:function(){gMain.initSubImage("",b)
}})
}catch(c){}}function setFixBarOnline(b){if(isSpecialSale()){$("#itemZddhAgent").attr("href","javascript:findsinglepass('"+sn.tmOnlineId+"','','','','');")
}else{if(sn.zyHwgFlag){$("#itemZddhAgent").attr("href","javascript:findsinglepass('"+sn.hwgOnlineId+"','','','','');")
}else{if(sn.suningJiWuFlag){$("#itemZddhAgent").attr("href","javascript:findsinglepass('"+sn.jiwuChatId+"','','','','');")
}else{if(sn.vendorCode=="0000000000"||(sn.csSwlShopFlag&&sn.factorySendFlag!="1")){var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#itemZddhAgent").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');")
}else{var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#itemZddhAgent").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');")
}}}}}function setRobot(){if(sn.gotoXiaoYi=="true"){if(typeof(checkCCBSServiceOnoff)=="function"){checkCCBSServiceOnoff(function(b){if(b&&b.switchFlag){var a=sn.itemDomain+"/"+sn.vendorCode+"/"+sn.ninePartNumber+".html";
$("#basicRobot").attr("href","javascript:goXiaoYi('"+sn.partNumber+"','','"+sn.vendorCode+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"');");
$("#shopRobot").attr("href","javascript:goXiaoYi('"+sn.partNumber+"','','"+sn.vendorCode+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"');");
$("#basicRobot").show();
$("#shopRobot").parent().show()
}else{if($("#callmeTile").length==0){$("#onlineTile").parent().hide()
}}})
}else{setTimeout(function(){setRobot()
},100)
}}}function sendSaMessage(b){if(typeof openAPIList!="undefined"&&openAPIList.indexOf(b)>=0){return
}if(typeof openAPIList!="undefined"&&openAPIList!=""){openAPIList=openAPIList+","+b
}else{openAPIList=b
}try{if(typeof b!="undefined"&&b!=""){if(typeof sa.openAPI!="undefined"&&typeof sa.openAPI.sendMessage!="undefined"){var a=saGetMessaegTitle(b);
$("#fourpage").val(a.inputMessage);
sa.openAPI.sendMessage("fourpage",a.message,"",a.messageId,"fourpage")
}else{if(openAPIList.indexOf(",")<0){sa.openAPI=true;
$.getScript(sn.scriptDomain+"/javascript/sn_da/sa-analytics.js",function(){sendLazySaMessage()
})
}}}}catch(c){}}function sendSaMessageV2(b){if(typeof openAPIListV2!="undefined"&&openAPIListV2.indexOf(b)>=0){return
}if(typeof openAPIListV2!="undefined"&&openAPIListV2!=""){openAPIListV2=openAPIListV2+","+b
}else{openAPIListV2=b
}try{if(b){var c=getSaRequestData(b);
if(typeof sa.openAPI!="undefined"&&typeof sa.openAPI.sendMsgV2!="undefined"){sa.openAPI.sendMsgV2(c)
}else{if(openAPIList.indexOf(",")<0){sa.openAPI=true;
$.getScript(sn.scriptDomain+"/javascript/sn_da/sa-analytics.js",function(){sendLazySaMessageV2()
})
}}}}catch(a){}}function sendSaMessageV2Temp(f,a,c){if(typeof openAPIListV2!="undefined"&&openAPIListV2.indexOf(f)>=0){return
}if(typeof openAPIListV2!="undefined"&&openAPIListV2!=""){openAPIListV2=openAPIListV2+","+f
}else{openAPIListV2=f
}try{if(f){var g={type_name:a,error_type:"2",error_code:f,error_detail:c,member_id:d("custno"),member_level:d("custLevel"),region:sn.lesCityId,bid:"fourpage"};
if(typeof sa.openAPI!="undefined"&&typeof sa.openAPI.sendMsgV2!="undefined"){sa.openAPI.sendMsgV2(g)
}else{if(openAPIList.indexOf(",")<0){sa.openAPI=true;
$.getScript(sn.scriptDomain+"/javascript/sn_da/sa-analytics.js",function(){sendLazySaMessageV2()
})
}}}}catch(b){}}function getSaRequestData(e){var b="2";
var a;
var c;
switch(e){case"jg-jg-01":a="ICPS";
c="暂不销售-价格";
break;
case"jg-xy-01":a="ICPS";
c="无货";
break;
case"pds-ht-01":a="PDS";
c="404";
break;
case"yf-dz-01":a="FIMS";
c="暂不销售-运费:"+sn.freightResultCode;
break;
case"pcss-xj-01":a="PCSS";
c="商品已下架";
break;
case"jc-dz-01":a="PRES";
c="暂不支持配送-时效"+typeof sn.prescription!="undefined"?sn.prescription.errorMsg:"";
break;
case"pcss-cs-01":a="PCSS";
c="无参数";
break;
case"pcss-xq-01":a="PCSS";
c="无详情";
break;
case"pcss-zt-01":a="PCSS";
c="无主图";
break
}var f={type_name:a,error_type:b,error_code:e,error_detail:c,member_id:d("custno"),member_level:d("custLevel"),region:sn.lesCityId,bid:"fourpage"};
return f
}function saGetMessaegTitle(b){var c={"jg-cx-01":"ICPS_促销活动不展示-2","jg-fw-01":"ICPS_服务不展示-价格-3","jg-jg-01":"ICPS_暂不销售-价格-1","jg-xy-01":"ICPS_无货-价格-1","yx-jh-01":"NMPS_提交购物车失败-大聚惠-1","yx-jh-02":"NMPS_大聚惠活动不展示-2","pds-ht-01":"PDS_404-1","pds-fwt-02":"PDS_服务不展示-3","yx-ys-02":"PSS_预售活动不展示-2","yf-dz-01":"freight_暂不销售-运费-1","pcss-xj-01":"PCSS_商品已下架-商品-1","jc-dz-01":"pres_暂不支持配送-时效-1","rxf-fw-01":"renxf_任性付服务不展示-2","pcss-cs-01":"PCSS_商品参数不展示-商品-2","pcss-xq-01":"PCSS_商品详情不展示-商品-2","pcss-bzt-01":"PCSS_爆炸贴崩溃-2","pcss-zt-01":"PCSS_无主图-商品-2","sh-fw-01":"service_服务不展示-售后-3","tj-xh-01":"REC_猜你喜欢——无内容-3","tj-kk-01":"REC_看了还看——无内容-3","tj-klm-01":"REC_看了最终买——无内容-3","tj-ls-01":"REC_类似推荐——无内容-3","tj-tl-01":"REC_同类推荐——无内容-3","tj-dp-01":"REC_推荐搭配——无内容-3","tj-phb-01":"REC_推荐排行榜——无内容-3","tj-wh-01":"REC_无货推荐——无内容-3","tj-fl-01":"REC_相关分类——无内容-3","tj-pp-01":"REC_相关品牌——无内容-3","ll-ls-01":"pds_浏览历史为空-3"};
var a=c[b];
return req={inputMessage:a,message:sn.lesCityId+sn.lesDistrictId+"&&PC&&0001",messageId:b}
}function sendLazySaMessage(){var e=openAPIList.split(",");
for(var b=0;
b<e.length;
b++){var a=e[b];
if(a!=""){var c=saGetMessaegTitle(a);
$("#fourpage").val(c.inputMessage);
sa.openAPI.sendMessage("fourpage",c.message,"",c.messageId,"fourpage")
}}}function sendLazySaMessageV2(){var b=openAPIListV2.split(",");
for(var a=0;
a<b.length;
a++){var c=b[a];
if(c!=""){var e=getSaRequestData(c);
sa.openAPI.sendMsgV2(e)
}}}function saMessageImgProcess(){try{if(!isHasImg(sn.pic)){sendSaMessage("pcss-zt-01");
sendSaMessageV2("pcss-zt-01")
}}catch(a){}}function isHasImg(b){var a=new Image();
a.src=b;
if(a.fileSize>0||(a.width>0&&a.height>0)){return true
}else{return false
}}function uuid(){var e=[];
var a="0123456789abcdef";
for(var b=0;
b<36;
b++){e[b]=a.substr(Math.floor(Math.random()*16),1)
}e[14]="4";
e[19]=a.substr((e[19]&3)|8,1);
e[8]=e[13]=e[18]=e[23]="";
var c=e.join("");
return c
}var uuID="";
var sceneId="";
function verificationCode(a,b){uuID=uuid();
sceneId="1";
if(a&&a!=""&&b&&b!=""){sceneId=a;
uuID=b
}var c=sn.vcsDomain+"/vcs/imageCode.htm?uuid="+uuID+"&sceneId="+sceneId;
$(".idtycode-img").attr("src",c)
}function changeValidate(){var a=sn.vcsDomain+"/vcs/imageCode.htm?uuid="+uuID+"&sceneId="+sceneId+"&yys="+new Date().getTime();
$(".idtycode-img").attr("src",a)
}function validate(){var b=sn.vcsDomain+"/vcs/validate_jsonp.htm";
var a=$("#imgtext").val();
var c="code="+a+"&uuid="+uuID+"&sceneId=1&delFlag=0";
$.ajax({type:"POST",url:b,data:c,dataType:"jsonp",jsonpCallback:"callback",success:function(e){if(e!=null&&e[0]!=null&&e[0].result!="false"){$(".err-i").hide();
$(".correct-i").show();
$("#errbox").html("").hide()
}else{$(".err-i").show();
$(".correct-i").hide()
}}})
}Recommend.getRecomData=function(i){try{var g=i.sugGoods;
var b="";
var c="";
var f=[];
var a=[];
var j="";
$.each(g,function(e,k){if(k.resCode!="02"){if(sn.suningJiWuFlag&&k.sceneId=="1-1"){Recommend.bulidJiWuSeeAgain(k)
}else{if(k.sceneId=="1-1"||k.sceneId=="1-7"||k.sceneId=="1-90"){CommonFourPage.Recommend.sugGoods=k;
Recommend.bulidSeeAgain(k,1);
setTimeout(function(){Recommend.bulidSeeAgain(k,2)
},1000)
}else{if(k.sceneId=="1-2"||k.sceneId=="10-2"){Recommend.bulidSeeBuy(k)
}}}}})
}catch(h){}};
Recommend.bulidSeeAgain=function(j,b){if(typeof j!="undefined"&&j!=""&&j.skus.length>0){for(var e=0;
e<j.skus.length;
e++){if(sn.hwgShopFlag){j.skus[e].markPoint="item_"+paserPartNumber(sn.partNumber)+"_rechwgklykpc_1-";
j.skus[e].eleId="baoguang_rechwgklykpc_1-"+(e+1)+"_"+j.skus[e].vendorId+"_"+paserPartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork
}else{if(sn.twoFlag){j.skus[e].markPoint="item_"+paserPartNumber(sn.partNumber)+"_recviewviewnb_1-";
j.skus[e].eleId="baoguang_recviewviewnb_1-"+(e+1)+"_"+j.skus[e].vendorId+"_"+paserPartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork
}else{if(sn.categoryId==sn.phoneCategoryId){j.skus[e].markPoint="item_"+paserPartNumber(sn.partNumber)+"_recviewviewna_1-";
j.skus[e].eleId="baoguang_recviewviewna_1-"+(e+1)+"_"+j.skus[e].vendorId+"_"+paserPartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork
}else{j.skus[e].markPoint="item_"+paserPartNumber(sn.partNumber)+"_recviewviewn_1-";
j.skus[e].eleId="baoguang_recviewviewn_1-"+(e+1)+"_"+j.skus[e].vendorId+"_"+paserPartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork
}}}j.skus[e].eleName=j.skus[e].markPoint+(e+1)+"_p_"+j.skus[e].vendorId+"_"+getEffectivePartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork;
j.skus[e].eleHref=sn.elecProductDomain+"/"+j.skus[e].vendorId+"/"+getEffectivePartNumber(j.skus[e].sugGoodsCode)+".html#?src="+j.skus[e].markPoint+(e+1)+"_p_"+j.skus[e].vendorId+"_"+getEffectivePartNumber(j.skus[e].sugGoodsCode)+"_"+j.skus[e].handwork;
j.skus[e].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+j.skus[e].vendorId+"-"+j.skus[e].sugGoodsCode+"_1"
}var g=null;
if(b==1){g=3
}else{g=iFourth.calKLYKNum()
}j.htmlnum=g;
if(sn.twoFlag){if(sn.hasStorage=="Y"){var a=template("tmpl_manager_rec_list",j);
$("#J-klyk .klyk-list").html(a);
$("li[rel=#J-klyk]").attr("has-data","true");
Recommend.dpInitShowCss();
iFourth.bindHKlyk();
lazyelem.listen();
$("#listProContent").show()
}else{$("li[rel=#J-klyk]").attr("has-data","false");
$("#J-klyk").hide();
$("#J-klyk .klyk-list").html("");
$("li[rel=#J-klyk]").hide();
Recommend.dpInitShowCss()
}}else{var c=template("customer-rec-tmpl",j);
$(".customer-rec .customer-rec-list .scroll-wrapper").html(c);
var f=template("dot-pages-tmpl",j);
$(".customer-rec .pages-container .pages-dot").html(f);
$("#seeAndsee").show();
$("#noAndsee").hide()
}if(b==1){if(sn.hwgShopFlag){runAnalyseByClass("baoguang_rechwgklykpc")
}else{runAnalyseByClass("baoguang_recviewviewn")
}}}else{if(sn.twoFlag){$("li[rel=#J-klyk]").attr("has-data","false");
$("#J-klyk").hide();
$("#J-klyk .klyk-list").html("");
$("li[rel=#J-klyk]").hide();
Recommend.dpInitShowCss()
}else{$("#seeAndsee").hide();
$("#noAndsee").show();
if(typeof $(".breadcrumb .dropdown:eq(1) a:eq(0)").attr("href")!="undefined"){var h=$(".breadcrumb .dropdown:eq(1) a:eq(0)").attr("href");
$("#noAndsee").find("a").attr("href",h).show()
}else{$("#noAndsee").find("a").hide()
}}if(b==1){sendSaMessage("tj-kk-01")
}}iFourth.initKLYK();
iFourth.mainHeight()
};
Recommend.bulidSeeBuy=function(c){if(c!=""&&c.skus.length>0){for(var b=0;
b<c.skus.length;
b++){if(b>4){break
}c.skus[b].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recviewbuyn_1-";
c.skus[b].eleName=c.skus[b].markPoint+(b+1)+"_p_"+c.skus[b].vendorId+"_"+(c.skus[b].sugGoodsCode).substring(9,18)+"_"+c.skus[b].handwork;
c.skus[b].eleHref=sn.elecProductDomain+"/"+c.skus[b].vendorId+"/"+getEffectivePartNumber(c.skus[b].sugGoodsCode)+".html#?src="+c.skus[b].markPoint+(b+1)+"_p_"+c.skus[b].vendorId+"_"+getEffectivePartNumber(c.skus[b].sugGoodsCode)+"_"+c.skus[b].handwork;
c.skus[b].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+c.skus[b].vendorId+"-"+c.skus[b].sugGoodsCode+"_1";
c.skus[b].eleId="baoguang_recviewbuyn_1-"+(b+1)+"_"+c.skus[b].vendorId+"_"+(c.skus[b].sugGoodsCode).substring(9,18)+"_"+c.skus[b].handwork;
c.skus[b].eleType=CommonFourPage.Recommend.getPromotionContent(c.skus[b].promotionType," ")
}var a=template("viewAndBuyScriptContent",c);
document.getElementById("viewAndBuyContent").innerHTML=a;
runAnalyseByClass("baoguang_recviewbuyn");
$("#viewAndBuyContent").show();
lazyelem.listen()
}else{$("#viewAndBuyContent").hide()
}};
Recommend.bulidJiWuSeeAgain=function(c){if(c!=""&&c.skus.length>0){for(var b=0;
b<c.skus.length;
b++){c.skus[b].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recviewbuyn_1-";
c.skus[b].eleName=c.skus[b].markPoint+(b+1)+"_p_"+c.skus[b].vendorId+"_"+(c.skus[b].sugGoodsCode).substring(9,18)+"_"+c.skus[b].handwork;
c.skus[b].eleHref=sn.elecProductDomain+"/"+c.skus[b].vendorId+"/"+getEffectivePartNumber(c.skus[b].sugGoodsCode)+".html#?src="+c.skus[b].markPoint+(b+1)+"_p_"+c.skus[b].vendorId+"_"+getEffectivePartNumber(c.skus[b].sugGoodsCode)+"_"+c.skus[b].handwork;
c.skus[b].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+c.skus[b].vendorId+"-"+c.skus[b].sugGoodsCode+"_1";
c.skus[b].eleId="baoguang_recviewbuyn_1-"+(b+1)+"_"+c.skus[b].vendorId+"_"+(c.skus[b].sugGoodsCode).substring(9,18)+"_"+c.skus[b].handwork;
c.skus[b].eleType=CommonFourPage.Recommend.getPromotionContent(c.skus[b].promotionType," ")
}c.htmlnum=5;
var a=template("viewAndBuyJiWuScript",c);
document.getElementById("viewAndBuyJiWu").innerHTML=a;
iFourth.initKLYKLeft();
runAnalyseByClass("baoguang_rechwgklykpc");
$("#viewAndBuyJiWu").show();
lazyelem.listen()
}else{$("#viewAndBuyJiWu").hide()
}};
Recommend.bulidShopRecommend=function(c){sn.shopRecommend=c;
var e=c.sugGoods[0];
if(typeof e!="undefined"&&e.resCode!="02"&&e.skus.length>5){var f=c.sugGoods[0];
for(var b=0;
b<f.skus.length;
b++){f.skus[b].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recdptjc_1-";
f.skus[b].eleName=f.skus[b].markPoint+(b+1)+"_p_"+f.skus[b].vendorId+"_"+(f.skus[b].sugGoodsCode).substring(9,18)+"_"+f.skus[b].handwork;
f.skus[b].eleHref=sn.elecProductDomain+"/"+f.skus[b].vendorId+"/"+getEffectivePartNumber(f.skus[b].sugGoodsCode)+".html#?src="+f.skus[b].markPoint+(b+1)+"_p_"+f.skus[b].vendorId+"_"+getEffectivePartNumber(f.skus[b].sugGoodsCode)+"_"+f.skus[b].handwork;
f.skus[b].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+f.skus[b].vendorId+"-"+f.skus[b].sugGoodsCode+"_1_160x160.jpg";
f.skus[b].eleId="baoguang_recdptjc_1-"+(b+1)+"_"+f.skus[b].vendorId+"_"+(f.skus[b].sugGoodsCode).substring(9,18)+"_"+f.skus[b].handwork
}var a=template("shoptj-sr-tmpl",f);
$("#J-manager-rec").html(a);
$("#listProContent").show();
$("li[rel=#J-manager-rec]").attr("has-data","true");
runAnalyseByClass("baoguang_recdptjc")
}Recommend.dpInitShowCss();
lazyelem.listen();
iFourth.mainHeight()
};
Recommend.dpInitShowCss=function(){var c=$("#listProContent .tabarea-items").find("li[has-data='true']");
if(c.length>0){c.show();
var b=c.eq(0);
b.addClass("current").siblings().removeClass("current");
var a=b.attr("rel");
var e=$(a);
e.show().siblings("div").hide()
}};
Recommend.callbackFunp=function(h){if(h!=null&&typeof h.sugGoods!="undefined"&&h.sugGoods.length>0){var p=h.sugGoods;
var e="";
var r="";
var l=false;
var c=false;
var a=false;
var k=0;
p.sort(function(m,i){return m.sceneId>i.sceneId
});
for(var g=0;
g<p.length;
g++){if(p[g].sceneId=="1-4"){p[g].name="item_"+(sn.partNumber).substring(9,18)+"_tab_price";
p[g].rel="#J-topPro-1";
p[g].id="J-topPro-1";
l=true;
p[g].content="同价位";
e="baoguang_rectjwn_1-";
r="item_"+(sn.partNumber).substring(9,18)+"_rectjwn_1-"
}else{if(p[g].sceneId=="1-5"){p[g].name="item_"+(sn.partNumber).substring(9,18)+"_tab_pingpai";
p[g].rel="#J-topPro-2";
p[g].id="J-topPro-2";
c=true;
p[g].content="同品牌";
e="baoguang_rectppn_1-";
r="item_"+(sn.partNumber).substring(9,18)+"_rectppn_1-"
}else{if(p[g].sceneId=="1-6"){p[g].name="item_"+(sn.partNumber).substring(9,18)+"_tab_cata";
p[g].rel="#J-topPro-3";
p[g].id="J-topPro-3";
a=true;
p[g].content="同类别";
e="baoguang_rectlbn_1-";
r="item_"+(sn.partNumber).substring(9,18)+"_rectlbn_1-"
}}}var o=p[g].skus;
if(o.length>2){p[g].showFlag="Y";
for(var b=0;
b<o.length;
b++){if(b>=6){break
}p[g].skus[b].eleName=r+(b+1)+"_p_"+o[b].vendorId+"_"+(o[b].sugGoodsCode).substring(9,18)+"_"+o[b].handwork;
p[g].skus[b].eleHrefP=sn.elecProductDomain+"/"+o[b].vendorId+"/"+getEffectivePartNumber(o[b].sugGoodsCode)+".html#?src="+r+(g+1)+"_p_"+o[b].vendorId+"_"+getEffectivePartNumber(o[b].sugGoodsCode)+"_"+o[b].handwork;
p[g].skus[b].eleHrefC=sn.elecProductDomain+"/"+o[b].vendorId+"/"+getEffectivePartNumber(o[b].sugGoodsCode)+".html#?src="+r+(g+1)+"_c_"+o[b].vendorId+"_"+getEffectivePartNumber(o[b].sugGoodsCode)+"_"+o[b].handwork;
p[g].skus[b].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+o[b].vendorId+"-"+o[b].sugGoodsCode+"_1";
p[g].skus[b].eleId=e+(g+1)+"_"+o[b].vendorId+"_"+(o[b].sugGoodsCode).substring(9,18)+"_"+o[b].handwork;
p[g].skus[b].sugGoodsName=o[b].sugGoodsName;
p[g].skus[b].price=o[b].price;
p[g].skus[b].promotionInfo=o[b].promotionInfo
}k=k+1
}else{p[g].showFlag="N"
}}if(k>0){var q={elecontent:sn.categoryName2.substring(0,9)+"排行榜"};
if(sn.category2!=""){q.eleHref=sn.recDomain+"/show/rankdetail/"+sn.category2+"_2.html"
}var f={};
f.eles=q;
f.sugGoods=p;
var j=template("templateRankScript",f);
document.getElementById("hotRank").innerHTML=j;
$("#hot_sort .no-comparecheck:eq(0)").addClass("current");
$("#hotRank").show();
$("#hotRank .toppro-list:eq(0)").show();
iFourth.Tab(".toppro-tab",".toppro-list",function(s,i,m){});
lazyelem.listen()
}else{$("#hotRank").html("");
$("#hotRank").hide()
}}else{$("#hotRank").html("");
$("#hotRank").hide()
}runAnalyseByClass("baoguang_rectjwn");
runAnalyseByClass("baoguang_rectppn");
runAnalyseByClass("baoguang_rectlbn")
};
var cloudInfo={activityID:"",exchangeType:"",activityPrice:"",cdiamondPrice:"",addCartState:"0",state:"00",init:function(){this.activityID="";
this.exchangeType="";
this.activityPrice="";
this.cdiamondPrice=""
},cloudDiamondInfo:function(){$("#yunzuan").hide();
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemDiamondAction_"+sn.partNumber+"_"+sn.vendorCode+"_cloudInfo.initAct.html",cache:true,async:false,dataType:"jsonp",jsonpCallback:"cloudInfo.initAct",success:function(){}})
},initAct:function(b){cloudInfo.activityID=b.activityID;
cloudInfo.exchangeType=b.exchangeType;
cloudInfo.activityPrice=b.activityPrice;
cloudInfo.cdiamondPrice=b.cdiamondPrice;
if(typeof this.activityID!="undefined"&&this.activityID!=""){var a="";
if(this.exchangeType=="01"){a+='<span class="desc">'+this.cdiamondPrice+"云钻全额兑</span>";
a+='<a id="btn_yzuan" href="javascript:cloudInfo.activiteAddCart();" name="item_'+sn.partNumber.substr(9,18)+'_yunzu_dh" class="a-detail ml10">立即兑换</a>'
}else{if(this.exchangeType=="02"){a+='<span class="desc">'+this.cdiamondPrice+"云钻+"+this.activityPrice+"元购买</span>";
a+='<a id="btn_yzuan" href="javascript:cloudInfo.activiteAddCart();" name="item_'+sn.partNumber.substr(9,18)+'_yunzu_dh" class="a-detail ml10">立即兑换</a>'
}}$("#yunzuan").html(a);
this.getActivityStatus()
}else{$("#yunzuan").html("");
$("#yunzuan").hide()
}},getExchengeStatus:function(){if(sn.hasStorage!="Y"){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("立即兑换").removeClass().addClass("a-disable ml10");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if((this.state=="00"||this.state=="02"||this.state=="05"||this.state=="06")&&sn.hasStorage=="Y"){$("#btn_yzuan").attr({href:"javascript:cloudInfo.activiteAddCart();"});
$("#btn_yzuan").html("立即兑换").removeClass().addClass("a-detail ml10");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if(this.state=="01"){$("#yunzuan").html("");
$("#yunzuan").hide()
}else{if(this.state=="03"){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("已兑光").removeClass().addClass("a-disable ml10");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if(this.state=="04"){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("云钻不足").removeClass().addClass("a-disable ml10");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}}}}}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}},activiteAddCart:function(){$("body").AjaxLogin({success:function(){cloudInfo.cloudActionAddcart()
}})
},getActivityStatus:function(){if(typeof this.activityID!="undefined"&&this.activityID!=""){pageIsLogin(function(){var b="";
var a="";
if(sn.isCShop){b="00";
a=sn.vendorCode
}else{b="01";
a="0000000000"
}ajaxCrossDomain(sn.vipDomain+"/jsonp/checkQualify.do","activityCode="+cloudInfo.activityID+"&cmmdtyCode="+sn.partNumber+"&supplierCode="+a+"&purchaseNum=1&vendorFlag="+b,function(c){cloudInfo.state=c.state;
cloudInfo.getExchengeStatus()
},function(){cloudInfo.getExchengeStatus()
})
},function(){cloudInfo.getExchengeStatus()
})
}},cloudActionAddcart:function(){var a=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var b="";
if(cloudInfo.exchangeType=="01"){b="10"
}else{if(cloudInfo.exchangeType=="02"){b="09"
}}var c=cloudInfo.activityID;
var e=[];
CommonFourPage.getAfterSalesService(e);
buyNowFourPage(a,sn.partNumber,b,c,"","","","",e,function(){})
}};
cloudInfo.getCloudDrill=function(){if(scmInfo.pcYunZuanSwitch=="0"){return
}var a=sn.vendorCode;
var b=d("custno")?d("custno"):"";
if(isSpecialSale()){a=sn.vendor
}if(sn.cuxiaoType!="7-1"&&sn.cuxiaoType!="7-3"){$.ajax({url:sn.itemDomain+"/pds-web/ajax/getCalcPointInfoNew_"+a+"_"+sn.catenIds+"_"+sn.promotionPrice+"_"+b+"_"+sn.partNumber+"_"+sn.vipPrice+"_cloudInfo.yunzuanCallbackFunp.html",type:"get",cache:true,dataType:"jsonp",jsonpCallback:"cloudInfo.yunzuanCallbackFunp",success:function(){}})
}};
cloudInfo.yunzuanCallbackFunp=function(h){try{var a=sn.vipDomain;
var q=/^\d/g;
if(h.accountAmt&&h.accountAmt!=""){var p="";
var f=$.parseJSON(h.accountAmt);
if(!q.test(f)){if(f.addTotalAmt&&Math.floor(f.addTotalAmt)>0){var b=f.orderItem[0];
if(b.activityType&&b.activityType!=""&&f.orderItem.length==1){if(b.activityType==scmInfo.yzManFan){if(b.ladders&&b.ladders!=""){p='<span class="prom-yun">普通会员购买返<a name="item_'+sn.ninePartNumber+'_jifen_xq"   href="'+a+'" class="b " target="_blank" >'+b.addAmt+"</a>云钻，";
var m=b.ladders.length;
var l=["","",""];
for(var g=0;
g<m;
g++){var c=b.ladders[g];
var k=parseInt(c.num);
l[k-1]="实付满"+c.limitValue+"再返"+c.pointAmt+"云钻，"
}var s=l[0]+l[1]+l[2];
p+=s.substring(0,s.length-1);
p+="</span>"
}}else{if(b.activityType==scmInfo.yzDuoBei){if(b.multiple&&""!=b.multiple){p='<span class="prom-yun">返'+b.multiple+'倍云钻，普通会员预计共<a name="item_'+sn.ninePartNumber+'_jifen_xq" href="'+a+'" class="b " target="_blank">'+f.addTotalAmt+"</a>云钻</span>"
}}}$("#pointTitle").attr("data-tooltip","云钻多倍返数量有限，送完即止");
iFourth.bindYunzuan()
}else{var r='普通会员返<a name="item_'+sn.ninePartNumber+'_jifen_xq" href="'+a+'" class="b " target="_blank" >'+Math.floor(f.addTotalAmt)+"</a>云钻";
p="<span>"+r+"</span>"
}$("#pointBox").html(p);
$("#pointBox").show();
$("#pointTitle").css("display","block");
if(f.superTotalAmt&&Math.floor(f.superTotalAmt)>0&&scmInfo.superPointLink){var r='<a name="item_'+sn.ninePartNumber+'_main_superyzgbfdj" href="'+scmInfo.superPointLink+'" target="_blank" >SUPER会员享2%返利，此商品预计返'+Math.floor(f.superTotalAmt)+"云钻（价值"+accDiv(Math.floor(f.superTotalAmt),100)+"元）</a>";
$("#yzcxBox").html(r);
$("#yzcxTitle").css("display","block");
runCustomExpoData("item_"+sn.ninePartNumber+"_main_superyzljbg")
}$("#allcuxiao").show()
}else{$("#pointBox").hide();
$("#pointTitle").css("display","none");
$("#yzcxTitle").css("display","none")
}}else{var j=Math.floor(h.accountAmt);
if(j>0){p+='<span>购买立返<a name="item_'+sn.ninePartNumber+'_jifen_xq" href="'+a+'" class="b " target="_blank">'+j+"</a>云钻</span>";
$("#pointBox").html(p);
$("#pointBox").show();
$("#pointTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#pointBox").hide();
$("#pointTitle").css("display","none")
}}}else{$("#pointBox").hide();
$("#pointTitle").css("display","none");
$("#yzcxBox").html("");
$("#yzcxTitle").css("display","none")
}if(sn.priceType!="2"&&sn.priceType!="3"&&sn.priceType!="4"&&sn.isPreBuy!=1&&sn.isPreBuy!=2&&!sn.hwgShopFlag){cloudInfo.cloudDiamondInfo()
}else{$("#yunzuan").html("");
$("#yunzuan").hide()
}}catch(o){}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}iFourth.packageList.setMargTop();
iFourth.mainHeight()
};
function reyuRemind(){var e=sn.partNumber;
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var b="";
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){b=PriceShow.silenceTime
}else{b=PriceShow.endTime
}var g="";
var c="";
if(isSpecialSale()){g="1"
}else{if(sn.hwgShopFlag){g="2";
if(sn.shopType=="6"){c="Y"
}}}var f={pbType:"0",activityType:"0",activityId:PriceShow.actionId,attractId:"",partnumber:e,productName:$("#productName").text(),entrance:"pc",saleTime:activityTimeFormat(PriceShow.beginTime),endTime:activityTimeFormat(b),brandDiscount:"",productPrice:sn.promotionPrice,productLink:document.location.href,shopId:a,phoneNum:"",pdType:g,shoptType:c};
$("body").AjaxLogin({success:function(){favSaleNotice.inputPhone(f)
}})
}Recommend.getSpecialData=function(c){iFourth.win.scroll();
try{var a=c.sugGoods;
$.each(a,function(h,j){if(j.sceneId=="1-56"&&j.resCode!="02"){if(j.flag=="1"){j.ninePartNumber=sn.ninePartNumber;
j.partNumber=sn.passPartNumber;
if(j.skus.length>=5){j.num=4;
if($("html").hasClass("root1200")){j.num=5
}var g=template("special-tmpl",j);
$("#J-holiday").html(g);
$("#J-holiday").removeClass("zq-single-pdt").show();
var e=j.moduleNameUrl.split(",");
$("li[rel=#J-holiday] .ha_normal").attr("src",e[0]);
$("li[rel=#J-holiday] .ha_current").attr("src",e[1]);
$("li[rel=#J-holiday]").attr("has-data","true");
$("#listProContent").show();
lazyelem.listen();
iFourth.mainHeight()
}}else{if(j.flag=="2"){if(j.skus.length>=5){for(var h=0;
h<j.skus.length;
h++){var f="item_"+(sn.partNumber).substring(9,18)+"_reczqjx_1-";
j.skus[h].eleName=f+(h+1)+"_p_"+j.skus[h].vendorId+"_"+(j.skus[h].sugGoodsCode).substring(9,18)+"_"+j.skus[h].handwork;
j.skus[h].eleHref=sn.elecProductDomain+"/"+j.skus[h].vendorId+"/"+getEffectivePartNumber(j.skus[h].sugGoodsCode)+".html#?src="+j.skus[h].eleName;
j.skus[h].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+j.skus[h].vendorId+"-"+j.skus[h].sugGoodsCode+"_1_160x160.jpg";
j.skus[h].eleId="baoguang_reczqjx_1-"+(h+1)+"_"+j.skus[h].vendorId+"_"+(j.skus[h].sugGoodsCode).substring(9,18)+"_"+j.skus[h].handwork
}var g=template("special-tmpl2",j);
$("#J-holiday").html(g);
$("#J-holiday").addClass("zq-single-pdt").show();
var e=j.moduleNameUrl.split(",");
$("li[rel=#J-holiday] .ha_normal").attr("src",e[0]);
$("li[rel=#J-holiday] .ha_current").attr("src",e[1]);
$("li[rel=#J-holiday]").attr("has-data","true");
$("#listProContent").show();
runAnalyseByClass("baoguang_reczqjx");
iFourth.HolidayActivity.initPages();
lazyelem.listen();
iFourth.mainHeight()
}}}}});
Recommend.dpInitShowCss()
}catch(b){$("#J-holiday").html("");
$("#J-holiday").hide();
$("li[rel=#J-holiday]").hide()
}};
function initPcssPromotion(){$(".proinfo-main .big-prom-img").remove();
$(".proinfo-left .imgzoom-main .bzt").remove();
var a=sn.pcssDomain+"/pcss-web/label/poplabels.do?params=[";
a+="{cmmdtyCode:"+sn.partNumber+",supplierCode:"+sn.vendorCode+",channel:PC,labelScene:01},{cmmdtyCode:"+sn.partNumber+",supplierCode:"+sn.vendorCode+",channel:PC,labelScene:02}]";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"processPcssPromotion",success:function(b){}})
}function processPcssPromotion(f){if(f.length>0){for(var c=0;
c<f.length;
c++){var e=f[c];
if(e&&f.length>0&&typeof e.labelList!="undefined"){if(e.labelScene=="01"){for(var b=0;
b<e.labelList.length;
b++){var a=e.labelList[b];
if(typeof a.labelPlace!="undefined"&&a.labelPlace!=""){a.labelPath=a.labelPath.replace("http://","//");
if(a.labelPlace=="1"&&!sn.hwgShopFlag){iFourth.addBZT(a.labelPath,1)
}else{if(a.labelPlace=="2"){iFourth.addBZT(a.labelPath,2)
}else{if(a.labelPlace=="3"){iFourth.addBZT(a.labelPath,3)
}else{if(a.labelPlace=="4"){iFourth.addBZT(a.labelPath,4)
}}}}}}}else{if(e.labelScene=="02"&&sn.hasStorage=="Y"){for(var b=0;
b<e.labelList.length;
b++){var a=e.labelList[b];
if(typeof a.labelPlace!="undefined"&&a.labelPlace!=""){a.labelPath=a.labelPath.replace("http://","//");
$("#timePanel").before('<img class="big-prom-img" src="'+a.labelPath+'" alt="'+a.labelText+'">')
}}}}}}}}function initGetShopPay(){var c="1";
if(sn.manageInvFlag=="0"){c="0"
}if(sn.factorySendFlag=="1"){c="3"
}var b="";
var a=sn.vendorCode;
if(sn.csSwlShopFlag){a="0000000000"
}if(sn.pchdfk=="0"&&sn.serviceLabel!="1"){b=sn.solpUrl+"/solp/http/SMVAS02_PDS_"+a+"_"+sn.partNumber+"_"+sn.lesCityId+"_"+sn.lesCityId+sn.lesDistrictId+"_"+sn.catenIds+"_"+sn.brandId+"_"+PriceShow.actionId+"_"+c+"_queryCodForPage.htm"
}else{return
}$.ajax({url:b,type:"get",dataType:"jsonp",jsonp:"callback",jsonpCallback:"queryCodForPage",cache:true,success:function(e){if(e&&e.isSupportCOD=="1"){sn.isSupportCOD=true;
sn.isSupportLink=scmInfo.luaHdfkDesc;
sn.title="货到付款";
itemService.zySupport()
}}})
}function getPingGou(c,a,e){var b=sn.pgDomain+"/pgs/act/pc/act_"+c+"_"+a+"_queryAct.json";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:e,success:function(f){},error:function(){$("#pin_go_enter").hide()
}})
}Recommend.lazyFooter=function(){if(typeof lazyElems!="undefined"){lazyElems["pds-footer"].handle=processFooter;
lazyElems["pds-footer"].enable=true;
lazyElems["pds-footer"].height=500
}else{setTimeout(function(){Recommend.lazyFooter()
},100)
}};
function processFooter(){var a=sn.itemDomain+"/pds-web/getFooter.html";
$.ajax({url:a,type:"get",async:false,dataType:"text",success:function(b){try{$("#pds-footer").html(b)
}catch(c){}},error:function(){}})
}Recommend.lazyRelGroup=function(){if(sn.suningJiWuFlag){return
}if(typeof lazyElems!="undefined"){lazyElems.relGroup.handle=processGourpAndBrand;
lazyElems.relGroup.enable=true;
iFourth.win.scroll()
}else{setTimeout(function(){Recommend.lazyRelGroup()
},100)
}};
function processGourpAndBrand(){var b=$("#breadGroup").find("li");
if(b.length>0){var a='<div class="area-head"><h3>相关分类</h3></div><ul class="procon-relate">';
a+='<li><a name="'+sn.ninePartNumber+'_xgcata_cata01" target="_blank" title="'+sn.categoryName3+'" href="'+sn.listHost+"0-"+sn.categoryId+'-0.html">'+sn.categoryName3+"</a></li>";
$(b).each(function(h){var j=$(this).find("a").html();
var g=$(this).find("a").attr("href");
var f="item_"+sn.ninePartNumber+"_rec_relevent-category";
a+='<li><a target="_blank" href="'+g+'" name="'+f+'" title="'+j+'">'+j+"</a></li>"
});
a+="</ul>";
$("#relGroup").html(a).show()
}else{$("#relGroup").hide()
}if(!sn.isBook){var e=$("#breadBrand").find("li");
if(e.length>0){var c='<div class="area-head"><h3>相关品牌</h3></div><ul class="procon-relate">';
$(e).each(function(h){var k=$(this).find("a").attr("title");
var g=$(this).find("a").attr("href");
var j=$(this).find("a").attr("brandId");
var f="item_"+sn.ninePartNumber+"_rec_relevent-brand";
var l="baoguang_xgpp_"+(h+1)+"_none_"+j+"_01A";
c+='<li><a target="_blank" href="'+g+'" id="'+l+'" name="'+f+'" title="'+k+'">'+k+"</a></li>"
});
c+="</ul>";
$("#relBrand").html(c).show()
}else{$("#relBrand").hide()
}}}function errorMainPicture(b,a){$(b).attr("src",sn.amPdsRelation+"images/blank_pic_60.png");
if(!a){$(b).attr("src-medium",sn.amPdsRelation+"images/blank_pic_800.jpg")
}$(b).attr("src-large",sn.amPdsRelation+"images/blank_pic_800.jpg")
}CommonFourPage.itemParameterTab=function(b,a){iFourth.Tab(".ph-paras-rec .tab-items",".ph-paras-rec .pr-tab-content",function(j,f,h){var i=j.attr("has-data");
if(i=="false"){var c=j.attr("parametercode");
var e=j.attr("index");
var g=sn.tuijianDomain+"/recommend-portal/dyBase.jsonp?parameter="+sn.passPartNumber+"&vendorId="+sn.vendorCode+"&parameterCode="+c+"&sceneIds=11-55&cityId="+sn.lesCityId+"&count=5";
$.ajax({url:g,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"parameterrecommend",success:function(m){if(m&&m.sugGoods&&m.sugGoods.length>0){var o=m.sugGoods[0];
if(o.resCode!="02"&&o.sceneId=="11-55"&&o.skus.length>0){for(var l=0;
l<o.skus.length;
l++){o.skus[l].markPoint="item_"+(sn.partNumber).substring(9,18)+"_reccsksh_"+e+"-";
o.skus[l].eleName=o.skus[l].markPoint+(l+1)+"_p_"+o.skus[l].vendorId+"_"+(o.skus[l].sugGoodsCode).substring(9,18)+"_"+o.skus[l].handwork;
o.skus[l].eleHref=sn.elecProductDomain+"/"+o.skus[l].vendorId+"/"+getEffectivePartNumber(o.skus[l].sugGoodsCode)+".html#?src="+o.skus[l].markPoint+(l+1)+"_p_"+o.skus[l].vendorId+"_"+getEffectivePartNumber(o.skus[l].sugGoodsCode)+"_"+o.skus[l].handwork;
o.skus[l].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+o.skus[l].vendorId+"-"+o.skus[l].sugGoodsCode+"_1_120x120.jpg";
o.skus[l].eleId="baoguang_reccsksh_"+e+"-"+(l+1)+"_"+o.skus[l].vendorId+"_"+(o.skus[l].sugGoodsCode).substring(9,18)+"_"+o.skus[l].handwork
}var k=template("rec-para-tmpl",o);
j.find(".p-l-wrapper").html(k);
if(e=="1"){$(".ph-paras-rec").show()
}runAnalyseByClass("baoguang_reccsksh_"+e)
}}}})
}})
};
Recommend.callBackGetnoGoods=function(a){$.each(a.sugGoods,function(b,c){if((c.resCode=="01"||c.resCode=="03")&&c.sceneId=="11-59"){CommonFourPage.Recommend.notSaleSugGoods=a.sugGoods[0];
if(sn.hasStorage=="Y"){return
}Recommend.processNoGoods(CommonFourPage.Recommend.notSaleSugGoods)
}})
};
Recommend.processNoGoods=function(g){var b="";
var c="";
if($("#shopingGuideContent").length>0&&$.trim($("#shopingGuideContent").html())!=""){c="1"
}if(g&&g!=""&&g.skus.length>5){var e="";
var f={skus:[]};
for(var a=0;
a<g.skus.length;
a++){g.skus[a].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recxjtj01n_1-";
g.skus[a].eleName=g.skus[a].markPoint+(a+1)+"_p_"+g.skus[a].vendorId+"_"+(g.skus[a].sugGoodsCode).substring(9,18)+"_"+g.skus[a].handwork;
g.skus[a].eleHref=sn.elecProductDomain+"/"+g.skus[a].vendorId+"/"+getEffectivePartNumber(g.skus[a].sugGoodsCode)+".html#?src="+g.skus[a].markPoint+(a+1)+"_p_"+g.skus[a].vendorId+"_"+getEffectivePartNumber(g.skus[a].sugGoodsCode)+"_"+g.skus[a].handwork;
g.skus[a].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+g.skus[a].vendorId+"-"+g.skus[a].sugGoodsCode+"_1_120x120.jpg";
g.skus[a].eleId="baoguang_recxjtj01n_1-"+(a+1)+"_"+g.skus[a].vendorId+"_"+(g.skus[a].sugGoodsCode).substring(9,18)+"_"+g.skus[a].handwork;
if(g.skus[a].identify=="1"&&e==""){e=g.skus[a];
if(Recommend.jumpNewGoods(e)){return
}}else{f.skus.push(g.skus[a])
}}f.type="0";
if(c=="1"){if(e!=""){f.skuNum=2;
f.type="1";
f.skus=f.skus.slice(0,10)
}else{f.type="3";
f.skuNum=4;
if($("html").hasClass("root1200")){f.skuNum=5
}}}else{if(e!=""){f.type="2";
f.specialSku=f.skus.slice(0,2);
f.skus=f.skus.slice(2)
}f.skuNum=8;
if($("html").hasClass("root1200")){f.skuNum=10
}}f.identify=e;
var b=template("noSale-rec-tmpl",f);
$("#J-slide1").html(b).show();
if(e!=""){getNotSaleOther(e.sugGoodsCode,e.vendorId)
}iFourth.initNoGoodsRec();
lazyelem.listen();
runAnalyseByClass("baoguang_recxjtj01n")
}else{$("#J-slide1").hide();
if(g&&g!=""&&g.skus.length>0){for(var a=0;
a<g.skus.length;
a++){if(g.skus[a].identify=="1"){Recommend.jumpNewGoods(g.skus[a])
}}}}iFourth.mainHeight()
};
Recommend.jumpNewGoods=function(a){if(window.location.hash.indexOf("recwhtjsp")>-1||sn.prdType=="T"||sn.isBook||scmInfo.pcNoGoodsJumpSwitch!="1"){return false
}if((sn.shopType=="1"||sn.shopType=="3")&&(a.productType=="2"||a.productType=="6")){return false
}var b="src=item_"+sn.partNumber+"_recwhtjsp_1-1_p_"+a.vendorId+"_"+a.sugGoodsCode+"_"+a.handwork;
window.location.href=sn.itemDomain+"/"+a.vendorId+"/"+a.sugGoodsCode+".html#?"+b;
return true
};
Recommend.proinfoShortTip=function(){if(window.location.hash.indexOf("recwhtjsp")>-1&&window.location.hash.indexOf("_")>-1&&scmInfo.pcNoGoodsJumpSwitch=="1"){var a=window.location.hash.split("_")[5];
var b="<span></span>由于您选择的地区苏宁自营暂时无货或者不支持配送，已为您切换第三方商家同款商品。";
if(typeof a!="undefined"&&(a=="0000000000"||a.slice(0,3)=="001")){b="<span></span>由于您选择的地区苏宁商家暂时无货或者不支持配送，已为您切换苏宁自营同款商品。"
}$("#proinfoShortTip").html(b).show()
}};
function formatEvaluation(b){var c=Math.floor(b).toString().length;
switch(c){case 1:sn.reviewTotal=b;
break;
case 2:sn.reviewTotal=b.toString().substring(0,1)*10+"+";
break;
case 3:sn.reviewTotal=b.toString().substring(0,1)*100+"+";
break;
case 4:sn.reviewTotal=b.toString().substring(0,2)*100+"+";
break;
case 5:var a=accDiv(b.toString().substring(0,2),10);
if(a.toString().indexOf(".")<0){sn.reviewTotal=a+".0万+"
}else{sn.reviewTotal=a+"万+"
}break;
case 6:sn.reviewTotal=b.toString().substring(0,2)+"万+";
break;
default:sn.reviewTotal="99万+"
}}function accAdd(h,f){var c,b,a;
try{c=h.toString().split(".")[1].length
}catch(g){c=0
}try{b=f.toString().split(".")[1].length
}catch(g){b=0
}a=Math.pow(10,Math.max(c,b));
return Math.round(h*a+f*a)/a
}function accSub(h,f){var c,b,a;
try{c=h.toString().split(".")[1].length
}catch(g){c=0
}try{b=f.toString().split(".")[1].length
}catch(g){b=0
}a=Math.pow(10,Math.max(c,b));
n=(c>=b)?c:b;
return(Math.round(h*a-f*a)/a).toFixed(n)
}function accDiv(arg1,arg2){var t1=0,t2=0,r1,r2;
try{t1=arg1.toString().split(".")[1].length
}catch(e){}try{t2=arg2.toString().split(".")[1].length
}catch(e){}with(Math){r1=Number(arg1.toString().replace(".",""));
r2=Number(arg2.toString().replace(".",""));
return(r1/r2)*pow(10,t2-t1)
}}function accMul(f,b){var a=0,g=f.toString(),c=b.toString();
try{a+=g.split(".")[1].length
}catch(h){}try{a+=c.split(".")[1].length
}catch(h){}return Number(g.replace(".",""))*Number(c.replace(".",""))/Math.pow(10,a)
}function getNotSaleOther(c,a){var b=sn.reviewNew+"ajax/review_satisfy/general-"+c+"-"+a+"-----satisfy.htm";
$.ajax({url:b,cache:true,async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"satisfy",success:function(e){if(e.returnCode=="1"){var f=e.reviewCounts[0].totalCount;
$("#J-slide1 .same-pdt .review").html("累计评价 <i>"+f+"</i>").show()
}}});
$.ajax({url:sn.itemDomain+"/pds-web/ajax/vendorInfo_"+a+".html",type:"get",dataType:"json",cache:true,success:function(e){if(e&&e.shopName){$("#J-slide1 .same-pdt .stores").html("商家： <strong>"+e.shopName+"</strong>").show()
}}})
}function isSpecialSale(){return !!sn.tmShopFlag
}CommonFourPage.sort=function(){if(sn.cuxiaoSeq){var a=$("#allcuxiao .promo-list li");
a.sort(function(f,c){var g=sn.cuxiaoSeq[$(f).attr("id")];
var e=sn.cuxiaoSeq[$(c).attr("id")];
if(typeof g=="undefined"||typeof e=="undefined"){return 0
}else{return g-e
}});
var b="";
$.each(a,function(e,c){b+=c.outerHTML
});
$("#allcuxiao .promo-list").html(b)
}};
yfbRealName=function(a){if(a=="E102"){$("#yfbTitle").show();
$("#allcuxiao").show();
iFourth.bindPromo()
}};
function icpsItemlimit(a){if(sn.isPreBuy==1||sn.isPreBuy==2||sn.priceType=="2"||sn.priceType=="3"||sn.priceType=="4"){return
}try{if(a.limitCount!=""&&parseInt(a.limitCount)>0){sn.hasLimitCount=true;
$("#buyNum").attr("max",a.limitCount);
$("#productLimit").html(a.limitLabel);
$("#productLimit").show();
iFourth.buyNum()
}else{if($("#buyNum").attr("max")!="999"){if(a.startCount&&a.startCount!=""&&parseInt(a.startCount)>0){sn.startCount=a.startCount;
$("#buyNum").val(sn.startCount);
$("#buyNum").attr("min",a.startCount);
$("#productLimit").html("<em>"+a.startCount+"</em>件起售");
$("#productLimit").show();
iFourth.buyNum()
}else{sn.hasLimitCount=false;
$("#buyNum").attr("max",99);
$("#productLimit").html("每人限购<em>99</em>件");
$("#productLimit").hide();
iFourth.buyNum()
}}}}catch(b){}}CommonFourPage.queryMemberType=function(){if(sn.memberStatus){CommonFourPage.queryMemberTypeBack(sn.memberStatus);
forReturnGoods()
}else{setTimeout(CommonFourPage.queryMemberType,200)
}};
CommonFourPage.queryMemberTypeBack=function(a){if(a.result&&a.result.custType=="person"){if(a.result.paidFlag=="A9200010"){sn.ffMemberFlag="1"
}else{sn.personVipFlag="1"
}}else{if(a.result&&a.result.custType=="company"){sn.companyVipFlag="1"
}}};
function forReturnGoods(){if(sn.returnGoodsSwitch&&sn.returnGoodsSwitch=="1"){if(sn.companyVipFlag!="1"){returnGoodsService()
}else{if(sn.companyVipFlag=="1"){$("#returnGoods").hide()
}}}}CommonFourPage.queryMemberStatusInfo=function(){if(sn.memberStatus){CommonFourPage.MemberStatusInfoBack(sn.memberStatus)
}else{setTimeout(CommonFourPage.queryMemberStatusInfo,200)
}};
CommonFourPage.MemberStatusInfoBack=function(a){if(a&&a!=""){if(a.status=="success"){if(a.result&&a.result.custType=="person"){if(sn.hasMemberProm=="Y"){yfbRealName(a.result.eppAuthStat);
$("#govTitle").html("").hide()
}}else{if(a.result&&a.result.custType=="company"){if(sn.hasMemberProm=="Y"){CommonFourPage.govPriceHtmlBuild(a)
}}}}else{if(sn.hasMemberProm=="Y"){CommonFourPage.govPriceHtmlBuild(a)
}}supervipProcesss(a)
}};
function supervipProcesss(a){if(typeof sn.vipPrice=="undefined"||sn.vipPrice==""||(scmInfo&&scmInfo.ffMemberSwitch=="1")){$(".super-vipbox").hide();
return
}else{$(".super-vipbox").show()
}if((a.code=="NOT_LOGIN")||(a.status=="success"&&a.result&&a.result.paidFlag!="A9200010")){getSuperVipText(a)
}}function getSuperVipText(a){if(scmInfo&&scmInfo.ffMemberMsgSwitch=="1"){return
}if(sn.superVip){processSuperVipText(a,sn.superVip)
}else{$.ajax({url:sn.supervipDomain+"/snprime-web/ajax/outer/jsonp/ruleMsg_supervipText.htm",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"supervipText",success:function(b){sn.superVip=b;
processSuperVipText(a,b)
}})
}}function superVipLogin(a){$("body").AjaxLogin({success:function(){$(".super-vipbox .more-equity").attr("href",a).show();
$(".super-vipbox .more-equity").attr("target","_blank");
window.open(a)
}})
}function processSuperVipText(a,b){if(b&&b.code=="1"&&b.data){if(a&&a.code=="NOT_LOGIN"){if(b.data.toLogin&&b.data.toLogin!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.toLogin+"&gt;");
$(".super-vipbox .more-equity").attr("href","javascript:superVipLogin('"+b.data.hyperlink+"');").show()
}}else{if(a.status=="success"){$(".super-vipbox .more-equity").attr("target","_blank");
if(sn.custLevel=="161000000100"){if(b.data.v0&&b.data.v0!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v0+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}else{if(sn.custLevel=="161000000110"){if(b.data.v1&&b.data.v1!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v1+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}else{if(sn.custLevel=="161000000120"){if(b.data.v2&&b.data.v2!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v2+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}else{if(sn.custLevel=="161000000130"){if(b.data.v3&&b.data.v3!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v3+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}else{if(sn.custLevel=="161000000140"){if(b.data.v4&&b.data.v4!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v4+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}else{if(b.data.v0&&b.data.v0!=""&&b.data.hyperlink&&b.data.hyperlink!=""){$(".super-vipbox .more-equity").html(b.data.v0+"&gt;");
$(".super-vipbox .more-equity").attr("href",b.data.hyperlink).show()
}}}}}}}}}}CommonFourPage.govPriceLogin=function(){$("body").AjaxLogin({success:function(){ms_memberOrgs.queryIdentityStatus(CommonFourPage.govPriceHtmlBuild)
}})
};
CommonFourPage.govPriceHtmlBuild=function(b){if(b&&b.status=="success"&&b.code==""){if(b.result&&b.result.idstCode=="233000000030"){if(sn.scodeType!="7"&&sn.govPrice!=undefined&&sn.govPrice!=""&&parseFloat(sn.govPrice)<parseFloat(sn.promotionPrice)){var a="";
a+='<label>企业价</label><i class="i-triangle"></i>';
a+='<p class="promotion-content">企业会员专享价 ¥'+sn.govPrice+' <a href="//b.suning.com/b2b.htm" class="b ml10" target="_blank">查看更多会员权益</a></p>';
$("#govTitle").html(a);
$("#govTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#govTitle").hide()
}if(!sn.hasLimitCount){$("#buyNum").attr("max",999);
iFourth.buyNum(999)
}if(sn.cuxiaoType=="4-1"&&PriceShow.maxGovNum&&PriceShow.maxGovNum!=""){PriceShow.maxGovNum=PriceShow.maxGovNum>999?999:PriceShow.maxGovNum;
$("#productLimit").html("企业会员每人限购<em>"+PriceShow.maxGovNum+"</em>件").show();
$("#buyNum").attr("max",PriceShow.maxGovNum);
iFourth.buyNum(999)
}}else{if(sn.scodeType!="7"&&sn.govPrice!=undefined&&sn.govPrice!=""&&parseFloat(sn.govPrice)<parseFloat(sn.promotionPrice)){var a="";
a+='<label>企业价</label><i class="i-triangle"></i>';
a+='<p class="promotion-content"> 企业会员专享价¥'+sn.govPrice+' <a href="//my.suning.com/getEnterpriseMemberIdentity.do" class="b ml10" target="_blank">认证享企业会员专享价</a></p>';
$("#govTitle").html(a);
$("#govTitle").css("display","block");
$("#sfrz").show();
$("#allcuxiao").show()
}else{$("#govTitle").hide()
}}}else{if(b&&b.code=="NOT_LOGIN"){if(sn.scodeType!="7"&&sn.govPrice!=undefined&&sn.govPrice!=""&&parseFloat(sn.govPrice)<parseFloat(sn.promotionPrice)){CommonFourPage.govPriceNoLogin()
}}else{$("#govTitle").hide()
}}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}};
CommonFourPage.govPriceNoLogin=function(){var a="";
a+='<label>企业价</label><i class="i-triangle"></i>';
a+='<p class="promotion-content">';
a+=' <a href="javascript:CommonFourPage.govPriceLogin();" class="b" name="item_'+sn.ninePartNumber+'_zhengqi_login">登录企业账号，享受企业价</a>';
a+="</p>";
$("#govTitle").html(a);
$("#govTitle").css("display","block");
$("#allcuxiao").show()
};
function getEffectivePartNumber(b){var a=/^0*/;
return b?b.replace(a,""):""
}function paserPartNumber(c){if(!c&&typeof c=="undefined"){return""
}var b=c.length;
if(b<18){for(var a=0;
a<(18-b);
a++){c="0"+c
}}return c
}var scrapeCoupon=scrapeCoupon||{couponResultType:"",couponOrderId:"",couponType:"",scrapeCouponIng:"N"};
CommonFourPage.ScrapeCoupon={getMemberRemain:function(){if(sn.memberRemain=="1"){$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/getMemberRemain.do",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(a){if(a&&a.result=="1"){var b=a.memberRemain;
if(b<=0){$("#coupon-num-id").html("0");
$("#coup2-id p").html("机会已用完，明天再来吧");
$("#coup2-id").show()
}else{$("#can-id").show();
$("#coupon-num-id").html(b)
}}else{$("#coup2-id p").html("系统繁忙中……");
$("#coup2-id").show()
}},error:function(){$("#coup2-id p").html("系统繁忙中……");
$("#coup2-id").show()
}})
}else{$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/external/getUserQualificationInfo.do",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(a){if(a&&a.result=="1"){var b=a.memberRemain;
$("#pointNum").html(a.point);
if(b<=0){$("#coupon-num-id").html("0");
$("#coup2-id p").html("机会已用完，明天再来吧");
$("#coup2-id").show()
}else{if(!a.isEnoughPoint){$("#coupon-num-id").html(b);
$("#coup2-id p").html("云钻不足，快去赚吧");
$("#coup2-id").show()
}else{$("#can-id").show();
$("#coupon-num-id").html(b)
}}}else{$("#coup2-id p").html("系统繁忙中……");
$("#coup2-id").show()
}},error:function(){$("#coup2-id p").html("系统繁忙中……");
$("#coup2-id").show()
}})
}},getMemberRemainAgin:function(){if(sn.memberRemain=="1"){$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/getMemberRemain.do",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(a){if(a&&a.result=="1"){var b=a.memberRemain;
if(b<=0){$("#coupon-num-id").html("0");
$("#coupon-msg-id").removeClass("coupon-msg").html("")
}else{$("#coupon-num-id").html(b);
$("#coupon-msg-id").addClass("coupon-msg").html("再刮一次")
}}},error:function(){}})
}else{$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/external/getUserQualificationInfo.do",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(a){if(a&&a.result=="1"){var b=a.memberRemain;
$("#pointNum").html(a.point);
if(b<=0){$("#coupon-num-id").html("0");
$("#coupon-msg-id").removeClass("coupon-msg").html("")
}else{if(!a.isEnoughPoint){$("#coupon-num-id").html(b);
$("#coupon-msg-id").removeClass("coupon-msg").html("")
}else{$("#coupon-num-id").html(b);
$("#coupon-msg-id").addClass("coupon-msg").html("再刮一次")
}}}},error:function(){}})
}},executeScrapeResult:function(){scrapeCoupon.scrapeCouponIng="Y";
runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-action");
reSetCoupon();
$("#canvas-box").hide();
$("#start-gua-id").show();
$("#gend-finish").show();
iFourth.textAnimation();
var a="";
var c="";
if(typeof bd!="undefined"&&bd&&bd!="undefined"){a=bd.rst();
c=bd.ptoken()
}var b={storeId:sn.vendorCode,productId:sn.partNumber,channelId:31,cityId:sn.lesCityId,showDistrict:1,marketingActivityType:sn.cuxiaoType,detect:a,deviceId:c,terminalType:0};
$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/executeScrape.do",data:b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(f){$("#start-gua-id").hide();
$("#gend-finish").hide();
if(f&&f.result=="1"){if(f.resultType=="0"){$("#coup5-id p").html(f.successMsg)
}else{if(f.resultType=="1"){var e='<form action=""><ul>';
$.each(f.couponList,function(h,g){e=e+'    <li>        <input type="radio" name="juan1" >        <label id="couponLabel'+h+'" onclick="choiceCoupon(\''+g.orderId+"','"+g.couponType+"','couponLabel"+h+"')\">            <i></i><span>"+g.couponDisplayMsg+"</span>        </label>    </li>"
});
e=e+"</ul></form>";
$("#coupon-content-id").html(e).show()
}}scrapeCoupon.couponResultType=f.resultType;
CommonFourPage.ScrapeCoupon.getMemberRemainAgin();
if(scrapeCoupon.couponResultType=="1"){$("#start-gua-id").show();
$("#coupon-detail-id").show();
$("#coupon-content-id").show()
}else{if(scrapeCoupon.couponResultType=="0"){$("#coup5-id").show()
}}}else{$("#coup2-id p").html(f.failedReson);
$("#coup2-id").show()
}scrapeCoupon.scrapeCouponIng="N"
},error:function(){scrapeCoupon.scrapeCouponIng="N"
}})
},sendScrapeCouponResult:function(){scrapeCoupon.scrapeCouponIng="Y";
var a={orderId:scrapeCoupon.couponOrderId,couponType:scrapeCoupon.couponType};
$.ajax({url:sn.scrapeCouponUrl+"/yzdh-web/voucher/scrape/ajax/sendScrapeCoupon.do",data:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callbackjsondata",success:function(b){if(b&&b.result=="1"){reSetCoupon();
$("#coup5-id p").html(b.successMsg);
$("#coup5-id").show()
}else{$("#getCouponErrorMsg-id").html(b.failedReson);
iFourth.errMsg_db()
}scrapeCoupon.scrapeCouponIng="N"
},error:function(){scrapeCoupon.scrapeCouponIng="N"
}})
},resultCoupon:function(){if(scrapeCoupon.scrapeCouponIng=="N"){CommonFourPage.ScrapeCoupon.executeScrapeResult()
}},sendScrapeCoupon:function(){if(scrapeCoupon.scrapeCouponIng=="N"){CommonFourPage.ScrapeCoupon.sendScrapeCouponResult()
}}};
function closeCouponBox(){$("#couponBox-id").hide();
$(".coupon-box").attr("style","");
reSetCoupon();
scrapeCoupon.couponResultType="";
scrapeCoupon.couponOrderId="";
scrapeCoupon.couponType="";
runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-back")
}function scrapeRule(){iFourth.scrapingRulesShow();
runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-instruction")
}function returnCouponBox(){iFourth.scrapingRuleHide()
}function scrapeCouponLoginSataus(){runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-clickent");
pageIsLogin(function(){$("#couponBox-id").show();
CommonFourPage.ScrapeCoupon.getMemberRemain()
},function(){$("body").AjaxLogin({success:function(){$("#couponBox-id").show();
CommonFourPage.ScrapeCoupon.getMemberRemain()
}})
})
}function reSetCoupon(){$("#can-id").hide();
$("#no-can-id").hide();
$("#start-gua-id").hide();
$("#coup5-id").hide();
$("#coup2-id").hide();
$("#coupon-content-id").hide();
$("#coupon-detail-id").hide();
$("#getCouponErrorMsg-id").html("");
$("#gend-finish").hide()
}function choiceCoupon(a,c,b){scrapeCoupon.couponOrderId=a;
scrapeCoupon.couponType=c;
$("#coupon-content-id ul li label").removeClass("choice-juan");
$("#"+b).addClass("choice-juan");
if(c=="0"){runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-dpq")
}else{runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-wdq")
}}function canvasSupport(){return !!document.createElement("canvas").getContext
}function executeScrape(){if($("#coupon-msg-id").html()=="再刮一次"){runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-again")
}else{runCustomExpoData("item_"+sn.ninePartNumber+"_coupon_blow-click")
}reSetCoupon();
if(!canvasSupport()){iFourth.judgeCanvasLow()
}else{iFourth.scratch_card()
}$("#start-gua-id").show();
$("#canvas-box").show()
}function fillPreSellDom(e,a,b){var c=new Date(parseInt(a));
start="开始："+(c.getMonth()+1)+"月"+c.getDate()+"日"+c.getHours()+"时"+c.getMinutes()+"分"+c.getSeconds()+"秒";
c=new Date(parseInt(b));
end="结束："+(c.getMonth()+1)+"月"+c.getDate()+"日"+c.getHours()+"时"+c.getMinutes()+"分"+c.getSeconds()+"秒";
e.find("dd").eq(0).html(start);
e.find("dd").eq(1).html(end)
}function SubCode(h,i,l,c,j){var f={$color:h.find("li"),$version:i==""?"":i.find("li"),param:[],saleInfo:{},partList:c,type:j,allSaleState:true};
function m(){$.each(l,function(q,r){if(f.type!="s"){f.saleInfo[r.cmmdtyCode]=r
}else{f.saleInfo[r.partNumber]=r
}});
var p=false;
if(f.$color&&f.$color!=""){f.param[0]=[];
$.each(f.$color,function(r,t){f.param[0][r]={};
var q="";
if(f.type=="g"){$(t).attr("cid",$(t).attr("colorid"))
}if(f.$version&&f.$version!=""){$.each(f.$version,function(w,u){if(f.type=="g"){$(u).attr("cid",$(u).attr("versionid"))
}var x=f.partList[$(t).attr("cid")+$(u).attr("cid")];
if(typeof x!="undefined"){var v=e(x.partNumber);
if(x&&v=="Y"){q="Y"
}else{if(q==""){q=v
}}if(v!="Z"){p=true
}if(f.type=="s"&&typeof x!="undefined"){o(f.param[0][r],x.partNumber)
}}})
}else{var s=f.partList[$(t).attr("cid")];
if(typeof s!="undefined"){q=e(s.partNumber)
}else{q="Z"
}if(f.type=="g"&&q=="Z"){$(t).children("a").unbind()
}if(q!="Z"){p=true
}}f.param[0][r].status=q;
f.param[0][r].title=$(t).attr("title");
f.param[0][r].dom=t
})
}if(f.$version&&f.$version!=""){f.param[1]=[];
$.each(f.$version,function(s,q){f.param[1][s]={};
var r="";
$.each(f.$color,function(u,w){var v=f.partList[$(w).attr("cid")+$(q).attr("cid")];
if(typeof v!="undefined"){var t=e(v.partNumber);
if(t=="Y"){r="Y"
}else{if(r==""){r=t
}}if(f.type=="s"&&typeof v!="undefined"){o(f.param[1][s],v.partNumber)
}}});
f.param[1][s].status=r;
f.param[1][s].title=$(q).attr("title");
f.param[1][s].dom=q
})
}if(!p&&(f.type=="s"&&gProduct.gors==0)){$("#J-TZM").hide();
$("#nowProduct").html("建议您选购其它商品").show();
$("#c_kucun").html("本地区暂不销售").show();
$("#timePanel").hide();
$("#weightid").hide();
f.allSaleState=false;
processNotSale()
}else{b()
}}function g(q){if(f.param.length==2){if(q=="c"){h.removeClass("bg-0e6")
}else{if(q=="v"){i.removeClass("bg-0e6")
}}if(f.$color.parent().find("li.selected").length>0&&f.$version.parent().find("li.selected").length>0){var p=f.$color.parent().find("li.selected").eq(0);
var t=f.$version.parent().find("li.selected").eq(0);
var s=f.partList[p.attr("cid")+""+t.attr("cid")];
if(f.type=="g"){s=f.partList[p.attr("colorid")+""+t.attr("versionid")]
}var r="Z";
if(typeof s!="undefined"){r=e(s.partNumber)
}if(f.type=="g"&&(r=="Y"||r=="N")){Cluster.changeProudct(s.partNumber)
}else{if(q!=""&&f.type=="s"&&r=="Y"){sn.partNumber=s.partNumber;
sn.curSubItemId=s.itemId;
sn.imageCount=s.imageCount;
gMain.switchSub()
}else{if(r!="Y"&&q=="c"){$(t).removeClass("selected");
i.addClass("bg-0e6");
k()
}else{if(r!="Y"&&q=="v"){$(p).removeClass("selected");
h.addClass("bg-0e6");
k()
}}}}}}else{if(f.type=="g"){var p=f.$color.parent().find("li.selected").eq(0);
if(typeof p!="undefined"){var s=f.partList[p.attr("colorid")];
if(typeof s!="undefined"){Cluster.changeProudct(s.partNumber)
}}}}b()
}function k(){$("#phonedl").hide();
$("#phoned2").hide();
$("#freenessPay").hide();
$("#yanbao").hide();
$("#buycount").hide()
}function b(){if(f.type=="g"||f.type=="s"){thisOnSale.onSaleDom=null
}var v="";
var E=false;
if(f.param.length==1){$(f.$color).removeClass("disabled c-disabled notic-able not-able");
for(var G=0;
G<f.param[0].length;
G++){var p=f.param[0][G];
var A=p.dom;
var t=p.status;
var J=p.title;
if(v==""&&t=="Y"&&!$(A).hasClass("selected")){v=A
}else{if($(A).hasClass("selected")){E=true
}}if(t!="Y"&&!$(A).hasClass("selected")){$(A).addClass("disabled c-disabled not-able")
}if(t=="N"){$(A).addClass("notic-able");
$(A).attr("subPart",f.partNumber)
}a(A,J,t)
}}else{var s=f.$color.parent().find("li.selected").length>0;
var y=f.$version.parent().find("li.selected").length>0;
$(f.$color).removeClass("disabled c-disabled notic-able not-able");
$(f.$version).removeClass("disabled c-disabled notic-able not-able");
var x="";
var B="";
if(s&&y){E=true
}var q=false;
for(var G=0;
G<f.param[0].length;
G++){var w=f.param[0][G];
var r=w.dom;
var u=w.status;
if($(r).hasClass("selected")){x=w
}for(var F=0;
F<f.param[1].length;
F++){var I=f.param[1][F];
var z=I.dom;
var D=I.status;
if($(z).hasClass("selected")){B=I
}if(!s){var J=I.title;
a(z,J,D)
}else{if(x!=""){var J=x.title+" "+I.title;
var C=$(x.dom).attr("cid")+$(z).attr("cid");
var H=f.partList[C];
var t="W";
if(typeof H!="undefined"){var t=e(H.partNumber)
}if(t=="N"){$(z).addClass("notic-able");
$(z).attr("subPart",H.partNumber)
}else{if(v==""&&t=="Y"&&!$(z).hasClass("selected")){v=z
}}a(z,J,t)
}}}if(!y){var J=w.title;
a(r,J,u)
}else{var J=w.title+" "+B.title;
var C=$(r).attr("cid")+$(B.dom).attr("cid");
var H=f.partList[C];
var t="W";
if(typeof H!="undefined"){var t=e(H.partNumber);
if(t=="N"){$(r).addClass("notic-able");
$(r).attr("subPart",H.partNumber)
}else{if(!q&&t=="Y"&&!$(r).hasClass("selected")){q=true;
v=r
}}}a(r,J,t)
}}if(f.type=="s"&&!(s&&y)){if(s){gProduct.minPrice=x.minPrice;
gProduct.maxPrice=x.maxPrice;
gProduct.refMinPrice=x.refMinPrice;
gProduct.refMaxPrice=x.refMaxPrice
}else{if(y){gProduct.minPrice=B.minPrice;
gProduct.maxPrice=B.maxPrice;
gProduct.refMinPrice=B.refMinPrice;
gProduct.refMaxPrice=B.refMaxPrice
}}}}if((f.type=="g"||f.type=="s")&&v!=""&&E){thisOnSale.onSaleDom=v;
thisOnSale.showThisOnSale()
}$(f.$color).unbind("click");
if(f.param.length==2){$(f.$version).unbind("click")
}iFourth.attrChoose()
}function e(r){var q="Z";
if(typeof r!="undefined"&&r!=""){var p=f.saleInfo[r];
if(typeof p!="undefined"){if(p.invStatus=="1"||p.invStatus=="4"||(typeof p.priceType!="undefined"&&p.priceType.substring(0,1)=="7"&&p.invStatus=="2")){q="Y"
}else{if(p.invStatus=="2"){q="N"
}else{q="Z"
}}}}return q
}function a(p,r,q){if(q=="Y"){$(p).children("a").attr("title",r)
}else{if(!$(p).hasClass("selected")){$(p).addClass("disabled c-disabled")
}if(q=="N"){$(p).children("a").attr("title","【无货】- "+r)
}else{if(q=="Z"){$(p).children("a").attr("title","【本地区暂不销售】- "+r)
}else{$(p).children("a").attr("title","【无此商品】- "+r)
}}}}function o(q,s){if(sn.prdType=="S"){q.minPrice=(typeof q.minPrice=="undefined")?"":q.minPrice;
q.maxPrice=(typeof q.maxPrice=="undefined")?"":q.maxPrice;
q.refMinPrice=(typeof q.refMinPrice=="undefined")?"":q.refMinPrice;
q.refMaxPrice=(typeof q.refMaxPrice=="undefined")?"":q.refMaxPrice;
if(typeof s!="undefined"&&s!=""){var r=f.saleInfo[s];
if(typeof r!="undefined"&&r.priceType!="7-1"&&r.priceType!="7-3"){if(r.promotionPrice!=""){var t=r.promotionPrice;
if(q.minPrice==""){q.minPrice=t;
q.maxPrice=t
}else{if(parseFloat(t)>parseFloat(q.maxPrice)){q.maxPrice=t
}else{if(parseFloat(t)<parseFloat(q.minPrice)){q.minPrice=t
}}}}if(r.refPrice!=""){var p=r.refPrice;
if(typeof minPrice=="undefined"||q.refMinPrice==""){q.refMinPrice=p;
q.refMaxPrice=p
}else{if(parseFloat(p)>parseFloat(q.refMaxPrice)){q.refMaxPrice=p
}else{if(parseFloat(p)<parseFloat(q.refMinPrice)){q.refMinPrice=p
}}}}}}}}m();
return{checkDom:g,allSaleState:f.allSaleState}
}function initBookStatus(){if(bookInfo.status==1){if(bookInfo.status==1){$("#beginOrEnd").html("距预定开始")
}$(".presell-process li").removeClass("current")
}else{if(bookInfo.status==2||preBuy.status==1){if(bookInfo.status==2){$("#beginOrEnd").html("距付定金结束")
}$(".presell-process li").removeClass("current");
$(".bespoke-process li").removeClass("current");
$(".step-1").addClass("current")
}else{if(bookInfo.status==3||preBuy.status==2){if(bookInfo.status==3){$("#beginOrEnd").html("距付尾款开始")
}$(".presell-process li").removeClass("current");
$(".bespoke-process li").removeClass("current");
$(".step-1").addClass("current");
$(".step-2").addClass("current")
}else{if(bookInfo.status==4||preBuy.status==3||preBuy.status==4||preBuy.status==5){if(bookInfo.status==4){$("#beginOrEnd").html("距付尾款结束")
}$(".presell-process li").removeClass("current");
$(".bespoke-process li").removeClass("current");
$(".step-1").addClass("current");
$(".step-2").addClass("current");
$(".step-3").addClass("current")
}else{if(bookInfo.status==5||bookInfo.status==6||preBuy.status==6||preBuy.status==7){if(bookInfo.status==5||bookInfo.status==6){$("#beginOrEnd").html("距预定结束")
}$(".presell-process li").removeClass("current");
$(".bespoke-process li").removeClass("current");
$(".step-1").addClass("current");
$(".step-2").addClass("current");
$(".step-3").addClass("current");
$(".step-4").addClass("current")
}}}}}}function getFormatDate(c){var a=new Date(c);
function b(e){return e<10?"0"+e:e
}return a.getFullYear().toString()+b(a.getMonth()+1)+b(a.getDate())+b(a.getHours())+b(a.getMinutes())+b(a.getSeconds())
}function getFormatYYMMDD(a){return a.substring(0,a.indexOf(" "))
}function paramRecovery(){if($("#error_correction_box").length==0){$("body").append('<div id="error_correction_box" class="hide"><div class="error_correction"><form id="paramForm" action=""><dl class="pt20"><dt>纠错参数</dt><span style="display: none;" id="errorParaCode"></span><dd class="mt0"><p class="ellipsis"><span class="word1"></span>:<span class="word2"></span></p></dd></dl><dl><dt>我的意见</dt><dd><textarea id="custContext" name="context" placeholder="'+scmInfo.fixParamAwardText+'" class=""></textarea><p id="textErrorMsg"class="error-msg"></p></dd></dl><dl class="mt15"><dt>联系方式</dt><dd><input id ="phoneNum" name="phone" type="tel" placeholder="请输入联系手机号码" class=""><span id="phoneErrorMsg" class="error-msg"></span></dd></dl><div class="btn-box"><a href="javascript:void(0);" class="btn1" onclick="sendParam();">提交</a><a href="javascript:;" class="btn2 close">关闭</a></div></form></div><div class="error_correctionbox"><div class="icon-box fl"></div><div class="fr"><p class="word">提交成功，我们会及时给予反馈~</p><a href="javascript:;" class="close">关闭</a></div></div></div>')
}$("#J-procon-param .err").html("<a href='javascript:void(0);'>纠错</a>");
$("#J-procon-param .err a").click(function(){iFourth.Error_correction_box($(this).parents("tr"));
$("#custContext").focus();
iFourth.putRight();
iFourth.sendModifyParam()
})
}function sendParam(){var c=$("#phoneNum").val();
var g=$.trim($("#custContext").val());
if(g==""){$("#custContext").addClass("error");
$("#textErrorMsg").html("请输入您的意见");
return false
}if(c.length>0&&!isPhone(c)){$("#phoneNum").addClass("error");
$("#phoneErrorMsg").html("请填写正确手机号码");
return false
}var i="sendParamModify";
var b=encodeURIComponent(encodeURIComponent($("#paramForm #errorParaCode").html()));
var h=encodeURIComponent(encodeURIComponent($("#paramForm .word1").text()));
var f=encodeURIComponent(encodeURIComponent($("#paramForm .word2").text()));
var g=encodeURIComponent(encodeURIComponent(g));
var a=sn.vendor;
if(!a){a=sn.vendorCode
}$(".error_correction").hide();
$(".error_correctionbox").show();
var e=sn.itemDomain+"/pds-web/ajax/sendParamModify_"+a+"_"+sn.passPartNumber+"_"+b+"_"+h+"_"+f+"_"+g+"_"+i+".html";
$.ajax({url:e,type:"get",cache:true,dataType:"jsonp",jsonpCallback:i})
}function isPhone(b){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
return a.test(b)
}CommonFourPage.gotoYanBao=function(){var a=$("#buyNum").val();
var b="?cmmdtyCode="+sn.partNumber+"&cmmdtyQty="+a+"&provinceCode="+sn.provinceCode+"&cityCode="+sn.lesCityId+"&districtCode="+sn.lesDistrictId+"&bizCode="+sn.vendorCode+"&chan=1";
window.open(scmInfo.yanbaoLink+b)
};
function isNotEmpty(a){return a!=null&&$.trim(a).length>0
}CommonFourPage.ServiceLabel=function(){if(sn.serviceLabel!="1"){return
}$("#proinfo-id span[label]").remove();
$("#proinfo-id em[label]").remove();
var a="";
var h="N";
var e="";
var f=sn.factorySendFlag=="1"?"2":"1";
var c="DEFU";
var g=sn.promotionPrice;
if(typeof sn.cmmdtyType!="undefined"&&sn.cmmdtyType.length>0){c=sn.cmmdtyType
}if(sn.mountType=="10"&&sn.shopType!="6"&&sn.shopType!="3"){e="7"
}else{e=sn.shopType
}if(sn.blackVirFlag){h="Y"
}if(sn.brandId&&sn.brandId.length>5){a=sn.brandId.substring(0,5)
}if(sn.cuxiaoType=="7-1"||sn.cuxiaoType=="7-3"){g="0"
}var i=sn.partNumber+"_"+sn.vendorCode+"_P01_01_"+sn.cuxiaoType+"_"+g+"_"+sn.brandCode+"_"+a+"_"+a+"_50_"+c+"_"+sn.brandId+"_"+sn.category2+"_"+sn.categoryId+"_"+sn.catenIds+"_"+h+"_"+sn.provinceCode+"_"+sn.lesCityId+"_"+(sn.lesCityId+sn.lesDistrictId)+"_"+PriceShow.actionId+"_"+f+"_"+e;
var b=sn.solpUrl+"/solp/http/SOLP10302_"+i+"_queryLabels/queryLabelsCallBack.htm";
$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonpCallback:"queryLabelsCallBack",success:function(q){if(q&&q.labels&&q.labels.length>0){for(var o=0;
o<q.labels.length;
o++){var p="icon-image no-link";
var l=q.labels[o];
var k="";
var j="javascript:void(0);";
var m="icon";
var r="";
if(l.labelCode=="SL00000004"){sn.isSupportCOD=true;
sn.isSupportLink=l.docLink;
sn.title=l.labelName;
sn.tooltip=l.labelDesc;
itemService.zySupport()
}else{if(sn.hwgShopFlag){m="hwg-icon";
r="<em class='line' label='label'>|</em>"
}if(typeof l.docLink!="undefined"&&l.docLink!=""){p="icon-image";
j=l.docLink;
if(j.indexOf("//")=="-1"){j="//"+j
}}if(typeof l.labelDesc!="undefined"&&l.labelDesc!=""){k='<span class="s-tooltip" ><i class="s-t-lion"></i>'+l.labelDesc+'<span class="tri-pointer-up"><i class="inner-tri"></i></span></span>'
}r+='<span label="label"><a href="'+j+'" class="'+p+'" target="_blank"><img class="'+m+'" src="'+l.logo+'">'+l.labelName+k+"</a></span>"
}$("#proinfo-id").append(r);
iFourth.bindProServTooltip()
}}}})
};
function afterSalesService(e){var c="";
sn.priceArr=[];
var f="afterSalesServiceCallback";
for(var b=0;
b<e.length;
b++){if(b<5){if(b==0){c+=e[b].serveCode
}else{c+="-"+e[b].serveCode
}sn.priceArr.push(e[b].serveCodePrice)
}}if(isNotEmpty(c)&&scmInfo.pcAfterSalesServiceFlag=="1"){var a=sn.itemDomain+"/pds-web/ajax/itemInfoListJsonp_"+c+"_"+f+".html";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonpCallback:f,success:function(h){var g="";
var k="";
if(isNotEmpty(h)){for(var i=0;
i<h.itemInfoList.length;
i++){g=h.itemInfoList[i].itemDisplayName+"&nbsp;&nbsp;¥"+sn.priceArr[i];
if(parseInt(sn.priceArr[i])==0){k+='<li class="sh-item current"><a data-partNum="'+h.itemInfoList[i].partnumber+'" href="javascript:void(0);" name="item_'+getEffectivePartNumber(sn.partNumber)+'_shfw_click">'+g+"<i></i></a></li>"
}else{k+='<li class="sh-item"><a data-partNum="'+h.itemInfoList[i].partnumber+'" href="javascript:void(0);" name="item_'+getEffectivePartNumber(sn.partNumber)+'_shfw_click">'+g+"<i></i></a></li>"
}}if(isNotEmpty(k)){$("#afterSalesService").html(k);
$("#pcAfterSalesServiceText").html(scmInfo.pcAfterSalesServiceText+'<a href="'+scmInfo.pcAfterSalesServiceUrl+'" target="_blank" name="item_'+getEffectivePartNumber(sn.partNumber)+'_shfwckxq_click" >服务详情</a>');
$("#shouhou").show();
iFourth.shouhou();
iFourth.bindSh();
runCustomExpoData("item_"+getEffectivePartNumber(sn.partNumber)+"_shfw_show")
}}}})
}}CommonFourPage.gotoAfterSalesService=function(){window.open(scmInfo.pcAfterSalesServiceUrl)
};
function getBigPolyHeardAndfoot(){if(scmInfo.pcbigPolyInfo!="0"&&scmInfo.pcbigPolyInfo!="1"){return
}else{if((scmInfo.pcbigPolyInfo=="0"||scmInfo.pcbigPolyInfo=="1")&&sn.cuxiaoType!="4-1"&&sn.cuxiaoType!="6-1"){if(sn.headerNavBarDom){$(".ng-nav-bar .ng-nav-index .ng-nav").html(sn.headerNavBarDom)
}$(".ng-nav-bar .ng-nav-index .ng-nav").show();
return
}}$.ajax({url:sn.cmsBannerUrl+"/api/jsonp/cb/djhSjy-bigPolyHeardAndfootCallback.jsonp",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",timeout:"5000",jsonpCallback:"bigPolyHeardAndfootCallback",success:function(f){if(f&&f.length>0){for(var g=0;
g<f.length;
g++){if(f[g]&&f[g].djhyt_sjy&&f[g].djhyt_sjy.tag&&f[g].djhyt_sjy.tag.length>0){var k=f[g].djhyt_sjy.tag;
var a="";
for(var b=0;
b<k.length;
b++){var l=k[b];
a+='<li><a name="'+l.trickPoint+'" href="'+l.linkUrl+'" target="_blank">'+l.elementName+"</a><span></span></li>"
}$(".ng-nav-bar .ng-nav-index .ng-nav").html(a).show()
}else{if(f[g]&&f[g].botPage_PCHP&&f[g].botPage_PCHP.tag&&f[g].botPage_PCHP.tag.length>1){var k=f[g].botPage_PCHP.tag;
var h='<div class="ju-footer"><div class="logo"></div>';
for(var b=1;
b<k.length;
b++){var e="item";
var l=k[b];
var c=sn.newImageDomianDir+l.picUrl;
if(b==1){e="item no-border"
}h+='<div class="'+e+'"><span class="ju-footer-icon"><img width="100%" lazy-src="'+c+'"></span></span><a class="text" href="'+l.linkUrl+'" target="_blank">'+l.elementName+"</a></div>"
}$("#jufooter").html(h).show()
}}}}},error:function(){$(".ng-nav-bar .ng-nav-index .ng-nav").html(sn.headerNavBarDom).show()
}})
}CommonFourPage.getAfterSalesService=function(e){var a=$("#afterSalesService").find("li").filter(function(){return $(this).hasClass("current")
});
var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
if(a.length>0){var c=0;
a.find("a").each(function(){var f={itemNo:c++,serveCode:$(this).attr("data-partNum"),cmmdtyQty:b};
e.push(f)
})
}};
CommonFourPage.dealWithAfterSalePic=function(b){if(b&&b!=""&&b.length>0){var g=[];
var h="";
var f="";
for(var e=0;
e<b.length;
e++){if(b[e].operateFlag=="01"){g=JSON.parse(b[e].afterSaleAddress);
for(var c=0;
c<g.imageList.length;
c++){if(parseInt(g.imageList[c].width)>750){onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}";
h+='<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" alt="售后说明图"  src="'+g.imageList[c].url.replace("https:","")+'">'
}else{h+='<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" alt="售后说明图"  src="'+g.imageList[c].url.replace("https:","")+'">'
}}}else{if(b[e].operateFlag=="02"){g=JSON.parse(b[e].afterSaleAddress);
for(var a=0;
a<g.imageList.length;
a++){if(parseInt(g.imageList[a].width)>750){f+='<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" alt="售后说明图"  src="'+g.imageList[a].url.replace("https:","")+'">'
}else{f+='<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" alt="售后说明图"  src="'+g.imageList[a].url.replace("https:","")+'">'
}}}}}if(sn.installFlag==2){if(f!=""){$("#afterServicePic").html(f)
}else{$("#afterServicePic").html(h)
}}else{if(sn.installFlag==1||sn.installFlag==3){if(h!=""){$("#afterServicePic").html(h)
}else{$("#afterServicePic").html(f)
}}else{h=h+f;
$("#afterServicePic").html(h)
}}$("#afterServicePic").show();
runCustomExpoData("item_"+sn.ninePartNumber+"_shbz_show")
}};
CommonFourPage.overseasFAQCallback=function(a){lazyElems.hwgmarket.enable=false;
lazyElems.hwggwxz.enable=false;
if(a){var h=false;
var j="";
if(a.overseasFAQ01&&a.overseasFAQ01.resultDtoList&&a.overseasFAQ01.resultDtoList.length>0){var g=a.overseasFAQ01.resultDtoList[0];
if(g.list&&g.list.length>0){j='<h2 class="tit">商品FAQ</h2>';
j+="<ul>";
for(var c=0;
c<g.list.length;
c++){if(g.list[c].question&&g.list[c].answer){j+="<li>";
j+='<p class="content-tit">';
j+="  <strong>·</strong><span>"+g.list[c].question+"</span>";
j+='	<i class="ng-iconfont down-i" style="display: inline-block;"></i>';
j+='	<i class="ng-iconfont up-i" style="display: none;"></i>';
j+="</p>";
j+='<div class="info">'+g.list[c].answer.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<img/g,'<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" ')+"</div>";
j+="</li>";
h=true
}}j+="</ul>"
}}if(h){$("#faq01").html(j).show()
}else{$("#faq01").html("").hide()
}var f=false;
if(a.overseasFAQ02&&a.overseasFAQ02.resultDtoList&&a.overseasFAQ02.resultDtoList.length>0){var g=a.overseasFAQ02.resultDtoList[0];
if(g.list&&g.list.length>0){j='<h2 class="tit">跨境贴士</h2>';
j+="<ul>";
for(var c=0;
c<g.list.length;
c++){if(g.list[c].question&&g.list[c].answer){j+="<li>";
j+='<p class="content-tit">';
j+="  <strong>·</strong><span>"+g.list[c].question+"</span>";
j+='	<i class="ng-iconfont down-i" style="display: inline-block;"></i>';
j+='	<i class="ng-iconfont up-i" style="display: none;"></i>';
j+="</p>";
j+='<div class="info">'+g.list[c].answer.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<img/g,'<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" ')+"</div>";
j+="</li>";
f=true
}}j+="</ul>"
}}if(f){$("#faq02").html(j).show();
$("#faq02d").hide()
}else{$("#faq02").html("").hide();
$("#faq02d").show()
}var e=false;
if(a.overseasFAQ03&&a.overseasFAQ03.resultDtoList&&a.overseasFAQ03.resultDtoList.length>0){var g=a.overseasFAQ03.resultDtoList[0];
if(g.noticeUrl){var j='<h2 class="tit">服务承诺</h2>';
j+='<div class="fwcn-info">';
j+=g.noticeUrl.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<img/g,'<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" ');
j+="</div>";
e=true
}}if(e){$("#faq03").html(j).show();
$("#faq03d").hide()
}else{$("#faq03").html("").hide();
$("#faq03d").show()
}var b=false;
if(a.overseasFAQ05&&a.overseasFAQ05.resultDtoList&&a.overseasFAQ05.resultDtoList.length>0){var g=a.overseasFAQ05.resultDtoList[0];
if(g.noticeUrl){j="<h3><strong>·</strong>购物须知</h3>";
j+='<div class="info">';
j+=g.noticeUrl.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<img/g,'<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" ');
j+="</div>";
b=true
}}if(b){$("#faq05").html(j).show();
$("#faq05d").hide()
}else{$("#faq05").html("").hide();
$("#faq05d").show()
}}else{CommonFourPage.overseasFAQDefault()
}iFourth.hwgDeploy()
};
CommonFourPage.overseasFAQDefault=function(){$("#faq02").html("").hide();
$("#faq02d").show();
$("#faq03").html("").hide();
$("#faq03d").show();
$("#faq05").html("").hide();
$("#faq05d").show()
};
function checkPreBuyQualifi(f,b){var c=preBuy.status==4&&preBuy.type==2?"P03":"P01";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
if(sn.zyHwgFlag){a="0000000000"
}var e=sn.yushouDomain+"/jsonp/appoint/checkQualificationStatus-"+preBuy.actionID+"-"+sn.partNumber+"-"+a+"-"+c+"-1-inits.do";
$.ajax({url:e,dataType:"jsonp",cache:false,jsonpCallback:"inits",success:function(g){if(g&&g!=""&&g.resultNewCode!=""){if(g.resultNewCode==0){Cart.buyNowTime()
}else{if(g.resultNewCode==-1||g.resultNewCode==3){Util.alertErrorBox(g.resultNewMsg);
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("已抢完");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("已抢完");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#yushouTimeWarn").html('<a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a>").show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#yushouCount").hide();
remain=0;
$("#timePanel .d").text("00");
$("#timePanel .h").text("00");
$("#timePanel .m").text("00");
$("#timePanel .s").text("00")
}else{if(g.resultNewCode==1){$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if(c=="P03"){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("特权抢购");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("特权抢购");
$("#yushouTimeWarn").html("非常抱歉，您暂无特权购资格或资格已用完，无法购买").show();
$("#jhsm").html("注：抢购仅限获取预约特权购资格的用户").show()
}else{$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("立即抢购");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("立即抢购");
$("#yushouTimeWarn").html(g.resultNewMsg).show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show()
}$("#yushouCount").hide();
if(f==0){if(c=="P03"){Util.alertErrorBox("非常抱歉，您暂无特权购资格或资格已用完，无法购买")
}else{Util.alertErrorBox(g.resultNewMsg)
}}}else{if(g.resultNewCode==4){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("已抢完");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("已抢完");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#yushouTimeWarn").html('<a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a>").show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#yushouCount").hide();
remain=0;
$("#timePanel .d").text("00");
$("#timePanel .h").text("00");
$("#timePanel .m").text("00");
$("#timePanel .s").text("00")
}else{if(g.resultNewCode==5){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("还有机会");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("还有机会");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#yushouTimeWarn").hide();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#yushouCount").hide()
}else{if(g.resultNewCode==6){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("立即抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("立即抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#yushouTimeWarn").html(g.resultNewMsg).show();
$("#jhsm").hide();
$("#yushouCount").hide()
}else{if(g.resultNewCode==7){Util.alertErrorBox(g.resultNewMsg)
}else{Util.alertErrorBox(g.resultNewMsg);
$("#yushouTimeWarn").html(g.resultNewMsg).show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#yushouCount").hide()
}}}}}}}iFourth.mainHeight()
}else{Util.alertErrorBox("活动太火爆啦，稍后再来试试吧！")
}},error:function(){Util.alertErrorBox("活动太火爆啦，稍后再来试试吧！")
}})
}function dealWithADPic(b){var c="";
if(b&&b!=""&&b.length>0){for(var a=0;
a<b.length;
a++){if(b[a]!=""&&b[a].adSrc&&b[a].adSrc!=""&&b[a].adSrc!="-1"){c+='<div class="mt10 left-side-bar-image"><a href="'+b[a].apsClickUrl+'"><img width="190" height="120" src="'+b[a].adSrc.replace("http:","")+'" alt="" class="left-side-bar-image"><span class="left-side-bar-text"><span class="left-side-bar-discount-tips">'+b[a].title+'</span><span class="left-side-bar-look-tips">'+b[a].subtitle+"</span></span></a></div>"
}}$("#sideAdvert").html(c);
$("#sideAdvert").show()
}};var FourPage=FourPage||{};
var PriceShow=PriceShow||{};
var Recommend=Recommend||{};
var Cart=Cart||{};
var gMain=gMain||{};
var autoParts=autoParts||{};
var o2oParts=o2oParts||{};
var remain=0;
var Renxf=Renxf||{};
var hyj=hyj||{};
var jiwu=jiwu||{};
var generalSub;
var lazyElems;
var hostName=document.location.hostname;
var protocol=(("https:"==document.location.protocol)?"https://":"http://");
FourPage.lazyElems=function(){lazyElems=iFourth.lazyAjax(".lazy-ajax",function(c,a,b){})
};
FourPage.Ready=function(){FourPage.itemMainTab();
iFourth.fillProconToolbar();
iFourth.init();
FourPage.lazyElems();
FourPage.lazyFunction();
FourPage.commGroup();
if(sn.prdType=="S"){iFourth.bindArrivalRemind()
}if(!sn.donateFlag){FourPage.Recommend()
}FourPage.showJubao();
initHistoryCookie(sn.partNumber,sn.vendorCode);
if($("#kernelParmeter").length>0&&$.trim($("#kernelParmeter").find("ul").html())==""){$("#kernelParmeter").hide()
}$("#cslpBox").html("").show();
iFourth.bindProServTooltip();
$("img[src2]").Jlazyload({type:"image",placeholderClass:"err-product"});
if(sn.itemViewFlag){iFourth.popTabFun()
}setFixBarOnline();
if($.trim($("#productDetail").html())==""){sendSaMessage("pcss-xq-01");
sendSaMessageV2("pcss-xq-01")
}if($("#itemParameter tr").length==0){sendSaMessage("pcss-cs-01");
sendSaMessageV2("pcss-cs-01")
}$("li[rel=#J-procon-comment]").html('<a name="item_'+sn.ninePartNumber+'_tab_pingjia" href="javascript:void(0);">评价（'+sn.reviewTotal+"）</a>");
CommonFourPage.FourPage.qualityCSS();
if(typeof gProduct=="undefined"||gProduct.gors!="0"){$("#tabAddCart").show()
}else{$("#tabAddCart").hide()
}if(sn.prdType!="S"&&sn.category1!=""&&sn.compareCatalog=="0"&&sn.hasStorage=="Y"&&sn.sellType!="1"){iFourth.bindProductCompare()
}if($("#callmeTile").length==0){$("#onlineTile").parent().hide()
}iFourth.carParts.init();
lazyelem.listen();
Recommend.lazyRelGroup();
if(!sn.zyHwgFlag&&!sn.czyHwgFlag){Recommend.lazyFooter()
}iFourth.judgeCanvas();
if(sn.hwgShopFlag||sn.suningJiWuFlag){iFourth.hwgTittip();
$("#consult").hide()
}};
FourPage.initCss=function(){$("#mobileTitle").hide();
$("#hwgLogistics").hide();
sn.freeDuty="";
$("#J-tieIn").hide();
$("#J-tieIn").html("");
$("li[rel=#J-tieIn]").removeClass().hide();
$("li[rel=#J-tieIn]").attr("has-data",false);
$("#c_kucun").removeClass().html("");
$("#proinfoMain").removeClass("pro-main-no-good");
$(".pro-serv-panel").show();
if(!sn.twoFlag){$("#cshopBox").show()
}$("#returnGoods").hide();
$("#returnGoods").attr("forHyjFlag","0");
$(".proinfo-o2o").hide();
$("#shoppingGuide").hide();
$("#taxation").hide();
$("#packageChoice").remove();
$("#virPackageChoice").remove();
$(".proinfo-main").show();
$(".proinfo-serv").show();
$("#zyService").hide();
$(".mainbtns").show();
$("#existPrice").hide();
$("#noPrice").hide();
$("#netPriceBox").hide();
$("#promotionPriceBox").hide();
$("#cmsActivityBar").hide();
$("#allcuxiao").hide();
$("#arrivWarning").hide();
$("#voucherTitle").css("display","none");
$("#lhvoucherTitle").css("display","none");
$("#couponTitle").css("display","none");
$("#isXYuanNItemTitle").css("display","none");
$("#freightfreeTitle").css("display","none");
$("#pointTitle").css("display","none");
$("#yzcxTitle").css("display","none");
$("#giftTitle").css("display","none");
$("#freeCouponTitle").css("display","none");
$("#newcouponTitle").css("display","none");
$("#jnbtTitle").css("display","none");
$("#purchaseTitle").css("display","none");
$("#rxfTitle").css("display","none");
$("#rxfBox").html("");
$("#freenessPay").hide();
$("#purchaseBox").html("");
$("#couponBox").html("");
$("#newcouponBox").html("");
$("#voucherBox").html("");
$("#lhvoucherBox").html("");
$("#giftBox").html("");
$("#pointBox").html("");
$("#yzcxBox").html("");
$("#couponBox").siblings(".promotion-content").remove();
$("#newcouponBox").siblings(".promotion-content").remove();
$("#voucherBox").siblings(".promotion-content").remove();
$("#lhvoucherBox").siblings(".promotion-content").remove();
$("#jnbtBox").siblings(".promotion-content").remove();
$("#tellMe").hide();
$("#freeFare").hide();
$("#phonedl").hide();
$("#phoned2").hide();
$("#buycount").hide();
$("#productLimit").hide();
$("#sfrz").hide();
$("#kcjz").hide();
$("#ztServ").hide();
sn.ziti=false;
$("#szytService").hide();
$("#snService").hide();
$("#snServiceContent").hide();
$("#sevenDayReturn").hide();
$("#yanbao").hide();
$("#nocodePackage").html("").hide();
$("#timePanel").hide();
$("#btn_jsd").parent().hide();
$("#buyNowAddCart").hide();
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("立即购买");
$("#buyNowAddCart").attr("href","javascript:Cart.buyNowTime();");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#buyReminder").hide();
if($("#J-slide1").length>0&&typeof lazyElems!="undefined"){lazyElems["J-slide1"].enable=false
}$("#J-slide1").hide();
$("#yjhx").hide();
$("#lyg").hide();
sn.lygSupported=false;
$("#hdfk").hide();
$(".support-panel").hide();
$("#weightid").hide();
$("#safekeep").hide();
$("#safekeepService").hide();
if(sn.catenIds!="R0115001"&&sn.catenIds!="R0115003"){$("#loginFeedBack").show()
}if(sn.catenIds==sn.footTickCatenIds){$("#buycount").remove()
}$(".proinfo-container").removeClass("proinfo-container-nopro");
$("#listProContent").hide();
$("#inerestBox").show();
$("#nowProduct").removeClass("c-f00").html("").hide();
$("#prescription").html("").hide();
$(".proinfo-deliver-oversea").hide();
$("#tariff").hide();
$(".oversea-logo").hide();
$(".pro-detail-oversea").hide();
$("#compare").hide();
$(".proinfo-title").removeClass("show-compare");
$(".p-c-umaylike").attr("dataAble","false");
$("#bigPolyVerify").hide();
$(".luoji-tip").remove();
$(".proinfo-tip").remove();
$("#manageInvFlag").val("-1");
$("#mdmProvinceId").val(sn.provinceCode);
$("#mdmCityId").val(sn.cityId);
$("#mdmDistrictId").val(sn.districtId);
$("#productStatus").val("-1");
$("#productStatusDesc").val("-1");
$("#shipOffset").val("-1");
$("#operatetype").val("1");
if(!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag){$("#deliverytype").val("1")
}else{$("#deliverytype").val("3")
}qCodeHide();
$("#yushouCount").hide();
$("#jhsm").hide();
$("#R-n-store").html("");
$("#R-n-similar").html("");
$("#R-n-hot-sale").html("");
$("#R-n-klyk").html("");
iFourth.unBindProductCompare();
if(sn.mountType=="7"){$("#autoPartArea").hide();
$("#storeService").hide();
$("#toHomeService").hide()
}else{if(sn.mountType=="03"){$("#getStoreService").html('请选择您所需要服务的门店 <i class="ng-iconfont ">&#xe62e;</i>')
}}$("#car_parts_dlg").html("");
$("#shopingGuideContent").html("").hide();
$("#shoppingGuide").html("").hide();
$("#bookProcedure").hide();
$("#haveProduct").html("").hide();
if(sn.twoFlag){$("#borderline").remove();
$("#proinfoMain").removeClass().addClass("proinfo-main no-right-side")
}$("#djhBuyNum").hide();
$("#zb180").hide();
$("#prebuy").hide();
$("#yuYueQiangGou").html("").hide();
$("#dingJinTuan").html("").hide();
$("#hwgBrand").show();
$("#bigPolyTime").html("");
$("#timePanel2").hide();
$("#bigPolyMore").html("").hide();
$("#bigPolyMore2").html("").hide();
$("#djh-after-market-container").html("").hide();
$("#jufooter").html("").hide();
if(sn.hwgShopFlag){$("#returnCate").prev().hide();
$("#bsqProcess").hide();
$("#hwzyProcess").hide()
}sn.ajaxLogin=false;
sn.couponLogin=false;
$("#afterSalesService").html("");
$("#shouhou").hide();
$("#o2oItem").hide();
$("#selectStore a").html("选择门店");
$("#selectStore .sh-item ").removeClass("current");
$("#o2o_parts_dlg").html("");
$("#proinfoShortTip").html("").hide()
};
var preBuy=preBuy||{actionID:0,actionType:0,status:0,type:"0",purchaseType:"",isEffect:true,disCityList:"",scheduleStartTime:0,scheduleEndTime:0,priorPurchaseStartTime:0,priorPurchaseEndTime:0,purStartTime:0,purEndTime:0,curTime:0,appiontCount:0,isCanBuy:0,preLimit:0,personBuysLimit:0,priceType:"",price:"",initCss:function(){$("#timePanel span:first").attr("class","djh-title").html("预约");
$("#yuYueQiangGou").html('<a href="javascript:void(0);" class="ruler-link r-rule" onclick="(function(e){var we = e||event||window.event;var y = we.clientY;$(\'html,body\').animate({scrollTop: $(\'.bespoke-process\').offset().top - y}, 200);})();">预约规则</a> <div class="content" style="display: none;"> <span class="tri-pointer-up tip-yun-up"> <i class="tip-yun"></i> </span> <p>1、商品预约成功后才有抢购资格，抢购资格仅限本次活动使用，可购买的商品数量以页面限购为准。</p> <p>2、预约成功后，请提前关注抢购时间，商品数量有限，先抢先得。</p> <p>3、已预约成功的商品，在抢购开始后，请点击“立即购买”加入购物车结算，并在订单支付时限内完成支付，逾期将自动取消。</p> <p>4、查看预约商品请到“我的易购—特色服务-我的预约”中查看具体详情。</p> <p>5、如预约商品提供赠品，则按照抢购成功支付先后顺序计算，而不是预约成功时间。</p> <p>6、如预约商品参加返券活动，则在抢购成功支付后，按页面的返券规则发放相应面额的券。</p> <a target="_blank" href="//help.suning.com/page/id-581.htm">规则详情</a></div>').show();
$("#timePanel").removeClass("only-label").addClass("only-label").show();
$("#buyNowAddCart").hide();
$("#PriceNotice1").hide();
$("#jhsm").hide();
$("#yushouTimeWarn").hide();
$("#yushouTimeWarn").html("请在下单后15分钟之内完成支付");
$("#nowProduct").hide();
$("#prescription").hide();
$("#c_kucun").hide();
$("#yushouCount").hide();
if(sn.twoFlag){$("#timePanel").addClass("no-right-side")
}},actionNotSupport:function(){$("#timePanel").removeClass("only-label").addClass("only-label");
$("#nowProduct").html("该城市暂不参与预约").addClass("c-f00").show();
$("#c_kucun").html("本地区暂不销售").show();
iFourth.unBindFreight();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buycount").hide();
thisOnSale.saleFlag=false;
thisOnSale.showThisOnSale();
processNotSale()
},waitToAppoint:function(){preBuy.status=1;
$("#timePanel").removeClass("only-label");
$("#beginOrEnd").html("距预约开始");
itemService.setFreeFreight();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("等待预约");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待预约");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
},toAppoint:function(){itemService.setFreeFreight();
preBuy.status=2;
$("#timePanel").removeClass("only-label");
$("#beginOrEnd").html("距预约结束");
$("#addCart").removeClass().addClass("btn-orange-autowidth").html("立即预约");
if(typeof gProduct=="undefined"||gProduct.gors!="0"){var a=sn.yushouDomain+"/appoint/gotoAppoint.do?partNumber="+sn.partNumber+"&actionId="+preBuy.actionID+"&purchaseType=P01";
$("#addCart").attr("href",a);
$("#addCart").attr("target","_blank");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljyy");
$("#addCart2").removeClass().addClass("btn-orange-mini").html("立即预约");
$("#addCart2").attr("href",a);
$("#addCart2").attr("target","_blank");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljyy")
}else{if(gProduct.gors=="0"&&!gMain.checkIsSub()){$("#addCart").attr("href","javascript:Cart.addCart();")
}}if(preBuy.appiontCount!=0){$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>").show()
}},waitToPriorBuy:function(){itemService.setFreeFreight();
preBuy.status=3;
$("#timePanel").removeClass("only-label");
$("#beginOrEnd").html("距抢购开始");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("等待抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约特权购资格的用户").show()
},priorBuy:function(){$("#timePanel").removeClass("only-label");
itemService.setFreeFreight();
$("#c_kucun").show();
if(sn.hasStorage!="Y"){preBuy.status=4;
$("#beginOrEnd").html("距抢购结束");
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("特权抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("特权抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.hasStorage=="N"){$("#c_kucun").html("无货");
$("#nowProduct").html("<a class='arrive-notice'  href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>")
}else{if(sn.luaInvStatus=="0-3"){sn.shipOffSetText="建议您选购其他商品"
}$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("c-f00");
$("#c_kucun").html("本地区暂不销售")
}iFourth.unBindFreight();
$("#nowProduct").show();
if(sn.prdType!="S"||gProduct.gors!=0){thisOnSale.saleFlag=false;
thisOnSale.showThisOnSale();
processNotSale()
}}else{if(preBuy.preLimit<=0){preBuy.status=5;
$("#beginOrEnd").html("距抢购开始");
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("等待抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约特权购资格的用户").show();
$("#nowProduct").hide()
}else{if(preBuy.preLimit==1){preBuy.status=4;
$("#beginOrEnd").html("距抢购结束");
$("#durationTime").val((data.priorPurchaseEndTime-sn.nowTime)/1000);
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("还有机会");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("还有机会");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约特权购资格的用户").show();
$("#nowProduct").hide()
}else{preBuy.status=4;
$("#beginOrEnd").html("距抢购结束");
$("#addCart").removeClass().addClass("btn-orange-autowidth").html("特权抢购");
$("#addCart").attr("href","javascript:preBuy.toPreBuy(1);").removeAttr("target");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yytqgm");
$("#addCart2").removeClass().addClass("btn-orange-mini").html("特权抢购");
$("#addCart2").attr("href","javascript:preBuy.toPreBuy(0);").removeAttr("target");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yytqgm");
$("#yushouTimeWarn").show();
$("#jhsm").html("注：抢购仅限获取预约特权购资格的用户").show();
$("#yushouCount").hide();
$("#nowProduct").hide();
preBuy.countdown()
}}}},waitToBuy:function(){preBuy.status=5;
$("#beginOrEnd").html("距抢购开始");
$("#timePanel").removeClass("only-label");
if(preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#timePanel").removeClass("only-label").addClass("only-label")
}else{$("#timePanel").removeClass("only-label")
}itemService.setFreeFreight();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("等待抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约资格用户").show()
},toBuy:function(){$("#beginOrEnd").html("距抢购结束");
$("#timePanel").removeClass("only-label");
itemService.setFreeFreight();
$("#c_kucun").show();
if(sn.hasStorage!="Y"&&preBuy.preLimit>0){preBuy.status=6;
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("立即抢购");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("立即抢购");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.hasStorage=="N"){$("#c_kucun").html("无货");
$("#nowProduct").html("<a class='arrive-notice'  href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>")
}else{if(sn.luaInvStatus=="0-3"){sn.shipOffSetText="建议您选购其他商品"
}$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("c-f00");
$("#c_kucun").html("本地区暂不销售")
}iFourth.unBindFreight();
$("#nowProduct").show();
if(sn.prdType!="S"||gProduct.gors!=0){thisOnSale.saleFlag=false;
thisOnSale.showThisOnSale();
processNotSale()
}}else{if(preBuy.preLimit<=0&&(typeof gProduct=="undefined"||gProduct.gors!="0")){preBuy.status=7;
$("#timePanel").removeClass("only-label").addClass("only-label");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("已抢完");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("已抢完");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#nowProduct").hide()
}else{if(preBuy.preLimit==1&&(typeof gProduct=="undefined"||gProduct.gors!="0")){preBuy.status=6;
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("还有机会");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("还有机会");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#nowProduct").hide()
}else{preBuy.status=6;
$("#addCart").removeClass().addClass("btn-orange-autowidth").html("立即抢购");
$("#addCart").attr("href","javascript:preBuy.toPreBuy(1);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini").html("立即抢购");
$("#addCart2").attr("href","javascript:preBuy.toPreBuy(0);").removeAttr("target");
$("#nowProduct").hide();
$("#yushouTimeWarn").show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show()
}}}},actionEnd:function(){preBuy.status=7;
$("#timePanel").removeClass("only-label").addClass("only-label");
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("活动已结束");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("活动已结束");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouTimeWarn").html('<a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a>").show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
qCodeHide();
if(sn.hasStorage!="Y"&&(sn.prdType!="S"||gProduct.gors!=0)){if(sn.hasStorage=="N"){$("#c_kucun").html("无货");
$("#nowProduct").html("<a class='arrive-notice'  href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>")
}else{if(sn.luaInvStatus=="0-3"){sn.shipOffSetText="建议您选购其他商品"
}$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("c-f00");
$("#c_kucun").html("本地区暂不销售")
}thisOnSale.saleFlag=false;
thisOnSale.showThisOnSale();
processNotSale()
}},toPreBuy:function(a){if(sn.prdType=="S"&&!gMain.checkIsSub()){iFourth.TZM.show();
return
}if(sn.prdType=="g"&&!Cluster.checkIsSub()){iFourth.TZM.show();
return
}$("body").AjaxLogin({success:function(){checkPreBuyQualifi(a,0)
},error:function(){}})
},countdown:function(){iFourth.countdown.down(function(a){if(a==0){preBuy.initCss();
if(preBuy.type=="1"){if(preBuy.status==1){$("#durationTime").val(preBuy.scheduleEndTime-preBuy.scheduleStartTime);
preBuy.toAppoint()
}else{if(preBuy.status==2){$("#durationTime").val(preBuy.purStartTime-preBuy.scheduleEndTime);
preBuy.waitToBuy()
}else{if(preBuy.status==5){$("#durationTime").val(preBuy.purEndTime-preBuy.purStartTime);
preBuy.toBuy()
}else{if(preBuy.status==6||preBuy.status==7){$("#durationTime").val(0);
preBuy.actionEnd()
}}}}}else{if(preBuy.type=="2"){if(preBuy.status==1){$("#durationTime").val(preBuy.scheduleEndTime-preBuy.scheduleStartTime);
preBuy.toAppoint()
}else{if(preBuy.status==2){$("#durationTime").val(preBuy.priorPurchaseStartTime-preBuy.scheduleEndTime);
preBuy.waitToPriorBuy()
}else{if(preBuy.status==3){$("#durationTime").val(preBuy.priorPurchaseEndTime-preBuy.priorPurchaseStartTime);
preBuy.priorBuy()
}else{if(preBuy.status==4||preBuy.status==5){$("#durationTime").val((preBuy.purEndTime-preBuy.purStartTime));
preBuy.toBuy()
}else{if(preBuy.status==6){$("#durationTime").val(0);
preBuy.actionEnd()
}}}}}}else{if(preBuy.status==1){preBuy.status=2;
$("#beginOrEnd").html("距抢购结束");
$("#durationTime").val(0);
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("移动专享");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("移动专享");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouTimeWarn").html("该商品为移动专享，如需购买请扫上方二维码").show();
$("#jhsm").html("注：抢购仅限获取预约资格用户").show();
$("#timePanel").removeClass("only-label").show()
}}}CommonFourPage.resetServiceSupport();
iFourth.countdown.setTime();
initBookStatus()
}})
},fillPreBuy:function(){var b=$("#appointTime");
var a=$("#buyTime");
fillPreSellDom(b,preBuy.scheduleStartTime*1000,preBuy.scheduleEndTime*1000);
fillPreSellDom(a,preBuy.purStartTime*1000,preBuy.purEndTime*1000);
$("#prebuy").show()
}};
preBuy.initPreBuy=function(a){if(a!=null){preBuy.scheduleStartTime=a.scheduleStartTime/1000;
preBuy.scheduleEndTime=a.scheduleEndTime/1000;
preBuy.priorPurchaseStartTime=a.priorPurchaseStartTime/1000;
preBuy.priorPurchaseEndTime=a.priorPurchaseEndTime/1000;
preBuy.purStartTime=a.purStartTime/1000;
preBuy.purEndTime=a.purEndTime/1000;
preBuy.disCityList=a.disCityList;
preBuy.appiontCount=a.appiontCount;
preBuy.preLimit=a.preLimit;
preBuy.personBuysLimit=a.personBuysLimit;
preBuy.adapteTerminal=a.adapteTerminal;
preBuy.recomText=a.recomText;
preBuy.recomUrl=a.recomUrl;
preBuy.isEffect=true;
if(preBuy.disCityList!=null){$.each(preBuy.disCityList,function(c,e){if(e==sn.cityId){preBuy.isEffect=false
}})
}preBuy.type=1;
preBuy.priceType=2;
if(sn.priceType=="7-1"||sn.priceType=="7-3"){preBuy.priceType=1
}if(preBuy.purchaseType.indexOf("P03")>=0){preBuy.type=2
}if(sn.invStatus=="5"){preBuy.type=3
}if(sn.invStatus=="6"){preBuy.isEffect=false
}preBuy.initCss();
processQcode();
preBuy.fillPreBuy();
iFourth.presell();
if(!preBuy.isEffect){preBuy.actionNotSupport()
}else{if(preBuy.type==1){if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}if(preBuy.status==3&&a.purStartTime==""&&a.purEndTime==""){$("#timePanel").removeClass("only-label").addClass("only-label").show()
}if(sn.nowTime<a.scheduleStartTime){$("#durationTime").val((a.scheduleStartTime-sn.nowTime)/1000);
preBuy.waitToAppoint()
}else{if(sn.nowTime>=a.scheduleStartTime&&sn.nowTime<=a.scheduleEndTime){$("#durationTime").val((a.scheduleEndTime-sn.nowTime)/1000);
preBuy.toAppoint()
}else{if((sn.nowTime>a.scheduleEndTime&&sn.nowTime<a.purStartTime)||(a.purStartTime==""&&a.purEndTime=="")){$("#durationTime").val((a.purStartTime-sn.nowTime)/1000);
preBuy.waitToBuy()
}else{if(sn.nowTime>=a.purStartTime&&sn.nowTime<=a.purEndTime){if(a.preLimit<=0){$("#durationTime").val(0)
}else{$("#durationTime").val((a.purEndTime-sn.nowTime)/1000)
}preBuy.toBuy()
}else{$("#durationTime").val(0);
preBuy.actionEnd()
}}}}preBuy.countdown()
}else{if(preBuy.type=="2"){if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}if((preBuy.status==3&&a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime=="")||(preBuy.status==5&&a.purStartTime==""&&a.purEndTime=="")){$("#timePanel").removeClass("only-label").addClass("only-label").show()
}if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}if((preBuy.status==3&&a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime=="")||(preBuy.status==5&&a.purStartTime==""&&a.purEndTime=="")){$("#timePanel").removeClass("only-label").addClass("only-label").show()
}if(sn.nowTime<a.scheduleStartTime){$("#durationTime").val((a.scheduleStartTime-sn.nowTime)/1000);
preBuy.waitToAppoint()
}else{if(sn.nowTime>=a.scheduleStartTime&&sn.nowTime<=a.scheduleEndTime){$("#durationTime").val((a.scheduleEndTime-sn.nowTime)/1000);
preBuy.toAppoint()
}else{if((sn.nowTime>a.scheduleEndTime&&sn.nowTime<a.priorPurchaseStartTime)||(a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime=="")){$("#durationTime").val((a.priorPurchaseStartTime-sn.nowTime)/1000);
preBuy.waitToPriorBuy()
}else{if(sn.nowTime>=a.priorPurchaseStartTime&&sn.nowTime<=a.priorPurchaseEndTime){$("#durationTime").val((a.priorPurchaseEndTime-sn.nowTime)/1000);
preBuy.priorBuy()
}else{if((sn.nowTime>a.scheduleEndTime&&sn.nowTime<a.purStartTime)||(a.purStartTime==""&&a.purEndTime=="")){$("#durationTime").val((a.purStartTime-sn.nowTime)/1000);
preBuy.waitToBuy()
}else{if(sn.nowTime>=a.purStartTime&&sn.nowTime<=a.purEndTime){if(a.preLimit<=0){$("#durationTime").val(0)
}else{$("#durationTime").val((a.purEndTime-sn.nowTime)/1000)
}preBuy.toBuy()
}else{$("#durationTime").val(0);
preBuy.actionEnd()
}}}}}}preBuy.countdown()
}else{preBuy.status=1;
$("#beginOrEnd").html("距抢购结束");
var b=(a.purEndTime-sn.nowTime>0)?(a.purEndTime-sn.nowTime):0;
$("#durationTime").val(b/1000);
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("移动专享");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("移动专享");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouTimeWarn").html("该商品为移动专享，如需购买请扫上方二维码").show();
$("#timePanel").removeClass("only-label").show();
preBuy.countdown()
}}}}else{sn.isPreBuy=0;
$("#timePanel").hide();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}initBookStatus()
};
var bookInfo=bookInfo||{status:0,bookActionId:"",bookType:"","adapteTerminal;":"",noInventoryFlag:"",doubleIndemnityFlag:"",fullPaymentFlag:"",actionStartTime:"",actionEndTime:"",curTime:"",depositStartTime:"",depositEndTime:"",balanceStartTime:"",balanceEndTime:"",sendTime:"",vendorMobileNumber:"",parentPartNumber:"",totalGoodsNum:"",personBuyLimit:"",bookPrice:"",depositAmount:"",segmentType:"",realBookedCount:"",virtualBookedCount:"",bookRemain:"",cityStr:"",saleStatus:false,initBookInfo:function(b){if(b!=null){bookInfo.bookActionId=b.bookActionId;
bookInfo.bookType=b.bookType;
bookInfo.adapteTerminal=b.adapteTerminal;
bookInfo.noInventoryFlag=b.noInventoryFlag;
bookInfo.doubleIndemnityFlag=b.doubleIndemnityFlag;
bookInfo.fullPaymentFlag=b.fullPaymentFlag;
bookInfo.actionStartTime=b.actionStartTime/1000;
bookInfo.actionEndTime=b.actionEndTime/1000;
bookInfo.curTime=sn.nowTime/1000;
bookInfo.depositStartTime=b.depositStartTime/1000;
bookInfo.depositEndTime=b.depositEndTime/1000;
bookInfo.balanceStartTime=b.balanceStartTime/1000;
bookInfo.balanceEndTime=b.balanceEndTime/1000;
bookInfo.sendTime=b.sendTime;
bookInfo.vendorMobileNumber=b.vendorMobileNumber;
bookInfo.parentPartNumber=b.parentPartNumber;
bookInfo.totalGoodsNum=b.totalGoodsNum;
bookInfo.personBuyLimit=b.personBuyLimit;
bookInfo.segmentType=b.segmentType;
bookInfo.realBookedCount=b.realBookedCount?b.realBookedCount:0;
bookInfo.virtualBookedCount=b.virtualBookedCount?b.virtualBookedCount:0;
bookInfo.bookRemain=b.bookRemain;
bookInfo.cityStr=b.cityStr;
bookInfo.flag=true;
if(sn.invStatus=="6"){bookInfo.flag=false
}else{bookInfo.flag=false;
if(typeof bookInfo.cityStr!="undefined"&&bookInfo.cityStr!=""){$.each(bookInfo.cityStr.split(","),function(c,e){if(sn.lesCityId==e){bookInfo.flag=true
}})
}else{bookInfo.flag=true
}}if(sn.netPrice==""){bookInfo.bookRemain="3"
}if(bookInfo.bookType=="10"){$("#timePanel span:first").attr("class","djh-title").html("预定")
}else{if(bookInfo.bookType=="11"){$("#timePanel span:first").attr("class","djh-title").html("定金团")
}}$("#dingJinTuan").html('<a href="javascript:void(0);" class="ruler-link r-rule" onclick="(function(e){var we = e||event||window.event;var y = we.clientY;$(\'html,body\').animate({scrollTop: $(\'.presell-process\').offset().top - y}, 200);})();">预定规则</a> <div class="content" style="display: none;"> <span class="tri-pointer-up tip-yun-up"> <i class="tip-yun"></i> </span> <p>1.定金支付后，若非商家责任（以“售后政策“为准），恕不退还；</p><p>2.请在要求付尾款时间内至“我的订单”进行支付，超时关闭，且定金不予退还；</p><p>3.生鲜、定制类预定商品不支持7天无理由退换货；</p><p>4.发货时间请以预定商品详情页“发货时间”为准；</p><p>5.批量购买可通过4008516516大客户渠道，我司有权取消普通渠道下的批量订单.</p><a target="_blank" href="//help.suning.com/page/id-582.htm">规则详情</a></div>').show();
$("#timePanel").show();
var a=0;
if(bookInfo.flag&&bookInfo.bookRemain!="3"){if(bookInfo.curTime<bookInfo.depositStartTime){bookInfo.status=1;
a=parseInt(bookInfo.depositStartTime)-parseInt(bookInfo.curTime)
}else{if(bookInfo.curTime>=bookInfo.depositStartTime&&bookInfo.curTime<=bookInfo.depositEndTime){bookInfo.status=2;
a=parseInt(bookInfo.depositEndTime)-parseInt(bookInfo.curTime)
}else{if(bookInfo.curTime>bookInfo.depositEndTime&&bookInfo.curTime<bookInfo.balanceStartTime){if(bookInfo.bookType=="11"){bookInfo.status=6;
a=0
}else{bookInfo.status=3;
a=parseInt(bookInfo.balanceStartTime)-parseInt(bookInfo.curTime)
}}else{if(bookInfo.curTime>=bookInfo.balanceStartTime&&bookInfo.curTime<=bookInfo.balanceEndTime){if(bookInfo.bookType=="11"){bookInfo.status=6;
a=0
}else{bookInfo.status=4;
a=parseInt(bookInfo.balanceEndTime)-parseInt(bookInfo.curTime)
}}else{bookInfo.status=5;
a=0
}}}}}itemService.setFreeFreight();
initBookStatus();
bookInfo.processBookSellState();
bookInfo.processCart();
bookInfo.fillBookProcedure();
if(bookInfo.flag&&bookInfo.bookRemain!="3"){bookInfo.bookCount(a)
}processQcode();
iFourth.presell();
iFourth.mainHeight()
}},resetBookCss:function(){this.processBookPrice();
this.processCart();
this.processOthers()
},processOthers:function(){},processBookSellState:function(){$("#c_yunfei").hide();
$("#nowProduct").hide();
$("#prescription").hide();
if(typeof gProduct!="undefined"&&gProduct.gors=="0"){bookInfo.saleStatus=true
}else{if(bookInfo.status==4||(bookInfo.bookType=="11"&&bookInfo.status==2)){var a,b="";
if(((sn.invStatus!="1"&&sn.invStatus!="4")&&!sn.isCShop)||(sn.isCShop&&sn.invStatus!="1")||sn.netPrice==""){a="无货";
b="本商品在该城市暂无货";
bookInfo.saleStatus=false;
$("#nowProduct").addClass("c-f00").html(b).show()
}else{if((!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag)&&(typeof sn.shipOffSet=="undefined"||sn.shipOffSet=="-1"||sn.shipOffSet=="")){a="本地区暂不销售";
b="建议您选购其他商品";
bookInfo.saleStatus=false;
$("#nowProduct").addClass("c-f00").html(b).show()
}else{a="免运费";
b="";
bookInfo.saleStatus=true
}}$("#c_kucun").html(a).show()
}}$("#ztServ").hide();
if(!sn.isSupportCOD){$("#zyService").hide()
}},processCart:function(){var a=parseInt(bookInfo.realBookedCount)+parseInt(bookInfo.virtualBookedCount);
var c="javascript:toDepositCart();";
var b="javascript:toBalanceCart();";
$("#tellMe").hide();
if(bookInfo.personBuyLimit!="0"&&bookInfo.personBuyLimit!=""&&typeof bookInfo.personBuyLimit!="undefined"){$("#productLimit").html("每人限购<em>"+bookInfo.personBuyLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",bookInfo.personBuyLimit);
$("#buycount").show();
iFourth.buyNum()
}$("#buyNowAddCart").hide();
if(bookInfo.flag&&bookInfo.bookRemain!="3"){$("#timePanel").removeClass("only-label")
}$("#preBuyText").hide();
$("#yushouCount").hide();
$("#addCart").removeAttr("tooltip");
if(!bookInfo.flag){$("#c_kucun").hide();
$("#nowProduct").addClass("c-f00").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不参加预定").show();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("支付定金");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("支付定金");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#timePanel").removeClass("only-label").addClass("only-label");
$(".proinfo-deliver-time").show()
}else{if(sn.invStatus=="7"||bookInfo.bookRemain=="3"){$("#c_kucun").hide();
$("#nowProduct").addClass("c-f00").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不支持预定").show();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("支付定金");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("支付定金");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#timePanel").removeClass("only-label").addClass("only-label");
$(".proinfo-deliver-time").show()
}else{if(bookInfo.status==1){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("等待预定");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","活动时间未到，请耐心等待");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待预定");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(bookInfo.status==2){if(bookInfo.bookType!="11"||bookInfo.saleStatus){if(parseInt(bookInfo.bookRemain)==1){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("还有机会");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","稍等一小会儿，还有机会哦");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("还有机会");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(parseInt(bookInfo.bookRemain)==0){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("已定完");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","商品已被预定完了，下次早一点哦");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("已定完");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{$("#addCart").removeClass().addClass("btn-orange-autowidth").html("支付定金");
$("#addCart").attr("href",c).removeAttr("target","_blank").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-orange-mini").html("支付定金");
$("#addCart2").attr("href",c).removeAttr("target","_blank")
}}}else{$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("支付定金");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("支付定金");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if(a!=0){$("#yushouCount").html("<span>已成功预定</span><strong>"+a+"</strong><span>件</span>").show()
}}else{if(bookInfo.status==3){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("等待付尾款");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("等待付尾款");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(a!=0){$("#yushouCount").html("<span>已成功预定</span><strong>"+a+"</strong><span>件</span>").show()
}}else{if(bookInfo.status==4){if(bookInfo.saleStatus){$("#addCart").removeClass().addClass("btn-orange-autowidth").html("支付尾款");
$("#addCart").attr("href",b).removeAttr("tooltip").removeAttr("target","_blank");
$("#addCart2").removeClass().addClass("btn-orange-mini").html("支付尾款");
$("#addCart2").attr("href",b).removeAttr("target","_blank")
}else{$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("支付尾款");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("支付尾款");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target","_blank")
}if(a!=0){$("#yushouCount").html("<span>已成功预定</span><strong>"+a+"</strong><span>件</span>").show()
}}else{if(bookInfo.status==6){$("#timePanel").removeClass("only-label").addClass("only-label");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("已定完");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("已定完");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{$("#timePanel").removeClass("only-label").addClass("only-label");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("活动已结束");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("活动已结束");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}}}}}}iFourth.servLabel()
},bookCount:function(a){$("#durationTime").val(a);
iFourth.countdown.down(function(b){if(b==0){if(bookInfo.status==1){bookInfo.status=2;
$("#durationTime").val(parseInt(bookInfo.depositEndTime)-parseInt(bookInfo.depositStartTime));
iFourth.countdown.setTime()
}else{if(bookInfo.status==2){if(bookInfo.bookType=="11"){bookInfo.status=6;
$("#durationTime").val(0)
}else{bookInfo.status=3;
$("#durationTime").val(parseInt(bookInfo.balanceStartTime)-parseInt(bookInfo.depositEndTime))
}iFourth.countdown.setTime()
}else{if(bookInfo.status==3){if(bookInfo.bookType=="11"){bookInfo.status=6;
$("#durationTime").val(0)
}else{bookInfo.status=4;
$("#durationTime").val(parseInt(bookInfo.balanceEndTime)-parseInt(bookInfo.balanceStartTime))
}iFourth.countdown.setTime()
}else{if(bookInfo.status==4){bookInfo.status=5;
$("#durationTime").val(0);
iFourth.countdown.setTime()
}}}}$("#timePanel").show();
initBookStatus();
CommonFourPage.resetServiceSupport();
bookInfo.processBookSellState();
bookInfo.processCart()
}})
},fillBookProcedure:function(){var a=$("#depositTime");
var e=$("#balanceTime");
c(a,bookInfo.depositStartTime*1000,bookInfo.depositEndTime*1000);
$("#depositTime .deposit-money").html("<em>¥</em>"+sn.bookPrice);
c(e,bookInfo.balanceStartTime*1000,bookInfo.balanceEndTime*1000);
$("#balanceTime .deposit-money").html("<em>¥</em>"+sn.finalPayment);
var f=new Date(parseInt(bookInfo.sendTime));
var b="预计"+(f.getMonth()+1)+"月"+f.getDate()+"日发货";
$("#sendTime dd").eq(0).html(b);
$("#bookProcedure").show();
function c(j,g,h){var i=new Date(parseInt(g));
start="开始："+(i.getMonth()+1)+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒";
i=new Date(parseInt(h));
end="结束："+(i.getMonth()+1)+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒";
j.find("dd").eq(0).html(start);
j.find("dd").eq(1).html(end)
}}};
function toDepositCart(){if(sn.prdType=="S"&&!gMain.checkIsSub()){iFourth.TZM.show();
return
}if(sn.prdType=="g"&&!Cluster.checkIsSub()){iFourth.TZM.show();
return
}if(sn.startCount&&sn.startCount!=""&&(parseInt($("#buyNum").val())<parseInt(sn.startCount)||$("#buyNum").val()=="")){$("#buyNum").val(sn.startCount);
$("#productLimit").html("<em>该商品"+sn.startCount+"件起售</em>");
return
}else{if($("#buyNum").val()==""||parseInt($("#buyNum").val())<1){$("#buyNum").val("1")
}}var c=sn.partNumber;
var a=$(".proinfo-num input").val();
var b=[];
CommonFourPage.getAfterSalesService(b);
$("body").AjaxLogin({success:function(){if(sn.bookActionAddcartFlag=="0"){window.location.href=sn.yushouDomain+"/book/gotoBookOrderInfo.do?partNumber="+c+"&bookGoodsId="+sn.bookGoodsId+"&buyNum="+a
}else{buyNowFourPage(a,c,"15",preBuy.actionID,"","","","",b,function(){})
}},error:function(){}})
}function toBalanceCart(){if(sn.prdType=="S"&&!gMain.checkIsSub()){iFourth.TZM.show();
return
}if(sn.prdType=="g"&&!Cluster.checkIsSub()){iFourth.TZM.show();
return
}var b=sn.vendorCode==""?"0000000000":sn.vendorCode;
var a=sn.yushouDomain+"/book/outerIntf/validatePayBalanceByJsonp-"+preBuy.actionID+"-"+sn.partNumber+"-"+b+"-inits.do";
$("body").AjaxLogin({success:function(){$.ajax({url:a,cache:false,dataType:"jsonp",jsonpCallback:"inits",success:function(e){var c="";
if(e.resultFlag){if(e.resultCode=="100-01-00"){window.location.href="//"+sn.memberDomain+"/emall/MyOrdersView?catalogId=10051&storeId=10052"
}else{if(e.resultCode=="100-01-01"){c="很抱歉，还未到支付尾款时间,请耐心等待哦！"
}else{if(e.resultCode=="100-01-02"){c="很抱歉，尾款支付时间已过，下次早点哦！"
}else{if(e.resultCode=="100-00-03"){c="很抱歉，此活动无效，请选购其他商品！"
}else{c="很抱歉，您目前没有符合付尾款条件的订单哦！";
$("#addCart").removeClass().removeClass().addClass("btn-dark-buy btn-disabled").html("支付尾款");
$("#addCart").attr("href","javascript:void(0);").removeAttr("tooltip").removeAttr("target","_blank");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("支付尾款");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#yushouCount").hide();
$("#jhsm").hide()
}}}}}if(c!=""){psellAlterInfo(c)
}}})
},error:function(){}})
}FourPage.initialize=function(){if(scmInfo.sendUrlToDsa=="1"){iFourth.watchUndefined()
}if(sn.prdType=="S"){$("#J-TZM .proattr-radio a").attr("href","javascript:void(0);")
}$("#colorItemList a").attr("href","javascript:void(0);");
$("#versionItemList a").attr("href","javascript:void(0);");
CommonFourPage.sort();
FourPage.initCity();
FourPage.initCityButton();
FourPage.makeRightPara();
FourPage.commentJump();
FourPage.getReview();
CommonFourPage.storeService.init()
};
FourPage.initCity=function(){FourPage.getCity(function(a){sn.cityId=a.cityCommerceId;
sn.cityName=a.cityName;
sn.districtId=a.districtCommerceId;
sn.districtName=a.districtName;
sn.provinceCode=a.provinceCommerceId;
sn.provinceName=a.provinceName;
sn.mdmProvinceId=a.provinceMDMId;
sn.mdmCityId=a.cityMDMId;
sn.mdmDistrictId=a.districtMDMId;
sn.lesCityId=a.cityLESId;
sn.lesDistrictId=a.districtLESId;
if(sn.lesCityId==null||sn.lesCityId=="null"||sn.lesCityId==""||sn.lesDistrictId==null||sn.lesDistrictId=="null"||sn.lesDistrictId==""){sn.lesCityId="010";
sn.lesDistrictId="01"
}if(sn.simBuyType=="3"||sn.simBuyType=="4"||sn.catenIds=="R9010251"){$("#seeAgainTile").hide();
simInitialize()
}else{if(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize(sn.cityId)
}}}})
};
FourPage.initCityButton=function(){$("#sncity").mCity({used:true,cityCb:function(a){},distCb:function(a){sn.districtName=a.district.name;
sn.chanCity=false;
sn.provinceCode=a.province.id;
sn.districtId=a.district.cid;
sn.districtName=a.district.name;
sn.mdmProvinceId=a.province.id;
sn.mdmCityId=a.city.id;
sn.mdmDistrictId=a.district.id;
sn.lesCityId=a.city.lesId;
sn.lesDistrictId=a.district.lesId;
changeCityInitialize();
if(sn.simBuyType=="3"||sn.simBuyType=="4"||sn.catenIds=="R9010251"){simInitialize()
}else{if(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize(a.city.id)
}}}},getCity:function(a){$("#serviceCity").html(($("#sncity .pr:not(.dn)").length>0?$("#sncity .pr:not(.dn)").html():"")+$("#sncity .ct").html()+$("#sncity .ds").html())
},changeCb:function(a){sn.chanCity=false;
isFareFree=0;
sn.provinceCode=a.province.id;
sn.provinceName=a.province.name;
sn.cityId=a.city.cid;
sn.cityName=a.city.name;
sn.districtId=a.district.cid;
sn.districtName=a.district.name;
sn.mdmProvinceId=a.province.id;
sn.mdmCityId=a.city.id;
sn.mdmDistrictId=a.district.id;
sn.lesCityId=a.city.lesId;
sn.lesDistrictId=a.district.lesId;
changeCityInitialize();
$(".proinfo-tip").hide();
$(".luoji-tip").hide();
FourPage.lazyFunction();
if(!sn.donateFlag){FourPage.Recommend()
}if(sn.simBuyType=="3"||sn.simBuyType=="4"||sn.catenIds=="R9010251"){simInitialize()
}else{if(sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize()
}}}}})
};
function changeCityInitialize(){sn.specialData="";
$("#J-TZM").show();
$("#J-TZM li").show().attr("name","");
$("#listProContent .tabarea-items li").attr("has-data",false);
$("#J-holiday").hide();
$("#J-holiday").html("");
$("li[rel=#J-holiday]").removeClass().addClass("tab-holiday current").hide();
$("#J-manager-rec").hide();
$("#J-manager-rec").html("");
$("li[rel=#J-manager-rec").removeClass().hide();
$("#J-klyk").hide();
$("#J-klyk .klyk-list").html("");
$("li[rel=#J-klyk]").removeClass().hide()
}function initialize(){initializePara();
FourPage.initCss();
thisOnSale.init();
generalSub={};
if(sn.specialSaleFlag=="1"){processNoPubish();
initServiceOffInstall()
}else{if(sn.prdType=="S"){if(sn.passPartNumber==sn.partNumber){getLuaSaleStatus("1")
}else{getLuaSaleStatus("2")
}}else{getLuaSaleStatus("0")
}}if(isSpecialSale()){initSpecialSale()
}if(sn.feastActive=="0"&&!sn.suningJiWuFlag){CommonFourPage.Recommend.specialFestival(sn.passPartNumber,"Recommend.getSpecialData")
}if(sn.isCShop&&sn.businessType!="0"&&!sn.swlShopFlag&&!sn.csSwlShopFlag){CommonFourPage.Recommend.getShopRecommend(sn.passPartNumber,"Recommend.bulidShopRecommend")
}FourPage.initCluster();
if(sn.catenIds!=scmInfo.broadBandId&&sn.simBuyType!="3"&&sn.simBuyType!="4"){$(".after-market").each(function(){$(this).hide()
})
}CommonFourPage.FourPage.getItemDescInfo(sn.passPartNumber,CommonFourPage.FourPage.processItemdescInfo);
CommonFourPage.Recommend.getSeeAgain(sn.passPartNumber,"Recommend.getRecomData");
if(!sn.isCShop){FourPage.ajaxCmsActivityBar()
}getShopScoreList("shopReviewScore");
setFixBarOnline();
setRobot();
FourPage.shareWb()
}function initializePara(){sn.errorCode="";
sn.installFlag="";
openAPIList="";
openAPIListV2="";
sn.hasStorage="Z";
sn.pgPrice="";
sn.pgFlag="";
sn.lineOffHasStorage="";
sn.hwgTax="";
sn.priceInvData="";
sn.shipOffSet="";
sn.shipOffSetText="";
sn.prescription="";
sn.govPrice="";
sn.vipPrice="";
sn.hasMemberProm="";
sn.mobilePrice="";
sn.newCouponValue=0;
sn.freight="-1";
sn.isPreBuy=0;
sn.sendCityName="";
sn.barePhoneDesc="";
PriceShow.status="";
sn.promotionPrice="";
sn.netPrice="";
sn.giftInfo="";
clearTimeout(cDown);
remain=0;
sn.silenceType="";
sn.cuxiaoSoldOut="";
preBuy.actionID="";
sn.bookGoodsId="";
$("#buyNum").val(1);
$("#buyNum").attr("max",99);
iFourth.buyNum();
Renxf.hasFlag="N";
Renxf.showRxfProm=false;
Renxf.freenessInfo="";
PriceShow.isSaleRemind="N";
sn.sgComplete=false;
sn.mobileBigEndTime="";
sn.mobileJuId="";
sn.luaInvStatus="";
iCompare.initFlag=true;
iFourth.unBindFreight();
sn.isSupportCOD=false;
sn.hasLimitCount=false;
sn.shipColorFlag="N";
sn.sellType=0;
sn.promFreight="";
cloudInfo.init();
Renxf.condition="";
Renxf.needFlag=false;
customExpoData=[];
if(sn.twoFlag){runCustomExpoData("item_"+sn.ninePartNumber+"_basic_pic-1shouji")
}else{if(sn.categoryId==sn.phoneCategoryId){runCustomExpoData("item_"+sn.ninePartNumber+"_basic_pic-shouji")
}}if(sn.videoUrl!=""){runCustomExpoData("item_"+sn.ninePartNumber+"_vedio_vediopic-expose")
}}gMain.initGeneralInfo=function(x){gProduct.minPrice="";
gProduct.maxPrice="";
gProduct.refMinPrice="";
gProduct.refMaxPrice="";
gProduct.resetPrice=false;
if(x&&x.data&&x.data.price&&x.data.price.saleInfo[0]){generalSub=x.data.price;
if(generalSub.saleInfo[0].priceType.substring(0,1)=="8"){sn.isPreBuy=2
}else{if(generalSub.saleInfo[0].priceType.substring(0,1)=="7"){sn.isPreBuy=1
}else{sn.isPreBuy=0
}}sn.availCheckCode=(typeof x!="undefined"&&typeof x.data.availCheckCode=="undefined")?"":x.data.availCheckCode;
sn.nowTime=x.data.nowTime;
sn.cuxiaoType=generalSub.saleInfo[0].priceType;
sn.invStatus=generalSub.saleInfo[0].invStatus;
sn.priceType=(sn.cuxiaoType).indexOf("4")==0?"4":(sn.cuxiaoType);
sn.manageInvFlag=generalSub.saleInfo[0].manageInvFlag;
sn.factorySendFlag=generalSub.saleInfo[0].factorySendFlag;
sn.ownerPlace=generalSub.saleInfo[0].ownerPlace;
sn.bookPrice=generalSub.saleInfo[0].bookPrice;
sn.bookPriceSwell=generalSub.saleInfo[0].bookPriceSwell;
sn.finalPayment=generalSub.saleInfo[0].finalPayment;
preBuy.purchaseType=generalSub.saleInfo[0].purChaseType;
preBuy.actionID=generalSub.saleInfo[0].bookActionID;
sn.bookGoodsId=generalSub.saleInfo[0].bookGoodID;
getBigPolyHeardAndfoot();
var u=$("#pagename").val();
if(sn.cuxiaoType=="4-14"){if(!sn.tmShopFlag){var s=generalSub.saleInfo[0].vendor;
if(s&&s.length==10){href=sn.itemDomain+"/"+s+"/"+getEffectivePartNumber(sn.partNumber)+".html";
window.location.href=href
}}sn.tmShopFlag=true;
u=u.replace("actype=","actype=100038")
}if(!sn.tmShopFlag||generalSub.saleInfo[0].vendor!=""){sn.vendor=generalSub.saleInfo[0].vendor;
if(sn.review.vendorCode=="0000000000"&&sn.tmShopFlag){sn.review.vendorCode=sn.vendor;
initSpecialSale()
}}PriceShow.actionId=generalSub.saleInfo[0].juId;
if(sn.isCShop&&sn.invStatus=="1"){sn.hasStorage="Y"
}else{if(!sn.isCShop&&(sn.invStatus=="1"||sn.invStatus=="4")){sn.hasStorage="Y"
}}}CommonFourPage.resetSnServiceContent();
gMain.FixedSearchPicture();
getImageVersionList();
var g=false;
if(!(gProduct&&gProduct.gInfo&&gProduct.gInfo.charPartNumbers)){initPriceHtml();
initServiceOffInstall();
sn.hasStorage="Z";
processError();
return
}gMain.subCode=new SubCode($(".proattr-radio").eq(0),(gProduct.gType==1)?"":$(".proattr-radio").eq(1),generalSub.saleInfo,gProduct.gInfo.charPartNumbers[0],"s");
if(gProduct.gors==0||typeof gProduct.gInfo.charPartNumbers=="undefined"||gProduct.gInfo.charPartNumbers.length==0){initPriceHtml();
initServiceOffInstall();
g=true;
var t=$(".proattr-radio").eq(0).find("li");
var l=$(".proattr-radio").eq(1).find("li");
if((gProduct.gType==1&&t.length==1)||(gProduct.gType==2&&t.length==1&&l.length==1)){var h=typeof($(t[0]).attr("cid"))!="undefined"?$(t[0]).attr("cid"):"";
var w=typeof($(l[0]).attr("cid"))!="undefined"?$(l[0]).attr("cid"):"";
var n=gProduct.gInfo.charPartNumbers[0][h+w];
gProduct.gors=1;
sn.partNumber=n.partNumber;
sn.curSubItemId=n.itemId;
sn.imageCount=n.imageCount
}}if(gProduct.gors==0){if($(".proattr-radio").eq(0).find("li").length==1){$(".proattr-radio").eq(0).find("li").eq(0).addClass("selected")
}if($(".proattr-radio").eq(1).find("li").length==1){$(".proattr-radio").eq(1).find("li").eq(0).addClass("selected")
}}if(gProduct.gors==0&&sn.published!="1"){sn.hasStorage="Z";
processNoPubish()
}else{if(gProduct.gors==0&&generalSub.saleInfo[0].promotionPrice==""){$("#J-TZM").hide();
$("#timePanel").hide();
$("#weightid").hide();
$("#nowProduct").html("建议您选购其它商品").show();
$("#c_kucun").html("本地区暂不销售").show();
processNotSale()
}}if(gProduct.gors==1){$("#tabAddCart").show();
var f="",j="",z,r,b;
if(typeof gProduct.gInfo.charPartNumbers!="undefined"&&gProduct.gInfo.charPartNumbers.length!=0){$.each(gProduct.gInfo.charPartNumbers[0],function(o,c){if(c.partNumber==sn.partNumber){z=o+"";
return
}});
if(z!=undefined&&z!=""){if(gProduct.gType>=1){var m=$(".proattr-radio").eq(0).find("li");
$.each(m,function(o,c){if(z.indexOf($(c).attr("cid"))==0){f=$(c).attr("cid");
r=c
}})
}if(gProduct.gType>=2){var p=$(".proattr-radio").eq(1).find("li");
$.each(p,function(o,c){j=$(c).attr("cid");
var v=f+j;
if(z==v){b=c;
return
}})
}var n,i;
if(gProduct.gType==1){$(r).addClass("selected").siblings().removeClass("selected");
n=gProduct.gInfo.charPartNumbers[0][f]
}else{var q=$(r);
var y=$(r).attr("sid");
var k=$(".proattr-radio").eq(0).find("input:hidden");
q.addClass("selected").siblings().removeClass("selected");
$(b).addClass("selected").siblings().removeClass("selected");
k.val(q.attr("data-id"));
i=b;
j=$(b).attr("cid");
n=gProduct.gInfo.charPartNumbers[0][f+j]
}gMain.subCode.checkDom("");
gMain.showResult();
if(n!=undefined){sn.partNumber=n.partNumber;
sn.curSubItemId=n.itemId;
sn.imageCount=n.imageCount
}if(g){gMain.switchSub()
}else{gMain.switchSub(x)
}}}}else{if(gMain.subCode.allSaleState){if(sn.promotionPrice!=""&&typeof gProduct.gInfo.charPartNumbers!="undefined"&&gProduct.gInfo.charPartNumbers.length!=0){$("#addCart").removeClass().addClass("btn-orange-buy").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("立即购买").show()
}else{$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target")
}$("#tabAddCart").hide();
if((!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag)&&sn.promotionPrice!=""){sn.myfdesc=x.data.myfdesc;
if(x.data.freightObj){sn.freightResultCode=x.data.freightObj.resultCode;
sn.freight=x.data.freightObj.fare;
sn.snslt=x.data.freightObj.snslt;
if(x.data.freightObj.basicWeightSlt){sn.basicWeightSlt=x.data.freightObj.basicWeightSlt
}if(x.data.freightObj.weight){sn.weight=x.data.freightObj.weight
}}itemService.setFreeFreight()
}else{if(x&&x.data&&x.data.freightObj&&sn.promotionPrice!=""){sn.freightResultCode=x.data.freightObj.resultCode;
sn.freight=x.data.freightObj.fare;
sn.snslt=x.data.freightObj.snslt
}}processQcode();
if(sn.promotionPrice!=""){if(sn.isPreBuy==1){if(x&&x.data&&x.data.psell&&!jQuery.isEmptyObject(x.data.psell)){preBuy.initPreBuy(x.data.psell)
}else{processError()
}u=u.replace("actype=","actype=100039")
}else{if(sn.isPreBuy==2){if(x&&x.data&&x.data.psell&&!jQuery.isEmptyObject(x.data.psell)){bookInfo.initBookInfo(x.data.psell)
}else{processError()
}u=u.replace("actype=","actype=100040")
}else{if(sn.priceType=="4"){if(x&&x.data&&x.data.bigPoly&&!jQuery.isEmptyObject(x.data.bigPoly)){bigPoly.processBigPoly(x.data.bigPoly)
}else{processError()
}u=u.replace("actype=","actype=100035")
}}}}if(sn.priceInvData.vendor){u=u.replace("supid=;","supid="+sn.priceInvData.vendor+";")
}$("#pagename").val(u);
if(sn.promotionPrice!=""&&sn.hasStorage=="Y"){sn.hasMemberProm="Y";
getICPSPromInfo(sn.partNumber,"FourPage.promInfoCallback");
CommonFourPage.queryMemberStatusInfo();
CommonFourPage.queryMemberType();
CommonFourPage.ServiceLabel()
}if((!sn.isCShop||sn.csSwlShopFlag)&&sn.promotionPrice!=""&&sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&!sn.hwgShopFlag){initGetShopPay();
if(sn.showZeroBuy=="1"&&sn.cuxiaoType!="4-7"){itemService.getZeroBuy("zeroBuy")
}}if(!sn.blackVirFlag&&(!sn.isCShop||sn.csSwlShopFlag)){$("#safekeep").show();
$("#safekeepService").show();
$("#snService").show();
$("#snServiceContent").show()
}}if(sn.vendorCode=="0000000000"||(sn.csSwlShopFlag&&sn.factorySendFlag!="1")||sn.zyHwgFlag){if(isSpecialSale()){$("#callme").attr("href","javascript:findsinglepass('"+sn.tmOnlineId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.tmOnlineId+"','','','','');")
}else{if(sn.zyHwgFlag){$("#callme").attr("href","javascript:findsinglepass('"+sn.hwgOnlineId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.hwgOnlineId+"','','','','');")
}else{if(sn.suningJiWuFlag){$("#callme").attr("href","javascript:findsinglepass('"+sn.jiwuChatId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.jiwuChatId+"','','','','');")
}else{var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');")
}}}$("#callme").html("<i></i>联系客服");
$("#callmeTile").html("<i></i>联系客服")
}else{var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
if(sn.czyHwgFlag){$("#callme").html("<i></i>联系客服");
$("#callmeTile").html("<i></i>联系客服")
}else{$("#callme").html("<i></i>联系卖家");
$("#callmeTile").html("<i></i>联系卖家")
}}if(sn.promotionPrice==""){sendSaMessage("jg-jg-01");
sendSaMessageV2("jg-jg-01")
}initPcssPromotion();
if(gProduct.gType==2){var y=$(".proattr-radio").eq(0).find("li.selected").attr("sid");
if(typeof y!="undefined"&&typeof e!="undefined"){var e=$(".proattr-radio").eq(0).find("li.selected").index();
gMain.initSubCss(y,e)
}else{y=$(".proattr-radio").eq(1).find("li.selected").attr("sid");
if(typeof y!="undefined"&&typeof e!="undefined"){var e=$(".proattr-radio").eq(1).find("li.selected").index();
gMain.initSubCss(y,e)
}}gMain.subCode.checkDom("")
}else{var y=$(".proattr-radio").eq(0).find("li.selected").attr("sid");
gMain.subCode.checkDom("")
}if(sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&sn.priceType!="4"){getMobileBigPoly(sn.passPartNumber,showMobileBigPoly)
}biPassPartDaPushWhenReady()
}CommonFourPage.hwgDelivery(sn.hwgShopFlag);
if(sn.hwgShopFlag){CommonFourPage.hwgInitCss()
}if(!sn.hwgShopFlag&&!sn.suningJiWuFlag){CommonFourPage.FourPage.getPromotiondesc(sn.passPartNumber,CommonFourPage.aftermarket)
}if(sn.hwgShopFlag){CommonFourPage.FourPage.getOverseasFAQ(CommonFourPage.overseasFAQCallback)
}if(scmInfo.afterSalePicSwitch=="1"&&!sn.isCShop&&!sn.hwgShopFlag&&!sn.suningJiWuFlag){CommonFourPage.FourPage.getAfterSalePic("CommonFourPage.dealWithAfterSalePic")
}if(!isSpecialSale()&&!sn.hwgShopFlag&&gProduct.gors==0){if(isNotEmpty(x.data.price.saleInfo[0].serveCodeList)&&(typeof x.data.price.saleInfo[0].serveCodeList!="undefined")){afterSalesService(x.data.price.saleInfo[0].serveCodeList)
}}CommonFourPage.FourPage.getAdPicture("dealWithADPic");
setTimeout(function(){setFixBarOnline("")
},1000)
};
gMain.getRefPrice=function(a,e,f){if(typeof a=="undefined"||a==""){return""
}var g=new Array();
g=a.split("-");
var b="";
var c="";
if(g.length==2){b=parseFloat(g[0]).toFixed(2);
c=parseFloat(g[1]).toFixed(2)
}else{b=parseFloat(g[0]).toFixed(2);
c=parseFloat(g[0]).toFixed(2)
}if(parseFloat(b)>parseFloat(e)&&parseFloat(c)>parseFloat(f)){return a
}else{return""
}};
function initMiniCartInfo(){if(sn.prdType=="S"){var a=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+sn.partNumber+"_1_60x60.jpg";
$(".proinfo-mini .pro-name").html(sn.itemDisplayName);
$(".proinfo-mini img").attr("src",a)
}if(sn.promotionPrice==""){$("#cart2Price").html("本地区暂不销售")
}else{$("#cart2Price").html(sn.promotionPrice)
}$("#cart2Count").html($("#buyNum").val())
}gMain.checkIsSub=function(){var a=false;
var b={};
if(gProduct.gType==1){b.cid=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
if(b.cid!=undefined){a=true;
b.partNum=gProduct.gInfo.charPartNumbers[0][b.cid].partNumber
}else{$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(0).find(".w2").html())
}}else{b.cid=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
b.norms=$(".proattr-radio").eq(1).find("li.selected").attr("cid");
if(b.cid!=undefined&&b.norms!=undefined){a=true;
b.partNum=gProduct.gInfo.charPartNumbers[0][b.cid+b.norms].partNumber
}else{if(b.cid==undefined&&b.norms==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(0).find(".w2").html()+"、"+$(".proattr-radio").eq(1).find(".w2").html())
}else{if(b.cid==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(0).find(".w2").html())
}else{if(b.norms==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(1).find(".w2").html())
}}}}}return a
};
function getLuaSaleStatus(e,f){var a=sn.lesCityId+sn.lesDistrictId+"01";
var c="";
sn.custLevel=d("custLevel")==null?"":d("custLevel");
var b=sn.mountType!="03"?"":sn.mountType;
var g=sn.shopType;
if(sn.mountType=="10"&&sn.shopType!="6"&&sn.shopType!="3"){g="7"
}else{if(sn.shopType=="6"){sn.vendor=sn.vendorCode
}}if(e=="3"){if(f&&f.promotionPrice){c=sn.luaUrl+"/nspcsale_"+e+"_"+sn.passPartNumber+"_"+sn.partNumber+"_"+sn.vendorCode+"_"+sn.provinceCode+"_"+sn.lesCityId+"_"+a+"_"+sn.category1+"_"+sn.mdmCityId+"_"+sn.cityId+"_"+sn.districtId+"_"+sn.cmmdtyType+"_"+sn.custLevel+"_"+b+"_"+f.manageInvFlag+"_"+f.factorySendFlag+"_"+f.ownerPlace+"_"+f.accountPlace+"_"+f.deptNo+"_"+f.vendor+"_"+f.sendAvalidTime+"_"+f.purChaseType+"_"+f.bookActionID+"_"+f.priceType+"_"+f.vendorType+"_"+f.juId+"_"+encodeURIComponent(f.promotionPrice)+"_"+f.bookGoodID+"_"+f.invStatus+"_"+g+"_"+sn.vendor+".html"
}else{initProductPriceInfo("",f)
}}else{c=sn.luaUrl+"/nspcsale_"+e+"_"+sn.passPartNumber+"_"+sn.partNumber+"_"+sn.vendorCode+"_"+sn.provinceCode+"_"+sn.lesCityId+"_"+a+"_"+sn.category1+"_"+sn.mdmCityId+"_"+sn.cityId+"_"+sn.districtId+"_"+sn.cmmdtyType+"_"+sn.custLevel+"_"+b+"_"+sn.catenIds+"_"+sn.weight+"_"+g+"_"+sn.vendor+".html"
}if(c!=""){$.ajax({url:c,type:"get",cache:false,dataType:"jsonp",jsonp:"callback",jsonpCallback:"pcData",success:function(h){if(h&&typeof h.data!="undefined"&&typeof h.data.pcMsg!="undefined"){sn.transactionHTTPS=h.data.pcMsg[0].https;
sn.pcNewCouponsFlag=h.data.pcMsg[0].pcNewCouponsFlag
}if(e=="0"){initProductPriceInfo(h)
}else{if(e=="1"||e=="2"){gMain.initGeneralInfo(h)
}else{initProductPriceInfo(h,f)
}}Recommend.proinfoShortTip();
jiwu.qualityControl()
}})
}}gMain.switchSub=function(b){$("#seeAndsee").hide();
$("#tabAddCart").show();
gProduct.gors=1;
initializePara();
FourPage.initCss();
var a;
$.each(generalSub.saleInfo,function(e,c){if(c.partNumber==sn.partNumber){a=c
}});
if(b){initProductPriceInfo(b,a)
}else{getLuaSaleStatus(3,a)
}gMain.processSubCss();
Recommend.dpInitShowCss()
};
gMain.showResult=function(){var b=$(".proattr-result"),a=b.find("dd .result-text");
var c="";
$(".proattr-radio:not(#phonedl) li.selected, .proattr-check li.selected").each(function(){c+='"'+$(this).attr("title")+'" '
});
$(".proinfo-bangke input:checked").each(function(){c+='"'+$(this).next("label").text()+'" '
});
a.text(c);
(c==""&&$("#phonedl li.selected").size()==0)&&b.hide()||b.show()
};
gMain.processSubCss=function(){$("#partNum").html(getEffectivePartNumber(sn.partNumber));
$(".imgview-count span").html(sn.imageCount);
getImageVersion(sn.partNumber);
var e,c,a;
var b=$(".proattr-radio").eq(1).find("li");
$.each(b,function(f,g){if(typeof $(g).attr("class")!="undefined"&&$(g).attr("class").indexOf("select")>=0){c=$(g).attr("cid")
}});
e=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
if(e==undefined){e=""
}if(c==undefined){c=""
}a=gProduct.gInfo.charPartNumbers[0][e+c];
if(typeof a!="undefined"){sn.itemDisplayName=typeof a.itemDisplayName!="undefined"&&a.itemDisplayName!=""?a.itemDisplayName:a.itemName;
$("#tabAddCart .pro-name").html(sn.itemDisplayName);
if(sn.seoBreadCrumbName==""){$("#productName").html("<a href='"+sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(sn.partNumber)+".html'>"+(sn.itemDisplayName!=undefined?(sn.itemDisplayName.substring(0,30)+"..."):"")+"</a>");
$("#productName").attr("title",sn.itemDisplayName)
}processProductName();
$("#partNumberLable").html(a.partNumber!=undefined?a.partNumber.substring(9,18):"")
}};
function processProductName(){var a="";
if(typeof sn.errorCode!="undefined"&&sn.errorCode!=""){a="("+sn.errorCode.substring(3,5)+")"
}if(sn.pavilion){$("#itemDisplayName").html('<span class="tsg">'+sn.pavilion+"</span>"+sn.itemDisplayName+(sn.smartFlag?"【支持苏宁智能APP远程操控 】":"")+a)
}else{if(sn.zyHwgFlag||sn.czyHwgFlag){$("#itemDisplayName").html('<span class="hwg"><i>海外购</i><i class="hwg-zy-in">自营</i></span>'+sn.itemDisplayName+(sn.smartFlag?"【支持苏宁智能APP远程操控 】":"")+a)
}else{if(sn.vendorCode==""||sn.vendorCode=="0000000000"||sn.businessType=="0"||sn.csSwlShopFlag||sn.tmShopFlag){$("#itemDisplayName").html('<span class="zy" id="itemNameZy">自营</span>'+sn.itemDisplayName+(sn.smartFlag?"【支持苏宁智能APP远程操控 】":"")+a)
}else{$("#itemDisplayName").html(sn.itemDisplayName+(sn.smartFlag?"【支持苏宁智能APP远程操控 】":"")+a)
}}}}gMain.initSubCodeImg=function(f,h){var e=sn.vendorCode;
var k=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+e+"-"+h;
var g="800x800";
var i="60x60";
var a="100x100";
if(sn.tmShopFlag){e=sn.vendor;
k=sn.newImageDomianDir+"/uimg/mcmp/tm/"+e+h;
g="600x800";
i="75x100";
a="75x100"
}var b="";
if(f&&f!=""){b="?ver="+f
}var c="";
var j="";
if($("#3Dli").length>0){c+='<li class="current" id="3Dli">';
c+=$("#3Dli").html();
c+="</li>";
if($("#big3Dli").length>0){j+='<li class="current" id="big3Dli">';
j+=$("#3Dli").html();
j+="</li>"
}}if($("#SPli").length>0){c+='<li class="current" id="SPli">';
c+=$("#SPli").html();
c+="</li>"
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getPicStatus_"+h+"_"+e+"_processSubCodeImg.html",type:"get",cache:false,dataType:"jsonp",jsonpCallback:"processSubCodeImg",success:function(m){var p=[];
for(var o=1;
o<parseInt(sn.imageCount)+1;
o++){p.push(o+"")
}if(m&&m.length>0){if(m[0].picPositionList&&m[0].picPositionList.length){for(var n=0;
n<m[0].picPositionList.length;
n++){if(p.indexOf(m[0].picPositionList[n])>-1){p.splice(p.indexOf(m[0].picPositionList[n]),1)
}}}if(p.length>0){for(var l=0;
l<p.length;
l++){c+="<li ";
if(o==0&&c==""){c+='class="current"'
}c+='><a href="javascript:void(0);"><img alt="" onerror="javascript:errorMainPicture(this);" src-large="'+k+"_"+p[l]+"_"+g+".jpg"+b+'"src-medium="'+k+"_"+p[l]+"_"+g+".jpg"+b+'" src="'+k+"_"+p[l]+"_"+i+".jpg"+b+'"></a></li>';
j+='<li><a href="javascript:void(0);"><img  onerror="javascript:errorMainPicture(this,true);" src="'+k+"_"+p[l]+"_"+a+".jpg"+b+'" src-large="'+k+"_"+p[l]+"_"+g+".jpg"+b+'" alt="" /></a></li>'
}if($("#tabAddCart img").attr("lazy-src")){$("#tabAddCart img").attr("lazy-src",k+"_1_"+i+".jpg"+b)
}else{$("#tabAddCart img").attr("src",k+"_1_"+i+".jpg"+b)
}$(".imgzoom-thumb-main").find("ul").html(c);
$("#bigImage").attr("src",$(".imgzoom-thumb-main").find("li[class=current]").find("a img").attr("src-large"));
$("#bigPic").html(j);
iFourth.masterImgShow();
iFourth.commonAllDirec()
}else{$("#bigImg").html('<img alt="" src="'+sn.amPdsRelation+'images/blank_pic_800.jpg">');
$("#bigPic").html('<img alt="" src="'+sn.amPdsRelation+'images/blank_pic_800.jpg">');
$(".imgzoom-thumb-main").find("ul").html("");
processNoPubish();
$(".imgzoom-main").off()
}}}})
};
gMain.initSubImage=function(h,f){if(scmInfo!="undefined"&&scmInfo.mainPictrueStatusSwitch=="1"){gMain.initSubCodeImg(h,f)
}else{if(isSpecialSale()){gMain.initTmSubImage(h,f);
return
}var c="";
if(h&&h!=""){c="?ver="+h
}var g="";
var e="";
var a=sn.vendorCode;
if(sn.tmShopFlag){a=sn.vendor
}var j=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+a+"-"+f;
if($("#3Dli").length>0){g+='<li class="current" id="3Dli">';
g+=$("#3Dli").html();
g+="</li>";
if($("#big3Dli").length>0){e+='<li class="current" id="big3Dli">';
e+=$("#3Dli").html();
e+="</li>"
}}if($("#SPli").length>0){g+='<li class="current" id="SPli">';
g+=$("#SPli").html();
g+="</li>"
}for(var b=0;
b<sn.imageCount;
b++){g+="<li ";
if(b==0&&g==""){g+='class="current"'
}g+='><a href="javascript:void(0);"><img alt="" onerror="javascript:errorMainPicture(this);" src-large="'+j+"_"+(b+1)+"_800x800.jpg"+c+'"src-medium="'+j+"_"+(b+1)+"_800x800.jpg"+c+'" src="'+j+"_"+(b+1)+"_60x60.jpg"+c+'"></a></li>';
e+='<li><a href="javascript:void(0);"><img  onerror="javascript:errorMainPicture(this,true);" src="'+j+"_"+(b+1)+"_100x100.jpg"+c+'" src-large="'+j+"_"+(b+1)+"_800x800.jpg"+c+'" alt="" /></a></li>'
}if($("#tabAddCart img").attr("lazy-src")){$("#tabAddCart img").attr("lazy-src",j+"_1_60x60.jpg"+c)
}else{$("#tabAddCart img").attr("src",j+"_1_60x60.jpg"+c)
}$(".imgzoom-thumb-main").find("ul").html(g);
$("#bigImage").attr("src",$(".imgzoom-thumb-main").find("li[class=current]").find("a img").attr("src-large"));
$("#bigPic").html(e);
iFourth.masterImgShow();
iFourth.commonAllDirec()
}};
gMain.initTmSubImage=function(h,f){var a=sn.vendor;
var c="";
if(h&&h!=""){c="?ver="+h
}var g="";
var e="";
if($("#3Dli").length>0){g+='<li class="current" id="3Dli">';
g+=$("#3Dli").html();
g+="</li>";
if($("#big3Dli").length>0){e+='<li class="current" id="big3Dli">';
e+=$("#3Dli").html();
e+="</li>"
}}if($("#SPli").length>0){g+='<li class="current" id="SPli">';
g+=$("#SPli").html();
g+="</li>"
}var j=sn.newImageDomianDir+"/uimg/mcmp/tm/"+a+f;
for(var b=0;
b<sn.imageCount;
b++){g+="<li ";
if(b==0&&g==""){g+='class="current"'
}g+='><a href="javascript:void(0);"><img alt="" onerror="javascript:errorMainPicture(this);" src-large="'+j+"_"+(b+1)+"_600x800.jpg"+c+'"src-medium="'+j+"_"+(b+1)+"_600x800.jpg"+c+'" src="'+j+"_"+(b+1)+"_75x100.jpg"+c+'"></a></li>';
e+='<li><a href="javascript:void(0);"><img  onerror="javascript:errorMainPicture(this,true);" src="'+j+"_"+(b+1)+"_75x100.jpg"+c+'" src-large="'+j+"_"+(b+1)+"_600x800.jpg"+c+'" alt="" /></a></li>'
}if($("#tabAddCart img").attr("lazy-src")){$("#tabAddCart img").attr("lazy-src",j+"_1_45x60.jpg"+c)
}else{$("#tabAddCart img").attr("src",j+"_1_45x60.jpg"+c)
}$(".imgzoom-thumb-main").find("ul").html(g);
$("#bigImage").attr("src",$(".imgzoom-thumb-main").find("li[class=current]").find("a img").attr("src-large"));
$("#bigPic").html(e);
iFourth.masterImgShow();
iFourth.commonAllDirec()
};
gMain.FixedSearchPicture=function(){var b=window.location.href.split("?")[1];
if(typeof b!="undefined"&&b!=""){var c=b.split("=");
if(typeof c!="undefined"&&c.length==2&&c[0]=="clu"&&c[1]!=""){b=c[1]
}else{return
}}else{return
}var a=$(".proattr-radio").eq(0).find("li");
$.each(a,function(h,g){var k=$(g).attr("cid");
if(k==b){var n=$(g).find("img").eq(0).attr("src");
var l=n.split("/")[6];
if(typeof l!="undefined"&&l!=""){l=l.split("_")[0];
var j=$(".proattr-radio").eq(1).find("li").eq(0).attr("cid");
j=typeof j=="undefined"?"":j;
var f=gProduct.gInfo.charPartNumbers[0][b+j].imageCount;
var e="";
var m="";
if(isSpecialSale()){var o=sn.newImageDomianDir+"/uimg/mcmp/tm/"+l;
for(var h=0;
h<f;
h++){e+="<li ";
if(h==0){e+='class="current"'
}e+='><a href="javascript:void(0);"><img alt="" src-large="'+o+"_"+(h+1)+'_600x800.jpg"src-medium="'+o+"_"+(h+1)+'_600x800.jpg" src="'+o+"_"+(h+1)+'_75x100.jpg"></a></li>';
m+='<li><a href="javascript:void(0);"><img src="'+o+"_"+(h+1)+'_75x100.jpg" src-large="'+o+"_"+(h+1)+'_600x800.jpg" alt="" /></a></li>'
}}else{var o=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+l;
for(var h=0;
h<f;
h++){e+="<li ";
if(h==0){e+='class="current"'
}e+='><a href="javascript:void(0);"><img alt="" src-large="'+o+"_"+(h+1)+'_800x800.jpg"src-medium="'+o+"_"+(h+1)+'_400x400.jpg" src="'+o+"_"+(h+1)+'_60x60.jpg"></a></li>';
m+='<li><a href="javascript:void(0);"><img src="'+o+"_"+(h+1)+'_100x100.jpg" src-large="'+o+"_"+(h+1)+'_800x800.jpg" alt="" /></a></li>'
}}$(".imgzoom-thumb-main").find("ul").html(e);
$("#partNum").html(l.substring(9,18));
$("#bigImage").attr("src",$(".imgzoom-thumb-main").find("li[class=current]").find("a img").attr("src-medium"));
$("#bigPic").html(m)
}iFourth.masterImgShow()
}})
};
gMain.initGeneralCss=function(f){if(f!=0){$(".proattr-radio").eq(0).find("li").removeClass("c-disabled disabled c-out-of-stock notic-able");
$(".proattr-radio").eq(1).find("li").removeClass("c-disabled disabled c-out-of-stock notic-able")
}$(".proattr-radio").removeClass("bg-0e6");
if(gProduct.gType==2){var c=$(".proattr-radio").eq(0).find("li");
var a=$(".proattr-radio").eq(1).find("li");
for(var h=0;
h<c.length;
h++){var g=c.eq(h).attr("cid");
gMain.processRadioStatus("i",g,"")
}for(var e=0;
e<a.length;
e++){var b=a.eq(e).attr("cid");
gMain.processRadioStatus("i","",b)
}if($(".proattr-radio").eq(0).find("li").length==1){$(".proattr-radio").eq(0).find("li").eq(0).addClass("selected")
}if($(".proattr-radio").eq(1).find("li").length==1){$(".proattr-radio").eq(1).find("li").eq(0).addClass("selected")
}}else{var k=$(".proattr-radio").eq(0).find("li");
gMain.processRadioStatus("i","","");
if($(".proattr-radio").eq(0).find("li").length==1){$(".proattr-radio").eq(0).find("li").eq(0).addClass("selected")
}}$(".proattr-radio").find("li").unbind("click");
iFourth.attrChoose()
};
gMain.initSubCss=function(e,c){thisOnSale.init();
if(gProduct.gors=="0"){gProduct.minPrice="";
gProduct.maxPrice="";
gProduct.refMinPrice="";
gProduct.refMaxPrice=""
}var g=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
var f=$(".proattr-radio").eq(1).find("li.selected").attr("cid");
if(gProduct.gType==2){if(gProduct.gors=="0"){gProduct.resetPrice=true
}if(e==0){if(gProduct.gors=="0"){var b=$(".proattr-radio").eq(0).find("li.selected").attr("imgPartNumber");
if(typeof b!="undefined"&&b!=""){getImageVersion(b)
}}gMain.subCode.checkDom("c")
}else{var a=$(".proattr-radio").eq(0).find("li");
$(".proattr-radio").eq(1).removeClass("bg-0e6");
$(".proattr-radio").eq(0).find("li").removeClass("notic-able").removeAttr("subPart");
gMain.subCode.checkDom("v")
}if(gProduct.gors=="0"){initPriceHtml();
gProduct.resetPrice=false
}if(g==undefined||f==undefined){$("#miniCart").addClass("hide")
}}else{gMain.subCode.checkDom("c");
var g=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
if(g!=undefined){subInfo=gProduct.gInfo.charPartNumbers[0][g];
if(subInfo!=null&&subInfo.partNumber!=sn.partNumber){sn.partNumber=subInfo.partNumber;
sn.curSubItemId=subInfo.itemId;
sn.imageCount=subInfo.imageCount;
gMain.switchSub()
}}}};
function getImageVersionList(){var c="";
$(".proinfo-color-ex li").each(function(f){if(f<20){var e=$(this).attr("imgpartnumber");
if(c!=""){c+="-"
}c+=e
}});
if(c==""){return
}var a=sn.vendorCode;
if(sn.tmShopFlag){a=sn.vendor
}try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/getImgVersionList_"+c+"_"+a+"_versionListCallBack.html",type:"get",cache:true,dataType:"jsonp",jsonpCallback:"versionListCallBack",success:function(h){if(h&&h.length>0){for(var g=0;
g<h.length;
g++){var f=h[g];
if(f&&f.value&&f.value.length>0){if(f.value[0]&&f.value[0].textContent){var e=$(".proinfo-color-ex li[imgpartnumber='"+f.partNumber+"']");
if(sn.tmShopFlag){$(e).find("img").attr("src",sn.newImageDomianDir+"/uimg/mcmp/tm/"+a+f.partNumber+"_1_45x60.jpg?ver="+f.value[0].textContent)
}else{$(e).find("img").attr("src",sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+a+"-"+f.partNumber+"_1_60x60.jpg?ver="+f.value[0].textContent)
}}}}}}})
}catch(b){}}function returnGoodsService(){var a={bizCode:"",cmmdtyCode:sn.partNumber,cityCode:sn.lesCityId,MemberType:"",sys:"PDS"};
if(!sn.isCShop&&sn.shopType!=6){if(isSpecialSale()){a.bizCode=sn.vendor
}else{a.bizCode=sn.vendorCode
}}else{a.bizCode=""
}if(sn.ffMemberFlag&&sn.ffMemberFlag=="1"){a.MemberType="02"
}else{a.MemberType="01"
}if(a.bizCode&&a.bizCode!=""&&a.MemberType&&a.MemberType!=""){$.ajax({url:sn.icpsDomain+"/icps-web/queryRetrunInsuranceService/"+a.cmmdtyCode+"_"+a.cityCode+"_"+a.bizCode+"_"+a.MemberType+"_"+a.sys+"_returnGoodsCallback.vhtm",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"returnGoodsCallback",success:function(b){if(b[0]&&b[0].goodsId&&b[0].goodsId!=""){$("#returnGoods").show();
$("#returnGoods").attr("forHyjFlag","1")
}}})
}}function initProductPriceInfo(c,g){if((c&&c!=""&&c.data&&c.data.price&&c.data.price.saleInfo[0])||g){if(g){sn.priceInvData=g;
sn.invStatus=sn.priceInvData.invStatus
}else{sn.priceInvData=c.data.price.saleInfo[0];
sn.invStatus=c.data.invStatus
}sn.availCheckCode=(c&&c!=""&&c.data&&typeof c.data.availCheckCode!="undefined")?c.data.availCheckCode:"";
sn.govPrice=sn.priceInvData.govPrice;
sn.promotionPrice=sn.priceInvData.promotionPrice;
sn.vipPrice=sn.priceInvData.vipPrice;
sn.pgPrice=sn.priceInvData.pgPrice;
if(sn.pgPrice!=""){sn.pgPrice=parseFloat(sn.pgPrice).toFixed(2)
}sn.pgNum=sn.priceInvData.pgNum;
sn.actId=sn.priceInvData.pgActionId;
sn.hotRank="0";
sn.netPrice=sn.priceInvData.netPrice;
sn.refPrice=sn.priceInvData.refPrice;
sn.scodeType=(sn.priceInvData.priceType).indexOf("4-7")>=0?(sn.priceInvData.priceType.substring(2,3)):"0";
sn.vendorType=sn.priceInvData.vendorType;
sn.ownerPlace=sn.priceInvData.ownerPlace;
sn.manageInvFlag=sn.priceInvData.manageInvFlag;
sn.cuxiaoType=sn.priceInvData.priceType;
sn.invStatus=sn.priceInvData.invStatus;
sn.bookPrice=sn.priceInvData.bookPrice;
sn.bookPriceSwell=sn.priceInvData.bookPriceSwell;
sn.sendAvalidTime=sn.priceInvData.sendAvalidTime;
sn.finalPayment=sn.priceInvData.finalPayment;
sn.priceType=(sn.priceInvData.priceType).indexOf("4")==0?"4":(sn.priceInvData.priceType);
sn.usePrice=sn.priceInvData.usePrice;
sn.deptNo=sn.priceInvData.deptNo;
sn.yanbaoSet=sn.priceInvData.warrantyList;
sn.factorySendFlag=sn.priceInvData.factorySendFlag;
sn.deptNo=sn.priceInvData.deptNo;
PriceShow.actionId=sn.priceInvData.juId;
getBigPolyHeardAndfoot();
var a=$("#pagename").val();
if(sn.cuxiaoType=="4-14"){if(!sn.tmShopFlag){var h=sn.priceInvData.vendor;
if(h&&h.length==10){href=sn.itemDomain+"/"+h+"/"+getEffectivePartNumber(sn.partNumber)+".html";
window.location.href=href
}}sn.tmShopFlag=true;
a=a.replace("actype=","actype=100038")
}if(!sn.tmShopFlag||sn.priceInvData.vendor!=""){sn.vendor=sn.priceInvData.vendor;
if(sn.review.vendorCode=="0000000000"&&sn.tmShopFlag){sn.review.vendorCode=sn.vendor;
initSpecialSale()
}}CommonFourPage.resetSnServiceContent();
if(c&&c!=""&&c.data){sn.luaInvStatus=c.data.invStatus;
sn.hwgTax=c.data.hwgTax
}else{sn.luaInvStatus="0-1"
}if(sn.luaInvStatus=="1"){sn.hasStorage="Y"
}else{if(sn.luaInvStatus=="2"){sn.hasStorage="N"
}else{sn.hasStorage="Z"
}}if(sn.vendorType=="928TM"){sn.invStatus=3;
sn.hasStorage="Z"
}if(sn.priceInvData.vendorType=="925SWL"){$("#vendorType").val(3);
sn.swlShopFlag=true
}else{if(sn.priceInvData.vendorType=="927HWG"||sn.priceInvData.vendorType=="927HWG1"){$("#vendorType").val(4);
sn.hwgShopFlag=true
}else{if(sn.priceInvData.vendorType=="936超市联营"){$("#vendorType").val(5);
sn.csSwlShopFlag=true
}}}if(sn.vendorCode=="0000000000"||sn.vendorCode.substring(0,3)=="003"||sn.zyHwgFlag){sn.isCShop=false
}else{sn.isCShop=true
}if(c&&c!=""&&c.data){processProductSaleInfo(c.data)
}initPriceHtml();
if(sn.promotionPrice==""){if(sn.published!="1"){sn.hasStorage="Z";
processNoPubish()
}else{processNoPrice()
}}else{if(sn.published!="1"){sn.hasStorage="Z";
processNoPubish()
}else{if(sn.isPreBuy==1&&sn.hasStorage!="Z"){preBuy.actionID=sn.priceInvData.bookActionID;
preBuy.purchaseType=sn.priceInvData.purChaseType;
if(c&&c.data&&c.data.psell&&!jQuery.isEmptyObject(c.data.psell)){preBuy.initPreBuy(c.data.psell);
if(!c.data.psell.purStartTime||c.data.psell.purStartTime==""){$(".bespoke-process li.step-4 dl dt").attr("style","line-height: 38px;");
$(".bespoke-process li.step-4 dl dd").hide()
}}else{sn.hasStorage="Z";
processError()
}a=a.replace("actype=","actype=100039")
}else{if(sn.isPreBuy==2&&sn.hasStorage=="Y"){preBuy.actionID=sn.priceInvData.bookActionID;
sn.bookGoodsId=sn.priceInvData.bookGoodID;
if(c&&c.data&&c.data.psell&&!jQuery.isEmptyObject(c.data.psell)){bookInfo.initBookInfo(c.data.psell)
}else{sn.hasStorage="Z";
processError()
}a=a.replace("actype=","actype=100040")
}else{if(sn.priceType=="4"){if(c&&c.data&&c.data.bigPoly&&!jQuery.isEmptyObject(c.data.bigPoly)){bigPoly.processBigPoly(c.data.bigPoly)
}else{sn.hasStorage="Z";
processError()
}a=a.replace("actype=","actype=100035");
initProductSaleStatus()
}else{initProductSaleStatus()
}}}}}a=a.replace("supid=;","supid="+sn.priceInvData.vendor+";");
$("#pagename").val(a);
if(sn.hasStorage!="Y"&&sn.isPreBuy!=1){thisOnSale.saleFlag=false;
thisOnSale.showThisOnSale()
}o2oParts.select();
initServiceOffInstall();
CommonFourPage.resetServiceSupport();
if(sn.promotionPrice!=""){if(sn.hasStorage=="Y"||(sn.isPreBuy==1&&sn.hasStorage!="Z"&&(preBuy.isEffect&&preBuy.status!=3&&preBuy.status!=4&&preBuy.status!=6&&preBuy.status!=7))){sn.hasMemberProm="Y";
getICPSPromInfo(sn.partNumber,"FourPage.promInfoCallback");
CommonFourPage.queryMemberStatusInfo();
CommonFourPage.queryMemberType()
}else{if(typeof sn.vipPrice!="undefined"&&sn.vipPrice!=""){CommonFourPage.queryMemberStatusInfo();
CommonFourPage.queryMemberType()
}}CommonFourPage.FourPage.initReturnOrChange(sn.passPartNumber,"itemService.showReturnOrchange");
if(sn.hasStorage=="Y"&&sn.treatCode==""&&sn.buyCode==""){CommonFourPage.choosePackageFlag="1";
CommonFourPage.getpartNumberPackageInfo();
if(sn.mountType!="9"&&!sn.suningJiWuFlag){Renxf.freenessPay()
}if(sn.mountType=="7"){autoParts.cartfilterService()
}else{if(sn.mountType=="03"){$("#storeService").show();
$("#autoPartArea").show()
}else{if(sn.mountType=="02"){$("#autoPartArea").show()
}}}CommonFourPage.ServiceLabel()
}if(sn.hasStorage=="Y"&&sn.mountType!="9"&&!sn.hwgShopFlag){itemService.getOldForNew("oldForNewShow")
}if(sn.isCShop&&!sn.csSwlShopFlag){if(sn.hasStorage=="Y"&&sn.isPreBuy!="1"&&sn.isPreBuy!="2"){CommonFourPage.storeService.getGuideShop();
if(sn.swlShopFlag&&!sn.hwgShopFlag){CommonFourPage.storeService.jsdinit()
}}}else{if(sn.factorySendFlag=="1"||PriceShow.isLimitTake=="1"||sn.mountType=="9"){sn.ziti=false
}else{if(sn.sizeAttr=="2"&&!sn.blackVirFlag){sn.ziti=true
}else{sn.ziti=false
}}if(sn.hasStorage=="Y"){itemService.zySupport();
if(sn.mountType!="9"){if(sn.showZeroBuy=="1"&&sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&sn.cuxiaoType!="4-7"&&!sn.hwgShopFlag){itemService.getZeroBuy("zeroBuy")
}CommonFourPage.Recommend.getSZYT()
}if(sn.priceInvData.onLineStatus&&sn.priceInvData.onLineStatus=="1"){$("#kcjz").html("库存紧张，请抓紧购买").show()
}}if(!sn.blackVirFlag){$("#safekeep").show();
$("#safekeepService").show();
$("#snService").show();
$("#snServiceContent").show()
}if(sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&!sn.hwgShopFlag){CommonFourPage.storeService.judgeIsShowVBuy();
if(sn.hasStorage=="Y"&&sn.mountType!="9"){if(!sn.blackVirFlag){CommonFourPage.storeService.jsdinit()
}initGetShopPay()
}}}if(sn.prdType!="S"&&sn.compareCatalog=="0"&&sn.hasStorage=="Y"&&!isSpecialSale()){iCompare.initComPartNumbers();
iFourth.bindProductCompare();
$("#compare").show()
}}CommonFourPage.hwgDelivery(sn.hwgShopFlag);
if(sn.hwgShopFlag){CommonFourPage.hwgInitCss()
}if(!sn.isCShop&&sn.isPreBuy!="1"&&sn.phoneFlag=="Y"&&sn.published=="1"&&!sn.hwgShopFlag){if(c.data.policySellPoint&&c.data.policySellPoint!=""){try{var b=$.parseJSON(c.data.policySellPoint);
if((b.returnCode==0||b.returnCode=="0")&&b.sellPointInfo!=""){sn.barePhoneDesc=b.sellPointInfo
}}catch(f){}}if(c.data.treatyInfo||c.data.recommend){if(sn.hasStorage=="Y"){hyj.initPhoneStatus(c.data.treatyInfo,c.data.recommend)
}else{hyj.initPhoneStatus(c.data.treatyInfo,"")
}}}if(!isSpecialSale()&&!sn.hwgShopFlag){if(isNotEmpty(sn.priceInvData.serveCodeList)&&(typeof sn.priceInvData.serveCodeList!="undefined")){afterSalesService(sn.priceInvData.serveCodeList)
}}setFixBarOnline();
FourPage.getonlineService();
initPcssPromotion();
iFourth.mainHeight();
if(typeof CommonFourPage.Recommend.sugGoods!="undefined"){Recommend.bulidSeeAgain(CommonFourPage.Recommend.sugGoods,2)
}if(!sn.hwgShopFlag&&!sn.suningJiWuFlag){CommonFourPage.FourPage.getPromotiondesc(sn.passPartNumber,CommonFourPage.aftermarket)
}if(sn.hwgShopFlag){CommonFourPage.FourPage.getOverseasFAQ(CommonFourPage.overseasFAQCallback)
}if(scmInfo.afterSalePicSwitch=="1"&&!sn.isCShop&&!sn.hwgShopFlag&&!sn.suningJiWuFlag){CommonFourPage.FourPage.getAfterSalePic("CommonFourPage.dealWithAfterSalePic")
}CommonFourPage.FourPage.getAdPicture("dealWithADPic");
biDaPushWhenReady(sn.luaInvStatus);
try{setTimeout(setiDiggerTrackingCodes,1000)
}catch(f){}setTimeout(function(){iFourth.win.scroll()
},200)
}}function biPassPartDaPushWhenReady(){snga.productStatus=sn.isPreBuy==1&&sn.invStatus=="2"?"":sn.invStatus;
$("#suppliernewID").val(sn.vendor);
if(sn.vendorCode=="0000000000"||isSpecialSale()){$("#vendorType").val("1");
if(sn.manageInvFlag=="0"){$("#manageInvFlag").val("1")
}else{$("#manageInvFlag").val("0")
}if(sn.factorySendFlag=="1"){$("#deliverytype").val("2")
}}else{if(sn.swlShopFlag){$("#vendorType").val("3")
}else{if(sn.csSwlShopFlag){$("#vendorType").val("5")
}else{if(sn.hwgShopFlag){$("#vendorType").val("4")
}else{$("#vendorType").val("2")
}}}}if(sn.promotionPrice==""){$("#productStatus").val("3");
$("#productStatusDesc").val("1");
snga.productStatus="3"
}else{if(sn.invStatus=="1"||sn.invStatus=="4"){$("#productStatus").val("1");
$("#shipOffset").val("-1");
if(!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag){$("#shipOffset").val(sn.shipOffSet);
snga.shipOffset=sn.shipOffSet
}$("#productStatusDesc").val("-1")
}else{if(sn.isCShop||sn.invStatus=="2"){$("#productStatus").val("2");
$("#shipOffset").val("-1");
$("#productStatusDesc").val("-1");
if(sn.isPreBuy!="1"||(preBuy.status!=1&&preBuy.status!=2)){sendSaMessageV2("jg-xy-01")
}sendSaMessage("jg-xy-01")
}else{if(sn.invStatus=="3"){$("#productStatus").val("3");
$("#productStatusDesc").val("2");
snga.productStatus="3"
}}}}if(sn.tmShopFlag){$("#supplierID").val(sn.vendor)
}$("#operatetype").val(sn.cuxiaoType);
$("#ssa-stcode").val(uuid());
FourPage.runDapushWhenReady()
}function biDaPushWhenReady(a){snga.productStatus=sn.isPreBuy==1&&sn.invStatus=="2"?"":sn.invStatus;
$("#ga_itemDataBean_itemID").val(getEffectivePartNumber(sn.partNumber));
$("#suppliernewID").val(sn.vendor);
if(sn.vendorCode=="0000000000"||isSpecialSale()){$("#vendorType").val("1");
if(sn.manageInvFlag=="0"){$("#manageInvFlag").val("1")
}else{$("#manageInvFlag").val("0")
}if(sn.factorySendFlag=="1"){$("#deliverytype").val("2")
}}else{if(sn.swlShopFlag){$("#vendorType").val("3")
}else{if(sn.csSwlShopFlag){$("#vendorType").val("5")
}else{if(sn.hwgShopFlag){$("#vendorType").val("4")
}else{$("#vendorType").val("2")
}}}}if(sn.published!="1"){$("#productStatus").val("0");
$("#shipOffset").val("-1");
$("#productStatusDesc").val("-1");
sendSaMessage("pcss-xj-01");
sendSaMessageV2("pcss-xj-01")
}else{if(sn.hasStorage=="Y"){$("#productStatus").val("1");
$("#shipOffset").val("-1");
if(!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag){$("#shipOffset").val(sn.shipOffSet);
snga.shipOffset=sn.shipOffSet
}$("#productStatusDesc").val("-1")
}else{if(sn.hasStorage=="N"){$("#productStatus").val("2");
$("#shipOffset").val("-1");
$("#productStatusDesc").val("-1");
sendSaMessage("jg-xy-01");
if(sn.isPreBuy!="1"||(preBuy.status!=1&&preBuy.status!=2)){sendSaMessageV2("jg-xy-01")
}}else{var b=a.substring(2,3);
$("#productStatus").val("3");
$("#productStatusDesc").val(b);
snga.productStatus="3";
if(b=="4"){$("#productStatusDesc").val(sn.freightResultCode);
sendSaMessage("yf-dz-01");
sendSaMessageV2("yf-dz-01")
}else{if(b=="3"){sendSaMessage("jc-dz-01");
sendSaMessageV2("jc-dz-01")
}else{sendSaMessage("jg-jg-01");
sendSaMessageV2("jg-jg-01")
}}}}}if(sn.tmShopFlag){$("#supplierID").val(sn.vendor)
}$("#operatetype").val(sn.cuxiaoType);
$("#ssa-stcode").val(uuid());
FourPage.runDapushWhenReady()
}function processProductSaleInfo(a){sn.isPreBuy=0;
if(sn.priceInvData.priceType.substring(0,1)=="7"){sn.isPreBuy=1
}else{if(sn.priceInvData.priceType.substring(0,1)=="8"){sn.isPreBuy=2
}}if(a.freightObj){if(typeof a.freightObj.fare=="undefined"){if(sn.isCShop&&!sn.swlShopFlag&&!sn.csSwlShopFlag){sn.freight=="-1"
}else{sn.freight==0
}}else{sn.freightResultCode=a.freightObj.resultCode;
sn.freight=a.freightObj.fare;
sn.snslt=a.freightObj.snslt
}if(a.freightObj.freeDuty){sn.freeDuty=a.freightObj.freeDuty
}if(a.freightObj.basicWeightSlt){sn.basicWeightSlt=a.freightObj.basicWeightSlt
}if(a.freightObj.weight){sn.weight=a.freightObj.weight
}if(a.freightObj.mode){sn.mode=a.freightObj.mode
}}if(a.prescription){sn.prescription=a.prescription;
sn.shipOffSet=sn.prescription.shipOffSet;
sn.inventoryText=sn.prescription.inventoryText;
sn.shipOffSetText=sn.prescription.shipOffSetText;
sn.sendCityName=sn.prescription.sendCityName;
if(sn.zyHwgFlag&&typeof sn.sendCityName!="undefined"&&sn.sendCityName!=""&&sn.sendCityName.indexOf("市")>-1){sn.sendCityName=sn.prescription.sendCityName.replace("市","")+"保税区"
}sn.shipColorFlag=sn.prescription.colorFlag;
sn.earliestArriveDate=sn.prescription.earliestArriveDate?sn.prescription.earliestArriveDate:"";
if(sn.prescription.bigPromotionDesc&&sn.priceInvData.priceType.substring(0,1)!="8"&&sn.hasStorage=="Y"&&sn.mountType!="9"){$("#arrivWarning").html(sn.prescription.bigPromotionDesc).show()
}}sn.myfdesc=a.myfdesc;
sn.nowTime=a.nowTime
}function initProductSaleStatus(){if(sn.hasStorage=="Y"){if(sn.silenceType!="Y"){processQcode()
}if(sn.priceType!="4"){$("#addCart").removeClass().addClass("btn-orange-buy").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#tabAddCart").show();
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("立即购买").show();
if(sn.blackVirFlag){$("#addCart").hide();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("立即购买");
$("#addCart2").attr("href","javascript:Cart.buyNowTime();").removeAttr("target");
$("#prescription").remove()
}}if(document.reflashForm.sellType.value==0){$("#buycount").show()
}else{$("#buycount").hide()
}$("#J-slide1").hide();
$("#tellMe").hide();
$("#inerestBox").show();
$("#c_yunfei").hide();
$("#c_kucun").show();
if(sn.mountType=="9"){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#prescription").hide();
$("#shopNameBox").addClass("mt0")
}else{if(sn.isCShop&&!sn.swlShopFlag&&!sn.csSwlShopFlag){$("#prescription").html(sn.shipOffSetText).show();
$("#prescription").removeClass("c-f00");
$("#J-slide1").hide()
}else{$("#prescription").html(sn.shipOffSetText).show();
if(sn.shipColorFlag=="Y"){$("#prescription").addClass("c-f00")
}else{$("#prescription").removeClass("c-f00")
}if(sn.priceType=="4"&&PriceShow.isSaleRemind=="Y"){$("#prescription").hide();
$("#nowProduct").hide();
$("#c_kucun").hide()
}}}if(sn.shipColorFlag!="Y"){$("#haveProduct").html("有货").show()
}itemService.setFreeFreight();
if(sn.isCShop&&!sn.csSwlShopFlag&&!sn.hwgShopFlag){if(!sn.o2oFlag){CommonFourPage.Recommend.getCdpjBank(sn.passPartNumber)
}}else{if(!sn.hwgShopFlag&&!sn.suningJiWuFlag){CommonFourPage.Recommend.getZypjRank(sn.partNumber,"Recommend.callBackInitFittingReadyNew")
}}if(sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&sn.priceType!="4"){getMobileBigPoly(sn.partNumber,showMobileBigPoly);
if(sn.pgPrice!=""){sn.pgFlag="Y";
processQcode()
}}if(sn.catenIds==sn.footTickCatenIds){$("#addCart").hide();
$("#addCart2").hide();
qCodeHide()
}}else{$("#buycount").hide();
$("#yanbao").hide();
$("#nocodePackage").hide();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-orange-buy btn-disabled").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if(sn.blackVirFlag){$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("立即购买")
}else{$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.hasStorage=="N"){qCodeHide();
if(sn.shopType!="6"){$("#tellMe").show()
}$("#c_kucun").html("无货");
sn.shipOffSetText="<a class='arrive-notice'  href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>";
$("#nowProduct").html("<a class='arrive-notice'  href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>").show();
$("#c_yunfei").hide();
$("#listProContent").hide()
}else{qCodeHide();
$("#c_kucun").show();
$("#c_yunfei").hide();
$("#nowProduct").removeClass("c-f00");
if(sn.luaInvStatus=="0-3"){sn.shipOffSetText="建议您选购其他商品"
}else{if(sn.luaInvStatus=="0-4"){if(typeof sn.freightResultCode!="undefined"){sn.errorCode=sn.freightResultCode;
processProductName()
}}}$("#nowProduct").html("建议您选购其它商品");
$("#c_kucun").html("本地区暂不销售")
}processNotSale()
}}var bigPoly={processBigPoly:function(g){if(g&&typeof g!="undefined"&&g.bigPolyInfo&&typeof g.bigPolyInfo!="undefined"&&g.bigPolyInfo.commList&&typeof g.bigPolyInfo.commList!="undefined"&&g.bigPolyInfo.commList.length>0){var e=g.bigPolyInfo.commList;
PriceShow.warmUpTime=parseInt(e[0].gbWarmupDate);
PriceShow.beginTime=parseInt(e[0].gbBeginDate);
PriceShow.endTime=parseInt(e[0].gbEndDate);
PriceShow.silenceTime=e[0].gbQuietDate;
PriceShow.isLimitTake=e[0].isLimitTake;
PriceShow.maxPerNum=e[0].limitBuyNum;
PriceShow.maxGovNum=e[0].qyLimitBuyNum;
PriceShow.serviceType=e[0].serviceType;
PriceShow.isPhoneBind=e[0].isPhoneBind;
PriceShow.isBrondPay=e[0].isBrondPay;
PriceShow.published=e[0].published;
PriceShow.activeTag=e[0].activeTag;
var i=parseInt(PriceShow.warmUpTime);
var a=parseInt(PriceShow.beginTime);
var b=parseInt(PriceShow.endTime);
var f=parseInt(sn.nowTime);
var c="";
$("#djhBuyNum").hide();
if(g.juBuyCount&&typeof g.juBuyCount!="undefined"){PriceShow.djhBuyNum=g.juBuyCount
}if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){c=parseInt(PriceShow.silenceTime)
}if(PriceShow.isLimitTake=="1"){sn.ziti=false;
itemService.zySupport()
}$("#PriceNotice1").hide();
this.BigPolylabel();
if(i<=f&&f<a){PriceShow.status=1;
var h=(parseInt(a)-parseInt(f))/1000;
$("#durationTime").val(h);
iFourth.countdown.down(bigPoly.bigPolyCountDown);
bigPoly.BigPolGetReady()
}else{if(a<=f&&f<b){PriceShow.status=2;
var h=(parseInt(b)-parseInt(f))/1000;
$("#durationTime").val(h);
iFourth.countdown.down(bigPoly.bigPolyCountDown);
bigPoly.BigPolyingDom()
}else{PriceShow.status=3;
bigPoly.goToSilenceTime()
}}if(sn.hasStorage=="Y"){verifyBigPoly()
}}else{if(typeof gProduct!="undefined"&&gProduct.gors=="0"){return
}else{initProductSaleStatus()
}}},BigPolGetReady:function(){PriceShow.isSaleRemind="Y";
$("#timePanel").removeClass("only-label");
if(sn.cuxiaoType=="4-9"){$("#timePanel").removeClass("only-label").addClass("only-label").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").attr("href","javascript:void(0);").html("等待抢购").show()
}else{$("#beginOrEnd").html("距抢购开始");
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-dark-buy").attr("href","javascript:reyuRemind();").html("开售提醒");
$("#addCart2").removeClass().attr("href","javascript:reyuRemind();").addClass("btn-orange-mini").html("开售提醒")
}if(sn.cuxiaoType=="4-1"){var a="2";
bigPolyMore(a)
}if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum()
},BigPolyingDom:function(){PriceShow.isSaleRemind="N";
if(Renxf.hasFlag=="Y"){$("#freenessPay").show()
}$("#timePanel").removeClass("only-label");
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#beginOrEnd").html("距团购结束")
}else{if(PriceShow.serviceType=="7"||PriceShow.serviceType=="10"){$("#beginOrEnd").html("距离结束")
}else{$("#beginOrEnd").html("距抢购结束")
}}$("#timePanel").show();
$("#buyNowAddCart").show();
if(sn.cuxiaoType=="4-9"){$("#timePanel").hide()
}if(PriceShow.serviceType=="7"){$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("S码购买");
sn.scode=true
}else{$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("立即购买")
}FourPage.scodeCuxiaoTab(PriceShow.serviceType);
if(sn.hasStorage!="Y"){$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").attr("href","javascript:void(0);").html("加入购物车").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").attr("href","javascript:void(0);").html("加入购物车")
}else{if(PriceShow.serviceType=="10"){$("#addCart").hide();
$("#addCart2").hide();
$("#nowProduct").show();
$("#c_kucun").show()
}else{$("#addCart").removeClass().addClass("btn-orange-buy").attr("href","javascript:Cart.addCart();").html("<i></i>加入购物车");
$("#addCart2").removeClass().addClass("btn-orange-mini").attr("href","javascript:Cart.addCart();").html("<i></i>加入购物车");
$("#nowProduct").show();
$("#c_kucun").show()
}}if(sn.sellType=="1"){hyj.changeForCart.addCart()
}else{if(sn.blackVirFlag){$("#addCart").removeClass().addClass("btn-dark-buy").attr("href","javascript:Cart.buyNowTime();").html("<i></i>立即购买");
$("#addCart2").removeClass().addClass("btn-orange-mini").attr("href","javascript:Cart.buyNowTime();").html("<i></i>立即购买");
$("#buyNowAddCart").hide()
}}if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum();
if(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"||sn.cuxiaoType=="4-14")){$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").attr("href","javascript:void(0);").html("已抢完").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").attr("href","javascript:void(0);").html("已抢完");
$("#buyNowAddCart").hide();
$("#addCart").show();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#buyReminder").hide();
$("#timePanel").removeClass("only-label");
$("#buyReminder").hide();
sn.cuxiaoSoldOut="Y"
}else{if(sn.hasStorage=="Y"){this.getBigPloyBtnState(sn.partNumber)
}}if(PriceShow.djhBuyNum&&typeof PriceShow.djhBuyNum!="undefined"&&0!=parseInt(PriceShow.djhBuyNum)&&!isSpecialSale()){$("#djhBuyNum .num").html(PriceShow.djhBuyNum+"件").show();
$("#djhBuyNum").show()
}},BigPolylabel:function(){if(PriceShow.serviceType!="1"&&PriceShow.serviceType!="4"&&PriceShow.serviceType!="12"&&PriceShow.serviceType!="14"&&typeof PriceShow.activeTag!="undefined"&&PriceShow.activeTag!=""){$("#timePanel span:first").attr("class","djh-title").html(PriceShow.activeTag)
}else{if(PriceShow.serviceType=="2"){$("#timePanel span:first").attr("class","djh-title").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#timePanel span:first").attr("class","djh-title").html("团购")
}else{if(PriceShow.serviceType=="4"){$("#timePanel span:first").attr("class","djh-title").html("闪购")
}else{if(PriceShow.serviceType=="7"){$("#timePanel span:first").attr("class","djh-title").html("S码专享")
}else{if(PriceShow.serviceType=="10"){$("#timePanel span:first").attr("class","djh-title").html("爆款抢购")
}else{if(PriceShow.serviceType=="14"){$("#timePanel span:first").attr("class","temai-logo").html("")
}else{$("#timePanel span:first").attr("class","djh-logo").html("")
}}}}}}}if(PriceShow.serviceType=="9"){$("#timePanel").hide()
}else{$("#timePanel").show()
}},goToSilenceTime:function(){sn.silenceType="Y";
PriceShow.isSaleRemind="N";
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").attr("href","javascript:void(0);").html("活动已结束").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").attr("href","javascript:void(0);").html("活动已结束");
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#buyNowAddCart").hide();
$("#addCart").show();
$("#inerestBox").hide();
$("#buyReminder").hide();
$("#timePanel").removeClass("only-label").addClass("only-label").show();
$("#freenessPay").hide();
$("#listProContent").hide();
iFourth.mainHeight();
qCodeHide()
},bigPolyCountDown:function(b){if(b==0){if(PriceShow.status==1){PriceShow.status=2;
var a=(parseInt(PriceShow.endTime)-parseInt(PriceShow.beginTime))/1000;
if(parseInt(PriceShow.endTime)>parseInt(PriceShow.beginTime)){$("#durationTime").val(a)
}iFourth.countdown.setTime();
bigPoly.BigPolyingDom()
}else{PriceShow.status=3;
$(".d").text("00");
$(".h").text("00");
$(".m").text("00");
$(".s").text("00");
clearTimeout(cDown);
$("#timePanel").removeClass("only-label").addClass("only-label").show();
bigPoly.goToSilenceTime()
}CommonFourPage.resetServiceSupport();
iFourth.mainHeight()
}},getBigPloyBtnState:function(){if(!(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"||sn.cuxiaoType=="4-14"))){var a=sn.juDomain+"/ajax/isBuyByGoods_"+PriceShow.actionId+"_"+getEffectivePartNumber(sn.partNumber)+"_bigPloyBuyByGoods.html";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"bigPloyBuyByGoods",success:function(b){if(b&&b.saleStatus&&b.saleStatus=="0"){PriceShow.buysaleStatus=true;
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").attr("href","javascript:void(0);").html("还有机会").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").attr("href","javascript:void(0);").html("还有机会");
$("#buyReminder").html("<span>如果其他小伙伴放弃付款，购买机会将被释放</span>").show()
}}})
}}};
FourPage.scodeCuxiaoTab=function(b){if(b=="7"){var a="";
a+="此商品仅限S码购买 ";
a+=' <a name="item_'+sn.ninePartNumber+'_jifen_xq" href="//sma.suning.com/sma/self/toBind.htm" class="b ml10 a-detail" target="_blank">查看详情</a>';
$("#scodeBox").html(a);
$("#scodeBox").show();
$("#scodeTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#scodeBox").hide();
$("#scodeTitle").css("display","none")
}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}};
FourPage.scodeBuyStyle=function(){$("#buyNowAddCart").removeClass().addClass("btn-scode-buy2");
$("#buyNowAddCart").find("span").html("S码购买");
if(!sn.scode){sn.scode=true
}};
FourPage.getCity=function(b){var i=d("cityId");
var h=d("SN_CITY");
var e=d("districtId");
var j="";
var a="";
var c="";
if(h!=""&&h!=null){var g=h.split("_");
if(g.length>0){j=g[3];
c=g[4];
a=g[5]
}}if(i!=""&&h!=""&&i!=j){FourPage.IP(i,b)
}else{if(h){var f=FourPage.analyzeCookie(h);
if(typeof c=="undefined"||c.length!=2){FourPage.IP(i,b)
}else{if(e!=""&&a!=""&&e==a){if(typeof b=="function"){b(f)
}}else{if(typeof b=="function"){b(f)
}}}}else{FourPage.IP(i,b)
}}};
FourPage.IP=function(e,b){var c=sn.ipServiceHost;
var a=c+"/ipQuery.do";
if(e){a=c+"/ipQuery.do?cityId="+e
}$.ajax({type:"GET",url:a,cache:true,async:false,dataType:"jsonp",jsonpCallback:"cookieCallback1",success:function(f){e=f.cityCommerceId;
f.flag="2";
f.count=0;
var g=FourPage.cityInfoToString(f);
FourPage.SetCookie("SN_CITY",g);
FourPage.SetCookie("cityId",f.cityCommerceId);
FourPage.SetCookie("districtId",f.districtCommerceId);
if(typeof b=="function"){b(f)
}},error:function(){var f={provinceName:"北京",cityName:"北京",districtName:"东城区",provinceCommerceId:"10",cityCommerceId:"9017",districtCommerceId:"10106",provinceMDMId:"10",cityMDMId:"1000000",districtMDMId:"10000001",cityLESId:"010",districtLESId:"01"};
if(typeof b=="function"){b(f)
}}})
};
FourPage.analyzeCookie=function(e){var b=e.split("|");
var a=null;
if(b.length>0){var c=b[0].split("_");
a={};
a.provinceMDMId=c[0];
a.provinceCommerceId=c[0];
a.cityLESId=c[1];
a.cityMDMId=c[2];
a.cityCommerceId=c[3];
a.districtMDMId=c[4];
a.districtLESId=c[4];
a.districtCommerceId=c[5];
a.flag=c[6];
a.count=c[7]
}return a
};
FourPage.cityInfoToString=function(a){var b="";
b+=a.provinceMDMId;
b+="_";
b+=a.cityLESId;
b+="_";
b+=a.cityMDMId;
b+="_";
b+=a.cityCommerceId;
b+="_";
b+=a.districtLESId;
b+="_";
b+=a.districtCommerceId;
b+="_";
b+=a.flag;
b+="_";
b+=a.count;
return b
};
FourPage.SetCookie=function(c,a){var i=365;
var b=new Date;
b.setTime(b.getTime()+i*24*60*60*1000);
document.cookie=c+"="+escape(a)+";path=/;domain="+sn.cookieDomain+";expires="+b.toGMTString()
};
FourPage.itemMainTab=function(){iFourth.Tab(".procon .tabarea-items",".procon .tabarea-content",function(c,a,b){if(!sn.suningJiWuFlag){$("#appraise").show();
$("#appAdv").show()
}if(!sn.hwgShopFlag&&!sn.suningJiWuFlag){$("#consult").show()
}if(c.attr("id")=="J-procon-comment"){if(lazyElems.appraise.enable){FourPage.appraise();
lazyElems.appraise.enable=false
}if(lazyElems.consult.enable){FourPage.consult();
lazyElems.consult.enable=false
}$("#serviceArea").insertAfter($("#consult"));
$("#hwgmarket").insertAfter($("#consult"));
if(c.attr("id")=="J-procon-comment"){$("#appraise").show();
$("#appAdv").show()
}else{$("#appraise").hide();
$("#appAdv").hide()
}}else{if(c.attr("id")=="J-procon-sale"){$("#serviceArea").insertBefore("#appraise");
$("#appraise").hide();
$("#consult").hide();
$("#appAdv").hide()
}else{if(c.attr("id")=="J-procon-hwgdy"){$("#hwgmarket").insertBefore("#appraise");
$("#appraise").hide();
$("#consult").hide();
$("#appAdv").hide()
}else{if(c.attr("id")=="J-procon-desc"&&sn.suningJiWuFlag){$("#appraise").hide();
$("#consult").hide();
$("#appAdv").hide()
}else{$("#serviceArea").insertAfter($("#consult"));
$("#hwgmarket").insertAfter($("#consult"))
}}}}if(c.attr("id")=="J-procon-param"||c.attr("id")=="J-procon-desc"){iFourth.bindPhoneParameters()
}if(c.attr("id")=="J-procon-param"&&$(".ph-paras-rec .tab-items li").length>0){$(".ph-paras-rec .tab-items li").eq(0).click()
}if(c.attr("id")=="J-procon-quality"){qualityCheck()
}if(c.attr("id")=="J-procon-credential"){$("#J-procon-credential").show();
lazyelem.listen()
}if(c.attr("id")=="J-procon-jwpk"){$("#appraise").hide()
}lazyelem.detect()
})
};
FourPage.productParTitleClick=function(){$("#productParTitle").click()
};
FourPage.hash=function(){$(".proinfo-comments").click(function(){$("#productCommTitle").click()
});
var c=$.trim(location.hash);
var a=["#pro_detail_tab"];
var b=["#productParTitle"];
if($.inArray(c,a)>-1){$("#productCommTitle").click()
}else{if($.inArray(c,b)>-1){$("#productParTitle").click()
}}};
FourPage.appraise=function(){var a=sn.newResServer+"/project/review/js/getreview.js";
$.getScript(a,function(){if(window.review){review.getContent($("#appraise"))
}})
};
FourPage.consult=function(){var a=sn.faqDomain+"/project/faq/js/fourPage/getconsultation.js";
$.getScript(a,function(){if(window.consultation){consultation.getContent($("#consult"))
}})
};
FourPage.getReview=function(){var c="general";
if(sn.prdType=="S"){c="style"
}var a=sn.vendorCode;
if(isSpecialSale()){a=sn.vendor
}var b=sn.reviewNew+"ajax/review_satisfy/"+c+"-"+sn.passPartNumber+"-"+a+"-----satisfy.htm";
$.ajax({url:b,cache:true,async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"satisfy",success:function(e){if(e.returnCode=="1"){var g=e.reviewCounts[0].qualityStar;
var f=e.reviewCounts[0].totalCount;
if(f>0){formatEvaluation(f);
$(".proinfo-comments span").html(sn.reviewTotal);
$(".proinfo-comments").show()
}$("li[rel=#J-procon-comment]").html('<a name="item_'+sn.ninePartNumber+'_tab_pingjia" href="javascript:void(0);">评价（'+sn.reviewTotal+"）</a>")
}}})
};
FourPage.getConsulation=function(){var b="general";
if(sn.prdType=="S"){b="style"
}var a=sn.faqDomain+"/ajax/consult_satisfy/"+b+"-"+sn.partNumber+"-"+sn.vendorCode+"-getConsultationCount.htm";
$.ajax({url:a,cache:true,async:false,dataType:"jsonp",jsonpCallback:"getConsultationCount",success:function(){}})
};
function getConsultationCount(a){$("li[rel=#J-procon-refer]").html('<a name="item_'+sn.partNumber.substring(9,18)+'_tab_zixun" href="javascript:void(0);">咨询（'+a.totalCount+"）</a>")
}FourPage.consulationCallback=function(a){try{if(a.returnCode=="0"){$("li[rel=#J-procon-refer]").html('<a name="item_'+sn.ninePartNumber+'_tab_zixun" href="javascript:void(0);">咨询（'+a.totalCount+"）</a>")
}}catch(b){}};
FourPage.lazyFunction=function(){if(sn.suningJiWuFlag){$("#appraise").hide();
$("#shopScoreTrend").hide();
lazyElems.appraise.handle=FourPage.appraise;
return
}if(!sn.donateFlag){if($("#J-tieIn").length>0){lazyElems["J-tieIn"].enable=false;
$("#J-tieIn").html('<div class=" loading-holder" ></div>')
}lazyElems.shopScoreTrend.enable=false;
lazyElems.hotRank.enable=false;
$("#hotRank").html('<div class=" loading-holder" ></div>');
$("#hotRank").show();
$("#view_Also_ViewProduct").remove();
$("#view_Also_BuyProduct").remove();
$("#buy_Also_BuyProduct").remove();
if($("#J-slide1").length>0){lazyElems["J-slide1"].enable=false
}lazyElems["J-historyList"].enable=false;
$("#J-historyList").html('<div class=" loading-holder" ></div>');
lazyElems["J-historyRec"].enable=false;
$("#J-historyRec").html('<div class=" loading-holder" ></div>')
}lazyElems.appraise.handle=FourPage.appraise;
lazyElems.consult.handle=FourPage.consult
};
var yanbaoMap={};
FourPage.promInfoCallback=function(c){yanbaoMap={};
if(sn.yanbaoSet){$.each(sn.yanbaoSet,function(e,f){yanbaoMap[f.goodsCode]=f
})
}processIcpsPromInfo(c);
if((!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag)&&sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.prdType!="S"&&sn.mountType!="9"&&!sn.suningJiWuFlag){if(c.saleExtendedWarrantys.length>0){var b=c.saleExtendedWarrantys;
var a=[];
$.each(b,function(e,f){if(yanbaoMap[f.goodsCode]){a.push(yanbaoMap[f.goodsCode])
}});
if(a.length>0){sn.yanbaoSet=a;
Cart.sunShine()
}}}if((typeof gProduct=="undefined"||gProduct.gors!="0")&&!sn.ajaxLogin&&!sn.suningJiWuFlag){if(!sn.hwgShopFlag){cloudInfo.getCloudDrill("cloudInfo.yunzuanCallbackFunp")
}if(!sn.isCShop&&sn.isPreBuy!=2&&sn.mountType!="9"){getConServationInfo(sn.partNumber,"conServationInfoBack")
}}if(sn.treatyInfo&&sn.ajaxLogin){hyj.selectPhone();
sn.ajaxLogin=false
}iFourth.mainHeight();
iFourth.servLabel()
};
function initcuxiao(){$("#allcuxiao").hide();
$("#allcuxiao .promo-list li").hide();
$("#purchaseBox").html("");
$("#couponBox").html("");
$("#newcouponBox").html("");
$("#voucherBox").html("");
$("#lhvoucherBox").html("");
$("#giftBox").html("");
$("#couponBox").siblings(".promotion-content").remove();
$("#newcouponBox").siblings(".promotion-content").remove();
$("#voucherBox").siblings(".promotion-content").remove();
$("#lhvoucherBox").siblings(".promotion-content").remove();
$("#jnbtBox").siblings(".promotion-content").remove()
}function shopReviewScore(c){if(c.returnCode=="1"){if(c.shopReviewScoreList.length>0){var b=c.shopReviewScoreList[0];
b.qualitySupClass=FourPage.scoreUtil(b.qualitySup);
b.attitudeSupClass=FourPage.scoreUtil(b.attitudeSup);
b.deliverySpeedSupClass=FourPage.scoreUtil(b.deliverySpeedSup);
b.qualityStar=parseFloat(b.qualityStar).toFixed(2);
b.attitudeStar=parseFloat(b.attitudeStar).toFixed(2);
b.deliverySpeedStar=parseFloat(b.deliverySpeedStar).toFixed(2);
var a=template("scoreScript",b);
$("#shopScoreTrend").html(a)
}}}var itemService={setFreeFreight:function(){if(sn.mountType=="9"||sn.blackVirFlag){return
}if(sn.luaPcSosFreight=="1"){$("#c_kucun").html("");
$("#arrivWarning").removeClass().html("运费以实际购物车支付为准").show();
return
}if(sn.isPreBuy=="2"){$("#c_kucun").html("免运费")
}else{if(!sn.isCShop||sn.swlShopFlag||sn.csSwlShopFlag){var b=parseFloat(sn.snslt);
var c=parseFloat(sn.promotionPrice);
if(!sn.isFresh&&!isSpecialSale()){if(sn.basicWeightSlt&&sn.basicWeightSlt==0){$("#weightcvalue").html("不计重量");
$("#weightid").show()
}else{if(sn.weight&&sn.weight>0){$("#weightcvalue").html(sn.weight+"kg");
$("#weightid").show()
}}}if(b<=0){$("#c_kucun").html("免运费")
}else{var f="";
var e="";
if((sn.isFresh||isSpecialSale())&&(sn.promotionPrice==""||sn.promotionPrice==undefined||c>=b)&&sn.cuxiaoType!="7-1"&&sn.cuxiaoType!="7-3"){f="免运费";
if(isSpecialSale()){e=sn.snslt+"元以上订单免运费"
}else{e=sn.snslt+"元以上订单免运费（限苏宁配送商品）"
}}else{if(!sn.isFresh&&!isSpecialSale()){if(typeof sn.snslt=="undefined"||sn.snslt==""){f="86元免基础运费"
}else{f=sn.snslt+"元免基础运费";
if(sn.basicWeightSlt&&sn.basicWeightSlt>0){f+="("+sn.basicWeightSlt+"kg内)"
}}}else{if(typeof sn.snslt=="undefined"||sn.snslt==""){f="满86元免运费"
}else{f="满"+sn.snslt+"元免运费"
}}e=sn.myfdesc
}$("#c_kucun").addClass("freight").html('<a name="item_'+sn.ninePartNumber+'_basic_carriage-detail" href="//help.suning.com/page/channel-37.htm" target="_blank">'+f+"</a>");
if(typeof e!="undefined"){$("#yunfei_tooltip").html(e+'<span class="tri-pointer-up"><i class="inner-tri"></i></span>');
iFourth.bindFreight()
}else{$("#yunfei_tooltip").html("").removeClass()
}}}else{if(parseFloat(sn.freight)==0||sn.freight=="免运费"){$("#c_kucun").addClass("freight").html('<a name="item_'+sn.ninePartNumber+'_basic_carriage-detail" href="//help.suning.com/page/channel-37.htm" target="_blank">免运费</a>')
}else{if(sn.freight=="-1"){$("#c_kucun").html("")
}else{var a='运费 <i class="rmb-style">¥</i>'+sn.freight;
if(sn.promFreight){a+="，"+sn.promFreight
}$("#c_kucun").addClass("freight").html('<a name="item_'+sn.ninePartNumber+'_basic_carriage-detail" href="//help.suning.com/page/channel-37.htm" target="_blank">'+a+"</a>")
}}}}$("#c_kucun").show()
},getOldForNew:function(g){if(sn.blackVirFlag||sn.suningJiWuFlag){return
}var a=sn.oldForNewBrandIds;
var f=false;
if(typeof a!="undefined"&&a!=null&&a!=""){var e=a.split(",");
for(var c=0;
c<e.length;
c++){if(sn.brandId.indexOf(e[c])>=0){f=true;
break
}}}if(f){var b=sn.ecsDomain+"/fourstage/checkhx.do?brandId="+sn.categoryId;
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:g,success:function(h){var i=h.msg;
if(typeof i!="undefined"&&i!=""&&i=="Y"){$("#yjhx").show();
$(".support-panel").show();
if(typeof h.url!="undefined"&&h.url!=""){$("#yjhx").attr("href",h.url)
}runCustomExpoData("item_"+sn.ninePartNumber+"_basic_oldfornew");
iFourth.bindSupportPanel()
}}})
}},getZeroBuy:function(e){if(sn.suningJiWuFlag){return
}var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var c="1";
var b=sn.lygitemDomain+"/item/getFourPage.htm?cmmdtyCode="+sn.partNumber+"&bizCode="+a+"&cmmdtyPrice="+sn.promotionPrice+"&chan="+c;
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:e,success:function(f){if(f.isSupported&&f.isSupported=="1"){sn.lygSupported=true;
$("#lyg").show();
$(".support-panel").show();
if(f.Investment_Description){$("#lygi").attr("data-tooltip",f.Investment_Description)
}if(f.url&&f.url!=""){$("#lyg").attr("href",f.url)
}runCustomExpoData("item_"+sn.ninePartNumber+"_basic_0buy");
iFourth.bindSupportPanel()
}}})
},showReturnOrchange:function(a){var b=a.returnFlag;
var h=a.dayLimitDescprition;
var c=a.qualityAssure;
var g=a.qualityAssurePrescription;
if(b=="3"||b=="1"){$("#returnCate a").html(this.serviceTooltipDom(h,"无理由退货，购物更安心"));
$("#returnCate a").removeClass().addClass("wly").attr("href",scmInfo.hanBackLink);
if(sn.mountType!="9"&&!sn.zyHwgFlag){CommonFourPage.FourPage.getFreightInsuranceFlag()
}$("#sevenDayReturn .r-info h3").html(h);
$("#sevenDayReturn .r-info p").html("商品不够称心如意？收货后"+h+'，购物更安心 <a rel="nofollow" href="//help.suning.com/page/id-205.htm" target="_blank">详情></a>');
$("#sevenDayReturn").show();
$("#snService").show();
$("#snServiceContent").show()
}else{$("#returnCate a").html(this.serviceTooltipDom(h,h));
$("#returnCate a").removeClass().addClass("zc7t-notui").attr("href",scmInfo.hanBackLink);
$("#yfxian").hide();
$("#yfxianService").hide();
$("#sevenDayReturn").hide()
}if(sn.hwgShopFlag){if(b=="3"||b=="1"){$("#returnCate a").html(this.serviceTooltipDom("7天无忧退","自实际收货日期的次日起7天内，商品完好，可进行退货"));
$("#returnCate a").removeClass().addClass("wyth").attr("href","//help.suning.com/page/id-684.htm");
var i="<dt><i class='hwg-icon ic4'></i></dt><dd><h3>7天无忧退</h3><p>自实际收货日期的次日起7天内，商品完好，可进行退货</p></dd>";
$("#hwgsevenDayReturn").html(i).show()
}else{$("#returnCate a").html(this.serviceTooltipDom("不支持7天无忧退","该商品不支持七天无理由退货，如有质量问题7天内可申请退货"));
$("#returnCate a").removeClass().addClass("wyth no-wyth").attr("href","javascript:void(0);");
$("#returnCate a").removeAttr("target");
$("#hwgsevenDayReturn").hide()
}$("#returnCate").prev().show()
}if(c&&c.indexOf("Y")>-1&&g&&typeof g!="undefined"&&""!=g){var f=g+"天质保";
var e=g+"天内非人为质量问题免费解决";
$("#zb180 a").html(this.serviceTooltipDom(f,e));
$("#zb180").show()
}$("#returnCate").show();
iFourth.servLabel();
iFourth.bindProServTooltip()
},serviceTooltipDom:function(b,a){if(sn.hwgShopFlag){return'<i class="hwg-icon"></i>'+b+'<span class="s-tooltip"><i class="s-t-lion"></i>'+a+'<span class="tri-pointer-up"><i class="inner-tri"></i></span></span>'
}return'<i class="icon"></i>'+b+'<span class="s-tooltip"><i class="s-t-lion"></i>'+a+'<span class="tri-pointer-up"><i class="inner-tri"></i></span></span>'
},getFreightInsuranceFlag:function(){sn.yfxian="0";
if(sn.vendorCode!="0000000000"){var a=sn.itemDomain+"/pds-web/ajax/freIns_"+sn.vendorCode.substring(2,10)+".html";
$.ajax({url:a,type:"get",cache:true,dataType:"json",success:function(b){if(b!=null&&b.items.length!=0){$("#yfxian").hide();
$("#yfxianService").hide();
$.each(b.items,function(c,e){if(e.supplierCode==sn.vendorCode.substring(2,10)&&e.flag=="Y"){$("#yfxian").show();
$("#yfxianService").show();
$("#snService").show();
$("#snServiceContent").show()
}})
}else{$("#yfxian").hide();
$("#yfxianService").hide()
}},error:function(){$("#yfxian").hide();
$("#yfxianService").hide()
}})
}else{$("#yfxian").hide();
$("#yfxianService").hide()
}},zySupport:function(){var e=[];
if(sn.isSupportCOD){var a={tooltip:sn.tooltip,name:"item_"+sn.ninePartNumber+"basic_cash-on-delivery-hover",title:sn.title};
if(sn.isSupportLink){a.href=sn.isSupportLink
}e.push(a)
}if(sn.ziti){var a={tooltip:"门店自提服务（免运费）",name:"item_"+sn.ninePartNumber+"_basic_pickup-hover",title:"自提"};
e.push(a)
}if(sn.installFlag=="3"){var a={tooltip:"为您提供配送到家及预约上门安装的一体化服务",name:"",title:"送装一体",href:"//help.suning.com/page/id-463.htm"};
e.push(a)
}if(CommonFourPage.storeService.jsdStatus=="1"){var a={tooltip:scmInfo.pcJsdTitle,name:"item_"+sn.ninePartNumber+"_basic_rocket-fast-hover",title:"急速达"};
e.push(a)
}if(typeof sn.prescription!="undefined"&&sn.prescription!=""){if(sn.prescription.zsdLabel=="70"){var a={tooltip:"可选择在指定时间段送达",name:"",title:"准时达"};
e.push(a)
}if(sn.prescription.serviceLabel=="60"){var a={tooltip:"上午购买下午送达，下午购买次日上午送达",name:"",title:"半日达"};
e.push(a)
}else{if(sn.prescription.serviceLabel=="61"){var a={tooltip:"当天购买，次日送达",name:"",title:"次日达"};
e.push(a)
}}}if(e.length>0){var f="";
for(var c=0;
c<e.length;
c++){if(c==0){f+='<li class="line1">'
}else{if(c==3){f+='<li class="line2">'
}}var b='<a href="javascript:;" name="'+e[c].name+'">'+e[c].title+"</a>";
if(typeof e[c].href!="undefined"&&e[c].href!=""){b='<a target="_blank" href="'+e[c].href+'" name="'+e[c].name+'">'+e[c].title+"</a>"
}f+='<span class="s-s-item no-link" data-tooltip="'+e[c].tooltip+'">'+b+"</span>";
if(c!=2&&c!=e.length-1){f+='<i style="display: inline;">|</i>'
}else{if(c==2||(e.length<3)){f+='<i class="ng-iconfont down-i" style="display: inline-block;"></i>';
f+='<i class="ng-iconfont up-i" style="display: none;"></i>'
}f+="</li>"
}}if(e.length<4){f+='<li class="line2"></li>'
}$("#zyService ul").html(f);
$("#zyService").show();
CommonFourPage.resetServiceSupport();
iFourth.bindSentSupport()
}else{$("#zyService").hide()
}}};
function donateSaleStatus(a){donateCss();
donateSale(a);
FourPage.shareWb();
getShopScoreList("shopReviewScore");
CommonFourPage.Recommend.getSeeAgain(sn.passPartNumber,"Recommend.getRecomData")
}function donateCss(){$("#freenessPay").hide();
$("#netPriceBox").hide();
$(".price-promo .w3").html("捐&nbsp;赠");
$("#PriceNotice2").hide();
$("#c_yunfei").hide();
$("#nowProduct").hide();
$("#prescription").hide();
$("#allcuxiao").hide();
$(".proinfo-o2o").hide();
$(".proinfo-serv").hide();
$("#yanbao").hide();
$("#timePanel").hide();
$(".proinfo-memo").hide();
$("#hotRank").hide();
$("#buyAlsoBuy").hide();
$(".history").hide();
$(".pro-serv-panel").hide();
qCodeHide();
$("#inerestBox").show();
$(".proinfo-deliver-oversea").hide();
$("#tariff").hide();
$(".oversea-logo").hide();
$("#productProconSaleTitle").hide();
$("#serviceArea").hide();
$(".pro-detail-oversea").hide();
$(".J-procon-sale").hide();
$(".after-market").each(function(){$(this).hide()
})
}function initBroadBrand(){$(".si-intro").hide();
$("#cshopBox").hide();
sn.vendorCode="0000000000";
qCodeHide();
if(typeof getBroadBandSalePointInfo=="function"){getBroadBandSalePointInfo(sn.partNumber,sn.provinceCode,sn.lesCityId,sn.lesDistrictId,broadBrandInfo)
}else{$.getScript(sn.scriptDomain+"/project/cps/js/remoteService/newFourPageService.js",function(){getBroadBandSalePointInfo(sn.partNumber,sn.provinceCode,sn.lesCityId,sn.lesDistrictId,broadBrandInfo)
})
}getShopScoreList("shopReviewScore");
setFixBarOnline();
$("#returnCate a").html(itemService.serviceTooltipDom("不支持无理由退换货","该商品不支持7天无理由退货"));
$("#returnCate a").removeClass().addClass("tui-disable no-link").attr("href","javascript:void(0);");
$("#returnCate a").removeAttr("target");
$("#returnCate").show();
$("#shopName").html("由当地运营商确认预约信息并提供安装及售后服务").show();
iFourth.servLabel();
$("#hwgService").hide();
$(".rxf").parent().hide();
CommonFourPage.FourPage.getPromotiondesc(sn.passPartNumber,CommonFourPage.aftermarket);
FourPage.shareWb()
}function simInitialize(){if(sn.catenIds=="R9010251"){sn.simBuyType="3"
}sn.vendorCode="0000000000";
$("#cshopBox").hide();
qCodeHide();
if(typeof getSimPrice=="function"){getSimPrice(sn.partNumber,sn.lesCityId,sn.simBuyType,siminit)
}else{$.getScript(sn.scriptDomain+"/project/cps/js/remoteService/newFourPageService.js",function(){getSimPrice(sn.partNumber,sn.lesCityId,sn.simBuyType,siminit)
})
}$("#returnCate a").html(itemService.serviceTooltipDom("不支持无理由退换货","该商品不支持7天无理由退货"));
$("#returnCate a").removeClass().addClass("tui-disable no-link").attr("href","javascript:void(0);");
$("#returnCate a").removeAttr("target");
$("#returnCate").show();
iFourth.servLabel();
getShopScoreList("shopReviewScore");
CommonFourPage.FourPage.getItemDescInfo(sn.passPartNumber,CommonFourPage.FourPage.processItemdescInfo);
CommonFourPage.FourPage.getPromotiondesc(sn.passPartNumber,CommonFourPage.aftermarket);
FourPage.shareWb()
}function siminit(g){try{$(".proinfo-serv .zqcg").parent().hide();
$("#selectCB").hide();
$("#inerestBox").hide();
initPriceHtml(true,"");
if(sn.published=="1"){FourPage.initCss();
sn.promotionPrice="";
if(g.returnCode==0){sn.promotionPrice=g.simPrice;
initPriceHtml(true,sn.promotionPrice);
$("#c_kucun").html("现货");
var c=$("#itemDisplayName").text();
if(c!=""&&c!=undefined&&c.indexOf("苏宁互联卡")!=-1){$("#prescription").html("现在下单 ，预计次日送达").removeClass("c-f00").show()
}else{$("#prescription").html("现在下单 ，预计次日送达（月底3天不发货）").removeClass("c-f00").show()
}if(sn.catenIds=="R9010251"){$("#addCart").removeClass().addClass("btn-orange-autowidth").html("立即购买");
$("#addCart").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("立即购买");
$("#addCart2").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target")
}else{if(sn.simBuyType=="3"){$("#addCart").removeClass().addClass("btn-orange-autowidth").html("选择号码");
$("#addCart").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("选择号码");
$("#addCart2").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target")
}else{$("#addCart").removeClass().addClass("btn-orange-buy").html("加入购物车");
$("#addCart").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"','"+sn.lesCityId+"','"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target")
}}$("#addCart").show();
$("#addCart2").show()
}else{$("#c_kucun").html("本地区暂不销售");
sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").html("建议您选购其它商品");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("选择号码");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("选择号码");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
processNotSale()
}sn.hotRank="0";
sn.shopName="苏宁";
sn.reviewShopName="苏宁";
$("#shopName").html('由"<span>苏宁</span>"销售和发货，并享受售后服务');
var f=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
var b="findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+f+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');";
$("#callme").attr("href","javascript:"+b);
$("#callmeTile").attr("href","javascript:"+b);
$("#loginFeedBack").show();
$(".proinfo-container").addClass("proinfo-container-nopro")
}else{qCodeHide();
$("#cart2Price").html("");
var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#shopName").html('由"<span>苏宁</span>"销售和发货，并享受售后服务');
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("加入购物车");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
processNoPubish()
}}catch(h){}FourPage.initCluster();
$("#ssa-stcode").val(uuid());
FourPage.runDapushWhenReady();
iFourth.mainHeight();
setFixBarOnline()
}function broadBrandInfo(e){$("#selectCB").hide();
$("#inerestBox").hide();
$(".proinfo-serv .zqfw").parent().hide();
initPriceHtml(true,"");
if(sn.published=="1"){FourPage.initCss();
$("#cshopBox").hide();
sn.promotionPrice="";
if(e!=null&&e.errorCode=="0"){sn.promotionPrice=e.broadbandPrice;
initPriceHtml(true,sn.promotionPrice);
sn.broadbandSellPoint=e.broadbandSellPoint;
$("#c_kucun").html("现货").show();
$("#prescription").html("现在下单，即可进行预约").show();
$("#addCart").removeClass().addClass("btn-orange-autowidth").html("预约安装");
$("#addCart").attr("href","javascript:addBroadbandShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"')").removeAttr("target");
$("#addCart").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("预约安装");
$("#addCart2").attr("href","javascript:addBroadbandShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"')").removeAttr("target");
$("#addCart2").show()
}else{$("#c_kucun").html("本地区暂不销售").show();
$("#nowProduct").hide();
$("#prescription").hide();
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("预约安装");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("预约安装");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
processNotSale()
}sn.hotRank="0";
var c=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
var b="findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');";
$("#callme").attr("href","javascript:"+b);
$("#callmeTile").attr("href","javascript:"+b);
$("#loginFeedBack").show();
$(".proinfo-container").addClass("proinfo-container-nopro")
}else{qCodeHide();
$("#cart2Price").html("");
var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart").removeClass().addClass("btn-dark-buy btn-disabled").html("加入购物车");
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
processNoPubish()
}getShopScoreList("shopReviewScore");
FourPage.initCluster();
setFixBarOnline();
$("#ssa-stcode").val(uuid());
FourPage.runDapushWhenReady();
iFourth.mainHeight()
}hyj.initPhoneStatus=function(b,j){sn.treatyInfo=b;
if(typeof j!="undefined"&&j.recommendTitle!=""&&(sn.invStatus=="1"||sn.invStatus=="4")){sn.contractTypeCode=j.treatyCode;
sn.operatorId=j.buyTypeCode;
if(typeof b!="undefined"&&typeof b.buyTypeList!="undefined"&&b.buyTypeList.length>0){var f="";
if(j.busiType=="1"){f='<span class="sp-item sjtc" data-tooltip = "'+j.recommendTitle+'"><i class="border-l"></i><i class="icon"></i>'+(j.recommendTitle.length>11?j.recommendTitle.substring(0,11)+"...":j.recommendTitle)+'<i class="border-r"></i></span>';
$("#4Gpackage").attr("onclick","Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"','','','"+j.buyTypeCode+"','"+j.treatyCode+"','"+sn.itemId+"','"+j.phoneSupplierCode+"','','','"+j.treatyParam+"',function(obj){Util.alertErrorBox(obj)})");
$("#4Gpackage").html(f).show();
$(".support-panel").show();
runCustomExpoData("item_"+sn.ninePartNumber+"_ysc_gm0101")
}else{if(j.busiType=="2"){f='<span class="sp-item sjtc" data-tooltip = "'+j.recommendTitle+'" id="phoneGoLook"><i class="border-l"></i><i class="icon"></i>'+(j.recommendTitle.length>11?j.recommendTitle.substring(0,11)+"...":j.recommendTitle)+'<i class="border-r"></i></span>';
$("#4Gpackage").html(f).show();
$(".support-panel").show();
iFourth.hyjDialog.clickFun();
runCustomExpoData("item_"+sn.ninePartNumber+"_ysc_gm0101")
}}}else{if(j.busiType=="2"){f='<span class="sp-item sjtc" data-tooltip = "'+j.recommendTitle+'" id="phoneGoLook"><i class="border-l"></i><i class="icon"></i>'+(j.recommendTitle.length>11?j.recommendTitle.substring(0,11)+"...":j.recommendTitle)+'<i class="border-r"></i></span>';
$("#4Gpackage").html(f).show();
$(".support-panel").show();
iFourth.hyjDialog.clickFun();
runCustomExpoData("item_"+sn.ninePartNumber+"_ysc_gm0101")
}}iFourth.bindSupportPanel()
}if(typeof b!="undefined"&&typeof b.buyTypeList!="undefined"&&b.buyTypeList.length>0){var c="";
var g="";
if(sn.treatCode==""&&sn.buyCode==""){c+='<li data-id="1" title="裸机版" class="selected"><a href="javascript:void(0);">裸机<i></i></a></li>'
}else{c+='<li data-id="1" title="裸机版"><a href="javascript:void(0);">裸机<i></i></a></li>'
}var a=1;
for(var e=0;
e<b.buyTypeList.length;
e++){var h=b.buyTypeList[e];
if(typeof h.treatyTypeList!="undefined"&&h.treatyTypeList.length>0){c+="<li ";
c+=typeof sn.buyCode!="undefined"&&sn.buyCode===h.buyTypeCode?'class="selected"':"";
c+='title="'+h.buyTypeName+'" data-id="'+(e+2)+'" bt="'+h.buyTypeCode+'"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_ysc_gm"+((e+2)<10?("0"+(e+2)):(e+2))+'">'+h.buyTypeName+"<i></i></a></li>";
g+="<ul>";
$.each(h.treatyTypeList,function(k,l){a++;
g+="<li ";
g+=typeof sn.buyCode!="undefined"&&sn.buyCode==h.buyTypeCode&&typeof sn.treatCode!="undefined"&&sn.treatCode==l.treatyCode?'class="selected"':"";
g+=' title="'+l.treatyName+'" bt="'+h.buyTypeCode+'" tt="'+l.treatyCode+'"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_ysc_hy"+(a<10?("0"+a):a)+'">'+l.treatyName+"<i></i></a></li>"
});
g+="</ul>"
}}c+="</ul>";
$("#phonedl ul").html(c);
$("#phonedl").show();
$("#phoned2 dd").html(g);
if(sn.notSaleFlag){$(".proinfo-hyj dd li[data-id=1]").hide();
if(sn.treatCode==""&&sn.buyCode==""){$(".proinfo-hyj dd li[data-id=2]").addClass("selected").siblings().removeClass("selected");
$("#phoned2 li").eq(0).addClass("selected").siblings().removeClass("selected")
}}iFourth.attrChoose();
iFourth.heyueji(hyj.changePhone);
if(sn.treatCode!=""||sn.buyCode!=""){hyj.selectPhone();
setTimeout(function(){hyj.selectPhone()
},2000)
}else{if(sn.sellPoint){$("#promotionDesc").html(sn.sellPoint+sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc)
}else{$("#promotionDesc").html(sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc)
}}}iFourth.mainHeight()
};
hyj.selectPhone=function(){var c=$("#phonedl ul li.selected");
var b=$("#phoned2 dd li.selected");
if(c&&c.index()>0){var a=c.index();
$("#phoned2 ul").eq(a-1).show().siblings().hide();
$("#phoned2").show()
}if(b&&b.index()>=0){b.parent().show().siblings().hide()
}else{if(!(c&&c.index()>0)){$("#phonedl li").eq(0).addClass("selected");
$("#phoned2").hide()
}}hyj.changePhone(b)
};
hyj.changeForCart={shoppingCartText:"",addCartScript:"",addCart:function(){if(sn.sellType=="1"){$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-orange-autowidth").html(this.shoppingCartText);
$("#addCart").attr("href",this.addCartScript);
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#addCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html(this.shoppingCartText);
$("#addCart2").attr("href",this.addCartScript);
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target")
}}};
hyj.changePhone=function(h){var q,g,b,r,m,o,k,p,n,e,l;
n=sn.invStatus;
g=typeof($(h).attr("bt"))=="undefined"?"":($(h).attr("bt"));
b=typeof($(h).attr("tt"))=="undefined"?"":($(h).attr("tt"));
sn.phoneTypePromoDesc="";
sn.phonePrice="";
sn.phonePartNumber="";
var f,j,a;
if(g==""&&b==""){$("#promotionDesc").html((sn.sellPoint?sn.sellPoint:"")+sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc);
document.reflashForm.sellType.value=0;
q=sn.sellType=0;
a=sn.promotionPrice;
p=sn.partNumber;
if(Renxf.hasFlag=="Y"&&sn.silenceType!="Y"&&sn.cuxiaoSoldOut!="Y"&&PriceShow.isSaleRemind!="Y"){$("#freenessPay").show()
}if(sn.sgComplete){$(".proinfo-o2o").show()
}if($("#packageChoice").length>0){$("#packageChoice").show()
}else{if($("#virPackageChoice").length>0){$("#virPackageChoice").show()
}}if(CommonFourPage.choosePackageFlag!="1"&&sn.hasStorage=="Y"){CommonFourPage.getpartNumberPackageInfo()
}if(sn.lygSupported&&sn.isPreBuy!="1"&&sn.isPreBuy!="2"&&sn.cuxiaoType!="4-7"){$("#lyg").show()
}}else{$("#lyg").hide();
$("#packageChoice").hide();
$("#virPackageChoice").hide();
$("#proinfoMain").removeClass("pro-main-no-good");
$(".mainbtns").show();
$("#freenessPay").hide();
document.reflashForm.sellType.value=1;
q=sn.sellType=1;
$("#yanbao").find("li").each(function(){$(this).removeClass("selected")
});
$("#yanbao").hide();
$("#nocodePackage").hide();
$("#phonedl .luoji-tip").hide();
$.each(sn.treatyInfo.buyTypeList,function(t,s){if(g==s.buyTypeCode){$.each(s.treatyTypeList,function(u,v){if(b==v.treatyCode){f=v;
m=sn.ychf=typeof v.imageUrl!="undefined"&&v.imageUrl!="null"?v.imageUrl:"";
sn.phoneTypePromoDesc=v.sellPoint;
a=v.treatySalePrice;
phoneActivityFlag=v.activeFlag;
phoneActivityId="";
phoneActivityType="";
if(phoneActivityFlag=="1"&&PriceShow.actionId!=""){phoneActivityId=PriceShow.actionId;
phoneActivityType=sn.cuxiaoType
}r=v.shipOffSetText;
o=v.phoneSupplierCode;
l=v.shoppingCartText;
k=v.treatyParam;
e=v.spCartTextNum;
p=paserPartNumber(v.treatyPartNumber)
}})
}})
}sn.phonePrice=a;
sn.phonePartNumber=p;
$("#tellMe").hide();
$("#buyReminder").hide();
$("#yudingTips").hide();
if(q==1){var i="";
if(phoneActivityFlag=="1"&&phoneActivityType=="4-9"){i="1"
}initPriceHtml(true,sn.phonePrice,i);
$("#addCart").siblings().hide();
$("#addCart").show();
$("#addCart").removeAttr("tooltip");
$("#bookProcedure").hide();
$("#bigPolyVerify").hide();
$("#btn_jsd").parent().hide();
$("#ztServ").hide();
if(!sn.isSupportCOD){$("#zyService").hide()
}if(null!=$("#labelPicture")&&"undefined"!=$("#labelPicture")&&$("#labelPicture").length>0&&$("#labelPicture b").attr("class")!=""){$("#labelPicture").hide()
}if($("#yanbao").html()!=""){$("#yanbao").hide()
}$("#nocodePackage").hide();
$("#listProContent").hide();
$("#allcuxiao .promo-list >li:not(#giftTitle,#freeCouponTitle)").hide();
$("#allcuxiao").hide();
if($("#giftBox").length>0&&$.trim($("#giftBox").html())!=""){$("#giftBox").show();
$("#allcuxiao").show()
}if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}$("#loginFeedBack").hide();
$("#prescription").removeClass("c-f00");
$("#prescription").html(r);
qCodeHide();
$("#returnGoods").hide();
$("#proinfo-id span[label]").hide();
$("#afterSend").hide()
}else{$("#proinfo-id span[label]").show();
if($("#returnGoods").attr("forHyjFlag")=="1"){$("#returnGoods").show()
}initPriceHtml();
if(sn.vipPrice){CommonFourPage.queryMemberStatusInfo()
}if($.trim($("#bigPolyVerify").find("dd").html())!=""){$("#bigPolyVerify").show()
}itemService.zySupport();
if(null!=$("#labelPicture")&&"undefined"!=$("#labelPicture")&&$("#labelPicture").length>0&&$("#labelPicture b").attr("class")!=""){$("#labelPicture").show()
}if($("#listProContent .tabarea-items").find("li[has-data='true']").length>0){$("#listProContent").show()
}if(sn.yanbaoSet!=""&&sn.yanbaoSet.length>0&&sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.prdType!="S"){$("#yanbao").show()
}if($("#nocodePackage").html()!=""){$("#nocodePackage").show()
}$(".promotion-content").each(function(){var s=$.trim($(this).html());
if(s!=""){$("#allcuxiao").show();
$(this).parent().show()
}});
if($("#allcuxiao").css("display")=="block"){iFourth.bindPromo()
}$("#loginFeedBack").show();
if((n=="1"||n=="4")){if(sn.shipOffSet>=0){if(sn.shipColorFlag=="Y"){$("#prescription").addClass("c-f00")
}else{$("#prescription").removeClass("c-f00")
}$("#prescription").html(sn.shipOffSetText);
processQcode()
}else{$("#nowProduct").removeClass("c-f00");
$("#nowProduct").html(sn.shipOffSetText);
qCodeHide()
}}else{if(n=="2"){$("#nowProduct").html("<a class='arrive-notice' name='item_"+sn.ninePartNumber+"_gmq_daohuotz02' href='javascript:FourPage.subscribeArrivalNotice();' name='item_"+sn.ninePartNumber+"_basic_notice-upon-arrival'>到货通知</a>");
qCodeHide()
}else{$("#nowProduct").removeClass("c-f00");
$("#nowProduct").html("建议您选购其它商品");
qCodeHide()
}}}if(q==1){$("#buyNowAddCart").hide();
if(phoneActivityFlag!="1"||(PriceShow.status==2&&sn.cuxiaoSoldOut!="Y"&&!PriceShow.buysaleStatus)){$("#addCart").removeClass().addClass("btn-orange-autowidth").html(l);
$("#addCart").attr("href","javascript:Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"','','','"+g+"','"+b+"','"+sn.itemId+"','"+o+"','"+phoneActivityId+"','"+phoneActivityType+"','"+k+"',function(obj){Util.alertErrorBox(obj)});");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#addCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html(l);
$("#addCart2").attr("href","javascript:Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"','','','"+g+"','"+b+"','"+sn.itemId+"','"+o+"','"+phoneActivityId+"','"+phoneActivityType+"','"+k+"',function(obj){Util.alertErrorBox(obj)});");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target")
}hyj.changeForCart.shoppingCartText=l;
hyj.changeForCart.addCartScript="javascript:Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.lesCityId+"','"+sn.lesDistrictId+"','','','"+g+"','"+b+"','"+sn.itemId+"','"+o+"','"+phoneActivityId+"','"+phoneActivityType+"','"+k+"',function(obj){Util.alertErrorBox(obj)});";
itemService.setFreeFreight();
$("#buycount").hide();
if(phoneActivityFlag!="1"){$("#timePanel").hide()
}$("#inerestBox").show();
$(".proinfo-o2o").hide()
}else{if(q==0&&sn.hasStorage=="Y"){Recommend.bulidSeeAgain(CommonFourPage.Recommend.sugGoods,2);
if(sn.isPreBuy==2){$("#timePanel").show();
$("#bookProcedure").show();
itemService.setFreeFreight();
initBookStatus();
bookInfo.processBookSellState();
bookInfo.processCart()
}else{if(sn.priceType=="4"){$("#timePanel").show();
if(PriceShow.status==1){bigPoly.BigPolGetReady()
}else{if(PriceShow.status==2){bigPoly.BigPolyingDom()
}else{if(PriceShow.status==3){bigPoly.goToSilenceTime()
}}}initProductSaleStatus()
}else{initProductSaleStatus()
}}CommonFourPage.bigPolyaftermarket()
}else{initProductSaleStatus()
}}if(m!=""){j=m
}else{j=""
}if(j==""&&q==1){$("#hyjImageTile").html("");
$("#hyjImageTile").hide();
$("#seeAgainTile").show()
}else{if(j!=""&&(q==1)){$("#hyjImageTile").html("<img height='503' width='200' src='"+j+"'>");
$("#hyjImageTile").show();
$("#seeAgainTile").hide()
}else{if(q==0){$("#hyjImageTile").html("");
$("#hyjImageTile").hide();
$("#seeAgainTile").show();
var c=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeSide").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');")
}}}CommonFourPage.FourPage.getItemInfoNew(p,getPhoneItemDesc);
CommonFourPage.FourPage.getPhonePromotiondesc(p,getPhoneItemDetail);
if(q==0){$("#phoneDetail").hide()
}iFourth.mainHeight();
iFourth.bindSentSupport()
};
function getPhoneItemDesc(c){try{if(c!=null){var a=(c.itemDisplayName!=""&&c.itemDisplayName!=null)?c.itemDisplayName:((c.itemName!=""&&c.itemName!=null)?c.itemName:"");
if(c.partNumber==sn.partNumber&&sn.seoBreadCrumbName&&sn.seoBreadCrumbName!=""){$("#productName").html("<a href='"+sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(sn.partNumber)+".html'>"+sn.seoBreadCrumbName+"</a>")
}else{$("#productName").html("<a href='"+sn.elecProductDomain+"/"+sn.vendorCode+"/"+getEffectivePartNumber(sn.partNumber)+".html'>"+(a.length>18?a.substring(0,18)+"...":a)+"</a>")
}$(".proinfo-mini").find(".pro-name").html(a);
$(".proinfo-mini").find(".pro-img").attr("alt",a);
var b="<h1 title='"+a+"'><span class='zy' id='itemNameZy'>自营</span>"+a;
if(sn.sellType==0&&sn.smartFlag){b+="【支持苏宁智能APP远程操控 】";
$("#smartServ").show()
}else{$("#smartServ").hide()
}b+="</h1><h2 id='promotionDesc'>";
if(sn.sellType==1&&typeof sn.phoneTypePromoDesc!="undefined"){b+=sn.phoneTypePromoDesc
}else{b+=(sn.sellPoint?sn.sellPoint:"")+sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc
}b+="</h2>";
$(".proinfo-title").html(b);
if(!$("#compare").is(":hidden")&&c.partNumber==sn.partNumber){iFourth.bindProductCompare()
}}else{$("#productName").html("");
$(".proinfo-mini").find(".pro-name").html("");
$(".proinfo-mini").find(".pro-img").attr("alt","");
$(".proinfo-title").html("")
}}catch(f){}}function getPhoneItemDetail(a){try{if(a!=""){if(sn.sellType==1){$("#phoneDetail").html(typeof a.itemDetail.detailUrl=="undefined"?"":a.itemDetail.detailUrl.replace(new RegExp('src2="http://',"g"),'src2="//'));
$("#phoneDetail").show()
}$("img[src2]").Jlazyload({type:"image",placeholderClass:"err-product"})
}else{$("#phoneDetail").hide()
}iFourth.mainHeight()
}catch(b){}}function initDonate(){getItemSaleStatus(sn.partNumber,"showSaleStatus");
CommonFourPage.FourPage.getItemDescInfo(sn.passPartNumber,CommonFourPage.FourPage.processItemdescInfo);
CommonFourPage.FourPage.getPromotiondesc(sn.passPartNumber,CommonFourPage.aftermarket)
}function donateSale(c){if(c!=undefined&&c.length>0){sn.priceInvData=c[0];
var b=sn.priceInvData;
sn.promotionPrice=b.promotionPrice;
if(sn.vendorCode=="0000000000"){sn.promotionPrice=""
}sn.vendorType=b.vendorType;
sn.invStatus=b.invStatus;
sn.productStatus=b.invStatus;
snga.productStatus=b.invStatus;
sn.priceType=b.priceType;
initPriceHtml(true,sn.promotionPrice);
$("#mainPrice").find("span.w3").html("捐 赠");
$(".btn-price-notice").hide();
var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#shopName").html('由"'+sn.shopName+'"发起捐助，并提供服务');
sn.hasStorage="Y";
if(sn.vendorCode=="0000000000"){$(".proinfo-main").hide();
$(".proinfo-main").html("");
var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#shopName").html('由"苏宁"发起捐助，并提供服务');
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
sn.hasStorage="Z"
}else{if(sn.promotionPrice==""||sn.invStatus!="1"){$("#c_kucun").html("无货");
if(sn.promotionPrice==""){$("#c_kucun").html("本地区暂不销售")
}$("#addCart").removeClass().addClass("btn-orange-buy btn-disabled").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buycount").hide();
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy btn-disabled").html("立即捐赠");
$("#buyNowAddCart").attr("href","javascript:void(0);").show();
sn.hasStorage="N"
}else{$("#c_kucun").html("现货");
$("#addCart").removeClass().addClass("btn-orange-buy").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#buycount").show();
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy").html("立即捐赠");
$("#buyNowAddCart").attr("href","javascript:Cart.buyNowTime();").show()
}}}else{$("#c_kucun").html("本地区暂不销售");
$("#addCart").removeClass().addClass("btn-orange-buy btn-disabled").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buycount").hide();
$("#buyNowAddCart").removeClass().addClass("btn-dark-buy btn-disabled").html("立即捐赠");
$("#buyNowAddCart").attr("href","javascript:void(0);").show();
sn.hasStorage="Z"
}setFixBarOnline();
FourPage.shareWb()
}FourPage.makeRightPara=function(){var a=$(".pro-para-table").find("tr");
a.bind({mouseover:function(){$(this).find(".erro_recovery").show()
},mouseout:function(){$(this).find(".erro_recovery").hide()
}});
a.find(".erro_recovery").bind("click",function(){var b=$(this).parents().find("td").eq(0).find("span").text();
$("#seachtext").text(b);
SNProduct.Util.alertBox({id:"proWrongPop",closeId:"proWrongCloseBtn",submit:"proWrongSubmit"})
})
};
FourPage.commentJump=function(){$(".commentJump").each(function(){$(this).click(function(){$(".procon-toolbar").find("li[rel=#J-procon-comment]").click()
})
})
};
function processNoPrice(){sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").html("建议您选购其它商品").show();
$("#c_kucun").html("本地区暂不销售").show();
$("#c_yunfei").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#nocodePackage").hide();
$("#listProContent").hide();
$("#buyNowAddCart").hide();
$(".divide-line").eq(0).hide();
if(sn.isPreBuy!=1){$("#addCart").removeClass().addClass("btn-orange-buy btn-disabled").html("<i></i>加入购物车");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-orange-mini btn-disabled-mini").html("加入购物车");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}$("#zyService").hide();
processNotSale();
if(sn.isPreBuy==2){resetBookCss()
}iFourth.mainHeight()
}FourPage.commGroup=function(){$(".breadcrumb .dropdown").click(function(){if($(this).find(".dropdown-option").length<=0){var a=$(this).find("span").attr("gid");
var b=$(this);
$.ajax({url:sn.itemDomain+"/pds-web/ajax/commGroup_"+a+".html",type:"get",async:false,dataType:"json",success:function(c){try{if(c!=""&&c.sameGroup!=""&&c.sameGroup.length>0){var g=c.sameGroup;
var f='<ul class="dropdown-option">';
$.each(g,function(e,j){f+='<li><a name="item_'+sn.ninePartNumber+'_mulu0"';
if(typeof j.categoryUrl!="undefined"&&j.categoryUrl!=""){f+='href="'+j.categoryUrl+'"'
}else{if(sn.catalogId=="14655"){f+='href="'+sn.listHost+"0-"+j.categoryId+"-0-1-0-"+sn.cityId+'-0-0-0-1.html"'
}else{if(sn.catalogId=="14656"){f+='href="'+sn.listHost+"0-"+j.categoryId+"-0-1-0-"+sn.cityId+'-0-0-0-2.html"'
}else{f+='href="'+sn.listHost+"0-"+j.categoryId+'-0.html"'
}}}f+='title="'+j.categoryName+'">';
if(j.categoryName.length>18){f+=j.categoryName.substring(0,18)+"...</a></li>"
}else{f+=j.categoryName+"</a></li>"
}});
f+="</ul>";
b.find("p").after(f);
iFourth.breadcrumbSize(b.find(".dropdown-option"))
}}catch(h){}},error:function(){}})
}else{iFourth.breadcrumbSize($(this).find(".dropdown-option"))
}})
};
FourPage.ajaxCmsActivityBar=function(){if(typeof lazyElems!="undefined"){lazyElems.cmsActivityBar.handle=cmsBanner;
lazyElems.cmsActivityBar.enable=true;
iFourth.win.scroll()
}else{setTimeout(function(){FourPage.ajaxCmsActivityBar()
},100)
}};
FourPage.initCluster=function(){var c="";
var a="";
$("#colorItemList").removeClass("bg-0e6").find("li").show();
$("#versionItemList").removeClass("bg-0e6").find("li").show();
if(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0){$.each(sn.clusterMap,function(f,e){$.each(e.itemCuPartNumber,function(h,g){if(g.partNumber==sn.partNumber){c=e.color;
a=g.versionId;
$("li[colorid='"+e.color+"']").addClass("selected").siblings().removeClass("selected")
}})
});
$("li[versionid='"+a+"']").addClass("selected").siblings().removeClass("selected");
$("li[versionid='"+a+"']").find("a").find("img").attr("src",sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+sn.partNumber+"_1_60x60.jpg");
$("li[colorid='"+c+"']").find("a").find("img").attr("src",sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+sn.vendorCode+"-"+sn.partNumber+"_1_60x60.jpg");
if(sn.simBuyType=="3"||sn.simBuyType=="4"||(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId)){$.each(sn.clusterMap,function(f,e){if(e.color==$("#colorItemList").find("li.selected").attr("colorid")){$.each(e.itemCuPartNumber,function(h,g){$("li[versionid='"+g.versionId+"']").removeClass("disabled");
$("li[versionid='"+g.versionId+"']").removeClass("c-disabled")
})
}});
$("li[class=disabled]").each(function(){$(this).children("a").removeAttr("onclick")
});
$("li[class='clr-item c-disabled']").each(function(){$(this).children("a").removeAttr("onclick")
})
}}else{$("#colorItemList").find("li").each(function(){var e=$(this).attr("sku");
if(sn.partNumber==e){c=$(this).attr("colorid")
}});
$("#versionItemList").find("li").each(function(){var e=$(this).attr("sku");
if(sn.partNumber==e){a=$(this).attr("versionid");
$(this).addClass("selected");
$(this).siblings().removeClass("selected")
}$(this).removeClass("disabled");
$(this).removeClass("c-disabled")
})
}var b="";
$(".proattr-radio").each(function(){var e=$(this);
e.find("li").each(function(){var f=$(this);
if(f.is(".selected")){b+='"'+f.attr("title")+'"&nbsp'
}})
});
if(b!=""){$("#selectCB").find(".result-text").html(b);
$("#selectCB").show()
}else{$("#selectCB").hide()
}iFourth.attrChoose();
FourPage.getClusterState(c,a)
};
var Cluster={};
Cluster.checkIsSub=function(){var a=false;
var b={};
if(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0){b.cid=$(".proattr-radio").eq(0).find("li.selected").attr("cid");
b.norms=$(".proattr-radio").eq(1).find("li.selected").attr("cid");
if(b.cid!=undefined&&b.norms!=undefined){a=true
}else{if(b.cid==undefined&&b.norms==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(0).find("dt span").html()+"、"+$(".proattr-radio").eq(1).find("dt span").html())
}else{if(b.cid==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(0).find("dt span").html())
}else{if(b.norms==undefined){$("#nochooseInfo").html("请选择"+$(".proattr-radio").eq(1).find("dt span").html())
}}}}}else{a=true
}return a
};
Cluster.processChange=function(b,c){var a=$(c).parent();
$(a).addClass("selected").siblings().removeClass("selected");
if(typeof $(a).attr("colorid")!="undefined"){Cluster.subCode.checkDom("c")
}else{Cluster.subCode.checkDom("v")
}};
Cluster.changeProudct=function(f){var a="";
try{var c=window.location.href.split("?")[1];
a=typeof c!="undefined"?("#?"+c):""
}catch(g){}f=getEffectivePartNumber(f);
var b="";
if(""!=sn.vendorCode){b=sn.itemDomain+"/"+sn.vendorCode+"/"+f+".html"+a
}else{b=sn.itemDomain+"/0000000000/"+f+".html"+a
}window.location.href=b
};
FourPage.getClusterState=function(f,c){if(sn.simBuyType=="3"||sn.simBuyType=="4"||(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId)){return
}var b={};
var a;
var e=[];
if(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0){$.each(sn.clusterMap,function(h,g){$.each(g.itemCuPartNumber,function(k,i){e.push(i.partNumber);
b[g.color+i.versionId]={};
b[g.color+i.versionId].partNumber=i.partNumber
})
})
}else{if(typeof f!="undefined"&&f!=""){a=$("#colorItemList").find("li")
}else{a=$("#versionItemList").find("li")
}a.each(function(){var g=$(this).attr("sku");
e.push(g);
b[$(this).attr("colorid")]={};
b[$(this).attr("colorid")].partNumber=g
})
}$("#colorItemList").find("li").removeClass("disabled c-disabled");
$("#versionItemList").find("li").removeClass("disabled c-disabled");
$("#colorItemList").find("li a").removeAttr("onclick");
$("#versionItemList").find("li a").removeAttr("onclick");
$("#colorItemList").find("li a").unbind().click(function(){FourPage.changeVersion("","",$(this).parent().attr("colorid"),this)
});
$("#versionItemList").find("li a").unbind().click(function(){FourPage.changeVersion("","",$(this).parent().attr("versionid"),this)
});
Cluster.partMap=b;
Cluster.priceMap=[];
FourPage.getClusterPrice(e,1)
};
FourPage.getClusterPrice=function(g,c){if(c<=Math.ceil(g.length/20)){var a="";
var h="";
var f=g.length<c*20?g.length:c*20;
for(var e=(c-1)*20;
e<f;
e++){a+=g[e]+",";
h+=sn.vendorCode+","
}a=a.substring(0,a.length-1);
h=h.substring(0,h.length-1);
var b=sn.lesCityId+sn.lesDistrictId+"01";
$.ajax({url:sn.icpsDomain+"/icps-web/getVarnishAllPrice014/"+a+"_"+sn.lesCityId+"_"+b+"_"+h+"_1_getClusterPrice.vhtm",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getClusterPrice",success:function(k){if(k&&k.length>0){for(var j=0;
j<k.length;
j++){Cluster.priceMap.push(k[j])
}}if(c<Math.ceil(g.length/20)){FourPage.getClusterPrice(g,c+1)
}else{Cluster.subCode=new SubCode($(".proattr-radio").eq(0),(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0)?$(".proattr-radio").eq(1):"",Cluster.priceMap,Cluster.partMap,"g")
}}})
}};
var thisOnSale={onSaleDom:null,saleFlag:true,init:function(){this.onSaleDom=null;
this.saleFlag=true;
iFourth.thisOnSale.stop()
},showThisOnSale:function(){if(this.onSaleDom!=null&&this.saleFlag==false){iFourth.thisOnSale.animate($(this.onSaleDom));
$(this.onSaleDom).attr("name","item_"+sn.ninePartNumber+"_basic_cikuanyouhuo-wuhuo")
}}};
FourPage.changeVersion=function(k,i,h,c){if(sn.simBuyType=="3"||sn.simBuyType=="4"||(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId)){var j="";
try{var l=window.location.href.split("?")[1];
j=typeof l!="undefined"?("#?"+l):"";
var b="";
var g="";
if(typeof $(c).parent().attr("colorid")!="undefined"){b=$(c).parent().attr("colorid");
g=$("#versionItemList").find("li.selected").attr("versionid")
}else{g=$(c).parent().attr("versionid");
b=$("#colorItemList").find("li.selected").attr("colorid")
}$.each(sn.clusterMap,function(m,e){if(e.color==b){$.each(e.itemCuPartNumber,function(o,n){if(n.versionId==g){i=n.partNumber
}})
}});
if(k==i){return false
}if(""!=i){i=getEffectivePartNumber(i)
}var a="";
if(""!=sn.vendorCode){a=sn.itemDomain+"/"+sn.vendorCode+"/"+i+".html"+j
}else{a=sn.itemDomain+"/0000000000/"+i+".html"+j
}window.location.href=a
}catch(f){}}else{Cluster.processChange(h,c)
}};
FourPage.scoreUtil=function(b){b=parseFloat(b).toFixed(2)+"%";
var a="";
if(parseFloat(b)>=0){a+="up"
}else{a+="down"
}return a
};
FourPage.addShopFavorite=function(){mySuning.add2ShopFavorite(sn.vendorCode,"productDetail","",refreshLogin)
};
FourPage.getonlineService=function(){if((sn.isCShop&&!sn.csSwlShopFlag)||(sn.csSwlShopFlag&&sn.factorySendFlag=="1")){var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callmeTile").attr("href","javascript:findpassNewSupplier('"+sn.partNumber+"','"+sn.pageNO+"','"+sn.vendorCode+"','"+a+"','','','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
if(sn.czyHwgFlag){$("#callme").html("<i></i>联系客服");
$("#callmeTile").html("<i></i>联系客服")
}else{$("#callme").html("<i></i>联系卖家");
$("#callmeTile").html("<i></i>联系卖家")
}}else{if(isSpecialSale()){$("#callme").attr("href","javascript:findsinglepass('"+sn.tmOnlineId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.tmOnlineId+"','','','','');")
}else{if(sn.zyHwgFlag){$("#callme").attr("href","javascript:findsinglepass('"+sn.hwgOnlineId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.hwgOnlineId+"','','','','');")
}else{if(sn.suningJiWuFlag){$("#callme").attr("href","javascript:findsinglepass('"+sn.jiwuChatId+"','','','','');");
$("#callmeTile").attr("href","javascript:findsinglepass('"+sn.jiwuChatId+"','','','','');")
}else{var a=protocol+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.partNumber+"__.html";
$("#callmeTile").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');");
$("#callme").attr("href","javascript:findpassNewBrand('"+sn.partNumber+"','"+sn.pageNO+"','"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','"+sn.lesCityId+"','"+sn.lesCityId+sn.lesDistrictId+"01');")
}}}$("#callme").html("<i></i>联系客服");
$("#callmeTile").html("<i></i>联系客服")
}};
FourPage.Recommend=function(){if(sn.suningJiWuFlag){$("#hotRank").hide();
$("#viewAndBuyContent").hide();
$("#historyListDiv").hide();
$("#historyRecDiv").hide();
return
}CommonFourPage.Recommend.getAlsoBuy(sn.passPartNumber,"Recommend.getRecomData");
CommonFourPage.Recommend.getHotRank(sn.passPartNumber,"Recommend.callbackFunp");
lazyElems["J-historyList"].handle=FourPage.showMyHistory;
lazyElems["J-historyList"].enable=true
};
function initServiceOffInstall(){if(sn.isCShop&&!sn.csSwlShopFlag){if(isSpecialSale()){if(sn.availCheckCode=="05"){$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售和发货，并提供售后服务')
}else{$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货，并提供售后服务')
}}else{if(sn.swlShopFlag){$("#shopName").html("由&nbsp;<span>苏宁</span>&nbsp;销售和发货，并提供售后服务")
}else{if(sn.csSwlShopFlag){$("#shopName").html("由&nbsp;<span>苏宁自营</span>&nbsp;销售和发货，并提供售后服务")
}else{if(sn.hasStorage=="Y"&&sn.sendCityName&&sn.sendCityName!=""){$("#shopName").html("由&nbsp;"+sn.curShopName+"&nbsp;从 &nbsp;"+sn.sendCityName+"&nbsp;销售和发货，并提供售后服务")
}else{$("#shopName").html("由&nbsp;"+sn.curShopName+"&nbsp;销售和发货，并提供售后服务")
}}}}}else{var b=$("#shop_code").val();
var e=$("#shop_status").val();
var g=$("#shop_name").val();
var c=$("#brand_dacu_url").val();
var a;
if(c&&c!=""){a=c
}else{a=sn.shopPath+sn.shopMainPh+"/"+b.substring(2,10)+"/index.html"
}var f="，并提供售后服务";
if(sn.factorySendFlag=="1"){f="，苏宁提供售后服务";
if(sn.installFlag){if(sn.installFlag=="1"){f="，苏宁提供售后安装服务"
}else{if(sn.installFlag=="2"){f="，并提供售后安装服务"
}else{if(sn.installFlag=="3"){f="，并提供售后安装服务"
}else{if(sn.installFlag=="0"){f="，苏宁提供售后服务"
}}}}}if(isSpecialSale()){if(sn.availCheckCode=="05"){$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售和发货，并提供售后服务')
}else{$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货，并提供售后服务')
}}else{if(sn.zyHwgFlag){if(sn.availCheckCode=="05"){$("#shopName").html('由&nbsp;<span class="c666">海外苏宁</span>&nbsp;销售和发货，并提供售后服务')
}else{$("#shopName").html('由&nbsp;<span class="c666">海外苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货，并提供售后服务')
}}else{$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货'+f)
}}}else{if(sn.installFlag){if(sn.installFlag=="1"){f="，并提供售后安装服务"
}else{if(sn.installFlag=="2"){f="，供应商提供售后安装服务"
}else{if(sn.installFlag=="3"){f="，并提供售后安装服务"
}else{if(sn.installFlag=="0"){f="，并提供售后服务"
}}}}}if(isSpecialSale()){if(sn.availCheckCode=="05"){$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售和发货，并提供售后服务')
}else{$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货，并提供售后服务')
}}else{if(sn.zyHwgFlag){if(sn.availCheckCode=="05"){$("#shopName").html('由&nbsp;<span class="c666">海外苏宁</span>&nbsp;销售和发货，并提供售后服务')
}else{$("#shopName").html('由&nbsp;<span class="c666">海外苏宁</span>&nbsp;销售，<span class="text-f60">供应商</span>发货，并提供售后服务')
}}else{if(b!=null&&b!=""&&e=="0"){$("#shopName").html("由&nbsp;<span><a href="+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>&nbsp;销售和发货'+f)
}else{$("#shopName").html('由&nbsp;<span class="c666">苏宁</span>&nbsp;销售和发货'+f)
}}}}if(sn.installFlag=="3"){iFourth.bindSzytTip()
}CommonFourPage.resetServiceSupport()
}}var priceHtmlSource='{{if promotionPrice && promotionPrice!=""}}{{if specialFlag}}<dl class="price-promo"><dt><span class="w3">易购价</span></dt>                               <dd>                                                                      <span class="mainprice"><i>&yen;</i>{{promotionPrice.split(".")[0]}}.<span>{{promotionPrice.split(".")[1]}}</span></span>{{if type=="1"}}        <span class="pri-label"><i class="sub-icon"></i>限时促销</span>{{/if}}        <a href="javascript:FourPage.subscribePriceNotice();" class="btn-price-notice" name="item_{{ninePartNumber}}_gmq_jjtz" id="PriceNotice1">降价通知</a>    </dd>                                                             </dl>{{else}}{{if subPriceFlag && isPreBuy!="2"}}{{if netPrice && netPrice!=""}}<dl class="price-sn">                                          <dt><span class="w3">参考价</span></dt>                    <dd>                                                           <del class="small-price"><i>&yen;</i>{{netPrice}}</del>    </dd>                                                  </dl>                                                      {{/if}}<dl class="price-promo">                                                  <dt><span class="w3" id="promPriceText">{{if priceType =="0"}}		易购价{{else}}		活动价{{/if}}</span></dt>                               <dd>                                                                      <span class="mainprice">{{#promotionPrice}}</span>		  {{if priceType =="1" || priceType =="4-9"}}			 <span class="pri-label"><i class="sub-icon"></i>限时促销</span>		  {{/if}}    </dd>                                                             </dl>{{else}}{{if isPreBuy=="2"}}<dl class="price-promo">                                                                                       <dt><span class="w2">定金</span></dt>                                                                        <dd>                                                                                                             <span class="mainprice"><i>&yen;</i>{{bookPrice.split(".")[0]}}.<span>{{bookPrice.split(".")[1]}}</span></span>{{if bookPriceSwell && bookPriceSwell!=""}}        	<span class="deposit-info">(定金可抵{{bookPriceSwell}}元)</span>                                                 {{/if}}    </dd>                                                                                                    </dl>  {{/if}}{{if netPrice && netPrice!=""}}<dl class="price-sn">                                          <dt><span class="w3">参考价</span></dt>                    <dd>                                                           <del class="small-price"><i>&yen;</i> {{netPrice}}</del>    </dd>                                                  </dl>                                                      {{/if}}{{if isPreBuy=="2"}}<dl class="price-sn">                                         <dt><span class="w3" id="promPriceText">预售价</span></dt>                   <dd>                                                          <span class="small-price"><i>&yen</i> {{promotionPrice}}</span>    </dd>                                                 </dl>                                                     {{else}}<dl class="price-promo">                                                  <dt><span class="w3" id="promPriceText">{{if priceType =="0"}}		易购价{{else}}		活动价{{/if}}	  </span></dt>                               <dd>                                                                      <span class="mainprice"><i>&yen;</i>{{if preBuyTextPrice}}{{#promotionPrice}}{{else}}{{promotionPrice.split(".")[0]}}.<span>{{promotionPrice.split(".")[1]}}</span>{{/if}}		  </span>		  {{if priceType =="1" || priceType =="4-9"}}			 <span class="pri-label"><i class="sub-icon"></i>限时促销</span>		  {{/if}}        <a href="javascript:FourPage.subscribePriceNotice();" class="btn-price-notice" name="item_{{ninePartNumber}}_gmq_jjtz" id="PriceNotice1">降价通知</a>    </dd>                                                             </dl>{{/if}}{{if vipPrice && vipPrice != "" }}	<dl class="super-vipbox" style="display: none;">		<dt><span class="w2"></span></dt>		<dd>			<span class="super-price"><i>&yen;</i>{{vipPrice}}</span>			<span class="super-icon"></span>			<span class="super-word">SUPER会员专享价</span>			<a href="javascrip:;" class="more-equity" style="display: none;"></a>		</dd>	</dl>{{/if}}{{if hwgShopFlag && (vendorType == "6" || vendorType == "7" )}}<dl class="price-sn" id = "hwgPricsSn" style="display: none;">    <dt><span class="w3">进口税</span></dt>       <dd>       	{{if isPreBuy=="2"}}    		<label class="lable-bs">包税</label><i class="i-triangle"></i>			<span class="small-price" id="hwgTax"><em class="ch">预定商品的预售价格已含税，无需额外支付税费</em></span>  {{else}}    		<label class="lable-bs">包税</label><i class="i-triangle"></i>			<span class="small-price" id="hwgTax"><em class="ch">预计 </em><i>&yen;</i> {{hwgTax}}，实际税费请以提交订单为准</span></span>  {{/if}}   <div class="presell-rule import-tax-rule" id="taxrule">                                                                                         <a href="javascript:void(0);" class="title">总价规则<i class="arr-drop ng-iconfont">&#xe62e;</i></a>                           <div class="content">                                                                                                              <span class="tri-pointer-up">                                                                                                     <i class="inner-tri"></i>                                                                                                    </span>                                                                                                                    	  <p>商品总价=商品价格+进口税+运费</p>                                                                                           <p>根据国家政策规定，跨境进口商品需缴纳跨境电商综合税，不同商品适用不同税率，具体税费以结算金额为准。<a href="//help.suning.com/page/id-689.htm" target="_blank">了解税率</a></p>        </div>                                                                                                                    </div>         </dd>  </dl>     {{else}}{{if hwgShopFlag && (freeDuty == "1" || freeDuty == "2" || hwgTax > 0 )}}<dl class="price-sn">                                                                                                               <dt><span class="w3">进口税</span></dt>                                                                                            <dd>       		{{if freeDuty == "2"}}    		<label class="lable-bs">包税</label><i class="i-triangle"></i>			<span class="small-price" id="hwgTax"><em class="ch">若配送期间产生税费，请联系客服报销</em></span>		{{/if}}			{{if freeDuty == "1"}}    		<label class="lable-bs">包税</label><i class="i-triangle"></i>			<span class="small-price" id="hwgTax"><em class="ch">本商品售价已包税</em></span>		{{/if}}			{{if hwgTax > 0 && freeDuty != "1" && freeDuty != "2"}}        	<span class="small-price" id="hwgTax"><em class="ch">预计 </em><i>&yen;</i> {{hwgTax}}，实际税费请以提交订单为准</span> 		{{/if}}			{{if freeDuty != "2" || vendorType == "6" || vendorType == "7" }}        <div class="presell-rule import-tax-rule" id="taxrule">                                                                                             <a href="javascript:void(0);" class="title">总价规则<i class="arr-drop ng-iconfont">&#xe62e;</i></a>                               <div class="content">                                                                                                                  <span class="tri-pointer-up">                                                                                                        <i class="inner-tri"></i>                                                                                                        </span>                                                                                                                            <p>商品总价=商品价格+进口税+运费</p>                                                                                               <p>根据国家政策规定，跨境进口商品需缴纳跨境电商综合税，不同商品适用不同税率，具体税费以结算金额为准。<a href="//help.suning.com/page/id-689.htm" target="_blank">了解税率</a></p>            </div>                                                                                                                         </div>     		{{/if}}	    </dd>                                                                                                                          </dl>                                                                                                                              {{/if}}{{/if}}{{/if}}{{/if}}{{else}}{{/if}}{{if !tmShopFlag}}<dl class="proinfo-comments">        <div class="v-div-line"></div>    <a href="#pro_detail_tab">                                                          <div>累计评价</div><span>{{reviewTotal}}</span>    </a>                                                                 </dl>{{/if}}';
var priceHtmlTemplate=template.compile(priceHtmlSource);
function initPriceHtml(j,h,n){if(j){var f={promotionPrice:h===""?"":parseFloat(h).toFixed(2)+"",saleVolume:sn.saleVolume,reviewTotal:sn.reviewTotal,type:typeof n!="undefined"?n:"",specialFlag:true,tmShopFlag:sn.tmShopFlag}
}else{if(sn.prdType=="S"&&sn.passPartNumber==sn.partNumber){var g="";
var b="";
var a="";
var m="";
if(gProduct.resetPrice&&typeof gProduct.minPrice!="undefined"&&gProduct.minPrice!=""){g=gProduct.minPrice;
b=gProduct.maxPrice;
var l="";
if(g==b){a=g
}else{a=g+"-"+b
}if(gProduct.refMinPrice!=""){if(gProduct.refMinPrice==gProduct.refMaxPrice){l=gProduct.refMinPrice
}else{l=gProduct.refMinPrice+"-"+gProduct.refMaxPrice
}sn.refPrice=gMain.getRefPrice(l,g,b)
}}else{for(var e=0;
e<generalSub.saleInfo.length;
e++){var p=generalSub.saleInfo[e].partNumber;
h=generalSub.saleInfo[e].promotionPrice;
if(h!=""&&(p==sn.passPartNumber)){hasPrice=true;
sn.promotionPrice=generalSub.saleInfo[e].promotionPrice;
a=generalSub.saleInfo[e].promotionPrice;
m=generalSub.saleInfo[e].priceType;
var k=new Array();
k=a.split("-");
if(k.length==2){g=parseFloat(k[0]).toFixed(2);
b=parseFloat(k[1]).toFixed(2)
}else{g=parseFloat(k[0]).toFixed(2);
b=parseFloat(k[0]).toFixed(2)
}var l=generalSub.saleInfo[e].refPrice;
if(l==""){l=generalSub.saleInfo[e].netPrice
}sn.refPrice=gMain.getRefPrice(l,g,b);
sn.promotionPrice=g;
var c=new Array();
c=generalSub.saleInfo[e].netPrice.split("-");
sn.netPrice=parseFloat(c[0]).toFixed(2);
break
}}}sn.hotRank="0";
var o=sn.shopType;
if(sn.mountType=="10"&&sn.shopType!="6"&&sn.shopType!="3"){o="7"
}var f={promotionPrice:a,netPrice:"",subPriceFlag:true,isCShop:sn.isCShop,vendorType:o,priceType:sn.priceType,saleVolume:sn.saleVolume,reviewTotal:sn.reviewTotal,isPreBuy:sn.isPreBuy,bookPrice:sn.bookPrice==""?"":parseFloat(sn.bookPrice).toFixed(2)+"",bookPriceSwell:sn.bookPriceSwell==""?"":parseFloat(sn.bookPriceSwell).toFixed(2),tmShopFlag:sn.tmShopFlag};
if(a!=""&&sn.isPreBuy!="2"){if(m=="7-1"||m=="7-3"){f.promotionPrice="<i>&yen;</i>"+a+"</span>"
}else{if(g!=b){f.promotionPrice="<i>&yen;</i>"+parseInt(g)+".<span>"+((g+"").split(".")[1])+"</span> - "+parseInt(b)+".<span>"+((b+"").split(".")[1])+"</span>"
}else{f.promotionPrice="<i>&yen;</i>"+parseInt(g)+".<span>"+((g+"").split(".")[1])+"</span>"
}}}if(sn.controller!=[]&&sn.controller.length>0&&sn.controller[0].PRICE_FLAG=="0"&&sn.refPrice!=""){f.netPrice=sn.refPrice
}}else{var o=sn.shopType;
if(sn.mountType=="10"&&sn.shopType!="6"&&sn.shopType!="3"){o="7"
}var f={isPreBuy:sn.isPreBuy,preBuyTextPrice:false,promotionPrice:sn.promotionPrice==""?"":parseFloat(sn.promotionPrice).toFixed(2)+"",bookPrice:sn.bookPrice==""?"":parseFloat(sn.bookPrice).toFixed(2)+"",bookPriceSwell:sn.bookPriceSwell==""?"":parseFloat(sn.bookPriceSwell).toFixed(2),netPrice:"",priceType:sn.cuxiaoType,vendorType:o,ninePartNumber:sn.ninePartNumber,hwgShopFlag:sn.hwgShopFlag,isCShop:sn.isCShop,vipPrice:sn.vipPrice,saleVolume:sn.saleVolume,reviewTotal:sn.reviewTotal,tmShopFlag:sn.tmShopFlag};
if(sn.controller!=[]&&sn.controller.length>0&&sn.controller[0].PRICE_FLAG=="0"&&(sn.netPrice||sn.refPrice!="")){if(sn.refPrice==""&&parseFloat(sn.netPrice)>parseFloat(sn.promotionPrice)){f.netPrice=sn.netPrice
}else{if(sn.refPrice!=""&&parseFloat(sn.refPrice)>parseFloat(sn.promotionPrice)){f.netPrice=sn.refPrice
}}}if(sn.cuxiaoType=="7-1"||sn.cuxiaoType=="7-3"){f.preBuyTextPrice=true;
f.promotionPrice=sn.promotionPrice
}if(sn.hwgShopFlag&&typeof sn.hwgTax!="undefined"&&sn.hwgTax!=""){f.hwgTax=parseFloat(sn.hwgTax).toFixed(2)
}if(sn.hwgShopFlag&&typeof sn.freeDuty!="undefined"&&sn.freeDuty!=""){f.freeDuty=sn.freeDuty
}if(sn.mountType=="03"&&sn.promotionPrice.indexOf("-")>-1){autoParts.minPrice=sn.promotionPrice.split("-")[0];
autoParts.maxPrice=sn.promotionPrice.split("-")[1];
sn.promotionPrice=autoParts.minPrice;
if(autoParts.minPrice!=autoParts.maxPrice){f.promotionPrice=parseInt(autoParts.minPrice)+".<span>"+((autoParts.minPrice+"").split(".")[1])+"</span> - "+parseInt(autoParts.maxPrice)+".<span>"+((autoParts.maxPrice).split(".")[1])+"</span>"
}else{f.promotionPrice=parseInt(autoParts.minPrice)+".<span>"+((autoParts.minPrice+"").split(".")[1])+"</span>"
}f.preBuyTextPrice=true
}}}if(f.promotionPrice==""){$("#cart2Price").html("本地区暂不销售");
$("#priceDom").hide()
}else{$("#priceDom").show();
$("#cart2Price").html(f.promotionPrice)
}$("#mainPrice").html(priceHtmlTemplate(f));
o2oParts.initService();
if(sn.shopType=="6"){$("#PriceNotice1").hide()
}FourPage.hash();
if(f.isPreBuy=="2"||$("#taxrule").length>0){iFourth.presell()
}}Cart.sunShine=function(){var k=sn.yanbaoSet;
if(k.length>0){var h='<dt><span>增值服务</span></dt><dd><ul class="clearfix">';
var b=k.length;
var e=0;
var j=0;
var a=0;
for(var c=0;
c<b;
c++){var f=k[c];
var m="";
var l="";
if((c+1)<b){m=k[c+1]
}if(c>0){l=k[c-1]
}if(c==0){a++;
e++;
if(m!=""&&f.goodsType==m.goodsType){h+="<li class='mulit' data-id='"+c+"'><a data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:void(0);' class='mulita'><img class='icon_img' src='"+sn.tmImageDomianDir+"/uimg/EWOP/exttype/"+f.goodsType+"_1.png'/><span class='promotionSpan'>"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"</span>";
h+="<em class='ng-iconfont i-down'>&#xe62e;</em>";
h+="<em class='ng-iconfont i-up'>&#xe63a;</em>";
h+="<i class='flag'></i>";
h+="</a>";
h+="<div class='child-list'><a data-flag = '"+j+"' data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:;' data-name='"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"'><label><input type='radio' class='radio' name='txx"+e+"'/>";
if(f.promotionFlag=="1"){h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp<del>&yen"+f.costPrice+"</del>&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp";
h+='<span class="promote-lebel">'+f.promotionDoc+"</span>"
}else{h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp"
}h+="</label></a>"
}else{if(f.promotionFlag=="1"){f.sellPoint=f.promotionDoc
}h+="<li class='' data-id='"+c+"'><a title='"+f.sellPoint+"' data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:void(0);' class=''>";
if(f.promotionFlag=="1"){h+="<label class='hui'></label>"
}h+="<img class='icon_img' src='"+sn.tmImageDomianDir+"/uimg/EWOP/exttype/"+f.goodsType+"_1.png'/><span>"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"</span><i class='flag'></i></a>"
}if(b==1){h+="</li>"
}}else{if(f.goodsType==l.goodsType&&a<5){a++;
j++;
h+="<a data-flag = '"+j+"'  data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:;' data-name='"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"'><label><input type='radio' class='radio' name='txx"+e+"'/>";
if(f.promotionFlag=="1"){h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp<del>&yen"+f.costPrice+"</del>&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp";
h+='<span class="promote-lebel">'+f.promotionDoc+"</span>"
}else{h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp"
}h+="</label></a>";
if(m==""){h+="</div></li>"
}}else{if(f.goodsType!=l.goodsType){a=0;
j=0;
h+="</div></li>";
if(e>=6){break
}e++;
if(m!=""&&f.goodsType==m.goodsType){h+="<li class='mulit' data-id='"+c+"'><a data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:void(0);' class='mulita'><img class='icon_img' src='"+sn.tmImageDomianDir+"/uimg/EWOP/exttype/"+f.goodsType+"_1.png'/><span class='promotionSpan'>"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"</span>";
h+="<em class='ng-iconfont i-down'>&#xe62e;</em>";
h+="<em class='ng-iconfont i-up'>&#xe63a;</em>";
h+="<i class='flag'></i>";
h+="</a>";
h+="<div class='child-list'><a data-flag = '"+j+"' data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:;' data-name='"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"'><label><input type='radio' class='radio' name='txx"+e+"'/>";
if(f.promotionFlag=="1"){h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp<del>&yen"+f.costPrice+"</del>&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp";
h+='<span class="promote-lebel">'+f.promotionDoc+"</span>"
}else{h+=f.sellPoint+"&nbsp&nbsp"+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"&nbsp&nbsp"
}h+="</label></a>"
}else{if(f.promotionFlag=="1"){f.sellPoint=f.promotionDoc
}h+="<li class='' data-id='"+c+"'><a title='"+f.sellPoint+"' data-id='"+f.goodsCode+"'  data-vendor='"+f.goodsSupplyCode+"' name='item_"+sn.ninePartNumber+"_gmq_"+f.goodsType+"' href='javascript:void(0);' class=''>";
if(f.promotionFlag=="1"){h+="<label class='hui'></label>"
}h+="<img class='icon_img' src='"+sn.tmImageDomianDir+"/uimg/EWOP/exttype/"+f.goodsType+"_1.png'/><span>"+f.typeName+f.timeLimit+f.limitUnit+"&nbsp&nbsp&yen"+f.warrantyPrice+"</span><i class='flag'></i></a>"
}if(m==""){h+="</div></li>"
}}}}}var g="在苏宁购买电器类商品可享受的增值售后服务，包含厂家质保期内的意外保障服务、厂家质保期结束后的延长保修服务以及货品替换服务等全程保修服务业务";
h+="</ul><input type='hidden'><div class='follow-box'><i class='ng-iconfont fold-icon' name='item_"+sn.ninePartNumber+"_basic_warranty-unfold'>&#xe63a;</i><i class='ng-iconfont extend-icon' title='更多延保' name='item_"+sn.ninePartNumber+"_basic_warranty-unfold'>&#xe62e;</i><a name='item_"+sn.ninePartNumber+"_gmq_ybxq' onclick='CommonFourPage.gotoYanBao() ' target='_blank' class='i-help' id='ybid'><span class='tool-tip'><i class='a-up-arrow'></i>"+g+"</span></a>&nbsp;<span style='display:none;' id='ybmdid' name='item_"+sn.ninePartNumber+"_gmq_xbxq-hover'></span></div>";
$("#yanbao").html(h);
$("#yanbao").show();
$("#ybid").hover(function(){$("#ybmdid").click()
},function(){});
iFourth.attrChoose();
iFourth.mainHeight();
iFourth.mulitChoiceYb();
iFourth.initYanbao()
}};
FourPage.getDisPrice=function(b){var a="";
if(!(sn.isPreBuy==1&&preBuy.priceType!=2)){b+="";
var c=parseFloat(b).toFixed(2);
a="<i>&yen;</i>"+c.substring(0,c.indexOf("."))+".<span>"+c.substring(c.indexOf(".")+1)+"</span>"
}else{a="<i>&yen;</i>"+b
}return a
};
function showMobileBigPoly(b){if(b!=null&&b.length!=0&&b.commList!=null&&b.commList.length!=0){var a=b.commList.length;
sn.mobilecommList=b.commList;
if(a>0){getMobileItemSaleStatus(sn.partNumber,"showSaleStatus")
}}showBigPolySellInfo(b)
}function showSaleStatus(b){if(sn.donateFlag){donateSaleStatus(b.saleInfo)
}else{var e=b.saleInfo;
if(typeof e!="undefined"&&e.length>0){var a=e[0];
sn.scodeType=(a.priceType).indexOf("4-7")>=0?(a.priceType.substring(2,3)):"0";
sn.scode=sn.scodeType=="7";
if(sn.prdType!="S"||a.promotionPrice.split("-").length<2){if((a.priceType).indexOf("4")==0&&parseFloat(a.promotionPrice)<parseFloat(sn.promotionPrice)){sn.mobilePrice=a.promotionPrice;
if(sn.mobilecommList.length>0){for(var c=0;
c<sn.mobilecommList.length;
c++){if(a.juId==sn.mobilecommList[c].activityId){sn.mobileBigEndTime=sn.mobilecommList[c].gbEndDate
}}}processQcode()
}else{sn.mobilePrice=""
}}}}}function processNoPubish(){sn.promotionPrice="";
sn.hotRank="0";
FourPage.initNotSaleCss();
$("#shopNameBox").siblings().hide();
$("#arrivWarning").hide();
$("#priceDom").html('<div class="txt-under-shelf">此商品已下架</div>').show();
$("#cart2Price").html("已下架");
$("#afterSalesService").html("");
$("#shouhou").hide();
if(!sn.isCShop&&!isSpecialSale()){CommonFourPage.storeService.getGuideDoct()
}CommonFourPage.Recommend.getOffSaleRecom(sn.passPartNumber,"Recommend.callBackGetnoGoods")
}function processNotSale(){FourPage.initNotSaleCss();
if(!sn.isCShop&&!isSpecialSale()){CommonFourPage.storeService.getGuideDoct()
}CommonFourPage.Recommend.getOffSaleRecom(sn.passPartNumber,"Recommend.callBackGetnoGoods")
}FourPage.initNotSaleCss=function(){$("#c_kucun").addClass("em freight");
$("#zyService").hide();
$("#proinfoMain").removeClass().addClass("proinfo-main pro-main-no-good");
$("#cshopBox").hide();
if(typeof sn.promotionPrice!="undefined"&&sn.promotionPrice!=""){var a="";
if(sn.vipPrice){a='	<dl class="super-vipbox" style="display: none;">		<dt><span class="w2"></span></dt>		<dd>			<span class="super-price"><i>&yen;</i>'+sn.vipPrice+'</span>			<span class="super-icon"></span>			<span class="super-word">SUPER会员专享价</span>			<a href="javascrip:;" class="more-equity" style="display: none;"></a>		</dd>	</dl>'
}$("#mainPrice").html('<dl class="price-promo"><dt><span class="w3">易购价</span></dt><dd><span class="mainprice">'+FourPage.getDisPrice(sn.promotionPrice)+"</span></span></dd></dl>"+a);
if(sn.vipPrice){CommonFourPage.queryMemberStatusInfo()
}}$("#nogoodRec").show();
$("#allcuxiao").hide();
$("#freeCouponTitle").hide();
$(".proinfo-o2o").hide();
$(".proinfo-deliver-oversea").hide();
$("#freenessPay").hide();
$("#weightid").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#nocodePackage").hide();
$(".mainbtns").hide();
$("#timePanel").hide();
$("#buyReminder").hide();
$(".pro-serv-panel").hide();
$("#autoPartArea").hide();
$("#storeService").hide();
$("#toHomeService").hide();
$(".divide-line").eq(0).hide();
$("#hwgBrand").hide()
};
Recommend.notSaleSeeAgain=function(e,c){var b="";
if(e&&e!=""&&e.skus.length>5){for(var a=0;
a<e.skus.length;
a++){e.skus[a].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recviewviewh_1-";
e.skus[a].eleName=e.skus[a].markPoint+(a+1)+"_p_"+e.skus[a].vendorId+"_"+(e.skus[a].sugGoodsCode).substring(9,18)+"_"+e.skus[a].handwork;
e.skus[a].eleHref=sn.elecProductDomain+"/"+e.skus[a].vendorId+"/"+getEffectivePartNumber(e.skus[a].sugGoodsCode)+".html#?src="+e.skus[a].markPoint+(a+1)+"_p_"+e.skus[a].vendorId+"_"+getEffectivePartNumber(e.skus[a].sugGoodsCode)+"_"+e.skus[a].handwork;
e.skus[a].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+e.skus[a].vendorId+"-"+e.skus[a].sugGoodsCode+"_1_120x120.jpg";
e.skus[a].eleId="baoguang_recviewviewh_1-"+(a+1)+"_"+e.skus[a].vendorId+"_"+(e.skus[a].sugGoodsCode).substring(9,18)+"_"+e.skus[a].handwork
}e.skuNum=8;
if($("html").hasClass("root1200")){e.skuNum=10
}b=template("noSale-rec-tmpl",e)
}if(b!=""){if(c==2){$("#J-slide1").show();
runAnalyseByClass("baoguang_recviewviewh")
}$("#R-n-klyk").html(b);
$("#J-slide1 .ng-tab-items li[rel=#R-n-klyk]").show();
if($.trim($("#R-n-similar").html())==""&&$.trim($("#R-n-hot-sale").html())==""){$("#R-n-klyk").show();
$("#J-slide1 .ng-tab-items li").removeClass("current");
$("#J-slide1 .ng-tab-items li[rel=#R-n-klyk]").addClass("current")
}else{$("#R-n-klyk").hide()
}}else{$("#J-slide1 .ng-tab-items li[rel=#R-n-klyk]").hide()
}lazyelem.listen()
};
Recommend.getLiNoGoods=function(b,a){var f="";
try{$.each(b.skus,function(e,g){if(e>7){return false
}f+='<li><a target="_blank" name="item_'+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_p_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" href="'+sn.elecProductDomain+"/"+g.vendorId+"/"+getEffectivePartNumber(g.sugGoodsCode)+".html#?src=item_"+getEffectivePartNumber(sn.partNumber)+"_recwhtjn_1-"+(e+1)+"_p_"+g.vendorId+"_"+getEffectivePartNumber(g.sugGoodsCode)+"_"+g.handwork+'" title="'+g.sugGoodsName+'">';
f+='<img alt="'+g.sugGoodsName+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+g.vendorId+"-"+g.sugGoodsCode+'_1_100x100.jpg"/></a>';
f+='<p class="title"><a target="_blank" id="baoguang_recwhtjn_1-'+(e+1)+"_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" name="item_'+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_c_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" title="'+g.sugGoodsName+'" href="'+sn.elecProductDomain+"/"+g.vendorId+"/"+getEffectivePartNumber(g.sugGoodsCode)+".html#?src=item_"+getEffectivePartNumber(sn.partNumber)+"_recwhtjn_1-"+(e+1)+"_c_"+g.vendorId+"_"+getEffectivePartNumber(g.sugGoodsCode)+"_"+g.handwork+'">';
if((g.sugGoodsName).length<17){f+=g.sugGoodsName
}else{f+=(g.sugGoodsName).substring(0,16)+"..."
}f+="</a></p>";
f+='<p class="price"><i>&yen; </i>'+g.price+CommonFourPage.Recommend.getPromotionContent(g.promotionType," ")+"</p></li>"
})
}catch(c){}return f
};
Cart.addCart=function(){if(sn.prdType=="S"&&!gMain.checkIsSub()){iFourth.TZM.show();
return
}if(sn.prdType=="g"&&!Cluster.checkIsSub()){iFourth.TZM.show();
return
}if(sn.o2oFlag&&!o2oParts.cartCheck()){return
}if($("#getStoreService").is(":visible")&&autoParts.isSelected=="0"){iFourth.carParts.showWarmBox();
return
}if(!Cart.treatPhoneCheck()){return
}if(sn.startCount&&sn.startCount!=""&&(parseInt($("#buyNum").val())<parseInt(sn.startCount)||$("#buyNum").val()=="")){$("#buyNum").val(sn.startCount);
$("#productLimit").html("<em>该商品"+sn.startCount+"件起售</em>");
return
}else{if($("#buyNum").val()==""||parseInt($("#buyNum").val())<1){$("#buyNum").val("1")
}}var g="01";
var a="";
if(sn.priceType=="4"){g="02";
a=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){g="07";
a=preBuy.actionID
}var h=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var j=sn.partNumber;
if(sn.groupFlag){j=sn.groupPartnumber
}var e=[];
if($("#yanbao").find("li[class='mulit selected']").length>0){$("#yanbao").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var k={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:h};
e.push(k)
})
}if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").find("a").each(function(){var k={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:h};
e.push(k)
})
}var b=[];
CommonFourPage.getAfterSalesService(b);
var c=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){c="0000000000"
}var f="";
if($("#nocodePackage").find("li[class='mulit selected']").length>0||$("#nocodePackage").find("li[class='selected']").length>0){g="23";
f=new Array();
var i={cmmdtyCode:sn.partNumber,cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
if(typeof e!="undefined"&&e.length>0){i.childCmmdtyWarrantyVOList=e;
e=[]
}if(typeof b!="undefined"&&b.length>0){i.serveCodeItems=b;
b=[]
}f.push(i);
$("#nocodePackage").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var k={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
f.push(k)
});
$("#nocodePackage").find("li[class='selected']").find("a").each(function(){var k={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
f.push(k)
})
}if(sn.priceType=="4"&&sn.bigpolylogin=="1"){$("body").AjaxLogin({success:function(){FourPage.cartPress("0");
addCartFourPage(h,j,g,a,e,f,FourPage.cartPress,"",b)
}})
}else{FourPage.cartPress("0");
addCartFourPage(h,j,g,a,e,f,FourPage.cartPress,"",b)
}};
Cart.addCartPJ=function(){var e=0;
var h=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var i=sn.partNumber;
var c=$("#J-slide-tieIn").find("input[class=check]");
var c=$.grep(c,function(l,k){if($(l).attr("checked")=="checked"){return true
}},false);
var b=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){b="0000000000"
}var g=new Array();
var a=new Array();
var j={cmmdtyCode:sn.partNumber,cmmdtyQty:h,shopCode:b,accessoryRelationID:""};
g.push(j);
$.each(c,function(l,k){if(sn.shopType=="4"||isSpecialSale()||(typeof $(this).siblings(".fitVendorCode").val()!="undefined"&&$(this).siblings(".fitVendorCode").val()!=sn.vendorCode)){var n={cmmdtyCode:$(this).siblings(".fitPartNumber").val(),shopCode:$(this).siblings(".fitVendorCode").val(),activityType:"01",cmmdtyQty:h};
a.push(n)
}else{var m={cmmdtyCode:$(this).siblings(".fitPartNumber").val(),cmmdtyQty:h,shopCode:b,accessoryRelationID:$(this).siblings(".accessoryId").val()};
g.push(m)
}e++
});
var f="04";
if(e!=0){if(sn.priceType=="4"&&sn.bigpolylogin=="1"){$("body").AjaxLogin({success:function(){FourPage.cartPress("0");
addCartFourPage(h,i,f,"","",g,FourPage.cartPress,a)
}})
}else{FourPage.cartPress("0");
addCartFourPage(h,i,f,"","",g,FourPage.cartPress,a)
}}else{Util.alertErrorBox("请先选择搭配商品")
}};
FourPage.quickPressData={};
FourPage.cartPressData={};
FourPage.quickPress=function(a){if(a=="0"){if(sn.isPreBuy=="1"&&!sn.groupFlag){FourPage.cartPressData.itemClass=$("#addCart").attr("class");
FourPage.cartPressData.html=$("#addCart").html();
FourPage.cartPressData.href=$("#addCart").attr("href");
$("#addCart").removeClass().addClass("btn-orange-buy btn-active-loading").attr("href","javascript:void(0);")
}else{FourPage.quickPressData.itemClass=$("#buyNowAddCart").attr("class");
FourPage.quickPressData.html=$("#buyNowAddCart").html();
FourPage.quickPressData.href=$("#buyNowAddCart").attr("href");
$("#buyNowAddCart").removeClass().addClass("btn-orange-buy btn-active-loading").attr("href","javascript:void(0);")
}}else{if(sn.isPreBuy=="1"&&!sn.groupFlag){$("#addCart").removeClass().addClass(FourPage.cartPressData.itemClass);
$("#addCart").html(FourPage.cartPressData.html);
$("#addCart").attr("href",FourPage.cartPressData.href)
}else{$("#buyNowAddCart").removeClass().addClass(FourPage.quickPressData.itemClass);
$("#buyNowAddCart").html(FourPage.quickPressData.html);
$("#buyNowAddCart").attr("href",FourPage.quickPressData.href)
}}};
FourPage.cartPress=function(a){if(a=="0"){FourPage.cartPressData.itemClass=$("#addCart").attr("class");
FourPage.cartPressData.html=$("#addCart").html();
FourPage.cartPressData.href=$("#addCart").attr("href");
$("#addCart").removeClass().addClass("btn-orange-buy btn-active-loading").attr("href","javascript:void(0);")
}else{$("#addCart").removeClass().addClass(FourPage.cartPressData.itemClass);
$("#addCart").html(FourPage.cartPressData.html);
$("#addCart").attr("href",FourPage.cartPressData.href)
}};
Cart.treatPhoneCheck=function(){var b=false;
if(sn.phoneFlag=="Y"&&$("#phonedl").is(":visible")){if(typeof $("#phonedl li.selected")!="undefined"){var c=$("#phonedl li.selected").index();
var a=$("#phoned2 ul").eq(c-1).find("li.selected").index();
if(c==0||(c!=0&&a>=0)){b=true
}}}else{b=true
}if(!b){iFourth.TZM.show()
}return b
};
Cart.addShoppingCartCheck=function(n,j,h,e,f,a,g,b,i,m,o,l,k,c){if(Cart.treatPhoneCheck()){addShoppingCartCheckBigPloy(n,j,h,e,f,a,g,b,i,m,o,l,k,c)
}};
Cart.buyNowTime=function(){if(sn.prdType=="S"&&!gMain.checkIsSub()){iFourth.TZM.show();
return
}if(sn.prdType=="g"&&!Cluster.checkIsSub()){iFourth.TZM.show();
return
}if(sn.o2oFlag&&!o2oParts.cartCheck()){return
}if($("#getStoreService").is(":visible")&&autoParts.isSelected=="0"){iFourth.carParts.showWarmBox();
return
}if(sn.startCount&&sn.startCount!=""&&(parseInt($("#buyNum").val())<parseInt(sn.startCount)||$("#buyNum").val()=="")){$("#buyNum").val(sn.startCount);
$("#productLimit").html("<em>该商品"+sn.startCount+"件起售</em>");
return
}else{if($("#buyNum").val()==""||parseInt($("#buyNum").val())<1){$("#buyNum").val("1")
}}if(sn.catenIds==sn.footTickCatenIds){var h=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var j=sn.ninePartNumber;
var c=sn.vendorCode;
Cart.buyNowForTicket(j,c,h)
}else{var h=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var j=sn.partNumber;
if(sn.groupFlag){j=sn.groupPartnumber
}var g="01";
var a="";
if(sn.priceType=="4"){g="02";
a=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){g="07";
a=preBuy.actionID
}var e=[];
if($("#yanbao").find("li[class='mulit selected']").length>0){$("#yanbao").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var l={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:h};
e.push(l)
})
}if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").find("a").each(function(){var l={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:h};
e.push(l)
})
}var b=[];
CommonFourPage.getAfterSalesService(b);
if(!Cart.treatPhoneCheck()){return
}var k=sn.giftInfo;
var c=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){c="0000000000"
}var f="";
if($("#nocodePackage").find("li[class='mulit selected']").length>0||$("#nocodePackage").find("li[class='selected']").length>0){g="23";
f=new Array();
var i={cmmdtyCode:sn.partNumber,cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
if(typeof e!="undefined"&&e.length>0){i.childCmmdtyWarrantyVOList=e;
e=[]
}if(typeof k!="undefined"&&k.length>0){i.childGiftVOList=k;
k=""
}if(typeof b!="undefined"&&b.length>0){i.serveCodeItems=b;
b=[]
}f.push(i);
$("#nocodePackage").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var l={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
f.push(l)
});
$("#nocodePackage").find("li[class='selected']").find("a").each(function(){var l={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:h,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
f.push(l)
})
}iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){FourPage.quickPress("0");
if(sn.groupFlag){buyNowFourPage(h,j,g,a,"",e,f,k,b,FourPage.quickPress)
}else{buyNowFourPage(h,j,g,a,"",e,f,k,b,FourPage.quickPress)
}}})
}};
Cart.buyNowForTicket=function(c,b,a){iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){fctCart2(c,b,sn.lesCityId,a,footTickCallback)
}})
};
function footTickCallback(a){if(a&&a.message){Util.alertErrorBox(a.message)
}else{Util.alertErrorBox("本地区暂不销售")
}}Renxf.buyNowFreenessPay=function(){if(!Cart.treatPhoneCheck()){return
}if(sn.o2oFlag&&!o2oParts.cartCheck()){return
}if($("#getStoreService").is(":visible")&&autoParts.isSelected=="0"){iFourth.carParts.showWarmBox();
return
}var f="";
if($(".renxf-list li.current").attr("data-id")!=undefined){f=$(".renxf-list li.current").attr("data-id")
}else{return
}var i=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var k=sn.partNumber;
if(sn.groupFlag){k=sn.groupPartnumber
}var h="01";
var a="";
if(sn.priceType=="4"){h="02";
a=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){h="07";
a=preBuy.actionID
}var e=[];
if($("#yanbao").find("li[class='mulit selected']").length>0){$("#yanbao").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var m={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:i};
e.push(m)
})
}if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").find("a").each(function(){var m={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:i};
e.push(m)
})
}var l=sn.giftInfo;
var c=sn.vendorCode;
if(sn.vendorCode==""||sn.zyHwgFlag){c="0000000000"
}var g="";
if($("#nocodePackage").find("li[class='mulit selected']").length>0||$("#nocodePackage").find("li[class='selected']").length>0){h="23";
g=new Array();
var j={cmmdtyCode:sn.partNumber,cmmdtyQty:i,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
if(typeof e!="undefined"&&e.length>0){j.childCmmdtyWarrantyVOList=e;
e=[]
}if(typeof l!="undefined"&&l.length>0){j.childGiftVOList=l;
l=""
}if(typeof b!="undefined"&&b.length>0){j.serveCodeItems=b;
b=[]
}g.push(j);
$("#nocodePackage").find("li[class='mulit selected']").find("a[class='cur']").each(function(){var m={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:i,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
g.push(m)
});
$("#nocodePackage").find("li[class='selected']").find("a").each(function(){var m={cmmdtyCode:$(this).attr("data-id"),cmmdtyQty:i,shopCode:c,accessoryRelationID:$("#nocodePackage ul").attr("data-acId")};
g.push(m)
})
}iFourth.addCartPop.hide();
var b=[];
CommonFourPage.getAfterSalesService(b);
probeAuthStatus(function(){if(Renxf.condition=="0"){FourPage.quickPress("0");
if(sn.groupFlag){buyNowFourPage(i,k,h,a,f,e,g,l,b,FourPage.quickPress)
}else{buyNowFourPage(i,k,h,a,f,e,g,l,b,FourPage.quickPress)
}}else{if(Renxf.condition=="1"){window.location.href=sn.rxfDomain+"/epps-cpf/accountMgt/assetOverview.do"
}else{iFourth.showErrorDlg("抱歉，您暂无任性付资格")
}}},function(){$("body").AjaxLogin({success:function(){Renxf.loginFlag="Y";
if(scmInfo.newfreenessPay=="1"){Renxf.cfcFreenessPay()
}else{$.ajax({type:"get",url:sn.rxfCompetency,cache:true,async:false,dataType:"jsonp",jsonpCallback:"Renxf.rxfCompetencyCallBack",success:function(){}})
}}})
})
};
var browseHistory,currentProduct,SEPERATOR,count,productIds,historylen,cat,hisCount,myHistory,currentVendorCode="";
var skus,hisSkus=[];
FourPage.showMyHistory=function(e){iCompare.comHistory="";
iCompare.comNum=iFourth.calVerticalPdtNum();
browseHistory=FourPage.getCookieBonus("smhst");
currentProduct=getEffectivePartNumber(sn.partNumber);
currentVendorCode=sn.vendorCode;
if(isSpecialSale()||sn.shopType=="6"){currentVendorCode="0000000000"
}SEPERATOR="a";
count=1;
hisCount=0;
productIds=FourPage.updateHistory(browseHistory,currentProduct,SEPERATOR,currentVendorCode);
historylen;
if(productIds==null||(productIds.length==1&&currentProduct==productIds[0])){historylen=1;
productIds=[];
productIds[0]=currentProduct+"|"+currentVendorCode;
skus=productIds
}else{skus=[];
historylen=productIds.length;
var b=0;
$.each(productIds,function(a,g){if(g!=(currentProduct+"|"+currentVendorCode)){skus[b+1]=g;
b++
}});
skus[0]=currentProduct+"|"+currentVendorCode;
historylen++
}myHistory='<a class="btn-dir prev prev-disable" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">3</i></span><i class="arr"></i></a><a class="btn-dir next prev-disable" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">3</i></span><i class="arr"></i></a><div class="scroll-box" id=""><ul>';
FourPage.mysetHistoryValue(skus,count,sn.cityId,sn.imageDomianDir,sn.storeId,sn.catalogId,"-7",historylen);
var f=[];
if(skus.length>4){for(var c=0;
c<4;
c++){f[c]=skus[c]
}}else{f=skus
}CommonFourPage.Recommend.historyRec(f,"Recommend.historyRecHtml",e)
};
function setiDiggerTrackingCodes(){var a="";
if(typeof sn.category1!="undefined"){a=sn.category1
}if(typeof sn.category2!="undefined"){a+="_"+sn.category2
}if(typeof sn.categoryId!="undefined"){a+="_"+sn.categoryId
}iDiggerTrackingCodes(sn.partNumber,a,_wmmq)
}FourPage.updateHistory=function(a,g,c,b){var f;
var e;
if(FourPage.isNotEmpty(g)){if(FourPage.isNotEmpty(a)){if(a.indexOf(g)<0){f=a.split(c);
if(f.length<20){e=g+"|"+b+c+a
}else{e=g+"|"+b+c+a.substring(0,a.lastIndexOf(c))
}}else{return a.split(c)
}}else{e=g+"|"+b
}FourPage.setCookieBonus("smhst",e,30);
if(a==null){return e.split(c)
}else{return a.split(c)
}}else{return a==null?null:a.split(c)
}};
FourPage.isNotEmpty=function(a){return a!=null&&$.trim(a).length>0
};
FourPage.getCookieBonus=function(c){var e=document.cookie.split(";");
for(var b=0;
b<e.length;
b++){var a=e[b].split("=");
if($.trim(a[0])==c){return a[1]
}}return null
};
FourPage.setCookieBonus=function(b,e,a){var c=new Date();
c.setTime(c.getTime()+(a*1000*3600*24));
document.cookie=b+"="+e+((a==null)?"":"; expires="+c.toGMTString())+";path=/;domain="+sn.cookieDomain
};
FourPage.mysetHistoryValue=function(i,h,g,n,l,e,j,f){var k=i[h-1].split("|");
cat=k[0];
var m="";
if(k.length>1){m=k[1]
}var c=paserPartNumber(cat);
var b=sn.lesCityId+sn.lesDistrictId+"01";
var a=sn.icpsDomain+"/icps-web/getAllPriceFourPageV1/"+c+"_"+sn.lesCityId+"_"+b+"_1_"+m+"__pds_FourPage.getHisPrice.jsonp";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"FourPage.getHisPrice",success:function(o){}})
};
FourPage.getHisPrice=function(a){if(a!=null&&typeof a.saleInfo!="undefined"&&a.saleInfo.length>0){var e="";
var b="";
if(typeof a.saleInfo[0].promotionPrice!="undefined"){e=a.saleInfo[0].promotionPrice;
b=a.saleInfo[0].priceType;
if(a.saleInfo[0].priceType=="4-14"||a.saleInfo[0].processStat=="Y"){vendorCode=a.saleInfo[0].vendor
}else{vendorCode=a.saleInfo[0].vendorCode
}if(vendorCode==""){vendorCode="0000000000"
}}if(typeof e=="undefined"||e==""){var c={partnum:paserPartNumber(cat),catalogId:sn.catalogId,price:e,vendorCode:vendorCode,priceType:b};
FourPage.histroyHtml(c)
}else{$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemJsonInfoNew_"+cat+"_"+vendorCode+".html",type:"get",cache:true,async:false,dataType:"json",success:function(f){var g={partnum:f.itemInfo.partNumber,catalogId:sn.catalogId,price:e,priceType:b,vendorCode:vendorCode,name:f.itemInfo.itemDisplayName,imgVersion:f.imageVersion};
FourPage.histroyHtml(g)
}})
}}};
FourPage.histroyHtml=function(a){if(a!=null&&a.price!=""&&typeof a.name!="undefined"){myHistory+='<li sku="'+cat+'" com-partinfo="'+a.vendorCode+"-"+a.partnum+'" com-name="'+a.name+'" com-price="';
if((typeof a.priceType!="undefined"&&a.priceType!="")&&(a.priceType=="7-1"||a.priceType=="7-3")){myHistory+=""+a.price
}else{myHistory+=""+(a.price==""?"":parseFloat(a.price).toFixed(2))
}myHistory+='" com-check="false"><a name="item_'+sn.ninePartNumber+"_llls_pic0"+count+'" target="_blank" href="'+sn.elecProductDomain+"/"+a.vendorCode+"/"+cat+'.html"><img alt="'+a.name+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+a.vendorCode+"-"+a.partnum+"_1_160x160.jpg"+a.imgVersion+'"/></a><p class="title"><a name="item_'+sn.ninePartNumber+"_llls_word0"+count+'" target="_blank" href="'+sn.elecProductDomain+"/"+a.vendorCode+"/"+cat+'.html">'+a.name+'</a></p><p class="price"><i>&yen;</i>';
if((typeof a.priceType!="undefined"&&a.priceType!="")&&(a.priceType=="7-1"||a.priceType=="7-3")){myHistory+=""+a.price
}else{myHistory+=""+(a.price==""?"":parseFloat(a.price).toFixed(2))
}myHistory+="</p></li>";
if(sn.phoneFlag=="Y"&&hisCount<16){var b=a.vendorCode+"-"+a.partnum;
if(hisCount%iCompare.comNum.recentViewNum==0){iCompare.comHistory+='<ul class="pdt-list l clearfix">'
}iCompare.comHistory+='<li class="p-c-pdt clearfix" com-partinfo="'+b+'" com-name="'+a.name+'" com-price="';
if((typeof a.priceType!="undefined"&&a.priceType!="")&&(a.priceType=="7-1"||a.priceType=="7-3")){iCompare.comHistory+=""+a.price
}else{iCompare.comHistory+=""+(a.price==""?"":parseFloat(a.price).toFixed(2))
}iCompare.comHistory+='"';
iCompare.comHistory+='com-check="false">';
iCompare.comHistory+='<a href="'+sn.elecProductDomain+"/"+a.vendorCode+"/"+cat+'.html" target="_blank"><img src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+a.vendorCode+"-"+a.partnum+'_1_100x100.jpg" alt="'+a.name+'" class="l"/>';
iCompare.comHistory+='<div class="p-c-infos"><p class="title">'+a.name+'</p><p class="price"><i>¥</i>';
if((typeof a.priceType!="undefined"&&a.priceType!="")&&(a.priceType=="7-1"||a.priceType=="7-3")){iCompare.comHistory+=""+a.price
}else{iCompare.comHistory+=""+(a.price==""?"":parseFloat(a.price).toFixed(2))
}iCompare.comHistory+='</p></div></a><label class="pdt-cpr-checkbox"><input type="checkbox">加入对比</label></li>';
if((hisCount+1)%iCompare.comNum.recentViewNum==0){iCompare.comHistory+="</ul>"
}}hisSkus[hisCount]=cat;
hisCount++
}if(count<skus.length){count=count+1;
FourPage.mysetHistoryValue(skus,count,sn.cityId,sn.imageDomain,sn.storeId,sn.catalogId,"-7",historylen)
}else{myHistory+="</ul></div>";
$("#J-historyList").html(myHistory);
if(hisCount==0){$("#historyListDiv").hide();
if(productIds.length>0){sendSaMessage("ll-ls-01")
}}else{$("#historyListDiv").show()
}if(hisCount<6){$("#J-historyList .prev").css("visibility","hidden");
$("#J-historyList .next").css("visibility","hidden")
}if($("#J-historyList").find("li").length>0){$("#historyListDiv").show();
iFourth.listloop({wrap:"#J-historyList",loopBox:".scroll-box ul",step:{wide:5,narrow:4},scrollWidth:{wide:900,narrow:720},delay:5000})
}else{$("#historyListDiv").hide()
}}};
Recommend.historyRecHtml=function(a){iCompare.init();
$(".p-c-umaylike").attr("dataAble","true");
if(a!=""&&a.sugGoods!=undefined){$.each(a.sugGoods,function(f,g){if((g.resCode=="01"||g.resCode=="03")&&g.sceneId=="8-3"){var e="";
var b="";
var j=iCompare.comNum.umLikeNum;
var h="item_"+sn.partNumber.substring(9,18)+"_recllcnxhn_";
$.each(g.skus,function(k,m){g.skus[k].markPoint="item_"+(sn.partNumber).substring(9,18)+"_recllcnxhn_1-";
g.skus[k].eleName=g.skus[k].markPoint+(k+1)+"_p_"+g.skus[k].vendorId+"_"+(g.skus[k].sugGoodsCode).substring(9,18)+"_"+g.skus[k].handwork;
g.skus[k].eleHref=sn.elecProductDomain+"/"+g.skus[k].vendorId+"/"+getEffectivePartNumber(g.skus[k].sugGoodsCode)+".html#?src="+g.skus[k].markPoint+(k+1)+"_p_"+g.skus[k].vendorId+"_"+getEffectivePartNumber(g.skus[k].sugGoodsCode)+"_"+g.skus[k].handwork;
g.skus[k].eleSrc=sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+g.skus[k].vendorId+"-"+g.skus[k].sugGoodsCode+"_1_160x160.jpg";
g.skus[k].eleId="baoguang_recllcnxhn_1-"+(k+1)+"_"+g.skus[k].vendorId+"_"+(g.skus[k].sugGoodsCode).substring(9,18)+"_"+g.skus[k].handwork;
e=Math.floor(k/5)+1;
if(sn.prdType!="S"&&sn.compareCatalog=="0"&&j>1&&k<9){var l=m.vendorId+"-"+m.sugGoodsCode;
var n=(sn.vendorCode==""?"0000000000":sn.vendorCode)+"-"+sn.partNumber;
if((k+1)/j<10){if(k%j==0){b+='<ul class="pdt-list l clearfix">'
}b+='<li class="p-c-pdt clearfix" com-partinfo="'+l+'" com-name="'+m.sugGoodsName+'" com-price="'+m.price+'"';
if(l==n){b+='com-check="true">'
}else{b+='com-check="false">'
}b+='<a name="'+h+e+"-"+(k+1)+"_p_"+m.vendorId+"_"+m.sugGoodsCode.substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+m.vendorId+"/"+getEffectivePartNumber(m.sugGoodsCode)+".html#?src="+h+e+"-"+(k+1)+"_p_"+m.vendorId+"_"+getEffectivePartNumber(m.sugGoodsCode)+"_"+m.handwork+'">';
b+='<img src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+m.vendorId+"-"+m.sugGoodsCode+'_1_100x100.jpg" alt="'+m.sugGoodsName+'" class="l"/>';
b+='<div class="p-c-infos"><p class="title">'+m.sugGoodsName+'</p><p class="price"><i>¥</i> '+m.price+'</p></div></a><label class="pdt-cpr-checkbox"><input type="checkbox">加入对比</label></li>';
if(k%j==j-1){b+="</ul>"
}}}});
iCompare.comProcessMaylikeContent(b);
if(g.skus.length>5){$("#J-historyRec").siblings(".area-head").find(".history-rec-pager").show()
}else{$("#J-historyRec").siblings(".area-head").find(".history-rec-pager").hide();
$("#J-historyRec .prev").css("visibility","hidden");
$("#J-historyRec .next").css("visibility","hidden")
}var c=template("guessScriptContent",g);
$("#J-historyRec").html(c);
iFourth.listloop({wrap:"#J-historyRec",loopBox:".scroll-box ul",step:{wide:5,narrow:4},scrollWidth:{wide:900,narrow:720},delay:5000});
runAnalyseByClass("baoguang_recllcnxhn")
}else{$("#historyRecDiv").hide()
}});
if($("#J-historyRec").find("li").length>0){$("#historyRecDiv").show()
}else{$("#historyRecDiv").hide()
}}else{$("#historyRecDiv").hide()
}};
Recommend.noPublishItemsHtml=function(f){try{var a="";
var b="";
$.each(f.sugGoods,function(e,h){if((h.resCode=="01"||h.resCode=="03")&&h.sceneId=="11-2"){var g="item_"+sn.partNumber.substring(9,18)+"_recxjtj01n_1-";
$.each(h.skus,function(j,k){a+='<li><a name="'+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+getEffectivePartNumber(k.sugGoodsCode)+".html#?src="+g+(j+1)+"_p_"+k.vendorId+"_"+getEffectivePartNumber(k.sugGoodsCode)+"_"+k.handwork+'"><img alt="'+k.sugGoodsName+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+k.vendorId+"-"+k.sugGoodsCode+'_1_100x100.jpg"></a><p class="title"><a name="'+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" id="baoguang_recxjtj01n_1-'+(j+1)+"_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+getEffectivePartNumber(k.sugGoodsCode)+".html#?src="+g+(j+1)+"_c_"+k.vendorId+"_"+getEffectivePartNumber(k.sugGoodsCode)+"_"+k.handwork+'">'+k.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+k.price+"</p></li>"
})
}else{if((h.resCode=="01"||h.resCode=="03")&&h.sceneId=="10-1"){var g="item_"+sn.partNumber.substring(9,18)+"_recxjtj02n_1-";
$.each(h.skus,function(j,k){b+='<li><a name="'+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+getEffectivePartNumber(k.sugGoodsCode)+".html#?src="+g+(j+1)+"_p_"+k.vendorId+"_"+getEffectivePartNumber(k.sugGoodsCode)+"_"+k.handwork+'"><img alt="'+k.sugGoodsName+'" src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+k.vendorId+"-"+k.sugGoodsCode+'_1_100x100.jpg"></a><p class="title"><a name="'+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" id="baoguang_recxjtj02n_1-'+(j+1)+"_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+getEffectivePartNumber(k.sugGoodsCode)+".html#?src="+g+(j+1)+"_c_"+k.vendorId+"_"+getEffectivePartNumber(k.sugGoodsCode)+"_"+k.handwork+'">'+k.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+k.price+"</p></li>"
})
}}});
if(a!=""){$("#noPublish").html(a);
$("#J-slide2").show()
}if(b!=""){$("#noPublishLike").html(b);
$("#J-slide3").show()
}}catch(c){}runAnalyseByClass("baoguang_recxjtj01n");
iFourth.mainHeight()
};
var iCompare={comNum:{},comHistory:"",initFlag:true,initComPartNumbers:function(){var b=d("compare");
if(typeof b!="undefined"&&b!=null&&b!=""){var a=b.split("||");
$.each(a,function(e,f){var g=f.split("-");
var c=g[0]+"-"+paserPartNumber(g[1]);
sn.comPartNumbers.push(c)
})
}},init:function(){var b=d("compare");
if(typeof b!="undefined"&&b!=null&&b!=""){var a=b.split("||");
if(a.length!=sn.comPartNumbers.length||$(".p-c-umaylike").attr("dataAble")=="false"){sn.comPartNumbers=[];
$(".p-compare-panel .p-c-pdt").remove();
$(".p-compare-panel .add-prompt").show();
$.each(a,function(e,f){var h=f.split("-");
var c=h[0]+"-"+paserPartNumber(h[1]);
sn.comPartNumbers.push(c);
var g='<li class="p-c-pdt clearfix" compare-info="'+c+'"><a href="'+sn.elecProductDomain+"/"+h[0]+"/"+h[1]+'.html" target="_blank"><img src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+c+'_1_100x100.jpg" alt="" class="l"></a>';
g+='<a href="'+sn.elecProductDomain+"/"+h[0]+"/"+h[1]+'.html" target="_blank"><div class="p-c-infos"><p class="title"></p>';
g+='<p class="price"><i>¥</i></p></div></a><span class="b-delete-s ng-iconfont">&#xe627;</span></li>';
if($(".p-compare-panel .p-c-pdt").length>0){$(".p-compare-panel .p-c-pdt:last").after(g)
}else{$(".p-compare-panel .add-prompt:first").before(g)
}$(".p-compare-panel .add-prompt").eq(e).hide();
$("li[com-partinfo='"+c+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+c+"'],.p-c-recent-view li[com-partinfo='"+c+"']").find("input").prop("checked",true)
});
if(sn.comPartNumbers.length>0){iCompare.getComparePrice(sn.comPartNumbers,0);
iCompare.getCompareName(sn.comPartNumbers,0)
}}}else{sn.comPartNumbers=[];
$(".p-compare-panel .p-c-pdt").remove();
$(".p-compare-panel .add-prompt").show()
}},getComparePrice:function(f,c){var e=f[c].split("-");
var a=sn.lesCityId+sn.lesDistrictId+"01";
var b=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+e[1]+"_"+e[0]+"_"+sn.lesCityId+"_"+a+"_1_pc_getComPrice.vhtm";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getComPrice",success:function(h){if(c<f.length-1){iCompare.getComparePrice(f,c+1)
}if(h!=null&&typeof h.saleInfo!="undefined"&&h.saleInfo.length>0){var g="";
if(typeof h.saleInfo[0].promotionPrice!="undefined"){g=h.saleInfo[0].promotionPrice;
$(".p-compare-panel li[compare-info="+f[c]+"]").find(".price").html("<i>¥"+g+"</i>")
}}}})
},getCompareName:function(c,a){var b=c[a].split("-");
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfoNew_"+b[1]+"_"+b[0]+".html",type:"get",cache:true,async:false,dataType:"json",success:function(f){if(a<c.length-1){iCompare.getCompareName(c,a+1)
}var e=(f.itemDisplayName!=""&&f.itemDisplayName!=null)?f.itemDisplayName:((f.itemName!=""&&f.itemName!=null)?f.itemName:"");
$(".p-compare-panel li[compare-info="+c[a]+"]").find(".title").html("<i>"+e+"</i>")
}})
},initHistoryData:function(){if($(".p-c-umaylike").attr("dataAble")=="false"){FourPage.showMyHistory("com");
lazyElems["J-historyList"].enable=false;
$(".p-c-umaylike").attr("dataAble","true")
}if(iCompare.initFlag){iCompare.initFlag=false;
iCompare.comProcessSameKindContent()
}},comProcessMaylikeContent:function(b){if(sn.prdType!="S"&&sn.compareCatalog=="0"){if(b!=""){$(".p-c-umaylike .scroll-wrapper").html(b);
var a="";
for(var c=0;
c<$(".p-c-umaylike .scroll-wrapper ul").length;
c++){if(c==0){a+='<span class="page-dot current"></span>'
}else{a+='<span class="page-dot"></span>'
}}$(".p-c-umaylike .pages-dot").html(a);
iFourth.bindUMayLike();
for(var c=0;
c<sn.comPartNumbers.length;
c++){partInfo=sn.comPartNumbers[c];
$("li[com-partinfo='"+partInfo+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+partInfo+"'],.p-c-recent-view li[com-partinfo='"+partInfo+"']").find("input").prop("checked",true)
}}else{$(".p-c-umaylike").hide()
}}},comProcessSameKindContent:function(){if(sn.prdType!="S"&&sn.compareCatalog=="0"){$(".p-c-recent-view").hide();
$("#tab_recent_view").hide();
var a=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+sn.passPartNumber+"&catalogueId="+sn.categoryId+"&cityId="+sn.cityId+"&sceneIds=1-6&price="+sn.promotionPrice+"&count=15";
$.ajax({url:a,type:"GET",cache:true,async:false,dataType:"jsonp",jsonpCallback:"processSameKindContent",success:function(h){if(h&&h.sugGoods&&h.sugGoods.length>0){for(var f in h.sugGoods){var g=h.sugGoods[f];
if(g.resCode!="02"&&g.skus.length>0){if(g.sceneId=="1-6"){var e="";
for(var c in g.skus){if(c%iCompare.comNum.recentViewNum==0){e+='<ul class="pdt-list l clearfix">'
}var k=g.skus[c];
e+='<li class="p-c-pdt clearfix" com-partinfo="'+k.vendorId+"-"+k.sugGoodsCode+'" com-name="'+k.sugGoodsName+'" com-price="'+(k.price==""?"":parseFloat(k.price).toFixed(2))+'"';
e+='com-check="false">';
e+='<a href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+getEffectivePartNumber(k.sugGoodsCode)+'.html" target="_blank"><img src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+k.vendorId+"-"+k.sugGoodsCode+'_1_100x100.jpg" alt="'+k.sugGoodsName+'" class="l"/>';
e+='<div class="p-c-infos"><p class="title">'+k.sugGoodsName+'</p><p class="price"><i>￥</i>'+(k.price==""?"":parseFloat(k.price).toFixed(2))+'</p></div></a><label class="pdt-cpr-checkbox"><input type="checkbox">加入对比</label></li>';
if((c==g.skus.length-1)||((parseInt(c)+1)%iCompare.comNum.recentViewNum==0)){e+="</ul>"
}}$(".p-c-recent-view .scroll-wrapper").html(e);
var b="";
for(var f=0;
f<$(".p-c-recent-view .scroll-wrapper ul").length;
f++){if(f==0){b+='<span class="page-dot current"></span>'
}else{b+='<span class="page-dot"></span>'
}}$(".p-c-recent-view .pages-dot").html(b);
$("#tab_recent_view").show();
iFourth.bindUMayLike();
for(var f=0;
f<sn.comPartNumbers.length;
f++){partInfo=sn.comPartNumbers[f];
$("li[com-partinfo='"+partInfo+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+partInfo+"'],.p-c-recent-view li[com-partinfo='"+partInfo+"']").find("input").prop("checked",true)
}}}}}},error:function(){}})
}if(!$("#compare").is(":hidden")){iFourth.bindProductCompare()
}},comProcessHistoryContent:function(){if(sn.prdType!="S"&&sn.compareCatalog=="0"){if(this.comHistory!=""){$(".p-c-recent-view .scroll-wrapper").html(this.comHistory);
var a="";
for(var b=0;
b<$(".p-c-recent-view .scroll-wrapper ul").length;
b++){if(b==0){a+='<span class="page-dot current"></span>'
}else{a+='<span class="page-dot"></span>'
}}$(".p-c-recent-view .pages-dot").html(a);
iFourth.bindUMayLike();
for(var b=0;
b<sn.comPartNumbers.length;
b++){partInfo=sn.comPartNumbers[b];
$("li[com-partinfo='"+partInfo+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+partInfo+"'],.p-c-recent-view li[com-partinfo='"+partInfo+"']").find("input").prop("checked",true)
}}else{$(".p-c-recent-view").hide();
$("#tab_recent_view").hide()
}}if(!$("#compare").is(":hidden")){iFourth.bindProductCompare()
}},processCprCheckData:function(g){iCompare.init();
iCompare.initHistoryData();
var e="";
var a="";
var c="";
if(typeof g!="undefined"){e=g.attr("com-partinfo");
a=g.attr("com-name");
c=g.attr("com-price");
if(this.checkInCompare(e,true)){$("li[com-partinfo='"+e+"']").attr("com-check","false");
$(".p-compare-panel .p-c-pdt[compare-info='"+e+"']").remove();
$(".p-c-umaylike li[com-partinfo='"+e+"'],.p-c-recent-view li[com-partinfo='"+e+"']").find("input").prop("checked",false);
this.processPartBlock();
return
}else{if($(".p-compare-panel .p-c-pdt").length==4){$(".prod-comp-prompt-dialog").show();
setTimeout(function(){$(".prod-comp-prompt-dialog").hide()
},2000);
$(".p-c-umaylike li[com-partinfo='"+e+"'],.p-c-recent-view li[com-partinfo='"+e+"']").find("input").prop("checked",false);
return
}sn.comPartNumbers.push(e);
$("li[com-partinfo='"+e+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+e+"'],.p-c-recent-view li[com-partinfo='"+e+"']").find("input").prop("checked",true)
}}else{if($(".p-compare-panel .p-c-pdt").length==4){$(".prod-comp-prompt-dialog").show();
setTimeout(function(){$(".prod-comp-prompt-dialog").hide()
},2000);
return
}e=(sn.vendorCode==""?"0000000000":sn.vendorCode)+"-"+sn.partNumber;
$("li[com-partinfo='"+e+"']").attr("com-check","true");
$(".p-c-umaylike li[com-partinfo='"+e+"'],.p-c-recent-view li[com-partinfo='"+e+"']").find("input").prop("checked",true);
if(!this.checkInCompare(e)){a=sn.itemDisplayName;
c=sn.promotionPrice;
sn.comPartNumbers.push(e)
}else{return
}}var f=e.split("-");
var b='<li class="p-c-pdt clearfix" compare-info="'+e+'"><a href="'+sn.elecProductDomain+"/"+f[0]+"/"+getEffectivePartNumber(f[1])+'.html" target="_blank"><img src="'+sn.newImageDomianDir+"/uimg/b2c/newcatentries/"+e+'_1_100x100.jpg" alt="'+a+'" class="l"></a>';
b+='<a href="'+sn.elecProductDomain+"/"+f[0]+"/"+getEffectivePartNumber(f[1])+'.html" target="_blank"><div class="p-c-infos"><p class="title">'+a+"</p>";
b+='<p class="price"><i>¥</i>'+c+'</p></div></a><span class="b-delete-s ng-iconfont">&#xe627;</span></li>';
if($(".p-compare-panel .p-c-pdt").length>0){$(".p-compare-panel .p-c-pdt:last").after(b)
}else{$(".p-compare-panel .add-prompt:first").before(b)
}FourPage.setProductCompareCookie(sn.comPartNumbers);
this.processPartBlock()
},checkInCompare:function(c,e){var a=false;
for(var b=0;
b<sn.comPartNumbers.length;
b++){if(sn.comPartNumbers[b]==c){a=true;
if(typeof e!="undefined"&&e){sn.comPartNumbers.splice(b,1);
FourPage.setProductCompareCookie(sn.comPartNumbers)
}break
}}return a
},bindCompareBtn:function(){var a="";
for(var b=0;
b<4;
b++){if(b<sn.comPartNumbers.length){var c=sn.comPartNumbers[b].split("-");
a+=c[0]+"-"+getEffectivePartNumber(c[1])
}else{a+="0-0"
}if(b!=3){a+="_"
}}window.open(protocol+sn.domain+"/prdCom/"+a+".html")
},clearPart:function(a){this.checkInCompare(a,true);
$("li[com-partinfo='"+a+"']").attr("com-check","false");
$(".p-c-umaylike li[com-partinfo='"+a+"'],.p-c-recent-view li[com-partinfo='"+a+"']").find("input").prop("checked",false)
},clearAllPart:function(){for(var a=0;
a<sn.comPartNumbers.length;
a++){partInfo=sn.comPartNumbers[a];
$("li[com-partinfo='"+partInfo+"']").attr("com-check","false");
$(".p-c-umaylike li[com-partinfo='"+partInfo+"'],.p-c-recent-view li[com-partinfo='"+partInfo+"']").find("input").prop("checked",false)
}sn.comPartNumbers=[];
FourPage.setProductCompareCookie("")
},processPartBlock:function(){var a=$(".p-compare-panel .p-c-pdt").length;
for(var b=0;
b<4;
b++){if(b<a){$(".p-compare-panel .add-prompt").eq(b).hide()
}else{$(".p-compare-panel .add-prompt").eq(b).show()
}}}};
FourPage.setProductCompareCookie=function(g){var a="";
var b=d("compare");
var f={};
if(typeof b!="undefined"&&b!=null&&b!=""){var e=b.split("||");
for(var h=0;
h<e.length;
h++){f[e[h]]=e[h]
}}if(g&&g.length>0){for(var h=0;
h<g.length;
h++){var l=g[h].split("-");
var j=l[0]+"-"+getEffectivePartNumber(l[1]);
if(h!=0){a+="||"
}a+=j
}}var k=new Date();
var c=!!window.ActiveXObject;
if(c){document.cookie="compare="+a+"; expires=At the end of the Session;path=/;domain="+sn.cookieDomain
}else{document.cookie="compare="+a+"; expires=0;path=/;domain="+sn.cookieDomain
}};
FourPage.runDapushWhenReady=function(){if(typeof(_dapush)=="function"){_dapush()
}else{setTimeout(FourPage.runDapushWhenReady,1000)
}};
FourPage.addProductFavorite=function(){var b="0000000000";
var a="N";
var c="";
if(sn.vendorCode!=""){if(isSpecialSale()){c="1";
b=sn.vendor
}else{if(sn.hwgShopFlag){c="2";
b=sn.vendorCode;
if(sn.shopType=="6"){a="Y"
}}else{b=sn.vendorCode
}}}mySuning.add2ProductFavorite(sn.partNumber,b,"productDetail","","prd_"+sn.itemId,c,a,refreshLogin)
};
FourPage.subscribeArrivalNotice=function(){var b="0000000000";
if(sn.vendorCode!=""){b=sn.vendorCode
}var c="";
var a="N";
if(isSpecialSale()){c="1";
b=sn.vendor
}else{if(sn.hwgShopFlag){c="2";
if(sn.shopType=="6"){a="Y"
}}}mySuning.subscribeArrivalNotice(sn.partNumber,b,"productDetail",c,a,refreshLogin)
};
FourPage.shareWb=function(){sn.productShareName=sn.itemDisplayName.length>100?(sn.itemDisplayName.substring(0,100)+"..."):sn.itemDisplayName;
var h=window.location+"";
var n=h.substr(0,h.indexOf("htm"))+"html";
var c=encodeURI(n);
var q=encodeURI(sn.productShareName);
var e=encodeURI(sn.productShareName);
var l="";
var j="";
if(sn.promotionPrice!=null&&sn.promotionPrice!=""){l=sn.productShareName+"，易购价：￥"+sn.promotionPrice+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）";
j=sn.productShareName+"，易购价：¥"+sn.promotionPrice+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）"
}else{l=sn.productShareName+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）";
j=sn.productShareName+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）"
}q=encodeURI(l);
_ts=encodeURI(sn.productShareName);
$(".kaixin").attr("href","http://www.kaixin001.com/repaste/bshare.php?rtitle="+q+"&rurl="+c+"&from=maxthon");
$(".sina").attr("href","http://v.t.sina.com.cn/share/share.php?url="+c+"&appkey=400813291&title="+q+"&pic=");
var g="推荐苏宁电器网上商城(suning.cn) "+document.title+"价格便宜，评价也不错，快去看看详细介绍吧\n"+window.location+"\n苏宁承诺：所售商品均为正品行货，带发票，凭质保证书及发票可全国联保";
$(".douban").attr("href","http://www.douban.com/recommend/?url="+c+"&title="+_ts+"&comment="+encodeURI(g));
$(".renren").attr("href","http://share.renren.com/share/buttonshare.do?link="+c+"&title="+q);
var b=encodeURI("65e3731f449e42a484c25c668160b355");
var k=encodeURI(sn.pic);
var m=encodeURI("http://www.suning.com");
var o="http://v.t.qq.com/share/share.php?title="+q+"&url="+c+"&appkey="+b+"&site="+m+"&pic="+k;
$(".tengxun").attr("href",o);
$(".souhu").attr("href","http://t.sohu.com/third/post.jsp?&url="+c+"&title="+q+"&content=utf-8&pic=");
var a={url:location.href,desc:"",summary:"",title:j,site:"苏宁易购",pics:sn.pic};
var r=[];
for(var f in a){r.push(f+"="+encodeURIComponent(a[f]||""))
}$(".qzone").attr("href","http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+r.join("&"))
};
FourPage.subscribePriceNotice=function(){var c=sn.vendorCode;
partNumber=sn.partNumber;
var b=sn.promotionPrice;
if(sn.sellType==1&&typeof sn.phonePrice!="undefined"){b=sn.phonePrice;
partNumber=sn.phonePartNumber
}var f="";
var a="N";
if(isSpecialSale()){f="1";
c=sn.vendor
}else{if(sn.hwgShopFlag){f="2";
if(sn.shopType=="6"){a="Y"
}}}var e=window.location.href;
if(typeof e!="undefined"&&e.indexOf("#")>0){window.location.href=e.substring(0,e.indexOf("#"))+"#unknown"
}mySuning.subscribePriceNotice(partNumber,c,b,"productDetail",f,a,refreshLogin)
};
FourPage.showJubao=function(){var a=false;
if(sn.showJubao=="0"&&sn.isCShop&&!sn.hwgShopFlag&&!sn.swlShopFlag&&!sn.csSwlShopFlag){var c=sn.jubaoID.split(",");
for(var b in c){if(c[b]==sn.catenIds){a=true
}}}if(a){$("#reportbtn").show()
}else{$("#reportbtn").hide()
}};
FourPage.reportJubao=function(){$("#reportForm").submit()
};
autoParts.isSelected="0";
autoParts.storeNumber="";
autoParts.mountType="";
autoParts.serviceOnclick=function(c,a,b){$("#buyNowAddCart").show();
$("#addCart").removeClass().addClass("btn-orange-buy").html("加入购物车");
autoParts.partNumber=c;
autoParts.vendorCode=a;
if(b=="02"){if($.trim($("#toHomeServiceInfo").html())!=null&&$.trim($("#toHomeServiceInfo").html())!=""){$("#storeService").hide();
$("#toHomeService").show()
}else{$("#storeService").hide();
autoParts.toHomeOnclick(c,a)
}autoParts.mountType="1"
}else{if(b=="03"){$("#toHomeService").hide();
$("#storeService").show();
$("#getStoreService").attr("onclick","autoParts.toStoreOnclick('"+c+"','"+a+"','"+b+"');");
autoParts.mountType="2"
}else{autoParts.storeNumber="";
autoParts.mountType="";
$("#toHomeService").hide();
$("#storeService").hide()
}}};
autoParts.toStoreOnclick=function(e,a,b){if($.trim($("#car_parts_dlg").html())!=""){carServiceFn.popBox("#popBoxCar");
return
}var c=sn.mountType=="7"?"1":"2";
if(c=="1"){e=sn.partNumber
}$.ajax({url:sn.autoUrl+"/carService.jsonp?cmmdtyCode="+e+"&supplierCode="+a+"&mountType="+b+"&cityCode="+sn.lesCityId+"&districtCode="+sn.lesCityId+sn.lesDistrictId+"01&cmmdtyType="+c+"&jsonpCallback=toStoreCallback",dataType:"jsonp",cache:false,contentType:"application/x-www-form-urlencoded; charset=utf-8",jsonpCallback:"toStoreCallback",success:function(f){if(f&&f.html){$("#car_parts_dlg").html(f.html).show()
}},error:function(){}})
};
autoParts.toHomeOnclick=function(c){var a=sn.lesCityId+sn.lesDistrictId+"01";
var b=$(c).attr("sku");
url=sn.icpsDomain+"/icps-web/getAllPriceFourPageV1/"+b+"_"+sn.lesCityId+"_"+a+"_1_"+sn.vendorCode+"__pds_toHomePrice.jsonp";
$.ajax({url:url,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"toHomePrice",success:function(e){if(e&&typeof e.saleInfo!="undefined"&&e.saleInfo.length>0&&(e.saleInfo[0].invStatus=="1"||e.saleInfo[0].invStatus=="4")&&e.saleInfo[0].promotionPrice!=""&&e.saleInfo[0].priceType=="0"){var f=sn.itemDisplayName.length>15?sn.itemDisplayName.substring(0,15)+"...":sn.itemDisplayName;
$("#toHomeServiceInfo").html("<p>"+f+"<span class='ins-cost ml10'>&yen<em>"+e.saleInfo[0].promotionPrice+"</em></span></p>");
$(c).show();
$("#autoPartArea").show()
}else{$("#toHomeService").hide();
$(c).hide()
}},error:function(){$("#toHomeService").hide();
$(c).hide()
}})
};
autoParts.toStoreIcpsService=function(c){var a=sn.lesCityId+sn.lesDistrictId+"01";
var b=$(c).attr("sku");
url=sn.icpsDomain+"/icps-web/getAllPriceFourPageV1/"+b+"_"+sn.lesCityId+"_"+a+"_1_"+sn.vendorCode+"_03_pds_toStoreIcpsService.jsonp";
$.ajax({url:url,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"toStoreIcpsService",success:function(e){if(e&&typeof e.saleInfo!="undefined"&&e.saleInfo.length>0&&(e.saleInfo[0].invStatus=="1"||e.saleInfo[0].invStatus=="4")&&e.saleInfo[0].promotionPrice!=""&&e.saleInfo[0].priceType=="0"){$(c).show();
$("#getStoreService").html('请选择您所需要服务的门店 <i class="ng-iconfont ">&#xe62e;</i>');
$("#autoPartArea").show()
}else{$("#storeService").hide();
$(c).hide()
}},error:function(){$("#storeService").hide();
$(c).hide()
}})
};
autoParts.storeServiceCallBack=function(b){if(b){iFourth.carParts.closeWarmBox();
autoParts.isSelected="1";
autoParts.storeNumber=b.partnumber;
var c=b.shopName;
b.price=b.price.replace("￥","");
if(b.shopName.length>15){c=b.shopName.substring(0,15)+"..."
}var a='<span class="shop-txt">'+c+'</span><span class="price"><i>¥</i>'+b.price+'</span> <i class="ng-iconfont ">&#xe62e;</i>';
$("#getStoreService").attr("title",b.shopName+b.price);
$("#getStoreService").html(a);
iFourth.carParts.setSelShopWidth();
if(sn.mountType=="03"&&b.price.indexOf(".")>-1){$(".mainprice").html("<i>¥</i>"+b.price.split(".")[0]+".<span>"+b.price.split(".")[1]+"</span>")
}}};
autoParts.cartfilterService=function(){for(var a=0;
a<$("#autoPartArea").find("li").length;
a++){var b=$("#autoPartArea").find("li")[a];
if($(b).attr("mounttype")=="00"){$(b).attr("class","selected")
}else{if($(b).attr("mounttype")=="02"){$(b).attr("class","");
autoParts.toHomeOnclick(b)
}else{if($(b).attr("mounttype")=="03"){$(b).attr("class","");
autoParts.toStoreIcpsService(b)
}}}}};
function initSpecialSale(){$("#curShopName").text("苏宁自营");
$("#fix-store h3").attr("title","苏宁自营");
$("#fix-store h3").html("");
$("#fix-store h3").html("苏宁自营");
var a='<span>	<a rel="nofollow" class="zpbz no-link">     <i class="icon"></i>100%正品    <span class="s-tooltip fixed-width">        <i class="s-t-lion"></i>100%品牌授权，100%正品采购。苏宁特卖所售商品均从品牌方、代理商、品牌分支机构及国际品牌驻中国办事处等正规渠道采购，并与之签订战略正品采购协议。我们对供应商的资质进行严格审核，五证及产品质检报告，缺一不可。        <span class="tri-pointer-up">          <i class="inner-tri"></i>        </span>    </span>    </a></span>';
if(sn.isSevenDayOkForTm){a+='<span>	<a rel="nofollow" class="wly no-link">     <i class="icon"></i>7天无理由退货    <span class="s-tooltip">        <i class="s-t-lion"></i>会员从苏宁特卖购买的商品自签收之日起，七天无理由放心退        <span class="tri-pointer-up">          <i class="inner-tri"></i>        </span>    </span>    </a></span>'
}else{a+='<span>	<a rel="nofollow" class="zc7t-notui">     <i class="icon"></i>不支持7天无理由退货    <span class="s-tooltip">        <i class="s-t-lion"></i>该商品不支持7天无理由退货        <span class="tri-pointer-up">          <i class="inner-tri"></i>        </span>    </span>    </a></span>'
}a+='<span>	<a rel="nofollow" class="yunfeifan no-link">     <i class="icon"></i>退货返运费    <span class="s-tooltip">        <i class="s-t-lion"></i>退货产生的运费，补贴10元苏宁特卖消费券        <span class="tri-pointer-up">          <i class="inner-tri"></i>        </span>    </span>    </a></span><span>	<a rel="nofollow" class="jsd no-link">     <i class="icon"></i>急速送达    <span class="s-tooltip">        <i class="s-t-lion"></i>保证订单下达后急速发货并送达        <span class="tri-pointer-up">          <i class="inner-tri"></i>        </span>    </span>    </a></span><span id="returnGoods"  style="display: none;"><a  rel="nofollow" href="//help.suning.com/page/channel-376.htm" target="_blank" class="replace"><i class="icon"></i>300天坏就换</a></span>';
$("#proinfo-id").html("");
$("#proinfo-id").html(a)
}function processError(){$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("c-f00");
$("#c_kucun").html("本地区暂不销售");
processNotSale()
}o2oParts.initService=function(){if(!sn.o2oFlag){return
}else{if(o2oItem.salesChannel=="10"){sn.hasStorage="Z";
return
}}if(o2oItem.salesChannel=="99"){sn.hasElectronic="N";
sn.hasExpress="N";
if(o2oItem&&o2oItem.electronicVoucher=="Y"&&o2oItem.bookingShop=="Y"&&(sn.invStatus=="1"||sn.invStatus=="4")){sn.hasElectronic="Y";
if((sn.prdType!="S"||gProduct.gors!=0)&&o2oItem.priceType=="02"&&(!sn.usePrice||parseFloat(sn.usePrice)<parseFloat(sn.promotionPrice))){sn.hasElectronic="N";
sn.hasStorage="Z"
}}if(o2oItem.expressDoor=="Y"&&sn.hasStorage=="Y"){sn.hasExpress="Y"
}var a="";
if(sn.hasElectronic=="Y"&&sn.hasExpress=="Y"){a+='<li class="sh-item" id="o2oElectronic"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_dzdh_click">电子兑换券<br><i></i></a></li><li class="sh-item" id="o2oExpress"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_pssm_click">配送上门<br><i></i></a></li>';
runCustomExpoData("item_"+sn.ninePartNumber+"_dzdh_show");
runCustomExpoData("item_"+sn.ninePartNumber+"_pssm_show")
}else{if(sn.hasElectronic=="Y"){a+='<li class="sh-item" id="o2oElectronic"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_dzdh_click">电子兑换券<br><i></i></a></li>';
runCustomExpoData("item_"+sn.ninePartNumber+"_dzdh_show")
}else{if(sn.hasElectronic=="N"&&sn.hasExpress=="N"){sn.hasStorage="Z"
}}}if(a!=""){if(sn.hasStorage!="Y"){sn.hasStorage="Y"
}$("#o2oItem .sh-list:eq(0)").html(a);
$("#o2oItem").show();
iFourth.o2o();
if(sn.hasElectronic=="Y"&&sn.hasExpress!="Y"){$("#o2oElectronic").click();
if($("#o2oElectronic").attr("expoData")!="1"){$("#o2oElectronic").attr("expoData","1");
runCustomExpoData("item_"+sn.ninePartNumber+"_xzmd_show")
}}o2oParts.select()
}}};
o2oParts.select=function(){if(sn.prdType!="S"||sn.passPartNumber!=sn.partNumber){$("#usePrice").remove();
if($("#o2oElectronic").length>0&&$("#o2oElectronic").hasClass("current")){if($("#o2oElectronic").attr("expoData")!="1"){$("#o2oElectronic").attr("expoData","1");
runCustomExpoData("item_"+sn.ninePartNumber+"_xzmd_show")
}$(".mainprice").html("<i>¥</i>"+sn.promotionPrice.split(".")[0]+".<span>"+sn.promotionPrice.split(".")[1]+" </span>");
if(o2oItem.priceType=="02"&&parseFloat(sn.usePrice)>parseFloat(sn.promotionPrice)){$(".mainprice").after('<span class="deposit-info" id="usePrice">(可抵 '+sn.usePrice+" 元)</span>")
}$("#c_kucun").hide()
}else{if($("#o2oExpress").length>0&&$("#o2oExpress").hasClass("current")){$("#c_kucun").show()
}}}};
o2oParts.toStoreOnclick=function(){if($.trim($("#o2o_parts_dlg").html())!=""){storeServiceFn.popBox("#popBoxCar");
return
}$.ajax({url:sn.autoUrl+"/storeService.jsonp?cmmdtyCode="+sn.passPartNumber+"&supplierCode="+sn.vendorCode+"&provinceCode="+sn.provinceCode+"&cityCode="+sn.lesCityId+"&districtCode="+sn.lesCityId+sn.lesDistrictId+"&jsonpCallback=toStoreService",dataType:"jsonp",cache:false,contentType:"application/x-www-form-urlencoded; charset=utf-8",jsonpCallback:"toStoreService",success:function(a){if(a&&a.html){$("#o2o_parts_dlg").html(a.html).show()
}},error:function(){}})
};
o2oParts.cartCheck=function(){var a=true;
if(sn.hasElectronic!="Y"||(o2oItem.salesChannel!="50"&&o2oItem.salesChannel!="99")){return a
}if($("#o2oItem li.current").length==0){Util.alertErrorBox("请选择购买方式");
a=false
}else{if($("#o2oElectronic").hasClass("current")&&!$("#selectStore .sh-item").hasClass("current")){Util.alertErrorBox("请选择提货门店");
a=false
}}return a
};
o2oParts.storeServiceCallBack=function(a){if(a&&a.storeCode&&a.storeName){$("#selectStore").attr("data-id",a.storeCode);
$("#selectStore a").html(a.storeName);
$("#selectStore .sh-item").addClass("current")
}};
jiwu.qualityControl=function(){if(!sn.suningJiWuFlag){return
}$.ajax({url:sn.showMUrl+"/higou/jiwu/jsonp/pinkong_"+sn.vendorCode+"_"+sn.partNumber+"_qualityControlBack.html",dataType:"jsonp",cache:false,jsonpCallback:"qualityControlBack",success:function(c){if(!jQuery.isEmptyObject(c)&&!jQuery.isEmptyObject(c.data)){var b=c.data.iconUrl.replace("http://","//");
var e='<div class="inspection-report"><div class="title"><span>质检报告</span></div><div class="wrap"><div class="list"><div class="list-title"><img src="'+b+'" alt="sss"><span>机构认证：'+c.data.qualityOrganizationName+'</span></div><ul><li title="'+c.data.titleOne+":"+c.data.titleOneDescription+'">'+c.data.titleOne+":"+c.data.titleOneDescription+'</li><li title="'+c.data.titleTwo+":"+c.data.titleTwoDescription+'">'+c.data.titleTwo+":"+c.data.titleTwoDescription+'</li></ul></div></div><div class="report-image">';
if(!jQuery.isEmptyObject(c.data.imageUrl)){for(var a=0;
a<c.data.imageUrl.length;
a++){e+='<img onload="if(this.width>750){this.height=this.height*(750.0/this.width); this.width = 750;}" src="'+c.data.imageUrl[a]+'" >'
}}e+="</div></div>";
$("#J-procon-jwpk").html(e);
$("#jiwuPingkong").show()
}else{$("#jiwuPingkong").hide()
}},error:function(){$("#jiwuPingkong").hide()
}})
};/******************************************************
 *
 * City component
 * Requires jQuery
 * Author  : 13082338, SUNING
 * Time    : 2013
 * Modified: 2014-02-08
 *
 ******************************************************/
/**
 * 业务js压缩
 */
/**
 * 	Upgrade By lige @ 2013.12.4
 *	V1.0
 */
var ECity = ECity || {};

ECity.setting = {};

/**
 * ECity中的data,数据中心
 */
ECity.setting.data = {
    cookie : {
        cookieKey : "SN_CITY",//cookie名称，（可自定义）
        cookieVale : "",//cookie值域
        hostName : "",//主机名
        cityOuterSepatator : "|",//cookie中各个城市信息的区分符
        cityInnerSeparator : "_",//每个城市省市区，以及mdmId,commerceId,name等区分符
        cookiePath : "",//cookie路径
//			cookieTime : "; max-age = ",//cookie存活时间
        cookieTime : "",//cookie存活时间
        cookieDomain : "",//cookie域
        oldCookieCityKey : "cityId",//老cookie中的城市id
        oldCookieDistrictKey : "districtId",//老cookie中的地区id
        oldCookieCityValue : "",
        oldCookieDistrictValue : "",
        hostDomain:"",
        protocol:"",
        port:"",
        root:"",
        protocolSepatator:"//",
        portSepatator:":",
        root : "/ip-web"

    },
    url :{
        cookieUrl : "",//根据ip定位的url
        cityArrayUrl : "",//获取市信息列表的url
        districtArrayUrl : "",//获取区信息列表的url
        districtUrl : "",//根据区mdmId获取区信息的列表,
        lesUrl : ""//根据区mdmId获取区信息的列表
    },
    flag : {
        user : "1",//用户选择
        sys : "2", //系统默认
        sys_user : "3", //系统默认+用户选择（只在三级页面，用户切换城市时会是这个标志）
        fail_query : "4",//定位不到
        sys_error : "5"//系统错误

    },
    type : {
        pc : "pc",//省市
        pcd : "pcd"//省市区
    },

    city : {
        cityArray : [],//cookie中的城市信息数组[{省市区mdmId,commerceId,名称},{},{}]
        cityType : "",//页面的城市类型
        cityInfo : {}//页面展示的城市信息
    },
    init : function(uicityType){
        var data = ECity.setting.data;
        var cookie = data.cookie;
        var url = data.url;
        var city = data.city;
        var type = data.type;

        //本机的域名
        cookie.hostName = document.location.hostname;
        cookie.hostDomain = document.location.hostname;
        cookie.protocol = document.location.protocol;
        cookie.port = document.location.port;
        //设置cookie存活时间 1年
//			cookie.cookieTime += 365*24*60*60;
        var currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear()+ 1);
        cookie.cookieTime = "; expires = "+currentDate.toUTCString();
        //设置cookie路径
        cookie.cookiePath = "; path = /";

        //设置cookie域
//			if(cookie.hostName.indexOf(".suning.com") != -1){
//				cookie.cookieDomain = "; domain =.suning.com";// 解决跨域跟踪问题
//				cookie.hostName = protocol+protocolSepatator+hostDomain;
//			} else if (cookie.hostName.indexOf(".cnsuning.com") != -1){
//				cookie.cookieDomain = "; domain =.cnsuning.com";// 解决跨域跟踪问题
//				cookie.hostName = "http://ipservicesit.cnsuning.com/ip-web";
////				cookie.hostName = "http://localhost:8080/ip-web";
//			} else {
//				cookie.cookieDomain += cookie.hostName;//本机器
//				cookie.hostName = protocol+protocolSepatator+hostDomain+portSepatator+port+root;
//			}

        if(cookie.hostName.indexOf(".suning.com") != -1){
            cookie.cookieDomain = "; domain =.suning.com";// 解决跨域跟踪问题
            cookie.hostName = cookie.protocol+"//ipservice.suning.com";
        } else if (cookie.hostName.indexOf(".cnsuning.com") != -1){
            cookie.cookieDomain = "; domain =.cnsuning.com";// 解决跨域跟踪问题
            if(cookie.hostName.indexOf("pre")!=-1){
                cookie.hostName = cookie.protocol+'//ipservicepre.cnsuning.com';
//					cookie.hostName ="http://localhost:8080/ip-web";
            }else{
                cookie.hostName = cookie.protocol+'//ipservicepre.cnsuning.com';
            }
//				cookie.hostName = "http://ipservicepre.cnsuning.com";
        } else {
            cookie.cookieDomain += cookie.hostName;//本机器
            cookie.hostName = "http://localhost:8080/ip-web";
        }

        //初始化所用的url
        url.cookieUrl = cookie.hostName + "/ipQuery.do?";
        url.provinceArrayUrl = cookie.hostName + "/provinceList-";
        url.cityArrayUrl = cookie.hostName + "/cityList-";
        url.districtArrayUrl = cookie.hostName + "/districtList-";
        url.districtUrl = cookie.hostName + "/districtDetail-";
        url.lesUrl = cookie.hostName + "/cityAndDistrict-";
        url.provinceAndCityUrl = cookie.hostName + "/provinceAndCity-";
        url.cityMapById = cookie.hostName + "/cityMapById-";
        url.reportIpUrl = cookie.hostName + "/report/reportIp.do?";
        url.reportSwitchUrl = cookie.hostName + "/report/querySwitch.htm";
        //初始化城市类型
        city.cityType = uicityType?type.pc:type.pcd;
    }
};



/**
 * ECity中的util
 */
ECity.setting.util = {

    /**
     * 判断两个城市对象是否相等（依据是省、市、区的MDMId）
     * @param obj_1
     * @param obj_2
     * @return boolean
     */
    equalsByPCD : function(obj_1,obj_2){
        //obj为null或undefined返回false
        if(!obj_1 || !obj_2 ){
            return false;
        }
        if(obj_1.provinceMDMId == obj_2.provinceMDMId && obj_1.cityMDMId == obj_2.cityMDMId && obj_1.districtCommerceId == obj_2.districtCommerceId){
            return true;
        }
        return false;
    },


    /**
     * 判断两个城市对象是否相等（依据是省、市MDMId）
     * @param obj_1
     * @param obj_2
     * @return boolean
     */
    equalsByPC : function(obj_1,obj_2){
        //obj为null或undefined返回false
        if(!obj_1 || !obj_2 ){
            return false;
        }
        if(obj_1.provinceMDMId == obj_2.provinceMDMId && obj_1.cityMDMId == obj_2.cityMDMId){
            return true;
        }
        return false;
    },

    /**
     * 用来判断对象是否为空
     * @param obj
     * @return boolean
     */
    isEmpty : function(obj){
        //如果对象为空，返回true
        if(!obj){
            return true;
        }
        for(var name in obj){
            if(typeof obj[name] != "undefined"){//允许null值
                return false;
            }
        }
        return true;
    },

    /**
     * 判断cityId和districtId是否在cityArray中
     *
     * @param cityId,老cookie中的cityId
     * @param districtId,老cookie中的districitId
     * @param cityArray,新cookie对应的城市数组
     * 如果存在返回存在的对象,否则返回null
     *
     */
    equalsByCD : function(cityId, districtId, cityArray){
        if(!cityId){
            return null;
        }
        if(!districtId){
            return null;
        }
        if(!cityArray || cityArray.length == 0){
            return null;
        }
        for(var city in cityArray){
            if(cityId === cityArray[city].cityCommerceId && districtId === cityArray[city].districtCommerceId){
                return cityArray[city];
            }
        }
        return null;
    },

    /**
     * 判断cityId和districtId是否在cityArray中
     *
     * @param cityId,老cookie中的cityId
     * @param cityArray,新cookie对应的城市数组
     * 如果存在返回存在的对象,否则返回null
     *
     */
    equalsByC : function(cityId, cityArray){
        if(!cityId){
            return null;
        }
        if(!cityArray || cityArray.length == 0){
            return null;
        }
        for(var city in cityArray){
            if(cityId === cityArray[city].cityCommerceId){
                return cityArray[city];
            }
        }
        return null;
    },

    /**
     * 系统内城市格式转换成简化版城市格式，便于用户使用
     * @param cityInfo
     * @return cityInfoTemp
     *
     */
    convertToOut : function(cityInfo){
        //如果原数据不存在，或者对象为空则返回
        if(!cityInfo || this.isEmpty(cityInfo)){
            return null;
        }
        var cityInfoTemp = {};

        cityInfoTemp.province = {};
        cityInfoTemp.city = {};
        cityInfoTemp.district = {};
        cityInfoTemp.province.id = cityInfo.provinceMDMId;
        cityInfoTemp.province.cid = cityInfo.provinceCommerceId;
        cityInfoTemp.province.name = cityInfo.provinceName;
        cityInfoTemp.city.id = cityInfo.cityMDMId;
        cityInfoTemp.city.cid = cityInfo.cityCommerceId;
        cityInfoTemp.city.lesId = cityInfo.cityLESId;
        cityInfoTemp.city.name = cityInfo.cityName;
        cityInfoTemp.district.id = cityInfo.districtMDMId;
        cityInfoTemp.district.cid = cityInfo.districtCommerceId;
        cityInfoTemp.district.lesId = cityInfo.districtLESId;
        cityInfoTemp.district.name = cityInfo.districtName;
        return cityInfoTemp;
    },


    /**
     * 简化版城市格式转换成系统内城市格式，便于程序员使用
     * @param  cityInfoTemp
     * @return cityInfo
     *
     */
    convertToIn : function(cityInfoTemp){

        //如果原数据不存在，或者对象为空则返回
        if(!cityInfoTemp || this.isEmpty(cityInfoTemp)){
            return null;
        }
        var cityInfo = {};

        if(cityInfoTemp.province && !this.isEmpty(cityInfoTemp.province)){
            cityInfo.provinceMDMId = cityInfoTemp.province.id;
            cityInfo.provinceCommerceId = cityInfoTemp.province.cid;
            cityInfo.provinceName = cityInfoTemp.province.name;
        }
        if(cityInfoTemp.city && !this.isEmpty(cityInfoTemp.city)){
            cityInfo.cityMDMId = cityInfoTemp.city.id;
            cityInfo.cityCommerceId = cityInfoTemp.city.cid;
            cityInfo.cityLESId = cityInfoTemp.city.lesId;
//			scriptData.cityLES[cityInfoTemp.city.cid];
            cityInfo.cityName = cityInfoTemp.city.name;
        }
        if(cityInfoTemp.district && !this.isEmpty(cityInfoTemp.district)){
            cityInfo.districtMDMId = cityInfoTemp.district.id;
            cityInfo.districtLESId = cityInfoTemp.district.lesId;
//			scriptData.districtLES[cityInfoTemp.district.cid];
            cityInfo.districtCommerceId = cityInfoTemp.district.cid;
            cityInfo.districtName = cityInfoTemp.district.name;
        }
        return cityInfo;
    }

};


/**
 * IPCookie，业务逻辑类
 */
ECity.IPCookie = (function(){
    var data = ECity.setting.data;//数据配置中心
    var util = ECity.setting.util;//工具包

    var cookie = data.cookie;//Cookie类
    var flag = data.flag;//Flag类
    var type = data.type;//Type类
    var city = data.city;//City类
    var url = data.url;//URL类
//	var sortType = data.sortType;//排序枚举类

    var cityOnLoadEventQueue=[];
    function addCityOnLoad(func){cityOnLoadEventQueue=cityOnLoadEventQueue.concat(func);}
    var provinceOnLoadEventQueue=[];
    function addProvinceOnLoad(func){provinceOnLoadEventQueue=provinceOnLoadEventQueue.concat(func);}
    var cityListOnLoadEventQueue=[];
    function addCityListOnLoad(func){cityListOnLoadEventQueue=cityListOnLoadEventQueue.concat(func);}
    var districtListOnLoadEventQueue=[];
    function addDistrictListOnLoad(func){districtListOnLoadEventQueue=districtListOnLoadEventQueue.concat(func);}

    /**
     * 城市信息展示
     * @param callback作为回调函数，用于页面的城市展示：内参格式为
     * 				{	province:{mid:"",cid:"",name:""},
	 * 					city:{mid:"",cid:"",name:""},
	 * 					district:{mid:"",cid:"",name:""}
	 * 				}
     */
    var showCity = function(callback){
        //查询新老Cookie
        findCookie();
        //新cookie存在
        if(cookie.cookieValue){
            var cookieValue = cookie.cookieValue;//Cookie值
            var cityArrayTemp = cookieValue.split(cookie.cityOuterSepatator);
            //解析新cookie
            analyzeCookie(cityArrayTemp,callback);
            //异常cookie,主动调用定位
//			ipReQuery(cityArrayTemp,callback);
        }else{
            checkCookie(callback);
        }

    };


    /**
     * 校验cookie信息
     * @param callback作为回调函数，用于页面的城市展示：内参格式为
     * 				{	province:{mid:"",cid:"",name:""},
	 * 					city:{mid:"",cid:"",name:""},
	 * 					district:{mid:"",cid:"",name:""}
	 * 				}
     */
    var checkCookie = function(callback){
        //校验是否已新增lesId
        checkLesId();

        var cityObject = {};
        //有老cookie的cityId
        if(cookie.oldCookieCityValue){
            //有老cookie的districtId
            if(cookie.oldCookieDistrictValue){
                //匹配老cookie中的城市是否在新cookie中
                cityObject = util.equalsByCD(cookie.oldCookieCityValue, cookie.oldCookieDistrictValue, city.cityArray);
                //存在
                if(cityObject){
                    city.cityInfo = cityObject;
                    //如果老cookie匹配新cookie中的地址不是第一个，则需要更改新cookie的顺序
                    if(!util.equalsByPCD(cityObject,city.cityArray[0])){
                        changeCookie();
                        addCookie();
                    }
                    //回调到页面上
                    if(typeof callback == "function"){
                        //回调函数，内部传递的页面上更改的城市信息（省、市、区的mid,cid,name）
                        callback(util.convertToOut(city.cityInfo));
                    }
                }else{
                    //不在新cookie中，就从服务端获取
                    getCookie(callback);
                }
            }else{//无区的id
                cityObject = util.equalsByC(cookie.oldCookieCityValue, city.cityArray);
                //存在
                if(cityObject){
                    city.cityInfo = cityObject;//为后面的changeCookie做准备
                    //因为老cookie中无districtId,所以需要添加入cookie中
                    addOldCookie();
                    //如果老cookie匹配新cookie中的地址不是第一个，则需要更改新cookie的顺序
                    if(!util.equalsByPCD(cityObject,city.cityArray[0])){
                        changeCookie();
                        addCookie();
                    }
                    if(typeof callback == "function"){
                        //回调函数，内部传递的页面上更改的城市信息（省、市、区的mid,cid,name）
                        callback(util.convertToOut(city.cityInfo));
                    }
                }else{
                    //不在新cookie中，就从服务端获取
                    getCookie(callback);
                }
            }
        }else{
            //如果cityArray存在,则将新cookie中的第一个城市作为老cookie加入到客户端上
            if(city.cityArray && city.cityArray.length != 0){
                city.cityInfo = city.cityArray[0];
                addOldCookie();
                if(typeof callback == "function"){
                    //回调函数，内部传递的页面上更改的城市信息（省、市、区的mid,cid,name）
                    callback(util.convertToOut(city.cityInfo));
                }
            }else{
                getCookie(callback);
            }
        }
    };

    /**
     * 切换城市
     * @param cityInfoTemp {	province:{mid:"",cid:"",name:""},
	 * 							city:{mid:"",cid:"",name:""},
	 * 							district:{mid:"",cid:"",name:""}
	 * 						}
     *  @param callback作为回调函数，用于页面的城市展示：内参格式为
     * 				{	province:{mid:"",cid:"",name:""},
	 * 					city:{mid:"",cid:"",name:""},
	 * 					district:{mid:"",cid:"",name:""}
	 * 				}
     *
     */
    var changeCity = function(cityInfoTemp,callback){
        //存在且不为空
        if(cityInfoTemp && !util.isEmpty(cityInfoTemp)){
            city.cityInfo = util.convertToIn(cityInfoTemp);//转化成内部可用的
        }
        reportIp();
        changeCookie();//更改cookie中的城市信息
        addOldCookie();//添加老Cookie
        addCookie();//添加新Cookie
        //回调函数用于页面展示
        if(typeof callback == "function"){
            //回调函数，内部传递的页面上更改的城市信息（省、市、区的mid,cid,name）
            callback(util.convertToOut(city.cityInfo));
        }
    };

    var reportIp = function(){
        //取cookie中第一个ip判断是否异常,如异常则调用上报接口,上报ip和城市
        var cityArray = city.cityArray;//城市数组
        var cityInfo = city.cityInfo;//页面的城市信息
        //如果cityInfo为空或者cityInfoArray不合法(为null或undefined)或者cityInfoArray第一个地址对象为空，则返回一个空数组
        //确保Cookie中是有地址的
        if(!cityArray || util.isEmpty(cityArray[0])){
            return;//如果cityInfo为空或者cityInfoArray不合法则返回
        }
        var city_1 = cityArray[0];//第一个城市地址一定存在，因在之前做了判断
        //不管定位到或者定位不到，只要切换城市就上报
        if(city_1.flag == flag.user){
            //查询接口开关
            var u1 = url.reportSwitchUrl;
            $.ajax({
                type : "GET",
                url : u1,
                cache : true,
                async : false,
                jsonp:false,
                dataType : "jsonp",
                jsonpCallback : "switchcallback",
                success:function(cookieJson){
                    //返回成功且降级开关关闭
                    if(cookieJson.returnCode == 1&&cookieJson.switchValue == 0){
                        reportIpRequest(cityInfo.cityLESId);
                    }

                },error:function(jqXHR, textStatus, errorThrown){
                }
            });
        }
    };
    //调用ip上报接口
    var reportIpRequest = function(cityLESId){
        var u2 = url.reportIpUrl +"cityId="+cityLESId;
        //调用上报接口
        $.ajax({
            type : "GET",
            url : u2,
            cache : true,
            async : false,
            jsonp:false,
            dataType:"jsonp",
            jsonpCallback:"",
            success:function(cookieJson){
            },error:function(){
            }
        });
    };

    /**
     * findCookie 新老Cookie查询
     * 如果查询到，设置到数据配置中心中
     *
     */
    var findCookie = function(){
        //获取客户端的所有cookie
        var cookieStr = document.cookie;
        //客户端的Cookie为空包括空字符串
        if(!cookieStr){
            return;
        }
        //老cookie的cityId
        var oldCookieCity = cookieStr.match(RegExp("(^| )" + cookie.oldCookieCityKey + "=([^;]*)(;|$)"));
        //老cookie的districtId
        var oldCookieDistrict = cookieStr.match(RegExp("(^| )" + cookie.oldCookieDistrictKey + "=([^;]*)(;|$)"));
        //新cookie
        var cookies = cookieStr.match(RegExp("(^| )" + cookie.cookieKey + "=([^;]*)(;|$)"));
        //如果匹配成功，并且第二个也存在，并且长度不为0
        if(oldCookieCity && oldCookieCity[2] && oldCookieCity[2].length != 0){
            cookie.oldCookieCityValue = decodeURIComponent(oldCookieCity[2]);//设置到数据配置中心中
        }
        //如果匹配成功，并且第二个也存在，并且长度不为0
        if(oldCookieDistrict && oldCookieDistrict[2] && oldCookieDistrict[2].length != 0){
            cookie.oldCookieDistrictValue = decodeURIComponent(oldCookieDistrict[2]);//设置到数据配置中心中
        }
        //如果匹配成功，并且第二个也存在，并且长度不为0
        if(cookies && cookies[2] && cookies[2].length != 0){
            cookie.cookieValue = decodeURIComponent(cookies[2]);//设置到数据配置中心中
        }

    };


    /**
     * getCookie 城市信息请求
     *
     */
    var getCookie = function(callback){
        addCityOnLoad(callback);
        if(cityOnLoadEventQueue.length==1){
            getCityInfor(callback);
        }
    };
    /**
     * getCookie 城市信息请求
     * 如果老cookie存在，则以老cookie中的cityId，districtId定位城市信息，当districtId不存在可以用cityId定位，否则根据IP定位
     *
     *  @param callback作为回调函数，用于页面的城市展示：内参格式为
     * 				{	province:{mid:"",cid:"",name:""},
	 * 					city:{mid:"",cid:"",name:""},
	 * 					district:{mid:"",cid:"",name:""}
	 * 				}
     */
    var getCityInfor = function(callback){
        //数据中心中的请求连接的URL集合对象
        var cookieUrl = url.cookieUrl;
        //如果cityId存在，加上cityId
        if(cookie.oldCookieCityValue){
            cookieUrl += cookie.oldCookieCityKey + "=" + cookie.oldCookieCityValue;
            //如果districtId存在，加上districtId
            if(cookie.oldCookieDistrictValue){
                cookieUrl += "&" + cookie.oldCookieDistrictKey + "=" + cookie.oldCookieDistrictValue;
            }
        }
        $.ajax({
            type : "GET",
            url : cookieUrl,
            cache : true,
            async : false,
            dataType : "jsonp",
            jsonpCallback : "cookieCallback",
            success : function(cookieJson){
                //存放服务器端返回的JSON数据
                var cityArrayTemp = [];

                //设置flag和count值
                if(cookie.oldCookieCityValue){
                    if(cookie.oldCookieDistrictValue){
                        cookieJson.flag = flag.user;
                        cookieJson.count = 1;
                    }else{
                        cookieJson.flag = flag.sys_user;
                        cookieJson.count = 0;
                    }
                }else{
                    cookieJson.flag = flag.sys;
                    cookieJson.count = 0;
                }

                if(cookieJson.status == 0){
                    cookieJson.flag = flag.fail_query;
                }
                //放到cityInfo中
                city.cityInfo = cookieJson;
                //如果cityArray存在,并且长度大于0
                if(city.cityArray && city.cityArray.length != 0){
                    changeCookie();
                }else{
                    cityArrayTemp.push(cookieJson);
                    //加入到cityArray中，用于用户更改城市的逻辑操作
                    city.cityArray = cityArrayTemp;
                }
                //增加cookie(修改cookie)
                addCookie();
                //如果存在cityId,districtId,但是districtId与cityId不匹配(区不是在这个市下面的)，则需要纠正这个错误的districtId，并重新写到cookie中
                if(cookie.oldCookieCityValue && cookie.oldCookieDistrictValue && cookie.oldCookieDistrictValue != cookieJson.districtCommerceId){
                    addOldCookie();
                }
                //老cookie不完整
                if(!cookie.oldCookieCityValue || !cookie.oldCookieDistrictValue){
                    addOldCookie();
                }
                //回调函数用于展示
                if(typeof callback == "function"){
                    //回调函数，内部传递的页面上更改的城市信息（省、市、区的mid,cid,name）
                    for(var aFunc in cityOnLoadEventQueue){cityOnLoadEventQueue[aFunc](util.convertToOut(city.cityInfo));}
                    cityOnLoadEventQueue=[];
                }
            }
        });

    };


    function cityMapCallback(){

    };

    /**
     * analyzeCookie 新Cookie解析
     * 将解析的城市信息设置到数据配置中心
     *
     */
    var analyzeCookie = function(cityArrayTemp,callback){
        var cityArray = [];
//		var checkArray = cityArrayTemp;
//		var length = cityArrayTemp.length;
//		for(var i = 1; i < length; i++){
//			if(util.equalsByPCD(cityArrayTemp[i-1],cityArrayTemp[i])){
//				checkArray.splice(i-1,1);
//			}
//		}
        //每个城市之间以;分开，在一个城市中以,将省市区以及Id分开
        var data = cityArrayTemp[0].split(cookie.cityInnerSeparator);//按照_分出各个部分
        var cityTemp = {};

        var provinceId = data[0];
        var cityLesId =  data[1];
        var districtLesId =  data[4];
        //根据省市区id查询省市区信息
        var cityMapUrl = url.cityMapById + provinceId+"-"+cityLesId+"-"+districtLesId+"-cityMapCallback.htm";
        $.ajax({
            type : "GET",
            url : cityMapUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "cityMapCallback",
            success : function(cityMapJson){
                if(cityMapJson.returnCode == "1"){
                    cityTemp.provinceMDMId = cityMapJson.pMdmId;
                    cityTemp.provinceLESId = cityMapJson.pMdmId;
                }else{
                    cityTemp.provinceMDMId = data[0];
                    cityTemp.provinceLESId = data[0];
                }
                cityTemp.provinceCommerceId = "";
                cityTemp.provinceName = cityMapJson.pName;//获取省份的名称

                if(cityMapJson.returnCode == "2"){
                    cityTemp.cityLESId = cityMapJson.cLesId;
                    cityTemp.cityMDMId = cityMapJson.cMdmId;
                    cityTemp.cityCommerceId = cityMapJson.cCommerceId;
                }else{
                    cityTemp.cityLESId = data[1];
                    cityTemp.cityMDMId = data[2];
                    cityTemp.cityCommerceId = data[3];
                }

                cityTemp.cityName = cityMapJson.cName;//获取市的名名称

                if(cityMapJson.returnCode == "3"||cityMapJson.returnCode == "2"){
                    cityTemp.districtLESId = cityMapJson.dLesId;
                    cityTemp.districtCommerceId = cityMapJson.dCommerceId;
                }else{
                    cityTemp.districtLESId = data[4];
                    cityTemp.districtCommerceId = data[5];
                }

                cityTemp.districtMDMId = "";
                cityTemp.districtName = cityMapJson.dName;//获取区的名称
                cityTemp.flag = data[6];
                cityTemp.count = data[7];
                var flag = false;
                var length = city.cityArray.length;
                for(var i = 0; i < length; i++){
                    if(util.equalsByPCD(city.cityArray[i],cityTemp)){
                        flag = true;
                    }
                }
                if(!flag){
                    city.cityArray.push(cityTemp);
                }
                cityArrayTemp.shift();
                if(cityMapJson.returnCode != "0"){
                    deleteCookie();
                    addCookie();

                }
                if(city.cityArray.length == 1&&cityMapJson.returnCode != "0"){//重置老cookie
                    deleteOldCookie();
                    addOldCookie();
                }
                if(cityArrayTemp.length == 0){
                    checkCookie(callback);
                }else{
                    analyzeCookie(cityArrayTemp,callback);
                };
            }
        });
    };

    var deleteCookie = function(){
        //删除改版前的cookie
        var date=new Date();
        date.setTime(date.getTime()-10000);
        cookieTemp = cookie.cookieKey + "=" + encodeURIComponent(""); //转码
        cookieTemp += "; expires = "+date.toGMTString();//设置失效时间
        cookieTemp += cookie.cookiePath;//设置路径
        cookieTemp += cookie.cookieDomain; //设置域
        document.cookie = cookieTemp;
    }
    var deleteOldCookie = function(){
        var date=new Date();
        date.setTime(date.getTime()-10000);
        //市Cookie的设置
        cookieCity = cookie.oldCookieCityKey + "=" + encodeURIComponent("");
        cookieCity += "; expires = "+date.toGMTString();//设置失效时间
        cookieCity += cookie.cookiePath;//设置路径
        cookieCity += cookie.cookieDomain; //设置域
        document.cookie = cookieCity;
        cookie.oldCookieCityValue="";

        //区Cookie的设置
        cookieDistrict = cookie.oldCookieDistrictKey + "=" + encodeURIComponent("");
        cookieDistrict += "; expires = "+date.toGMTString();//设置失效时间
        cookieDistrict += cookie.cookiePath;//设置路径
        cookieDistrict += cookie.cookieDomain; //设置域
        document.cookie = cookieDistrict;
        cookie.oldCookieDistrictValue="";
    }

    /**
     * 校验cookie是否已添加lesId
     *
     */
    var checkLesId = function(){
        var cityArray = city.cityArray;//city中的城市信息数组
        //如果cityArray为（null或undefined）或者长度为0，则直接返回
        if(!cityArray || cityArray.length == 0){
            return;
        }
        var length = cityArray.length;
        for(var i = 0; i < length; i++){
            var data = cityArray[i];
            if(data.provinceMDMId == data.cityLESId || !data.cityLESId
                || data.cityLESId == "null"
                || typeof data.cityLESId == "undefined"
                ||data.districtLESId == "null"
                || typeof data.districtLESId == "undefined"
                || typeof data.cityName == "undefined"
                || typeof data.districtName == "undefined"){
                if(cookie.cookieValue){
                    //删除改版前的cookie
                    var date=new Date();
                    date.setTime(date.getTime()-10000);
                    cookieTemp = cookie.cookieKey + "=" + encodeURIComponent(""); //转码
                    cookieTemp += "; expires = "+date.toGMTString();//设置失效时间
                    cookieTemp += cookie.cookiePath;//设置路径
                    cookieTemp += cookie.cookieDomain; //设置域
                    document.cookie = cookieTemp;

                    //市Cookie的设置
                    cookieCity = cookie.oldCookieCityKey + "=" + encodeURIComponent("");
                    cookieCity += "; expires = "+date.toGMTString();//设置失效时间
                    cookieCity += cookie.cookiePath;//设置路径
                    cookieCity += cookie.cookieDomain; //设置域
                    document.cookie = cookieCity;
                    cookie.oldCookieCityValue="";

                    //区Cookie的设置
                    cookieDistrict = cookie.oldCookieDistrictKey + "=" + encodeURIComponent("");
                    cookieDistrict += "; expires = "+date.toGMTString();//设置失效时间
                    cookieDistrict += cookie.cookiePath;//设置路径
                    cookieDistrict += cookie.cookieDomain; //设置域
                    document.cookie = cookieDistrict;
                    cookie.oldCookieDistrictValue="";

                    city.cityArray = null;
                    break;
                }
            }
        }

    };

    /**
     * addOldCookie 添加cookie
     * 兼容之前的老Cookie
     *
     */
    var addOldCookie = function(){
        var cityArray = city.cityArray;
        //如果cityArray不存在或长度为0，直接返回
        if(!cityArray || cityArray.length == 0){
            return;
        }
        cookie.oldCookieCityValue = cityArray[0].cityCommerceId;
        cookie.oldCookieDistrictValue = cityArray[0].districtCommerceId;

        //城市Id的cookie字符串
        var cookieCity = "";
        //区县Id的cookie字符串
        var cookieDistrict = "";

        //市Cookie的设置
        cookieCity = cookie.oldCookieCityKey + "=" + encodeURIComponent(cookie.oldCookieCityValue);
        cookieCity += cookie.cookieTime;//设置失效时间
        cookieCity += cookie.cookiePath;//设置路径
        cookieCity += cookie.cookieDomain; //设置域
        document.cookie = cookieCity;

        //区Cookie的设置
        cookieDistrict = cookie.oldCookieDistrictKey + "=" + encodeURIComponent(cookie.oldCookieDistrictValue);
        cookieDistrict += cookie.cookieTime;//设置失效时间
        cookieDistrict += cookie.cookiePath;//设置路径
        cookieDistrict += cookie.cookieDomain; //设置域
        document.cookie = cookieDistrict;
    };


    /**
     * addCookie Cookie新增(Cookie解析或者获取Cookie时要将信息解析加入到数据配置中心)
     *
     */
    var addCookie = function(){
        var cityArray = city.cityArray;//city中的城市信息数组

        var cookieTemp = "";//临时Cookie
        var cookieValueTemp = "";//临时Cookie值

        //如果cityArray为（null或undefined）或者长度为0，则直接返回
        if(!cityArray || cityArray.length == 0){
            return ;
        }

        var length = cityArray.length;
        for(var i = 0; i != length; i++){
            cookieValueTemp += cityArray[i].provinceMDMId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].cityLESId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].cityMDMId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].cityCommerceId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].districtLESId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].districtCommerceId;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].flag;
            cookieValueTemp += cookie.cityInnerSeparator;
            cookieValueTemp += cityArray[i].count;
            //最后一组后面无需加入城市分隔符
            if(i == length-1){
                break;
            }
            cookieValueTemp += cookie.cityOuterSepatator;
        }
        //将新的CookieValueTemp加入到数据配置中心
        cookie.cookieValue = cookieValueTemp;

        cookieTemp = cookie.cookieKey + "=" + encodeURIComponent(cookie.cookieValue); //转码
        cookieTemp += cookie.cookieTime;//设置失效时间
        cookieTemp += cookie.cookiePath;//设置路径
        cookieTemp += cookie.cookieDomain; //设置域
        document.cookie = cookieTemp;
    };

    /**
     * Cookie中地址的修改
     *
     */
    var changeCookie = function(){
        var cityArray = city.cityArray;//城市数组
        var cityType = city.cityType;//页面类型
        var cityInfo = city.cityInfo;//页面的城市信息

        //如果cityInfo为空或者cityInfoArray不合法(为null或undefined)或者cityInfoArray第一个地址对象为空，则返回一个空数组
        //确保Cookie中是有地址的
        if(util.isEmpty(cityInfo) || !cityArray || util.isEmpty(cityArray[0])){
            return;//如果cityInfo为空或者cityInfoArray不合法则返回
        }

        //定义一个用于更改后的城市信息数组的容器
        var cityArrayTemp = [];
        var city_1 = cityArray[0];//第一个城市地址一定存在，因在之前做了判断
        var city_2 = cityArray[1];//可能为空
        var city_3 = cityArray[2];//可能为空

        //三级页面类型，即精确到省市的插件
        if(cityType == type.pc){
            //地址1是系统默认型，直接替换这个地址
            if(city_1.flag == flag.sys||city_1.flag == flag.fail_query){
                cityInfo.flag = flag.sys_user;//设置flag为系统默认+用户选择
                cityInfo.count = 0;	//计数器为0(之前加入的时候已经是0，但是为了完备性，在此处加上这句)
                cityArrayTemp.push(cityInfo);
                city.cityArray = cityArrayTemp;//设置到数据配置中心
                return;
            }
            //地址1是系统默认+用户选择
            if(city_1.flag == flag.sys_user){
                if(util.equalsByPC(cityInfo,city_1)){//cityInfo与Cookie中第一个地址相同
                    return;	//将flag设置为系统默认+用户选择后返回
                }else if(util.equalsByPC(cityInfo,city_2)){//_cityInfo与Cookie中的第二个地址相同
                    cityArrayTemp.push(city_2);//将第二个地址提到Cookie第一个位置
//					cityArrayTemp.push(city_1);//原地址1删除
                    if(!util.isEmpty(city_3)){//如果存在第三个地址，则将地址3提到地址2的地址
                        cityArrayTemp.push(city_3);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else if(util.equalsByPC(cityInfo,city_3)){//与第三个地址相同
                    cityArrayTemp.push(city_3);//将第三个地址提到Cookie第一个位置
//					cityArrayTemp.push(city_1);//原地址1删除
                    cityArrayTemp.push(city_2);//原地址2不变
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else{							  //不与Cookie中的地址相同
                    cityInfo.flag = flag.sys_user;//设置flag为系统默认+用户选择
                    cityInfo.count = 0;			  //计数器为0(之前加入的时候已经是0，但是为了完备性，在此处加上这句)
                    cityArrayTemp.push(cityInfo);
//					cityArrayTemp.push(city_1);//原地址1删除
                    if(!util.isEmpty(city_2)){		  //如果存在第二个地址则加入
                        cityArrayTemp.push(city_2);
                        if(!util.isEmpty(city_3)){	  //如果存在
                            cityArrayTemp.push(city_3);
                        }
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }
            }
            //地址1为用户选择
            if(city_1.flag == flag.user){
                if(util.equalsByPC(cityInfo,city_1)){//cityInfo与Cookie中第一个地址相同
                    return;	//将flag设置为系统默认+用户选择后返回
                }else if(util.equalsByPC(cityInfo,city_2)){//_cityInfo与Cookie中的第二个地址相同
                    cityArrayTemp.push(city_2);//将第二个地址与第一个地址更换
                    cityArrayTemp.push(city_1);
                    if(!util.isEmpty(city_3)){//如果存在第三个地址，则加入第三个地址
                        cityArrayTemp.push(city_3);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else if(util.equalsByPC(cityInfo,city_3)){//与第三个地址相同
                    cityArrayTemp.push(city_3);//调换地址1，2，3的顺序为地址3，1，2
                    cityArrayTemp.push(city_1);
                    cityArrayTemp.push(city_2);

                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else{							  //不与Cookie中的地址相同
                    cityInfo.flag = flag.sys_user;//设置flag为系统默认+用户选择
                    cityInfo.count = 0;			  //计数器为0(之前加入的时候已经是0，但是为了完备性，在此处加上这句)
                    cityArrayTemp.push(cityInfo);
                    cityArrayTemp.push(city_1);//第一个地址一定存在，否则不会做changeCookie操作
                    if(!util.isEmpty(city_2)){		  //如果存在第二个地址则加入
                        cityArrayTemp.push(city_2);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }
            }

        }else{ //四级页面类型,有省市区的插件

            //地址1是系统默认型，直接替换这个地址
            if(city_1.flag == flag.sys||city_1.flag == flag.fail_query){
                cityInfo.flag = flag.user;//设置flag为用户选择
                cityInfo.count = 1;	//计数器为1
                cityArrayTemp.push(cityInfo);
                city.cityArray = cityArrayTemp;//设置到数据配置中心
                return;
            }
            //地址1是系统默认+用户选择
            if(city_1.flag == flag.sys_user){
                if(util.equalsByPCD(cityInfo,city_1)){//cityInfo与Cookie中第一个地址相同
                    city_1.count++;//次数+1
                    city_1.flag = flag.user;//类型改成用户选择
                    return;
                }else if(util.equalsByPCD(cityInfo,city_2)){//_cityInfo与Cookie中的第二个地址相同
                    city_2.count++;//地址2计数器+1
                    cityArrayTemp.push(city_2);//将第二个地址提到Cookie第一个位置
//					cityArrayTemp.push(city_1);//原地址1删除
                    if(!util.isEmpty(city_3)){//如果存在第三个地址，则将地址3提到地址2的地址
                        cityArrayTemp.push(city_3);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else if(util.equalsByPCD(cityInfo,city_3)){//与第三个地址相同
                    city_3.count++;//地址3计数器+1
                    cityArrayTemp.push(city_3);//将第三个地址提到Cookie第一个位置
//					cityArrayTemp.push(city_1);//原地址1删除
                    cityArrayTemp.push(city_2);//原地址2不变

                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else{							  //不与Cookie中的地址相同
                    cityInfo.flag = flag.user;//设置flag用户选择
                    cityInfo.count = 1;			  //计数器为1
                    cityArrayTemp.push(cityInfo);
//					cityArrayTemp.push(city_1);//原地址1删除
                    if(!util.isEmpty(city_2)){		  //如果存在第二个地址则加入
                        cityArrayTemp.push(city_2);
                        if(!util.isEmpty(city_3)){	  //如果存在
                            cityArrayTemp.push(city_3);
                        }
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }
            }
            //地址1为用户选择
            if(city_1.flag == flag.user){
                if(util.equalsByPCD(cityInfo,city_1)){//cityInfo与Cookie中第一个地址相同
                    city_1.count++;//地址1
                    return;	//将flag设置为系统默认+用户选择后返回
                }else if(util.equalsByPCD(cityInfo,city_2)){//_cityInfo与Cookie中的第二个地址相同
                    city_2.count++;
                    cityArrayTemp.push(city_2);//将第二个地址与第一个地址更换
                    cityArrayTemp.push(city_1);
                    if(!util.isEmpty(city_3)){//如果存在第三个地址，则加入第三个地址
                        cityArrayTemp.push(city_3);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else if(util.equalsByPCD(cityInfo,city_3)){//与第三个地址相同
                    city_3.count++;
                    cityArrayTemp.push(city_3);//调换地址1，2，3的顺序为地址3，1，2
                    cityArrayTemp.push(city_1);
                    cityArrayTemp.push(city_2);

                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }else{					  //不与Cookie中的地址相同
                    cityInfo.flag = flag.user;//设置flag用户选择
                    cityInfo.count = 1;			  //计数器为1
                    cityArrayTemp.push(cityInfo);
                    cityArrayTemp.push(city_1);//第一个地址一定存在，否则不会做changeCookie操作
                    if(!util.isEmpty(city_2)){		  //如果存在第二个地址则加入
                        cityArrayTemp.push(city_2);
                    }
                    city.cityArray = cityArrayTemp;//设置到数据配置中心
                    return;
                }
            }

        }
    };

    var getRemoteCityArray = function(mdmId,callback){
        addCityListOnLoad(callback);
        if(cityListOnLoadEventQueue.length==1){
            getCityListInfo(mdmId,callback);
        }
    };
    /**
     * 获取服务端的市列表，如根据省mdmId获取市列表
     * @param mdmId 获取城市列表的省mdmId
     * @param callback 回调函数，回调的参数为{mid:"",cid:"",name:"",pinyin:""}如果是市列表，多一个defaultId默认的区mdmId
     *
     */
    var getCityListInfo = function(mdmId,callback){
        var cityUrl = url.cityArrayUrl + mdmId+"_20150401-cityListCallback.htm";
        $.ajax({
            type : "GET",
            url : cityUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "cityListCallback",
            success : function(cityArrayJson){
                var cityArrayTemp = [];
                cityArrayTemp =  cityArrayJson.cities;
                var cityArray = [];
                var length = cityArrayTemp.length;

                for(var i = 0; i != length; i++){
                    var cityObject = {};
                    cityObject.name = cityArrayTemp[i].name;
                    cityObject.id = cityArrayTemp[i].mdmId;
                    cityObject.cid = cityArrayTemp[i].commerceId;
                    cityObject.lesId = cityArrayTemp[i].lesId;
                    cityObject.pinyin = cityArrayTemp[i].pinyin.charAt(0);//pinyin
                    cityObject.defaultId = cityArrayTemp[i].defaultDistrictMdmId;//默认区县的MDMId
                    cityArray.push(cityObject);
                }
                if(typeof callback == "function"){
                    //返回到页面上
                    for(var aFunc in cityListOnLoadEventQueue){cityListOnLoadEventQueue[aFunc](cityArray);}
                    cityListOnLoadEventQueue=[];
                }
            }
        });
    };

    var getRemoteDistrictArray = function(mdmId,callback){
        addDistrictListOnLoad(callback);
        if(districtListOnLoadEventQueue.length==1){
            getDistrictListInfor(mdmId,callback);
        }
    };
    /**
     * 获取服务端的区列表，根据市mdmId获取区列表
     * @param mdmId 获取区列表的市mdmId
     * @param callback 回调函数，回调的参数为{mid:"",cid:"",name:"",pinyin:""}如果是市列表，多一个defaultId默认的区mdmId
     *
     */
    var getDistrictListInfor = function(mdmId,callback){
        //市列表
        var districtUrl = url.districtArrayUrl + mdmId+"_20150401-districtListCallback.htm";
        $.ajax({
            type : "GET",
            url : districtUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "districtListCallback",
            success : function(districtArrayJson){
                var cityArrayTemp = [];
                cityArrayTemp =  districtArrayJson.districts;
                var cityArray = [];
                var length = cityArrayTemp.length;

                for(var i = 0; i != length; i++){
                    var cityObject = {};

                    cityObject.name = cityArrayTemp[i].name;
                    cityObject.id = cityArrayTemp[i].mdmId;
                    cityObject.cid = cityArrayTemp[i].commerceId;
                    cityObject.lesId = cityArrayTemp[i].lesId;
                    cityObject.pinyin = cityArrayTemp[i].pinyin.charAt(0);//pinyin

                    cityArray.push(cityObject);
                }
                //回调函数，用于展示所用
                if(typeof callback == "function"){
                    for(var aFunc in districtListOnLoadEventQueue){districtListOnLoadEventQueue[aFunc](cityArray);}
                    districtListOnLoadEventQueue=[];
                }
            }
        });
    };

    /**
     * 远程调用封装防止重复请求
     */
    var getRemoteProvinceArray = function(callback){
        addProvinceOnLoad(callback);
        if(provinceOnLoadEventQueue.length==1){
            getProvinceListInfor(callback);
        }
    };
    /**
     * 获取服务端的省列表
     * @param callback 回调函数，回调的参数为{mid:"",cid:"",name:"",pinyin:""}如果是市列表，多一个defaultId默认的市mdmId
     *
     */
    var getProvinceListInfor = function(callback){
        //市列表
        var provinceUrl = url.provinceArrayUrl+"provinceListCallback.htm";
        $.ajax({
            type : "GET",
            url : provinceUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "provinceListCallback",
            success : function(provinceArrayJson){
                var cityArrayTemp = [];
                cityArrayTemp =  provinceArrayJson.provinces;
                var cityArray = [];
                var length = cityArrayTemp.length;

                for(var i = 0; i != length; i++){
                    var cityObject = {};

                    cityObject.name = cityArrayTemp[i].name;
                    cityObject.id = cityArrayTemp[i].mdmId;
                    cityObject.cid = cityArrayTemp[i].commerceId;
                    cityObject.pinyin = cityArrayTemp[i].pinyin.charAt(0);//pinyin
                    cityObject.defaultId = cityArrayTemp[i].defaultCityMdmId;//默认市的MDMId
                    cityArray.push(cityObject);
                }
                //回调函数，用于展示所用
                if(typeof callback == "function"){
                    //返回到页面上
                    for(var aFunc in provinceOnLoadEventQueue){provinceOnLoadEventQueue[aFunc](cityArray);}
                    provinceOnLoadEventQueue=[];
                }
            }
        });
    };


    /**
     * 根据districtId获取区信息
     * @param mdmId 区的mdmId
     * @param callback 回调函数，回调的参数为{mid:"",cid:"",name:""}
     *
     */
    var getRemoteDistrict = function(mdmId,callback){
        var districtUrl = url.districtUrl + mdmId+"_20150401-districtCallback.htm";
        $.ajax({
            type : "GET",
            url : districtUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "districtCallback",
            success : function(districtJson){
                //封装districtJson
                var districtObject = {};
                if(typeof callback == "function"){
                    districtObject.id = districtJson.mdmId;
                    districtObject.cid = districtJson.commerceId;
                    districtObject.lesId = districtJson.lesId;
                    districtObject.name = districtJson.name;
                    callback(districtObject);
                }
            }
        });
    };

    /**
     * 根据城市id获取省和城市id,名称
     *@param cityId  城市的mdmId
     *@param callback 回调函数，回调的参数为{pid:"",cid:"",pname:"",cname:""}
     */
    var getProvinceAndCityByCityId = function(cityId,callback){
        var getProvinceAndCityUrl = url.provinceAndCityUrl+cityId+"-provinceandcityCallBack.htm";
        $.ajax({
            type : "GET",
            url : getProvinceAndCityUrl,
            cache : true,
            async : true,
            dataType : "jsonp",
            jsonp:false,
            jsonpCallback : "provinceandcityCallBack",
            success : function(provinceandcityJson){
                //封装districtJson
                var provinceAndCityJsonObject = {};
                var provinceAndCityObject = {};
                if(typeof callback == "function"){
                    provinceAndCityObject.pMdmId = provinceandcityJson.pMdmId;
                    provinceAndCityObject.pName = provinceandcityJson.pName;
                    provinceAndCityObject.cMdmId = provinceandcityJson.cMdmId;
                    provinceAndCityObject.cCommerceId = provinceandcityJson.cCommerceId;
                    provinceAndCityObject.cName = provinceandcityJson.cName;
                    provinceAndCityJsonObject.provinceAndCity = provinceAndCityObject;
                    callback(provinceAndCityJsonObject);
                }
            }
        });
    };

    //返回外部可调用的接口
    return {
        showCity : showCity,
        setCity : changeCity,
        getRemoteDistrict : getRemoteDistrict,
        getRemoteDistrictArray : getRemoteDistrictArray,
        getRemoteCityArray : getRemoteCityArray,
        getRemoteProvinceArray : getRemoteProvinceArray,
        getProvinceAndCityByCityId:getProvinceAndCityByCityId
    };

}());
/**
 * 对面提供接口的API
 */
ECity.API = {

    /**
     * 初始化操作,type 页面类型：true 显示到市， flase 显示到区县;
     */
    init : function(type){
        ECity.setting.data.init(type);
    },

    /**
     * 业务类实例
     */
    ipCookie : ECity.IPCookie,
    /**
     * Util
     */
    util : ECity.setting.util,

    /**
     * 设置城市
     */
    getCity : function(callback){
        this.ipCookie.showCity(callback);
    },

    /**
     * 更改城市
     * @param cityInfoTemp = {
	 * 					province:{id:"",cid:"",name:""},
	 * 					city:{id:"",cid:"",name:""},
	 * 					district:{id:"",cid:"",name:""}
	 * 				  }
     * @param callback 回调函数，用于页面展示
     *
     */
    setCity : function(cityInfo, callback){
        this.ipCookie.setCity(cityInfo, callback);
    },

    /**
     * 获取一个城市信息对象，包括省市区的mid,cid,name
     * @return cityObject = {
	 * 					province:{id:"",cid:"",name:""},
	 * 					city:{id:"",cid:"",name:""},
	 * 					district:{id:"",cid:"",name:""}
	 * 				}
     *
     */
    getDataCity : function(){
        var cityArray = ECity.setting.data.city.cityArray;
        var cityObject = {};
        //如果cityArray存在且cityArray[0]不为空
        if(cityArray && !this.util.isEmpty(cityArray[0])){
            cityObject = this.util.convertToOut(cityArray[0]);
        }
        return cityObject;
    },

    /**
     * 获取Cookie中的城市信息数组[cityObject,cityObject,cityObject]
     * @return  cityInfoList = [{
	 * 					province:{id:"",cid:"",name:""},
	 * 					city:{id:"",cid:"",name:""},
	 * 					district:{id:"",cid:"",name:""}
	 * 				}]
     *
     */
    getLastUsedCities : function(){
        var cityArray = ECity.setting.data.city.cityArray;
        var cityInfoList = [];
        //cityArray存在，则返回这个城市数组，否则返回空数组
        if(cityArray){
            for(var index in cityArray){
                cityInfoList.push(this.util.convertToOut(cityArray[index]));
            }
        }
        return cityInfoList;
    },

    /**
     * 获取Commerce主站的城市Id，这个是第一城市的cityId
     * @return cityCommerceId
     *
     */
    getCityId : function(){
        var cityArray = ECity.setting.data.city.cityArray;
        //如果cityArray存在且cityArray[0]不空，则返回第一个的市commerceId
        if(cityArray && !this.util.isEmpty(cityArray[0])){
            return cityArray[0].cityCommerceId;
        }
        return "";
    },

    /**
     * 获取Commerce主站的区Id,这个是第一城市的districtId
     * @return districtCommerceId
     *
     */
    getDistrictId : function(){
        var cityArray = ECity.setting.data.city.cityArray;
        //如果cityArray存在且cityArray[0]不空，则返回第一个的区commerceId
        if(cityArray && !this.util.isEmpty(cityArray[0])){
            return cityArray[0].districtCommerceId;
        }
        return "";
    },

    /**
     * 根据district的mdmId获取这个区的{id:"",cid:"",name:""}
     * @param districtId
     * @param callback
     *
     */
    getDistrict : function(districtId,callback){
        this.ipCookie.getRemoteDistrict(districtId,callback);
    },

    /**
     * getDistrictList 获取区列表[{id:"",cid:"",name:"",pinyin:""}]
     * @param cityId
     * @param callback
     *
     */
    getDistrictList : function(cityId,callback){
        this.ipCookie.getRemoteDistrictArray(cityId,callback);
    },

    /**
     * getCityList 获取市列表[{id:"",cid:"",name:"",pinyin:"",defaultId:""}]
     * @param provinceId
     * @param callback
     *
     */
    getCityList : function(provinceId,callback){
        this.ipCookie.getRemoteCityArray(provinceId,callback);
    },

    /**
     * getProvinceList 获取省列表[{id:"",cid:"",name:"",pinyin:"",defaultId:""}]
     * @param callback
     *
     */
    getProvinceList : function(callback){
        this.ipCookie.getRemoteProvinceArray(callback);
    },

    /**
     * getProvinceAndCityByCityId 根据城市id获取省,市id和名称
     * callback({"pMdmId":"100","pName":"江苏","cMdmId":"1000173",
	 * "cName":"南京","cCommerceId":"9173"})
     * @param cityId
     * @param callback
     */
    getProvinceAndCityByCityId:function(cityId,callback){
        this.ipCookie.getProvinceAndCityByCityId(cityId,callback);
    }
};

(function($) {

    'use strict';
    if (!jQuery) {
        throw new Error("The plugin requires jQuery")
    }
    var Methods = function() {
        if (this instanceof Methods == false) {
            return new Methods();
        }
    }
    Methods.prototype = {
        // 初始化
        init: function(elements, options) {
            this.eles = elements;
            this.opts = options;
            this.flag = true;
            this.render();
        },
        render: function() {
            var that = this
            this.setTemps(function(o){
                that.getCity(o)
            })
        },
        // 设置模版方法
        setTemps: function(fn) {
            var that = this;
            var eles = this.eles;
            var opts = this.opts;
            // 设置模版,并绑定data到dom上。
            // $city,包裹整个结构
            var style = '<style id="ui-city-style">' +
                'ul,li,p,h3,h5,em,b,i,span,a{ margin: 0; padding: 0; }' +
                'ul,li { list-style: none; }' +
                '.clearfix:after{ content:"."; display:block; height:0; clear:both; visibility:hidden}' +
                '.clearfix{ zoom:1}' +
                '.ui-city a,' +
                '.ui-city a:visited{ line-height:14px; color:#333; text-decoration: none; outline: none; cursor: pointer;}' +
                '.ui-city a:hover { text-decoration:none; }' +
                '.ui-city { display:inline-block;*dispplay:inline;*zoom:1; font-size: 12px; position: relative; z-index: 0}' +
                '.ui-city .dn { display: none; }' +
                '.ui-city .db { display: block; }' +
                '.ui-city .dib { display: inline-block; }' +
                '.ui-city .arr { display: inline-block; width: 0; height:0; border-color: #bbb transparent transparent; border-width: 5px; border-style: solid dashed dashed; font-size: 0; line-height: 0; overflow: hidden; }' +
                '.ui-city a.ui-city-toggle:hover { color:#333;}' +
                '.ui-city-toggle { display:inline-block; border: 1px solid #bbb; padding:6px 5px 6px 6px; color: #000;background: #fff; position: relative; z-index: 100}' +
                '.ui-city-toggle .address-placement {font-style: normal; float: left;}' +
                '.ui-city-toggle span { padding-right: 5px}' +
                '.ui-city-toggle span:hover {color: #333;}' +
                '.ui-city-toggle .arr { margin-right:5px;position: relative; top:5px; float: left;}' +
                '.ui-city-group { display:none; position: absolute;background: #fff; left: 0; top:27px;border: 1px solid #ccc; margin-top:-1px; width: 420px; z-index: 99; box-shadow: 0 0 6px #ddd;padding-top:5px;}' +
                '.ui-city-group .ui-city-close  { position: absolute;right: 0;top: 0;padding: 5px 10px;overflow: hidden;}' +
                '.ui-city-group .ui-city-close i { font: 700 14px/1.5 simsun;margin-left:-4px; color: #aaa}' +
                '.ui-city-group-header { padding-top: 10px;  }' +
                '.ui-city-group-header p { padding-left:15px; margin-bottom: 10px; }' +
                '.ui-city-group-header .address-title { }' +
                '.ui-city-group-header .address-item {clear:both; }' +
                '.ui-city-group-header .address-item a,' +
                '.ui-city-group-header .address-item a:visited{ display: inline-block;zoom:1; padding-top: 4px; padding-left: 5px; padding-bottom: 4px; margin-right: 10px; border: 1px solid #bbb; }' +
                '.ui-city-group-header .address-item a:hover {  background: #f90; color: #fff;border:1px solid #f90; }' +
                '.ui-city-group-header .address-item a span { padding-right:5px}' +
                '.ui-city-group-content { margin: 10px 10px 0 10px; background:#fff;}' +
                '.ui-city-group-content .nav-tabs { padding-left: 6px  }' +
                '.ui-city-group-content .nav-tabs li {float: left; position: relative; z-index:2;border: 1px solid #ccc; height: 26px;background:#fff;margin-right: 6px; margin-bottom:0; cursor: pointer; }' +
                '.ui-city-group-content .nav-tabs li p { padding: 6px 10px 6px 10px;border:1px solid #fff; }' +
                '.ui-city-group-content .nav-tabs li a,' +
                '.ui-city-group-content .nav-tabs li a:visited{ color: #999;float: left}' +
                '.ui-city-group-content .nav-tabs li .arr { position: relative; top: 3px;left: 5px;font-size: 0; line-height: 0;}' +
                '.ui-city-group-content .nav-tabs li.current { border: 2px solid #ffb84e; border-bottom:none; z-index: 4;}' +
                '.ui-city-group-content .nav-tabs li.current p { padding: 6px 10px 5px 10px; position: relative; z-index: 4; border:none; }' +
                '.ui-city-group-content .nav-tabs li.current .arr { border-color:  transparent transparent #f90; border-style:  dashed dashed solid; top:-2px; }' +
                '.ui-city-group-content .nav-tabs li.current a,' +
                '.ui-city-group-content .nav-tabs li.current a:visited{ display:inline-block; color: #333; }' +
                '.ui-city-group-content .nav-tabs li.active a,' +
                '.ui-city-group-content .nav-tabs li.active a:visited{ display:inline-block; color: #333; }' +
                '.ui-city-group-content .tab-content { border-top: 2px solid #ffb84e;top:-2px;  position: relative; z-index: 3}' +
                '.ui-city-group-content .tab-content .tab-panel { display: none; padding-top: 3px; padding-bottom: 15px; background: #fff;padding-left: 8px }' +
                '.ui-city-group-content .tab-content .tab-panel.active { display: block;}' +
                '.ui-city-group-content .tab-content li:after { content:"."; display:block; height:0; clear:both; visibility:hidden }' +
                '.ui-city-group-content .tab-content li { *zoom:1;}' +
                '.ui-city-group-content .tab-content li span {display:inline-block;width: 98px;}' +
                '.ui-city-group-content .tab-content li a,' +
                '.ui-city-group-content .tab-content li a:visited { display:inline-block; background:#fff;margin: 2px; padding: 5px; color:#000; }' +
                '.ui-city-group-content .tab-content li a:hover { background: #f90; color: #fff;}' +
                '.ui-city-group-content .tab-content li a.on,' +
                '.ui-city-group-content .tab-content li a.on:visited { background: #f90;color: #fff; }' +
                '.ui-city-group-content .tab-content .pr-panel li a{ }' +
                '.ui-city.active { z-index: 10}' +
                '.ui-city.active a.ui-city-toggle { border: 1px solid #ccc;background:#fff;border-bottom:none;box-shadow: 0 -1px 1px #ddd}' +
                '.ui-city.active a.ui-city-toggle:hover { color: #333; background: #fff; text-decoration: none;}' +
                '.ui-city.active a.ui-city-toggle .arr{ border-color:  transparent transparent #f90; border-style:  dashed dashed solid; top:0; }' +
                '.ui-city.active .ui-city-group { display: block; }' +
                '.ui-city .arr {transition:All .2s ease;-webkit-transition:All .2s ease;-moz-transition:All .2s ease;-o-transition:All .2s ease;-ms-transition:All .2s ease;}' +
                '</style>'
            if ($('#ui-city-style').size() == 0) {
                $('body').prepend($(style))
            };
            var $city = $('<div class="ui-city"></div>')

            // $toggle 控制整个开关
            // 阻止a链接跳转！
            $('a', that.eles).live('click', function() {
                return false;
            })
            // 加入默认城市
            var $toggle;
            this.getInfo = {};
            this.changeFlag = !0;
            this.queryInfo = function(cb) {
                if (opts.cityId != '' && opts.cityId != undefined) {
                    opts.city = true
                    that.getAddressByDefault(function(){
                        that.getInfoByCityid(opts.cityId, function(data) {
                            cb(data)
                            setTimeout(function(){fn(data)},10)
                        })
                    })
                } else {
                    that.getAddressByDefault(function(data) {
                        cb(data)
                        setTimeout(function(){fn(data)},10)
                    })
                }
            }
            this.queryInfo(function(data) {
                var province = data.province
                var city = data.city
                var district = data.district
                var pinfo = [province.id, province.cid,'', province.name].join(',')
                var cinfo = [city.id, city.cid,district.lesId, city.name].join(',')
                var dinfo = [district.id, district.cid,district.lesId, district.name].join(',')
                var id = province.id

                that.getInfo = data;
                if (/^10$|^20$|^30$|^320$/.test(id)) {
                    if (!!opts.city) {
                        $toggle = $('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr dn"  role=' + pinfo + '>' + province.name + '</span><span id="citybName" class="ct"  role=' + cinfo + '>' + city.name + '</span></em><b class="arr"></b></a>');
                    } else {
                        $toggle = $('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr dn"  role=' + pinfo + '>' + data.province.name + '</span><span class="ct" id="citybName" role=' + cinfo + '>' + city.name + '</span><span id="districtName" class="ds" role=' + dinfo + '>' + district.name + '</span></em><b class="arr"></b></a>');
                    }
                } else {
                    if (!!opts.city) {
                        $toggle = $('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr"  role=' + pinfo + '>' + province.name + '</span><span id="citybName" class="ct"  role=' + cinfo + '>' + city.name + '</span></em><b class="arr"></b></a>');
                    } else {
                        $toggle = $('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr"  role=' + pinfo + '>' + province.name + '</span><span id="citybName" class="ct"  role=' + cinfo + '>' + city.name + '</span><span id="districtName" class="ds" role=' + dinfo + '>' + district.name + '</span></em><b class="arr"></b></a>');
                    }
                }
                $city.append($toggle)
                $(eles).append($city);
                // $group 包裹隐藏的内容;
                that.openPanel(opts, data)
            })
        },
        openPanel: function(opts, data) {
            var that = this
            var $city = $(this.eles).find('.ui-city')
            $city.one('click.open', function(e) {
                var event = e || event
                if (event) event.stopPropagation()
                that.getAllDetail(opts, data)
                $(this).addClass('active');
                return false;
            })
        },
        closePanel: function() {
            var that = this
            var $city = $(this.eles).find('.ui-city')
            var $close = $(this.eles).find('.ui-city-close')
            $close.on('click.close', function(e) {
                var event = e || event
                if (event) event.stopPropagation()
                $city.removeClass('active');
                return false;
            })
            $(document).not(this).on('click.close', function() {
                if (!$city.hasClass('active')) {
                    return;
                }
                $city.removeClass('active')
                return false;
            })
        },
        // 点击开始重新选择
        getAllDetail: function(opts, data) {
            var that = this
            var eles = this.eles;
            var province = data.province
            var city = data.city
            var district = data.district
            var pinfo = [province.id, province.cid,'',province.name,province.defaultId].join(',')
            var cinfo = [city.id, city.cid,city.lesId, city.name,city.defaultId].join(',')
            var dinfo = [district.id, district.cid,district.lesId, district.name].join(',')
            var id = province.id
            var $city = $(this.eles).find('.ui-city')
            var $toggle = $city.find('.ui-city-toggle')
            var $group = $('<div class="ui-city-group"></div>')
            var $close = $('<a name="item_none_dizhi_guanbi" class="ui-city-close" href="###"><i>&gt;</i><i>&lt;</i></a>')
            $group.append($close)
            // $header 常用地址
            var $header = $('<div class="ui-city-group-header"><p class="address-title">常用地址：</p></div>')
            var $item = $('<p class="address-item"></p>')
            if (!!opts.used && !opts.city) {
                that.getUsedAddress(function(data) {
                    if (!data) {
                        return;
                    };
                    $.each(data, function(k, v) {
                        if (k == 0) {
                            return;
                        };
                        if(v != null){
                            var province = v.province
                            var city = v.city
                            var district = v.district
                            var pinfo = [province.id, province.cid,'',province.name,province.defaultId].join(',')
                            var cinfo = [city.id, city.cid,city.lesId, city.name,province.defaultId].join(',')
                            var dinfo = [district.id, district.cid, district.lesId,district.name].join(',')
                            $item.append($('<a name="item_none_dizhi_chy0'+k+'" href="###"><span class="pr dn" role=' + pinfo + '>' + province.name + '</span><span class="ct" role=' + cinfo + '>' + city.name + '</span><span class="ds"  role=' + dinfo + '>' + district.name + '</span></a>'))
                        }
                    })
                    // @修改，如果没有常用地址，不显示常用地址文案
                    $header.append($item)
                    if (!!opts.used && !opts.city && data.length > 1) {
                        $group.prepend($header);
                    };
                })

            }
            // $content 主内容选择区域。
            var $content = $('<div class="ui-city-group-content"></div>')
            // 判断是否只选得到市
            if (!opts.city) {
                var $navTabs = $('<ul class="nav-tabs clearfix"><li name="item_none_dizhi_02" id="provinceShow" class="active"  role=' + pinfo + '><p><a href="###">' + province.name + '</a><b class="arr"></b></p></li><li name="item_none_dizhi_03" id="citybShow" class="active"  role=' + cinfo + ',' + city.defaultId + '><p><a href="###">' + city.name + '</a><b class="arr"></b></p></li><li name="item_none_dizhi_04" id="districtShow" class="active current" role=' + dinfo + ',' + district.defaultId + '><p><a href="###">' + district.name + '</a><b class="arr"></b></p></li></ul>')
            } else {
                var $navTabs = $('<ul class="nav-tabs clearfix"><li name="item_none_dizhi_02" id="provinceShow" class="active" role=' + pinfo + '><p><a href="###">' + province.name + '</a><b class="arr"></b></p></li><li name="item_none_dizhi_03" id="citybShow" class="active current" role=' + cinfo + ',' + city.defaultId + '><p><a href="###">' + city.name + '</a><b class="arr"></b></p></li></ul>')
            }
            var $tabContent = $('<div class="tab-content"></div>');
            var $prPanel = $('<ul class="tab-panel pr-panel"></ul><ul class="tab-panel ct-panel"><li>正在加载中...</li></ul><ul class="tab-panel ds-panel active"><li></li></ul>')
            that.setInfo = that.getInfo
            // 判断是否根据区域来排列省份
            if (!!opts.state) {
                var $li = $('<li></li>')
                $prPanel.eq(0).append($li);
                that.getProvinceList(function(allProvinces) {
                    $.each(allProvinces, function(k, v) {
                        var pinfo = [v.id,v.cid,'',v.name,v.defaultId].join(',')
                        if (v.id == that.getInfo.province.id) {
                            $prPanel.children(':eq(0)').append('<span><a name="item_none_dizhi_sheng" href="###" class="on" role=' + pinfo + '>' + v.name + '</a></span>')
                        } else {
                            $prPanel.children(':eq(0)').append('<span><a name="item_none_dizhi_sheng" href="###" role=' + pinfo + '>' + v.name + '</a></span>')
                        }
                    })
                    $tabContent.append($prPanel);
                    that.getProvinces($city, $item, $toggle, $tabContent, $navTabs, $prPanel, $header, $group, function() {
                        return that.getCities($navTabs, $tabContent, $prPanel, $city, $toggle, function() {
                            return that.getDistricts($navTabs, $tabContent, $toggle, $city, function() {
                                return that.setDetailAddress($toggle, $navTabs, $tabContent, $city);
                            })
                        })
                    });
                })
            } else {}
            $content.append($navTabs);
            $content.append($tabContent);
            $group.append($content);
            $city.append($group);
            // 加入到dom里
            $(eles).append($city);
            // 主动关闭
            that.closePanel()
            // 省市区选项卡切换事件；
            $navTabs.find('li').each(function(i) {
                $(this).on('click', function(e) {
                    if ($(this).hasClass('active')) {
                        $(this).addClass('current').siblings().removeClass('current')
                        $tabContent.children(':eq(' + i + ')').addClass('active').siblings().removeClass('active')
                    };
                    return false;
                })
            })
            if (!!opts.used && !opts.city) {
                that.setAddressByUsed($item, $toggle, $city, $prPanel, $tabContent, $navTabs, $header, $group)
            }
        },
        // 获得全部省直辖市;
        getProvinces: function($city, $item, $toggle, $tabContent, $navTabs, $prPanel, $header, $group, cb) {
            var that = this;
            var opts = this.opts;
            // 打开城市控件！
            $city.on('click', function(event) {
                if (event) event.stopPropagation();
                $(this).addClass('active');
                // 重新获得常用地址
                if (typeof $item !== undefined) {
                    $item.html('')
                };
                that.getUsedAddress(function(data) {
                    if (!data) {
                        return;
                    };

                    $.each(data, function(k, v) {
                        if (k == 0) {
                            return;
                        };
                        var province = v.province
                        var city = v.city
                        var district = v.district
                        var pinfo = [province.id, province.cid,'',province.name,province.defaultId].join(',')
                        var cinfo = [city.id, city.cid,city.lesId,city.name,province.defaultId].join(',')
                        var dinfo = [district.id, district.cid,district.lesId, district.name].join(',')
                        $item.append($('<a name="item_none_dizhi_chy0'+k+'" href="###"><span class="pr dn" role=' + pinfo + '>' + province.name + '</span><span class="ct" role=' + cinfo + '>' + city.name + '</span><span class="ds"  role=' + dinfo + '>' + district.name + '</span></a>'))
                    })
                    $header.append($item)
                    if (!!opts.used && !opts.city && data.length > 1) {
                        $group.prepend($header);
                    };

                })
                // 点击常用地址设置地址！
                if (!!opts.used && !opts.city) {
                    that.setAddressByUsed($item, $toggle, $city, $prPanel, $tabContent, $navTabs, $header, $group)
                }

                // 重新渲染省市区
                return false
            })

            cb()
        },

        setAddressByUsed: function($item, $toggle, $city, $prPanel, $tabContent, $navTabs, $header, $group) {
            var that = this;
            var opts = this.opts;
            $city.off('click.setDefaultAddress').on('click.setDefaultAddress', '.address-item a',function(event) {
                if (event) event.stopPropagation()
                var $clone = $(this).clone();
                var pr = $clone.find('.pr').attr('role');
                var ct = $clone.find('.ct').attr('role');
                var ds = $clone.find('.ds').attr('role');
                var prs = pr.split(',')
                var cts = ct.split(',')
                var dss = ds.split(',')
                // 判断是否是直辖市
                if (!/^10\,|^20\,|^30,|^320\,/.test(pr)) {
                    $clone.find('span:hidden').removeClass('dn')
                };
                that.setInfo.province = {
                    id: prs[0],
                    cid: prs[1],
                    name: prs[3]
                }
                that.setInfo.city = {
                    id: cts[0],
                    cid: cts[1],
                    lesId:cts[2],
                    name: cts[3]
                }
                that.setInfo.district = {
                    id: dss[0],
                    cid: dss[1],
                    lesId:dss[2],
                    name: dss[3]
                }
                $toggle.find('em').html($clone.children())
                $city.removeClass('active');
                // 向cookie中写入一个城市！
                that.setDefaultAddress(that.setInfo, function(data) {
                    if ($.type(opts.changeCb) == "function") {
                        return opts.changeCb(data);
                    }
                })
                // 使用常用地址设置地址后，重新渲染省市区,重复区域需要优化
                var getInfo = that.getInfo
                var province = getInfo.province
                var city = getInfo.city
                var district = getInfo.district
                var pinfo = [province.id, province.cid, '',province.name, province.defaultId].join(',')
                var cinfo = [city.id, city.cid,city.lesId, city.name, city.defaultId].join(',')
                var dinfo = [district.id, district.cid,district.lesId, district.name, district.defaultId].join(',')
                if (!opts.city) {
                    $navTabs.html('<li class="active"  role=' + pinfo + '><p><a href="###">' + province.name + '</a><b class="arr"></b></p></li><li class="active"  role=' + cinfo + '><p><a href="###">' + city.name + '</a><b class="arr"></b></p></li><li class="active current" role=' + dinfo + '><p><a href="###">' + district.name + '</a><b class="arr"></b></p></li>')
                } else {
                    $navTabs.html('<li class="active" role=' + pinfo + '><p><a href="###">' + province.name + '</a><b class="arr"></b></p></li><li class="active current" role=' + cinfo + '><p><a href="###">' + city.name + '</a><b class="arr"></b></p></li>')
                }
                $prPanel.removeClass('active').eq(2).addClass('active')

                if (!!opts.state) {
                    var $li = $('<li></li>')
                    $prPanel.eq(0).html('').append($li);
                    that.getProvinceList(function(allProvinces) {
                        $.each(allProvinces, function(k, v) {
                            var info = [v.id, v.cid,'', v.name, v.defaultId].join(',')
                            if (v.id == province.id) {
                                $prPanel.children(':eq(0)').append('<span><a name="item_none_dizhi_sheng" href="###" class="on" role=' + info + '>' + v.name + '</a></span>')
                            } else {
                                $prPanel.children(':eq(0)').append('<span><a name="item_none_dizhi_sheng" href="###" role=' + info + '>' + v.name + '</a></span>')
                            }
                        })
                        $tabContent.append($prPanel);
                        that.getProvinces($city, $item, $toggle, $tabContent, $navTabs, $prPanel, $header, $group, function() {
                            return that.getCities($navTabs, $tabContent, $prPanel, $city, $toggle, function() {
                                return that.getDistricts($navTabs, $tabContent, $toggle, $city, function() {
                                    return that.setDetailAddress($toggle, $navTabs, $tabContent, $city);
                                })
                            })
                        });
                    })
                } else {}

                $navTabs.find('li').each(function(i) {
                    $(this).on('click', function(e) {
                        if ($(this).hasClass('active')) {
                            $(this).addClass('current').siblings().removeClass('current')
                            $tabContent.children(':eq(' + i + ')').addClass('active').siblings().removeClass('active')
                        };
                        return false;
                    })
                })
                return false;;
            })
        },
        // 获得市
        getCities: function($navTabs, $tabContent, $prPanel, $city, $toggle, cb) {
            var that = this;
            var opts = this.opts
            var citiesPanel = $tabContent.find('.ct-panel li')
            var districtsPanel = $tabContent.find('.ds-panel li')
            $tabContent.find('.pr-panel a').on('click', function(event) {
                if (event) event.stopPropagation()
                $navTabs.children(':eq(1)').find('a').html('请选择市').end().end().children(':eq(2)').removeClass('active').find('a').html('请选择县区');
                $(this).addClass('on').parent().siblings().find('a').removeClass('on');
                var role = $(this).attr('role');
                var roles = role.split(',')
                that.setInfo.province = {
                    id: roles[0],
                    cid: roles[1],
                    name: roles[3],
                    lesId:roles[2]
                }
                var mid = roles[0]
                var did = roles[4]
                var text = $(this).text()
                citiesPanel.html('')
                that.getCityById(mid, function(data) {
                    $.each(data, function(k, v) {
                        var cinfo = [v.id,v.cid,v.lesId,v.name,v.defaultId].join(',')
                        if (v.id == that.getInfo.city.id) {
                            citiesPanel.append('<span><a name="item_none_dizhi_shi" href="###" class="on" role=' + cinfo + '>' + v.name + '</a></span>')
                        } else {
                            citiesPanel.append('<span><a name="item_none_dizhi_shi" href="###" role=' + cinfo + '>' + v.name + '</a></span>')
                        }
                    })
                    cb()
                    // 判断是否是直辖市，如果是直辖市跳过选择市标签
                    if (data.length !== 1) {
                        $navTabs.children(':eq(1)').addClass('active current');
                        $tabContent.find('.pr-panel').removeClass('active').end().find('.ct-panel').addClass('active');
                    } else {

                        if (!!opts.city) {
                            $city.removeClass('active')
                        }
                        var info = [data[0].id + ',' + data[0].cid + ',' + data[0].name + ',' + data[0].defaultId].join(',')
                        $navTabs.children(':eq(1)').attr('role', info ).find('a').text(text)
                        that.setInfo.city = {
                            id: data[0].id,
                            cid: data[0].cid,
                            name: data[0].name,
                            lesId:data[0].lesId
                        }

                        that.getDefaultDistrict(data[0].defaultId, function(data) {
                            that.setInfo.district = {
                                id: data.id,
                                cid: data.cid,
                                name: data.name,
                                lesId:data.lesId
                            }
                            if (!!opts.city) {
                                that.setDefaultAddress(that.setInfo, function(data) {
                                    var pr = $toggle.find('span:eq(0)')
                                    var ct = $toggle.find('span:eq(1)')
                                    pr.attr('role', that.setInfo.province.id + ',' + that.setInfo.province.cid + ',' + that.setInfo.province.name).text(that.setInfo.province.name)
                                    ct.attr('role', that.setInfo.city.id + ',' + that.setInfo.city.cid + ',' + that.setInfo.city.name+','+that.setInfo.province.lesId).text(that.setInfo.city.name)
                                    pr.text() == ct.text() && $.trim(pr) != '吉林' ? $toggle.find('.pr').addClass('dn') : $toggle.find('.pr').removeClass('dn')
                                })
                            }
                            if ($.type(opts.cityCb) == "function") {
                                opts.cityCb(that.getInfo);
                            }
                            $navTabs.children(':eq(1)').removeClass('active')
                        })
                    }
                })

                if (/^10\,|^20\,|^30,|^320\,/.test(mid + ',')) {
                    that.changeFlag = !!0;
                    if (!opts.city) {
                        $navTabs.children().eq(1).removeClass('active current').end().eq(2).addClass('current')
                        $tabContent.find('.pr-panel').removeClass('active').end().find('.ds-panel').addClass('active');
                        that.getDistrictsById(did, function(data) {
                            districtsPanel.html('');
                            $.each(data, function(k, v) {
                                var info = [v.id,v.cid,v.lesId,v.name,v.defaultId].join(',')
                                districtsPanel.append('<span><a href="###" role=' + info + '>' + v.name + '</a></span>')
                            })
                            if ($.type(opts.cityCb) == "function") {
                                opts.cityCb(that.getInfo);
                            }
                            that.setDetailAddress($toggle, $navTabs, $tabContent, $city)
                        })
                        $navTabs.children(':eq(0)').addClass('active').removeClass('current')
                    }
                } else {
                    $navTabs.children(':eq(0)').removeClass('current')
                }
                $navTabs.children(':eq(0)').attr('role', role).find('a').text(text)
                return false;
            })
            // 第一次加载执行,初始化默认地址
            var mid = that.getInfo.province.id
            var cid = that.getInfo.city.id
            that.getCityById(mid, function(data) {
                citiesPanel.html('');
                $.each(data, function(k, v) {
                    var info = [v.id,v.cid,v.lesId,v.name,v.defaultId].join(',')
                    if (v.id == that.getInfo.city.id) {
                        citiesPanel.append('<span><a name="item_none_dizhi_shi" href="###" class="on" role=' + info + '>' + v.name + '</a></span>')
                    } else {
                        citiesPanel.append('<span><a name="item_none_dizhi_shi" href="###" role=' + info + '>' + v.name + '</a></span>')
                    }
                })
                // 判断是否是直辖市，如果是直辖市跳过选择市标签
                if (data.length == 1) {
                    $navTabs.children().eq(1).removeClass('active current')
                    $navTabs.children().eq(2).addClass('current')
                    $tabContent.find('.pr-panel').removeClass('active').end().find('.ds-panel').addClass('active');
                } else {
                    $navTabs.children(':eq(1)').addClass('active');
                }
                if (!!opts.city) {
                    if (data.length == 1) {
                        $navTabs.children(':eq(0)').addClass('active current').siblings().removeClass('active current')
                        $tabContent.children(':eq(0)').addClass('active').siblings().removeClass('active')
                    } else {
                        $tabContent.children(':eq(1)').addClass('active').siblings().removeClass('active')
                    }
                }
                cb()
            })
            that.getDistrictsById(cid, function(data) {
                districtsPanel.html('');
                $.each(data, function(k, v) {
                    var info = [v.id,v.cid,v.lesId,v.name,v.defaultId].join(',')
                    if (v.id == that.getInfo.district.id) {
                        districtsPanel.append('<span><a name="item_none_dizhi_qu" href="###" class="on" role=' + info + '>' + v.name + '</a></span>')
                    } else {
                        districtsPanel.append('<span><a name="item_none_dizhi_qu" href="###" role=' + info + '>' + v.name + '</a></span>')
                    }
                })
                that.setDetailAddress($toggle, $navTabs, $tabContent, $city)
            })
        },
        // 获得地区
        getDistricts: function($navTabs, $tabContent, $toggle, $city, cb) {
            var that = this;
            var opts = this.opts;
            var districtsPanel = $tabContent.find('.ds-panel li')
            $tabContent.find('.ct-panel a').on('click', function(event) {
                that.changeFlag = !!0;
                if (event) event.stopPropagation();
                $(this).addClass('on').parent().siblings().find('a').removeClass('on');
                var role = $(this).attr('role');
                that.setInfo.city = {
                    id: role.split(',')[0],
                    cid: role.split(',')[1],
                    lesId:role.split(',')[2],
                    name: role.split(',')[3]
                }
                var mid = role.split(',')[0];
                var text = $(this).text();
                if (!opts.city) {
                    $navTabs.children(':eq(2)').find('a').html('请选择县区')
                    districtsPanel.html('');
                    that.getDistrictsById(mid, function(data) {
                        $.each(data, function(k, v) {
                            var info = [v.id,v.cid,v.lesId,v.name,v.defaultId].join(',')
                            if (v.id == that.getInfo.district.id) {
                                districtsPanel.append('<span><a name="item_none_dizhi_qu" href="###" class="on" role=' + info + '>' + v.name + '</a></span>')
                            } else {
                                districtsPanel.append('<span><a name="item_none_dizhi_qu" href="###" role=' + info + '>' + v.name + '</a></span>')
                            }
                        })
                        cb()
                        if ($.type(opts.cityCb) == "function") {
                            opts.cityCb(that.getInfo);
                        }
                    })
                    $tabContent.find('.ct-panel').removeClass('active').end().find('.ds-panel').addClass('active')
                    $navTabs.children(':eq(1)').addClass('active').removeClass('current').attr('role', role).find('a').text(text).end().end().children(':eq(2)').addClass('active current')

                } else {
                    var id = role.split(',')[4];
                    that.getDefaultDistrict(id, function(data) {
                        $city.removeClass('active')
                        that.setInfo.district = {
                            id: data.id,
                            cid: data.cid,
                            name: data.name,
                            lesId:data.lesId
                        }
                        $navTabs.children(':eq(1)').attr('role', role).find('a').text(text)
                        var pr = $navTabs.find('a:eq(0)').text();
                        var ct = $navTabs.find('a:eq(1)').text();
                        var ds = that.setInfo.district.name;
                        pr == ct && $.trim(pr) != '吉林' ? $toggle.find('.pr').addClass('dn') : $toggle.find('.pr').removeClass('dn')
                        $toggle.find('.pr').text(pr).end().find('.ct').text(ct)
                        that.setDefaultAddress(that.setInfo, function(data) {
                            var pr = $toggle.find('span:eq(0)')
                            var ct = $toggle.find('span:eq(1)')
                            var info = that.setInfo
                            var province = info.province
                            var city = info.city
                            var pinfo = [province.id, province.cid, province.name,''].join(',')
                            var cinfo = [city.id, city.cid, city.name,'',city.lesId].join(',')
                            pr.attr('role', pinfo).text(province.name).removeClass('dn')
                            ct.attr('role', cinfo).text(city.name)
                        })
                        if ($.type(opts.cityCb) == "function") opts.cityCb(that.getInfo);
                    })
                }

                return false;
            })

        },
        // 设置最终地址；
        setDetailAddress: function($toggle, $navTabs, $tabContent, $city) {
            var that = this;
            var opts = this.opts
            $tabContent.find('.ds-panel a').on('click', function(event) {
                if (event) event.stopPropagation()
                $city.removeClass('active')
                $(this).addClass('on').parent().siblings().find('a').removeClass('on');
                var role = $(this).attr('role')
                var roles = role.split(',')
                that.setInfo.district = {
                    id: roles[0],
                    cid: roles[1],
                    lesId:roles[2],
                    name: roles[3]
                }
                var mid = roles[0];
                var text = $(this).text();
                var pr = $navTabs.find('a:eq(0)').text()
                var ct = $navTabs.find('a:eq(1)').text()
                var ds = $navTabs.find('a:eq(2)').text()
                var info = that.getInfo
                var province = info.province
                var city = info.city
                var district = info.district
                var pinfo = [province.id, province.cid, province.name].join(',')
                var cinfo = [city.id, city.cid, city.name,'',city.lesId].join(',')
                var dinfo = [district.id, district.cid, district.name,'',district.lesId].join(',')
                $navTabs.children(':eq(2)').attr('role', role).find('a').text(text)
                pr == ct && $.trim(pr) != '吉林' ? $toggle.find('.pr').addClass('dn') : $toggle.find('.pr').removeClass('dn')
                $toggle.find('.pr').attr('role', pinfo).text(pr).end().find('.ct').attr('role', cinfo).text(ct).end().find('.ds').attr('role', dinfo).text(text)
                // 向cookie中写入一个城市！
                that.setDefaultAddress(that.setInfo, function(data) {
                    if ($.type(opts.distCb) != "function" || $.type(opts.changeCb) != "function") {
                        return
                    }

                    if (that.changeFlag == false) {
                        opts.changeCb(data)
                        that.changeFlag = true
                    } else {
                        opts.distCb(data)
                    }

                })
                return false
            })
        },
        // 根据获取默认的地址;
        getAddressByDefault: function(cb) {
            ECity.API.getCity(function(data) {
                return cb(data)
            })
        },
        // 获取常用地址
        getUsedAddress: function(cb) {
            var data = ECity.API.getLastUsedCities()
            return cb(data)
        },
        // 获取省列表
        getProvinceList: function(cb) {
            ECity.API.getProvinceList(function(data) {
                return cb(data)
            })
        },
        // 根据mid获取城市信息
        getCityById: function(id, cb) {
            ECity.API.getCityList(id, function(data) {
                return cb(data)
            })
        },
        // 根据mid获取区县信息
        getDistrictsById: function(id, cb) {
            ECity.API.getDistrictList(id, function(data) {
                return cb(data)
            })
        },
        // 写入一个城市信息到cookie
        setDefaultAddress: function(data, cb) {
            ECity.API.setCity(data, function(data) {
                return cb(data)
            })
        },
        getDefaultDistrict: function(id, cb) {
            ECity.API.getDistrict(id, function(data) {
                return cb(data)
            })
        },
        getCity: function(data) {
            var that = this;
            that.opts.getCity(data)
        },
        getInfoByCityid: function(id, cb) {
            ECity.API.getProvinceAndCityByCityId(id, function(data) {
                var all = data.provinceAndCity
                var o = {}
                o.province = {
                    id: all.pMdmId,
                    cid: all.pMdmId,
                    name: all.pName
                }
                o.city = {
                    id: all.cMdmId,
                    cid: all.cCommerceId,
                    name: all.cName
                }
                o.district = {
                    id: '',
                    cid: '',
                    name: ''
                }
                cb(o)
            })
        }

    }

    // API
    window.mCity = {};
    mCity.API = {};
    mCity.API.getCity = function(cb) {
        ECity.API.getCity(function(data) {
            return cb(data)
        })
    }
    mCity.API.getCityId = function() {
        ECity.API.getCityId()
    };
    mCity.API.getDistrictId = function() {
        ECity.API.getDistrictId()
    };

    /***********
     * @配置参数
     * @city 是否只显示到市，默认为flase，显示到区县;
     * @state 是否按照地区排列，默认为flase，不按照地区排列，功能暂时未实现;
     * @used 是否显示常用地址，默认为true，显示常用地址，如果city为true，used必为fasle，此处的配置参数失效;
     * @cityCb 点击城市之后的 callback 默认为无！第一个参数是cookie中存在的当前的省市区的信息；
     * @distCb 点击区县之后的 callback 默认为无！第一个参数是cookie中存在的当前的省市区的信息；

     ***********/
    var defaults = {
        city: false,
        state: true,
        used: true,
        cityCb: $.noop,
        distCb: $.noop,
        getCity: $.noop,
        changeCb: $.noop,
        cityId: ''
    };

    // 备用！开发中，根据环境判断hostName
    var host = document.location.host;
    var hostDomain = document.location.hostname;
    var protocol = document.location.protocol;
    var port = document.location.port;
    var root = '/ip-web';

    var hostName;
//  if (/\.suning\.com/ig.test(host)||/\.cnsuning\.com/ig.test(host)) {
//      hostName = protocol+'//'+hostDomain;
////	  hostName ='http://localhost:8080/ip-web';
//  }else {
//	  hostName = protocol+'//'+hostDomain+':'+port+root;
//  };
    if (/\.cnsuning\.com/ig.test(host)) {
        if(host.indexOf("pre")!=-1){
            hostName = protocol+'//ipservicepre.cnsuning.com';
//		  hostName = "http://localhost:8080/ip-web";
        }else{
            hostName = protocol+'//ipservicepre.cnsuning.com';
        }
    } else if (/\.suning\.com/ig.test(host)) {
        hostName = protocol+'//ipservice.suning.com';
    } else {
        hostName = 'http://localhost:8080/ip-web';
    };
    $.fn.mCity = function(opt) {
        var that = this;

        try{
            ECity.API.init(opt.city?opt.city:defaults.city);
        }catch(e){};
        return that.each(function() {
            var opts = $.extend({}, defaults, opt);
            Methods().init(this, opts);
        })

    }
})(jQuery)
window._ty_rum&&window._ty_rum.server||function(t){function e(){}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(){var t=et(ot);return t||(t=it(),rt(ot,t)),t}function a(){var t=i(st);return t||(t=it(),o(st,t)),t}function i(t){if("string"!=typeof t)return null;var e=A.cookie;if(!e)return null;var r=null,n=e.split(";");return W.each(n,function(e){var n=e.split("=");if(W.trim(n[0])===W.trim(t))return r=n[1],!0}),r}function o(t,e,r){var n=t+"="+e;if(r){var a=new Date;a.setTime(a.getTime()+1e3*r),n+=";expires="+a.toGMTString()}A.cookie=n}function s(t){switch(typeof t){case"object":if(!t)return"null";if(t instanceof Array){for(var e="[",r=0;r<t.length;r++)e+=(r>0?",":"")+s(t[r]);return e+"]"}if(t instanceof Date)return t.getTime().toString();var e="{",r=0;for(var n in t)if("function"!=typeof t[n]){var a=s(t[n]);e+=(r>0?",":"")+s(n)+":"+a,r++}return e+"}";case"string":return'"'+t.replace(/([\"\\])/g,"\\$1").replace(/\n/g,"\\n")+'"';case"number":return t.toString();case"boolean":return t?"true":"false";case"function":return s(t.toString());case"undefined":default:return'"undefined"'}}function u(t){for(var e in t)return!1;return!0}function c(t){return $?$(t):t}function f(){return Date.now?Date.now():(new Date).valueOf()}function l(t,e,r){function n(){var t=W.args.apply(this,arguments);return e(i,t,r)}var a,i=t[t.length-1];if("function"==typeof i){switch(i.length){case 0:a=function(){return n.apply(this,arguments)};break;case 1:a=function(t){return n.apply(this,arguments)};break;case 2:a=function(t,e){return n.apply(this,arguments)};break;case 3:a=function(t,e,r){return n.apply(this,arguments)};break;case 4:a=function(t,e,r,a){return n.apply(this,arguments)};break;case 5:a=function(t,e,r,a,i){return n.apply(this,arguments)};break;default:for(var o=[],s=0,u=i.length;s<u;s++)o.push("_"+s);a=eval("(function(){return function("+o.join(",")+"){var args = [].slice.call(arguments, 0);return e(i, args, r);};})();")}t[t.length-1]=a}return t}function p(t,e){return t&&e&&(t.moduleName=e),t}function d(t,e,r){return function(){try{q=e,r&&h(e),t.apply(this,arguments),r&&m()}catch(n){throw r&&m(),p(n,e)}}}function h(e){W.each(["setTimeout","setInterval"],function(r){W.wrap(!0,t,r,function(t){return function(){var r,n=W.args.apply(this,arguments),a=n[0];return"function"==typeof a&&(r=d(a,e,!0)),r&&(n[0]=r),t.apply?t.apply(this,n):Function.prototype.apply.apply(t,[t,n])}})})}function m(){W.each(["setTimeout","setInterval"],function(e){W.unwrap(t,e)})}function v(t){J&&W.wrap(!1,J.prototype,"addEventListener",function(e){return function(){var r,n=W.args.apply(this,arguments),a=n[1];return"function"==typeof a&&(r=d(a,t,!0)),r&&(n[1]=r),e.apply(this,n)}}),h(t)}function y(){J&&W.unwrap(J.prototype,"addEventListener"),m()}function g(t){return function(t,e){}}function _(){var t=W.parseJSON(et(lt))||{};return delete t[pt],t}function S(){if(this.errs.length){var t=function(t){var e=[],r={};W.each(t,function(t){var e=L(t[1],t[2],t[3],t[6]);r[e]?r[e][4]+=1:r[e]=[t[1],t[2],t[3],"#"==t[4]?A.URL:t[4],1,t[5],t[6],t[7]]});for(var n in r)e.push(r[n]);return e}(this.errs),e=this;W.POST(W.mkurl(Q.server.beacon,"err",{fu:F?F:F++,os:parseInt((f()-(j||Q.st))/1e3)}),W.stringify({datas:t}),{},function(t,r){t||(e.errs=[])})}}function w(){return t.nbperf&&t.nbperf.data}function T(){dt.initend()}function b(){"complete"===A.readyState&&dt.initend()}function E(t,e,r){var n=A.createElement(t);try{for(var a in e)n[a]=e[a]}catch(i){var o="<"+t;for(var a in e)o+=" "+a+'="'+e[a]+'"';o+=">",r||(o+="</"+t+">"),n=A.createElement(o)}return n}function k(t){function e(){dt.send()}return!!Q.load_time||(dt.initend(),Q.load_time=f(),void(9===t?e():setTimeout(e,0)))}function x(){mt||k(9),ht||W.bind(S,dt)(),mt=1}function O(){dt.touch||(dt.touch=f())}function N(t){if(t[6]){var e=t[4],r=t[5];if(r&&"string"==typeof r&&e){r=r.split(/\n/);var n=H.exec(r[0]);n||(n=H.exec(r[1])),n&&n[1]!=e&&(t[4]=n[1]||e,t[2]=n[2]||t[2],t[3]=n[3]||t[3])}}}function L(t,e,r,n){return String(t)+String(e)+String(r)+String(n)}function R(e){var n=arguments,a="unknown",i=t[r(X)+"Event"],o=[f()];if(0!=n.length){if("string"==typeof e){var s=n.length<4?n.length:4;o[1]=n[0],s>2&&(o[2]=n[2],o[3]=0,o[4]=n[1]),s>3&&n[3]&&(o[3]=n[3])}else if(e instanceof Event||i&&e instanceof i){if(o[1]=e.message||(e[X]&&e[X].constructor.name)+(e[X]&&e[X].message)||"",o[2]=e.lineno?e.lineno:0,o[3]=e.colno?e.colno:0,o[4]=e.filename||e[X]&&e[X].fileName||e.target&&e.target.baseURI||"",!o[4]&&K)return;o[4]==A.URL&&(o[4]="#"),e[X]?(o[5]=e[X].stack,o[6]=e[X].moduleName):(o[5]=null,o[6]=null);var u=L(o[1],o[2],o[3],o[6]);if(o[7]=vt[u]?0:1,vt[u]=!0,o[1]===a&&o[4]===a)return;N(o)}dt.errs.push(o)}}function C(t){return function(){var e=arguments;if(!this._ty_wrap){var r=W.args.apply(this,e);this._ty_rum={method:r[0],url:r[1],start:f()}}try{return t.apply(this,e)}catch(n){return Function.prototype.apply.call(t,this,e)}}}function I(e){return"string"==typeof e?e.length:t.ArrayBuffer&&e instanceof ArrayBuffer?e.byteLength:t.Blob&&e instanceof Blob?e.size:e&&e.length?e.length:0}function P(e){return function(){function r(t){var e,r,n=u._ty_rum;if(n){if(4!==n.readyState&&(n.end=f()),n.s=u.status,""==u.responseType||"text"==u.responseType)n.res=I(u.responseText);else if(u.response)n.res=I(u.response);else try{n.res=I(u.responseText)}catch(i){n.res=0}if(n.readyState=u.readyState,n.cb_time=c,e=[n.method+" "+n.url,n.s>0?n.end-n.start:0,c,n.s,n.s>0?0:t,n.res,n.req],n.r&&(r=a(u),r&&(r=r.xData)&&(e.push(r.id),e.push(r.action),e.push(r.time&&r.time.duration),e.push(r.time&&r.time.qu))),Q.aa.push(e),Q.server.custom_urls&&Q.server.custom_urls.length&&!dt.ct){if(!Q.pattern){Q.pattern=[];for(var o=0;o<Q.server.custom_urls.length;o++)Q.pattern.push(new RegExp(Q.server.custom_urls[o]))}for(var o=0;o<Q.pattern.length;o++)if(n.url.match(Q.pattern[o])){dt.ct=n.end+c;break}}dt.sa(),u._ty_rum=null}}function n(){4==u.readyState&&r(0)}function a(e){var r;if(e.getResponseHeader){var n=W.parseJSON(e.getResponseHeader("X-Tingyun-Tx-Data"));n&&n.r&&e._ty_rum&&n.r+""==e._ty_rum.r+""&&(r={name:e._ty_rum.url,xData:n},ft&&t._ty_rum.c_ra.push(r))}return r}function i(t){return function(){var e,r;4==u.readyState&&u._ty_rum&&(u._ty_rum.end=e=f(),u._ty_rum.readyState=4);try{q&&h(q),r=t.apply(this,arguments),q&&m()}catch(a){throw a=p(a,q),q&&m(),q=null,a}return 4==u.readyState&&(c=f()-e),n(),r}}function o(t){return function(){var e=u._ty_rum;return!e||("progress"==t||("abort"==t?r(905):"loadstart"==t?e.start=f():t==X?r(990):"timeout"==t&&r(903),!0))}}function s(t,e){e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++){var n=e[r];W.sh(t,n,o(n),!1)}}if(!this._ty_wrap){this._ty_rum.start=f(),this._ty_rum.req=arguments[0]?I(arguments[0]):0;var u=this,c=0,l=W.wrap(!1,this,"onreadystatechange",i);l||W.sh(this,"readystatechange",n,!1),s(this,[X,"progress","abort","load","loadstart","loadend","timeout"]),l||setTimeout(function(){W.wrap(!1,u,"onreadystatechange",i)},0)}var d=function(){function t(t){var e={},r=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?/.exec(t);return r&&(e.protocol=r[1]?r[1]+":":"http:",e.hostname=r[3],e.port=r[4]||""),e}return function(e){var r=location;if(e=W.trim(e)){if(e=e.toLowerCase(),e.startsWith("//")&&(e=r.protocol+e),!e.startsWith("http"))return!0;var n=t(e),a=n.protocol===r.protocol&&n.hostname===r.hostname;return a&&(a=n.port===r.port||!r.port&&("http:"===r.protocol&&"80"===n.port||"https:"===r.protocol&&"443"===n.port)),a}return!1}}(),v=arguments;try{var y=Q.server;y&&y.id&&this._ty_rum&&d(this._ty_rum.url)&&(this._ty_rum.r=(new Date).getTime()%1e8,this.setRequestHeader&&this.setRequestHeader("X-Tingyun-Id",y.id+";r="+this._ty_rum.r))}catch(g){}try{return e.apply(this,v)}catch(_){return Function.prototype.apply.call(e,this,v)}}}function D(){var e=Q.agent;if(!e){var r=t._ty_rum;if(r&&r.agent)e=r.agent;else{var n="TINGYUN_DATA",a=i(n);if(a){try{e=W.parseJSON(decodeURIComponent(a))}catch(s){}o(n,"",-1e3)}}e&&(Q.agent=e)}return e}var q,U=t.XMLHttpRequest,A=document,M=Object.defineProperty,B=t.define,J=t.EventTarget,F=0,H=new RegExp("([a-z]+:/{2,3}.*):(\\d+):(\\d+)"),$=t.encodeURIComponent,j=null,X=["err","or"].join(""),G="on"+X,z=t[r(X)],W={wrap:function(t,e,r,n,a){try{var i=e[r]}catch(o){if(!t)return!1}if(!i&&!t)return!1;if(i&&i._ty_wrap)return!1;try{e[r]=n(i,a)}catch(o){return!1}return e[r]._ty_wrap=[i],!0},unwrap:function(t,e){try{var r=t[e]._ty_wrap;r&&(t[e]=r[0])}catch(n){}},each:function(t,e){if(t){var r;for(r=0;r<t.length&&(!t[r]||!e(t[r],r,t));r+=1);}},mkurl:function(t,e){var r=arguments,i=/^https/i.test(A.URL)?"https":"http";if(i=i+"://"+t+"/"+e+"?av=1.2.1.0919&v=1.3.2&key="+c(Q.server.key)+"&ref="+c(A.URL)+"&rand="+f()+"&pvid="+at+"&did="+c(n())+"&sid="+c(a()),"pf"!==e&&Q){var o=D();o&&o.n&&(i+="&n="+c(o.n))}if(r.length>2){var s=r[2];for(var u in s)i+="&"+u+"="+s[u]}for(var l in Y)i+="&"+l+"="+c(Y[l]);return i},GET:function(t,e){function r(){e&&e.apply(this,arguments),n.parentNode&&n.parentNode.removeChild(n)}if(navigator&&navigator.sendBeacon&&nt.test(t))return navigator.sendBeacon(t,null);var n=A.createElement("img");return n.setAttribute("src",t),n.setAttribute("style","display:none"),this.sh(n,"readystatechange",function(){"loaded"!=n.readyState&&4!=n.readyState||r("loaded")},!1),this.sh(n,"load",function(){return r("load"),!0},!1),this.sh(n,X,function(){return r(X),!0},!1),A.body.appendChild(n)},fpt:function(t,e,r){var n=E("div",{style:"display:none"},!1),a=E("iframe",{name:"_ty_rum_frm",width:0,height:0,style:"display:none"},!1),i=E("form",{style:"display:none",action:t,enctype:"application/x-www-form-urlencoded",method:"post",target:"_ty_rum_frm"},!1),o=E("input",{name:"data",type:"hidden"},!0);return o.value=e,i.appendChild(o),n.appendChild(a),n.appendChild(i),A.body.appendChild(n),i.submit(),a.onreadystatechange=function(){"complete"!==a.readyState&&4!==a.readyState||(r(null,a.innerHTML),A.body.removeChild(n))},!0},POST:function(e,r,n,a){if(this.ie)return this.fpt(e,r,a);if(navigator&&navigator.sendBeacon&&nt.test(e)){var i=navigator.sendBeacon(e,r);return a(!i),i}var o;if(t.XDomainRequest)return o=new XDomainRequest,o.open("POST",e),o.onload=function(){a(null,o.responseText)},this.sh(o,"load",function(){a(null,o.responseText)},!1),this.sh(o,X,function(){a("POST("+e+")err")},!1),this.wrap(!0,o,G,function(t){return function(){return a&&a("post err",o.responseText),!0}}),o.send(r),!0;if(!U)return!1;o=new U,o.overrideMimeType&&o.overrideMimeType("text/html");try{o._ty_wrap=1}catch(s){}var u=0;o.onreadystatechange=function(){4==o.readyState&&200==o.status&&(0==u&&a(null,o.responseText),u++)},o[G]&&this.wrap(!0,o,G,function(t){return function(){return a("post err",o.responseText),"function"!=typeof t||t.apply(this,arguments)}});try{o.open("POST",e,!0)}catch(s){return this.fpt(e,r,a)}for(var c in n)o.setRequestHeader(c,n[c]);return o.send(r),!0},sh:function(t,e,r,n){return t.addEventListener?t.addEventListener(e,r,n):!!t.attachEvent&&t.attachEvent("on"+e,r)},args:function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);return t},stringify:s,parseJSON:function(e){if(e&&"string"==typeof e){var r=t.JSON?t.JSON.parse:function(t){return new Function("return "+t)()};return r(e)}return null},trim:tt?function(t){return null==t?"":tt.call(t)}:function(t){return null==t?"":t.toString().replace(/^\s+/,"").replace(/\s+$/,"")},extend:function(t,e){if(t&&e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},bind:function(t,e){return function(){return t.apply(e,arguments)}}},Y={},Z={host:"cshst",url:"csurl"},Q=t._ty_rum=t.TINGYUN=W.extend({st:f(),ra:[],c_ra:[],aa:[],snd_du:function(){return this.server.adu?1e3*this.server.adu:1e4},cc:function(){return this.server.ac?this.server.ac:10},config:function(t,e){var r;if("object"==typeof t)r=t;else{if("string"!=typeof t||void 0===e)throw new z("illegal arguments");r={},r[t]=e}for(var n in r)n in Z?Y[Z[n]]=r[n]:Y[n]=r[n];return this},ty_set_userprofile:function(t,r){if(!t||!t.id)throw new z("User or user's id is empty.");var n=W.mkurl(Q.server.beacon,"userprofile");W.POST(n,W.stringify({user:t,properties:r||{}}),{},e)},ty_track_event:function(t,r,n){if("string"!=typeof t)throw new z("Event Id is invalid.");var a=W.mkurl(Q.server.beacon,"event");W.POST(a,W.stringify({event_id:t,tag:r||"",properties:n||{},uf:_()}),{},e)},setUserLabel:function(t){if("string"==typeof t)return this.config("ulabel",t.substr(0,128));throw new z("illegal arguments")}},t._ty_rum||{});var ty_rum=Q;ty_rum.server = {id:'p35OnrDoP8k',beacon:'snb.cnsuning.com',beacon_err:'snb.cnsuning.com',key:'4gA5HRiCw8g',trace_threshold:7000,custom_urls:[],sr:1.0};if(Q.server&&!(Q.server.sr&&Math.random()>=Q.server.sr)){var V="ignore_err",K=!(V in Q.server)||Q.server[V],tt=String.prototype.trim;String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.indexOf(t,e)===e});var et,rt,nt=/^http/i,at=function(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+"-"+t()+t()}(),it=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var r=t.toString(16),n=e-r.length,a="0";n>0;n>>>=1,a+=a)1&n&&(r=a+r);return r}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}(),ot="TY_DISTINCT_ID",st="TY_SESSION_ID",ut=function(){try{return localStorage.setItem(at,at),localStorage.removeItem(at),!0}catch(t){return!1}}();ut?(et=W.bind(localStorage.getItem,localStorage),rt=W.bind(localStorage.setItem,localStorage)):(et=i,rt=o);try{M&&M(t,"define",{get:function(){return B},set:function(t){"function"==typeof t&&(t.amd||t.cmd)?(B=function(){var e=W.args.apply(this,arguments);if(3!==e.length)return t.apply(this,e);var r="string"==typeof e[0]?e[0]:"anonymous";return t.apply(this,l(e,function(t,e,r){var n;try{q=r,v(r),n=t.apply(this,e),y()}catch(a){throw y(),p(a,r)}return n},r))},W.extend(B,t)):B=t},configurable:!0})}catch(ct){}var ft=t.performance?t.performance:t.Performance;ft&&(W.sh(ft,"resourcetimingbufferfull",function(){var t=ft.getEntriesByType("resource");t&&(Q.ra=Q.ra.concat(t),ft.clearResourceTimings())},!1),W.sh(ft,"webkitresourcetimingbufferfull",function(){var t=ft.getEntriesByType("resource");t&&(Q.ra=Q.ra.concat(t),ft.webkitClearResourceTimings())},!1));var lt="_ty_uf_data",pt="_ty_first_day";!function(){function e(t){var e=t[pt];e?(e=parseInt(e),new Date(e).toDateString()===(new Date).toDateString()?t[a]=!0:t[a]=!1,t[i]=!1):(t[pt]=f(),t[a]=!0,t[i]=!0)}function r(t){var e={};if(t=t||location.href,!t)return e;var r=t.indexOf("?");return r>=0&&(t=t.substring(r+1)),t?(W.each(t.split("&"),function(t){var r=t.split("="),a=n(r[0]),i=n(r[1]);a&&i&&(e[a]=i)}),e):e}function n(t){try{return decodeURIComponent(t)}catch(e){}return null}var a="is_first_day",i="is_first_time",o="latest_referrer",s=2592e3,u=W.parseJSON(et(lt))||{};e(u);var c=r(location.search),l=["utm_source","utm_medium","utm_term","utm_content","utm_campaign"];W.each(l,function(t){c[t]&&(u["latest_"+t]=c[t])}),u.pageref=A.referrer||"",u.first_browser_language=navigator.language||navigator.browserLanguage,u[o]=u[o]||"",u.screen_height=t.screen&&t.screen.height,u.screen_width=t.screen&&t.screen.width,rt(lt,W.stringify(u),s)}();for(var dt=Q.metric={ready:function(){return Q.load_time},initend:function(){function t(){dt.sa()}Q.end_time||(Q.end_time=f(),this._h=setInterval(t,2e3))},send:function(){function e(){function e(t){return n[t]>0?n[t]-a:0}var r={};if(!ft&&(ft=w(),"string"==typeof ft&&(ft=W.parseJSON(ft),u(ft))))return r;if(ft&&ft.timing){var n=ft.timing;a=n.navigationStart;var i=e("domainLookupStart"),o=e("domainLookupEnd"),s=e("redirectStart"),f=e("redirectEnd"),l=e("connectStart"),p=e("connectEnd");r={f:e("fetchStart"),qs:e("requestStart"),rs:e("responseStart"),re:e("responseEnd"),os:e("domContentLoadedEventStart"),oe:e("domContentLoadedEventEnd"),oi:e("domInteractive"),oc:e("domComplete"),ls:e("loadEventStart"),le:e("loadEventEnd"),tus:e("unloadEventStart"),tue:e("unloadEventEnd")},p-l>0&&(r.cs=l,r.ce=p),o-i>0&&(r.ds=i,r.de=o),(f-s>0||f>0)&&(r.es=s,r.ee=f),0==r.le&&(r.ue=Q.load_time-(w()?Q.st:a));var d;if(n.msFirstPaint)d=n.msFirstPaint;else if(t.chrome&&chrome.loadTimes){var h=chrome.loadTimes();h&&h.firstPaintTime&&(d=1e3*h.firstPaintTime)}else Q.firstPaint&&(d=Q.firstPaint);d&&(r.fp=Math.round(d-a)),n.secureConnectionStart&&(r.sl=e("secureConnectionStart"))}else r={t:a,os:Q.end_time-a,ls:Q.load_time-a,le:Q.load_time-a};r.je=dt.errs.length,dt.ct&&(r.ct=dt.ct-a),dt.touch&&(r.fi=dt.touch-a);var m=D();return m&&(r.id=c(m.id),r.a=m.a,r.q=m.q,r.tid=c(m.tid),r.n=c(m.n),m.ulabel&&Q.setUserLabel(m.ulabel)),r.sh=t.screen&&t.screen.height,r.sw=t.screen&&t.screen.width,r}function r(e){var r=t._ty_rum.c_ra;if(e)for(var n=r.length-1;n>=0;n--)if(e.indexOf(r[n].name)>-1)return r[n].xData;return null}function n(t){function e(t){return f[t]>0?f[t]:0}var n={tr:!1,tt:c(A.title),charset:A.characterSet,uf:_()};if(t<Q.server.trace_threshold)return n;n.tr=!0;var i=ft;if(i||(i=w(),"string"==typeof i&&(i=W.parseJSON(i))),i){var o=Q.ra,s=null;i.getEntriesByType?s=i.getEntriesByType("resource"):i.getEntries&&(s=i.getEntries),s&&(o=o.concat(s),i.webkitClearResourceTimings&&i.webkitClearResourceTimings(),i.clearResourceTimings&&i.clearResourceTimings()),n.res=[];for(var u=0;u<o.length;u++){var f=o[u],l={o:e("startTime"),rt:f.initiatorType,n:f.name,f:e("fetchStart"),ds:e("domainLookupStart"),de:e("domainLookupEnd"),cs:e("connectStart"),ce:e("connectEnd"),sl:e("secureConnectionStart"),qs:e("requestStart"),rs:e("responseStart"),re:e("responseEnd")};w()&&(l.ec=f[X+"Code"]||0);var p=r(f.name);p&&(l.aid=p.id,l.atd=p.trId,l.an=p.action,l.aq=p.time&&p.time.qu,l.as=p.time&&p.time.duration),n.res.push(l)}if(dt.errs.length){n.err=[];for(var u=0,d=dt.errs,h=d.length;u<h;u++){var m=d[u][0]-(w()?Q.st:a);n.err.push({o:Math.round(m),e:d[u][1],l:d[u][2],c:d[u][3],r:d[u][4],ec:h,s:d[u][5],m:d[u][6],ep:d[u][7]})}}}return n}if(this.sended)return!1;if(!this.ready())return!1;var a=Q.st,i={},o={};try{if(o=e(),!o||u(o))throw new z("err:empty pf");i=n(o.ls>0?o.ls:Q.load_time-a),i=i?W.stringify(i):"";var s=W.mkurl(Q.server.beacon,"pf",o);j=f(),0!=i.length&&W.POST(s,i,{},g("POST"))||W.GET(s),this.sended=!0;var l=W.bind(S,this);l(),setInterval(l,1e4),this.sa(1)}catch(p){ht=!0}return!0},sa:function(t){(this.ready()||t)&&(t||(t=!this._last_send||f()-this._last_send>Q.snd_du()||Q.aa.length>=Q.cc()),Q.aa.length>0&&t&&(this._last_send=f(),W.POST(W.mkurl(Q.server.beacon,"xhr"),W.stringify({xhr:Q.aa}),{},g("POST")),Q.aa=[]))},errs:[]},ht=!1,mt=null,vt={},yt=[["load",k],["beforeunload",x],["pagehide",x],["unload",x]],gt=0;gt<yt.length;gt++)W.sh(t,yt[gt][0],yt[gt][1],!1);t.addEventListener?W.sh(t,X,R,!1):t[G]=function(t,e,r,n,a){if(e||!K){var i=[f(),t,r,n,e==A.URL?"#":e],o=L(t,r,n,a&&a.moduleName);i=i.concat([a&&a.stack,a&&a.moduleName,vt[o]?0:1]),vt[o]=!0,N(i),dt.errs.push(i)}};for(var _t=[["scroll",O],["keypress",O],["click",O],["DOMContentLoaded",T],["readystatechange",b]],gt=0;gt<_t.length;gt++)W.sh(A,_t[gt][0],_t[gt][1],!1);if(W.wrap(!1,t,"requestAnimationFrame",function(e){return function(){return Q.firstPaint=f(),t.requestAnimationFrame=e,e.apply(this,arguments)}}),U)if(U.prototype)W.wrap(!1,U.prototype,"open",C),W.wrap(!1,U.prototype,"send",P);else{W.ie=7;var St=U;t.XMLHttpRequest=function(){var t=new St;return W.wrap(!1,t,"open",C),W.wrap(!1,t,"send",P),t}}else t.ActiveXObject&&(W.ie=6)}}(window);