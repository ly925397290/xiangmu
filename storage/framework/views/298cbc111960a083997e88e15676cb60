<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Success</title>
<style type="text/css">
    body{
        background:url('register/images/bj_zhuce.jpg') no-repeat top center;
    }
    div{
       width:800px;
       height:300px;
       margin-top:20px;
       margin-left:10px; 
    }
</style>
</head>
<body>
<div>
    <h1>恭喜你注册成功，将在<span id="timer">4</span>秒后跳转至登录页。</h1><br/>如果没有跳转，请抬起您尊贵的小手<a href="login">点击这里</a>
</div>
    
</body>
<script type="text/javascript">
    //定义显示的时间，因为定时任务是先把要执行的方法加载后，在1秒后再执行，所以可以比页面上的秒数少一秒，这一点须要根据须要高速
    var time = 3;
    //创建定时器
    var name = setInterval(
        function(){
            //获取id  timer元素的数据
            var timer = document.getElementById("timer");
            //如果秒数大于0
            if(time > 0){
                //将秒数写入到页面并将秒数减一
                timer.innerHTML = time-- ;              
            }else{
                //清除定时任务 
                clearInterval(name);
                //跳转
                location.href="login";
            }
        }   ,
        //每秒执行一次
        1000
    );
</script>
</html>