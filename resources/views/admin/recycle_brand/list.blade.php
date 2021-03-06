<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
    <link rel="stylesheet" href="{{asset('admin/css/font.css')}}">
    <link rel="stylesheet" href="{{asset('admin/css/xadmin.css')}}">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{asset('admin/lib/layui/layui.js')}}" charset="utf-8"></script>
    <script type="text/javascript" src="{{asset('admin/js/xadmin.js')}}"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
  <body>
    <div class="x-body">
        <div class="layui-row">
            <form class="layui-form layui-col-md12 x-so layui-form-pane"  enctype="multipart/form-data" method="post">
                {{csrf_field()}}
                <div class="layui-form-pane" style="margin-top: 15px;">
                    <div class="layui-form-item">
                        <label class="layui-form-label" style="width:100px">所属分类</label>
                            <div class="layui-input-inline" style="width:120px;text-align: left">
                                <select class="layui-input" name="cate_id">
                                    <option value="0">==请选择分类==</option>
                                     @foreach($cates as $cate)
                                        <option value="{{$cate->id}}"><?php echo str_repeat("|----",1*$cate->lev);?> {{$cate->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        <div class="layui-input-inline" style="width:120px">
                            <input type="text" class="layui-input" placeholder="分类名" name="brand">
                        </div>
                        <div class="layui-input-inline layui-upload" style="width:120px">
                            <input id="file_upload" name="file_upload" type="file" multiple="true" >
                        </div>
                        <div class="layui-input-inline layui-upload" style="width:120px">
                            <input type="hidden" name="img" id="art_thumb" value="">
                            <img src="" id="art_thumb_img" alt="" style="width:100px;">
                        </div>
                        <div class="layui-input-inline" style="width:80px">
                            <button  class="layui-btn" lay-filter="add" lay-submit="">增加</button>
                        </div>
                    </div>
                </div> 
            </form>
        </div>
        <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>ID</th>
            <th>所属分类</th>
            <th>品牌名</th>
            <th>品牌图片</th>
            <th>操作</th>
            </tr>
        </thead>
        <tbody>
            @foreach($brand as $v)
            <tr>
              <td>
                <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='{{$v->uid}}'><i class="layui-icon">&#xe605;</i></div>
              </td>
              <td>{{$v->id or ''}}</td>
              <td>{{$v->cate_id or ''}}</td>
              <td>{{$v->brand or ''}}</td>
              <td><img src="{{$v->img or ''}}" width="50"></td>
                <td>
                <a title="删除" onclick="member_del(this,'{{$v->uid}}')" href="javascript:;">
                  <i class="layui-icon">&#xe640;</i>
                </a>
              </td>
          </tr>
            @endforeach
        </tbody>
      </table>
      <div class="page">
        {!! $brand->render() !!}
      </div>
    </div>
    <script type="text/JavaScript">
        /****文件上传处理****/
        $(function () {
            $("#file_upload").change(function () {
                uploadImage();
            });
        });
        function uploadImage() {
        //判断是否有选择上传文件
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

            //只将上传文件打包进formData
            var formData = new FormData();
            formData.append('file_upload',$('#file_upload')[0].files[0]);
             $.ajax({
                type: "POST",
                url: '{{url('/admin/brand/upload')}}',
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
                     $('#art_thumb').val(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("上传失败，请检查网络后重试");
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
                url : '/admin/brand',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    // console.log(msg)
                    if(msg){
                        layer.msg("增加成功", {icon: 6},function () {
                            location.reload(true);
                        });
                    }else{
                        layer.msg("增加失败", {icon: 6},function () {
                           location.reload(true);
                        });
                    }
                }
            });
            return false;
          });

        });
    </script>
  </body>
</html>
 