<template>
	<view>
		
		
		<!-- <ipt_1 :required='false' :label='label' :placeholder='placeholder' :name='name' @iptClick='iptClick' ></ipt_1> -->
		
		<view class="ipt_wrap bg_sub_grey df">
			<input :password="password"  placeholder-style="color:#989898;"  type="text" value="" @input='ipt' class="ipt " :placeholder="placeholder" />	
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			required:{
				type:Boolean
			},
			label:{
				type:String
			},
			placeholder:{
				type:String
			},
			name:{
				type:String
			},
			password:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			iptClick:function(){
				
				
				this.$emit('iptClick')	
			},
			ipt:function(e){
				
				let v=e.detail.value;
				this.$emit('iptChange',[this.name,v])	
			},
			
		}
	}
</script>

<style>
	.ipt_wrap{
				
	}
	
	.ipt_wrap .ipt{
		height: 80upx;
		padding-left: 20upx;
		box-sizing: border-box;
		line-height: 80upx;
		width: 100%;
	}
	
</style>
