import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import AlbumView from '../views/AlbumView';
import AlbumCollections from '../collections/AlbumCollections';

 function AlbumsViews() {
    let AlbumsViews = Backbone.View.extend({
        initialize: function(){
            this.render();
           
        },
        render: function(){
           let collection = new AlbumCollections();
             collection.fetch({
                success: function(item){
                    let albums = item.models.splice(0,10);
                     _.each(albums,function(album){
                         var albums =  new AlbumView({
                            model:album.attributes
                        });
                        $('#container').append(albums.render().$el);
                        
                    },this)
                }
            })
            return this;  
        }
    });
    return AlbumsViews;
}

export default AlbumsViews;