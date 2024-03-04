<script>
import TaskItem from "@/components/TaskItem.vue";
import TheTextarea from "@/components/ui/TheTextarea.vue";
import TheInput from "@/components/ui/TheInput.vue";
import TheButton from "@/components/ui/TheButton.vue";
import TheForm from "@/components/TheForm.vue";
import {mapMutations} from "vuex";

export default {
  name: "Tasks",
  components: { TheInput, TheTextarea, TaskItem, TheForm, TheButton },
  props: {
    tasks: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      newTask: {
        title: '',
        text: '',
      },
      errors: {},
    }
  },
  methods: {
    ...mapMutations(['addTasks', 'deleteTask']),
    onSubmit() {
      this.errors = {};
      if (!this.newTask.title) {
        this.errors.title = 'Заголовок не может быть пустым';
      }

      if (!this.newTask.text) {
        this.errors.text = 'Введите описание задачи';
      }

      if (this.errors.title || this.errors.text) {
        return;
      }

      this.addTasks(this.newTask);
      this.newTask.title = '';
      this.newTask.text = '';
    },
    taskDelete(id) {
      this.deleteTask(id);
    }
  },
  created() {
    this.$store.dispatch('initializeStore');
  }
}
</script>

<template>
  <section class="tasks">
    <div class="row">
      <TheForm class="tasks-form" @submit.prevent="onSubmit">
        <h2>Добавить задачу</h2>
        <TheInput
            v-model:value.trim="newTask.title"
            :class="{error: errors.title}"
        >Введите заголовок:</TheInput>

        <TheTextarea
            v-model:value.trim="newTask.text"
            :class="{error: errors.text}"
        >Введите описание:</TheTextarea>
        <TheButton>
          <span>Добавить</span>
        </TheButton>
      </TheForm>
      <div class="grid">
        <TaskItem
            class="tasks-bottom"
            v-for="task in tasks"
            v-bind="task"
            :key="task.id"
            @taskDelete="taskDelete"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tasks {
  padding-top: 40px;
  padding-bottom: 40px;

  &-form {
    max-width: 800px;
  }

  &-bottom {
    margin-top: 30px;
  }
}

.grid {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  > * {
    flex: 0 0 calc(33% - 30px);
    margin-right: 15px;
    margin-left: 15px;
  }
}
</style>
