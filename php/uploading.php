<?php
	header("Content-Type: application/JSON");
	$primaryImg=$_REQUEST["primaryImg"];//请选择分类作品主图
	$detailsImg=$_REQUEST["detailsImg"];//请选择分类作品详情
	$file1=$_REQUEST["file1"];//选择主图1
	$file2=$_REQUEST["file2"];//详情图2
	$file3=$_REQUEST["file3"];//详情图3
	$file4=$_REQUEST["file4"];//详情图4
	$file5=$_REQUEST["file5"];//详情图5
	$file6=$_REQUEST["file6"];//详情图6
	$company_name=$_REQUEST["company_name"];//公司名字
	$iTem=$_REQUEST["iTem"];//设计类目
	$href=$_REQUEST["href"];//输入href
	$alt=$_REQUEST["alt"];//图片alt
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,"set names utf8");
	$sqlPrimary="insert into $primaryImg values(null,'$file1','$company_name','$iTem','$href','$alt')";
	$sqlDetail="insert into $detailsImg values(null,'$file2','$file3','$file4','$file5','$file6')";
	$resultPrimary=mysqli_query($conn,$sqlPrimary);
	$resultDetail=mysqli_query($conn,$sqlDetail);
	if($resultPrimary && $resultDetail){
		echo 'Save Succ!';
		echo 'Product ID'.mysqli_insert_id($conn);
		//获得刚刚执行的INSERT命令生成的自增ID--该函数编号;
	}else{
		echo 'Save Err!'.$sqlPrimary.$sqlDetail;
	}
?>