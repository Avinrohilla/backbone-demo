import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import AlbumView from '../views/AlbumView';
import AlbumCollections from '../collections/AlbumCollections';


    let AlbumsViews = Backbone.View.extend({
        collection: new AlbumCollections(),
        initialize: function(userId){
            this.render(userId);
           
        },
        render: function(userId){
           
             this.collection.fetch({
                success: function(item){
                    let albums;
                    if(userId){
                        albums = _.where(item.toJSON(),{albumId:JSON.parse(userId)}).splice(0,10);
                    }else{
                        albums = item.toJSON().splice(0,50);
                    }
                     _.each(albums,(album)=>{
                         let albums =  new AlbumView({ model:album });
                        $('#container').append(albums.render().$el);
                        
                    },this)
                }
            })
            return this;  
        }
    });
    

export default AlbumsViews;