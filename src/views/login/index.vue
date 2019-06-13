<template>
  <div 
	class="login-container pull-height" 
	@keyup.enter.native="handleLogin"
	:style="`background-image:url(${logoBg})`"
	>
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <h4 class="login-normal text-center">
					登陆
        </h4>
        <userLogin></userLogin>
				<!-- 第三方登陆 -->
				<div class="line-through">
					<span>
						社交帐号登录 
					</span>
				</div>
				<ul class="list-inline">
					<li class='wechat'>
						<el-button icon="iconfont icon-shejiaoweixin" circle></el-button>
					</li>
					<li class='weibo'>
						<el-button icon="iconfont icon-shejiaoweibo" circle></el-button>
					</li>
					<li class='qicq'>
						<el-button icon="iconfont icon-shejiaoqq" circle></el-button>
					</li>
				</ul>
				<!-- 第三方登陆 -->
      </div>
    </div>

  </div>
</template>
<script>
import userLogin from "./userlogin";
import { mapGetters } from "vuex";
import logoBg from '@/assets/images/login.png';
export default {
  name: "login",
  components: {
    userLogin
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
  methods: {}
};
</script>

<style lang="scss">

</style>
