import { useState } from 'react';
import './Contact.css';

// For testing: gogna.sahil95@gmail.com
// For production: Brothers11cricket@gmail.com
const FORM_ENDPOINT = 'https://formspree.io/f/xpwzgkvq'; // Replace with your Formspree form ID

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

function Contact() {
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
            <section className="page-hero section-dark">
                <div className="container">
                    <h1 className="text-display">Contact Us</h1>
                    <p className="page-hero-subtitle">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-section">
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

export default Contact;
