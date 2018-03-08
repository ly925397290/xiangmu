<?php

namespace App\Http\Middleware;

use Closure;

class Login
{
    /**
     * Handle an incoming request
     * 登录中间件.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // 如果没有登陆
        if(!session('user')){
            // 跳转到登录页.并添加提示
            return redirect()->route('admin.login')->with('errors','请注意, 非法路径! ! !');
        } else {
            return $next($request);
        }
    }
}
