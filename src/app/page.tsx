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
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdPlumbing, MdKitchen } from "react-icons/md";
import { serviceCategories } from "./data/services";

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

/* -------  FAQ Item V3  ------- */
function FAQItemV3({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item-v3 ${open ? "open" : ""}`}>
      <button className="faq-question-v3" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon-v3">
          {open ? <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>-</span> : <FaChevronDown />}
        </span>
      </button>
      <div className="faq-answer-v3">
        <div className="faq-answer-content-v3">{a}</div>
      </div>
    </div>
  );
}


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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ====== MODERN HERO SLIDER ====== */}
      <section className="hero-modern">
        <div className="hero-modern-bg">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
        </div>
        <div className="container">
          <AnimateOnScroll>
            <div className="hero-badge-modern">
              <FaTools /> Trusted Hardware &amp; Fitting Supplier
            </div>
            <h1 className="hero-title-modern">
              Premium <span>Sanitary &amp; Plumbing</span> Solutions
            </h1>
            <p className="hero-subtitle-modern">
              Your trusted partner for genuine fittings, wholesale pricing, and expert plumbing services in Udaipur since 2005.
            </p>
            <div className="hero-actions-modern">
              <Link href="/services" className="btn btn-primary">
                Explore Products <FaArrowRight />
              </Link>
              <div className="btn-play">
                <FaPhoneAlt />
              </div>
            </div>
            {/* Slider Dots */}
            <div className="slider-dots" style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentSlide === index ? 'var(--teal-light)' : 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* ====== FEATURES OVERLAP ====== */}
      <section className="features-overlap">
        <div className="container">
          <AnimateOnScroll>
            <div className="features-grid-modern">
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaBath />
                </div>
                <h3>Sanitary Fittings</h3>
                <p>Premium bathroom and sanitary fittings from top global brands.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <MdPlumbing />
                </div>
                <h3>Plumbing Solutions</h3>
                <p>Expert plumbing installation and maintenance for all projects.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaTools />
                </div>
                <h3>Genuine Spares</h3>
                <p>100% authentic spare parts for all your plumbing needs.</p>
              </div>
              <div className="feature-card-modern">
                <div className="feature-icon-modern">
                  <FaSmile />
                </div>
                <h3>Reliable Service</h3>
                <p>Trusted by thousands of happy customers in Rajasthan.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* ====== MODERN ABOUT US ====== */}
      <section className="about-modern-section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="section-title">About Us</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--teal)', margin: '0 auto' }}></div>
        </div>

        <div className="container">
          {/* Row 1 */}
          <AnimateOnScroll>
            <div className="about-row">
              <div className="about-card-modern blue">
                <div className="about-card-image">
                  <img src="/about-1.png" alt="Sanitary Solutions" />
                </div>
                <div className="about-card-text">
                  <h3>Your Trusted Partner for Sanitary & Plumbing</h3>
                  <p>
                    Nalwaya Fitting Suppliers lead the industry in providing high-quality bathroom
                    and sanitary fittings for residential and hospitality projects across Rajasthan.
                  </p>
                </div>
              </div>
              <div className="about-cta-modern">
                <p>Explore detailed information about our premium product range and history.</p>
                <Link href="/about" className="btn-modern-outline">View More</Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Row 2 */}
          <AnimateOnScroll>
            <div className="about-row reverse">
              <div className="about-card-modern dark">
                <div className="about-card-text">
                  <h3>Wholesale Supplier of Premium Hardware</h3>
                  <p>
                    Specializing in genuine spare parts and high-durability plumbing components.
                    We bridge the gap between global brands and your local construction needs.
                  </p>
                </div>
                <div className="about-card-image">
                  <img src="/about-2.png" alt="Hardware Fittings" />
                </div>
              </div>
              <div className="about-cta-modern">
                <p>Check out our competitive wholesale pricing and bulk supply options.</p>
                <Link href="/contact" className="btn-modern-outline">Get Price</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* ====== FANCY METRICS (Reference Design) ====== */}
      <section className="metrics-section-v2">
        <div className="container">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
        </div>
      </section>


      {/* ====== SERVICES SECTION V2 ====== */}
      <section className="services-v2-container" id="services">
        <div className="container">
          <AnimateOnScroll>
            <div className="services-v2-header">
              <div className="services-v2-title-area">
                <span className="section-label-v2">OUR SERVICE</span>
                <h2 className="section-title-v2">Our Excellent Service</h2>
              </div>
              <div className="services-v2-nav">
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: -344, behavior: 'smooth' });
                  }}
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-btn"
                  onClick={() => {
                    const grid = document.getElementById('services-grid-v2');
                    if (grid) grid.scrollBy({ left: 344, behavior: 'smooth' });
                  }}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="services-v2-grid" id="services-grid-v2">
            <div className="services-v2-track">
              {[...serviceCategories, ...serviceCategories].map((cat, i) => {
                // Map slugs to appropriate icons
                let Icon = FaCubes;
                if (cat.slug.includes('pipe')) Icon = FaWrench;
                if (cat.slug.includes('bath') || cat.slug.includes('sanitary')) Icon = FaBath;
                if (cat.slug.includes('paint')) Icon = FaTint;
                if (cat.slug.includes('valve')) Icon = FaIndustry;
                if (cat.slug.includes('fastener') || cat.slug.includes('clamp')) Icon = FaCog;

                return (
                  <Link href={`/services/${cat.slug}`} key={i} className="service-card-v2">
                    <div className="service-card-v2-image">
                      <img src={cat.image} alt={cat.title} />
                      <div className="service-card-v2-icon">
                        <Icon />
                      </div>
                    </div>
                    <div className="service-card-v2-content">
                      <h3>{cat.title}</h3>
                      <p>{cat.shortDesc}</p>
                      <div className="service-card-btn-wrapper">
                        <span className="service-card-btn">
                          Discover more <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/services" className="btn btn-primary" style={{ background: 'var(--teal)', borderColor: 'var(--teal)' }}>
                View All Services <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== MISSION & VISION (CREATIVE) ====== */}
      <section className="mv-section-creative">
        <div className="mv-bg-decorative">
          <div className="mv-circle circle-1"></div>
          <div className="mv-circle circle-2"></div>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div className="mv-grid-creative">
              <div className="mv-text-content">
                <span className="mv-badge">Strategic Path</span>
                <h2 className="mv-main-title">
                  Defining Our <span>Core Purpose</span>
                </h2>
                <p className="mv-main-desc">
                  We are committed to excellence in every fitting we supply, driven by a clear mission
                  and a bold vision for the future of sanitary solutions in Rajasthan.
                </p>
                <Link href="/about" className="btn btn-primary">
                  Learn Our Story <FaArrowRight />
                </Link>
              </div>

              <div className="mv-cards-creative-stack">
                <div className="card-v3 mission">
                  <div className="card-v3-number">01</div>
                  <div className="card-v3-gradient"></div>
                  <div className="card-v3-icon">
                    <FaBullseye />
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to provide genuine sanitary fittings and plumbing solutions that deliver durability,
                    reliability, and value to our customers while maintaining the highest standards of quality and service.
                  </p>
                </div>

                <div className="card-v3 vision">
                  <div className="card-v3-number">02</div>
                  <div className="card-v3-gradient"></div>
                  <div className="card-v3-icon">
                    <FaEye />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is to become one of the most trusted sanitary fittings and plumbing suppliers in Rajasthan,
                    known for premium brands, expert solutions, and long-term customer relationships.
                  </p>
                </div>
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
            <div className="premium-values-grid">
              {coreValues.map((v, i) => (
                <div key={i} className="premium-value-card-v2">
                  <div className="value-icon-v3">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                  <div className="value-cta-v2">
                    Learn More <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section section-navy section-boxed-bg">
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

      {/* ====== TESTIMONIALS (INFINITE SCROLL) ====== */}
      <section className="testimonial-section-creative">
        <div className="testimonial-bg-blob"></div>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mv-badge">What People Say</span>
              <h2 className="mv-main-title">Customer <span>Reviews</span></h2>
              <p className="mv-main-desc" style={{ margin: "0 auto", maxWidth: 600 }}>
                Hear from our satisfied clients who trust us for their plumbing and sanitary needs across Rajasthan.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="testimonial-marquee-container" id="homepage-testimonials-marquee">
          <div className="testimonial-marquee-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className={`testimonial-card-v3 outline-variant-${(i % 3) + 1}`}>
                <div className="testimonial-giant-quote">&ldquo;</div>
                <div className="testimonial-stars-v3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <p className="testimonial-text-v3">{t.text}</p>
                <div className="testimonial-author-v3">
                  <div className="testimonial-avatar-v3">{t.initials}</div>
                  <div className="testimonial-info-v3">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: 60 }}>
              <Link href="/testimonials" className="btn btn-primary" style={{ padding: '20px 40px', borderRadius: '100px' }}>
                View All Success Stories <FaArrowRight />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FAQ (V3 MODERN) ====== */}
      <section className="faq-section-v3">
        <div className="container">
          <div className="faq-grid-v3">
            <div className="faq-content-v3">
              <AnimateOnScroll>
                <span className="faq-badge-v3">F. A. Q</span>
                <h2 className="faq-title-v3">Frequently Asked Questions</h2>
                <p className="faq-desc-v3">
                  Find answers to common questions about our genuine sanitary products,
                  expert plumbing services, and how we serve customers across Rajasthan.
                </p>
                <div className="faq-accent-line"></div>
              </AnimateOnScroll>
            </div>

            <div className="faq-accordion-v3">
              <AnimateOnScroll>
                {faqs.map((f, i) => (
                  <FAQItemV3 key={i} q={f.q} a={f.a} />
                ))}
              </AnimateOnScroll>
            </div>
          </div>
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
