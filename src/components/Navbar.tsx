"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiSearch, FiMail, FiClock } from "react-icons/fi";
import { FaInstagram, FaChevronDown } from "react-icons/fa";
import { serviceCategories } from "@/app/data/services";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Service", hasMega: true },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
];

function MegaMenu() {
    return (
        <div className="mega-menu-wrapper">
            <div className="mega-bubble">
                <div className="mega-grid">
                    {serviceCategories.slice(0, 11).map((cat) => (
                        <Link key={cat.slug} href={`/services/${cat.slug}`} className="mega-bubble-item">
                            <div className="bubble-icon">
                                <img src={cat.image} alt={cat.title} />
                            </div>
                            <div className="bubble-text">
                                <h6>{cat.title}</h6>
                                <span>{cat.shortDesc.split('.')[0]}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mega-footer">
                    <Link href="/services" className="view-all-bubble">
                        View All Categories <span>&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
        setMobileMegaOpen(false);
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
                            <li key={link.href} className={link.hasMega ? "has-mega" : ""}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? "active" : ""}
                                >
                                    {link.label}
                                    {link.hasMega && <FaChevronDown className="nav-arrow" />}
                                </Link>
                                {link.hasMega && <MegaMenu />}
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
                    <div key={link.href} className="mobile-nav-item-wrapper">
                        {link.hasMega ? (
                            <>
                                <a
                                    href={link.href}
                                    className={`mobile-nav-link ${pathname === link.href || pathname.startsWith(link.href + '/') ? "active" : ""}`}
                                    onClick={(e) => { e.preventDefault(); setMobileMegaOpen(!mobileMegaOpen); }}
                                    style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
                                >
                                    <span>{link.label}</span>
                                    <FaChevronDown style={{ transform: mobileMegaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
                                </a>
                                <div className={`mobile-mega-menu ${mobileMegaOpen ? "open" : ""}`}>
                                    {serviceCategories.map(cat => (
                                        <Link key={cat.slug} href={`/services/${cat.slug}`} className="mobile-mega-item">
                                            {cat.title}
                                        </Link>
                                    ))}
                                    <Link href="/services" className="mobile-mega-item view-all">
                                        View All Categories &rarr;
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
}


