import React, { Component } from "react"

class Header extends Component {
    render() {
        return (
            <>
                <nav className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-li">
                            <a href="/" className="header-menu-link">
                                Main
                            </a>
                        </li>
                        <li className="header-menu-li">
                            <a href="/about" className="header-menu-link">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Header
