import Router from './routing/Router';
import EmployeesViews from './views/EmployeesViews';

function App() {
    let initialize = function(){
        new Router();
        new EmployeesViews();
    }
    return {
        initialize:initialize
    };
}

export default App;