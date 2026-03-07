import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sponsorship.css';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

// For testing: gogna.sahil95@gmail.com
// For production: Brothers11cricket@gmail.com
const FORM_ENDPOINT = 'https://formspree.io/f/xaqqygze';

const sponsorshipLevels = [
    { value: '', label: 'Select a level' },
    { value: 'title', label: 'Title Sponsor - $3,000' },
    { value: 'platinum', label: 'Platinum Sponsor - $2,500' },
    { value: 'gold', label: 'Gold Sponsor - $2,000' },
    { value: 'silver', label: 'Silver Sponsor - $1,800' },
    { value: 'bronze', label: 'Bronze Sponsor - $1,500' },
    { value: 'community', label: 'Community Partner - Flexible' },
    { value: 'other', label: 'Other / General Inquiry' },
];

const sponsorshipPackages = [
    {
        tier: 'title',
        name: 'Title Sponsor',
        price: '$3,000',
        slotLimit: '1 Slot Only',
        tagline: 'The premier branding opportunity for a partner looking to be the face of Brothers XI.',
        featured: true,
        exclusive: true,
        benefits: [
            { label: 'Uniform Branding', text: 'Exclusive placement in the Prime Front-of-Jersey location on all player kits.' },
            { label: 'Match-Day Coverage', text: 'Guaranteed branding on all post-match summaries and graphics.' },
            { label: 'Digital Presence', text: 'Frequent dedicated "Partner Spotlights" and shout-outs across all social media platforms.' },
            { label: 'On-Site Activation', text: 'Full rights to display physical banners and promotional stalls at all home matches and tournaments.' },
            { label: 'Direct Marketing', text: 'Priority distribution of business updates, exclusive offers, and product launches to our full club database.' },
            { label: 'Member Communication', text: 'Featured header placement in the monthly "Brothers Club" email newsletter.' },
            { label: 'VIP Access', text: 'Formal invitation to all club-organized gala events, ceremonies, and networking functions.' },
        ],
    },
    {
        tier: 'platinum',
        name: 'Platinum Sponsor',
        price: '$2,500',
        tagline: 'High-impact visibility and consistent engagement.',
        featured: false,
        benefits: [
            { label: 'Uniform Branding', text: 'Premium placement located immediately below the Title Sponsor on all jerseys.' },
            { label: 'Match-Day Coverage', text: 'Branding included on most post-match summaries and results graphics.' },
            { label: 'Digital Presence', text: 'Regular social media shout-outs and dedicated story features.' },
            { label: 'On-Site Activation', text: 'Opportunities for banner placement at major matches and tournaments.' },
            { label: 'Direct Marketing', text: 'Distribution of business offers and updates to the club membership list.' },
            { label: 'Member Communication', text: 'Inclusion in the monthly email newsletter.' },
            { label: 'VIP Access', text: 'Formal invitation to all club-organized events.' },
        ],
    },
    {
        tier: 'gold',
        name: 'Gold Sponsor',
        price: '$2,000',
        tagline: 'Strong brand alignment with a focus on community reach.',
        featured: false,
        benefits: [
            { label: 'Uniform Branding', text: 'Prominent branding on the jersey front (secondary position).' },
            { label: 'Match-Day Coverage', text: 'Inclusion in select post-match summaries throughout the season.' },
            { label: 'Digital Presence', text: 'Periodic social media highlights and mentions.' },
            { label: 'On-Site Activation', text: 'Access to display business signage at key club tournaments.' },
            { label: 'Direct Marketing', text: 'Periodic forwarding of business offers to the club membership list.' },
            { label: 'Event Access', text: 'Invitations to select club events and functions.' },
        ],
    },
    {
        tier: 'silver',
        name: 'Silver Sponsor',
        price: '$1,800',
        tagline: 'Targeted branding for local business growth.',
        featured: false,
        benefits: [
            { label: 'Uniform Branding', text: 'Logo placement on the jersey sleeves.' },
            { label: 'Match-Day Coverage', text: 'Inclusion in specific milestone match summaries.' },
            { label: 'Digital Presence', text: 'Seasonal social media shout-outs.' },
            { label: 'Direct Marketing', text: 'Forwarding of business updates and promotional offers to club members.' },
        ],
    },
    {
        tier: 'bronze',
        name: 'Bronze Sponsor',
        price: '$1,500',
        tagline: 'Essential support for grassroots cricket.',
        featured: false,
        benefits: [
            { label: 'Uniform Branding', text: 'Logo placement on the jersey sleeve (secondary position).' },
            { label: 'Match-Day Coverage', text: 'Occasional branding on major season-highlight summaries.' },
            { label: 'Direct Marketing', text: 'Quarterly distribution of business offers to club members.' },
        ],
    },
    {
        tier: 'community',
        name: 'Community Partner',
        price: 'Flexible',
        priceNote: 'Any amount / In-kind',
        tagline: 'For businesses looking to support the local spirit.',
        featured: false,
        benefits: [
            { label: 'Digital Presence', text: 'Recognition in community-focused social media posts.' },
            { label: 'Shout-outs', text: 'Periodic mentions during club milestones or community events.' },
        ],
    },
];

