import {Link} from "react-router-dom"
const Navbar = () => {
 

  return (
    <div id="navigationBar">
      {/* creation of the navbar component inspired by https://getbootstrap.com/docs/5.0/components/navbar/*/}
      <h1 className="p-1">ElectrOttawa</h1>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex bd-highlight">

          <div className=" p-2 flex-xl-shrink-1 bd-highlight" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/services">All services</Link></li>
                  <li><Link className="dropdown-item" to="/">Laptop repair</Link></li>
                  <li><Link className="dropdown-item" to="/">Phone repair</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/products" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                  <Link className="dropdown-item" to ="/products">All products</Link>
                    </li>
                  <li><Link className="dropdown-item" to="/">Phones</Link></li>
                  <li><Link className="dropdown-item" to="/">Laptops</Link></li>
                  <li><Link className="dropdown-item" to="/">Smart Watches</Link></li>
                  <li><Link className="dropdown-item" to="/">Phone Cases</Link></li>
                  <li><Link className="dropdown-item" to="/">Audio</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">Booking</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
              </li>

            </ul>

          </div>
          <div className="p-2 flex-shrink-1 bd-highlight">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/cart"><span className="material-symbols-outlined">
                  shopping_cart
                </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile"><span className="material-symbols-outlined">
                  person
                </span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;