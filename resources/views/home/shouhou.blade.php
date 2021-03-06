﻿<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>优雅吧二手商城</title>

<meta name="keywords" content="优雅吧youyaba.cn-专业的二手商城" />
<meta name="description" content="优雅吧youyaba.cn-专业的二手商城,提供网购、回收一条龙服务,为您提供愉悦的网上购物体验!" />
<meta name="baidu-site-verification" content="PcteigWN18" />
<link rel="icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link href="css/style.css" rel="stylesheet"/>
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/common.js"></script>
<script src="js/aform.js"></script>
</head>
<body  data-tpage="首页" data-tproduct="" data-tuserid="148240">
<header class="m-header">
        <!--l-proBarClear l-onlyUupperPart -->
    <div class="header-c  l-key-index">
        <div class="upper">
        <div class="headerW">
            <a class="logo" href="#">
                <img src="picture/logo.png" alt="爱否商城"/>
            </a>
            <nav class="nav">
                <a href="#">商城首页</a>
                <a href="回收.html">回收服务</a>
                <a href="#">精品推荐</a>
            </nav>
            <!---->
            <div class="cart">
                <a class="cartStyle">
                    <i class="i-icon"></i>
                    <span>购物车</span> <em>0</em>  </a>
                <div class="m-user-cart">
                    <i class="i-icon arrow"></i>
                    <div class="wrap">
                        <div class="n-none">
                            <img src="picture/index.png"><p>空空如也<br>赶紧去挑选几件中意商品吧</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user">
                                <div class="uname">
                    <a class="avatar">Mr.feng</a>
                    <div class="menu">
                        <i class="i-icon arrow"></i>
                        <ul>
                            <li class="listItem"><a href="#">我的地址</a></li>
                            <li class="listItem"><a href="#">我的账户</a></li>
                            <li class="boderBottom"></li>
                            <li class="listItem"><a href="#">常见问题</a></li>
                            <li class="listItem"><a href="#">退出登录</a></li>
                        </ul>
                    </div>
                </div>
                <div class="order">
                    <a>我的订单</a>
                    <div class="menu">
                        <i class="i-icon arrow"></i>
                        <ul>
                            <li class="listItem"><a href="#">收购订单<em>1</em></a></li>
                            <li class="listItem"><a href="#">回收订单<em>1</em></a></li>
                            <li class="listItem"><a href="#">回退订单</a></li>
                        </ul>
                    </div>
                </div>
                <script>
                    $(function(){
                        var bindphone = 1;
                        if(bindphone == 0){
                            $.ajax({
                                url:'/bindphone/index.html',
                                type:'get',
                                dataType:'json',
                                success:function(data){
                                    if($('#onlyone'))$('#onlyone').remove();
                                    $('body').append(data.html);
                                }
                            });
                        }
                        $(document).on('click','.m-header a.signout',function(){
                            $.ajax({
                                url:'/tools/signout.html',
                                type:'get',
                                dataType:'json',
                                success:function(data){
                                    if(data.status == 0){
                                        location.reload(true);
                                    }
                                }
                            });
                        })
                    })
                </script>
                        </div>
        </div>
        </div>
        <!--bottombar-->
        <div class="lower">
            <div class="headerW">
                <a class="logo" href="#">
                    <img src="picture/logo.png" alt="爱否商城">
                </a>
                <ul class="product-bar">
                    <li>
                        <a href="#" class="pointer" data-cid="1" >手机</a>
                    </li>
                    <li>
                        <a href="#" class="pointer" data-cid="2" >平板</a>
                    </li>
                    <li>
                        <a href="#" class="pointer" data-cid="3" >笔记本</a>
                    </li>                    
                    <li>
                        <a href="#" class="n-per">精选配件</a>
                    </li>
                </ul>
           </div>
        </div>
        
    </div>
