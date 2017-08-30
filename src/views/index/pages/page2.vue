<template>
    <div>
        我是page2 数据
        <el-button @click="click">减</el-button>
    </div>
</template>
<style lang="scss" scoped>



</style>
<script>
export default{
    components : {
    },
    mounted : function(){

    },
    data : function(){
        return ({
        });
    },
    methods : {
        click : function(){
            this.$store.commit('deleteData');
        }
    },
}
</script>