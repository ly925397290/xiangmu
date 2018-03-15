<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>月光手机注册页</title>
	<meta name="keywords" content="月光宝盒">
	<meta name="content" content="月光宝盒">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <link type="text/css" rel="stylesheet" href="{{ url('home/register/css/login.css') }}">
    <script type="text/javascript" src="{{ url('lib/layui/jquery-3.3.1.min.js') }}"></script>
    <script src="{{url('lib/layui/layui.js')}}" charset="utf-8"></script>
</head>
<body class="login_bj" >
@if (count($errors) > 0)
    <div id="test" class="alert-danger">
        <ul>
            @if(is_object($errors))
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            @else
                <li>{{ $errors }}</li>
            @endif
        </ul>
    </div>
@endif
<div class="zhuce_body">

    <div class="zhuce_kong">
    	<div class="zc">
        	<div class="bj_bai">   
            <h3>修改密码</h3>
            <!-- onsubmit="return false;" -->
                <form action="{{ url('home/domodify') }}"  method="post" >
                    {{ csrf_field() }}
                    <input name="password" type="password" class="kuang_txt possword" placeholder="密码">
                    <input name="repass" type="password" class="kuang_txt possword" placeholder="确认密码">
                    <div>
                   		<input name="" type="checkbox" value=""><span>已阅读并同意<a href="#" target="_blank"><span class="lan">《使用协议》</span></a></span>
                    </div>
                    <input type="submit" class="btn_zhuce" value="修改">
                </form>
            </div>
        	<div class="bj_right">
                <p>使用邮箱注册</p>
                    <a href="#" class="zhuce_qq">Q Q</a>
                    <a href="#" class="zhuce_wb">微 博</a>
                    <a href="#" class="zhuce_wx">手 机</a>
                <p>已有账号？<a href="{{ url('/home/login') }}">立即登录</a></p>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
setTimeout(function(){document.getElementById("test").style.display="none";},2000);
</script>
</body>
</html>