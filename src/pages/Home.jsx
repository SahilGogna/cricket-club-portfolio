import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import heroImage from '../assets/images/home_page.jpg';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        // Hero entrance — staggered
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
            .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
            .fromTo(ctaRef.current, { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.6 }, '-=0.4');

        // Highlight cards — scroll-triggered stagger
        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.highlight-card');
            gsap.fromTo(cards,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <>
            {/* Hero Section with Background Image */}
            <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title" ref={titleRef}>More Than a Cricket Club.</h1>
                        <p className="hero-subtitle" ref={subtitleRef}>
                            Brothers XI Cricket Club competes in Ontario's leading leagues while
                            creating lasting community impact across Waterloo, Hamilton, and beyond.
                        </p>
                        <a href="/sponsorship" className="btn btn-primary btn-lg" ref={ctaRef}>
                            Become a Sponsor
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2025 Season Highlights */}
            <section className="section highlights-section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="text-h2">2025 Season Highlights</h2>
                        <p className="section-subtitle">
                            Celebrating our competitive journey this season
                        </p>
                    </div>

                    <div className="highlights-grid" ref={cardsRef}>
                        <article className="highlight-card">
                            <div className="highlight-icon semi-finals">
                                <span>🏏</span>
                            </div>
                            <div className="highlight-content">
                                <span className="highlight-tag tag-semi">Semi Finals</span>
                                <h3>South Ontario Cricket Association</h3>
                                <p>SOCA Cup</p>
                            </div>
                        </article>

                        <article className="highlight-card">
                            <div className="highlight-icon semi-finals">
                                <span>🏏</span>
                            </div>
                            <div className="highlight-content">
                                <span className="highlight-tag tag-semi">Semi Finals</span>
                                <h3>Rampage Cricket League</h3>
                                <p>RPL</p>
                            </div>
                        </article>

                        <article className="highlight-card">
                            <div className="highlight-icon runner-up">
                                <span>🥈</span>
                            </div>
                            <div className="highlight-content">
                                <span className="highlight-tag tag-runner">Runners Up</span>
                                <h3>Woodstock Cricket League</h3>
                                <p>WCL - Elite Division</p>
                            </div>
                        </article>

                        <article className="highlight-card">
                            <div className="highlight-icon runner-up">
                                <span>🥈</span>
                            </div>
                            <div className="highlight-content">
                                <span className="highlight-tag tag-runner">Runners Up</span>
                                <h3>Gladiator Cup</h3>
                                <p>Season 2025</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
