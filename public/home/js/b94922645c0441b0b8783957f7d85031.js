var mySuning=mySuning||{mySuningFavoriteNoticePartnumber:null,mySuningFavoriteNoticeShopId:null,mySuningFavoriteNoticeEntrace:null};var esjs=document.getElementsByTagName("script");var escss=document.getElementsByTagName("link");var version;var lesCityCode=$("#lesCityCode").val();var lesProviceId=$("#lesProviceId").val();var lesDistributeCode=$("#lesDistributeCode").val();var icpsUrl="//icps.suning.com/icps-web/getVarnishAllPrice014";function isInclude(a,c){if(c){for(var b=0;b<esjs.length;b++){if(esjs[b][c?"src":"href"].indexOf(a)!=-1){return true}}return false}else{for(var b=0;b<escss.length;b++){if(escss[b][c?"src":"href"].indexOf(a)!=-1){return true}}return false}}$(document).ready(function(){if(!isInclude("jquery",true)){alert("请引入jQuery.js")}$("script").each(function(){if($(this).attr("src")!=null&&typeof($(this).attr("src"))!=undefined&&$(this).attr("src")!=undefined&&$(this).attr("src").indexOf("favorite-api")!=-1){if($(this).attr("src").indexOf("?")<=0){version=""}else{version=$(this).attr("src").substring($(this).attr("src").indexOf("?"))}return false}});if(!isInclude("passport",true)){var c='<script>var passport_config = { base: "//favorite.suning.com/", loginTheme: "b2c_pop" };<\/script>';$("title").after(c);var a=document.createElement("script");a.src="https://passport.suning.com/ids/js/passport.js";a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}var d=window.location.protocol;if(!isInclude("SFE.dialog",true)){var a=document.createElement("script");if(d=="http:"){a.src="http://res.suning.cn/project/myfavorite/js/SFE.dialog.js"}else{a.src="https://sslres.suning.com/project/myfavorite/js/SFE.dialog.js"}a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}if(!isInclude("jquery.cookie",true)){var a=document.createElement("script");if(d=="http:"){a.src="http://res.suning.cn/project/myfavorite/js/jquery.cookie.min.js"}else{a.src="https://sslres.suning.com/project/myfavorite/js/jquery.cookie.min.js"}a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}});function checkAndoridNofity(){baseApi.checkNotifyStatus(function(a){return""+a})}mySuning.requestDialog=function(a,b){$.ajax({url:a+b,type:"GET",dataType:"script",async:false,cache:false})};function favoriteCallback(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom)},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"});$.mDialog({css:{width:"450px"},message:$(".dialog-addfavor"),overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300})}function fiftyCallBack(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom);mySuning.getRecommendedData("1-2",globalPartNumber,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$(".netuser-showWin-title").css("display","block");$("#tipmessage").css("display","none");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>您已订阅满50次的降价通知</h3>")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>您已订阅满50次的到货通知</h3>")}}},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}function twoCallBack(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom);mySuning.getRecommendedData("1-2",globalPartNumber,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$(".netuser-showWin-title").css("display","block");$("#tipmessage").css("display","none");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>您已订阅过该商品的降价通知</h3>")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>您已订阅过该商品的到货通知</h3>")}}},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}function noticeCallBack(a){$.mDialog({css:{width:"470px"},http:function(b,c){b.find(".content").html(a.htmlDom);if(noticeType=="priceDown"){$("#expectPrice").val(parseInt(globalPartPrice));if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){$("#isFavoriteAdd").css("display","none")}$(".exOrder-show-win").css("display","none")}else{if(noticeType=="arrival"){if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){$("#isFavoriteAdd").css("display","none")}else{$("#check-addfav").attr("checked","checked")}$("#arrival_text").css("display","block");$("#priceLi").css("display","none");$(".exOrder-show-win").css("display","none")}}},overlayCss:{background:"black ",opacity:"0.3"},title:titleName})}mySuning.doSuccess=function(c,d,h,f,a,e){var g=c;if(g.returnCode==0){if(d=="product"){var b="//favorite.suning.com/ajax/productFavoriteSuccessLayer.do?partnumber="+h+"&shopId="+f+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#spsc_cksc").attr("name",e+"_spsc_cksc");$("#spsc_bjbq").attr("name",e+"_spsc_bjbq")}}else{if(d=="shop"){var b="//favorite.suning.com/ajax/shopFavoriteSuccessLayer.do?shopId="+f+"&entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#dpsc_cksc").attr("name",e+"_dpsc_cksc");$("#dpsc_bjbq").attr("name",e+"_dpsc_bjbq")}}}}else{if(g.returnCode==1){if(d=="product"){var b="//favorite.suning.com/ajax/productFavoritedLayer.do?partnumber="+h+"&shopId="+f+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#spsc_cksc").attr("name",e+"_spsc_cksc");$("#spsc_bjbq").attr("name",e+"_spsc_bjbq")}}else{if(d=="shop"){var b="//favorite.suning.com/ajax/shopFavoritedLayer.do?shopId="+f+"&entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#dpsc_cksc").attr("name",e+"_dpsc_cksc");$("#dpsc_bjbq").attr("name",e+"_dpsc_bjbq")}}}}else{var b="//favorite.suning.com/ajax/"+d+"FavoriteFailLayer.do?entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback")}}};mySuning.doGET=function(b,c,g,e,a,d){$.ajax({type:"GET",async:false,url:b,dataType:"jsonp",jsonpCallback:"myCallback",success:function f(h){mySuning.doSuccess(h,c,g,e,a,d)}})};mySuning.doJsonpGET=function(a,b){$.ajax({type:"GET",async:false,url:a,dataType:"jsonp",jsonpCallback:b})};mySuning.add2ProductFavorite=function(j,h,b,i,c,e,f,d){globalEntrance=b;globalShopId=h;ajaxUrl=window.location.href;var a=/^[0-9]{18}$/;var g=/^[0-9]{10}$/;if(!(a.test(j)&&g.test(h))){alert("传入参数不正确");return}if("shoppingCart1shopping"==b){url="https://favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}else{if("shoppingCart1"==b){url="https://favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}else{url="//favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}}if(e!==null&&e!==undefined&&e!==""){url=url+"&pdType="+e}if(f!==null&&f!==undefined&&f!==""){url=url+"&shoptType="+f}probeAuthStatus(function(){if(i){mySuning.doJsonpGET(url,i)}else{mySuning.doGET(url,"product",j,h,c)}},function(){ensureLogin(function(){mySuning.add2ProductFavorite(j,h,b,i,c,e,f,d);if(typeof d=="function"){d()}})})};mySuning.add2ShopFavorite=function(e,a,d,b){globalEntrance=a;var c=/^[0-9]{10}$/;if(!c.test(e)){alert("传入参数不正确");return}url="//favorite.suning.com/ajax/addShopFavorite.do?shopId="+e+"&entrance="+a;probeAuthStatus(function(){mySuning.doGET(url,"shop","",e,a,d)},function(){ensureLogin(function(){mySuning.add2ShopFavorite(e,a,d,b);if(typeof b=="function"){b()}})})};var tel=/^[a-zA-Z0-9_\u4e00-\u9fa5]{0,10}$/;mySuning.addTag=function(b,a){var d=encodeURI(b);$.ajax({type:"GET",async:false,url:d,dataType:"jsonp",jsonpCallback:"myCallback",success:function c(e){var f=e;if(f.returnCode==0){a.find("#btns").css("display","none");a.find("#ok").css("display","block");setTimeout(function(){$.unmDialog()},2000)}else{if(f.returnCode=1){a.find("#error").css("display","block")}else{if(f.returnCode=-2){a.find("#notRight").css("display","block")}}}}})};mySuning.addTag1=function(b,a){var d=encodeURI(b);$.ajax({type:"GET",async:false,url:d,dataType:"jsonp",jsonpCallback:"myCallback",success:function c(e){var f=e;if(f.returnCode==0){a.find(".add-sign").find("a").remove();a.find(".error-ok").css("display","block");setTimeout(function(){$.unmDialog()},2000)}else{if(f.returnCode=1){a.find(".error-msg").html("添加标签失败！");a.find(".error-msg").css("display","block");a.find("a").prev().addClass("error-tbx")}else{if(f.returnCode=-2){a.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");a.find(".error-msg").css("display","block");a.find("a").prev().addClass("error-tbx")}}}}})};mySuning.productFavoriteAndTag=function(c){var f=$(c).parent().parent();f.find("#error").css("display","none");var i=f.parent().find("input");var b=i.attr("id");var e=f.find("i");var h=$(c).parent().find(".partnumber").attr("id");var g=$(c).parent().find(".shopId").attr("id");var d="notOpen";if(typeof(i.val())==undefined||i.val()==""||i.val()==null){return}else{if(tel.test(i.val())){f.find("#notRight").css("display","none");f.find("#error").css("display","none");var a="//favorite.suning.com/ajax/addProductTag.do?partnumber="+h+"&shopId="+g+"&open="+d+"&productTagName="+i.val()+"&oldTagName="+b;ensureLogin(function(){mySuning.addTag(a,f)})}else{f.find("#notRight").css("display","block");return}}};mySuning.productFavoriteAndTag1=function(g){var e=$(g).parent().parent();var a=$(g).prev();if(a.val()=="您还可以自定义标签 (10字以内)"){return}else{var d=a.attr("id");var h=$(g).parent().find(".partnumber").attr("id");var f=$(g).parent().find(".shopId").attr("id");var c="notOpen";if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){var b="//favorite.suning.com/ajax/addProductTag.do?partnumber="+h+"&shopId="+f+"&open="+c+"&productTagName="+a.val()+"&oldTagName="+d;probeAuthStatus(function(){mySuning.addTag1(b,e)},function(){ensureLogin(function(){mySuning.addTag1(b,e)})})}else{e.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");e.find(".error-msg").css("display","block");a.addClass("error-tbx");return}}}};mySuning.shopFavoriteAndTag=function(g){var e=$(g).parent().parent();e.find("#error").css("display","none");var a=e.parent().find("input");var d=a.attr("id");var c=e.find("i");var f=$(g).parent().find(".shopId").attr("id");if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){e.find("#notRight").css("display","none");e.find("#error").css("display","none");var b="//favorite.suning.com/ajax/addShopTag.do?&shopId="+f+"&shopTagName="+a.val();ensureLogin(function(){mySuning.addTag(b,e)})}else{e.find("#notRight").css("display","block");return}}};mySuning.shopFavoriteAndTag1=function(f){var d=$(f).parent().parent();var a=$(f).prev();if(a.val()=="您还可以自定义标签 (10字以内)"){return}else{var c=a.attr("id");var e=$(f).parent().find(".shopId").attr("id");if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){var b="//favorite.suning.com/ajax/addShopTag.do?&shopId="+e+"&shopTagName="+a.val()+"&oldTagName="+c;probeAuthStatus(function(){mySuning.addTag1(b,d)},function(){ensureLogin(function(){mySuning.addTag1(b,d)})})}else{d.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");d.find(".error-msg").css("display","block");a.addClass("error-tbx");return}}}};mySuning.onerr=function(a,b){a.css("display","block");a.html("<i></i><label>"+b+"</label>")};mySuning.validatePrice=function(b,c){var a=/^[1-9]\d*$/;var d=c.val();if(d==undefined||d==""){mySuning.onerr(b,"期望价格不能为空");$("#expectPrice").css("border-color","#ff0000");return false}else{if(!a.test(d)){mySuning.onerr(b,"期望价格必须是正数");return false}if(Number(d)>Number(globalPartPrice)){mySuning.onerr(b,"期望价格不能高于原价");return false}else{return true}}return true};mySuning.validateMobile=function(e,a){var d=/^1\d{10}$/;var c=a.val();var b=$("#email").val();if((c==undefined||c=="")&&(b==undefined||b=="")){$("#emailMobileErr").css("display","block");return false}else{if(c.length>0){if(c.length!=11||!d.test(c)){$("#emailMobileErr").css("display","none");mySuning.onerr(e,"手机号码输入格式错误");return false}return true}else{return true}}};mySuning.validateEmail=function(e,a){var d=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;var c=a.val();var b=$("#fMobileNumber").val();if((c==undefined||c=="")&&(b==undefined||b=="")){$("#emailMobileErr").css("display","block");return false}else{if(c.length>0){if(c.length>50||!d.test(c)){if(c.match(/(\s+)/)&&c.match(/@/)&&c.match(/\./)){$("#emailMobileErr").css("display","none");mySuning.onerr(e,"邮箱不能包含空格！")}else{mySuning.onerr(e,"邮箱地址输入格式错误");$("#emailMobileErr").css("display","none")}return false}return true}else{return true}}};mySuning.fcus=function(b,a){b.css("display","none");if(null!=a){a.css("display","none")}if("error1"!=b.attr("id")&&$("#errorMobile").css("display")=="none"&&$("#error2").css("display")=="none"){$("#emailMobileErr").css("display","block")}};mySuning.clickNotice=function(c,b){var a;if(noticeType=="priceDown"){a="//favorite.suning.com/ajax/fourPage/checkCountPrice.do"}else{if(noticeType=="arrival"){a="//favorite.suning.com/ajax/fourPage/checkCountArrival.do"}}ensureLogin(function(){$.ajax({type:"GET",async:false,url:a+"?partnumber="+c+"&shopId="+b,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function d(f){var g=f.bookFlag;var e;if(g==2){e="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do?callback=",mySuning.requestDialog(e,"fiftyCallBack")}else{if(g==1){e="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do?partnumber="+globalPartNumber+"&shopId="+globalShopId+"&entrance="+globalEntrance+"&callback=",mySuning.requestDialog(e,"twoCallBack")}else{if(g==0){thisMfCityId=f.cityId;if(noticeType=="priceDown"){titleName="降价通知"}else{if(noticeType=="arrival"){titleName="到货通知"}else{titleName="温馨提示"}}var h;h="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do";e=h+"?partnumber="+globalPartNumber+"&shopId="+globalShopId+"&entrance="+globalEntrance+"&callback=",mySuning.requestDialog(e,"noticeCallBack")}}}}})})};mySuning.myClickPrice=function(g,d,f,b,e,a){var c=mySuning.validatePrice(g,d);var b=mySuning.validateEmail(f,b);var a=mySuning.validateMobile(e,a);if(noticeType=="priceDown"){if(c&&b&&a){mySuning.fromSubmit()}}else{if(b&&a){mySuning.fromSubmit()}}};mySuning.myClickArrival=function(b,a){var a=mySuning.validateEmail(b,a);if(a&&cityflag){mySuning.fromSubmit($(" #arrivalEmail"))}};mySuning.fromSubmit=function(){var c=$(" #email");var g=$(" #expectPrice");var b=$(" #fMobileNumber");if(noticeType=="priceDown"){var f=g.val()}var d;var a=c.val();var e=b.val();if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){d=false}else{if($("#check-addfav").attr("checked")=="checked"){d=true}else{d=false}}var h;if(noticeType=="priceDown"){h="//favorite.suning.com/ajax/myFavorite/addProductPriceNotice.do?expectedPrice="+f+"&price="+globalPartPrice+"&email="+a+"&mobilePhone="+e}else{if(noticeType=="arrival"){h="//favorite.suning.com/ajax/myFavorite/addProductArrivalNotice.do?email="+a+"&mobilePhone="+e}}probeAuthStatus(function(){if(noticeType=="arrival"){try{if(window.SNNativeClient){if(window.SNNativeClient.appNotificationStatus){window.SNNativeClient.appNotificationStatus(1)}}}catch(j){}}$.ajax({type:"GET",url:h+"&&partnumber="+globalPartNumber+"&&shopId="+globalShopId+"&entrance="+globalEntrance+"&pdType="+globalPdType+"&shoptType="+globalShoptType,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function i(k){if(k.returnCode==-1){$.unmDialog();ensureLogin(function(){})}else{var l=k.returnMsg;if(l==undefined||l==""){if(d){mySuning.mySuningFavoriteNoticePartnumber=globalPartNumber;mySuning.mySuningFavoriteNoticeShopId=globalShopId;mySuning.mySuningFavoriteNoticeEntrace=globalEntrance;mySuning.add2ProductFavorite(globalPartNumber,globalShopId,globalEntrance,"mySuningFavoriteShowNoticesSuccessCallback","",globalPdType,globalShoptType,"")}else{mySuning.showNoticeSuccess(globalPartNumber,globalShopId,"'"+globalEntrance+"'")}}else{mySuning.onerr($("#messagePrice"),l)}}},error:function(){if(noticeType=="priceDown"){mySuning.onerr($("#messagePrice"),"系统异常")}else{if(noticeType=="arrival"){analystics.submit("mf-arrival-error-02");mySuning.onerr($("#messageArrival"),"系统异常")}}}})},function(){if(noticeType=="arrival"){analystics.submit("mf-arrival-error-01")}$.unmDialog();ensureLogin(function(){})})};mySuningFavoriteShowNoticesSuccessCallback=function(){mySuning.showNoticeSuccess(mySuning.mySuningFavoriteNoticePartnumber,mySuning.mySuningFavoriteNoticeShopId,"'"+mySuning.mySuningFavoriteNoticeEntrace+"'");mySuning.mySuningFavoriteNoticePartnumber=null;mySuning.mySuningFavoriteNoticeShopId=null;mySuning.mySuningFavoriteNoticeEntrace=null};mySuning.showNoticeSuccess=function(b,a,c){mySuning.getRecommendedData("1-2",b,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$("#noticeSuccess").css("display","block");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>商品订阅降价通知成功</h3>");$("#tipmessage").html("商品一旦在30日内降价，我们将会第一时间通知您，请及时关注哦！")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>商品订阅到货通知成功</h3>");$("#tipmessage").html("");if(c=="'myFavorite'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find(".prod-edit .btn");d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}if(c=="'myFavoritePic'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find(".cost-pic a");d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}if(c=="'myFavoritePicNew'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find("#refreshArrivalNotice"+b+a);d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}}}};mySuning.subscribePriceNotice=function(g,e,b,a,f,c,d){noticeType="priceDown";globalPartPrice=b;globalPartNumber=g;globalShopId=e;globalEntrance=a;if(f==null||f==undefined){globalPdType="0"}else{globalPdType=f}if(c==null||c==undefined){globalShoptType="N"}else{globalShoptType=c}ajaxUrl=window.location.href;ensureLogin(function(){mySuning.clickNotice(g,e);if(typeof d=="function"){d()}})};mySuning.subscribeArrivalNotice=function(f,d,a,e,b,c){noticeType="arrival";globalPartNumber=f;globalShopId=d;globalEntrance=a;if(e==null||e==undefined){globalPdType="0"}else{globalPdType=e}if(b==null||b==undefined){globalShoptType="N"}else{globalShoptType=b}ajaxUrl=window.location.href;ensureLogin(function(){mySuning.clickNotice(f,d);if(typeof c=="function"){c()}})};mySuning.cityValidate=function(b){favoriteCityId=b.find("#inputCityId").val();if(!favoriteCityId||favoriteCityId==""){favoriteCityId=thisMfCityId}var a;if(noticeType=="priceDown"){a="//favorite.suning.com/ajax/myFavorite/checkProductPriceNoticeCity.do"}else{if(noticeType=="arrival"){a="//favorite.suning.com/ajax/myFavorite/checkProductArrivalNoticeCity.do"}}probeAuthStatus(function(){$.ajax({type:"GET",url:a+"?cityId="+favoriteCityId+"&&partnumber="+globalPartNumber+"&&shopId="+globalShopId,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function c(d){if(d.returnCode==-1){$.unmDialog();ensureLogin(function(){})}else{var e=d.returnMsg;if(e&&e!=""){if(noticeType=="priceDown"){mySuning.onerr($("#errorCityMsgPrice"),e)}else{if(noticeType=="arrival"){mySuning.onerr($("#errorCityMsgArrival"),e)}}cityflag=false}else{cityflag=true}}},error:function(){if(noticeType=="priceDown"){mySuning.onerr($("#errorCityMsgPrice"),"系统异常")}else{if(noticeType=="arrival"){mySuning.onerr($("#errorCityMsgArrival"),"系统异常")}}}})},function(){$.unmDialog();ensureLogin(function(){})})};mySuning.getRecommendedData=function(a,g,e){var f;f=$.cookie("cityId");if(f=="cityId=undefined"){var c=document.cookie.split(";");for(var d=0;d<c.length;d++){var b=c[d].split("=");if(b[0]=="cityId"){f=unescape(b[1])}}}if(f==undefined||f==""||f=="cityId=undefined"){f="9173"}$.ajax({type:"get",url:"//tuijian.suning.com/recommend-portal/recommendv2/biz.jsonp?parameter="+g+"&cityId="+f+"&sceneIds="+a+"&count=12&u=156126",dataType:"jsonp",jsonpCallback:e,cache:true})};mySuning.myRecommedData=function(c){leng=c.sugGoods[0].skus.length;var l="";var a;var k;if(leng>12){leng=12}if(leng>=1){$("#picRecommend").css("display","block");for(var d=0;d<leng;d++){var g=c.sugGoods[0].skus[d].sugGoodsCode;var h=c.sugGoods[0].skus[d].sugGoodsName;var e=c.sugGoods[0].parameter;var p=c.sugGoods[0].skus[d].vendorId;var j=c.sugGoods[0].skus[d].price;var m=c.sugGoods[0].skus[d].handwork;var f;var b;if(noticeType=="priceDown"){b="_recsijijzn_"}else{b="_recsjdhtzn_"}if(globalEntrance=="productDetail"){if(ajaxUrl.indexOf("//item")==0){f="item_"}else{if(globalShopId!="0000000000"){f="cprd_";if(noticeType=="priceDown"){b="_reccsijijz_"}else{b="_reccsjdhtz_"}}else{f="item_"}}}else{if(globalEntrance=="searchResult"){if(ajaxUrl.indexOf("//search")==0){f="ssdsn_"}else{f="ssdln_"}if(noticeType=="priceDown"){b="_recsijijzn_"}else{b="_recsojdhtzn_"}}else{f="favorite_"}}var o=f+e.substring(9,18)+b+(Math.floor(d/3)+1)+"-"+(d%3+1)+"_p_"+p+"_"+g.substring(9,18)+"_"+m;var n=f+e.substring(9,18)+b+(Math.floor(d/3)+1)+"-"+(d%3+1)+"_c_"+p+"_"+g.substring(9,18)+"_"+m;l=l+"<li><a  class='fav-pic' title='"+h+"' name='"+o+"' href='//product.suning.com/"+p+"/"+g.substring(9,18)+".html?src="+o+"' target='_blank'> <img src='//image.suning.cn/content/catentries/"+g.substring(0,14)+"/"+g+"/"+g+"_ls1.jpg' id='img"+g+"' /></a>    <p class='msg-protitle' style='height:35px; overflow: hidden;'><a name='"+o+"' title='"+h+"' target='_blank'  href='//product.suning.com/"+p+"/"+g.substring(9,18)+".html?src="+n+"' >"+h+"</a></p> <p class='snPrice'><em class='l'>￥</em><i> "+j+"</i></p> </li>"}$(".movbox-artic").html(l);$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var q=i.attr("src");i.attr("src","");i.load(function(){var r=i.attr("id");mySuning.zoom(r,100,100)});i.attr("src",q)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var q=i.attr("src");i.attr("src","");i.load(function(){var r=i.attr("id");mySuning.zoom(r,100,100)});i.attr("src",q)})}}else{$("#picRecommend").css("display","none")}};mySuning.productSuccessRecommedCallback=function(q){var d=q.sugGoods[0].skus.length;var j="<ul class='movbox-artic'>";var o;if(globalEntrance=="productDetail"){if(ajaxUrl.indexOf("//item")==0){o="item_";recommedBuriedPointCollect="_recscollectn_"}else{if(globalShopId!="0000000000"){o="cprd_";recommedBuriedPointCollect="_reccscollect_"}else{o="item_";recommedBuriedPointCollect="_recscollectn_"}}}else{if(globalEntrance=="searchResult"){if(ajaxUrl.indexOf("//search")==0){o="ssdsn_";recommedBuriedPointCollect="_recsostore_"}else{o="ssdln_";recommedBuriedPointCollect="_recstore_"}}else{o="favorite_";recommedBuriedPointCollect="_recscollectn_"}}var e=q.sugGoods[0].parameter;if(d>0){var g=d;if(d>12){g=12}for(var l=0;l<g;l++){var n=q.sugGoods[0].skus[l].sugGoodsCode;var r=q.sugGoods[0].skus[l].vendorId;var p=q.sugGoods[0].skus[l].sugGoodsName;if(p.length>=20){var a=p.substring(0,20)}else{var a=p}var k=q.sugGoods[0].skus[l].price;var s=q.sugGoods[0].skus[l].handwork;var c="//product.suning.com/"+r+"/"+n.substring(9,18)+".html?src="+o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_"+r+"_"+n.substring(9,18)+"_"+s;var m="//product.suning.com/"+r+"/"+n.substring(9,18)+".html?src="+o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_c_"+r+"_"+n.substring(9,18)+"_"+s;var f="//image.suning.cn/content/catentries/"+n.substring(0,14)+"/"+n+"/"+n+"_ls1.jpg";var h=o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_"+r+"_"+n.substring(9,18)+"_"+s;var b=o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_c_"+r+"_"+n.substring(9,18)+"_"+s;j=j+"<li><a title='"+p+"' name='"+h+"' href='"+c+"' target='_blank' class='fav-pic'><img src='"+f+"' alt='"+p+"' id='img"+n+"'/></a><a href='"+m+"' title='"+p+"'  name='"+b+"' target='_blank' class='fav-msg'>"+p+"</a><span class='fav-price'>&yen;"+k+" </span></li>"}j=j+"</ul>";$(".movpic-shot").html(j);$(".movpic-artic").removeAttr("style");$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var t=i.attr("src");i.attr("src","");i.load(function(){var u=i.attr("id");mySuning.zoom(u,100,100)});i.attr("src",t)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var t=i.attr("src");i.attr("src","");i.load(function(){var u=i.attr("id");mySuning.zoom(u,100,100)});i.attr("src",t)})}}};mySuning.shopSuccessRecommedCallback=function(k){var a=k.sugGoods[0].skus.length;var p="<ul class='movbox-artic'>";if(a>0){var c="";var d=a;if(a>12){d=12}var e="cprd_";for(var l=0;l<d;l++){var j=k.sugGoods[0].skus[l].sugGoodsName;var n=k.sugGoods[0].parameter;var f=k.sugGoods[0].skus[l].sugGoodsDes;var m=k.sugGoods[0].skus[l].sugGoodsCode;var q=k.sugGoods[0].skus[l].handwork;if(f==undefined||f.length==0){f="//image.suning.cn/project/myfavorite/images/shop.png"}var o=k.sugGoods[0].skus[l].sugGoodsCode;var h=k.sugGoods[0].skus[l].promotionInfo;if(o.length>8){c=c+o+"_"}c=c.substring(0,c.length-1);var b=e+n+"_recscdp_"+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_0000000000_"+m+"_"+q;var g=h+"?src="+b;p=p+'<li id="recmStar'+o+'"><a title="'+j+'" name="'+b+'" href="'+g+'" class="fav-pic" target="_blank"><img src="'+f+'" id="img'+o+'"/></a><p class="msg-protitle"><a href="'+g+'" title="'+j+'" target="_blank">'+j+'</a></p><div class="pro-lvstart"><span class="comment-star"><em style="width:'+5*14+'px;margin-top:0"></em></span></div></li>'}p=p+"</ul>";$(".movpic-shot").html(p);$(".movpic-artic").removeAttr("style");$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var r=i.attr("src");i.attr("src","");i.load(function(){var s=i.attr("id");mySuning.zoom(s,100,100)});i.attr("src",r)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var r=i.attr("src");i.attr("src","");i.load(function(){var s=i.attr("id");mySuning.zoom(s,100,100)});i.attr("src",r)})}mySuning.getShopStarsJsonp(c)}};mySuning.getShopStarsJsonp=function(c){var b="//favorite.suning.com/ajax/getShopStarsJsonp.do?shopIdStr="+c;$.ajax({type:"get",url:b,async:false,dataType:"jsonp",jsonpCallback:"myCallbackStars",success:function a(g){var d=0;for(var e in g){var f=(g.shopReviewScoreList[e].shopStar/5*69).toFixed(2);$("#recmStar"+g[e].supplierCode).find("em").attr("style","width:"+f+"px")}}})};mySuning.subscribeArrivalNoticeCheck=function(i,h,c,b,d,f,g){var a="//favorite.suning.com/ajax/fourPage/checkCountArrival.do";$.ajax({type:"GET",async:false,url:a+"?partnumber="+i+"&shopId="+h,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function e(l){var m=l.bookFlag;var j;if(m==2){showMsg("订阅已满50次，无法订阅！")}else{if(m==0){try{if(window.SNNativeClient){if(window.SNNativeClient.appNotificationStatus){window.SNNativeClient.appNotificationStatus(1)}}}catch(n){}var o="//favorite.suning.com/ajax/myFavorite/addProductArrivalNotice.do?mobilePhone="+d;if(f==null||f==undefined){f="0"}if(g==null||g==undefined){g="N"}$.ajax({type:"GET",url:o+"&&partnumber="+i+"&&shopId="+h+"&mdmCityCode="+c+"&entrance="+b+"&channel=2&pdType="+f+"&shoptType="+g,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function k(p){var s=p.returnCode;if(s!==undefined&&s==="-3"){showMsg("您订阅的次数已达上限，请明天再试！");return}var r=p.returnMsg;if(r==undefined||r==""){var t=$("#checkin8").prop("checked");if(t){var q="//favorite.suning.com/ajax/addProductFavoriteJsonp.do?";$.ajax({type:"GET",url:q+"partnumber="+i+"&shopId="+h+"&entrance="+b+"&channel=2&pdType="+f+"&shoptType="+g,async:false,dataType:"json",success:function(u){}})}showMsg("订阅成功，请耐心等待！")}else{showMsg("订阅失败，系统异常！")}},error:function(){showMsg("订阅失败，系统异常！")}})}}}})};mySuning.zoom=function(a,e,f){$("#"+a).css("width","");$("#"+a).css("height","");var g=$("#"+a).width();var h=$("#"+a).height();if((e/f)>(g/h)){$("#"+a).width((f*g)/h);$("#"+a).height(f);var c=(e-$("#"+a).width())/2;var b=(f-$("#"+a).height())/2;$("#"+a).css("margin-top",b);$("#"+a).css("margin-left",c);$("#"+a).css("margin-right",c-1)}else{$("#"+a).width(e);$("#"+a).height((e*h)/g);var d=(f-$("#"+a).height())/2;var i=($("#"+a).width())/2;$("#"+a).css("margin-top",d)}};var spacing=118;var page=1;var setUpCovers=function(){var a;a=parseInt(leng/3);$(".pageNum").html("/"+a);var b=$(".covers").last();var c=b.find(".covers_a");$(".btn_forLeft").die("click");$(".btn_forRight").die("click");c.eq(0).css("left","0");c.eq(1).css("left",spacing);c.eq(2).css("left",spacing*2);$(".btn_forLeft").live("click",function(e){var d=$(".covers").last();var f=d.find(".covers_a");f.eq(2).animate({left:spacing*5},"fast");f.eq(1).animate({left:spacing*4},"fast");f.eq(0).animate({left:spacing*3},"fast");f.eq(f.length-1).css("left",(-spacing)).animate({left:spacing*2},"fast");f.eq(f.length-2).css("left",(-spacing)*2).animate({left:spacing},"fast");f.eq(f.length-3).css("left",(-spacing)*3).animate({left:0},"fast",function(){f.eq(f.length-1).prependTo(".covers");f.eq(f.length-2).prependTo(".covers");f.eq(f.length-3).prependTo(".covers");setUpCovers()});if(page>1){page--}else{page=a}$(".page").html(page);e.preventDefault()});$(".btn_forRight").live("click",function(e){var d=$(".covers").last();var f=d.find(".covers_a");f.eq(0).animate({left:-spacing*3},"fast");f.eq(1).animate({left:-spacing*2},"fast");f.eq(2).animate({left:-spacing},"fast");f.eq(3).css("left",spacing*3).animate({left:0},"fast");f.eq(4).css("left",spacing*4).animate({left:spacing},"fast");f.eq(5).css("left",spacing*5).animate({left:spacing*2},"fast",function(){f.eq(0).appendTo(".covers");f.eq(1).appendTo(".covers");f.eq(2).appendTo(".covers");setUpCovers()});if(page<a){page++}else{page=1}$(".page").html(page);e.preventDefault()})};mySuning.listloop=function(b){var c={wrap:"#brandPromo",loopBox:"#brandPromo-list",triggerLeft:".dir-prev",triggerRight:".dir-next",curCount:".cur-count",totalCount:".total-count",step:{wide:7,narrow:6},scrollWidth:{wide:840,narrow:660},hasCount:true,isLoop:true,isLazyLoad:true,delay:0};$.extend(c,b);var h=$(c.wrap),n=h.find(c.triggerLeft),a=h.find(c.triggerRight),q=h.find(c.loopBox),g=q.find("li"),e=c.step.wide,l=c.scrollWidth.wide,s=Math.ceil(g.length/e),f=g.length,j=h.find(c.curCount),t=h.find(c.totalCount),r=0;if(screen.width<1280){e=c.step.narrow;l=c.scrollWidth.narrow;var u=g.length%e;s=Math.ceil(g.length/e);f=g.length-u}c.hasCount&&t.html(s);n.click(function(){m();return false});a.click(function(){o();return false});function o(){if(s==1||q.is(":animated")){return false}if(!c.isLoop){r++;if(r>=s){r=s-1}p(false,r);return}if(r==s-1){for(var i=0;i<e;i++){g.eq(i).css({position:"relative",left:s*l+"px"})}}r++;p(function(){if(r==s){r=0;g.removeAttr("style");q.css("marginLeft",r*l)}},r)}function m(){if(s==1||q.is(":animated")){return false}if(!c.isLoop){r--;if(r<=0){r=0}p(false,r);return}if(r==0){for(var i=1;i<=e;i++){g.eq(f-i).css({position:"relative",left:-s*l+"px"})}}r--;p(function(){if(r==-1){r=s-1;g.removeAttr("style");q.css("marginLeft",-r*l)}},r)}function p(v,i){k();if(c.hasCount){if(i>s-1){i=0}if(i<0){i=s-1}j.html(i+1)}if(!v){v=function(){}}q.stop().animate({marginLeft:-r*l},500,v)}function k(){if(!c.isLazyLoad){return}for(var v=0;v<e;v++){var i=g.eq(r*e+v).find("img");if(i.attr("src3")){i.attr("src",i.attr("src3")).removeAttr("src3").addClass("err-product")}}}if(c.delay){var d=setInterval(function(){o()},c.delay);h.hover(function(){clearInterval(d)},function(){d=setInterval(function(){o()},c.delay)})}};mySuning.getShopStar=function(c){var b="//favorite.suning.com/ajax/getShopStar.do?shopId="+c;var a=$.ajax({type:"get",url:b,async:false,dataType:"json",success:function(e){var d=e;return d},error:function(d){return 5}});return a.responseText};mySuning.addCookie=function(a){$.cookie("smhst",a)};mySuning.add2BrandFavorite=function(d,c,a,e,b){probeAuthStatus(function(){var f="//favorite.suning.com/ajax/addBrandFavorite.do?brandId="+d+"&deptId="+c+"&entrance="+a;if(e){$.ajax({type:"GET",async:false,url:f,dataType:"jsonp",jsonpCallback:e})}else{f=f+"&dialog=1";$.ajax({type:"GET",async:false,url:f,dataType:"jsonp",jsonpCallback:"myBrandFavorWithDialog",success:function g(h){$.mDialog({css:{width:"450px"},http:function(i,j){i.find(".content").html(h.htmlDom)},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}})}},function(){ensureLogin(function(){mySuning.add2BrandFavorite(d,c,a,e,b)})})};mySuning.cancelSubscibeConfirm=function(){alert(fMobileNumber.val());$.mLionDialog({css:{width:"420px"},message:$(".cancel-subscibe-confirm"),overlayCss:{background:"black",opacity:"0.3"},title:"温馨提示",fadeIn:300,fadeOut:300})};mySuning.cancelSubscibeSuccess=function(){$.mLionDialog({css:{width:"420px"},message:$(".cancel-subscibe-success"),overlayCss:{background:"black",opacity:"0.3"},title:"温馨提示",fadeIn:300,fadeOut:300})};var mySuningFav = mySuningFav || {};

