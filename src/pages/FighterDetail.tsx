import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../api";

type Fighter = {
    id: number;
    name: string;
    nickname: string;
    photo: string;
    gender: string;
    birth_date: string;
    age: number;
    height: string;
    weight: string;
    reach: string;
    stance: string;
    category: string;
    team: {
        id: number;
        name: string;
    };
};

type FighterStats = {
    total: {
        win: number;
        loss: number;
        draw: number;
    };
    ko: {
        win: number;
        loss: number;
    };
    sub: {
        win: number;
        loss: number;
    };
};

export default function FighterDetail() {
    const { fighterId } = useParams();

    const [fighter, setFighter] = useState<Fighter | null>(null);
    const [stats, setStats] = useState<FighterStats | null>(null);

    useEffect(() => {
        apiFetch(`/fighters?id=${fighterId}`)
            .then((data) => {
                setFighter(data.response?.[0] || null);
            })
            .catch(console.error);

        apiFetch(`/fighters/records?id=${fighterId}`)
            .then((data) => {
                setStats(data.response?.[0] || null);
            })
            .catch(console.error);
    }, [fighterId]);

    if (!fighter || !stats) {
        return <p className="text-dim">Loading...</p>;
    }

    return (
        <main className="fighter-detail-page">
            <div className="fighter-detail-card">
                <div className="fighter-header">
                    <div className="fighter-image-wrapper">
                        <img
                            src={fighter.photo}
                            alt={fighter.name}
                            className="fighter-image"
                        />
                    </div>

                    <div className="fighter-info">
                        <span className="fighter-category">{fighter.category}</span>

                        <h1>{fighter.name}</h1>

                        <h3 className="text-dim">"{fighter.nickname}"</h3>

                        <div className="fighter-record">
                            <div>
                                <span>{stats.total.win}</span>
                                <p>Wins</p>
                            </div>

                            <div>
                                <span>{stats.total.loss}</span>
                                <p>Losses</p>
                            </div>

                            <div>
                                <span>{stats.total.draw}</span>
                                <p>Draws</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fighter-sections">
                    <section className="detail-section">
                        <h2>Fighter Information</h2>

                        <div className="details-grid">
                            <div>
                                <span className="text-dim">Gender</span>
                                <p>{fighter.gender}</p>
                            </div>

                            <div>
                                <span className="text-dim">Age</span>
                                <p>{fighter.age}</p>
                            </div>

                            <div>
                                <span className="text-dim">Birth Date</span>
                                <p>{fighter.birth_date}</p>
                            </div>

                            <div>
                                <span className="text-dim">Height</span>
                                <p>{fighter.height}</p>
                            </div>

                            <div>
                                <span className="text-dim">Weight</span>
                                <p>{fighter.weight}</p>
                            </div>

                            <div>
                                <span className="text-dim">Reach</span>
                                <p>{fighter.reach}</p>
                            </div>

                            <div>
                                <span className="text-dim">Stance</span>
                                <p>{fighter.stance}</p>
                            </div>

                            <div>
                                <span className="text-dim">Team</span>
                                <p>{fighter.team.name}</p>
                            </div>
                        </div>
                    </section>

                    <section className="detail-section">
                        <h2>Fight Statistics</h2>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>Total Record</h3>

                                <div className="stat-row">
                                    <span>Wins</span>
                                    <strong>{stats.total.win}</strong>
                                </div>

                                <div className="stat-row">
                                    <span>Losses</span>
                                    <strong>{stats.total.loss}</strong>
                                </div>

                                <div className="stat-row">
                                    <span>Draws</span>
                                    <strong>{stats.total.draw}</strong>
                                </div>
                            </div>

                            <div className="stat-card">
                                <h3>KO / TKO</h3>

                                <div className="stat-row">
                                    <span>Wins</span>
                                    <strong>{stats.ko.win}</strong>
                                </div>

                                <div className="stat-row">
                                    <span>Losses</span>
                                    <strong>{stats.ko.loss}</strong>
                                </div>
                            </div>

                            <div className="stat-card">
                                <h3>Submission</h3>

                                <div className="stat-row">
                                    <span>Wins</span>
                                    <strong>{stats.sub.win}</strong>
                                </div>

                                <div className="stat-row">
                                    <span>Losses</span>
                                    <strong>{stats.sub.loss}</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}