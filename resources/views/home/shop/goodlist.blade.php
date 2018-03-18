@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <section class="m-select-account">
            <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">商品列表</a>
            </div>
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
             

  