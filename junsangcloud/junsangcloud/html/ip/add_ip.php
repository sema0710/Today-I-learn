<?php
//아이피 추가
$ip = $_POST['add_ip'];

//무언가를 입력했는지 확인
if($ip == "") {
	echo "
	<script>
		alert('아이피를 입력해주세요');
		history.back();
	</script>";
	exit();
}

$list = file("config/config.yml");
$result = '';
for($i=0;$i<count($list);$i++) {
	$result .= $list[$i].',';
}
if(strpos($result, $ip) !== false) {
	echo "
	<script>
		alert('해당 아이피는 이미 등록되어 있습니다');
		history.back();
	</script>";
	exit();
}

$file = fopen("config/config.yml","a+");
fwrite($file, chr(13).chr(10).$ip);
fclose($file);
echo "
<script>
	alert('성공적으로 아이피를 등록하였습니다');
	history.back();
</script>";
?>