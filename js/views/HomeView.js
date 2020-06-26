import * as Backbone from 'backbone';

let  HomeView = Backbone.View.extend({
        render: function(){
            this.$el.html("Home Page");
            return this;
        }
    });
    

export default HomeView;

