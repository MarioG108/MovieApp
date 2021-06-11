import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FormSearch from '../FormSearch'

function Navbar() {

    const [currentpage, setCurrentpage] = useState('')
    const location = useLocation();
    useEffect(() => {
        setCurrentpage(location.pathname)
    }, [location])
    var nav =
        <nav className="navbar navbar-expand-md navbar-dark nav" >
            <div className="container">
                <Link className="navbar-brand" to="/">Movie Master</Link>
                <div className="d-flex justify-content-end">
                    {/* <FormSearch /> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="navbar-collapse collapse" id="navbarNav">
                    <span className=" d-flex justify-content-end ml-auto  " >
                        <ul className="navbar-nav" data-toggle="collapse" data-target="#navbarNav">
                            <li className={`nav-item d-flex justify-content-end `}>

                            </li>
                            <li className={`nav-item d-flex justify-content-end ${currentpage === '/' ? 'active' : 'inactive'} `}>
                                <Link className="nav-link" to="/">Home <span className="sr-only" >(current)</span></Link>
                            </li>

                            <li className={`nav-item d-flex justify-content-end ${currentpage.includes('Favorites') ? 'active' : 'inactive'} `}>
                                <Link className="nav-link" to="/Favorites/">My Favorites </Link>
                            </li>

                        </ul>
                    </span>
                </div>
            </div>
        </nav>

    return (
        nav
    )
}

export default Navbar;