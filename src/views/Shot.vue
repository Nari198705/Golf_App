<template>
  <p>
    ~~ホール Per５
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="球筋" label="球筋" width="40"> </el-table-column>
      <el-table-column prop="点数" label="点数" width="40"> </el-table-column>
      <el-table-column prop="ライ" label="ライ" width="40"> </el-table-column>
      <el-table-column prop="落ちた位置" label="落ちた位置" width="40">
      </el-table-column>
      <el-table-column prop="使用クラブ" label="使用クラブ" width="40">
      </el-table-column>
      <el-table-column prop="推定距離" label="推定距離" width="40">
      </el-table-column>
    </el-table>
  </p>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          球筋: 5,
          点数: 4,
          ライ: 5,
          落ちた位置: 4,
          使用クラブ: 5,
          推定距離: 4,
        },
        {
          球筋: 5,
          点数: 4,
          ライ: 5,
          落ちた位置: 4,
          使用クラブ: 5,
          推定距離: 4,
        },
        {
          球筋: 5,
          点数: 4,
          ライ: 5,
          落ちた位置: 4,
          使用クラブ: 5,
          推定距離: 4,
        },
      ],
    };
  },
};
      //1打目
      //2打目
      //3打目
</script>
