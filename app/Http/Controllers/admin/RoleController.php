<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\pcate;
use App\model\role;
use App\model\role_permission;
use DB;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         //接收请求中的参数
        $keywords1 = $request->input('role_name','');
        // 1.获取角色数据
        $role = role::orderBy('id','desc')->where('role_name','like','%'.$keywords1.'%')->paginate($request->input('num', 2));
        foreach($role as $v){
            $v['permission'] = $v->role_permission;
        }
        return view('admin.role.list',compact('role','request'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pcate = pcate::get();
        foreach($pcate as $v){
            $v['permission'] = $v->pcate_permission;
        }
        // return $pcate;
        return view('admin.role.add',compact('pcate'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.获取提交的数据
        $input = $request->except('_token');
        // 2.获取数据入库后的ID
        $role_id = DB::table('data_role')->insertGetId(['role_name'=>$input['data']['role_name'],'status'=>0]);
        // 3.将角色的Id和权限id放入角色和权限的关联表中
        foreach ($input['ids'] as $value) {
            $res = role_permission::create(['role_id'=>$role_id,'permission_id'=>$value]);
        }
        // 4.判断数据是否存储成功
        ($role_id && $res) ? $status = 1 : $status = 0;
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
        // 获取所有权限
        $pcate = pcate::get();
        foreach($pcate as $v){
            $v['permission'] = $v->pcate_permission;
        }
         // 获取角色数据
        $role = role::where('id',$id)->first();
        // 获取角色所拥有的的权限
        $role_permission = $role->role_permission;
        // return $role_permission;
        return view('admin.role.edit',compact('role','pcate','role_permission'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        // 接收数据
        $input = $request->except('_tokne');
        // 修改角色信息
        $role = role::where('id',$id)->update(['role_name'=>$input['data']['role_name']]);
        //修改角户权限
            // 1.先删除用户所有权限
                DB::table('role_permission')->where('role_id',$id)->delete();
            // 2.重新赋予权限
                if(!empty($input['ids'])){
                    foreach ($input['ids'] as $value) {
                        $res = role_permission::create(['role_id'=>$id,'permission_id'=>$value]);
                    }
                }
        ($role && $res) ? $status = 1 : $status = 0;
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
        // 查询要删除的用户
        $res = role::find($id)->delete();
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

    public function delAll(Request $request)
     {
        $input = $request->input('ids');
//        return $input;
        $res = role::destroy($input);

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
}