//获取18位商品编码中的数字
mySuningFav.getPartnumberNumic = function(partnumber){
	var partnumberNumic = "";
	var lastIndex = partnumber.lastIndexOf('0');
	if("8" == lastIndex ){
		partnumberNumic = partnumber.substring(9);
	}else if("6" == lastIndex){
		partnumberNumic = partnumber.substring(7);
	}else{
		partnumberNumic = partnumber;
	}
	return partnumberNumic;
}

// 给购物车提供收藏商品列表，返回指定条数的收藏商品，每条记录包含：商品编码、店铺编码、商品名称、商品当前价格
// 过滤条件：过滤掉无货和暂不销售的商品
// 传入参数：cityId：3位城市id（例如：025，表示南京）、size：返回的商品收藏个数，不超过10条、callback：回调函数
mySuningFav.getProductFavToCartJsonp = function(cityId, size, callback) {
		var favoriteUrl = "//favorite.suning.com/ajax/getMyProductFavoritesOnlyJsonp.do?currentPage=1&pageSize=20";
		$.ajax({
			url : favoriteUrl,
			type: 'GET',
			dataType: 'jsonp',
			success : function(data) {
				if(data.returnCode==0){
					var productInfoList = data.productInfoList;
					if(productInfoList.length>0){
						var partnumberStr = "";
						var shopIdStr = "";
						var favorProductInfoCartMap = new HashMap();
						
						for (var i = 0, len = productInfoList.length; i < len; i++){
							var partnumber = productInfoList[i].partnumber;
							var shopId = productInfoList[i].shopId;
							var shopIdMy = productInfoList[i].shopId;
							var productName = productInfoList[i].productName;
							var isBook = productInfoList[i].isBook;
							var favoritePrice = productInfoList[i].favoritePrice;
							var pdType = productInfoList[i].pdType;
							var shoptType = productInfoList[i].shoptType;
							if(pdType == 1||(pdType == 2&&shoptType=="Y")){
								shopIdMy = '0000000000';
							}
							favorProductInfoCartMap.put(shopIdMy + mySuningFav.getPartnumberNumic(partnumber),new createProductFavoriteCartObj(partnumber, shopId, productName, isBook, '',favoritePrice,pdType,shoptType));
							var favorProductInfo = favorProductInfoCartMap.get(shopId + mySuningFav.getPartnumberNumic(partnumber));
								partnumberStr += partnumber + ",";
								shopIdStr += shopIdMy + ",";
						}
						
						partnumberStr = partnumberStr.substring(0,partnumberStr.length-1);
						shopIdStr = shopIdStr.substring(0,shopIdStr.length-1);
						
						var priceUrl = "//icps.suning.com/icps-web/getVarnishAllPrice014" + "/" + partnumberStr + "_" + cityId + "__" + shopIdStr + "_1_getProductPriceAndInv.vhtm"
						$.ajax({
							url: priceUrl,
							type: 'GET',
							dataType: 'jsonp',
							jsonpCallback: "getProductPriceAndInv",
							success: function(data){
								var num = 0;
								var productFavoriteArr = [];
								for (var i = 0, len = data.length; i < len; i++){
									var partnumberPrice = data[i].cmmdtyCode;
									var shopIdPrice = data[i].bizCode;
									// 库存：1：有货 2：无货 3：暂不销售 4：在途
									var invStatus = data[i].invStatus;
									var price = data[i].price;
									var isBookInMap;
									var isBookInMapTemp = favorProductInfoCartMap.get(shopIdPrice+ mySuningFav.getPartnumberNumic(partnumberPrice));
									if(undefined != isBookInMapTemp){
										isBookInMap  = isBookInMapTemp.isBook;
									}else{
										continue;
									}
									if(num<size){
										if(price!="" && invStatus!="" && (invStatus==1 || invStatus==4) && isBookInMap=="0"){
											var favorProductInfo = favorProductInfoCartMap.get(shopIdPrice + mySuningFav.getPartnumberNumic(partnumberPrice));
											favorProductInfo.price = price;
											// Begin 判定是否存在降价 add by 16080957 on 20170427
											if (favorProductInfo.favoritePrice !== '0' &&
												favorProductInfo.favoritePrice !== null &&
												typeof(favorProductInfo.favoritePrice) !== "undefined" &&
												favorProductInfo.favoritePrice !== '') {
												// 判定收藏价格是否大于现在价格，如果是则为降价
												var cutDownPrice = parseFloat(favorProductInfo.favoritePrice) - parseFloat(favorProductInfo.price);
												if (cutDownPrice > 0) {
													favorProductInfo.cutDownPrice = toDecimal2(cutDownPrice);
												} else {
													favorProductInfo.cutDownPrice = '';
												}
											} else {
												favorProductInfo.cutDownPrice = '';
											}
											// End 判定是否存在降价 add by 16080957 on 20170427
											productFavoriteArr.push(favorProductInfo);
											num++;
										}
									}else{
										break;
									}
								}
								
								callback(productFavoriteArr);
							},
							error: function(XHR, errorMsg, e) {	
								
							}
						});
						
					}else{
						var productFavoriteArr = [];
						callback(productFavoriteArr);
					}
					
				}
			},
			error: function(XHR, errorMsg, e) {	
			}
		});
};

