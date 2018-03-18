@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
<section class="m-uc-user">
  <div class="w">
    <div class="user data">
        
    </div>
  </div>
</section>
<section class="m-uc w">
<aside class="m-uc-nav">
    <nav id="nav">
        <div class="list">
            <h3>我的订单</h3>
            <a class="item"  href="{{url('home/order')}}"><i></i>我的订单</a>

            <h3>信息管理</h3>
            <a class="item "  href="{{url('home/addrmanag')}}"><i></i>地址管理</a>
            <a class="item "  href="{{url('home/account')}}"><i></i>账户管理</a>
            <a class="item "  href="{{url('home/account/password')}}"><i></i>密码管理</a>

            <h3>店铺管理</h3>
            <a class="item "  href="{{url('/home/shop')}}"><i>创建店铺</i></a>
            <a class="item "  href="{{url('/home/goods')}}"><i>发布商品</i></a>
            <a class="item "  href="{{url('/home/goods/show/')}}"><i>商品列表</i></a>
            <a class="item "  href="{{url('/home/shop/shenhe')}}/{{session('user')['uid']}}"><i>商铺审核进度</i></a> 
        </div>
    </nav>
</aside> 
    @section('personal')
    
    @show
<script type="text/javascript">
 $(document).on('click','#nav .list .item',function(){
    var _this = $(this);
    if(_this.hasClass('n-active'));
    _this.addClass('n-active').siblings('a').removeClass('n-active');
    load(1);
})
    /*********自动加载用户信息********/
    $(function () {
        //用户信息
        $.ajax({
            headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type : "GET",
            url : '/home/personal',
            success : function(msg){
                $('.data').html(msg)
              }
        });
    });

</script>
@endsection
<!-- 主体结束 -->
             
