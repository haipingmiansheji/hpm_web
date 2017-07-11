<?php
	//提交数据
	header('Content-Type: application/JSON');
	$titleContent=$_REQUEST['titleContent'];
	$articleContent=$_REQUEST['articleContent'];
	$articleClass=$_REQUEST['articleClass'];
	$now=time()*1000;
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,'set names utf8');
	$sql="insert into casedata values(null,'$titleContent','$articleContent','$articleClass','$now')";
	$result=mysqli_query($conn,$sql);
	echo 'OK';
?>