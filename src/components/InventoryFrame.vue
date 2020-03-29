<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InventoryFrame",
  props: ["x", "y", "w", "h", "i"],

  components: {}
};
</script>

<style lang="scss" scoped>
.inventory {
  &-frame {
    border: 1px solid #000000;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 85px;
  }
}
</style>
