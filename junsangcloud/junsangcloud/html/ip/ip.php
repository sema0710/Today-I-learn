<?php
if(!defined('_main_')) {
	exit();
}
// 파일 읽기 
$ip = $_SERVER['REMOTE_ADDR'];
$check = false;

$list = file("config/config.yml");
$result = '';

for($i=0;$i<count($list);$i++) {
	$result .= $list[$i].',';
}

if(strpos($result, $ip) !== false) {
	$check = true;
}

if($check) {
	define('_user_', TRUE);
}
?>