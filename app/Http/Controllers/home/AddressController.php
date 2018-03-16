<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_details;
use App\model\user;
use App\model\user_good;
use DB;

class AddressController extends Controller
{
    
    public function index()
    {
        // 获取用户的订单信息
        $user = user::find(session('user')['uid']);
        $user['show'] = $user->userShow;
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        return view('home/addr_add',compact('user','count','user_good'));
    }
    // public function index()
    // {

    //     return view('home/address');
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //1.接收数据
        $input = $request->except('_token');
        // 2.入库
        $res = user_details::create(['addr'=>$input['addr'],'user_id'=>session('user')['uid'],'people'=>$input['people'],'phone'=>$input['phone']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }

}
