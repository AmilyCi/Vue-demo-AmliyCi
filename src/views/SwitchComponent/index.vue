<template>
    <div>
        <a href="" @click.prevent="comName = 'login'">登录</a>
        <a href="" @click.prevent="comName = 'register'">注册</a>

        <transition mode="out-in">
            <component :is="comName"> </component>
        </transition>   

    </div>
</template>
<script>
import login from './login.vue';
import register from './register.vue'

export default {
    data(){
        return {
            comName: "login"
        }
    },
    components:{
        login,register
    }  
}
</script>
<style lang="less">
a {
    display: inline-block;
    padding: 10px;
}
.v-enter,.v-leave-to{
    opacity: 0;
    transform: translateX(180px)
}
.v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
}
</style>
