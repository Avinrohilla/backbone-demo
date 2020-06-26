define([
    'jquery',
    'underscore',
    'backbone',
    'mustache'
], function($, _, Backbone,mustache) {
    let EmployeeView = Backbone.View.extend({
        tagName:'li',
        render: function() {
            let template = $("#employeeTemplate").html();
            let html = mustache.render(template, this.model);
		    this.$el.html(html);
		    return this;
        }
    });
    return EmployeeView;
});