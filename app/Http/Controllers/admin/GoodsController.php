<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\good;
use App\model\goodsdetail;
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
        $good = good::find($gid);
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

        $goods = good::where('gname','like','%'.$input.'%')->orderBy('gid','desc')->paginate(2);
        $goodsdetail = goodsdetail::get();
       
     
     return view('admin.good.list',['goods'=>$goods,'count'=>$count,'request'=>$request,'goodsdetail'=>$goodsdetail]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function detail($id )
    {

        $goods = good::get();
        $goodsdetail = goodsdetail::get();


        return view('admin.good.det',['goods'=>$goods,'goodsdetail'=>$goodsdetail]);
    }
    public function create()
    {
        //
        return view('admin.good.add');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //1.接收数据

        
        $input = $request->except('_token');
        //2.添加到数据库
        $res = good::create($input);
        $res1 = goodsdetail::create($input);
        
        //3.判断是否成功并将结果返回到客户端
           if($res && $res1)
        {
            return  redirect('/admin/goods')->with('msg','添加成功');
        }else{
            return back()->with('msg','添加失败');
        }
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
