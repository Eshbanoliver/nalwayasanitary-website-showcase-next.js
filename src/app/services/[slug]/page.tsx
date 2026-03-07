"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { serviceCategories } from "../../data/services";
import {
    FaArrowRight,
    FaChevronRight,
    FaHome,
    FaBoxes,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaCheckCircle,
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

            {/* ====== MAIN CONTENT & SIDEBAR ====== */}
            <section className="section section-alt">
                <div className="container">
                    <div className="sub-page-grid">
                        {/* LEFT COLUMN: MAIN CONTENT */}
                        <div className="sub-page-main">
                            <div className="content-block intro-block">
                                <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>
                                    Overview of {category.title}
                                </h2>
                                <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 30 }}>
                                    {category.longDesc || `Nalwaya Fitting Suppliers provides a comprehensive range of ${category.title.toLowerCase()} tailored for residential and commercial needs in Udaipur. We prioritize durability and performance.`}
                                </p>
                            </div>

                            {category.galleryImages && category.galleryImages.length > 0 && (
                                <div className="content-block gallery-block">
                                    <div className="sub-page-gallery">
                                        {category.galleryImages.map((img, idx) => (
                                            <div key={idx} className="gallery-item-v2">
                                                <img src={img} alt={`${category.title} gallery ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="content-block key-points-block">
                                <h3 className="h3-modern">Key Benefits & Features</h3>
                                <ul className="key-points-list">
                                    {(category.keyPoints || [
                                        "Authentic brand guarantee",
                                        "Highly durable materials",
                                        "Corrosion resistant technology",
                                        "Industry standard certifications",
                                        "Available in multiple sizes"
                                    ]).map((point, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle className="text-teal" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-block products-block">
                                <h3 className="h3-modern">Product Catalog</h3>
                                <div className="products-grid-v2">
                                    {category.products.map((product, index) => (
                                        <div key={index} className="product-card-v2">
                                            <div className="product-index">{String(index + 1).padStart(2, "0")}</div>
                                            <h3>{product.name}</h3>
                                            <p>{product.desc}</p>
                                            <Link href={`https://wa.me/919983174974?text=I'm interested in ${product.name} from ${category.title}`} target="_blank" className="product-enquire-v2">
                                                Enquire on WhatsApp <FaArrowRight />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: SIDEBAR */}
                        <aside className="sub-page-sidebar">
                            {/* Contact Widget */}
                            <div className="sidebar-widget sidebar-contact">
                                <h4>Get in Touch</h4>
                                <div className="sidebar-contact-info">
                                    <div className="contact-item">
                                        <FaPhoneAlt />
                                        <div>
                                            <span>Phone</span>
                                            <p>+91 99831 74974</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <FaEnvelope />
                                        <div>
                                            <span>Email</span>
                                            <p>info@nalwayafittings.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <FaMapMarkerAlt />
                                        <div>
                                            <span>Our Location</span>
                                            <p>Udaipur, Rajasthan, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Widget */}
                            <div className="sidebar-widget sidebar-faq">
                                <h4>Market Insights & FAQs</h4>
                                <div className="sidebar-faq-list">
                                    {(category.faqs || [
                                        { question: `Are these ${category.title} genuine?`, answer: "Yes, we are authorized dealers for all major brands we supply." },
                                        { question: "Do you provide installation?", answer: "We provide professional installation services for all our products." },
                                        { question: "Is there any warranty?", answer: "All products come with standard manufacturer warranty against defects." },
                                        { question: "Do you offer wholesale?", answer: "Yes, we are leading wholesale suppliers in the Udaipur region." },
                                        { question: "Can I get a custom quote?", answer: "Absolutely! Contact us with your requirements for a personalized quote." }
                                    ]).map((faq, idx) => (
                                        <div key={idx} className="sidebar-faq-item">
                                            <div className="faq-q">
                                                <FaQuestionCircle />
                                                <span>{faq.question}</span>
                                            </div>
                                            <p className="faq-a">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="sidebar-cta-box">
                                <h3>Expert Advice</h3>
                                <p>Not sure which product is right for you? Talk to our experts.</p>
                                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Request Call back
                                </Link>
                            </div>
                        </aside>
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
