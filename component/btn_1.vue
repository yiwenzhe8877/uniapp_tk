
<template>
	<view>
		<view class="btn_1 fz_4" :class="bg" @click="btn_click">{{title}}</view>
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
			bg:{
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
	width: 100%;
	height: 80upx;
	line-height: 80upx;
	margin: 0 auto;
	text-align: center;
	color: white;
}
</style>
