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
        <form class="layui-form layui-col-md12 x-so" method="get" action="{{ url('admin/user') }}">
          <div class="layui-inline">
            <select name="num">
              <option value="2"
                      @if($request['num'] == 2)  selected  @endif
              >2
              </option>
              <option value="5"
                      @if($request['num'] == 5)  selected  @endif
              >5
              </option>
            </select>
          </div>

          <input type="text" name="keywords1"  placeholder="请输入用户名" value="{{$request->keywords1}}" autocomplete="off" class="layui-input">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <button class="layui-btn" onclick="x_admin_show('添加用户','{{url('admin/user/create')}}',600,400)"><i class="layui-icon"></i>添加</button>
        <span class="x-right" style="line-height:40px">共有数据：{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>ID</th>
            <th>用户名</th>
            <th>状态</th>
            <th>操作</th></tr>
        </thead>
        <tbody>
            @foreach($user as $v)
            <tr>
              <td>
                <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='{{$v->uid}}'><i class="layui-icon">&#xe605;</i></div>
              </td>
              <td>{{$v->uid}}</td>
              <td>{{$v->uname}}</td>
              @if($v->status)
              <td class="td-status">
                <span class="layui-btn layui-btn-normal layui-btn-mini">@if($v->status == 1)已启用@endif</span></td>
              <td class="td-manage">
              <a title="禁用" onclick="member_stop(this,'{{$v->uid}}')" href="javascript:;" status="{{$v->status}}">
                <i class="layui-icon">&#xe601;</i>
              </a>
              @else
              <td class="td-status">
                <span class="layui-btn layui-btn-normal layui-btn-mini layui-btn-disabled">@if($v->status == 0)已禁用@endif</span></td>
              <td class="td-manage">
              <a title="启用" onclick="member_stop(this,'{{$v->uid}}')" href="javascript:;" status="{{$v->status}}">
                <i class="layui-icon"></i>
              </a>
              @endif
                <a title="详情"  onclick="x_admin_show('详情','{{url('admin/user/')}}/{{$v->uid}}',600,400)" href="javascript:;">
                  <i class="layui-icon">&#xe612;</i>
                </a>
                <a title="密码修改"  onclick="x_admin_show('编辑','{{url('admin/user/')}}/{{$v->uid}}/edit',600,400)" href="javascript:;">
                  <i class="layui-icon">&#xe642;</i>
                </a>
                <a title="删除" onclick="member_del(this,'{{$v->uid}}')" href="javascript:;">
                  <i class="layui-icon">&#xe640;</i>
                </a>
              </td>
          </tr>
            @endforeach
        </tbody>
      </table>
      <div class="page">
        {!! $user->appends($request->all())->render() !!}
      </div>

    </div>
    <script>
      layui.use('laydate', function(){
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
            if($(obj).attr('title')=='启用'){
              layer.confirm('确认要启用吗？',function(index){
                //发异步把用户状态进行更改
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type : "POST",
                    url : '/admin/user/changestatus',
                    data : {"uid":id,"status":status},
                    dataType : "Json",
                    success : function(msg){
                        // console.log(msg)
                        if(msg.status){
                            layer.msg('已启用!',{icon: 6,time:1000});
                            location.reload(true);

                        }else{
                            location.reload(true);

                            layer.msg('修改失败!',{icon: 5,time:1000});
                        }
                    }
                });
              });
            }else{
              layer.confirm('确认要禁用吗？',function(index){
                //发异步把用户状态进行更改
                $.ajax({
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  },
                  type : "POST",
                  url : '/admin/user/changestatus',
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
              });
            }
        }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "DELETE",
                url : '/admin/user/'+id,
                data : {"uid":id},
                dataType : "Json",
                success : function(msg){
                        // console.log(msg)
                    if(msg.status){
                        location.reload(true);
                        $(obj).parents("tr").remove();
                        layer.msg('删除成功!',{icon:1,time:1000});
                    }else{
                        location.reload(true);
                        layer.msg('删除失败!',{icon:1,time:1000});
                    }
                }
              });
              
          });
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
              url : '/admin/user/delAll',
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
