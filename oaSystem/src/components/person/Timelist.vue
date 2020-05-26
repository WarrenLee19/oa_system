<template>
  <div class="oa_main" style="width:26rem">
    <!--面包屑-->
   <van-nav-bar
  title="日程待办"
  left-text="返回"
 fixed
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  
/>
    <!--serach-->
    <div class="oa_search" >
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="form.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="日程类型">
          <el-select v-model="form.timeType" placeholder="请选择日程类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="form.time"
            type="month"
            placeholder="请选择时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="primary" icon="el-icon-circle-plus-outline">新增日程</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <div class="oa_timelist">
      <full-calendar class="test-fc" :events="fcEvents"
        first-day='1' locale="zh"
        ref="timeMain"
        :current-month="currentMonth"
        @changeMonth="changeMonth"
        @eventClick="eventClick"
        @dayClick="dayClick"
        @moreClick="moreClick">
          <template slot="fc-event-card" slot-scope="scope">
              <p><i class="fa">sadfsd</i> {{ scope.event.title }} test</p>
          </template>
      </full-calendar>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  data() {
    let demoEvents = [
      {
        title: '青年大学习',
        start: '2020-05-05',
        end: '2020-05-07',
        cssClass: 'family'
      },
      {
        title: '篮球比赛',
        start: '2020-05-15',
        end: '2020-05-17',
        cssClass: ['home', 'work']
      },
      {
        title: '英语演讲',
        start: '2020-05-18',
        end: '2020-05-19'
      },
      {
        title: 'Lunfel 2/27-2/28',
        start: '2017-02-27',
        end: '2017-02-28'
      },
      {
        title: 'Lunfel 2/27-2/28',
        start: '2017-02-27',
        end: '2017-02-28'
      },
      {
        title: 'Lunfel 2/26-3/05',
        start: '2017-02-26',
        end: '2017-03-05'
      },
      {
        title: 'Lunfel 1/27-1/28',
        start: '2017-01-27',
        end: '2017-01-28'
      },
      {
        title: 'Lunfel 1/27-2/2',
        start: '2017-01-27',
        end: '2017-02-02'
      },
      {
        title: '课程设计 4/23-4/28',
        start: '2020-5/23',
        end: '2020-5/28'
      }
    ];
    return {
      name: 'Sunny!',
      fcEvents: demoEvents,
      currentMonth: '',
      options: [
        {
          value: '1',
          label: '会议'
        },
        {
          value: '2',
          label: '活动'
        },
        {
          value: '3',
          label: '其它'
        }
      ],
      form: {
        name: '',
        timeType: '',
        time: []
      }
    };
  },
  methods: {
    changeMonth(start, end, current) {
      console.log('changeMonth', start, end, current);
    },
    eventClick(event, jsEvent, pos) {
      console.log('eventClick', event, jsEvent, pos);
    },
    dayClick(day, jsEvent) {
      console.log('dayClick', day, jsEvent);
    },
    moreClick(day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent);
    },
    onSubmit() {
      console.log(new Date(this.form.time).getMonth() + 1);
      console.log(this.form);
      this.$refs.timeMain.emitChangeMonth(
        new Date(this.form.time).getMonth() + 1 + ' ' + this.form.time
      );
    }, onSubmit() {
      console.log(this.form);
    },onClickLeft() {
      // Toast('返回');
       this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.comp-full-calendar {
  width: 100%;
  max-width: inherit;
  padding: 0;
}
</style>
<style lang="scss">
.comp-full-calendar {
  .header-center {
    font-size: 16px;
    line-height: 30px;
  }
  .full-calendar-body .weeks {
    height: 30px;
    line-height: 30px;
    border-color: #eee;
  }
}

</style>
