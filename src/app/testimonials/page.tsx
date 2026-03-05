import type { Metadata } from "next";
import Link from "next/link";
import { FaStar, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Testimonials | Nalwaya Fitting Suppliers – Udaipur",
    description:
        "Read what our customers say about Nalwaya Fitting Suppliers – Udaipur's most trusted sanitary fittings and plumbing solutions provider.",
};

const testimonials = [
    {
        text: "Excellent place to buy genuine sanitary fittings in Udaipur. Very helpful staff and great pricing. They helped me choose the perfect fittings for my bathroom renovation project.",
        name: "Rajesh Sharma",
        role: "Homeowner",
        initials: "RS",
        rating: 5,
    },
    {
        text: "Best plumbing fittings supplier in Udaipur. They have almost every spare part available. I've been buying from them for over 5 years and they never disappoint.",
        name: "Amit Patel",
        role: "Contractor",
        initials: "AP",
        rating: 5,
    },
    {
        text: "Highly recommended for sanitary fittings and plumbing solutions. Their product quality is outstanding and the team provides excellent guidance.",
        name: "Suresh Kumar",
        role: "Interior Designer",
        initials: "SK",
        rating: 5,
    },
    {
        text: "We've been sourcing all our plumbing materials from Nalwaya for our hotel projects. Their wholesale pricing and reliability make them our go-to supplier.",
        name: "Priya Mehra",
        role: "Hotel Developer",
        initials: "PM",
        rating: 5,
    },
    {
        text: "The quality of Jaquar fittings I purchased from here was exceptional. Their store has a wide range and the staff is very knowledgeable about every product.",
        name: "Vikram Singh",
        role: "Architect",
        initials: "VS",
        rating: 5,
    },
    {
        text: "Outstanding service! They not only supplied the materials but also recommended skilled plumbers for the installation. Truly a one-stop solution for plumbing needs.",
        name: "Deepak Joshi",
        role: "Property Manager",
        initials: "DJ",
        rating: 5,
    },
    {
        text: "I was impressed by their collection of kitchen sinks and bathroom accessories. The pricing is very competitive for genuine branded products.",
        name: "Neha Gupta",
        role: "Homeowner",
        initials: "NG",
        rating: 5,
    },
    {
        text: "For our swimming pool project, they provided all the necessary equipment and fittings. Excellent product knowledge and prompt delivery.",
        name: "Ravi Agarwal",
        role: "Resort Owner",
        initials: "RA",
        rating: 4,
    },
    {
        text: "Reliable supplier for Plasto water tanks. They handled our bulk order for a housing project with great efficiency and on-time delivery.",
        name: "Kapil Verma",
        role: "Builder",
        initials: "KV",
        rating: 5,
    },
];

export default function TestimonialsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Testimonials</span>
                    </div>
                    <h1>Customer Testimonials</h1>
                    <p>
                        Hear from our valued customers about their experience with Nalwaya Fitting Suppliers.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">Reviews</span>
                        <h2 className="section-title">
                            Trusted by Homeowners, Contractors &amp; Businesses
                        </h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Our customers consistently rate us among the top sanitary and plumbing suppliers in Udaipur.
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-card testimonial-card">
                                <div className="testimonial-quote">&ldquo;</div>
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, j) => (
                                        <FaStar
                                            key={j}
                                            style={{
                                                opacity: j < t.rating ? 1 : 0.25,
                                            }}
                                        />
                                    ))}
                                </div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
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
                    <h2>Share Your Experience With Us</h2>
                    <p>
                        We love hearing from our customers! Contact us to share your feedback or get in touch for your next project.
                    </p>
                    <div className="cta-buttons">
                        <a
                            href="tel:+919983174974"
                            className="btn btn-outline"
                            style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
                        >
                            <FaPhoneAlt /> Call Now
                        </a>
                        <Link
                            href="/contact"
                            className="btn"
                            style={{ background: "var(--white)", color: "var(--navy)" }}
                        >
                            Contact Us <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
