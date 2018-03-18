@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <section class="m-select-address">
            <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">地址管理</a>
            </div>
           </div>
            <div>
                <div style="float:left;width:85%">
                    <table class="layui-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>收货人</th>
                            <th>手机号</th>
                            <th>收货地址</th>
                            <th>操作</th>
                        </thead>
                        <tbody>
                                @foreach($addr as $v)
                                <tr>
                                  <td>{{$v->id}}</td>
                                  <td><input type="text" value="{{$v->people}}" name="people" id="people"></td>
                                  <td><input type="text" value="{{$v->phone}}" name="phone" id="phone"></td>
                                  <td><input type="text" value="{{$v->addr}}" name="addr" id="addr"></td>
                                    <td>
                                    <a title="编辑"  onclick="member_edit('this','{{$v->id}}')" href="javascript:;">
                                      <i class="layui-icon">&#xe642;</i>
                                    </a>
                                    <a title="删除" onclick="member_del(this,'{{$v->id}}')" href="javascript:;">
                                      <i class="layui-icon">&#xe640;</i>
                                    </a>
                                    </td>
                                </tr>
                                @endforeach
                        </tbody>
                      </table>
                </div>
                <div style="float:right;width:15%">
                        <li class="g new">
                            <a onclick="x_admin_show('添加地址','{{url('home/address')}}',600,400)">
                            <i class="i-icon"></i>
                            <p >添加新地址</p>
                            </a>
                        </li>
                </div>
            </div>
        </section>
    </div>
</section>
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
/*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "post",
                url : '/home/addrmanag/destroy/'+id,
                data : {"uid":id},
                dataType : "Json",
                success : function(msg){
                        // console.log(msg)
                    if(msg.status){
                        location.reload(true);
                        $(obj).parents("tr").remove();
                        layer.msg('删除成功!',{icon:1,time:500});
                    }else{
                        location.reload(true);
                        layer.msg('删除失败!',{icon:1,time:500});
                    }
                }
              });
              
          });
      }
       /*地址-修改*/
      function member_edit(obj,id){
            // 获取数据
            var people = $('#people').val();
            var phone = $('#phone').val();
            var addr = $('#addr').val();
              //发异步删除数据
              $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "post",
                url : '/home/addrmanag/update/'+id,
                data : {"people":people,"phone":phone,"addr":addr},
                dataType : "Json",
                success : function(msg){
                        // console.log(msg)
                    if(msg){
                        location.reload(true);
                        layer.msg('修改成功!',{icon:1,time:1000});
                    }else{
                        location.reload(true);
                        layer.msg('修改失败!',{icon:1,time:1000});
                    }
                }
              });      
      }
</script>

@endsection
<!-- 主体结束 -->
   