import type { Metadata } from "next";
import Link from "next/link";
import BrandsGrid from "@/components/BrandsGrid";
import {
    FaCheckCircle,
    FaAward,
    FaUsers,
    FaBoxes,
    FaTags,
    FaShieldAlt,
    FaHandshake,
    FaGem,
    FaTrophy,
    FaHeart,
    FaThumbsUp,
    FaWrench,
    FaStore
} from "react-icons/fa";

export const metadata: Metadata = {
    title: "About Us | Nalwaya Fitting Suppliers – Udaipur",
    description:
        "Learn about Nalwaya Fitting Suppliers – Udaipur's trusted sanitary fittings and plumbing solutions provider with 20+ years of industry experience.",
};



const commitments = [
    {
        icon: <FaShieldAlt />,
        title: "Genuine Products",
        desc: "Trust Verified Quality",
        bg: "rgba(255, 188, 0, 0.12)", // Creamy Yellow
        accent: "#C49B28"
    },
    {
        icon: <FaHandshake />,
        title: "Customer First",
        desc: "Relationships Matter",
        bg: "rgba(45, 223, 209, 0.12)", // Minty Teal
        accent: "#1e8a81"
    },
    {
        icon: <FaTrophy />,
        title: "Industry Leader",
        desc: "20 Years Excellence",
        bg: "rgba(76, 175, 80, 0.12)", // Soft Green
        accent: "#2e7d32"
    },
    {
        icon: <FaShieldAlt />,
        title: "Secure Choice",
        desc: "Verified Spares",
        bg: "rgba(99, 102, 241, 0.12)", // Soft Lavender
        accent: "#4f46e5"
    },
    {
        icon: <FaWrench />,
        title: "Expert Support",
        desc: "Technical Precision",
        bg: "rgba(255, 77, 77, 0.12)", // Soft Rose
        accent: "#dc2626"
    },
    {
        icon: <FaStore />,
        title: "Massive Stock",
        desc: "Ready To Ship",
        bg: "rgba(168, 85, 247, 0.12)", // Soft Purple
        accent: "#7c3aed"
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </div>
                    <h1>About Nalwaya Fitting Suppliers</h1>
                    <p>
                        Over 20 years of trust, quality, and expertise in sanitary and plumbing solutions.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section">
                <div className="container">
                    <div className="about-overview">
                        <div className="about-decorative-blob"></div>
                        <div className="about-text-column">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">
                                A Legacy of Trust &amp; Quality
                            </h2>
                            <p className="section-subtitle" style={{ maxWidth: "none" }}>
                                <strong>Nalwaya Fitting Suppliers</strong> has been a cornerstone of the sanitary and plumbing industry
                                in Udaipur since 2005. What started as a small enterprise has grown into one of the city&apos;s most
                                trusted suppliers of genuine sanitary fittings, plumbing products, and expert installation services.
                            </p>
                            <p
                                className="section-subtitle"
                                style={{ maxWidth: "none", marginTop: 16 }}
                            >
                                Our journey has been built on a foundation of honesty, quality, and customer satisfaction. Today, we
                                proudly serve homeowners, interior designers, architects, contractors, hotels, and commercial
                                establishments across Rajasthan.
                            </p>
                            <p
                                className="section-subtitle"
                                style={{ maxWidth: "none", marginTop: 16 }}
                            >
                                We specialize in supplying spare parts and sanitary fittings from globally trusted brands while also
                                providing expert plumbing and sanitary installation services. Customers trust us for authentic products,
                                durable fittings, and professional service support.
                            </p>
                            <div style={{ marginTop: 32 }}>
                                <Link href="/contact" className="btn btn-primary">
                                    Get a Quote <FaHandshake />
                                </Link>
                            </div>
                        </div>
                        <div className="about-image-column">
                            <div className="about-image-creative-wrapper">
                                <div className="about-img-accent-border"></div>
                                <img
                                    src="/about-story.png"
                                    alt="Our Showroom"
                                    className="about-main-img-v3"
                                />
                                <div className="floating-experience-badge">
                                    <span>20+</span>
                                    <span>Years of Trust</span>
                                </div>
                                <div className="about-glass-stat">
                                    <div className="stat-item">
                                        <FaGem style={{ color: "var(--teal)" }} />
                                        <span>Genuine Spares</span>
                                    </div>
                                    <div className="stat-item">
                                        <FaAward style={{ color: "var(--cherry-red)" }} />
                                        <span>Premium Quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== FANCY METRICS (Imported from Home) ====== */}
            <section className="metrics-section-v2" style={{ padding: '100px 0', background: '#fdfdfd' }}>
                <div className="container">
                    <div className="metrics-row-v2">
                        {[
                            {
                                icon: <FaAward />,
                                value: "20+",
                                title: "Experience",
                                desc: "Two decades of proven excellence and trusted service in the Udaipur market.",
                                color: "card-blue"
                            },
                            {
                                icon: <FaUsers />,
                                value: "1000+",
                                title: "Customers",
                                desc: "Vast network of happy homeowners and professional contractors across Rajasthan.",
                                color: "card-yellow"
                            },
                            {
                                icon: <FaBoxes />,
                                value: "50+",
                                title: "Categories",
                                desc: "Comprehensive range of sanitary and plumbing parts available under one roof.",
                                color: "card-teal"
                            },
                            {
                                icon: <FaTags />,
                                value: "10+",
                                title: "Brands",
                                desc: "Authorized supplier for globally recognized premium brands like Jaquar and Cera.",
                                color: "card-red"
                            },
                        ].map((m, i) => (
                            <div key={i} className={`metric-card-v2 ${m.color}`}>
                                <div className="metric-icon-v2">{m.icon}</div>
                                <h3>{m.value}</h3>
                                <div className="metric-title">{m.title}</div>
                                <p className="metric-desc">{m.desc}</p>
                                <div className="read-more-accent">Read More</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted Brands */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Our Partners</span>
                        <h2 className="section-title">Trusted Brands We Supply</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            We are authorized dealers and suppliers of globally recognized brands, ensuring you get only the best.
                        </p>
                    </div>
                    <BrandsGrid />
                </div>
            </section>

            {/* Customer Commitment */}
            <section className="section section-alt">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Our Promise</span>
                        <h2 className="section-title">Customer Commitment</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            At Nalwaya Fitting Suppliers, your satisfaction drives everything we do.
                        </p>
                    </div>
                    <div className="commitments-grid-v3">
                        {commitments.map((c, i) => (
                            <div
                                key={i}
                                className="commitment-card-v3"
                                style={{
                                    '--c-bg': c.bg,
                                    '--c-accent-solid': c.accent
                                } as React.CSSProperties}
                            >
                                <div className="c-card-bg-accent"></div>
                                <div className="c-card-inner">
                                    <div className="c-icon-wrapper">
                                        {c.icon}
                                    </div>
                                    <h3>{c.title}</h3>
                                    <p>{c.desc}</p>
                                    <div className="c-card-footer">
                                        <div className="c-bar" style={{ background: c.accent }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Experience Quality Fittings?</h2>
                    <p>
                        Visit our store or contact us to explore our wide range of sanitary and plumbing products.
                    </p>
                    <div className="cta-buttons">
                        <a
                            href="tel:+919983174974"
                            className="btn btn-outline"
                            style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                        >
                            <FaCheckCircle /> Call Now
                        </a>
                        <Link
                            href="/contact"
                            className="btn"
                            style={{ background: "var(--white)", color: "var(--navy)" }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
