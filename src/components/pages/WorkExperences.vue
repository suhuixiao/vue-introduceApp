<template>
	<div class="work-experences">
		<app-header>
			<span slot="title">工作经验</span>
		</app-header>
		<div v-for="(value,index) in workData" class="work--container">
			<div class="container--title">
				<div class="iconfont icon-calendar">&nbsp;</div>
				<!-- <div class="iconfont icon-icon-arrow-right2"></div> -->
			</div>
			<div class="container--content">
				<div>{{value.time}}</div>
				<div class="workData__name">{{value.name}}</div>
				<div>{{value.jobName}}</div>
			</div>
		</div>
        <bottom-bar></bottom-bar>  
	</div>
</template>
<script>
export default {
	data() {
		return {
			workData: [{name: '广州天健软件有限公司', time: '2017-01至2017-07', jobName: 'Web前端开发'}, {name: '广州远大信息发展有限公司', time: '2017-08至2018-04', jobName: 'Web前端开发'}]
		}
	},
	mounted() {
		
	}
}
</script>
<style lang="scss">
	.work-experences{
		font-size: 0.5rem;
		height: calc(100% - 1.9rem);
		overflow: auto;
	}
	.container--title{
		display: flex;
		display: -webkit-flex;
		height: 0.8rem;
		align-itens: center;
		border-bottom: 1px solid #666;
		.iconfont{
			font-size: 0.55rem;
		}
		.iconfont:nth-child(2){
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
		}
	}
	.work--container{
		width: 95%;
		margin: 0.3rem auto;
		background: #FFF;
		border-radius: 0.3rem;
		padding: 0.3rem;
		box-sizing: border-box;
	}
	.workData__name{
		font-weight: bold;
	}
</style>