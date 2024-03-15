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
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/services">All services</a></li>
                  <li><a className="dropdown-item" href="/">Laptop repair</a></li>
                  <li><a className="dropdown-item" href="/">Phone repair</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/products">All products</a></li>
                  <li><a className="dropdown-item" href="/">Phones</a></li>
                  <li><a className="dropdown-item" href="/">Laptops</a></li>
                  <li><a className="dropdown-item" href="/">Smart Watches</a></li>
                  <li><a className="dropdown-item" href="/">Phone Cases</a></li>
                  <li><a className="dropdown-item" href="/">Audio</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>

            </ul>

          </div>
          <div className="p-2 flex-shrink-1 bd-highlight">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/cart"><span className="material-symbols-outlined">
                  shopping_cart
                </span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile"><span className="material-symbols-outlined">
                  person
                </span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;