<template>
    <div style="width:26rem">
         <div >
      <van-row class="oa-bart">
        
        <van-col span="23" style="text-align:center;font-family:STHeiti ;font-weight:600;font-size:16px ">{{msg}}</van-col>
        
        
      </van-row>
    </div>
    <img :src="photo2" alt="迪拜OA" style="width:414px">
    <!-- <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img :src="photo2" alt="迪拜OA" style="width:414px"></swiper-slide>
        <swiper-slide><img :src="photo2" alt="迪拜OA" style="width:414px"></swiper-slide>
        <swiper-slide><img :src="photo2" alt="迪拜OA" style="width:414px"></swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <van-grid clickable :column-num="2">
  <van-grid-item icon="location-o"  text="签到" to="/book/kaoqin" />
  <van-grid-item icon="bullhorn-o" text="公告" to="/office/news" />
</van-grid>
      <van-grid> 
  <van-grid-item icon="calender-o" text="日程待办" @click="handleCommand('/todo')"/>
  <van-grid-item icon="newspaper-o" text="发送公文" @click="handleCommand('/govfile/sendfile')"/>
  <van-grid-item icon="description" text="接受公文" @click="handleCommand('/govfile/acceptfile')"/>
  <van-grid-item icon="logistics" text="车辆管理" @click="handleCommand('/office/carlist')"/>
</van-grid>
 <van-grid>
<van-grid-item icon="todo-list" text="待办事项" @click="handleCommand('/main/person/todo')"/>
  <van-grid-item icon="umbrella-circle" text="你的会议" @click="handleCommand('/office/meetlist')"/>
  <van-grid-item icon="comment" text="督办通知" @click="handleCommand('/office/supervise')"/>
  <van-grid-item icon="bookmark" text="知识专区" @click="handleCommand('/book/list')"/>
</van-grid>

    </div>
</template>

<script>
    export default {
         data(){
             return {
                 msg:"工作区",
      
      value:" ",
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
              handleCommand(command) {
                  console.log(command)
                this.$router.push(command);
            }
        }
    }
</script>

<style lang="scss" scoped>

.oa-bart{
  height: 2.2rem;
  background-color:#f8f8f8;
  line-height: 2.2rem;
  overflow: hidden;
}
</style>