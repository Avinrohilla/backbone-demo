import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import EmployeeView from '../views/EmployeeView';
import EmployeeCollections from '../collections/EmployeeCollections';

 function EmployeesViews() {
    let EmployeesViews = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
           let collection = new EmployeeCollections();
             collection.fetch({
                success: function(item){
                    let employees = item.models.splice(0,10);
                    _.each(employees,function(emp){
                        var employees =  new EmployeeView({
                            model:emp.attributes
                        });
                        $('#employeeBox').append(employees.render().$el);
                    },this)
                }
            })
            return this;  
        }
    });
    return EmployeesViews;
}

export default EmployeesViews;