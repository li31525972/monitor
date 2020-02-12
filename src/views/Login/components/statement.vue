<template>
  <div class="statement">
    <el-dialog :visible.sync="dialogVisible" width="520px" class="popup" @close="hideModal()">
      <div slot="title" class="dialog-footers">
        <div class="Title">提示</div>
        <div class="tip">您还没有安装链盾服务，请您先下载链盾服务，安装后方可成功登录。</div>
      </div>
      <div class="content">
        <div>
          <p>1．知识产权保护该软件（_________）的著作权和所有权由_________有限公司所有。该软件受_________国著作权法和国际条约条款的保护。商标的使用应符合商标惯例，包括和商标所有人名称的一致。商标可以仅用于对该软件产品的识别。对于任何商标的该种使用都不会导致对该商标使用权的拥有。除上述以外，该协议不授予你该软件上的任何知识产权。</p>
          <p>2．软件的使用</p>
          <p>你可以：</p>
          <p>（1）根据该协议条款使用该软件；</p>
          <p>（2）复制和备份；</p>
          <p>（3）不对文档作任何增加或修改以文档下载的最初形式将此软件拷贝给他人；</p>
          <p>（4）在网址上通过email或者其他任何物理媒体分发该软件。</p>
          <p>你不可以：</p>
          <p>（1）对本系统进行逆向工程、反汇编、解体拆卸或任何试图发现该软件工作程序获源代码的行为；</p>
          <p>（2）未经_________有限公司的书面许可出售租赁该程序；</p>
          <p>（3）创造派生性产品包括含有该系统的更大的系统或另外的程序和包裹；</p>
          <p>（4）将该软件和与_________没有分离授权协议的产品或山版物捆绑销售；</p>
          <p>（5）使用和拷贝没有_________授权的包含在_________之中的icons，1ogosorartwork；</p>
          <p>（6）改变_________广告图案内部程序的运行，改变广告及其内容、广告出现的时间或使其他功能丧失的行为；</p>
          <p>（7）使用该软件改进其他产品和服务；</p>
          <p>（8）任何反相工程、反相编译和反汇编以及其他任何试图发现由该内程旗帜广告和该软件中网络共享功能所使用的协议的行为；</p>
          <p>（9）在任何图像中使用该软件在任何情况下以任何方式对任何个人和商业实体的诋毁行为；或暗示由软件、软件供应商、软件许可商或其他在该软件中描绘的实体任何形式的认可；</p>
          <p>（10）因软件拷贝控诉媒体和运输超过了合理成本。</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="agreeS">
          <el-checkbox v-model="checked" class="agree">我同意安装“链盾服务”等相关条款和声明，并按条约规范使用。</el-checkbox>
        </div>
        <div class="tip" v-if="!checked">请勾选</div>
        <div class="download">
          <el-button type="primary" @click="dialogVisible = false">立即下载</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: true,
      checked: ''
    };
  },
  methods: {
    //取消或关闭弹窗清空form
    hideModal () {
      this.dialogVisible = false;
    },
    show () {
      this.dialogVisible = true;
    },

  }
};
</script>

<style>
.el-dialog__body {
  padding: 30px 0px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.el-checkbox__label {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(79, 112, 200, 1);
  line-height: 10px;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgba(79, 112, 200, 1);
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgba(79, 112, 200, 1);
  border-color: rgba(79, 112, 200, 1);
}
.el-checkbox__inner:hover {
  border-color: rgba(79, 112, 200, 1);
}
</style>


<style lang="scss" scoped>
.statement {
  border-radius: 8px;
  .popup{

  .el-dialog__header{
    background: #fff;
  }
  }
  .content {
    padding: 10px 20px;
  }
  .agreeS {
    text-align: left;
  }
  .tip {
    text-align: left;
  }
}
.el-dialog__header {
  border-bottom: 1px solid #ccc;
}
.content {
  height: 420px;
  overflow-y: auto;
  background: #f2f2f2;
  padding: 0;
}
.Title {
  font-size: 18px;
  color: rgba(51, 51, 51, 1);
}
.tip {
  font-size: 15px;
  color: rgba(255, 0, 0, 1);
  margin-top: 15px;
}
.agree {
  font-size: 15px;
  color: rgba(51, 51, 51, 1);
}
.download {
  text-align: center;
  padding-top: 15px;
}
.download .el-button {
  width: 280px;
  background: rgba(79, 112, 200, 1);
  border:1px solid rgba(79, 112, 200, 1);
}
</style>
