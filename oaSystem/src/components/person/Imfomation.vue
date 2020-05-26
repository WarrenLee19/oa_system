<template>
    <div class="mian" style="width:26rem">
         <div>
      <van-row class="oa-bar">
        <van-col span="3"><img :src="IconFont1" alt="" style="width:65%;vertical-align: middle;padding-left:10px;" @click="goBack"></van-col>
        <van-col span="17" style="text-align:center;font-family:STHeiti ;font-weight:600;font-size:16px ">{{msg}}</van-col>
        
        
      </van-row>
    </div>
     
   <van-cell-group >
  <van-field label="头像" :value="IconFont2" readonly style="float:right;font-size:16px"/>

  <van-field label="昵称" :value="user.nickname" readonly style="float:right;font-size:16px"/>
  <van-field label="省" :value="model.sheng" readonly style="float:right;font-size:16px"/>
  <van-field label="性别" :value="model.sex" readonly style="float:right;font-size:16px"/>  
  <van-field label="市" :value="model.shi" readonly style="float:right;font-size:16px"/>  
  <van-field label="个人实名认证" :value="model.isConfirm" readonly style="float:right;font-size:16px"/>  
</van-cell-group>

    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
         data(){
             return {
                 msg:"我的",
                 name:"WarrenLee19",
        IMG_URL: process.env.IMG_URL,
      value:" ",
      model:[],
        IconFont1:require('@/assets/img/返回.png'),
       IconFont2:user.photo,
       swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
             }
        },
        methods:{
          async fetch(){
            const name=localStorage._id
            const res=await this.$http.get(`rest/users/${name}`)
            
            this.model=res.data
            
          },
              handleCommand(command) {
                  console.log(command)
                this.$router.push(command);
            },
            goBack() {
                // console.log(111111111111);
                // this.$store.dispatch('setTransitionName');
                // if (this.back === '-1') {
                    this.$router.go(-1);
                // } else {
                //     this.$router.push(this.back);
                // }
            },logout() {
      let that = this;
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonClass: 'el-button--warning'
      })
        .then(() => {
          //确认
          that.loading = true;
          that.$router.push('/login'); //用go刷新
        })
        .catch(() => {});
    }
        },
    created(){
          this.fetch()
        },computed:{
          ...mapState(['conversationsList', 'user'])
        }
    }
</script>

<style scoped>

.mian-my{
    width: 100%;
    height: 6rem;
    background-color    :white;
    
}
.oa-bar{
  height: 2.2rem;
  background-color:rgba(248, 248, 248, 1);
  line-height: 2.2rem;
  overflow: hidden;
}
.font{
    height: 2rem;
    width: 100%;
    line-height: 2rem;
    font-size: 16px;
    font-family:sans-serif;
    font-weight: 700;
    padding-left: 5%;
     padding-right: 70%;
}
.font2{
    height: 1.4rem;
    width: 100%;
    line-height: 1.4rem;
    font-size: 10px;
    font-family:sans-serif;
    font-weight: 400;
    padding-left: 5%;
     padding-right: 0%;
}
.font3{
    height: 1rem;
    width: 100%;
    
    font-size: 16px;
    font-family:sans-serif;
    font-weight: 700;
    padding-left: 5%;
    
}
</style>