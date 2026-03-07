"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiSearch, FiMail, FiClock } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Service" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="header-main">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-info">
                        <div className="top-bar-item">
                            <FiMail />
                            <span>info@nalwayafittings.com</span>
                        </div>
                        <div className="top-bar-item">
                            <FiClock />
                            <span>Mon - Sat 9:00 AM - 7:00 PM</span>
                        </div>
                    </div>
                    <div className="top-bar-social">
                        <span>Follow Us On :</span>
                        <a href="https://www.instagram.com/nalwayafitting2005" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="header-wrapper">
                {/* Logo Section */}
                <div className="header-logo-section">
                    <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                        <img
                            src="/logo.png"
                            alt="Nalwaya Fittings Logo"
                            style={{ width: '55px', height: '55px', objectFit: 'contain' }}
                        />
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                            Nalwaya <span style={{ color: "var(--teal)" }}>Fittings</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Section */}
                <div className="header-nav-section">
                    <ul className="nav-links-modern">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? "active" : ""}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Call/Search Section */}
                <div className="header-call-section">
                    <a href="tel:+919983174974">
                        <div className="call-icon-circle">
                            <FiPhone />
                        </div>
                        <div className="call-text">
                            <span>Call Helpline</span>
                            <span>+91 99831 74974</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`nav-toggle ${mobileOpen ? "open" : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(false)}
                style={{ zIndex: 1040 }}
            />

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} style={{ zIndex: 1050 }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={pathname === link.href ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    );
}


