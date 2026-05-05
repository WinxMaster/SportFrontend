import { apiFetch } from "../api";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(username, password);
    };
    return (
        <div className="page">
            <nav>
                <div className="nav-links">
                    <a href="#" className="active">Home</a>
                    <a href="#">Kämpfe</a>
                    <a href="#">Kämpfer</a>
                </div>
                <div style={{ color: "#666", fontSize: "12px" }}>
                    [SUCHFELD: Name eingeben...]
                </div>
            </nav>
            <div className="overlay">
                <div className="login-card">
                    <h2>
                        ANMEL<span>DEN</span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Benutzername oder E-Mail</label>
                            <input
                                type="text"
                                placeholder="name@beispiel.de"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Passwort</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>

                    <div className="footer-links">
                        <a href="#">Passwort vergessen?</a>
                        <a href="#">Jetzt Registrieren!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
