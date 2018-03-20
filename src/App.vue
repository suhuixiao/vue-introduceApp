<template>
    <div class="introduce">
        <!-- <app-header></app-header> -->
        <router-view></router-view>
        <bottom-bar></bottom-bar>  
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
body,html,.introduce{
    width: 100%;
    height: 100%;
    background: #ece9e9;
    overflow: hidden;
}
</style>
