<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
     <van-nav-bar
  title="会议管理"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  
/>
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="会议主题">
          <el-input v-model="form.name" placeholder="请输入会议主题"></el-input>
        </el-form-item>
        <el-form-item label="会议时间">
          <el-input v-model="form.person" placeholder="请输入会议时间"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <!-- <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleGoUrl('/office/MeetAdd?state=add')">新增会议</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <el-table
      :data="items"
      stripe
      style="width: 100%">
      <el-table-column
        
        prop="title"
        label="会议主题"
        min-width="100%">
      </el-table-column>
      <el-table-column
        prop="place"
        label="会议地方"
        align="center"
        width="90%"
        >
      </el-table-column>
      <el-table-column
        prop="startD"
        align="center"
        width="100%"
        label="会议日期">
      </el-table-column>
      <el-table-column
        prop="startT"
        align="center"
        label="开始时间"
        width="80%">
      </el-table-column>
      <el-table-column
        prop="endT"
        align="center"
        label="结束时间"
        width="80%">
      </el-table-column>
      <el-table-column
        
        align="center"
        label="状态"
        width="90%">
        未进行
      </el-table-column>
      <el-table-column
        
        align="center"
        label="操作"
        width="50%">
        <template slot-scope="scope">
          <el-button type="text" size="small"  @click="handleGoUrl('/office/MeetAdd?state=view')"><i class="iconfont icon-search"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[],
      tableData4: new Array(10).fill({
        id: '部门月度会议',
        name: '会议室203',
        subName: '2018-10-12',
        person: '9:00',
        time: '12:00',
        qixian: '每周',
        loadDate: '未进行'
      }),
      form: {
        name: '',
        person: '',
        time: []
      }
    };
  },
  methods: {
    async fetch(){
      const res=await this.$http.get('rest/meet')
      this.items=res.data
    },
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
.el-form--inline .el-form-item {
    margin-left: 10%;
    float: left;
}
</style>
<style lang="scss" scoped>
.el-input{
  margin-top: 4px
}
</style>

