function Gallery() {
    return (
        <>
            <section className="page-hero section-dark">
                <div className="container">
                    <span className="section-eyebrow" style={{ color: 'var(--color-accent-400)' }}>Memories</span>
                    <h1 className="text-display">Gallery</h1>
                    <p className="page-hero-subtitle">
                        A glimpse of our past events and memorable moments.
                    </p>
                </div>
            </section>

            <section className="section section-cream">
                <div className="container">
                    <div className="content-block">
                        <h2 className="text-h2">Coming Soon</h2>
                        <p>The Gallery page is currently under development.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;
