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
                <style>{`
                    :root {
                        //--bg-dark: #121212;
                        //--card-bg: #1e1e1e;
                        --ufc-red: #D20A0A;
                        --input-bg: #151515;
                        --text-light: #ffffff;
                        --text-gray: #a0a0a0;
                    }

                    body, html {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        font-family: 'Roboto', sans-serif;
                        background-color: var(--bg-dark);
                        color: var(--text-light);
                        /* Simulierter Hintergrund des Octagons */
                        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                                    url('https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop');
                        background-size: cover;
                        background-position: center;
                    }

                    /* Navigationsleiste oben */
                    nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 15px 50px;
                        background: rgba(0, 0, 0, 0.9);
                        border-bottom: 1px solid #333;
                        text-transform: uppercase;
                        font-weight: bold;
                    }

                    .nav-links a {
                        color: var(--text-light);
                        text-decoration: none;
                        margin-right: 25px;
                        font-size: 14px;
                    }

                    .nav-links a.active {
                        color: var(--ufc-red);
                        border-bottom: 2px solid var(--ufc-red);
                    }

                    /* Login Modal Overlay */
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.6);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    /* Die Login Box */
                    .login-card {
                        background-color: var(--card-bg);
                        width: 380px;
                        padding: 40px;
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                        text-align: center;
                        border-top: 4px solid var(--ufc-red);
                    }

                    .login-card h2 {
                        text-transform: uppercase;
                        font-weight: 900;
                        font-size: 28px;
                        margin-bottom: 30px;
                        letter-spacing: 1px;
                    }

                    .login-card h2 span {
                        color: var(--ufc-red);
                    }

                    /* Formular Styling */
                    .form-group {
                        text-align: left;
                        margin-bottom: 20px;
                    }

                    .form-group label {
                        display: block;
                        text-transform: uppercase;
                        font-size: 12px;
                        font-weight: bold;
                        margin-bottom: 8px;
                        color: var(--text-light);
                    }

                    .form-group input {
                        width: 100%;
                        padding: 12px;
                        background: var(--input-bg);
                        border: 1px solid #333;
                        border-radius: 4px;
                        color: white;
                        box-sizing: border-box;
                        transition: border 0.3s;
                    }

                    .form-group input:focus {
                        border-color: var(--ufc-red);
                        outline: none;
                    }

                    /* Login Button */
                    .login-btn {
                        width: 100%;
                        padding: 14px;
                        background-color: var(--ufc-red);
                        border: none;
                        color: white;
                        font-weight: 900;
                        text-transform: uppercase;
                        font-size: 16px;
                        cursor: pointer;
                        border-radius: 4px;
                        margin-top: 10px;
                        transition: background 0.3s, transform 0.1s;
                    }

                    .login-btn:hover {
                        background-color: #b00808;
                    }

                    .login-btn:active {
                        transform: scale(0.98);
                    }

                    /* Links unten */
                    .footer-links {
                        margin-top: 25px;
                        font-size: 13px;
                    }

                    .footer-links a {
                        color: var(--text-gray);
                        text-decoration: none;
                        display: block;
                        margin-bottom: 8px;
                    }

                    .footer-links a:hover {
                        color: var(--text-light);
                        text-decoration: underline;
                    }
                `}</style>
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
