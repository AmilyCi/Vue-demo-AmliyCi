<template>
    <div>
        <comment-box @func="loadComments"></comment-box>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in list" :key="item.id">
                <span class="badge ">
                    <span class="glyphicon glyphicon-remove" @click="handleClick(index)"></span>
                </span>

                <span class="badge">
                     作者：{{ item.user }}
                </span>
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
            list: []
        }
    },
    created(){
        console.log('loa', JSON.parse(localStorage.getItem('cmts')));
        this.loadComments();
    },
    methods:{
        loadComments(){
            var list = JSON.parse(localStorage.getItem('cmts') || '[]')
            this.list = list;
        },
        handleClick(index){
            this.list.splice(index,1);
            localStorage.setItem('cmts', JSON.stringify(this.list))
        }
    },
    components: {
        commentBox
    }
}
</script>
<style lang="less">
    
</style>