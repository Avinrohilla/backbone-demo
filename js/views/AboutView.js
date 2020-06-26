define([
    'jquery',
    'underscore',
    'backbone',
    'mustache'
], function($, _, Backbone,mustache) {
    var AboutView = Backbone.View.extend({
        render: function(){
            this.$el.html("About Page");
    
            return this;
        }
    });
    return AboutView;
});

