<template>
    <div>
        <comment-box></comment-box>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">{{ item.name }}</span>
                {{ item.content }}
            </li>
        </ul>

    </div>
</template>
<script>
import commentBox from './CommentBox.vue'
export default {
    data(){
        return {
            list: [
                { id: 1, name: '李白', content: '天生我才必有用'},
                { id: 2, name: '王维', content: '劝君更进一杯酒'},
                { id: 3, name: '苏轼', content: '横看成岭侧成峰'},
            ]
        }
    },
    components: {
        commentBox
    }
}
</script>
<style lang="less">
    
</style>