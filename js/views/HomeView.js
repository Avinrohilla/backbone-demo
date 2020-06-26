import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
function HomeView() {
    var HomeView = Backbone.View.extend({
        render: function(){
            this.$el.html("Home Page");
            return this;
        }
    });
    return HomeView;
}

export default HomeView;

