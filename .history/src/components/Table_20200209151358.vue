<template>
  <div>
    <el-table
      :data="table.tableData"
      border
      :header-cell-style="{background:'#F6F6F6',color:'#333333'}"
      :row-style="{height:'40px'}"
      :cell-style="{padding:'0'}"
    >
      <el-table-column
        :width="width"
        v-for="(item,i) in table.list"
        :key="i"
        :prop="item.key"
        :label="item.name"
        align="center"
        :show-overflow-tooltip="true"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
    },
    total: {
      type: Number
    },
    currentPage4: {
      type: Number
    },
    name: {
      type: String
    },
    width: {
      type: Number
    },
  },
  data () {
    return {
      currentPage4: 1,
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>