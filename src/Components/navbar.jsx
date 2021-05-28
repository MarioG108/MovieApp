import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
 const navStyle ={
    position: "fixed",
    width: "100%",
    zIndex: '101',
    backgroundColor:'#2b2b31',
    boxShadow:' 0 5px 25px 0 rgb(0 0 0 / 30%)'
 }
    var nav =
        <nav className="navbar navbar-expand-md navbar-dark " style={navStyle}>
            <div className="container">

                <Link className="navbar-brand" to="/">Movie Master</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                            
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/faq">FAQ </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    return (
        nav
    )
}

export default Navbar;