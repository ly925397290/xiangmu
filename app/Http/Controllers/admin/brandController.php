<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\cates;
use App\model\brand;

class brandController extends Controller
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
     * 文件上传处理
     */
    public function upload(Request $request)
    {

        //1.获取上传文件
        $file = $request->file('file_upload');
        //return $file;
        //  2.判断上传文件的有效性
         if($file->isValid()){
        //获取文件后缀名
             $ext = $file->getClientOriginalExtension();    //文件拓展名
            //生成新文件名
             $newfilename = md5(date('YmdHis').rand(1000,9999).uniqid()).'.'.$ext;
             $res = $file->move(public_path().'/upload/brand',$newfilename);

           return '/upload/brand/'.$newfilename;
       }
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //获取所有的分类
        $cates = cates::get();
        $cates = $this->findSubTree($cates,0,0);
        //获取所有品牌信息
        $brand = brand::paginate(10);
        //获取分类名
        foreach ($brand as $value) {
            $value['cate_id'] = cates::where('id',$value['cate_id'])->first()['name'];
        }
        return view('admin.recycle_brand.list',compact('cates','brand'));
    }

    /**
     * 添加分类处理
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->except('_token','file_upload');
        $res = brand::create($input);
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
