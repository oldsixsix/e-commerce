<template>
  <div id="home">
   <Navbar class="home-nav">
     <div slot="center"  class="shopping">
       购物街
     </div>
   </Navbar>
  <homeSwiper :banners="banners"></homeSwiper>
    <homeRecommend :recommend="recommend"></homeRecommend>
  </div>
</template>

<script>
    import Navbar from "components/common/navbar/Navbar";
    import homeSwiper from 'views/Home/childComponents/homeSwiper'
    import homeRecommend from "./childComponents/homeRecommend";
    import {getHomeMutidata} from 'network/home'
export default {
  name: 'Home',
    components:{
        Navbar,
        homeSwiper,
        homeRecommend
    },
    data(){
        return{
            result:null,
            banners:[],
            recommend:[],

        }
    },
    created() {
        //  组件创建好的时候发送网络请求
        getHomeMutidata().then(res => {
            console.log(res);
            this.banners=res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    }
}
</script>
<style scoped>
  .home-nav{
    background-color: hotpink;
  }
  .shopping{
    margin-top: 10px;
    color: white;
    font-weight:bold;
  }
</style>
