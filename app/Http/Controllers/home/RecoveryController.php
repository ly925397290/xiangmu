<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_good;
use DB;

class RecoveryController extends Controller
{
    /**
     * 加载回收机制说明页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * 回收机制
         */
        //获取用户加入购物车商品
        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',1)->count();

        return view('home/recovery',compact('user_good','count'));
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
