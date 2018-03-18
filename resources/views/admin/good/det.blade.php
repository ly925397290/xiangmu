<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">演示</a>
        <a>
          <cite>导航元素</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        
      </div>

        
    <form action="{{url('admin/goods/editAll')}}" method="post" enctype="multipart/form-data">
      {{csrf_field()}}
      <table class="layui-table">
        <thead>
          <tr>

            <th width="100">项目名称</th>            
            <th width="">内容</th>
            
          </tr>
        </thead>
        <tbody>
            <tr>
            <th width="100">商品ID号</th>            
            <th width="">{{$goods->gid}}</th>
            <input type="hidden" name="gid" value="{{$goods->gid}}">
          </tr>

           
            <tr>
           <th width="">商品所属分类</th>            
           <th width="">{{$goods->cid}}</th>
           <input type="hidden" name="cid" value="{{$goods->cid}}">
            </tr>
            <tr>
           <th width="">商品名称</th>            
           <th width="">{!!$goods->gname!!}</th>
           
            </tr>

            <tr>
           <th width="">商品缩略图</th>            
           <th width="">
            <img src="{{$goods->urls}}" id="art_thumb_img">
             <input id="file_upload" name="file_upload" type="file" enctype="multipart/form-data" method="post">
             <input id="art_thumb" name="urls" type="hidden" >
                     
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

           </th>
            
            </tr>
            <tr>
           <th width="">商品价格</th>            
           <th width="">{!!$goods->price!!}</th>
         
            </tr>
            <tr>
           <th width="">商品发表时间</th>            
           <th width="">{{$goods->addtime}}</th>
          
            </tr>
          <tr>
           <th width="">商品状态</th>  
              @if($goods->status == 0)
              <th>
               <input type="text" name="" value="不显示">
               不显示 | 已上架
              </th>
              @else
                <th>
                <input type="text" name="" value="已上架">
                不显示 | 已上架
                </th>
              @endif
               
             
            </tr>
            <tr>
           <th width="">商品库存</th>            
           <th width="">{!!$goods->inven!!}</th>
          
            </tr>
          <tr>
           <th width="">商品描述</th>            
           <th width="">
            {!!$goods['gdesc']!!}
            </th>
        </tr>
         <tr>
           <th width="">商品评论</th>            
           <th width=""></th>
      
        </tr>
           
        </tbody>
        

      </table>

      <button  class="layui-btn" lay-filter="add" lay-submit="">
              批量修改
      </button>
      
    </form>

           <div class="page">
            
          </div>
      
  </body>

</html>
