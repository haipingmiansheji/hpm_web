<?php
	foreach($_REQUEST as $value){
		//echo $value.'</br>';
		if($value=='fooddetails' && $value='food_ID'){
			$getdetails=$_REQUEST["fooddetails"];
			$get_ID=$_REQUEST["food_ID"];
			$ID="food_ID";
		}
		if($value=='technologydetails' && $value='technology_ID'){
			$getdetails=$_REQUEST["technologydetails"];
			$get_ID=$_REQUEST["technology_ID"];
			$ID="technology_ID";
		}
		if($value=='busdetails' && $value='bus_ID'){
			$getdetails=$_REQUEST["busdetails"];
			$get_ID=$_REQUEST["bus_ID"];
			$ID="bus_ID";
		}
		if($value=='healthdetails' && $value='health_ID'){
			$getdetails=$_REQUEST["healthdetails"];
			$get_ID=$_REQUEST["health_ID"];
			$ID="health_ID";
		}
		if($value=='builddetails' && $value='build_ID'){
			$getdetails=$_REQUEST["healthdetails"];
			$get_ID=$_REQUEST["build_ID"];
			$ID="build_ID";
		}
		if($value=='fashiondetails' && $value='fashion_ID'){
			$getdetails=$_REQUEST["fashiondetails"];
			$get_ID=$_REQUEST["fashion_ID"];
			$ID="fashion_ID";
		}
		if($value=='catedetails' && $value='cate_ID'){
			$getdetails=$_REQUEST["catedetails"];
			$get_ID=$_REQUEST["cate_ID"];
			$ID="cate_ID";
		}
		if($value=='industrydetails' && $value='industry_ID'){
			$getdetails=$_REQUEST["industrydetails"];
			$get_ID=$_REQUEST["industry_ID"];
			$ID="industry_ID";
		}
		if($value=='chemicaldetails' && $value='chemical_ID'){
			$getdetails=$_REQUEST["chemicaldetails"];
			$get_ID=$_REQUEST["chemical_ID"];
			$ID="chemical_ID";
		}
		if($value=='bankdetails' && $value='bank_ID'){
			$getdetails=$_REQUEST["bankdetails"];
			$get_ID=$_REQUEST["bank_ID"];
			$ID="bank_ID";
		}
		if($value=='organizatidetails' && $value='organizati_ID'){
			$getdetails=$_REQUEST["organizatidetails"];
			$get_ID=$_REQUEST["organizati_ID"];
			$ID="organizati_ID";
		}
	}
	
	$conn=mysqli_connect('127.0.0.1','root','','hpmplay',3306);
	mysqli_query($conn,'set names utf8');
	$sql="select $ID,img1,img2,img3,img4,img5 from $getdetails where $ID=$get_ID";
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while($row=mysqli_fetch_assoc($result)){
		$arr[]=$row;
	}
