function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if(IsPC() && document.domain == "mobile.momoman.cn"){
    location.href = location.href.replace("mobile.momoman.cn","www.momoman.cn")
}else if(!IsPC() && document.domain == "www.momoman.cn"){
    location.href = location.href.replace("www.momoman.cn","mobile.momoman.cn")
}