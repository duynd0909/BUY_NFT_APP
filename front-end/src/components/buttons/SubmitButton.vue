<template>
  <button @click="click" class="a-submitButton" :class="classes">
    <img v-if="icon" class="icon mr-7px" :src="iconSource" />
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "warning",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "warning"].includes(value);
      },
    },
    size: {
      type: String,
      required: false,
      default: "full-width",
      validator: function (value) {
        // The value must match one of these strings
        return ["small", "normal", "full-width"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      required: false,
    },
  },
  computed: {
    classes() {
      return {
        [this.type]: true,
        [this.size]: true,
      };
    },
    iconSource() {
      return this.icon && require(`../../assets/img/${this.icon}.png`);
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/components/buttons/_submitButton.scss";
</style>
