<template>
    <div class="mian" style="width:26rem">
         <div>
      <van-row class="oa-bar">
        
        <van-col span="23" style="text-align:center;font-family:STHeiti ;font-weight:600;font-size:16px ">{{msg}}</van-col>
        
        
      </van-row>
    </div>
    <div class="mian-my">
         <div class="left">
           <div class="font" :title="user.nickname">昵称：{{user.nickname}}</div>
           <div class="font4" :title="user.signature">{{user.signature}}</div>
           <van-icon name="comment-o" color="blue" size="0.7rem"/>
           工作中
           <van-icon name="arrow" color="blue" size="0.7rem" @click="handleCommand('/myinfo')"/>
         </div>
       <div class="container2 right"> 
        <img :src="IMG_URL + user.photo"  style="width:13%;margin-top:5%;" alt=""> 
       </div>
         
    </div>
      <van-cell-group style="margin-top:5%">
    <van-cell value="红包"   is-link icon="gift-card-o" />
    <van-cell value="收藏"   is-link icon="goods-collect-o"/>
    <van-cell value="表情"   is-link icon="smile-o"/>
    <van-cell value="福利社"  is-link  icon="medal-o"/>
    </van-cell-group>
    <van-cell-group style="margin-top:5%">
    <van-cell  value="设置" is-link  icon="setting-o" @click="handleCommand('/user/profile')"/>
    
    </van-cell-group>
    <van-button type="primary" size="large"  @click.native="logout"> 退出登录</van-button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
         data(){
             return {
                 msg:"我的",
      name:'',
      value:" ",
      IMG_URL: process.env.IMG_URL,
        IconFont1:require('@/assets/img/消息.png'),
        IconFont2:require('@/assets/img/电话.png'),
        IconFont3:require('@/assets/img/添加.png'),
        // photo1:require('@/assets/img/no_task.png'),
        photo2:require('@/assets/img/oa_office.png'),
        photo3:require('@/assets/img/office2.jpg'),
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
            getName(){
             this.name=localStorage.name
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
         
          that.$router.push('/'); //用go刷新
        })
        .catch(() => {});
    }
        },created(){
          this.getName()
        },computed:{
          ...mapState(['conversationsList', 'user'])
        }
    }
</script>

<style>
.mian{
    background-color    :rgba(249, 249, 249, 1) ;
}
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
    font-size: 15px;
    font-family:Microsoft YaHei;
    font-weight: 600;
  
    
}
.font4{
    height: 1.5rem;
    width: 100%;
    line-height: 1.5rem;
    font-size: 12px;
    font-family:Microsoft YaHei;
    font-weight: 600;
    padding-left: 3%;
    padding-right: 5%;
  
    
}
.font2{
    height: 1.4rem;
    width: 100%;
    line-height: 1.4rem;
    font-size: 10px;
    font-family:sans-serif;
    font-weight: 400;
    padding-left: 42%;
 
}
.font3{
    height: 1rem;
    width: 100%;
    
    font-size: 16px;
    font-family:sans-serif;
    font-weight: 700;
    padding-left: 5%;
    
}
 /*左浮动固定宽度,右边margin-left*/
       .left{
            float: left;
            width: 250px;
            margin-top:10px;
        }
        .container2 .right{
            margin-left: 250px;
        }
        /*清除浮动*/
        .container2:after{
            content: "";
            height: 0;
            line-height: 0;
            display: block;
            visibility: hidden;
            clear: both;
        }

</style>