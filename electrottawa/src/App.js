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

import { IntlProvider } from "react-intl";
import { useState,useEffect } from 'react';


function App() {


  // setting up state for locale and messages
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState({
    "app.home": "Home",
    "app.services":"Services",
    "app.products":"Products",
    "app.booking":"Booking",
    "app.contact":"Contact",
    "app.faq":"FAQ",
  })


   // function to dynamically import messages depending on locale
   useEffect(() => {
    import(`./Locales/${locale}.json`).then((messages) => {
      console.log({
        messages,
      });
      setMessages(messages);
    });
  }, [locale]);

 
  return (
    <>
    <IntlProvider messages={messages} key={locale} locale={locale}>
      <div className="App">
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
        
        <select
                onChange={(e) => {
                  setLocale(e.target.value);
                }}
                value={locale}
                name="language-select"
                id="language-select"
                className="select-input"
              >
                <option value="fr">French</option>
                <option value="en">English</option>
              </select>
      </div>
    </IntlProvider>
    </>
    );
}

export default App;
