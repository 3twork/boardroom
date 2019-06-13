<template>
  <div 
	class="login-container pull-height" 
	@keyup.enter.native="handleLogin"
	:style="`background-image:url(${logoBg})`"
	>
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <h4 class="login-normal text-center">
					忘记密码
        </h4>
				<span class='has-account'>
					已有账号，<el-button type='text' @click='loginFunc'>去登陆>></el-button>
				</span>
        <forget></forget>
      </div>
    </div>

  </div>
</template>
<script>
import forget from "./forget";
import logoBg from '@/assets/images/login.png';
export default {
  name: "login",
  components: {
    forget
  },
  data() {
    return {
			logoBg
    };
  },
  created() {},
  mounted() {},
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
.has-account{
	position:absolute;
	right:20px;
	top:50px;
	font-size:14px;
}
</style>
