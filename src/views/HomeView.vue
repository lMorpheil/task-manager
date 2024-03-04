<template>
  <div class="display">
    <Header/>
    <FirstScreen class="push" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FirstScreen from "@/components/First-screen.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    FirstScreen
  }
}
</script>

<style lang="scss" scoped>
  .display {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .push {
    flex-grow: 1;
  }
</style>
