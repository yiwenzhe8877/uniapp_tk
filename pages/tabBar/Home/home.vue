<template>
	<view >
		
		<view class="top_fix">
			<view class="top_wrap df">
				<view class="l f2">		
				</view>
				<view class="m f8">
					复制淘宝标题找券
					<text>领券省钱</text>
				</view>
				<view class="r f2">
					<view class="iconfont icon-xiaoxi" style="font-size: 50upx;">
						
					</view>
				</view>
			</view>
		</view>
		<view class="h90upx"></view>
		<view class="swiper_wrap">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in pics" :key='index' @click="go_goods_list"  :data-title=item.title>
					<image :src="item.imgurl" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- :class { css:bool} -->
		<!-- :class="[title?'red':'green']" -->
		<!-- :class="[title==1?'red':'green']" -->
	<!-- 	<view class="icon-iconfontzhizuobiaozhun20 iconfont">123</view>
		{{title}}
		<scroll-view scroll-y   @scrolltolower="lower" >
			<view>1</view>
			
			<view></view>
		</scroll-view> -->
	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				title:true,
				pics: ['item1',
            'item2',
            'item3'],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500
			};
		},
		onLoad() {
			that=this;
			this.getData();
		},
		methods:{
			
			lower: function (e) {
				console.log(e)
			},
			
			getData: function (e) {
				
				that.$api.get('site/home/app_home_carousel').then(res=>{
					that.pics=res.data;		
				})
			},
			go_goods_list: function (e) {
				let title =e.currentTarget.dataset.title;
				
			},
		}
	}
</script>

<style>
	.top_fix{
		position: fixed;left: 0;top: 0;height: 90upx;width: 100%;
		background: #000;z-index: 999;
	}
	.top_wrap .m{
		background: white;
		margin-top: 15upx;
		border-radius: 20upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 20upx;
		padding-left: 20upx;
		color: #ccc;
	}
	.top_wrap .m text{
		color:purple;
		font-size: 20upx;
	}
	.top_wrap .r{
		margin-top: 15upx;
		color: white;
		text-align: center;
		font-size: 10upx;
	}
	.swiper_wrap{
		width: 100%;
	}
	.swiper_wrap image{
		width: 750upx;
		height: 340upx;
	}
</style>
