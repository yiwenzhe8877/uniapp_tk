<template>
	<view>
		<v_header :title='title' :left='h_left' @leftClick='leftClick' ></v_header>
		
		<view class="" style="margin-top: 100upx;"></view>
		<ipt_1 :required='false' :label='label_phone' :placeholder='pla_phone' :name='name_phone' @iptChange='iptChange' ></ipt_1>
		<ipt_1 :required='false' :password='true' :label='label_password' :placeholder='pla_password' :name='name_password' @iptChange='iptChange' ></ipt_1>
		<view class="" style="margin-top: 100upx;"></view>
		
		<btn_1 :title='submit_txt' @submit='submit'></btn_1>
		
		<view class="df b1 mt10">
			<view class="f1 tal ">
				<text class="register c_black fz_1">注册</text>
				
			</view>
			<view class="f1 tar c_black fz_1">
				<text class="forget">没有密码/忘记密码</text>
			</view>
		</view>
		<view class="tac b1 c_black fz_1">
			<text>
			登陆或注册即代表同意app的用户协议	
			</text>
			
		</view>
		
	</view>
</template>

<script>
	import header from '../../component/header.vue'
	import ipt_1 from '../../component/ipt_1.vue'
	import btn_1 from '../../component/btn_1.vue'
	
	let that;
	export default {
		data() {
			return {
				data1:{},
				title:"用户登陆",
				h_left:true,
				label_phone:"手机号",
				pla_phone:"请输入手机号",
				name_phone:"phone",
				label_password:"密码",
				pla_password:"请输入密码",
				name_password:"password",
				submit_txt:"登陆"
			};
		},
		components:{
			v_header:header,
			ipt_1:ipt_1,
			btn_1:btn_1
		},
		onLoad() {
			that=this;
		},
		methods:{
			submit(){
					
				that.$api.post('site/home/app_userlogin',this.data1).then(res=>{
					//that.pics=res.data;		
					let code =res.code;
					let msg=res.msg
					if(code!='0'){
						uni.showToast({
							title: msg,
							duration: 2000,
							icon:'none'
						});	
					}
					
					let token=res.token;
					
					uni.setStorageSync('token',token)
					
					
				})
			},
			iptChange:function(arr){
								
				this.data1[arr[0]] = arr[1]
			}
			
		}
	
		
	}
</script>

<style>
	.b1{
		margin-left: 25upx;
		margin-right: 25upx;
	}
	.b1 text{
		
		border-bottom: 1px solid #000
	}
	

</style>
