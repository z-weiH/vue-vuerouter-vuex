<template>
    <div>
        <el-button @click="click">加</el-button>

    </div>
</template>
<style lang="scss" scoped>

</style>
<script>

export default {
    computed: {
        // 监听全局store 变化
        data : function() {
            return this.$store.state.data;
        }
    },
    mounted: function () {
        
    },
    data: function () {
        return ({
        });
    },
    methods: {
        click: function () {
            this.$store.commit('addData');
        }
    },
}
</script>