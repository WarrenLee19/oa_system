<template>
    <div class="about">
        <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>{{id?'编辑':'新建'}}管理员 </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
        
        <el-form label-width="120px" @submit.native.prevent="save">
             
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
             <el-form-item label="密码">
                <el-input  v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
            parents:[],
        }
    }
    ,
    methods:{
        async save(){
            let res
            if(this.id){
                 res=await this.$http.put(`rest/users/${this.id}`,this.model)
            }
            else{
                res=await this.$http.post('rest/users',this.model)    
            }
           
            this.$router.push('/user/hj')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res=await this.$http.get(`rest/users/${this.id}`)
            this.model=res.data
        }
    },
    
    created(){
        this.id && this.fetch()
    }
}
</script>