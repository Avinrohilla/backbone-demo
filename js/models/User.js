import * as Backbone from 'backbone';

let User = Backbone.Model.extend({
    urlRoot: "https://jsonplaceholder.typicode.com/users"
});

export default User;
