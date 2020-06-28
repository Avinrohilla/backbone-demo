import Router from './routing/Router';
import UserView from './views/UserView';

function App() {
    let initialize = function(){
        new Router();
        new UserView();
    }
    return {
        initialize:initialize
    };
}

export default App;