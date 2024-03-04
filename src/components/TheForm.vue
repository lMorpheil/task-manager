<script>
export default {
  name: "TheForm"
}
</script>

<template>
  <form class="form">
    <div class="row">
      <div class="grid">
        <slot></slot>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
  :slotted(*:not(:first-child)) {
    margin-top: 30px;
  }
</style>
