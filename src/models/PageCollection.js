// Nouveau Document
// 2016
//  Backbone Model
//
define(['underscore', 'jquery', 'backbone', 'router'], function (_, $, Backbone, router) {
	var pageCollection;
	var PageModel = Backbone.Model.extend({
		initialize:function(){
			console.log("init",this.url());
			if(_.isUndefined(this.content())){
				this.loadContent();
			}
		},
		loadContent:function(){
			var model = this;
			$.ajax({
				dataType:'html',
				method:'GET',
				url:model.url()
			}).done(function(data){
				console.log(data);
				model.set({content:data});
			});
		},
		content:function(){return this.get('content')},
		site:function(){return $(this.content()).filter('.site')},
		mainSection:function(){return $(this.content()).filter('.main-section')},
		bodyClass:function(){
			return this.mainSection().data('bodyclass')
		},
		url:function(){return this.get('url');}
	});
	var PageCollection = Backbone.Collection.extend({
		model:PageModel,
		selectedIndex:0,
		initialize:function(){
			this.reset([{
				url:Backbone.history.fragment,
				content:$('html').html()
			}]);
			this.on('change:content',this.changeContent,this);
			router.on('route:loadPage',this.loadPage,this);
		},
		findPage:function(url){
			return this.findWhere({url:url});
		},
		loadPage:function(url) {
			var currentPage = pageCollection.currentPage = pageCollection.findPage(url);
			if (!currentPage) {
				pageCollection.currentPage = this.push({
					url: url
				});
			}else{
				pageCollection.trigger('displayCurrentPage',currentPage);
			}
		},
		changeContent:function(page){
			if(page == pageCollection.currentPage){
				pageCollection.trigger('displayCurrentPage',page);
			}
		}
	});
	pageCollection = new PageCollection();
	return pageCollection;
});