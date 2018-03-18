<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user;
use App\model\good;
use App\model\user_details;
use App\model\user_good;
use DB;
class AccountController extends Controller
{
    /**
     * 加载账户管理页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = session('user')['uid'];
        //获取用户昵称信息
        $nikname = user::where('uid',$id)->first();
        //获取用户的头像信息
        $user = user_details::where('user_id',$id)->first();
        return view('home/account',compact('user','nikname'));
    }

     public function upload(Request $request)
    {
        //1.获取上传文件
        $file = $request->file('file_upload');
    // return $file;
        //  2.判断上传文件的有效性
         if($file->isValid()){
 //            获取文件后缀名
             $ext = $file->getClientOriginalExtension();    //文件拓展名
            //生成新文件名

             $newfilename = md5(date('YmdHis').rand(1000,9999).uniqid()).'.'.$ext;
             $res = $file->move(public_path().'/upload/user/',$newfilename);

           return '/upload/user/'.$newfilename;
       }
        
    }

    /**
     * 加载密码页
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function password(Request $request)
    {
        // 获取用户的信息
        $user = user::find(session('user')['uid']);
        $user['show'] = $user->userShow;
        $user['password'] = Crypt::decrypt($user['password']);
        return view('home.password',compact('user'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return 密码修改
     */
    public function edit(Request $request)
    {
        //接收数据
        $input = $request->except('_tokne');
        $input['password'] = Crypt::encrypt($input['password']);
        //更新用户密码
        $res = user::where('uid',session('user')['uid'])->update(['password'=>$input['password']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;

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
        $input = $request->except('_token');
        // return $input;
        $res = user_details::where('user_id',$id)->update(['header'=>$input['header']]);
        $res = user::where('uid',$id)->update(['uname'=>$input['uname'],'phone'=>$input['phone']]);
        if($res){
            return back();
        }else{
            return back();
        }
    }

    /**
     * 自动获取用户信息
     */
    public function personal()
    {
        // 获取用户的信息
        $data = user::find(session('user')['uid']);
        $data['show'] = $data->userShow;
        // 拼接用户字符串
        $user = '';
        $user .= "<!-- 头像 -->";
        $user .= "<a class='avatar'><img src='{$data['show']['header']}'/></a>";
        $user .= "<!-- 昵称 -->";
        $user .= "<span>{$data['uname']}</span>";
        $user .= "<p class='phone'>绑定手机号：{$data['phone']}</p>";
        return $user;
    }

}
