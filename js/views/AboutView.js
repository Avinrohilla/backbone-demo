import * as Backbone from 'backbone';

var AboutView = Backbone.View.extend({
    render: function(){
        this.$el.html("About Page");

        return this;
    }
});
export default AboutView;

