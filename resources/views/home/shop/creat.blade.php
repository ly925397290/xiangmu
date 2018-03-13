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
            <a class="item " href="/order/list.html"><i></i>购买订单</a>
            <a class="item " href="/saleorder/list.html"><i></i>回收服务</a>
           
        </div>
        <div class="list">
            <h3>信息管理</h3>
            <a class="item " href="/address/index.html"><i></i>地址管理</a>
            <a class="item n-active" href="/account/index.html"><i></i>账户管理</a>
        </div>
        <div class="list">
            <h3><a href="{{url('home/shop')}}">创建商铺</a></h3>
            <a class="item " href="{{url('/home/shop/deng')}}"><i></i>商铺审核进度</a>
           
        </div>
        <div class="list">
            <h3><a href="/help/help.html#sale"><i></i>常见问题</a></h3>
        </div>
    </nav>
</aside> 
    <div class="main">
        <section class="m-select-account">
            <div class="title">
                <strong><a href="{{url('home/shop')}}">创建商铺</a></strong>
                
                <a class="u-btn">退出创建</a>
            </div>

            <form  id="art_form" action="{{ url('home/shop/editAll') }}" method="post" enctype="multipart/form-data">
                 {{csrf_field()}}
            
            <br>
                <table border="1">
                    <tr>
                        <td width="5px">商品缩列图</td>
                        <td width="50px">商品名称</td>
                        <td width="50px">商品价格</td>
                        <td></td>
                        <td width="50px">商品状态</td>
                        <td width="150px">发布时间</td>
                        <td width="100px">商品描述</td>
                    </tr>
                     @foreach($goods as $k=>$v)
                    <tr>
                        
                        <td><img src="{{$v->urls}}" id="art_thumb_img">
             <input id="file_upload" name="file_upload" type="file" enctype="multipart/form-data" method="post">
                     
                        <script type="text/javascript">
$(function () {
$("#file_upload").change(function () {
uploadImage();                                 });
});                             function uploadImage() { //
判断是否有选择上传文件                                 var imgPath =
$("#file_upload").val();                                 if (imgPath == "") {
alert("请选择上传图片！");                                     return;
}                                 //判断上传文件的后缀名
var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);

                                if (strExtension != 'jpg' && strExtension != 'gif'
                                    && strExtension != 'png' && strExtension != 'bmp') {
                                    alert("请选择图片文件");
                                    return;
                                }
                           
                                // var myform = document.getElementById('art_from');

                               //将整个表单打包进formData
                        // var formData = new FormData($('#art_form')[0]);

                        //只将上传文件打包进formData
                                var formData = new FormData();
                                formData.append('file_upload',$('#file_upload')[0].files[0]);
                                // formData.append('_token','{{ csrf_token() }}');
                                 $.ajax({
                                    type: "POST",
                                    url: '{{url('/admin/goods/upload')}}',
                                     headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },

                                    data: formData,
                                    async: true,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    success: function(data) {
                                      console.log(data);
                                        $('#thumb').attr('src',data);
                                         $('#art_thumb_img').attr('src',data);
                                         $('#art_thumb').val(data);
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                                        alert("上传失败，请检查网络后重试");
                                    }
                                });
                            }
                        </script>
                        <style>
                            .uploadify{display:inline-block;}
                            .uploadify-button{border:none; border-radius:5px; margin-top:8px;}
                            table.add_tab tr td span.uploadify-button-text{color: #FFF; margin:0;}
                        </style>

                    </td>
                    <td><input type="text" name="gname[]" value="{{$v->gname}}"></td>
                            <td><input type="text" name="price[]" value="{{$v->price}}"></td>
                            <td> 

                            @if($v->status == 0)
                            <th>
                                 <input type="text" name="status[]" value="下架">
                                     下架 | 已上架
                            </th>
                            @else
                            <th>
                                <input type="text" name="status[]" value="已上架">
                                    下架 | 已上架
                            </th>
                            @endif</td>
                                <td>{{$v->addtime}}</td>
                                <td><a href="{{url('home/shop/write')}}">查看商品描述</a></td>
                        </tr>
                    @endforeach
                </table>


            <button  class="layui-btn" lay-filter="add" lay-submit="">
              批量修改
            </button>
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
             

  