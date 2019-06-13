<template>
  <div 
	class="login-container pull-height" 
	@keyup.enter.native="handleLogin"
	:style="`background-image:url(${logoBg})`"
	>
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <h4 class="login-normal text-center">
					注册
        </h4>
				<span class='has-account'>
					已有账号，<el-button type='text' @click='loginFunc'>去登陆>></el-button>
				</span>
        <user-register></user-register>
      </div>
    </div>

  </div>
</template>
<script>
import userRegister from "./user-register";
import logoBg from '@/assets/images/login.png';
export default {
  name: "login",
  components: {
    userRegister
  },
  data() {
    return {
			logoBg
    };
  },
  created() {},
	mounted() {},
	activated() {
		
	},
  computed: {
  },
  props: [],
  methods: {
		loginFunc(){
			this.$router.push({
				path:'/login'
			})
		}
	}
};
</script>

<style lang="scss">

</style>
