<template>
  <div class="m-flexContainer">
    <div class="a-heroImage"></div>

    <div class="m-formContainer">
      <LoginForm :title="headerText" @goToLogin="goToLogin" />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/form/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      headerText: "Login to Continue",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style></style>
