import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

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
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
