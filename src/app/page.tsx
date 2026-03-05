"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaStar,
  FaAward,
  FaUsers,
  FaBoxes,
  FaTags,
  FaShieldAlt,
  FaSmile,
  FaHandshake,
  FaCubes,
  FaTools,
  FaBullseye,
  FaEye,
  FaWrench,
  FaThumbsUp,
  FaBalanceScale,
  FaTint,
  FaBath,
  FaIndustry,
  FaCog,
  FaTrophy,
} from "react-icons/fa";
import { MdPlumbing, MdKitchen } from "react-icons/md";

/* -------  Scroll-in animation hook  ------- */
function useAnimateOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return ref;
}

function AnimateOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useAnimateOnScroll();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

/* -------  FAQ Item  ------- */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-question ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon">
          <FaChevronDown />
        </span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="faq-answer-content">{a}</div>
      </div>
    </div>
  );
}

/* -------  Data  ------- */
const services = [
  { icon: <FaBath />, title: "Sanitary Fittings Supply", desc: "Wholesale supply of high-quality bathroom and sanitary fittings for residential and commercial projects." },
  { icon: <FaCubes />, title: "Bathroom Accessories & Spare Parts", desc: "Original spare parts and accessories for premium sanitary brands." },
  { icon: <MdPlumbing />, title: "Plumbing Fittings Supply", desc: "Reliable plumbing fittings and components for every construction need." },
  { icon: <FaCog />, title: "PVC Pipes Supply", desc: "Durable PVC pipes suitable for plumbing and water systems." },
  { icon: <MdKitchen />, title: "Kitchen Sink Supply", desc: "Modern and durable kitchen sinks for homes and commercial kitchens." },
  { icon: <FaTint />, title: "Water Tank Supply", desc: "Dealer for high-quality water storage tanks including Plasto water tanks." },
];

const testimonials = [
  {
    text: "Excellent place to buy genuine sanitary fittings in Udaipur. Very helpful staff and great pricing.",
    name: "Rajesh Sharma",
    role: "Homeowner",
    initials: "RS",
  },
  {
    text: "Best plumbing fittings supplier in Udaipur. They have almost every spare part available.",
    name: "Amit Patel",
    role: "Contractor",
    initials: "AP",
  },
  {
    text: "Highly recommended for sanitary fittings and plumbing solutions. Their product quality is outstanding.",
    name: "Suresh Kumar",
    role: "Interior Designer",
    initials: "SK",
  },
];

const faqs = [
  { q: "Do you provide genuine spare parts for sanitary fittings?", a: "Yes, we supply only genuine and original spare parts from trusted brands. Every product comes with brand authenticity and quality assurance." },
  { q: "Which brands do you supply?", a: "We supply products from globally trusted brands including Jaquar, Hindware, Cera, Kohler, Zoloto, Plasto, Ashirvad, and many more premium brands." },
  { q: "Do you provide plumbing installation services?", a: "Yes, we offer professional plumbing and sanitary installation services for residential, commercial, and hospitality projects." },
  { q: "Do you supply products for hotels and commercial projects?", a: "Absolutely! We specialize in large-scale supply of sanitary fittings and plumbing solutions for hotels, resorts, and commercial establishments across Rajasthan." },
  { q: "Where is your store located in Udaipur?", a: "Our store is located at Meera Nagar, B-Block, 60 Feet Road, Near PIMS Hospital, Udaipur – 313001, Rajasthan, India." },
];

const coreValues = [
  { icon: <FaShieldAlt />, title: "Quality Assurance", desc: "Only genuine products from trusted brands." },
  { icon: <FaSmile />, title: "Customer Satisfaction", desc: "Your satisfaction is our topmost priority." },
  { icon: <FaBalanceScale />, title: "Honest Pricing", desc: "Transparent and competitive wholesale pricing." },
  { icon: <FaCubes />, title: "Reliable Products", desc: "Durable fittings built to last for years." },
  { icon: <FaTools />, title: "Professional Service", desc: "Expert support from experienced professionals." },
  { icon: <FaHandshake />, title: "Long-Term Trust", desc: "Building lasting relationships since 2005." },
];

const whyChoose = [
  { title: "Trusted Sanitary Fittings Supplier", desc: "Over 20 years of proven trust in Udaipur." },
  { title: "Genuine Spare Parts from Leading Brands", desc: "100% authentic products with brand warranty." },
  { title: "Wholesale Pricing", desc: "Best prices for bulk and retail purchases." },
  { title: "Wide Product Range", desc: "50+ categories covering all plumbing needs." },
  { title: "Reliable Plumbing Expertise", desc: "Skilled professionals for every project." },
  { title: "Preferred Supplier for Homes, Hotels & Projects", desc: "Trusted by top hotels and builders in Rajasthan." },
];

