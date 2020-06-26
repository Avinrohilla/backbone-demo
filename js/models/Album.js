import * as Backbone from 'backbone';
function Album() {
    let Album = Backbone.Model.extend({
        urlRoot: "https://jsonplaceholder.typicode.com/photos"
    });
    return Album;
}

export default Album;
