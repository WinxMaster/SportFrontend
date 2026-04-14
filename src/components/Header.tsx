import { Link } from "react-router-dom";

function Header() {
    return (
    <header>
        <div className="logo">UFC TRACKER</div>
        <nav>
            <Link to="/">Home</Link>
            <button>Kämpfe</button>
            <Link to="/list">List</Link>
        </nav>
    </header>
    );
}

export default Header;