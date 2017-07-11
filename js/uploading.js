$(function(){
	var a=$("form").width();
	var b=$("form").height();
	var w=$(window).width();
	var h=$(window).height()
	$("form").css({left:(w-a)/2+"px",top:(h-b)/2+"px"});
	var primaryImg="";//请选择分类作品主图
	var detailsImg="";//请选择分类作品详情
	var file1="";//选择主图1
	var file2="";//详情图2
	var file3="";//详情图3
	var file4="";//详情图4
	var file5="";//详情图5
	var file6="";//详情图6
	var company_name=$('#company_name');//公司名字
	var iTem=$('#iTem');//设计类目
	var href="details.php";//链接地址
	var alt=$('#alt');//图片alt
	
	$('#file1').change(function(){
		file1=this.value.slice(12);
		file1_1=this;
		$('#company_name')[0].disabled=false;
		$('#iTem')[0].disabled=false;
		$('#alt')[0].disabled=false;
		$('#detailsImg')[0].disabled=false;
	})
	$('#file2').change(function(){
		file2=this.value.slice(12);
	})
	$('#file3').change(function(){
		file3=this.value.slice(12);
	})
	$('#file4').change(function(){
		file4=this.value.slice(12);
	})
	$('#file5').change(function(){
		file5=this.value.slice(12);
	})
	$('#file6').change(function(){
		file6=this.value.slice(12);
		$('#btn')[0].disabled=false;
	})
	$('#primaryImg').change(function(){
		if(this.value!="1"){
			primaryImg=this.value;
			$('#file1')[0].disabled=false;
		}
		
	})
	$('#detailsImg').change(function(){
		if(this.value!="2"){
			detailsImg=this.value;
			$('#file2')[0].disabled=false;
			$('#file3')[0].disabled=false;
			$('#file4')[0].disabled=false;
			$('#file5')[0].disabled=false;
			$('#file6')[0].disabled=false;
		}
	})
	
	$('#btn').click(function(){
		$.ajax({
			type:"POST",
			url:"php/uploading.php",
			data:"primaryImg="+primaryImg+"&detailsImg="+detailsImg+"&file1="+file1+"&file2="+file2+"&file3="+file3+"&file4="+file4+"&file5="+file4+"&file5="+file5+"&file6="+file6+"&company_name="+company_name.val()+"&iTem="+iTem.val()+"&href="+href+"&alt="+alt.val()+"$file1_1="+file1_1,
			success:function(str){
				console.log(str);
			}
		})
	})
})