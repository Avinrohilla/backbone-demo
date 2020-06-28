import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import UserCollections from '../collections/UserCollections';

    let UsersViews = Backbone.View.extend({
        el:"#userBox",
        template: _.template($('#userTemplate').html()),
        collection: new UserCollections(),
        initialize: function(){
            this.render();
        },
        render: function(){
             this.collection.fetch({
                success: (item)=>{
                    this.$el.html(this.template({
                        users:item
                    }))
                }
            })
            return this;  
        }
    });
    

export default UsersViews;