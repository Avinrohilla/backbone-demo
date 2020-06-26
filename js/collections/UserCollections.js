import * as Backbone from 'backbone';
import User from '../models/User';

let UserCollection = Backbone.Collection.extend({
    url: "https://jsonplaceholder.typicode.com/users",
    model: User
});

export default UserCollection;

