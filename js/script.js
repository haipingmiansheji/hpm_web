	var timer=null;
	var autoTime=null;
	var ms=100;
	var autoMs=2500;
	var iTarget=0;
	var speed=0;
	var nextTarget=0;


$(function(){
	/*banner 内容*/
	$('#bannerWrp').width(window.innerWidth+'px');
	$('#bannerWrp').height(window.innerWidth*0.38+'px');
	
	$('.btnBanner').width(window.innerWidth+'px');
	$('.btnBanner').height(window.innerWidth*0.38+'px');
	$('#moveBanner').width(window.innerWidth*$('#moveBanner li').length+'px');
	$('#moveBanner').height(window.innerWidth*0.38+'px');
	$('#moveBanner li').width(window.innerWidth+'px');
	$('#moveBanner li').height(window.innerWidth*0.38+'px');
	$('#pointList').height('20px');
	$('#btnL').css({top:(window.innerWidth*0.38-$('#btnL').width())/2+'px'});
	$('#btnR').css({top:(window.innerWidth*0.38-$('#btnL').width())/2+'px'});
	
	window.onresize=function(){
				$('#bannerWrp').width(window.innerWidth+'px');
				$('#bannerWrp').height(window.innerWidth*0.38+'px');
				
				$('.btnBanner').width(window.innerWidth+'px');
				$('.btnBanner').height(window.innerWidth*0.38+'px');
				$('#moveBanner').width(window.innerWidth*$('#moveBanner li').length+'px');
				$('#moveBanner').height(window.innerWidth*0.38+'px');
				$('#moveBanner li').width(window.innerWidth+'px');
				$('#moveBanner li').height(window.innerWidth*0.38+'px');
				$('#pointList').height('20px');
				$('#btnL').css({top:(window.innerWidth*0.38-$('#btnL').width())/2+'px'});
				$('#btnR').css({top:(window.innerWidth*0.38-$('#btnL').width())/2+'px'});
	}
	/*海平面作品案例动态*/
	var ul=$('.new .trends .hidd ul');
	strarMove(ul);
	
	/*banner 内容*/
	var obj=$('.btnBanner');
	var oOl=$('#pointList');
	var aLis=$('#pointList li');
	var oUl=$('#moveBanner');
	var oUlLis=$('#moveBanner li');
	var oPrev=$('#btnL');
   var oNext=$('#btnR');
    for( var i = 0; i < aLis.length; i+=1 ){
        aLis[i].onmouseover = getIndx;
    }

    obj.onmouseover = function(){
        clearInterval(currentTime);
    }
    obj.onmouseout = function(){
        if(currentTime){
            clearInterval(currentTime);
        }
        currentTime = setInterval("autoPlay()",autoMs);
    }

    oPrev.onmousedown = fnPrev;
    oNext.onmousedown = fnNext;

    currentTime = setInterval("autoPlay()",autoMs);
			
})
//jquery结束

/*banner 内容*/
function fnPrev(){
    var obj    = document.getElementById("play");
    var oOl    = $('#pointList');
    var aLis   = $('#pointList li');
    nextTarget-=1;
    if(nextTarget < 0){ nextTarget = aLis.length-1; }
    goTime(nextTarget);
}

// 后一张
function fnNext(){
    var obj    = document.getElementById("play");
    var oOl    = $('#pointList');
    var aLis   = $('#pointList li');
    nextTarget+=1;
    if(nextTarget === aLis.length){ nextTarget = 0; }
    goTime(nextTarget);
}

// 自动播放
function autoPlay(){
    var obj    = document.getElementById("play");
    var oOl    = $('#pointList');
    var aLis   = $('#pointList li');

    nextTarget+=1;
    if( nextTarget >= aLis.length ) { nextTarget = 0; }
    goTime(nextTarget)
}

// 获取当前的索引值
function getIndx(){
    var obj    = document.getElementById("play");
    var oOl    = $('#pointList');
    var aLis   = $('#pointList li');

    for( var i = 0; i < aLis.length; i+=1 ){
        if(aLis[i] === this){
            goTime(i);
        }
    }
}

// 开始启动
function goTime(index){
    var obj      = document.getElementById("play");
    var oUl      = $('#moveBanner');
    var oOl      = $('#pointList');
    var aLis     = $('#pointList li a');
    var iLiWidth = $('#moveBanner li')[0].offsetWidth;

    for( var i = 0; i < aLis.length; i+=1 ){
        aLis[i].className = "";
    }
    aLis[index].className = "active";

    iTarget = -index * iLiWidth;

    if(timer){ clearInterval(timer); }
   timer = setInterval("doMove("+ iTarget +")",ms)
   doMove(iTarget);
}

// 图片滑动
function doMove(target){
   var obj = document.getElementById("play");
    var oUl = $('#moveBanner')[0];
    oUl.style.left = speed + "px";
    speed+=(target - oUl.offsetLeft)/3;

    if( Math.abs(target-oUl.offsetLeft) === 0 ){
        oUl.style.left = target + "px";
        clearInterval(timer); timer = null;
    }
}

function strarMove(move){
		var i=0;
		var t=setInterval(function(){
			i--;
			move.css({top:i+'px'})

			if(parseInt(move.css('height'))+parseInt(move.css('top'))<=parseInt($('.hidd').css('height'))){
				i=0;
			}
		},100)
		$('.hidd ul').mouseover(function(){
			clearInterval(t);
		})
		$('.hidd ul').mouseout(function(){
				t=setInterval(function(){
				i--;
				move.css({top:i+'px'})

				if(parseInt(move.css('height'))+parseInt(move.css('top'))<=parseInt($('.hidd').css('height'))){
					i=0;
				}
			},100)
		})
}