import logo from './logo.svg';
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './views/Start';
import Login from './views/longinpage/login';
import Homepage from './views/userpages/home';
import Productaxio from './views/userpages/product/productaxios';
import Addtocart from './views/userpages/product/addtocart';
import Userprofileaxois from './views/userpages/profileaxios';
import Logout from './views/userpages/others/logout';
import Signup from './views/longinpage/signup';
import Allcartiteam from './views/userpages/product/Getallcart';
import Allmyorders from './views/userpages/product/Showallorder';
import Allmyorderdetails from './views/userpages/product/orderdetailes';
import Retrunorder from './views/userpages/product/returnorder';
import Returnsall from './views/userpages/product/returnsall';
import Retrundetailas from './views/userpages/product/retrundetalis';

function App() {
  var token = null;
  if(localStorage.getItem('AccessToken')){
    var userinfo = JSON.parse(localStorage.getItem('AccessToken'));
    token=userinfo.tokens.AccessToken;
    console.log(token);
  }


  
  ////////////////////////////
  
  axios.defaults.headers.common["Authorization"] = token;
  console.log(axios.defaults.headers.common["Authorization"]);
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
      <Route exact path="/Logout"><Logout/></Route>
      <Route exact path="/Signup"><Signup/></Route>
      <Route exact path="/Allcartiteam"><Allcartiteam/></Route>
      <Route exact path="/Allorder"><Allmyorders/> </Route>
      <Route exact path="/Allorderdetails/:id"><Allmyorderdetails/></Route>
      <Route exact path="/returnoder/:id"><Retrunorder/></Route>
      <Route exact path="/Returnsall"><Returnsall/></Route>
      
      <Route exact path="/Retrunorder/:id"><Retrundetailas/></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
