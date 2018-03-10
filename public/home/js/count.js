$(function(){
    //推广码
    var ac = '';
    //来源
    var ref = '';
    if (document.referrer.length > 0) {
        ref = document.referrer;  
    }
    try {
        if (ref.length == 0 && opener.location.href.length > 0) {
            ref = opener.location.href;  
        }
    }catch(e){}

    //域名
    var refdomian = ref?ref.match(/\/{2}[a-zA-Z0-9\.]{3,}\/{1}/)[0].slice(2,-1):'';
    //来源
    var source = '';
    //关键词
    var keyword = '';
    //搜索
    var search = ref.substr(ref.indexOf("?")+1);
    if (search){
        try{
            var query = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
            $.each(query, function(k, v){
                keywords(k,v)
            });
        }catch(e){
            console.log(e);
        }
    }

    var search2 = location.search.substring(1);
    if (search2){
        try{
            var query = JSON.parse('{"' + decodeURIComponent(search2).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
            $.each(query, function(k, v){
                if(k == 'ac'){
                    ac = v;
                }
            });
        }catch(e){
            console.log(e);
        }
    }

    function keywords(k,v){
        switch(refdomian)
        {
        case 'www.baidu.com':
            source = '百度';
            if(k == 'wd')keyword = v;
            break;
        case 'm.baidu.com':
            source = '百度WAP';
            if(k == 'word')keyword = v;
            break;
        case 'www.so.com':
            source = '360搜索';
            if(k == 'q')keyword = v;
            break;
        case 'm.so.com':
            source = '360搜索WAP';
            if(k == 'q')keyword = v;
            break;
        case 'www.sogou.com':
            source = '搜狗';
            if(k == 'query')keyword = v;
            break;
        case 'm.sogou.com':
            source = '搜狗WAP';
            if(k == 'keyword')keyword = v;
            break;
        default:
            source = refdomian;
        }
    }
    console.log(ac)
    console.log(source)
    console.log(keyword)

    var td = {};
    td['type'] = 1;//平台
    td['adcode'] = ac;//推广码
    td['source'] = source;//来源
    td['keyword'] = keyword;//关键词
    td['page'] = $('body').data('tpage');//当前页面
    td['product'] = $('body').data('tproduct');//包含产品
    td['userid'] = $('body').data('tuserid');//用户ID

    $.post('http://tt.aifou.cn/uva',td,function(data){},"jsonp");//uv统计
});