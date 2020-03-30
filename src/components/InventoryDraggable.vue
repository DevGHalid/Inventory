<template>
  <div class="inventory-draggable" :style="`height: ${height}px`">
    <div class="inventory-draggable-content" :style="`grid-template-columns: repeat(${cols}, 1fr)`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupName: {
      type: String,
      required: true
    },
    lists: {
      type: Array
    },
    cols: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.inventory {
  &-draggable {
    width: 100%;
    overflow-y: auto;
    padding-left: 10px;
    padding-right: 10px;

    &-content {
      display: grid;
      grid-gap: 1.2px;
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
