<script>
import Button from "@/components/ui/TheButton.vue";

export default {
  name: "TaskItem",
  components: {Button},
  emits: ['taskDelete'],
  props: {
    title: {
      type: String,
      default: "Заголовок",
    },
    text: {
      type: String,
      default: "Задача"
    },
    id: Number,
  },
  methods: {
    taskDelete(ev) {
      this.$emit('taskDelete', this.id)
    }
  }
}
</script>

<template>
  <div class="task">
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
    <div class="btn-block">
      <Button @click="taskDelete">
        <span>Удалить</span>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task {
  color: #fff;
  background-color: #b1c909;
  border-radius: 10px;
  overflow: hidden;
}

.title {
  padding: 10px;
  border-bottom: 1px solid #fff;
}

.text {
  padding: 10px;
  border-bottom: 1px solid #fff;
}

.btn-block {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  background-color: #b1c909;
}
</style>
