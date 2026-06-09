import { useEffect, useState } from "react";
import { apiFetch } from "../api";

type WeightClass = {
    name: string;
};

export default function Home() {
    const [weightClasses, setWeightClasses] = useState<WeightClass[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("Heavyweight");

    const [fighters, setFighters] = useState([]);

    // Load weight classes (API-driven)
    useEffect(() => {
        apiFetch(`/fighters/categories`)
            .then((data) => {
                setWeightClasses(data.response || []);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);

        apiFetch(`/fighters?category=${category}`)
            .then((data) => {
                setFighters(data.response || []);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <main>
                <div className="card">
                    <h1>UFC 305: PEREIRA vs. ANKALAEV</h1>
                    <p>15. März | 04:00 CET | Las Vegas</p>
                </div>

                <div className="dashboard">
                    <div className="card">
                        <h2>Gewichtsklassen</h2>

                        {weightClasses.map((wc, index) => (
                            <button
                                key={index}
                                className={`weight-btn ${selectedCategory === wc.name ? "active" : ""}`}
                                onClick={() => handleCategoryClick(wc.name)}
                            >
                                {wc.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2>Fighters</h2>

                    {fighters.map((fighter: any, index: number) => (
                        <div key={index}>
                            <p>{fighter.name}</p>
                            <img src={fighter.photo} alt={fighter.name} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}