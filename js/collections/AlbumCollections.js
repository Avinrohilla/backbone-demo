define([
    'jquery',
    'underscore',
    'backbone',
    'models/Album'
], function($, _, Backbone, Album) {
    var AlbumCollection = Backbone.Collection.extend({
        url: "https://jsonplaceholder.typicode.com/photos",
        model: Album
    });
    return AlbumCollection;
});

