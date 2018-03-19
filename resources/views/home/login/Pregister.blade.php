<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>月光手机注册页</title>
	<meta name="keywords" content="月光宝盒">
	<meta name="content" content="月光宝盒">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <link type="text/css" rel="stylesheet" href="{{ asset('home/register/css/login.css') }}">
    <script type="text/javascript" src="{{ asset('admin/layui/jquery-3.3.1.min.js') }}"></script>
    <script src="{{asset('admin/layui/layui.js')}}" charset="utf-8"></script>
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
            <h3>欢迎注册</h3>
            <!-- onsubmit="return false;" -->
                <form action="{{ url('home/update') }}"  method="post" >
                    {{ csrf_field() }}
                    <input name="phone" type="text" class="kuang_txt phone" placeholder="手机号">
                    <input name="password" type="password" class="kuang_txt possword" placeholder="密码">
                    <input name="repass" type="password" class="kuang_txt possword" placeholder="确认密码">
                    <input name="code" type="text" class="kuang_txt yanzm" placeholder="手机验证码">
                    <b onclick="sendCode();" id="btn_block">获取验证码</b>
                    <b id="timer">30</b>
                    <div>
                   		<input name="" type="checkbox" value=""><span>已阅读并同意<a href="#" target="_blank"><span class="lan">《使用协议》</span></a></span>
                    </div>
                    <input type="submit" class="btn_zhuce" value="注册">
                </form>
            </div>
        	<div class="bj_right">
                <p>使用邮箱注册</p>
                    <a href="#" class="zhuce_qq">Q Q</a>
                    <a href="#" class="zhuce_wb">微 博</a>
                    <a href="#" class="zhuce_wx">手 机</a>
                <p>已有账号？<a href="{{ url('/home/login') }}">立即登录</a></p>
                <p>忘记密码？<a href="{{ url('/home/backpass') }}">立即找回密码</a></p>
            </div>
        </div>
        <P>月光宝盒.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎使用##二手交易平台</P>
    </div>
</div>
<script type="text/javascript">

setTimeout(function(){document.getElementById("test").style.display="none";},2000);
    function sendCode(){
        // 获取用户手机号

        var phone = $("input[name='phone']").val();

        $.get('sendcode',{'phone':phone},function(data){

            var time = 29;
            //创建定时器
            var name = setInterval(
                function(){
                    var timer = document.getElementById("timer");   // 获取id  timer元素的数据
                    var block = document.getElementById("btn_block");
                    if(time > 0){                                   // 如果秒数大于0
                        block.style.display="none";           
                        timer.style.display="block";           
                        timer.innerHTML = time-- ;                  // 将秒数写入到页面并将秒数减一
                    }else{
                        block.style.display="block"; 
                        timer.style.display="none"; 
                        clearInterval(name);                        // 清除定时任务 
                    }
                },
                //每秒执行一次
                1000
            );
            // console.log(typeof(data));
            // var testJson = eval("(" + data + ")");
            // console.log(testJson);
        });
    };
</script>
</body>
</html>