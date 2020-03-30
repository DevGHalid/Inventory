<template>
  <div class="inventory-frame" :style="`height: ${height}px`">
    <Frame>
      <div
        :draggable="draggable"
        :class="{ 'disabled': !draggable }"
        @dragstart="$emit('dragstart', options, $event)"
        @drop="$emit('drop', options, $event)"
        @dragover.prevent
      >
        <slot :props="{ options }"></slot>
      </div>
    </Frame>
  </div>
</template>

<script>
import Frame from "./Frame";

export default {
  props: {
    height: {
      type: Number,
      default: 0
    },
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
  &-frame {
    display: flex;
    justify-content: center;
    align-items: center;

    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(124, 118, 118, 0.45) 0%,
      rgba(84, 72, 72, 0.45) 100%
    );

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
