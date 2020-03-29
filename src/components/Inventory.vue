<template>
  <div class="inventory-container">
    <div class="inventory-title">
      <slot name="title"></slot>
    </div>
    <div class="inventory-content">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inventory {
  &-container {
    padding: 35px 15px;
  }

  &-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    position: relative;
    margin-bottom: 20px;
    padding-left: 10px;

    &::before {
      content: "";
      height: 30px;
      width: 3px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: -15px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}
</style>
