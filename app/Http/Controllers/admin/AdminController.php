<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\role;
use App\model\admin;
use App\model\user_role;
use DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 1.查询用户信息
        $user = admin::get();
        // 2.查询用户的角色
        foreach($user as $v){
            $v['role'] = $v->user_role;
        }
        return view('admin.admin.list',compact('user'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 1.获取角色数据
        $role = role::get();
        return view('admin.admin.add',compact('role'));
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
        $user_id = DB::table('data_admin')->insertGetId(['admin_name'=>$input['data']['admin_name'],'phone'=>$input['data']['phone'],'email'=>$input['data']['email'],'password'=>$input['data']['password']]);
        // 3.将角色的Id和权限id放入角色和权限的关联表中
        foreach ($input['ids'] as $value) {
            $res = user_role::create(['user_id'=>$user_id,'role_id'=>$value]);
        }
        // 4.判断数据是否存储成功
        ($user_id && $res) ? $status = 1 : $status = 0;
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
        return view('admin.admin.edit');
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
