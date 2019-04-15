<template>
    <div>
        <input type="button" value="toggle" @click="flag = !flag">
        <transition>
            <h3 v-show='flag'>这是一个H3标签</h3>
        </transition>
        <hr>
        <input type="button" value="toggle2" @click="flag2 = !flag2">
        <transition name="my">
            <h5 v-show="flag2">这是一个h5标签</h5>
        </transition>
        <hr>
        <input type="button" value="toggle3" @click="flag3 = !flag3">
        <transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration="{ enter: 400, leave: 400}">
            <h2 v-show="flag3" class="animated">这是一个h2标签</h2>
        </transition>
        
    </div>

</template>
<script>
export default {
    data(){
        return {
            flag: false,
            flag2: false,
            flag3: false
        }
    }
    
}
</script>
<style lang="less">
.v-enter,.v-leave-to{
    opacity:0;
    transform: translateX(150px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.8s ease;
}
.my-enter,.my-leave-to{
    opacity: 0;
    transform: translateY(150px);
}
.my-enter-active,.my-leave-active{
    transition: all 0.4s ease;
}

</style>