<template>
	<div class="pic-detail">
		<app-header>
			<span slot="title">{{title}}</span>
		</app-header>
		<swiper class="pic-swipter-div" :options="picSwiperOption" ref="picSwiper">
			<swiper-slide v-for="(item,index) in appPics" class="pic__div" :key="item">
				<img :src="item" alt="" @load="picLoad">
			</swiper-slide>
 			<!-- <div class="swiper-pagination"  slot="pagination"></div> -->
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		</swiper>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: '',
			// swiper配置
			picSwiperOption: {
				nextButton: '.swiper-button-next', 
    			prevButton: '.swiper-button-prev', 
			},
			appPics: [],
			yixingPics: ['static/img/yixing/1.jpg', 'static/img/yixing/2.jpg', 'static/img/yixing/3.jpg', 'static/img/yixing/4.jpg'],
			studentPics: ['static/img/student/1.jpg', 'static/img/student/2.jpg', 'static/img/student/3.jpg', 'static/img/student/4.jpg'],
			teacherPics: ['static/img/teacher/1.jpeg', 'static/img/teacher/2.jpeg', 'static/img/teacher/3.jpeg', 'static/img/teacher/4.jpeg'],
			xiaoxueyunPics: ['static/img/xiaoxueyun/1.jpg', 'static/img/xiaoxueyun/2.jpg', 'static/img/xiaoxueyun/3.jpg', 'static/img/xiaoxueyun/4.jpg'],
		}
	},
	methods: {
		picLoad () {
			this.$store.commit('HIDE_LOADING')
		}
	},
	mounted() {
		switch(this.$route.params.otherName) {
			case 'yixing':
				this.title = '医行app';
				this.appPics = this.yixingPics;
				break;
			case 'teacher':
				this.title = '远大小状元教师端app';
				this.appPics = this.teacherPics;
				break;
			case 'student':
				this.title = '远大小状元学生端app';
				this.appPics = this.studentPics;
				break;
			case 'xiaoxueyun':
				this.title = '远大小学云app';
				this.appPics = this.xiaoxueyunPics;
				break;
		}
	},
	beforeCreate () {
		this.$store.commit('SHOW_LOADING')
	}
}
</script>
<style lang="scss">
	.pic-detail{
		width: 10rem;
		margin: auto;
	}
	.pic-swipter-div{
		width: 100%;
	}
	.pic__div{
		margin-top: 0.5rem;
		text-align: center;
		img{
			width: 7rem;
			height: 12.45rem;
		}
		
	}
</style>