function createProductFavoriteCartObj (partnumber, shopId, productName, isBook, price,favoritePrice,pdType,shoptType) {
   this.partnumber = partnumber;
   this.shopId = shopId;
   this.productName = productName;
   this.isBook = isBook;
   this.price = price;
   this.favoritePrice = favoritePrice;
   this.pdtType = pdType;
   this.shoptType = shoptType;
};


function HashMap() {
    /**Map大小**/
    var size = 0;
    /**对象**/
    var entry = new Object();
    /**Map的存put方法**/
    this.put = function(key, value) {
        if (!this.containsKey(key)) {
            size++;
            entry[key] = value;
        }
    }
    /**Map取get方法**/
    this.get = function(key) {
        return this.containsKey(key) ? entry[key] : null;
    }
    /**是否包含Key**/
    this.containsKey = function(key) {
        return (key in entry);
    }
       /**所有的Value**/
    this.values = function() {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    }
    /**所有的 Key**/
    this.keys = function() {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    }
    /**Map size**/
    this.size = function() {
        return size;
    }
    /**清空Map**/
    this.clear = function() {
        size = 0;
        entry = new Object();
    }
};

//制保留2位小数，如：2，会在2后面补上00.即2.00
function toDecimal2(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x*100)/100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
/******************************************************
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
/**
 * 账号安全中心对外提供公共js服务，引用aqSuning1.showMobilePopType(refreshFlag,callback)即可
 * 
 */
