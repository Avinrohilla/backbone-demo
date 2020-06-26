define([
    'jquery',
    'underscore',
    'backbone',
    'views/AlbumView',
    'collections/AlbumCollections'
], function($, _, Backbone,AlbumView,AlbumCollections) {
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
});