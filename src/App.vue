<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        ユーザー名：<el-input
          placeholder="Please input"
          v-model="input"
        ></el-input>
        パスワード：<el-input
          placeholder="Please input"
          v-model="input"
        ></el-input>
      </p>
      <el-button>ログイン</el-button>
    </div>
    <router-link to="/Round_Info">Round_Info</router-link> |
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
  },
};
</script>

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
