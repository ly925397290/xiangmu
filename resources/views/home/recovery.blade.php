@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-sale-bar w"></section>
<section class="m-sale-selectv2">
    <hgroup class="w">
        <h2>请选择您要回收的</h2>
    </hgroup>
    <aside class="w">
        <a data-cid="1"><img src="picture/f33596e7dd49c96f668b19ff5c7a4eec.png"/><span>上传商品信息</span></a>
        <a data-cid="2"><img src="picture/c7fd936770c03c4c79726a6a2a3109de.png"/><span>已回收列表</span></a>
        <a data-cid="3"><img src="picture/6dc9274457fc15352a799bcc76f7c36e.png"/><span>待回收列表</span></a>    
    </aside>
    <div class="main m-load-rel">
        <div class="m-load-bg"></div>
        <div class="m-load">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
        <div class="w"></div>
    </div>
</section>

<section class="m-sale-answer w">
    <div class="answer-hd c">
        <h3 class="g">服务解答</h3>
        <a class="fr" href="/help/help.html">了解更多</a>
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
<script>
    $(function(){
        $(document).on('click','.m-sale-selectv2 aside a',function(){
            var _this = $(this);
            if(_this.hasClass('n-active'))return false;
            var cid = _this.data('cid');
            _this.addClass('n-active').siblings('a').removeClass('n-active');
            load(1);
            $.ajax({
                url:"/huishou/getbrand.html",
                type:'post',
                data:{cid:cid},
                dataType:'json',
                success:function(data){
                    if(data.status != 0){
                        $.amsg.p(data.msg,'n-warn');
                        return false;
                    }
                    $('.m-sale-selectv2 .main .w').empty().html(data.data);
                    load();
                }
            });
        })
        $(document).on('click','.m-sale-selectv2 .brand a',function(){
            var _this = $(this);
            if(_this.hasClass('n-active'))return false;
            var bid = _this.data('bid');
            var cid = $('.m-sale-selectv2 aside a.n-active').data('cid');
            _this.addClass('n-active').siblings().removeClass('n-active');
            load(1);
            $.ajax({
                url:"/huishou/getmodel.html",
                type:'post',
                data:{cid:cid,bid:bid},
                dataType:'json',
                success:function(data){
                    if(data.status != 0){
                        $.amsg.p(data.msg,'n-warn');
                        return false;
                    }
                    $('.m-sale-selectv2 .D-model').empty().html(data.data);
                    load();
                }
            });
        })
        function load(o){
            if(!o){
                $('.m-load-bg').hide().siblings('.m-load').hide();
                return false;
            }
            var h = $('.m-sale-selectv2 .main').height()+60;
            $('.m-load-bg').height(h).show().siblings('.m-load').show();
        }
        $('.m-sale-selectv2 aside a:eq(0)').click();
    })
</script>
@endsection
<!-- 主体结束 -->

