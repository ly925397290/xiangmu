@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    
<section class="m-sale-answer w" style="width:600px;height:600px;">
    <div class="answer-hd c">
        <h3 class="g">服务解答</h3>
        <a class="fr" href="/help/help.html">了解更多</a>
    </div>

         @foreach($articles as $v)

        <div class="answer-cell" style="width:750px;">
            <div class="text question"><span>Q：</span>{{$v['title']}}<br/>-----作者：{{$v['auth']}}  发布时间：{{$v['create_time']}}</div>
            <div class="text answer"><span>A：</span>{!!$v['content']!!}</div>
            <div class="text answer"><span>P：<img src="{{$v['art_thumb']}}"></div>
            <div></div>
        </div>

        @endforeach
       
@endsection
<!-- 主体结束 -->
   
            
   