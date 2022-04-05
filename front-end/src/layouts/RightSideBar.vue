<template>
  <div id="rightSideBar">
    <div class="content">
      <div class="heading">
        <div class="notification">
          <b-icon class="icon" icon="bell" font-scale="2"></b-icon>
        </div>
        <div class="user-information">
          <b-avatar
            variant="primary"
            src="https://placekitten.com/300/300"
          ></b-avatar>
          <span class="user-name">{{ username }}</span>
        </div>
      </div>
      <div class="wallet">
        <span class="title">Wallet Balance</span>
        <div class="balance">
          <img src="../assets/img/eth.png" alt="" />
          <span>67.245</span>
        </div>
      </div>
      <div class="top-creators">
        <div class="heading">
          <span class="title">TOP CREATORS</span>
          <span class="see-all">See all</span>
        </div>
        <div class="list">
          <div
            v-for="(item, index) in topCreators"
            :key="index"
            class="list-item"
          >
            <b-avatar class="avatar" :src="item.avatar"></b-avatar>
            <span class="mr-auto creator-name">{{ item.username }}</span>
            <submit-button class="follow-btn" size="small"
              >Follow</submit-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from "../components/buttons/SubmitButton.vue";
export default {
  name: "RightSideBar",
  components: {
    SubmitButton,
  },
  props: {
    topCreators: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      username: this.$cookies.get("username"),
    };
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
$dark-font-color: $dusty-gray;
#rightSideBar {
  height: 100%;

  // background: $back-color;
  .content {
    padding-top: 29px;
    padding-right: 32px;
    .heading {
      display: inline-flex;
      // left: 27px;

      justify-content: center;
      .notification {
        width: 57px;
        border: 1px solid white;
        color: white;
        border-radius: 50%;
        text-align: center;
        .icon {
        }
      }
      .user-information {
        text-align: center;
        padding-left: 36px;
        .user-name {
          padding-left: 22px;
          color: white;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
        }
        .b-avatar {
          .b-avatar-text {
            background: aliceblue;
          }
        }
      }
    }
    .wallet {
      margin-top: 52px;
      // padding-bottom: 6px;
      height: 298.47px;
      background: linear-gradient(180deg, #181717 0%, #d03852 100%);
      border-radius: 41.2899px;
      text-align: center;
      display: flex;
      flex-direction: column;
      .title {
        padding-top: 21px;
        color: white;
        font-weight: 600;
        font-size: 20px;
        line-height: 29px;
        display: inline-block;
      }
      .balance {
        color: white;
        margin-top: auto;
        padding-bottom: 44px;
        font-weight: 500;
        font-size: 24px;
        line-height: 39px;
        img {
          padding-right: 6px;
          width: 30px;
          height: 45px;
        }
      }
    }
    .top-creators {
      margin-top: 6px;
      height: 675px;
      background: $back-color;
      border-radius: 35px;
      .heading {
        width: 100%;
        padding: 46px 18px 36px 36px;
        .title {
          color: white;
          font-weight: 600;
          font-size: 20px;
          line-height: 29px;
          padding-right: 85px;
        }
        .see-all {
          color: white;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
        }
      }
      .list {
        .list-item {
          margin-bottom: 20px;
          .creator-name {
            margin-left: 15px;
            color: $dark-font-color;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
          }
          .follow-btn {
            margin-left: 50px;
          }
          .avatar {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
