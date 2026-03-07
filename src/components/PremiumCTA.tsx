"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaArrowRight, FaTools, FaHandshake, FaBoxes } from "react-icons/fa";

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

export default function PremiumCTA({ isSubPage = false }: { isSubPage?: boolean }) {
    return (
        <section
            className={isSubPage ? "premium-cta-v3 sub-page-cta" : "premium-cta-v3"}
            style={{
                margin: '20px auto 100px',
                width: 'calc(100% - 40px)',
                maxWidth: '1050px',
                padding: '110px 24px',
                background: 'radial-gradient(circle at center, #2F4156 0%, #1e2d3d 100%)',
                position: 'relative',
                overflow: 'hidden',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '50px',
                boxShadow: '0 40px 80px rgba(0,0,0,0.12)'
            }}>
            {/* Decorative atmospheric elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(209, 23, 75, 0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(86, 124, 141, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

            {/* Floating Icons */}
            <div style={{ position: 'absolute', top: '12%', left: '8%', opacity: 0.03, fontSize: '8rem', transform: 'rotate(-15deg)', pointerEvents: 'none' }}><FaTools /></div>
            <div style={{ position: 'absolute', bottom: '12%', right: '8%', opacity: 0.03, fontSize: '10rem', transform: 'rotate(15deg)', pointerEvents: 'none' }}><FaHandshake /></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <AnimateOnScroll>
                        <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '35px' }}>
                            <span style={{
                                color: '#6a95a8',
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                marginBottom: '15px',
                                fontWeight: 700,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                Ready to start your project?
                            </span>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}>
                                Looking for Genuine Sanitary Fittings &amp; Plumbing Supplies?
                            </span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, marginBottom: '50px' }}>
                            Join thousands of satisfied homeowners and professionals who trust Nalwaya Fitting Suppliers
                            for authentic products and expert solutions across Rajasthan.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            {isSubPage ? (
                                <Link href="/services"
                                    className="p-cta-btn-sub-primary"
                                    style={{
                                        padding: '18px 40px',
                                        borderRadius: '100px',
                                        background: '#fff',
                                        color: '#2F4156',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}>
                                    <FaBoxes /> Back to Services
                                </Link>
                            ) : (
                                <Link href="tel:+919983174974" style={{
                                    padding: '18px 40px',
                                    borderRadius: '100px',
                                    background: '#fff',
                                    color: '#2F4156',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <FaPhoneAlt /> Call Now
                                </Link>
                            )}
                            <Link href="/contact"
                                className="p-cta-btn-sub-outline"
                                style={{
                                    padding: '18px 40px',
                                    borderRadius: '100px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    color: '#fff',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                Contact Us <FaArrowRight />
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
