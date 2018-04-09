<template>
	<div class="iframe">
		<app-header>
			<span slot="title">博客文章</span>
		</app-header>
		<iframe class="iframe--container" @load="iframeOnload" :src="this.$route.params.url" frameborder="0"></iframe>
	</div>
</template>
<script>
export default {
	methods: {
		iframeOnload () {
			this.$store.commit('HIDE_LOADING')
		}
	},
	beforeCreate () {
		this.$store.commit('SHOW_LOADING')
	}
}
</script>
<style lang="scss">
	.iframe,.iframe--container{
		width: 100%;
		height: 100%;
	}
</style>