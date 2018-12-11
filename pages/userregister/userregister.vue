<template>
	<view>
		<v_header :title='title' :left='h_left' @leftClick='leftClick' ></v_header>
		
		<view class="" style="margin-top: 100upx;"></view>
		<view class="ml30 mr30">
			
			<ipt_1  :placeholder='pla_phone' :name='name_phone' @iptChange='iptChange' ></ipt_1>
			<view class="h10"></view>
			<ipt_1  :password='true'  :placeholder='pla_password' :name='name_password' @iptChange='iptChange' ></ipt_1>
			<view class="h10"></view>
			
			<ipt_1  :password='true'  :placeholder='pla_code' :name='name_code' @iptChange='iptChange' ></ipt_1>
			<view class="h10"></view>
			
			<ipt_1  :password='true'  :placeholder='pla_yaoqingma' :name='name_yaoqingma' @iptChange='iptChange' ></ipt_1>
			<view class="h30"></view>
			
			
			<btn_1 :bg='bg_color' :title='submit_txt' @submit='submit'></btn_1>
			
			
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
				title:"用户注册",
				h_left:true,
				pla_phone:"手机号",
				name_phone:"phone",
				pla_password:"密码",
				name_password:"password",
				pla_code:"验证码",
				name_code:"code",
				pla_yaoqingma:"邀请码",
				name_yaoqingma:"yaoqingma",
				
				submit_txt:"注册",
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
					
				that.$api.post('site/home/app_userregister',this.data1).then(res=>{
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
