"use client";

import Link from "next/link";
import { serviceCategories } from "../data/services";
import {
    FaArrowRight,
    FaHome,
    FaPhoneAlt,
    FaChevronRight,
} from "react-icons/fa";

export default function ServicesPage() {
    return (
        <>
            {/* ====== PAGE HEADER ====== */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        <FaChevronRight />
                        <span>Services</span>
                    </div>
                    <h1>Our Services</h1>
                    <p>
                        Explore our comprehensive range of premium sanitary fittings,
                        plumbing solutions, and hardware accessories.
                    </p>
                </div>
            </section>

            {/* ====== ALL CATEGORIES GRID ====== */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <span className="section-label">Service Catalog</span>
                        <h2 className="section-title">All Categories</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            We deal in a wide variety of plumbing and construction materials
                            from the industry&apos;s leading brands. Click on any category to view
                            specific products.
                        </p>
                    </div>

                    <div className="services-master-grid-v2">
                        {serviceCategories.map((cat, i) => (
                            <div key={i} className="service-v2-card">
                                <div className="s-v2-image">
                                    <img src={cat.image} alt={cat.title} />
                                </div>
                                <div className="s-v2-content">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.shortDesc}</p>
                                    <Link href={`/services/${cat.slug}`} className="s-v2-btn">
                                        Discover More <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CTA SECTION ====== */}
            <section className="section section-navy">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="section-title" style={{ color: "#fff", marginBottom: 16 }}>
                        Looking for a Wholesale Partnership?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 650, margin: "0 auto 32px" }}>
                        We supply to builders, contractors, and retail shops across Rajasthan.
                        Contact us today for competitive wholesale pricing and dedicated
                        project support.
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="tel:+919983174974" className="btn btn-primary">
                            <FaPhoneAlt /> Call +91 99831 74974
                        </a>
                        <Link href="/contact" className="btn btn-outline">
                            Special Inquiry <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
