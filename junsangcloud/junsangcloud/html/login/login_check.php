<?php
$id = $_POST['userid'];
$pw = $_POST['userpw'];

//아이디 존재여부
$check = is_file("../user/".$id.".yml");
if(!$check) {
	echo "
	<script>
		alert('해당 아이디는 존재하지 않습니다');
		history.back();
	</script>";
	exit();
}

//아이디와 비밀번호 체크

?>