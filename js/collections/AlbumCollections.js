import * as Backbone from 'backbone';
import Album from '../models/Album';

let AlbumCollection = Backbone.Collection.extend({
    url: "https://jsonplaceholder.typicode.com/photos",
    model: Album
});

export default AlbumCollection;

