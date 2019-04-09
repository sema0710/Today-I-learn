<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
	</head>
	<body>
		<center>
			<div style="wight: 50%; height: 50%;">
				
			</div>
		</center>
		<?php
		echo '
				<br>
				<div class="alert alert-primary" role="alert">
				  <div id="add_ip">
					<form action="../ip/add_ip.php" name="Add_IP" method="post">
						사용자 아이피 추가
						<input type = "text" name = "add_ip"/>
						<input type="submit" value="추가"/>
					</form>
					<form action="../ip/del_ip.php" name="Del_IP" method="post">
						사용자 아이피 제거
						<input type = "text" name = "del_ip"/>
						<input type="submit" value="제거"/>
					</form>
				  </div>
				</div>';
		?>
	</body>
</html>