<template>
  <div class="person-draggable" :class="className">
    <slot></slot>
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
      type: Array,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  }
};
</script>