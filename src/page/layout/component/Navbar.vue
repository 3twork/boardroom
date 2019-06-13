<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb :class="{ 'mobile-breadcrumb': device !== 'desktop' }"/>

    <div class="right-menu">
      <!-- <router-link class="right-menu-item hover-effect" style="position: relative"> -->
        <!-- <el-badge /> -->
        <!-- <i class="el-icon-bell"/> -->
      <!-- </router-link> -->

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/images/admin.png" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <div @click="confirmLogOut">
            <el-dropdown-item divided>
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { removeStore } from '@/utils/store'
// import { reqLogOut } from '@/api/login'
export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  data() {
    return {
      path: '/',
      socket: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      // 'unReplyCount'
    ])
  },
  created() {
  },
  mounted() {
    // 初始化
    this.init()
  },
  destroyed() {
    // 销毁监听
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    confirmLogOut() {
      this.$confirm('确定退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$store.dispatch('LogOut')
      }).catch(() => {
        this.$message({
           type: 'info',
           message: '已取消退出'
         });
      })
    },
    async logout() {
      const result = await reqLogOut()
      if (result.statu === 0) {
        // 移除localStorage中adminInfo
        // 重置vuex中userInfo
        this.$store.dispatch('LogOut')
        this.$message({
          message: '登出成功',
          type: 'success'
        })
        // 为了重新实例化vue-router对象 避免bug
        location.reload()
      } else {
        this.$message({
          message: '系统错误，退出登录失败',
          type: 'warning'
        })
      }
    },
    init: function() {
      if (typeof (WebSocket) === undefined) {
        this.$message.error('您的浏览器不支持socket')
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function() {
      console.log('socket连接成功')
    },
    error: function() {
      console.log('连接错误')
    },
    getMessage: function(msg) {
      console.log(msg.data)
      if (msg.data === '留言') {
        // this.$message('新增一条待回复的留言');
        setTimeout(() => {
          this.$store.dispatch('recordUnReplyCount')
        }, 1000)
      }
    },
    send: function(message) {
      this.socket.send(message)
    },
    close: function() {
      console.log('socket已经关闭')
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.mobile-breadcrumb {
  width: 50%;
  height: 50px;
  font-size: 10px !important;
  overflow: hidden;
  /*text-overflow: ellipsis;
  white-space: nowrap;*/
}
.navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 14px;
        font-size: 12px;
      }
    }
  }
}
</style>

