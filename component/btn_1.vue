
<template>
	<view>
		<view class="btn_1 bg_main fz_4" @click="btn_click">{{title}}</view>
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
			}
		},
		methods:{
			btn_click:function(){
				this.$emit('submit')
			}
		}
	}
</script>

<style>
.btn_1{
	width: 700upx;
	height: 80upx;
	line-height: 80upx;
	margin: 0 auto;
	text-align: center;
	color: white;
}
</style>
