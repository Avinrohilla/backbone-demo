import * as Backbone from 'backbone';
import Employee from '../models/Employee';

function EmployeeCollection() {
    var EmployeeCollection = Backbone.Collection.extend({
        url: "https://jsonplaceholder.typicode.com/users",
        model: Employee
    });
    return EmployeeCollection;
}
export default EmployeeCollection;

