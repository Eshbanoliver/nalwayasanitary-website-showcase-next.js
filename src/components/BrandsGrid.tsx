"use client";

import React from "react";

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

export default function BrandsGrid() {
    return (
        <div className="brands-grid">
            {brands.map((brand, i) => (
                <div key={i} className="glass-card brand-card">
                    <img
                        src={`/brands/${brand.toLowerCase()}.png`}
                        alt={brand}
                        className="brand-logo-img"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                                parent.classList.add("brand-text-fallback");
                            }
                        }}
                    />
                    <span className="brand-name-fallback">{brand}</span>
                </div>
            ))}
        </div>
    );
}
