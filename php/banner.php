<?php
	header('Content-Type: application/JSON');
	$conn=mysqli_connect('127.0.0.1','root','','banner',3306);
	mysqli_query($conn,'set names utf8');
	$sql='select * from images';
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while($row=mysqli_fetch_assoc($result)){
		$arr[]=$row;
	}
	$row=mysqli_fetch_assoc($result);
	echo json_encode($arr);
?>