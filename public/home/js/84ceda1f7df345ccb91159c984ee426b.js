/**
 * PC领券方法入口<br/>
 * 
 * api如下：
 * 
 * 依赖组件：
 * <code>jquery.js</code>
 * <code>passport.js</code>
 */
//CEM数据采集设置
var sa = sa || {};
sa.bid = "cpfSale";
sa.openAPI = true;
sa.cpfdfptoken="";

var version;
var receiveParamObj = receiveParamObj || {};

var coupon = coupon || {};
/**
 * 领券模块
 * 参数格式：
 * 
 */
coupon.receive = (function($){
	/**
	 * 通用样式领券
	 * @param paramObj 结构化参数对象
	 * {
	 *   "actId" : "活动编码",
	 *   "actKey" : "活动秘钥",
	 *   "cityId" : "LES城市编码",
	 *   "sourceId" : "领券来源ID：1001领券中心PC 1002领券中心WAP 2001四级页PC 2002四级页APP 2003四级页WAP 3001我的易购PC 4001我的优惠券PC 5001店铺页PC 5002店铺页WAP 5003店铺页面APP 6001静态页PC 6002静态页WAP 7003新人-四级页APP"
	 * }
	 * @param callback 回调函数，用于处理领券后的接口结果处理
	 * 
	 * 返回参数
	 * {
	 *   "resultCode" : "错误编码，0：领券成功，其他：领券失败",
	 *   "resultMsg" : "错误提示语"
	 * }
	 */
	var receiveCoupon = function (paramObj, callback) {
		//基本信息暂存到全局变量
		receiveParamObj.actId = paramObj.actId;
		receiveParamObj.actKey = paramObj.actKey;
		receiveParamObj.cityId = paramObj.cityId;
		receiveParamObj.sourceId = paramObj.sourceId;
		receiveParamObj.callback = callback;
		//领券
		coupon.receive.receiveCouponAjax(paramObj, callback, true);
	};
	/**
	 * 只调接口不给样式弹框
	 * @param paramObj 结构化参数对象
	 * {
	 *   "actId" : "活动编码",
	 *   "actKey" : "活动秘钥",
	 *   "cityId" : "LES城市编码",
	 *   "validateCode" : "验证码值",
	 *   "uuid" : "图形验证码uuid",
	 *   "sourceId" : "领券来源ID：1001领券中心PC 1002领券中心WAP 2001四级页PC 2002四级页APP 2003四级页WAP 3001我的易购PC 4001我的优惠券PC 5001店铺页PC 5002店铺页WAP 5003店铺页面APP 6001静态页PC 6002静态页WAP 7003新人-四级页APP"
	 * }
	 * @param callback 回调函数，用于处理领券后的接口结果处理
	 * 
	 * 返回参数
	 * {
	 *   "resultCode" : "错误编码，0：领券成功，1001 1002(需要滑动验证)，1003 1004(需要图形验证)，2004 2005 2006(需要短信验证)，其他：领券失败",
	 *   "resultMsg" : "错误提示语",
	 *   "uuid" : "图形验证码uuid",
	 *   "sceneId" : "图形验证码场景id"
	 * }
	 */
	var receiveCouponV2 = function (paramObj, callback) {
		//领券
		coupon.receive.receiveCouponAjax(paramObj, callback, false);
	};
	
	/**
	 * 领券接口调用
	 * @param paramObj 领券入参 
	 * @param callback 回调函数
	 * @param needAlert 是否需要默认样式弹框
	 */
	var receiveCouponAjax = function(paramObj, callback, needAlert){
		if (typeof(callback) != "function") {
			alert("未传入参数：回调函数callback！");
			return;
		}
	    var targetUrl="//quan.suning.com/lqzx_rsf.do?callback=?";
	    paramObj.detect = encodeURIComponent(bd.rst());//人机标识
	    paramObj.deviceToken = bd.ptoken();
	    paramObj.channel = "1";
	    //823需求开始
	    paramObj.dfpToken=sa.cpfdfptoken;
	    //823需求结束
		// 换用passport封装的跨域访问API
	    if (needAlert) {
	    	ajaxCrossDomain(targetUrl,$.param(paramObj),function(data){couponSuccessCallBack(data,callback);}, function(){couponFailCallBack(callback);},coupon.common.passport_config);
	    } else {
	    	ajaxCrossDomain(targetUrl,$.param(paramObj),function(data){couponSuccessCallBackV2(data,callback);}, function(){couponFailCallBackV2(callback);},coupon.common.passport_config);
	    }
	};
	
	/**
	 * 默认弹框样式领券调用成功回调函数
	 * @param respData 响应结果
	 * @param callerCallBack 调用方回调函数
	 */
	var couponSuccessCallBack = function(respData, callerCallBack){
		if (respData.resultCode == "0") {
			// 执行回调函数，由调用方处理响应结果
			callerCallBack(respData);
			resultAlert("领券成功", "恭喜您，领券成功！");
		} else {
			if (respData.resultCode == '1001' || respData.resultCode == '1002') {//滑动验证码
				coupon.sillerCode.sillerAlertBox(respData);
			} else if (respData.resultCode == '1003' || respData.resultCode == '1004') {//图形验证码
				coupon.imageCode.imageAlertBox(respData);
			} else if (respData.resultCode == '2004' || respData.resultCode == '2005' || respData.resultCode == '2006') {//短信验证码
				coupon.sms.smsAlertBox(respData);
			} else {
				resultAlert("领券失败", respData.resultMsg);
				callerCallBack(respData);
			}
			//采集报错信息
			coupon.analytics.sendSAErrorMessage("coupon_receive_api_pc", "&&1&&" + respData.resultMsg + "&&");
		} 
		//判断是否刷新dfpToken
		if('1' == respData.dfpTokenFlag){
			coupon.init.dfpTokenInit();
		}
	};
	/**
	 * 默认弹框样式领券调用失败回调函数
	 * @param callerCallBack 调用方回调函数
	 */
	var couponFailCallBack = function(callerCallBack){
		var respData = {};
		respData.resultCode = "C0000";
		respData.resultMsg = "当前网络异常，请稍后再试（C0000）";
		//采集报错信息
		coupon.analytics.sendSAErrorMessage("coupon_receive_api_pc", "&&0&&" + "当前网络异常，请稍后再试（C0000）" + "&&");
		// 执行回调函数，由调用方处理响应结果
		callerCallBack(respData);
	};
	
	/**
	 * 默认弹框样式领券调用成功回调函数
	 * @param respData 响应结果
	 * @param callerCallBack 调用方回调函数
	 */
	var couponSuccessCallBackV2 = function(respData, callerCallBack){
		//采集报错信息
		coupon.analytics.sendSAErrorMessage("coupon_receive_api_pc", "&&1&&" + respData.resultMsg + "&&");
		callerCallBack(respData);
		//判断是否刷新dfpToken
		if('1' == respData.dfpTokenFlag){
			coupon.init.dfpTokenInit();
		}
	};
	/**
	 * 默认弹框样式领券调用失败回调函数
	 * @param callerCallBack 调用方回调函数
	 */
	var couponFailCallBackV2 = function(callerCallBack){
		var respData = {};
		respData.resultCode = "C0000";
		respData.resultMsg = "当前网络异常，请稍后再试（C0000）";
		//采集报错信息
		coupon.analytics.sendSAErrorMessage("coupon_receive_api_pc", "&&0&&" + "当前网络异常，请稍后再试（C0000）" + "&&");
		// 执行回调函数，由调用方处理响应结果
		callerCallBack(respData);
	};
	
	/**
	 * 错误提示弹框
	 * @param message 错误提示语
	 */
	var resultAlert = function (title, message) {
		var alertHtml = '<div class="coupon-use">'
					  + '  <div class="quanUse-error">'
					  + '    <div class="bindCoupon-box quanUseDilog">'
                      + '      <div class="bindCoupon-title">'
                      + '        <a href="javascript:void(0)" class="close" title="&#x5173;&#x95ED;"></a>'
                      + '        <strong>' + title + '</strong>'
                      + '      </div>'
                      + '      <div class="bindCoupon-content-success">'
                      + '        <p><span></span><em id="alertMsg">' + message + '</em></p>'
                      + '        <div class="bindCoupon-success-btn">'
                      + '          <a href="javascript:void(0)" class="close">关闭</a>'
                      + '        </div>'
                      + '      </div>'
                      + '    </div>'
                      + '  </div>'
                      + '</div>';
		$.mDialog({
	        css: {
	            width: '448px',
	            height:'250px'
	        },
	        title:'',
	        message:alertHtml,
	        fadeIn: 300,
	        fadeOut: 0,
	        callback: function () {
	        	$('.m-dialog .title, .m-dialog .btn').remove();
	        }
	    });
	};
	/**
	 * API暴露返回
	 */
	return {
		receiveCoupon : receiveCoupon,
		receiveCouponV2 : receiveCouponV2,
		receiveCouponAjax : receiveCouponAjax
	};
})(jQuery);

/**
 * 图形验证码
 */
coupon.imageCode = (function($){
	var uuid = "";
	var sceneId = "";
	/**
	 * 弹框图形验证码
	 */
	var imageAlertBox = function (respData) {
		uuid = respData.uuid;
		sceneId = respData.sceneId;
		var vcsImgsrc = "//vcs.suning.com/vcs/imageCode.htm?uuid=" + uuid + "&yys=" + new Date().getTime()+"&sceneId="+sceneId;
		$("#imgCode").attr("src", vcsImgsrc);
		$("#imageCodeDiv").show();
		$("#sillerCodeDiv").hide();
		$("#inputCode").removeClass("error-input");
		$("#inputCode").val("");
		$("#tipCode").removeClass("tip-icon tip-ok-16 tip-ok l");
		$("#tipCode").hide();
		$(".siller-confirm").off("click").on("click", function(){
			coupon.imageCode.validateCode(1);
	    });
		$("#failMsg").html(respData.resultMsg);
		$(".dialog-siller,.dialog-siller-fiexd").show();
	};
	 /**
	  * 验证码校验
	  * flag校验成功时是否继续领券
	  */
	var validateCode = function (flag) {
		var code = $("#inputCode").val();
		//替换中文输入法中的空格和英文空格
		code = code.replace(/\s+/g,"");
		//code = $.trim(code);
		if (code == "" || code == undefined) {
			$("#tipCode").hide();
			$("#inputCode").addClass("error-input");
			$("#inputCode").val('');
			$("#inputCode").attr("placeholder", "请输入正确的验证码");
			coupon.imageCode.changeCode();
			return;
		}
		var param = "code=" + code + "&uuid=" + uuid + "&delFlag=0";
		$.ajax({
			type : 'get',
			url : "//vcs.suning.com/vcs/validate_jsonp.htm",
			data : param,
			dataType : 'jsonp',
			success : function(data) {
				// data即为服务器端的返回值
				// 此处可以写获取返回值后的逻辑
				if (data[0].result == "true") {
					$("#tipCode").addClass("tip-icon tip-ok-16 tip-ok l");
					$("#tipCode").show();
					$("#inputCode").removeClass("error-input");
					if (flag == "1") {
						$(".checkout").removeClass("checkout-loading");
						$(".checkout").trigger("click");
						coupon.init.closeValidateAlert();
						//再次调用领券
						var paramObj = {
							   "actId" : receiveParamObj.actId,
							   "actKey" : receiveParamObj.actKey,
							   "cityId" : receiveParamObj.cityId,
							   "validateCode" : code,
							   "uuid" : uuid,
							   "sourceId" : receiveParamObj.sourceId
						};
						coupon.receive.receiveCouponAjax(paramObj, receiveParamObj.callback, true);
					}
				} else {
					// false
					$("#tipCode").hide();
					$("#inputCode").addClass("error-input");
					$("#inputCode").val('');
					$("#inputCode").attr("placeholder", "请输入正确的验证码");
					coupon.imageCode.changeCode();
				}
			}
		});
	};
	/**
	 * 用户输入的验证码不对时，刷新验证码，供用户重新输入
	 */
	var changeCode = function () {
		var src = "//vcs.suning.com/vcs/imageCode.htm?uuid=" + uuid
				+ "&yys=" + new Date().getTime()+"&sceneId="+sceneId;
		$("#imgCode").attr("src", src);
	};
	//当用户输入的验证码位数大于等于4时，开始校验验证码
	var keyupFunc = function () {
		var code = $("#inputCode").val();
		//替换中文输入法中的空格
		code = code.replace(/\s+/g,"");
		var length = code.length;
		if (length >= 4) {
			coupon.imageCode.validateCode(0);
		}
	};
	var focusFunc = function () {
		$("#inputCode").removeClass("error-input");
		$("#inputCode").attr("placeholder", "以下字符不区分大小写");
	};
	
	return {
		imageAlertBox : imageAlertBox,
		changeCode : changeCode,
		keyupFunc : keyupFunc,
		focusFunc : focusFunc,
		validateCode : validateCode
	};
})(jQuery);

/**
 * 滑动验证码
 */
coupon.sillerCode = (function($){
	/**
	 * 弹框滑动验证码
	 */
	var sillerAlertBox = function (respData) {
		siller.reset();
		$("#imageCodeDiv").hide();
		$("#sillerCodeDiv").show();
		$(".siller-confirm").off("click").on("click", function(){
			coupon.sillerCode.receiveCouponAgain();
	    });
		$("#failMsg").html(respData.resultMsg);
		$(".dialog-siller,.dialog-siller-fiexd").show();
	};
	/**
	 * 初始化滑动验证码
	 */
	var initSillerCode = function () {
	    siller.init({
	    	tip1:"滑动完成",
		 		backWidth : '300px',//控件长度（使用系统默认样式则不加此属性）
		 		backHeight : '36px',//控件高度（使用系统默认样式则不加此属性）
		 		slWidth : '36px',//滑块宽度（使用系统默认样式则不加此属性）
		 		slHeight : '36px',//滑块高度（使用系统默认样式则不加此属性）
		 		fontSize : '12px',//字体大小（使用系统默认样式则不加此属性）
				target : "sillerCodeDiv",//滑动验证码所在页面div的id（业务系统预先在页面写入一个空的div，必填！）
				url : "//dt.suning.com/detect/dt/dragDetect.json"//滑动验证后台地址，必填！
		});
		//由于CSS滤镜导致样式被覆盖手动设置滑动框高度
	    $("#sillerCodeDiv").find("div").css({height:"42px"});
	    siller.show();
	};
	/**
	 * 再次领券
	 */
	var receiveCouponAgain = function () {
		if (siller.status == 1) {
			coupon.init.closeValidateAlert();
			var paramObj = {
					"actId" : receiveParamObj.actId,
					"actKey" : receiveParamObj.actKey,
					"cityId" : receiveParamObj.cityId,
					"validateCode" : siller.queryToken(),
					"sourceId" : receiveParamObj.sourceId
			};
			coupon.receive.receiveCouponAjax(paramObj, receiveParamObj.callback, true);
		}
	};
	
	return {
		sillerAlertBox : sillerAlertBox,
		receiveCouponAgain : receiveCouponAgain,
		initSillerCode : initSillerCode
	};
})(jQuery);

/**
 * 短信验证码
 */
