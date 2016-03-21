export default function(err, res) {
    var result = {};
    if(res.body == null){
        result = {
            errorCode: 500,
            message: "server error"
        }
    }else{
        result = res.body;
    }
    return result;
}
