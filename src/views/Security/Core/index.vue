<template>
  <div>
    <div class="safety" v-if="user">
      <el-form :label-position="labelPosition" label-width="80px" :model="form">
        <el-form-item label="用户名:">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="原密码:">
          <el-input type="password" v-model="form.region" size="small"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="updata" size="small" @click="submit">提交</el-button>
    </div>
    <div class="safety" v-else>
      <el-form :label-position="labelPosition" label-width="100px" :model="form">
        <el-form-item label="新密码:">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:">
          <el-input type="password" v-model="form.region" size="small"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="updata" size="small" @click="define">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      labelPosition: 'right',
      user: true
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
    submit () {
      this.user = false
    },
    define () {
      this.user = true
      this.$router.push({ name: 'login' })
      window.sessionStorage.clear();
      window.localStorage.clear();
    }
  }
}
</script>

<style lang="scss" scoped>
.safety {
  width: 30%;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  .updata {
    width: 100px;
    background: rgba(79, 112, 200, 1);
    border-radius: 3px;
    border: 1px solid rgba(79, 112, 200, 1);
  }
}
</style>
