import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';

function AboutView() {
    var AboutView = Backbone.View.extend({
        render: function(){
            this.$el.html("About Page");
    
            return this;
        }
    });
    return AboutView;
}
export default AboutView;

