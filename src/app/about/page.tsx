import type { Metadata } from "next";
import Link from "next/link";
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
} from "react-icons/fa";

export const metadata: Metadata = {
    title: "About Us | Nalwaya Fitting Suppliers – Udaipur",
    description:
        "Learn about Nalwaya Fitting Suppliers – Udaipur's trusted sanitary fittings and plumbing solutions provider with 20+ years of industry experience.",
};

const brands = [
    "Jaquar",
    "Hindware",
    "Cera",
    "Kohler",
    "Zoloto",
    "Plasto",
    "Ashirvad",
    "Parryware",
    "Grohe",
    "Roca",
];

const commitments = [
    {
        icon: <FaShieldAlt />,
        title: "100% Genuine Products",
        desc: "Every product we sell is sourced directly from authorized distributors, ensuring brand authenticity and quality.",
    },
    {
        icon: <FaHandshake />,
        title: "Customer-Centric Approach",
        desc: "We prioritize customer relationships and work to understand your unique requirements for personalized solutions.",
    },
    {
        icon: <FaTrophy />,
        title: "Industry Leadership",
        desc: "With two decades of experience, we have established ourselves as a leading supplier in the Udaipur region.",
    },
    {
        icon: <FaThumbsUp />,
        title: "After-Sale Support",
        desc: "Our commitment extends beyond the sale with professional installation support and product guidance.",
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
                        <div>
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
                        </div>
                        <div className="about-image-placeholder">
                            <FaGem
                                style={{ fontSize: "4rem", color: "var(--teal)", opacity: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Metrics */}
            <section className="section section-alt">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Experience</span>
                        <h2 className="section-title">
                            Two Decades of Industry Excellence
                        </h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Our numbers speak for our dedication and customer trust.
                        </p>
                    </div>
                    <div className="metrics-grid">
                        {[
                            {
                                icon: <FaAward />,
                                value: "20+",
                                label: "Years of Industry Experience",
                            },
                            { icon: <FaUsers />, value: "1000+", label: "Happy Customers" },
                            { icon: <FaBoxes />, value: "50+", label: "Product Categories" },
                            { icon: <FaTags />, value: "10+", label: "Premium Brands Available" },
                        ].map((item, idx) => (
                            <div key={idx} className="metric-card">
                                <div className="metric-icon-wrapper">
                                    <div className="metric-icon-bg"></div>
                                    <div className="metric-icon">{item.icon}</div>
                                </div>
                                <div className="metric-number">{item.value}</div>
                                <div className="metric-label">{item.label}</div>
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
                    <div className="brands-grid">
                        {brands.map((brand, i) => (
                            <div key={i} className="glass-card brand-card">
                                <h4>{brand}</h4>
                            </div>
                        ))}
                    </div>
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
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 24,
                        }}
                    >
                        {commitments.map((c, i) => (
                            <div key={i} className="glass-card" style={{ padding: "36px 28px" }}>
                                <div
                                    className="metric-icon"
                                    style={{ margin: "0 0 20px 0" }}
                                >
                                    {c.icon}
                                </div>
                                <h3
                                    style={{
                                        fontWeight: 700,
                                        color: "var(--navy)",
                                        marginBottom: 10,
                                        fontSize: "1.05rem",
                                    }}
                                >
                                    {c.title}
                                </h3>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {c.desc}
                                </p>
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
