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

          <input type="text" name="username"  placeholder="请输入文章名或作者" autocomplete="off" class="layui-input" value="{{$request->username}}">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        
      <a href="{{url('admin/article/create')}}" class="layui-btn"><i class="layui-icon"></i>添加文章</a> 
        <span class="x-right" style="line-height:40px">共有数据{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>        
            <th>排序</th>
            <th>ID号</th>            
            <th>所属类别</th>           
            <th>文章题目</th>
            <th>文章缩列图</th>
            <th>文章作者</th>
            <th>文章发表时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
         @foreach($articles as $v)
          <tr>
            <th>{{$v['number']}}</th>
           <th>{{$v['aid']}}</th>     
            <th>{{$v['apath']}}</th>
            <th>{{$v['title']}}</th>
            <th><img src="{{$v['art_thumb']}}"></th>
            <!-- <th>{{$v['art_thumb']}}</th> -->
            <th>{{$v['auth']}}</th>
            <th>{{$v['create_time']}}</th>           
            <th> 
              <div class="tpl-table-black-operation">
                  <a href="{{url('admin/article/'.$v['aid'].'/edit')}}">
                      <i class="layui-icon">&#xe642;</i>
                  </a>
                  <a href="javascript:;" onclick="member_del(this,'{{$v['aid']}}')" class="tpl-table-black-operation-del">
                      <i class="layui-icon">&#xe640;</i>
                  </a>
              </div>
          </th>         
          </tr>
            @endforeach
        </tbody>
      </table>
          <div class="page">
            {!! $articles->appends($request->all())->render() !!}
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
        console.log(1)
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
