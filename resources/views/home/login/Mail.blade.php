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
    <!-- <link type="text/css" rel="stylesheet" href="{{ url('home/register/bootstrap-3.3.7-dist/css/bootstrap.min.css') }}"> -->
    <!-- // <script type="text/javascript" src="{{ url('home/register/bootstrap-3.3.7-dist/js/bootstrap.min.js') }}"></script> -->
    <script type="text/javascript" src="{{ url('lib/layui/jquery-3.3.1.min.js') }}"></script>
    <script src="{{url('lib/layui/layui.js')}}" charset="utf-8"></script>
    <style type="text/css">
        #yz{
            margin-top: 8px;
            margin-left: 10px;
            display:none;
            font-color:#666;
            width:140px;
            height:30px;
        }
        #btn_block{
            float:right; margin:12px 43px 0px 0px;
            text-decoration:none;
            cursor:default;
            width: 100px;
            height: 30px;
            background: #37b5f9;
            font-size: 14px;
            line-height: 33px;
            text-align: center;
            border: 0px;
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
            display:block;
            
        }
        #timer{
            float:right; margin:12px 43px 0px 0px;
            text-decoration:none;
            cursor:default;
            width: 100px;
            height: 30px;
            background: #555555;
            font-size: 14px;
            line-height: 33px;
            text-align: center;
            border: 0px;
            color: #fff;
            border-radius: 3px;
            cursor:default;
            display:none;
            
        }
        a:visited{text-decoration: none;}
        a:hover {text-decoration: none;}
        a:active{text-decoration:none;}
    </style>
</head>
<body class="login_bj" >

<div class="zhuce_body">
    <div class="zhuce_kong">
    	<div class="zc">
        	<div class="bj_bai">   
            <h3>欢迎注册</h3>
                <form action="phome/sendCode" onsubmit="return false;" method="post" >
                    {{ csrf_field() }}
                    <input name="email" type="email" class="kuang_txt enail" placeholder="手机号">
                    <input name="pass" type="password" class="kuang_txt possword" placeholder="密码">
                    <input name="repass" type="password" class="kuang_txt possword" placeholder="确认密码">
                    <input name="" type="text" class="kuang_txt yanzm" placeholder="手机验证码">
                    <button onclick="javascript:sendCode();" id="btn_block">获取验证码</button>
                    <button  id="timer">30</button>
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
                    <a href="{{ url('/home/emailreg') }}" class="zhuce_wx">邮箱注册</a>
                <p>已有账号？<a href="{{ url('/home/login') }}">立即登录</a></p>
            </div>
        </div>
    </div>
<script type="text/javascript">
    function sendCode(){
        // 获取用户手机号
        var phone = $("input[name='phone']").val();

        $.get('sendcode',{'phone':phone},function(data){

            var time = 29;
            //创建定时器
            var name = setInterval(
                function(){
                    //获取id  timer元素的数据
                    var timer = document.getElementById("timer");
                    var block = document.getElementById("btn_block");
                    var none = document.getElementById("timer");
                    //如果秒数大于0
                    if(time > 0){
                        //将秒数写入到页面并将秒数减一
                        // btn.style.cursor="default";
                        // btn.style.opacity="0.6";
                        block.style.display="none";           
                        none.style.display="block";           
                        timer.innerHTML = time-- ;
                    }else{
                        // //清除定时任务 
                        // btn.style.opacity="1";
                        // btn.style.cursor="pointer";
                        block.style.display="block"; 
                        none.style.display="none"; 
                        clearInterval(name);
                    }
                },
                //每秒执行一次
                1000
            );
            // var res = JSON.parse(data);
            
            // var message = (res.message);
            // console.log(message);
        });
    };
</script>
</div>
</body>
</html>