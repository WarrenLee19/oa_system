<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="督办通知"
  left-text="返回"
  
  fixed
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="督办事项">
          <el-input v-model="form.name" placeholder="请输入督办事项"></el-input>
        </el-form-item>
        <el-form-item label="督办人">
          <el-input v-model="form.person" placeholder="请输入督办人"></el-input>
        </el-form-item>
        <el-form-item label="办结期限">
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
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleGoUrl('/office/supervisetask')">新增督办</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <el-table
      :data="tableData4"
      stripe
      style="width: 100%">
      <el-table-column
        
        prop="id"
        label="督办编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="督办事项"
        align="center"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        width="120"
        label="主管领导">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="督办人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="主办部门"
        width="160">
      </el-table-column>
      <el-table-column
        prop="qixian"
        align="center"
        label="办结期限"
        width="130">
      </el-table-column>
      <el-table-column
        prop="loadDate"
        align="center"
        label="状态"
        width="180">
        <template slot-scope="scope">
          <el-progress :percentage="scope.row.loadDate" :show-text="true" :status="loadState(scope.row.loadDate)"></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        
        align="center"
        label="操作"
        width="60">
        <template slot-scope="scope">
          <el-button type="text" size="small"><i class="iconfont icon-search"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData4: new Array(15).fill({
        id: 10001,
        name: '关于表彰优秀班干部的议案',
        subName: '张三',
        person: '李阿四',
        time: '学院办公室',
        qixian: '2020-05-20',
        loadDate: parseInt(Math.random() * 100)
      }),
      form: {
        name: '',
        person: '',
        time: []
      }
    };
  },
  methods: {
    handleGoUrl(url) {
      this.$router.push({ path: url });
    },
    loadState(num) {
      let state = '';
      if (num <= 50) {
        state = 'exception';
      } else if (num > 50 && num < 100) {
        state = '';
      } else {
        state = 'success';
      }
      return state;
    },
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
<style>
.oa_main{
  width: 100%;
  margin-top: 2.7rem;
}

.el-input{
  margin-top: 4px
}
</style>