coupon.sms = (function($){
	/**
	 * 发送验证码倒计时
	 */
	var count = function (count) {
	    $('.again i').text(count);
	    if (count >= 0) {
	        setTimeout(function(){
	        	coupon.sms.count(--count);
	        }, 1000);
	    } else {
	        $('.get-sms').show();
	        $('.again').hide();
	    }
	};
	/**
	 * 发送短信验证码
	 */
	var sendSmsCode = function () {
		var targetUrl = "//quan.suning.com/sms/getSmsCode.do?callback=?";
		ajaxCrossDomain(targetUrl,"",function(data){sendSmsSuccessCallBack(data);}, function(){sendSmsFailCallBack();},coupon.common.passport_config);
	};
	/**
	 * 发送短信成功回调
	 */
	var sendSmsSuccessCallBack = function (data) {
		if ("1001" == data.errcode) {
			//成功
			$('.get-sms').hide();
			$('.again').show();
			coupon.sms.count(60); //倒计时60秒
			$('.error span').hide();
		} else if (data.errcode == "01001") {
			$('.get-sms').hide();
			$('.has-none').show();//今日次数已用完
			$('.error span').hide();
		} else if (data.errcode == "1104" || data.errcode == "1106") {
			//验证码发送失败
			$('.error span').text("验证码发送失败，请重新获取");
			$('.error span').show();
		} else if (data.errcode == "01002") {
			//请求间隔少于60s
			$('.error span').text("您的操作过于频繁，请1分钟后再试");
			$('.error span').show();
		}
	};
	/**
	 * 发送短信失败回调
	 */
	var sendSmsFailCallBack = function () {
	};
	/**
	 * 短信验证码弹框
	 */
	var smsAlertBox = function (respData) {
		var alertHtml = '<div class="sms">'
			          + '	<div class="sms-content">'
			          + '   	<div class="sms-title">'
			          + '			<a href="javascript:void(0)" class="close" title="&#x5173;&#x95ED;"></a>'
			          + '			<strong>活动过于火爆，请进行短信安全验证</strong>'
			          + '		</div>'
			          + '		<div class="sms-con">'
			          + '		<p id="smsPhoneNo">' + respData.mobileNum + '</p>'
			          + '		<div class="sms-input">'
			          + '			<input type="text" placeholder="&#x8BF7;&#x8F93;&#x5165;&#x9A8C;&#x8BC1;&#x7801;">'
			          + '			<a class="get-sms" href="javascript:void(0)">获取验证码</a>'
			          + '			<a style="display: none;" class="again" href="javascript:void(0)">重新获取(<i>60</i>)</a>'
			          + '			<a style="display: none;" class="has-none" href="javascript:void(0)">今日次数用完</a>'
			          + '		</div>'
			          + '		<p class="error">';
    	if (respData.resultCode=='2005') {//短信验证码错误
    		alertHtml += '			<span>验证码错误</span>';
    	} else if (respData.resultCode=='2006') {//短信验证错误超过5次
    		alertHtml += '			<span>验证码错误次数过多，请重新获取</span>';
    	} else {//需要短信验证
    		alertHtml += '			<span style="display: none;">验证码错误</span>';
    	}
    	alertHtml +=    '		</p>'
			          + '		<div class="sms-btn">'
			          + '		<a class="sms-submit" href="javascript:void(0)">确定</a>'
			          + '		<a class="close" href="javascript:void(0)">取消</a>'
			          + '	</div>'
			          + '</div>';
	    $.mDialog({
	        css: {
	            width: '448px',
	            height:'250px'
	        },
	        title:'',
	        message:alertHtml,
	        fadeIn: 300,
	        fadeOut: 0,
	        callback: function () {
	            $('.m-dialog .title, .m-dialog .btn').remove();
	        	$('.again,.has-none').hide();
	            $('.get-sms').off('click').on('click',function(){
	            	sendSmsCode();
	            });
	            $(".sms-input input").off('focus').on('focus',function(){
	            	$('.error span').hide();
	            });
	            $('.sms-submit').off('click').on('click',function(){
	            	var validateCode = $(".sms-input input").val();
	            	if (validateCode == "") {
	            		$('.error span').text("请输入验证码");
	            		$('.error span').show();
	            		return;
	            	}
	            	$.unmDialog();
	            	//再次领券
	            	var paramObj = {
	         			   "actId" : receiveParamObj.actId,
	         			   "actKey" : receiveParamObj.actKey,
	         			   "cityId" : receiveParamObj.cityId,
	         			   "validateCode" : validateCode,
	         			   "sourceId" : receiveParamObj.sourceId
	         		};
	         		coupon.receive.receiveCouponAjax(paramObj, receiveParamObj.callback, true);
	            });
	        }
	    });
	};
	
	return {
		smsAlertBox : smsAlertBox,
		count : count
	};
	
})(jQuery);
/**
 * 公共模块
 */
coupon.common = (function($){
	var passport_config = {
			base: "//quan.suning.com/", 
			loginTheme: "b2c_pop" 
		};
	
	/*
	 * 获取页面所有js、css元素
	 */
	var esjs=document.getElementsByTagName('script');
	var escss=document.getElementsByTagName('link');
	/**
	 * 判断所需js文件是否存在
	 */
	var isInclude = function(name,isJs){
		if (isJs) {
			for(var i=0;i<esjs.length;i++) 
				if(esjs[i][isJs?'src':'href'].indexOf(name)!=-1)return true;
			return false; 
		} else {
			for(var i=0;i<escss.length;i++) 
				if(escss[i][isJs?'src':'href'].indexOf(name)!=-1)return true;
			return false;
		}
	};
	/**
	 * 创建在页面引入外部js文件的script标签
	 */
	var _loadAsyncJs = function(src) {
		if (isInclude(src, true))return;
		var _src = src;
		var _scripts = document.getElementsByTagName('script');
		for (var i = 0; i < _scripts.length; i++) {
			if (_scripts[i].src == _src) {
				return;
			}
		}
		var _script = document.createElement('script');
		_script.type = 'text/javascript';
		_script.async = true;
		_script.src = _src;
		var _s = _scripts[0];
		_s.parentNode.insertBefore(_script, _s);
	};
	/**
	 * 创建在页面引入外部js文件的script标签
	 * 同步执行
	 */
	var _loadJs = function(src) {
		if (isInclude(src, true))return;
		var _src = src;
		var _scripts = document.getElementsByTagName('script');
		for (var i = 0; i < _scripts.length; i++) {
			if (_scripts[i].src == _src) {
				return;
			}
		}
		var _script = document.createElement('script');
		_script.type = 'text/javascript';
		_script.src = _src;
		var _s = _scripts[0];
		_s.parentNode.insertBefore(_script, _s);
	};
	/**
	 * 创建在页面引入外部js文件的script标签
	 */
	var _loadAsyncCss = function(src) {
		if (isInclude(src, false))return;
		var _src = src;
		var _scripts = document.getElementsByTagName('link');
		for (var i = 0; i < _scripts.length; i++) {
			if (_scripts[i].src == _src) {
				return;
			}
		}
		var _script = document.createElement('link');
		_script.type = 'text/css';
		_script.rel = 'stylesheet';
		_script.async = true;
		_script.href = _src;
		var _s = _scripts[0];
		_s.parentNode.insertBefore(_script, _s);
	};

	/**
	 * 获取当前url中的参数
	 * @param name
	 */
	var getUrlParam = function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null){
	    	return decodeURI(r[2]); 
	    }
	    return "";
	};
	/**
	 * 设置cookie
	 */
	var setCookie = function(keyStr,valStr) {
		var v3 = window.location.href;
		v3 = v3.substring(v3.indexOf("//") + 2);
		v3 = v3.substring(0, v3.indexOf("/"));
		if (v3.indexOf(".") > 0) {
			v3 = v3.substring(v3.indexOf("."));
		}
		var domain = v3;
		var path = "/";

		var str = keyStr + "=" + encodeURIComponent(valStr) + ";domain="
				+ domain + ";path=" + path;
		document.cookie = str;
	};
	return{
		isInclude:isInclude,
		_loadAsyncJs:_loadAsyncJs,
		_loadJs:_loadJs,
		_loadAsyncCss:_loadAsyncCss,
		getUrlParam:getUrlParam,
		setCookie:setCookie,
		passport_config:passport_config
	};
})(jQuery);

/**
 * 页面分析模块
 */
coupon.analytics = (function($){
	/**
	 * 错误信息采集
	 * @param id
	 * @param message
	 */
	var sendSAErrorMessage = function(id, message) {
		var msgList = message.split("&&");
		var param = {
			type_name : id		// 接口名称
			,error_type : msgList[1]	// 错误类型：系统错误/业务错误
			,error_code : msgList[0]	// 报错代码
			,error_detail : msgList[2]  // 报错详情
			,member_id : msgList[3]		// 会员编码
			,member_level : '' 	    	// 会员等级
			,region : ''				// 区域
		    ,bid : 'cpfSale'            // 产品线标识(order/page)
		};
		try { 
			sa.openAPI.sendMsgV2(param);
			sa.openAPI.sendMessage(id, message);
		} catch (e) {
			
		}
	};
	return{
		sendSAErrorMessage:sendSAErrorMessage
	};
})(jQuery);

/**
 * 初始化相关事宜
 */
coupon.init = (function($){
	/**
	 * 图形验证码和滑动验证码弹框初始化
	 */
	var alertValidateHtml = function () {
		var alertHtml = '<div class="m-lion-dialog-fiexd dialog-siller-fiexd" style="display: none;position:fixed;z-index:8002;top:0;left:0;right:0;bottom:0;background-color:#000;filter:alpha(opacity=30);opacity:0.3"></div>'
			+ '<div class="m-lion-dialog dialog-siller" style="width: 448px; height: 260px; margin-left: -224px; margin-top: -130px; top: 50%; display: none;">'
			+ '  <div class="container">'
			+ '  	<div class="title"><h3>领取优惠券</h3></div>'
			+ '  	<a href="javascript:coupon.init.closeValidateAlert();" class="btn close" title="关闭" style="z-index: 10;"></a>'
			+ '  	<div class="content">'
			+ '  		<div class="coupon-dialog has-get" style="padding: 52px 0;">'
			+ '    			<p class="tips"><i class="tip-icon tip-info-24"></i><span id="failMsg"></span></p>'
			+ '				<div id="sillerCodeDiv" class="dt_parent float" style="margin:30px auto 50px;display: none;"></div>'
			+ '    			<div class="dialog-common identify-code" id="imageCodeDiv" style="display: none;">'
			+ '      			<div class="code-input clearfix">'
			+ '        				<dl>'
			+ '          				<dt class="l">验证码</dt>'
			+ '          				<dd class="l">'
			+ '            					<p class="item-ide">'
			+ '			   						<input autocomplete="off" onkeyup="coupon.imageCode.keyupFunc();" onfocus="coupon.imageCode.focusFunc();" class="ui-text l" type="text" placeholder="以下字符不区分大小写" id="inputCode" >'
			+ '			   						<i id="tipCode" ></i>'
			+ '			 					</p>'
			+ '			 					<p class="item-ide">'
			+ '			   						<img onclick="coupon.imageCode.changeCode();" id="imgCode" class="l" src="" />'
			+ '			   						<span class="change l">看不清楚？<a href="javascript:void(0);" onclick="coupon.imageCode.changeCode();">换一张</a></span>'
			+ '			 					</p>'
			+ '		   					</dd>'
			+ '		 				</dl>'
			+ '	   				</div>'
			+ '    			</div>'
			+ '    			<div class="coupon-dialog-btn" style="margin-top: 20px;">'
			+ '    				<a href="javascript:coupon.init.closeValidateAlert();" class="siller-close closeThis">关闭</a>'
			+ '    				<a href="javascript:;" class="siller-confirm">确定</a>'
			+ '    			</div>'
			+ '  		</div>'
			+ '  	</div>'
			+ '  </div>'
			+ '</div>';
		$('body').append(alertHtml);
	};
	
	var closeValidateAlert = function () {
		$(".dialog-siller,.dialog-siller-fiexd").hide();
	};
	
	var dfpTokenInit = function () {
		if (typeof(_dfp) != 'undefined'){
			_dfp.init({
				appCode : "UfggrFD1MpeUazVs", // 必填
				env : "prd",     // 必填
				success : function (token) {
					sa.cpfdfptoken=token;
				},
				error : function (e) {
				}
			});
		}
	};
	
	return {
		alertValidateHtml : alertValidateHtml,
		closeValidateAlert : closeValidateAlert,
		dfpTokenInit : dfpTokenInit
	};
})(jQuery);
/**
 * 页面加载运行模块
 */
