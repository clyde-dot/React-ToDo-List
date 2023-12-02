import "./ErrorPage.css"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div className="container">
            <div className="error-page">
                <h1 className="error-page-title">404 Not Found</h1>
                <p className="error-page-body">
                    Sorry, an unexpected error has occurred.
                </p>
                <Link to="/">Back </Link>
            </div>
        </div>
    )
}
