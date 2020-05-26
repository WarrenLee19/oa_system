<template>
 
 <div>
   <router-view :key="$route.path"></router-view>
   <div :class="{showSidebar:!collapsed}">
  <van-tabbar :default-active="defaultActiveIndex" route :collapse="collapsed" @select="handleSelect">
  <van-tabbar-item replace to="/main" icon="friends-o">
    消息
  </van-tabbar-item>
  <van-tabbar-item replace to="/workspace" icon="qr">
    工作区
  </van-tabbar-item>
  <van-tabbar-item replace to="/contact/contactItem" icon="user-o">
    联系人
  </van-tabbar-item>
   <van-tabbar-item replace to="/my" icon="home-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</div>
 </div>
</template>

<script>
import API from '../api/api_user';
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
    jumpTo(url) {
      this.defaultActiveIndex = url;
      this.$router.push(url); //用go刷新
    },
    logout() {
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
  mounted() {
    let user = localStorage.getItem('token');
    if (user) {
      user = JSON.parse(user);
      this.nickname = user.nickname || '';
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work:hover{
  color: #409eff;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;

  .topbar-wrap {
    height: 60px;
    line-height: 60px;
    background: #1c2128;
    padding: 0px;

    .topbar-btn {
      color: #fff;
    }
    /*.topbar-btn:hover {*/
    /*background-color: #4A5064;*/
    /*}*/
    .top_logo {
      font-size: 18px;
      color: #fff;
      font-weight: 500;
      opacity: 0.8;
    }
    .topbar-title {
      float: left;
      width: 350px;
      padding-left: 0px;
    }
    .topbar-account {
      float: right;
      padding-right: 12px;
    }
    .userinfo-inner {
      cursor: pointer;
      color: #fff;
      opacity: 0.8;
      padding-left: 10px;
      position: relative;
      .user_pic {
        position: absolute;
        left: -30px;
        top: -8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .iconfont {
        font-weight: 800;
      }
      .iconfont:hover {
        color: #409eff;
      }
    }
  }
  .main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  aside {
    min-width: 60px;
    background: #20262e;
    &::-webkit-scrollbar {
      display: none;
    }

    &.showSidebar {
      overflow-x: hidden;
      overflow-y: auto;
    }

    .el-menu {
      height: 100%; /*写给不支持calc()的浏览器*/
      height: -moz-calc(100% - 80px);
      height: -webkit-calc(100% - 80px);
      height: calc(100% - 80px);
      border-radius: 0px;
      background-color: #20262e;
      border-right: 0px;
    }

    .el-submenu .el-menu-item {
      min-width: 60px;
      background-color: #20262e;
    }
    .el-menu {
      width: 220px;
    }
    .el-menu--collapse {
      width: 60px;
    }

    .el-menu .el-menu-item,
    .el-submenu .el-submenu__title {
      height: 56px;
      line-height: 56px;
    }
    .el-submenu .el-submenu__title .el-menu-item:hover,
    .el-submenu .el-menu-item:hover,
    .el-submenu .el-submenu__title:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: #409eff;
    }
  }

  .menu-toggle {
    float: left;
    text-align: center;
    color: #fff;
    opacity: 0.8;
    font-weight: bold;
    line-height: 60px;
    width: 60px;
  }
  .menu-toggle:hover {
    color: #409eff;
  }
  .menu-toggle:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .content-container {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 1px;

    .content-wrapper {
      box-sizing: border-box;
    }
  }
}
</style>
