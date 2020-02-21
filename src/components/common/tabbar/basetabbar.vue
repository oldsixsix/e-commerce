<template>
    <div id="tab-bar">
<!--        抽取共性，这里只放一个插槽-->
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "basetabbar"
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }
    #tab-bar{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -1px 1px rgba(100,100,100,0.5);
        background: aliceblue;
    }


</style>
