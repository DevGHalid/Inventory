<template>
  <div :style="`height: ${height}px`">1</div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number
    }
  }
};
</script>

<style scoped></style>
