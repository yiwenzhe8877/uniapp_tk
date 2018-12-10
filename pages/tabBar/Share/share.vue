<template>
	<view>
		11
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
				this.data1.password='2';
				
				that.$api.post('site/home/app_userlogin',this.data1).then(res=>{
					//that.pics=res.data;		
					console.log(res)
				})
			}		
		}
	
		
	}
</script>

<style>

</style>
