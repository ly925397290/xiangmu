<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\user;
use App\model\user_good;
use DB;

class ShoplistController extends Controller
{
    /**
     * 加载购物清单
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
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
        //接收数据
        $input = $request->except('_token');
        $goods = good::find($id);
        return view('home/shoplist',compact('user_good','count','goods'));
    }

}
