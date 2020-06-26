define([
    'jquery',
    'underscore',
    'backbone',
    'mustache'
], function($, _, Backbone,mustache) {
    let AlbumView = Backbone.View.extend({
        
        initialize:function(){
            this.render();
         },
        render: function() {
            let template = $("#albumTemplate").html();
            let html = mustache.render(template, this.model);
		    this.$el.html(html);
		    return this;
        }
    });
    return AlbumView;
});