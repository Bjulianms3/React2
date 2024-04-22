import {Outlet, Link} from "react-router-dom";
import './App.css';

const Layout = () => {
    return (
        <div className="app">
            <h2><Link to="/">Netflix</Link></h2>

            <Outlet />
        </div>
    )
};

export default Layout;