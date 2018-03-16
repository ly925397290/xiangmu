<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\order;
use App\model\user;
use App\model\good;
use App\model\user_good;
use DB;
class SettlementController extends Controller
{

    /**
     * 加载购物车
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
    {   
        $data = good::find($id);
        //获取用户加入购物车商品
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        // return $user_good;
        //总价格
        foreach ($user_good as $key => $value) {
             $price[] = $user_good[$key]['price']*$user_good[$key]['num'];
        }
        $price = array_sum($price);
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        return view('home/settlement',compact('data','user_good','count','price'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function shoucang(Request $request,$id)
    {
        $input = $request->except('_token');
        //判断收藏的商品是否已存在
        $res = user_good::create(['user_id'=>session('user')['uid'],'good_id'=>$id,'num'=>$input['num']]);
        // $res = userGood::create(['user_id'=>session(''),'good_id'=>$id]);
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
    public function delete($id)
    {
        // 1.查看此权限分类下有没有权限
        $res = user_good::where('user_id',session('user')['uid'])->where('good_id',$id)->delete();
        // 2.有权限不让删除
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }
}
