<template>
  <div id="app">
    <img src="./assets/logo.png" />
    |
    <router-link to="/Round_Info">Round_Info</router-link> |
    <router-link to="/Result">Result</router-link> |
    <router-link to="/Shot">Shot</router-link> |
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
