import { apiFetch } from "../api";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwörter stimmen nicht überein!");
            return;
        }

        console.log({
            username,
            email,
            password
        });

        // Beispiel API Call
        // apiFetch("/register", {
        //     method: "POST",
        //     body: JSON.stringify({ username, email, password })
        // });
    };

    return (
        <div className="page">
            <style>{`
                :root {
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
                    color: var(--text-light);
                    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                                url('https://images.unsplash.com/photo-1599058917232-d750c1859d7c?q=80&w=2070&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0,0,0,0.6);
                }

                .login-card {
                    width: 380px;
                    padding: 40px;
                    background: #1e1e1e;
                    border-radius: 8px;
                    text-align: center;
                    border-top: 4px solid var(--ufc-red);
                }

                .login-card h2 {
                    text-transform: uppercase;
                    font-weight: 900;
                    font-size: 28px;
                    margin-bottom: 30px;
                }

                .login-card h2 span {
                    color: var(--ufc-red);
                }

                .form-group {
                    text-align: left;
                    margin-bottom: 15px;
                }

                .form-group label {
                    font-size: 12px;
                    text-transform: uppercase;
                    margin-bottom: 6px;
                    display: block;
                }

                .form-group input {
                    width: 100%;
                    padding: 12px;
                    background: var(--input-bg);
                    border: 1px solid #333;
                    border-radius: 4px;
                    color: white;
                }

                .form-group input:focus {
                    border-color: var(--ufc-red);
                    outline: none;
                }

                .login-btn {
                    width: 100%;
                    padding: 14px;
                    background: var(--ufc-red);
                    border: none;
                    color: white;
                    font-weight: 900;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 4px;
                    margin-top: 10px;
                }

                .login-btn:hover {
                    background: #b00808;
                }

                .footer-links {
                    margin-top: 20px;
                    font-size: 13px;
                }

                .footer-links a {
                    color: var(--text-gray);
                    display: block;
                    margin-bottom: 6px;
                    text-decoration: none;
                }

                .footer-links a:hover {
                    color: white;
                }
            `}</style>

            <div className="overlay">
                <div className="login-card">
                    <h2>
                        REGIST<span>RIEREN</span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Benutzername</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group" style={{display:"none"}}>
                            <label>E-Mail</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Passwort</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Passwort bestätigen</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            Registrieren
                        </button>
                    </form>

                    <div className="footer-links">
                        <a href="#">Bereits einen Account? Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}