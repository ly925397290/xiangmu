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
<script>
$(function(){
    $(document).on('click','.m-uc-user .phone',function(){
        $.ajax({
            url:'/bindphone/change.html',
            type:'get',
            dataType:'json',
            success:function(data){
                if($('#onlyone'))$('#onlyone').remove();
                $('body').append(data.html);
            }
        });
    })
    //展现时间轴
    $(document).on('click','.m-order-list .title strong',function(){
        var prt = $(this).parent();
        $(this).toggleClass('n-active');
        prt.siblings('.step').toggle();
        prt.siblings('.address').toggle();
    }) 
    
    //取消维修
    $(document).on('click','.cancel',function(){
        var id = $(this).parents('.action').data('id');
        var order = $(this).parents('.action').data('order');
        $.amsg.c('取消回收','您确定取消【'+order+'】维修吗？',function(){
            $.ajax({
                url:"/wxorder/cancel.html",
                type:'post',
                data:{order:order},
                dataType:'json',
                success:function(data){
                    if(data.status != 0){
                        $.amsg.a('提示',data.msg,function(){});
                        return false;
                    }
                    location.reload(true);
                },
                error:function(){
                    $.amsg.a("网络错误，请稍后再试...","",function(){});
                }
            });
        })
    });
    
    //确认收货
    $(document).on('click','.confirm',function(){
        var id = $(this).parents('.action').data('id');
        var order = $(this).parents('.action').data('order');
        $.ajax({
            url:"/wxorder/confirm.html",
            type:'post',
            data:{order:order},
            dataType:'json',
            success:function(data){
                if(data.status != 0){
                    $.amsg.a('提示',data.msg,function(){});
                    return false;
                }
                location.reload(true);
            },
            error:function(){
                $.amsg.a("网络错误，请稍后再试...","",function(){});
            }
        });
    });
        
    //提示
    $(document).on('click','.checkbill',function(){
        var id = $(this).parents('.action').data('id');
        var order = $(this).parents('.action').data('order');
        $.ajax({
            url:"/wxorder/testerror.html",
            type:'post',
            data:{id:id},
            dataType:'json',
            success:function(data){
                if($('#onlyone'))$('#onlyone').remove();
                $('body').append(data.html);
            },
            error:function(){
                $.amsg.a("网络错误，请稍后再试...","",function(){});
            }
        });
    });
    
    //物流信息
    $(document).on('click','.m-order-list .action a.logistics',function(){
        var no = $(this).parents('.action').data('no');
        $.ajax({
            url: "/logistics/no.html",
            type: 'post',
            data: {no:no},
            dataType: 'json',
            success: function (data) {
                if($('.m-modal'))$('.m-modal').remove();
                $('body').append(data.html);
            },
            error:function(){
                $.amsg.c("网络错误，请稍后再试...",'',function(){});
            }
        });
    })
     
    //加载更多
    var page = 2;
    var lock = false;
    $(window).scroll(function(){
        if(lock)return;
        var top = $(document).scrollTop();
        var windowHeight = $(window).height();
        var footerTop = $('.m-footer').offset().top;
        if(top+windowHeight+60 >footerTop){
            lock = true;
            $.getJSON("/wxorder/more.html",{set:"",p:page},function(data){
                if(data.html){
                    $('.m-order-list>ul').append(data.html);
                    page = data.next;
                    lock = false;
                }else{
                    lock = true;
                }
            });
        }
    });
    
})
</script>

@endsection
<!-- 主体结束 -->
  