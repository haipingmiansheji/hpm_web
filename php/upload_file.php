<?php
		function fll($a){
		if((($_FILES[$a]["type"]=="image/gif")||($_FILES[$a]["type"]=="image/jpeg")||($_FILES[$a]["type"]=="image/pjpeg")) && ($_FILES[$a]["size"]<5242880)){
		if($_FILES[$a]["error"]>0){
			echo "Return Code:".$_FILES[$a]["error"]."</br>";
		}else{
			echo "Upload:".$_FILES[$a]["name"]."<br/>";
			echo "Type:".$_FILES[$a]["type"]."<br/>";
			echo "Size:".($_FILES[$a]["size"]/1024)."Kb<br/>";
			echo "Temp file:".$_FILES[$a]["tmp_name"]."<br/>";
			if(file_exists("../images/upload/".$_FILES[$a]["name"])){
				echo $_FILES[$a]["name"]."already exists.<br/>";
			}else{
				move_uploaded_file($_FILES[$a]["tmp_name"],"../images/upload/".$_FILES[$a]["name"]);
				echo "Stored in"."../images/upload/".$_FILES[$a]["name"];
			}
		}
		}else{
			echo "Invalid file";
		}
	}
fll("file1");
fll("file2");
fll("file3");
fll("file4");
fll("file5");
fll("file6");
?>