import Navbar from './Components/navs/navbar'
import Home from './Components/home'
import Details from './Components/details/index'
import Footer from './Components/navs/footer'
import NotFound from './Components/404'
import { HashRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

function App() {
  return (  
    <Router>
      <Navbar/>
      <div className="container-fluid" style={{ paddingTop: '70px' }}>
        <Switch>
          <Route path="/" exact> <Home /></Route>
          <Route path="/home" exact><Redirect to="/"/></Route>
          <Route path="/details/" exact> <Details /></Route>
          <Route path="/details/:movie_id" exact> <Details /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}



export default App;
