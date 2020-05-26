<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="接受公文"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="公文名称">
          <el-input v-model="form.name" placeholder="请输入公文名称"></el-input>
        </el-form-item>
        <el-form-item label="拟稿人">
          <el-input v-model="form.person" placeholder="请输入拟稿人"></el-input>
        </el-form-item>
        <el-form-item label="签发时间" >
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期" >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
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
        width="65%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="公文名称"
        align="center"
        min-width="120%">
      </el-table-column>
      <el-table-column
        prop="subName"
        align="center"
        width="65%"
        label="拟稿人">
      </el-table-column>
      <el-table-column
        prop="person"
        align="center"
        label="签发时间"
        width="100%">
      </el-table-column>
      <el-table-column
        prop="Dept"
        align="center"
        label="签发部门"
        width="80%">
      </el-table-column>
      <el-table-column
        
        align="center"
        label="操作"
        width="50%">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleGoUrl('/govfile/acceptshow')"><i class="iconfont icon-search"></i></el-button>
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
        name: '关于表彰优秀干部的议案',
        subName: '李四',
        person: '2020-05-12',
        Dept: '系办公室'
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
    onSubmit() {
      console.log(this.form);
    }, onSubmit() {
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
  margin-top: 2.8rem;
}
</style>
<style lang="scss" scoped>
.el-input{
  margin-top: 4px
}
</style>
