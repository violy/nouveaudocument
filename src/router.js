define(['backbone'],function (Backbone) {
	var router, // internal reference
		AppRouter = Backbone.Router.extend({
		routes:{
			":page":"loadPage"
		},
		go:function(route){
			router.navigate(route,{trigger:true});
		},
		loadPage:function(pid){
			//
			console.log('loadPage', pid);
		}
	});
	router = new AppRouter();
	Backbone.history.start({pushState:true});
	return router;
});