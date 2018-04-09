<template>
	<div class="index">
		<app-header>
			<span slot="title">项目</span>
		</app-header>
		<swiper :options="swiperOption" ref="carouselSwiper" class="carousel">
			<swiper-slide v-for="(item,index) in picUrl" class="carousel__div" :key="item">
				<img :src="item" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<div class="demo-container">
			<div class="demo--app">
				<div class="demo__title">app项目</div>
				<div class="app--container">
					<v-touch @tap="checkDetail(item.otherName)" v-for="(item,index) in appData" class="app--each" :key="index">
						<img :src="item.picUrl" alt="">
						<div>{{item.name}}</div>
					</v-touch>
				</div>
			</div>
			<div class="demo--system">
				<div class="demo__title">后台系统</div>
				<div v-for="(item,index) in systemData" class="system--container">
					<v-touch @tap="item.isShow = !item.isShow" class="system--each">
						<div class="system--text">{{item.name}}</div>
						<div class="iconfont" :class="{'icon-xia': !item.isShow, 'icon-shang': item.isShow}">&nbsp;{{item.isShow?'收起':'详情'}}</div>
					</v-touch>
					<div class="system--explain" v-show="item.isShow">
						<div class="iconfont icon-sousuo"></div>
						<div class="explain" v-html="item.explain"></div>
					</div>
				</div>
			</div>
			<div class="demo--desktop">
				<div class="demo__title">桌面应用</div>
				<div v-for="(item,index) in desktopData" class="system--container">
					<v-touch @tap="item.isShow = !item.isShow" class="system--each">
						<div class="system--text">{{item.name}}</div>
						<div class="iconfont" :class="{'icon-xia': !item.isShow, 'icon-shang': item.isShow}">&nbsp;{{item.isShow?'收起':'详情'}}</div>
					</v-touch>
					<div class="system--explain" v-show="item.isShow">
						<div class="iconfont icon-sousuo"></div>
						<div class="explain" v-html="item.explain"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data() {
		return {
			// 轮播图片的地址
			picUrl: ['static/img/1.jpg', 'static/img/2.jpg', 'static/img/3.jpg', 'static/img/4.jpg'],
			// app项目数据
			appData: [{picUrl: 'static/img/yixing/icon.png', name: '医行', otherName: 'yixing'}, {picUrl: 'static/img/teacher/icon.png', name: '远大小状元教师端', otherName: 'teacher'}, {picUrl: 'static/img/student/icon.png', name: '远大小状元学生端', otherName: 'student'}, {picUrl: 'static/img/xiaoxueyun/icon.jpg', name: '远大小学云', otherName: 'xiaoxueyun'}],
			// 系统项目数据
			systemData: [{name: '医行后台管理系统', explain: '技术栈：gulp + jquery + bootstrap', isShow: false}, {name: '云老师布置作业后台', explain: '技术栈：gulp + jquery + bootstrap', isShow: false}, {name: 'CRM后台系统', explain: '技术栈：gulp + jquery + bootstrap', isShow: false}],
			// 桌面应用
			desktopData: [{name: '远大学云（随堂测）', url: 'http://www.k12stc.com/', explain: '技术栈：grunt + coffeescript + jquery + go + nwjs</br>官方地址：http://www.k12stc.com/' , isShow: false}],
			swiperOption: {
				// 自动播放
				autoplay: 2500,
				pagination: '.swiper-pagination',
				// 圆点是否可以点击
				paginationClickable: true,
				// 手动切换轮播后是否禁止自动播放
				autoplayDisableOnInteraction: false
			}
		}
	},
	methods: {
		checkDetail(name) {
			this.$router.push({name: 'PicDetail', params: {title: '详情查看', otherName: name}})
		}
	},
	mounted () {
		this.$store.commit('HIDE_LOADING')
	},
	beforeCreate() {
		this.$store.commit('SHOW_LOADING')
	},
}
</script>
<style lang="scss">
	.carousel{
		width: 10rem;
		height: 3.13rem;
	}
	.swiper-pagination-bullet-active{
    	background: #2ce418;
	}
	.carousel__div{
		width: 100%;
		height: 3.13rem;
		margin: auto;
		img{
			width: 100%;
		}
	}
	.index{
		width: 10rem;
		height: 100%;
		margin: auto;
		// color: #0ca01f;
		.demo-container{
			height: calc(100% - 6.3rem);
			overflow: auto;
			background: #FFF;
		}
	}
	.demo__title{
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.6rem;
		text-align: center;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.app--container{
		display: flex;
		flex-flow: wrap;
		text-align: center;
		.app--each{
			width: 50%;
			box-sizing: border-box;
			padding: 0.2rem;
			border: 1px solid #ccc;
			img{
				width: 70%;
			}
			div{
				font-size: 0.4rem;
			}
		}
	}
	.system--each{
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		height: 1.2rem;
		font-size: 0.5rem;
		border-bottom: 1px solid #ccc;
		.system--text{
			flex: 6
		}
		.iconfont{
			flex: 6;
			font-size: 0.3rem;
			text-align: right;
			color: #55ca7a;
		}
	}
	.system--explain{
		padding: 0.2rem 0.7rem;
		border-bottom: 1px solid #ccc;
		.iconfont{
			color: #c1a9c5;
		}
		.explain{
			font-size: 0.4rem
		}
	}
</style>