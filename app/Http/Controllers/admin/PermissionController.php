<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\pcate;
use App\model\permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 获取权限分类
        $pcate = pcate::get();
        $permission = permission::paginate(5);
        foreach($permission as $v){
            $v['pcate']= $v->permission_pcate;
        }
        $count = count($pcate);
        return view('admin.permission.list',compact('pcate','permission','count'));
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
        // 1.接收请求数据
        $input = $request->except('_token');
        // App\Http\Controllers\Admin\IndexController@index
        // 2.将数据入库
            // 2.1处理数据
            $input['urls'] = 'App\Http\Controllers\\'.$input['controller'].'@'.$input['method'];
            $res = permission::create($input);
        // 3.判断是否成功并将结构返回给客户端
            if($res){
                $status = 1;
            }else{
                $status =0 ;
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
        $pcate = pcate::get();
        $permission = permission::find($id);
        $permission['pcate']= $permission->permission_pcate;
        return view('admin.permission.edit',compact('permission','pcate'));

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
        
        // 1.接收请求数据
        $input = $request->except('_token');
        $res = permission::where('id',$id)->update(['permission'=>$input['permission'],'urls'=>$input['urls'],'pcate_id'=>$input['pcate_id']]);
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
        $res = permission::destroy($id);
        if($res){
                $status = 1;
            }else{
                $status = 0;
            }
        return $status;
    }


    public function delAll(Request $request)
     {
        $input = $request->input('ids');
//        return $input;
        $res = permission::destroy($input);
        if($res){
            $status = 1;
        }else{
            $status = 0;
        }
        return $status;
     }
}
