﻿<?php
	header('Content-Type: application/JSON');
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,'set names utf8');
	$sql="select * from message";
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while($row=mysqli_fetch_assoc($result)){
		$arr[]=$row;
	}
	echo json_encode($arr);
?>