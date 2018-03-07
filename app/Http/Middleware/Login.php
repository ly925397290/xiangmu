<?php

namespace App\Http\Middleware;

use Closure;

class Login
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
        //如果没有登录
        if(!session('user')){
            return redirect()->route('admin.login')->with('errors','请注意个人素质');
        }
        //登录放行
        return $next($request);
    }
}
