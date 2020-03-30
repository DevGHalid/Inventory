<template>
  <div class="person">
    <div class="person-content" :style="`height: ${height}px`">
      <div class="person-img">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.person {
  &-content {
    margin-top: 70px;
    margin-bottom: 40px;
  }

  &-img {
    background-image: url(../assets/boy.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
