<template>
  <div class="m-loginForm">
    <Header :title="title" />

    <div class="m-loginForm__group">
      <custom-input v-model="username" placeholder="Username" />
    </div>

    <div class="m-loginForm__group">
      <custom-input
        v-model="password"
        placeholder="Password"
        inputType="password"
      />
    </div>

    <!-- <div class="m-loginForm__group -mg-lg">
      <div class="m-loginForm__rememberWrapper">
        <custom-checkbox
          name="remember_me"
          id="remember_me"
          labelText="Remember Me 😉"
          checkbox="✔︎"
        ></custom-checkbox>

        <link-button href="#" linkText="Forgot Password">
          I forgot password 🤦🏻‍♂️
        </link-button>
      </div>
    </div> -->

    <!-- <div class="a-showCase">
      <custom-checkbox
        name="remember_me1"
        id="remember_me1"
        labelText="Remember Me - 1"
        checkbox="✔️"
        :checked="true"
      ></custom-checkbox>

      <custom-checkbox
        name="remember_me2"
        id="remember_me2"
        labelText="Remember Me - 2"
        checkbox="✓"
        :checked="true"
      ></custom-checkbox>

      <custom-checkbox
        name="remember_me3"
        id="remember_me3"
        labelText="Remember Me - 3"
        checkbox="✔︎"
        :checked="true"
      ></custom-checkbox>
    </div> -->

    <submit-button @click="onLogin">Login</submit-button>
  </div>
</template>

<script>
import Header from "../inputs/Header.vue";
import CustomInput from "../inputs/CustomInput.vue";
// import CustomCheckbox from "./inputs/CustomCheckbox.vue";
// import LinkButton from "./buttons/LinkButton.vue";
import SubmitButton from "../buttons/SubmitButton.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false
    };
  },
  components: {
    Header,
    CustomInput,
    // CustomCheckbox,
    // LinkButton,
    SubmitButton
  },
  props: {
    title: String
  },
  methods: {
    ...mapActions({
      processLogin: "user/processLogin"
    }),
    onLogin() {
      console.log(this.username);
      const loginForm = {
        username: this.username,
        password: this.password
      };
      this.processLogin(loginForm).then(() => {
        this.$emit("goToLogin")
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/forms/_loginForm.scss";
</style>
