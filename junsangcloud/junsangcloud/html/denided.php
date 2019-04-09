<?php
//등록되지 않은 아이피가 오는 페이지
$ip = $_SERVER['REMOTE_ADDR'];
echo "<script>alert('".$ip."');</script>";
?>
<html>
	<head>
		<title>서비스 종료</title>
		<link rel="shortcut icon" href="icon.ico">
	</head>
	<body>
		<center>
			<h1>죄송합니다</h1>
			<h3>현제 페이지는 만료된 페이지 입니다.</h3>
		</center>
	</body>
</html>