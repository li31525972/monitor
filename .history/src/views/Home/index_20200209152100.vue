<template>
  <div>
    <!-- 首页 -->
    <PanelGroup :form="form"/>
    <div>
      <Table :table="table" :width="table.width"/>
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
            key: 'create_time'
          },
          {
            name: '系统名称',
            key: 'pv'
          },
          {
            name: '机构数量',
            key: 'name'
          },
          {
            name: '用户数量',
            key: 'author'
          },
          {
            name: "活跃度",
            key: 'depict'
          },
        ],
        width:'100%',
        decide:false
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

  }
}
</script>

<style lang="scss" scoped>
</style>
