﻿<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>用户登录</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="shortcut icon" href="https://ssl.suning.com/favicon.ico" type="image/x-icon">
	    <script type="text/javascript">
        var sn = sn || {};
        //全局变量
        var sn_domain = "http://www.suning.com";
        var server_prefix_domain = "https://ssl.suning.com/emall/";
        var srs_prefix_domain = "https://reg.suning.com/";
        var asc_prefix_domain = "https://aq.suning.com/asc/";
        var passport_domain   = "https://passport.suning.com";
        var sop_prefix_domain = "https://sopssl.suning.com/";
        var goUrl             = "http://www.suning.com/";
		var dt_Siller_Url     = "https://dt.suning.com/detect/dt/dragDetect.json";

        var loginPBK="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQComqoAyvbCqO1EGsADwfNTWFQIUbm8CLdeb9TgjGLcz95mAo204SqTYdSEUxFsOnPfROOTxhkhfjbRxBV4/xjS06Y+kkUdiMGFtABIxRQHQIh0LrVvEZQs4NrixxcPI+b1bpE0gO/GAFSNWm9ejhZGj7UnqiHphnSJAVQNz2lgowIDAQAB";

    	var companycard_url = srs_prefix_domain + "companycardshow.do";
		//人工审核地址
		var asc_selfService_URL = asc_prefix_domain + "selfService/show.do";
        //登录建议URL
		var loginAdvise_Url = "http://ued.suning.com/survey/express/d29va1Nr";
        //下载易购appURL
		var downLoadApp_Url = "http://sale.suning.com/syb/20120419xsjkhd/index.html";
		//忘记密码
		var forgetPwd_URL = asc_prefix_domain + "forgetpsw.do";
		//会员卡连接地址
		var memberCard_URL = srs_prefix_domain + "b2cMemberCard/offline/cardLogin.do";
        
        var autoLoginCookie_expireDay = 30;
    </script>
    <!-- 引入全站公用资源文件 -->
    <link rel="stylesheet" type="text/css" href="css/b04ea58d5404458ab7732b0a446bff7e.css" />
</head>
<!--[if lt IE 7 ]><body class="ie ie6"><![endif]-->
<!--[if IE 7 ]><body class="ie ie7"><![endif]-->
<!--[if IE 8 ]><body class="ie ie8"><![endif]-->
<!--[if IE 9 ]><body class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<body><!--<![endif]-->
    <div class="header">
        <a href="http://www.suning.com" class="logo"></a>
        <div style="margin-left:189px;padding:37px 0 0 16px;*zoom:1">
            <div style="margin-right:-100px;*zoom:1">
                <div class="bind-phone">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>
            </div>
            <a name="Logon_index_denglu020" id="LOGIN_ADVISE" href="javascript:void(0)" target="_blank" class="advise"><i></i>我想对“登录”提意见</a>
        </div>
        
    </div>
