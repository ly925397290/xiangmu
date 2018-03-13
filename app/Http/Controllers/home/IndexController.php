<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;
use App\model\Nav;
use App\model\Slide;
use App\model\user;
use App\model\good;
use App\model\user_good;
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
        /**
         * 前台首页显示
         */
        // 前台导航显示
        $nav = Nav::get();
        //前台轮播图显示
        $slide = Slide::where('status','1')->get();
        //前台商品展示
        $goods = good::where('status','1')->get();
        //前台友情链接
        $link = link::where('status','1')->get();
        $count = DB::table('user_good')->where('user_id',1)->count();
        // $user = user::find(1);
        // $good = $user->user_good;
        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        // return $user_good;
        return view('home/index',compact('link','nav','slide','goods','count','user_good'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
