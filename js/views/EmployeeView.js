import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as mustache from 'mustache';

    let EmployeeView = Backbone.View.extend({
        tagName:'li',
        render: function() {
            let template = $("#employeeTemplate").html();
            let html = mustache.render(template, this.model);
		    this.$el.html(html);
		    return this;
        }
    });
    

export default EmployeeView;