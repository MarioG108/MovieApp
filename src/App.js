import Navbar from './Components/header.jsx'
import Home from './Components/home.jsx'
import Footer from './Components/footer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <div className="container" style={{ paddingTop: '70px' }}>
          <Switch>
            <Route path="/" exact> <Home></Home></Route>
          </Switch>
        </div>
<Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
