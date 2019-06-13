<template>
  <div 
	class="login-container pull-height" 
	@keyup.enter.native="handleLogin"
	:style="`background-image:url(${logoBg})`"
	>
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <span class='has-account'>
					已有账号，<el-button type='text' @click='loginFunc'>去登陆>></el-button>
				</span>

				<!-- 注册成功 -->
				<div class='register-success text-center'>
					<h3 class='success-title'>
						注册成功
					</h3>
					<i class='iconfont icon-chenggong'></i>
					<p>您已成功激活操作</p>
				</div>
				<!-- 注册成功 -->
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import logoBg from '@/assets/images/login.png';
export default {
  name: "result",
  components: {
    
  },
  data() {
    return {
			logoBg
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["website"])
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
.register-success{
	text-align:center;
	.success-title{
		margin-bottom:15px;
	}
	i{
		color:#3ec483;
		font-size:60px;
	}
	p{
		font-size: 14px;
	}
}
</style>
