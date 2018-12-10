<template>
	<view>
		<input type="text" value="" />
	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				data1:{}
			};
		},
		onLoad() {
			that=this;
			this.submit();
		},
		methods:{
			submit(){
				this.data1.phone='18658771300';
				this.data1.password='123456';
				
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
			}		
		}
	
		
	}
</script>

<style>

</style>
