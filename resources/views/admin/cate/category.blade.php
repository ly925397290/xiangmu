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
        <form class="layui-form layui-col-md12 x-so layui-form-pane" action="{{url('admin/cate')}}" style="width:50%" method="post">
                {{csrf_field()}}
                <div class="layui-form-pane" style="margin-top: 15px;">
                  <div class="layui-form-item">
                    <label class="layui-form-label" style="width:100px">所属分类</label>
                    <div class="layui-input-inline" style="width:120px;text-align: left">
                        <select class="layui-input" name="pid">
                            <option value="0">顶级父类</option>
                            @foreach($cate as $k=>$v)
                            <option value="{{$v['id']}}">{{$v['title']}}</option>
                            @endforeach
                      </select>
                    </div>
                    <div class="layui-input-inline" style="width:120px">
                        <input type="text" class="layui-input" placeholder="分类名" name="cate_name">
                    </div>
                    <div class="layui-input-inline" style="width:80px">
                    <button  class="layui-btn" lay-filter="add" lay-submit="">增加</button>
                    </div>
                  </div>
                </div> 
            </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <span class="x-right" style="line-height:40px">共有数据：{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>ID</th>
            <th>分类名</th>
            <th>操作</th>
        </thead>
        <tbody>
        @foreach($cate as $k=>$v)
          <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='{{$v['id']}}'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td>{{$v['id']}}</td>
            <td>{{$v['title']}}</td>
            <td class="td-manage">
              <a title="编辑"  onclick="x_admin_show('编辑','{{url('/admin/cate/')}}/{{$v['id']}}/edit')" href="javascript:;">
                <i class="layui-icon">&#xe642;</i>
              </a>
              <a title="删除" onclick="member_del(this,'{{$v['id']}}')" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
          </tr>
        @endforeach
        </tbody>
      </table>
      <div class="page">
        <div>
          
        </div>
      </div>

    </div>
    <script>

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

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
             $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "DELETE",
                url : '/admin/cate/'+id,
                data : {"uid":id},
                dataType : "Json",
                success : function(msg){
                        // console.log(msg)
                    if(msg == 0){
                        location.reload(true);
                        $(obj).parents("tr").remove();
                        layer.msg('删除成功!',{icon:1,time:1000});
                    }else if(msg == 1){
                        location.reload(true);
                        layer.msg('此分类下有子类!',{icon:1,time:1000});
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
              url : '/admin/cate/delAll',
              data : {"ids":ids},
              dataType : "Json",
              success : function(msg){
                if(msg == 0){
                	layer.msg('删除成功!',{icon:1,time:1000});
                    location.reload(true);
                    $(obj).parents("tr").remove();
                }else if(msg == 1){
                    layer.msg('要删除的分类有子类!',{icon:1,time:1000});
                    location.reload(true);
                }else{
                    layer.msg('删除失败!',{icon:1,time:1000});
                    location.reload(true);

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