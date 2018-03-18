<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Slide;
use App\model\link;
use App\model\cate;
use App\model\nav;
use App\model\good;
use App\model\user_good;
use App\model\Article;
use DB;
class IndexController extends Controller
{
    /**
     * 加载首页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 获取显示的商品
        $goods = good::where('status','1')->get();
        //从数据库中取文章
        $cate = cate::get();
        $articles = Article::get()->first();
        $articleslast = Article::orderBy('aid','desc')->first();
        //获取所有轮播图
        $Slide = Slide::where('status','1')->get();
        return view('home/index',compact('goods','count','user_good','articles','articleslast','cate','Slide'));
     }
    

    public function articleslist()
    {

       $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        // $user = user::find(1);
        // $good = $user->user_good;

         //从数据库中取文章
        $articles = Article::get();

         return view('home/articlelist',compact('user_good','count','articles'));

    }


    /**
     * 前台导航
     */
    public function show()
    {
        
        $navs = Nav::get();
        $nav = '';
        $nav .= '<li>';
        foreach($navs as $v){
         $nav .= "<a href='{$v['nlink']}' target='_blank'><span>{$v['nname']}</span></a><span class='tag_line'></span>";
        }
        $nav .='</li>';

        // // $nav = '111';
        // $nav['name'] = 'zhangsan';
        return $nav;
    }
    /**
     * 前台友情链接
     */
    public function links()
    {

        $links = Link::get();
        // return $links;
        $link = '';
          foreach($links as $v){
           $link .= "<dd><a target='_blank' href='{$v['lurl']}'>{$v['lname']}</a></dd>";
          }
        return $link;

    }

    /**
     * 前台购物车
     */
    public function shopping(){
        //获取购物车商品
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //将购物车信息拼接到前台
        $shopping = '';
        foreach ($user_good as $v) {
            $shopping .="<ul>";
                $shopping .="<li data-id='167805'>";
                    $shopping .="<a class='thumb'>";
                        $shopping .= "<img src='{$v->urls}'>";
                    $shopping .="</a>";
                    $shopping .="<a class='details'>";
                        $shopping .="<p class='desc'>{$v->gname}</p>";
                        $shopping .="<p class='price'>￥{$v->price}</p>";
                    $shopping .="</a>";
                $shopping .="</li>";
            $shopping .="</ul>";
            $shopping .="<div class='action'>";
                $shopping .="<p class='cartinfo'>";
                    $shopping .="<span class='cartcount'>共有<em>{$v->num}</em>件商品</span>";
                $shopping .="</p>";
                $shopping .="<a class='u-btn n-middle f-fr' href='/home/settlement/{$v->good_id}'>前往结算</a>";
            $shopping .="</div>";
        }
        return $shopping;
    }
        /**
         * 前台购物车总数
         */
        public function count(){
            //获取购物车总数
            $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
            return $count;
        }
    

}
