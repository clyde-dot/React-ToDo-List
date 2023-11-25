import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import "./Main.css"
//Pages
import Home from "./home/Home"
import About from "./about/About"
import ErrorPage from "./error/error-page"

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                        errorElement={<ErrorPage />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                        errorElement={<ErrorPage />}
                    />
                </Routes>
            </main>
        )
    }
}

export default Main
