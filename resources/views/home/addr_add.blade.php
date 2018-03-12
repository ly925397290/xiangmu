<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
    <link rel="stylesheet" href="{{asset('admin/css/font.css')}}">
	<link rel="stylesheet" href="{{asset('admin/css/xadmin.css')}}">
  <link href="http://www.jq22.com/jquery/bootstrap-3.3.4.css" rel="stylesheet">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{asset('admin/lib/layui/layui.js')}}" charset="utf-8"></script>
    <script type="text/javascript" src="{{asset('admin/js/xadmin.js')}}"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="x-body">
        <form class="form-inline">
                {{csrf_field()}}
          <div class="form-group">
              <label class="sr-only" for="province9">收货人</label>
              <input type="text" class="form-control" id="people" name="people" placeholder="收货人">
            </div>
            <div class="form-group">
              <label class="sr-only" for="province9">手机号</label>
              <input type="text" class="form-control" id="phone" name="phone" placeholder="手机号">
            </div>
          <div id="distpicker4">
            <div class="form-group">
              <label class="sr-only" for="province9">Province</label>
              <select class="form-control" id="one" name="1"></select>
            </div>
            <div class="form-group">
              <label class="sr-only" for="city9">City</label>
              <select class="form-control" id="two" name="2"></select>
            </div>
            <div class="form-group">
              <label class="sr-only" for="district9">District</label>
              <select class="form-control" id="siri" name="3"></select>
            </div>
          </div>
          <div class="layui-form-item">
              <button  class="layui-btn" lay-filter="add" lay-submit="">
                  增加
              </button>
          </div>
        </form>
    </div>
    <script>
    layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
    form.on('submit(add)', function(data){
      // 获取数据
      var people = $('#people').val()
      var phone = $('#phone').val()
      var one = $('#one').val()
      var two = $('#two').val()
      var siri = $('#siri').val()
      var addr = one+two+siri;
      $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/address/create',
          data :{'people':people,'phone':phone,'addr':addr},
          dataType : "Json",
          success : function(msg){
              if(msg){
                    layer.alert("增加成功", {icon: 6},function () {
                        // 获得frame索引
                        var index = parent.layer.getFrameIndex(window.name);
                        //关闭当前frame
                        parent.layer.close(index);
                        parent.location.reload(true);
                    });
                }else{
                    layer.alert("增加失败", {icon: 6},function () {
                        // 获得frame索引
                        var index = parent.layer.getFrameIndex(window.name);
                        //关闭当前frame
                        parent.layer.close(index);
                        parent.location.reload(true);
                    });
                }
          }
      });
    return false;
  });
});
    var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
      <script src="http://www.jq22.com/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://www.jq22.com/jquery/bootstrap-3.3.4.js"></script>
  <script src="{{asset('home/js/distpicker.data.js')}}"></script>
  <script src="{{asset('home/js/distpicker.js')}}"></script>
  <script src="{{asset('home/js/main.js')}}"></script>
  </body>

</html>
