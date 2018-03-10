<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;

class LinkController extends Controller
{

    public function putContent()
    {
        // 1.从数据库中读取相关内容数据
            $data = link::lists('lname','lurl')->all();
        // 2.创建webconfig.php文件并将数据写入webconfig.php文件
            // 将数组转化为字符串
            $str = "<?php \n return ".var_export($data,true).';';
            file_put_contents(config_path().'\linkconfig.php', $str);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $lname = $request->input('lname','');
        $link = link::where('lname','like','%'.$lname.'%')->paginate($request->input('num', 2));
        $count = count($link);
        return view('admin.link.list',compact('link','request','count'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.link.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收数据
        $input = $request->except('_token');
        $input['lurl'] = 'http://'.$input['lurl'];
        // 2.添加到数据库
        $res = link::create($input);
        // 3.判读是否成功返回给客户端
        if($res){
            $data = 1;
            $this->putContent();
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
        $link = link::find($id);
        return view('admin.link.edit',compact('link'));
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
         // 1.接收请求数据
        $input = $request->except('_token');
        $res = link::where('id',$id)->update(['lname'=>$input['lname'],'lurl'=>$input['lurl'],'status'=>$input['status']]);
        if($res){
            $status = 1;
            $this->putContent();
        }else{
            $status = 0;
        }
        return $status;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 查询要删除的链接
        $res = link::find($id)->delete();
        // 判断是否成功,将结果返回客户端
        if($res){
            $data = [
                'status'=>1,
            ];
            $this->putContent();
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;
    }

    /**
     * 链接状态修改
     */
     public function changestatus(Request $request)
     {
        //接收数据
        $input = $request->except('_token');
        // 修改数据库信息
        $status = ($input['status'] == 0) ? 1 : 0;
        $res = link::where('id',$input['id'])->update(['status'=>$status]);
        // 判断是否成功,将结果返回客户端
        if($res){
            $data = [
                'status'=>1,
            ];
            $this->putContent();
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;
     }
}
