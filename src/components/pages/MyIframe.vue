<template>
	<div class="iframe">
		<app-header>
			<span slot="title">博客文章</span>
		</app-header>
		<iframe class="iframe--container" :src="this.$route.params.url" frameborder="0"></iframe>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss">
	.iframe,.iframe--container{
		width: 100%;
		height: 100%;
	}
</style>