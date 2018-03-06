<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\good;
use App\Model\Cate;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class GoodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function  gstatus($gid)
    {
        $good = Admin_Goods::find($gid);
        $status = !$good->status;
        $res = $good->update(['status'=>$status]);
        if($res){
            $data =[
                'gg'=> 0,
                'msg'=>'修改成功'
            ];
        }else{
            $data =[
                'gg'=> 1,
                'msg'=>'修改失败'
            ];
        }
        return $data;

    }



    public function index(Request $request)
    {
        
        $input = $request->input('username','');
       
         $count = DB::table('data_goods')->count();

        $goods = good::where('gname','like','%'.$input.'%')->paginate(2);
       
     
     return view('admin.good.list',['goods'=>$goods,'count'=>$count,'request'=>$request]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function detail($id)
    {
        return 详情页;
    }
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
