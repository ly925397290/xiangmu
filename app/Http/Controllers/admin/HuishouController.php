<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\huishou;

class HuishouController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $huishou = huishou::paginate(5);
        foreach ($huishou as  $value) {
            $value['time'] = date('H-i-s Y-m-d');
        }
        $count = count($huishou);
        return view('admin.order.huishou',compact('huishou','count'));
    }

    public function destroy($id)
    {
        // 查询要删除的用户
        $res = huishou::find($id)->delete();
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

    /**
     * 批量删除
     */
    public function delAll(Request $request)
     {
        $input = $request->input('ids');
//        return $input;
        $res = huishou::destroy($input);
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

     /**
      * 确认检测处理
      */
    public function queren(Request $request)
    {   
        // 接收参数
        $id = $request->input('id','');
        // return $id;
        // 修改订单状态
        $res = huishou::where('id',$id)->update(['status'=>'1']);
        if($res){
            $data =1;
        }else{
            $data =0;
        }
        return $data;
    }
}
