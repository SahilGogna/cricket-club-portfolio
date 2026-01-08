import './About.css';
import harshitImg from '../assets/images/Harshit Sethi.png';
import dilpreetImg from '../assets/images/Dilpreet Singh.png';
import kharkImg from '../assets/images/Khark Sidhu.png';

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
    return (
        <>
            {/* Hero Section */}
            <section className="page-hero section-dark">
                <div className="container">
                    <span className="section-eyebrow" style={{ color: 'var(--color-accent-400)' }}>About Us</span>
                    <h1 className="text-display">Executive Summary</h1>
                    <p className="page-hero-subtitle">
                        A family-oriented cricket club making an impact in Ontario's premier leagues.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="section section-white about-content">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
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
            <section className="section section-cream leadership-section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="text-h2">Club Leadership</h2>
                        <p className="section-subtitle">
                            Meet the team behind Brothers XI Cricket Club
                        </p>
                    </div>

                    <div className="leaders-grid">
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
