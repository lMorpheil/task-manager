<template>
  <router-view/>
</template>

<style>
  body {
    background-color: #0a1f38;
  }
  .row {
    max-width: 1600px;
    padding-right: 160px;
    padding-left: 160px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: content-box;

    @media screen and (max-width: 1548px) {
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  h1 {
    font-size: 65px;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 510px) {
      font-size: 30px;
    }
  }

  h2 {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }

  @keyframes shake {
    10%, 90% {
      margin-left: -1px;
    }

    20%, 80% {
      margin-left: 2px;
    }

    30%, 50%, 70% {
      margin-left: -4px;
    }

    40%, 60% {
      margin-left: 4px;
    }
  }
</style>
