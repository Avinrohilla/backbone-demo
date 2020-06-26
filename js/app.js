define([
    'underscore',
    'backbone',
    'routing/Router',
    'views/EmployeesViews',
], function(_, Backbone, Router,EmployeesViews) {
    let initialize = function(){
      new Router();
      new EmployeesViews();
    }
    return {
        initialize:initialize
    };
});