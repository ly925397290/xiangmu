<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\cate;

class cateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        //获得此分类下的子类
        $cate = cate::where('pid',$id)->get();
        // 拼接字符串
        $caidan = '';
        $caidan .= "<a href='#' target='_blank' id='' title='手机' data-code='1000051971-0'>";
        foreach($cate as $v){
            $caidan .=$v->title;
        }
        $caidan .= "</a>";
        return $caidan;
    }
}
