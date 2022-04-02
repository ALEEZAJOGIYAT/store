import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from './containers/SignUp/index';
import {Home} from './components/home/index'
import { StoreHome } from './containers/Store Manager/storeHome';
import {ShowProduct} from './containers/Store Manager/product'
import {LoginForm} from './containers/login/index'
import {CustomerDashboard} from './containers/Customer/custHome/index'
import {Products} from "./containers/Customer/products/index"
import {Profile} from "./containers/Customer/profile"
import {CompanyProfile} from "./containers/Store Manager/profile"
import {Checkout} from "./containers/Customer/checkout/checkout"

function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={RegistrationForm}/>
        <Route exact path="/storehome" component={StoreHome}/>
        <Route exact path="/companyprofile" component={CompanyProfile}/>
        <Route exact path="/product" component={ShowProduct}/>
        <Route exact path="/custhome" component={CustomerDashboard}/>
        <Route exact path="/custproduct" component={Products}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/checkout" component={Checkout}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