var aqSuning1 = aqSuning1 || {};
var aqjs1 = document.getElementsByTagName("script");
var aqcss1 = document.getElementsByTagName("link");
aqSuning1.aqIntervalVar=null,aqSuning1.aqPasportUrl=null,aqSuning1.ascUrl=null,aqSuning1.aqRefreshFlag=false,aqSuning1.aqCallback=null,aqSuning1.aqSuccessFlag="false";
function isInclude(a, c) {
	if (c) {
		for ( var b = 0; b < aqjs1.length; b++) {
			if (aqjs1[b][c ? "src" : "href"].indexOf(a) != -1) {
				return true;
			}
		}
		return false;
	} else {
		for ( var b = 0; b < aqcss1.length; b++) {
			if (aqcss1[b][c ? "src" : "href"].indexOf(a) != -1) {
				return true;
			}
		}
		return false;
	}
}
//设置临时版本参数函数
function getCurVersion(){
	var myDate = new Date();
	var result = myDate.getYear()+'-'+myDate.getMonth()+'-'+myDate.getDate()+':'+myDate.getHours();
	return result;
}
$(document)
		.ready(
				function() {
					var _logonhostName = document.location.hostname;
					aqSuning1.aqPasportUrl ='https://passport.suning.com/ids'+'/';
					aqSuning1.ascUrl = 'https://aq.suning.com/asc'+'/';
					if (!isInclude("jquery", true)) {
						alert("请引入jQuery.js");
					}
					if (!isInclude("passport", true)) {
						var envName='PROD',c=null;
						if('DEV' == envName){
							c = '<script>var passport_config = { base: '+'"${asc.project.authstatus.url.prefix}"'+',loginTheme: "b2c_pop"};<\/script>';
						}else{
							c = "<script>var passport_config = { base: '"+aqSuning1.ascUrl+"',loginTheme: 'b2c_pop'};<\/script>";
						}
						$("title").after(c);
						var a = document.createElement("script");
						//本地环境测试
						var version=getCurVersion();
						//发测试环境时，需要将passport环境替换PROD
						a.src = aqSuning1.aqPasportUrl+"js/passport.js?V="+version;
						a.type = "text/javascript";
						var b = document.getElementsByTagName("head")[0];
						b.appendChild(a);
					}
				});

