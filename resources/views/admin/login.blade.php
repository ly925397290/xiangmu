<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Creative - Bootstrap 3 Responsive Admin Template">
    <meta name="author" content="GeeksLabs">
    <meta name="keyword" content="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal">
    <link rel="shortcut icon" href="{{ asset('img/favicon.png') }}">

    <title>月光管理登录页</title>

    <!-- Bootstrap CSS -->    
    <link href="shologin/tip-yellowsimple/bootstrap.min.css" rel="stylesheet">
    <!-- bootstrap theme -->
    <link href="shologin/tip-yellowsimple/bootstrap-theme.css" rel="stylesheet">
    <!--external css-->
    <!-- font icon -->
    <link href="shologin/tip-yellowsimple/elegant-icons-style.css" rel="stylesheet" />
    <link href="shologin/tip-yellowsimple/font-awesome.css" rel="stylesheet" />
    <!-- Custom styles -->
    <link href="shologin/tip-yellowsimple/style.css" rel="stylesheet">
    <link href="shologin/tip-yellowsimple/style-responsive.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="shologin/tip-yellowsimple/tip-yellowsimple.css" />
    <!-- Custom js -->
    <script src="http://www.jq22.com/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="shologin/jquery.poshytip.js"></script>
    <script type='text/javascript' src='shologin/jq.validate.js'></script>
</head>
  <body class="login-img3-body">
    @if (count($errors) > 0)
    <div class="alert alert-danger" id="error">
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
    <div class="container">

      <form method="post" class="login-form" action="{{ url('admin/dologin') }}">    
      {{ csrf_field() }}    
        <div class="login-wrap">
            <p class="login-img"><i class="icon_lock_alt"></i></p>

            <div class="input-group">
              <span class="input-group-addon"><i class="icon_profile"></i></span>
              <input type="text" name="username" value="{{ old('username') }}" class="form-control" placeholder="请输入用户名" valType="required" msg="<font color=red>*</font>账号不能为空">
                
            </div>
            <div class="input-group">
                <span class="input-group-addon"><i class="icon_key_alt"></i></span>
                <input type="password" name="password" class="form-control" placeholder="请输入密码" valType="required" msg="<font color=red>*</font>密码不能为空">

            </div>
                
            <div class="input-group">
                <img src="{{ url('/admin/yzm') }}" onclick="this.src='{{ URL('/admin/yzm') }}?'+Math.random()" alt="加载错误" style="width:150px; height:50px; float:left;">
                <input type="text" name="code" class="form-control" placeholder="请输入验证码" style="width:150px; margin:6px 0px 0px 8px;" valType="required" msg="<font color=red>*</font>请输入验证码">

            </div>
            <label class="checkbox">
                <input type="checkbox" value="remember-me"> 同意
                <span class="pull-right"> <a href="#"> 安全协议</a></span>
            </label>
            <button class="btn btn-primary btn-lg btn-block" type="submit">登录</button>
        </div>
      </form>

    </div>

<script type="text/script">
    var error = document.getElementById("error");
    .error onclick function(){
        style.display="none"
    }
</script>
  </body>
</html>
