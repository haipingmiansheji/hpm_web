$(function(){
	
	$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=food',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?fooddetails=fooddetails'+'&food_ID='+json[i].food_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?fooddetails=fooddetails'+'&food_ID='+json[i].food_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
	
	
	
	$('#selcetItem').click(function(ev){
		$('#selcetItem').css('backgroundImage','url(images/arrows_2.png)');
		var e=ev||event;
		$('#selcetItem ul').slideToggle("slow");
		if(e.target.nodeName==='A'){
			e.preventDefault();
			$('#choice').html(e.target.textContent);
			$('#selcetItem').css('backgroundImage','url(images/arrows_1.png)');
			//异步请求数据库中产品小图
			if(e.target.className==='item1'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=food',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?fooddetails=fooddetails'+'&food_ID='+json[i].food_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?fooddetails=fooddetails'+'&food_ID='+json[i].food_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item2'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=technology',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?technologydetails=technologydetails'+'&technology_ID='+json[i].technology_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?technologydetails=technologydetails'+'&technology_ID='+json[i].technology_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item3'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=bus',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?busdetails=busdetails'+'&bus_ID='+json[i].bus_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?busdetails=busdetails'+'&bus_ID='+json[i].bus_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item4'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=health',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?healthdetails=healthdetails'+'&health_ID='+json[i].health_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?healthdetails=healthdetails'+'&health_ID='+json[i].health_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item5'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=build',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?builddetails=builddetails'+'&build_ID='+json[i].build_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?builddetails=builddetails'+'&build_ID='+json[i].build_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item6'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=fashion',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?fashiondetails=fashiondetails'+'&fashion_ID='+json[i].fashion_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?fashiondetails=fashiondetails'+'&fashion_ID='+json[i].fashion_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item7'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=cate',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?catedetails=catedetails'+'&cate_ID='+json[i].cate_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?catedetails=catedetails'+'&cate_ID='+json[i].cate_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item8'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=industry',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?industrydetails=industrydetails'+'&industry_ID='+json[i].industry_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?industrydetails=industrydetails'+'&industry_ID='+json[i].industry_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item9'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=chemical',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?chemicaldetails=chemicaldetails'+'&chemical_ID='+json[i].chemical_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?chemicaldetails=chemicaldetails'+'&chemical_ID='+json[i].chemical_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item10'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=bank',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?bankdetails=bankdetails'+'&bank_ID='+json[i].bank_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?bankdetails=bankdetails'+'&bank_ID='+json[i].bank_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			if(e.target.className==='item11'){
				$.ajax({
					type:'GET',
					url:'php/data.php?tabaleName=organizati',
					success:function(msg){
						$(".projectsItem").html("");
						var json=JSON.parse(msg);
						console.log(json);
						var str="";
						for(var i=0;i<json.length;i++){
							if(i%3==2){
								str+='<dl class="noMargin">'+
								'<dt><a href="'+json[i].href+''+'?organizatidetails=organizatidetails'+'&organizati_ID='+json[i].organizati_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
							}else{
							str+='<dl>'+
								'<dt><a href="'+json[i].href+''+'?organizatidetails=organizatidetails'+'&organizati_ID='+json[i].organizati_ID+++'"><img src="images/upload/'+json[i].src+'" alt="'+json[i].alt+'" /></a></dt>'+
								'<dd class="clientName">客户名称：'+json[i].company_name+'</dd>'+
								'<dd class="projectItem">项目名称：'+json[i].iTem+'</dd>'+
								'</dl>';
								}
						}
						$(".projectsItem").html(str);
						var w=$('.projectsItem dl').css('width');
						$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
					}
				})
			}
			
		}
		
	})
	var w=$('.projectsItem dl').css('width');
	$('.projectsItem dl').css({height:parseFloat(w)*0.85+'px'});
})