<template>
	<div class="user-info">
		<!-- <v-touch>编辑</v-touch> -->
		<div class="info__container--bg">
			<img class="background__img" src="static/img/bg.jpg" alt="">
			<div class="background__div">
				<div class="div__user--pic"><img src="static/img/boy.png" alt=""></div>
				<div class="div__user--name">猪猪</div>
				<div class="div__user--phone">电话：{{$store.state.user.telephone}}</div>
			</div>
		</div>
		<div class="info__container--content">
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-xingbie"></div>
					<div class="left--text">性别</div>
				</div>
				<div class="content__item--right">男</div>
			</v-touch>
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-shijian"></div>
					<div class="left--text">出生年月</div>
				</div>
				<div class="content__item--right">19XX-07</div>
			</v-touch>
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-drxx18"></div>
					<div class="left--text">毕业院校</div>
				</div>
				<div class="content__item--right">XX大学</div>
			</v-touch>
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-youxiang"></div>
					<div class="left--text">邮箱</div>
				</div>
				<div class="content__item--right">{{$store.state.user.mailbox}}</div>
			</v-touch>
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-juminjuzhudilunkuo"></div>
					<div class="left--text">居住地</div>
				</div>
				<div class="content__item--right">冰岛</div>
			</v-touch>
			<v-touch class="content__item">
				<div class="content__item--left">
					<div class="iconfont icon-34"></div>
					<div class="left--text">户籍</div>
				</div>
				<div class="content__item--right">冰岛</div>
			</v-touch>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss">
	// $imgUrl: '/static/img/';
	// .info__container--bg{
	// 	width: 10rem;
	// 	height: 5rem;
	// 	background: url('#{$imgUrl}/bg.jpg')
	// }
	.user-info{
		width: 10rem;
		height: 100%;
		margin: auto;
	}
	.info__container--bg{
		position: relative;
		width: 10rem;
		height: 5rem;
	}
	.info__container--content{
		height: calc(100% - 7rem);
		overflow: auto;
		background: #FFF;
	}
	.background__img{
		position: absolute;
		width: 100%;

	}
	.background__div{
		position: relative;
		text-align: center;
		padding-top: 0.7rem;
		font-size: 0.45rem;
		color: #FFF;
		.div__user--pic{
			width: 2.2rem;
			height: 2.2rem;
			border-radius: 1.1rem;
			background: #FFF;
			margin: auto;
			overflow: hidden;
			img{
				width: 1.8rem;
				height: 2rem;
				margin: 0.2rem 0.1rem 0 0
				// border-radius: 
			}
		}
		.div__user--name{
			padding: 0.3rem;
		}
	}
	.content__item{
		height: 1.5rem;
		line-height: 1.5rem;
		padding: 0 0.3rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		display: -webkit-flex;
	}
	.content__item--left{
	    flex: 1;
	    -webkit-flex: 1;
	    display: flex;
	    display: -webkit-flex;
		font-size: 0.5rem;
		.iconfont{
			font-size: 0.9rem;
		}
		.left--text{
			margin-left: 0.1rem;
		}
	}
	.content__item--right{
	    flex: 1;
	    -webkit-flex: 1;
		text-align: right;
		font-size: 0.5rem;
		color: #30ab1b;
	}
</style>