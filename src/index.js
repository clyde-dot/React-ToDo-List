import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./Settings"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/routes/main/Home"
import About from "./components/routes/about/About"

import ErrorPage from "./components/routes/error/error-page"
import Header from "./components/navbar/header/Header"
import Footer from "./components/navbar/footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Header />
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
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
