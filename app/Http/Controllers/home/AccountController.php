<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

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
        // 获取用户的信息
        $user = user::find(session('user')['id']);
        $user['show'] = $user->userShow;
        $user_good = user_good::where('user_id',session('user')['id'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['id'])->count();
        return view('home/account',compact('user','user_good','count'));
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function password(Request $request)
    {
        // 获取用户的信息
        $user = user::find(session('user')['id']);
        $user['show'] = $user->userShow;
        $user_good = user_good::where('user_id',session('user')['id'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['id'])->count();
        return view('home.password',compact('user','user_good','count'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //接收数据
        $input = $request->except('_tokne');
        //更新用户密码
        $res = user::where('uid',session('user')['id'])->update(['password'=>$input['password']]);
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
        $res = user_details::where('user_id',$id)->update(['header'=>$input['header'],'phone'=>$input['phone']]);
        $res = user::where('id',$id)->update(['uanem'=>$input['uanem']]);
        if($res){
            return back();
        }else{
            return back();
        }
    }

}
