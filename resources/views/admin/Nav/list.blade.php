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
        <form class="layui-form layui-col-md12 x-so" method="get" action="{{ url('admin/nav') }}">
          <div class="layui-inline">
          </div>
          <input class="layui-input" placeholder="开始日" name="start" id="start">
          <input class="layui-input" placeholder="截止日" name="end" id="end">
          <input type="text" name="keywords1"  placeholder="请输入导航名" value="" autocomplete="off" class="layui-input">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" ><i class=""></i>导航列表</button>
        <a class="layui-btn" href="{{url('admin/nav/create')}}",600,400)><i class="layui-icon"></i>添加</a>
      
        <span class="x-right" style="line-height:40px">共有数据：{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>ID号</th>
            <th>导航名称</th>
            <th>导航链接</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            @foreach($Nav as $k=>$v)
            <tr>
              
              <td>{{$v->nid}}</td>
              <td>{{$v->nname}}</td>
              <td>{{$v->nlink}}</td>
              
                <td>
                <a href="{{url('admin/nav/'.$v->nid.'/edit')}}">
                <i class="am-icon-pencil"></i> 编辑
                                                    </a>
              <a href="javascript:;" onclick="member_del(this,{{$v->nid}})" class="tpl-table-black-operation-del"><i class="am-icon-trash"></i> 删除
              </a>
              </td>
          </tr>
           @endforeach
        </tbody>
      </table>
      <div class="page">
        
      </div>

    </div>
    <script>
      layui.use(['laydate','layer'], function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
          elem: '#start' //指定元素
        });

        //执行一个laydate实例
        laydate.render({
          elem: '#end' //指定元素
        });
      });

       /*用户-停用*/
      function member_stop(obj,id){
          // 获取当前用户状态
          var status = $(obj).attr('status');
          layer.confirm('确认要停用吗？',function(index){
              if($(obj).attr('title')=='启用'){
                //发异步把用户状态进行更改
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type : "POST",
                    url : '/admin/slide/changestatus',
                    data : {"uid":id,"status":status},
                    dataType : "Json",
                    success : function(msg){
                        // console.log(msg)
                        if(msg){
                            layer.msg('已启用!',{icon: 6,time:1000});
                            location.reload(true);

                        }else{
                            location.reload(true);

                            layer.msg('修改失败!',{icon: 5,time:1000});
                        }
                    }
                });
              }else{
                    //发异步把用户状态进行更改
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type : "POST",
                        url : '/admin/slide/changestatus',
                        data : {"uid":id,"status":status},
                        dataType : "Json",
                        success : function(msg){
                                // console.log(msg)
                            if(msg.status){
                                location.reload(true);

                                layer.msg('已禁用!',{icon: 5,time:1000});
                            }else{
                                location.reload(true);

                                layer.msg('修改失败!',{icon: 5,time:1000});
                            }
                        }
                    });
                }

            });
        }


        var str = "{{session('msg')}}";
        if(str!=''){
            layer.msg(str,{icon: 6});
        }

        function changeOrder(obj,sid){
            var order = $(obj).val();
            $.post("{{url('admin/slide/changeorder')}}",{'_token':"{{csrf_token()}}","sid":sid,"order":order},function(data){

                if(data.status == 0){

                    layer.msg(data.msg,{icon: 6});
                    location.href = location.href;
                }else{
                    layer.msg(data.msg,{icon: 5});
                    location.href = location.href;
                }
            })
        }

      /*用户-删除*/
      function member_del(obj,id){
        console.log(id)
        layer.confirm('您确认要删除吗?',{btn:['确认','取消']},
          function () {
                $.post("{{url('admin/nav')}}/"+id,{"_method":"delete","_token":"{{csrf_token()}}"},function(data){
                    // console.log(data)
//                    删除成功
                    if(data.error == 0){
                        layer.msg(data.msg, {icon: 6});
                        var t=setTimeout("location.href = location.href;",2000);
                    }else if(data.error == 1){
                        layer.msg(data.msg, {icon: 5});

                        var t=setTimeout("location.href = location.href;",2000);
                    }else{
                        layer.msg(data.msg, {icon: 2});
                        var t=setTimeout("location.href = location.href;",2000);
                    }


                });

            })
      }



      function delAll (argument) {

        // var data = tableCheck.getData();
        var ids =   [];
        $('.layui-form-checked').not('.header').each(function(i,v){
             ids.push($(v).attr('data-id'));
        })
        layer.confirm('确认要删除吗？',function(index){
            //捉到所有被选中的，发异步进行删除
            $.ajax({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              type : "POST",
              url : '/admin/slide/delAll',
              data : {"ids":ids},
              dataType : "Json",
              success : function(msg){
                // console.log(msg)
                if(msg.status){
                    layer.msg('删除成功', {icon: 1});
                    $(".layui-form-checked").not('.header').parents('tr').remove();
                    location.reload(true);

                }else{
                    location.reload(true);
                    layer.msg('删除失败', {icon: 1});
                }
              }
            });
        });
      }

    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>


