<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>月光宝盒登录页</title>
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
            <h3>欢迎登陆</h3>
            <!-- onsubmit="return false;" -->
                <form action="{{ url('home/dologin') }}"  method="post" >
                    {{ csrf_field() }}
                    <input name="phone" type="text" class="kuang_txt phone" placeholder="手机号">
                    <input name="password" type="password" class="kuang_txt possword" placeholder="请输入密码">
                    <input name="code" type="text" class="kuang_txt yanzm" placeholder="请输入验证码">
                    <div style="height: 86px;width: 86%;margin-top: 12px;">
                        <p style="width:90px; float:left; color:#666;margin-top:31px;font-size:10px;" font-size:10px;>确认你不是机器人</p>
                        <img src="{{ url('/home/yzm') }}" onclick="this.src='{{ URL('/home/yzm') }}?'+Math.random()" 
                        alt="加载错误" style="width:180px; height:60px; float:right;">
                    </div>
                    <div>
                        <input name="" type="checkbox" value=""><span>已阅读并同意<a href="#" target="_blank"><span class="lan">《使用协议》</span></a></span>
                    </div>
                    <input type="submit" class="btn_zhuce" value="登录">
                </form>
            </div>
            <div class="bj_right">
                <p>使用邮箱登录</p>
                    <a href="#" class="zhuce_qq">Q Q</a>
                    <a href="#" class="zhuce_wb">微 博</a>
                    <a href="#" class="zhuce_wx">手 机</a>
                <p>还没有账号？<a href="{{ url('home/phonereg') }}">立即注册</a></p>
                <p>忘记密码？<a href="{{ url('home/backpass') }}">立即找回密码</a></p>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
setTimeout(function(){document.getElementById("test").style.display="none";},2000);
</script>
</html>