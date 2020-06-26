define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var ContactView = Backbone.View.extend({
        render: function(){
            this.$el.html("Contact Page");
    
            return this;
        }
    });
    return ContactView;
});

