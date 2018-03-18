@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
<!--gome_head -->
        <div class="category-box">
            <div class="category wbox">
                <div class="sidecategory">
                    <h2>
                        <a data-code="1000036957" href="//list.gome.com.cn" target="_blank">全部商品分类</a></h2>
                    <div id="navBox" class='lisnav'>
                        <div class="lisbg"></div>
                        <!-- 一级菜单 -->
                        <ul class="lisnav-ul" id="lisnav">
                                <!-- 一级标题 -->
                                @foreach($cate as $k=>$v)
                                @if($v->pid == 0)
                                <li class="first edit-mode nav-item" id="one" data-index="0" modelType="4" modelId="1000037040">
                                    <h3>
                                        <a data-code="1000037040-0"  target="_blank" onclick="cate({{$v->id}})" style="cursor:pointer;">{{ $v->title }}</a>
                                    </h3>
                                </li>
                                @endif   
                                @endforeach 
                                <!-- end -->
                        </ul>
                        <!-- 二级菜单end -->

                        <div class="subnav" id="subnav" flag="0">
                            <div class="loading1-sync" id="loading1-sync" >
                                <div class="fullcategory-left" style="width: 300px;">
                                    <div class="fullcategory-content-box" id="fullcategory-content-box" style="width: 300px;">
                                        <div class="fullcategory-content" data-code="1000051970_0" style="width: 300px;">
                                            <ul class="fullcategory-list" style="width: 300px;">
                                                <div id="list" style="width: 300px;">
                                                   
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--gome_head end-->
    </div>
</header>
<script type="">
/**加载分类菜单*/
   function cate(id){
    $.ajax({
        type : "GET",
        url : '/home/cate/'+id,
        success : function(msg){
            $('#list').html(msg)
        }
    });
   }   
</script>
<section class="m-slide">
<ul>
    @foreach($Slide as $v)
    <li style="background-color: ;">
        <a href="{{$v['surl']}}">
            <img src="{{$v['simg']}}"/>
        </a>
    </li> 
    @endforeach   
    </ul>
<em></em>
<a class="prev i-icon"></a>
<a class="next i-icon"></a>
</section>

<em></em>
<a class="prev i-icon"></a>
<a class="next i-icon"></a>
</section>


<section class="m-parts-recommend w">
    
    <div class="wrap">
        <div class="slide c">
            <ul>
                <!-- 热度商品遍历最好不低于4个 -->
                @foreach($goods as $v)
                    @if($v->tuijian == 1)
                        <li>
                            <a href="{{asset('home/shoplist')}}/{{$v->gid}}">
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
    <div class="titles">
        <h2>更多周边</h2>
        <a href="#">更多</a>
    </div>


</section>
<section class="m-pro-recommend">
    <div class="w">
        <div class="box-hd c">
        <h3 class="g">为您推荐</h3>
            <a class="fr" href="#">更多</a>
        </div>
        <div class="c xs020 m03 s04 x04">
            <!-- 推荐位遍历 -->
            @foreach($goods as $v)
                @if($v->tuijian == 2)
                    <div class="g pro-item">
                         <a class="pro-item-a n-active" href="{{asset('home/shoplist')}}/{{$v->gid}}">
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
    <div class="c xs020 m03 s04 x04">
        <!-- 注: 特别推荐 -->
        @foreach($goods as $v)
            @if($v->tuijian == 3)
            <a class="g x6" href="{{asset('home/shoplist')}}/{{$v->gid}}">
                <img class="n-active" src="{{$v->urls}}">
                 
            </a>
            @endif                
        @endforeach
        <!-- 遍历结束 -->    
    </div>
</section>
<section class="m-ad">
    <div class="w">
        <div class="c xs020 m03 s04 x04">     
        <!-- 注: 控制广告商品个数 3*n 否则会改变页面布局 -->
        @foreach($goods as $v)
                
            @if($v->tuijian == 4) 
                <a class="g x4" href="{{asset('home/shoplist')}}/{{$v->gid}}"><img class="n-active" src="{{$v->urls}}"></a> 
                <input type="hidden" name="price" value="{{$v->price}}"> 
            @endif                
        @endforeach
        <!--  -->
        </div>       
    </div>
</section>
<section class="m-ad-other w">
    <div class="box-hd c">
        <h3 class="g">网站使用指导</h3>
    </div>
    <div class="xs020">
        <!-- 注: 特别推荐 -->

            <a class="g x6" href="{{asset('home/articleslist')}}/0">
                <img class="n-active" src="{{$articles->art_thumb}}">
            </a>  
            <a class="g x6" href="{{asset('home/articleslist')}}/1">
                <img class="n-active" src="{{$articleslast->art_thumb}}">
            </a>             
      
        <!-- 遍历结束 -->   
    </div>
</section>

@endsection
<!-- 主体结束 -->
