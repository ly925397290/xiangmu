<?php

namespace App\Http\Middleware;

use Closure;

class homeLogin
{
    /**
     * Handle an incoming request.
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
            return redirect('home/login')->with('errors','请登录');
        } else {
            return $next($request);
        }
    }
}
