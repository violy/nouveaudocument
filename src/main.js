require.config({
	baseUrl: ".",
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
	    backbone: "../bower_components/backbone/backbone",
        "bootstrap-sass": "../bower_components/bootstrap-sass/assets/javascripts/bootstrap"
    },
    packages: [

    ],
    shim: {
	    "jquery":{exports:"$"},
	    "underscore":{exports:"_"},
		"backbone":{
			exports:"Backbone",
			deps:["underscore","jquery"]
		}
    }
});
require(['app']);