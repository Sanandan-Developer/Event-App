import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">

     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">EVENT MANAGER</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className='menu_active' exact className="nav-link" to="/events">Events</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className='menu_active' exact className="nav-link" to="/register">Register</NavLink>
      </li>
      
   
      
    </ul>
    
  </div>
</nav>
</div>
            </div>

        </div>
        </>

        
    )
}

export default Navbar;