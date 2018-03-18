<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\cates;

class catesController extends Controller
{


    /**递归获取子孙栏目
     * @param $cates
     */
    protected function findSubTree($cates,$id=0,$lev=1){
        $subtree = [];//子孙数组
        foreach ($cates as $v) {
            if($v->pid==$id){
                $v->lev = $lev;
                $subtree[] = $v;
                $subtree = array_merge($subtree,$this->findSubTree($cates,$v->id,$lev+1));
            }
        }
        return $subtree;
    }
    /**
     * 渲染回收商品分类视图
     *
     * @return \商品分类视图
     */
    public function index()
    {
        //获取所有的分类
        $cates = cates::get();
        $cates = $this->findSubTree($cates,0,0);
        return view('admin.recycle_cate.list',['cates'=>$cates]);
    }

    /**
     *  分类添加视图
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $cates = cates::get();
        $cates = $this->findSubTree($cates,0,0);
        return view('admin.recycle_cate.add',['cates'=>$cates]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->except('_token');
        $res = cates::create($input);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
