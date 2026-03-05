"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaChevronUp } from "react-icons/fa";

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Left Side – WhatsApp + Call */}
            <div className="floating-left">
                <a
                    href="https://wa.me/919983174974"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-btn floating-whatsapp"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="tel:+919983174974"
                    className="floating-btn floating-call"
                    aria-label="Call us"
                >
                    <FaPhoneAlt />
                </a>
            </div>

            {/* Right Side – Scroll to Top */}
            <div className="floating-right">
                <button
                    className={`floating-btn floating-scroll-top ${showScrollTop ? "visible" : ""}`}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FaChevronUp />
                </button>
            </div>
        </>
    );
}
