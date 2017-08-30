<template>
    <div class="laout">
        <div class="left">
            <el-menu :router="true" theme="dark" :default-active="active" class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <div slot="title"></div>
                        <el-menu-item index="/background/default">default</el-menu-item>
                        <el-menu-item index="/background/page2">page2</el-menu-item>
                        <el-menu-item index="/background/store">store</el-menu-item>
                        <el-menu-item index="">{{data}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.laout {
    .left {
        width: 300px;
        float: left;
    }
    .right {
        float: left;
    }
}
</style>
<script>
export default {
    computed: {
        data : function(){
            return this.$store.state.data;
        }
    },
    components: {
    },
    mounted: function () {
        if (this.$route.name && this.$route.name.active) {
            this.active = this.$route.name.active;
        }
    },

    data: function () {
        return ({
            active: '',
        });
    },
    methods: {

    },
}
</script>