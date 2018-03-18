<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_good;
use App\model\good;
use App\model\huishou;
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
        $cate = DB::table('data_cate')->select('*',DB::raw('concat(path,",",id) as paths'))->orderBy('paths','asc')->get();
        // 处理分类名称
        foreach ($cate as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['path'],',');
            // 重复使用字符串 拼接分类名称
            $cate[$key]['title'] = str_repeat('|----',$n).$cate[$key]['title'];
        }
        return view('home.huishou',compact('cate'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        // return time();
        $input = $request->except('_token','file_upload');
        $input['oid'] = date('YmdHis',time())+time()+$id+session('user')['uid'];//session
        $input['time'] = time();
        $input['user_id'] = session('user')['uid'];
        // return $input;
        $res = huishou::create($input);
        if ($res) {
            return redirect('home/order');
        }else{
            return back();
        }
    }


}
