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
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import { DashBoard } from './pages/DashBoard';
import LaptopRepair from './pages/LaptopRepair';
import PhoneRepair from './pages/PhoneRepair';
import { useEffect } from "react";

function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="App">
      <div id="google_translate_element" className='bg-white'></div>
      <CartContextProvider>
     <Router> 
        <Navbar/> 
        <Switch>

            <Route path='/' exact component={Home} /> 
            <Route path='/products' component={Products} />
            <Route path='/services' component={Services} />
            <Route path='/laptopRepair' component={LaptopRepair} />
            <Route path='/phoneRepair' component={PhoneRepair} />
            <Route path='/booking' component={Booking} />
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={Faq} />
            <Route path='/cart' component={Cart} />
            <Route path='/profile' component={Profile} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/signIn' component={SignIn}/>
            <Route path='/dashboard' component={DashBoard}/>
            <Route path='/product_details' component={ProductDetails}/>

            </Switch>
            <Footer/>
          </Router>
        </CartContextProvider>
      </div>        
    );
}

export default App;
