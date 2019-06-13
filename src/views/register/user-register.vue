<template>
  <el-form 
	class="login-form" 
	status-icon 
	:rules="loginRules" 
	ref="loginForm" 
	:model="loginForm" 
	label-width="0">
    <el-form-item
    prop="username"
    :show-message='true'
    >
      <el-input v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="iconfont icon-xingming"></i>
      </el-input>
    </el-form-item>

    <el-form-item
    prop="password"
    :show-message='true'
    >
      <el-input v-model="loginForm.relname" auto-complete="off" placeholder="请输入真实姓名">
        <i slot="prefix" class="iconfont icon-xingming"></i>
      </el-input>
    </el-form-item>

		<el-form-item
    prop="phone"
    :show-message='true'
    >
      <el-input v-model="loginForm.phone" auto-complete="off" placeholder="请输入手机号">
        <i slot="prefix" class="iconfont icon-mobile-fill"></i>
      </el-input>
    </el-form-item>

		<el-form-item
    prop="code"
    :show-message='true'
    >
      <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码">
        <i slot="prefix" class="iconfont icon-message-fill code-placeholder"></i>
				<template slot="append">
					<el-button type="primary" @click="sendVerify" v-if="!sended">获取验证码</el-button>
					<el-button type='default' disabled v-if="sended" class="count-verify">{{countButton}}</el-button>
				</template>
      </el-input>
    </el-form-item>

		<el-form-item
    prop="pwd"
    :show-message='true'
    >
      <el-input v-model="loginForm.pwd" auto-complete="off" placeholder="请输入验证码">
        <i slot="prefix" class="iconfont icon-lock-fill"></i>
      </el-input>
    </el-form-item>

		<el-form-item
    prop="account"
    :show-message='true'
    >
      <el-input v-model="loginForm.account" auto-complete="off" placeholder="请输入邀请码">
        <i slot="prefix" class="iconfont icon-lock-fill"></i>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click.native.prevent="handleLogin" class="login-submit">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import http from "@/service/axios.js";
import { api,LOGIN, ERR_OK } from "@/api/api.js";
import { mapGetters } from "vuex";
import { setStore } from "@/utils/store";
import { setToken } from '@/utils/auth';
export default {
  name: "userlogin",
  data() {
    const callBack = () => {

    }
    return {
			sended:false,
			count: 60,
      countButton: "60 s",
      loginForm: {
        username: "",
				relname: "",
				phone:'',
				code:'',
				pwd:'',
				account:''
      },
      errorMsg:'',
      errorName:'',
      errorPwd:'',
      checked: false,
      loginRules: {
        username: [{ required: true, trigger: "blur",message:'请输入用户名'}],
        relname: [{ required: true, message: "请输入真实姓名", trigger: "blur" }]
      },
      passwordType: "password"
    };
  },
  mounted() {},
  computed: {
  },
  props: [],
  methods: {
		sendVerify() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.sended = true;
          this.countDown();
        }
      });
		},
		countDown() {
      let that = this;
      if (this.count == 0) {
        this.sended = false;
        this.count = 60;
        return;
      } else {
        this.countButton = this.count + " s";
        this.count--;
      }
      setTimeout(function() {
        that.countDown();
      }, 1000);
    },
		registerFunc(){
			this.$router.push({path:'/register'})
		},
		forgetPwd(){
			this.$router.push({
				path:'/forget'
			})
		},
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          http
            .post(LOGIN, {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            .then(res => {
              if (res.status == 200) {
								this.$router.push({
									path:'/result'
								})
              } else {
                let message = res.message;
                this.$message({
                  type:'error',
                  message:message
                })
                if(message.indexOf('密码') > -1){
                  this.errorPwd = message
                }else if(message.indexOf('账号') > -1){
                  this.errorName = message
                }else{
                  this.errorMsg = message
                }
              }
            });
        }
      });
    }
  }
};
</script>

<style>
.login-title{
  color: #2157cc
}
</style>
