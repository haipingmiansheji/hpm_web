<?php
	//提交数据
	header('Content-Type: application/JSON');
	$useName=$_REQUEST['useName'];
	$Contact=$_REQUEST['Contact'];
	$textContent=$_REQUEST['textContent'];
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,'set names utf8');
	$sql="insert into message values(null,'$useName','$Contact','$textContent')";
	$result=mysqli_query($conn,$sql);
	echo 'OK';
?>