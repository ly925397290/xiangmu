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
            <a class="item n-active" href="{{url('home/addrmanag')}}"><i></i>地址管理</a>
            <a class="item " href="{{url('home/account')}}"><i></i>账户管理</a>
            <a class="item " href="{{url('home/account/password')}}"><i></i>密码管理</a>
        </div>
    </nav>
</aside> 
    <div class="main">
        <section class="m-select-address">
            <input id="address" type="hidden"/>
            <div class="title">
                <strong>确认收货地址</strong>
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
                                  <td><input type="text" value="{{$v->people}}" name="people"></td>
                                  <td><input type="text" value="{{$v->phone}}" name="phone"></td>
                                  <td><input type="text" value="{{$v->addr}}" name="addr"></td>
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
            var people = $(obj).val();
            var phone = $(obj).val();
            var addr = $(obj).val();
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
                        console.log(msg)
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
   