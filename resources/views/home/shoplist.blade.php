@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
<style>
    .m{ width: 800px; margin-left: auto; margin-right: auto; margin-top: 100px}
/*外层盒子和里边图片的一点点样式*/
.jqueryzoom { position: relative; padding: 0; border: solid 1px #eaeaea; width: 300px; height:300px; overflow: hidden; display: inline-block; }
/*放大镜是基于图片大小自动生成的，每次都要把jqueryzoom中img的大小和jqueryzoom盒子大小设置为一样的，不然放大镜滑块有可能溢出*/
.jqueryzoom img { width: 300px; }
/*ul li { float: left; margin-right: 5px; }*/
/*ul li img { width: 100px; height: 100px; }*/
    .cloudzoom-gallery-active{opacity: .5}
</style>
<!--引入cloudzoom的css和js，顺序不要错，先css，再jQuery再cloudzoom的js，这个cloudzoom也是需要jQuery支持的，其实很多插件都是基于jQuery开发的-->
<link href="{{asset('home/css/cloudzoom.css')}}" rel="stylesheet"/>

<script src="{{asset('home/js/jquery.min.js')}}"></script>
<script src="{{asset('home/js/cloudzoom.js')}}"></script>
<!--启动CloudZoom就可以了，quickStart()立即启动-->
<script type="text/javascript">
    CloudZoom.quickStart();
</script>

<!-- 主体结束 -->
   <section class="w">
    <div class="m-product-img">
<!--        <div class="handle">
            <div class="thumb">
                <ul>
                    <li class="n-hover"><img src="picture/58761ebc7d376a417e3e62f2a37f81de.jpg" alt="爱否【水滴】坚果Pro2 大弧边钢化膜" data-src="http://img002.fview.cn/Public/upload/peripheral/58761ebc7d376a417e3e62f2a37f81de.jpg"/></li><li ><img src="picture/f10df5eff9bf7161e1545b9831dbec8d.jpg" alt="爱否【水滴】坚果Pro2 大弧边钢化膜" data-src="http://img002.fview.cn/Public/upload/peripheral/f10df5eff9bf7161e1545b9831dbec8d.jpg"/></li>                </ul>
            </div>
            <a class="arrow up i-icon"></a>
            <a class="arrow down i-icon"></a>
        </div>-->
        <div class="jqueryzoom">
            <img id="img" class="cloudzoom" src="{{$goods->urls}}"
                 data-cloudzoom="zoomSizeMode:'image',zoomImage: '{{$goods->urls}}',autoInside: 30" alt="呵呵哒" title=""/>
        </div>
        <div class="thumb">
            <a class="backward"></a>
            <a class="forward_disabled"></a>
            <ul id="icon_list">
                <li class="n-hover"><img src="{{$goods->urls}}" alt="" data-src="http://img002.fview.cn/Public/upload/peripheral/58761ebc7d376a417e3e62f2a37f81de.jpg"></li>
        </div>
    </div>
    <div class="m-product-details n-peripheral" data-id='83' data-price='39.90'>
        <div class="title">
        <h1>{{$goods->gname}}</h1>
        </div>
        <p class="price">
            <span>价格</span>
            <strong id="price_price">{{$goods->price}}</strong>
        </p>
        <p class="price">
            <span>应付金额</span>
            <strong id="totalMoney">{{$goods->price}}</strong>
        </p>
        <ul>
        <div class="num c">
            <span>数量</span>
            <div class="u-buycount">
                <i class="i-icon sub" onclick="fun_del(this)"></i>
                <input type="text" name="num" id="num" value="1" />
                <i class="i-icon sup" onClick="fun_add(this)"></i>
            </div>
        </div>
        
        <form class="layui-form" method="post" action="/home/settlement/{{$goods['gid']}}">
            {{csrf_field()}}
            <input type="hidden" class="form-control input-sm" name="price" value="{{$goods['price']}}" maxlength="3" id="price">
            <input type="hidden" class="form-control input-sm" name="number" value="1" maxlength="3" id="number">
            <input type="hidden" class="form-control input-sm" name="gid" value="{{$goods['gid']}}" maxlength="3" id="number">
            <div class="action">
                <button class="layui-btn layui-btn-warm" onclick="member_sc(this,{{$goods['gid']}})">加入购物车</button>
                <button class="layui-btn" lay-filter="add" lay-submit="">立即购买</button>

                <button class="layui-btn layui-btn-normal" lay-filter="add" onclick="guanzhu({{$goods['gid']}})">收藏</button>
            </div>
        </form>
    </div>
</section>
<script type="text/JavaScript">

    function guanzhu(gid)
    {
         $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/shoucang',
          data:{'gid':gid},
          dataType : "Json",
          success : function(msg){
            alert(msg);
            if(msg){
                parent.location.reload(true);
                layer.msg('收藏成功', {icon: 1,time:500});
            }else{
                parent.location.reload(true);
                layer.msg('收藏失败', {icon: 1,time:500});
            }
          },error: function(){
            alert('asdf');
          }
        });
    }
    /*商品-收藏*/
    function shoucang()
    {

          $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/sc/'+id,
          data:{'num':num},
          dataType : "Json",
          success : function(msg){
            if(msg){
                parent.location.reload(true);
                layer.msg('收藏成功', {icon: 1,time:500});
            }else{
                parent.location.reload(true);
                layer.msg('收藏失败', {icon: 1,time:500});
            }
          }
        });


    }


      function member_sc(obj,id){
        //获取商品数量
        var num = $('#number').val()
          $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/sc/'+id,
          data:{'num':num},
          dataType : "Json",
          success : function(msg){
            if(msg){
                parent.location.reload(true);
                layer.msg('收藏成功', {icon: 1,time:500});
            }else{
                parent.location.reload(true);
                layer.msg('收藏失败', {icon: 1,time:500});
            }
          }
        });
      }
      // layui.use(['form','laydate','layer'], function(){
      //   var laydate = layui.laydate;
      //   var form = layui.form;
      //   var layer = layui.layer;
      //   //监听提交
      // form.on('submit(add)', function(data){
      //   //发异步，把数据提交给php
      //   $.ajax({
      //       headers: {
      //           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      //       },
      //       type : "POST",
      //       url : '/home/pay/store/'+{{$goods->gid}},
      //       data : data.field,
      //       dataType : "Json",
      //       success : function(msg){
      //           // console.log(msg)
      //           if(msg){
      //               layer.alert("支付成功", {icon: 6},function () {
      //                   // 获得frame索引
      //                   var index = parent.layer.getFrameIndex(window.name);
      //                   //关闭当前frame
      //                   parent.layer.close(index);
      //                   parent.location.reload(true);
      //               });
      //           }else{
      //               layer.alert("支付失败", {icon: 6},function () {
      //                   // 获得frame索引
      //                   var index = parent.layer.getFrameIndex(window.name);
      //                   //关闭当前frame
      //                   parent.layer.close(index);
      //                   parent.location.reload(true);
      //               });
      //           }
      //       }
      //   });
      //   return false;
      // });
      // });
          // 计算
        var totalMoney = document.getElementById('totalMoney');
        var price_price = document.getElementById('price_price');
        //减少商品
        function fun_del(obj){
            //获取商品数量
            var num = parseInt(obj.nextSibling.nextSibling.value);
            var new_num = num-1;
            //商品不能小于1
            if(new_num < 1){
               return new_num = num-1;  
            }
            obj.nextSibling.nextSibling.value = new_num;
             // 单个商品的价格
            var price = parseFloat(price_price.innerHTML);
             // 原来的总价格
            var totalMoney_val = parseFloat(totalMoney.innerHTML);
             // 赋值
            totalMoney.innerHTML = totalMoney_val-price;
            $('#number').attr('value',new_num)
            $('#price').attr('value',totalMoney_val-price)
        }
        //增加商品
        function fun_add(obj){
            // 获取价格和数据
            var num = parseInt(obj.previousSibling.previousSibling.value);
            var new_num = num+1;
            obj.previousSibling.previousSibling.value = new_num;
            // 单个商品的价格
            var price = parseFloat(price_price.innerHTML);
            // 原来的总价格
            var totalMoney_val = parseFloat(totalMoney.innerHTML);
            // 单个商品计算的总价格
            // var price_num = price * new_num;
            // 赋值
            totalMoney.innerHTML = totalMoney_val+price;
            $('#number').attr('value',new_num)
            $('#price').attr('value',totalMoney_val+price)
        }
</script>
@endsection