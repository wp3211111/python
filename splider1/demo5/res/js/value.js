var colors = ["#628cc6","#e16b6b","#ffd667"];

//1输 2 赢 3和
function compare(v1,v3){
    if(v1>v3){
        return 2;
    }else if(v1 == v3){
        return 3;
    }
    return 1;
}
function getVal(value){
    var v = parseInt(value);
    if(isNaN(v) || v == 0){
        return 10;
    }else{
        return v;
    }
}

function isNumber(value){
    var v = parseInt(value);
    if(isNaN(v)){
        return true;
    }
    return false;
}

function getValuesByhash(value){
    var arr = value.split("");
    var vval = 0;
    var len = arr.length;
    var last5 = 0;
    var last4 = 0;
    var last3 = 0;
    var last2 = 0;
    var last1 = 0;

    var s2 = false;//false为数字 true为字母
    var s1 = false;
    arr.forEach((val,index)=>{
        var v = parseInt(val);
        if(isNaN(v) == false){
            vval = v;
        }
        if(index == len-5){
            last5 = getVal(val);
        }
        if(index == len-4){
            last4 = getVal(val);
        }
        if(index == len-3){
            last3 = getVal(val);
        }
        if(index == len-2){
            last2 = getVal(val);
            s2 = isNumber(val);
        }
        if(index == len-1){
            last1 = getVal(val);
            s1 = isNumber(val);
        }

    })

    var shuangwei = "1";
    if(s2 != s1){
        shuangwei = "2";
    }

    var y1 = compare(last3,last1); //1输 2 赢 3和
    var y2 = compare(last2,last1);
    var ddz = [
        {
            text:"农民甲<br />"+last3,
            value:last3,
            color:colors[y1-1]
        },
        {
            text:"农民乙<br />"+last2,
            value:last2,
            color:colors[y2-1]
        },
        {
            text:"地主<br />"+last1,
            value:last1,
            color:'#3CB371'
        }
        ];
    var danshuang = "0";
    if(vval%2 == 0){ //偶数
        danshuang =  "2";
    }else{
        danshuang =  "1";
    }
    var daxiao = "0";
    if(vval<5){
        daxiao = "1";
    }else{
        daxiao = "2";
    }

    var zhang = (last3+last4+last5)%10;
    var xian = (last3+last2+last1)%10;
    if(zhang == 0 ){zhang = 10;}
    if(xian == 0 ){xian = 10;}
    var niu = "0";
    if(zhang > xian){
        niu =  "1";
    }else if(zhang == xian){
        niu = "3";
    }else{
        niu = "2";
    }
    var values = {};
    values["ddz"] = ddz;
    values["danshuang"] = danshuang;
    values["shuangwei"] = shuangwei;
    values["daxiao"] = daxiao;
    values["niuniu"] = niu
    return values;
}
