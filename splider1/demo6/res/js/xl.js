class xlModuleClass{
    //初始化

    constructor(){
        this.caches=[];
        this.setter = {
           apiUrl:'{$path}'
        };
        $(()=>{   
            //监听Hash改变
            window.onhashchange = ()=>{
                xl.entryPage();
            };
            //监听页面跳转
            $('body').on('click','*[xl-href]',(e)=>{
                this.toPage($(e.currentTarget).attr('xl-href'));
            });
            this.entryPage();
        });
    }

    //渲染
    render(target,url,data={},callback){ 
        this.getTpl(`view/${url}`,(tpl)=>{
            //渲染模版
            this.renderLaytpl(target,tpl,data,callback);
        });
    }

    //渲染窗口
    showWin(url,data={},callback){
        if($("#winDiv").length==0){
            $('body').append(`
                <div class="winMask"></div>
                <div id="winDiv" class="winDiv">
                    <div class="colse" onclick="xl.closeWin();"></div>
                    <h2></h2>
                    <div class="body"></div>
                </div>
            `);
        }
        $(`#winDiv h2`).html('loading...');
        $(`#winDiv .body`).html(`
            <div class="cssload-loader">
                <div class="cssload-inner cssload-one"></div>
                <div class="cssload-inner cssload-two"></div>
                <div class="cssload-inner cssload-three"></div>
            </div>
        `);
        $('#winDiv').fadeIn(200);
        $('.winMask').fadeIn(200);
        $('body').addClass("noscroll");
        //渲染模版
        this.getTpl(`view/${url}`,(tpl)=>{
            $(`#winDiv h2`).html(tpl.title);
            this.renderLaytpl(`#winDiv .body`,tpl,data,callback);
        });
    }

    //渲染模板
    renderLaytpl(target,tpl,data={},callback=null){
        layui.laytpl(tpl.html).render(data,(reHtml)=>{
            $(target).html(reHtml);
            $(target).append(tpl.template);
            //执行初始化
            //setTimeout(()=>{
                if(window[`initialize_${tpl.id}`]){ window[`initialize_${tpl.id}`](data); }
                //回调
                if(callback){ callback(); }
            //},3000);
        }); 
    }

    //关闭窗口
    closeWin(){
        $('.winDiv').fadeOut(200);
        $('.winMask').fadeOut(200);
        $('body').removeClass("noscroll");
    }

    //获取模版
    getTpl(url,callback){
        if(this.caches[url]){
            callback(this.caches[url]);
        }else{
            $.get(`${url}.html`,(res)=>{
                let tid = this.randomString(8);
                let script = this.cutStr(res,'<script>','</script>');
                let title = this.cutStr(res,'<title>','</title>');
                let template = this.getTemplateForHtml(res);
                if(title==''){ title='LUCK HASH'; }
                script  = `function initialize_${tid}(d){${script}}`;
                let tpl = {
                    id     : tid,
                    title  : title,
                    html   : this.getHtml(res),
                    script : script,
                    template : template,
                }
                if(tpl.script){
                    $('body').append(`<script type="text/javascript">/*filePath:${url}.html*/\r\n${tpl.script}</script>`);
                }
                this.caches[url]=tpl;
                callback(tpl);
            });
        }
    }

    //剪切字符串
    cutStr(str,start,end){
        let arr=str.split(start);
        if(arr.length>1){
            let arr2=arr[1].split(end);
            return arr2[0];
        }else{
            return '';
        }
    }

    //移除script标签获得html内容
    getHtml(html){
        html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");
        html = html.replace(/<template([.\s\S]*?)<\/template>/gi,"");
        return  html;
    }

    //获得模板列表
    getTemplateForHtml(html){
        let exp = /<template([.\s\S]*?)<\/template>/ig;
        let result ;
        let arr = [];
        while((result=exp.exec(html))!=null){
            arr.push(result[0]);
        }
        return arr.join('');
    }

    //生成随机字符
    randomString(length){
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for(var i=length;i>0;--i){
            result += str[Math.floor(Math.random()*str.length)]
        }
        return result
    }

    //初始化页面
    entryPage(){
        let urlHash = window.location.hash;
        let pInfo = {};
        if(!urlHash || urlHash==''){
            pInfo = {url:'index',params:{}};
        }else{
            pInfo = this.analyzeUrl(urlHash);
            if(pInfo.url=='' || pInfo.url=='/'){  pInfo.url='index'; }
        }
        this.render('#xlPageContainer',pInfo.url);
    }

    //请求API
    req(opts){
        //补全API地址
		opts.url = this.setter.apiUrl.replace("{$path}",opts.api);
		//初始化相关变量
		let that    = this;
		let success = opts.success;
		let error   = opts.error;
		opts.data   = opts.data || {};
        //如果有本地用户token，则附加上
        let userToken = localStorage.getItem('user_token');
        if(userToken){ opts.data.user_token=userToken; }
		//移除选项中不需要的函数
		delete opts.success;
		delete opts.error;
        //显示AJAX图标
        let showLoadIndex=-1;
        if(opts.showLoad){ showLoadIndex=layer.load(1,{shade:[0.2,'#000']}); }
		//开始AJAX请求
		return $.ajax($.extend({
			dataType:'json',
            xhrFields:{withCredentials:true},
            beforeSend:function(xhr){
                xhr.withCredentials = true;
            },
			success:(res)=>{
                //关闭AJAX加载图标

                console.log("res:",res["code"]);
                layer.close(showLoadIndex);
				//只有code=0才一切正常
				if(res['code']==0 || res['status']=="success"){
                    if(typeof opts.done === 'function'){ opts.done(res.data,res) }
				//登录状态失效，清除本地 access_token，并强制跳转到登入页
				}else if(res['code'] == 1001){
                    //清空登录信息
                    removeLoginInfo();
                    //跳转到首页
                    this.toPage('index');
				//其他异常
				}else{
					if(typeof error === 'function'){
						error(res);
					}else{
						if(res['msg']){
                            layer.alert(res['msg'],{title:'系统提示'});
						}else{
							// layer.msg('返回状态码异常');		
						}
					}
				}
				//只要 http 状态码正常，无论 response 的 code 是否正常都执行 success
				if(typeof success === 'function'){ success(res); }
			},
			error:(e,code)=>{
                //关闭AJAX加载图标
                layer.close(showLoadIndex);
                //提示错误
				let errorText = `API Error - ${opts.api} - ${code}`;
				layer.msg(errorText);
			}
		},opts));
    }

	//解析路径，切割成页面地址和json参数
	analyzeUrl(url){
        url = url.replace('#',"");
		let urls = [];
		let params = {};
		let arr=url.split('/');
		for(let x in arr){
			let str = arr[x];
			if(str!=''){
				if(str.indexOf('=')!=-1){
					tArr=str.split('=');
					params[tArr[0]] = tArr[1];
				}else{
					urls.push(str);
				}
			}
		}
		return {url:'/'+urls.join('/'),params:params}
	}

    //跳转到页面
    toPage(path){
        if(path=='' || path=='/'){ path='/index'; }
        window.location.hash = path;
    }

    
}


