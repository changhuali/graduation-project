var express = require('express');
var app     = express();
var path    = require('path');
//模板引擎设置为html
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



//处理api路由
app.get('/api/client/login', function(req, res){
    res.send("success");
})

//处理静态路由
app.get('*', function(req, res){
    res.render("index.html");
})

//服务器错误处理器
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("server error");
})

//404页面处理
app.use(function(req, res, next){
    res.status(404).send("sorry, can not find that");
})

//监听端口
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("graduation.test listening at http://%s:%s", host, port);
});
