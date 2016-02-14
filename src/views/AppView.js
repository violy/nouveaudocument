// Nouveau Document
// 2016
// SiteView Backbone View
//
define(['underscore', 'jquery', 'backbone','router','models/PageCollection'], function (_, $, Backbone,router,pageCollection) {
	return Backbone.View.extend({
		el:'body',
		events:{
			'click a':'ajaxLink'
		},
		initialize:function(){
			pageCollection.on('displayCurrentPage',this.displayCurrentPage,this);
		},
		displayCurrentPage:function(page){
			var prevPage = this.$('.site');
			prevPage.addClass('slideOut');
			var newPage = page.site().clone();
			setTimeout(function(){
				newPage.removeClass('slideIn');
				prevPage.remove();
			},1750);
			newPage.addClass('slideIn');
			prevPage.after(newPage);

		},
		ajaxLink:function(e){
			e.preventDefault();
			router.go($(e.currentTarget).attr('href'));
		}
	});
});