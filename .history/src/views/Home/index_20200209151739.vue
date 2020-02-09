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
            name: '上传时间',
            key: 'create_time'
          },
          {
            name: '观看次数',
            key: 'pv'
          },
          {
            name: '资源名称',
            key: 'name'
          },
          {
            name: '作者',
            key: 'author'
          },
          // {
          //   name: "描述",
          //   key: 'depict'
          // },
          {
            name: '积分',
            key: 'score'
          },
        ],
        width:'100%'
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
