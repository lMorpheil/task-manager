<script>
  export default {
    name: 'first-screen',
  }
</script>

<template>
  <section class="first-screen">
      <div class="row">
        <div class="grid">
          <div class="title">
            <h1>Список задач</h1>
          </div>
          <div class="img">
            <img src="@/assets/image/main-img.svg" alt="картинка первого экрана">
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
  .first-screen {
    height: calc(100vh - 136px);

    .row {
      height: 100%;
    }
  }
  .grid {
    display: flex;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
  }

  .title {
    flex: 1 0 30%;
    white-space: nowrap;
  }

  .img {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex: 1 0 70%;


    img {
      display: block;
      margin-top: auto;
      width: auto;
      max-width: 100%;
      height: calc(100vh - 136px);

      @media screen and (max-width: 1300px) {
        height: calc(100vh - 201px);
      }

      @media screen and (max-width: 1300px) {
        max-height: calc(100vh - 201px);
        height: auto;
        width: 100%;
      }
    }
  }
</style>
