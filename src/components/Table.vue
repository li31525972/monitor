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
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="(item,i) in table.list"
        v-if="!item.slot"
        :width="item.width"
        :key="i"
        :prop="item.key"
        :label="item.name"
        :align="item.align || 'center'"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column 
        :label="item.name"
        :align="item.align || 'center'" 
        :width="item.width"
        v-else-if="item.slot">
        <template slot-scope="scope">
          <slot :name="item.slot" :index="scope.$index" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align=center
        v-if="btnList.length"
      >
        <template slot-scope="{ row, $index }">
          <div>
            <el-button
                  v-for="btn in btnList"
                  :key="btn.name"
                  @click="handleBtnClick(row, $index, btn.method)" 
                  type="text" 
                  size="small">{{ btn.name }}</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
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
    },
    btnList: {
      type: Array,
      default: () => []
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
    },
    // 点击表格按钮
    handleBtnClick(row, index, name) {
      this.$emit('handleBtnClick', { row, index, name })
    }
  },
}
</script>