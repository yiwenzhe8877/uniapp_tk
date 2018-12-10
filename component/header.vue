<template>
	<view>
		<view class="top_header_fix df">
			<view class="l f2" @click="left_click">
				<text class="iconfont icon-fanhui " :class="[left?'':'hide']"  style="font-size: 35upx;"></text>
			</view>
			<view class="m f8 tac title ">{{title}}</view>
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
		height: 80upx;
		line-height: 80upx;
		width: 100%;
		padding-left: 30upx;
		padding-right: 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #C3C3C3;
	}
	.title{
		
	}
</style>
