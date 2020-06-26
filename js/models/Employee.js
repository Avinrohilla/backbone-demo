import * as Backbone from 'backbone';

function Employee() {
    let Employee = Backbone.Model.extend({
        urlRoot: "https://jsonplaceholder.typicode.com/users"
    });
    return Employee;
}
export default Employee;
