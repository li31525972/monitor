<template>
  <div>
    <!-- 首页 -->
    <PanelGroup :form="form"/>
    <div class="homeTable">
      <div class="tableContent">
        <div class="tableSearch">
          <div style="display: inline-block; vertical-align: middle;padding-right:10px;">系统名称:</div>
          <el-input
            type="text"
            size="small"
            placeholder="请输入系统名称"
            style="display:inline-block;width:25%"
          ></el-input>
          <el-button type="primary" class="tabelInquire" size="small" style="margin-left:20px;">查询</el-button>
        </div>
        <Table
          :table="table"
          :width="table.width"
          @handleBtnClick="handleAction"
          :btnList="table.btnList"
        >
          <!-- <div slot="apply" slot-scope="{ row, index }">
            <el-button @click="handleCancel(row, index)" type="text" size="small">查看</el-button>
          </div>-->
        </Table>
      </div>
    </div>
    <div class="homeChart">
      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
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
            width: '50%',
          },
          // {
          //   name: '操作',
          //   slot: 'apply',
          //   width: '50%'
          // },
          {
            name: '系统名称',
            key: 'name',
            // width: '138%',
          },
          {
            name: '机构数量',
            key: 'institutionsNum',
            width: '77%',
          },
          {
            name: '用户数量',
            key: 'uerNum',
            width: '77%',
          },
          {
            name: "活跃度",
            key: 'activity',
            width: '77%',
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
          },
          {
            index: 2,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 3,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 4,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 5,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 6,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 7,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 8,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 9,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          },
          {
            index: 10,
            name: '测试',
            institutionsNum: 12,
            uerNum: 21,
            activity: 100
          }
        ],
        btnList: [
          {
            name: '查看',
            method: 'Look',
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
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        color: ['#BFD0FF'],
        title: { text: '' },
        tooltip: {},
        grid: {
          containLabel: true
        },
        xAxis: {
          data: ["廊坊市教育局系统", "廊坊市教育局系统", "廊坊市教育局系统", "廊坊市教育局系统", "廊坊市教育局系统", "廊坊市教育局系统", '廊坊市教育局系统', '廊坊市教育局系统', '廊坊市教育局系统', '廊坊市教育局系统'],
          name: '系统',
          axisTick: {    // 坐标轴 刻度
            show: false,  // 是否显示
          },
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              var ret = "";//拼接加\n返回的类目项  
              var maxLength = 1;//每项显示文字个数  
              var valLength = value.length;//X轴类目项的文字个数  
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
              if (rowN > 1)//如果类目项的文字大于3,  
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = "";//每次截取的字符串  
                  var start = i * maxLength;//开始截取的位置  
                  var end = start + maxLength;//结束截取的位置  
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串  
                }
                return ret;
              }
              else {
                return value;
              }
            }
          }
        },
        yAxis: {
          name: '活跃度(%)'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    },
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

<style>
.el-table_10_column_64.is-center.el-table-column--selection {
  border-right: none;
}
</style>

<style lang="scss" scoped>
.homeTable {
  width: 49%;
  margin-top: 8px;
  background: #fff;
  border: 1px solid transparent;
  display: inline-block;
  height: 546px;
  .tableContent {
    padding: 20px;
    padding-left: 30px;
    .tableSearch {
      margin-bottom: 15px;
      .tabelInquire {
        width: 75px;
        background: rgba(79, 112, 200, 1);
        border-radius: 2px;
        border: 1px solid rgba(79, 112, 200, 1);
        border-radius: 2px;
      }
    }
  }
}
.homeChart {
  width: 49%;
  margin-top: 8px;
  margin-left: 10px;
  background: #fff;
  border: 1px solid transparent;
  display: inline-block;
  height: 546px;
  vertical-align: top;
  #myChart {
    padding-top: 84px;
  }
}
</style>
