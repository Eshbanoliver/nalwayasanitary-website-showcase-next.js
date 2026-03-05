"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiPhone, FiMenu } from "react-icons/fi";
import {
    FaHome,
    FaInfoCircle,
    FaCogs,
    FaStar,
    FaEnvelope,
} from "react-icons/fa";

const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About Us", icon: <FaInfoCircle /> },
    { href: "/services", label: "Services", icon: <FaCogs /> },
    { href: "/testimonials", label: "Testimonials", icon: <FaStar /> },
    { href: "/contact", label: "Contact Us", icon: <FaEnvelope /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <Link href="/" className="nav-logo">
                        <span className="nav-logo-icon">NF</span>
                        <span>
                            Nalwaya <span style={{ color: "var(--teal)" }}>Fittings</span>
                        </span>
                    </Link>

                    <ul className="nav-links">
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

                    <div className="nav-cta">
                        <a href="tel:+919983174974" className="btn btn-primary btn-sm">
                            <FiPhone />
                            Call Now
                        </a>
                    </div>

                    <button
                        className={`nav-toggle ${mobileOpen ? "open" : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={pathname === link.href ? "active" : ""}
                    >
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
                <div style={{ marginTop: "24px" }}>
                    <a
                        href="tel:+919983174974"
                        className="btn btn-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                    >
                        <FiPhone />
                        Call Now
                    </a>
                </div>
            </div>
        </>
    );
}
