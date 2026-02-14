import React, { useState } from 'react';
import '../styles/ExpenseCalculator.css';

const ExpenseCalculator = ({ budget, setBudget }) => {
    const handleSliderChange = (e) => {
        setBudget(Number(e.target.value));
    };

    const getNutritionTip = (val) => {
        if (val < 100) return "Focus on eggs, pulses and seasonal fruits for max nutrition on a budget.";
        if (val < 200) return "You can include more dairy, nuts and variety of veggies in your daily meals.";
        return "Great budget! You can easily afford balanced meals with lean protein and high-quality fats.";
    };

    return (
        <section id="calculator" className="calculator-section">
            <div className="calculator-container">
                <h2 className="calc-title">
                    Estimate your <span className="highlight-box">DAILY EXPENSE</span> with NutriPocket
                </h2>

                <div className="calc-main-value">
                    ₹{budget}<span>/Day</span>
                </div>

                <p className="calc-subtitle">Hostel Student Budget</p>

                <div className="slider-wrapper">
                    <input
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={budget}
                        onChange={handleSliderChange}
                        className="budget-slider"
                    />
                    <div className="slider-marks">
                        <span>₹50</span>
                        <span>₹100</span>
                        <span>₹250</span>
                        <span>₹400</span>
                        <span>₹500+</span>
                    </div>
                </div>

                <p className="calc-disclaimer">
                    {getNutritionTip(budget)}
                    <br />
                    <span className="small-text">Calculated based on average mess and local food prices. Actual nutrition may vary based on specific food choices and regional availability.</span>
                </p>

                {/* Decorative elements to match reference image */}
                <div className="decor-wave"></div>
                <div className="decor-flower"></div>
            </div>
        </section>
    );
};

export default ExpenseCalculator;
