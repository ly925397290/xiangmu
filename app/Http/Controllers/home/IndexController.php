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
      
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        // $user = user::find(1);
         // $good = $user->user_good;
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        $goods = good::where('status','1')->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //从数据库中取文章
        $cate = cate::get();
        $articles = Article::where('cate_id',0)->first();
        $articleslast = Article::where('cate_id',1)->first();
        //获取所有轮播图
        $Slide = Slide::orderBy('order')->get();
        return view('home/index',compact('goods','count','user_good','articles','articleslast','cate','Slide'));
     }
    

    public function articleslist($cate_id)
    {

       $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();

         //从数据库中取文章
        $articles = Article::where('cate_id',$cate_id)->orderBy('number')->get();

         return view('home/articlelist',compact('user_good','count','articles'));

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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

}
