<template>
  <div class="oa_main" >
    <!--面包屑-->
    <van-nav-bar
  title="待办事项"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline" >
        
        <el-form-item label="发起人">
          <el-input v-model="form.person" placeholder="请输入发起人"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleCommand('/person/todoAplly')">待办申请</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <el-table
      :data="items"
      stripe
      style="width: 100%">
      <el-table-column
       
        prop="ID"
        label="流水号"
        width="90%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="流程名称"
        align="center"
        width="90%">
      </el-table-column>
      <el-table-column
        prop="startP"
        align="center"
        label="发起人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="isOk"
        align="center"
        label="审核结果"
        width="120">
      </el-table-column>
      <el-table-column
        prop="startT"
        align="center"
        label="发起时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="target"
        align="center"
        label="任务名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="endT"
        align="center"
        label="超时时间"
        width="120">
      </el-table-column>
      <el-table-column
        
        align="center"
        label="操作"
        width="160">
        <template slot-scope="scope">
          
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      items:[],
     
      form: {
        name: '',
        person: '',
        time: []
      }
    };
  },
  methods: {
    async fetch(){
      const res=await this.$http.get('rest/todo1')
      this.items=res.data
    },
    handleCommand(command){
      this.$router.push(command);
    },
    onSubmit() {
      console.log(this.form);
    },onClickLeft() {
      // Toast('返回');
       this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    },
    async remove(row){
        this.$confirm(`是否确定要删除分类"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res=await this.$http.delete(`rest/todo1/${row._id}`)
         
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
  }
  },
  created(){
      this.fetch()
  }
};
</script>
<style>
.oa_main{
  width: 100%;
  margin-top: 2.7rem;
}
</style>
<style lang="scss" scoped>

</style>
