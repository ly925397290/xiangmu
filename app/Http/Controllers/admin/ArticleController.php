<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\Article;
use App\Model\Cate;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function upload(Request $request)
    {

        //1.获取上传文件
        $file = $request->file('file_upload');
   //  return $file;
        //  2.判断上传文件的有效性
         if($file->isValid()){
 //            获取文件后缀名
             $ext = $file->getClientOriginalExtension();    //文件拓展名

            //生成新文件名

             $newfilename = md5(date('YmdHis').rand(1000,9999).uniqid()).'.'.$ext;
             $res = $file->move(public_path().'/upload',$newfilename);
       
//               //上传到七牛云
            // $disk = Storage::disk('qiniu');
            // return $disk;
//            // $disk->put('avatars/1', $fileContents);
            // \Storage::disk('qiniu')->writeStream('uploads/'.$newfilename, fopen($file->getRealPath(), 'r'));

             // 将图片上传到本地服务器


//             //将上传文件的位置返回给客户端

           return '/upload/'.$newfilename;
       }
        
    }

    public function index(Request $request)
    {
        $aa = $request->all();
       
       if( isset($aa['username']) ){
            $articles = Article::where('auth','like','%'.$aa['username'].'%')->paginate(3);
       }else{
            $articles = Article::query()->orderBy('number','desc')->paginate(9);
       }
        $count = count($articles);
        return view('admin.article.list',['articles'=>$articles,'request'=>$request,'count'=>$count]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view('admin.article.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        

        //1.接收数据
        $data = $request->except('_token');
    
        //2.添加到数据库
        $res = Article::create($data);      
        //3. 判断添加是否成功，给客户端返回提示信息


        if($res)
        {
            return  redirect('/admin/article')->with('msg','添加成功');
        }else{
            return back()->with('msg','添加失败');
        }
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
        // return 111;
        $articles = Article::find($id);
        return view('admin.article.edit',['articles'=>$articles]);
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
       
        $input = $request->except('_token','_method');

        $res = Article::find($id)->update($input);



        //判断
        if($res)
        {
            return redirect('/admin/article');
        }else{
            return back()->with('msg','修改失败');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        找到要删除的记录，并删除
       $res =  Article::find($id)->delete();
        if($res){
            $data = 1;
            
        }else{
            $data = 0;
        }

        return $data;
    }


}


