import * as Backbone from 'backbone';

let Employee = Backbone.Model.extend({
    urlRoot: "https://jsonplaceholder.typicode.com/users"
});

export default Employee;
