<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user;
use Hash;
class UserController extends Controller
{
    /**
     * 用户列表页
     */
    public function index(Request $request)
    {
        //接收请求中的参数
        $keywords1 = $request->input('keywords1','');
        $user = user::orderBy('uid','desc')->where('uname','like','%'.$keywords1.'%')->paginate($request->input('num', 2));
        foreach($user as $v){
            switch($v->identity){
                case 1:
                    $v->identity = '普通管理员';
                    break;
                case 2:
                    $v->identity = '超级管理员';
                    break;
                case 3:
                    $v->identity = '普通用户';
                    break;
                case 4:
                    $v->identity = '店主';
                    break;
            }
        }
        return view('admin.user.list',['user'=>$user, 'request'=> $request]);
    }

    /**
     * 添加用户页面显示
     */
    public function create()
    {
        return view('admin.user.add');
    }

    /**
     *添加用户操作
     */
    public function store(Request $request)
    {
        // 1.接收数据
        $input = $request->except('_token');
        // return $input;
        // 2.添加到数据库
        $flight = new user;
        $flight->uname = $input['uname'];
        $flight->password = $input['password'];
        $flight->identity = $input['identity'];
        //将数据保存到数据库
        $res = $flight->save();
        // 3.判读是否成功返回给客户端
        if($res){
            $data = [
                'status'=>1,
                'msg'=>'添加成功'
            ];
        }else{
            $data = [
                'status'=>0,
                'msg'=>'添加失败'
            ];
        }
        return $data;
    }

    /**
     * 用户详情页显示
     */
    public function show($id)
    {
        echo '用户详情';
    }

    /**
     * 用户修改页显示
     */
    public function edit($id)
    {
        return view('admin.user.edit');
    }

    /**
     * 用户修改操作
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 用户删除操作
     */
    public function destroy($id)
    {
        // 查询要删除的用户
        $res = user::find($id)->delete();
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
     * 用户状态修改
     */
     public function changestatus(Request $request)
     {
        //接收数据
        $input = $request->except('_token');
        // 修改数据库信息
        $user = user::find($input['uid']);
        $status = ($input['status'] == 0) ? 1 : 0;
        $user->status = $status;
        $res = $user->save();
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
        $res = User::destroy($input);

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
