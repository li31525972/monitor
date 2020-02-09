<template>
  <div class="f_data">
    <div class="access">
      <div>
        {{form.Numhome}}
        <span>家</span>
      </div>
      <div>接入系统数量</div>
    </div>
    <div class="check">
      <div>{{form.Check}}<span>家</span></div>
      <div>入住机构数量</div>
    </div>
    <div class="user">
      <div>{{form.User}}<span>人</span></div>
      <div>用户总数</div>
    </div>
    <div class="average">
      <div>{{form.average}}<span>条</span></div>
      <div>日均数据上链数</div>
    </div>
    <div class="total">
      <div>{{form.totalData}}<span>条</span></div>
      <div>链上总数据</div>
    </div>
    <div class="day">
      <div>{{form.day}}<span>次/天</span></div>
      <div>日均机构登录次数</div>
    </div>
    <div class="hour">
      <div>{{form.hour}}<span>小时/周</span></div>
      <div>周均机构使用时长</div>
    </div>
    <div class="area">
      <div>{{form.province}}<span>个省份</span>{{form.city}}<span>个市区</span>{{form.county}}<span>个县区</span></div>
      <div>服务地区</div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  props: {
    form: {
      Type: Object,
      default: () => []
    }
  },
}
</script>

<style lang='scss' scope>
$box-heigth: 83px;
$box-width: 10%;
$box-marginLeft: 15px;
$box-marginRight: 15px;
.f_data {
  width: 100%;
  padding-top: 19px;
  padding-bottom: 20px;
  background: #fff;
  .access,
  .check,
  .user,
  .average,
  .total,
  .day,
  .hour,
  .area {
    height: $box-heigth;
    border-radius: 8px;
    width: $box-width;
    display: inline-block;
    margin-right: $box-marginRight;
    vertical-align: top;
    color: #fff;
    font-size: 12px;
    div:first-child {
      margin-top: 23px;
      margin-left: 15px;
      font-size: 23px;
      span {
        font-size: 12px;
      }
    }
    div:last-child {
      margin-left: 15px;
      margin-top: 17px;
    }
  }
  .access {
    margin-left: $box-marginLeft;
    background: linear-gradient(
      270deg,
      rgba(108, 141, 227, 1),
      rgba(79, 112, 200, 1)
    );
  }
  .check {
    background: linear-gradient(
      270deg,
      rgba(242, 144, 97, 1),
      rgba(239, 86, 87, 1)
    );
  }
  .user {
    background: linear-gradient(
      270deg,
      rgba(242, 144, 97, 1),
      rgba(239, 86, 87, 1)
    );
  }
  .average {
    background: linear-gradient(
      270deg,
      rgba(111, 166, 250, 1),
      rgba(91, 134, 255, 1)
    );
  }
  .total {
    background: linear-gradient(
      270deg,
      rgba(238, 176, 57, 1),
      rgba(239, 149, 68, 1)
    );
  }
  .day {
    background: linear-gradient(
      270deg,
      rgba(243, 111, 232, 1),
      rgba(224, 98, 172, 1)
    );
  }
  .hour {
    background: linear-gradient(
      270deg,
      rgba(33, 202, 188, 1),
      rgba(23, 175, 219, 1)
    );
  }
  .area {
    width: 19%;
    background: linear-gradient(
      270deg,
      rgba(108, 141, 227, 1),
      rgba(79, 112, 200, 1)
    );
  }
}
</style>

