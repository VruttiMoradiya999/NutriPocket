import React from 'react';
import '../styles/MessRescue.css';

const MessRescue = () => {
    return (
        <section className="mess-rescue" id="mess-rescue">
            <div className="container">
                <div className="flex-layout">
                    <div className="visual">
                        <div className="mess-card">
                            <div className="mess-top">
                                <h4>Today's Mess Menu</h4>
                                <p>Rice + Dal (Carb Heavy)</p>
                            </div>
                            <div className="arrow-down">↓</div>
                            <div className="rescue-action">
                                <div className="action-item">
                                    <span className="plus">+</span>
                                    <span>2 Boiled Eggs (₹12)</span>
                                </div>
                                <div className="action-item">
                                    <span className="plus">+</span>
                                    <span>Roasted Peanuts (₹5)</span>
                                </div>
                            </div>
                            <div className="result-bar">
                                <div className="protein-win">Protein Boost: +18g</div>
                                <div className="cost-win">Total Cost: ₹17</div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <h2 className="section-title">Mess <span className="text-pink">Rescue</span> Mode</h2>
                        <p className="description">
                            Don't skip the mess food you already paid for. Just fix it.
                            Our AI suggests minimal additions to balance your macros.
                        </p>
                        <ul className="benefits">
                            <li>
                                <strong>Analyze:</strong> Select what your mess is serving.
                            </li>
                            <li>
                                <strong>Optimize:</strong> Get suggestions for the cheapest protein additions.
                            </li>
                            <li>
                                <strong>Execute:</strong> Minimal prep, maximum gain.
                            </li>
                        </ul>
                        <button className="secondary-btn">Try Mess Rescue</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessRescue;
