
<template>
	<view>
		<view class="btn_1 bg_main" @click="btn_click">{{title}}</view>
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

</style>
