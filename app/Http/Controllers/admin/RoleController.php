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
    public function index()
    {
        // 1.获取角色数据
        $role = role::get();
        foreach($role as $v){
            $v['permission'] = $v->role_permission;
        }
        return view('admin.role.list',compact('role'));
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
        return view('admin.role.edit');
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