?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>海平面案例详情</title>
		<!-[if lt IE9]> 
			<script src="js/h5_compatible.js"></script>
		<![endif]->
		<link rel="stylesheet" type="text/css" href="css/reset.css"/>
		<link rel="stylesheet" type="text/css" href="css/style.css"/>
		<link rel="stylesheet" type="text/css" href="css/font.css"/>
		<script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
		<script type="text/javascript" src="js/business.js"></script>
	</head>
	<body>
		<!-- 头部内容开始 -->
		<header class="top">
			<div class="center clearfix">
				<div class="logo lt"><a href="index.html"><img src="images/logo.jpg" alt="网站logo" /></a></div>
				<ul class="menu rt">
					<li><a href="index.html">网页首页</a></li>
					<li><a href="profile.html">公司简介</a></li>
					<li><a class="active" href="business.html">案例作品</a></li>
					<li><a href="dynamic.html">企业动态</a></li>
					<li><a href="area.html">服务领域</a></li>
					<li><a href="service.html">服务客户</a></li>
					<li><a href="superiority.html">服务优势</a></li>
					<li><a href="cooperation.html">如何合作</a></li>
					<li><a href="contact.html">联系我们</a></li>
				</ul>
			</div>
		</header>
		<!-- 头部内容结束 -->
		
		<!-- 公司简介大图开始 -->
		<section class="bigImg product">
			<h1>Originality unique, extraordinary achievements</h1>
		</section>
		<!-- 公司简介大图结束 -->
		<!-- 案例解说开始 -->
		<section class="projects">
			<div class="center">
				<p>海平面案例详情</p>
				<h3>平面设计概述</h3>
				<span>透过多种方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉表现。平面设计师可能会利用字体排印、视觉艺术、版面（page layout）、电脑软件等方面的专业技巧，来达成创作计划的目的。平面设计通常可指制作（设计）时的过程，以及最后完成的作品。</span>
			</div>
		</section>
		<!-- 案例解说结束 -->
		
		<!-- 案例详情展示开始 -->
		<section class="caseDetails">
			<ul>
			<?php
				for($i=0;$i<count($arr);$i++){
					//var_dump($arr[$i]["img1"]);
				echo '<li><img class="center" src="images/upload/'.$arr[$i]["img1"].'" alt="" /></li>';
				echo '<li><img class="center" src="images/upload/'.$arr[$i]["img2"].'" alt="" /></li>';
				echo '<li><img class="center" src="images/upload/'.$arr[$i]["img3"].'" alt="" /></li>';
				echo '<li><img class="center" src="images/upload/'.$arr[$i]["img4"].'" alt="" /></li>';
				echo '<li><img class="center" src="images/upload/'.$arr[$i]["img5"].'" alt="" /></li>';
				}
			?>
				<!--<li><img class="center" src="images/p_1_1.jpg" alt="" /></li>
				<li><img class="center" src="images/p_1_1.jpg" alt="" /></li>
				<li><img class="center" src="images/p_1_1.jpg" alt="" /></li>
				<li><img class="center" src="images/p_1_1.jpg" alt="" /></li>-->
			</ul>
		</section>
		<!-- 案例详情展示结束 -->
		
		<!-- 底部内容开始 -->
		<footer class="foot">
			<div class="container">
				<div class="center clearfix">
					<p class="share">案例分享</p>
					<div class="bdsharebuttonbox sharelink"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone"></a><a href="#" class="bds_tsina" data-cmd="tsina"></a><a href="#" class="bds_tqq" data-cmd="tqq"></a><a href="#" class="bds_renren" data-cmd="renren"></a><a href="#" class="bds_weixin" data-cmd="weixin"></a></div>
					<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
					<p class="link">友情链接</p>
					<p class="linkList"><a href="http://www.chinaz.com/">中国站长</a><s></s><a href="http://tech.163.com">网易科技</a><s></s><a href="http://www.techweb.com.cn">TechWeb</a><s></s><a href="http://www.newhua.com/"> 牛华网</a><s></s><a href="#">大唐视觉</a><s></s><a href="#">拓维设计</a><s></s><a href="#">标志设计</a><s></s><a href="http://www.blueidea.com">蓝色理想</a><s></s><a href="http://www.it168.com">IT168</a><s></s><a href="http://www.enet.com.cn/enews">硅谷动力</a><s></s><a href="http://www.ifanr.com">爱范儿</a><s></s><a href="http://www.chinabyte.com">比特网</a><s></s><a href="http://www.leiphone.com">雷锋网</a><s></s><a href="http://www.mydrivers.com">驱动之家</a><s></s><a href="http://www.feng.com/">威锋网</a><s></s></p>
				</div>
			</div>
			<div class="intro">
				<div class="center clearfix">
					<dl>
						<dt>公司首页</dt>
						<dd><a href="index.html">首页</a></dd>
						<dd><a href="dynamic.html">最新动态</a></dd>
						<dd><a href="javascript:viode(0)">网站地图</a></dd>
						<dd><a href="cooperation.html">设计咨询</a></dd>
						<dd><a href="superiority.html">了解我们</a></dd>
					</dl>
					<dl>
						<dt>关于我们</dt>
						<dd><a href="javascript:viode(0)">设计团队</a></dd>
						<dd><a href="javascript:viode(0)">公司文化</a></dd>
						<dd><a href="javascript:viode(0)">我们的办公环境</a></dd>
						<dd><a href="superiority.html">成长历程</a></dd>
						<dd><a href="case.html">作品与案例</a></dd>
					</dl>
					<dl>
						<dt>代表案例</dt>
						<dd><a href="business.html">VI企业形象设计</a></dd>
						<dd><a href="business.html">标志/商标设计</a></dd>
						<dd><a href="business.html">产品包装设计</a></dd>
						<dd><a href="business.html">宣传物料设计</a></dd>
						<dd><a href="business.html">最新设计案例</a></dd>
					</dl>
					<dl>
						<dt>服务介绍</dt>
						<dd><a href="area.html">服务领域</a></dd>
						<dd><a href="superiority.html">服务优势</a></dd>
						<dd><a href="service.html">客户列表</a></dd>
						<dd><a href="contact.html">在线客服设计咨询</a></dd>
					</dl>
					<dl class="rb">
						<dt>如何合作</dt>
						<dd><a href="cooperation.html">设计合作流程</a></dd>
						<dd><a href="cooperation.html">远程客户合作</a></dd>
						<dd><a href="contact.html">合作问答</a></dd>
						<dd><a href="cooperation.html">合作须知</a></dd>
						<dd><a href="dynamic.html">公司动态</a></dd>
					</dl>
				</div>
			</div>
			<div class="copyright">
				<p>冀ICP备11016871号-1　海平面网页设计公司保留所有权利</p>
				<p>公司地址：北京市海淀区清河小营西路</p>
				<p>电 话：010-56191895　 手 机：15901086483　 邮 箱：240173221@qq.com</p>
			</div>
		</footer>
		<!-- 底部内容结束 -->
		<!-- 页面滚动条效果开始 -->
		<script type="text/javascript" src="js/page/jquery.mousewheel.js"></script>
		<script type="text/javascript" src="js/page/nicescroll.js"></script>
		<script type="text/javascript" src="js/page/page.js"></script>
		<!-- 页面滚动条效果结束 -->
	</body>
</html>