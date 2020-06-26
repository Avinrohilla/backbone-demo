import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import UserView from '../views/UserView';
import UserCollections from '../collections/UserCollections';

    let UsersViews = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
           let collection = new UserCollections();
             collection.fetch({
                success: function(item){
                    let users = item.models.splice(0,10);
                    _.each(users,function(user){
                        var users =  new UserView({
                            model:user.attributes
                        });
                        $('#userBox').append(users.render().$el);
                    },this)
                }
            })
            return this;  
        }
    });
    

export default UsersViews;