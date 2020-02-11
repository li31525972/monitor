<template>
  <div class="mon-wrap">
    <div class="mon-wrap-header">
      <span>系统使用监控与可信登录管理平台</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="headleRevise">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="headleEsc">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="mon-wrap-container">
      <Aside/>
      <div class="mon-wrap-content">
        <Tags></Tags>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from './components/aside'
import Tags from './components/tags'

export default {
  components: {
    Aside,
    Tags,
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {

  },
  methods: {
    headleEsc () {
      console.log(1)
      this.$router.push({ name: 'login' })
      window.sessionStorage.clear();
      window.localStorage.clear();
    },
    headleRevise(){
      this.$router.push({ name: 'core' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/var.scss";

.mon-wrap {
  height: 100%;
  overflow: hidden;
}

.mon-wrap-header {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: $theme;
  font-size: 18px;

  span {
    margin-left: 20px;
    color: #fff;
  }

  .el-dropdown {
    float: right;
    margin-right: 20px;
  }
}

.mon-wrap-container {
  height: calc(100% - 80px);
  padding-top: 80px;
  display: flex;
  .mon-wrap-content {
    flex: 1;
    overflow: auto;
    background: #f8f8f8;
  }
}
</style>
