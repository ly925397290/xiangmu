<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Gregwar\Captcha\CaptchaBuilder; 
use Gregwar\Captcha\PhraseBuilder;
use App\Org\SMS\M3Result;
use App\Org\SMS\SendTemplateSMS;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use App\Model\user;

class BackpassController extends Controller
{
    
    /**
    * @param  加载身份验证
    * @param  密码找回
    * @param  冯志鑫
    */
    public function backpass()
    {    
        return view("home/login/Backpass");
    }

    /**
    * @param  身份验证逻辑页
    * @param  密码找回
    * @param  冯志鑫
    */
    public function dobackpass(Request $request)
    {    
        // 1. 获取请求参数
        $input = $request->except('_token');
        // return $input;
        $rule = [
            'phone'=>'required|regex:/^1[34578][0-9]{9}$/',
            'code'=>'required'
        ];
        $msg = [
            'phone.required'=>'手机号不能为空',
            'phone.regex'=>'手机号保持正确格式',
            'code.required'=>'验证码不能为空'

        ];
        // 2. 将获取参数与判断信息整合
        $validator = Validator::make($input, $rule, $msg);
        // 如果验证失败返回登录页
        if($validator->fails()){
            return redirect('home/backpass')->withErrors($validator)->withInput();
        }

        // 3. 验证用户名是否存在
        $user = user::where('phone',$input['phone'])->first();
        
        if (empty($user)) {
             return redirect('home/backpass')->with('errors','用户名不存在');
        }

        // 判断手机验证码是否正确
        if($input['code'] != session('phonecode')) {
            return redirect('home/backpass')->with('errors','验证码不正确');
        }

        // 判断成功, 将信息保存到 session 中
        Session::put('user',$user);
        // return Session('user')['phone'];
        return redirect('home/modify');
    }

    /**
    * @param  加载修改密码
    * @param  密码找回
    * @param  冯志鑫
    */
    public function modify()
    {    
        return view("home/login/Modify");
    }

   /**
    * @param  修改密码逻辑
    * @param  密码找回
    * @param  冯志鑫
    */
    public function domodify(Request $request)
    {    
        // 1. 获取请求参数
        $input = $request->except('_token');
        // dd($input);
        $rule = [
            'password'=>'required|between:2,18|alpha_dash'
        ];
        $msg = [
            'password.required'=>'密码不能为空',
            'password.between'=>'密码长度2~18位',
            'password.alpha_dash'=>'密码类型字母数字下划线'
        ];

        // 判断两次密码是否一致
        if($input['password'] != $input['repass']) {
            return redirect('home/modify')->with('errors','两次密码不一致');
        }
        // dd(session());
        //添加数据库
        $flight = new user;
        $password = Crypt::encrypt($input['password']);
        $flight->password = $password;
        $res = $flight->where('phone',session('user')['phone'])->update(['password'=> $password]);
        if($res){
            return redirect('home/login')->with('errors','密码修改成功,请重新登录');
        }else{
           return redirect('home/modify')->with('errors','修改失败,请重新填写信息');
        }

    }

}
