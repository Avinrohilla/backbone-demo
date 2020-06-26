import * as Backbone from 'backbone';
import Employee from '../models/Employee';

let EmployeeCollection = Backbone.Collection.extend({
    url: "https://jsonplaceholder.typicode.com/users",
    model: Employee
});

export default EmployeeCollection;

