<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // 关联的表名
    protected $table = 'data_users';
    // 表的主键
    public $primaryKey = 'uid';
    // 是否自动维护
    public $timestamps = false;