<!--pagename埋点 start-->
<input type="hidden" id="pagename" value="pgcate=10009;pgtitle=登录页">
<!--pagename埋点 end-->
    <div class="main" style="background:url(images/151790026709008983.jpg) center no-repeat;">
        <div class="login-c">
            <a href="https://cuxiao.suning.com/nhjbfzn.html" target="_blank" class="single-link" name="Logon_index_denglu005"></a>
            <div class="login-form">
            	<div class="login-tab">
                    <a href="javascript:void(0)" class="tab-item on"><span>扫码登录</span><i></i></a>
                    <a href="javascript:void(0)" class="tab-item"><span>账户登录</span><i></i></a>
                </div>
                <div class="pc-login" style="display: none">
                    
                    <div class="username-login">
						<div>
                            <div class="login-warning" style="display:none;"><i></i><span>公共场所不建议自动登录！</span></div>
                            <div class="login-error" style="display:none;"><i></i><span>账户名与密码不匹配请重新输入！<a href="#">忘记密码</a></span></div>
                            <div class="login-blank" style="line-height:40px;">&nbsp;</div>
                        </div>
                        <div class="username-box">
                            <div class="input-box" id="showErrorUsernameDiv">
                                <input id="userName" type="text" autocomplete="off" value="" tabindex="1">
                                <label>用户名/手机/邮箱/门店会员卡号</label>
                                <i class="icon username-icon"></i>
                                <i class="clear"></i>
                            </div>
                            <div class="email-list hide"></div>
                        </div>
                        <div class="password-box">
                            <div class="input-box" id="showErrorPwdDiv">
                                <input id="password" type="password" autocomplete="off" tabindex="2">
                                <label>密码</label>
                                <i class="icon password-icon"></i>
                                <i class="clear"></i>
                            </div>
                        </div>
                        <div class="verify-box clearfix showErrorVerifyCodeDiv" style="display:none;">
                            <div class="input-box">
                                <input class="validate" type="text" maxlength="4" autocomplete="off" tabindex="3" name="Logon_index_denglu004">
                                <label>验证码</label>
                                <i class="icon verify-icon"></i>
                                <i class="clear"></i>
                                <i class="ok"></i>
                                <i class="error"></i>
                            </div>
                            <a href="javascript:void(0);" class="verify-code">
                                <img id="imageCode1" src="" alt="图形验证码">
                                <span>换一张</span>
                            </a>
                        </div>
                        <div id="Logon_index_denglu039" class="siller-box sillerVerifyCode" style="display:none;margin-bottom:20px;">
                            <div id="siller1"></div>
                        </div>
                        
                        <div class="login-help clearfix">
                            <a class="login-switch" href="javascript:void(0)"><i></i>短信验证码登录</a>
                            <a id="FORGET_PWD" href="javascript:void(0);" onclick="javascript:forgetPwdClick(); return false;" name="Logon_index_denglu001"  class="forget-password">忘记密码？</a>
                            
                        </div>
                    		<a id="submit" href="javascript:void(0)" onclick="javascript:prepareLoginSubmit();return false;" name="Logon_index_denglu002" class="login-submit">登 录</a>
                    </div>
                    <div class="phone-login">
                        <div>
                            <div class="login-warning" style="display:none;"><i></i><span>公共场所不建议自动登录！</span></div>
                            <div class="login-error" style="display:none;"><i></i><span>账户名与密码不匹配请重新输入！<a href="#">忘记密码</a></span></div>
                            <div class="login-blank" style="line-height:40px;">&nbsp;</div>
                        </div>
                        <div class="phone-box">
                            <div class="input-box" id="showErrorPhoneNumberDiv">
                                <input id="phoneNumber" type="text" autocomplete="off" tabindex="1" maxlength="11">
                                <label>手机号码</label>
                                <i class="icon username-icon"></i>
                                <i class="clear"></i>
                            </div>
                        </div>
                        <div class="verify-box clearfix showErrorVerifyCodeDiv" style="display:none;">
                            <div class="input-box">
                                <input class="validate" type="text" maxlength="4" autocomplete="off" tabindex="2">
                                <label>验证码</label>
                                <i class="icon verify-icon"></i>
                                <i class="clear"></i>
                                <i class="ok"></i>
                                <i class="error"></i>
                            </div>
                            <a name="Logon_index_denglu035" href="javascript:void(0)" class="verify-code">
                                <img id="imageCode2" src="" alt="图形验证码">
                                <span>换一张</span>
                            </a>
                        </div>
                        <div id="Logon_index_denglu040" class="siller-box sillerVerifyCode" style="display:none;">
                            <div id="siller2"></div>
                        </div>
                        <div class="sms-box clearfix">
                            <div class="input-box" id="showErrorSmsCodeDiv">
                                <input id="smsCode" type="text" autocomplete="off" tabindex="3" maxlength="6">
                                <label>手机验证码</label>
                                <i class="icon password-icon"></i>
                                <i class="clear"></i>
                            </div>
                            <a name="Logon_index_denglu033" href="javascript:void(0)" class="send-sms">获取验证码</a>
                        </div>
						<div style="padding-top:2px;padding-bottom:4px;">
                            <p class="sms-sent">验证码已发送到您的手机，<em>5</em>分钟内有效</p>
                            <div class="voice-verify clearfix">
                                <span>如果您收不到验证码？</span>
                                <a name="Logon_index_denglu034" href="javascript:void(0)" class="send-voice">获取语音验证码</a>
                            </div>
                            <div class="voice-sent clearfix">
                                <span>电话拨打中</span>
                                <i></i>
                            </div>
                            <div class="blank">&nbsp;</div>
                        </div>
                        
                        <div class="login-help clearfix">
                            <a class="login-switch" href="javascript:void(0)"><i></i>账号密码登录</a>
                            <a id="FORGET_PWD" href="javascript:void(0);" onclick="javascript:forgetPwdClick(); return false;" name="Logon_index_denglu001"  class="forget-password">忘记密码？</a>
                        </div>
                        <a id="submit" href="javascript:void(0)" onclick="javascript:prepareLoginSubmit();return false;" name="Logon_index_denglu002" class="login-submit">登 录</a>
                    </div>
                        
                    
					<form method="post" name="snapshotForm" action="login" id="snapshotForm">
					    <input type='hidden' id="username1" name='username' value="" />
					    <input type='hidden' id="password1" name='password' value="" />
					    <input type='hidden' id="loginTheme1" name='loginTheme' value="" />
					    <input type='hidden' id="highRiskRedirectFlag1" name='highRiskRedirectFlag' value="" />
					    <input type='hidden' id="service1" name='service' value="" />
					    <input type='hidden' id="oauth_redirect1" name='oauth_redirect' value="" />
					    <input type='hidden' id="trust_redirect1" name='trust_redirect' value="" />
					    <input type='hidden' id="uuid1" name='uuid' value="" />
					    <input type='hidden' id="validate1" name='verifyCode' value="" />
					    <!-- <input type='hidden' id="rememberMeVal" name='rememberMe' value="" />  -->
					</form>
                </div>
                <div class="scan-login" style="display: block;">
                    
                    <div class="scan-box clearfix">
                    
                    		<div class="qrcode" style="width:141px;height:141px;margin:0 auto;transition:.3s all;position:relative;">
                            <img src="" style="display:block;width:100%;height:100%;" class="qrCodesId">
                            <span style="position:absolute;top:-30px;left:0;padding-left:8px;display:none">今日首次扫码获<em style="color:#f60;">10</em>云钻</span>
                        </div>
                        <div class="phone-scan"></div>
                    </div>
                    
                    <div id="scanErrorTip">
                    
                    </div>
                    <div class="scan-success" style="display: none;">
                        <i></i>
                        <p class="success-txt">扫描成功</p>
                        <p class="not-refresh">请勿刷新页面，按手机提示操作！</p>
                    </div>
                    
                    <p class="open-app"><i></i>打开<a name="Logon_index_denglu019" id="DOWNLOAD_APP" href="javascript:void(0);" target="_blank"><em>苏宁易购APP</em></a>扫码登录</p>
                    
                </div>
                <div class="free-reg">
                    <a id="FREE_TO_REG" href="javascript:void(0);" name="Logon_index_denglu003" onclick="javascript:freeToRegClick(); return false;">免费注册 有惊喜 &gt;</a>
                </div>
                <div class="bind-login">
                    <span class="title">使用以下账号登录</span>
                    <div class="common clearfix">
                        <a name="Logon_index_denglu027" href="javascript:void(0);" onclick="javascript:qqLogin(); return false;" class="qq"><i></i>QQ</a>
                        <a name="Logon_index_denglu026" href="javascript:void(0);" onclick="javascript:weixinLogin(); return false;" class="weixin"><i></i>微信</a>
                        <!-- <a name="Logon_index_denglu032" href="javascript:void(0);" class="zhifubao"><i></i>支付宝</a> -->
                        <a name="Logon_index_denglu017" href="javascript:void(0);" onclick="javascript:eppLogin(); return false;" class="yifubao"><i></i>易付宝</a>
                        <!--<a name="Logon_index_denglu015" href="javascript:void(0);" onclick="javascript:pptvLogin(); return false;" class="pptv"><i></i>PPTV</a>-->
                        <a name="Logon_index_denglu012" href="javascript:void(0);" onclick="javascript:memberCardLogin(); return false;">门店会员卡</a>
                        <!--<a name="Logon_index_denglu030" href="javascript:void(0)" class="view-more"><i></i>更多</a>-->
                    
                    </div>
                    <div class="more">
                      <!--    <a name="Logon_index_denglu012" href="javascript:void(0);" onclick="javascript:memberCardLogin(); return false;">门店会员卡</a>-->
                     <!--<a name="Logon_index_denglu015" href="javascript:void(0);" onclick="javascript:pptvLogin(); return false;">PPTV</a>-->
                    </div>
                </div>
                <div class="login-switch" name="Logon_index_denglu018"></div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="ng-footer">
        <div class="ng-s-footer">
            <div class="ng-s-f-con">
                <p class="ng-url-list">
                    <a href="http://www.suning.cn/" target="_blank" name="public0_none_wb_yqlj0101">苏宁云商</a><span>|</span>
                    <a href="http://10035.suning.com/" target="_blank" name="public0_none_wb_yqlj0102" rel="nofollow">苏宁互联</a><span>|</span>
                    <a href="http://jinrong.suning.com/" target="_blank" name="public0_none_wb_yqlj0111" rel="nofollow">苏宁金融</a><span>|</span>
                    <a href="https://passport.suning.com/ids/trustLogin?sysCode=epp&amp;targetUrl=https://pay.suning.com/epp-epw/login/login.action" rel="nofollow" target="_blank" name="public0_none_wb_yqlj0103">易付宝</a><span>|</span>
                    <a href="http://www.pptv.com?rcc_id=snyg" target="_blank" name="public0_none_wb_yqlj0105" rel="nofollow">PPTV</a><span>|</span>
                    <a href="http://redbaby.suning.com/" target="_blank" name="public0_none_wb_yqlj0106" rel="nofollow">红孩子</a><span>|</span>
                    <a href="http://binggo.suning.com/" target="_blank" name="public0_none_wb_yqlj0107" rel="nofollow">缤购</a><span>|</span>
                    <a href="http://laox.suning.com/" target="_blank" name="public0_none_wb_yqlj0108" rel="nofollow">乐购仕</a><span>|</span>
                    <a href="http://wuliu.suning.com/" target="_blank" name="public0_none_wb_yqlj0111" rel="nofollow">苏宁物流</a><span>|</span>
                        <a href="http://usa.suning.com/" target="_blank" name="public0_none_wb_yqlj0109" rel="nofollow">苏宁美国</a><span>|</span>
                        <a href="http://hk.suning.com/" target="_blank" name="public0_none_wb_yqlj0110" rel="nofollow">苏宁香港</a><span>|</span>
                        <a href=" http://m.suning.com/" target="_blank" name="public0_none_wb_yqlj0111">手机苏宁</a>
                </p>
                <p class="ng-url-list">
                    <a href="http://club.suning.com/hr/aboutus.html" target="_blank" name="public0_none_wb_yqlj0201" rel="nofollow">关于苏宁易购</a><span>|</span>
                    <a href="http://help.suning.com/page/id-469.htm" target="_blank" name="public0_none_wb_yqlj0202" rel="nofollow">联系我们</a><span>|</span>
                    <a href="http://careers.cnsuning.com/" target="_blank" name="public0_none_wb_yqlj0203" rel="nofollow">诚聘英才</a><span>|</span>
                    <a href="http://sop.suning.com/" target="_blank" name="public0_none_wb_yqlj0204" rel="nofollow">供应商入驻</a><span>|</span>
                    <a href="http://union.suning.com/" target="_blank" name="public0_none_wb_yqlj0205" rel="nofollow">苏宁联盟</a><span>|</span>
                    <a href="http://zb.suning.com/" target="_blank" name="public0_none_wb_yqlj0206" rel="nofollow">苏宁招标</a><span>|</span>
                    <a href="http://union.suning.com/aas/links.html" target="_blank" name="public0_none_wb_yqlj0207">友情链接</a><span>|</span>
                    <a href="http://help.suning.com/page/id-281.htm" target="_blank" name="public0_none_wb_yqlj0208" rel="nofollow">法律申明</a><span>|</span>
                    <a href="http://ued.suning.com/survey/" target="_blank" name="public0_none_wb_yqlj0209" rel="nofollow">用户体验提升计划</a><span>|</span>
                    <a href="http://mrs.suning.com/mrs-web/stockholder/check.htm" target="_blank" name="public0_none_wb_yqlj0209" rel="nofollow">股东会员认证</a>
                </p>
                <p class="ng-copyright">
                    Copyright? 2002-2017 ，苏宁云商集团股份有限公司版权所有
                    <a href="http://www.miitbeian.gov.cn" target="_blank" style="color:#999">苏ICP备10207551号-4</a>
                    <a href="http://img.suning.cn/public/v3/images/SUB1-20130131.png" target="_blank" rel="nofollow" style="color:#999">苏B1-20130131</a>
                    <a href="http://img.suning.cn/public/v3/images/SUB2-20130376.png" target="_blank" rel="nofollow" style="color:#999">苏B2-20130376</a>
                    <a href="http://img.suning.cn/public/v3/images/SUB2-20130391.png" target="_blank" rel="nofollow" style="color:#999">苏B2-20130391</a>
                    出版物经营许可证新出发苏批字第A-243号</p>
                <div class="ng-authentication">
                    <a href="https://search.szfw.org/cert/l/CX20111018000608000610" target="_blank" name="public0_none_wb_zs0302" rel="nofollow">
                        <img height="24" width="76" alt="诚信网站" src="picture/chengxin.png" class="loading">
                    </a>
                    <a href="http://image.suning.cn/uimg/snnet/snnetImg/142891196680527240.jpg" target="_blank" name="public0_none_wb_zs0303" rel="nofollow">
                        <img height="24" width="76" alt="中国联通授权网络经营代理商" src="picture/unicom.png" class="loading">
                    </a>
                    <a href="http://img.suning.cn/public/v3/images/dianxin_content.jpg" target="_blank" name="public0_none_wb_zs0304" rel="nofollow">
                        <img height="24" width="76" alt="中国电信授权网络经营代理商" src="picture/dianxin.jpg" class="loading">
                    </a>
                    <a href="http://odr.jsdsgsxt.gov.cn/mbm/entweb/elec/certView.shtml?siteId=27cfad762f3d45069d79a9f8f83f458f" target="_blank" rel="nofollow" name="public0_none_wb_zs0303">
                        <img height="24" width="76" alt="电子营业执照" src="picture/dianzi.png" class="loading">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <script type="text/html" class="send-voice-success">
        <div class="send-voice-success-dialog">
            <div class="dialing"></div>
            <p class="tell">稍后苏宁客服将电话与您联系，告知验证码～</p>
            <a name="Logon_index_denglu036" href="javascript:void(0)" class="button close">确 定</a>
        </div>
    </script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/siller.js"></script>
    <script type="text/javascript" src="js/d4bdb2bb1337499cb540d9439b530e6e.js"></script>
    <script type="text/javascript" src="js/loginprotectverifypop-min.js"></script>

	<script type="text/javascript">
    
  		//获取到的目标地址  将请求路径中的&amp; 替换为 &
    	var service = "https://order.suning.com/auth?targetUrl=https%3A%2F%2Forder.suning.com%2Forder%2ForderList.do";
    	var oauth_redirect = "";
        service = service.replaceAll('&amp;','&');
        
		//免费注册
	    var Request = new Object();
	    Request = login.getRequestParam();
	    var userTargetUrl = "?loginTheme=b2c&service=https%3A%2F%2Forder.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Forder.suning.com%252Forder%252ForderList.do".split("targetUrl%3D")[1];
	    var custSource = Request['custSource'];
	    var freeToReg_URL = srs_prefix_domain + "person.do";
	    if(userTargetUrl){
	    	var freeToReg_URL  = freeToReg_URL + "?myTargetUrl="+decodeURIComponent(userTargetUrl);
	    	if(custSource){
	    		freeToReg_URL = freeToReg_URL + "&custSource=" + custSource;
	    	}
	    }else{
	    	if(custSource){
	    		freeToReg_URL = freeToReg_URL + "?custSource=" + custSource;
	    	}
	    }
	    
	    var setAllDomain = function(){
	        //设置苏宁首页链接
	        $("#SN_DOMAIN").attr("href",sn_domain);
			//登录建议
			$("#LOGIN_ADVISE").attr("href",loginAdvise_Url);
			//下载易购客户端
			$("#DOWNLOAD_APP").attr("href",downLoadApp_Url);
	    }

		//needVerifyCode:表示是否需要输入验证码
		var needVerifyCodeVal=false;
		var isUseSlideVerifycode=true;
		var slideVerifycode="";
		//是否中文验证码
		var chineseValiCode = "false";
		
		//图片验证码输错三次才刷新
		var gImgVerCdeErrorCount = 0;
		//最近一次输入的图片验证码,不重复校验相同的图片验证码
		var gLastImgValCode = "";
		var gLastImgValCodeResult = false;
		
		//生成登陆之后的调整路径
		function getGoUrl(){
			if(oauth_redirect != "" && oauth_redirect.length != 0){
				goUrl = oauth_redirect;
			}else if(service != "" && service.length != 0){
				var index = service.indexOf("targetUrl=");
				if(index < 0){
					goUrl = service;
				}else{
					goUrl = decodeURIComponent(service.substring(index+10));
				}
			}
			try{
				var pattern = /.*?\.(suning|cnsuning|suningcloud|wuliuyun|snjijin)\.(com|cn)$/;
				var a_goUrl = parseURL(goUrl);  
				if(!pattern.test(a_goUrl.host)){
					goUrl = sn_domain;
				}
			}catch(e){}
		}
		function parseURL(url) {
		    var getGoUrl_a = document.createElement('a');
		    getGoUrl_a.href = url;
		    return {
		        source: url,
		        protocol: getGoUrl_a.protocol.replace(':', ''),
		        host: getGoUrl_a.hostname,
		        port: getGoUrl_a.port,
		        query: getGoUrl_a.search,
		        params: (function() {
		            var ret = {},
		            seg = getGoUrl_a.search.replace(/^\?/, '').split('&'),
		            len = seg.length,
		            i = 0,
		            s;
		            for (; i < len; i++) {
		                if (!seg[i]) {
		                    continue;
		                }
		                s = seg[i].split('=');
		                ret[s[0]] = s[1];
		            }
		            return ret;
		        })(),
		        file: (getGoUrl_a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
		        hash: getGoUrl_a.hash.replace('#', ''),
		        path: getGoUrl_a.pathname.replace(/^([^\/])/, '/$1'),
		        relative: (getGoUrl_a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
		        segments: getGoUrl_a.pathname.replace(/^\//, '').split('/')
		    };
		}
		
		//免费注册
		function freeToRegClick(){
			location.href = freeToReg_URL;
		}
		//忘记密码
		function forgetPwdClick(){
			location.href = forgetPwd_URL;
		}
		//微信联合登录
		function weixinLogin(){
			var weixin = "https://open.weixin.qq.com/connect/qrconnect?appid=wx2c91fc0834ac221c&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DWeixinProvider&response_type=code&scope=snsapi_login&state=https%3A%2F%2Forder.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Forder.suning.com%252Forder%252ForderList.do";
			if(service.length>0){
				var b = weixin.indexOf("&state=");
				location.href = weixin.substring(0,b) + "&state=" + encodeURIComponent(service);
			}else{
				location.href = weixin;
			}
		}
		//QQ联合登录
		function qqLogin(){
			var qq = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101224012&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DQQProvider&state=https%3A%2F%2Forder.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Forder.suning.com%252Forder%252ForderList.do";
			if(service.length>0){
				var b = qq.indexOf("&state=");
				location.href = qq.substring(0,b) + "&state=" + encodeURIComponent(service);
			}else{
				location.href = qq;
			}
		}
		//会员卡首次登录
		function memberCardLogin(){
			location.href = memberCard_URL;
		}
		//易付宝联合登录
		function eppLogin(){
			var epp ="https://paypassport.suning.com/ids/oauth20/authorize?client_id=suning_01&response_type=code&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DEppProvider&state=https%3A%2F%2Forder.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Forder.suning.com%252Forder%252ForderList.do";
			if(service.length>0){
			    location.href = epp + "&state=" + encodeURIComponent(service);
			}else{
			    location.href = epp;
			}
		}
		//PPTV联合登录
		function pptvLogin(){
			var pptv = "http://api.passport.pptv.com/authorize.do?client_id=CvoJlCdPF0CDq7NUel7HcOH98g/RE/Ml&client_secret=01&response_type=code&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DPPTVProvider&state=https%3A%2F%2Forder.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Forder.suning.com%252Forder%252ForderList.do"
			if(service.length>0){
		        location.href = pptv + "&state=" + encodeURIComponent(service);
			}else{
				location.href = pptv;
			}
		}
		//检测信任登录的cookies信息，做信任跳转
		var checkTrustCookie = function() {
			//信任登录未绑定的标记
			var trustbinding = login.getCookie('trust_user_not_binding');
			if ( trustbinding!=null && trustbinding!=""){
				//保存是从哪里请求的路径  将请求路径中的&amp; 替换为 &
				var serviceStr=decodeURIComponent("https://order.suning.com/auth?targetUrl=https%3A%2F%2Forder.suning.com%2Forder%2ForderList.do");
				//已解码
				var targetUrl = serviceStr.substring(serviceStr.indexOf("targetUrl") + 10);
			    //跳转
				window.location.href = srs_prefix_domain +　"commThirdPartyLogOrReg.do?trustType=normal&bindingTicket="+trustbinding+"&targetUrl="+targetUrl;
			}
		}
		
		//图片验证码
		function fun_getVcode() {
			gImgVerCdeErrorCount = 0;
			//重新加载图片验证码
			if($('#imageCode1').length > 0){
				$('#imageCode1')[0].src = 'https://vcs.suning.com/vcs/imageCode.htm?uuid='
					+ "09e90008-d218-4b38-b28e-4357dd17d5e6" + "&sceneId=logonImg&yys=" + new Date().getTime();
			}
			if($('#imageCode2').length > 0){
				$('#imageCode2')[0].src = 'https://vcs.suning.com/vcs/imageCode.htm?uuid='
					+ "09e90008-d218-4b38-b28e-4357dd17d5e6" + "&sceneId=logonImg&yys=" + new Date().getTime();
			}
			cleanVerifyCodeError();
		}
		
		//登陆初始化默认
		function showScanhide(){
			$('.login-error').find('span').html('');
			$('.login-blank').show().siblings().hide();
			login.autoLoginCheck(0);
			$("#showErrorUsernameDiv").removeClass("input-error");
			$("#showErrorPwdDiv").removeClass("input-error");
			$(".showErrorVerifyCodeDiv .input-box").removeClass("input-error");
			$("#showErrorPhoneNumberDiv").removeClass("input-error");
			$("#showErrorSmsCodeDiv").removeClass("input-error");
		}
		function showErrorInfo(msg,inputId){
			$('.login-error').find('span').html(msg);
			$('.login-error').show().siblings().hide();
			if(inputId){
				$("#" + inputId + "").addClass("input-error");
			}
			if(inputId == 'showErrorVerifyCodeDiv'){
				$("." + inputId + "").find('.input-box').addClass("input-error");
			}
		}
		function hideErrorInfo(){
			showScanhide();
		}
		//显示图片验证码正确
		function showVerifyCodeOK(){
			var codeObj = $('.verify-box .input-box input');
			codeObj.siblings('.clear,.error').hide();
			codeObj.siblings('.ok').show();
		}
		//显示图片验证码错误
		function showVerifyCodeError(){
			var codeObj = $('.verify-box .input-box input');
			codeObj.siblings('.clear,.ok').hide();
			codeObj.siblings('.error').show();
		}
		//清除图片验证码提示
		function cleanVerifyCodeError(){
			var codeObj = $('.verify-box .input-box input');
			codeObj.siblings('.ok,.error').hide();
			$(".validate:visible").val("");
			$(".validate:visible").blur();
		}
		//普通登录处理回车事件
		function onNormalLogonKeyPress(evt) {
		  	//兼容IE和Firefox获得keyBoardEvent对象
			evt = (evt) ? evt : ((window.event) ? window.event : "")
			//兼容IE和Firefox获得 keyBoardEvent对象的键值
			var keyCode = evt.keyCode?evt.keyCode:evt.which;
			if(keyCode==13) {
				prepareLoginSubmit();
			}
		}
		//判断大小写锁定 
		function  checkCapsLock(evt){
			//兼容IE和Firefox获得keyBoardEvent对象
			evt = (evt) ? evt : ((window.event) ? window.event : "")
			  //兼容IE和Firefox获得 keyBoardEvent对象的键值
			var keyCode = evt.keyCode?evt.keyCode:evt.which;
		    var isShift  =  evt.shiftKey ||(keyCode  ==   16 ) || false ; 
		    
		     if (((keyCode >=   65   &&  keyCode  <=   90 )  &&   !isShift) 
		     || ((keyCode >=   97   &&  keyCode  <=   122 )  &&  isShift) 
			 ){
				$('.login-warning').find('span').html("键盘大写锁定已打开，请注意大小写");
				$('.login-warning').show().siblings().hide();
			 }else{
				 var msg = $(".login-warning").html();
				 //当在密码输入框中输入正常的时候，错误提示的内容是"键盘大写",的时候，错误提示消失
				 if(msg.indexOf("键盘大写")!=-1){
				 	showScanhide();
				 }
			 }
		}
		//普通登录：提交时检查账号
		function checkNormalLogonIdOnSubmit() {
			// 清掉服务器错误消息
			hideErrorInfo();
			var eml = $('#userName').val();
			if (eml == null || eml == "") {
				showErrorInfo("请输入用户名/邮箱/手机号！","showErrorUsernameDiv");
				return false;
			}
			if (eml.length != 0 && eml.length < 50
					&& eml.match( /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ )){
				$('#userName').val(eml.toLowerCase());
			} else {
				$('#userName').val(eml);
			}
			hideErrorInfo();
			return true;
		}
		//普通登录：提交时检查密码
		function checkNormalLogonPwdOnSubmit() {
			// 清掉服务器错误消息
			hideErrorInfo();
			var pwd = $('#password').val();
			pwd = pwd.Trim();
			if (pwd.length<6 || pwd.length>20) {
				showErrorInfo("请输入6-20位密码！","showErrorPwdDiv");
				return false;
			} else {
				hideErrorInfo();
				return true;
			}	
		}
		//图片验证码位置按键的弹起事件
		function onKeyUpForValidate(evt){
			//兼容IE和Firefox获得keyBoardEvent对象
			evt = (evt) ? evt : ((window.event) ? window.event : "")
			//兼容IE和Firefox获得 keyBoardEvent对象的键值
			var keyCode = evt.keyCode?evt.keyCode:evt.which;
		    
			if(keyCode==13) {
				prepareLoginSubmit();
			}else{
				checkNormalLogonValidateCodeOnBlur();
			}
		}
		//图片验证码框中焦点移除的时候，进行提示
		function checkValidateCodeOnBlur(){
			var vcd = $('.validate:visible').val();
			if (vcd == null || vcd == "") {
				return;
			}else if(vcd.length == 4){
				//没有在提交中的时候进行提交操作  4个长度的时候需要是字符数字， 3个长度的时候需要是汉字
				return;
			}else{
				//showVerifyCodeError();
				return;
			}
		}
		// 普通登录：失去焦点时检查图片验证码
		function checkNormalLogonValidateCodeOnBlur() {
			// 清掉服务器错误消息
			var vcd = $('.validate:visible').val();
			if (vcd == null || vcd == "") {
				return false;
			} else if(vcd.length == 4){
				//没有在提交中的时候进行提交操作    4个长度的时候需要是字符数字， 3个长度的时候需要是汉字
				if(chineseValiCode == "true"){
					if(isChineseStr(vcd)){
						checkImageValCode();
					}
				}else{
					checkImageValCode();
				}
				return true;
			}
		}
		function checkInputEvent(){
			$("#userName").blur(function(){
				checkShowImageCode();
			});
			$("#userName").keypress(function(){
				onNormalLogonKeyPress();
			});
			$("#phoneNumber").blur(function(){
				checkSmsLoginPhone();
			});
			$("#password").keypress(onNormalLogonKeyPress);
			$("#password").keypress(checkCapsLock);
			//实时校验
			$(".validate").keyup(onKeyUpForValidate);
			$(".validate").blur(checkValidateCodeOnBlur);
		}
		
		//是否显示图片验证码
		function checkShowImageCode(){
			var logonIdval = $('#userName').val().Trim();
			if(logonIdval.length > 0){
				userNameBlur("#userName",'');
			}
		}
		//异步是指动态验证码是否显示
		function userNameBlur(o,v){
			if ($(o).val().Trim().length >0){
				var userNameVal=$(o).val();
				userNameVal = userNameVal.Trim();
				$.ajax( {
					type : 'POST',
					url : 'needVerifyCode',
					data : 'username='+encodeURIComponent(userNameVal),
					dataType : 'json',
					success : function(data) {
						if(data&& data.needVerifyCode){
							if (!needVerifyCodeVal) {
								needVerifyCodeVal=true;
								showAndHideVerifyCode(needVerifyCodeVal,isUseSlideVerifycode);
							}
						}else if(data&& !data.needVerifyCode){
							if (needVerifyCodeVal) {
								needVerifyCodeVal=false;
								showAndHideVerifyCode(needVerifyCodeVal,null);
							}
						}
					},
					error : function(data) {
					}
				});
			}
		};
		//初始化显示图片验证码是否显示
		function initShowVerifyCode(){
			showAndHideVerifyCode(needVerifyCodeVal,isUseSlideVerifycode);
		}
		//显示隐藏验证码
		function showAndHideVerifyCode(isNeedVerifyCodeVal,isUseSlideVerifycodeVal){
			if(isNeedVerifyCodeVal){
				if(isUseSlideVerifycodeVal){
			    	$(".sillerVerifyCode").show();
		    	}else{
			    	$(".showErrorVerifyCodeDiv").show();
					fun_getVcode();
		    	}
			}else{
		    	$(".sillerVerifyCode").hide();
				$(".showErrorVerifyCodeDiv").hide();
			}
		}
		//图片验证码长度大于4的时候进行图片验证码的校验
		function checkImageValCode(){
			var imageValCode = $(".validate:visible").val();
			var vcd = $.trim(imageValCode);
			if(vcd.length == 4){
				return ajaxCheckVerifyCodeOrSubmit(false);	
			}
		}
		//图片验证码框中焦点移除的时候，进行提示
		function checkValidateCodeOnSubmit(){
			if(isUseSlideVerifycode){
				if (siller.status == 0 || null == slideVerifycode || slideVerifycode == "" ) {
					showErrorInfo("为了你的账户安全，请拖动滑块完成验证。");
					return false;
				}else{
					//已经完成滑动验证
					return true;
				}
	    	}else{
	    		var vcd = $('.validate:visible').val();
				if (vcd == null || vcd == "") {
					showErrorInfo("请输入图片验证码","showErrorVerifyCodeDiv");
					return false;
				}else if(vcd.length == 4){
					//没有在提交中的时候进行提交操作  4个长度的时候需要是字符数字， 3个长度的时候需要是汉字
					return true;
				}else{
					showErrorInfo("验证码不正确，请重新输入。","showErrorVerifyCodeDiv");
					return false;
				}
	    	}
		}
		//检查是否是上次用Ajax校验过的图片验证码，如果是，返回true, 如果不是，则记录下来，返回false
		function isLastImgValCode(code) {
			if (gLastImgValCode == code) {
				return true;
			} else {
				gLastImgValCode = code;
				return false;
			}
		}
		//图片验证码的异步校验
		//isSubmit：是否进行提交 true：表示验证成功之后进行提交操作 ； false：表示仅仅进行验证
		function ajaxCheckVerifyCodeOrSubmit(isSubmit) {
			if(isUseSlideVerifycode){
				if (siller.status == 0 || null == slideVerifycode || slideVerifycode == "" ) {
					showErrorInfo("为了你的账户安全，请拖动滑块完成验证。");
					return false;
				}else{
					//进行提交操作
					if(login.userLoginType == "smsLogin"){
						ajaxSmsLogonSubmit();
					}else{
						loginSubmit();
					}
				}
	    	}else{
				//用户输入的验证码code
				var code = $(".validate:visible").val();
				if (!isSubmit && isLastImgValCode(code)) {
					if(gLastImgValCodeResult){
						showVerifyCodeOK();
					}else{
						showVerifyCodeError();
					}
					return;
				}
				//请求时所传参数
				var param = {
						code : code,
						uuid : "09e90008-d218-4b38-b28e-4357dd17d5e6",
						delFlag : 0
				};
				$.ajax({
					//请求类型
					type : 'POST',
					//发送验证请求的url
					url : "https://vcs.suning.com/vcs/validate_jsonp.htm",
					//请求时所传参数
					data : param,
					//返回数据类型
					dataType : 'jsonp',
					//回调函数方法名
					jsonp : 'callback',
					//请求成功后的回调函数
					success : function(data) {
						//显示验证结果
						if(data[0].result == 'true'){
							gLastImgValCodeResult = true;
							hideErrorInfo();
							showVerifyCodeOK();
							if(isSubmit){
								//进行提交操作
								if(login.userLoginType == "smsLogin"){
									ajaxSmsLogonSubmit();
								}else{
									loginSubmit();
								}
							}
						}else{
							gLastImgValCodeResult = false;
							// 当输入满4位时，鼠标未移出就开始校验图片验证码正确性。若连续输入错误3 次，系统自动刷新图片验证码。
							gImgVerCdeErrorCount++;
							if (gImgVerCdeErrorCount >= 3 || isSubmit) {
								fun_getVcode();
							}else{
								showVerifyCodeError();
							}
							showErrorInfo("验证码不正确，请重新输入。","showErrorVerifyCodeDiv");
						}
					}
				});
	    	}
		}
		
		
		//采用扫描登陆方式进行登录
		function setLogonStylebyImage(){
			if(typeof(timeOutId) != "undefined"){
				clearInterval(timeOutId);
			}
			showScanInit();
			setQRCodes();
			//实时扫描
			timeOutId = setInterval(checkQRCodesValidate,2000);
		}
		//设置二维码信息
		function setQRCodes(){
			var qrCodesURL = passport_domain+"/ids/qrLoginUuidGenerate.htm?image=true" + "&yys=" + new Date().getTime();
			$(".qrCodesId").attr("src",qrCodesURL);
			return false;
		}
		//实时的探测二维码信息  0：起始状态  1：已有手机扫描了二维码； 2：手机确认授权； 3：uuid不存在或过期；4：系统异常
		function checkQRCodesValidate(){
			$.ajax( {
				type : 'POST',
				url  : passport_domain+'/ids/qrLoginStateProbe',
				data : 'uuid='+ login.getCookie("ids_qr_uuid"),
				dataType : 'jsonp',
				success : function(data) {
					if(data&& data.state){
						if(data.state == 0){
							//未扫描
							showScanInit();
							return;
						}else if(data.state == 1){
							//手机扫描了二维码
							showScanOK();
						}else if(data.state == 2){
							//手机确认授权
							clearInterval(timeOutId);
							window.location = goUrl;
						}else if(data.state == 3){
							//过期：切换登陆方式
							clearInterval(timeOutId);
							showScanError('<div class="qrcode-exception with-button"><div class="mask"></div><p class="exception">二维码已失效</p><a name="Logon_index_denglu037" href="javascript:void(0)" class="button" onclick="javascript:setLogonStylebyImage();">点击刷新</a></div>');
						}else if(data.state == 4){
							//系统异常
							showScanError('<div class="qrcode-exception with-button"><div class="mask"></div><p class="exception">账号异常，请使用</p><a name="Logon_index_denglu038" href="javascript:void(0)" class="button" onclick="javascript:login.scanSwitchLoginType();">账号密码登录</a></div>');
						}else if(data.state == 5){
							//系统锁
							showScanError('<div class="qrcode-exception no-button"><div class="mask"></div><p class="exception">您的账号已被锁定<br>请1小时后再试</p></div>');
						}else if(data.state == 6){
							//人工锁
							showScanError('<div class="qrcode-exception no-button"><div class="mask"></div><p class="exception">账号锁定，请联系客服<br>4008-365-365</p></div>');
						}else if(data.state == 7 || data.state == 8 || data.state == 9 || data.state == 10 || data.state == 11 || data.state == 12){
							//风控
							showScanError('<div class="qrcode-exception with-button"><div class="mask"></div><p class="exception">账号存在风险，请使用</p><a name="Logon_index_denglu038" href="javascript:void(0)" class="button" onclick="javascript:login.scanSwitchLoginType();">账号密码登录</a></div>');
						}else{
							showScanError();
						}
					}else{
						//系统异常
						showScanError();
					}
				},
				error : function(data) {
					//系统异常
					showScanError();
				}
			});
		}
		function showScanInit(){
			$('#scanErrorTip').html('');
			$("#scanErrorTip").hide();
			$(".scan-success").hide();
			$(".scan-box").show();
		}
		function showScanOK(){
			$("#scanErrorTip").hide();
			$(".scan-box").hide();
			$(".scan-success").show();
		}
		function showScanError(msg){
			$('#scanErrorTip').html('');
			//$('.qrcode-invalid').prepend($('.scan-box img').clone());
			if(msg){
				$('#scanErrorTip').append(msg);
			}else{
				$('#scanErrorTip').append('<div class="mask"></div><p class="invalid">系统繁忙</p><a href="javascript:void(0)" class="refresh" onclick="javascript:setLogonStylebyImage();">重新扫描登录</a>');
			}
			$(".scan-box").hide();
			$(".scan-success").hide();
			$("#scanErrorTip").show();
		}
		
		
		//显示服务器返回的错误信息
		function showServerErrorMsg(data) {
			if(isUseSlideVerifycode){
				slideVerifycode = "";
				$('#siller1').empty();
				login.siller('siller1');
			}
			var errorCode= "";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.errorCode)){
				errorCode = data.errorCode;
			}
			var errorMessage="" ;
			if(login.isNotEmpty(data) && login.isNotEmpty(data.errorMessage)){
				errorMessage = data.errorMessage;
			}
			var remainTimes ="";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.remainTimes)){
				remainTimes = data.remainTimes;
			}
			var snMemberErrorCode = "";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.snMemberErrorCode)){
				snMemberErrorCode = data.snMemberErrorCode;
			}
			var logonId = "";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.username)){
				logonId = data.username;
			}else{
				logonId = $('#userName').val();
				logonId = logonId.Trim();
			}
			
			var offlineMemberId = "";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.offlineMemberId)){
				offlineMemberId = data.offlineMemberId;
			}

			//snMemberErrorCode中的错误提示信息
			if(snMemberErrorCode=="E4700A40"|| errorCode=="E4700A40"){
				errorMessage = "该账号密码存在安全风险，请立即<a name='Logon_index_denglu001' href='"+forgetPwd_URL+"' target='_blank' style='float:none'>重置密码</a>。";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&该账号密码存在安全风险&&srs");
				return;
			}else if(snMemberErrorCode=="E4700440" || errorCode=="E4700440" ||
					 snMemberErrorCode=="E4700456" || errorCode=="E4700456" ||
					 snMemberErrorCode=="E4700A37" || errorCode=="E4700A37" ){
				//E4700456 卡不存在  //E4700A37您输入的账号不存在，请重新输入！
				errorMessage='该账户名不存在，<a name="Logon_index_denglu011" href="javascript:void(0);" onclick="javascript:forgetLoginName();">忘记账户名</a>或';
				errorMessage= errorMessage+ '<a name="Logon_index_denglu022" href="'+freeToReg_URL+'" target="_blank">注册新账号</a>?';
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&该账户名不存在&&srs");	
				return;
			}else if(snMemberErrorCode=="E4700451" || errorCode=="E4700451"){
				//存在多个会员卡（重复卡）	会员卡异常，请至门店更换会员卡！
				errorMessage =  "会员卡异常，请至门店更换会员卡！";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700464" || errorCode=="E4700464"){
				//您的会员账号出现异常，请联系4008-365-365！
				errorMessage = "您的会员账号出现异常，请联系4008-365-365！";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700480" || errorCode=="E4700480"){
				//卡类型为非个人卡类型（公司卡）	非个人卡会员暂不提供线上验证功能！
				errorMessage = "非个人卡会员暂不提供线上验证功能！";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700000" || errorCode=="E4700000"){
				errorMessage = "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700013" || errorCode=="E4700013"){
				//数据库操作出错	不好意思，系统繁忙，请稍后再试！		
				errorMessage = "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700450" || errorCode=="E4700450"){
				errorMessage = "您的会员卡资料不完整，为保证您的账户安全，请携带会员卡及有效证件到就近门店补全资料！";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700443" || errorCode=="E4700443"){
				errorMessage = "会员卡已被锁定，请联系4008-365-365解锁。";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E4700B03" || errorCode=="E4700B03"){
				//E4700B03 会员卡首次登陆
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&会员卡首次登陆&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(snMemberErrorCode=="E4700N07" || errorCode=="E4700N07"){
				//E4700N07手机号存在多个会员
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&手机号存在多个会员&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(snMemberErrorCode=="E4700N11" || errorCode=="E4700N11"){
				//E4700N11 手机为团体会员的联系人手机，不能登录
				errorMessage='该账户名不存在，<a name="Logon_index_denglu011" href="javascript:void(0);" onclick="javascript:forgetLoginName();">忘记账户名</a>或';
				errorMessage= errorMessage+ '<a name="Logon_index_denglu022" href="'+freeToReg_URL+'" target="_blank">注册新账号</a>?';
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&手机为团体会员的联系人手机，不能登录&&srs");
				return;
			}else if(snMemberErrorCode=="E4700487" || errorCode=="E4700487"){
				//E4700487  非个人会员卡不能绑定易购
				errorMessage = "非个人会员卡暂不提供线上登录验证。";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(snMemberErrorCode=="E0000001" || errorCode=="E0000001"){
				errorMessage = "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}

			//errorCode类型的错误提示信息
			if(errorCode=="badVerifyCode"){
				errorMessage = "验证码不正确，请重新输入";
				showErrorInfo(errorMessage,"showErrorVerifyCodeDiv");
				return;
			}else if(errorCode=="badSlideVerifyCode"){
				errorMessage = "为了你的账户安全，请重新拖动滑块完成验证";
				showErrorInfo(errorMessage);
				return;
			}else if(errorCode=="hkAccountNotAvailable"){
				errorMessage = "该账号为香港苏宁用户，暂不支持在苏宁易购登录";
				showErrorInfo(errorMessage);
				return;
			}else if(errorCode=="needVerifyCode"){
				if(isUseSlideVerifycode){
					errorMessage = "为了你的账户安全，请重新拖动滑块完成验证";
					showErrorInfo(errorMessage);
				}else{
					errorMessage = "请输入图片验证码！";
					showErrorInfo(errorMessage,"showErrorVerifyCodeDiv");
				}
				return;
			}else if(errorCode=="badPassword.msg1"){
				errorMessage="您输入的账户名与密码不匹配，请重新输入！<br/><a name='Logon_index_denglu008' href='"+forgetPwd_URL+"' target='_blank' style='float:none'>忘记密码</a>或<a href='#' onclick='javascript:forgetLoginName();'>账户名</a>？";
				showErrorInfo(errorMessage);
				$('#password').val('');
				return;
			}else if(errorCode=="badPassword.msg2"){
				errorMessage="密码错误，您还可以尝试"+remainTimes+"次，<a name='Logon_index_denglu008' href='"+forgetPwd_URL+"' target='_blank' style='float:none'>点此找回密码</a>?";
				showErrorInfo(errorMessage);
				$('#password').val('');		
				return;
			}else if(errorCode=="unknownUsername"){
				errorMessage='该账户名不存在，<a name="Logon_index_denglu011" href="javascript:void(0);" onclick="javascript:forgetLoginName();">忘记账户名</a>或';
				errorMessage= errorMessage+ '<a name="Logon_index_denglu022" href="'+freeToReg_URL+'" target="_blank">注册新账号</a>?';
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				return;
			}else if(errorCode=="lockedBySystem"){
				if(login.isDigit(logonId)&&(logonId.length==12)){
					errorMessage = "您的会员卡已被锁定，请联系4008-365-365进行解锁。";
				}else{
					errorMessage = "密码错误10次，您可以<a href='"+forgetPwd_URL+"' target='_blank' style='float:none'>找回密码</a>，或1小时后再试。";
				}
				showErrorInfo(errorMessage);
				return;
			}else if(errorCode=="lockedByManual"){
				errorMessage = "您的账号已经被锁定，请联系客服4008-365-365进行解锁。";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				return;
			}else if(errorCode=="notOnlineMember"){
				//会员卡未绑定
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				window.location.href = jumpUrl;
				return;
			}else if(errorCode=="imperfectMemberCard"){
				errorMessage = "您的会员卡资料不完整，为保证您的账户安全，请携带会员卡及有效证件到就近门店补全资料！";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				return;
			}else if(errorCode == "CARD_PASSWORD_VERIFY_SUCCESS"){
				//账号通用逻辑：1.线下账号验证通过；2.线下账号校验不通过，非初始密码；3.线下账号，初始密码
				// 验证通过
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "CARD_PASSWORD_VERIFY_FAILED"){
				// 验证不通过
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "CARD_PASSWORD_INITIAL"){
				// 账号初始密码
				var jumpUrl = memberCard_URL + "?cardInfo=" + logonId;
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "serviceNotAvailable"){
				// 当前服务不可用,请稍后再试。
				errorMessage = "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode == "ECARD_UNBIND"){
				// 团体卡未绑定
				errorMessage = "非个人会员卡暂不支持登录验证，您可以进行<a href='" + companycard_url + "'>验证注册</a>或更换其他账号登录。";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				return;
			}else if(errorCode == "highRiskAccount"){
				// 高危用户
				var jumpUrl = asc_prefix_domain + "/highrisk/getinfo.do?ticket=" + data.snapshotId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&高危用户&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "suspectedHighRiskAccount"){
				// 疑似高危用户
		        var jumpUrl = asc_prefix_domain  + "/highrisk/getinfo.do?ticket=" + data.snapshotId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&疑似高危用户&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "sopSuspectedHighRiskAccount"){
				// SOP疑似高危用户
		        var jumpUrl = sop_prefix_domain  + "sel/member/toForward.htm?ticket=" + data.snapshotId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&SOP疑似高危用户&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "maliciousRegister"){
				// 恶意注册用户
				var jumpUrl = asc_prefix_domain + "/maliciousreg/getinfo.do?ticket=" + data.snapshotId;
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&恶意注册用户&&srs");
				window.location.href = jumpUrl;
				return;
			}else if(errorCode == "suspiciousLogin"){
		        //异地登陆用户
		        $("#password").blur();
		        getGoUrl();
		        var parentUrl = window.location.href;
		        var targetUrl =  goUrl; 
			    aqSuning.showMobilePopType(false,data.snapshotId,encodeURIComponent(targetUrl),encodeURIComponent(parentUrl));
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&易购帐号登录保护&&srs");
				return;
		    }else if(errorCode == "sopSuspiciousLogin"){
		        //sop异地登陆用户
				errorMessage = "尊敬的商家，请至<a target='blank' href='" + sop_prefix_domain + "'>苏宁云台</a>进行登录";
				showErrorInfo(errorMessage);
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&sop异地登陆用户&&srs");
				return;
		   	}else if(errorCode == "noAliasName"){
		   		//无别名
				errorMessage = "您的资料完善度较低，账号存在安全风险。<br/>请立即<a target='blank' href='" + asc_selfService_URL + "'>人工审核</a>";
				showErrorInfo(errorMessage,"showErrorUsernameDiv");
				return;
		   	}else if(errorCode == "lockedBySelf"){
		   		//自助锁定
		   		var unlockUrl = asc_prefix_domain + "unlockacct/checklist.do?ticket="+data.snapshotId;
				errorMessage = "您的账号已申请锁定，暂时无法登录<br/>您可以：<a target='_blank' href='" + unlockUrl + "'>解锁账号</a>";
				showErrorInfo(errorMessage);
				return;
		   	}else if(errorCode == "IllegalArgument"){
		   		//参数错误
				errorMessage = "请重新登录";
				showErrorInfo(errorMessage);
				return;
		   	}else if(errorCode == "displayLoginPage"){
		   		//跳转到登录页，无需报错提示
				return;
		   	}else if(errorCode!=""){
		   		errorMessage = errorMessage!="" ? errorMessage : "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage);
				return;
			}
		}
		
		
		//提交登录
		function prepareLoginSubmit(){
			//如果有图片验证，则需要先校验图片验证码，然后进行提交操作
			hideErrorInfo();
			if(needVerifyCodeVal){
				if(login.userLoginType == "smsLogin"){
					if (!checkSmsLoginPhone() || !checkValidateCodeOnSubmit() || !checkSmsLoginSmsCode()) {
						return false;
					}
					ajaxSmsLogonSubmit();
					//if(checkValidateCodeOnSubmit()){
					//	ajaxCheckVerifyCodeOrSubmit(true);
					//}
				}else{
					if(!checkNormalLogonIdOnSubmit() || !checkNormalLogonPwdOnSubmit()) {
						return;
					}
					//如果出现图片验证码则在提交前应该对图片验证码进行校验
					if(checkValidateCodeOnSubmit()){
						ajaxCheckVerifyCodeOrSubmit(true);
					}
				}
			}else{
				if(login.userLoginType == "smsLogin"){
					ajaxSmsLogonSubmit();
				}else{
					loginSubmit();
				}
			}
			
		}
		//提交登录
		function loginSubmit(){
			hideErrorInfo();
			if(!checkNormalLogonIdOnSubmit() || !checkNormalLogonPwdOnSubmit()) {
			    return;
		  	}else{
		  	   //当含有snapshotId表示要进行主站的跳转登陆：跳转前要进行统一的编码
		  	  	if(goUrl.indexOf("snapshotId")!=-1){
		  	  	    submitSnaphotForm(); 
		  	  	}else{
		  	  	    ajaxLogonSubmit();
		  	  	}
		  	}
		}
		//带有snapshopid的提交
		function submitSnaphotForm(){
			var username = $('#userName').val().Trim();
			var pwd  = $('#password').val().Trim();
			var loginTheme =  "b2c";
			var highRiskRedirectFlag = true;
			var service        = "https://order.suning.com/auth?targetUrl=https%3A%2F%2Forder.suning.com%2Forder%2ForderList.do";
			var oauth_redirect = "";
			var trust_redirect = "";
			//var rememberMeVal = document.getElementById("rememberMe").checked;
			
			$('#username1').val(username);
			$('#password1').val(pwd);
			$('#loginTheme1').val(loginTheme);
			$('#highRiskRedirectFlag1').val(highRiskRedirectFlag);
			$('#service1').val(service);
			$('#oauth_redirect1').val(oauth_redirect);
			$('#trust_redirect1').val(trust_redirect);
			//$('#rememberMeVal').val(rememberMeVal);
			//自动登录
			$('#rememberMeVal').val(true);
			if(needVerifyCodeVal){
			  var uuid = "09e90008-d218-4b38-b28e-4357dd17d5e6";
			  var verifyCode = $(".validate:visible").val();
				$('#uuid1').val(uuid);
				$('#validate1').val(verifyCode);
			}
			$('#snapshotForm').submit();
		}
		
		//采用ajax方式进行认证请求
		function ajaxLogonSubmit(){
			var username = $('#userName').val().Trim();
			var pwd  = $('#password').val().Trim();
			try {
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey(loginPBK);
				var pwd2 = encrypt.encrypt(pwd);
				pwd = "";
		    } catch (exception) {
		        pwd2 = "";
		    }
			var verifyCode = $(".validate:visible").val();
			//var rememberMeVal = document.getElementById("rememberMe").checked;
			//默认自动登录
			var rememberMeVal = true;
			var param = {
					jsonViewType:true,
					username : username,
					password : pwd,
					password2 : pwd2,
					loginTheme:"b2c",
					service:"https://order.suning.com/auth?targetUrl=https%3A%2F%2Forder.suning.com%2Forder%2ForderList.do",
					//oauth_redirect:"",
					//trust_redirect:"",
					rememberMe: rememberMeVal,
					client : "app",
					sceneId: "logonImg"
			};
			if(needVerifyCodeVal){
				if(isUseSlideVerifycode){
					param.slideVerifyCode = siller.queryToken();
		    	}else{
					param.verifyCode = verifyCode;
					param.uuid = "09e90008-d218-4b38-b28e-4357dd17d5e6";
		    	}
			}
			//登陆中
			showSubmitRunningButton();
			$.ajax( {
				type : 'POST',
				url  : 'login',
				async: false,
				data : param,
				dataType : 'json',
				success : function(data) {
					if(login.isNotEmpty(data) && login.isNotEmpty(data.success)&&data.success){
						//进行成功的跳转
						window.location = goUrl;
						window.event.returnValue = false;
					}else{
						//重新显示图片验证码
						fun_getVcode();
						//是否显示图片验证码
						checkShowImageCode();
						//设置焦点
						setInitLogonIdinfo();
						showServerErrorMsg(data);
						//重置登录按钮
						showSubmitButton();
					}
				},
				error : function(data) {
					var errorMessage = "不好意思，系统繁忙，请稍后再试！";
					showErrorInfo(errorMessage);
					//重置登录按钮
					showSubmitButton();
					//设置焦点
					setInitLogonIdinfo();
				}
			});
		}
		
		function checkSmsLoginPhone(){
			var phoneNumber = $('#phoneNumber').val().Trim();
			var smsCode  = $('#smsCode').val().Trim();
			
			if (phoneNumber == null || phoneNumber == "") {
				showErrorInfo("请输入手机号！","showErrorPhoneNumberDiv");
				return false;
			}
			if(!login.isMobile(phoneNumber)){
				showErrorInfo("格式不正确，请您输入正确的手机号！","showErrorPhoneNumberDiv");
				return false;
			}
			hideErrorInfo();
			return true;
		}
		function checkSmsLoginSmsCode(){
			var smsCode  = $('#smsCode').val().Trim();
			if (smsCode == null || smsCode == "") {
				showErrorInfo("请输入手机验证码！","showErrorSmsCodeDiv");
				return false;
			}
			return true;
		}
		
		//校验验证码并发送
		function ajaxVerifyCodeAndSendSmsCode(){
			var phoneNumber = $('#phoneNumber').val().Trim();
			
			if (!checkSmsLoginPhone()) {
				return false;
			}
			if(needVerifyCodeVal){
				if(isUseSlideVerifycode){
					if (siller.status == 0 || null == slideVerifycode || slideVerifycode == "" ) {
						showErrorInfo("为了你的账户安全，请拖动滑块完成验证。");
						return false;
					}else{
						//进行提交操作
						ajaxSmsLogonSendCode();
					}
				}else{
					//用户输入的验证码code
					var code = $(".validate:visible").val();
					//请求时所传参数
					var param = {
							code : code,
							uuid : "09e90008-d218-4b38-b28e-4357dd17d5e6",
							delFlag : 0
					};
					$.ajax({
						//请求类型
						type : 'POST',
						//发送验证请求的url
						url : "https://vcs.suning.com/vcs/validate_jsonp.htm",
						//请求时所传参数
						data : param,
						//返回数据类型
						dataType : 'jsonp',
						//回调函数方法名
						jsonp : 'callback',
						//请求成功后的回调函数
						success : function(data) {
							//显示验证结果
							if(data[0].result == 'true'){
								hideErrorInfo();
								showVerifyCodeOK();
								//进行提交操作
								ajaxSmsLogonSendCode();
							}else{
								gLastImgValCodeResult = false;
								// 当输入满4位时，鼠标未移出就开始校验图片验证码正确性。若连续输入错误3 次，系统自动刷新图片验证码。
								fun_getVcode();
								showErrorInfo("验证码不正确，请重新输入。","showErrorVerifyCodeDiv");
							}
						}
					});
				}
			}else{
				//进行提交操作
				ajaxSmsLogonSendCode();
			}
		}
		
		//手机验证码登录发送验证码
		function ajaxSmsLogonSendCode(){
			hideErrorInfo();
			var phoneNumber = $('#phoneNumber').val().Trim();
			
			if (!checkSmsLoginPhone()) {
				return false;
			}
			
			var verifyCode = $(".validate:visible").val();
			//var rememberMeVal = document.getElementById("rememberMe").checked;
			//默认自动登录
			var rememberMeVal = true;
			var param = {
					phoneNumber : phoneNumber,
					rememberMe: rememberMeVal,
					type : 0,
					sceneId: "logonImg",
					targetUrl: goUrl
			};
			if(needVerifyCodeVal){
				if(isUseSlideVerifycode){
					param.sillerCode = siller.queryToken();
					param.uuid = "sillerVerifyCode";
		    	}else{
					param.imgCode = verifyCode;
					param.uuid = "09e90008-d218-4b38-b28e-4357dd17d5e6";
		    	}
			}
			$.ajax({
				type : 'GET',
				url  : srs_prefix_domain + 'smsLogin/sendSms.do',
				data : param,
				dataType : 'jsonp',
		        jsonp:'callback', 
		        timeout:5000,
		        jsonpCallback:"smsLoginSendSms",
				success : function(data) {
					if(login.isNotEmpty(data) && (data.code == 'SLR_SUC_0001')){//发送成功
						//进行成功的处理
						login.sendSmsChangeStatus(data);
					}else{
						//重新显示图片验证码
						fun_getVcode();
						//是否显示图片验证码
						checkShowImageCode();
						showSmsLoginServerErrorMsg(data);
					}
				},
				error : function(data) {
					var errorMessage = "不好意思，系统繁忙，请稍后再试！";
					showErrorInfo(errorMessage);
				}
			});
		}
		//手机验证码登录发送语音验证码
		function ajaxVerifyCodeAndSendYYCode(){
			hideErrorInfo();
			var phoneNumber = $('#phoneNumber').val().Trim();
			
			if (!checkSmsLoginPhone()) {
				return false;
			}
			
			var verifyCode = $(".validate:visible").val();
			//var rememberMeVal = document.getElementById("rememberMe").checked;
			//默认自动登录
			var rememberMeVal = true;
			var param = {
					phoneNumber : phoneNumber,
					rememberMe: rememberMeVal,
					type : 0,
					sceneId: "logonImg",
					targetUrl: goUrl
			};
			if(needVerifyCodeVal){
				if(isUseSlideVerifycode){
					param.sillerCode = siller.queryToken();
					param.uuid = "sillerVerifyCode";
		    	}else{
					param.imgCode = verifyCode;
					param.uuid = "09e90008-d218-4b38-b28e-4357dd17d5e6";
		    	}
			}
			$.ajax({
				type : 'GET',
				url  : srs_prefix_domain + 'smsLogin/sendSmsYY.do',
				data : param,
				dataType : 'jsonp',
		        jsonp:'callback', 
		        timeout:5000,
		        jsonpCallback:"smsLoginSendSmsYy",
				success : function(data) {
					if(login.isNotEmpty(data) && (data.code == 'SLR_SUC_0001')){//发送成功
						//进行成功的处理
						login.sendSmsYyChangeStatus(data);
					}else{
						//重新显示图片验证码
						fun_getVcode();
						//是否显示图片验证码
						checkShowImageCode();
						showSmsLoginServerErrorMsg(data);
					}
				},
				error : function(data) {
					var errorMessage = "不好意思，系统繁忙，请稍后再试！";
					showErrorInfo(errorMessage);
				}
			});
		}
		
		//手机验证码登录采用ajax方式进行认证请求
		function ajaxSmsLogonSubmit(){
			var phoneNumber = $('#phoneNumber').val().Trim();
			var smsCode  = $('#smsCode').val().Trim();
			
			if (!checkSmsLoginPhone() || !checkSmsLoginSmsCode()) {
				return false;
			}
			
			var verifyCode = $(".validate:visible").val();
			//document.getElementById("rememberMe").checked;
			//默认自动登录
			var rememberMeVal = true;
			var param = {
					phoneNumber : phoneNumber,
					smsCode:smsCode,
					rememberMe: rememberMeVal,
					type : 0,
					sceneId: "logonImg",
					targetUrl: goUrl
			};
			if(needVerifyCodeVal){
				if(isUseSlideVerifycode){
					param.sillerCode = siller.queryToken();
					param.uuid = "sillerVerifyCode";
		    	}else{
					param.imgCode = verifyCode;
					param.uuid = "09e90008-d218-4b38-b28e-4357dd17d5e6";
		    	}
			}
			//登陆中
			showSubmitRunningButton();
			$.ajax({
				type : 'GET',
				url  : srs_prefix_domain + 'smsLogin/checkLoginAccount.do',
				data : param,
				dataType : 'jsonp',
		        jsonp:'callback', 
		        timeout:5000,
		        jsonpCallback:"smsLoginCheckAccount",
				success : function(data) {
					if(login.isNotEmpty(data) && (data.code == 'SLR_ERR_0005' || data.code == 'SLR_ERR_0006')){//验证通过
						//进行成功的跳转
						window.location = srs_prefix_domain + 'smsLogin/checkLoginToken.do?type=0&rememberMe=' + rememberMeVal + '&acessToken=' + data.acessToken;
						window.event.returnValue = false;
					}else{
						//重新显示图片验证码
						fun_getVcode();
						//是否显示图片验证码
						checkShowImageCode();
						//设置焦点
						setInitLogonIdinfo();
						showSmsLoginServerErrorMsg(data);
						//重置登录按钮
						showSubmitButton();
					}
				},
				error : function(data) {
					var errorMessage = "不好意思，系统繁忙，请稍后再试！";
					showErrorInfo(errorMessage);
					//重置登录按钮
					showSubmitButton();
					//设置焦点
					setInitLogonIdinfo();
				}
			});
		}
		
		//显示服务器返回的错误信息
		function showSmsLoginServerErrorMsg(data) {
			if(isUseSlideVerifycode){
				slideVerifycode = "";
				$('#siller2').empty();
				login.siller('siller2');
			}
			var errorCode= "";
			if(login.isNotEmpty(data) && login.isNotEmpty(data.code)){
				errorCode = data.code;
			}

			//srs中的错误提示信息
			if(errorCode=="SLR_ERR_0001"){
				errorMessage = "请输入手机号码";
				showErrorInfo(errorMessage);
				return;
			}else if(errorCode=="SLR_ERR_0002"){
				if(isUseSlideVerifycode){
					errorMessage = "为了你的账户安全，请重新拖动滑块完成验证";
					showErrorInfo(errorMessage,"showErrorPhoneNumberDiv");
				}else{
					errorMessage = "请输入图片验证码！";
					showErrorInfo(errorMessage,"showErrorVerifyCodeDiv");
				}
				return;
			}else if(errorCode=="SLR_ERR_0003"){
				if(isUseSlideVerifycode){
					errorMessage = "为了你的账户安全，请重新拖动滑块完成验证";
					showErrorInfo(errorMessage,"showErrorPhoneNumberDiv");
				}else{
					errorMessage = "图片验证码错误，请重新输入！";
					sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
					showErrorInfo(errorMessage,"showErrorVerifyCodeDiv");
				}
				return;
			}else if(errorCode=="SLR_ERR_0004"){
				errorMessage = "手机验证码错误或已失效，请重新输入 ";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode=="SLR_ERR_0010"){
				errorMessage = "您今日获取语音验证码的次数已达上限，您可以继续尝试获取短信验证码";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode=="SLR_ERR_0011"){
				errorMessage = "发送验证码过于频繁，请您稍后再试";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode=="SLR_ERR_0012"){
				errorMessage = "您当日累计获取短信验证码已达上限，请您次日再试";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode=="SLR_ERR_0013"){
				errorMessage = "该时间段不支持使用语音验证码，您可以继续尝试获取短信验证码";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else if(errorCode=="SLR_ERR_9999"){
				errorMessage = "不好意思，系统繁忙，请稍后再试！";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}else{
				errorMessage = "不好意思，系统异常，请稍后再试！";
				showErrorInfo(errorMessage,"showErrorSmsCodeDiv");
				sendPageErrorMessage("login.do","1&&"+errorCode+"&&"+errorMessage+"&&srs");
				return;
			}
		}


        function ccasd(t) {
        	slideVerifycode = t;
        	try{
            	var sillerObj = $(".sillerVerifyCode:visible")
            	if(sillerObj && sillerObj.length>0){
            		if(siller.status == 1){
                    	sa.click.sendDatasIndex(sillerObj[0]);
            		}
            	}
			}catch(e){}
        }
		/* PCLOG===错误信息采集===*/    
	function sendPageErrorMessage(urlName,msg){
		var msgArr = msg.split("&&");
		var param = {
				type_name : urlName,//接口名称
				error_type : msgArr[0],//错误类型：0系统异常、1业务异常、2页面检查
				error_code : msgArr[1],//报错代码： 不仅仅是404之类的
				error_detail : msgArr[2],//报错详情：提示详情描述
				
				member_id : login.getCookie("custno"),//会员编码
				member_level :login.getCookie("custLevel"),//会员等级
				region : login.getCookie("SN_CITY"),//区域
				
				bid : msgArr[3] //产品线标识
				};
			try{
				sa.openAPI=sa.openAPI||{};
				sa.initTrackerConfig();
				sa.openAPI.sendMsgV2(param);
				//sa.openAPI.sendMessage(urlName,msg);
				//alert("success-msg-->"+param.region);
				//alert("success-msg-->"+param.error_code);
			}catch(e){
				//alert(e);
			}	
	}
		
	    $(function(){
	    	setAllDomain();
	    	
	    	var postData = {};
	    	postData.errorCode = '';
	    	postData.snapshotId = '';
	    	
	    	//初始化默认隐藏所有的提示
	    	showScanhide();
	    	//检测华夏基金等信任登录的cookies信息
	    	checkTrustCookie();
	    	//获取成功之后的跳转路径
	    	getGoUrl();
	    	//是否显示图片验证码
	    	checkShowImageCode();
	    	//初始化图片验证码
	    	fun_getVcode();
	    	//绑定各种输入框的函数
	    	checkInputEvent();
	    	//显示服务端错误信息
	    	showServerErrorMsg(postData);
	    	//设置是否显示图片验证码
	    	initShowVerifyCode();
	    	setLogonStylebyImage();
	    });
    </script>
	
	<script type="text/javascript">
		var sa = sa || {};
		sa.bid = "106";
	</script>
    <script type="text/javascript" src="js/2326c85f5bda46f48f78c4e803ae75da.js"></script>
	<script type="text/javascript">
		/**
		 * 更新记录：
		 * 1.增加对采集元素包裹文字中包含的“|”进行处理（2014/1/21）
		 */
		
		/**
		 * 第一步：在页面引入基础代码
		 * 埋点前请检查页面是否已经埋入此代码，避免重复引入代码
		 * 此部分代码不允许修改，若私自修改源码导致出现的问题，后果自负
		 */
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 9;5(!9)9={};5(!9.A)9.A={};(4(){2 N=/^\\w*?.k.h$/,15=a.y.1r,K=(("1g:"==a.y.K)?"1g://":"1v://"),S=U(),7="|",R=j.16==j.1w?y.P:j.16.y.P,18=p(1f(R));4 E(f){2 6=f.6?p(f.6):"6 L",l=f.l?p(f.l):"l L",c=o 1s(),1m=(C(f,c),c)?p(c.1A("").O(/\\s|\\|/1E,"")):"1y L",g=(g=a.1l("1x"))?g.r:"",1o=l+7+6+7+1m,q=(q=a.1l("1u"))?q.r:"",17=K+S+"/1t.1z",F=V(),I="I";1h(I,F,\'/\',"","");2 1j=W("1D"),T=1C Y=="1B"?Y.12:"1F 1p 1q 12",1n=F+7+1j+7+1o+7+18,14=17+"?"+"1M="+1n+"&"+"20="+q+"&"+"g="+g+"&"+"22="+T;13(14)}4 V(){2 1e=o B(),m=10.1Y(21*10.1Z()),X=1e.D().1W().1X(m);d X}4 W(6){2 G=a.1a.Z("; ");1b(2 i=0;i<G.1k;i++){2 H=G[i].Z("=");5(H[0]==6)d 23(H[1])}}4 13(Q){2 n="28"+(o B()).D();2 i=j[n]=o 27();i.26=(i.24=4(){j[n]=x});i.1G=Q+"&25="+n;i=x}4 U(){5(N.1U(15)){d"A.k.1i/9"}z{d"1L.k.1i/9"}}4 19(){d a.e}4 1h(6,r,t,u,e){2 b=6+"="+1V(r);5(u!=""){2 v=o B();v.1K(v.D()+u);b+=";u="+v.1J()}5(t!=""){b+=";t="+t}2 J=19();5(J.M(".k.h")!=-1){b+=";e=.k.h"}z 5(J.M(".1c.h")!=-1){b+=";e=.1c.h"}z{b+=";e="+e}a.1a=b}4 1f(8){5(8.1k>1H){8=8.1I(0,1N)}1O(8.M(7)!=-1){8=8.O(7,"--")}d 8}4 C(n,c){5(n.1d==3){c.1T(n.1S)}z 5(n.1d==1){1b(2 m=n.1R;m!=x;m=m.1P){C(m,c)}}}4 p(s){d s!=x?1Q(s):""}2 11=9.A;11.E=E})();',62,133,'||var||function|if|name|_tag|urlOrTitle|sa|document|str|_strings|return|domain|data|_type|com||window|suning|id|||new|_encode|_errorCode|value||path|expires|date||null|location|else|click|Date|_getString|getTime|sendDatasIndex|oId|arrStr|temp|_snck|dm|protocol|undefined|indexOf|sn_prd_reg|replace|href|strURL|_toUrl|server|_cityId|getServer|getOnlyIdIndex|getCookieIndex|onlyId|sn|split|Math|_click|cityId|httpGifSendIndex|url|hostName|top|clickUrl|_shortToUrl|_getDomain|cookie|for|cnsuning|nodeType|now|_cutUrlToShort|https|_addCookie4Index|cn|pvId|length|getElementById|_text|cDatas|Datas|not|get|hostname|Array|ajaxClick|errorCode|http|self|resourceType|text|gif|join|object|typeof|_snmp|ig|can|src|301|substring|toGMTString|setTime|clicksit|_snmk|300|while|nextSibling|encodeURIComponent|firstChild|nodeValue|push|test|escape|toString|concat|round|random|_snme|100000|_cId|unescape|onerror|iId|onload|Image|log_'.split('|'),0,{}))
		
		/**
		 * 第二步：为元素绑定click事件
		 * 技术支持：此方案需要jQuery支持，使用此方案前请确认使用的jquery版本对live方法的支持性
		 * 功能：为点击对象添加点击事件处理函数
		 * 示例解释：下面的示例中是为标签的name以test_dac_index_开头的元素埋点，实际生产中的name属性命名约束请联系贺婷芳(12061488)确认；未经确认不得埋点，否则引起冲突后果自负
		 * 示例修改：在具体埋点过程中请开发人员根据具体的name修改a[name^=\*需要埋点的name*\]或者input[name^=\*需要埋点的name*\]
		 * 命名技术规范：标签的name,id属性不能含有"|"
		 */
		
		 $(document).ready(function(){
			//登录页面发送数据到SA
			$("a[name*=Logon_index_],input[name*=Logon_index_],span[name*=Logon_index_],img[name*=Logon_index_],div[name*=Logon_index_]").live("click",function(){
				//sendDatasMember(this);
				sa.click.sendDatasIndex(this);
			});
		});
	</script>
	
	<script type="text/javascript" src="js/porto.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			porto.init({ 
				partnerCode:'none', 
				appName:'passport', 
				referenceId:'123', 
				sessionId:'123',
				serviceUrl:"https://fp.suning.com/bennu-collector/fp/porto.json" 
			}); 
		});
	</script>
<script type="text/javascript" src="js/fp.js"></script>
<script type="text/javascript">
                $(document).ready(function(){
			_dfp.init({
			    appCode : "qEmt9X4YmoV2Vye8", // 必填
			    env : "prd",     // 必填
			    success : function (token) {
			    	console.log("the token is: ", token);
			    	setCookie("dfpToken",token);
			    },
			    error : function (e) {
			        console.log("occur error: ", e);
			    }
			});
		});
		
		function setCookie(name,value)
		{
		var exp = new Date();
		exp.setTime(exp.getTime() + 2*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + 
                    ";domain=suning.com;path=/";
		}
	</script>
</body>
</html>