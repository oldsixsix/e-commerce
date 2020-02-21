<template>
    <div class="recommend-view">
      <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt=""/>
            <div>
              {{item.title}}
            </div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeRecommend",
        props:{
          recommend:{
              type:Array,
              default:{}
          }
        }
    }
</script>

<style scoped>
.recommend-view {
  display: flex;
  text-align: center;
  padding: 15px 0 5px;
  border-bottom: aliceblue 8px solid;
}
.recommend-item{
  flex: 1;
}
  .recommend-item img{
    width: 75px;
    height: 80px;
    margin-bottom: 10px;

  }
</style>
