<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\user;
use App\model\user_good;
use DB;

class ShoplistController extends Controller
{
    /**
     * 商品详情页
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $goods = good::find($id);
        return view('home/shoplist',compact('goods'));
    }

}
