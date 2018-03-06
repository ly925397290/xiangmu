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
        //
       $aa = $request->all();
        $count = DB::table('data_article')->count();
       // dd($aa);
       $query = Article::query()->orderBy('aid','desc');
       if( isset($aa['username']) ){
            $query->where('auth','like','%'.$aa['username'].'%');
       }
       $articles = $query->select('*',DB::raw('concat(apath,",",aid) as paths'))->orderBy('paths','asc')->paginate(2);
       // dd($articles);
        // $articles = DB::table('data_article')->select('*',DB::raw('concat(apath,",",aid) as paths'))->orderBy('paths','asc')->paginate(2);
        // dd($articles);
            foreach ($articles as $key => $value) {
                // 统计字符串出现的次数
                $n = substr_count($value['apath'],',');
                $str = str_repeat('|----',$n);
                // 重复使用字符串 拼接分类名称
                // dd( str_repeat('|----',$n).$articles[$key]['title'] );
                
                $value['title'] = str_repeat('|----',$n).$articles[$key]['title'] ;
                // dd($value);
                if($articles[$key]['cate_id'] == 0)
                {
                    $value['apath'] = '父类';
                }else{
                    // 查询父级分类的数据
                    $parent_data = Article::where('aid',$articles[$key]['cate_id'])->first();
                    // 处理数据 
                    $value['apath'] = $parent_data['title'];
                }
            
            }
            // dd($articles);
        return view('admin.article.list',['articles'=>$articles,'request'=>$request,'count'=>$count]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
            $articles = DB::table('data_article')->select('*',DB::raw('concat(apath,",",aid) as paths'))->orderBy('paths','asc')->get();
            foreach ($articles as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['apath'],',');
            // 重复使用字符串 拼接分类名称
            $articles[$key]['title'] = str_repeat('|----',$n).$articles[$key]['title'];
        }
        return view('admin.article.add',['articles'=>$articles]);
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
        $input = $request->except('_token');
       //dd($input) ;
        //2.添加到数据库
        $res = Article::create($input);
        
        //3.判断是否成功并将结果返回到客户端





//        3. 判断添加是否成功，给客户端返回提示信息
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


