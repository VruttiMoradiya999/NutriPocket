import React from 'react';
import '../styles/Scores.css';

const ValueProp = () => {
    return (
        <section className="scores-section" id="scores">
            <div className="container">
                <div className="scores-header">
                    <h2 className="section-title">The <span className="text-blue">Winning</span> Metric</h2>
                    <p className="subtitle">We don't just track calories. We track value.</p>
                </div>

                <div className="scores-display">
                    <div className="score-main-card">
                        <div className="metric-header">
                            <h3>Nutrition-Per-Rupee Score™</h3>
                            <span className="ai-badge">AI POWERED</span>
                        </div>

                        <div className="comparison-logic">
                            <div className="food-item bad">
                                <div className="food-visual">🍟</div>
                                <div className="food-info">
                                    <h4>French Fries</h4>
                                    <p>Cost: ₹60</p>
                                </div>
                                <div className="score-circle">2/10</div>
                            </div>

                            <div className="vs">VS</div>

                            <div className="food-item good">
                                <div className="food-visual">🥚</div>
                                <div className="food-info">
                                    <h4>Boiled Eggs</h4>
                                    <p>Cost: ₹12</p>
                                </div>
                                <div className="score-circle highlight">9/10</div>
                            </div>
                        </div>

                        <div className="score-explanation">
                            <p>“Eggs provide 6g protein per ₹6. Fries provide 0.5g protein per ₹60. The choice is obvious.”</p>
                        </div>
                    </div>

                    <div className="scores-grid-small">
                        <div className="small-card">
                            <h4>Protein per ₹10</h4>
                            <div className="stat">4.2g</div>
                            <p>Avg. across your plan</p>
                        </div>
                        <div className="small-card">
                            <h4>Daily Spend</h4>
                            <div className="stat">₹84</div>
                            <p>16% under budget</p>
                        </div>
                        <div className="small-card pink-card">
                            <h4>Smart Spender</h4>
                            <div className="stat">LVL 4</div>
                            <p>Hostel Leaderboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
