@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">账户管理</a>
            </div>
        </div>
        <form class="layui-form" method="post" action="/home/account/update/{{session('user')['uid']}}" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="layui-form-item">
              <label for="L_username" class="layui-form-label">
                  <span class="x-red">*</span>头像
              </label>
              <div class="layui-input-inline">
                  <input id="file_upload" name="file_upload" type="file" multiple="true" >
              </div>
              <input type="hidden" name="header" id="art_thumb" value="">
            {{--上传成功后显示上传图片--}}
            <img src="{{$user['header'] or ''}}" id="art_thumb_img" alt="" style="width:100px;">
          </div>
          <div class="layui-form-item">
              <label for="L_username" class="layui-form-label">
                  <span class="x-red">*</span>昵称
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="L_username" name="uname" required="" lay-verify="nikename"
                  autocomplete="off" class="layui-input" value="{{$nikname['uname'] or ''}}">
              </div>
          </div>
          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
                  <span class="x-red">*</span>手机号
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="L_repass" name="phone" required="" lay-verify="repass"
                  autocomplete="off" class="layui-input" value="{{$user->phone or ''}}">
              </div>
          </div>
          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button  class="layui-btn" lay-filter="add" lay-submit="">
                  修改
              </button>
          </div>
      </form>
    </div>
</section>
<script type="text/javascript">
    $(function () {
        $("#file_upload").change(function () {
            uploadImage();
        });
    });
    function uploadImage() {
//                            判断是否有选择上传文件
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
   
        // var myform = document.getElementById('art_from');

       //将整个表单打包进formData
        // var formData = new FormData($('#art_form')[0]);

    // 只将上传文件打包进formData
    var formData = new FormData();
    formData.append('file_upload',$('#file_upload')[0].files[0]);
         $.ajax({
            type: "POST",
            url: '{{url('home/account/upload')}}',
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            data: formData,
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data) {
                $('#art_thumb_img').attr('src',data);
                 // $('#art_thumb_img').attr('src','{{ env('QINIU_YUMING') }}'+data);
                 $('#art_thumb').val(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("上传失败，请检查网络后重试");
            }
        });
    }
</script>
  @endsection
             

