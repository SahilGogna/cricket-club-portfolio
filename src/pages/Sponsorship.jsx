import './Sponsorship.css';

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
    return (
        <>
            {/* Hero Section */}
            <section className="page-hero section-dark">
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

                    <div className="packages-grid">
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
                                    <a href="/contact" className="package-btn">
                                        Show Interest
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="sponsorship-cta">
                <div className="container">
                    <h2 className="text-h2">Ready to Partner With Us?</h2>
                    <p>
                        Join our growing family of sponsors and make a lasting impact on local cricket in the Waterloo region.
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Contact Us
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="/about" className="btn btn-secondary btn-lg">
                            Learn About Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sponsorship;
