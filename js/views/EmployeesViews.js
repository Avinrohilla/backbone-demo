define([
    'jquery',
    'underscore',
    'backbone',
    'views/EmployeeView',
    'collections/EmployeeCollections'
], function($, _, Backbone,EmployeeView,EmployeeCollections) {
    let EmployeesViews = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
           let collection = new EmployeeCollections();
             collection.fetch({
                success: function(item){
                    let employees = item.models[0].attributes.data.splice(0,10);
                    _.each(employees,function(emp){
                        var employees =  new EmployeeView({
                            model:emp
                        });
                        $('#employeeBox').append(employees.render().$el);
                    },this)
                }
            })
            return this;  
        }
    });
    return EmployeesViews;
});