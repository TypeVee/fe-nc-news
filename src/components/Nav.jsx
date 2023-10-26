import { Outlet, Link } from "react-router-dom";

export default function () {
    return (
        <nav>
            <Link to="/Articles">Articles</Link>
            <Link to="/Users">Users</Link>
            <Link to="/Topics">Topics</Link>
        </nav>
    )
}