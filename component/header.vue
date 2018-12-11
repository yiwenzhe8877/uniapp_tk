<template>
	<view>
		<view class="top_header_fix bg_main border_bottom df">
			<view class="l f2 " @click="left_click">
				<text class="iconfont icon-fanhui c_white" style="font-size: 36upx;" :class="[left?'':'hide']"   ></text>
			</view>
			<view class="m f8 tac title fz_20 c_white">{{title}}</view>
			<view class="r f2 tar"></view>
		</view>
		
		
		<view class="h82upx"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			title:{
				type:String
			},
			left:{
				type:Boolean
			}
		},
		methods:{
			left_click:function(){
				
				if(this.left){
					
					this.$emit('leftClick')					
				}
				
			},
			
			
		}
	}
</script>

<style>
	.top_header_fix{
		position: fixed;
		left: 0;
		top: 0;
		height: 88upx;
		width: 100%;
		
		box-sizing: border-box;
		
	}
	.top_header_fix .l{
		margin-left: 45upx;
		margin-top: 22upx;
	}
	
	.title{
		line-height: 88upx;
	}
</style>
