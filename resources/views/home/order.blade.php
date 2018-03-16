@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
     <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <a class="avatar"><img src="{{$user->show->header or '/upload/user/defal.jpg'}}"/></a>
            <span>{{$user->uname or '你好'}}</span>
            <p class="phone">绑定手机号：{{$user->phone or '130********'}}</p>
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
        <a class="item n-active" href="/wxorder/list.html"><i></i>维修服务</a>
        <a class="item " href="/address/index.html"><i></i>地址管理</a>
        <a class="item " href="/account/index.html"><i></i>账户管理</a>
        <a class="item" href="/help/help.html#sale"><i></i>常见问题</a>
    </nav>
</aside>-->
<aside class="m-uc-nav">
    <nav>
        <div class="list">
            <h3>我的订单</h3>
            <a class="item n-active" href="{{url('home/order')}}"><i></i>我的订单</a>
        </div>
        <div class="list">
            <h3>信息管理</h3>
            <a class="item " href="{{url('home/addrmanag')}}"><i></i>地址管理</a>
            <a class="item " href="{{url('home/account')}}"><i></i>账户管理</a>
            <a class="item " href="{{url('home/account/password')}}"><i></i>密码管理</a>
        </div>  
        <div class="list">
            <h3>店铺管理</h3>
            <a class="item " href="{{url('/home/shop')}}"><i>创建店铺</i></a>
            <a class="item " href="{{url('/home/goods')}}"><i>发布商品</i></a>
            <a class="item " href="{{url('/home/goods/show/')}}"><i>商品列表</i></a>
            <a class="item " href="{{url('/home/shop/shenhe/1')}}"><i>商铺审核进度</i></a> 
        </div>
    </nav>
</aside> 
    <div class="main">
        <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">全部订单</a>

            </div>
        </div>
        <table class="layui-table">
            <thead>
                <tr>
                    <th>订单编号</th>
                    <th>商品价格</th>
                    <th>订单时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>  
            @foreach($user->order as $v) 
                <tr>
                    <td>{{$v->oid}}</td>
                    <td>{{$v->oprice}}</td>
                    <td>{{$v->time}}</td>
                    <td>
                        @if($v['order_status'] == 2)
                        <button class="layui-btn" onclick="x_admin_show('评论','{{url('home/pinglun/')}}/{{$v->oid}}',600,400)"><i class="layui-icon"></i>评论</button>
                        @else
                        <form class="layui-form">
                             {{csrf_field()}}
                             <input type="hidden" name="id" value="{{$v->id}}">
                            <button  class="layui-btn" lay-filter="add" lay-submit="">
                                <i class="layui-icon"></i>确定收货
                            </button>
                        </form>
                        @endif
                    </td>
              </tr>
             @endforeach 
            </tbody>  
      </table>
    </div>
</section> 
 <script>
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
          //监听提交
          form.on('submit(add)', function(data){
            //发异步，把数据提交给php
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "POST",
                url : '/home/order/queren',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    console.log(msg)
                    if(msg){
                            layer.msg("确认收货成功", {icon: 6},function () {
                            location.reload(true);
                        });
                    }else{
                        layer.msg("确认收货失败", {icon: 6},function () {
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
  