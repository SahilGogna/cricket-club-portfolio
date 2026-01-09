import './MinimalFooter.css';

function MinimalFooter() {
    return (
        <footer className="minimal-footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-brand">
                        <span className="logo">Brothers <span className="logo-accent">XI</span></span>
                        <p>© {new Date().getFullYear()} Brothers XI Cricket Club</p>
                    </div>
                    <div className="footer-contact">
                        <a href="mailto:Brothers11cricket@gmail.com">Brothers11cricket@gmail.com</a>
                        <span className="footer-location">Region of Waterloo, ON</span>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/brothers.xi/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                <circle cx="12" cy="12" r="3.5" />
                                <circle cx="18.406" cy="5.594" r="1.44" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@VillageCrickettt/videos" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/@brothers.xi8" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-credit">
                    Made with <span className="heart">❤️</span> by{' '}
                    <a href="https://www.linkedin.com/in/gognasahil/" target="_blank" rel="noopener noreferrer">
                        Sahil Gogna
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default MinimalFooter;
