import type { Metadata } from "next";
import Link from "next/link";
import {
    FaCubes,
    FaWrench,
    FaTint,
    FaBath,
    FaIndustry,
    FaCog,
    FaThLarge,
    FaBuilding,
    FaHardHat,
    FaPhoneAlt,
    FaArrowRight,
    FaTachometerAlt,
} from "react-icons/fa";
import { MdPlumbing, MdKitchen, MdPool } from "react-icons/md";

export const metadata: Metadata = {
    title: "Services | Nalwaya Fitting Suppliers – Udaipur",
    description:
        "Explore our comprehensive range of sanitary fittings, plumbing solutions, PVC pipes, kitchen sinks, water tanks, industrial valves, and more.",
};

const allServices = [
    {
        icon: <FaBath />,
        title: "Sanitary Fittings Supply",
        desc: "Wholesale supply of high-quality bathroom and sanitary fittings from globally trusted brands for residential and commercial projects.",
    },
    {
        icon: <FaCubes />,
        title: "Bathroom Accessories & Spare Parts",
        desc: "Original spare parts and accessories for premium sanitary brands. We keep extensive inventory to ensure quick availability.",
    },
    {
        icon: <MdPlumbing />,
        title: "Plumbing Fittings Supply",
        desc: "Reliable plumbing fittings and components for residential and commercial use, sourced from certified manufacturers.",
    },
    {
        icon: <FaCog />,
        title: "PVC Pipes Supply",
        desc: "Durable PVC pipes suitable for plumbing and water systems, available in all standard sizes and specifications.",
    },
    {
        icon: <MdKitchen />,
        title: "Kitchen Sink Supply",
        desc: "Modern and durable kitchen sinks for homes and commercial kitchens, available in stainless steel and granite finishes.",
    },
    {
        icon: <FaTint />,
        title: "Water Tank Supply",
        desc: "Dealer for high-quality water storage tanks including Plasto water tanks in various capacities for residential and commercial use.",
    },
    {
        icon: <FaTachometerAlt />,
        title: "Water Meter Supply",
        desc: "Accurate and reliable water meter solutions for residential complexes, commercial buildings, and municipal projects.",
    },
    {
        icon: <MdPool />,
        title: "Swimming Pool Equipment Supply",
        desc: "Essential equipment for maintaining and operating swimming pools including filters, pumps, accessories, and fittings.",
    },
    {
        icon: <FaIndustry />,
        title: "Industrial Valves Supply",
        desc: "Zoloto valves and other industrial plumbing valves for heavy-duty applications in construction and industrial projects.",
    },
    {
        icon: <FaThLarge />,
        title: "Slotted Channel Supply",
        desc: "C Slotted Channels and Z Slotted Channels for construction and plumbing installations, available in multiple sizes.",
    },
    {
        icon: <FaBuilding />,
        title: "Hotel Sanitary Fittings Supply",
        desc: "Large-scale supply of premium sanitary fittings for hotels, resorts, and commercial establishments across Rajasthan.",
    },
    {
        icon: <FaHardHat />,
        title: "Plumbing & Sanitary Work",
        desc: "Professional plumbing installation and repair services by experienced technicians for all types of projects.",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Services</span>
                    </div>
                    <h1>Our Services</h1>
                    <p>
                        Comprehensive sanitary fittings and plumbing solutions for every need.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">Complete Sanitary &amp; Plumbing Solutions</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            From bathroom fittings to industrial valves, we cover every aspect of plumbing and sanitary needs with
                            genuine products and expert services.
                        </p>
                    </div>
                    <div className="services-grid">
                        {allServices.map((s, i) => (
                            <div key={i} className="glass-card service-card">
                                <div className="service-card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Need a Specific Product or Service?</h2>
                    <p>
                        Can&apos;t find what you&apos;re looking for? Contact us and our expert team will help you find the right
                        solution for your project.
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
