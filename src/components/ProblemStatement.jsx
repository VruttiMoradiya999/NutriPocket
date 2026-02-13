import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Problem.css';

gsap.registerPlugin(ScrollTrigger);

const ProblemStatement = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".problem-card", {
                scrollTrigger: {
                    trigger: ".problem-section",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="problem-section" ref={containerRef}>
            <div className="container">
                <div className="header-logic">
                    <span className="label">The Reality Check</span>
                    <h2>Why Existing Apps <span className="text-pink">Fail</span> Students</h2>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="card-top">
                            <span className="app-name">MyFitnessPal</span>
                            <span className="fail-tag">❌ Fails</span>
                        </div>
                        <h3>Assumes Kitchen Access</h3>
                        <p>Suggests complex recipes that require ovens, blenders, and 10+ ingredients. Not for hostel rooms.</p>
                    </div>

                    <div className="problem-card highlight-card">
                        <div className="card-top">
                            <span className="app-name">NutriPocket</span>
                            <span className="win-tag">✅ Wins</span>
                        </div>
                        <h3>Built for ₹100/Day Survival</h3>
                        <p>We know you only have a kettle. We know your budget is tight. We make it work.</p>
                    </div>

                    <div className="problem-card">
                        <div className="card-top">
                            <span className="app-name">HealthifyMe</span>
                            <span className="fail-tag">❌ Fails</span>
                        </div>
                        <h3>Premium Bias</h3>
                        <p>Focuses on expensive supplements and premium coaching instead of affordable local nutrition.</p>
                    </div>
                </div>

                <div className="problem-footer">
                    <p>"India has 3+ crore hostel students struggling with nutrition. We are the solution."</p>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
