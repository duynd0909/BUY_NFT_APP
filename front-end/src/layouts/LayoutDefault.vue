<template>
  <b-row class="layout-default">
    <b-col class="layout-side"
      ><left-side-bar
        :menuList="menuList"
        :accessibilityList="accessibilityList"
      ></left-side-bar
    ></b-col>
    <b-col cols="6"
      ><div class="content">
        <nav class="content__nav">
          <custom-input v-model="searchKey" placeholder="Search keyword here" />
        </nav>
        <main class="content__main">
          <slot />
        </main>
        <!-- <footer class="content__footer">&copy; Awesome Company</footer> -->
      </div></b-col
    >
    <b-col class="layout-side"
      ><right-side-bar :topCreators="topCreators"></right-side-bar
    ></b-col>
  </b-row>
</template>

<script>
import LeftSideBar from "./LeftSideBar.vue";
import RightSideBar from "./RightSideBar.vue";

import CustomInput from "../components/inputs/CustomInput.vue";

export default {
  name: `LayoutDefault`,
  components: {
    LeftSideBar,
    CustomInput,
    RightSideBar,
  },
  data() {
    return {
      user: null,
      searchKey: null,
      menuList: [
        {
          name: "Dashboard",
          to: "/",
          icon: "star-fill",
          active: true,
        },
        {
          name: "Market",
          to: "/",
          icon: "shop-window",

          active: false,
        },
        {
          name: "Active Bid",
          to: "/",
          icon: "bar-chart-line-fill",
          active: false,
        },
        {
          name: "Favourites",
          to: "/",
          icon: "heart",
          active: false,
        },
      ],
      accessibilityList: [
        {
          name: "My Portfolio",
          to: "/",
          icon: "folder",
          active: false,
        },
        {
          name: "Saved",
          to: "/",
          icon: "cloud-check-fill",

          active: false,
        },
        {
          name: "History",
          to: "/",
          icon: "clock-history",
          active: false,
        },
        {
          name: "Settings",
          to: "/",
          icon: "gear",
          active: false,
        },
      ],
      topCreators: [
        {
          avatar: "https://placekitten.com/300/300",
          username: "dtom_boy",
        },
        {
          avatar: "https://placekitten.com/300/300",
          username: "dtom_boy",
        },
        {
          avatar: "https://placekitten.com/300/300",
          username: "dtom_boy",
        },
        {
          avatar: "https://placekitten.com/300/300",
          username: "dtom_boy",
        },
      ],
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/layout/_layoutDefault.scss";
</style>
