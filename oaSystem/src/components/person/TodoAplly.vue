<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="待办申请"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
 
/>
    <!--list-->
    <el-row class="send_file">
      <el-col :span="18">
        <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="ID" :rules="[{ required: true, message: 'ID不能为空'}]">
                <el-input v-model="model.ID" style="width:70%" ></el-input>
            </el-form-item>
             <el-form-item label="待办名称">
                <el-select v-model="model.name" placeholder="请选择待办名称" style="width:70%">
      <el-option label="病假申请单" value="病假申请单"></el-option>
      <el-option label="产假申请单" value="产假申请单"></el-option>
      <el-option label="活动外出申请单" value="活动外出申请单"></el-option>
    </el-select>
               
            </el-form-item>
            
             <el-form-item label="发起人">
                <el-input  v-model="model.startP" style="width:70%"></el-input>
            </el-form-item>
             <el-form-item label="任务名称">
                    <el-select v-model="model.target" placeholder="请选择任务名称" style="width:70%">
      <el-option label="部门审批" value="部门审批"></el-option>
     
 
    </el-select>
            </el-form-item>
             <el-form-item label="起始时间">
                 <el-date-picker
                 v-model="model.startT"
                    type="date"
                 placeholder="选择日期">
                 </el-date-picker>
            </el-form-item>
            
             <el-form-item label="结束时间">         
                <el-date-picker
      v-model="model.endT"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
   
            </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save">立即创建</el-button>
            <el-button >取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="2">
        <div class="set_tp">
          <el-steps direction="vertical" :active=index>
            <el-step title="拟稿"></el-step>
            <el-step title="审核中" ></el-step>
            <el-step title="审核结果" ></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor';
export default {
  components: {
    VueEditor
  },
  data() {
    return {
        model:{},
        index:1,
      form: {
        name: '',
        region: '',
        type: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        content: '请输入正文内容'
      }
    };
  },
  methods: { 
      async save(){
            let res
            if(this.id){
                 res=await this.$http.put(`rest/todo1/${this.id}`,this.model)
            }
            else{
                res=await this.$http.post('rest/todo1',this.model)    
            }
           
            this.$router.push('/main/person/todo')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
    handleCommand(command){
      this.$router.push(command);
    },
    onSubmit() {
      console.log('submit!');
    },  onSubmit() {
      console.log(this.form);
    },onClickLeft() {
      // Toast('返回');
       this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.send_file {
  margin: 55px 0;
  .set_tp {
    margin-left: 30px;
    height: 400px;
  }
}
</style>
