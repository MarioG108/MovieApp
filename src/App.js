import Navbar from './Components/navs/navbar'
import Home from './Components/home.jsx'
import Details from './Components/details/index.jsx'
import Footer from './Components/navs/footer'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <div className="container-fluid" style={{ paddingTop: '70px' }}>
          <Switch>
            <Route path="/home" exact> <Home /></Route>
            
            <Route path="/details" exact> <Details /> </Route>
            
          </Switch>
          <Route exact path="/">
              <Redirect to="/home" />
            </Route>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
