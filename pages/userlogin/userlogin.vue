<template>
	<view>
		<v_header :title='title' :left='h_left' @leftClick='leftClick' ></v_header>
		
		<view class="" style="margin-top: 100upx;"></view>
		<view class="ml30 mr30">
			
			<ipt_1 :required='false'  :placeholder='pla_phone' :name='name_phone' @iptChange='iptChange' ></ipt_1>
			<view class="h30"></view>
			<ipt_1 :required='false' :password='true'  :placeholder='pla_password' :name='name_password' @iptChange='iptChange' ></ipt_1>
			<view class="h30"></view>
			
			<btn_1 :bg='bg_color' :title='submit_txt' @submit='submit'></btn_1>
			
			<view class="df b1 mt10">
				<view class="f1 tal ">
					<text class="register c_black fz_14">注册</text>

				</view>
				<view class="f1 tar c_black fz_14">
					<text class="forget">没有密码/忘记密码</text>
				</view>
			</view>
			<view class="tac b1 c_black fz_14">
				<text>
				登陆或注册即代表同意app的用户协议	
				</text>
				
			</view>	
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
				pla_phone:"手机号",
				name_phone:"phone",
				pla_password:"密码",
				name_password:"password",
				submit_txt:"登陆",
				bg_color:'bg_sub_orange'
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
		
	}
	.b1 text{
		
		border-bottom: 1px solid #000
	}
	

</style>
