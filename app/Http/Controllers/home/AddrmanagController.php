<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_details;
use App\model\user;
use DB;
class AddrmanagController extends Controller
{
    /**
     * 加载地址管理页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //获取用户的地址信息
        $addr = user_details::where('user_id','1')->get();
        // 获取用户的订单信息
        $user = user::find(1);
        $user['show'] = $user->userShow;
        $good = $user->user_good;
//计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home/addrmanag',compact('addr','user','count','good'));
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
        $input = $request->except('_token');
        $res = user_details::where('id',$id)->update(['people'=>$input['people'],'phone'=>$input['phone'],'addr'=>$input['addr']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }   

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 查询要删除的地址
        $res = user_details::find($id)->delete();
        // 判断是否成功,将结果返回客户端
        if($res){
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;
    }
}
