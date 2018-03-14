@extends('home.public.layout')
<!-- 主体开始 -->

@section('content')
    <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <!-- 头像 -->
            <a class="avatar"><img src="picture/a40db3cc250a40049320ae74bd800426.gif"/></a>
            <!-- 昵称 -->
            <span>Mr.feng</span>
            <!-- 信息 -->
            <p class="phone">绑定手机号：13520249366<span>修改</span></p>
        </div>
    </div>
</section>
<section class="m-uc w">
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
            <a class="item " href="{{url('home/account/password')}}"><i></i>密码管理</a>
        </div>  
        <div class="list">
            <h3>店铺管理</h3>
            <a class="item " href="{{url('/home/shop')}}"><i>创建店铺</i></a>
            <a class="item " href="{{url('/home/goods')}}"><i>发布商品</i></a>
            <a class="item n-active" href="{{url('/home/shop/shenhe/')}}"><i>商铺审核进度</i></a>
        </div>
    </nav>
</aside> 
    <div class="main">
        <section class="m-select-account">
            <div class="title">
                <strong><a href="{{url('home/shop')}}">创建商铺</a></strong>
                <a class="u-btnl"></a>
                <a class="u-btn">退出创建</a>
            </div>

            <form  id="art_form" action="{{ url('home/shop') }}" method="post" enctype="multipart/form-data">
                 {{csrf_field()}}
            <ul class="c ls010 x012 m06 l04 xs30">
                <li class="g new">
                
                    <th><i class="require">*</i> 店铺申请状态：</th>
                    <td>
                        
                          @if($shop_status->status == 0)
                          <th>
                            提交申请中
                          </th>
                          @else
                            <th>
                            申请成功
                            </th>
                          @endif
                    </td>
                
                   
                </li>
               
            </ul>
            <br>
            <br>
          
            </form>
            
        </section>
    </div>
</section>
<script>
$(function () {
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
//管理账号
$('.m-select-account .title .u-btnl').on('click',function(){
    $(this).parents('.m-select-account').addClass('selected');
})
//退出账户管理
$('.m-select-account .title .u-btn').on('click',function(){
    $(this).parents('.m-select-account').removeClass('selected');
})
//添加账号
$('.add').on('click',function(){
    action('');
})
//编辑账号
$(document).on('click','.editor',function(){
    var parent = $(this).parent('.handle');
    action(parent.data('id'));
})
//删除账号
$(document).on('click','.delete',function(){
    var id = $(this).parent('.handle').data('id');
    var account = $(this).parent('.handle').siblings('.user').children('.account').text();
    $.amsg.c('确定删除以下账号？',account,function(){
        $.ajax({
            url:'/account/deleteajax.html',
            type:'post',
            data:{id:id},
            dataType:'json',
            success:function(data){
                if(data.status != 0){
                    $.amsg.c('提示',data.msg,function(){});
                    return false;
                }
                refresh();
            }
        });
    })
})
//获取内容
function action(id){
    $.ajax({
        url:'/account/add.html',
        type:'post',
        data:{id:id},
        dataType:'json',
        success:function(data){
            if($('#onlyone'))$('#onlyone').remove();
            $('body').append(data.html);
        }
    });
}
//刷新内容
function refresh(){
    $.ajax({
        url:'/account/refresh.html',
        type:'post',
        dataType:'json',
        success:function(data){
            if(data.status != 0){
                return false;
            }
            $('.m-select-account li.new').siblings().remove();
            $('.m-select-account li.new').before(data.data);
        }
    });
}
//加载更多
var page = 2;
var lock = false;
$(window).scroll(function(){
    if(lock)return;
    var top = $(document).scrollTop();
    var windowHeight = $(window).height();
    var footerTop = $('.m-footer').offset().top;
    if(top+windowHeight+60 >footerTop){
        //alert('加载更多')
        //如果没有了 lock = true
        lock = true;
        $.getJSON("/account/more.html",{p:page},function(data){
            if(data.html){
                $('.m-select-account>ul li.new').before(data.html);
                page = data.next;
                lock = false;
            }else{
                lock = true;
            }
        });
    }
});
});
</script> 
@endsection
<!-- 主体结束 -->
             

  