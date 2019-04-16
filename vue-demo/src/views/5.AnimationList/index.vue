<template>
    <div>
        <label>
            id:
            <input type="text" v-model="id">
        </label>
        <label>
            name:
            <input type="text" v-model="name">
        </label>
        <input type="button" value="添加" @click="add">

        <transition-group tag="ul">
            <li v-for="(item,index) in list" :key="item.id" @click="del(index)">
                {{ item.id }} ---- {{ item.name }}
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: '',
            name: '',
            list: [
                { id: 1, name: "曹操" },
                { id: 2, name: "张飞" },
                { id: 3, name: "项羽" },
                { id: 4, name: "刘备" }
            ]
        }
    },
    methods:{
        add(){
            this.list.push({ id: this.id, name: this.name});
            this.name = this.id = ''
        },
        del(index){
            this.list.splice(index,1)
        }
    }    
}
</script>

<style lang="less">
li {
    padding: 10px;
    margin: 5px;
    border: 1px dashed black;
    width: 100%;
}
li:hover {
    background-color: palevioletred;
    transition: all 0.8s ease;
}
.v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(80px)
}
.v-enter-active,.v-leave-active {
    transition: all 1s ease;
}
// .v-move 和 .v-leave-to 配合使用， 能够实现列表后续的元素， 渐渐地飘上来的效果
.v-move {
    transition: all 1s ease;
}
.v-leave-to {
    position: absolute;
}
    
</style>