<template>
  <div>
    <el-row :gutter="-15" class="system">
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3">
        <div style="vertical-align: middle;padding-right:10px;display: inline-block;">系统名称:</div>
        <el-input
          style="width:65%;display: inline-block;"
          type="text"
          size="small"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3">
        <div style="vertical-align: middle;padding-right:10px;display: inline-block;">机构名称:</div>
        <el-input
          style="width:65%;display: inline-block;"
          type="text"
          size="small"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3">
        <div style="vertical-align: middle;padding-right:10px;display: inline-block;">机构状态:</div>
        <el-input
          style="width:57%;display: inline-block;"
          type="text"
          size="small"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="4">
        <div style="vertical-align: middle;padding-right:10px;display: inline-block;">联系电话:</div>
        <el-input
          style="width:57%;display: inline-block;"
          type="text"
          size="small"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3" class="systemBtn">
        <el-button class="systemInquire" type="primary" size="small">查询</el-button>
        <el-button class="systemExport" type="primary" size="small">导出Excel</el-button>
        <el-button class="systemAdd" type="primary" size="small">新增</el-button>
      </el-col>
      <!-- <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3">
        <div style="vertical-align: middle;padding-right:10px">系统名称:</div>
        <el-input style="width:65%" type="text" size="small" placeholder="请输入"></el-input>
      </el-col>-->
    </el-row>
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
            width: '150%'
          },
          {
            name: '系统名称',
            key: 'name',
            // width: '138%',
          },
          {
            name: '系统代码',
            key: 'code',
            width: '110%',
          },
          {
            name: '机构名称',
            key: 'authorize',
            width: '110%',
          },
          {
            name: "机构代码",
            key: 'expirationDate',
            width: '110%',
          },
          {
            name: "上级机构",
            key: 'status',
            width: '110%',
          },
          {
            name: "机构有效期",
            key: 'person',
            width: '110%',
          },
          {
            name: "状态",
            key: 'phone',
            width: '110%',
          },
          {
            name: "机构联系人",
            key: 'date',
            width: '110%',
          },
          {
            name: "联系电话",
            key: 'date',
            width: '110%',
          },
          {
            name: "操作人",
            key: 'date',
            width: '110%',
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
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 2,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 3,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 4,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 5,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 6,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 7,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 8,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 9,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          },
          {
            index: 10,
            name: '测试',
            code: 12,
            authorize: 21,
            expirationDate: 100,
            status: '在业',
            person: '李某',
            phone: '122190187144',
            date: '2020-02-12'
          }
        ],
      }
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
  margin-left: 15px;
  div {
    display: inline-block;
  }
  .systemSearch {
    width: 18%;
    padding-left: 15px;
  }
  .systemBtn {
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