</header>
   <div class="w">
    <div class="m-sale-qa">
        <dl>
            <dt class=""><span class="s-point-color">回收的流程是什么样的？</span></dt>
                <dd style="display: none;">请您登陆爱否商城网站（www.aifou.cn）进行以下步骤：选取机型、参数、填写串号、估价、邮寄、爱否商城质检评估、确认成交价、完成交易。如果您还有任何其他的需求，可随时联系我们的在线客服，这边会及时为您解答的。</dd><dt class=""><span class="s-point-color">请问我在回收我的手机前，需要了解什么呢？</span></dt>
                <dd style="display: none;">回收手机前，您需要是法定成年人。并且您的机器，来自于合法渠道，对于偷盗、山寨等非法来源的机器，爱否商城有权保留机器，并移交相关部门处理。您在回收您的手机前，请您务必仔细阅读《爱否商城产品回收服务条款》。当您使用爱否商城的回收业务时，默认您已经同意此条款，并完全接受此条款的全部内容，本条款即在您与爱否商城之间产生法律效力。</dd><dt class=""><span class="s-point-color">爱否商城销售的设备，有质量保证吗？</span></dt>
                <dd style="display: none;">每一台爱否商城销售的设备，都经过专业工程师的40余项的深度检测和机身清洁保养，同时爱否商城提供同行业内领先的7天无理由退货和180天免费保修服务。</dd><dt class=""><span class="s-point-color">我收到设备后，发现质量问题影响使用，该怎么办？</span></dt>
                <dd style="display: none;">当您购买设备后7天内对设备不满意或者发现质量问题都可以申请退货服务。当您实际收货之日起的180天内设备本身出现质量问题，爱否商城提供保修服务。</dd><dt class=""><span class="s-point-color">爱否商城销售的设备用的什么包装，有赠送配件吗？</span></dt>
                <dd style="display: none;">爱否商城为每一款设备都特别定制了精美的包装，并附送了感谢卡、卡针。爱否商城销售的设备（除S级别外）一般都不包含充电头、数据线、耳机等配件，如果您需要，请在爱否商城精品配件区域（http://www.aifou.cn/peripheral/list.html）另行购买。</dd><dt class=""><span class="s-point-color">爱否商城购买的设备是否提供发票呢？</span></dt>
                <dd style="display: none;">您在爱否商城购买的设备，爱否商城通过机身序列号或订单号码为设备提供保修，并不需要您出示包装、发票等。如果您需要发票，请收到设备7天后，通过爱否商城在线客服申请，我们会将发票免费邮寄给您。</dd><dt class=""><span class="s-point-color">我购买的机器，有原机主使用的数据残留吗？</span></dt>
                <dd style="display: none;">爱否商城售卖的机器，均来自于原机主的闲置回收。在上架前，都会将其注册信息和数据彻底删除，并恢复出厂设置，您收到设备后，可以绑定任何ID，就像新机一样。</dd><dt class=""><span class="s-point-color">爱否商城的设备，售出后，支持补差价吗？</span></dt>
                <dd style="display: none;">二手设备的价格随市场波动非常剧烈，您在购买后，一般不支持降价补差价，请您谅解。</dd><dt class=""><span class="s-point-color">爱否商城销售的设备来源的渠道是什么呢？</span></dt>
                <dd style="display: none;">爱否商城所销售的设备均来自于合法正规渠道，包括但不限于顾客闲置、国内专业回收机构等，从源头保证机器处于良好的使用状态，并享有爱否商城180天的免费保修服务。请您放心购买。</dd><dt class=""><span class="s-point-color">我购买的设备不要了，也没有发货，为什么还要收取1.5%的手续费？</span></dt>
                <dd style="display: none;">爱否商城属于独立商户，在您通过支付宝或者微信购买爱否商城设备时，爱否商城要为此支付约1.5%的手续费用，费用收取完全来自于支付宝（微信），爱否商城并未收取任何费用，请您谅解。</dd><dt class=""><span class="s-point-color">你们的手机从哪里发货呢？</span></dt>
                <dd style="display: none;">爱否商城检测中心位于深圳，目前，手机、配件都从深圳发出，具体货到时间以物流信息为主。</dd><dt class=""><span class="s-point-color">我购买手机后，什么时候发货呢？发的是什么快递？</span></dt>
                <dd style="display: none;">如果您在当天四点前下单，当日可以发货（周末及国家法定假日除外），因为电子产品国家规定只能走陆运，顺丰陆运一般是3天左右时间到目的地，爱否商城承诺您下单之后，两个工作日完成发货。</dd><dt class=""><span class="s-point-color">客服的工作时间是什么时候？</span></dt>
                <dd style="display: none;">爱否商城客服的服务时间是早9:30-晚6:00；爱否商城仅以在线客服的形式处理售前和售后问题。您可以关注我们的微信公众号“爱否科技”，选择在线客服，如果其他时间在线客服不在，您可以选择我们的智慧机器人为您解答疑惑。</dd><dt class=""><span class="s-point-color">请问，我在邮寄我的手机前，要对手机做什么操作呢？</span></dt>
                <dd style="display: none;">爱否商城以全国包邮的方式，在您提交订单后，我们会主动联系快递公司上门取件，请您将要售卖的产品及时准备好（对于手机类，可能还需要您简单包装，解除绑定账号，备份数据等），请不要将不必要的物品（手机三包凭证，配件，原装包装盒等）邮寄过来，若造成遗失，爱否商城将不承担任何责任。</dd><dt class=""><span class="s-point-color">爱否商城收到我的机器后，会做拆机检测吗？</span></dt>
                <dd style="display: none;">爱否商城承诺对于用户的每台机器都采用标准的质检流程，并7*24小时位于高清监控之下。不过请您务必在爱否商城寄售您的设备前了解并知道，爱否商城的检测流程中已经包括对您的设备做简单拆机操作，包括并不限于打开后壳，检测是否有主板维修、进水等现象，这有可能导致您设备失去官方保修。如果您介意，请不要在爱否商城售机。</dd><dt class=""><span class="s-point-color">请问我寄出手机后，什么时候给我打款呢？</span></dt>
                <dd style="display: none;">当爱否商城收到您的手机后，经过商城专业工程师检测，我们会将质检结果推送到您的个人中心。根据机器的实际情况，检测后的最终成交价格将与您进行最后的确认。如果工程师检测的结果与您的评估一致（则无需您的确认），或您同意最后工程师的估价后，并在个人中心确认，爱否商城将会在您确认后的两个工作日为您打款。如果您与爱否商城就您销售的手机的最终成交价格无法协商一致，您可以在个人中心取消本次交易，申请退货，退货邮费将由爱否商城承担（但山寨机、高仿机、赃机除外）。爱否商城承诺您取消交易后的两个工作日将您的手机寄出。</dd><dt class=""><span class="s-point-color">请问我的手机寄出后，需要多长时间才能检测完毕呢？</span></dt>
                <dd style="display: none;">您好，当爱否商城收到您的手机后，一般的检测时间为两个工作日，检测完毕后，工程师会给出您手机的最终估价。</dd><dt class=""><span class="s-point-color">您好，我的手机已经在个人中心里确认了交易，但是我后悔了，手机能退给我吗？</span></dt>
                <dd style="display: none;">当您提交的评估价格与爱否商城一致或您在个人中心确认交易时，爱否商城将无法退回您的设备，请您谅解。</dd><dt class=""><span class="s-point-color">我提交了订单，手机已经邮寄给你们了，可是我发现我的个人中心却什么都没有？</span></dt>
                <dd style="display: none;">您好，首先请您先不用担心。鉴于电子产品价格的特殊性，爱否商城系统会定期调整价格，回收产品的估价应以系统的回收订单为准。订单的有效期为7天，若超过7天，订单将失效。所以建议您在提交订单后，及时将您的手机邮寄给我们，如果您的订单已经失效，也请及时联系我们的在线客服，同时您需要重新估价并提交回收订单。</dd><dt class=""><span class="s-point-color">我的手机邮寄了，爱否商城收到货后，会直接维修吗？</span></dt>
                <dd style="display: none;">当爱否商城收到您的设备后，会对您的设备进行检测，并告知您的设备具体存在的故障问题，并核对与您在提交的订单中选择的机型故障是否相符。若故障相符，相应的维修方案和价格就是您当时提交的订单。若故障不符，工程师会将检测后的实际故障告知于您，并会将由于故障变更而导致维修方案和价格的差异和您进行解释和确认。这些都会在您注册的个人中心中详细的展示，待您同意维修方案和维修价格，并支付款项后，爱否商城的工程师才会开始为您的设备进行维修。</dd><dt class=""><span class="s-point-color">请问，我如果要维修我的手机，需要做什么准备呢？</span></dt>
                <dd style="display: none;">爱否商城目前仅提供寄修服务。具体信息，您可以阅读《爱否商城维修服务条款》。</dd><dt class=""><span class="s-point-color">如果我的设备被你们修坏了，该怎么办呢？</span></dt>
                <dd style="display: none;">如果维修设备在爱否商城维修期间受损、丢失或因维修失误而造成的其他故障，爱否商城会且仅会承担维修成本及与检修设备硬件相同型号（不保证地区版本）的赔偿责任，爱否商城不会承担因此产生的任何其它后果及责任。</dd><dt class=""><span class="s-point-color">你们的维修售后怎么保障的？</span></dt>
                <dd style="display: none;">爱否商城承诺对仅在爱否商城进行维修且维修成功的设备提供180天故障点配件免费保修服务，以维修设备签收日算。</dd><dt class=""><span class="s-point-color">请问在爱否商城维修机器后，我的官方保修还在吗？</span></dt>
                <dd style="display: none;">当您使用爱否商城提供的维修服务后，可能导致您无法使用此设备官方品牌提供的售后服务，如果您介意，请不要在爱否商城寄修设备。</dd><dt class=""><span class="s-point-color">请问我提交订单后，多久将手机邮寄给爱否商城？</span></dt>
                <dd style="display: none;">爱否商城在收到您提交的订单24小时内，会预约顺丰上门取件。请您及时准备好您的手机，解除账号（icloud账户）和开机密码。爱否商城会根据市场配件和服务价格变动，对系统价格不定期调整。爱否商城对于您提交的订单，系统默认保留7天有效期，如果7天内我们还未收到您寄修的设备，将对订单作废处理。如果您还需要我们的寄修服务，请您重新提交订单，维修价格以新订单为准。</dd><dt class=""><span class="s-point-color">请问一般什么情况的机器故障你们维修不了？</span></dt>
                <dd style="display: none;">如果有以下情况，爱否商城将可能无法为您提供维修服务：
