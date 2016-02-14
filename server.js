'use strict';

var fs = require('fs'),
	async = require('async'),
	express = require('express'),
	_ = require('underscore');

// Constants
var PORT = 8080;

// App
var app = express();


app.use('/css',express.static('css'));
app.use('/fonts',express.static('fonts'));
app.use('/src',express.static('src'));
app.use('/bower_components',express.static('bower_components'));
app.use('/require.js',express.static('bower_components/requirejs/require.js'));
app.use('/src',express.static('src'));
app.use('/main-built.js',express.static('public/main-built.js'));

function readAsync(file,callback){

}

app.param(['page'], function (req, res, next, pageId) {
	var pagesConfig = require('./pages.config.json');
	if(pagesConfig[pageId]){
		var rootPath = 'src/templates/';
		var paths = {
			layout:rootPath+'layout.tpl.html',
			footer:rootPath+'footer.tpl.html',
			main:rootPath+'pages/'+pageId+'.main.tpl.html',
			sidebar:rootPath+'pages/'+pageId+'.sidebar.tpl.html'
		};

		async.map(paths,function(file,callback){
			fs.readFile(file, 'utf8', function(err,data){
				callback(null,data);
			});
		},function(err,templates){
			_(templates).extend(pagesConfig[pageId]);
		    var html = _.template(templates.layout)(templates);
			res.send(html);
		});
	}else{
		throw 'not a page';
	}
});

app.get('/page-:page',function(req,res,next){
	/*fs.readFile('./src/templates/layout.tpl.html','utf8',function(err,data){
		if (err) throw err;
		res.send(_.template(data)({title:'Nouveau Document'}));
	});*/
});

app.use(express.static('public'));


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);