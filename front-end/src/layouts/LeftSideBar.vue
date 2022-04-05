<template>
  <div id="leftSideBar">
    <div class="content">
      <div class="heading">
        <span> BUYNFT </span>
      </div>
      <b-list-group>
        <b-list-group-item
          v-for="(item, index) in menuList"
          :key="index"
          href="javascript:void(0)"
          :active="item.active"
        >
          <b-icon :icon="item.icon"></b-icon>
          <span class="view-name" @click="pushTopPage(item.to)">{{
            item.name
          }}</span>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="divider" />
    <div class="content">
      <div class="heading-sm">
        <span> MY PROFILE </span>
      </div>
      <b-list-group>
        <b-list-group-item
          v-for="(item, index) in accessibilityList"
          :key="index"
          href="javascript:void(0)"
          :active="item.active"
        >
          <b-icon :icon="item.icon"></b-icon>
          <span class="view-name" @click="pushTopPage(item.to)">{{
            item.name
          }}</span>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    accessibilityList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pushTopPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/helpers/variables/_initialize.scss";

$back-color: $dark-gray;
$divider-color: $dusty-gray;
#leftSideBar {
  font-family: "Montserrat", sans-serif;

  height: 100%;

  background: $back-color;
  .content {
    padding: 35px 105px 27px 22px;
    .heading {
      height: 88px;
      // left: 27px;
      top: 35px;
      span {
        font-style: normal;
        font-weight: 250;
        font-size: 54.6207px;
        line-height: 67px;
        color: #d03852;
      }
    }
    .heading-sm {
      padding-left: 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #d03852;
    }
  }
  .divider {
    left: 26px;
    padding: 0px 15px 0px 22px;
    border-top: 1px solid $divider-color;
  }
}
</style>
