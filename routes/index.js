var routes = function (app) {
	//index
	app.get('/', function(req, res){
		res.render('index', {title: 'home'});
	});
	//login
	app.get('/login', function(req, res){
		res.render('login', {title: 'login'});
	});
}

module.exports = routes;