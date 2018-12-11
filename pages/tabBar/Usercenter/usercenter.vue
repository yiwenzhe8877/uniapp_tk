<template>
	<view>
		<view class="top_wrap pl30 pr30">
			
			<view class="top df">
				<view class='item first'>
					<text class="iconfont icon-xiaoxi c_white fz_14" style="font-size: 50upx;"></text>
				</view>
				<view class='item'>
					<text class="iconfont icon-shezhi c_white fz_14" style="font-size: 50upx;"></text>
				</view>
			</view>
			<view class="bottom df">
				<view class="l">
					<view class="wrap">
						<image src="../../../static/images/logo_512_512_1.png">
						</image>
					</view>
				</view>
				<view class="r ">
					<view class="title fz_16">1872****323</view>
					<view class="title fz_14 mt10 df">
						<view class="f1">
							邀请码 {{yaoqingma}}  
						</view> 
						<view class="f1 fz_14 ">
							<view class="copy">复制</view>
							
						</view>
					</view>
					
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
				top_txt:"注册/登陆",
				yaoqingma:"huhush"
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
		background: linear-gradient(to right, #F06814 0%, #F24439 100%);
	}
	.top{
		justify-content: flex-end;
		padding-top: 40upx;
	}
	.top .first{
		margin-right: 30upx;
	}
	.bottom .l .wrap{
		border-radius: 50%;
		width: 150upx;
		height: 150upx;
		background: white;		
	}
	.bottom .l .wrap image{
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
	}
	.bottom .r{
		flex: 1;
		margin-left: 20upx;
		margin-top: 30upx;
		color: white;
	}
	.copy{
		padding-left: 10upx;
		padding-right: 10upx;
		border: 1px solid #fff;
		width: 60upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 20upx;
	}
</style>
