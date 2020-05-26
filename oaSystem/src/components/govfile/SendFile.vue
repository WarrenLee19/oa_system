<template>
  <div class="oa_main" style="width:26rem;margin-left:3%">
    <!--面包屑-->
     <van-nav-bar
  title="发送公文"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  
/>
    <!--list-->
    <el-row class="send_file">
      <el-col :span="18">
        <el-form ref="form" :model="form" label-width="75px">
          <el-form-item label="公文名称">
            <el-input v-model="form.name" placeholder="请输入公文名称"  style="width:70%"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="11">
              <el-form-item label="公文类型">
                <el-select v-model="form.region" placeholder="" style="width:40%;">
                  <el-option label="决议" value="1"></el-option>
                  <el-option label="命令" value="2"></el-option>
                  <el-option label="议案" value="3"></el-option>
                  <el-option label="指示" value="4"></el-option>
                  <el-option label="通告" value="5"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="机密程度">
                <el-select v-model="form.region" placeholder="程度" style="width:50%;">
                  <el-option label="公开" value="1"></el-option>
                  <el-option label="部门" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="主送单位">
            <el-input v-model="form.zsdw" placeholder="请输入主送单位" style="width:70%"></el-input>
          </el-form-item>
          <el-form-item label="抄送单位">
            <el-input v-model="form.csdw" placeholder="请输入抄送单位" style="width:70%"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="拟稿人">
                <el-input v-model="form.csdw" placeholder="拟稿" style="width:50%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="拟稿部门">
                <el-input v-model="form.csdw" placeholder="部门" style="width:50%"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="正文" class="editer">
            <vue-editor v-model="form.content"></vue-editor>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="2">
        <div class="set_tp">
          <el-steps direction="vertical" :active="1">
            <el-step title="拟稿"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3" ></el-step>
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