/**
 * flag: true or false 调用完成是否需要刷新
 * 
 */
aqSuning1.showMobilePopType = function(flag,callback) {
	probeAuthStatus(function() {
		// 页面刷新标志
		aqSuning1.aqRefreshFlag=flag;
		aqSuning1.aqCallback=callback;
		securityBindPhone();
		
	}, function() {
		ensureLogin(function() {
			aqSuning1.showMobilePopType(flag,callback);
		});
	});
};

var securityBindPhone = function() {
	var currentLocation = window.location.href;
	// change
	var d = aqSuning1.ascUrl+"popout/showBoxType.do"
			+ "?topLocation="
			+ encodeURIComponent(currentLocation.split("#")[0]) + "#success";
	// 申明所需变量
	var _mask = "<div class='mask-layer'></div>", _if = '<iframe id="security-bind-phone" frameborder=0 allowTransparency="true" src='
			+ d
			+ ' style="position:fixed;top:50%;left:50%;margin-top:-300px;margin-left:-231px;width:462px;height:600px;border:none;background: transparent;z-index:9995;_position:absolute;"></iframe>', _dWidth = '', _dHeight = '', _wWidth = '', _wHeight = '', width = '', height = '';
	// 获取遮罩层宽高的方法
	function maskSet() {
		_dWidth = document.body.clientWidth,
				_dHeight = document.body.clientHeight,
				_wWidth = window.screen.availWidth,
				_wHeight = window.screen.availHeight;
		// 判断文档和窗口高度，下面是文档比较高的情况
		if (_dHeight > _wHeight) {
			// 设置宽高
			width = _dWidth;
			height = _dHeight;
			// 这是窗口比较高的情况
		} else {
			// 设置宽高
			width = _wWidth;
			height = _wHeight;
		}
	}
	// 获取遮罩层的目标宽高
	maskSet();
	// 遮罩层插入body
	$(_mask).appendTo($("body")).css({
		position : "absolute",
		top : 0,
		left : 0,
		width : width,
		height : height,
		background : "#000",
		opacity : 0,
		zIndex:9990
	}).stop().animate({
		opacity : 0.3
	});
	// iframe插入body
	$(_if).appendTo($("body")).css({
		opacity : 0
	}).stop().animate({
		opacity : 1
	});
	// 浏览器窗口大小改变的时候触发
	$(window).resize(function() {
		// 获取遮罩层的目标宽高
		maskSet();
		// 设置遮罩层的宽高
		$(_mask).css({
			width : width,
			height : height
		});

	});
	// 判断是否为ie6，在ie6下实现类似fixed的效果
	if ((navigator.userAgent.indexOf("MSIE 6.0") > 0)) {
		// 浏览器上下滚动的时候触发
		$(window).scroll(
				function() {
					// 获取遮罩层的目标宽高
					maskSet();
					// 设置遮罩层的宽高
					$(_mask).css({
						width : width,
						height : height
					});
					// 获取窗口的scrollTop和窗口高度的一半
					var _scrollTop = $(window).scrollTop(), _windowHeight = $(
							window).height() / 2;
					// 设置iframe的top值
					$("#security-bind-phone").css({
						top : _scrollTop + _windowHeight
					});

				});
		// 非ie6的情况，直接设置遮罩层的宽高就ok
	} else {
		// 浏览器上下滚动的时候触发
		$(window).scroll(function() {
			// 获取遮罩层的目标宽高
			maskSet();
			// 设置遮罩层的宽高
			$(_mask).css({
				width : width,
				height : height
			});

		});
	}
    //设置定时任务，每隔200ms扫描浏览器地址
	aqSuning1.aqIntervalVar = window.setInterval(checkMsgFromBindPhoneIframe, 200);
};

