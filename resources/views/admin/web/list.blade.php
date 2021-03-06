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
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        {{--<span class="x-right" style="line-height:40px">共有数据：{{$count}} 条</span>--}}
      </xblock>
      <form action="{{url('admin/webs/editAll')}}" method="post" enctype="multipart/form-data">
      {{csrf_field()}}
      <table class="layui-table">
        <thead>
          <tr>
            <th style="width:20px;">
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th style="width:20px;">ID</th>
            <th style="width:20px;">排序</th>
            <th style="width:80px;">标题</th>
            <th style="width:80px;">名称</th>
            <th style="width:420px;">内容</th>
            <th>操作</th></tr>
        </thead>
        <tbody>     
        @foreach($data as $v)
          <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='{{$v->id}}'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td>{{ $v->id }}</td>
            <td>{{ $v->web_order }}</td>
            <td>{{ $v->web_title }}</td>
            <td>{{ $v->web_name }}</td>
            <td>{!! $v->web_content !!}</td>
            <input type="hidden" value="{{ $v->id }}" name="id[]">
            <td class="td-manage">

              <a title="编辑"  onclick="x_admin_show('编辑','{{url('admin/webs/'.$v->id.'/edit')}}',600,400)" href="javascript:;">
                <i class="layui-icon">&#xe642;</i>
              </a>

              <a title="删除" onclick="member_del(this,'{{$v->id}}')" href="javascript:;">
                  <i class="layui-icon">&#xe640;</i>
                </a>
            </td>
          </tr>
        @endforeach
        <tr>
          <td colspan="7">
            <button  class="layui-btn" lay-filter="add" lay-submit="">
              批量修改
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      </form>

    </div>
     <script>             
        layui.use(['form','laydate','layer'], function(){
        var laydate = layui.laydate;
        var form = layui.form;
        var layer = layui.layer;
      });
      /*配置-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              // console.log(111)
              //发异步删除数据
              // $.post('URL地址'.'携带的参数',成功后的闭包函数)
              $.post('{{ url('admin/webs/') }}/'+id,{"_token":"{{csrf_token()}}","_method":"delete"},function(data){
                  if(data.status){
                      $(obj).parents("tr").remove();
                      layer.msg('删除成功!',{icon:1,time:1000});
                      location.reload(true);
                  }else{
                      layer.msg('删除失败!',{icon:1,time:1000});
                      location.reload(true);
                  }
              });

          });
      }



      function delAll (argument) {
        layer.confirm('确认要删除吗？',function(index){
              //   获取选中的记录,获取记录的id
              var ids =   [];
                $('.layui-form-checked').not('.header').each(function(i,v){
                   ids.push($(v).attr('data-id'));
                })
                $.post('{{ url('admin/webs/delAll') }}',{"ids":ids,"_token":"{{csrf_token()}}"},function(data){                   
                    // console.log(msg)
                    if(data.status){
                        layer.msg('删除成功', {icon: 1});
                        $(".layui-form-checked").not('.header').parents('tr').remove();
                        location.reload(true);
                    }else{
                        layer.msg('删除失败', {icon: 1});
                        location.reload(true);
                    }
                })

          });

        
  
        // layer.confirm('确认要删除吗？'+data,function(index){
        //     //捉到所有被选中的，发异步进行删除

        // });
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