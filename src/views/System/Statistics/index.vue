<template>
  <div>
    <div class="system">
      <div class="systemSearch">
        <div style="vertical-align: middle;padding-right:10px">系统名称:</div>
        <el-input style="width:65%" type="text" size="small" placeholder="请输入"></el-input>
      </div>
      <div class="systemSearch">
        <div style="vertical-align: middle;padding-right:10px">系统名称:</div>
        <el-input style="width:65%" type="text" size="small" placeholder="请输入"></el-input>
      </div>
      <div class="systemSearch">
        <div style="vertical-align: middle;padding-right:10px">系统联系人:</div>
        <el-input style="width:57%" type="text" size="small" placeholder="请输入"></el-input>
      </div>
      <div class="systemSearch">
        <div style="vertical-align: middle;padding-right:10px">系统名称:</div>
        <el-input style="width:65%" type="text" size="small" placeholder="请输入"></el-input>
      </div>
      <div class="systemSearchDate">
        <div style="vertical-align: middle;padding-right:10px">上链时间:</div>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small"
        ></el-date-picker>
      </div>
      <div class="systemSearch systemBtn">
        <el-button class="systemInquire" type="primary" size="small">查询</el-button>
        <el-button class="systemExport" type="primary" size="small">导出Excel</el-button>
        <el-button class="systemAdd" type="primary" size="small">新增</el-button>
      </div>
    </div>
    <Table
      class="systemTable"
      :table="table"
      :width="table.width"
      @handleBtnClick="handleAction"
      :btnList="table.btnList"
    >
      <div slot="apply" slot-scope="{ row, index }">
        <el-button @click="handleCancel(row, index)" type="text" size="small">管理</el-button>
        <el-button @click="handleCancel(row, index)" type="text" size="small">查看详情</el-button>
      </div>
    </Table>
  </div>
</template>

<script>
import Table from '../../../components/Table'
export default {
  components: {
    Table
  },
  data () {
    return {
      table: {
        list: [
          {
            name: '序号',
            key: 'index',
            width: '50%',
          },
          {
            name: '操作',
            slot: 'apply',
            // width: '50%'
          },
          {
            name: '系统名称',
            key: 'name',
            // width: '138%',
          },
          {
            name: '机构名称',
            key: 'agency',
            width: '110%',
          },
          {
            name: '用户名',
            key: 'user',
            width: '110%',
          },
          {
            name: "操作人",
            key: 'operator',
            width: '110%',
          },
          {
            name: "操作类型",
            key: 'type',
            width: '110%',
          },
          {
            name: "交易ID",
            key: 'transaction',
            width: '110%',
          },
          {
            name: "区块编号",
            key: 'serial',
            width: '110%',
          },
          {
            name:'数据状态',
            key:'datastatus',
            width:'110%'
          },
          {
            name: "上链时间",
            key: 'date',
            width: '110%',
          },
        ],
        width: '100%',
        decide: false,
        tableData: [
          {
            index: 1,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 2,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 3,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 4,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 5,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 6,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 7,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 8,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 9,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 10,
            name: '测试',
            agency: 12,
            user: 21,
            operator: 100,
            type: '在业',
            transaction: '李某',
            serial: '122190187144',
            date: '2020-02-12'
          }
        ],
      },
      date:''
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleCancel () {
      console.log(1)
    },
    handleAction ({ row, index, name }) {
      this[name](row, index)
    },
    Look (row, index) {
      console.log(row, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.system {
  margin-top: 15px;
  margin-bottom: 15px;
  div {
    display: inline-block;
  }
  .systemSearch {
    width: 18%;
    padding-left: 15px;
  }
  .systemSearchDate{
    width: 100%;
  }
  .systemSearch.systemBtn {
    padding-left: 8px;
    .systemInquire,
    .systemExport,
    .systemAdd {
      // width: 75px;
      background: rgba(79, 112, 200, 1);
      border-radius: 2px;
      border: 1px solid rgba(79, 112, 200, 1);
      border-radius: 2px;
    }
    .el-button--small,
    .el-button--small.is-round {
      padding: 9px 10px;
    }
    .el-button + .el-button {
      margin-left: 8px;
    }
  }
}
.systemTable {
  padding: 0 15px;
}
</style>
