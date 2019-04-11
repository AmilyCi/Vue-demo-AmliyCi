<template>
    <div>
        <input type="button" value="浪起来" class='btn btn-primary' @click="lang">
        <input type="button" value="低调" class='btn btn-primary' @click="stop">
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: '猥琐发育，别浪~~！！',
            intervalId: null
        }
    },
    methods: {
        lang(){
            // 如果多次点击 按钮 浪起来就会创建多个定时器，所以加一个判断，判断
            // intervalId是否为null,如果不为null代表已经创建了定时器，直接return就可以了
            // 并且在停止的时候别忘了让定时器重新设置为null
            if(this.intervalId != null) return;
            
            this.intervalId = setInterval(()=>{
                var start = this.msg.substring(0,1);
                var end = this.msg.substring(1);
                this.msg = end+start;
            },400)
        },
        stop(){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }  
}


// 分析：
// 1.给【浪起来】按钮，绑定一个点击事件 v-on @
// 2.在按钮的事件处理函数中，写相关的业务逻辑代码；拿到 msg 字符串，然后调用
//字符串的 substring 来进行字符串的截取操作，把第一个字符串截取出来，放到最后一个位置即可；
// 3.为了实现点击下按钮，自动截取的功能，需要把 2 步骤中的代码，放到一个定时器中去
</script>
<style lang="less">
 .btn {
    margin: 10px;
}   
</style>