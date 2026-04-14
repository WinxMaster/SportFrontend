export default function Home() {
    return (
        <div>
            <main>
                <div className="card">
                    <h1>UFC 305: PEREIRA vs. ANKALAEV</h1>
                    <p>15. März | 04:00 CET | Las Vegas</p>
                </div>

                <div className="dashboard">

                    <div className="card">
                        <h2>Nächste Events</h2>
                        <p><strong>UFC Fight Night</strong></p>
                        <small>18. März - Sandhagen vs. Nurmagomedov</small>
                    </div>

                    <div className="card">
                        <h2>Letzte Ergebnisse</h2>
                        <p>Main Event: <span className="winner">Pereira</span></p>
                    </div>

                    <div className="card">
                        <h2>Gewichtsklassen</h2>
                        <button className="weight-btn">Heavyweight</button>
                        <button className="weight-btn">Light Heavyweight</button>
                        <button className="weight-btn">Lightweight</button>
                        <button className="weight-btn">Middleweight</button>
                        <button className="weight-btn">Welterweight</button>
                    </div>

                </div>
            </main>
        </div>
    );
}