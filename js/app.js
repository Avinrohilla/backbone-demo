import Router from './routing/Router';
import UsersViews from './views/UsersViews';

function App() {
    let initialize = function(){
        new Router();
        new UsersViews();
    }
    return {
        initialize:initialize
    };
}

export default App;