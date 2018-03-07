<?php

namespace App\Http\Middleware;

use Closure;
use App\model\admin;
class permission
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
        // 1. 获取当前访问的方法名

        $route = \Route::current()->getActionName();
        // return $route;
        $user = admin::find(5);
        // return $user;
        $roles = $user->user_role;
        // return $roles;
        //判断是否是超级管理员
        if($roles[0]->status){
            return $next($request);
        }else{
            //判断session中是否有当期用户的权限
            if(session('auth')){
                if(in_array($route,session('auth'))){
                    return $next($request);
                }else{
                    //如果没有权限，返回一个提示
                    return redirect('noaccess');
                }
            }else{
                //定义一个数组，存放当前用户拥有的所有的权限
                $own_permission = [];

                //2. 获取当前用户拥有的权限
                    //2.1 获取当前用户拥有的角色
                // $user = session('user');
                $user = admin::find(5);
                // return $user;
                $roles = $user->user_role;
                // return $roles;
                //2.2 根据拥有的角色查找关联的权限
                foreach ($roles as $role) {
                    //2.2.1查找当前角色的拥有的权限
                    $perms = $role->role_permission;
                    // return $perms;
                    //2.2.2获取当前权限对应的控制器的方法名
                    foreach ($perms as $perm) {
                        $own_permission[] = $perm->urls;

                    }
                }
                // return $own_permission;
                //3.去掉重复的权限
                $own_permission = array_unique($own_permission);
                // return $own_permission;
                //存入session中
                session()->push('auth',$own_permission);
                //4. 判断当前访问路由是否在用户权限列表中，如果在放行；如果不在，给一个没有权限的提示
                if(in_array($route,$own_permission)){
                    return $next($request);
                }else{
                    //如果没有权限，返回一个提示
                    return redirect('noaccess');
                }

            }
        }
    }
}
