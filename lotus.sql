/*
Navicat MySQL Data Transfer

Source Server         : liyang
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lotus

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-03-10 19:15:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data_action
-- ----------------------------
DROP TABLE IF EXISTS `data_action`;
CREATE TABLE `data_action` (
  `aid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `agoods` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '活动商品',
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_action
-- ----------------------------

-- ----------------------------
-- Table structure for data_admin
-- ----------------------------
DROP TABLE IF EXISTS `data_admin`;
CREATE TABLE `data_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '管理员名称',
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '管理员密码',
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '管理员手机号',
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '管理员邮箱',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data_admin
-- ----------------------------
INSERT INTO `data_admin` VALUES ('5', 'admin', 'eyJpdiI6IjloOWU1K3M1dTNuK1FwQmlMbmFOY2c9PSIsInZhbHVlIjoiVGRVWGVcL01VbWQzOXpQQyt1WVJ1eXc9PSIsIm1hYyI6ImVmMTQ4ZWZlNjBjNzRiN2Y0NmNiYjVlNDAwOWJiZmUwZDkwOWU1Mzg5ZDhiZjRhODU4NGNkYmY5NWMyMmVmZDEifQ==', '13439350974', '925397290@qq.com');
INSERT INTO `data_admin` VALUES ('6', '超级管理员', 'eyJpdiI6IjloOWU1K3M1dTNuK1FwQmlMbmFOY2c9PSIsInZhbHVlIjoiVGRVWGVcL01VbWQzOXpQQyt1WVJ1eXc9PSIsIm1hYyI6ImVmMTQ4ZWZlNjBjNzRiN2Y0NmNiYjVlNDAwOWJiZmUwZDkwOWU1Mzg5ZDhiZjRhODU4NGNkYmY5NWMyMmVmZDEifQ==', '13439350974', '925397290@qq.com');
INSERT INTO `data_admin` VALUES ('8', 'asafa', 'eyJpdiI6IjloOWU1K3M1dTNuK1FwQmlMbmFOY2c9PSIsInZhbHVlIjoiVGRVWGVcL01VbWQzOXpQQyt1WVJ1eXc9PSIsIm1hYyI6ImVmMTQ4ZWZlNjBjNzRiN2Y0NmNiYjVlNDAwOWJiZmUwZDkwOWU1Mzg5ZDhiZjRhODU4NGNkYmY5NWMyMmVmZDEifQ==', '13439350974', '925397290@qq.com');
INSERT INTO `data_admin` VALUES ('9', 'asafa', 'eyJpdiI6IjloOWU1K3M1dTNuK1FwQmlMbmFOY2c9PSIsInZhbHVlIjoiVGRVWGVcL01VbWQzOXpQQyt1WVJ1eXc9PSIsIm1hYyI6ImVmMTQ4ZWZlNjBjNzRiN2Y0NmNiYjVlNDAwOWJiZmUwZDkwOWU1Mzg5ZDhiZjRhODU4NGNkYmY5NWMyMmVmZDEifQ==', '13439350974', '925397290@qq.com');
INSERT INTO `data_admin` VALUES ('11', 'admin1', 'eyJpdiI6IjloOWU1K3M1dTNuK1FwQmlMbmFOY2c9PSIsInZhbHVlIjoiVGRVWGVcL01VbWQzOXpQQyt1WVJ1eXc9PSIsIm1hYyI6ImVmMTQ4ZWZlNjBjNzRiN2Y0NmNiYjVlNDAwOWJiZmUwZDkwOWU1Mzg5ZDhiZjRhODU4NGNkYmY5NWMyMmVmZDEifQ==', '13439350974', '925397290@qq.com');

-- ----------------------------
-- Table structure for data_adver
-- ----------------------------
DROP TABLE IF EXISTS `data_adver`;
CREATE TABLE `data_adver` (
  `adv_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '广告表id',
  `acustomer` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '客户信息',
  `atime` datetime NOT NULL COMMENT '有效时间',
  `atitle` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '广告标题',
  `apic` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '图片地址',
  `aurl` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '跳转地址',
  `astatus` int(10) unsigned NOT NULL COMMENT '状态 0：投放；1是下刊',
  PRIMARY KEY (`adv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_adver
-- ----------------------------

-- ----------------------------
-- Table structure for data_article
-- ----------------------------
DROP TABLE IF EXISTS `data_article`;
CREATE TABLE `data_article` (
  `aid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '相关文章表id',
  `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '文章标题',
  `apath` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '文章路径',
  `content` text CHARACTER SET utf8 NOT NULL COMMENT '文章内容',
  `art_thumb` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '缩略图',
  `auth` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '作者',
  `create_time` datetime NOT NULL COMMENT '时间',
  `cate_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '文章分类',
  `cate_id` int(11) unsigned NOT NULL,
  `file_upload` varchar(255) CHARACTER SET utf8 NOT NULL,
  `art_tag` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '关键词',
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_article
-- ----------------------------

-- ----------------------------
-- Table structure for data_cate
-- ----------------------------
DROP TABLE IF EXISTS `data_cate`;
CREATE TABLE `data_cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data_cate
-- ----------------------------
INSERT INTO `data_cate` VALUES ('1', '0', '0', '军火');
INSERT INTO `data_cate` VALUES ('2', '1', '0,1', '航空');
INSERT INTO `data_cate` VALUES ('3', '1', '0,1', '导弹');
INSERT INTO `data_cate` VALUES ('4', '1', '0,1', '航母');
INSERT INTO `data_cate` VALUES ('5', '2', '0,1,2', '辽宁号');
INSERT INTO `data_cate` VALUES ('6', '0', '0', '冷兵器');
INSERT INTO `data_cate` VALUES ('7', '0', '0', 'ffssfd');
INSERT INTO `data_cate` VALUES ('8', '1', '0,1', 'dasasd');
INSERT INTO `data_cate` VALUES ('9', '6', '0,6', 'dadada');
INSERT INTO `data_cate` VALUES ('10', '8', '0,1,8', 'dasdasd');

-- ----------------------------
-- Table structure for data_goods
-- ----------------------------
DROP TABLE IF EXISTS `data_goods`;
CREATE TABLE `data_goods` (
  `gid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品表id',
  `tid` int(11) unsigned NOT NULL COMMENT '商品类别Id(外键)',
  `shopid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '荷塘商店id  0为后台发布',
  `price` decimal(10,0) NOT NULL COMMENT '商品价格',
  `addtime` datetime NOT NULL COMMENT '发布商品时间',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '状态1是：0下架 1是上架2是下架',
  `inven` int(255) NOT NULL COMMENT '库存',
  `gname` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '商品名字',
  `urls` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '商品图片路径',
  `cid` int(11) DEFAULT NULL COMMENT '商品分类Id',
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_goods
-- ----------------------------
INSERT INTO `data_goods` VALUES ('15', '0', '0', '5000', '0000-00-00 00:00:00', '1', '0', '华为手机', null, '1');
INSERT INTO `data_goods` VALUES ('16', '0', '0', '6000', '0000-00-00 00:00:00', '1', '0', '联想', null, '1');
INSERT INTO `data_goods` VALUES ('17', '0', '0', '7000', '0000-00-00 00:00:00', '1', '0', '打印机', null, '1');
INSERT INTO `data_goods` VALUES ('18', '0', '0', '5000', '0000-00-00 00:00:00', '1', '2', '投影仪', null, '1');
INSERT INTO `data_goods` VALUES ('19', '3', '0', '234', '0000-00-00 00:00:00', '1', '3', '名称', null, '1');
INSERT INTO `data_goods` VALUES ('20', '0', '0', '54', '0000-00-00 00:00:00', '1', '54', 'fdv', null, '1');
INSERT INTO `data_goods` VALUES ('21', '32', '0', '32', '0000-00-00 00:00:00', '1', '23', '商品名称', null, '1');
INSERT INTO `data_goods` VALUES ('22', '23', '0', '23', '0000-00-00 00:00:00', '1', '31', '传达', null, '1');
INSERT INTO `data_goods` VALUES ('23', '23', '0', '23', '0000-00-00 00:00:00', '1', '31', '传达', null, '1');
INSERT INTO `data_goods` VALUES ('24', '23', '0', '23', '0000-00-00 00:00:00', '1', '31', '传达', null, '1');
INSERT INTO `data_goods` VALUES ('25', '23', '0', '23', '0000-00-00 00:00:00', '1', '31', '传达', null, '1');
INSERT INTO `data_goods` VALUES ('26', '0', '0', '322121', '0000-00-00 00:00:00', '1', '21', '商品名称', null, '1');
INSERT INTO `data_goods` VALUES ('27', '0', '0', '4323', '0000-00-00 00:00:00', '1', '3432', '的形势下', null, '1');
INSERT INTO `data_goods` VALUES ('28', '0', '0', '0', '0000-00-00 00:00:00', '1', '0', 'fsfsf', null, '1');
INSERT INTO `data_goods` VALUES ('29', '0', '0', '0', '0000-00-00 00:00:00', '1', '0', 'AAAA', null, '1');
INSERT INTO `data_goods` VALUES ('30', '0', '0', '0', '0000-00-00 00:00:00', '1', '0', 'fsdsfs', '/upload/goods/66a7899e67a6e899f57a1b43b0780109.jpg', '1');
INSERT INTO `data_goods` VALUES ('31', '0', '0', '0', '0000-00-00 00:00:00', '1', '0', 'sdfsdfs', '', '1');
INSERT INTO `data_goods` VALUES ('32', '0', '0', '0', '0000-00-00 00:00:00', '1', '0', 'csdcsd', '/upload/goods/243dde2f8c58d36d30656ef1f8d57528.jpg', '5');

-- ----------------------------
-- Table structure for data_goodsdetail
-- ----------------------------
DROP TABLE IF EXISTS `data_goodsdetail`;
CREATE TABLE `data_goodsdetail` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品详情表id',
  `gmid` int(11) unsigned NOT NULL COMMENT '商品留言id',
  `gooddes` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '商品描述',
  `gid` int(11) unsigned zerofill NOT NULL COMMENT '商品表外键',
  `gdesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_goodsdetail
-- ----------------------------
INSERT INTO `data_goodsdetail` VALUES ('1', '0', '', '00000000000', 'dscxsdcds');
INSERT INTO `data_goodsdetail` VALUES ('2', '0', '', '00000000000', '<p>fdvfdx</p>');
INSERT INTO `data_goodsdetail` VALUES ('3', '0', '', '00000000000', '<p>的我</p>');
INSERT INTO `data_goodsdetail` VALUES ('4', '0', '', '00000000000', '<p>传达</p>');
INSERT INTO `data_goodsdetail` VALUES ('5', '0', '', '00000000000', '<p>传达</p>');
INSERT INTO `data_goodsdetail` VALUES ('6', '0', '', '00000000000', '<p>传达</p>');
INSERT INTO `data_goodsdetail` VALUES ('7', '0', '', '00000000000', '<p>传达</p>');
INSERT INTO `data_goodsdetail` VALUES ('8', '0', '', '00000000000', '<p>多少成都市</p>');
INSERT INTO `data_goodsdetail` VALUES ('9', '0', '', '00000000000', '');
INSERT INTO `data_goodsdetail` VALUES ('10', '0', '', '00000000000', '<p>fsfdsdf</p>');
INSERT INTO `data_goodsdetail` VALUES ('11', '0', '', '00000000000', '<p>aa</p>');
INSERT INTO `data_goodsdetail` VALUES ('12', '0', '', '00000000000', null);
INSERT INTO `data_goodsdetail` VALUES ('13', '0', '', '00000000000', '<p>fsdfsdf</p>');
INSERT INTO `data_goodsdetail` VALUES ('14', '0', '', '00000000000', null);

-- ----------------------------
-- Table structure for data_goodstype
-- ----------------------------
DROP TABLE IF EXISTS `data_goodstype`;
CREATE TABLE `data_goodstype` (
  `tid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品类别id',
  `pid` int(11) unsigned NOT NULL COMMENT '商品类别父类ID',
  `tname` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '父类名称',
  `path` varchar(120) COLLATE utf8_bin NOT NULL COMMENT '路径',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_goodstype
-- ----------------------------

-- ----------------------------
-- Table structure for data_home_address
-- ----------------------------
DROP TABLE IF EXISTS `data_home_address`;
CREATE TABLE `data_home_address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '收货地址id',
  `name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '收货人',
  `phone` char(30) COLLATE utf8_bin NOT NULL COMMENT '联系电话',
  `adress` varchar(30) CHARACTER SET utf8 NOT NULL COMMENT '地址',
  `isStaAdd` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '是否默认地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_home_address
-- ----------------------------

-- ----------------------------
-- Table structure for data_home_collect
-- ----------------------------
DROP TABLE IF EXISTS `data_home_collect`;
CREATE TABLE `data_home_collect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '收藏详情表id',
  `uid` int(11) unsigned NOT NULL COMMENT '外键用户id',
  `gid` int(11) unsigned NOT NULL COMMENT '收藏商品id',
  `collectTime` datetime NOT NULL COMMENT '收藏时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_home_collect
-- ----------------------------

-- ----------------------------
-- Table structure for data_home_shop
-- ----------------------------
DROP TABLE IF EXISTS `data_home_shop`;
CREATE TABLE `data_home_shop` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商铺荷塘id',
  `uid` int(11) unsigned NOT NULL COMMENT '店主用户id',
  `shopname` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '店铺名称',
  `unum` int(255) NOT NULL COMMENT '粉丝收藏人数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_home_shop
-- ----------------------------

-- ----------------------------
-- Table structure for data_home_shopdetail
-- ----------------------------
DROP TABLE IF EXISTS `data_home_shopdetail`;
CREATE TABLE `data_home_shopdetail` (
  `sid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '店铺详情表id',
  `synopsis` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '店铺简介',
  `uid` int(11) unsigned NOT NULL COMMENT '店铺已经申请用户id',
  `status` char(50) CHARACTER SET utf8 NOT NULL COMMENT '店铺状态',
  `flevel` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '店铺等级（总共3级每100分-级）',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_home_shopdetail
-- ----------------------------

-- ----------------------------
-- Table structure for data_message
-- ----------------------------
DROP TABLE IF EXISTS `data_message`;
CREATE TABLE `data_message` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '留言表id',
  `uid` int(11) unsigned NOT NULL COMMENT '留言用户id',
  `gid` int(11) NOT NULL COMMENT '商品id',
  `content` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '留言内容',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '留言时间',
  `sid` int(11) NOT NULL COMMENT '商铺id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_message
-- ----------------------------

-- ----------------------------
-- Table structure for data_nav
-- ----------------------------
DROP TABLE IF EXISTS `data_nav`;
CREATE TABLE `data_nav` (
  `nid` int(10) NOT NULL COMMENT '导航id',
  `nname` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '导航名称',
  `nlink` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '连接目标地址',
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_nav
-- ----------------------------
INSERT INTO `data_nav` VALUES ('1', '百度', 'https://www.baidu.com/');
INSERT INTO `data_nav` VALUES ('2', '新浪', 'http://www.sina.com.cn/');

-- ----------------------------
-- Table structure for data_order
-- ----------------------------
DROP TABLE IF EXISTS `data_order`;
CREATE TABLE `data_order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '订单表id',
  `oid` int(11) unsigned NOT NULL COMMENT '订单编号',
  `oprice` decimal(10,0) NOT NULL COMMENT '订单总价',
  `money` int(11) NOT NULL COMMENT '应付金额',
  `uid` int(11) NOT NULL COMMENT '订单用户ID',
  `order_status` int(11) unsigned NOT NULL COMMENT '订单状态 1:待确认 2:已确认 3:已收货  4:已取消 5:已完成 6:已作废',
  `pay_status` int(11) unsigned NOT NULL COMMENT '支付状态 1:未支付 2:已支付',
  `shipping_status` int(11) unsigned NOT NULL COMMENT '发货状态 1:已发货 0:未发货',
  `payment` int(11) unsigned NOT NULL COMMENT '支付方式 1:支付宝 2:微信 3:货到付款',
  `delivery_method` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '配送方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_order
-- ----------------------------
INSERT INTO `data_order` VALUES ('1', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO `data_order` VALUES ('3', '1', '1', '0', '0', '2', '2', '1', '1', '1');
INSERT INTO `data_order` VALUES ('4', '1', '2', '0', '0', '1', '2', '1', '1', '1');
INSERT INTO `data_order` VALUES ('5', '2', '3', '0', '0', '1', '2', '1', '1', '1');

-- ----------------------------
-- Table structure for data_orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `data_orderdetail`;
CREATE TABLE `data_orderdetail` (
  `oid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '订单详情表id',
  `gid` int(11) NOT NULL COMMENT '商品id',
  `aid` int(11) unsigned NOT NULL COMMENT '收货地址id',
  `otime` datetime NOT NULL COMMENT '订单时间',
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_orderdetail
-- ----------------------------

-- ----------------------------
-- Table structure for data_pcate
-- ----------------------------
DROP TABLE IF EXISTS `data_pcate`;
CREATE TABLE `data_pcate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pcate_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限分类名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data_pcate
-- ----------------------------
INSERT INTO `data_pcate` VALUES ('20', '用户');

-- ----------------------------
-- Table structure for data_permission
-- ----------------------------
DROP TABLE IF EXISTS `data_permission`;
CREATE TABLE `data_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限标题',
  `urls` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限对应的路径',
  `pcate_id` int(11) NOT NULL COMMENT '权限分类Id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data_permission
-- ----------------------------

-- ----------------------------
-- Table structure for data_problem
-- ----------------------------
DROP TABLE IF EXISTS `data_problem`;
CREATE TABLE `data_problem` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '相关问题表id',
  `ptitle` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '问题标题',
  `ppath` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '跳转地址',
  `pcontent` text CHARACTER SET utf8 NOT NULL COMMENT '问题解答',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_problem
-- ----------------------------

-- ----------------------------
-- Table structure for data_report
-- ----------------------------
DROP TABLE IF EXISTS `data_report`;
CREATE TABLE `data_report` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '违法商品举报表id',
  `gid` int(11) NOT NULL COMMENT '商品id（外键）',
  `rdesc` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '原因描述',
  `rpic` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '违法图片',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_report
-- ----------------------------

-- ----------------------------
-- Table structure for data_role
-- ----------------------------
DROP TABLE IF EXISTS `data_role`;
CREATE TABLE `data_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '角色名称',
  `status` tinyint(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of data_role
-- ----------------------------
INSERT INTO `data_role` VALUES ('22', '超级管理员', '1');
INSERT INTO `data_role` VALUES ('36', '普通管理员', '0');

-- ----------------------------
-- Table structure for data_slid
-- ----------------------------
DROP TABLE IF EXISTS `data_slid`;
CREATE TABLE `data_slid` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '轮播图id',
  `simg` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '图片路径',
  `surl` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '跳转地址',
  `status` int(10) unsigned NOT NULL COMMENT '轮播图状态1是加入2是下架',
  `order` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '排序',
  `sliname` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '轮播图名称',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_slid
-- ----------------------------

-- ----------------------------
-- Table structure for data_users
-- ----------------------------
DROP TABLE IF EXISTS `data_users`;
CREATE TABLE `data_users` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '前后台用户id',
  `uname` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '前后台用户名',
  `password` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '前后台用户密码',
  `status` int(10) NOT NULL DEFAULT '1' COMMENT '状态0是未开启1是开启',
  `identity` int(10) NOT NULL COMMENT '1:普通用户 2:会员用户 3:店主',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_users
-- ----------------------------
INSERT INTO `data_users` VALUES ('1', 'admin', 'eyJpdiI6IlwvK0YwN3J5d1pjVWpwc2tIZmE0WHdnPT0iLCJ2YWx1ZSI6IitxY09OT3dXR2RManA2ZE55UUZsVmc9PSIsIm1hYyI6IjYxNjcyYWVkZTU1YmQzZDFiOTk5ODE0YzJlZjY4Y2RkZTE2NjEzNDBkMDdiZDA2ZGU5Yzk2YWUwOTE0MzQzZmIifQ==\r\n', '1', '1');
INSERT INTO `data_users` VALUES ('14', 'myadmin', 'eyJpdiI6IlwvK0YwN3J5d1pjVWpwc2tIZmE0WHdnPT0iLCJ2YWx1ZSI6IitxY09OT3dXR2RManA2ZE55UUZsVmc9PSIsIm1hYyI6IjYxNjcyYWVkZTU1YmQzZDFiOTk5ODE0YzJlZjY4Y2RkZTE2NjEzNDBkMDdiZDA2ZGU5Yzk2YWUwOTE0MzQzZmIifQ==', '1', '1');
INSERT INTO `data_users` VALUES ('28', 'rgdgds', '111111111111', '0', '4');

-- ----------------------------
-- Table structure for data_user_details
-- ----------------------------
DROP TABLE IF EXISTS `data_user_details`;
CREATE TABLE `data_user_details` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户详情表id',
  `uid` int(11) unsigned NOT NULL COMMENT '用户id（外键）',
  `lid` int(11) unsigned NOT NULL COMMENT '店铺荷塘id',
  `face` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '用户头像',
  `number` int(11) NOT NULL COMMENT '积分',
  `addr` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_user_details
-- ----------------------------
INSERT INTO `data_user_details` VALUES ('1', '20', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('2', '19', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('3', '18', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('4', '17', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('5', '16', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('6', '15', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('7', '14', '0', '', '0', '');
INSERT INTO `data_user_details` VALUES ('8', '13', '0', '', '0', '');

-- ----------------------------
-- Table structure for data_webs
-- ----------------------------
DROP TABLE IF EXISTS `data_webs`;
CREATE TABLE `data_webs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '网站配置id',
  `web_title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '网站配置标题',
  `web_name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '网站名称',
  `web_content` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '网站内容',
  `web_order` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '排序',
  `field_type` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '配置类型类型',
  `field_value` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '1' COMMENT '配置说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of data_webs
-- ----------------------------
INSERT INTO `data_webs` VALUES ('5', '网站logo', 'web_logo', '/upload/logo/5aa8d569a7a32b2d2b1a4224e7c62251.png', '2', 'file', '1gdgdfgddg');
INSERT INTO `data_webs` VALUES ('6', '网站标题', 'web_title', '前台首页', '1', 'input', '1');

-- ----------------------------
-- Table structure for date_links
-- ----------------------------
DROP TABLE IF EXISTS `date_links`;
CREATE TABLE `date_links` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '友情连接ID',
  `lname` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '连接名称',
  `lurl` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '连接目标地址',
  `status` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '1:代表显示  0:代表不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of date_links
-- ----------------------------
INSERT INTO `date_links` VALUES ('5', '百度', 'www.baidu.com', '0');
INSERT INTO `date_links` VALUES ('6', '新浪', 'www.sina.com.cn', '1');

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission` (
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `permission_id` int(11) NOT NULL COMMENT '权限id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES ('22', '14');
INSERT INTO `role_permission` VALUES ('32', '14');
INSERT INTO `role_permission` VALUES ('32', '15');
INSERT INTO `role_permission` VALUES ('22', '15');
INSERT INTO `role_permission` VALUES ('22', '16');
INSERT INTO `role_permission` VALUES ('33', '27');
INSERT INTO `role_permission` VALUES ('34', '27');
INSERT INTO `role_permission` VALUES ('34', '28');
INSERT INTO `role_permission` VALUES ('36', '29');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `role_id` int(11) NOT NULL COMMENT '角色id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('8', '22');
INSERT INTO `user_role` VALUES ('8', '23');
INSERT INTO `user_role` VALUES ('10', '22');
INSERT INTO `user_role` VALUES ('10', '23');
INSERT INTO `user_role` VALUES ('6', '22');
INSERT INTO `user_role` VALUES ('5', '22');
INSERT INTO `user_role` VALUES ('9', '22');
INSERT INTO `user_role` VALUES ('11', '36');
