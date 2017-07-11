<?php
	//获取数据
	header('Content-Type: application/JSON');
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,'set names utf8');
	$sql_huo="select * from casedata";
	$result_huo=mysqli_query($conn,$sql_huo);
	$arr_huo=[];
	while($row=mysqli_fetch_assoc($result_huo)){
		$arr_huo[]=$row;
	};
	echo json_encode($arr_huo);
?>