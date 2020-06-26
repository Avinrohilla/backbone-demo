import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
 function ContactView() {
    var ContactView = Backbone.View.extend({
        render: function(){
            this.$el.html("Contact Page");
    
            return this;
        }
    });
    return ContactView;
}
export default ContactView;

