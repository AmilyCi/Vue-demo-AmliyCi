<template>
    <div id='nav'>
        <router-link to="/1">1.跑马灯</router-link>
        <router-link to="/2">2.简单的计算器</router-link>
        <router-link to="/3">3.品牌列表案例</router-link>
        <router-link to="/4">4.Vue的动画效果</router-link>
        <router-link to="/5">5.动画列表</router-link>
        <router-link to="/6">6.组件切换</router-link>
        <router-link to="/7">7.小球动画</router-link>
        <router-link to="/8">8.发表评论列表</router-link>
    </div>
</template>
<script>
export default {
    name: "Home"
}
</script>
<style lang='less'>
#nav {
  text-align: center;
  padding: 30px;
  a {
    display: block;
    margin: 5px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
    
</style>