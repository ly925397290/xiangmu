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
        <div class="layui-row">
            <form class="layui-form layui-col-md12 x-so layui-form-pane">
                {{csrf_field()}}
                <div class="layui-form-pane" style="margin-top: 15px;">
                    <div class="layui-form-item">
                        <label class="layui-form-label" style="width:100px">所属分类</label>
                            <div class="layui-input-inline" style="width:120px;text-align: left">
                                <select class="layui-input" name="pid">
                                    <option value="0">顶级父类</option>
                                     @foreach($cates as $cate)
                                        <option value="{{$cate->id}}"><?php echo str_repeat("|----",1*$cate->lev);?> {{$cate->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        <div class="layui-input-inline" style="width:120px">
                            <input type="text" class="layui-input" placeholder="分类名" name="name">
                        </div>
                        <div class="layui-input-inline" style="width:80px">
                            <button  class="layui-btn" lay-filter="add" lay-submit="">增加</button>
                        </div>
                    </div>
                </div> 
            </form>
        </div>
    </div>
    <script type="text/JavaScript">
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;

          //监听提交
          form.on('submit(add)', function(data){
            //发异步，把数据提交给php
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "POST",
                url : '/admin/cates',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    if(msg){
                        layer.msg("增加成功", {icon: 6},function () {
                            parent.location.reload(true);
                        });
                    }else{
                        layer.msg("增加失败", {icon: 6},function () {
                            parent.location.reload(true);
                        });
                    }
                }
            });
            return false;
          });

        });
    </script>
  </body>
</html>
 