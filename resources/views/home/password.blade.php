@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <a class="avatar"><img src="{{$user->show->header or '/upload/user/defal.jpg'}}"/></a>
            <span>{{$user->uname or '你好'}}</span>
            <p class="phone">绑定手机号：{{$user->show->phone or '130********'}}</p>
        </div>
    </div>
</section>
<section class="m-uc w">
    <!--<aside class="m-uc-nav">
    <h3>个人中心</h3>
    <nav>
        <a class="item " href="/order/list.html"><i></i>购买订单</a>
        <a class="item " href="/solutionorder/list/s/1.html"><i></i>解用服务</a>
        <a class="item " href="/saleorder/list.html"><i></i>回收服务</a>
        <a class="item " href="/wxorder/list.html"><i></i>维修服务</a>
        <a class="item n-active" href="/address/index.html"><i></i>地址管理</a>
        <a class="item " href="/account/index.html"><i></i>账户管理</a>
        <a class="item" href="/help/help.html#sale"><i></i>常见问题</a>
    </nav>
</aside>-->
<aside class="m-uc-nav">
    <nav>
        <div class="list">
            <h3>我的订单</h3>
            <a class="item" href="{{url('home/order')}}"><i></i>我的订单</a>
        </div>
        <div class="list">
            <h3>信息管理</h3>
            <a class="item " href="{{url('home/addrmanag')}}"><i></i>地址管理</a>
            <a class="item " href="{{url('home/account')}}"><i></i>账户管理</a>
            <a class="item n-active" href="{{url('home/account/password')}}"><i></i>密码管理</a>

        </div>
    </nav>
</aside> 
    <div class="main">
        <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">密码修改</a>
            </div>
        </div>
            <form class="layui-form">
            {{csrf_field()}}
              <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">
                      <span class="x-red">*</span>旧密码
                  </label>
                  <div class="layui-input-inline">
                      <input type="password" id="oldpass" name="oldpass" required="" lay-verify="oldpass"
                      autocomplete="off" class="layui-input" value="">
                  </div>
              </div>
              <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">
                      <span class="x-red">*</span>新密码
                  </label>
                  <div class="layui-input-inline">
                      <input type="password" id="L_pass" name="newpass" required="" lay-verify="repass"
                      autocomplete="off" class="layui-input" value="">
                  </div>
              </div>
              <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label" style="width:85px">
                      <span class="x-red">*</span>确认密码 
                  </label>
                  <div class="layui-input-inline">
                      <input type="password" id="L_repass" name="password" required="" lay-verify="repass"
                      autocomplete="off" class="layui-input" value="">
                  </div>
              </div>
            <div class="layui-form-item">
                <button  class="layui-btn" lay-filter="add" lay-submit=""> 修改</button>
            </div>
        </form>
    </div>
</section>
<script>
layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;

          // 自定义验证规则
          form.verify({
            oldpass: function(value){
              if($('#oldpass').val()!=$('#repass').val()){
                    return '旧密码输入错误';
                }
            }
            ,repass: function(value){
                if($('#L_pass').val()!=$('#L_repass').val()){
                    return '两次密码不一致';
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
                url : '/home/password',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    // console.log(msg)
                    if(msg){
                        layer.alert("修改成功", {icon: 6},function () {
                            location.reload(true);
                        });
                    }else{
                        layer.alert("修改失败", {icon: 6},function () {
                            location.reload(true);
                        });
                    }
                }
            });


            return false;
          });


        });
</script>

@endsection
<!-- 主体结束 -->
   