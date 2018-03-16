<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;
use App\model\Nav;
use App\model\Slide;
use App\model\good;

class AssessController extends Controller
{
    /**
     * 评估等待页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view('home/assess');
    }

}
