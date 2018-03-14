<?php

namespace App\Http\Controllers\ADMIN;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\web;
use DB;
class WebsController extends Controller
{   
    public function upload(Request $request)
    {

        //1.获取上传文件
        $file = $request->file('file_upload');
        //  2.判断上传文件的有效性
         if($file->isValid()){
 //            获取文件后缀名
             $ext = $file->getClientOriginalExtension();    //文件拓展名

            //生成新文件名

             $newfilename = md5(date('YmdHis').rand(1000,9999).uniqid()).'.'.$ext;
             $res = $file->move(public_path().'/upload/logo/',$newfilename);

           return '/upload/logo/'.$newfilename;
       }
        
    }
    public function putContent()
    {
        // 1.从数据库中读取相关内容数据
            $data = web::lists('web_content','web_name')->all();
        // 2.创建webconfig.php文件并将数据写入webconfig.php文件
            // 将数组转化为字符串
            $str = "<?php \n return ".var_export($data,true).';';
            // file_put_contents(config_path().'\webconfig.php', $str);
            $myfile = fopen(config_path().'\webconfig.php', "w");
            fwrite($myfile, $str);
            fclose($myfile);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->putContent();
        $data = web::orderBy('web_order','asc')->get();
        foreach ($data as $v){
            //不同的记录类型做不同的处理
            switch($v->field_type){
                //如果此条记录的类型是文本框，内容字段应该返回这样的值
//             <input type="text"  name="web_content"  class="layui-input" value="">

                case 'input':
                    $v->web_content = '<input type="text"  name="web_content[]"  class="layui-input" value="'.$v->web_content.'">';
                    break;
                //如果此条记录的类型是文本域，内容字段应该返回这样的值
//             <textarea name="conf_tips" class="layui-textarea"></textarea>

                case 'textarea':
                    $v->web_content = '<textarea name="web_content[]" class="layui-textarea">'.$v->web_content.'</textarea>';
                    break;

                //如果此条记录的类型是单选按钮，内容字段应该返回这样的值
//              <input type="radio" name="web_content" value="1" title="开启" checked="">
//              <input type="radio" name="web_content" value="0" title="关闭" checked="">

                case 'radio':
                    //存放最终的结果
                    $str = '';
                    $arr = explode(',',$v->field_value);

                    foreach ($arr as $n=>$m){
                      $r = explode('|',$m);
                      $c = ($r[0] == $v['web_content']) ? 'checked':'';
                     $str.= '<input type="radio" '.$c.' name="web_content[]" value="'.$r[0].'" title="'.$r[1].'">'.$r[1].'&nbsp;&nbsp;&nbsp;&nbsp;';
                    }
                    $v->web_content = $str;
                    break;
                case 'file':
                    $v->web_content = '<img src="'.$v->web_content.'" />';
                    break;

            }

        }
        $count = count($data);
        return view('admin.web.list',compact('data','count'));
    }

    /**
     * 网站配置添加页面
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.web.add');
    }

    /**
     * 配置添加操作
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->except('_token');
        // dd($input);
        if($input['field_type'] == 'radio')
        {
          $input['field_value'] = '1|开启,0|关闭';
        }
        $res = web::create($input);
        if($res){
            //如果网站配置项添加成功，调用putContent（）将数据同步到webconfig.php文件
            $this->putContent();
            return redirect('admin/webs');
        }else{
            return back();
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
        /**
         * 修改页面显示
         */
        $data = web::where('id',$id)->get();
        foreach ($data as $v){
            //不同的记录类型做不同的处理
            switch($v->field_type){
                //如果此条记录的类型是文本框，内容字段应该返回这样的值
//             <input type="text"  name="web_content"  class="layui-input" value="">

                case 'input':
                    $v->web_content = '<input type="text"  name="web_content"  class="layui-input" value="'.$v->web_content.'">';
                    break;
                //如果此条记录的类型是文本域，内容字段应该返回这样的值
//             <textarea name="conf_tips" class="layui-textarea"></textarea>

                case 'textarea':
                    $v->web_content = '<textarea name="web_content" class="layui-textarea">'.$v->web_content.'</textarea>';
                    break;

                //如果此条记录的类型是单选按钮，内容字段应该返回这样的值
//              <input type="radio" name="web_content" value="1" title="开启" checked="">
//              <input type="radio" name="web_content" value="0" title="关闭" checked="">

                case 'radio':
                    //存放最终的结果
                    $str = '';
                    $arr = explode(',',$v->field_value);

                    foreach ($arr as $n=>$m){
                      $r = explode('|',$m);
                      $c = ($r[0] == $v['web_content']) ? 'checked':'';
                     $str.= '<input type="radio" '.$c.' name="web_content" value="'.$r[0].'" title="'.$r[1].'">';
                    }
                    $v->web_content = $str;
                    break;
                case 'file':
                    $v->web_content = '<input id="file_upload" name="file_upload" type="file" multiple="true" >
                                       <input type="hidden" name="web_content" id="art_thumb" value="">
                                       <img src="" id="art_thumb_img" width="100">';
                    break;
            }

        }
        return view('admin.web.edit',compact('data'));
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
        //1.接收数据
            $input = $request->except('_token','_method');
            // return $input['web_content'][0];
        // 2.修改数据库数据
            // $res = web::where('id',$id)->update(['web_title'=>$input['web_title'],'web_name'=>$input['web_name'],'web_content'=>$input['web_content'],'web_order'=>$input['web_order'],'web_tips'=>$input['web_tips']]);
            $webs= web::find($id);
            // return $webs;
            $webs->web_title = $input['web_title'];
            $webs->web_name = $input['web_name'];
            $webs->web_content = $input['web_content'];
            $webs->web_order = $input['web_order'];
            $webs->field_value = $input['field_value'];
            $res = $webs->save();
        // 3.判断是否成功并返回给客户端
        if($res){
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
            $this->putContent();
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 查询要删除的配置
        $res = web::find($id)->delete();
        // 判断是否成功,将结果返回客户端
        if($res){
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
            $this->putContent();
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;
    }
    /**
     * 网站配置批量删除操作
     */
    public function delAll(Request $request)
     {
        // 接收数据
        $input = $request->input('ids');
        // 删除数据
        $res = web::destroy($input);
        // 判断是否成功,并且返回客户端
        if($res){
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
            $this->putContent();
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }

        return $data;
     }

     /**
     * 网站配置批量修改操作
     */
    public function editAll(Request $request)
    {
        $input = $request->except('_token');
        
        DB::beginTransaction();
        try{
            //根据id,遍历所有的记录
            foreach ($input['id'] as $k=>$v){
                //根据当前遍历的id,获取网站配置记录
//                $conf = Config::find($v);
                //执行修改操作
//                $conf->update(['conf_content'=>$input['conf_content'][$k]]);
                DB::table('data_webs')->where('id',$v)->update(['web_content' => $input['web_content'][$k]]);
            }
            //如果所有的操作成功，提交事务
            DB::commit();
            
            return redirect('/admin/webs');
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
        $this->putContent();
        }catch (Exception $e){
            DB::rollBack();
            return redirect()->back()
                ->withErrors(['error' => $e->getMessage()]);
        }
    }
}
