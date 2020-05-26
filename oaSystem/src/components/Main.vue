<template>
  <div>
    <div>
      <van-row class="oa-bar">
        <!-- <van-col span="3"><img :src="IconFont1" alt="" style="width:70%;vertical-align: middle;padding-left:10px;"></van-col> -->
        <van-col span="21" style="text-align:center;font-family:STHeiti ;font-weight:600;font-size:16px ">{{msg}}</van-col>
        <!-- <van-col span="3"><img :src="IconFont2" alt="" style="width:70%;vertical-align: middle;"></van-col> -->
        <van-col span="3"><img :src="IconFont3" alt="" style="width:70%;vertical-align: middle;" @click="handleCommand('/addPerson')">
        </van-col>
      </van-row>
    </div>
    <div>
      <van-search
  v-model="value"
  shape="round"
  
  placeholder="请输入搜索"
/>
    </div>
    <div class="vchat-myFriend-container">
            <div class="me-li" >
                <a href="javascript:;">
                    <img :src="photo1" alt="无法显示图片" style="width:80%">
                </a>
                <div>
                    <span class="vchat-line1" ></span>
                    <v-icon name="enter" color="#d5d5d5"></v-icon>
                </div>
            </div>
            <div class="vchat-linkman-container" :class="{active: showList.indexOf('mine') > -1}" v-if="friendList.length">
                <h3 @click="setShowList('mine')">
                    <p>
                        <v-icon name="fanhui" :size="16" color="#b7b6b6" class="list-icon"></v-icon>
                        <span>我的好友</span>
                    </p>
                    <span>{{friendList.length}}</span>
                </h3>
                <ul class="vchat-linkman-list">
                    <li v-for="v in friendList" :key="v._id" @click="goFriendDetail(v.id)" @contextmenu="contextmenuClick($event, v)">
                        <a href="javascript:;">
                            <img :src="IMG_URL + v.photo" alt="">
                        </a>
                        <div>
                            <p>
                                <span class="vchat-line1" :title="v.nickname">{{v.nickname}}</span>
                            </p>
                            <p>
                                <span :title="v.signature" class="vchat-line1">{{v.signature}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <v-nodata v-else>
                <p class="vchat-no-have">
                    还没有添加好友哦，去 <router-link to="/main/search">添加</router-link>。
                    </p>
            </v-nodata>
        </div>
  </div>
</template>
<script>
// import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox';
// import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.px/flexbox'; 

// Vue.component(FlexBox.name, FlexBox);
// Vue.component(FlexBoxItem.name, FlexBoxItem);
export default {
  name: 'Main',
  mounted() {
    this.showTime();
  },
  data() {
    return {
      msg:"迪拜OA系统",
      friendList: [],
      value:" ",
        IconFont1:require('@/assets/img/消息.png'),
        IconFont2:require('@/assets/img/电话.png'),
        IconFont3:require('@/assets/img/添加.png'),
        photo1:require('@/assets/img/no_task.png'),
      dateList: {
        date: '',
        weekday: '',
        time: '',
        
      },
      tableData: new Array(5).fill({
        id: 10000,
        type: '决议',
        name: '关于教学改进决议爱上看见哈萨克就暗杀看',
        date: '2017-10-20'
      }),
      tableData2: new Array(5).fill({
        type: 'ZIP',
        name: '全区先进教案模板'
      })
    };
  },
  methods: {
    handleCommand(command) {
                this.$router.push(command);
            },
    showTime() {
      var show_day = new Array(
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      );
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var day = time.getDay();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      month < 10 ? (month = '0' + month) : month;
      month = month;
      hour < 10 ? (hour = '0' + hour) : hour;
      minutes < 10 ? (minutes = '0' + minutes) : minutes;
      this.dateList.date = year + '年' + month + '月' + date + '日';
      this.dateList.weekday = show_day[day];
      this.dateList.time = hour + ':' + minutes;
      setTimeout(this.showTime, 3000);
    },
    handleGoUrl(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
<style lang="scss" scoped>
.oa-bar{
  height: 2.2rem;
  background-color:#e0dfdf;
  line-height: 2.2rem;
  overflow: hidden;
}
.oa_main_card {
  .el-card {
    margin: 6px;
  }
  .todo_l {
    line-height: 75px;
    color: #fff;
    .tl {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
    .tr {
      .el-button--text {
        font-size: 60px;
        font-weight: 500;
        color: #fff;
        padding: 0;
        line-height: 75px;
      }
      .el-button--text:hover {
        font-size: 62px;
        transition: 0.5;
        text-shadow: 2px 2px 1px #666;
      }
    }
  }
  .date_l {
    color: #fff;
    .tl {
      font-size: 14px;
      font-weight: bold;
    }
    .tr {
      line-height: 75px;
      font-size: 42px;
      text-align: center;
    }
  }
}
.oa_doc {
  margin: 25px 0px;
  .el-card {
    margin: 0 6px;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #409eff;
    }
    .el-icon-more-outline:hover {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-search {
      font-weight: bold;
    }
  }
}
.vchat-myFriend-container{
            width:300px;
            margin:0 auto;
            padding-top: 10px;
            height: calc(100% - 40px);
            overflow-y: auto;
            box-sizing: border-box;
        }
</style>
<style lang="scss">
.oa_main_card {
  .el-card__body {
    height: 75px;
  }
}
.el-card__body:hover {
  box-shadow: 3px 3px 3px #ccc;
}
</style>
