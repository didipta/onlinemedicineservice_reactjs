import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './views/Start';
import Login from './views/longinpage/login';
import Homepage from './views/userpages/home';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/"><Start/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/home"><Homepage/></Route>
    </Switch>
    </Router>
    
  );
}

export default App;