function Sponsorship() {
    const formRef = useRef(null);
    const heroRef = useRef(null);
    const packagesRef = useRef(null);

    const [formData, setFormData] = useState({
        organization: '',
        contactName: '',
        email: '',
        phone: '',
        sponsorshipLevel: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        // Hero entrance
        const heroEls = heroRef.current?.querySelectorAll('h1, p');
        if (heroEls) {
            gsap.fromTo(heroEls,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
            );
        }

        // Package cards stagger
        if (packagesRef.current) {
            gsap.fromTo(packagesRef.current.querySelectorAll('.package-card'),
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: packagesRef.current, start: 'top 80%' }
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    const scrollToForm = (tier) => {
        // Pre-select the sponsorship level in the form
        setFormData(prev => ({ ...prev, sponsorshipLevel: tier }));

        // Scroll with offset for fixed header
        if (formRef.current) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = formRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `Sponsorship Inquiry: ${formData.organization || formData.contactName}`,
                }),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your inquiry has been submitted. We\'ll be in touch soon.',
                });
                setFormData({
                    organization: '',
                    contactName: '',
                    email: '',
                    phone: '',
                    sponsorshipLevel: '',
                    message: '',
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email us directly.',
            });
        }

        setIsSubmitting(false);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero" ref={heroRef}>
                <div className="container">
                    <h1 className="text-display">Sponsorship Opportunities</h1>
                    <p className="page-hero-subtitle">
                        Partner with Brothers XI and connect your brand with a passionate local sporting community.
                        We offer tiered packages designed to provide maximum visibility, digital engagement, and direct access to our membership base.
                    </p>
                </div>
            </section>

            {/* Packages Section */}
            <section className="sponsorship-packages">
                <div className="container">
                    <div className="sponsorship-section-header">
                        <h2 className="text-h2">Sponsorship Packages</h2>
                        <p>Choose the partnership level that best fits your brand and goals</p>
                    </div>

                    <div className="packages-grid" ref={packagesRef}>
                        {sponsorshipPackages.map((pkg) => (
                            <article
                                key={pkg.tier}
                                className={`package-card tier-${pkg.tier}${pkg.featured ? ' featured' : ''}`}
                            >
                                <div className="package-header">
                                    <span className="package-tier-badge">
                                        {pkg.tier === 'title' ? '👑 ' : ''}
                                        {pkg.name}
                                    </span>
                                    <div className="package-price">
                                        {pkg.price}
                                        {pkg.priceNote && <span> / {pkg.priceNote}</span>}
                                    </div>
                                    {pkg.slotLimit && <span className="package-slot-limit">{pkg.slotLimit}</span>}
                                    <p className="package-tagline">{pkg.tagline}</p>
                                </div>

                                <div className="package-body">
                                    <ul className="package-benefits">
                                        {pkg.benefits.map((benefit, idx) => (
                                            <li key={idx}>
                                                <span className="benefit-icon">✓</span>
                                                <span className="benefit-text">
                                                    <strong>{benefit.label}:</strong> {benefit.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="package-footer">
                                    <button
                                        type="button"
                                        className="package-btn"
                                        onClick={() => scrollToForm(pkg.tier)}
                                    >
                                        Show Interest
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="why-partner-section">
                <div className="container">
                    <div className="why-partner-header">
                        <h2 className="text-h2">Partner With Brothers XI: Fueling Cricket in Tricity</h2>
                        <p>
                            At Brothers XI, we believe cricket is more than just a sport—it's a bridge that connects diverse
                            cultures, fosters discipline, and builds a stronger Tricity community. As a registered Ontario
                            non-profit, we invite you to grow alongside us as we elevate the game in our city.
                        </p>
                    </div>

                    <div className="why-partner-content">
                        <h3>Why Partner With Brothers XI?</h3>

                        <div className="partner-benefit">
                            <h4>🏏 Community Impact &amp; Cricket Development</h4>
                            <p>
                                Your sponsorship directly funds cricket development programs across Tricity, Ontario. From
                                providing gear for emerging players to securing high-quality practice facilities, you are helping
                                us keep the sport accessible. You aren't just sponsoring a team; you're investing in the health
                                and unity of our local community.
                            </p>
                        </div>

                        <div className="partner-benefit">
                            <h4>📣 Premier Brand Visibility</h4>
                            <p>
                                Gain consistent exposure to a loyal and rapidly growing demographic. We offer multi-channel
                                branding opportunities to ensure your business stays top-of-mind:
                            </p>
                            <ul>
                                <li><strong>On-Field:</strong> Jersey branding, pitch-side banners, and equipment logos.</li>
                                <li><strong>Digital:</strong> Dedicated features on our website and high-engagement social media posts.</li>
                                <li><strong>Live Events:</strong> Verbal recognition at matches, local tournaments, and our annual gala.</li>
                            </ul>
                        </div>

                        <div className="partner-benefit">
                            <h4>🤝 Join a Bigger Community</h4>
                            <p>
                                When you sponsor Brothers XI, you become part of a thriving ecosystem. We are more than a
                                team; we are a network. Partnering with us allows you to:
                            </p>
                            <ul>
                                <li><strong>Network:</strong> Connect with other Tricity business owners and community leaders.</li>
                                <li><strong>Build Loyalty:</strong> Engage with a dedicated membership base of professionals, students, and families.</li>
                                <li><strong>Grow Together:</strong> Join our mission to make cricket a cornerstone of Tricity's sporting culture.</li>
                            </ul>
                        </div>

                        <div className="partner-benefit tax-benefit">
                            <h4>🧾 Tax-Efficient Giving</h4>
                            <p>
                                As a Registered Ontario Non-Profit Corporation, we provide official receipts for all sponsorships.
                                This allows your business to support local grassroots sports while benefiting from corporate tax deductions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Inquiry Form Section */}
            <section className="contact-section" ref={formRef}>
                <div className="container">
                    <div className="contact-intro">
                        <h2>Get <span>Started</span></h2>
                        <p>Fill out the form below and we'll be in touch to discuss partnership opportunities</p>
                        <div className="contact-intro-line"></div>
                    </div>

                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        Organization/Business Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="organization"
                                        className="form-input"
                                        placeholder="Your Company Name"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Contact Person Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="contact@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Phone Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        placeholder="(519) 555-0123"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label className="form-label">
                                    Interested Sponsorship Level <span className="required">*</span>
                                </label>
                                <select
                                    name="sponsorshipLevel"
                                    className="form-select"
                                    value={formData.sponsorshipLevel}
                                    onChange={handleChange}
                                    required
                                >
                                    {sponsorshipLevels.map(level => (
                                        <option key={level.value} value={level.value}>
                                            {level.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label className="form-label">
                                    Message / Additional Information
                                </label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell us about your organization and sponsorship goals..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="form-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Sponsorship Inquiry'}
                            </button>

                            {status.message && (
                                <div className={`form-message ${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sponsorship;
