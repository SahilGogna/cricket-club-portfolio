import './Home.css';
import heroImage from '../assets/images/home_page.jpg';

function Home() {
    return (
        <>
            {/* Hero Section with Background Image */}
            <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">More Than a Cricket Club.</h1>
                        <p className="hero-subtitle">
                            Brothers XI Cricket Club competes in Ontario's leading leagues while
                            creating lasting community impact across Waterloo, Hamilton, and beyond.
                        </p>
                        <a href="/sponsorship" className="btn btn-primary btn-lg">
                            Become a Sponsor
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2025 Season Highlights */}
            <section className="section section-white highlights-section">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="text-h2">2025 Season Highlights</h2>
                        <p className="section-subtitle">
                            Celebrating our competitive journey this season
                        </p>
                    </div>

                    <div className="highlights-grid">
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

