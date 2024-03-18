import './App.css';
import { CartContextProvider } from 'react-use-shoppingcart';
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
import Checkout from './pages/Checkout';
import { SignIn } from './pages/SignIn';
import Footer from './components/Footer';
import { DashBoard } from './pages/DashBoard';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
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
          <Route path='/checkout' component={Checkout} />
          <Route path='/signIn' component={SignIn}/>
          <Route path='/dashboard' component={DashBoard}/>

        </Switch>

      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
