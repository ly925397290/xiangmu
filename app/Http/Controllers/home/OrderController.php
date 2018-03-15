<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Order;
use App\model\User;
use App\model\good;
use App\model\user_good;
use App\model\message;
use DB;
class OrderController extends Controller
{
    /**
     * 加载订单支付页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 获取用户的订单信息
        $user = user::find(1);
        $user['show'] = $user->userShow;
        $user['order'] = $user->user_order;

        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //格式化时间戳
        foreach ($user['order'] as  $value) {
            $value['time'] = date('Y-m-d H:i:s');
        }
        // return $user;
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home/order',compact('user','count','user_good'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pinglun($id)
    {
        return view('home.pinglun',compact('id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        $input = $request->except('_token');
        $res = message::create(['oid'=>$id,'content'=>$input['content'],'uid'=>1]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;

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
