import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import harshitImg from '../assets/images/Harshit Sethi.png';
import dilpreetImg from '../assets/images/Dilpreet Singh.png';
import kharkImg from '../assets/images/Khark Sidhu.png';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
    {
        name: 'Harshit Sethi',
        role: 'Club President',
        phone: '+1 (437) 799-6602',
        email: 'hs0671@gmail.com',
        image: harshitImg,
    },
    {
        name: 'Dilpreet Singh',
        role: 'Founder & CEO',
        phone: '+1 (519) 859-7718',
        email: 'dilpreetsingh466@gmail.com',
        image: dilpreetImg,
    },
    {
        name: 'Khark Sidhu',
        role: 'Public Affairs',
        phone: '+1 (416) 770-1984',
        email: 'kharksidhu@outlook.com',
        image: kharkImg,
    },
];

const leagues = [
    { name: 'SOCA', full: 'Southern Ontario Cricket Association', desc: '56 teams participating in three different divisions' },
    { name: 'HDCL', full: 'Hamilton and District Cricket League', desc: null },
    { name: 'WCL', full: 'Woodstock Cricket League', desc: null },
    { name: 'RCL', full: 'Rampage Cricket League', desc: null },
];

function About() {
    const heroRef = useRef(null);
    const leaguesRef = useRef(null);
    const leadersRef = useRef(null);

    useEffect(() => {
        // Hero text entrance
        const heroEls = heroRef.current?.querySelectorAll('h1, p');
        if (heroEls) {
            gsap.fromTo(heroEls,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
        }

        // League items stagger in
        if (leaguesRef.current) {
            const items = leaguesRef.current.querySelectorAll('li, .about-highlight');
            gsap.fromTo(items,
                { x: -30, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: leaguesRef.current, start: 'top 80%' },
                }
            );
        }

        // Leader cards stagger in
        if (leadersRef.current) {
            const cards = leadersRef.current.querySelectorAll('.leader-card');
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: leadersRef.current, start: 'top 80%' },
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero" ref={heroRef}>
                <div className="container">
                    <h1 className="text-display">Executive Summary</h1>
                    <p className="page-hero-subtitle">
                        A family-oriented cricket club making an impact in Ontario's premier leagues.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="section about-content">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text" ref={leaguesRef}>
                            <h2 className="text-h2">Our Story</h2>
                            <p className="about-intro">
                                Brother's XI Cricket Club is a family-oriented club based in Region of Waterloo.
                                Our team participates in Ontario's biggest leagues, competing at the highest levels
                                while fostering a strong sense of community.
                            </p>

                            <h3 className="about-section-title">Leagues We Compete In</h3>
                            <ul className="leagues-list">
                                {leagues.map((league) => (
                                    <li key={league.name}>
                                        <strong>{league.name}</strong> ({league.full})
                                        {league.desc && <span> — {league.desc}</span>}
                                    </li>
                                ))}
                                <li>Other local leagues</li>
                            </ul>

                            <div className="about-highlight">
                                <p>
                                    We have been an active community member of the Waterloo region. Our success
                                    speaks for itself, in both our longevity, representative players and premierships.
                                </p>
                                <p className="highlight-achievement">
                                    Brother's XI has been <strong>champions of Braveheart's Cricket League 2024</strong> and
                                    <strong> runners up of Royal Cricket League 2024</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section leadership-section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="text-h2">Club Leadership</h2>
                        <p className="section-subtitle">
                            Meet the team behind Brothers XI Cricket Club
                        </p>
                    </div>

                    <div className="leaders-grid" ref={leadersRef}>
                        {leaders.map((leader) => (
                            <article key={leader.name} className="leader-card">
                                <div className="leader-image-wrapper">
                                    <img src={leader.image} alt={leader.name} className="leader-image" />
                                </div>
                                <div className="leader-info">
                                    <h3>{leader.name}</h3>
                                    <p className="leader-role">{leader.role}</p>
                                    <div className="leader-contact">
                                        <span className="contact-item">{leader.phone}</span>
                                        <a href={`mailto:${leader.email}`} className="contact-item contact-email">{leader.email}</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
