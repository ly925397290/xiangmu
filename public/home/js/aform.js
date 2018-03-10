//aform.aoove.com
;
(function ($) {
    'use strict';
    var Aform = function (element, options) {
        this.options = options;
        this.$element = $(element);
    }
    //事件
    Aform.prototype.events = function () {
        var t = this;
        //提交事件
        if(t.options.submit)
        $(t.options.submit).on('click',function(){
            t.$element.submit();
        });
        //表单提交
        t.$element.on('submit',function(){
            t.checkall();//验证表单
            if(t.$element.find('.n-empty').length == 0 && t.$element.find('.n-error').length == 0){
                if(t.$element.find('.n-ajaxing').length == 0){
                    //如果没有ajax 或者ajax执行完毕 继续提交判断
                    if(t.options.success){
                        t.options.success();
                        return false;//阻止表单提交
                    }else{
                       return true;//提交 
                    }
                }else{
                    //如果有ajax正在执行 那么等待一会在提交表单
                    setTimeout(function(){
                        t.$element.submit();//重新提交
                    },100);
                    return false;//阻止表单提交
                }
            }else{
                return false;//阻止表单提交
            }
        })
        
        
        for(var id in t.options.check){
            t.itmblur(id);//失去焦点
            t.itmfocus(id);//获得焦点
            t.itmmsg(id);//默认信息
        }
    }
    //验证所有
    Aform.prototype.checkall = function(){
        var t = this;
        for(var id in t.options.check){
            t.checkipt(id);
        }
    }
    //获得焦点
    Aform.prototype.itmfocus = function (id){
        var t = this;
        var o = t.ido(id);//id object
        o.i.on('focus',function(){
            o.p.addClass('n-focus').removeClass('n-blur');
            o.p.removeClass('n-empty n-correct n-error n-ajaxing n-ajaxend');//去掉所有状态重新开始验证
            o.m.text(o.i.data('msg'));
        });
    }
    //失去焦点
    Aform.prototype.itmblur = function (id){
        var t = this;
        var o = t.ido(id);//id object
        o.i.on('blur',function(){
            t.checkipt(id);
            o.p.addClass('n-blur').removeClass('n-focus');
        });
    }
    //默认信息
    Aform.prototype.itmmsg = function (id){
        var t = this;
        var o = t.ido(id);//id object
        o.i.data('msg',o.m.text());
    }
    //相等验证
    Aform.prototype.equal = function(o){
        var t = this;
        //防止第一次验证没有填写的input
        if(o.e.p.hasClass('n-blur')){
            if(o.v == o.e.v){
                //相等 自己通过 相等的也通过
                //t.correct(o);
                t.okequal(o);
            }else{
                //不相等 提示不相等信息
                t.noequal(o);
            }
        }
    }
    //验证 auto阻止兄弟验证产生死循环
    Aform.prototype.checkipt = function(id,auto){
        var t = this;
        var o = t.ido(id);//id object
        if(
            o.p.hasClass('n-pause') || //暂停验证
            o.p.hasClass('n-correct') || //验证成功
            o.p.hasClass('n-ajaxing') || //正在执行ajax
            o.p.hasClass('n-ajaxend') //ajax执行完毕
        )return;//不验证
        if(!o.v){
            //为空
            t.empty(o);
        }else if(o.c.re && new RegExp(o.c.re).test(o.v) || o.c.type === "radio" || o.c.type === "select" || o.c.type === "div"){
            //成功
            if(o.c.siblings && !auto){
                //如果存在兄弟验证 并且不是自动验证 开始兄弟验证
                o.p.data('siblings',1);
                for(var id in o.c.siblings){
                    t.checkipt(o.c.siblings[id],true)
                }
            }else if(o.c.siblings){
                //如果是自动的兄弟验证
                o.p.data('siblings',o.p.data('siblings')+1);
                if(o.p.data('siblings') > o.c.siblings.length){
                    //验证成功个数 > 兄弟(不含自己)个数 继续验证
                    t.correct(o);
                    //o.c.equal && t.equal(o);//相等验证 当前input 是否等于 equal input
                }
            }else{
                t.correct(o);
                //o.c.equal && t.equal(o);//相等验证 当前input 是否等于 equal input
            }
        }else{
            //错误
            t.error(o);
        }
    }
    //id object
    Aform.prototype.ido = function(id){
        var t = this;
        var o = t.idoo(id);
        o.c.equal && (o.e = t.idoo(o.c.equal));//相等新对象
        return o;
    }
    //id object object
    Aform.prototype.idoo = function(id){
        var t = this;
        var o = new Object();
        o.id = id;
        o.c = t.options.check[id];//check
        o.i = $("#" + id);//input
        o.p = o.i.parents('.formitm');//parent
        o.m = o.p.find('.msg');//msg
        if(o.c.type === "checkbox"){
            o.i = $("[name='"+o.id+"[]']");
            o.v = $("[name='"+o.id+"[]']:checked").length;
        }else if(o.c.type === "radio"){
            o.i = $("[name='"+o.id+"']");
            o.v = $("[name='"+o.id+"']:checked").val();
            //如果 radio 没有选择 值为 undefined 提示empty 信息
            //如果 radio 选择了 值为选中的值 提示 correct 信息
            //radio 的name  要和 包裹 radio 的 id 名称一样
        }else if(o.c.type === "select"){
            o.v = o.i.val();
            if($.isArray(o.v) && o.v.length == 1 && !o.v[0]){
                o.v = null;
            }
        }else if(o.c.type === "div"){
            o.v = true;
        }else{
            o.v = o.i.val().toString().replace(/^\s+|\s+$/g, "");//value 转换为字符串 去掉首尾空格
        }
        return o;
    }
    //空
    Aform.prototype.empty = function(o){
        o.p.addClass('n-empty');
        o.m.text(o.c.empty);
    }
    //正确
    Aform.prototype.correct = function(o){
        var t = this;
        //验证成功后 有ajax验证 执行ajax回调 没有ajax显示正确信息
        if(o.c.ajax){
            t.ajax(o);//为 ajax 预置 回调函数
        }else{
            o.p.addClass('n-correct');
            o.m.text(o.c.correct);
            //相等验证存在 && 防止第一次验证没有填写的input
            if(o.c.equal && o.e.p.hasClass('n-blur')){
                if(o.v == o.e.v){
                    //相等 与自己相等的显示正确信息
                    o.e.p.addClass('n-correct');
                    o.e.m.text(o.c.correct);
                    o.e.p.removeClass('n-error');//去掉错误状态
                }else{
                    //不相等 提示不相等信息
                    o.p.addClass('n-error');
                    o.m.text(o.c.equalmsg);
                }
            }
        }
        
    }
    //错误
    Aform.prototype.error = function(o){
        o.p.addClass('n-error');
        o.m.text(o.c.error);
    }
    //相等
    Aform.prototype.okequal = function(o){
        o.e.p.addClass('n-correct');
        o.e.m.text(o.c.correct);
        o.e.p.removeClass('n-error');//去掉错误状态
    }
    //不相等
    Aform.prototype.noequal = function(o){
        o.p.addClass('n-error');
        o.m.text(o.c.equalmsg);
    }
    //ajax验证
    Aform.prototype.ajax = function(o){
        o.p.addClass('n-ajaxing');//添加 ajax 标记
        //成功手动回调函数
        o.correct=function(){
            o.p.addClass('n-correct n-ajaxend').removeClass('n-ajaxing');
            o.m.text(o.c.correct);
            //相等验证存在 && 防止第一次验证没有填写的input
            if(o.c.equal && o.e.p.hasClass('n-blur')){
                if(o.v == o.e.v){
                    //相等 与自己相等的显示正确信息
                    o.e.p.addClass('n-correct');
                    o.e.m.text(o.c.correct);
                    o.e.p.removeClass('n-error');//去掉错误状态
                }else{
                    //不相等 提示不相等信息
                    o.p.addClass('n-error');
                    o.m.text(o.c.equalmsg);
                }
            }
        }
        //失败手动回调函数
        o.error=function(){
            o.p.addClass('n-error n-ajaxend').removeClass('n-ajaxing');
            o.m.text(o.c.error);
        }
        o.c.ajax(o);//开始执行 ajax
    }
    function Plugin(option) {
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('aform');//aform  = new Aform(this, options)
            var options = $.extend({}, Aform.DEFAULTS, $this.data(), typeof option == 'object' && option);
            if (!data) $this.data('aform', (data = new Aform(this, options)));
            if(typeof option == 'string') data.checknext(option);
            else data.events();
            
        });
    }
    var old = $.fn.aform;
    $.fn.aform = Plugin;
    $.fn.aform.Constructor = Aform;
    $.fn.aform.noConflict = function () {
        $.fn.aform = old;
        return this;
    }
})(jQuery);