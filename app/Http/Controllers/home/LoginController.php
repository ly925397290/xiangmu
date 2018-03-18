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
use App\Org\code\Code;
require_once app_path().'/Org/code/Code.class.php';

class LoginController extends Controller
{
    
    /**
    * @param  登录
    * @return 前台登录页面
    * @param  冯志鑫
    */
    public function login()
    {
        return view("home/login/Login");
    }


    /**
    * @param  登录
    * @return 登录逻辑页面
    * @param  冯志鑫
    */
    public function dologin(Request $request)
    {
        // 1. 获取请求参数
        $input = $request->except('_token');
        $rule = [
            'phone'=>'required|regex:/^1[34578][0-9]{9}$/',
            'password'=>'required|between:2,18|alpha_dash'
        ];
        $msg = [
            'phone.required'=>'手机号不能为空',
            'phone.regex'=>'手机号保持正确格式',
            'password.required'=>'密码不能为空',
            'password.between'=>'密码长度2~18位',
            'password.alpha_dash'=>'密码类型字母数字下划线'

        ];
        // 2. 将获取参数与判断信息整合
        $validator = Validator::make($input, $rule, $msg);
        // 如果验证失败返回登录页
        if($validator->fails()){
            return redirect('home/login')->withErrors($validator)->withInput();
        }

        // 3. 验证用户名是否存在
        $user = user::where('phone',$input['phone'])->first();
        if (empty($user)) {
             return redirect('home/login')->with('errors','用户名不存在');
        }

        // 4. 验证密码是否正确

        if ($input['password'] != Crypt::decrypt($user->password)){
            return redirect('home/login')->with('errors','密码不正确');
        }

        // 5. 验证码   strtolower():不区分大小写
        if(strtolower($input['code']) != strtolower(session('code'))) {
            return redirect('home/login')->with('errors','验证码不正确');
        }

        // 登陆成功, 将信息保存到 session 中
        Session::put('user',$user);
        return redirect('/');
    }

    /**
    * @param  加载验证码
    * @return true or false
    * @param  冯志鑫
    */ 
    public function yzm(Request $request)
    {
       $code = new Code;
       return $code->make();

    }

    /**
     * 退出登录
     * @author 冯志鑫
     * @param 
     */
    public function outlogin()
    {
       // 清空session
       session()->forget('user');
       // 跳转回登录页面
       return redirect('/');

    }
}
