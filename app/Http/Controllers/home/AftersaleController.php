<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\user;
use App\model\user_good;
use App\model\Article;
use DB;
class AftersaleController extends Controller
{
    /**
     * 加载售后页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //获取用户加入购物车商品
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        //获取所有的文章
        $Article = Article::get();
        return view('home.shouhou',compact('user_good','count','Article'));
    }

}
