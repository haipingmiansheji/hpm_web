set names utf8;
drop database if exists hpmplay;
create database hpmplay charset=utf8;
use hpmplay;
##新闻动态
create table casedata(
	case_ID int primary key auto_increment,
	headline varchar(32),
	article long,
	articleList varchar(64),
	now long
);
##留言板
create table message(
	message_ID int primary key auto_increment,
	company_name varchar(64),
	tel varchar(11),
	textContent long
);
##food 食品饮料+消费品表
create table food(
	food_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##technology科技信息+电子音像
create table technology(
	technology_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##bus汽车配件+交通
create table bus(
	bus_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##health医疗保健+药品
create table health(
	health_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##build建筑+家居+环保
create table build(
	build_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##fashion 时尚产业+服饰化妆
create table fashion(
	fashion_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##Cate 餐饮娱乐+运动休闲
create table cate(
	cate_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	alt varchar(16)
);
##industry 工业+机械五金
create table industry(
	industry_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	atl varchar(16)
);
##chemical 化工+涂料+能源
create table chemical(
	chemical_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	atl varchar(16)
);
##bank 金融+教育+管理
create table bank(
	bank_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	atl varchar(16)
);
##organizati 机构组织+文化艺术
create table organizati(
	organizati_ID int primary key auto_increment,
	src long,
	company_name varchar(64),
	iTem varchar(18),
	href long,
	atl varchar(16)
);
##food 详情
create table foodDetails(
	food_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##technology详情
create table technologyDetails(
	technology_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##bus详情
create table busDetails(
	bus_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##health详情
create table healthDetails(
	health_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##build详情
create table buildDetails(
	build_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##fashion详情
create table fashionDetails(
	fashion_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##Cate 详情
create table cateDetails(
	cate_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##industry 详情
create table industryDetails(
	industry_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##chemical 详情
create table chemicalDetails(
	chemical_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##bank 详情
create table bankDetails(
	bank_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
##organizati 详情
create table organizatiDetails(
	organizati_ID int primary key auto_increment,
	img1 long,
	img2 long,
	img3 long,
	img4 long,
	img5 long
);
select * from casedata;