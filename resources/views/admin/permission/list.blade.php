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
          <cite>导航元素88</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        <form class="layui-form layui-col-md12 x-so layui-form-pane">
          <div class="layui-input-inline">
            <select name="pcate_id" lay-verify="pcate_id" id="pcate_id">
              <option value="0">规则分类</option>
              @foreach($pcate as $v)
              <option value="{{$v->id}}">{{$v->pcate_name}}</option>
              @endforeach
            </select>
          </div>
          <div class="layui-input-inline">
            <input type="text" name="controller" class="layui-input" placeholder="控制器" lay-verify="controller" id="controller">
          </div>
          <div class="layui-input-inline" >
            <input type="text" class="layui-input" name="method" placeholder="方法名" lay-verify="method" id="method">
          </div>
          <input class="layui-input" placeholder="权限名" name="permission" lay-verify="permission" id="permission">
          <button class="layui-btn"  lay-submit="" lay-filter="add"><i class="layui-icon"></i>增加</button>
        </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <span class="x-right" style="line-height:40px">共有数据：88 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>ID</th>
            <th>权限规则</th>
            <th>权限名称</th>
            <th>所属分类</th>
            <th>操作</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='2'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td>1</td>
            <td>admin/user/userlist</td>
            <td>会员列表</td>
            <td>会员相关</td>
            <td class="td-manage">
              <a title="编辑"  onclick="x_admin_show('编辑','{{url('admin/permission/1/edit')}}')" href="javascript:;">
                <i class="layui-icon">&#xe642;</i>
              </a>
              <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page">
        <div>
          <a class="prev" href="">&lt;&lt;</a>
          <a class="num" href="">1</a>
          <span class="current">2</span>
          <a class="num" href="">3</a>
          <a class="num" href="">489</a>
          <a class="next" href="">&gt;&gt;</a>
        </div>
      </div>

    </div>
    <script>
      layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
          // 判断是否选择权限分类
          form.verify({
            pcate_id: function(value){
              if($('#pcate_id').val() == 0){
                    return '请选择权限分类';
                }
            },controller: function(value){
              if(value.length == 0){
                    return '请输入控制器名';
                }
            },method: function(value){
              if(value.length == 0){
                    return '请输入方法名';
                }
            },permission: function(value){
              if(value.length == 0){
                    return '请输入权限名';
                }
            }
          });

          //监听提交
          form.on('submit(add)', function(data){
            //发异步，把数据提交给php
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "POST",
                url : '/admin/permission',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    console.log(msg)
                    // if(msg){
                    //     layer.alert("增加成功", {icon: 6},function () {
                    
                    //         location.reload(true);
                    //     });
                    // }else{
                    //     layer.alert("增加失败", {icon: 6},function () {
                  
                    //         location.reload(true);
                    //     });
                    // }
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