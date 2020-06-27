import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import AlbumView from '../views/AlbumView';
import AlbumCollections from '../collections/AlbumCollections';
 let AlbumsFilterViews = Backbone.View.extend({
        initialize: function(userId){
            this.render(userId);
        },
        render: function(userId){
           let collection = new AlbumCollections();
             collection.fetch({
                success: function(item){
                    let albums = item.models;
                     _.each(albums,function(album){
                         if(album.attributes.albumId==userId){
                         var albums =  new AlbumView({
                            model:album.attributes
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