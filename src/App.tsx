import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PolicyModal from "./components/PolicyModal";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
    const [accepted, setAccepted] = useState(false);


    useEffect(() => {
        const saved = localStorage.getItem("policiesAccepted");
        if (saved === "true") setAccepted(true);
    }, []);

    const handleAccept = () => {
        setAccepted(true);
        localStorage.setItem("policiesAccepted", "true");
    };


    if (!accepted) return <PolicyModal onAccept={handleAccept} />;

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;