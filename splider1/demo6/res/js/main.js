var isMobile = false;
if($(window).width()<800){ isMobile=true; } 

//初始化
$(function(){   
    //激活顶部导航栏
    activateHeadNav();
    //激活语言切换选项卡
    activateLangTabs();
    //刷新用户登录状态
    checkLoginStatus();
    //隐藏提示层
    $('#tipDiv').hide();
    //保存推广code
    localStorage.setItem('regCode',getUrlParam('code') || '');
    //激活客服图标拖动功能
    //activateServiceIcon();


    //绑定边栏按钮
    $('.sideDiv ul li').click(function(event){
        // showWin($(this).data('type'));

        xl.showWin($(this).data('type'))
    });
});

function showActivityDetail(value){
    xl.showWin(value);
}

function showActivity(){
    xl.showWin("activity");
}

//激活语言切换选项卡
function activateLangTabs(){
    $('.headNav .language').on('click',function(e){
        $('.langMenuDiv').show();
        setTimeout(function(){
            $('body').on('click',function(){
                $('.langMenuDiv').hide();
                $('body').off('click');
            });
        },200);
    });
    $('.langMenuDiv a').on('click',function(e){
        $('body').off('click');
        $('.langMenuDiv').hide();
        return false;
    });
}

//激活顶部导航栏
function activateHeadNav(){
	$('.headNav a').on('click',function(){
        let thisObj = $(this);
		let href = thisObj.data('href');
        $('.headNav a').removeClass('cur');
        thisObj.addClass('cur');
        if(!href){ return; }
		if(href.indexOf("#")!=-1){
			var headNavHeight = $('.headNav').height();
            if($(href).length>0){
			    $('html, body').animate({scrollTop: $(href).offset().top-headNavHeight},500);
            }else{
                setTimeout(()=>{
                    $('html, body').animate({scrollTop: $(href).offset().top-headNavHeight},500);
                },1000);
            }
		}
	});
}

//去用户中心
function toUserCenter(page='/user/index'){
    //如果localStorage没有用户登录标记，则直接判断为未登录
    if(!localStorage.getItem('user_trc20_address')){
        showUserForm('login',{'toPage':page});
    }else{
        //检查用户的最新登录状态
        checkLoginStatus(true,()=>{
            xl.toPage(page);
        },()=>{
            showUserForm('login',{'toPage':page});
        });
    }
}

//显示用户表单
function showUserForm(type,data={}){
    xl.showWin(`/userForm/${type}`,data);
}

//高亮地步导航栏指定块
function setFoodNavCur(type){
    $('.foodNav ul li').removeClass('cur');
    $(`.foodNav ul li[data-type=${type}]`).addClass('cur');
}

//激活客服图标拖动功能
function activateServiceIcon(){
    //客服图标
    let oDiv = $('#serviceIcon')[0];
    oDiv.onmousedown = function (e) {
        let disX = e.clientX - oDiv.offsetLeft
        let disY = e.clientY - oDiv.offsetTop
        document.onmousemove = function (e) {
            let l = e.clientX - disX
            let t = e.clientY - disY
            oDiv.style.left = l + 'px'
            oDiv.style.top = t + 'px'
        };
        document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
        };
        e.stopPropagation();
        return false;
    };
    oDiv.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
        document.body.style.overflow = 'hidden';
    });
    oDiv.addEventListener('touchmove', function (e) {
        var moveX = e.targetTouches[0].pageX - startX; 
        var moveY = e.targetTouches[0].pageY - startY;
        let left = x + moveX;
        let top = y + moveY;
        let maxLeft = document.body.clientWidth - this.offsetWidth - 10;
        let maxTop = window.screen.availHeight - this.offsetHeight - $('.foodNav').height()-10;
        if (left < 10) { left = 10; } if (left > maxLeft) { left = maxLeft; }
        if (top < 10) { top = 10; } if (top > maxTop) { top = maxTop; }
        this.style.left = left + 'px';
        this.style.top = top + 'px';
        document.body.style.overflow = 'hidden';
    });
    oDiv.addEventListener('touchend', function (e) {
        document.body.style.overflow = 'auto';
    });
}
//------------------------------------------------------------

