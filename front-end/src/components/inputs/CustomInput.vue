<template>
  <!-- <div class="a-textInput"> -->
  <input
    class="a-textInput__element"
    :placeholder="placeholder"
    name="username"
    :type="inputType"
    @input="handleInput($event.target.value)"
    :value="value"
  />

  <!-- <div class="a-textInput__placeholder">{{ placeholder }}</div> -->
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: false,
      default: "text"
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/inputs/_input.scss";
</style>