1. 设备曾经有过维修、进水，或在非官方售后进行维修的经历；
2. 经评估后，整机维修的价格过高，接近或者将超过新机价格；
3. 由于没有官方授权，无法为您提供官方认证配件，只提供参照原装品质进行检测的配件。（出于品质管理需要，配件可能不是全新，但使用品质与全新配件无显著差异。）如果您非常介意；
4. 检测完毕并告知维修方案后，超过三天您未付款或失联；
5. 您寄送的设备实际故障与提交的故障信息不符且不接受爱否商城实际报价；</dd>        </dl>
    </div>
</div>
<script>
    $(function(){
        $('.m-sale-qa dt').on('click',function(){
            if($(this).hasClass('n-active')){
                $(this).removeClass('n-active').next().hide();
            }else{
                $('.m-sale-qa dt').removeClass('n-active');
                $('.m-sale-qa dd').hide();
                $(this).addClass('n-active').next().show();
            }
        })
    });
</script>
            
    <footer class="m-footer">
        <div class="content">
            <div class="w">
                <div class="help">
                    <div class='c'>
                        <dl>
                            <dt>服务条款</dt>
                            <dd><a target="_blank" href="http://www.aifou.cn/article/index/issue/pj.html">评级标准</a></dd>
                            <dd><a target="_blank" href="http://www.aifou.cn/article/index/issue/sh.html">售后服务条款</a></dd>
                            <dd><a target="_blank" href="http://www.aifou.cn/article/index/issue/hs.html">回收服务条款</a></dd>
                            <dd><a target="_blank" href="http://www.aifou.cn/article/index/issue/wx.html">维修服务条款</a></dd>
                        </dl>
                        <dl>
                            <dt>为您解答</dt>
                            <dd><a target="_blank" href="http://www.aifou.cn/help/help.html">常见问题</a></dd>
                            <dd><a target="_blank" href="http://www.aifou.cn/careers/index.html">招贤纳士</a></dd>
                        </dl>
                    </div>
                    <p class="copyright"><a href="http://www.miibeian.gov.cn/">京ICP证160992号</a> Copyright© 2016-2021</p>
                </div>
                <div class="about">
                    <div class="servers c">
                        <div class='wecatimg c'><img src='picture/wecat.jpg'/></div>
                        <p class='media'>
                            <a class='weibo' href='http://weibo.com/FViewReLife'><i class='i-icon'></i><span>新浪微博</span></a>
                            <a class='wecat'>关注微信客服</a>
                        </p>
<!--                        <p class='time'>客服在线时间：9:00-18:00</p>-->
                        <p class='time'>客服热线：4001880166</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>

    <div class="u-tool">
        <a class="top i-icon"></a>
    </div>
<!--    <style>
        #cnzz_stat_icon_1259887539{display:none;}
    </style>
   <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1259887539'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1259887539' type='text/javascript'%3E%3C/script%3E"));</script>-->
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?c521bcb9908e634b591b4ddaae2d13f9";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
<!--    <script src="js/count.js"></script>-->
    <script src="js/pc.min.js" id="zhichiload" ></script>
</body>
</html>