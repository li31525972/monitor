<template>
  <div>
    <!-- 首页 -->
    <PanelGroup :form="form"/>
    <div
      style="width:49%;margin-top:8px;background: #fff;
    border: 1px solid transparent;display:inline-block;"
    >
      <div style="padding:20px;padding-left:30px;">
        <div style="margin-bottom:15px;">
          系统名称:
          <el-input type="text" placeholder="请输入系统名称" style="display:inline-block;width:25%"></el-input>
          <el-button type="primary" style="margin-left:20px;">查询</el-button>
        </div>
        <Table :table="table" :width="table.width">
          <div slot="selection">
            <el-table-column type="selection" align="center" width="40"></el-table-column>
          </div>
          <div slot="apply">
            <el-table-column fixed="right" align="center" label="使用情况" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleCancel(scope.row,scope.$index,keep.tableData)"
                  type="text"
                  size="small"
                >查看</el-button>
              </template>
            </el-table-column>
          </div>
        </Table>
      </div>
    </div>
    <div
      style="width:49%;margin-top:8px;margin-left:10px;background: #fff;
    border: 1px solid transparent;display:inline-block;"
    >
      <div style="padding:20px;padding-left:0px;">
        <Table :table="table" :width="table.width">
          <div slot="apply">
            <el-table-column fixed="right" align="center" label="使用情况" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleCancel(scope.row,scope.$index,keep.tableData)"
                  type="text"
                  size="small"
                >查看</el-button>
              </template>
            </el-table-column>
          </div>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Table from '../../components/Table'
export default {
  components: {
    PanelGroup,
    Table
  },
  data () {
    return {
      form: {
        Numhome: 5,
        Check: 10,
        User: 15,
        average: 100,
        totalData: 500,
        day: 2,
        hour: 10,
        province: 20,
        city: 19,
        county: 200,
      },
      table: {
        list: [
          {
            name: '序号',
            key: 'index',
            width: '50%'
          },
          {
            name: '系统名称',
            key: 'name',
            width: '150%'
          },
          {
            name: '机构数量',
            key: 'institutionsNum',
            width: '80%'
          },
          {
            name: '用户数量',
            key: 'uerNum',
            width: '80%'
          },
          {
            name: "活跃度",
            key: 'activity',
            width: '80%'
          },
        ],
        // width: '93%',
        decide: false,
        tableData: [
          {
            index: 1,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 1,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 1,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          }
        ]
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
    }
  }
}
</script>

<style>
.el-table_9_column_50.el-table-column--selection{
    border-right: none;
}
</style>

<style lang="scss" scoped>
</style>
