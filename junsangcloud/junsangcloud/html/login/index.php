<html>
	<head>
		<title>Login</title>
		<meta charset="utf-8">
		<script>
			function go() {
				if(login.userid.value == "") {
					alert('아이디를 입력해주세요');
					login.userid.focus();
					return;
				}
				if(login.userpw.value == "") {
					alert('비밀번호를 입력해주세요');
					login.userpw.focus();
					return;
				}
				login.submit();
			}
		</script> 	
		<style>
			table{
				border:1px skyblue solid;
				padding:60px;
				border-radius: 20px;
				background: skyblue;
			}
			#signin{
				width:100px;
				height: 35px;
				margin-top: 10px;
				margin-left: 60%;
				border-radius: 10px;
				border:0;
				background: #0095FF;
				cursor:pointer;
			}
			#signin:hover {
				background: #1263FE;
			}
			
			#signup{
				width:100px;
				height: 35px;
				margin-top: 10px;
				margin-left: 130%;
				border-radius: 10px;
				border:0;
				background: #0095FF;
				cursor:pointer;
			}
			#signup:hover {
				background: #1263FE;
			}
			input{
				width:250px;
				height: 30px;
			}
		</style>
	</head>
	<body>
		<div id="test">
		<center>
			<div style="height:20%;"></div>
			<table>
			<form action="login_check.php" method="post" name="login">
				<tr>
					<td><h3>아이디</h3></td>
					<td><input type="text" name="userid"></td>
				</tr>
				<tr>
					<td><h3>비밀번호</h3></td>
					<td><input type="password" name="userpw"></td>
				</tr>
				<tr>
					<td>
						<button type="button" id="signup" onclick="">Sign up</button>
					</td>
					<td>
						<button type="button" id="signin" onclick="go()">login</button>
					</td>
				</tr>
			</form>
			</table>
		</center>
		</div>
	</body>
</html>