// check message from popup login page.
function checkMsgFromBindPhoneIframe() {
	var newHash = window.location.hash;
	if (newHash.length > 1) {
		var value = newHash.split('#');
		var params = value[1].split(':');
		switch (params[0]) {
		case 'close':
			securityBindPhoneClose();
			break;
		case 'bindSuccess':
			securityBindPhoneClose();
			break;
		default:
			break;
		}
	}
}

// 关闭iframe方法，如需要关闭，直接调用此方法
var securityBindPhoneClose = function() {
	var _parIf = $("#security-bind-phone"), _ms = _parIf
			.siblings(".mask-layer");
	_parIf.stop().animate({
		opacity : 0
	}, function() {
		_parIf.remove();
	});
	_ms.stop().animate({
		opacity : 0
	}, function() {
		_ms.remove();
	});
	clearInterval(aqSuning1.aqIntervalVar);
	var url = window.location.href;
	var a = url.indexOf("#");
	var locl = url.substring(0, a) + "#unknown:";
	window.location.href = locl;
	var index=url.indexOf(":?");
	if(index>-1){
		aqSuning1.aqSuccessFlag=url.substring(index).split("=")[1];
	}
	//判断是否要刷新页面
	if(aqSuning1.aqRefreshFlag==true){
		window.location.reload();
	}
	//判断是绑定成功还是直接关闭弹框
	var callBackFlag=(aqSuning1.aqCallback!=undefined && aqSuning1.aqCallback!=null);
	if(aqSuning1.aqSuccessFlag=="true" && callBackFlag){
		//如果有回调函数便执行		
		aqSuning1.aqCallback(true);
	}else{
		if(callBackFlag){
			aqSuning1.aqCallback(false);
		}
	}
};
/**
 * Created by 15032059
 */



