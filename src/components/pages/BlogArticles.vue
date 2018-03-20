<template>
	<div class="blog-articles">
		<div class="blog-articles--title">
			<div v-for="value,index in titles" @click="activeIndex=index" :class="{active: index === activeIndex}" class="blog-articles__tab">{{value}}</div>
		</div>
		<swiper class="blog-articles__container" :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide class="article__div">
		    	<div v-for="value,index in jsBlogs" @click="linkBlogs(urlPrefix + value.url)" class="article__container">
			    	<div class="article__img">
			    		<img :src="value.img" alt="">
			    	</div>
			    	<div class="article__text">
			    		<div class="article__text--title">{{value.title}}</div>
			    		<div class="article__text--time">{{value.date}}</div>
			    	</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide class="article__div">
		    	<div v-for="value,index in cssBlogs" @click="linkBlogs(urlPrefix + value.url)" class="article__container">
			    	<div class="article__img">
			    		<img :src="value.img" alt="">
			    	</div>
			    	<div class="article__text">
			    		<div class="article__text--title">{{value.title}}</div>
			    		<div class="article__text--time">{{value.date}}</div>
			    	</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide class="article__div">
		    	<div v-for="value,index in htmlBlogs" @click="linkBlogs(urlPrefix + value.url)" class="article__container">
			    	<div class="article__img">
			    		<img :src="value.img" alt="">
			    	</div>
			    	<div class="article__text">
			    		<div class="article__text--title">{{value.title}}</div>
			    		<div class="article__text--time">{{value.date}}</div>
			    	</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide class="article__div">
		    	<div v-for="value,index in vueBlogs" @click="linkBlogs(urlPrefix + value.url)" class="article__container">
			    	<div class="article__img">
			    		<img :src="value.img" alt="">
			    	</div>
			    	<div class="article__text">
			    		<div class="article__text--title">{{value.title}}</div>
			    		<div class="article__text--time">{{value.date}}</div>
			    	</div>
		    	</div>
		    </swiper-slide>
		    <swiper-slide class="article__div">
		    	<div v-for="value,index in otherBlogs" @click="linkBlogs(urlPrefix + value.url)" class="article__container">
			    	<div class="article__img">
			    		<img :src="value.img" alt="">
			    	</div>
			    	<div class="article__text">
			    		<div class="article__text--title">{{value.title}}</div>
			    		<div class="article__text--time">{{value.date}}</div>
			    	</div>
		    	</div>
		    </swiper-slide>
		    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
		    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		</swiper>
	</div>
