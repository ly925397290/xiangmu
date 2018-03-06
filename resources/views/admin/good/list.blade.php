<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
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
        <form class="layui-form layui-col-md12 x-so">  
          <input class="layui-input" placeholder="开始日" name="start" id="start">
          <input class="layui-input" placeholder="截止日" name="end" id="end">
          <input type="text" name="username"  placeholder="请输入商品" autocomplete="off" class="layui-input"  value="{{$request->username}}">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        
        <button class="layui-btn" onclick="x_admin_show('添加回收的二手商品',1000,700)"><i class="layui-icon"></i>添加回收后的二手商品</button>
        <span class="x-right" style="line-height:40px">共有数据{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>

          
            <th width="5px">ID号</th>            
            <th width="15px">所属类别</th>
           
            <th width="15px">商品名称</th>
            <th width="20px">商品图片</th>
            <th width="15px">商品来源（前台店铺名）或本后台发布</th>
            <th width="15px">发表时间</th>
            <th width="15px">商品库存</th>
            <th width="15px">商品价格</th>
            <th width="15px">商品状态</th>
            <th width="15px">操作</th>
          </tr>
        </thead>
        <tbody>
          @foreach($goods as $v)
          <tr>
            
            <th>{{ $v->gid }}</th>     
            <th>所属类别</th>
            <th>{{ $v->gname }}</th>
            <th>{{ $v->pict }}</th>
            <th> ?由lid关联出的店铺名:字段值默认为0时是本后台发布</th>
            <th>{{ $v->addtime }}</th> 
            <th>{{ $v->inven }}</th>
            <th>{{ $v->price }}</th>          
            <th> 
              @if($v->status == 2)
                  <div class="am-text-middle"><button  class="am-icon-pencil">
                          已售出
                      </button></div>
              @else
              <div class="am-text-middle"><button  class="am-icon-pencil" onclick="gstatus({{$v->gid}},{{$v->status}})">
                      @if($v->status == 0)
                          下架
                      @elseif($v->status == 1)
                          上架
                      @endif
                  </button></div>
              @endif

          </th>
          <th><a href="{{url('admin/goods/detail')}}">查看详情</a></th>         
          </tr>
          @endforeach
           
        </tbody>
      </table>
         
           <div class="page">
            {!! $goods->appends($request->all())->render() !!}
          </div>
        
    </div>
    <script>

         function  gstatus(gid,status) {
            // if(status  == 0){
//                 var tanchu =  '您确认要上架吗?'
//             }else{
//                 var tanchu =  '您确认要下架吗?'
//             };
//             layer.confirm(tanchu,{
//                 btn:['确认','取消']
//             },function () {
//                 $.get("{{url('admin/goods/gstatus')}}/"+gid,function(data){

// //                    修改状态成功
//                     if(data.gg == 0){
//                         layer.msg(data.msg, {icon: 6});
//                         var t=setTimeout("location.href = location.href;",2000);
//                     }else if(data.gg == 1){
//                         layer.msg(data.msg, {icon: 5});

//                         var t=setTimeout("location.href = location.href;",2000);
//                     }else{
//                         layer.msg(data.msg, {icon: 2});
//                         var t=setTimeout("location.href = location.href;",2000);
//                     }
//                 });

//             })
        }

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
          layer.confirm('确认要停用吗？',function(index){

              if($(obj).attr('title')=='启用'){

                //发异步把用户状态进行更改
                $(obj).attr('title','停用')
                $(obj).find('i').html('&#xe62f;');

                $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                layer.msg('已停用!',{icon: 5,time:1000});

              }else{
                $(obj).attr('title','启用')
                $(obj).find('i').html('&#xe601;');

                $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                layer.msg('已启用!',{icon: 5,time:1000});
              }

          });
      }


      function member_del (obj,id) {

         // alert(argument);
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              // $.post('URL地址'.'携带的参数',成功后的闭包函数)
              $.post("{{ url('admin/article/') }}/"+id,{"_token":"{{csrf_token()}}","_method":"delete"},function(data){
                  if(data){
                      $(obj).parents("tr").remove();
                      layer.msg('已删除!',{icon:1,time:1000});
                      location.reload(true);
                  }else{
                      layer.msg('删除失败!',{icon:1,time:1000});
                      location.reload(true);
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