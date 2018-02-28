<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * 后台首页显示
     */
     public function index()
     {
        return view('admin.index');
     }

     /**
      * 后台详情页显示
      */
      public function welcome()
      {
          return view('admin.welcome');
      }
}
