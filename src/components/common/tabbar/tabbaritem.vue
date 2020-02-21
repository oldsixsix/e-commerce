<template>
    <div class="tab-bar-item" @click="itemclick" :style="activeStyle">
<!--        插槽最好都包装一层-->
        <div v-if="!isActive">
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>

        <div :style="activeStyle">
<!--            因为插槽到最后是被替换了，所以在插槽外面包裹一层div，可以控制其样式-->
            <slot  name="item-text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "tabbaritem",
        //通过父组件传递进来
        props:{
            path:String,
            activecolor:String
        },
        data(){
            return{
                // isActive: false
            }
        },
        //通过计算属性解决活跃组件问题，点谁谁活跃
        computed:{
          isActive(){
              //判断活跃的path是否和item的path一致
              //this.$rout处于活跃的路由是否包含我组件的path
              // this.$route.path获取活跃组件的path属性
              //indexof（this.path）如果返回值-1，则没找到this.path这个字符串
              console.log(this.$route.path);
              return this.$route.path.indexOf(this.path) !== -1
          },
            activeStyle(){
                console.log(this.activecolor);
                return this.isActive?{color:this.activecolor}:{}
            }
        },
        methods:{
            itemclick(){

                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;

        font-size: 14px;
        margin-top: 10px;
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
        vertical-align: middle;
    }
    /*把这里也改成动态的*/
   /* .active{
        color: red;
    }*/
</style>
<!--<div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            首页</div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            分类</div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            购物车</div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            我的</div>-->
