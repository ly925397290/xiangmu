@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-sale-bar w"></section>
<section class="m-sale-selectv2">
    <hgroup class="w">
        <h2>输入要回收商品的信息</h2>
    </hgroup>
    <aside class="w">
    <div class="main m-load-rel">
    <br>                                                              <!--session-->
        <form class="layui-form" action="{{ url('home/recovery/')}}/{{1}}" method="post" enctype="multipart/form-data">
            {{csrf_field()}}
          <div class="layui-form-item">
             <div class="layui-inline">
              <select class="layui-form-label" name="cate_name" lay-verify="cate_name" required="" id="cate_name"> 
                    <option value="0">==请选择商品分类==</option>
                    @foreach($cate as $k=>$v)
                    <option value="{{$v['title']}}">{{$v['title']}}</option>
                    @endforeach
              </select>
                    <br>
                    <input placeholder="请输入商品名称" type="tel" name="good_name" lay-verify="good_name" autocomplete="off" class="layui-input">
                    <br>
                     <input id="file_upload" name="file_upload" type="file" multiple="true" lay-verify="file_upload" value="上传"> 
                     <input type="hidden" name="img" id="img" value="">
                    <img  id="art_thumb_img" width="300">
                    <br>
                    <input placeholder="请输入收货人" type="tel" name="people" lay-verify="people" autocomplete="off" class="layui-input">
                    <br>
                    <input placeholder="请输入收货手机号" type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input">
                    <br>
                    <input placeholder="请输入收货地址" type="tel" name="addr" lay-verify="addr" autocomplete="off" class="layui-input">
                    <br>
              <label for="L_repass" class="">
              </label>
              <button  class="layui-btn" lay-filter="add" lay-submit="">
                  增加
              </button>
          </div>
          </div>

      </form>
    
    </div>
</section>
<script>
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
//只将上传文件打包进formData
var formData = new FormData();
formData.append('file_upload',$('#file_upload')[0].files[0]);
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
            $('#art_thumb_img').attr('src',data);
             // $('#art_thumb_img').attr('src','{{ env('QINIU_YUMING') }}'+data);
             $('#img').val(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("上传失败，请检查网络后重试");
        }
    });
}
</script>
<section class="m-sale-answer w">
    <div class="answer-hd c">
        <h3 class="g">服务解答</h3>
        <a class="fr" href="{{url('home/aftersale')}}">了解更多</a>
    </div>
    <div class="answer-cell">
            <div class="text question"><span>Q：</span>回收的流程是什么样的？</div>
            <div class="text answer"><span>A：</span>请您登陆优雅商城网站（www.youyaba.cn）进行以下步骤：填写商品信息、估价、邮寄、优雅商城质检评估、确认成交价、完成交易。如果您还有任何其他的需求，可随时联系我们的在线客服，这边会及时为您解答的。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>请问我在回收我的商品前，需要了解什么呢？</div>
            <div class="text answer"><span>A：</span>回收商品前，您需要是法定成年人。并且您的商品，来自于合法渠道，对于偷盗、仿品等非法来源的商品，优雅商城有权保留商品，并移交相关部门处理。您在回收您的商品前，请您务必仔细阅读<a href="">《优雅商城产品回收服务条款》</a>。当您使用优雅商城的回收业务时，默认您已经同意此条款，并完全接受此条款的全部内容，本条款即在您与优雅商城之间产生法律效力。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>请问，我在邮寄我的商品前，要对商品做什么操作呢？</div>
            <div class="text answer"><span>A：</span>优雅商城以全国包邮的方式，在您提交订单后，我们会主动联系快递公司上门取件，请您将要售卖的产品及时准备好，请不要将不必要的物品邮寄过来，若造成遗失，优雅商城将不承担任何责任。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>优雅商城收到我的商品后，会做拆机检测吗？</div>
            <div class="text answer"><span>A：</span>优雅商城承诺对于用户的每台商品都采用标准的质检流程，并7*24小时位于高清监控之下。不过请您务必在优雅商城寄售您的设备前了解并知道，优雅商城的检测流程中已经包括对您的设备做简单拆封操作这有可能导致您设备失去官方保修。如果您介意，请不要在优雅商城出售商品。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>请问我寄出商品后，什么时候给我打款呢？</div>
            <div class="text answer"><span>A：</span>当优雅商城收到您的商品后，经过商城专业工程师检测，我们会将质检结果推送到您的个人中心。根据商品的实际情况，检测后的最终成交价格将与您进行最后的确认。如果工程师检测的结果与您的评估一致，或您同意最后工程师的估价后，并在个人中心确认，优雅商城将会在您确认后的两个工作日为您打款。如果您与优雅商城就您销售的商品的最终成交价格无法协商一致，您可以在个人中心取消本次交易，申请退货，退货邮费将由优雅商城承担。优雅商城承诺您取消交易后的两个工作日将您的商品寄出。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>请问我的商品寄出后，需要多长时间才能检测完毕呢？</div>
            <div class="text answer"><span>A：</span>您好，当优雅商城收到您的商品后，一般的检测时间为两个工作日，检测完毕后，工程师会给出您商品的最终估价。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>您好，我的商品已经在个人中心里确认了交易，但是我后悔了，商品能退给我吗？</div>
            <div class="text answer"><span>A：</span>当您提交的评估价格与优雅商城一致或您在个人中心确认交易时，优雅商城将无法退回您的商品，请您谅解。</div>
        </div><div class="answer-cell">
            <div class="text question"><span>Q：</span>我提交了订单，商品已经邮寄给你们了，可是我发现我的个人中心却什么都没有？</div>
            <div class="text answer"><span>A：</span>您好，首先请您先不用担心。鉴于某些商品价格的特殊性，优雅商城系统会定期调整价格，回收产品的估价应以系统的回收订单为准。订单的有效期为7天，若超过7天，订单将失效。所以建议您在提交订单后，及时将您的商品邮寄给我们，如果您的订单已经失效，也请及时联系我们的在线客服，同时您需要重新提交回收订单。</div>
        </div></section>

@endsection
<!-- 主体结束 -->

