define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    let Album = Backbone.Model.extend({
        urlRoot: "https://jsonplaceholder.typicode.com/photos"
    });
    return Album;
});
