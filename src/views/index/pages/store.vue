<template>
    <div>
        全局状态 ---- {{storeData}}
    </div>
</template>
<style lang="scss" scoped>



</style>
<script>
export default{
    computed : {
        storeData : function(){
            return this.$store.state.data;
        },
    },
    mounted : function(){

    },
    data : function(){
        return ({
        });
    },
    methods : {

    },
}
</script>