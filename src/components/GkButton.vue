<template>
  <button 
    @click="onClick"
    class="gk-button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables/colors.scss";

.gk-button {
  background-color: $vue-green;
  border: 0;
  border-radius: 3px;
  color: $white;
  display: block;
  font-size: 14px;
  margin: 0 auto;
  padding: 13px;
}
</style>
