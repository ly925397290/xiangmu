@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">密码修改</a>
            </div>
        </div>
            <form class="layui-form" method="post">
            {{csrf_field()}}
              <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">
                      <span class="x-red">*</span>旧密码
                  </label>
                  <div class="layui-input-inline">
                      <input type="password" id="oldpass" name="oldpass" required="" lay-verify="oldpass"
                      autocomplete="off" class="layui-input" value="">
                      <input type="hidden" id="repass" value="{{$user['password']}}">
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
   