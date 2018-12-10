<template>
	<view>
		
		
		<!-- <ipt_1 :required='false' :label='label' :placeholder='placeholder' :name='name' @iptClick='iptClick' ></ipt_1> -->
		
		<view class="ipt_wrap border_bottom df">
			<text class="c_red c_black" :class="[required?'':'hide']" >*</text>
			<label for="" class="label fz_3 c_black">{{label}}</label>
			
			<input :password="password"  placeholder-style="color:#989898;font-size:25upx"  type="text" value="" @input='ipt' class="ipt " :placeholder="placeholder" />	
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
		
		height: 60upx;
		padding-left: 20upx;
		padding-right: 20upx;
		line-height: 60upx;
	}
	.ipt_wrap .label{
		color: #000;
		width: 150upx;
		font-size: 30upx;
		
	}
	.ipt_wrap .ipt{
		padding-left: 30upx;
	}
	
</style>
