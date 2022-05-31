let globalParams = {
    api:'{SECRET01}',
	apiC:'{SECRET02}',
    downLoadUrl:'/download',
}


let PARAM_GOOGLE_URL = "{KEY}";
let PARAM_AMAZON_URL = "{IV}";

function getCommonApi()
{
    return aesDecrypt(globalParams.api);
}
function getCommonApiC()
{
    return aesDecrypt(globalParams.apiC);
}

function getCommonUrl()
{
    return globalParams.downLoadUrl;
}

function aesDecrypt(encrypted)
{
    if (encrypted == null) return "";

    var PARAM_GOOGLE  = CryptoJS.enc.Utf8.parse(PARAM_GOOGLE_URL);
    var PARAM_AMAZON   = CryptoJS.enc.Utf8.parse(PARAM_AMAZON_URL);
	
    var decrypted =CryptoJS.AES.decrypt(encrypted,PARAM_GOOGLE,
        {
            iv:PARAM_AMAZON,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
		
	let str = decrypted.toString(CryptoJS.enc.Utf8);
	str = str.replace(/\0/g, '');
    return str;
}

