require.config({
	baseUrl: ".",
    paths: {
        jQuery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        "bootstrap-sass": "../bower_components/bootstrap-sass/assets/javascripts/bootstrap"
    },
    packages: [

    ],
    shim: {

    }
});
require(['app']);