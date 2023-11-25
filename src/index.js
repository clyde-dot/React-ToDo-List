import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"

//CSS files
import "./reset.css"
import "./index.css"

//Setting Web Page
import "./Settings"

//Pages
import Home from "./components/routes/main/Home"
import About from "./components/routes/about/About"

//Static elements
import ErrorPage from "./components/routes/error/error-page"
import Header from "./components/navbar/header/Header"
import Footer from "./components/navbar/footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <HashRouter>
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
        </HashRouter>
    </React.StrictMode>
)
