<template>
	<view>
		
		
		<!-- <ipt_1 :required='false' :label='label' :placeholder='placeholder' :name='name' @iptClick='iptClick' ></ipt_1> -->
		
		<view class="ipt_wrap bg_sub_grey df">
			<input :password="password"  placeholder-style="color:#989898;"  type="text" value="" @input='ipt' class="ipt " :placeholder="placeholder" />	
			<view class="ipt_btn_1 bg_sub_orange fz_18"   @click="sendCode">{{canSendCode==true?msg:counterCount+"s"}}  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:"点击发送",
				canSendCode:true,
				counterCount:60
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
			sendCode:function(e){
				let that=this;
				let timer;
				if(!that.canSendCode) return;
				
				
				that.canSendCode=false;
				
				timer= setInterval(function(){
					that.counterCount=--that.counterCount;
					
					//console.log(that.canSendCode)
					if(that.counterCount==0){
						that.canSendCode= true;
						clearInterval(timer);
					}
				},1000)
				
				
				this.$emit('sendCode')
			}
			
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
	.ipt_btn_1{
		width: 300upx;
		line-height: 80upx;
		text-align: center;
		color: white;
	}
	
</style>
