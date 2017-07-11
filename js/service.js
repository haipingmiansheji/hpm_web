$(function(){
	var w=$('.client ul li').css('width');
	$('.client ul li').css({height:parseFloat(w)*1.25});
	window.onresize=function(){
		var w=$('.client ul li').css('width');
		$('.client ul li').css({height:parseFloat(w)*1.25});
	}
})