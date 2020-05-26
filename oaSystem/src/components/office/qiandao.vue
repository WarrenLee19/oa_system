<template>
  <div class="oa_main" style="width:26rem" >
    <!--面包屑-->
    <van-nav-bar
  title="签到"
  left-text="返回"
  fixed
  left-arrow
  @click-left="onClickLeft"
  
/>
    <!--serach-->
   <div id="app" >
  <vue-better-calendar ref="calendar" mode="sign" style="width:26rem;height:100rem" :signed-dates="signedDates" @select-sign-date="selectSign" :sign-success-txt="'您今天已经签到成功！'"></vue-better-calendar>
  <button class="sign-btn" :class="{'sign-btn_disabled':isSigned || isSigning}" ref="signBtn" :disabled="isSigned || isSigning" @click="sign">{{isSigned ? '今日已签到' : (isSigning ? '正 在 签 到' : '立 即 签 到')}}</button>
  
</div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      items:[],
     signedDates: ['2020-05-01', '2020-05-23', '2020-05-06','2020-05-17','2020-05-18'],
      isSigned: false,
      isSigning: false,
      form: {
        name: '',
        person: '',
        time: []
      }
    };
  },
  methods: {
    async fetch(){
      const res=await this.$http.get('rest/todo')
      this.items=res.data
    },
    onSubmit() {
      console.log(this.form);
    },onClickLeft() {
      // Toast('返回');
       this.$router.go(-1);
    },
    selectSign(signInfo) {
      /* signInfo.status 判断签到是否为当天
        *  signInfo.msg 本次是否签到成功的提示语
        *  signInfo.signedDates 本次签到后目前所有已签到的日期集合
        */
        if (signInfo.status) {
          this.isSigning = true
          // 模拟发送签到请求
          setTimeout(() => {
             this.isSigning = false
             // 模拟请求成功状态值
             let responseDataStatus = true // true为成功，false为失败（具体看接口）
             let responseDataMsg = '签到失败，请重试~'
             if (responseDataStatus) {
               // 改变签到状态
               this.isSigned = true

               // 提示签到成功，可以通过signSuccessTxt属性设置
               alert(signInfo.msg)

               // 更新已签到日期
               this.signedDates = signInfo.signedDates
             } else {
               alert(responseDataMsg)
             }
          }, 3000)
        } else {
          /* 需要在当天才能签到的提示，有如下三个属性可设置提示内容
           * notSignInOtherMonthsTxt，签到时点击本月外日期时的文本提示，默认值为“不能在本月外进行签到”
           * notSignInOtherDaysTxt，签到时点击本月内非当天日期时的文本提示，默认值为“notSignInOtherDaysTxt”
           * alreadySignTxt，签到时点击已经签过到的日期时的文本提示，默认值为“本日已经进行过签到”
           */
          alert(signInfo.msg)
        }
    },
    sign() {
      this.$refs.calendar.sign()
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

}
#app{
   width:100%;
  height: 580px; 
}
.sign-btn{
        position: absolute;
    left: 151px;
    top: 485px;
    padding: 8px 16px;
    font-size: 14px;
    color: #333;
    background: #fff;
    border-radius: 4px;
    border: 2px solid rgb(90, 121, 140);
}
</style>
