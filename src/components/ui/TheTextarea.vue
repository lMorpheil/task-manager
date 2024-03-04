<script>
export default {
  name: "TheTextarea",
  props: {
    value: String,
  },
  methods: {
    onInput(ev) {
      this.$emit('update:value', ev.target.value)
    }
  },
}
</script>

<template>
  <label class="label">
    <span class="title"><slot></slot></span>
    <textarea class="textarea" :value="value" @input="onInput"></textarea>
  </label>
</template>

<style scoped lang="scss">
  .label {
    display: block;

    &.error {

      .textarea {
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

  .textarea {
    display: block;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 200px;
    resize: none;
  }
</style>
