import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <>
                <nav className="header-menu">
                    <Link to="/" className="header-menu-logo">
                        React To-Do
                    </Link>
                    <ul className="header-menu-list">
                        <li className="header-menu-li">
                            <Link to="/" className="header-menu-link">
                                Main
                            </Link>
                        </li>
                        <li className="header-menu-li">
                            <Link to="/about" className="header-menu-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Header
