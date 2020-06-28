import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import AlbumView from '../views/AlbumView';
import AlbumCollections from '../collections/AlbumCollections';


    let AlbumsViews = Backbone.View.extend({
        collection: new AlbumCollections(),
        initialize: function(){
            this.render();
           
        },
        render: function(){
           
             this.collection.fetch({
                success: function(item){
                    let albums = item.toJSON().splice(0,10);
                     _.each(albums,function(album){
                         var albums =  new AlbumView({
                            model:album
                        });
                        $('#container').append(albums.render().$el);
                        
                    },this)
                }
            })
            return this;  
        }
    });
    

export default AlbumsViews;