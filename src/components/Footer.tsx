import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaPhoneAlt,
    FaArrowRight,
    FaAngleDoubleRight,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-v3">
            <div className="container">
                <div className="footer-top-v3">
                    <div className="footer-grid-v3">
                        {/* Column 1: Brand & Contact */}
                        <div className="footer-brand-v3">
                            <div className="footer-logo-v3">
                                <img
                                    src="/logo.png"
                                    alt="Nalwaya Fittings Logo"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '10px' }}
                                />
                                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--white)' }}>Nalwaya Fittings</span>
                            </div>
                            <p className="footer-desc-v3">
                                Your trusted source for genuine sanitary fittings, plumbing
                                solutions, and expert consultation in Udaipur since 2005.
                            </p>

                            <div className="footer-phone-big-v3">
                                <div className="phone-icon-v3">
                                    <FaPhoneAlt />
                                </div>
                                <div className="phone-info-v3">
                                    <a href="tel:+919983174974">+91 99831 74974</a>
                                    <span>Call 24/7 Service</span>
                                </div>
                            </div>

                            <div className="footer-socials-v3">
                                <span className="follow-text">Follow On:</span>
                                <div className="social-links-v3">
                                    <a href="#" className="social-btn-v3"><FaFacebookF /></a>
                                    <a href="#" className="social-btn-v3"><FaLinkedinIn /></a>
                                    <a href="https://www.instagram.com/nalwayafitting2005" target="_blank" className="social-btn-v3"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Useful Links (Double Column) */}
                        <div className="footer-links-v3">
                            <h4 className="footer-title-v3">Useful Links</h4>
                            <div className="title-divider-v3"></div>

                            <div className="links-subgrid-v3">
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/"><FaAngleDoubleRight /> Home</Link></li>
                                    <li><Link href="/about"><FaAngleDoubleRight /> About Us</Link></li>
                                    <li><Link href="/contact"><FaAngleDoubleRight /> Contact Us</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> All Products</Link></li>
                                    <li><Link href="/testimonials"><FaAngleDoubleRight /> Reviews</Link></li>
                                </ul>
                                <ul className="footer-link-list-v3">
                                    <li><Link href="/services"><FaAngleDoubleRight /> Sanitary Fittings</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> Plumbing Work</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> PVC Pipes</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> Water Tanks</Link></li>
                                    <li><Link href="/services"><FaAngleDoubleRight /> Industrial Valves</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Gallery/Instagram */}
                        <div className="footer-gallery-v3">
                            <h4 className="footer-title-v3">Our Gallery</h4>
                            <div className="title-divider-v3"></div>

                            <div className="gallery-grid-v3">
                                <div className="gallery-item-v3"><img src="/gallery/product1.png" alt="Product" /></div>
                                <div className="gallery-item-v3"><img src="/gallery/product2.png" alt="Product" /></div>
                                <div className="gallery-item-v3"><img src="/gallery/product3.png" alt="Product" /></div>
                                <div className="gallery-item-v3"><img src="/gallery/product4.png" alt="Product" /></div>
                                <div className="gallery-item-v3"><img src="/gallery/product5.png" alt="Product" /></div>
                                <div className="gallery-item-v3"><img src="/gallery/product6.png" alt="Product" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-v3">
                <div className="bottom-slanted-bg-v3"></div>
                <div className="container">
                    <div className="bottom-content-v3">
                        <div className="copyright-v3" style={{ width: '100%', textAlign: 'center' }}>
                            ©️ Copyright 2026 | <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Nalwaya Fitting Suppliers</Link> | All Rights Reserved | Powered by{" "}
                            <a
                                href="https://shapesway.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#28a745", textDecoration: 'none' }}
                            >
                                Shapesway Technologies Pvt. Ltd.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
