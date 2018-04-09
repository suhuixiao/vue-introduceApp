<template>
	<div class="login">
		<div class="logo-container">
			<img src="static/img/logo.jpg" alt="">
		</div>
		<div class="input-container">
			<div class="input__div">
				<input class="username" placeholder="请输入账号" v-model="username" type="text">
			</div>
			<div class="input__div">
				<input class="password" placeholder="请输入密码" v-model="password" type="text">
			</div>
		</div>
		<div class="btn-container" >
			<div class="btn" @touchstart="isHover = true" :class="{active: isHover}" @touchend="login">登录</div>
		</div>
	</div>
</template>
<script>
	import qs from 'qs';
	import api from '../../api';
	export default {
		data() {
			return {
				username: '',
				password: '',
				// 按钮是否被点击
				isHover: false
			}
		},
		methods: {
			// 登录
			login() {
				this.isHover = false;
				let optins = qs.stringify({username: this.username, password: this.password});
				let config = {
					headers:{'X-LC-Id': 'GPBkuuP6znYbmAVXVIo6xhvU-gzGzoHsz', 
					'X-LC-Key': 't0yFSrjXrXhRhpcikKi6kTSx'}
				};
				api.login(optins, config).then(res => {
					this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: '登录成功', time: 1500})
					let userData = {username: this.username, password: this.password};
					localStorage.setItem('key', res.data.sessionToken)
					localStorage.setItem('userData', JSON.stringify(userData))

					this.$store.commit('SET_TELEPHONE', res.data.mobilePhoneNumber)
					this.$store.commit('SET_MAILBOX', res.data.email)
					// 判断地址是否有redirect参数
				  	if(this.$route.query.redirect){
				  		// 有参数，则跳转到该页面
				  		this.$router.push({path: this.$route.query.redirect})
				  	}else{
				  		this.$router.push({name: 'Index', params: {title: '首页'}})
				  	}
				}).catch(err => {
					this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: '登录失败', time: 1500})
				})
			}
		},
		mounted() {
			let data = localStorage.getItem('userData');
			if(data){
				this.username = JSON.parse(data).username;
				this.password = JSON.parse(data).password;
			}
		}

	}
</script>
<style lang="scss">
	.login{
		width: 10rem;
		height: 100%;
		margin: auto;
		background: #FFF;
	}
	.logo-container{
		padding: 3.5rem 0 0.7rem 0;
		text-align: center;
		img{
			width: 2rem;
		}
	}
	.input__div{
		width: 90%;
		margin: auto;
		border-bottom: 1px solid #ccc;
		input{
			height: 1.2rem;
			width: 90%;
			padding: 0 0.5rem;
			font-size: 0.45rem;
			border: none;
			outline:none;
			margin-top: 0.1rem;

		}	
	}
	.btn-container{
		// height: 2rem;
		padding: 0.5rem;
		text-align: center;
		.btn{
			width: 2.5rem;
			height: 1rem;
			margin: auto;
			line-height: 1rem;
			font-size: 0.5rem;
			border: 1px solid #64c573;
			color: #64c573;
			border-radius: 0.2rem;
			cursor: pointer;
		}
		.active{
			background: #64c573;
			color: #FFF;
		}
	}
</style>