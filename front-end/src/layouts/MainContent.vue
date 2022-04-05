<template>
  <div id="mainContent">
    <section class="banner">
      <div class="image">
        <div class="information">
          <div class="title">
            <p>Create your</p>
            <p>own NFT</p>
          </div>
          <submit-button type="light" size="normal">Start here</submit-button>
        </div>
      </div>
    </section>
    <section class="heading">
      <span>{{ headerTitle }}</span>
    </section>
    <section class="list">
      <b-row>
        <b-col v-for="(item, index) in listItem" :key="index" cols="6">
          <card-item :itemInfor="item"
        /></b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import CardItem from "../components/card/CardItem.vue";
import SubmitButton from "../components/buttons/SubmitButton.vue";
export default {
  name: "MainContent",
  components: {
    SubmitButton,
    CardItem,
  },
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    listItem: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#mainContent {
  .banner {
    .image {
      border-radius: 35px;

      height: 222px;
      background-image: url("../assets/img/banner.jpg");
      background-size: 118% 99%;
      background-position: 25% 78%;
      .information {
        width: fit-content;
        .title {
          padding: 20px 0 0 60px;
          p {
            font-weight: 600;
            font-size: 40px;
            line-height: 41px;
            color: #ffffff;
          }
        }
        .a-submitButton {
          margin-left: 50px;
          border-radius: 39px !important;
        }
      }
    }
  }
  .heading {
    padding: 22px 0 30px 0;
    span {
      font-weight: 600;
      font-size: 40px;
      line-height: 49px;

      color: #ffffff;
    }
  }
}
</style>
