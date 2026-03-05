"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInstagram,
    FaEnvelope,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Our Address",
        content: "Meera Nagar, B-Block, 60 Feet Road, Near PIMS Hospital, Udaipur – 313001, Rajasthan, India",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone Number",
        content: "+91 99831 74974",
        href: "tel:+919983174974",
    },
    {
        icon: <FaInstagram />,
        title: "Instagram",
        content: "@nalwayafitting2005",
        href: "https://www.instagram.com/nalwayafitting2005",
        external: true,
    },
    {
        icon: <FaClock />,
        title: "Business Hours",
        content: "Mon – Sat: 9:00 AM – 8:00 PM | Sun: Closed",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would hit an API endpoint
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Contact Us</span>
                    </div>
                    <h1>Get In Touch</h1>
                    <p>
                        Have a question or need a quote? We&apos;re here to help. Reach out to us anytime.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left – Info */}
                        <div>
                            <span className="section-label">Contact Info</span>
                            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                                Nalwaya Fitting Suppliers
                            </h2>
                            <p className="section-subtitle" style={{ marginBottom: 32, maxWidth: "none" }}>
                                Visit our store or reach out via phone, Instagram, or the form below. We&apos;re always happy to help
                                with your sanitary and plumbing needs.
                            </p>

                            <div className="contact-info-cards">
                                {contactInfo.map((c, i) => (
                                    <div key={i} className="glass-card contact-info-card" style={{ padding: "20px 24px" }}>
                                        <div className="contact-info-icon">{c.icon}</div>
                                        <div>
                                            <h4>{c.title}</h4>
                                            {c.href ? (
                                                <a
                                                    href={c.href}
                                                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                    style={{ color: "var(--teal)", fontWeight: 500, fontSize: "0.9rem" }}
                                                >
                                                    {c.content}
                                                </a>
                                            ) : (
                                                <p>{c.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right – Form */}
                        <div className="glass-strong contact-form">
                            <h3
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.4rem",
                                    fontWeight: 700,
                                    color: "var(--navy)",
                                    marginBottom: 8,
                                }}
                            >
                                Send Us a Message
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "var(--text-secondary)",
                                    marginBottom: 28,
                                }}
                            >
                                Fill in the form below and we&apos;ll get back to you shortly.
                            </p>

                            {submitted && (
                                <div
                                    style={{
                                        padding: "14px 20px",
                                        background: "rgba(40, 167, 69, 0.1)",
                                        border: "1px solid rgba(40, 167, 69, 0.3)",
                                        borderRadius: "var(--radius-md)",
                                        color: "#28a745",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        marginBottom: 20,
                                    }}
                                >
                                    ✓ Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email Address</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-message">Your Message</label>
                                    <textarea
                                        id="contact-message"
                                        placeholder="Tell us about your requirements..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.1697000317904!2d73.7182591750974!3d24.61783535492373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e57716944efd%3A0xec8203555331d8db!2sNALWAYA%20FITTING%20SUPPLIERS!5e0!3m2!1sen!2sin!4v1772705807995!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nalwaya Fitting Suppliers Location"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Prefer to Call? We&apos;re Just a Phone Call Away</h2>
                    <p>
                        Our team is ready to assist you with any queries about products, pricing, or installations.
                    </p>
                    <div className="cta-buttons">
                        <a
                            href="tel:+919983174974"
                            className="btn"
                            style={{
                                background: "var(--white)",
                                color: "var(--navy)",
                            }}
                        >
                            <FaPhoneAlt /> +91 99831 74974
                        </a>
                        <a
                            href="https://wa.me/919983174974"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
