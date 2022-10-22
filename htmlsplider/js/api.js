

//API地址配置

var rateApiUrl = 'http://www.a8hash.com/api/Public/FindRate?address=TLrfwzSsXw3nxSa2Q5PfiCqtCwnc5hHHHH';						//兑换汇率信息API

var rankingApiUrl = 'http://www.a8hash.com/api/Public/FindRanking?asset={currency}&type={type}';	//排行榜信息API，currency=trx/usdt，type=newest/day/week/month



//apiDemo/ranking_{currency}_{type}.js



var rankingCurrency = 'trx';

var rankingType = 'newest';



//初始化

function api_initialize(argument)

{

    //检查是否在服务器部署

    var isServer = /^http(s*):\/\//.test(location.href);

    if (!isServer) { msg('系统提示：API初始化错误，必须部署到服务器浏览才能访问API。', 10000); return; }

    //载入汇率

    loadRate();

    //绑定排行榜按钮事件

    bindRankingEvent();

    //载入榜单

    reloadRanking();

}



//载入汇率

var late = null;

function loadRate()

{

    console.log("rateApiUrl",rateApiUrl)
    $.getJSON(rateApiUrl, function (res)

    {

        if (res.status != 'success') { msg('汇率载入错误'); return; }

        $('.exchangeDiv .rate i').html("<span>兑换数量= (接收数量 * 市场价) - 油费</span>");

        late = res.data;

        //载入汇率后绑定兑换表单事件

        bindExchangeEvent();

    });

}



//载入排行榜

function reloadRanking()

{

    var apiUrl = rankingApiUrl.replace("{currency}", rankingCurrency).replace("{type}", rankingType);

    $('.rankingDiv .list').html('<table><tr><td class="loadTd"><img src="images/rankingAjax.gif"><br/>载入中……</td></tr></table>');
    console.log("apiUrl",apiUrl)
    $.getJSON(apiUrl, function (res)

    {

        if (res.status != 'success') { msg('榜单载入错误'); return; }

        if (rankingType == 'newest')

        {

            showRankingTableBet(res.data);

        } else

        {

            showRankingTable(res.data);

        }

    });

}



//输出列表（排行）

function showRankingTable(list)

{

    var trsHtml = '';

    var headtml = '';

    //表头

    headtml += '<tr>';

    headtml += '	<th style="width:20%">排名</th>';

    headtml += '	<th style="width:30%">地址</th>';

    headtml += '	<th style="width:10%">币种</th>';

    headtml += '	<th style="width:30%">总派彩</th>';

    headtml += '</tr>';

    //内容

    for (x in list)

    {

        var v = list[x];

        if (x < 3) { num = '<img src="images/' + (x * 1 + 1) + '.png">'; } else { num = parseInt(x) + 1; }

        trsHtml += '<tr>';

        trsHtml += '	<td>' + num + '</td>';

        trsHtml += '	<td>' + v.address + '</td>';

        trsHtml += '	<td>' + v.currency + '</td>';

        trsHtml += '	<td>+' + v.reward + '</td>';

        trsHtml += '</tr>';

    }

    $('.rankingDiv .list').html('<table class="rankingTable">' + headtml + trsHtml + '</table>');

}



//输出列表（派彩）

function showRankingTableBet(list)

{

    var trsHtml = '';

    var headtml = '';

    //表头

    headtml += '<tr>';

    headtml += '	<th style="width:20%">区块哈希</th>';

    headtml += '	<th style="width:20%">地址</th>';

    headtml += '	<th style="width:15%">币种</th>';

    headtml += '	<th style="width:15%">派彩</th>';

    headtml += '	<th style="width:30%">时间</th>';

    headtml += '</tr>';

    //内容

    for (x in list)

    {

        var v = list[x];

        var dates = v.date.split(' ');

        trsHtml += '<tr>';

        trsHtml += '	<td>' + v.hash + '</td>';

        trsHtml += '	<td>' + v.address + '</td>';

        trsHtml += '	<td>' + v.currency + '</td>';

        trsHtml += '	<td>+' + v.reward + '</td>';

        trsHtml += '	<td><span class="date">' + dates[0] + ' </span><span class="time">' + dates[1] + '</span></td>';

        trsHtml += '</tr>';

    }

    $('.rankingDiv .list').html('<table class="newestTable">' + headtml + trsHtml + '</table>');

}



//绑定兑换表单事件

var exchangeType = 'usdt_to_trx';

function bindExchangeEvent()

{

    //切换兑换类型

    $('.exchangeDiv .type ul li').click(function (event)

    {

        exchangeType = $(this).data('type');

        $('.exchangeDiv .type ul li').removeClass('cur');

        $(this).addClass('cur');

        $('.exchangeDiv input').val('');

        $('.exchangeDiv .b1 input').focus();

        if (exchangeType == 'usdt_to_trx')

        {

            $('.exchangeDiv .b1 span').html('USDT');

            $('.exchangeDiv .b2 span').html('TRX');

        } else

        {

            $('.exchangeDiv .b1 span').html('TRX');

            $('.exchangeDiv .b2 span').html('USDT');

        }

    });

    //计算

    $('.exchangeDiv .form button').click(function (event)

    {

        var b1value = $('.exchangeDiv .b1 input').val();

        if (b1value == '') { msg('请填写您要兑换的数量'); return; }

        var b2value;

        if (exchangeType == 'usdt_to_trx')

        {

            //var exchangeMoney = (entry.Money / TRXPrice) * (1 - convert.Late) - gasLastTrxUsdtPrice;

            b2value = (b1value / late.TRXPrice) * (1 - late.Late) - late.gasLastTrxUsdtPrice;

        }

        else

        {

            //var exchangeMoney = (entry.Money * TRXPrice) * (1 - convert.Late) - gasUsdtPrice;//usdt

            b2value = (b1value * late.TRXPrice) * (1 - late.Late) - late.gasUsdtPrice;//usdt

        }

        $('.exchangeDiv .b2 input').val(b2value);

    });

}





//绑定兑换表单事件

function bindRankingEvent()

{

    //切换兑换类型

    $('.rankingDiv .currencys span').click(function (event)

    {

        rankingCurrency = $(this).data('currency');

        $('.rankingDiv .currencys span').removeClass('cur');

        $(this).addClass('cur');

        reloadRanking();

    });

    //切换类型

    $('.rankingDiv .nav ul li').click(function (event)

    {

        rankingType = $(this).data('type');

        $('.rankingDiv .nav ul li').removeClass('cur');

        $(this).addClass('cur');

        reloadRanking();

    });

}



//执行API初始化

api_initialize();

