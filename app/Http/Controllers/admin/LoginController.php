<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Gregwar\Captcha\CaptchaBuilder; 
use Gregwar\Captcha\PhraseBuilder;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;
use App\Org\code\Code;
require_once app_path().'/Org/code/Code.class.php';
use App\Model\User;

class LoginController extends Controller
{
/**
     * 后台登录页
     * @author 冯志鑫
     * @param 加载登录页面
     * @return 登录页面
     * 
     */
    public function login()
    {
       return view('admin/login');
    }

    /**
     * 登录逻辑处理
     * @author 冯志鑫
     * @param 加载登录信息作出处理
     * @return 登录页面
     */
     public function dologin(Request $request)
    {   
        // 1. 获取请求参数
        $input = $request->except('_token');
        $rule = [
            'username'=>'required|between:2,18',
            'password'=>'required|between:2,18|alpha_dash'
        ];
        $msg = [
            'username.required'=>'用户名必须键入',
            'username.between'=>'用户名长度2~18位',
            'password.required'=>'密码不能为空',
            'password.between'=>'密码长度2~18位',
            'password.alpha_dash'=>'密码类型字母数字下划线'

        ];
        // 2. 将获取参数与判断信息整合
        $validator = Validator::make($input, $rule, $msg);
        // 如果验证失败返回登录页
        if($validator->fails()){
            return redirect('admin/login')->withErrors($validator)->withInput();
        }

        // 3. 验证用户名是否存在
        $user = User::where('uname',$input['username'])->first();
        if (empty($user)) {
             return redirect('admin/login')->with('errors','用户名不存在');
        }

        // 4. 验证密码是否正确

        if ($input['password'] != Crypt::decrypt($user->password)){
            return redirect('admin/login')->with('errors','密码不正确');
        }
        // 5. 验证码   strtolower():不区分大小写
        if(strtolower($input['code']) != strtolower(session('code'))) {
            return redirect('admin/login')->with('errors','验证码不正确');
        }

        // 登陆成功, 将信息保存到 session 中
        Session::put('user',$user);
        return redirect('admin/index');
    }

    /**
    * 加密测试 以及session 测试
    */ 
    public function ceshi(Request $request)
    {
       //  // 要生成密码
        // $str = '123456';
        // $de = Crypt::encrypt($str);
        // return $de;
       //  // 数据库拿到的密码
       //  $crypt = 'eyJpdiI6Im84ZmRYK0ZmaTNOdnN6bnB4TUpRd1E9PSIsInZhbHVlIjoiKzJnVWI3aVpsWGIyUFdOT0JBMHZzQT09IiwibWFjIjoiMTcyZTk4YTM3Y2U5ZTI5ZWU2ZjlmYjM2ZjZkNmM1YzhlMjc1NzBjM2YwOGNlNmNmNTEwMzUxZDFhZjVhNjM5YyJ9';
       // // 解密decrypt
       //  $de = Crypt::decrypt($crypt);
       //  // 是否匹配
       //  dd($str === $de);

        // 存入session 
        // Session::put('name','lisi');
        // session()->put('name','王五');
        // 获取session
        // return session()->get('name');
        // 销毁 session
        // session()->flush();

    }

    /**
     * 验证码验证
     * @author 冯志鑫
     * @param 加载验证码
     * @return 验证码基础验证
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
       session()->flush();
       // 跳转回登录页面
       return redirect('admin/login');

    }
}
