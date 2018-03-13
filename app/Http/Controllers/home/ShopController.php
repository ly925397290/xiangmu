<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;
use App\model\Nav;
use App\model\Slide;
use App\model\good;
use App\model\Show;
use App\model\Shop;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
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
        $good = good::where('status','1')->get();
        //前台友情链接
        $link = link::where('status','1')->get();
        return view('home.shop.creat',compact('link','nav','slide','good'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // 前台导航显示
        $nav = Nav::get();
        //前台轮播图显示
        $slide = Slide::where('status','1')->get();
        //前台商品展示
        $good = good::where('status','1')->get();
        //前台友情链接
        $link = link::where('status','1')->get();


        // 1.接收请求数据
        $input = $request->except('_token');
     
        $res = Shop::create($input);
        return view('home.shop.deng',compact('link','nav','slide','good','res'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $nav = Nav::get();
        //前台轮播图显示
        $slide = Slide::where('status','1')->get();
        //前台商品展示
        $good = good::where('status','1')->get();
        //前台友情链接
        $link = link::where('status','1')->get();

        // 1.接收请求数据
        $res =Shop::find($id);

        return view('home.shop.deng',compact('link','nav','slide','res'));
    }


    public function shenhe($id)
    {

        return 111;

        // $nav = Nav::get();
        // //前台轮播图显示
        // $slide = Slide::where('status','1')->get();
        // //前台商品展示
        // $good = good::where('status','1')->get();
        // //前台友情链接
        // $link = link::where('status','1')->get();

        // // 1.接收请求数据
        // $res =Shop::find($id);

        // return view('home.shop.deng',compact('link','nav','slide','res'));
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

        return 44;
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
        return 333;
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
        return 66;
    }
}
