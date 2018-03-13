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
        <form class="layui-form layui-col-md12 x-so" method="get" action="{{ url('admin/shop') }}">
          <div class="layui-inline">
          </div>
          <input type="text" name="keywords1"  placeholder="请输入店铺名" value="" autocomplete="off" class="layui-input">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" ><i class=""></i>店铺列表</button>
        
      
        <span class="x-right" style="line-height:40px">共有数据：{{$count}}条</span>
      </xblock>
      <form action="{{url('admin/shop/editAll')}}" method="post" enctype="multipart/form-data">
      {{csrf_field()}}
      <table class="layui-table">
        <thead>
          <tr>
          
            <th>店铺id</th>
            <th>店铺名称</th>
            <th>店铺描述</th>
            <th>店铺状态</th>
            
          </tr>
        </thead>
        <tbody>
            @foreach($shop as $k=>$v)
  
          <tr>
            <input type="hidden" name="ids[]" value="{{$v->id}}">
             <td>{{$v->id}}</td>
             
             <td>{{$v->shopname}}</td>

             <td>{{$v->desc}}</td>
             <td>
              @if($v->status == 0)
              
               <input style="background-color:pink;color:red;border-color:green" type="text" name="status[]" value="等待审核">
               
                填写请“等待审核”或“审核通过”
              @else
                
                <input colour="green" type="text" name="status[]" value="审核通过">
               填写请“等待审核”或“审核通过”
               
              @endif
              </td>
            
          </tr>

            @endforeach
        </tbody>
         
      </table>
      <tfoot>

      <button  class="layui-btn" lay-filter="add" lay-submit="">
              批量修改
        </button>
     </tfoot>
  </form>
  <div class="page">
        {!! $shop->appends($request->all())->render() !!}
      </div>
  </div>
    <script>
      layui.use(['laydate','layer'], function(){
        var laydate = layui.laydate;
      })

       /*轮播图-显示*/
        function member_stop(obj,id){
        // 获取当前用户状态
        var status = $(obj).attr('status');
            if($(obj).attr('title')=='显示'){
              layer.confirm('确认要显示吗？',function(index){
                //发异步把用户状态进行更改
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type : "POST",
                    url : '/admin/slide/changestatus',
                    data : {"id":id,"status":status},
                    dataType : "Json",
                    success : function(msg){
                        // console.log(msg)
                        if(msg){
                            layer.msg('已显示!',{icon: 6,time:1000});
                            location.reload(true);

                        }else{
                            location.reload(true);

                            layer.msg('修改失败!',{icon: 5,time:1000});
                        }
                    }
                });
              });
            }else{
              layer.confirm('确认要隐藏吗？',function(index){
                //发异步把用户状态进行更改
                $.ajax({
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  },
                  type : "POST",
                  url : '/admin/slide/changestatus',
                  data : {"id":id,"status":status},
                  dataType : "Json",
                  success : function(msg){
                          // console.log(msg)
                      if(msg.status){
                          location.reload(true);
                          layer.msg('已隐藏!',{icon: 5,time:1000});
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
          $.ajax({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              type:"DELETE",
              url : '/admin/slide/'+id,
              dataType : "Json",
              success : function(msg){
                // console.log(msg)
                if(msg){
                    layer.msg('删除成功', {icon: 1});
                    $(".layui-form-checked").not('.header').parents('tr').remove();
                    location.reload(true);

                }else{
                    location.reload(true);
                    layer.msg('删除失败', {icon: 1});
                }
             } 
          });
        })
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


