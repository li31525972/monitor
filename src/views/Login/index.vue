<template>
  <div class="login">
    <div class="header">
      <i class="icon-logo"></i>
      <span>系统使用监控与可信登录管理平台</span>
    </div>
    <div class="content">
      <div class="logo"></div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="form">
        <h2 class="user">用户登录</h2>
        <div class="user_login">user login</div>
        <el-form-item prop="pass" class="account">
          <el-input type="text" v-model="ruleForm.pass" placeholder="请输入账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="password">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="code">
          <el-input
            class="Verification"
            type="text"
            v-model="ruleForm.code"
            placeholder="请输入验证码"
            autocomplete="off"
          ></el-input>
          <img src="../../assets/images/code.png" class="codeImg">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="submit log">登&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
        <div>
          <div class="registered" @click="hadleRegistered">注册链盾>></div>
          <div class="guide">
            链盾操作指南
            <el-tooltip class="item" effect="light" placement="top">
              <div slot="content">
                注册“链盾”所用的用户名和密码，与本系
                <br>统用户名和密码一致，如果您还没有注册
                <br>链盾，请您点击按钮，先完成注册！
              </div>
              <el-button class="el-icon-question question"></el-button>
            </el-tooltip>
          </div>
        </div>
      </el-form>
    </div>
    <div class="footer">
      <p>Copyright 清华大学社会科学院</p>
    </div>
    <Statement v-if="dialogVisible" ref="Statement"/>
  </div>
</template>

<script>
import Statement from "./components/statement";
export default {
  components: {
    Statement
  },
  data () {
    return {
      dialogVisible: true,
      ruleForm: {
        pass: 'admin',
        checkPass: '123456',
        code: 'k5gv'
      },
      rules: {
        pass: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20之间', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在6到20之间', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: "/home" })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    hadleRegistered () {
      this.$router.push({ name: "registered" })
    }
  }
}
</script>

<style>
.el-tooltip__popper.is-light {
  border: 1px solid transparent;
}
</style>


<style lang="scss" scoped>
.login {
  height: 100%;
  overflow: hidden;
  background-color: #4f70c8;
  .header {
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    padding-top: 20px;
    color: #fff;
    font-size: 1.5rem;
    .icon-logo {
      font-size: 1.5rem;
    }
  }
  .content {
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 622px;
      background-size: cover;
      height: 476px;
      background-image: url("../../assets/images/loginbg.png");
      margin-right: 66px;
    }
    .form {
      width: 315px;
      height: 287px;
      padding: 66px 82px 82px 82px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
      background-color: #fff;
      .user {
        font-size: 21px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      .user_login {
        height: 11px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin-top: 6px;
      }
      .account {
        margin-top: 23px;
        height: 41px;
        line-height: 41px;
        margin-bottom: 15px;
        .el-input {
          height: 41px;
          line-height: 41px;
          .el-input__inner {
            height: 41px;
            line-height: 41px;
          }
        }
      }
      .password {
        margin-top: 23px;
        height: 41px;
        line-height: 41px;
        margin-bottom: 15px;
        .el-input {
          height: 41px;
          line-height: 41px;
          .el-input__inner {
            height: 41px;
            line-height: 41px;
          }
        }
      }
      .code {
        .Verification {
          width: 46%;
        }
        .codeImg {
          vertical-align: top;
          height: 40px;
          margin-left: 20px;
          cursor: pointer;
          float: right;
        }
      }
      .submit.log {
        width: 100%;
        // height: 33px;
        // line-height: 33px;
        background: rgba(79, 112, 200, 1);
        border-radius: 3px;
        border: 1px solid rgba(79, 112, 200, 1);
        letter-spacing: 10px;
      }
      .registered,
      .guide {
        color: rgba(79, 112, 200, 1);
        cursor: pointer;
      }
      .registered {
        float: left;
      }
      .guide {
        float: right;
        .question {
          border: none;
          padding: 0;
          font-size: 16px;
          color: rgba(79, 112, 200, 1);
        }
      }
    }
  }
  .footer {
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
