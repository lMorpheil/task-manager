<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "Header",
  components: { Logo }
}
</script>

<template>
  <header class="header">
    <div class="row">
      <div class="grid">
        <Logo />
        <router-link class="link" to="/tasks">
          <span>Список задач</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #b1c909;
    border-radius: 32px;
    padding: 0 24px;
    width: 144px;
    height: 56px;
    cursor: pointer;

    @media screen and (max-width: 510px) {
      padding-right: 10px;
      padding-left: 10px;
      height: 44px;
    }

    &:hover {
      background-color: #819400;
    }

    &:active {
      background-color: #97ab0d;
    }
  }
</style>
