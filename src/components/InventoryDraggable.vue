<template>
  <div :style="`height: ${height}px`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    group: String,
    layout: Array,
    height: Number
  },

  components: {},

  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
.inventory {
  &-draggable {
    width: 100%;
    overflow-y: auto;
  }
}
</style>
