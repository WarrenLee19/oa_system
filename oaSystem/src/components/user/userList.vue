<template>
  <div >
     <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>管理员列表 </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="240">
        </el-table-column>
        <el-table-column prop="username" label="用户名">
        </el-table-column>

        <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/user/bm/${scope.row._id}`)">编辑</el-button>
        <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:[]
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get('rest/users')
      this.items=res.data
    },
    async remove(row){
        this.$confirm(`是否确定要删除分类"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res=await this.$http.delete(`rest/users/${row._id}`)
         
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
}
</script>