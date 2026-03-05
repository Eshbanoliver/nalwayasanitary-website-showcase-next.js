import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3>Nalwaya Fitting Suppliers</h3>
                        <p>
                            Your trusted source for genuine sanitary fittings, plumbing
                            solutions, and spare parts in Udaipur. Premium brands, wholesale
                            pricing, and expert service since 2005.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="https://www.instagram.com/nalwayafitting2005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <span
                                className="footer-social-link"
                                style={{ opacity: 0.4, cursor: "default" }}
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <Link href="/services">Sanitary Fittings</Link>
                            </li>
                            <li>
                                <Link href="/services">Plumbing Fittings</Link>
                            </li>
                            <li>
                                <Link href="/services">PVC Pipes</Link>
                            </li>
                            <li>
                                <Link href="/services">Kitchen Sinks</Link>
                            </li>
                            <li>
                                <Link href="/services">Water Tanks</Link>
                            </li>
                            <li>
                                <Link href="/services">Industrial Valves</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <div className="footer-contact-item">
                            <FaMapMarkerAlt className="footer-contact-icon" />
                            <span>
                                Meera Nagar, B-Block, 60 Feet Road, Near PIMS Hospital,
                                Udaipur&nbsp;–&nbsp;313001, Rajasthan
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <FaPhoneAlt className="footer-contact-icon" />
                            <a href="tel:+919983174974">+91 99831 74974</a>
                        </div>
                        <div className="footer-contact-item">
                            <FaEnvelope className="footer-contact-icon" />
                            <span>info@nalwayafittings.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    ©️ Copyright 2026 | Nalwaya Fitting Suppliers | All Rights Reserved |
                    Powered by{" "}
                    <a
                        href="https://shapesway.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#28a745" }}
                    >
                        Shapesway Technologies Pvt. Ltd.
                    </a>
                    .
                </div>
            </div>
        </footer>
    );
}
