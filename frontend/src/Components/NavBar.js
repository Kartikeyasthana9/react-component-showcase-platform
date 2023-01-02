import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* Container wrapper */}
            <div className="container-fluid">
                {/* Toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarCenteredExample"
                    aria-controls="navbarCenteredExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
                {/* Collapsible wrapper */}
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarCenteredExample"
                >
                    {/* Left links */}
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addcomponent">
                                AddComponent
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/listcomponent">
                                ListComponent
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/test">
                                TEST
                            </NavLink>
                        </li>
                        
                        
                        
                    </ul>
                    {/* Left links */}
                </div>
                {/* Collapsible wrapper */}
            </div>
            {/* Container wrapper */}
        </nav>








    )
}

export default NavBar