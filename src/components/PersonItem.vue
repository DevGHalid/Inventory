<template>
  <div
    class="person-circle"
    :class="{ 'active': options.lists.length }"
    :draggable="draggable"
    @dragstart="$emit('dragstart', options, $event)"
    @drop="$emit('drop', options, $event)"
    @dragover.prevent
  >
    <div class="person-inner-circle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
.person {
  &-circle {
    height: 60px;
    width: 60px;
    background-color: rgba(#fff, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.2s;
    cursor: pointer;
    position: absolute;
  }

  &-circle.active {
    background-color: rgba(#d03231, 0.45);

    .person-inner-circle {
      background-color: #d03231;
    }
  }

  &-inner-circle {
    background-color: rgba(#fff, 0.45);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>