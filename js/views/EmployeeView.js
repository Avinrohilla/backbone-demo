import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import * as mustache from 'mustache';
function EmployeeView() {
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
}

export default EmployeeView;