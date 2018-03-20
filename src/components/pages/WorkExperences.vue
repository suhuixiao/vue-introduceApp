<template>
	<div class="work-experences">
		<div v-for="(value,index) in workData" class="work--container">
			<div class="container--title">
				<div class="iconfont icon-calendar">&nbsp;验</div>
				<div class="iconfont icon-icon-arrow-right2"></div>
			</div>
			<div class="container--content">
				<div>{{value.name}}</div>
				<div>{{value.time}}</div>
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
			workData: [{name: 'teng', time: '2018-01-01至2018-01-01', jobName: 'sdhsd恩'}, {name: 'a', time: '2018-01-01至2018-01-01', jobName: 'sdhsd恩'}]
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
		height: 0.8rem;
		align-itens: center;
		border-bottom: 1px solid #666;
		.iconfont{
			font-size: 0.55rem;
		}
		.iconfont:nth-child(2){
			display: flex;
			align-items: center
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
</style>