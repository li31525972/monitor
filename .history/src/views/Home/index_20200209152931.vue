<template>
  <div>
    <!-- 首页 -->
    <PanelGroup :form="form"/>
    <div>
      <Table :table="table" :width="table.width">
        <div slot="apply">
          <el-table-column align="center" label="使用情况" width="100">
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
            key: 'index'
          },
          {
            name: '系统名称',
            key: 'name'
          },
          {
            name: '机构数量',
            key: 'institutionsNum'
          },
          {
            name: '用户数量',
            key: 'uerNum'
          },
          {
            name: "活跃度",
            key: 'activity'
          },
        ],
        width: '100%',
        decide: false,
        tableData: [
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

<style lang="scss" scoped>
</style>
