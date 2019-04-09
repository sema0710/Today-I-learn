<?php
$name = $_GET['name'];
$id = $_GET['id'];
$pw = $_GET['pw'];
$ip = $_SERVER['REMOTE_ADDR'];

$check = is_file("../user/".$id.".yml");
if($check) {
	echo "
	<script>
		alert('아이디가 중복됩니다');
		history.back();
	</script>";
	exit();
}

$file = fopen("../user/".$id.".yml", "w");
fwrite($file, "Name: ".$name.chr(13).chr(10));
fwrite($file, "IP: ".$ip.chr(13).chr(10));
fwrite($file, "Id: ".$id.chr(13).chr(10));
fwrite($file, "Password: ".$pw);
fclose($file);
?>