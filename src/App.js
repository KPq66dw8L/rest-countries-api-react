import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';


import Navbar from './Navbar';
//page(s)
import Home from './Home'
import Error from './Error'
import Details from './Details'



function App() {
  return (<HashRouter>
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
  </HashRouter>);
}

export default App;
