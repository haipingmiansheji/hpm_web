$(function(){
	//页面加载完一步请求数据库
	$.ajax({
			type:'GET',
			url:"php/message_return.php",
			success:function(msg){
				var json=JSON.parse(msg);
				var str='';
				for(var i=0; i<json.length;i++){
					str+='<div class="element">'+
					'<div class="center">'+
						'<div class="mainbody">'+
							'<p class="companyName"><strong>公司名称：</strong><b>'+json[i].company_name+'</b></p>'+
							'<p class="companyContact"><strong>联系方式：</strong><b>'+json[i].tel.replace(json[i].tel.slice(3,8),'*****')+'</b></p>'+
							'<p class="youMessage"><strong>您的留言：</strong><b>'+json[i].textContent+'</b></p>'+
						'</div>'+
					'</div>'+
				'</div>';
				}
				$('.messageText').append(str);//提交页面上
			}
		})
		
	//按钮提交数据获取数据或显示在页面上
	$('#btn').click(function(){
		var useName=$('#useName').val();
		var Contact=$('#Contact').val();
		var textContent=$('#textContent').val();
		var str='';
		str+='<div class="element">'+
				'<div class="center">'+
					'<div class="mainbody">'+
						'<p class="companyName"><strong>公司名称：</strong><b>'+useName+'</b></p>'+
						'<p class="companyContact"><strong>联系方式：</strong><b>'+Contact.replace(Contact.slice(3,8),'*****')+'</b></p>'+
						'<p class="youMessage"><strong>您的留言：</strong><b>'+textContent+'</b></p>'+
					'</div>'+
				'</div>'+
			'</div>';
		$('.messageText').append(str);//将信息追加到messageText元素中
		$('#useName').val('');//清空input
		$('#Contact').val('');//清空input
		$('#textContent').val('');//清空input
		$.ajax({
			type:'POST',
			url:"php/message.php",
			data:'useName='+useName+'&Contact='+Contact+'&textContent='+textContent,
			success:function(msg){
				console.log(msg);
			}
		})
	})
	
	
})