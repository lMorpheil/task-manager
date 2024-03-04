<script>
export default {
  name: "TheInput",
  props: {
    value: String,
  },
  emits: ['update:value'],
  methods: {
    onInput(ev) {
      this.$emit('update:value', ev.target.value);
    }
  }
}
</script>

<template>
  <label class="label">
    <span class="title"><slot></slot></span>
    <input class="input" type="text" :value="value" @input="onInput">
  </label>
</template>

<style scoped lang="scss">
  .label {
    display: block;

    &.error {

      .input {
        border: 2px solid red;
        animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
      }
    }
  }

  .title {
    display: block;
    color: #fff;
    margin-bottom: 15px;
  }

  .input {
    display: block;
    height: 30px;
    border-radius: 5px;
    border: none;
    width: 100%;
  }
</style>
