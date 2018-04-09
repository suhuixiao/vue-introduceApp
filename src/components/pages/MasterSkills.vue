<template>
	<div class="master-skills">
		<app-header>
			<span slot="title">掌握技能</span>
		</app-header>
		<div class="skill-container">
			<div v-for="(value, index) in skillsDatas">{{index + 1}}.{{value}}</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			skillsDatas: ['熟悉HTML5、CSS3、JavaScript', '熟悉主流的MVVM框架vue', '掌握es6、sass、coffeescript等；日常开发注重代码规范', '使用photoshop切图', '掌握git、svn', '掌握前端构建工具webpack、gulp', '熟悉前端各种调试工具及方法', 'github地址：http://github.com/suhuixiao', '博客地址：https://blog.csdn.net/qq_38563845']
		}
	}
}
</script>
<style lang="scss">
	.master-skills{
		height: 100%;
	}
	.skill-container{
		margin-top: 0.3rem;
		background: #FFF;
		height: calc(100% - 3.4rem);
		overflow: auto;
		div{
			border-bottom: 1px solid #b5afaf;
			line-height: 1rem;
			font-size: 0.5rem;
			padding: 0 0.2rem;
		}
	}
</style>