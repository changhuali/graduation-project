window.__HMLREQUEST__ = {
    createXHR: function(){
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp = new XHLHttpRequest();
        }else{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlHttp;
    },
    get: function(){

    },
    post: function(){

    },
};
