import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sponsorship.css';
import './Contact.css';

// Sponsor logos
import fiveRiversLogo from '../assets/sponsor-logos/5-rivers.png';
import urbanOpticalLogo from '../assets/sponsor-logos/urban-optical.png';
import laalitLogo from '../assets/sponsor-logos/lalit-goyal.png';
import hyderabadLogo from '../assets/sponsor-logos/Logo-Hyderabad House.JPG.jpeg';
import nordicLogo from '../assets/sponsor-logos/N-dentist.png';
import oruLogo from '../assets/sponsor-logos/ORU.png';

gsap.registerPlugin(ScrollTrigger);

const sponsors2026 = [
    {
        name: '5 Rivers Renovation',
        logo: fiveRiversLogo,
        since: 2025,
        category: 'Home Renovation',
        description: 'Based in the GTA and Kitchener-Waterloo region, 5 Rivers Renovation is a trusted renovation firm specializing in kitchen remodels, bathroom upgrades, stair transformations, and full interior improvements. Known for quality craftsmanship and attention to detail.',
        testimonial: '"Partnering with Brothers XI has connected us with a supportive community that believes in local businesses. Since joining in 2025, Brothers XI has provided strong local brand visibility, direct customer connections, and meaningful engagement within the GTA and KW regions."',
        link: 'https://www.instagram.com/5riversrenovation/',
        linkLabel: '@5riversrenovation',
    },
    {
        name: 'Urban Optical',
        logo: urbanOpticalLogo,
        since: 2025,
        category: 'Eyecare & Eyewear',
        description: 'Located in Kitchener-Waterloo, Urban Optical is a modern optical boutique dedicated to personalized vision care and premium eyewear. They offer a curated selection of stylish frames, high-quality lenses, and expert eye care services tailored to each customer\'s needs.',
        testimonial: '"We saw real results — increased brand awareness and a noticeable rise in customer inquiries. Since partnering with Brothers XI in 2025, we\'ve strengthened our connection with the local community through match-day visibility, digital promotions, and strong word-of-mouth. This partnership reflects shared values — professionalism, trust, and community support."',
        link: 'https://www.urbanoptical.ca/',
        linkLabel: 'urbanoptical.ca',
    },
    {
        name: 'Saar & Risk Solution',
        logo: laalitLogo,
        since: 2025,
        category: 'Risk & Insurance Advisory',
        description: 'Led by Lalit Gupta, Saar & Risk Solution provides expert risk management and insurance advisory services — helping individuals and businesses secure their financial future with confidence and clarity.',
        testimonial: '"The Brothers XI community became genuine advocates, referring friends and colleagues for life insurance and investment planning. It\'s the most human marketing investment I\'ve made for my local business — because people buy from those they trust, and this community trusts each other."',
        link: 'https://risksolution.ca/',
        linkLabel: 'risksolution.ca',
    },
    {
        name: 'Nordic Dentistry',
        logo: nordicLogo,
        since: 2026,
        category: 'Dental Clinic',
        description: 'A full-service dental clinic in Kitchener serving the KW region. Services include preventive care, implants, orthodontics, root canals, oral surgery, and cosmetic dentistry — all with a patient-centered approach.',
        testimonial: 'Since joining in 2026, Nordic Dentistry has gained meaningful visibility through team promotions and events, strengthening their connection to the local community. Their commitment to patient care aligns perfectly with the Brothers XI values of trust and long-term relationships.',
        link: 'https://nordicdentistry.com/',
        linkLabel: 'nordicdentistry.com',
    },
    {
        name: 'Nawabi Hyderabad House',
        logo: hyderabadLogo,
        since: 2025,
        category: 'Restaurant',
        description: 'Offering authentic Hyderabadi flavours right in Waterloo — from fragrant biryanis and rich curries to tandoori dishes and South Indian favourites. A go-to destination for the region\'s South Asian community.',
        testimonial: 'Owner Nishant Saini has been a long-time associate of the Brothers XI family — contributing as both a passionate player and a generous sponsor. His support goes beyond business; it\'s a reflection of genuine community spirit and pride in the team\'s success.',
        link: 'https://hhwaterloo.ca/',
        linkLabel: 'hhwaterloo.ca',
    },
    {
        name: 'Oru',
        logo: oruLogo,
        since: 2026,
        category: 'Ed Tech Platform',
        description: 'Oru is where mentorship, peer learning, and community come together to help job seekers grow into confident, job-ready IT professionals. Empowering the next generation of tech talent — one career at a time.',
        testimonial: 'Cricket and community have always gone hand in hand for us. Supporting Brothers XI felt like a natural extension of what Oru stands for — bringing people together, lifting each other up, and building something meaningful as a team.',
        link: 'https://joinoru.com/',
        linkLabel: 'joinoru.com',
    },
];


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
        isTaken: true,
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

            {/* 2026 Season Sponsors */}
            <section className="sponsors-section">
                <div className="container">
                    <div className="sponsorship-section-header">
                        <h2 className="text-h2">Our 2026 Season Partners</h2>
                        <p>Businesses that believe in Brothers XI — hover each card to hear from them.</p>
                    </div>

                    <div className="sponsors-grid">
                        {sponsors2026.map((sponsor) => (
                            <div key={sponsor.name} className="sponsor-flip-card" aria-label={sponsor.name}>
                                <div className="sponsor-flip-inner">
                                    {/* Front */}
                                    <div className="sponsor-flip-front">
                                        <div className="sponsor-logo-wrap">
                                            {sponsor.logo ? (
                                                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                            ) : (
                                                <div className="sponsor-logo-fallback">{sponsor.logoInitials}</div>
                                            )}
                                        </div>
                                        <div className="sponsor-info">
                                            <span className="sponsor-since">Official Sponsor · Since {sponsor.since}</span>
                                            <h3 className="sponsor-name">{sponsor.name}</h3>
                                            <span className="sponsor-category">{sponsor.category}</span>
                                            <p className="sponsor-description">{sponsor.description}</p>
                                        </div>
                                        <div className="sponsor-hover-hint">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h8M12 8l4 4-4 4" /></svg>
                                            Hover to read their story
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div className="sponsor-flip-back">
                                        <div className="sponsor-quote-mark">&ldquo;</div>
                                        <p className="sponsor-testimonial">{sponsor.testimonial}</p>
                                        <div className="sponsor-back-footer">
                                            <span className="sponsor-back-name">{sponsor.name}</span>
                                            {sponsor.link && (
                                                <a
                                                    href={sponsor.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="sponsor-link-btn"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {sponsor.linkLabel}
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


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
                                className={`package-card tier-${pkg.tier}${pkg.featured ? ' featured' : ''}${pkg.isTaken ? ' taken' : ''}`}
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
                                    {pkg.slotLimit && (
                                        <span className={`package-slot-limit${pkg.isTaken ? ' slot-taken' : ''}`}>
                                            {pkg.isTaken ? '✓ Slot Filled' : pkg.slotLimit}
                                        </span>
                                    )}
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
                                        onClick={() => !pkg.isTaken && scrollToForm(pkg.tier)}
                                        disabled={pkg.isTaken}
                                    >
                                        {pkg.isTaken ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                                Position Filled
                                            </>
                                        ) : (
                                            <>
                                                Show Interest
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </>
                                        )}
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
