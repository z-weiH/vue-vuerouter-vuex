<template>
    <div>
        <div>
            <!-- <el-button @click="click">按钮</el-button>
            {{data}} -->
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    components: {
    },
    mounted: function () {

    },
    computed: {
        data : function(){
            return this.$store.state.data
        }
    },
    data: function () {
        return ({

        });
    },
    methods: {
        click: function () {
            console.log(this.$store.commit('addData'));
        }
    },
}
</script>