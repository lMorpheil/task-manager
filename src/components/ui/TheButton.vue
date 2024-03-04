<script>
export default {
  name: "TheButton",
}
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
  .btn {
    border-radius: 20px;
    border: none;
    color: #fff;
    padding: 5px 10px;
    background-color: #819400;
    cursor: pointer;
  }
</style>
