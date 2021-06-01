import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
//page(s)
import Home from './Home';
import Error from './Error';
import Details from './Details';
//CSS
import './css/App.css';

import DarkMode from './DarkMode';

function App() {
  return (
    <Router>
      
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/details/:id' children={<Details/>}></Route>
      <Route path='*'>
        <Error></Error>
      </Route>  
    </Switch>
  </Router>
  );
}

export default App;
