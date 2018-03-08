<?php

namespace App\Http\Middleware;

use Closure;

class Login
{
<<<<<<< HEAD
    /**
     * Handle an incoming request.
=======

    /**
     * 登录中间件.
>>>>>>> origin/fengzhixing
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
<<<<<<< HEAD
        //如果没有登录
        if(!session('user')){
            return redirect()->route('admin.login')->with('errors','请注意个人素质');
        }
        //登录放行
        return $next($request);
=======
        // 如果没有登陆
        if(!session('user')){
            // 跳转到登录页.并添加提示
            return redirect()->route('admin.login')->with('errors','请注意, 非法路径! ! !');
        } else {
            return $next($request);
        }
>>>>>>> origin/fengzhixing
    }
}
