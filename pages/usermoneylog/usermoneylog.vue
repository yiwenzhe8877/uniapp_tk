<template>
	<view >
		usermoneylog
	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				pageNum:1,
				pagesize:20,
				keyword:'',
				condition:'0',
				height:""
			}
		},
		onLoad() {
			that=this;
			this.getData();
			
		},
		methods:{
			
			lower: function (e) {
				this.pageNum=++that.pageNum;
				this.getData()
			},
			
			getData: function () {
				
				let data1={
					page:this.pageNum,
					pagesize:this.pagesize,
					keyword:this.keyword,
					condition:this.condition
				}
				
				that.$api.post('site/home/app_userMoneyLog',data1).then(res=>{
					//that.pics=res.data;		
					console.log(res)
				})
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
