<template>
	<view>
		<view class="bg_main top_wrap">
			
			<view class="top">
				<view class="icon">
					<text class="iconfont icon-wode c_white"></text>
				</view>
				<view class="title c_white">
					{{top_txt}}
				</view>	
				
			</view>
			
		</view>
		
			
		
		
	</view>
</template>

<script>
	
	let that;
	export default {
		data() {
			return {
				top_txt:"注册/登陆"
			};
		},
		components:{
			
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
	.top_wrap{
		height: 300upx;
		
	}
	.top{
		width: 400upx;
		margin: 0 auto;	
		text-align: center;
		padding-top: 100upx;
	}
	.top .icon text{
		font-size: 100upx;
	}
	.top .title{
		font-size: 30upx;
	}
</style>
