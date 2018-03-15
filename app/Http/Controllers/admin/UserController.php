<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Model\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    /**
     * 用户列表页
     */
    public function index(Request $request)
    {
       
                $user = User::orderBy('uid','uname')
            ->where(function($query) use($request){
                //检测关键字
                $username = $request->input('username');

                //如果用户名不为空
                if(!empty($username)) {
                    $query->where('uname','like','%'.$username.'%');
                }
            })
            ->paginate($request->input('num', 10));
        return view('admin.user.list',['user'=>$user, 'request'=> $request]);

    }

    /**
     * 添加用户页面显示
     */
    public function create()
    {
        return view('admin.user.add');
    }

    /**
     *添加用户操作
     */
    public function store(Request $request)
    {
        return '添加用户';
    }

    /**
     * 用户详情页显示
     */
    public function show($id)
    {
        echo '用户详情';
    }

    /**
     * 用户修改页显示
     */
    public function edit($id)
    {
        return view('admin.user.edit');
    }

    /**
     * 用户修改操作
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 用户删除操作
     */
    public function destroy($id)
    {
        //
    }
}
