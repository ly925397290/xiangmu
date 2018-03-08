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
        <form class="layui-form layui-col-md12 x-so layui-form-pane">
          
          <input class="layui-input" placeholder="分类名" name="pcate_name">
          <button  class="layui-btn" lay-filter="add" lay-submit="">增加</button>
        </form>
      </div>

      <table class="layui-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>分类名</th>
            <th>操作</th>
        </thead>
        <tbody>
          @foreach($data as $v)
          <tr>
            <td>{{$v->id}}</td>
            <td>{{$v->pcate_name}}</td>
            <td class="td-manage">
              <a title="编辑"  onclick="x_admin_show('编辑','{{url('admin/pcate/')}}/{{$v->id}}/edit')" href="javascript:;">
                <i class="layui-icon">&#xe642;</i>
              </a>
              <a title="删除"  onclick="member_del('删除','{{$v->id}}')" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      <div class="page">
        <div>
          {!! $data->render() !!}
        </div>
      </div>

    </div>
    <script>
      /**删除**/
      function member_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "DELETE",
                url : '/admin/pcate/'+id,
                dataType : "Json",
                success : function(msg){
                    if(msg == 1){
                        location.reload(true);
                        $(obj).parents("tr").remove();
                        layer.msg('删除成功!',{icon:1,time:1000});
                    }else if(msg == 0){
                        location.reload(true);
                        layer.msg('删除失败!',{icon:1,time:1000});
                    }else{
                        location.reload(true);
                        layer.msg('此分类下有权限，不能删除',{icon:1,time:1000});
                    }
                }
              });
              
          });
      }


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
                url : '/admin/pcate',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    // console.log(msg)
                    if(msg){
                        layer.alert("增加成功", {icon: 6},function () {
                    
                            location.reload(true);
                        });
                    }else{
                        layer.alert("增加失败", {icon: 6},function () {
                  
                            location.reload(true);
                        });
                    }
                }
            });


            return false;
          });


        });
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>