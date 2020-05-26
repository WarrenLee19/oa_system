<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="用车申请"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <!--form-->
    <el-row class="send_file">
      <el-col :span="23">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="申请人">
                <el-input v-model="form.name" placeholder="请输入申请人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="部门">
                <el-input v-model="form.bumen" placeholder="请输入部门"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="车辆类型">
                <el-select v-model="form.type" placeholder="请选择车辆类型" style="width:100%;">
                  <el-option label="5座小汽车" value="1"></el-option>
                  <el-option label="7座MVP" value="2"></el-option>
                  <el-option label="箱货两用" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="车牌号">
                <el-select v-model="form.num" placeholder="请选择车牌号" style="width:100%;">
                  <el-option label="粤B7897987" value="1"></el-option>
                  <el-option label="粤B5435464" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="form.stratTime"
                  type="date"
                  style="width:100%;"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="结束时间">
                <el-date-picker
                  v-model="form.endTime"
                  type="date"
                  style="width:100%;"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" class="editer">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="请输入内容"
              v-model="form.mark">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即申请</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
   
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        bumen: '',
        type: '',
        num: '',
        stratTime: '',
        endTime: '',
        mark: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },onClickLeft() {
      // Toast('返回');
       this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    }
  }
};
</script>
<style >
.el-input{
  margin-top: 4px;
}
</style>
<style lang="scss" scoped>
.send_file {
  margin: 25px 0;
  .set_tp {
    margin-left: 30px;
    height: 350px;
  }
}
</style>
