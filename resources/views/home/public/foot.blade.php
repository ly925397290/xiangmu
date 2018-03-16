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
                        <dl>
                            <dt>友情链接</dt>
                            <div id="link"></div>
                        </dl>
                    </div>
                    <p class="copyright"><a href="http://www.miibeian.gov.cn/">京ICP证160992号</a> Copyright© 2016-2021</p>
                </div>
                <div class="about">
                    <div class="servers c">
                        <div class='wecatimg c'><img src="{{asset('home/picture/wecat.jpg')}}"/></div>
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
    <script src="{{asset('home/js/pc.min.js')}}" id="zhichiload" ></script>
</body>
</html>

<script type="">
    $(function()
    {
        $.ajax({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type : "GET",
        url : '/home/index/links',
        success : function(msg){
            $('#link').html(msg)
          }
        });
    })
</script>