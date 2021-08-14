<template>
  <div class="home">
    <p>
      ユーザー名：
      <el-input
        placeholder="ユーザー名"
        v-model="user_name"
      ></el-input>
      パスワード：
      <el-input
        placeholder="パスワード"
        v-model="passsword"
      ></el-input>
    </p>
    <el-button>ログイン</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      user_name: "",
      passsword: "",
    };
  },
  /*async created(){
    if (user_name == )

  <div v-if = 'user_name === ""'>
  or
  <div v-if = 'user_name !== ""'>
  or
  <div v-if = "user_name">
  }
  */
};
</script>
