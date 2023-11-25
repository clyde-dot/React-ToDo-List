import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>
                    Created by
                    <Link target="_blank" to="https://github.com/clyde-dot">
                        {" clyde-dot "}
                    </Link>
                    2023
                </p>
            </footer>
        )
    }
}

export default Footer
