$(function(){
	//表单验证不为空提交
	var num=parseInt($('#str32').html());
	var num2=parseInt($('#str64').html());
	$('#titleContent').keyup(function(){
		$('#str32').html(num-this.value.length+'字符');
		if(this.value.length>num){
			$('#str32').html("文本内容不能超过32字符");
			$('#str32').css('color','red');
			return;
		}
		$('#str32').css('color','#000');
	});
	
	$('#articleClass').keyup(function(){
		$('#str64').html(num2-this.value.length+'字符');
		if(this.value.length>num2){
			$('#str64').html("文本内容不能超过32字符");
			$('#str64').css('color','red');
			return;
		}
		$('#str64').css('color','#000');
	});
	
	$('#titleContent').blur(function(){
		if(this.value.length>0 && this.value.length<32){
			$('#articleContent').attr('disabled',false);
			return;
		};
		$('#articleContent').attr('disabled',true);
	})
	$('#articleContent').blur(function(){
		if(this.value.length>0){
			$('#articleClass').attr('disabled',false);
			return;
		};
		$('#articleClass').attr('disabled',true);
	})
	$('#articleClass').blur(function(){
		if(this.value.length>0 && this.value.length<64){
			$('#submit').attr('disabled',false);
			return;
		}
		$('#submit').attr('disabled',true);
	})
	//页面加载完一步请求数据库
	$.ajax({
			type:'GET',
			url:"php/case_return.php",
			success:function(msg){
				var str='';
				var json=JSON.parse(msg);
				for(var i=0; i<json.length;i++){
					var date=new Date(parseInt(json[i].now));
					var year=date.getFullYear();
					var month=date.getMonth()+1;
					var tody=date.getDate();
					var h=date.getHours();
					var m=date.getMinutes();
					str+='<div class="newContent">'+
					'<h3>'+json[i].headline+'</h3>'+
					'<p>'+
					'<a href="#">'+json[i].article+'</a><span>'+json[i].articleList+'<b>'+year+'-'+month+'-'+tody+' '+h+':'+m+'</b><a class="rt" href="#">展开更多>></a></span>'+
					'</p>'+
					'</div>';
				}
				
				$('#wrapContent').append(str);
			}
			
		})
	//按钮提交数据获取数据或显示在页面上
	$('#submit').click(function(){
		var titleContent=$('#titleContent').val();
		var articleContent=$('#articleContent').val();
		var articleClass=$('#articleClass').val();
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var tody=date.getDate();
		var h=date.getHours();
		var m=date.getMinutes();
		var str='';
		str+='<div class="newContent">'+
					'<h3>'+titleContent+'</h3>'+
					'<p>'+
					'<a href="#">'+articleContent+'</a><span>'+articleClass+'<b>'+year+'-'+month+'-'+tody+' '+h+':'+m+'</b><a class="rt" href="#">展开更多>></a></span>'+
					'</p>'+
					'</div>';
		$('#wrapContent').append(str);//追加在wrapContent里面
		$('#titleContent').val('');//清空input
		$('#articleContent').val('');//清空input
		$('#articleClass').val('');//清空input
		$.ajax({
			type:'POST',
			url:"php/case.php",
			data:'titleContent='+titleContent+'&articleContent='+articleContent+'&articleClass='+articleClass,
			success:function(msg){
				console.log(msg);
			}
		})
	})
	
	wrapContent.onclick=function(ev){
		var e=ev||event;
		e.preventDefault();
		if(e.target.nodeName==='A' && e.target.textContent=='展开更多>>'){
			e.target.parentNode.parentNode.style.height='auto';
			e.target.textContent='收起文章>>';
		}else if(e.target.nodeName==='A' && e.target.textContent=='收起文章>>'){
			e.preventDefault();
			e.target.parentNode.parentNode.style.height='65px';
			e.target.textContent='展开更多>>';
		}
	}
	
})