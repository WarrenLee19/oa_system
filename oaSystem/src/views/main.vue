<template>
   <div>
   <router-view :key="$route.path"></router-view>
   <div :class="{showSidebar:!collapsed}">
  <van-tabbar :default-active="defaultActiveIndex" route :collapse="collapsed" @select="handleSelect">
  <van-tabbar-item replace to="/main/personalMain/" icon="friends-o">
    消息
  </van-tabbar-item>
  <van-tabbar-item replace to="/workspace" icon="qr">
    工作区
  </van-tabbar-item>
  <van-tabbar-item replace to="/group/own" icon="user-o">
    群聊

  </van-tabbar-item>
   <van-tabbar-item replace to="/my" icon="home-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</div>
 </div>
</template>

<!--关于多房间，socket可以同时加入多个房间但是也同时可以接收到多个房间的消息，需要自己处理数据-->
<!--所有用户都需要加入vchat房间 以发送系统消息（申请验证等）-->
<script>
// import API from '../api/api_user';
import Axios from 'axios';

export default {
  name: 'home',
  created() {
    this.$on('setNickName', text => {
      this.nickname = text;
    });

    this.$on('goto', url => {
      if (url === '/login') {
        localStorage.removeItem('token');
      }
      this.$router.push(url);
    });
    // Axios.get('')
  },
  data() {
    return {
      defaultActiveIndex: '0',
      nickname: '',
      collapsed: false
    };
  },
  methods: {
    handleSelect(index) {
      this.defaultActiveIndex = index;
    },
    
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    
  },
  mounted() {
    let user = localStorage.getItem('token');
    if (user) {
      user = JSON.parse(user);
      this.nickname = user.nickname || '';
    }
  }
};
</script>
