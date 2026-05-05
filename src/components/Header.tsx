import { Link } from "react-router-dom";

function Header() {
    return (
    <header>
        <div className="logo">UFC TRACKER</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/list">Kämpfe</Link>
            <Link to="/fighters">Kämpfer</Link>
        </nav>
    </header>
    );
}

export default Header;