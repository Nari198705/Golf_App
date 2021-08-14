<template>
  <p>
    ~~コース
    8/12
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="1"
      label="1"
      width="40">
    </el-table-column>
    <el-table-column
      prop="2"
      label="2"
      width="40">
    </el-table-column>
    <el-table-column
      prop="3"
      label="3"
      width="40">
    </el-table-column>
    <el-table-column
      prop="4"
      label="4"
      width="40">
    </el-table-column>
    <el-table-column
      prop="5"
      label="5"
      width="40">
    </el-table-column>
    <el-table-column
      prop="6"
      label="6"
      width="40">
    </el-table-column>
    <el-table-column
      prop="7"
      label="7"
      width="40">
    </el-table-column>
    <el-table-column
      prop="8"
      label="8"
      width="40">
    </el-table-column>
    <el-table-column
      prop="9"
      label="9"
      width="40">
    </el-table-column>
    <el-table-column
      prop="10"
      label="10"
      width="40">
    </el-table-column>
    <el-table-column
      prop="11"
      label="11"
      width="40">
    </el-table-column>
    <el-table-column
      prop="12"
      label="12"
      width="40">
    </el-table-column>
    <el-table-column
      prop="13"
      label="13"
      width="40">
    </el-table-column>
    <el-table-column
      prop="14"
      label="14"
      width="40">
    </el-table-column>
    <el-table-column
      prop="15"
      label="15"
      width="40">
    </el-table-column>
    <el-table-column
      prop="16"
      label="16"
      width="40">
    </el-table-column>
    <el-table-column
      prop="17"
      label="17"
      width="40">
    </el-table-column>
    <el-table-column
      prop="18"
      label="18"
      width="40">
    </el-table-column>
    <el-table-column
      prop="Gross"
      label="Gross"
      width="40">
    </el-table-column>
    </el-table>
  </p>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          1: 5,
          2: 4,
          3: 5,
          4: 4,
          5: 5,
          6: 4,
          7: 5,
          8: 4,
          9: 5,
          10: 4,
          11: 5,
          12: 4,
          13: 5,
          14: 4,
          15: 5,
          16: 4,
          17: 5,
          18: 4,
          Gross: 4
        }, 
        {
          1: 5,
          2: 4,
          3: 5,
          4: 4,
          5: 5,
          6: 4,
          7: 5,
          8: 4,
          9: 5,
          10: 4,
          11: 5,
          12: 4,
          13: 5,
          14: 4,
          15: 5,
          16: 4,
          17: 5,
          18: 4,
          Gross: 4
        }]
      }
    }
    //<el-table_row>
      //per score pat数 ※点数が1以下のショットある場合は赤セルで
  }
</script>