const Navbar = () => {
  return (
    <div>
{/* creation of the navbar component inspired by https://getbootstrap.com/docs/5.0/components/navbar/*/}
      <h1>ElectrOttawa</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid d-flex justify-content-center">

          <div className="d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/">Laptop repair</a></li>
                  <li><a className="dropdown-item" href="/">Phone repair</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/">Phones</a></li>
                  <li><a className="dropdown-item" href="/">Laptops</a></li>
                  <li><a className="dropdown-item" href="/">Smart Watches</a></li>
                  <li><a className="dropdown-item" href="/">Phone Cases</a></li>
                  <li><a className="dropdown-item" href="/">Audio</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;