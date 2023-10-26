import { Outlet, Link } from "react-router-dom";
import "./Nav.css"

export default function () {
    return (
        <nav>
            <Link to="/Articles">Articles</Link>
            <Link to="/Users">Users</Link>
            <Link to="/Topics">Topics</Link>
        </nav>
    )
}