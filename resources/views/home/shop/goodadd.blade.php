@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <section class="m-select-account">
            <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">发布商品</a>
            </div>
        </div>
          @if(isset($cate))
            <form  class="layui-form" action="{{ url('home/goods') }}" method="post" enctype="multipart/form-data">
                 {{csrf_field()}}
                 <br>
           
              <div class="layui-form-item">
              <label for="L_pass" class="layui-form-label" style="width:100px">
                  <span class="x-red">*</span>商品分类
              </label>
              <div class="layui-input-inline">
                  <select class="layui-input" name="cid">
                      <option value="0">请选择</option>
                      @foreach($cate as $k=>$v)
                      <option value="{{$v['id']}}">{{$v['title']}}</option>
                      @endforeach
                  </select>
                </div>
              </div>

                <div class="layui-form-item">
                  <label for="username" class="layui-form-label" style="width:100px">
                      <span class="x-red">*</span>商品状态
                  </label>
                  <div class="layui-input-inline">
                      <select id="status" name="status" class="valid">
                        <option value="1">上架</option>
                        <option value="0">下架</option>
                      </select>
                  </div>
                </div>
                
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label" style="width:100px">
                     <span class="x-red">*</span>商品名称
                  </label>
                  <div class="layui-input-inline">
                      <input type="text" id="user-name" class="layui-input" placeholder="商品名称" name="gname">
                  </div>
                </div>

                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label" style="width:100px">
                     <span class="x-red">*</span>商品价格
                  </label>
                  <div class="layui-input-inline">
                      <input id="user-phone" placeholder="商品价格" class="layui-input" type="text" name="price">
                  </div>
                </div>

                <div class="am-form-group">
               <div class="layui-form-item">
           <div class="layui-form-item">
              <label for="L_username" class="layui-form-label" style="width:100px">
                     <span class="x-red">*</span>缩略图
                  </label>
              <td> 
                  <input type="file" id="file_upload" name="file_upload" value="">
                  <input type="hidden" name="urls" id="urls" value="">
                  <img id="art_thumb_img" width="200">
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
                      //只将上传文件打包进formData
                      var formData = new FormData();
                      formData.append('file_upload',$('#file_upload')[0].files[0]);
                               $.ajax({
                                  type: "POST",
                                  url: '{{url('/home/goods/upload')}}',
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
                                      $('#urls').val(data);
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
              </div>

            </div>

            <div class="layui-form-item layui-form-text">
              <label for="L_username" class="layui-form-label" style="width:100px">
                     <span class="x-red">*</span>商品描述
                  </label>
              <div class="layui-input-block">
                <textarea placeholder="请输入内容" name="gdesc" class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="am-form-group">
                <div class="am-u-sm-9 am-u-sm-push-3" style="padding:0px 120px">
                    <button class="layui-btn layui-btn-normal">确认</button>
                    <button class="layui-btn layui-btn-danger">取消</button>
                </div>
            </div>
        </form>
    </div>
    @else
    您还没有创建店铺
    @endif
</div>
@endsection
<!-- 主体结束 -->
             

  