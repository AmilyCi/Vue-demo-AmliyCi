<template>
    <div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">添加品牌</h3>
            </div>
            <div class="panel-body">
                <label>
                    ID:
                    <input type="text" v-model='id'>
                </label>
                <label>
                    Name:
                    <input type="text" v-model='name' @keyup.f2.enter='add'>
                </label>
                <input type="button" class='btn btn-primary' value="添加" @click="add">
                <label>
                    搜索名称关键字:
                    <input type="text" v-model="keywords" v-focus>
                </label>
            </div>
        </div>

        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Ctime</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in search(keywords)" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.cTime | dateFormate }}</td>
                    <td>
                        <a href="" @click.prevent='del(item.id)'>删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>

export default {
    data(){
        return {
            keywords: '',
            id: '',
            name: '',
            list: [
                {id: 1, name: '奔驰', cTime: new Date()},
                {id: 2, name: '宝马', cTime: new Date()}
            ]
        }
    },
    filters:{
        dateFormate:function(dateStr,pattern = ''){
            var dt = new Date(dateStr);
            var y = dt.getFullYear();
            var m = (dt.getMonth() + 1).toString().padStart(2,'0');
            var d = (dt.getDate()).toString().padStart(2,'0');
            
            if(pattern.toLowerCase() == 'yyyy-mm-dd'){
                return `${y}-${m}-${d}`
            }else{
                var hh = (dt.getHours()).toString().padStart(2,'0');
                var mm = (dt.getMinutes()).toString().padStart(2,'0');
                var ss = (dt.getSeconds()).toString().padStart(2,'0');
                return  `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        }
    },
    directives:{
        focus:{
            bind: function(){},
            inserted: function(el){
                el.focus();
            },
            update: function(){}
        }
    },
    methods:{
        add(){
            var car = { id: this.id, name: this.name, cTime: new Date() };
            this.list.push(car);
            this.id = this.name = '';
        },
        del(id){
            this.list.some((item,i) => {
                if(item.id == id){
                    this.list.splice(i,1);
                    return true
                }
            })
        },
        search(keywords){
            var newList = [];
            this.list.forEach(item => {
                if(item.name.indexOf(keywords) != -1){
                    newList.push(item)
                }
            });
            return newList;
        }
    }
}

</script>