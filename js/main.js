require.config({
	baseUrl: "js",
    paths: {
        jQuery: "../bower_components/jQuery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        "bootstrap-sass": "../bower_components/bootstrap-sass/assets/javascripts/bootstrap"
    },
    packages: [

    ],
    shim: {

    }
});
require(['app']);