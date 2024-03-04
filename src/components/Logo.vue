<script>
export default {
  name: "Logo",
  computed: {
    isMainPage() {
      return this.$route.path === '/';
    }
  }
}
</script>

<template>
  <div class="logo" v-if="isMainPage">
    <img src="@/assets/image/logo.svg" alt="логотип">
  </div>
  <router-link class="logo" to="/" v-else>
    <img src="@/assets/image/logo.svg" alt="логотип">
  </router-link>
</template>

<style scoped>
  .logo {

    @media screen and (max-width: 510px){
      max-width: 136px;
    }

    img {
      display: block;
      max-width: 100%;
    }
  }
</style>
