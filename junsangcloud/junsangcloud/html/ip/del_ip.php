<?php
//아이피 삭제
$ip = $_POST['del_ip'];

//무언가를 입력했는지 확인
if($ip == "") {
	echo "
	<script>
		alert('아이피를 입력해주세요');
		history.back();
	</script>";
	exit();
}

//등록되있는 아이피인지 아닌지 확인
$list = file("config/config.yml");
$result = '';
for($i=0;$i<count($list);$i++) {
	$result .= $list[$i].',';
}
if(strpos($result, $ip) == false) {
	echo "
	<script>
		alert('해당 아이피는 등록되있지 않습니다');
		history.back();
	</script>";
	exit();
}

//아이피 삭제
$result = explode(',', $result);
$result = str_replace($ip, '', $result);
$result = str_replace('- 허가된 아이피 목록 -', '', $result);
$result = str_replace(chr(13).chr(10), '', $result);

$file = fopen("config/config.yml","w+");
$count = count($result);
fwrite($file, '- 허가된 아이피 목록 -');
for($i = 0; $i < $count; $i++) {
	if($result[$i] == "") {
		continue;
	}
	fwrite($file, chr(13).chr(10).$result[$i]);
}
fclose($file);
echo "
	<script>
		alert('정상적으로 아이피를 삭제하였습니다');
		history.back();
	</script>";
?>