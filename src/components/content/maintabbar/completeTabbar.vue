<template>
    <basetabbar>
        <!--      path传入的是变量的话就要加v-bind绑定，监听其参数的变化
                  传入的是常量没必要用v-bind，v-bind用于监听参数和绑定
        -->
        <tabbaritem path="/home" activecolor="red">
            <!--      alt代表点击处于活跃状态-->
            <img src="~assets/img/tabbar/home.svg" slot="item-icon" >
            <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" >
            <div slot="item-text">首页</div>
        </tabbaritem>

        <tabbaritem  path="/category" activecolor="red">
            <img src="~assets/img/tabbar/category.svg" slot="item-icon" >
            <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" >
            <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem   path="/shopcart" activecolor="red">
            <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" >
            <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" >
            <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem   path="/profile" activecolor="red">
            <img src="~assets/img/tabbar/profile.svg" slot="item-icon" >
            <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" >
            <div slot="item-text">我的</div>
        </tabbaritem>
    </basetabbar>
</template>

<script>
    import basetabbar from "../../common/tabbar/basetabbar";
    import tabbaritem from "../../common/tabbar/tabbaritem";
    export default {
        name: "completeTabbar",
        components:{
            basetabbar,
            tabbaritem

        }
    }
</script>

<style scoped>

</style>
