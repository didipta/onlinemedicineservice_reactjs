import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './views/Start';
import Login from './views/longinpage/login';
import Homepage from './views/userpages/home';
import Productaxio from './views/userpages/product/productaxios';
import Addtocart from './views/userpages/product/addtocart';
import Userprofileaxois from './views/userpages/profileaxios';

function App() {
  return (
    <Router>
    <Switch>
      {/* //................User all routes ......................// */}
      <Route exact path="/"><Start/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/home"><Homepage/></Route>
      <Route exact path="/productlist/:id"><Productaxio/> </Route>
      <Route exact path="/Product/Addtocart/:id"><Addtocart/></Route>
      <Route exact path="/Profile"><Userprofileaxois/></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
