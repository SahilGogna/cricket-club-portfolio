import './SocialHub.css';

const youtubeVideos = [
    { id: '6jK4aNBGQog', title: 'Brothers XI Match Highlights' },
    { id: 'SL0U7MLVL9U', title: 'Brothers XI Cricket Action' },
    { id: 'eHAFKpbnvoI', title: 'Brothers XI Team Moments' },
];

const instagramReels = [
    { url: 'https://www.instagram.com/brothers.xi/reel/DL3HucixIwJ/', id: 'DL3HucixIwJ' },
    { url: 'https://www.instagram.com/villagecrickettt/reel/DLh7qjmAd_n/', id: 'DLh7qjmAd_n' },
    { url: 'https://www.instagram.com/brothers.xi/reel/DIbnQ-SRhMo/', id: 'DIbnQ-SRhMo' },
];

function SocialHub() {
    return (
        <>
            <section className="page-hero section-dark">
                <div className="container">
                    <span className="section-eyebrow" style={{ color: 'var(--color-accent-400)' }}>Connect</span>
                    <h1 className="text-display">Social Hub</h1>
                    <p className="page-hero-subtitle">
                        Follow our journey across YouTube and Instagram.
                    </p>
                </div>
            </section>

            {/* YouTube Section */}
            <section className="section section-white youtube-section">
                <div className="container">
                    <div className="section-header">
                        <div className="platform-badge youtube">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            YouTube
                        </div>
                        <h2 className="text-h2">Latest Videos</h2>
                    </div>

                    <div className="videos-grid">
                        {youtubeVideos.map((video) => (
                            <div key={video.id} className="video-card">
                                <div className="video-wrapper">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="section-cta">
                        <a
                            href="https://www.youtube.com/@VillageCrickettt/videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            View All Videos
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="section section-cream instagram-section">
                <div className="container">
                    <div className="section-header">
                        <div className="platform-badge instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                <circle cx="12" cy="12" r="3.5" />
                                <circle cx="18.406" cy="5.594" r="1.44" />
                            </svg>
                            Instagram
                        </div>
                        <h2 className="text-h2">Latest Reels</h2>
                    </div>

                    <div className="reels-grid">
                        <div className="reel-embed">
                            <iframe
                                src="https://www.instagram.com/reel/DL3HucixIwJ/embed"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            />
                        </div>
                        <div className="reel-embed">
                            <iframe
                                src="https://www.instagram.com/reel/DLh7qjmAd_n/embed"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            />
                        </div>
                        <div className="reel-embed">
                            <iframe
                                src="https://www.instagram.com/reel/DIbnQ-SRhMo/embed"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="section-cta">
                        <a
                            href="https://www.instagram.com/brothers.xi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Follow on Instagram
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SocialHub;
