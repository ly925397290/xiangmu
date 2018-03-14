@extends('home.public.layout')
<!-- 主体开始 -->

@section('content')
    <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <!-- 头像 -->
            <a class="avatar"><img src="{{$user->show->header or '/upload/user/defal.jpg'}}"/></a>
            <!-- 昵称 -->
            <span>{{$user->uname or '你好'}}</span>
            <p class="phone">绑定手机号：{{$user->show->phone or '130********'}}</p>
        </div>
    </div>
</section>
<section class="m-uc w">
<aside class="m-uc-nav">
    <nav>
        <div class="list">
            <h3>我的订单</h3>
            <a class="item " href="{{url('home/order')}}"><i></i>我的订单</a>
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
            <a class="item " href="{{url('/home/goods/')}}"><i>发布商品</i></a>
            <a class="item n-active" href="{{url('/home/goods/show/')}}"><i>商品列表</i></a>
            <a class="item " href="{{url('/home/shop/shenhe/1')}}"><i>商铺审核进度</i></a> 
        </div>
    </nav>
</aside> 
    <div class="main">
        <section class="m-select-account">
            <div class="title">
                <strong><a href="{{url('home/shop')}}">商品列表</a></strong>
                
                <a class="u-btn">退出创建</a>
            </div>
<div class="x-body">
<form class="layui-form" id="art_form" action="{{ url('home/goods/editAll') }}" method="post" enctype="multipart/form-data">
 {{csrf_field()}}

<table class="layui-table">
<thead>
    <tr>
        <th >商品缩列图</th>
        <th >商品名称</th>
        <th >商品价格</th>
        <th >商品状态</th>
        <th >商品描述</th>
    </tr>
    </thead>
    <tbody>
     @foreach($goods as $k=>$v)
     <input type="hidden" name="id[]" value="{{$v->gid}}">
    <tr>
        <td>
            <img src="{{$v->urls}}" id="art_thumb_img">
            <input style="width:100px" id="file_upload" name="file_upload" type="file" >
            <input type="hidden" name="urls[]" value="{{$v->urls}}" id="art_thumb">
        </td>
        <td>
            <input style="width:100px" type="text" name="gname[]" value="{{$v->gname}}">
        </td>
         <td>
            <input style="width:100px" type="text" name="price[]" value="{{$v->price}}">
        </td>
        <td> 
            @if($v->status == 0)
                 <input style="width:100px" type="text" name="status[]" value="下架">
                     下架 | 已上架
            @else
                <input style="width:100px" type="text" name="status[]" value="已上架">
                    下架 | 已上架
            @endif
        </td>
        <td><a title="查看商品详情" href="{{url('home/shop/write')}}/{{$v->gid}}"><i class="layui-icon">&#xe642;</i></a></td>
    </tr>
    @endforeach
    </tbody>
    </table>
    <button  class="layui-btn" lay-filter="add" lay-submit="">
    批量修改
    </button>
    </form>
</div>

</section>
    </div>
</section>
 <style>
    .uploadify{display:inline-block;}
    .uploadify-button{border:none; border-radius:5px; margin-top:8px;}
    table.add_tab tr td span.uploadify-button-text{color: #FFF; margin:0;}
</style>
<script type="text/javascript">
$(function () {
    $("#file_upload").change(function(){
        uploadImage();                                 
    });});                             
function uploadImage() { 
var imgPath = $("#file_upload").val();
 // 判断是否有选择上传文件
var imgPath = $("#file_upload").val();
if (imgPath == "") {
  alert("请选择上传图片！");
  return;
}
//判断上传文件的后缀名
var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);

if (strExtension != 'jpg' && strExtension != 'gif'
  && strExtension != 'png' && strExtension != 'bmp') {
  alert("请选择图片文件");
  return;
}
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
         $('#art_thumb_img').attr('src',data);
         $('#art_thumb').val(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("上传失败，请检查网络后重试");
    }
});
}
</script>

@endsection
<!-- 主体结束 -->
             

  