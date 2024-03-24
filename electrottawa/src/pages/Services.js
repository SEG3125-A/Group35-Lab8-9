import './styles/custom.css'
import { Link, NavLink } from "react-router-dom"

export const Services = ()=>{
  return(
    <>
    <div className="container-fluid px-0 ">
      <h2 className="m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom border-info">Laptop Services</h2>
      
        <div className="d-flex flex-row p-3 gap-4 flex-wrap justify-content-center" style={{backgroundColor: '#ffeaea'}}>
                <div className="text-center">
                    <div className="card border-3 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/BRL.jpeg" alt="BR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Battery Replacement</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Does your Device get discharged faster than usual? It might be time to replace your battery. Bring us your phone and sort that out!</p>
                            <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/booking">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/SRL.webp" alt="SR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Screen Repair</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Is your screen flickering? Do you have touch issues? Bring us your phone for a repair, so you can regain full user experience.</p>
                            <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/booking">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/DRL.webp" alt="DR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Data Recovery</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Lost your data on your device? We know the way to bring it back! Get in touch with us to recover your precious data again!</p>
                                <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/booking">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/WDL.png" alt="WD"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Water Damage</h4>
                            <p style={{marginTop: '20px'}} className="card-text ">
                                Accidentaly dropped your phone in a pool or spilled water on it! we can assess the damage and clean any impacted parts</p>
                            <Link style={{marginBottom: '5px', color:'white'}} to="/booking" className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div className="container-fluid px-0 " >
            <h2 className="m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom border-info">Phone Services</h2>
            
            <div className="d-flex flex-row p-3 gap-4 flex-wrap justify-content-center" style={{backgroundColor: '#ffeaea'}}>
                <div className="text-center">

                    <div className="card border-3 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/BR.jpeg" alt="BR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Battery Replacement</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Does your device get discharged faster than usual? It might be time to replace your battery. Bring us your phone and sort that out!</p>
                            <Link style={{marginBottom: '5px', color:'white'}} className="btn btn-primary" to="/booking" data-bs-target="#modal1">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/SR.jpeg" alt="SR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Screen Replacement</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Is your screen flickering? Do you have touch issues? Bring us your phone for a repair, so you can regain full user experience</p>
                            <Link style={{marginBottom: '5px', color:'white'}} to="/booking" className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/DR.webp" alt="DR"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Data Recovery</h4>
                            <p style={{marginTop: '20px'}} className="card-text">
                                Lost your data on your device? We know the way to bring it back! Get in touch with us to recover your precious data again!</p>
                            <Link style={{marginBottom: '5px', color:'white'}} to="/booking" className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card border-4 border-dark" style={{width: '300px'}}>
                        <img className="card-img-top" src="./styles/images/WD.jpeg" alt="WD"></img>
                        <div className="card-body">
                            <h4 style={{marginTop: '10px'}} className="card-title border-bottom border-info">Water Damage</h4>
                            <p style={{marginTop: '20px'}} className="card-text ">
                                Accidentaly dropped your phone in a pool or spilled water on it! we can assess the damage and clean any impacted parts</p>
                            <Link style={{marginBottom: '5px', color:'white'}} to="/booking" className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>

    </>
  );
}

export default Services;