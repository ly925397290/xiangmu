<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * 用户列表页
     */
    public function index()
    {
        return view('admin.user.list');
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
        echo '添加用户';
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