//分页类
class xlPageClass{

    render(listDiv,params){
        this.first = 0;
        this.params = params;
        if(!params.limit){ params.limit=9999; }
        if(params.done){ this.done=params.done; }
        if(params.eventFuns){ this.eventFuns=params.eventFuns; }
        this.postData = {page:1,limit:this.params.limit};
        this.reload(listDiv,params.postData);
    }

	//渲染列表
	reload(listDiv,postData){
		if(postData){ 
			this.postData = $.extend(this.postData,postData);
			this.postData.page=1;
		}
		xl.req({
			api:this.params.api,
			data:this.postData,
			done:(data)=>{
				//渲染模版
				let tplHtml = $('#'+listDiv+'-tpl').html();		
                tplHtml = `{{# layui.each(d.list,function(index,vo){ }}${tplHtml}{{# }); }}`;
                if(data.count==0){ tplHtml='<div class="notip">没有更多数据了</div>'; }
				layui.laytpl(tplHtml).render(data,(html)=>{
					$('#'+listDiv).html(html);
                    if(typeof this.done === 'function'){ this.done(data); }
					//绑定按钮点击事件
					$('#'+listDiv+' [data-event]').on('click',()=>{
						var index = $(this).data('index');
						var event = $(this).data('event');
						var data = data.list[index];
						this.eventFuns[event](data,this);
					});
				});
				//重新渲染分页
				if(this.first==0 || postData){
					layui.laypage.render({
						elem:listDiv+'-page',	//分页对象ID
						count:data.count,
						limit:this.params.limit,
                        jump:(obj,first)=>{
                            if(!first){
                                this.postData.page =  obj.curr;
                                this.reload(listDiv);
                            }
                        }
					});
					this.first=1;
				}
			}
		});
	}
}

//分页类
class flowClass{

    //初始化
    constructor(){
        this.params={}
    }
        
    render(listDiv,params){
        this.params[listDiv] = params;
        this.params['first'] = true;
        this.reload(listDiv,params.postData);
    }

	//渲染列表
	reload(listDiv,postData){
        $('#'+listDiv).html('');
        let limit = this.params[listDiv].limit || 20;
        layui.flow.load({
            elem:'#'+listDiv,
            done:(page,next)=>{
                xl.req({
                    api:this.params[listDiv].api,
                    data:$.extend({'limit':limit,'page':page},postData),
                    done:(data)=>{
                        //渲染模版
                        let tplHtml = $('#'+listDiv+'-tpl').html();		
                        tplHtml = `{{# layui.each(d.list,function(index,vo){ }}${tplHtml}{{# }); }}`;
                        if(page==1 && data.count==0){ tplHtml='<div class="notip"></div>'; }
                        layui.laytpl(tplHtml).render(data,(html)=>{
                            let maxPage = parseInt((data.count+limit-1)/limit);
                            next(html,page<maxPage); 
                            //绑定按钮点击事件
                            $('#'+listDiv+' [data-event]').on('click',()=>{
                                var index = $(this).data('index');
                                var event = $(this).data('event');
                                var data = data.list[index];
                                this.params[listDiv].eventFuns[event](data,this);
                            });
                        });
                    }
                });
            }
        });
	}
}

var xl = new xlModuleClass();
var xlPage = new xlPageClass();
var xlFlow = new flowClass();
