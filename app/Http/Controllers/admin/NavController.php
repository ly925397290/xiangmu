<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\Nav;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class NavController extends Controller
{

    public function putContent()
    {
        // 1.从数据库中读取相关内容数据
            $data = Nav::lists('nname','nlink')->all();
        // 2.创建webconfig.php文件并将数据写入webconfig.php文件
            // 将数组转化为字符串
            $str = "<?php \n return ".var_export($data,true).';';
            file_put_contents(config_path().'\navconfig.php', $str);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $keywords1 = $request->input('keywords1','');
        $Nav = Nav::where('nname','like','%'.$keywords1.'%')->paginate($request->input('num', 2));
        $count = count($Nav);
        return view('Admin.Nav.list',['Nav'=>$Nav,'count'=>$count,'request'=>$request]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

        return view('Admin.nav.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收请求数据
        $input = $request->except('_token');
        $input['nlink'] = 'https://'.$input['nlink']; 
        // 2.将数据入库
        $res = Nav::create($input);
        if($res){
            $this->putContent();
            $data = 1;
        }else{
            $data =0;
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
        $data = Nav::find($id);
        return view('Admin.nav.edit',compact('data'));
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
        $res = Nav::where('nid',$id)->update(['nname'=>$input['nname'],'nlink'=>$input['nlink']]);
        if($res){
            $this->putContent();
            $status = 1;
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
        // 查询要删除的导航
        $res = Nav::find($id)->delete();
        // 判断是否成功,将结果返回客户端
        if($res){
            $this->putContent();
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }
}
