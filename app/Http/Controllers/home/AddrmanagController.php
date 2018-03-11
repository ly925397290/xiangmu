<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;
use App\model\Nav;
use App\model\Slide;
use App\model\good;

class AddrmanagController extends Controller
{
    /**
     * 加载地址管理页
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
        return view('home/addrmanag',compact('link','nav','slide','good'));
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