$(function() {
	if (!coupon.common.isInclude("jquery",true)) {
		alert("请引入jQuery.js");
	}
	// 获取版本号
	$("script").each(function(){
		if ($(this).attr("src") != undefined && $(this).attr("src").indexOf("couponReceive.js") != -1) {
			if ($(this).attr("src").lastIndexOf("?") <= 0) {
				version = '';
			} else {
				version = $(this).attr("src").substring($(this).attr("src").lastIndexOf("?"));
			}
			return false;
		}
	});
	//判断人机活动
	if (typeof(bd) == 'undefined' || bd == "undefined"){
        var scriptDetect = document.createElement("script");
        scriptDetect.type = "text/javascript";
        scriptDetect.src = "//dt.suning.com/detect/dt/detect.js"+version;
        var _scripts = document.getElementsByTagName('script');
		var _s = _scripts[0];
		_s.parentNode.insertBefore(scriptDetect, _s);
	}
	//新设备指纹
	if (typeof(_dfp) == 'undefined' || _dfp == "undefined"){
		var scriptDetect = document.createElement("script");
		scriptDetect.type = "text/javascript";
		scriptDetect.src = "//dfp.suning.com/dfprs-collect/dist/dfp.js"+version;
		var _scripts = document.getElementsByTagName('script');
		var _s = _scripts[0];
		_s.parentNode.insertBefore(scriptDetect, _s);
	}
	window.setTimeout(function () {
		//人机识别初始化token变量
		if (typeof(bd) != 'undefined'){
			bd.init({
		        'token': 'other',
		        'system':'CPF',
		        'url':'//dt.suning.com/detect/dt/portoToken.json'
		    });
        }
		//新设备指纹初始化
		coupon.init.dfpTokenInit();
	}, 500);
	
	
	
	if(typeof($.mDialog) !== 'undefined'){
        coupon.common._loadAsyncJs("//res.suning.cn??/javascript/js_sn/shoppingCart/optimization/SFE.lion.dialog.js,/javascript/sn_da/da_opt.js,/javascript/sn_da/sa-analytics.js" + version);
    }else{
        coupon.common._loadAsyncJs("//res.suning.cn??/javascript/SFE.dialog.js,/javascript/js_sn/shoppingCart/optimization/SFE.lion.dialog.js,/javascript/sn_da/da_opt.js,/javascript/sn_da/sa-analytics.js" + version);    
    }
	//公共样式,search.min.css,sn-sidebar.min.css
	coupon.common._loadAsyncCss("//res.suning.cn/public/v3/css/??v3common.min.css" + version);
	coupon.common._loadAsyncCss("//res.suning.cn/project/cpf/js/api/pc/css/coupon.css" + version);
	//图形验证码样式
	coupon.common._loadAsyncCss("//res.suning.cn/project/cpf/css/validateCode.css" + version);
	//滑动验证样式和js
	if (typeof(siller) == 'undefined' || siller == "undefined") {
		coupon.common._loadAsyncCss("//dt.suning.com/detect/static/siller.css" + version);
		coupon.common._loadAsyncJs("//dt.suning.com/detect/dt/siller.js" + version);
	}
	coupon.init.alertValidateHtml();
	window.setTimeout(function () {
		coupon.sillerCode.initSillerCode();
	},1000);
	
});var mySuning=mySuning||{mySuningFavoriteNoticePartnumber:null,mySuningFavoriteNoticeShopId:null,mySuningFavoriteNoticeEntrace:null};var esjs=document.getElementsByTagName("script");var escss=document.getElementsByTagName("link");var version;var lesCityCode=$("#lesCityCode").val();var lesProviceId=$("#lesProviceId").val();var lesDistributeCode=$("#lesDistributeCode").val();var icpsUrl="//icps.suning.com/icps-web/getVarnishAllPrice014";function isInclude(a,c){if(c){for(var b=0;b<esjs.length;b++){if(esjs[b][c?"src":"href"].indexOf(a)!=-1){return true}}return false}else{for(var b=0;b<escss.length;b++){if(escss[b][c?"src":"href"].indexOf(a)!=-1){return true}}return false}}$(document).ready(function(){if(!isInclude("jquery",true)){alert("请引入jQuery.js")}$("script").each(function(){if($(this).attr("src")!=null&&typeof($(this).attr("src"))!=undefined&&$(this).attr("src")!=undefined&&$(this).attr("src").indexOf("favorite-api")!=-1){if($(this).attr("src").indexOf("?")<=0){version=""}else{version=$(this).attr("src").substring($(this).attr("src").indexOf("?"))}return false}});if(!isInclude("passport",true)){var c='<script>var passport_config = { base: "//favorite.suning.com/", loginTheme: "b2c_pop" };<\/script>';$("title").after(c);var a=document.createElement("script");a.src="https://passport.suning.com/ids/js/passport.js";a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}var d=window.location.protocol;if(!isInclude("SFE.dialog",true)){var a=document.createElement("script");if(d=="http:"){a.src="http://res.suning.cn/project/myfavorite/js/SFE.dialog.js"}else{a.src="https://sslres.suning.com/project/myfavorite/js/SFE.dialog.js"}a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}if(!isInclude("jquery.cookie",true)){var a=document.createElement("script");if(d=="http:"){a.src="http://res.suning.cn/project/myfavorite/js/jquery.cookie.min.js"}else{a.src="https://sslres.suning.com/project/myfavorite/js/jquery.cookie.min.js"}a.type="text/javascript";var b=document.getElementsByTagName("head")[0];b.appendChild(a)}});function checkAndoridNofity(){baseApi.checkNotifyStatus(function(a){return""+a})}mySuning.requestDialog=function(a,b){$.ajax({url:a+b,type:"GET",dataType:"script",async:false,cache:false})};function favoriteCallback(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom)},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"});$.mDialog({css:{width:"450px"},message:$(".dialog-addfavor"),overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300})}function fiftyCallBack(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom);mySuning.getRecommendedData("1-2",globalPartNumber,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$(".netuser-showWin-title").css("display","block");$("#tipmessage").css("display","none");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>您已订阅满50次的降价通知</h3>")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>您已订阅满50次的到货通知</h3>")}}},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}function twoCallBack(a){$.mDialog({css:{width:"450px"},http:function(b,c){b.find(".content").html(a.htmlDom);mySuning.getRecommendedData("1-2",globalPartNumber,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$(".netuser-showWin-title").css("display","block");$("#tipmessage").css("display","none");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>您已订阅过该商品的降价通知</h3>")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>您已订阅过该商品的到货通知</h3>")}}},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}function noticeCallBack(a){$.mDialog({css:{width:"470px"},http:function(b,c){b.find(".content").html(a.htmlDom);if(noticeType=="priceDown"){$("#expectPrice").val(parseInt(globalPartPrice));if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){$("#isFavoriteAdd").css("display","none")}$(".exOrder-show-win").css("display","none")}else{if(noticeType=="arrival"){if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){$("#isFavoriteAdd").css("display","none")}else{$("#check-addfav").attr("checked","checked")}$("#arrival_text").css("display","block");$("#priceLi").css("display","none");$(".exOrder-show-win").css("display","none")}}},overlayCss:{background:"black ",opacity:"0.3"},title:titleName})}mySuning.doSuccess=function(c,d,h,f,a,e){var g=c;if(g.returnCode==0){if(d=="product"){var b="//favorite.suning.com/ajax/productFavoriteSuccessLayer.do?partnumber="+h+"&shopId="+f+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#spsc_cksc").attr("name",e+"_spsc_cksc");$("#spsc_bjbq").attr("name",e+"_spsc_bjbq")}}else{if(d=="shop"){var b="//favorite.suning.com/ajax/shopFavoriteSuccessLayer.do?shopId="+f+"&entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#dpsc_cksc").attr("name",e+"_dpsc_cksc");$("#dpsc_bjbq").attr("name",e+"_dpsc_bjbq")}}}}else{if(g.returnCode==1){if(d=="product"){var b="//favorite.suning.com/ajax/productFavoritedLayer.do?partnumber="+h+"&shopId="+f+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#spsc_cksc").attr("name",e+"_spsc_cksc");$("#spsc_bjbq").attr("name",e+"_spsc_bjbq")}}else{if(d=="shop"){var b="//favorite.suning.com/ajax/shopFavoritedLayer.do?shopId="+f+"&entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback");if(e){$("#dpsc_cksc").attr("name",e+"_dpsc_cksc");$("#dpsc_bjbq").attr("name",e+"_dpsc_bjbq")}}}}else{var b="//favorite.suning.com/ajax/"+d+"FavoriteFailLayer.do?entrance="+a+"&callback=";mySuning.requestDialog(b,"favoriteCallback")}}};mySuning.doGET=function(b,c,g,e,a,d){$.ajax({type:"GET",async:false,url:b,dataType:"jsonp",jsonpCallback:"myCallback",success:function f(h){mySuning.doSuccess(h,c,g,e,a,d)}})};mySuning.doJsonpGET=function(a,b){$.ajax({type:"GET",async:false,url:a,dataType:"jsonp",jsonpCallback:b})};mySuning.add2ProductFavorite=function(j,h,b,i,c,e,f,d){globalEntrance=b;globalShopId=h;ajaxUrl=window.location.href;var a=/^[0-9]{18}$/;var g=/^[0-9]{10}$/;if(!(a.test(j)&&g.test(h))){alert("传入参数不正确");return}if("shoppingCart1shopping"==b){url="https://favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}else{if("shoppingCart1"==b){url="https://favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}else{url="//favorite.suning.com/ajax/addProductFavorite.do?partnumber="+j+"&shopId="+h+"&entrance="+b}}if(e!==null&&e!==undefined&&e!==""){url=url+"&pdType="+e}if(f!==null&&f!==undefined&&f!==""){url=url+"&shoptType="+f}probeAuthStatus(function(){if(i){mySuning.doJsonpGET(url,i)}else{mySuning.doGET(url,"product",j,h,c)}},function(){ensureLogin(function(){mySuning.add2ProductFavorite(j,h,b,i,c,e,f,d);if(typeof d=="function"){d()}})})};mySuning.add2ShopFavorite=function(e,a,d,b){globalEntrance=a;var c=/^[0-9]{10}$/;if(!c.test(e)){alert("传入参数不正确");return}url="//favorite.suning.com/ajax/addShopFavorite.do?shopId="+e+"&entrance="+a;probeAuthStatus(function(){mySuning.doGET(url,"shop","",e,a,d)},function(){ensureLogin(function(){mySuning.add2ShopFavorite(e,a,d,b);if(typeof b=="function"){b()}})})};var tel=/^[a-zA-Z0-9_\u4e00-\u9fa5]{0,10}$/;mySuning.addTag=function(b,a){var d=encodeURI(b);$.ajax({type:"GET",async:false,url:d,dataType:"jsonp",jsonpCallback:"myCallback",success:function c(e){var f=e;if(f.returnCode==0){a.find("#btns").css("display","none");a.find("#ok").css("display","block");setTimeout(function(){$.unmDialog()},2000)}else{if(f.returnCode=1){a.find("#error").css("display","block")}else{if(f.returnCode=-2){a.find("#notRight").css("display","block")}}}}})};mySuning.addTag1=function(b,a){var d=encodeURI(b);$.ajax({type:"GET",async:false,url:d,dataType:"jsonp",jsonpCallback:"myCallback",success:function c(e){var f=e;if(f.returnCode==0){a.find(".add-sign").find("a").remove();a.find(".error-ok").css("display","block");setTimeout(function(){$.unmDialog()},2000)}else{if(f.returnCode=1){a.find(".error-msg").html("添加标签失败！");a.find(".error-msg").css("display","block");a.find("a").prev().addClass("error-tbx")}else{if(f.returnCode=-2){a.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");a.find(".error-msg").css("display","block");a.find("a").prev().addClass("error-tbx")}}}}})};mySuning.productFavoriteAndTag=function(c){var f=$(c).parent().parent();f.find("#error").css("display","none");var i=f.parent().find("input");var b=i.attr("id");var e=f.find("i");var h=$(c).parent().find(".partnumber").attr("id");var g=$(c).parent().find(".shopId").attr("id");var d="notOpen";if(typeof(i.val())==undefined||i.val()==""||i.val()==null){return}else{if(tel.test(i.val())){f.find("#notRight").css("display","none");f.find("#error").css("display","none");var a="//favorite.suning.com/ajax/addProductTag.do?partnumber="+h+"&shopId="+g+"&open="+d+"&productTagName="+i.val()+"&oldTagName="+b;ensureLogin(function(){mySuning.addTag(a,f)})}else{f.find("#notRight").css("display","block");return}}};mySuning.productFavoriteAndTag1=function(g){var e=$(g).parent().parent();var a=$(g).prev();if(a.val()=="您还可以自定义标签 (10字以内)"){return}else{var d=a.attr("id");var h=$(g).parent().find(".partnumber").attr("id");var f=$(g).parent().find(".shopId").attr("id");var c="notOpen";if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){var b="//favorite.suning.com/ajax/addProductTag.do?partnumber="+h+"&shopId="+f+"&open="+c+"&productTagName="+a.val()+"&oldTagName="+d;probeAuthStatus(function(){mySuning.addTag1(b,e)},function(){ensureLogin(function(){mySuning.addTag1(b,e)})})}else{e.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");e.find(".error-msg").css("display","block");a.addClass("error-tbx");return}}}};mySuning.shopFavoriteAndTag=function(g){var e=$(g).parent().parent();e.find("#error").css("display","none");var a=e.parent().find("input");var d=a.attr("id");var c=e.find("i");var f=$(g).parent().find(".shopId").attr("id");if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){e.find("#notRight").css("display","none");e.find("#error").css("display","none");var b="//favorite.suning.com/ajax/addShopTag.do?&shopId="+f+"&shopTagName="+a.val();ensureLogin(function(){mySuning.addTag(b,e)})}else{e.find("#notRight").css("display","block");return}}};mySuning.shopFavoriteAndTag1=function(f){var d=$(f).parent().parent();var a=$(f).prev();if(a.val()=="您还可以自定义标签 (10字以内)"){return}else{var c=a.attr("id");var e=$(f).parent().find(".shopId").attr("id");if(typeof(a.val())==undefined||a.val()==""||a.val()==null){return}else{if(tel.test(a.val())){var b="//favorite.suning.com/ajax/addShopTag.do?&shopId="+e+"&shopTagName="+a.val()+"&oldTagName="+c;probeAuthStatus(function(){mySuning.addTag1(b,d)},function(){ensureLogin(function(){mySuning.addTag1(b,d)})})}else{d.find(".error-msg").html("标签应为10个以内的中文、数字、字母或下划线！");d.find(".error-msg").css("display","block");a.addClass("error-tbx");return}}}};mySuning.onerr=function(a,b){a.css("display","block");a.html("<i></i><label>"+b+"</label>")};mySuning.validatePrice=function(b,c){var a=/^[1-9]\d*$/;var d=c.val();if(d==undefined||d==""){mySuning.onerr(b,"期望价格不能为空");$("#expectPrice").css("border-color","#ff0000");return false}else{if(!a.test(d)){mySuning.onerr(b,"期望价格必须是正数");return false}if(Number(d)>Number(globalPartPrice)){mySuning.onerr(b,"期望价格不能高于原价");return false}else{return true}}return true};mySuning.validateMobile=function(e,a){var d=/^1\d{10}$/;var c=a.val();var b=$("#email").val();if((c==undefined||c=="")&&(b==undefined||b=="")){$("#emailMobileErr").css("display","block");return false}else{if(c.length>0){if(c.length!=11||!d.test(c)){$("#emailMobileErr").css("display","none");mySuning.onerr(e,"手机号码输入格式错误");return false}return true}else{return true}}};mySuning.validateEmail=function(e,a){var d=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;var c=a.val();var b=$("#fMobileNumber").val();if((c==undefined||c=="")&&(b==undefined||b=="")){$("#emailMobileErr").css("display","block");return false}else{if(c.length>0){if(c.length>50||!d.test(c)){if(c.match(/(\s+)/)&&c.match(/@/)&&c.match(/\./)){$("#emailMobileErr").css("display","none");mySuning.onerr(e,"邮箱不能包含空格！")}else{mySuning.onerr(e,"邮箱地址输入格式错误");$("#emailMobileErr").css("display","none")}return false}return true}else{return true}}};mySuning.fcus=function(b,a){b.css("display","none");if(null!=a){a.css("display","none")}if("error1"!=b.attr("id")&&$("#errorMobile").css("display")=="none"&&$("#error2").css("display")=="none"){$("#emailMobileErr").css("display","block")}};mySuning.clickNotice=function(c,b){var a;if(noticeType=="priceDown"){a="//favorite.suning.com/ajax/fourPage/checkCountPrice.do"}else{if(noticeType=="arrival"){a="//favorite.suning.com/ajax/fourPage/checkCountArrival.do"}}ensureLogin(function(){$.ajax({type:"GET",async:false,url:a+"?partnumber="+c+"&shopId="+b,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function d(f){var g=f.bookFlag;var e;if(g==2){e="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do?callback=",mySuning.requestDialog(e,"fiftyCallBack")}else{if(g==1){e="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do?partnumber="+globalPartNumber+"&shopId="+globalShopId+"&entrance="+globalEntrance+"&callback=",mySuning.requestDialog(e,"twoCallBack")}else{if(g==0){thisMfCityId=f.cityId;if(noticeType=="priceDown"){titleName="降价通知"}else{if(noticeType=="arrival"){titleName="到货通知"}else{titleName="温馨提示"}}var h;h="//favorite.suning.com/ajax/fourPage/clickAlertPrice.do";e=h+"?partnumber="+globalPartNumber+"&shopId="+globalShopId+"&entrance="+globalEntrance+"&callback=",mySuning.requestDialog(e,"noticeCallBack")}}}}})})};mySuning.myClickPrice=function(g,d,f,b,e,a){var c=mySuning.validatePrice(g,d);var b=mySuning.validateEmail(f,b);var a=mySuning.validateMobile(e,a);if(noticeType=="priceDown"){if(c&&b&&a){mySuning.fromSubmit()}}else{if(b&&a){mySuning.fromSubmit()}}};mySuning.myClickArrival=function(b,a){var a=mySuning.validateEmail(b,a);if(a&&cityflag){mySuning.fromSubmit($(" #arrivalEmail"))}};mySuning.fromSubmit=function(){var c=$(" #email");var g=$(" #expectPrice");var b=$(" #fMobileNumber");if(noticeType=="priceDown"){var f=g.val()}var d;var a=c.val();var e=b.val();if(globalEntrance=="myFavorite"||globalEntrance=="myFavoritePic"||globalEntrance=="myFavoritePicNew"){d=false}else{if($("#check-addfav").attr("checked")=="checked"){d=true}else{d=false}}var h;if(noticeType=="priceDown"){h="//favorite.suning.com/ajax/myFavorite/addProductPriceNotice.do?expectedPrice="+f+"&price="+globalPartPrice+"&email="+a+"&mobilePhone="+e}else{if(noticeType=="arrival"){h="//favorite.suning.com/ajax/myFavorite/addProductArrivalNotice.do?email="+a+"&mobilePhone="+e}}probeAuthStatus(function(){if(noticeType=="arrival"){try{if(window.SNNativeClient){if(window.SNNativeClient.appNotificationStatus){window.SNNativeClient.appNotificationStatus(1)}}}catch(j){}}$.ajax({type:"GET",url:h+"&&partnumber="+globalPartNumber+"&&shopId="+globalShopId+"&entrance="+globalEntrance+"&pdType="+globalPdType+"&shoptType="+globalShoptType,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function i(k){if(k.returnCode==-1){$.unmDialog();ensureLogin(function(){})}else{var l=k.returnMsg;if(l==undefined||l==""){if(d){mySuning.mySuningFavoriteNoticePartnumber=globalPartNumber;mySuning.mySuningFavoriteNoticeShopId=globalShopId;mySuning.mySuningFavoriteNoticeEntrace=globalEntrance;mySuning.add2ProductFavorite(globalPartNumber,globalShopId,globalEntrance,"mySuningFavoriteShowNoticesSuccessCallback","",globalPdType,globalShoptType,"")}else{mySuning.showNoticeSuccess(globalPartNumber,globalShopId,"'"+globalEntrance+"'")}}else{mySuning.onerr($("#messagePrice"),l)}}},error:function(){if(noticeType=="priceDown"){mySuning.onerr($("#messagePrice"),"系统异常")}else{if(noticeType=="arrival"){analystics.submit("mf-arrival-error-02");mySuning.onerr($("#messageArrival"),"系统异常")}}}})},function(){if(noticeType=="arrival"){analystics.submit("mf-arrival-error-01")}$.unmDialog();ensureLogin(function(){})})};mySuningFavoriteShowNoticesSuccessCallback=function(){mySuning.showNoticeSuccess(mySuning.mySuningFavoriteNoticePartnumber,mySuning.mySuningFavoriteNoticeShopId,"'"+mySuning.mySuningFavoriteNoticeEntrace+"'");mySuning.mySuningFavoriteNoticePartnumber=null;mySuning.mySuningFavoriteNoticeShopId=null;mySuning.mySuningFavoriteNoticeEntrace=null};mySuning.showNoticeSuccess=function(b,a,c){mySuning.getRecommendedData("1-2",b,"mySuning.myRecommedData");$("#noticeDiv").css("display","none");$("#noticeSuccess").css("display","block");if(noticeType=="priceDown"){$(".netuser-showWin-title").html("<h3>商品订阅降价通知成功</h3>");$("#tipmessage").html("商品一旦在30日内降价，我们将会第一时间通知您，请及时关注哦！")}else{if(noticeType=="arrival"){$(".netuser-showWin-title").html("<h3>商品订阅到货通知成功</h3>");$("#tipmessage").html("");if(c=="'myFavorite'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find(".prod-edit .btn");d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}if(c=="'myFavoritePic'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find(".cost-pic a");d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}if(c=="'myFavoritePicNew'"){var d=$("#prod"+b+"_"+a+"_"+lesProviceId+"_"+lesCityCode+"_"+lesDistributeCode).find("#refreshArrivalNotice"+b+a);d.html("已订阅");d.attr("title","已订阅到货通知");d.attr("href","javascript:void(0);");d.attr("style","color:#999;cursor:default;text-decoration:none;")}}}};mySuning.subscribePriceNotice=function(g,e,b,a,f,c,d){noticeType="priceDown";globalPartPrice=b;globalPartNumber=g;globalShopId=e;globalEntrance=a;if(f==null||f==undefined){globalPdType="0"}else{globalPdType=f}if(c==null||c==undefined){globalShoptType="N"}else{globalShoptType=c}ajaxUrl=window.location.href;ensureLogin(function(){mySuning.clickNotice(g,e);if(typeof d=="function"){d()}})};mySuning.subscribeArrivalNotice=function(f,d,a,e,b,c){noticeType="arrival";globalPartNumber=f;globalShopId=d;globalEntrance=a;if(e==null||e==undefined){globalPdType="0"}else{globalPdType=e}if(b==null||b==undefined){globalShoptType="N"}else{globalShoptType=b}ajaxUrl=window.location.href;ensureLogin(function(){mySuning.clickNotice(f,d);if(typeof c=="function"){c()}})};mySuning.cityValidate=function(b){favoriteCityId=b.find("#inputCityId").val();if(!favoriteCityId||favoriteCityId==""){favoriteCityId=thisMfCityId}var a;if(noticeType=="priceDown"){a="//favorite.suning.com/ajax/myFavorite/checkProductPriceNoticeCity.do"}else{if(noticeType=="arrival"){a="//favorite.suning.com/ajax/myFavorite/checkProductArrivalNoticeCity.do"}}probeAuthStatus(function(){$.ajax({type:"GET",url:a+"?cityId="+favoriteCityId+"&&partnumber="+globalPartNumber+"&&shopId="+globalShopId,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function c(d){if(d.returnCode==-1){$.unmDialog();ensureLogin(function(){})}else{var e=d.returnMsg;if(e&&e!=""){if(noticeType=="priceDown"){mySuning.onerr($("#errorCityMsgPrice"),e)}else{if(noticeType=="arrival"){mySuning.onerr($("#errorCityMsgArrival"),e)}}cityflag=false}else{cityflag=true}}},error:function(){if(noticeType=="priceDown"){mySuning.onerr($("#errorCityMsgPrice"),"系统异常")}else{if(noticeType=="arrival"){mySuning.onerr($("#errorCityMsgArrival"),"系统异常")}}}})},function(){$.unmDialog();ensureLogin(function(){})})};mySuning.getRecommendedData=function(a,g,e){var f;f=$.cookie("cityId");if(f=="cityId=undefined"){var c=document.cookie.split(";");for(var d=0;d<c.length;d++){var b=c[d].split("=");if(b[0]=="cityId"){f=unescape(b[1])}}}if(f==undefined||f==""||f=="cityId=undefined"){f="9173"}$.ajax({type:"get",url:"//tuijian.suning.com/recommend-portal/recommendv2/biz.jsonp?parameter="+g+"&cityId="+f+"&sceneIds="+a+"&count=12&u=156126",dataType:"jsonp",jsonpCallback:e,cache:true})};mySuning.myRecommedData=function(c){leng=c.sugGoods[0].skus.length;var l="";var a;var k;if(leng>12){leng=12}if(leng>=1){$("#picRecommend").css("display","block");for(var d=0;d<leng;d++){var g=c.sugGoods[0].skus[d].sugGoodsCode;var h=c.sugGoods[0].skus[d].sugGoodsName;var e=c.sugGoods[0].parameter;var p=c.sugGoods[0].skus[d].vendorId;var j=c.sugGoods[0].skus[d].price;var m=c.sugGoods[0].skus[d].handwork;var f;var b;if(noticeType=="priceDown"){b="_recsijijzn_"}else{b="_recsjdhtzn_"}if(globalEntrance=="productDetail"){if(ajaxUrl.indexOf("//item")==0){f="item_"}else{if(globalShopId!="0000000000"){f="cprd_";if(noticeType=="priceDown"){b="_reccsijijz_"}else{b="_reccsjdhtz_"}}else{f="item_"}}}else{if(globalEntrance=="searchResult"){if(ajaxUrl.indexOf("//search")==0){f="ssdsn_"}else{f="ssdln_"}if(noticeType=="priceDown"){b="_recsijijzn_"}else{b="_recsojdhtzn_"}}else{f="favorite_"}}var o=f+e.substring(9,18)+b+(Math.floor(d/3)+1)+"-"+(d%3+1)+"_p_"+p+"_"+g.substring(9,18)+"_"+m;var n=f+e.substring(9,18)+b+(Math.floor(d/3)+1)+"-"+(d%3+1)+"_c_"+p+"_"+g.substring(9,18)+"_"+m;l=l+"<li><a  class='fav-pic' title='"+h+"' name='"+o+"' href='//product.suning.com/"+p+"/"+g.substring(9,18)+".html?src="+o+"' target='_blank'> <img src='//image.suning.cn/content/catentries/"+g.substring(0,14)+"/"+g+"/"+g+"_ls1.jpg' id='img"+g+"' /></a>    <p class='msg-protitle' style='height:35px; overflow: hidden;'><a name='"+o+"' title='"+h+"' target='_blank'  href='//product.suning.com/"+p+"/"+g.substring(9,18)+".html?src="+n+"' >"+h+"</a></p> <p class='snPrice'><em class='l'>￥</em><i> "+j+"</i></p> </li>"}$(".movbox-artic").html(l);$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var q=i.attr("src");i.attr("src","");i.load(function(){var r=i.attr("id");mySuning.zoom(r,100,100)});i.attr("src",q)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var q=i.attr("src");i.attr("src","");i.load(function(){var r=i.attr("id");mySuning.zoom(r,100,100)});i.attr("src",q)})}}else{$("#picRecommend").css("display","none")}};mySuning.productSuccessRecommedCallback=function(q){var d=q.sugGoods[0].skus.length;var j="<ul class='movbox-artic'>";var o;if(globalEntrance=="productDetail"){if(ajaxUrl.indexOf("//item")==0){o="item_";recommedBuriedPointCollect="_recscollectn_"}else{if(globalShopId!="0000000000"){o="cprd_";recommedBuriedPointCollect="_reccscollect_"}else{o="item_";recommedBuriedPointCollect="_recscollectn_"}}}else{if(globalEntrance=="searchResult"){if(ajaxUrl.indexOf("//search")==0){o="ssdsn_";recommedBuriedPointCollect="_recsostore_"}else{o="ssdln_";recommedBuriedPointCollect="_recstore_"}}else{o="favorite_";recommedBuriedPointCollect="_recscollectn_"}}var e=q.sugGoods[0].parameter;if(d>0){var g=d;if(d>12){g=12}for(var l=0;l<g;l++){var n=q.sugGoods[0].skus[l].sugGoodsCode;var r=q.sugGoods[0].skus[l].vendorId;var p=q.sugGoods[0].skus[l].sugGoodsName;if(p.length>=20){var a=p.substring(0,20)}else{var a=p}var k=q.sugGoods[0].skus[l].price;var s=q.sugGoods[0].skus[l].handwork;var c="//product.suning.com/"+r+"/"+n.substring(9,18)+".html?src="+o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_"+r+"_"+n.substring(9,18)+"_"+s;var m="//product.suning.com/"+r+"/"+n.substring(9,18)+".html?src="+o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_c_"+r+"_"+n.substring(9,18)+"_"+s;var f="//image.suning.cn/content/catentries/"+n.substring(0,14)+"/"+n+"/"+n+"_ls1.jpg";var h=o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_"+r+"_"+n.substring(9,18)+"_"+s;var b=o+e.substring(9,18)+recommedBuriedPointCollect+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_c_"+r+"_"+n.substring(9,18)+"_"+s;j=j+"<li><a title='"+p+"' name='"+h+"' href='"+c+"' target='_blank' class='fav-pic'><img src='"+f+"' alt='"+p+"' id='img"+n+"'/></a><a href='"+m+"' title='"+p+"'  name='"+b+"' target='_blank' class='fav-msg'>"+p+"</a><span class='fav-price'>&yen;"+k+" </span></li>"}j=j+"</ul>";$(".movpic-shot").html(j);$(".movpic-artic").removeAttr("style");$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var t=i.attr("src");i.attr("src","");i.load(function(){var u=i.attr("id");mySuning.zoom(u,100,100)});i.attr("src",t)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var t=i.attr("src");i.attr("src","");i.load(function(){var u=i.attr("id");mySuning.zoom(u,100,100)});i.attr("src",t)})}}};mySuning.shopSuccessRecommedCallback=function(k){var a=k.sugGoods[0].skus.length;var p="<ul class='movbox-artic'>";if(a>0){var c="";var d=a;if(a>12){d=12}var e="cprd_";for(var l=0;l<d;l++){var j=k.sugGoods[0].skus[l].sugGoodsName;var n=k.sugGoods[0].parameter;var f=k.sugGoods[0].skus[l].sugGoodsDes;var m=k.sugGoods[0].skus[l].sugGoodsCode;var q=k.sugGoods[0].skus[l].handwork;if(f==undefined||f.length==0){f="//image.suning.cn/project/myfavorite/images/shop.png"}var o=k.sugGoods[0].skus[l].sugGoodsCode;var h=k.sugGoods[0].skus[l].promotionInfo;if(o.length>8){c=c+o+"_"}c=c.substring(0,c.length-1);var b=e+n+"_recscdp_"+(Math.floor(l/3)+1)+"-"+(l%3+1)+"_p_0000000000_"+m+"_"+q;var g=h+"?src="+b;p=p+'<li id="recmStar'+o+'"><a title="'+j+'" name="'+b+'" href="'+g+'" class="fav-pic" target="_blank"><img src="'+f+'" id="img'+o+'"/></a><p class="msg-protitle"><a href="'+g+'" title="'+j+'" target="_blank">'+j+'</a></p><div class="pro-lvstart"><span class="comment-star"><em style="width:'+5*14+'px;margin-top:0"></em></span></div></li>'}p=p+"</ul>";$(".movpic-shot").html(p);$(".movpic-artic").removeAttr("style");$(".m-dialog").css("top","30%");mySuning.fav_showPic();if((navigator.userAgent.indexOf("MSIE")>=0)&&(navigator.userAgent.indexOf("Opera")<0)){setTimeout(function(){$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var r=i.attr("src");i.attr("src","");i.load(function(){var s=i.attr("id");mySuning.zoom(s,100,100)});i.attr("src",r)})},200)}else{$(".movpic-shot").find("li").each(function(){var i=$(this).find("img");var r=i.attr("src");i.attr("src","");i.load(function(){var s=i.attr("id");mySuning.zoom(s,100,100)});i.attr("src",r)})}mySuning.getShopStarsJsonp(c)}};mySuning.getShopStarsJsonp=function(c){var b="//favorite.suning.com/ajax/getShopStarsJsonp.do?shopIdStr="+c;$.ajax({type:"get",url:b,async:false,dataType:"jsonp",jsonpCallback:"myCallbackStars",success:function a(g){var d=0;for(var e in g){var f=(g.shopReviewScoreList[e].shopStar/5*69).toFixed(2);$("#recmStar"+g[e].supplierCode).find("em").attr("style","width:"+f+"px")}}})};mySuning.subscribeArrivalNoticeCheck=function(i,h,c,b,d,f,g){var a="//favorite.suning.com/ajax/fourPage/checkCountArrival.do";$.ajax({type:"GET",async:false,url:a+"?partnumber="+i+"&shopId="+h,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function e(l){var m=l.bookFlag;var j;if(m==2){showMsg("订阅已满50次，无法订阅！")}else{if(m==0){try{if(window.SNNativeClient){if(window.SNNativeClient.appNotificationStatus){window.SNNativeClient.appNotificationStatus(1)}}}catch(n){}var o="//favorite.suning.com/ajax/myFavorite/addProductArrivalNotice.do?mobilePhone="+d;if(f==null||f==undefined){f="0"}if(g==null||g==undefined){g="N"}$.ajax({type:"GET",url:o+"&&partnumber="+i+"&&shopId="+h+"&mdmCityCode="+c+"&entrance="+b+"&channel=2&pdType="+f+"&shoptType="+g,dataType:"jsonp",jsonpCallback:"myCallbacknotice",success:function k(p){var s=p.returnCode;if(s!==undefined&&s==="-3"){showMsg("您订阅的次数已达上限，请明天再试！");return}var r=p.returnMsg;if(r==undefined||r==""){var t=$("#checkin8").prop("checked");if(t){var q="//favorite.suning.com/ajax/addProductFavoriteJsonp.do?";$.ajax({type:"GET",url:q+"partnumber="+i+"&shopId="+h+"&entrance="+b+"&channel=2&pdType="+f+"&shoptType="+g,async:false,dataType:"json",success:function(u){}})}showMsg("订阅成功，请耐心等待！")}else{showMsg("订阅失败，系统异常！")}},error:function(){showMsg("订阅失败，系统异常！")}})}}}})};mySuning.zoom=function(a,e,f){$("#"+a).css("width","");$("#"+a).css("height","");var g=$("#"+a).width();var h=$("#"+a).height();if((e/f)>(g/h)){$("#"+a).width((f*g)/h);$("#"+a).height(f);var c=(e-$("#"+a).width())/2;var b=(f-$("#"+a).height())/2;$("#"+a).css("margin-top",b);$("#"+a).css("margin-left",c);$("#"+a).css("margin-right",c-1)}else{$("#"+a).width(e);$("#"+a).height((e*h)/g);var d=(f-$("#"+a).height())/2;var i=($("#"+a).width())/2;$("#"+a).css("margin-top",d)}};var spacing=118;var page=1;var setUpCovers=function(){var a;a=parseInt(leng/3);$(".pageNum").html("/"+a);var b=$(".covers").last();var c=b.find(".covers_a");$(".btn_forLeft").die("click");$(".btn_forRight").die("click");c.eq(0).css("left","0");c.eq(1).css("left",spacing);c.eq(2).css("left",spacing*2);$(".btn_forLeft").live("click",function(e){var d=$(".covers").last();var f=d.find(".covers_a");f.eq(2).animate({left:spacing*5},"fast");f.eq(1).animate({left:spacing*4},"fast");f.eq(0).animate({left:spacing*3},"fast");f.eq(f.length-1).css("left",(-spacing)).animate({left:spacing*2},"fast");f.eq(f.length-2).css("left",(-spacing)*2).animate({left:spacing},"fast");f.eq(f.length-3).css("left",(-spacing)*3).animate({left:0},"fast",function(){f.eq(f.length-1).prependTo(".covers");f.eq(f.length-2).prependTo(".covers");f.eq(f.length-3).prependTo(".covers");setUpCovers()});if(page>1){page--}else{page=a}$(".page").html(page);e.preventDefault()});$(".btn_forRight").live("click",function(e){var d=$(".covers").last();var f=d.find(".covers_a");f.eq(0).animate({left:-spacing*3},"fast");f.eq(1).animate({left:-spacing*2},"fast");f.eq(2).animate({left:-spacing},"fast");f.eq(3).css("left",spacing*3).animate({left:0},"fast");f.eq(4).css("left",spacing*4).animate({left:spacing},"fast");f.eq(5).css("left",spacing*5).animate({left:spacing*2},"fast",function(){f.eq(0).appendTo(".covers");f.eq(1).appendTo(".covers");f.eq(2).appendTo(".covers");setUpCovers()});if(page<a){page++}else{page=1}$(".page").html(page);e.preventDefault()})};mySuning.listloop=function(b){var c={wrap:"#brandPromo",loopBox:"#brandPromo-list",triggerLeft:".dir-prev",triggerRight:".dir-next",curCount:".cur-count",totalCount:".total-count",step:{wide:7,narrow:6},scrollWidth:{wide:840,narrow:660},hasCount:true,isLoop:true,isLazyLoad:true,delay:0};$.extend(c,b);var h=$(c.wrap),n=h.find(c.triggerLeft),a=h.find(c.triggerRight),q=h.find(c.loopBox),g=q.find("li"),e=c.step.wide,l=c.scrollWidth.wide,s=Math.ceil(g.length/e),f=g.length,j=h.find(c.curCount),t=h.find(c.totalCount),r=0;if(screen.width<1280){e=c.step.narrow;l=c.scrollWidth.narrow;var u=g.length%e;s=Math.ceil(g.length/e);f=g.length-u}c.hasCount&&t.html(s);n.click(function(){m();return false});a.click(function(){o();return false});function o(){if(s==1||q.is(":animated")){return false}if(!c.isLoop){r++;if(r>=s){r=s-1}p(false,r);return}if(r==s-1){for(var i=0;i<e;i++){g.eq(i).css({position:"relative",left:s*l+"px"})}}r++;p(function(){if(r==s){r=0;g.removeAttr("style");q.css("marginLeft",r*l)}},r)}function m(){if(s==1||q.is(":animated")){return false}if(!c.isLoop){r--;if(r<=0){r=0}p(false,r);return}if(r==0){for(var i=1;i<=e;i++){g.eq(f-i).css({position:"relative",left:-s*l+"px"})}}r--;p(function(){if(r==-1){r=s-1;g.removeAttr("style");q.css("marginLeft",-r*l)}},r)}function p(v,i){k();if(c.hasCount){if(i>s-1){i=0}if(i<0){i=s-1}j.html(i+1)}if(!v){v=function(){}}q.stop().animate({marginLeft:-r*l},500,v)}function k(){if(!c.isLazyLoad){return}for(var v=0;v<e;v++){var i=g.eq(r*e+v).find("img");if(i.attr("src3")){i.attr("src",i.attr("src3")).removeAttr("src3").addClass("err-product")}}}if(c.delay){var d=setInterval(function(){o()},c.delay);h.hover(function(){clearInterval(d)},function(){d=setInterval(function(){o()},c.delay)})}};mySuning.getShopStar=function(c){var b="//favorite.suning.com/ajax/getShopStar.do?shopId="+c;var a=$.ajax({type:"get",url:b,async:false,dataType:"json",success:function(e){var d=e;return d},error:function(d){return 5}});return a.responseText};mySuning.addCookie=function(a){$.cookie("smhst",a)};mySuning.add2BrandFavorite=function(d,c,a,e,b){probeAuthStatus(function(){var f="//favorite.suning.com/ajax/addBrandFavorite.do?brandId="+d+"&deptId="+c+"&entrance="+a;if(e){$.ajax({type:"GET",async:false,url:f,dataType:"jsonp",jsonpCallback:e})}else{f=f+"&dialog=1";$.ajax({type:"GET",async:false,url:f,dataType:"jsonp",jsonpCallback:"myBrandFavorWithDialog",success:function g(h){$.mDialog({css:{width:"450px"},http:function(i,j){i.find(".content").html(h.htmlDom)},overlayCss:{background:"black ",opacity:"0.3"},title:"温馨提示"})}})}},function(){ensureLogin(function(){mySuning.add2BrandFavorite(d,c,a,e,b)})})};mySuning.cancelSubscibeConfirm=function(){alert(fMobileNumber.val());$.mLionDialog({css:{width:"420px"},message:$(".cancel-subscibe-confirm"),overlayCss:{background:"black",opacity:"0.3"},title:"温馨提示",fadeIn:300,fadeOut:300})};mySuning.cancelSubscibeSuccess=function(){$.mLionDialog({css:{width:"420px"},message:$(".cancel-subscibe-success"),overlayCss:{background:"black",opacity:"0.3"},title:"温馨提示",fadeIn:300,fadeOut:300})};var firstCmmdty={};var recommendProductInfo="";var version="";var shoppingCartUrl="";var b2c_fc_authid="";var regionInfo1;var sa=sa||{};sa.maxLength=100;sa.openAPI=true;var cart=cart||{};cart.normal=(function($){var addToCart=function(jsonObj,callback){if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"";var verifyCode="";if(cart.security.getNeedVerifyCodeVal()){var tempVerifyCode=cart.security.getVerifyCodeVal();var tempDefaultValue=cart.security.getDefaultValue();if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!=tempDefaultValue){verifyCode=tempVerifyCode}cart.security.setNeedVerifyCodeVal(false)}if(typeof(bd)!="undefined"){cart.common.setCookie("c2dt",bd.rst())}jsonObj.verifyCode=verifyCode;jsonObj.uuid=cart.security.getUUID();jsonObj.sceneId=cart.security.getSceneId();var targetUrl="//shopping.suning.com/addCart.do?callback=?";var params={cartVO:cart.common.obj2string(jsonObj)};ajaxCrossDomain(targetUrl,$.param(params),function(data){cartSuccessCallBack(data,callback)},function(){cartFailCallBack(callback)},cart.common.passport_config);if(cmmdtyVOList[0].activityType!="06"){cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode)}};var cartSuccessCallBack=function(respData,callerCallBack){var resp={};resp.analyticsType="Addcart";resp.result="0";var returnCode=respData.returnCode;if(null!=returnCode&&""!=returnCode&&"4000"==returnCode){resp.failCode=returnCode;if(typeof(respData.fcType)!="undefined"&&respData.fcType!=null&&respData.fcType!=""){resp.failMsg="商品销售火爆，请稍后再试(L945"+respData.fcType+")"}else{resp.failMsg="商品销售火爆，请稍后再试(L946)"}cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}var result=respData.isSuccess;if(result=="Y"){var param={pid:firstCmmdty.cmmdtyCode,vid:firstCmmdty.shopCode,storeId:sn.storeId,catalogId:sn.catalogId,langId:"-7",cartFlag:"B"};shoppingCartUrl="//shopping.suning.com/cart.do?"+$.param(param);resp.result="1";resp.url=shoppingCartUrl}else{var errorCode,errorMsg;if(respData.addCartErrorList!=undefined&&respData.addCartErrorList[0]!=undefined){errorCode=respData.addCartErrorList[0].errorCode;errorMsg=respData.addCartErrorList[0].errorMessage}if(errorCode=="017"){resp.failCode=errorCode;resp.failMsg=errorMsg;resp.uuid=respData.uuid;cart.security.setNeedVerifyCodeVal(true)}else{if(errorCode=="018"){resp.failCode=errorCode;resp.failMsg="大宗购物请到企业用户渠道，小苏的服务会更贴心！"}else{if(errorCode=="019"){resp.failCode=errorCode;resp.failMsg=errorMsg}else{if(errorCode=="015"||errorCode=="025"){resp.failCode=errorCode;resp.failMsg=errorMsg}else{if(errorCode=="024"){resp.failCode=errorCode;resp.failMsg="您登陆的账号有异常，请联系在线客服处理"}else{if(errorCode=="32"){resp.failCode=errorCode;resp.failMsg=errorMsg}else{if(errorMsg!=undefined&&errorMsg!=""){resp.failCode=errorCode;resp.failMsg=errorMsg}else{resp.failCode="001";resp.failMsg="网络异常，您可以检查网络或再试一次！"}}}}}}}cart.analytics.recordErrorMsg(resp)}callerCallBack(resp)};var cartFailCallBack=function(callerCallBack){var resp={};resp.analyticsType="Addcart";resp.result="0";resp.failCode="0000";resp.failMsg="网络异常，您可以检查网络或再试一次";cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};var addCart=function(jsonObj,callback,httpSwitch){cart.toCartCallback.setData(jsonObj);cart.toCartCallback.setCallback(callback);cart.toCartCallback.setHttpSwitch(httpSwitch);cart.toCartCallback.setOperateType(0);if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"0000000000";var verifyCode="";if(cart.security.getNeedVerifyCodeVal()){var tempVerifyCode=cart.security.getVerifyCodeVal();var tempDefaultValue=cart.security.getDefaultValue();if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!=tempDefaultValue){verifyCode=tempVerifyCode}cart.security.setNeedVerifyCodeVal(false)}if(typeof(bd)!="undefined"){cart.common.setCookie("c2dt",bd.rst())}jsonObj.verifyCode=verifyCode;jsonObj.uuid=cart.security.getUUID();jsonObj.sceneId=cart.security.getSceneId();var targetUrl="//shopping.suning.com/addCart.do?callback=?";var params={cartVO:cart.common.obj2string(jsonObj),b2c_fc_authid:b2c_fc_authid};goContineCartUrl=targetUrl&params;ajaxCrossDomain(targetUrl,$.param(params),function(data){successCallBack("0",data,callback,"",httpSwitch)},function(){failCallBack("0",callback)},cart.common.passport_config);cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode)};var buyNow=function(jsonObj,callback,httpSwitch){cart.toCartCallback.setData(jsonObj);cart.toCartCallback.setCallback(callback);cart.toCartCallback.setHttpSwitch(httpSwitch);cart.toCartCallback.setOperateType(1);if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"0000000000";if(typeof(bd)!="undefined"){cart.common.setCookie("c2dt",bd.rst())}var verifyCode="";if(cart.security.getNeedVerifyCodeVal()){var tempVerifyCode=cart.security.getVerifyCodeVal();var tempDefaultValue=cart.security.getDefaultValue();if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!=tempDefaultValue){verifyCode=tempVerifyCode}else{b2c_fc_authid=""}cart.security.setNeedVerifyCodeVal(false)}jsonObj.verifyCode=verifyCode;jsonObj.uuid=cart.security.getUUID();jsonObj.sceneId=cart.security.getSceneId();var targetUrl="//shopping.suning.com/nowBuy.do?callback=?";if(cmmdtyVOList[0].activityType==="02"&&cmmdtyVOList[0].subActivityType==="10"){targetUrl="//ncart.suning.com/nowBuy.do?callback=?"}var params={cartVO:cart.common.obj2string(jsonObj),b2c_fc_authid:b2c_fc_authid};function buy(fcTokenId){params={cartVO:cart.common.obj2string(jsonObj),b2c_fc_authid:b2c_fc_authid,fcTokenId:fcTokenId};$.ajax({url:targetUrl,data:$.param(params),crossDomain:true,dataType:"jsonp",cache:false,success:function(data){successCallBack("1",data,callback)},error:function(e){cartFailCallBack("1",callback,e)}})}ajaxCrossDomain(targetUrl,$.param(params),function(data){successCallBack("1",data,callback,buy,httpSwitch)},function(){failCallBack("1",callback)},cart.common.passport_config);cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode);cart.analytics.updatePageSaleInfo()};var successCallBack=function(operationType,respData,callerCallBack,buy,httpSwitch){var resp={};resp.analyticsType="Addcart";if(operationType==="1"){resp.analyticsType="Buynow"}resp.result="0";var returnCode=respData.returnCode;if(null!=returnCode&&""!=returnCode&&"4000"==returnCode){resp.failCode=returnCode;if(typeof(respData.fcType)!="undefined"&&respData.fcType!=null&&respData.fcType!=""){resp.failMsg="商品销售火爆，请稍后再试(L945"+respData.fcType+")"}else{resp.failMsg="商品销售火爆，请稍后再试(L946)"}Util.alertErrorBox(resp.failMsg);cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}if(null!=returnCode&&""!=returnCode&&"4001"==returnCode){resp.failCode=returnCode;if(typeof(respData.fcType)!="undefined"&&respData.fcType!=null&&respData.fcType!=""){resp.failMsg="商品销售火爆，请稍后再试(L945"+respData.fcType+")"}else{resp.failMsg="商品销售火爆，请稍后再试(L946)"}b2c_fc_authid=respData.b2c_fc_authid;cart.security.setNeedVerifyCodeVal(true);cart.security.showMinos3(respData.uuid,respData.sceneId);cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}if(typeof buy!="undefined"&&typeof(buy)=="function"){if(respData.fcFlag=="1"){var fc_config={fcWebUrl:"//tspofc.suning.com",fcResUrl:"//res.suning.cn/project/tspofc"};openB2cPopPage(respData,buy,fc_config);return}}var result=respData.isSuccess;var safeDps=respData.safeDps;if(result=="Y"){var param={pid:firstCmmdty.cmmdtyCode,vid:firstCmmdty.shopCode,storeId:sn.storeId,catalogId:sn.catalogId,langId:"-7",cartFlag:"B"};var popuSwitch=respData.addToCartSwitch;if(typeof popuSwitch!="undefined"&&popuSwitch&&popuSwitch==="1"&&operationType!="1"){resp.result="1";var toCartUrl="//shopping.suning.com/cart.do";if(httpSwitch=="1"){toCartUrl="${ccfNewDomain}/cart.do"}var html="<div class='nostore-rd'> <div class='add-cart-hd clearfix'><i class='tip-succ'></i><span>已成功加入购物车！</span><a href="+toCartUrl+" class='go-cart' name='cart1_go'>去购物车结算<i>></i></a></div><div class='nostore-bd'></div></div>";$.mDialog({title:"温馨提示",css:{width:"448px"},http:function(e,o){e.find(".content").html(html)},overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300});var activityType=firstCmmdty.activityType;var partnumber;var cityId=getCookie("SN_CITY").split("_")[1];var custno=getCookie("custno");if(activityType!="04"&&activityType!="05"&&activityType!="12"&&activityType!="06"){partnumber=firstCmmdty.cmmdtyCode;addCartRecommendBuy(cityId,partnumber)}else{partnumber="";addCartRecommend(cityId,partnumber,custno)}}else{shoppingCartUrl="//shopping.suning.com/addToCart.do?"+$.param(param);if(operationType==="1"){shoppingCartUrl="//shopping.suning.com/order.do?cart2No="+respData.cart2No;if(firstCmmdty.activityType==="02"&&firstCmmdty.subActivityType==="10"){shoppingCartUrl="//ncart.suning.com/order.do?cart2No="+respData.cart2No}}resp.result="1";resp.url=shoppingCartUrl;cart.recommended.toShoppingCart()}}else{var errorCode,errorMsg,backErrorCode;if(respData.addCartErrorList!=undefined&&respData.addCartErrorList[0]!=undefined&&operationType=="0"){errorCode=respData.addCartErrorList[0].errorCode;errorMsg=respData.addCartErrorList[0].errorMessage;backErrorCode=respData.addCartErrorList[0].backErrorCode}else{if(respData.resultErrorList!=undefined&&respData.resultErrorList[0]!=undefined&&respData.resultErrorList[0][0]!=undefined&&operationType=="1"){errorCode=respData.resultErrorList[0][0].errorCode;errorMsg=respData.resultErrorList[0][0].errorMessage;backErrorCode=respData.resultErrorList[0][0].backErrorCode}}if(safeDps=="1"){var cmmdtyCode=firstCmmdty.cmmdtyCode;var shopCode=firstCmmdty.shopCode;cart.normal.safeDpsInit(cmmdtyCode,shopCode)}else{if(errorCode=="017"){resp.failCode=errorCode;resp.failMsg="";resp.uuid=respData.uuid;cart.security.setNeedVerifyCodeVal(true);cart.security.showMinos3(respData.uuid,respData.sceneId)}else{if(errorCode=="018"){resp.failCode=errorCode;resp.failMsg="";cart.security.showMinos2()}else{if(errorCode=="019"){resp.failCode=errorCode;resp.failMsg="";cart.security.showMinos1()}else{if(errorCode=="015"||errorCode=="025"){resp.failCode=errorCode;resp.failMsg="";aqSuning1.showMobilePopType(false)}else{if(errorCode=="024"){resp.failCode=errorCode;resp.failMsg="您登陆的账号有异常，请联系在线客服处理";Util.alertErrorBox(resp.failMsg)}else{if(errorCode=="32"){resp.failCode=errorCode;resp.failMsg=errorMsg;Util.alertErrorBox(errorMsg);location.replace(location)}else{if(errorCode=="004"){resp.failCode=errorCode;resp.failMsg=errorMsg;var html="<div class='nostore-rd'><div class='nostore-hd clearfix'><i class='lion'></i><div class='tips'><h2>"+resp.failMsg+"</h2><a href='javascript:void(0);' class='close-nostore close'>关闭</a></div></div><div class='nostore-bd'></div></div></div>";$.mDialog({title:"温馨提示",css:{width:"448px"},http:function(e,o){e.find(".content").html(html)},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300});var activityType=firstCmmdty.activityType;if(activityType!="04"&&activityType!="05"&&activityType!="06"&&activityType!="12"){var snma=getCookie("_snma");var cookieid="";if(snma!=null&&snma!=undefined){snma=snma.split("|");cookieid=snma.length>1?snma[1]:""}var cityId=getCookie("SN_CITY").split("_")[1];var custno=getCookie("custno");noProductRecommend(cityId,firstCmmdty.cmmdtyCode,custno,cookieid,"004")}}else{if(errorCode=="010"||errorCode=="011"){resp.failCode=errorCode;resp.failMsg=errorMsg;var html="<div class='nostore-rd'><div class='nostore-hd clearfix'><i class='lion'></i><div class='tips'><h2>"+resp.failMsg+"</h2><a href='javascript:void(0);' class='close-nostore close'>关闭</a></div></div><div class='nostore-bd'></div></div></div>";$.mDialog({title:"温馨提示",css:{width:"448px"},http:function(e,o){e.find(".content").html(html)},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300});var activityType=firstCmmdty.activityType;if(activityType!="04"&&activityType!="05"&&activityType!="06"&&activityType!="12"){var snma=getCookie("_snma");var cookieid="";if(snma!=null&&snma!=undefined){snma=snma.split("|");cookieid=snma.length>1?snma[1]:""}var cityId=getCookie("SN_CITY").split("_")[1];var custno=getCookie("custno");noProductRecommend(cityId,firstCmmdty.cmmdtyCode,custno,cookieid,"010")}}else{if(errorCode=="002"){resp.failCode=errorCode;resp.failMsg=errorMsg;var errorMsgTip="您的购物车已满，请清理购物车后重新添加";var sb=[];sb[sb.length]='<div class="dialog-common" style="padding: 2px 20px 20px;">';sb[sb.length]='<div class="main">';sb[sb.length]='<p class="tips"><i class="tip-icon tip-warning-24"></i>'+errorMsgTip+"</p>";sb[sb.length]='<div class="dialog-action">';sb[sb.length]=' <a href="javascript:void(0);" class="dialog-opt dialog-close close" name="item_gmp_qx">取消</a>';sb[sb.length]='<a href="//shopping.suning.com/cart.do" class="dialog-opt dialog-certain" target="_bank" name="item_gmp_qql">去清理</a>';sb[sb.length]="</div></div></div>";var html=sb.join("");$.mDialog({title:"温馨提示",css:{width:"448px"},http:function(e,o){e.find(".content").html(html)},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300})}else{if(errorMsg!=undefined&&errorMsg!=""){resp.failCode=errorCode;resp.failMsg=errorMsg;Util.alertErrorBox(errorMsg)}else{resp.failCode="001";resp.failMsg="网络异常，您可以检查网络或再试一次！";Util.alertErrorBox(resp.failMsg)}}}}}}}}}}}resp.backErrorCode=backErrorCode;cart.analytics.recordErrorMsg(resp)}if(errorCode!="017"){callerCallBack(resp)}};var noProductRecommend=function(cityId,parameter,custno,cookieid,errorType){$.ajax({url:"//tuijian.suning.com/recommend-portal/recommendv2/biz.jsonp",data:{u:custno,c:cookieid,parameter:parameter,cityId:cityId,sceneIds:"10-52",count:12},cache:true,async:false,dataType:"jsonp",success:function(response){if(null!=response&&typeof response.sugGoods!="undefined"&&response.sugGoods.length>0&&typeof response.sugGoods[0].skus!="undefined"&&response.sugGoods[0].skus.length>=1){var productDomain="//product.suning.com";var imgUrlBase=sn.newImageDomianDir+"/uimg/b2c/newcatentries/";var prodList=response.sugGoods[0].skus;var len=prodList.length;var html="<h2>推荐你看看</h2><div class='nostore-rd-box nostore-rd-box-listloop'>";if(len>3){html=html+"<a href='javascript:void(0);' class='rd-btn prev'></a><a href='javascript:void(0);' class='rd-btn next'></a>"}html=html+"<span class='rd-text-page'><em class='rd-cur-count'>1</em>/<em class='rd-total-count'></em></span><div class='nostore-rd-list'> <ul></ul></div>";$(".nostore-bd").html(html);var a=0,b=0;var liList="";for(var i=0;i<len;i++){var prod=prodList[i];var shopKey=prod.vendorId;var longPartNumber=prod.sugGoodsCode;if(prod.promotionType=="6"){shopKey="mp"}a=i%5==0?a+1:a;b=i%5+1;var shortPartnumber=cart.common.dealPreZeroPartnum(longPartNumber);var prodUrl=productDomain+"/"+shopKey+"/"+shortPartnumber+".html";var imgUrl=imgUrlBase+prod.vendorId+"-"+longPartNumber+"_1_160x160.jpg";var baoguang="baoguang_recswh_"+a+"-"+b+"_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianP="item_"+parameter+"_recswh_"+a+"-"+b+"_p_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianC="item_"+parameter+"_recswh_"+a+"-"+b+"_c_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianB="item_"+parameter+"_recswh_"+a+"-"+b+"_b_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var baoguangn="baoguang_recswhn_"+a+"-"+b+"_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianPn="item_"+parameter+"_recswhn_"+a+"-"+b+"_p_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianCn="item_"+parameter+"_recswhn_"+a+"-"+b+"_c_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianBn="item_"+parameter+"_recswhn_"+a+"-"+b+"_b_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var id4TagLi=prod.vendorId+"_"+shortPartnumber;if(errorType=="004"){liList+=getProdHtml(prod,id4TagLi,prodUrl,imgUrl,prod.vendorId,longPartNumber,cityId,prod.promotionType,prod.promotionId,baoguang,maidianP,maidianC,maidianB,"1","")}else{liList+=getProdHtml(prod,id4TagLi,prodUrl,imgUrl,prod.vendorId,longPartNumber,cityId,prod.promotionType,prod.promotionId,baoguangn,maidianPn,maidianCn,maidianBn,"1","")}}$(".nostore-rd-list").find("ul").html(liList);nostoreRd.listloop({wrap:".nostore-rd-box",loopBox:".nostore-rd-list ul",step:{wide:3,narrow:3},scrollWidth:{wide:354,narrow:354},hasLabel:false,isRandom:false,curCount:".rd-cur-count",totalCount:".rd-total-count"});try{cart.analytics.runAnalyseExpo()}catch(e){}}else{$(".nostore-bd").html("")}},error:function(){}})};function getProdHtml(prod,id4TagLi,prodUrl,imgUrl,vendorId,partNumber,cityId,promotionType,promotionId,baoguang,maidianP,maidianC,maidianB,needAddCart,salesVolume){var html="";html+="<li id='"+id4TagLi+"'>";html+="<div class='rd-pic'><a href='"+prodUrl+"?src="+maidianP+"' name='"+maidianP+"' target='_blank' ><img src='"+imgUrl+"' alt='"+prod.sugGoodsName+"'/></a></div>";html+="<p class='rd-name'>"+getPromotionTip(prod.promotionInfo)+"<a href='"+prodUrl+"?src="+maidianC+"' title='"+prod.sugGoodsName+"' id='"+baoguang+"' name='"+maidianC+"' target='_blank'>"+prod.sugGoodsName+"</a></p>";html+="<p class='sn-price'><i>&yen;</i><strong>"+prod.price+"</strong></p>";if(typeof needAddCart!="undefined"&&needAddCart==="0"){if(typeof salesVolume!="undefined"&&salesVolume!=""){html+="<p class='buy-num'><em>"+salesVolume+"</em>人已购买</p>"}}else{html+="<a href='javascript:void(0);' class='add-cart' buyNum='1' vendorId='"+vendorId+"' partNumber='"+partNumber+"' cityId='"+cityId+"' promotionType='"+promotionType+"' promotionId='"+promotionId+"' name='"+maidianB+"'></a>"}html+="</li>";return html}var addCartRecommend=function(cityId,parameter,custno){$.ajax({url:"//tuijian.suning.com/recommend-portal/recommend/paramsBiz.jsonp",data:{u:custno,parameters:parameter,cityId:cityId,sceneIds:"10-23",count:9,flag:""},cache:true,async:false,dataType:"jsonp",success:function(response){if(null!=response&&typeof response.sugGoods!="undefined"&&response.sugGoods.length>0&&typeof response.sugGoods[0].skus!="undefined"&&response.sugGoods[0].skus.length>=3){var productDomain="//product.suning.com";var imgUrlBase=sn.newImageDomianDir+"/uimg/b2c/newcatentries/";var prodList=response.sugGoods[0].skus;var len=prodList.length;var html="<h2>为您推荐</h2><div class='nostore-rd-box add-cart-listloop'>";if(len>3){html=html+"<a href='javascript:void(0);' class='rd-btn prev'></a><a href='javascript:void(0);' class='rd-btn next'></a>"}html=html+"<span class='rd-text-page'><em class='rd-cur-count'>1</em>/<em class='rd-total-count'></em></span><div class='nostore-rd-list'> <ul></ul></div>";$(".nostore-bd").html(html);var a=0,b=0;var liList="";for(var i=0;i<len;i++){var prod=prodList[i];var shopKey=prod.vendorId;var longPartNumber=prod.sugGoodsCode;if(prod.promotionType=="6"){shopKey="mp"}a=i%3==0?a+1:a;b=i%3+1;var shortPartnumber=cart.common.dealPreZeroPartnum(longPartNumber);var prodUrl=productDomain+"/"+shopKey+"/"+shortPartnumber+".html";var imgUrl=imgUrlBase+prod.vendorId+"-"+longPartNumber+"_1_100x100.jpg";var baoguang="baoguang_rectcnxh_"+a+"-"+b+"_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianP="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_p_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianC="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_c_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianB="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_b_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var salesVolume=prod.salesVolume;var id4TagLi=prod.vendorId+"_"+shortPartnumber;liList+=getProdHtml(prod,id4TagLi,prodUrl,imgUrl,prod.vendorId,longPartNumber,cityId,prod.promotionType,prod.promotionId,baoguang,maidianP,maidianC,maidianB,"0",salesVolume)}$(".nostore-rd-list").find("ul").html(liList);$(".nostore-rd").removeClass("add-no-list");nostoreRd.listloop({wrap:".nostore-rd-box",loopBox:".nostore-rd-list ul",step:{wide:3,narrow:3},scrollWidth:{wide:354,narrow:354},hasLabel:false,isRandom:false,curCount:".rd-cur-count",totalCount:".rd-total-count"});try{cart.analytics.runAnalyseExpo()}catch(e){}}else{$(".nostore-bd").html("");$(".nostore-rd").addClass("add-no-list")}},error:function(){}})};var addCartRecommendBuy=function(cityId,parameter){var vendorId=firstCmmdty.shopCode;var urlB="//tuijian.suning.com/recommend-portal/dyBase.jsonp?";urlB+="parameter="+parameter+"&vendorId="+firstCmmdty.shopCode+"&cityId="+cityId+"&sceneIds=10-30&count=15";$.ajax({url:urlB,cache:true,dataType:"jsonp",jsonpCallback:"cart.normal.recommendBuyCallBack",success:function(){}})};var recommendBuyCallBack=function(response){if(null!=response&&typeof response.sugGoods!="undefined"&&response.sugGoods.length>0&&typeof response.sugGoods[0].skus!="undefined"&&response.sugGoods[0].skus.length>=3){var productDomain="//product.suning.com";var imgUrlBase=sn.newImageDomianDir+"/uimg/b2c/newcatentries/";var parameter=response.sugGoods[0].parameter;var cityId=getCookie("SN_CITY").split("_")[1];var prodList=response.sugGoods[0].skus;var len=prodList.length;var html="<h2>为您推荐</h2><div class='nostore-rd-box add-cart-listloop'>";if(len>3){html=html+"<a href='javascript:void(0);' class='rd-btn prev'></a><a href='javascript:void(0);' class='rd-btn next'></a>"}html=html+"<span class='rd-text-page'><em class='rd-cur-count'>1</em>/<em class='rd-total-count'></em></span><div class='nostore-rd-list'> <ul></ul></div>";$(".nostore-bd").html(html);var a=0,b=0;var liList="";for(var i=0;i<len;i++){var prod=prodList[i];var shopKey=prod.vendorId;var longPartNumber=prod.sugGoodsCode;if(prod.promotionType=="6"){shopKey="mp"}a=i%3==0?a+1:a;b=i%3+1;var shortPartnumber=cart.common.dealPreZeroPartnum(longPartNumber);var prodUrl=productDomain+"/"+shopKey+"/"+shortPartnumber+".html";var imgUrl=imgUrlBase+prod.vendorId+"-"+longPartNumber+"_1_100x100.jpg";var baoguang="baoguang_rectcnxh_"+a+"-"+b+"_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianP="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_p_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianC="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_c_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var maidianB="cartc_"+parameter+"_rectcnxh_"+a+"-"+b+"_b_"+prod.vendorId+"_"+shortPartnumber+"_"+prod.handwork;var salesVolume=prod.salesVolume;var id4TagLi=prod.vendorId+"_"+shortPartnumber;liList+=getProdHtml(prod,id4TagLi,prodUrl,imgUrl,prod.vendorId,longPartNumber,cityId,prod.promotionType,prod.promotionId,baoguang,maidianP,maidianC,maidianB,"0",salesVolume)}$(".nostore-rd-list").find("ul").html(liList);$(".nostore-rd").removeClass("add-no-list");nostoreRd.listloop({wrap:".nostore-rd-box",loopBox:".nostore-rd-list ul",step:{wide:3,narrow:3},scrollWidth:{wide:354,narrow:354},hasLabel:false,isRandom:false,curCount:".rd-cur-count",totalCount:".rd-total-count"});try{cart.analytics.runAnalyseExpo()}catch(e){}}else{$(".nostore-bd").html("");$(".nostore-rd").addClass("add-no-list")}};function getPromotionTip(type){var html="";if(cart.common.isEmpty(type)){return html}html+="<span class='ju'>";html+=type;html+="</span>";return html}var failCallBack=function(operationType,callerCallBack){var resp={};resp.analyticsType="Addcart";if(operationType==="1"){resp.analyticsType="Buynow"}resp.result="0";resp.failCode="0000";resp.failMsg="网络异常，您可以检查网络或再试一次！";Util.alertErrorBox(resp.failMsg);cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};function add2Cart(sellType,buyNum,vendorCode,catEntryIds,warrentProducts,cityId,isPreBuy,partnumber,priceType,PriceShowActionId){commPartnumber=partnumber;if(isPreBuy!=1){cartPress(true)}alsoBuy(cityId);var _url="http://"+sn.cartPath+"/addMiniSoppingCart";var add2ShopCartData={ERROEVIEW:"miniShoppingCartView",URL:"miniShoppingCartView",quantity:buyNum,fullInventoryCheck:"0",inventoryCheckType:"0",fullVoucherCheck:"0",voucherCheckType:"0",inventoryRemoteCheck:"0",voucherRemoteCheck:"1",storeId:"10052",catalogId:"10051",orderId:".",partnumber:partnumber,sellType:sellType,supplierCode:vendorCode,priceType:priceType,promotionActiveId:PriceShowActionId};if(sellType!="0"){_url="SNTreatyProductAddCartCmd"}var warrentProduct=new Array();var tempWarrentProduct="";if(null!=warrentProducts&&""!=warrentProducts){var warrentProductsArray=warrentProducts.split(",");for(var i=0,len=warrentProductsArray.length;i<len;i++){var warProduct=warrentProductsArray[i].split("-");if(warProduct.length>1){warrentProduct[i]=warProduct[0]}else{warrentProduct[i]=warProduct}if(i==(len-1)){tempWarrentProduct=tempWarrentProduct+warrentProduct[i]}else{tempWarrentProduct=tempWarrentProduct+warrentProduct[i]+","}}}var buyPackPartNumber="";var buyPackQuantity="";var buyPackSort="";if(warrentProduct.length>buyNum){Util.alertErrorBox("延保商品数量必须小于等于商品数量!");if(isPreBuy!=1){cartPress(false)}return}else{for(i=0;i<warrentProduct.length;i++){if(buyPackPartNumber!=""){buyPackPartNumber=buyPackPartNumber+","+warrentProduct[i];buyPackQuantity=buyPackQuantity+",1"}else{buyPackPartNumber=warrentProduct[i];buyPackQuantity="1";buyPackSort=1}}}if(null!=buyPackSort&&buyPackSort!=""){add2ShopCartData.buyPackSort=buyPackSort}if(null!=tempWarrentProduct&&tempWarrentProduct!=""){add2ShopCartData.buyPackPartNumber_1=tempWarrentProduct}if(null!=buyPackQuantity&&buyPackQuantity!=""){add2ShopCartData.buyPackQuantity_1=buyPackQuantity}if(null!=catEntryIds&&""!=catEntryIds){var catentryId=catEntryIds.split(",");if(catentryId[0]!=null){add2ShopCartData.catEntryId_2=catentryId[0]}if(catentryId[1]!=null){add2ShopCartData.catEntryId_3=catentryId[1]}}if(isPreBuy==1){add2ShopCartData.promotionType="psell";if(typeof(bd)!="undefined"){setCookie("c2dt",bd.rst())}if(needVerifyCodeVal){var tempVerifyCode=verifyCodeVal;if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!="以下字符不区分大小写"){add2ShopCartData.verifyCode=tempVerifyCode;add2ShopCartData.uuid=v_uuid}needVerifyCodeVal=false}}if(cloudInfo.addCartState=="1"){add2ShopCartData.promotionType="cloud";add2ShopCartData.promotionActId=cloudInfo.activityID}$.ajax({url:_url,data:add2ShopCartData,cache:false,async:false,dataType:"jsonp",jsonp:"callback",success:function(response){if(response.userStatus!=""){Util.alertErrorBox("您的会员卡已冻结，请拨打4008-198-198或在线客服处理。")}else{var fourthURL=window.location.href;if(response.errorCode=="MINOSE_0001"){quickPress(false);showMinos1()}else{if(response.errorCode=="MINOSE_0002"){quickPress(false);showMinos2()}else{if(response.errorCode=="MINOSE_0003"){needVerifyCodeVal=true;quickPress(false);showMinos3(response.uuid,response.sceneId)}else{if(response.errorCode=="pne"){Util.alertErrorBox("该优惠价库存不足，请修改数量！")}else{if(response.errorCode=="BLACKLISTERROR"){Util.alertErrorBox("抱歉，您暂无资格购买大聚惠商品，请选择其他商品购买。");quickPress(false)}else{if(response.errorCode=="GROUPTIMEOUT"||response.errorCode=="GROUPNUMOUT"||response.errorCode=="GROUPSIMPLENUMOUT"||response.errorCode=="GROUPPARAMERROR"||response.errorCode=="GROUPINPREHEAT"||response.errorCode=="GROUPHAVINGCHANCE"){Util.alertErrorBox(response.errorMessage);quickPress(false)}else{if(response.errorCode=="GROUPNOTBINDPHONE"){aqSuning1.showMobilePopType(false);quickPress(false)}else{if(response.errorCode=="GROUPUSERINFOERR"){Util.alertErrorBox("您登陆的账号有异常，请联系在线客服处理");quickPress(false)}else{if(response.errorCode=="GROUPNOTBRONDPAY"){Util.alertErrorBox("您需要进行<a href='"+getBrondPayUrl()+"'>易付宝快捷绑定</a>后才可以继续购买哦~");quickPress(false)}else{if(response.errorCode=="SCODE_NOT_ENOUGH"||response.errorCode=="SCODE_SYS_ERR"){Util.alertErrorBox(response.errorMessage);quickPress(false)}else{if(response.errorCode=="SCODE_NOT_BIND"){Util.alertErrorBox("您没有此商品的S码或S码还没有<a href='"+getBindScodeUrl()+"'  target='_Blank'>激活</a>");quickPress(false)}else{if(response.errorCode=="psellNotBuyTime"){Util.alertErrorBox(response.errorMessage)}else{if(response.isOverLimitCnt=="OVERLIMIT"){var url="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;Util.alertErrorBox("您的购物车商品清单种类已达50种上限，建议您立即<a href="+url+">清理购物车</a>")}else{if(response.errorCode=="NOTVALIDUSER"){Util.alertErrorBox("用户的会员卡状态不正确,请咨询客服！")}else{if(response.errorCode=="NOTSALE"){var url="http://"+sn.domain;Util.alertErrorBox("此商品暂不销售，您可以尝试选购其他商品<a href="+url+">选购其他商品</a>")}else{if(response.errorCode=="ITNOTSALE"){Util.alertErrorBox("对不起，该商品帮客服务暂不销售，请取消勾选后重新加入购物车。")}else{if(response.errorCode=="NOSALESORGITEM"){Util.alertErrorBox("对不起,此商品无销售组织，加入购物车失败")}else{if(response.errorCode=="limitShopping"){Util.alertErrorBox("此商品为限购商品，最多可购买"+response.limitCount+"件")}else{if(response.errorCode=="fql_0001"){Util.alertErrorBox("您的操作过于频繁，请稍后再试哦！")}else{if(response.errorCode=="cloudTimeover"){Util.alertErrorBox("此商品的兑换活动已结束！");cloudInfo.state="01";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudInvNotEnough"){Util.alertErrorBox("您购买的数量超过可兑换量，请修改商品数量");cloudInfo.state="02";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="noInv"){Util.alertErrorBox("此商品已兑换光了，您可以选择以易购价购买！");cloudInfo.state="03";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudNotEnoughOne"){Util.alertErrorBox("您的云钻不足，暂不能兑换此商品！");cloudInfo.state="04";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudNotEnoughMulti"){Util.alertErrorBox("云钻不足，请修改商品数量");cloudInfo.state="05";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="wrongInput"){Util.alertErrorBox("网络异常，您可以检查网络或再试一次！！");cloudInfo.state="06";cloudInfo.getExchengeStatus()}else{if(response.hasInventor==1&&response.treaph==0){if(isPreBuy==1||cloudInfo.addCartState=="1"){shoppingCartUrl="http://"+sn.cartPath+"/SNCart2ManageCmd?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;toShoppingCart()}else{if(response.addToCartAB=="A"){shoppingCartUrl="http://"+sn.cartPath+"/addToCart?pid="+partnumber+"&vid="+vendorCode+"&langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;toShoppingCart()}else{shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;shoppingCartPopBox(cityId);SFE.base.miniCartReload()}}}else{if(response.hasInventor==0&&response.invErrFlow==1){Util.alertErrorBox("此商品无货，您可以尝试选购其他商品！")}else{if(response.hasInventor==0&&response.invErrFlow==2){Util.alertErrorBox("您购买的数量超过库存上限，请修改商品数量")}else{if(response.hasInventor==0&&(response.invErrFlow==3||response.invErrFlow==0)){if(isPreBuy==1||cloudInfo.addCartState=="1"){shoppingCartUrl="http://"+sn.cartPath+"/SNCart2ManageCmd?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;toShoppingCart()}else{if(response.addToCartAB=="A"){shoppingCartUrl="http://"+sn.cartPath+"/addToCart?pid="+partnumber+"&vid="+vendorCode+"&langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;toShoppingCart()}else{shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&invErrSb="+response.invErrSb+"&returnURL="+fourthURL;shoppingCartPopBox(cityId);SFE.base.miniCartReload()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}if(typeof(cloudInfo.initCartState)=="function"){cloudInfo.initCartState()}if(isPreBuy!=1){cartPress(false)}},error:function(){Util.alertErrorBox("网络异常，您可以检查网络或再试一次！");if(typeof(cloudInfo.initCartState)=="function"){cloudInfo.initCartState()}if(isPreBuy!=1){cartPress(false)}}})}var saveMessageToCloud=function(cmmdtyCode,shopCode){var phoneNumber=cart.common._getInputVal($("#safe_phone"));var addresses=$(".citySelect .cityboxbtn").find("span");var address=$(addresses[0]).text()+","+$(addresses[1]).text()+","+$(addresses[2]).text();var email=cart.common._getInputVal($("#safe_email"));var fg=cart.normal.validation();if(fg){var cspVO={phoneNumber:phoneNumber,cmmdtyCode:cmmdtyCode,shopCode:shopCode,address:address,email:email};$.ajax({url:"//shopping.suning.com/cartSpareProgramme.do",data:{cspVO:JSON.stringify(cspVO)},type:"POST",dataType:"jsonp",success:function(data){if(data=="1"){$.unmLionDialog();cart.normal.alertTip("信息提交成功！");setTimeout("$.unmLionDialog()",1000)}else{$.unmLionDialog();cart.normal.alertTip("信息提交失败,请稍后再试!");setTimeout("$.unmLionDialog()",1000)}},error:function(data){$.unmLionDialog();cart.normal.alertTip("信息提交失败,请稍后再试!");setTimeout("$.unmLionDialog()",1000)}})}};var safeDpsInit=function(cmmdtyCode,shopCode){$.mLionDialog({css:{width:"445px"},http:function(e,o){var html="<div class='dialog-common dialog-degrade'><p class='tips'><i class='tip-icon tip-warning-24'></i><span>抱歉!由于系统升级，暂时无法购买商品，请留下您的信息，待系统恢复后，会第一时间通知您</span></p><div class='address-form'><div class='row clearfix error-row'><div class='label'><em>*</em>手机号码：</div><div class='field'><input type='text' id='safe_phone' class='ui-text user' maxlength='11' data-is-enter='0' placetext='请填写正确的11位手机号码' style='color: rgb(187, 187, 187);'><span class='tip-message'></span></div></div><div class='row clearfix error-row'><div class='label'>邮箱地址：</div><div class='field'><input type='text' id='safe_email' class='ui-text user' maxlength='20' data-is-enter='0' placetext='请填写正确的邮箱地址' style='color: rgb(187, 187, 187);'><span class='tip-message'></span></div></div><div class='row zdx10 clearfix'><div class='label'><em>*</em>所在地区：</div><div class='field rel'><div id='city1' class='citySelect clearfix'> <a href='javascript:void(0);' class='cityboxbtn'></a><div class='citybox'><div class='chooseArea fix'><p eq='0' class='cur'><span>安徽</span><b></b></p><p eq='1'><span>黄山市</span><b></b></p><p eq='2'><span>屯溪区</span><b></b></p><p class='disable'><span>请选择乡镇</span><b></b></p><div class='clear'></div></div><div class='arriveBox'><div class='cityshow'>加载中...</div></div><div class='closeSelector'></div></div></div><span class='tip-message'></span></div></div><div class='row zdx5 clearfix'><div class='label'><em>*</em>详细地址：</div><div class='field detail-field'><input type='text' class='ui-text detial-address' id='safe_detial_address' maxlength='30' placetext='街道、小区、楼牌号，无须重复填写省市区'><span class='tip-message'></span></div></div></div><div class='dialog-btn'><a class='dialog-opt dialog-certain' name='icart1_cscError_confirm' href='javascript:cart.normal.saveMessageToCloud("+cmmdtyCode+","+shopCode+");'>确定</a><a class='dialog-opt dialog-close close' name='icart1_cscError_cancel' href='javascript:void(0);'>取消</a></div></div>";e.find(".content").html(html);cloudCart.supportPlaceHolder.init(".m-lion-dialog")},overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300});$(".m-lion-dialog .container a.btn.close").attr("name","icart1_cscError_close");cart.normal.addressSelect();cart.normal.addressValidation();cart.normal.safeValidation()};var alertTip=function(message){$.mLionDialog({css:{width:"445px"},http:function(e,o){var html="<div class='content'><div class='add-cart-prompt dialog-common'><p class='tips'><i class='tip-icon tip-warning-24'></i>"+message+"</p></div></div>";e.find(".content").html(html);cloudCart.supportPlaceHolder.init(".m-lion-dialog")},overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300})};var addressSelect=function(){var addressColumns;addressColumns=[{state:"prov",text:"请选择省",hide:false,addclass:"c-f70"},{state:"city",text:"请选择市",hide:false,addclass:"c-f70"},{state:"area",text:"请选择区",hide:false,addclass:"c-f70"}];addressDatas=[{name:"",code:"",id:""},{name:"",code:"",id:""},{name:"",code:"",id:""}];regionInfo1=$("#city1").SnAddress({columns:addressColumns,url:"//shopping.suning.com/address/querySNAddress.do",complete:function(items,bool){if(!bool){$("#city1 .cityboxbtn span").removeClass();cart.normal.addressValidation()}}},addressDatas).data("suning.address")};function safeValidation(){$(document).on("blur",".address-form .field #safe_phone",function(){cart.normal.phoneValidation()});$(document).on("blur",".address-form .field #safe_email",function(){cart.normal.emailValidation()});$(document).on("blur",".address-form .field #safe_detial_address",function(){cart.normal.tailAddressValidation()})}var validation=function(){var emailRg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;var phoneRg=/^1[0-9]{10}$/;var phone=cart.common._getInputVal($("#safe_phone"));var email=cart.common._getInputVal($("#safe_email"));var safe_detial_address=cart.common._getInputVal($("#safe_detial_address"));var flag=true;if(phone==null||phone.trim()==""){$("#safe_phone").next().html("<i class='tip-icon tip-error'></i>手机号码不能为空");flag=false}else{if(!phoneRg.test(phone)){$("#safe_phone").next().html("<i class='tip-icon tip-error'></i>请填写以1开头的11位电话号码");flag=false}else{$("#safe_phone").next().html("<i class='tip-icon tip-ok'></i>")}}if(!emailRg.test(email)&&email.trim()!=""&&email!=null){$("#safe_email").next().html("<i class='tip-icon tip-error'></i>邮箱格式不正确");flag=false}else{if(emailRg.test(email)){$("#safe_email").next().html("<i class='tip-icon tip-ok'></i>")}else{$("#safe_email").next().html("")}}if(cart.common.isEmpty(safe_detial_address)){$("#safe_detial_address").next().html("<i class='tip-icon tip-error'></i>请填写详细地址");flag=false}else{if(!cart.common.checkIsValid(safe_detial_address)){$("#safe_detial_address").next().html("<i class='tip-icon tip-error'></i>不能包含特殊字符");flag=false}else{$("#safe_detial_address").next().html("<i class='tip-icon tip-ok'></i>")}}return flag};var tailAddressValidation=function(){var safe_detial_address=cart.common._getInputVal($("#safe_detial_address"));if(cart.common.isEmpty(safe_detial_address)){$("#safe_detial_address").next().html("<i class='tip-icon tip-error'></i>详细地址不能为空")}else{if(!cart.common.checkIsValid(safe_detial_address)&&!cart.common.isEmpty(safe_detial_address)){$("#safe_detial_address").next().html("<i class='tip-icon tip-error'></i>不能包含特殊字符")}else{if(!cart.common.isEmpty(safe_detial_address)){$("#safe_detial_address").next().html("<i class='tip-icon tip-ok'></i>")}else{$("#safe_detial_address").next().html("")}}}};var emailValidation=function(){var emailRg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;var email=cart.common._getInputVal($("#safe_email"));if(!emailRg.test(email)&&email.trim()!=""&&email!=null){$("#safe_email").next().html("<i class='tip-icon tip-error'></i>邮箱格式不正确")}else{if(emailRg.test(email)){$("#safe_email").next().html("<i class='tip-icon tip-ok'></i>")}else{$("#safe_email").next().html("")}}};var phoneValidation=function(){var phoneRg=/^1[0-9]{10}$/;var phone=cart.common._getInputVal($("#safe_phone"));if(phone.trim()==""||phone==null){$("#safe_phone").next().html("<i class='tip-icon tip-error'></i>手机号码不能为空")}else{if(!phoneRg.test(phone)&&phone.trim()!=""&&phone!=null){$("#safe_phone").next().html("<i class='tip-icon tip-error'></i>请填写以1开头的11位电话号码")}else{if(phoneRg.test(phone)){$("#safe_phone").next().html("<i class='tip-icon tip-ok'></i>")}else{$("#safe_phone").next().html("")}}}};var addressValidation=function(){if($("#city1 .cityboxbtn span").eq(0).hasClass("c-f70")){$("#safe_detial_address").attr("disabled","disabled")}else{$("#safe_detial_address").removeAttr("disabled")}};return{addCart:addCart,buyNow:buyNow,addToCart:addToCart,add2Cart:add2Cart,saveMessageToCloud:saveMessageToCloud,safeDpsInit:safeDpsInit,alertTip:alertTip,addressSelect:addressSelect,validation:validation,safeValidation:safeValidation,addressValidation:addressValidation,recommendBuyCallBack:recommendBuyCallBack,phoneValidation:phoneValidation,emailValidation:emailValidation,tailAddressValidation:tailAddressValidation}})(jQuery);cart.common=(function($){var envType="PRD";var domain_pre_reg=/^(\w*)(pre)(\w*)(.cnsuning.com)$/;var domain_sit_reg=/^(\w*)(sit)(\w*)(.cnsuning.com)$/;var domain_dev_reg=/^(\w*)(dev)(\w*)(.cnsuning.com)$/;var _hostName=document.location.hostname;var protocol=window.location.protocol;if(domain_pre_reg.test(_hostName)){envType="PRE"}else{if(domain_sit_reg.test(_hostName)){envType="SIT"}else{if(domain_dev_reg.test(_hostName)){envType="DEV"}else{envType="PRD"}}}var passport_config={base:"//shopping.suning.com/",loginTheme:"b2c_pop"};var getScriptDomain=function(){var scriptDomain="";scriptDomain=("https:"==protocol)?"https://res.suning.cn":"//res.suning.cn";return scriptDomain};var getBindPhoneUrl=function(){return"https://aq.suning.com/asc/mobile/check.do"};var getBrondPayUrl=function(){var brondPayUrl="";brondPayUrl="https://passport.suning.com/ids/trustLogin?sysCode=epp&targetUrl=https://pay.suning.com/epp-epw/quickPay/quick-pay-contract!showBankList.action";return brondPayUrl};var getBindScodeUrl=function(){return"//sma.suning.com/sma/self/toBind.htm"};var esjs=document.getElementsByTagName("script");var escss=document.getElementsByTagName("link");var isInclude=function(name,isJs){if(isJs){for(var i=0;i<esjs.length;i++){if(esjs[i][isJs?"src":"href"].indexOf(name)!=-1){return true}}return false}else{for(var i=0;i<escss.length;i++){if(escss[i][isJs?"src":"href"].indexOf(name)!=-1){return true}}return false}};var _loadAsyncJs=function(src){if(isInclude(src,true)){return}var _src=src;var _scripts=document.getElementsByTagName("script");for(var i=0;i<_scripts.length;i++){if(_scripts[i].src==_src){return}}var _script=document.createElement("script");_script.type="text/javascript";_script.async=true;_script.src=_src;var _s=_scripts[0];_s.parentNode.insertBefore(_script,_s)};var _loadJs=function(src){if(isInclude(src,true)){return}var _src=src;var _scripts=document.getElementsByTagName("script");for(var i=0;i<_scripts.length;i++){if(_scripts[i].src==_src){return}}var _script=document.createElement("script");_script.type="text/javascript";_script.src=_src;var _s=_scripts[0];_s.parentNode.insertBefore(_script,_s)};var _getInputVal=function(inputObj){var inputVal=$.trim(inputObj.val());var defaultVal=inputObj.attr("placetext");if(inputVal==defaultVal&&inputObj.attr("data-is-enter")==0){inputVal=""}return inputVal};var isEmpty=function(str){return str==null||str==undefined||str==""};var getUrlParam=function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null){return decodeURI(r[2])}return""};var obj2string=function(o){var r=[];if(null==o||typeof(o)=="undefined"){return""}if(typeof o=="string"){return o}if(typeof o=="object"){if(!o.sort){for(var i in o){if("string"==typeof(o[i])){r.push('"'+i+'":"'+obj2string(o[i])+'"')}else{r.push('"'+i+'":'+obj2string(o[i]))}}if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){r.push("toString:"+o.toString.toString())}r="{"+r.join()+"}"}else{for(var i=0;i<o.length;i++){r.push(obj2string(o[i]))}r="["+r.join()+"]"}return r}return o.toString()};var setCookie=function(keyStr,valStr){var v3=window.location.href;v3=v3.substring(v3.indexOf("//")+2);v3=v3.substring(0,v3.indexOf("/"));if(v3.indexOf(".")>0){v3=v3.substring(v3.indexOf("."))}var domain=v3;var path="/";var str=keyStr+"="+encodeURIComponent(valStr)+";domain="+domain+";path="+path;document.cookie=str};var checkIsValid=function(f){var d=/([\u4e00-\u9fa5]|\w|[#-.]|[\uff0c\uff08\,\u3001\u3002\u00b7\_\u300a\u300b\uff09\(\)| ])+/;for(var e=0;e<f.length;e++){if(!d.test(f.charAt(e))){return false}}return true};var dealPreZeroPartnum=function(str){var rg=new RegExp("^0*");return str.replace(rg,"")};return{getScriptDomain:getScriptDomain,getBindPhoneUrl:getBindPhoneUrl,getBrondPayUrl:getBrondPayUrl,getBindScodeUrl:getBindScodeUrl,isInclude:isInclude,_loadAsyncJs:_loadAsyncJs,_loadJs:_loadJs,isEmpty:isEmpty,getUrlParam:getUrlParam,setCookie:setCookie,obj2string:obj2string,passport_config:passport_config,_getInputVal:_getInputVal,checkIsValid:checkIsValid,dealPreZeroPartnum:dealPreZeroPartnum}})(jQuery);cart.security=(function($){var needVerifyCodeVal=false;var v_uuid="";var verifyCodeVal="";var gImgVerCdeErrorCount=0;var gLastImgValCode="";var sceneId="";var defaultValue="以下字符不区分大小写";var setNeedVerifyCodeVal=function(_needVerifyCodeVal){needVerifyCodeVal=_needVerifyCodeVal};var getNeedVerifyCodeVal=function(){return needVerifyCodeVal};var getUUID=function(){return v_uuid};var getVerifyCodeVal=function(){return verifyCodeVal};var getSceneId=function(){return sceneId};var setDefauleValue=function(sceneId){if(sceneId!=null&&sceneId!=undefined&&sceneId!="undefined"){if(sceneId=="1"){defaultValue="以下字符不区分大小写"}else{if(sceneId=="4"){defaultValue="请输入以下汉字"}else{if(sceneId=="5"){defaultValue="请输入以下问题的计算结果"}}}}};var getDefaultValue=function(){return defaultValue};var fun_getVcode=function(){gImgVerCdeErrorCount=0;$("#validateCode").removeClass("error-input");document.getElementById("vcodeimg1").src="//vcs.suning.com/vcs/imageCode.htm?uuid="+v_uuid+"&sceneId="+sceneId+"&yys="+new Date().getTime()};var onKeyUpForValidate=function(evt){evt=(evt)?evt:((window.event)?window.event:"");var keyCode=evt.keyCode?evt.keyCode:evt.which;if(keyCode==13){ajaxCheckVerifyCodeOrSubmit(true)}};var onBlurForValidate=function(){var code=$("#validateCode").val();if(code==null||code==""){return false}else{ajaxCheckVerifyCodeOrSubmit(false)}};var ajaxCheckVerifyCodeOrSubmit=function(isSubmit){var code=$("#validateCode").val();if(!isSubmit&&isLastImgValCode(code)){return}var param={code:code,uuid:v_uuid,sceneId:sceneId,delFlag:0};$.ajax({type:"POST",url:"//vcs.suning.com/vcs/validate_jsonp.htm",data:param,dataType:"jsonp",jsonp:"callback",success:function(data){if(data[0].result=="true"){result=true;$("#validateCode").removeClass("error-input");$("#imageVerifytip").addClass("tip-icon").show();$(".code-error").hide();if(isSubmit){verifyCodeVal=code;$.unmDialog();if(cart.toCartCallback.getOperateType()=="0"){cart.normal.addCart(cart.toCartCallback.getData(),cart.toCartCallback.getCallback(),cart.toCartCallback.getHttpSwitch())}else{if(cart.toCartCallback.getOperateType()=="1"){cart.normal.buyNow(cart.toCartCallback.getData(),cart.toCartCallback.getCallback(),cart.toCartCallback.getHttpSwitch())}}}}else{$("#validateCode").addClass("error-input");$("#imageVerifytip").hide();$(".code-error").show();gImgVerCdeErrorCount++;if(gImgVerCdeErrorCount>=3||isSubmit){fun_getVcode()}}}})};var isLastImgValCode=function(code){if(gLastImgValCode==code){return true}else{gLastImgValCode=code;return false}};var showMinos1=function(){$.mDialog({title:"温馨提示",message:$("#J-boom"),css:{width:"442px"},overlayClick:true})};var showMinos2=function(){$.mDialog({title:"温馨提示",message:$("#J-company-channel"),css:{width:"442px"},overlayClick:true})};var showMinos3=function(t_uuid,t_sceneId){$("#J-identify-code").remove();v_uuid=t_uuid;if(t_sceneId!=null&&t_sceneId!=undefined&&t_sceneId!="undefined"){sceneId=t_sceneId}verifyCodeVal="";setDefauleValue(sceneId);var url="//vcs.suning.com/vcs/imageCode.htm?uuid="+v_uuid+"&sceneId="+sceneId+"&yys="+new Date().getTime();var errorMsg="<div id='J-identify-code' style=''><div class='identify-code'><p class='tips'>很抱歉，您购买的宝贝销售异常火爆，请稍后再试~</p><div class='code-input clearfix'><dl><dt class='l'>验证码</dt><dd class='l'><p class='item-ide'><input id='validateCode' autocomplete='off' class='ui-text l' type='text' value='"+defaultValue+"'><i id='imageVerifytip' class='tip-icon tip-ok-16 tip-ok l' style='display:none;'></i><em class='code-error l' style='display:none;'>验证码错误</em></p><p class='item-ide'><img onclick='cart.security.fun_getVcode()' name='vcodeimg1' id='vcodeimg1' class='l' src='"+url+"' alt=''><span class='change l'>看不清楚？<a href='javascript:void(0);' onclick='cart.security.fun_getVcode()'>换一张</a></span></p><p class='item-ide'><a class='lion-btn certain' href='javascript:void(0);' onclick='cart.security.ajaxCheckVerifyCodeOrSubmit(true);return false;'>确定</a><a class='lion-btn close' href='javascript:void(0);'>关闭</a></p></dd></dl></div></div></div>";$.mDialog({title:"温馨提示",message:errorMsg,css:{width:"448px"},overlayClick:true,callback:function(){$(".m-dialog").addClass("resetbtn-ccf")}});var inputs=$(".m-dialog input");inputs.blur(function(){if($(this).val()==""){$(this).val(defaultValue).css("color","#999");return}else{if($(this).val()!=defaultValue){$(this).css("color","#333")}}});inputs.focus(function(){if($(this).val()==defaultValue){$(this).val("").removeAttr("style").keyup();$(this).css("color","#333")}});$("#validateCode").keyup(cart.security.onKeyUpForValidate);$("#validateCode").blur(cart.security.onBlurForValidate)};return{setNeedVerifyCodeVal:setNeedVerifyCodeVal,getNeedVerifyCodeVal:getNeedVerifyCodeVal,getUUID:getUUID,getSceneId:getSceneId,getVerifyCodeVal:getVerifyCodeVal,onKeyUpForValidate:onKeyUpForValidate,onBlurForValidate:onBlurForValidate,showMinos1:showMinos1,showMinos2:showMinos2,showMinos3:showMinos3,fun_getVcode:fun_getVcode,ajaxCheckVerifyCodeOrSubmit:ajaxCheckVerifyCodeOrSubmit,getDefaultValue:getDefaultValue}})(jQuery);cart.analytics=(function($){var savePageSaleInfo=function(partnumber,vendorCode){vendorCode=cart.common.isEmpty(vendorCode)?"0000000000":vendorCode;partnumber=partnumber.length==18?partnumber.substring(9,19):partnumber;var productInfo=partnumber+"_"+vendorCode;var fromPoint=$.trim(cart.common.getUrlParam("srcpoint"));try{pageSaleCookieUtil.saveCookie(productInfo,fromPoint)}catch(e){}};var updatePageSaleInfo=function(){try{pageSaleCookieUtil.updateCustNo()}catch(e){}};var recordErrorMsg=function(resp){try{var reg=/^9/g;var errorType="1";if(reg.test(resp.failCode)||resp.failCode=="001"){errorType="0"}if(resp.backErrorCode!=undefined&&resp.backErrorCode!="undefined"&&resp.backErrorCode!=""){sa.openAPI.sendMessage(resp.analyticsType,resp.failCode+"&&"+errorType+"&&"+resp.failMsg+"（"+resp.backErrorCode+"）&&"+getCookie("custno"),"","","ccfShop");sendSAMessageV2(resp.analyticsType,errorType,resp.failCode,resp.failMsg+"（"+resp.backErrorCode+")")}else{sa.openAPI.sendMessage(resp.analyticsType,resp.failCode+"&&"+errorType+"&&"+resp.failMsg+"&&"+getCookie("custno"),"","","ccfShop");sendSAMessageV2(resp.analyticsType,errorType,resp.failCode,resp.failMsg)}}catch(e){}};var runAnalyseExpo=function(){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a")}else{setTimeout(cart.analytics.runAnalyseExpo,1000)}};var clickSendData=function(){$("a[name^=cartc_],a[name^=cart1_go],a[name^=icart1_cscError_]").live("click",function(){sa.click.sendDatasIndex(this)})};var sendSAMessageV2=function(typeName,errorType,errorCode,errorDetail){try{var param={type_name:typeName,error_type:errorType,error_code:errorCode,error_detail:errorDetail,member_id:getCookie("custno"),member_level:getCookie("custLevel"),region:getCookie("SN_CITY"),bid:"ccfShop"};sa.openAPI.sendMsgV2(param)}catch(e){}};return{savePageSaleInfo:savePageSaleInfo,updatePageSaleInfo:updatePageSaleInfo,recordErrorMsg:recordErrorMsg,runAnalyseExpo:runAnalyseExpo,clickSendData:clickSendData}})(jQuery);cart.recommended=(function($){var shoppingCartPopBox=function(cityId){$.mDialog({css:{width:"460px"},http:function(e,o){if(recommendProductInfo==undefined||recommendProductInfo==""){var data='<div class="pop-car-win"><div class="pop-content">';data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>";data+="</div></div>";recommendProductInfo=data}e.find(".content").html(recommendProductInfo);try{runAnalyseExpo()}catch(e){}if(sn.catalogId=="22001"){e.find(".btn.close").attr("name","bprd_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_gwctk_guanbi")}else{e.find(".btn.close").attr("name","item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_gwctk_guanbi")}},overlayClick:true,overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300})};var toShoppingCart=function(){if(shoppingCartUrl==undefined||shoppingCartUrl==""){var fourthURL=window.location.href;shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL}hrefLink(shoppingCartUrl)};var alsoBuy=function(cityId){if(cityId=="undefined"){cityId="-7"}var u=getCookie("custno");if(typeof(u)=="undefined"){u=""}var c=getCookie("_snma");if(typeof(c)!="undefined"&&null!=c&&c!=""){c=c.split("|")[1]}else{c=""}var _url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?u="+u+"&c="+c+"&parameter="+firstCmmdty.cmmdtyCode+"&cityId="+cityId+"&sceneIds=10-11&count=5";var catalogId=sn.catalogId;if(catalogId=="22001"){_url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?u="+u+"&c="+c+"&parameter="+firstCmmdty.cmmdtyCode+"&cityId="+cityId+"&sceneIds=10-12&count=5"}$.ajax({url:_url,cache:true,dataType:"jsonp",jsonpCallback:"cart.recommended.recommendData",success:function(){}})};var recommendData=function(jsondata){var sugGoodsList=jsondata.sugGoods;var bbData="";var recomData="";$.each(sugGoodsList,function(i,sugGoods){if(sugGoods.resCode!="02"){if(sugGoods.sceneId=="10-11"){recommendProductInit(sugGoods)}else{if(sugGoods.sceneId=="10-12"){recommendBookProductInit(sugGoods)}}}})};var recommendProductInit=function(item){var data='<div class="pop-car-win"><div class="pop-content">';if(item.skus!=undefined&&item.skus.length>=4){data+='<div class="pop-success"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+='<div class="pop-others"><p>买了该商品的顾客还买了</p><ul>';for(var i=0;i<4;i++){if(i==3){data+='<li class="last">'}else{data+="<li>"}data+='<a id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+cart.common.dealPreZeroPartnum(item.skus[i].sugGoodsCode)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" class="picbox" target="_blank"><img src="'+sn.imageDomianDir+"/content/catentries/"+(item.skus[i].sugGoodsCode).substring(0,14)+"/"+item.skus[i].sugGoodsCode+"/"+item.skus[i].sugGoodsCode+'_ls.jpg"" alt="'+item.skus[i].sugGoodsName+'" /></a>';data+='<p id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" class="details"><a href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+cart.common.dealPreZeroPartnum(item.skus[i].sugGoodsCode)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" target="_blank">'+item.skus[i].sugGoodsName+"</a></p>";data+='<span class="snPrice"><i>¥</i><em>'+item.skus[i].price+"</em></span>";data+="</li>"}data+="</ul></div>"}else{data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>"}data+="</div></div>";recommendProductInfo=data};var recommendBookProductInit=function(item){var data='<div class="pop-car-win"><div class="pop-content">';if(item.skus!=undefined&&item.skus.length>=4){data+='<div class="pop-success"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+='<div class="pop-others"><p>买了该商品的顾客还买了</p><ul>';for(var i=0;i<4;i++){if(i==3){data+='<li class="last">'}else{data+="<li>"}data+='<a id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+cart.common.dealPreZeroPartnum(item.skus[i].sugGoodsCode)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" class="picbox" target="_blank"><img src="'+sn.imageDomianDir+"/content/catentries/"+(item.skus[i].sugGoodsCode).substring(0,14)+"/"+item.skus[i].sugGoodsCode+"/"+item.skus[i].sugGoodsCode+'_ls.jpg"" alt="'+item.skus[i].sugGoodsName+'" /></a>';data+='<p id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" class="details"><a href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+cart.common.dealPreZeroPartnum(item.skus[i].sugGoodsCode)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" target="_blank">'+item.skus[i].sugGoodsName+"</a></p>";data+='<span class="snPrice"><i>¥</i><em>'+item.skus[i].price+"</em></span>";data+="</li>"}data+="</ul></div>"}else{data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="bprd_'+(firstCmmdty.cmmdtyCode)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>"}data+="</div></div>";recommendProductInfo=data};return{shoppingCartPopBox:shoppingCartPopBox,toShoppingCart:toShoppingCart,alsoBuy:alsoBuy}})(jQuery);$(function(){if(!cart.common.isInclude("jquery",true)){alert("请引入jQuery.js")}$("script").each(function(){if($(this).attr("src")!=undefined&&$(this).attr("src").indexOf("cart.js")!=-1){if($(this).attr("src").lastIndexOf("?")<=0){version=""}else{version=$(this).attr("src").substring($(this).attr("src").lastIndexOf("?"))}return false}});if(typeof(bd)=="undefined"||bd=="undefined"){var scriptDetect=document.createElement("script");scriptDetect.type="text/javascript";scriptDetect.src="//dt.suning.com/detect/dt/detect.js"+version;var _scripts=document.getElementsByTagName("script");var _s=_scripts[0];_s.parentNode.insertBefore(scriptDetect,_s);if(!/msie/i.test(navigator.userAgent.toLowerCase())){scriptDetect.onload=function(){if(typeof(bd)!="undefined"){bd.init({token:"other"})}}}else{scriptDetect.onreadystatechange=function(){var r=scriptDetect.readyState;if(r==="loaded"||r==="complete"){scriptDetect.onreadystatechange=null;if(typeof(bd)!="undefined"){bd.init({token:"other"})}}}}}else{var dtstr=bd.rst();if(dtstr.length<50){bd.init({token:"other"})}}if(typeof($.mDialog)=="undefined"){cart.common._loadAsyncJs("//res.suning.cn/project/ccf/js/SFE.dialog.js"+version)}cart.common._loadAsyncJs(cart.common.getScriptDomain()+"??/javascript/sn_da/da_opt.js,/javascript/sn_da/sa-analytics.js"+version);cart.common._loadAsyncJs("//res.suning.cn/project/??/tspofc/js/fcPop.js,/ccf/js/fourth-nostore-rd.js,/ccf/js/addCartUtil.js,/ccf/js/cloudCart.js,/ccf/js/SFE.lion.dialog.js"+version);if(typeof($.fn.SnAddress)!="function"){cart.common._loadAsyncJs("//res.suning.cn/project/ccf/js/New.CitySelect.min.js"+version)}if(typeof ECity!="object"){cart.common._loadAsyncJs("//res.suning.cn/project/ip-web/SFE.city.js"+version)}$(document).on("click",".resetbtn-ccf .close",function(){var resp="";resp.result="0";cart.toCartCallback.getCallback()(resp)});try{cart.analytics.clickSendData()}catch(e){}});cart.toCartCallback=(function($){var operateType="",data="",callback="",httpSwitch="";var setOperateType=function(_operateType){operateType=_operateType};var getOperateType=function(){return operateType};var setData=function(_data){data=_data};var getData=function(){return data};var setCallback=function(_callback){callback=_callback};var getCallback=function(){return callback};var setHttpSwitch=function(_httpSwitch){httpSwitch=_httpSwitch};var getHttpSwitch=function(){return httpSwitch};return{setOperateType:setOperateType,getOperateType:getOperateType,setData:setData,getData:getData,setCallback:setCallback,getCallback:getCallback,setHttpSwitch:setHttpSwitch,getHttpSwitch:getHttpSwitch}})(jQuery);