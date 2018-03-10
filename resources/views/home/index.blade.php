@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')

<section class="m-ad">
    <div class="w">
        <div class="c xs020">     
        <!-- 注: 控制广告商品个数 3*n 否则会改变页面布局 -->
        @foreach($good as $v)
            @if($v->tuijian == 1) 
                <a class="g x4" href="#"><img class="n-active" src="{{$v->urls}}"></a>
                <input type="hidden" name="gid" value="{{$v->gid}}"> 
            @endif                
        @endforeach
        <!--  -->
        </div>       
    </div>
</section>

<section class="m-parts-recommend w">
    <div class="titles">
        <h2>更多周边</h2>
        <a href="#">更多</a>
    </div>
    <div class="wrap">
        <div class="slide c">
            <ul>
                <!-- 热度商品遍历最好不低于4个 -->
                @foreach($good as $v)
                    @if($v->tuijian == 2)
                        <li>
                            <a href="#">
                                <p class="thumb"><img src="{{$v->urls}}"/></p>
                                <span class="brand" data-brand="8"></span>
                                <span class="title">Apple EarPods 耳机</span>
                                <em>&#165;78.00</em>
                                <input type="hidden" name="gid" value="{{$v->gid}}"> 
                            </a>
                        </li>
                    @endif                
                @endforeach
                <!-- 热度商品遍历结束 -->
            </ul>
        </div>
    </div>
    <a class="left i-icon"></a>
    <a class="right i-icon"></a>
</section>
<section class="m-pro-recommend">
    <div class="w">
        <div class="box-hd c">
        <h3 class="g">为您推荐</h3>
            <a class="fr" href="#">更多</a>
        </div>
        <div class="c xs020 m03 s04 x04">
            <!-- 推荐位遍历 -->
            @foreach($good as $v)
                @if($v->tuijian == 3)
                    <div class="g pro-item">
                         <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                             <img src="{{$v->urls}}"/>
                             <p class="title" data-brand="1"></p>
                             <p class="title">iPhone 7</p>
                             <p class="price">&#165;2899.00</p>
                            <input type="hidden" name="gid" value="{{$v->gid}}"> 
                        </a>
                    </div>
                @endif                
            @endforeach
             <!-- 遍历结束 -->
        </div>
    </div>
</section>
<section class="m-ad-other w">
    <div class="box-hd c">
        <h3 class="g">特别推荐</h3>
    </div>
    <div class="xs020">
        <!-- 注: 特别推荐 -->
        @foreach($good as $v)
            @if($v->tuijian == 4)
            <a class="g x6" href="#">
                <img class="n-active" src="{{$v->urls}}">
                <input type="hidden" name="gid" value="{{$v->gid}}"> 
            </a>
            @endif                
        @endforeach
        <!-- 遍历结束 -->    
    </div>
</section>
<script>
    $(function(){
        var brand = {"1":"Apple","2":"Apple","6":"\u4f73\u80fd","7":"\u4f73\u80fd","8":"\u4e9a\u9a6c\u900a","9":"HTC","10":"\u4e09\u661f","11":"\u534e\u4e3a","12":"\u5c0f\u7c73","13":"\u82f9\u679c","14":"OPPO"};
        var perbrand = {"5":"\u5c0f\u7c73","2":"Apple","6":"FView","7":"Apple","8":"Apple","9":"Apple","13":"Apple","12":"\u534e\u4e3a","14":"\u7231\u5426FView","15":"\u7231\u5426FView","16":"\u7231\u5426Fview","17":"\u7231\u5426FView"};
        if(brand){
            $('[data-brand]').each(function(i,el){
                var id = $(el).data('brand');
                if(id)$(el).text(brand[id]);
            })
        }
        if(perbrand){
            $('[data-perbrand]').each(function(i,el){
                var id = $(el).data('perbrand');
                if(id)$(el).text(perbrand[id]);
            })
        }
    })
</script>
@endsection
<!-- 主体结束 -->