/* -------  COMPONENT  ------- */
export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Trusted Since 2005
            </div>
            <h1>
              Premium Sanitary &amp; <span>Plumbing Fittings</span> Supplier in Udaipur
            </h1>
            <p className="hero-desc">
              Genuine spare parts, wholesale pricing, and expert plumbing solutions for homes,
              hotels, and commercial projects across Rajasthan.
            </p>
            <div className="hero-buttons">
              <a href="tel:+919983174974" className="btn btn-primary">
                <FaPhoneAlt /> Call Now
              </a>
              <Link href="/services" className="btn btn-secondary">
                Explore Services <FaArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">20+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">1000+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Product Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ABOUT SNIPPET ====== */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <span className="section-label">About Us</span>
                <h2 className="section-title">Your Trusted Partner for Sanitary &amp; Plumbing Solutions</h2>
                <p className="section-subtitle" style={{ maxWidth: "none" }}>
                  <strong>Nalwaya Fitting Suppliers</strong> is a trusted sanitary fittings and plumbing solutions provider
                  in Udaipur known for supplying genuine spare parts and premium-quality plumbing products. With years of
                  experience in the industry, we have built a strong reputation for delivering reliable products, wholesale
                  pricing, and expert plumbing solutions to residential, commercial, and hospitality clients.
                </p>
                <p className="section-subtitle" style={{ maxWidth: "none", marginTop: 16 }}>
                  We specialize in supplying spare parts and sanitary fittings from globally trusted brands while also
                  providing expert plumbing and sanitary installation services.
                </p>
                <Link href="/about" className="btn btn-primary" style={{ marginTop: 32 }}>
                  Learn More <FaArrowRight />
                </Link>
              </div>
              <div className="about-image-placeholder">
                <FaBath className="about-image-icon" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== METRICS ====== */}
      <section className="section section-alt">
        <div className="container">
          <AnimateOnScroll>
            <div className="metrics-grid">
              {[
                { icon: <FaAward />, number: "20+", label: "Years of Industry Experience" },
                { icon: <FaUsers />, number: "1000+", label: "Happy Customers" },
                { icon: <FaBoxes />, number: "50+", label: "Product Categories" },
                { icon: <FaTags />, number: "10+", label: "Premium Brands Available" },
              ].map((m, i) => (
                <div key={i} className="glass-card metric-card">
                  <div className="metric-icon">{m.icon}</div>
                  <div className="metric-number">{m.number}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                We provide a comprehensive range of sanitary fittings, plumbing products, and expert installation
                services.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="services-grid">
              {services.map((s, i) => (
                <div key={i} className="glass-card service-card">
                  <div className="service-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/services" className="btn btn-primary">
                View All Services <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== MISSION & VISION ====== */}
      <section className="section section-alt">
        <div className="container">
          <AnimateOnScroll>
            <div className="mv-grid">
              <div className="glass-card mv-card">
                <div className="mv-icon">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
                <p>
                  Our mission is to provide genuine sanitary fittings and plumbing solutions that deliver durability,
                  reliability, and value to our customers while maintaining the highest standards of quality and service.
                </p>
              </div>
              <div className="glass-card mv-card">
                <div className="mv-icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Our vision is to become one of the most trusted sanitary fittings and plumbing suppliers in Rajasthan,
                  known for premium brands, expert solutions, and long-term customer relationships.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== CORE VALUES ====== */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Our Principles</span>
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                The principles that guide everything we do at Nalwaya Fitting Suppliers.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="values-grid">
              {coreValues.map((v, i) => (
                <div key={i} className="glass-card value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section section-navy">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Our Advantages</span>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Discover what sets Nalwaya Fitting Suppliers apart from the rest.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="why-grid">
              {whyChoose.map((w, i) => (
                <div key={i} className="glass-card why-item" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="why-item-check">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 style={{ color: "var(--white)" }}>{w.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.6)" }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Testimonials</span>
              <h2 className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Hear from our satisfied clients who trust us for their plumbing and sanitary needs.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-card testimonial-card">
                  <div className="testimonial-quote">&ldquo;</div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} />
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
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/testimonials" className="btn btn-primary">
                See All Testimonials <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="section section-alt">
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Common Questions</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section">
        <div className="container">
          <AnimateOnScroll>
            <h2>Looking for Genuine Sanitary Fittings &amp; Plumbing Supplies?</h2>
            <p>
              Contact Nalwaya Fitting Suppliers today for reliable products and expert solutions in Udaipur and across
              Rajasthan.
            </p>
            <div className="cta-buttons">
              <a href="tel:+919983174974" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                <FaPhoneAlt /> Call Now
              </a>
              <Link href="/contact" className="btn" style={{ background: "var(--white)", color: "var(--navy)" }}>
                Contact Us <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
