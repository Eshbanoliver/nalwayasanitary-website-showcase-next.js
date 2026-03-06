"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { serviceCategories } from "../../data/services";
import {
    FaArrowRight,
    FaChevronRight,
    FaHome,
    FaBoxes,
} from "react-icons/fa";

export default function ServiceCategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const category = serviceCategories.find((c) => c.slug === slug);

    if (!category) {
        return (
            <div style={{ padding: "200px 0", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Category Not Found</h1>
                <Link href="/services" className="btn btn-primary">
                    Back to Services <FaArrowRight />
                </Link>
            </div>
        );
    }

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
                        <Link href="/services">Services</Link>
                        <FaChevronRight />
                        <span>{category.title}</span>
                    </div>
                    <h1>{category.title}</h1>
                    <p>{category.shortDesc}</p>
                </div>
            </section>

            {/* ====== CATEGORY HERO BANNER ====== */}
            <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
                <div className="container">
                    <div className="category-hero-banner">
                        <div className="category-hero-image">
                            <img src={category.image} alt={category.title} />
                        </div>
                        <div className="category-hero-text">
                            <span className="section-label">
                                <FaBoxes /> {category.products.length} Products Available
                            </span>
                            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                                {category.title}
                            </h2>
                            <p className="section-subtitle">
                                {category.shortDesc} Browse our complete range of genuine,
                                high-quality products below. All products come with brand
                                authenticity and quality assurance.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>
                                Get Quote <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== PRODUCTS GRID ====== */}
            <section className="section section-alt" style={{ paddingTop: 60 }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Our Products</span>
                        <h2 className="section-title">
                            {category.title} Products
                        </h2>
                    </div>
                    <div className="products-grid">
                        {category.products.map((product, index) => (
                            <div key={index} className="glass-card product-card">
                                <div className="product-index">{String(index + 1).padStart(2, "0")}</div>
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <Link href="/contact" className="product-enquire">
                                    Enquire Now <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CTA ====== */}
            <section className="section section-navy">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="section-title" style={{ color: "#fff", marginBottom: 16 }}>
                        Need Help Choosing the Right Product?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
                        Our team of experts is ready to assist you in selecting the perfect
                        {" "}{category.title.toLowerCase()} for your project. Contact us for
                        personalized recommendations.
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn btn-primary">
                            Contact Us <FaArrowRight />
                        </Link>
                        <Link href="/" className="btn btn-outline">
                            Back to Home <FaHome />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
