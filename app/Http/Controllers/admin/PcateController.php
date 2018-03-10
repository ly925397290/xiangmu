<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\pcate;
use App\model\permission;

class PcateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = pcate::paginate(5);
        $count = count($data);
        return view('admin.pcate.list',compact('data','count'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收数据
        $input = $request->except('_token');
        // return $input;
        // 2.将数据入库
        $res = pcate::create($input);
        // 3.判断是否成功并将结果返回给客户端
        if($res){
            $status = 1;
        }else{
            $status = 0;
        }
        return $status; 
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
        $data = pcate::find($id);
        return view('admin.pcate.edit',compact('data'));
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
        $input = $request->all();
        $res = pcate::where('id',$id)->update(['pcate_name'=>$input['pcate_name']]);
        if($res){
            $status = 1;
        }else{
            $status = 0;
        }
        return $status;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 1.查看此权限分类下有没有权限
        $pcate = permission::where('pcate_id',$id)->first();
        // 2.有权限不让删除
        if(empty($pcate)){
            $res = pcate::destroy($id);
            if($res){
                $status = 1;
            }else{
                $status = 0;
            }
        }else{
            $status = 2;
        }   
        return $status;
    }

}
