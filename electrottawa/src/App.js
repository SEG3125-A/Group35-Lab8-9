import './App.css';
import './main.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Router> 
        <Navbar/> 
        <Switch>
  
          <Route path='/' exact component={Home} /> 
          <Route path='/products' component={Products} />
          <Route path='/services' component={Services} />
          <Route path='/booking' component={Booking} />
          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={Faq} />
          <Route path='/cart' component={Cart} />
          <Route path='/profile' component={Profile} />
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
