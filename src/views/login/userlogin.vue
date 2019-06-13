<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item
    prop="username"
    :error="errorMsg || errorName"
    :show-message='true'
    >
      <el-input  @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="iconfont icon-xingming"></i>
      </el-input>
    </el-form-item>
    <el-form-item
    prop="password"
    :error="errorMsg || errorPwd"
    :show-message='true'
    >
      <el-input  @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="iconfont icon-message-fill"></i>
      </el-input>
    </el-form-item>

		<el-form-item>
			<el-row>
				<el-col :span='16'>
					还没有账号？<el-button type='text' @click.native.prevent='registerFunc'>免费注册</el-button>
				</el-col>
				<el-col :span='8' class='text-right'>
					<el-button type='text' @click.native.prevent="forgetPwd">忘记密码</el-button>
				</el-col>
			</el-row>
		</el-form-item>

    <el-form-item>
      <el-button type="primary" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
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
      loginForm: {
        username: "",
        password: ""
      },
      errorMsg:'',
      errorName:'',
      errorPwd:'',
      checked: false,
      loginRules: {
        username: [{ required: true, trigger: "blur",message:'请输入用户名'}],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
      passwordType: "password"
    };
  },
  mounted() {},
  computed: {
  },
  props: [],
  methods: {
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
                setStore({ name: "Otoken", content: res.data.access_token});
                setToken(res.data.access_token)
                const token = res.data.access_token;
                const loginInfo = Object.assign(this.loginForm,{token});
                this.$store
                  .dispatch("LoginByUsername", loginInfo)
                  .then(res => {
										this.$store.dispatch('GetUserInfo')
										this.$router.push({
											path:'/home'
										})
                  });
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
