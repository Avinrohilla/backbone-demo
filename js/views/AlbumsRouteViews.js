define([
    'jquery',
    'underscore',
    'backbone',
    'views/AlbumView',
    'collections/AlbumCollections'
], function($, _, Backbone,AlbumView,AlbumCollections) {
    let AlbumsRouteViews = Backbone.View.extend({
        initialize: function(empId){
            this.render(empId);
        },
        render: function(empId){
           let collection = new AlbumCollections();
             collection.fetch({
                success: function(item){
                    let albums = item.models;
                     _.each(albums,function(album){
                         if(album.attributes.albumId==empId){
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
    return AlbumsRouteViews;
});