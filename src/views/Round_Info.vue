<template>
  <div class="about">
    <span class="demonstration">日付：</span>
    <el-date-picker v-model="round_date" type="date" placeholder="日付選択"></el-date-picker>
    コース名：
    <el-input placeholder="コース名" v-model="course_name"></el-input>
    <el-button>
      ラウンド開始
    </el-button>
  </div>
</template>
