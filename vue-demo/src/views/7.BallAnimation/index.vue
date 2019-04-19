<template>
    <div>
        <input type="button" value="加入购物车" @click="flag = !flag">

        <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter">

            <div class="ball" v-show="flag"></div>

        </transition>
        
    </div>

</template>
<script>
export default {
    data(){
        return {
            flag: false
        }
    },
    methods:{
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth
            el.style.transform = "translate(150px,450px)";
            el.style.transition = "all 1s ease";
            done()
        },
        afterEnter(el){
            this.flag = !this.flag;
        }
    }
    
    
}
</script>
<style lang="less">
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: hotpink;
}
    
</style>