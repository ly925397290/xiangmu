<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>月光邮箱注册页</title>
	<meta name="keywords" content="月光宝盒">
	<meta name="content" content="月光宝盒">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <link type="text/css" rel="stylesheet" href="{{ url('home/register/css/login.css') }}">
    <script type="text/javascript" src="{{ url('home/register/js/jquery.min.js') }}"></script>
    <style type="text/css">
        .a1{
            float:right; margin:12px 43px 0px 0px;
        }
        .btn_yz{
            width: 120px;
            height: 33px;
            background: #37b5f9;
            font-size: 14px;
            line-height: 33px;
            text-align: center;
            border: 0px;
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
        }
    </style>
</head>
<body class="login_bj" >

<div class="zhuce_body">
    <div class="zhuce_kong">
    	<div class="zc">
        	<div class="bj_bai">
            <h3>欢迎注册</h3>
       	  	  <form action="" method="get">
                <input name="email" type="email" class="kuang_txt email" placeholder="邮箱账号">
                <input name="" type="text" class="kuang_txt possword" placeholder="密码">
                <input name="" type="text" class="kuang_txt possword" placeholder="确认密码"
                <a class="a1" onclick="javascript:senCode();" ><button class="btn_yz">获取激活邮件</button></a>
                <div>
               		<input name="" type="checkbox" value=""><span>已阅读并同意<a href="#" target="_blank"><span class="lan">《使用协议》</span></a></span>
                </div>
                <input name="注册" type="button" class="btn_zhuce" value="注册">
                
                </form>
            </div>
        	<div class="bj_right">
                <p>使用邮箱注册</p>
                    <a href="#" class="zhuce_qq">QQ注册</a>
                    <a href="#" class="zhuce_wb">微博注册</a>
                    <a href="{{ url('/home/phonereg') }}" class="zhuce_wx">手机注册</a>
                <p>已有账号？<a href="#">立即登录</a></p>
            </div>
        </div>
        <P>月光宝盒.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎使用##二手交易平台</P>
    </div>

</div>
</body>
</html>