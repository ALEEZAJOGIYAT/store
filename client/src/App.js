import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from './containers/SignUp/index';
import {Home} from './components/home/index'
import {AddProduct} from './containers/Store Manager/AddProducts'

function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>

          <Route exact path="/signup" component={RegistrationForm}/>
          <Route exact path="/addproduct" component={AddProduct}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
