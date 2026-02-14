import React from 'react';
import { Utensils, Zap, Star, Apple, Heart, CheckCircle } from 'lucide-react';
import '../styles/MealSuggestions.css';

const mealData = [
    {
        name: "Oats with Peanut Butter",
        price: 30,
        tags: ["Quick", "High Fiber"],
        desc: "A powerhouse of energy. Cheap, nutritious, and keeps you full for hours.",
        icon: <Zap />,
        color: "#0050FF"
    },
    {
        name: "Dal Khichdi + Curd",
        price: 60,
        tags: ["Complete Protein", "Light"],
        desc: "The comfort food for every hosteller. Easy on the stomach and wallet.",
        icon: <Heart />,
        color: "#FF4DAA"
    },
    {
        name: "Peanut Salad",
        price: 40,
        tags: ["Protein Rich", "No Cook"],
        desc: "Just mix boiled peanuts with onions and tomatoes. Perfect evening snack.",
        icon: <Apple />,
        color: "#4ADE80"
    },
    {
        name: "Egg Bhurji + Roti",
        price: 80,
        tags: ["Cheap Protein", "Filling"],
        desc: "The ultimate survival meal. High quality protein at a fraction of the cost.",
        icon: <Utensils />,
        color: "#A855F7"
    },
    {
        name: "Paneer Stir Fry",
        price: 150,
        tags: ["Premium", "Muscle Build"],
        desc: "A bit fancy, but great for weekends when the mess food is unbearable.",
        icon: <Star />,
        color: "#FACC15"
    },
    {
        name: "Soya Chunks Curry",
        price: 50,
        tags: ["Superfood", "Budget"],
        desc: "Massive protein content. Soya is the cheapest way to hit your macros.",
        icon: <CheckCircle />,
        color: "#FB923C"
    }
];

const MealSuggestions = ({ budget }) => {
    // Logic: Show meals that fit within 1/3 of the daily budget (per meal)
    // or just filter for "Affordable" vs "Premium" based on total budget
    const filteredMeals = mealData.filter(meal => {
        const perMealBudget = budget / 3;
        return meal.price <= perMealBudget + 20; // Allow a bit of leeway
    });

    return (
        <section className="meal-suggestions" id="meal-suggestions">
            <div className="section-header">
                <h2 className="section-title">Dishes You Can <span className="text-blue">Actually Make</span></h2>
                <p className="section-subtitle">Nutritious, affordable, and approved for ₹{budget}/day budget.</p>
            </div>

            <div className="meals-grid">
                {filteredMeals.length > 0 ? (
                    filteredMeals.map((meal, i) => (
                        <div className="meal-card" key={i}>
                            <div className="meal-icon" style={{ color: meal.color, backgroundColor: `${meal.color}15` }}>
                                {meal.icon}
                            </div>
                            <div className="meal-tags">
                                {meal.tags.map(tag => (
                                    <span key={tag} className="meal-tag">{tag}</span>
                                ))}
                            </div>
                            <h3>{meal.name}</h3>
                            <p>{meal.desc}</p>
                            <div className="meal-footer">
                                <span className="meal-price">Est. ₹{meal.price}</span>
                                <a href="#explore" className="explore-link">Explore →</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-meals">Maybe try increasing your budget a bit for more variety!</p>
                )}
            </div>
        </section>
    );
};

export default MealSuggestions;