</template>
<script>
export default {
	data() {
		return {
			urlPrefix: 'http://blog.csdn.net/qq_38563845/article/details',
			activeIndex: 0,
			// swiper.activeIndex是当前活动块的索引值
			swiperOption: {
				notNextTick: true,
				// autoplay: 2500,
				/* swiper2写法 */
				// pagination: '.swiper-pagination',
				/* swiper3写法 */
				// pagination: {
		  		// 	   el: '.swiper-pagination'
		  		// },
		        onSlideChangeEnd: (swiper)=> {
		        	this.activeIndex = swiper.activeIndex
				}
	        },
			// 选项标题
			titles: ['js', 'css', 'html', 'vue', 'other'],
			// 所有博客
			contentAll: [{type: 'js', img: 'static/img/csdn.jpg', title: 'call、apply、bind的用法以及区别', date: '2018-03-07', url: '/79466848'}, {type: 'js', img: 'static/img/csdn.jpg', title: '浅拷贝和深拷贝', date: '2018-02-26', url: '/79372669'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'jsonp解决跨域问题', date: '2018-02-25', url: '/79366373'}, {type: 'vue', img: 'static/img/csdn.jpg', title: 'vue页面跳转', date: '2018-02-24', url: '/79362238'}, {type: 'other', img: 'static/img/csdn.jpg', title: '开发常见问题随记', date: '2018-02-24', url: '/79357810'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'es6的fetch函数', date: '2018-01-29', url: '/79196885'}, {type: 'js', img: 'static/img/csdn.jpg', title: '闭包的理解', date: '2018-01-26', url: '/79175088'}, {type: 'css', img: 'static/img/csdn.jpg', title: '清除浮动的几种方式', date: '2018-01-23', url: '/79136468'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: 'js之事件冒泡和事件捕获详细介绍', date: '2018-01-23', url: '/79136010'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'jquery中获取高度函数的区别', date: '2018-01-22', url: '/79133390'}, {type: 'html', img: 'static/img/csdn.jpg', title: '废弃的marquee标签', date: '2017-12-27', url: '/78912506'}, {type: 'other', img: 'static/img/csdn.jpg', title: '模拟移动端上拉加载功能', date: '2017-11-27', url: '/78641157'}, {type: 'html', img: 'static/img/csdn.jpg', title: '仿写添加标签栏', date: '2017-11-26', url: '/78640748'}, {type: 'other', img: 'static/img/csdn.jpg', title: 'sublime编辑器安装插件的方法', date: '2017-11-22', url: '/78601688'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: 'IntelliJ IDEA导入Javax包', date: '2017-11-02', url: '/78420494'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: '删除SVN缓存本地的账号', date: '2017-10-25', url: '/78339552'}, {type: 'js', img: 'static/img/csdn.jpg', title: '图片上传以及允许连续上传同一图片', date: '2017-10-23', url: '/78324837'}, {type: 'js', img: 'static/img/csdn.jpg', title: '封装自己的jquery', date: '2018-10-12', url: '/78220960'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: 'javascript作用域和执行上下文的区别', date: '2018-10-11', url: '/78206729'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'javascript中的继承', date: '2017-10-11', url: '/78206455'}, {type: 'vue', img: 'static/img/csdn.jpg', title: '快速掌握vuex', date: '2017-08-22', url: '/77482457'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'es6和es5中的this指向', date: '2017-09-30', url: '/78145814'}, {type: 'other', img: 'static/img/csdn.jpg', title: 'jquery使用总结', date: '2017-09-20', url: '/78040837'}, {type: 'js', img: 'static/img/csdn.jpg', title: '最简短的js代码实现tab选项卡效果', date: '2017-09-04', url: '/77838911'}, {type: 'html', img: 'static/img/csdn.jpg', title: 'flex布局基本属性用法示例以及常见布局', date: '2017-09-04', url: '/77838295'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'ajax中的同步异步问题', date: '2017-09-02', url: '/77800439'}, {type: 'other', img: 'static/img/csdn.jpg', title: 'Git实用教程', date: '2017-08-30', url: '/77716756'}, {type: 'js', img: 'static/img/csdn.jpg', title: 'javascript apply()使用详解', date: '2017-08-27', url: '/77624171'}, {type: 'vue', img: 'static/img/csdn.jpg', title: '在vue中封装可复用的组件', date: '2017-08-24', url: '/77524934'}, {type: 'html', img: 'static/img/csdn.jpg', title: '总结div水平居中的方法', date: '2017-08-23', url: '/77513186'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: 'vue-router 60分钟快速入门', date: '2017-08-21', url: '/77447905'}, {type: 'zhuan', img: 'static/img/csdn.jpg', title: '如何转载博客', date: '2017-08-21', url: '/77447844'}, {type: 'vue', img: 'static/img/csdn.jpg', title: 'vue-cli工程下组件之间的通信', date: '2017-08-21', url: '/77444973'}, {type: 'vue', img: 'static/img/csdn.jpg', title: '使用vue-cli搭建webpack模板项目', date: '2017-08-19', url: '/77412782'}],
			// jsBlogs
			jsBlogs: [],
			// cssBlogs
			cssBlogs: [],
			// htmlBlogs
			htmlBlogs: [],
			// otherBlogs
			otherBlogs: [],
			// vueBlogs
			vueBlogs: [],
		}
	},
	methods: {
		// 链接到博客文章
		linkBlogs(url) {
			this.$router.push({name: 'MyIframe', params: {showReturn: true, title: '我的博客', url: url}})
		}
	},
	computed: {
		// 如果要使用到swiper对象，可以通过此方法注册到data里
	   	swiper() {
	     	return this.$refs.mySwiper.swiper
	   	}
	},
	// 监听数值变化
	watch: {
		activeIndex() {
			this.swiper.slideTo(this.activeIndex, 1000, false)
		}
	},
	mounted() {
		for(let item of this.contentAll){
			if(item.type === 'js'){
				this.jsBlogs.push(item)
			}else if(item.type === 'css'){
				this.cssBlogs.push(item)
			}else if(item.type === 'html'){
				this.htmlBlogs.push(item)
			}else if(item.type === 'vue'){
				this.vueBlogs.push(item)
			}else if(item.type === 'other' || item.type === 'zhuan'){
				this.otherBlogs.push(item)
			}
		}
    }
}
</script>
<style lang="scss">
	.blog-articles{
		width: 10rem;
		height: 100%;
		margin: auto;
		font-size: 0.45rem;
		border-bottom: 1px solid #ccc;
		// height: 100%;
	}
	.blog-articles--title{
		display: flex;
		text-align: center;
		background: #FFF;
		&>.active{
			color: #139dea;
			border-bottom: 2px solid #139dea;
		}
		.blog-articles__tab{
		    flex: 1;
			height: 1.5rem;
			line-height: 1.5rem;
		}
	}
	.blog-articles__container{
		margin-top: 0.3rem;
		background: #FFF;
		height: calc(100% - 3.8rem);
		overflow-x: hidden;
		// overflow-y: auto;
		.article__div{
			height: 100%;
			overflow: auto;
		}
	}
	.article__container:last-child{
		border-bottom: 1px solid #ccc;
	}
	.article__container{
	    display: flex;
		padding: 0.4rem;
		border-top: 1px solid #ccc;
		.article__img{
			width: 2rem;
			img{
				width: 1.9rem;
				height: 1.9rem;
				margin: 0 0.1rem;
				border: 1px solid #ccc;
			}
		}
		.article__text{
			padding: 0.1rem 0.4rem;
			.article__text--title{
				
			}
			.article__text--time{
				
			}
		}
	}
</style>