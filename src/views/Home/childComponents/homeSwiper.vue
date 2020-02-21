<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>

    import Swiper from 'components/common/swiper/Swiper'
    import SwiperItem from "components/common/swiper/SwiperItem";
    export default {
        name: "homeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:{
                type:Array,
                default:{}
            }
        }

    }
</script>

<style scoped>

</style>
