import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Marquee.css';

const Marquee = () => {
    const marquee1Ref = useRef(null);
    const marquee2Ref = useRef(null);

    useEffect(() => {
        gsap.to(marquee1Ref.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "none",
        });

        gsap.to(marquee2Ref.current, {
            xPercent: 50,
            repeat: -1,
            duration: 25,
            ease: "none",
        });
    }, []);

    const items1 = [
        "Smart Budgeting", "✦", "Nutrition-Per-Rupee", "✦", "Mess Rescue Mode", "✦", "Appliance Aware", "✦", "Ingredient Optimizer"
    ];

    const items2 = [
        "Protein King", "✦", "Smart Spender", "✦", "Urban Price Adaptation", "✦", "AI Insights", "✦", "Hostel Survival"
    ];

    return (
        <div className="marquee-section">
            <div className="marquee-container pink-bg">
                <div className="marquee-content" ref={marquee1Ref}>
                    {Array(4).fill(items1).flat().map((item, idx) => (
                        <span key={idx} className="marquee-item">{item}</span>
                    ))}
                </div>
            </div>
            <div className="marquee-container blue-bg">
                <div className="marquee-content" ref={marquee2Ref} style={{ transform: 'translateX(-50%)' }}>
                    {Array(4).fill(items2).flat().map((item, idx) => (
                        <span key={idx} className="marquee-item">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
