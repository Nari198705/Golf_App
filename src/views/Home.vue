<template>
  <div class="home">
    <p>
      ユーザー名：
      <el-input
        placeholder="ユーザー名"
        v-model="input"
      ></el-input>
      パスワード：
      <el-input
        placeholder="パスワード"
        v-model="input"
      ></el-input>
    </p>
    <el-button>ログイン</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
