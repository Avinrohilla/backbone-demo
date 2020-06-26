require.config({
	paths: {
		jquery:'../node_modules/jquery/dist/jquery.min',
		underscore:'../node_modules/underscore/underscore-min',
		backbone:'../node_modules/backbone/backbone-min',
		mustache:'../node_modules/mustache/mustache.min'
	}
});
define([
    'app'
], function(App) {
    App.initialize();
});

