<?php
define('_main_', TRUE);
include('ip/ip.php');
//ip 확인
if(!defined('_user_')) {
	include('./denided.php');
	exit();
}
?>
<html><head>
    <meta charset="utf-8">
	<link rel="shortcut icon" href="icon.ico">
    <title>junsang cloud</title>
    <style>
      div>ul>li>a:link{
        color:black;
      }
      div>ul>li>a:hover{
        color:skyblue;
      }
      div>ul>li>a:visited{
        color:black;
      }
      #이름{
        padding-left:43%;
      }
      .비정상:visited{
        color:black;
      }
      .비정상:hover{
        color:red;
      }
			.btn{
				margin-left:85%;
				display:inline-block;
				display:flex;
				flex-direction: column;
				border:1px black;
			}
    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<script>
     		(adsbygoogle = window.adsbygoogle || []).push({
      		google_ad_client: "ca-pub-7314864313110506",
      		enable_page_level_ads: true
     		});
			</script>
  </head>
  <body>
    <div class="alert alert-primary" role="alert">
      junsangcloud.kro.kr
			<button type="button" class="btn btn-primary" onclick="login()">Admin</button>
			<script>
				function login() {
					document.location.href="login/";
				}
			</script>
	</div>
    <div class="container" id="main">
    <div id="정상">
      <ul>
        <li class="list-group-item disabled" aria-disabled="true">프로그래밍 스터디</li>
        <li><a href="https://www.w3schools.com/" class="list-group-item ">w3schools</a></li>
        <li><a href="https://material.io/" class="list-group-item">material(색깔 찾는것)</a></li>
        <li><a href="https://pixabay.com/ko/" class="list-group-item">pixabay(사진 찾는 사이트)</a></li>
        <li><a href="https://getbootstrap.com/" class="list-group-item">부트스트랩</a></li>
        <li><a href="https://www.dothome.co.kr/index.php" class="list-group-item">닷홈(도메인 찾기)</a></li>
        <li><a href="https://xn--220b31d95hq8o.xn--3e0b707e/" class="list-group-item">내도메인 한국</a></li>
        <li><a href="https://ideone.com/" class="list-group-item">온라인 코딩 프로그램</a></li>
        <li><a href="https://opentutorials.org/course/1"class="list-group-item">생활코딩</a>
        <li><a href="https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw"class="list-group-item">안경잡이 개발자 youtube</a></li>
        <li><a href="https://cafe.naver.com/motiontree"class="list-group-item">이미지 찾는 카페</a></li>
		<li><a href="https://www.dropbox.com/s/z9uadm0q7yps8y9/githubfile.pdf?dl=0" class="list-group-item">github강의자료(기초)</a></li>
    </ul>
  </div>
</div>
</body></html>
