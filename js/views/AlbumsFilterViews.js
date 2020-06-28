import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import AlbumView from '../views/AlbumView';
import AlbumCollections from '../collections/AlbumCollections';
 let AlbumsFilterViews = Backbone.View.extend({
        collection: new AlbumCollections(),
        initialize: function(userId){
            this.render(userId);
        },
        render: function(userId){
             this.collection.fetch({
                success: function(item){
                    _.each(item.toJSON(),function(album){
                         if(album.albumId==userId){
                         var albums =  new AlbumView({
                            model:album
                        });
                        $('#container').append(albums.render().$el);
                    }
                    },this)
                }
            })
            return this;  
        }
    });
    

export default AlbumsFilterViews;