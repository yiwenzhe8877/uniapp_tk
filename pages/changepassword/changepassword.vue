<template>
	<view>
		<v_header :title='title' :left='h_left' @leftClick='leftClick' ></v_header>
		
		<view class="" style="margin-top: 100upx;"></view>
		<view class="ml30 mr30">
			
			<ipt_1  :placeholder='pla_phone' :name='name_phone' @iptChange='iptChange' ></ipt_1>
			<view class="h10"></view>
			
			<ipt_2  :password='true' @sendCode='sendCode'  :placeholder='pla_code' :name='name_code' @iptChange='iptChange' ></ipt_2>
				
			<view class="h10"></view>
			
			<ipt_1  :password='true'  :placeholder='pla_password' :name='name_password' @iptChange='iptChange' ></ipt_1>
			<view class="h10"></view>
			
			
			
			<ipt_1  :password='true'  :placeholder='pla_passwordagain' :name='name_passwordagain' @iptChange='iptChange' ></ipt_1>
			<view class="h30"></view>
			
			
			<btn_1 :bg='bg_color' :title='submit_txt' @submit='submit'></btn_1>
			
			
		</view>
		
		
	</view>
</template>

<script>
	import header from '../../component/header.vue'
	import ipt_1 from '../../component/ipt_1.vue'
	import ipt_2 from '../../component/ipt_2.vue'

	import btn_1 from '../../component/btn_1.vue'
	
	let that;
	export default {
		data() {
			return {
				data1:{},
				title:"修改密码",
				h_left:true,
				pla_phone:"手机号",
				name_phone:"phone",
				pla_password:"密码",
				name_password:"password",
				pla_code:"验证码",
				name_code:"code",
				pla_passwordagain:"再次输入密码",
				name_passwordagain:"passwordagain",
				
				submit_txt:"注册",
				bg_color:'bg_sub_orange',
			};
		},
		components:{
			v_header:header,
			ipt_1:ipt_1,
			ipt_2:ipt_2,
			btn_1:btn_1,
			
		},
		onLoad() {
			that=this;
		},
		methods:{
			submit(){
				
				
				if(this.data1.password!=this.data1.passwordagain){
					uni.showToast({
						title: "两次输入的密码不一致",
						duration: 2000,
						icon:'none'
					});	
					return;
				}
					
				that.$api.post('site/home/app_changepassword',this.data1).then(res=>{
						
					let code =res.code;
					let msg=res.msg
					if(code!='0'){
						uni.showToast({
							title: msg,
							duration: 2000,
							icon:'none'
						});	
						return;
					}
					
					uni.showToast({
						title: "成功",
						duration: 2000,
						icon:'none'
					});	
					
				})
			},
			iptChange:function(arr){
								
				this.data1[arr[0]] = arr[1]
			},
			
			sendCode:function(){
				
				
				that.$api.post('site/home/app_code_changepassword',{phone:this.data1.phone}).then(res=>{
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
					
				})
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
