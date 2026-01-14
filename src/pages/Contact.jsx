import { useState } from 'react';
import './Contact.css';

// For testing: gogna.sahil95@gmail.com
// For production: Brothers11cricket@gmail.com
const FORM_ENDPOINT = 'https://formspree.io/f/xpwzgkvq';

const playerRoles = [
    { value: '', label: 'Select your role' },
    { value: 'batsman', label: 'Batsman' },
    { value: 'bowler', label: 'Bowler' },
    { value: 'allrounder', label: 'All-Rounder' },
];

const battingStyles = [
    { value: '', label: 'Select batting style' },
    { value: 'right-handed', label: 'Right-Handed Batsman' },
    { value: 'left-handed', label: 'Left-Handed Batsman' },
];

const bowlingTypes = [
    { value: '', label: 'Select bowling type' },
    // Right-arm Pace bowlers
    { value: 'right-arm-fast', label: 'Right-Arm Fast Bowler' },
    { value: 'right-arm-fast-medium', label: 'Right-Arm Fast-Medium Bowler' },
    { value: 'right-arm-medium-fast', label: 'Right-Arm Medium-Fast Bowler' },
    { value: 'right-arm-medium', label: 'Right-Arm Medium Pace Bowler' },
    // Left-arm Pace bowlers
    { value: 'left-arm-fast', label: 'Left-Arm Fast Bowler' },
    { value: 'left-arm-fast-medium', label: 'Left-Arm Fast-Medium Bowler' },
    { value: 'left-arm-medium-fast', label: 'Left-Arm Medium-Fast Bowler' },
    { value: 'left-arm-medium', label: 'Left-Arm Medium Pace Bowler' },
    // Spin bowlers - Right arm
    { value: 'off-spin', label: 'Off-Spin Bowler (Right-Arm)' },
    { value: 'leg-spin', label: 'Leg-Spin Bowler (Right-Arm)' },
    // Spin bowlers - Left arm
    { value: 'left-arm-orthodox', label: 'Left-Arm Orthodox Spinner' },
    { value: 'left-arm-chinaman', label: 'Left-Arm Chinaman (Wrist Spin)' },
];

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        playerRole: '',
        battingStyle: '',
        bowlingType: '',
        experience: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Reset dependent fields when player role changes
        if (name === 'playerRole') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                battingStyle: '',
                bowlingType: '',
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Build the submission data
        const submissionData = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            playerRole: formData.playerRole,
            experience: formData.experience,
            message: formData.message,
            _subject: `Join the Team Request: ${formData.fullName}`,
        };

        // Add relevant fields based on role
        if (formData.playerRole === 'batsman' || formData.playerRole === 'allrounder') {
            submissionData.battingStyle = formData.battingStyle;
        }
        if (formData.playerRole === 'bowler' || formData.playerRole === 'allrounder') {
            submissionData.bowlingType = formData.bowlingType;
        }

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you for your interest! We\'ll review your application and get back to you soon.',
                });
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    playerRole: '',
                    battingStyle: '',
                    bowlingType: '',
                    experience: '',
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

    const showBattingField = formData.playerRole === 'batsman' || formData.playerRole === 'allrounder';
    const showBowlingField = formData.playerRole === 'bowler' || formData.playerRole === 'allrounder';

    return (
        <>
            <section className="page-hero section-dark">
                <div className="container">
                    <h1 className="text-display">Join the Team</h1>
                    <p className="page-hero-subtitle">
                        Ready to be part of Brothers XI? We're always looking for passionate cricketers to join our squad.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-intro">
                        <h2>Player <span>Registration</span></h2>
                        <p>Fill out the form below and tell us about your cricketing background</p>
                        <div className="contact-intro-line"></div>
                    </div>

                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-input"
                                        placeholder="Your Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
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
                                <div className="form-group">
                                    <label className="form-label">
                                        Player Role <span className="required">*</span>
                                    </label>
                                    <select
                                        name="playerRole"
                                        className="form-select"
                                        value={formData.playerRole}
                                        onChange={handleChange}
                                        required
                                    >
                                        {playerRoles.map(role => (
                                            <option key={role.value} value={role.value}>
                                                {role.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Conditional Batting Style Field */}
                            {showBattingField && (
                                <div className="form-group full-width">
                                    <label className="form-label">
                                        Batting Style <span className="required">*</span>
                                    </label>
                                    <select
                                        name="battingStyle"
                                        className="form-select"
                                        value={formData.battingStyle}
                                        onChange={handleChange}
                                        required
                                    >
                                        {battingStyles.map(style => (
                                            <option key={style.value} value={style.value}>
                                                {style.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Conditional Bowling Type Field */}
                            {showBowlingField && (
                                <div className="form-group full-width">
                                    <label className="form-label">
                                        Bowling Type <span className="required">*</span>
                                    </label>
                                    <select
                                        name="bowlingType"
                                        className="form-select"
                                        value={formData.bowlingType}
                                        onChange={handleChange}
                                        required
                                    >
                                        {bowlingTypes.map(type => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="form-group full-width">
                                <label className="form-label">
                                    Cricket Experience
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    className="form-input"
                                    placeholder="e.g., 5 years club cricket, university team captain"
                                    value={formData.experience}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group full-width">
                                <label className="form-label">
                                    Tell Us About Yourself
                                </label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Share your cricket journey, achievements, and why you'd like to join Brothers XI..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="form-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
