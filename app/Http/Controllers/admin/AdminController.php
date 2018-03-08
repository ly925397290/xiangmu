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
    public function index(Request $request)
    {
        //接收请求中的参数
        $admin_name = $request->input('admin_name','');
        // 1.查询用户信息
        $user = admin::orderBy('id','desc')->where('admin_name','like','%'.$admin_name.'%')->paginate($request->input('num', 2));
        // 2.查询用户的角色
        foreach($user as $v){
            $v['role'] = $v->user_role;
        }
        return view('admin.admin.list',compact('user','request'));
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
        // 获取所有角色
        $role = role::get();
        // 获取管理员数据
        $admin = admin::find($id);
        // 获取管理员所拥有的的角色
        $user_role = $admin->user_role;
        return view('admin.admin.edit',compact('admin','user_role','role'));
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
        // 接收数据
        $input = $request->except('_tokne');
        // 修改角色信息
        $role = admin::where('id',$id)->update(['admin_name'=>$input['data']['admin_name'],'phone'=>$input['data']['phone'],'email'=>$input['data']['email']]);
        //修改角户角色
            // 1.先删除用户所有角色
                DB::table('user_role')->where('user_id',$id)->delete();
            // 2.重新赋予角色
                if(!empty($input['ids'])){
                    foreach ($input['ids'] as $value) {
                        $res = user_role::create(['user_id'=>$id,'role_id'=>$value]);
                    }
                }
        ($role || $res) ? $status = 1 : $status = 0;
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
        // 查询要删除的管理员
        $res = admin::find($id)->delete();
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
        $res = admin::destroy($input);

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
