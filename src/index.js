import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./Settings"

import { RouterProvider } from "react-router-dom"
import Root from "./components/routes/Routers"
import Header from "./components/navbar/header/Header"
import Footer from "./components/navbar/footer/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={Root()} />
        <Footer />
    </React.StrictMode>
)
