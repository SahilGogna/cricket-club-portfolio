import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span>Brothers</span>
                            <span className="accent">XI</span>
                        </Link>
                        <p className="footer-tagline">
                            Community-driven cricket in the Region of Waterloo
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Navigation</h4>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/achievements">Achievements</Link>
                            <Link to="/sponsorship">Sponsorship</Link>
                        </div>

                        <div className="footer-col">
                            <h4>Connect</h4>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href="mailto:contact@brothersxi.ca">contact@brothersxi.ca</a>
                            <span>Region of Waterloo, ON</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Brothers XI Cricket Club</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
