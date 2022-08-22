
import Login from "./Login"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';

function AllRoutes() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/login' component={Login} />
    
    

  </Switch>

    </div>
  );
}

export default AllRoutes;