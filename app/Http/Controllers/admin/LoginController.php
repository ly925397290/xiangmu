<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    /**
     * 后台登录页显示
     */
    public function login()
    {
        return view('admin.login');
    }

    /**
     * 后台登录处理
     */
     public function dologin(Request $request)
     {
        // 后台首页显示
        return redirect('admin/index');
     }
}
