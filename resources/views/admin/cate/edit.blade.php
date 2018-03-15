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
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">演示</a>
        <a>
          <cite>导航元素</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        <form class="layui-form layui-col-md12 x-so layui-form-pane"  method="post">
                {{csrf_field()}}
                <div class="layui-form-pane" style="margin-top: 15px;">
                  <div class="layui-form-item">
                    <label class="layui-form-label" style="width:100px">所属分类</label>
                    <div class="layui-input-inline" style="width:120px;text-align: left">
                        <select class="layui-input" name="pid">
                            <option value="0">顶级父类</option>
                            @foreach($cates as $k=>$v)
                            <option value="{{$v['id']}}" @if($cate['pid'] == $v['id']) selected @endif>{{$v['title']}}</option>
                            @endforeach
                      </select>
                    </div>
                    <div class="layui-input-inline" style="width:120px">
                        <input type="text" class="layui-input" value="{{$cate->title}}" name="title">
                    </div>
                    <div class="layui-input-inline" style="width:80px">
                    <button  class="layui-btn" lay-filter="add" lay-submit="">修改</button>
                    </div>
                  </div>
                </div> 
            </form>
         </div>  
      </div>
      <script>

        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;

          //监听提交
          form.on('submit(add)', function(data){
            var ids = [];
            $('.layui-form-checked').each(function(i,v){
                 ids.push($(v).attr('role-id'));
            })
            //发异步，把数据提交给php
            $.ajax({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              type : "PUT",
              url : '/admin/cate/'+{{$cate['id']}},
              data : data.field,
              dataType : "Json",
              success : function(msg){
                // console.log(msg)
                if(msg){
                    layer.alert("修改成功", {icon: 6},function () {
                        // 获得frame索引
                        var index = parent.layer.getFrameIndex(window.name);
                        //关闭当前frame
                        parent.layer.close(index);
                        parent.location.reload(true);
                    });
                }else{
                    layer.alert("修改失败", {icon: 6},function () {
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
    </script>
  </body>

</html>