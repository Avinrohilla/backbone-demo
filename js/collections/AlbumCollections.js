import * as Backbone from 'backbone';
import Album from '../models/Album';

function AlbumCollection() {
    var AlbumCollection = Backbone.Collection.extend({
        url: "https://jsonplaceholder.typicode.com/photos",
        model: Album
    });
    return AlbumCollection;
}

export default AlbumCollection;

