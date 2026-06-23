export default function FightDetail() {
    const result = {
        won_type: "KO",
        round: 2,
        minute: "3:29",
        ko_type: "Punches",
        target: null,
        sub_type: null,
        score: [],
    };

    const fighterA = {
        fighter: {
            id: 2554,
            name: "Fighter A",
        },
        strikes: {
            total: {
                head: 57,
                body: 14,
                legs: 10,
            },
            power: {
                head: 14,
                body: 7,
                legs: 7,
            },
            takedowns: {
                attempt: 0,
                landed: 0,
            },
            submissions: 0,
            control_time: "0:04",
            knockdowns: 0,
        },
    };

    const fighterB = {
        fighter: {
            id: 2580,
            name: "Fighter B",
        },
        strikes: {
            total: {
                head: 114,
                body: 8,
                legs: 1,
            },
            power: {
                head: 57,
                body: 7,
                legs: 1,
            },
            takedowns: {
                attempt: 3,
                landed: 1,
            },
            submissions: 0,
            control_time: "1:47",
            knockdowns: 1,
        },
    };

    return (
        <main className="fight-detail-page">
            <div className="fight-detail-card">
                <div className="fight-result-banner">
          <span className="result-method">
            Victory by {result.won_type}
          </span>

                    <h1>Fight Statistics</h1>

                    <p>
                        Finished in Round {result.round} at {result.minute}
                    </p>

                    {result.ko_type && (
                        <div className="finish-detail">
                            Finish Type: {result.ko_type}
                        </div>
                    )}
                </div>

                <div className="fighters-comparison">
                    <div className="fighter-side">
                        <h2>{fighterA.fighter.name}</h2>
                        <span className="fighter-id">
              Fighter #{fighterA.fighter.id}
            </span>
                    </div>

                    <div className="versus">VS</div>

                    <div className="fighter-side">
                        <h2>{fighterB.fighter.name}</h2>
                        <span className="fighter-id">
              Fighter #{fighterB.fighter.id}
            </span>
                    </div>
                </div>

                {/* TOTAL STRIKES */}
                <section className="detail-section">
                    <h2>Total Strikes</h2>

                    <div className="comparison-grid">
                        <div className="comparison-row">
                            <span>{fighterA.strikes.total.head}</span>
                            <label>Head</label>
                            <span>{fighterB.strikes.total.head}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.total.body}</span>
                            <label>Body</label>
                            <span>{fighterB.strikes.total.body}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.total.legs}</span>
                            <label>Legs</label>
                            <span>{fighterB.strikes.total.legs}</span>
                        </div>
                    </div>
                </section>

                {/* POWER STRIKES */}
                <section className="detail-section">
                    <h2>Power Strikes</h2>

                    <div className="comparison-grid">
                        <div className="comparison-row">
                            <span>{fighterA.strikes.power.head}</span>
                            <label>Head</label>
                            <span>{fighterB.strikes.power.head}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.power.body}</span>
                            <label>Body</label>
                            <span>{fighterB.strikes.power.body}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.power.legs}</span>
                            <label>Legs</label>
                            <span>{fighterB.strikes.power.legs}</span>
                        </div>
                    </div>
                </section>

                {/* TAKEDOWNS */}
                <section className="detail-section">
                    <h2>Takedowns</h2>

                    <div className="comparison-grid">
                        <div className="comparison-row">
              <span>
                {fighterA.strikes.takedowns.landed}/
                  {fighterA.strikes.takedowns.attempt}
              </span>

                            <label>Landed / Attempted</label>

                            <span>
                {fighterB.strikes.takedowns.landed}/
                                {fighterB.strikes.takedowns.attempt}
              </span>
                        </div>
                    </div>
                </section>

                {/* ADVANCED STATS */}
                <section className="detail-section">
                    <h2>Advanced Statistics</h2>

                    <div className="comparison-grid">
                        <div className="comparison-row">
                            <span>{fighterA.strikes.submissions}</span>
                            <label>Submissions</label>
                            <span>{fighterB.strikes.submissions}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.control_time}</span>
                            <label>Control Time</label>
                            <span>{fighterB.strikes.control_time}</span>
                        </div>

                        <div className="comparison-row">
                            <span>{fighterA.strikes.knockdowns}</span>
                            <label>Knockdowns</label>
                            <span>{fighterB.strikes.knockdowns}</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}