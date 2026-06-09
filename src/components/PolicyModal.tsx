import { useState } from "react";

interface PolicyModalProps {
    onAccept: () => void;
}

export default function PolicyModal({ onAccept }: PolicyModalProps) {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
        }}>
            <div style={{
                color: "black",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "8px",
                maxWidth: "400px",
                textAlign: "center"
            }}>
                <h2>Company Policies</h2>
                <p>The user data component of this website was developed by Adnan in collaboration with ChatGPT.
                    By accessing or using this website, you acknowledge and agree that you waive any right to bring legal action against us.
                </p>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    /> I agree to the company policies
                </label>
                <br />
                <button
                    disabled={!checked}
                    onClick={onAccept}
                    style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}