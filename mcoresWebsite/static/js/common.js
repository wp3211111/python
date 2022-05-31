
 $(window).on('load', function () {
    jQuery(".preloader").fadeOut(1000);
});

function trans(key)
{
    let lang = commonFunction.lang;
    return arrLang[lang][key];
}

var commonFunction = {
    api:'',
    downLoadUrl:'',
    params:{},
    register:{},
    type:2,
    phoneArea:{},
    searchtimer:null,
    sendCodeTimer:null,
    count:60,
    lang:'en',
    init:function(type)
    {
        this.api = getCommonApi();
        this.downLoadUrl = getCommonUrl();
        
        this.type = type;
        var that = this;
        this.initLang();
        let languageType = that.getLangeMap();

        $.ajax(
            {
                url:"../ashx/getPlatParam.ashx",
                method:'post',
                dataType: 'JSON',
                async:false,
                data:{
                    languageType: languageType
                },
                success: function(data){
                   that.params = data.data;
                },
                error:function(err){
                    console.log(err);
                }					
        });

        this.getLangeList();

        $(".down-app").click(function(){
            var lang = localStorage.getItem('lang');
            let params = '';

            if (lang)
            {
                params = "?lang="+lang;
            }
            location.href = that.downLoadUrl + params;
        });
    },
   
    initLang:function()
    {
        
        let lang = this.lang;

        if ('localStorage' in window) {
            
            lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
            if (!Object.keys(arrLang).includes(lang)){
                lang = this.lang;
            }

           
            this.lang = lang;
        }

       
        $(".lang").each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });

        $("#language-list").on('click','.translate',function () {
            var lang = $(this).attr("id");

            // update localStorage key
            if ('localStorage' in window) {
                localStorage.setItem('lang', lang);
                location.reload();
                return;
            }
        
            $(".lang").each(function (index, element) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
            });
        });
    },
    toast:function(msg)
    {
        layer.open({
            content: msg
            ,skin: 'msg'
            ,time: 2
        });
        return;
    },
    updateHome:function()
    {
        let that  = this;

		$('title').html(this.params.PRODUCT_NAME)
        $("#logo").attr('src',this.params.appLogoUri);
        $("#h5-url").attr('href',this.params.URI_WAP);
        $("#ios-url").attr('href',this.params.URI_DOWN_IOS);
        $("#android-url").attr('href',this.params.URI_DOWN_ANDROID);
        $("#other-url").attr('href',this.params.URI_DOWN_ANDROID);
    },
    updateDown:function()
    {
        $(".logo-img").attr('src',this.params.PRODUCT_LOGO);
        $("#name").html(this.params.PRODUCT_NAME);

    },
    getDownloadList:function()
    {
        let that = this;
        let languageType = this.getLangeMap();

        $.ajax(
            {
                url:"../ashx/getDownLoadList.ashx",
                method:'post',
                dataType: 'JSON',
                async:false,
                data:{
                    languageType: languageType
                },
                success: function(res){
                    //update list
                    var html = $("#list").html();
                    var tempFn = doT.template(html);
                    var resultText = tempFn(res.data);
                    $("#download-box").html(resultText);

                    $(".lang").each(function (index, element) {
                        $(this).text(arrLang[lang][$(this).attr("key")]);
                    });
                },
                error:function(err){
                    console.log(err);
                }					
        });
    },
    updateReg1:function()
    {
        
        let type =this.params.regAllowTypeCode;

        let isShowPhone = false;
        let isShowEmail = false;
        let indexActive = 2;

        if (type == 0)
        {
            isShowPhone = true;
            isShowEmail = true;

            let regType = this.params.APP_REG_TYPE_DEFAULT;
            if (regType)
            {
                indexActive = 1;
            }
        }
        if (type == 1)
        {
            isShowPhone = true;
            isShowEmail = false;
            indexActive = 1;
        }
        if (type == 2)
        {
            isShowPhone = false;
            isShowEmail = true;
            indexActive = 2;
        }
        if (type == 3)
        {
            isShowPhone = false;
            isShowEmail = false;

            indexActive = 1;
        }



        if (isShowPhone)
        {
            $("#login-url").removeClass('hidden');
        }
        if (isShowEmail)
        {
            $("#reg-url").removeClass('hidden');
        }

        if (!isShowEmail && !isShowEmail)
        {
            $("#phone-box").removeClass('hidden');
        }

        this.type = indexActive;
        
        var query=location.search;


        if (this.params.APP_IS_SHOW_VALI_PIC == 1)
        {
            $(".user-code").removeClass('hidden');
            this.drawCode();
        }

        if (this.params.APP_IS_SHOW_REG_UNAME == 1)
        {
            $(".user-name").removeClass('hidden');
        }

        if (this.params.isVerificationCode == 0)
        {
            $(".user-verifyCode").removeClass('hidden');
        }

        if (this.params.isRegCode == 0)
        {
            $(".user-tj").removeClass('hidden');

            var code = this.getUrlParam('c');
            if (code)
            {
                $("#usertj").val(code);
				$("#usertj").attr('disabled',true);
            }
        }

        if(this.params.isShowPhoneAreaCode == 1)
        {
            this.getPhoneArea();
            $("#phoneArea").removeClass('hidden');

            $("#phone-box .userLoginId").css('text-indent','1.8rem');
        }

        this.changeTab(indexActive);


        let that = this;
        $("#logo").attr('src',this.params.PRODUCT_LOGO);
        $("#app-name").html(this.params.PRODUCT_NAME);

        $("#imgcanvas").click(function(){
            that.drawCode();
        });

        $("#reg-btn").click(function(){
            that.register();
        });

        $("#verifyCodeBox").click(function(){
            that.sendCode();
        })


        $("#phoneArea").click(function(){
            that.renderSearch(that.phoneArea);

            $(".search-area").on("input",".search",function(){
                console.log('search');
                if (that.searchtimer)
                {
                    clearTimeout(that.searchtimer);
                }
                that.searchtimer = setTimeout(function(){
                    var data = that.searchAction(that.phoneArea);
                    that.updateSearch(data);
                    that.searchtimer = null;
                }, 500);
            });
        });

        $(".login_tab").click(function(){
            let val = $(this).data('val');
            that.type = val;

            that.changeTab(val);
        });
    },
    changeTab(type){
        $(".login_tab").removeClass('login_active');
        $(".account-box").addClass('hidden');

        
        if (type == 1)
        {
            $("#login-url").addClass('login_active');
            $("#phone-box").removeClass('hidden');
            $("#email-box").addClass('hidden');
        }
        if (type == 2)
        {
            $("#reg-url").addClass('login_active');
            $("#email-box").removeClass('hidden');
            $("#phone-box").addClass('hidden');
        }
    },
    renderSearch(data)
    {
        var html = $("#area-search").html();
        var resultText = "<div class='search-layer'>"+html+"</div>";

        layer.open({
            type: 1
            ,content: resultText
            ,style: 'position:fixed;background-color:#f7f6fb;overflow: scroll; bottom:0; left:0; width: 100%; height: 80%; padding:10px 0; border:none;'
        });

        this.updateSearch(data);


    },
    updateSearch(data)
    {
        var html = $("#area-search-content").html();
        var tempFn = doT.template(html);
        var resultText = tempFn(data);
        let that = this;

        $(".search-layer .content-box").html(resultText);
        
        $(".search-area").on("input",".search",function(){
            if (that.searchtimer)
            {
                clearTimeout(that.searchtimer);
            }
            that.searchtimer = setTimeout(function(){
                var data = that.searchAction(that.phoneArea);
                that.updateSearch(data);
                that.searchtimer = null;
            }, 500);
        });

        $(".content-box").on("click",".item",function(){
            var code = $(this).data('code');
            $("#phoneArea").html(code);
            layer.closeAll();
        })
    },
    searchAction(data)
    {
        var key = $(".search-layer .search").val();
        if (key == '') {
            data = this.phoneArea;
        }

       
        var tempArray = [];
        
        for (var i = 0; i < data.length; i++) {
            if (data[i].areaCode.indexOf(key) != -1) {
                tempArray.push(data[i]);
                continue;
            }
            if ((data[i].areaName.toUpperCase()).indexOf((key.toUpperCase())) != -1) {
                tempArray.push(data[i]);
                continue;
            }
        }

        return tempArray;
    },
    
    drawCode:function() {
        var canvas_width=$('#imgcanvas').width();
        var canvas_height=$('#imgcanvas').height();

        var canvas = document.getElementById("imgcanvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;
        var show_num = [];
        
        for (var i = 0; i < 4; i++) {  
            var j = Math.floor(Math.random() * aLength);
            
            var deg = Math.random() - 0.5; 
            var txt = aCode[j];
            show_num[i] = txt.toLowerCase();

            context.font = "bold 23px Arial";

            var x = 10 + i * 20;
            var y = 20 + Math.random() * 8;

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = this.randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { 
            context.strokeStyle = this.randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { 
            context.strokeStyle = this.randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }

        this.register.pic_code = show_num.join("");

        return show_num;
    },
    randomColor:function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    },
    register()
    {
        let that = this;

        let pic_code = $("#picCode").val();
        let userLoginId = '';

        if (!$("#email-box").hasClass('hidden'))
        {
            userLoginId = $("#email-box .userLoginId").val();
        }

        if (!$("#phone-box").hasClass('hidden'))
        {
            userLoginId = $("#phone-box .userLoginId").val();
        }

        
        let userPassword = $("#userPassword").val();
        let VerificationCode = $("#verifyCode").val();
        let realName = $("#realName").val();
        let LoginType = this.type;
        let areaCode = $("#phoneArea").html();

        if (areaCode == undefined)
        {
            areaCode = '';
        }
        let userCode = $("#usertj").val();

        let languageType = this.getLangeMap();

        

        if (this.params.APP_IS_SHOW_VALI_PIC == 1)
        {
            if (pic_code.toLowerCase() !== this.register.pic_code)
            {
                let msg =trans('errorPicCode');
                that.toast(msg);
                return;
            }
        }


        $("#reg-btn").prop( "disabled",true);


        if (this.params.APP_IS_SHOW_REG_UNAME == 1)
        {
            let params = {
                LoginType:LoginType,
                userLoginId:userLoginId,
                VerificationCode:VerificationCode,
                userCode:userCode,
                userPassword:userPassword,
                areaCode:areaCode,
                realName:realName,
                languageType:languageType
            };

            $.ajax(
                {
                    url:"../ashx/setUserRegAreaCodeAndName.ashx",
                    method:'post',
                    dataType: 'JSON',
                    data:params,
                    success: function(res){


                       if (res.code == 0)
                       {
                           that.toast(res.message);
                           $("#reg-btn").prop( "disabled",false);
                           return;
                       }
                       else {
                            that.toast(trans('regOk'));
                            $("#reg-btn").prop( "disabled",false);
                            that.clearAll();


                            return;
                       }
                    },
                    error:function(err){
                        that.toast(res.message);
                        $("#reg-btn").prop( "disabled",false);
                    }					
            });
        }
        else {

            let params = {
                LoginType:LoginType,
                userLoginId:userLoginId,
                VerificationCode:VerificationCode,
                userCode:userCode,
                userPassword:userPassword,
                areaCode:areaCode,
                languageType:languageType
            };

            $.ajax(
                {
                    url:"../ashx/setUserRegAreaCode.ashx",
                    method:'post',
                    dataType: 'JSON',
                    data:params,
                    success: function(res){
                       if (res.code == 0)
                       {
                           that.toast(res.message);
                           $("#reg-btn").prop( "disabled",false);
                           return;
                       }
                       else {
                            that.toast(trans('regOk'));
                            $("#reg-btn").prop( "disabled",false);
                            that.clearAll();
                           
                            return;
                       }
                    },
                    error:function(err){
                        console.log(err);
                        that.toast(res.message);
                        $("#reg-btn").prop( "disabled",false);
                    }					
            });
        }
    },
    clearAll()
    {
        $("#picCode").val('');
        $("#imgcanvas").click();
        $("#email-box .userLoginId").val('')
        $("#phone-box .userLoginId").val('');
        $("#userPassword").val('');
        $("#verifyCode").val('');
        $("#realName").val('');
        $("#usertj").val('');

    },
    getLangeMap()
    {
        let langIndex = this.lang;
        let map = {
            'en':3,
            'zh-CN':1,
            'zh-TW':2,
            'vi':5,
            'th':6,
            'ja':4,
            'ko':7,
            'fr':9,
            'de':8,
            'es':10,
            'ru':11,
            'pt':12,
            'be':13,
        }

        let index = map[langIndex];
        if (!index)
        {
            return 3;
        }
        return index;
    },
    getPhoneArea()
    {
        let that = this;
        let languageType = this.getLangeMap();

        $.ajax(
            {
                url:"../ashx/getPhoneAreaCodeList.ashx",
                method:'post',
                dataType: 'JSON',
                data:{
                    languageType: languageType
                },
                success: function(data){
                   that.phoneArea = data.data;
                   $("#phoneArea").html(that.phoneArea[0]['areaCode']);
                },
                error:function(err){
                    console.log(err);
                }					
        });
    },
    sendCode()
    {
        
        let that = this;
        let languageType = that.getLangeMap();

        if (!that.sendCodeTimer)
        {
            this.count = 60;

            let uLoginId = '';

            if (this.type == 2)
            {
                uLoginId = $("#email-box .userLoginId").val();
                
                if (!uLoginId)
                {
                    that.toast(trans('accountEmpty'));
                    return;
                   
                }
            }
            if (this.type == 1)
            {
                uLoginId = $("#phone-box .userLoginId").val();
                
                if (!uLoginId)
                {
                    that.toast(trans('account1Empty'));
                    return;
                   
                }
            }

            if (this.type == 2)
            {
                $.ajax(
                    {
                        url:"../ashx/getUserCode.ashx",
                        method:'post',
                        dataType: 'JSON',
                        data:{
                            languageType: languageType,
                            userLoginId: uLoginId,
                            codeType: 1,
                            LoginType: this.type
                        },
                        success: function(res){
                           if (res.code == 0)
                           {
                               that.toast(res.message);
                               return;
                           }
                           else {
                            that.countdown();
                           }
                        },
                        error:function(err){
                            console.log(err);
                        }					
                });
               
            }
            if (this.type == 1)
            {
                let areaCode = $("#phoneArea").html();
                $.ajax(
                    {
                        url:"../ashx/getUserCodeArea.ashx",
                        method:'post',
                        dataType: 'JSON',
                        data:{
                            languageType: languageType,
                            userLoginId: uLoginId,
                            codeType: 1,
                            LoginType: this.type,
                            areaCode:areaCode
                        },
                        success: function(res){
                           if (res.code == 0)
                           {
                               that.toast(res.message);
                               return;
                           }
                           else {
                            that.countdown();
                           }
                        },
                        error:function(err){
                            console.log(err);
                        }					
                });
            }
           
        }
    },
    countdown()
    {
        let that = this;
        this.count -= 1;
        if (this.count == 0)
        {
            clearTimeout(this.sendCodeTimer);
            this.sendCodeTimer = null;

            $(".verifyCodeBox").html(trans('sendyzm'));
            return;
        }

        $(".verifyCodeBox").html(this.count);

        that.sendCodeTimer = setTimeout(function(){
            that.countdown();
            
        }, 1000);
    },
    getUrlParam:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg);  
        if (r != null) return unescape(r[2]); return null; 
    },
    getLangeList:function() {
        let languageType = this.getLangeMap();
        $.ajax(
            {
                url:"../ashx/getLangList.ashx",
                method:'post',
                dataType: 'JSON',
                async:false,
                data:{
                    languageType: languageType
                },
                success: function(data){
                    let list = data.data;

                    let html = '';
                    list.forEach(function(item){
                        let sign = item.langSign;
                        let name = item.langName;
                        let str = `<button class="translate yybtn" id="${sign}">${name}</button>`;

                        html += str;
                    });

                    $("#language-list").html(html);
                },
                error:function(err){
                    console.log(err);
                }					
        });
    },
}