define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
], function($, _, Backbone,mustache) {
    var HomeView = Backbone.View.extend({
        render: function(){
            this.$el.html("Home Page");
            return this;
        }
    });
    return HomeView;
});

