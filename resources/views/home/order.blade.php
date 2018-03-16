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
        
            @if($user->order)
                 
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
                                <button class="layui-btn" onclick="x_admin_show('评论','{{url('home/pinglun/')}}/{{$v->oid}}',600,400)"><i class="layui-icon"></i>评论</button>
                            </td>
                      </tr>
                @endforeach 

                    </tbody>  
            @else if
                你还没有订单
            @endif
      </table>
    </div>
</section>

@endsection
<!-- 主体结束 -->
  