var fcAppCode = '';
var fcCustNo = '';
var fcWebUrl = "http://tspofc.suning.com";
var fcResUrl = "http://res.suning.cn/project/tspofc";
var stopQueue = true;

var fcClientCallback = '';

function openB2cPopPage(data, callback, config) {
	if (typeof config == 'undefined') {
		if (typeof fc_config != 'undefined') {
			config = fc_config;
		} else {
			alert('You must define fc_config var.');
			return;
		}
	}
	if (typeof config.fcResUrl != 'undefined' && config.fcResUrl != '') {
		fcResUrl = config.fcResUrl;
	} 
	if (typeof config.fcWebUrl != 'undefined' && config.fcWebUrl != '') {
		fcWebUrl = config.fcWebUrl;
	} 
	if (typeof callback == 'undefined' || callback == '') {
		return;
	}
	
	fcClientCallback = callback;
	
	fcAppCode = data.appCode;
	fcCustNo = data.custNo;
	stopQueue = false;
	
    $processControlOverlay = $("#processControlOverlay");
    if ($processControlOverlay.length > 0) {
        $processControlOverlay.remove();
    }
    $processControl = $("#processControl");
    if ($processControl.length > 0) {
        $processControl.remove();
    }
    var mh = $(document).height()+"px";
    $("body").append("<div id=\"processControlOverlay\" style=\"opacity: 0.3;filter:Alpha(opacity=30);background:none repeat scroll 0 0 #000000;position: absolute;border: 0 none;width: 100%;height: 100%;top: 0;left: 0;z-index:1000097;\"></div><div id=\"processControl\" style=\"z-index:1000098;position:fixed;_position: absolute;border: 2px solid #fa0;text-align: center;background: #fff;\"></div>");
    $("#processControlOverlay").hide();
    $("#processControl").hide();
    $("#processControlOverlay").css("height",mh);
    
    $("#processControl").html('<div style="width: 596px;height:  346px;">'+
        '<p style="margin-top: 38px;;color: #353d44;font-size: 16px;font-weight: bold;"><div id="div1" style="margin-top: 38px;;color: #353d44;font-size: 16px;font-weight: bold;display:none;">第<span id="spanPosition" style="color: #f29400" ></span>客官，还有<span id="spanTime" style="color: #f29400" ></span>就到您了哦~请稍等片刻~</div><div id="div2" style="margin-top: 38px;color: #353d44;font-size: 16px;font-weight: bold;display:none;">当前访问人数较多，请您耐心排队等待~</div></p>' +
        '<p style="margin-top: 20px;color: #666;font-size: 14px;">我不会告诉别人，刷新后会重新排队呦~~</p>' +
        '<img style="margin-top: 50px;" src="'+fcResUrl+'/images/img2.gif" width="460" alt=""/>'+
        '</div>');
    
    if (typeof intervalProcessControl != 'undefined') {
        clearInterval(intervalProcessControl);
        intervalProcessControl = window.setInterval(resizeProcessControl, 200);
    }
    resizeProcessControl();
    
    processQueue(closeProcessControl, fcSuccess, null, showPcMask);
    //refreshTime(0);
    
}

function showPcMask() {
	$("#processControl").show();
    $("#processControlOverlay").show();
}

function processQueue(closeCallback, succCallBack, fcTokenId, showCallBack) {
	var url = fcWebUrl + '/processQueue.do?appCode='+fcAppCode+'&custNo='+fcCustNo;
	if (fcTokenId) {
		url = url + '&fcTokenId='+fcTokenId;
	}
	$.ajax({
        url: url,
        type: "post",
        dataType : 'jsonp',
        beforeSend : function() {
		},
        success: function (json) {
        	//console.debug(json);
        	var _fcTokenId = '';
        	if (json.fcTokenId) {
        		_fcTokenId = json.fcTokenId;
        	}
        	if (json.mark == 1) {//连接超时，继续连接等待
        		if (!stopQueue) {
        			//clearInterval(intervalProcessControlTime);
        			refreshPositionAndTime(json.position, json.remainingTime, closeCallback);
        			processQueue(closeCallback, succCallBack, _fcTokenId, showCallBack);
        		} 
			} else if (json.mark == 2) {//有效，表名已出队列且可用
				succCallBack(fcTokenId);
			} else if (json.mark == 3) {//返回队列位置及剩余时间
				//resizeCallBack();
				refreshPositionAndTime(json.position, json.remainingTime, closeCallback, json.mark, showCallBack);
				processQueue(closeCallback, succCallBack, _fcTokenId, showCallBack);
			} else {//错误，是否跳转至排队异常页面
				closeCallback();
			}
		},
		error : function() {
			//console.debug(json);
			closeCallback();
		}
	});
}


