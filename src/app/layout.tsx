import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Nalwaya Fitting Suppliers | Trusted Sanitary & Plumbing Fittings in Udaipur",
  description:
    "Nalwaya Fitting Suppliers – Your trusted source for genuine sanitary fittings, plumbing solutions, and spare parts in Udaipur, Rajasthan. Premium brands, wholesale pricing, expert service.",
  keywords: [
    "sanitary fittings Udaipur",
    "plumbing fittings supplier",
    "Nalwaya Fitting Suppliers",
    "bathroom fittings Udaipur",
    "spare parts sanitary",
    "plumbing solutions Rajasthan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

