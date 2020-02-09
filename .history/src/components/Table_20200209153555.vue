<template>
  <div>
    <el-table
      :data="table.tableData"
      border
      :header-cell-style="{background:'rgba(242,246,255,1)',color:'#333333'}"
      :row-style="{height:'40px'}"
      :cell-style="{padding:'0'}"
    >
      <el-table-column
        v-for="(item,i) in table.list"
        :width="item.width"
        :key="i"
        :prop="item.key"
        :label="item.name"
        align="center"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <slot name="apply"></slot>
    </el-table>
    <el-pagination
      v-if="decide"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
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
    currentPage: {
      type: Number,
      default:1,
    },
    name: {
      type: String
    },
    width: {
      type: Number
    },
    decide:{
      type:Boolean,
    }
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