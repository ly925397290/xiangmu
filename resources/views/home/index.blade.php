@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')

<section class="m-ad">
    <div class="w">
        <div class="c xs020">     
        <!-- 注: 控制广告商品个数 3*n 否则会改变页面布局 -->
        @foreach($good as $v)
            @if($v->tuijian == 1) 
                <a class="g x4" href="{{asset('home/settlement')}}/{{$v->gid}}"><img class="n-active" src="{{$v->urls}}"></a> 
                <input type="hidden" name="price" value="{{$v->price}}"> 
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
                            <a href="{{asset('home/settlement')}}/{{$v->gid}}">
                                <p class="thumb"><img src="{{$v->urls}}"/></p>
                                <span class="brand" data-brand="8"></span>
                                <span class="title">{{$v->gname}}</span>
                                <em>&#165;{{$v->price}}</em>
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
                         <a class="pro-item-a n-active" href="{{asset('home/settlement')}}/{{$v->gid}}">
                             <img src="{{$v->urls}}"/>
                             <p class="title" data-brand="1"></p>
                             <p class="title">{{$v->gname}}</p>
                             <p class="price">&#165;{{$v->price}}</p>
                            <input type="hidden" name="price" value="{{$v->price}}"> 
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
            <a class="g x6" href="{{asset('home/settlement')}}/{{$v->gid}}">
                <img class="n-active" src="{{$v->urls}}">
                 
            </a>
            @endif                
        @endforeach
        <!-- 遍历结束 -->    
    </div>
</section>
@endsection
<!-- 主体结束 -->
