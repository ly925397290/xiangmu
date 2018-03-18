@extends('home.personal.layout')
  @section('personal')
        <div class="main">
        <div class="m-uc-hd other">
            <div class="list">
                <a class="item n-active" data-cid="1" href="javascript:;" onclick="change(1)" id="1">全部订单</a>
                <a class="item" data-cid="2" href="javascript:;" onclick="change(2)" id="2">待发货</a>
                <a class="item" data-cid="3" href="javascript:;" onclick="change(3)" id="3">待收货</a>
                <a class="item" data-cid="4" href="javascript:;" onclick="change(4)" id="4">待评价</a>
                <a class="item" data-cid="5" href="javascript:;" onclick="change(5)" id="5">待检测</a>

            </div>
        </div>
        <table class="layui-table">
            <thead>
                <tr>
                    <th>订单编号</th>
                    <th>商品价格</th>
                    <th>订单时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="order">  

            </tbody>  
      </table>
    </div>
</section> 
 <script>
 /**点击链接某个链接颜色变化**/
 $(document).on('click','.m-uc-hd div a',function(){
    var _this = $(this);
    if(_this.hasClass('n-active'))return false;
    var cid = _this.data('cid');
    _this.addClass('n-active').siblings('a').removeClass('n-active');
})

 /******网页加载时自动获取全部订单******/
$(function(){
    $.ajax({
        type : "get",
        url : '/home/order/1.html',
        success : function(msg){
            $('#order').html(msg)
        }
    });
})
 /***通过AJAX改变订单内容****/
 function change(obj){
    $.ajax({
        type : "get",
        url : '/home/order/'+obj+'.html',
        success : function(msg){
            $('#order').html(msg)
        }
    });
 }
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
          //监听提交
          form.on('submit(add)', function(data){
            //发异步，把数据提交给php
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "POST",
                url : '/home/order/queren',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    console.log(msg)
                    if(msg){
                            layer.msg("确认收货成功", {icon: 6},function () {
                            location.reload(true);
                        });
                    }else{
                        layer.msg("确认收货失败", {icon: 6},function () {
                        location.reload(true);
                        });
                    }
                }
            });
            return false;
          });
        });
    </script>
    @endsection
    
  