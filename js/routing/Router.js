define([
    'jquery',
    'underscore',
    'backbone',
	'views/HomeView',
	'views/AboutView',
	'views/ContactView',
	'views/AlbumsViews',
	'views/AlbumsRouteViews'
], function($, _, Backbone, HomeView, AboutView,ContactView, AlbumsViews,AlbumsRouteViews) {
var Router = Backbone.Router.extend({
	routes: {
		"": "viewHome",
		"albums/:id": "viewAlbums",
		"about": "viewAbout",
		"contact": "viewAContact",
		"*other": "defaultRoute"
	},

	viewHome: function(){
		$('#container').html('');
		new AlbumsViews();
		//this.loadView(new HomeView());
	},
	viewAbout: function(){
		this.loadView(new AboutView());
    },
    
    viewAlbums: function(id){
		$('#container').html('');
		new AlbumsRouteViews(id);
	},

	viewAContact: function(id){
		this.loadView(new ContactView());
	},

	loadView: function(view){
		// If the currentView is set, remove it explicitly.
		if (this._currentView) {
			this._currentView.remove();
		}
		$("#container").html(view.render().$el);
		
		this._currentView = view;
	}
});
var router = new Router();
Backbone.history.start();
var NavView = Backbone.View.extend({
	events: {
		"click": "onClick"
	},

	onClick: function(e){
		var $li = $(e.target);
		$li.addClass('active');
		$li.parent().siblings().find('a').removeClass('active');
		router.navigate($li.attr("data-url"), { trigger: true });
	}
});
var navView = new NavView({ el: "body" });
return Router;
});