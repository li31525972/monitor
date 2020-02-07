<template>
    <div class="login">
        <div class="header">
            <span>系统使用监控与可信登录管理平台</span>
        </div>
        <div class="content">
            <div class="logo"></div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="form">
                <h2>用户登录</h2>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="footer">
            <p>Copyright 清华大学社会科学院</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {},
            rules: {}
        }
    },
    computed: {
    
    },
    watch: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    overflow: hidden;
    background-color: #4F70C8;
    .header {
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        color: #fff;
        font-size: 1.5rem;
    }
    .content {
        height: calc(100% - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
        .logo {
            width: 622px;
            height: 476px;
            background-image: url("../../assets/images/loginbg.png");
            margin-right: 66px;
        }
        .form {
            width: 296px;
            height: 287px;
            padding: 66px 82px 82px 82px;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            background-color: #fff;
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
