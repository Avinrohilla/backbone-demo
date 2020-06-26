import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import * as mustache from 'mustache';
function AlbumView() {
    let AlbumView = Backbone.View.extend({
        
        initialize:function(){
            this.render();
         },
        render: function() {
            let template = $("#albumTemplate").html();
            let html = mustache.render(template, this.model);
		    this.$el.html(html);
		    return this;
        }
    });
    return AlbumView;
}

export default AlbumView;