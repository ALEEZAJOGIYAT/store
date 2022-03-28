import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from './containers/SignUp/index';
import {Home} from './components/home/index'
import { StoreHome } from './containers/Store Manager/storeHome';
import {ShowProduct} from './containers/Store Manager/AddProducts'
import {LoginForm} from './containers/login/index'
import {CustomerHome} from './containers/Customer/custHome/index'


function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={RegistrationForm}/>
        <Route exact path="/storehome" component={StoreHome}/>
        <Route exact path="/product" component={ShowProduct}/>
        <Route exact path="/custhome" component={CustomerHome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