//写入用户登录信息
function setLoginInfo(uInfo){
    localStorage.setItem('user_trc20_address',uInfo['user_trc20_address']);
    //高亮显示导航条登录状态
    $('.headNav .userCenter').addClass('logged');
}

//移除用户登录信息
function removeLoginInfo(){
    localStorage.removeItem('user_trc20_address');
    localStorage.removeItem('user_token');
    //移除示导航条登录状态高亮
    $('.headNav .userCenter').removeClass('logged');
}

//获得用户登录信息
function getLoginInfo(){
    if(!localStorage.getItem('user_trc20_address')){
       return null;
    }else{
        return {
            'user_trc20_address':localStorage.getItem('user_trc20_address')
        }
    }
}

//刷新用户登录状态
function checkLoginStatus(showLoad=false,logged=null,notLoggedIn=null){
    return;
    //通过API检查用户登录状态
    xl.req({
        api:'/user/checkLoginStatus',
        showLoad:showLoad,
        done:(data)=>{
            //已登录
            if(data.status=='logged'){
                //更新本地登录信息
                setLoginInfo({
                    'user_trc20_address':data['user_trc20_address']
                });
                //执行回调
                if(typeof logged==="function"){ logged(data['user_trc20_address']); }
            //未登录
            }else{
                //移除登录信息
                removeLoginInfo();
                //执行回调
                if(typeof notLoggedIn==="function"){ notLoggedIn(); }
            }
        }
    });
}

//退出登录
function userLogout(){
    layer.confirm('确定要退出登录吗？',{
        title:'系统提示',
        btn: ['确定','取消']
    },function(index){
        layer.close(index);
        removeLoginInfo();
        xl.toPage('/');
        //API注销登录状态
        xl.req({api:'/user/logout'});
    });
}

//------------------------------------------------------------

//拷贝内容到剪贴板
function copy(textDiv,btn){
	let text = $(textDiv).text();
	var clipboard = new Clipboard(btn,{text:function(){return text;}});
	clipboard.on('success',function(e){ msg('复制成功'); });
	clipboard.on('error',function(e){ msg(e); });
}

//弹出页面小提示
function msg(str,time){
    if($("#tipDiv").length==0){
        $('body').append(`<div id="tipDiv"></div>`);
    }
	if(!time){ time=3000; }
	$('#tipDiv').html(str).show().css({'opacity':1,'top':'30%'});
	setTimeout(function(){ 
		$('#tipDiv').css({'opacity':0,'top':'35%'});
		setTimeout(function(){ 
			$('#tipDiv').css({'top':'25%'}).hide();
		},1000);
	},time);
}

//生产二维码
function genderQr(divId,text,size=256){
    var qrcode = new QRCode(divId, {
        text:text,
        width:size,
        height:size,
        correctLevel:QRCode.CorrectLevel.H
    });
}


//格式化日期
function formatDate(formatStr,dateStr){		
	if(!formatStr){ return ''; }else{ formatStr = formatStr.toLowerCase(); }
	var date;
	if(dateStr && dateStr!=''){
		dateStr = dateStr.replace(/-/g, "/");
		date = new Date(dateStr);
	}else{
		date = new Date();
	}
	var m = date.getMonth()+1;
	var d = date.getDate();
	var H = date.getHours();
	var i = date.getMinutes();
	var s = date.getSeconds();
	formats = {
		'y' : date.getFullYear(),							// 年
		'm' : m.toString().length == 1 ? '0'+m : m,	// 月
		'd' : d.toString().length == 1 ? '0'+d : d,	// 日
		'h' : H.toString().length == 1 ? '0'+H : H,	// 时
		'i' : i.toString().length == 1 ? '0'+i : i,	// 分
		's' : s.toString().length == 1 ? '0'+s : s 	// 秒
	};
	for(x in formats){
		formatStr = formatStr.replace(x,formats[x]);	
	}
	return formatStr;
}

//输出字符串前后几位
function substr(str,before,after){
    let strlen = str.length;
    return str.substring(0,before)+'...'+str.substring(strlen-after,strlen);
}

//获取URL参数
function getUrlParam(name){
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for(var i=0;i<vars.length;i++){
		var pair=vars[i].split("=");
		if(pair[0]==name){return pair[1];}
	}
	return false;
}
