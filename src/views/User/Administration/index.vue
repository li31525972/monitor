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
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3">
        <div style="vertical-align: middle;padding-right:10px;display: inline-block;">用户名:</div>
        <el-input
          style="width:65%;display: inline-block;"
          type="text"
          size="small"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="9" :xl="4">
        <div style="vertical-align: super;padding-right:10px;display: inline-block;">上链时间:</div>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small"
        ></el-date-picker>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="3" class="systemBtn">
        <el-button class="systemInquire" type="primary" size="small">查询</el-button>
        <el-button class="systemExport" type="primary" size="small">导出Excel</el-button>
        <el-button class="systemAdd" type="primary" size="small">新增</el-button>
      </el-col>
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
      </div>
    </Table>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
      <el-form :model="form">
        <el-row>
          <el-col :span="12">
            <el-form-item label="系统名称:" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="系统代码:" :label-width="formLabelWidth">
              <el-input v-model="form.agency" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构名称:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="机构代码:" :label-width="formLabelWidth">
              <el-input v-model="form.operator" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态:" :label-width="formLabelWidth">
              <el-input v-model="form.status" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上链时间:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="安全证书:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登录密码:" :label-width="formLabelWidth">
              <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="机构有效期:" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" class="date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="define" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="footerPagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      ></el-pagination>
    </div>
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
            width: '50%'
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
            name: "状态",
            key: 'status',
            width: '110%',
          },
          {
            name: "用户名",
            key: 'person',
            width: '110%',
          },
          {
            name: "上链时间",
            key: 'date',
            width: '110%',
          },
          {
            name: "安全证书",
            key: 'phone',
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
      },
      date: '',
      title:null,
      form:{},
      dialogVisible:false,
      formLabelWidth:'120px',
      currentPage4: 1
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
    handleCancel (row, index) {
      console.log(row, index)
      this.dialogVisible=true
      this.title='管理'
      this.form=row
    },
    handleAction ({ row, index, name }) {
      this[name](row, index)
    },
    Look (row, index) {
      console.log(row, index)
    },
    handleClose(){
      this.dialogVisible=false
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>


<style>
.el-range-editor--small .el-range-separator,
.el-range-editor--small .el-range-input {
  vertical-align: top;
}
</style>

<style lang="scss" scoped>
.system {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  div {
    display: inline-block;
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
.define {
  background: rgba(79, 112, 200, 1);
  border: 1px solid rgba(79, 112, 200, 1);
  width: 140px;
}
.footerPagination {
  height: 80px;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  padding-left: 15px;
  .el-pagination{
    margin-top:30px;
  }
}
</style>
