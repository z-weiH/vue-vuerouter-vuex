<template>
    <div>
        <img :src="errorImg" />
    </div>
</template>
<style lang="scss" scoped>


</style>
<script>
import errorImg from '@/images/404.png';

export default{
    components : {
    },
    mounted : function(){
        
    },
    data : function(){
        return ({
            errorImg : errorImg,
        });
    },
    methods : {
        
    },
}
</script>