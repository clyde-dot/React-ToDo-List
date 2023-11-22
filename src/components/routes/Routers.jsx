import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./error/error-page"
import App from "./main/Main"
import About from "./about/About"

function Root() {
    const router = createBrowserRouter([
        { path: "/", element: <App />, errorElement: <ErrorPage /> },
        { path: "/about", element: <About /> },
    ])
    return router
}

export default Root
