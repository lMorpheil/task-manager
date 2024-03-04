<script>
import { mapGetters } from "vuex";
import Tasks from "@/components/Tasks.vue";
import Header from "@/components/Header.vue";
export default {
  name: 'TaskView',
  components: { Header, Tasks },
  computed: {
    ...mapGetters(['tasks'])
  },
}
</script>

<template>
  <Header />
  <Tasks :tasks="tasks" />
</template>

<style lang="scss" scoped>

</style>
