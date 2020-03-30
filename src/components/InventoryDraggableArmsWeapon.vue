<template>
  <div class="inventory-arms-weapon">
    <Frame>
      <span
        :draggable="draggable"
        :class="{ 'disabled': !draggable }"
        @dragstart="$emit('dragstart', options, $event)"
        @drop="$emit('drop', options, $event)"
        @dragover.prevent
      >
        <slot></slot>
      </span>
    </Frame>
  </div>
</template>

<script>
import Frame from "./Frame";

export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Frame
  },

  computed: {
    options() {
      return {
        groupName: this.$parent.groupName,
        lists: this.$parent.lists,
        index: this.index
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.inventory {
  &-arms-weapon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .disabled {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
