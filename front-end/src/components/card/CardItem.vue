<template>
  <b-card class="card-item" no-body style="max-width: 20rem">
    <b-card-img :src="itemInfor.thumbnail_url" alt="Image" top></b-card-img>

    <b-card-body class="card-content">
      <b-row>
        <b-col class="card-infor" cols="8">
          <b-card-title class="title">{{ itemInfor.title }}</b-card-title>
          <div class="author-infor">
            <b-avatar variant="primary" :src="itemInfor.avatar_url"></b-avatar>
            <span class="user-name">{{ itemInfor.author }}</span>
          </div>
        </b-col>
        <b-col cols="4" class="card-infor">
          <submit-button :icon="itemInfor.coin">{{
            itemInfor.price + " " + itemInfor.coin.toUpperCase()
          }}</submit-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";
export default {
  name: "CardItem",
  components: {
    SubmitButton,
  },
  props: {
    itemInfor: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/components/card/_card.scss";
</style>