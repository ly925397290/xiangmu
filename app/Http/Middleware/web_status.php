<?php

namespace App\Http\Middleware;

use Closure;

class web_status
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
        if(config('webconfig.web_status') == 0){
            // 跳转到登录页.并添加提示
            return view('errors.503');
        } else {
            return $next($request);
        }
    }
}
