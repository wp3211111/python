
	//拷贝内容到剪贴板
	function copy(textDiv,btn) {
		let text = $(textDiv).text();
		var clipboard = new Clipboard(btn,{text:function(){return text;}});
		clipboard.on('success',function(e){ msg('复制成功'); });
		clipboard.on('error',function(e){ msg(e); });
	}

	//弹出页面小提示
	function msg(str,time){
		if(!time){ time=3000; }
		$('#tipDiv').html(str).show().css({'opacity':1,'top':'30%'});
		setTimeout(function(){ 
			$('#tipDiv').css({'opacity':0,'top':'35%'});
			setTimeout(function(){ 
				$('#tipDiv').css({'top':'25%'}).hide();
			},1000);
		},time);
	}

	//选择流程
	function showCircuit(num){
		$('.circuitDiv .side li').removeClass('cur');
		$('.circuitDiv .side li[data-num='+num+']').addClass('cur');
		$('.circuitDiv .blocks .item').hide();
		$('.circuitDiv .blocks .item[data-num='+num+']').show();
	}

	//选择“为什么”
	function showWhy(num){
		$('.whyDiv .buts li').removeClass('cur');
		$('.whyDiv .buts li[data-num='+num+']').addClass('cur');
		$('.whyDiv .blocks .item').removeClass('cur');
		$('.whyDiv .blocks .item[data-num='+num+']').addClass('cur');
		var ageWidth = parseInt($('.whyDiv .blocks .item').width()+2);
		$('.whyDiv .blocks').css('margin-left',(ageWidth*(num-1)*-1)+'px');
	}

	//显示浮窗
	function showWin(divName){
		$('.winDiv .item').hide();
		$('.winDiv .'+divName).show();
		$('.winDiv').fadeIn(200);
		$('.winMask').fadeIn(200);
	}

	//监听滚动条，设置导航条透明度
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>18){
			$('.headNav').addClass('in');
		}else{
			$('.headNav').removeClass('in');
		}
	})

	//顶部导航栏点击事件
	$('.headNav a').click(function(){
		var href = $(this).data('href');
		if(href.indexOf("#")!=-1){
			var headNavHeight = $('.headNav').height();
			$('html, body').animate({scrollTop: $(href).offset().top-headNavHeight},500);
		}else{
			showWin(href);			
		}
		return false;
	});

	//绑定流程按钮
	$('.circuitDiv .side li').click(function(event){ showCircuit($(this).data('num')); });

	//绑定"为什么"按钮
	$('.whyDiv .buts li').click(function(event){ showWhy($(this).data('num')); });

	//绑定浮窗关闭按钮
	$('.winDiv .colse').click(function(event){ $('.winDiv').fadeOut(200); $('.winMask').fadeOut(200); });
	$('.winMask').click(function(event){ $('.winDiv').fadeOut(200); $('.winMask').fadeOut(200); });

	//绑定边栏按钮
	$('.sideDiv ul li').click(function(event){ showWin($(this).data('type')); });

	//常见问题展开按钮
	$('.faqDiv .list ul li button').click(function(event){
		if($(this).text()=='展开'){
			$(this).parent().find('div').css({height:'auto',overflow:'scroll'});
			$(this).html('收起');
		}else{
			$(this).parent().find('div').css({height:'12vw',overflow:'hidden'});
			$(this).html('展开');
		}
	});

	//显示默认流程和“为什么”
	showCircuit(1);
	showWhy(1);

	//隐藏提示层：在CSS中写 display:none; 会影响动画效果，故在此执行初始化隐藏
	$('#tipDiv').hide();