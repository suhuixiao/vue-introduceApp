import Vue from 'vue'
// 头部栏
import AppHeader from '@/components/common/AppHeader'
// 底部栏
import BottomBar from '@/components/common/BottomBar'
// toast组件
import Toast from '@/components/common/Toast'
const Com = {
	init (){
		Vue.component('app-header', AppHeader)
		Vue.component('bottom-bar', BottomBar)
	},
	// toast方法
	$toast(text, duration) {
		let ToastConstructor  = Vue.extend(Toast) // 返回一个“扩展实例构造器”
		let toastDom = new ToastConstructor({  
	        el: document.createElement('div')    //将toast组件挂载到新创建的div上  
	    })
	    document.body.appendChild( toastDom.$el )   //把toast组件的dom添加到body里  
	    toastDom.text = text;  
	    toastDom.duration = duration; 
	    // 在指定 duration 之后让 toast消失  
	    setTimeout(()=>{  
	        toastDom.isShow = false;    
	    }, toastDom.duration); 
	}

}
export default Com