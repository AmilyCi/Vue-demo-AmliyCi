<template>
    <div>
        <input type="text" v-model="n1">
        <select v-model='opt'>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" v-model="n2">
        <input type="button" value="=" @click='calc'>
        <input type="text" v-model="result">
    </div>
</template>
<script>
export default {
    data () {
        return {
            n1: 0,
            n2: 0,
            opt: '+',
            result: 0
        }
    },
    methods: {
        calc (){
            switch (this.opt){
                case '+':
                    this.result = parseFloat(this.n1) + parseFloat(this.n2);
                    break;
                case '-':
                    this.result = parseFloat(this.n1) - parseFloat(this.n2);
                    break;
                case '*':
                    this.result = parseFloat(this.n1) * parseFloat(this.n2);
                    break;
                case '/':
                    this.result = parseFloat(this.n1) / parseFloat(this.n2);
                    break;
            }
        }
    }
}

</script>