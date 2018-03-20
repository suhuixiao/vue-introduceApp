<template>  
    <div class="toast" v-show="isShow">  
        <div class="toast-div">{{text}}</div>  
    </div>  
</template>
<script>  
export default{  
    data(){  
        return {  
            text: '内容',  
            isShow: true,  
            duration: 1500, 
        }  
    }  
}  
</script>
<style lang="scss">
.toast{  
    position: fixed; 
    top: 50%; 
    left: 50%;  
    transform: translate(-50%, 0);  
    margin-top: 3rem;  
    background: #000000;  
    line-height: 0.7rem;  
    color: #FFFFFF;  
    padding: 0 0.2rem;  
    border-radius: 0.2rem;  
    z-index: 11;
}  
</style>  