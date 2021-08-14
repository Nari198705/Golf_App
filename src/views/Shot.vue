<template>
  <div class="editor">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<style>
textarea {
  width: 100%;
  height: 10em;
}
</style>

<script>
export default {
  name: "new",
  data: function() {
    return {
      memobody: "メモです。",
    };
  },
  methods: {
    save: function() {
      this.$store.commit("save", {
        id: 2,
        body: this.momobody,
      });
      this.$router.push("/");
    },
  },
};
</script>
