@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
<section class="m-sale-bar w"></section>
<section class="m-sale-selectv2">
    <hgroup class="w">
        <h2>选择您要回收的型号</h2>
    </hgroup>
    <aside class="w">
        <a data-cid="1"><img src="{{asset('home/picture/shouji.png')}}"/><span>手机</span></a>
        <a data-cid="2"><img src="{{asset('home/picture/pingban.png')}}"/><span>平板</span></a>
        <a data-cid="3"><img src="{{asset('home/picture/diannao.png')}}"/><span>笔记本</span></a>    
    </aside>
    <div class="main m-load-rel">
        <div class="m-load-bg"></div>
        <div class="m-load">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
        <div class="w"></div>
    </div>
</section>
<script>
$(document).on('click','.m-sale-selectv2 aside a',function(){
    var _this = $(this);
    if(_this.hasClass('n-active'))return false;
    var cid = _this.data('cid');
    _this.addClass('n-active').siblings('a').removeClass('n-active');
    $.ajax({
        url:"/huishou/getbrand.html",
        type:'post',
        data:{cid:cid},
        dataType:'json',
        success:function(data){
            
        }
    });
})
</script>
@endsection
<!-- 主体结束 -->

