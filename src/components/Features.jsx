import React from 'react';
import { IndianRupee, Cpu, Utensils, Zap, BarChart3, Globe2, Trophy, BrainCircuit } from 'lucide-react';
import '../styles/Features.css';

const features = [
    {
        title: "Smart Budget Meal Gen",
        desc: "Personalized meal plans based on your daily budget and available appliances.",
        icon: <IndianRupee />,
        color: "#0050FF"
    },
    {
        title: "Nutrition-Per-Rupee",
        desc: "Our winning feature. We score every food item by how much protein you get per ₹10.",
        icon: <BarChart3 />,
        color: "#FF4DAA"
    },
    {
        title: "Mess Rescue Mode",
        desc: "Add smart supplements to your boring mess food for a balanced diet on a budget.",
        icon: <Utensils />,
        color: "#4ADE80"
    },
    {
        title: "Appliance-Aware",
        desc: "Only have a kettle? No kitchen? No problem. Recipes designed for hostel reality.",
        icon: <Cpu />,
        color: "#A855F7"
    }
];

const advancedFeatures = [
    { title: "Weekly Optimizer", icon: <Zap /> },
    { title: "Price Adaptation", icon: <Globe2 /> },
    { title: "Leaderboard", icon: <Trophy /> },
    { title: "AI Insights", icon: <BrainCircuit /> }
];

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="section-header">
                <h2 className="section-title">Everything You Need for <span className="text-blue">Hostel Survival</span></h2>
                <p className="section-subtitle">Practical solutions students actually use. Built for ₹100/day survival.</p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <div className="feature-card" key={i}>
                        <div className="feature-icon" style={{ color: f.color }}>
                            {f.icon}
                        </div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>

            <div className="advanced-belt">
                <h3>Advanced Features</h3>
                <div className="advanced-items">
                    {advancedFeatures.map((f, i) => (
                        <div className="adv-item" key={i}>
                            <span className="adv-icon">{f.icon}</span>
                            <span className="adv-name">{f.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
