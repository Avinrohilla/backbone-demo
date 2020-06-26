define([
    'jquery',
    'underscore',
    'backbone',
    'models/Employee'
], function($, _, Backbone, Employee) {
    var EmployeeCollection = Backbone.Collection.extend({
        url: "http://dummy.restapiexample.com/api/v1/employees",
        model: Employee
    });
    return EmployeeCollection;
});

