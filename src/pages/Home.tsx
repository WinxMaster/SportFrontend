import { useState } from "react";

type FightResult = {
    id: number;
    fighterA: string;
    fighterB: string;
    winner: string;
};

type NextEvent = {
    id: number;
    title: string;
    mainFight: string;
    date: string;
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

    const [nextEvents] = useState<NextEvent[]>([
        {
            id: 1,
            title: "UFC Fight Night",
            mainFight: "Sandhagen vs Nurmagomedov",
            date: "18. März"
        },
        {
            id: 2,
            title: "UFC 305",
            mainFight: "Pereira vs Ankalaev",
            date: "02. April"
        },
        {
            id: 3,
            title: "UFC Apex Event",
            mainFight: "Gaethje vs Fiziev",
            date: "16. April"
        },
        {
            id: 4,
            title: "UFC International Fight Week",
            mainFight: "Adesanya vs Strickland",
            date: "29. Juni"
        },
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

                    {/* NEXT EVENTS (multi-variant) */}
                    <div className="card">
                        <h2>Nächste Events</h2>

                        <div className="weight-grid">
                            {nextEvents.map((event) => (
                                <div key={event.id} className="weight-btn">
                                    <strong>{event.title}</strong><br />
                                    {event.mainFight}<br />
                                    <small>{event.date}</small>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LAST RESULTS */}
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