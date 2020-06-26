import * as Backbone from 'backbone';

let Album = Backbone.Model.extend({
    urlRoot: "https://jsonplaceholder.typicode.com/photos"
});

export default Album;
