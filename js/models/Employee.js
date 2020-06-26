define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    let Employee = Backbone.Model.extend({
        urlRoot: "http://dummy.restapiexample.com/api/v1/employees"
    });
    return Employee;
});
