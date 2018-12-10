/* let base="https://a.deyuntianxia.com";
const Api={
    HOMECAROUSEL:base+'/index.php?moudle=site&control=home&method=app_home_carousel',
    HOMERECOMMEND:base+'/index.php?moudle=site&control=home&method=app_recommend',
    GOODSLIST:base+'/index.php?moudle=site&control=home&method=app_goodslist',
    AGREEMENT:base+'/index.php?moudle=site&control=home&method=app_useragreement',
    GOODSDETAIL:base+'/index.php?moudle=site&control=home&method=app_usergoodsdetail',
    USERMSG:base+'/index.php?moudle=site&control=home&method=app_usermsg',
    CHANGEPASSWORD:base+'/index.php?moudle=site&control=home&method=app_changepassword',
    CHANGEZHIFUBAO:base+'/index.php?moudle=site&control=home&method=app_changezhifubao',
    USERINFO:base+'/index.php?moudle=site&control=home&method=app_userinfo',
    WITHDRAW:base+'/index.php?moudle=site&control=home&method=app_withdrawmoney',
    ORDER:base+'/index.php?moudle=site&control=home&method=app_userorder',
    FANS:base+'/index.php?moudle=site&control=home&method=app_userfans',
    REGISTER:base+'/index.php?moudle=site&control=home&method=app_userregister',
    LOGIN:base+'/index.php?moudle=site&control=home&method=app_userlogin',
    NEWONE:base+'/index.php?moudle=site&control=home&method=app_newone',
    WITHDRAWLOG:base+'/index.php?moudle=site&control=home&method=app_withdrawLog',
    MONEYLOG:base+'/index.php?moudle=site&control=home&method=app_userMoneyLog',
    LOGOUT:base+'/index.php?moudle=site&control=home&method=app_logout',
    PARSETOKEN:base+'/index.php?moudle=site&control=home&method=app_parseToken',
}
export default Api;
 */
const   req= function(url,data,method){
	
	let baseurl='https://a.deyuntianxia.com/';		
	let arr=url.split('/');
	url='index.php?moudle='+arr[0]+'&control='+arr[1]+'&method='+arr[2]
	
	
	
	return new Promise((success,rej)=>{
		uni.request({
			url:baseurl+url, //仅为示例，并非真实接口地址。
			method:method,
			
			success: (res) => {
				success(res.data)
			}
		})
	})
	
}

const get=function(url){	 
	return req(url,{},'GET')
}
const post=function(url,data){
	
	return req(url,data,'POST')
}



export default {
	get,
	post
}
