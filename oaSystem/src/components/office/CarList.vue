<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="车辆列表"
  left-text="返回"
  
  fixed
  left-arrow
  @click-left="onClickLeft"
  
/>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="车辆类型">
          <el-input v-model="form.name" placeholder="请输入类型"></el-input>
        </el-form-item>
        <el-form-item label="使用时间">
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
          <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleGoUrl('/office/caradd')">用车申请</el-button>
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
        label="流水号"
        width="90%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车辆类型"
        align="center"
        min-width="90%">
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        width="90%"
        label="车牌号">
      </el-table-column>
      <el-table-column
        prop="state"
        align="center"
        width="90%"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="开始时间"
        width="90%">
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="结束时间"
        width="90%">
      </el-table-column>
      <el-table-column
        
        align="center"
        label="操作"
        width="80">
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
        name: '5座小汽车（卡罗拉）',
        subName: '粤A012345',
        state: '审批中',
        person: '2020-05-20',
        time: '2020-05-24'
      }),
      form: {
        name: '',
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
  margin-top: 4px;
}
</style>
