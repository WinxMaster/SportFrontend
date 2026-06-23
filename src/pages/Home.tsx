import { useState } from "react";

type FightResult = {
    id: number;
    fighterA: string;
    fighterB: string;
    winner: string;
};

export default function Home() {
    const [categories] = useState<string[]>([
        "Flyweight",
        "Bantamweight",
        "Featherweight",
        "Lightweight",
        "Welterweight",
        "Middleweight",
        "Light Heavyweight",
        "Heavyweight",
    ]);

    const [results] = useState<FightResult[]>([
        { id: 1, fighterA: "Sandhagen", fighterB: "Nurmagomedov", winner: "Sandhagen" },
        { id: 2, fighterA: "Adesanya", fighterB: "Pereira", winner: "Pereira" },
        { id: 3, fighterA: "Volkanovski", fighterB: "Topuria", winner: "Topuria" },
        { id: 4, fighterA: "Makhachev", fighterB: "Oliveira", winner: "Makhachev" },
        { id: 5, fighterA: "Jones", fighterB: "Miocic", winner: "Jones" },
    ]);

    return (
        <div className="home">
            <main>

                {/* HERO */}
                <div className="card hero-card">
                    <h1>UFC 305: PEREIRA VS ANKALAEV</h1>
                    <p>Latest fights & weight class overview</p>
                </div>

                <div className="dashboard">

                    {/* NEXT EVENT */}
                    <div className="card">
                        <h2>Nächstes Event</h2>
                        <p><strong>UFC Fight Night</strong></p>
                        <small>18. März - Sandhagen vs. Nurmagomedov</small>
                    </div>

                    {/* LAST RESULTS (real content) */}
                    <div className="card">
                        <h2>Letzte Ergebnisse</h2>

                        <div className="weight-grid">
                            {results.map((fight) => (
                                <div key={fight.id} className="weight-btn">
                                    {fight.fighterA} vs {fight.fighterB} <br />
                                    <strong>Winner: {fight.winner}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WEIGHT CLASSES */}
                    <div className="card">
                        <h2>Gewichtsklassen</h2>

                        <div className="weight-grid">
                            {categories.map((cat, i) => (
                                <button key={i} className="weight-btn">
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}