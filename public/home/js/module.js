var MODULE=MODULE||{};MODULE.fit=(function(){var c=function(d,e){$(d).each(function(){var g=$(this);if(typeof(g.find(e).attr("class"))!="undefined"){if(g.find(e).attr("class").split(" ")[0]!=""){var f=g.find(e).attr("class").split(" ")[0]}else{var f="ds"}}else{var f="ds"}$(this).find(e).live("mouseenter",function(){$(this).addClass(f+"-hover").siblings(e).removeClass(f+"-hover")});$(this).find(e).live("mouseleave",function(){$(this).removeClass(f+"-hover")})})};var a=function(d,e){$(d).each(function(){$(this).find(e).last().addClass("ds-last")})};var b=function(d,e){$(d).each(function(){$(this).find(e).first().addClass("ds-first")})};return{hoverEffect:c,lastClass:a,firstClass:b}})(jQuery);$(function(){MODULE.fit.hoverEffect(".ds-catelist",".ds-img");MODULE.fit.lastClass(".JS-ds-ctable tr","td");MODULE.fit.firstClass(".JS-ds-catable2 tr","td");MODULE.fit.firstClass(".ds-h-navSortAllUl","li");MODULE.fit.hoverEffect(".ds-h-navSortConUl",".ds-h-navSortConUl > li")});