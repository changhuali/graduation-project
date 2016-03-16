var express = require('express');
var app     = express();
var path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render("index.html");
})

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("graduation.test listening at http://%s:%s", host, port);
});
