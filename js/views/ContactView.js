import * as Backbone from 'backbone';

    var ContactView = Backbone.View.extend({
        render: function(){
            this.$el.html("Contact Page");
    
            return this;
        }
    });
   
export default ContactView;