function resizeProcessControl(){
	var width = $("#processControl").width();
    var height = $("#processControl").height();
//    $("#processControlOverlay").show();
    var winwidth = window.innerWidth ? window.innerWidth : $(window).width();
    var winheight = window.innerHeight ? window.innerHeight : $(window).height();
    var left = (winwidth - width) / 2;
    var top = (winheight - height) / 2;
    var _sTop = $(document).scrollTop();
    $processControl = $("#processControl");
    $processControl.css("top", Math.max(top, 5));
    if(!window.XMLHttpRequest){
        top = top + _sTop;
        $processControl.css("top", Math.max(top, 5));
    }
    $processControl.css("left", left);
}

function fcSuccess(fcTokenId) {
	closeProcessControl();
	fcClientCallback(fcTokenId);
}

function closeProcessControl() {
    document.getElementById('processControlOverlay').style.display = 'none';
    document.getElementById('processControl').style.display = 'none';
    if (typeof intervalProcessControlTime != 'undefined') {
    	clearInterval(intervalProcessControlTime);
    }
    initQueue();
}

function initQueue() {
	stopQueue = true;
	$("#spanPosition").html('');
	$("#spanTime").html('');
}


function refreshPositionAndTime(position, time, closeCallback, mark, showCallBack) {
	if (typeof intervalProcessControlTime != 'undefined') {
    	clearInterval(intervalProcessControlTime);
    }
	
	var _time = doProcessControlTime(false, position, time, closeCallback, mark, showCallBack);
	intervalProcessControlTime = window.setInterval(function () {
		_time = doProcessControlTime(true, position, _time, closeCallback, mark, showCallBack);
	}, 1000);
}

function doProcessControlTime(flag, position, time, closeCallback, mark, showCallBack) {
	if(time == 0){
    	closeCallback();
        clearInterval(intervalProcessControlTime);
        stopQueue = true;
        return time;
    }
	if (flag) {
		time--;
	}
    
    var remainingTime = '';
    var unit = '';
    if (time < 60) {
    	unit = '秒';
    	remainingTime = time;
    } else if (time < 600) {
    	unit = '分钟';
    	remainingTime = parseInt(time / 60.0);
    } else {
    	remainingTime = '';
    	unit = '';
    }
    $('#spanPosition').html(position + "位");
    $("#spanTime").html(remainingTime + unit);
    if (time < 600) {
    	$('#div1').show();
    	$('#div2').hide();
    } else {
    	$('#div2').show();
    	$('#div1').hide();
    }
    if (mark && mark == '3') {
		showCallBack();
    }
    
    return time;
}



/*********************************   wap pop  ***********************************/

function openWapPopPage(data, callback, config) {
	if (typeof config == 'undefined') {
		if (typeof fc_config != 'undefined') {
			config = fc_config;
		} else {
			alert('You must define fc_config var.');
			return;
		}
	}
	if (typeof config.fcWebUrl != 'undefined' && config.fcWebUrl != '') {
		fcWebUrl = config.fcWebUrl;
	} 
	if (typeof callback == 'undefined' || callback == '') {
		return;
	}
	
	fcClientCallback = callback;
	
	fcAppCode = data.appCode;
	fcCustNo = data.custNo;
	stopQueue = false;
	
	pctrlWap.appendProcessControlWap();
	processQueue(pctrlWap.close, pctrlWap.success, null, pctrlWap.showWapMask);
	//pctrlWap.appendProcessControlWap (str2);
}

var pctrlWap = pctrlWap || {};

var str =    '<p style="text-align: center"><img src="temp/pcimg.png" alt="" width="60"/></p><p style="margin: 15px 0;text-align: center;font-size: 17px;color: #333">小苏很忙，请您稍后重试</p>';
//var str2 = '<p style="text-align: center;font-size: 17px;color: #333">第<span id="spanPosition" style="color: #f29400" ></span>客官，还有<span id="spanTime" style="color: #f29400" ></span>就到您了哦</p><p style="margin: 7px 0 25px;text-align: center;font-size: 15px;color: #666">刷新后会重新排队呦~~</p>';

pctrlWap.success = function(fcTokenId) {
	pctrlWap.close();
	fcClientCallback(fcTokenId);
}


//开启弹框
pctrlWap.appendProcessControlWap = function(){
	var content = '<p style="text-align: center;font-size: 17px;color: #333"><div id="div1" style="text-align: center;font-size: 17px;color: #333;display:none;">第<span id="spanPosition" style="color: #f29400" ></span>客官，还有<span id="spanTime" style="color: #f29400" ></span>就到您了哦</div><div id="div2" style="text-align: center;font-size: 17px;color: #333;display:none;">当前访问人数较多，请您耐心排队等待~</div></p><p style="margin: 7px 0 25px;text-align: center;font-size: 15px;color: #666">刷新后会重新排队呦~~</p>';
  pctrlWap.loadcss();
  var d = document;

  var $wap = d.querySelector("#processControlWap");
  if($wap != null){
      pctrlWap.close();
  }
  var mask =  d.createElement("div");
  mask.id = "processControlMask";
  mask.style.cssText = "visibility:hidden;position: fixed; top: 0; width: 100%; height: 100%; background: #000; z-index: 1000086; opacity: 0.3;";

  var divnode =  d.createElement("div");
  divnode.id = "processControlWap";
  divnode.style.cssText = "visibility:hidden;position:fixed;padding:20px 0 10px;width: 320px;background-color: #fff;border-radius: 5px;z-index: 1000087;";
  divnode.innerHTML = '<div id="processControlWapContent">' +content +
  '</div>';
//  divnode.innerHTML = '<div id="processControlWapContent">' +content +
//      '</div><a id="processControlWapBtn" href="javascript:void 0" style="position: absolute;bottom: 0;left: 0;right: 0;height: 44px;line-height:44px;color: #f29400;border-top: 1px solid #e5e5e5;text-align: center;text-decoration: none" >' +
//      '关闭</a>';
  d.body.appendChild(divnode);
  d.body.appendChild(mask);
//  d.body.className += " cpoh-y";
//  d.documentElement.className += " cpoh-y";

  var wapW =  d.querySelector("#processControlWap").offsetWidth;
  var wapH =  d.querySelector("#processControlWap").offsetHeight;
  var left = (pctrlWap.getPos(d).width-wapW)/2;
  var top = (pctrlWap.getPos(d).height-wapH)/2;
  d.body.className += " cpoh-y";
  d.documentElement.className += " cpoh-y";
  d.querySelector("#processControlWap").style.left = left + "px";
  d.querySelector("#processControlWap").style.top = top + "px";

  //按钮回调
//  d.querySelector("#processControlWapBtn").onclick = function (e) {
//      pctrlWap.close();
//      e.stopPropagation();
//  } 
}

pctrlWap.showWapMask = function(){
    var d = document;
    d.querySelector("#processControlMask").style.visibility = "visible";
    d.querySelector("#processControlWap").style.visibility = "visible";
}

pctrlWap.getPos = function(d){
  var wn =d.documentElement.clientWidth ,
      h =d.documentElement.clientHeight ,
      s = d.documentElement.scrollTop || d.body.scrollTop;
  if(window.innerHeight > h){
      h = window.innerHeight;
  }
  return {
      width: wn,
      height: h,
      sTop: s
  };
}

//关闭
pctrlWap.close = function () {
  var d = document;
  d.querySelector("#processControlWap").remove();
  d.querySelector("#processControlMask").remove();
  d.body.className = d.body.className.replace( "cpoh-y","");
  d.documentElement.className =d.documentElement.className.replace( "cpoh-y","");
  if (typeof intervalProcessControlTime != 'undefined') {
  	clearInterval(intervalProcessControlTime);
  }
  initQueue();

}
pctrlWap.isloadcss = false;
//读取css
pctrlWap.loadcss = function () {
  var d = document;
  if(pctrlWap.isloadcss)return false;
  var style = d.createElement("style");
  style.type= "text/css";
  style.innerText = ".cpoh-y{overflow-y:hidden}";
  d.querySelector("head").appendChild(style);
  isloadcss = true;
}



