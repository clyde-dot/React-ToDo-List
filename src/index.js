import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

//CSS files
import "./reset.css"
import "./index.css"

//Setting Web Page
import "./Settings"

//Static elements

import Header from "./components/navbar/header/Header"
import Main from "./components/routes/Main"
import Footer from "./components/navbar/footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Main />
            <Footer />
        </HashRouter>
    </React.StrictMode>
)
