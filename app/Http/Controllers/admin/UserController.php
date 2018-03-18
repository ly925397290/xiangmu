<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\model\user;
use App\model\user_details;
use Hash;
use DB;
class UserController extends Controller
{
    /**
     * 用户列表页
     */
    public function index(Request $request)
    {
        // $route = \Route::current()->getActionName();
        // return $route;
        //接收请求中的参数
        $keywords1 = $request->input('keywords1','');
        $user = user::orderBy('uid','desc')->where('uname','like','%'.$keywords1.'%')->orwhere('status','like','%'.$keywords1.'%')->paginate($request->input('num', 2));
        $count = count($user);
        return view('admin.user.list',['user'=>$user,'request'=> $request,'count'=>$count]);
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
        // 2.添加到数据库
        $input['repasswprd'] = Crypt::encrypt($input['password']);
        
        $id = DB::table('data_users')->insertGetId(['uname'=>$input['uname'],'password'=>$input['repasswprd'],'phone'=>$input['phone']]);
        // $res = user::create($input); 
        $user = user_details::create(['phone'=>$input['phone'],'user_id'=>$id]);
        // 3.判读是否成功返回给客户端
        if($id){
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
        $user = user::find($id);
        // 获取用户详细信息
        $user['show'] = $user->userShow;
        // return $user->show->people;
        return view('admin.user.show',compact('user'));
    }

    /**
     * 用户修改页显示
     */
    public function edit($id)
    {
        //查询用户的信息
        $user = user::find($id);
        return view('admin.user.edit',compact('user'));
    }

    /**
     * 用户修改操作
     */
    public function update(Requests $request,$id)
    {
        //获取数据
        $input = $request->except('_token');

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
