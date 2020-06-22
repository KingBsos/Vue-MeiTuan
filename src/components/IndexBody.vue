<template>
  <div>
    <TopMainBody />
    <advert
      title="美团外卖"
      #default="{item}"
      :navList="[{value: 'one'},{value: 'two'}]"
      :advertList="[{name: 'sdkf',imgUrl: 'https://pic1.zhimg.com/50/v2-f64f2618db044388a0f8024ee9121d84_200x0.jpg'}]"
    >
      <div class="advert-padding">
        <CoverCard :imgUrl="item.imgUrl"></CoverCard>
      </div>
    </advert>
  </div>
</template>

<script>
import TopMainBody from "./TopMainBody.vue";
import Advert from "./Advert.vue";
import CoverCard from "./CoverCard.vue";

export default {
  components: {
    Advert,
    CoverCard,
    TopMainBody
  }
};
</script>

<style scoped>
.advert-padding {
  padding: 15px;
  height: 400px;
}
</style>