import { Link, NavLink } from "react-router-dom"
var category;
const Navbar = () => {
  return (
    <div id="navigationBar">

      {/* creation of the navbar component inspired by https://getbootstrap.com/docs/5.0/components/navbar/*/}
      <h1>ElectrOttawa</h1>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex bd-highlight">

          <div className=" p-2 flex-xl-shrink-1 bd-highlight" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeStyle={{
                  color: "red"
                }} aria-current="page" exact to="/">Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" exact to="/services" activeStyle={{
                  color: "red"
                }} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/services">All services</Link></li>
                  <li><Link className="dropdown-item" to="/">Laptop repair</Link></li>
                  <li><Link className="dropdown-item" to="/">Phone repair</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" exact to="/products" activeStyle={{
                  color: "red"
                }} id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to="/products">All products</Link>
                  </li>
                  <li><Link className="dropdown-item" to="/products">Phones</Link></li>
                  <li><Link className="dropdown-item" to="/products">Laptops</Link></li>
                  <li><Link className="dropdown-item" to="/products">Smart Watches</Link></li>
                  <li><Link className="dropdown-item" to="/products">Phone Cases</Link></li>
                  <li><Link className="dropdown-item" to="/products">Audio</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/booking" activeStyle={{
                  color: "red"
                }}>Booking</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact" activeStyle={{
                  color: "red"
                }}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/faq" activeStyle={{
                  color: "red"
                }}>FAQ</NavLink>
              </li>

            </ul>

          </div>
          <div className="p-2 flex-shrink-1 bd-highlight">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" activeStyle={{
                  backgroundColor: "#f4c5c5",
                  borderRadius:'5px'

                }}><span className="material-symbols-outlined">
                    shopping_cart
                  </span></NavLink>
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