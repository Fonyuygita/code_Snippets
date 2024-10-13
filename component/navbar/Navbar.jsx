import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {

    const currentUser = true

    const logout = () => {
        // login functionality
    }



    return (
        <div className="navbar">


            <div className="container">
                <Link to="/" className="link">
                    <div className="logo">
                        <h1>NEWS<span>HOME</span></h1>
                    </div>
                </Link>

                <div className="nav-links">
                    <div className="links">
                        <Link className="link" to="/about">
                            <h6>ART</h6>
                        </Link>

                        <Link className="link" to="/map">
                            <h6>MAP</h6>
                        </Link>

                        <Link className="link" to="/company">
                            <h6>COMPANY</h6>
                        </Link>

                        <Link className="link" to="/posts">
                            <h6>POST</h6>
                        </Link>



                        <span>{currentUser?.username}</span>
                        {currentUser ? <span onClick={logout}>logout</span> : <Link className="link" to="/login">Login</Link>}
                        <span className="write">
                            <Link to="/write">Write</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
