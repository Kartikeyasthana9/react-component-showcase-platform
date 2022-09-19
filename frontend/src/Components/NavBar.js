import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
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
                            <Nav className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addcomponent">
                                AddComponent
                            </NavLink>
                        </li>
                        {/* Navbar dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            {/* Dropdown menu */}
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
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