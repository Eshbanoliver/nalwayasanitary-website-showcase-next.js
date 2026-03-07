/* ==============================
   SERVICE CATEGORIES & PRODUCTS
   ============================== */

export interface Product {
    name: string;
    desc: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceCategory {
    slug: string;
    title: string;
    shortDesc: string;
    longDesc?: string;
    keyPoints?: string[];
    image: string;
    galleryImages?: string[];
    products: Product[];
    faqs?: FAQ[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        slug: "pipes-and-tanks",
        title: "Pipes & Tanks",
        shortDesc: "PVC, CPVC, UPVC, PPR pipes and water storage tanks.",
        longDesc: "At Nalwaya Fitting Suppliers, we offer a specialized range of high-performance piping and storage solutions. Our selection includes everything from extreme-durability CPVC for hot water systems to heavy-duty underground storage tanks. We are authorized dealers for top brands, ensuring that every pipe and tank you purchase meets or exceeds national quality standards for safe and efficient water management.",
        keyPoints: [
            "UV Resistant Water Storage",
            "Lead-Free Piping Systems",
            "High Pressure Endurance",
            "Bacterial Growth Prevention",
            "Seamless Joint Technology"
        ],
        faqs: [
            { question: "Which pipe is best for hot water?", answer: "CPVC (Chlorinated Polyvinyl Chloride) is specifically designed to handle high temperatures and is the industry standard for hot water supply." },
            { question: "What sizes of tanks are available?", answer: "We stock tanks ranging from 500 liters to 5000 liters in both overhead and underground variants." },
            { question: "Are these pipes UV protected?", answer: "Yes, our exterior-grade pipes and all our water tanks feature advanced UV stabilization to prevent brittleness in sunlight." },
            { question: "What is the life expectancy?", answer: "Our premium piping systems are designed to last over 50 years under standard operating conditions." },
            { question: "Do you deliver to site?", answer: "Yes, we provide site-delivery services across Udaipur and surrounding regions for bulk orders." }
        ],
        image: "/cat-pipes-tanks.png",
        galleryImages: [
            "/gallery-pipes-1.png",
            "/gallery-pipes-2.png",
            "/gallery-pipes-3.png"
        ],
        products: [
            { name: "PVC Pipes", desc: "Rigid PVC pipes for cold water plumbing, drainage, and irrigation systems." },
            { name: "CPVC Pipes", desc: "Chlorinated PVC pipes suitable for hot and cold water supply lines." },
            { name: "UPVC Pipes", desc: "Unplasticized PVC pipes for soil, waste, and rainwater drainage." },
            { name: "PPR Pipes", desc: "Polypropylene random copolymer pipes for hot/cold water systems." },
            { name: "GI Pipes", desc: "Galvanized iron pipes for water supply and structural applications." },
            { name: "Water Tanks (Overhead)", desc: "Plastic and FRP overhead water storage tanks in various capacities." },
            { name: "Underground Tanks", desc: "Durable underground tanks for rainwater harvesting and storage." },
            { name: "Plasto Water Tanks", desc: "Authorized dealer for Plasto brand premium water tanks." },
        ],
    },
    {
        slug: "adhesives",
        title: "Adhesives",
        shortDesc: "Solvent cements, sealants, and plumbing adhesives.",
        image: "/cat-adhesives.png",
        products: [
            { name: "CPVC Solvent Cement", desc: "High-strength cement for joining CPVC pipes and fittings." },
            { name: "PVC Solvent Cement", desc: "Fast-setting adhesive for PVC pipe joints and connections." },
            { name: "Plumbing Adhesive", desc: "Multi-purpose plumbing adhesive for various pipe materials." },
            { name: "Pipe Thread Sealant", desc: "PTFE-based thread sealant for leak-proof pipe connections." },
            { name: "Silicone Sealant", desc: "Waterproof silicone sealant for bathroom and kitchen joints." },
            { name: "Epoxy Adhesive", desc: "Two-component epoxy for heavy-duty bonding and repairs." },
        ],
    },
    {
        slug: "bathware-sanitaryware",
        title: "Bathware & Sanitaryware",
        shortDesc: "Health faucets, jet sprays, CP fittings, brass, drainers.",
        image: "/cat-bathware.png",
        products: [
            { name: "Health Faucet", desc: "Handheld bidet spray for personal hygiene with wall mount." },
            { name: "Jet Spray", desc: "High-pressure jet spray for bathroom cleaning applications." },
            { name: "C.P. Extension Nipple", desc: "Chrome-plated extension nipples for tap and faucet connections." },
            { name: "C.P. Waste Coupling", desc: "Chrome-plated waste coupling for basin and sink drainage." },
            { name: "C.P. Nozzle & Hose Nipple", desc: "Chrome-plated nozzles and hose connectors for water fixtures." },
            { name: "Connection Pipe & Shower Tube", desc: "Flexible connection pipes and shower tubes in various lengths." },
            { name: "Brass Fitting", desc: "Premium brass fittings for durable plumbing connections." },
            { name: "SS Drainers", desc: "Stainless steel floor drainers for bathroom and balcony drainage." },
            { name: "Cockroach Trap", desc: "Anti-cockroach floor drain traps with one-way valve mechanism." },
            { name: "Urinal Accessories", desc: "Complete urinal fittings including spreaders, waste pipes, and valves." },
            { name: "Flanges", desc: "Wall and floor flanges in CP, brass, and PVC materials." },
            { name: "Aerators", desc: "Water-saving faucet aerators for controlled flow and splash reduction." },
            { name: "Flushing Mechanism", desc: "Complete flush valve kits and dual-flush mechanisms." },
            { name: "Seat Covers", desc: "Toilet seat covers in soft-close and standard hinge variants." },
            { name: "Cisterns (Plastic/Concealed)", desc: "Flush cisterns in external plastic and concealed wall-mount types." },
        ],
    },
    {
        slug: "paints",
        title: "Paints",
        shortDesc: "Interior, exterior, wood, and metal paints with primers.",
        image: "/cat-paints.png",
        products: [
            { name: "Interior Wall Paint", desc: "Premium emulsion paints for smooth interior wall finishes." },
            { name: "Exterior Wall Paint", desc: "Weather-resistant exterior paints for long-lasting protection." },
            { name: "Wood Paint & Finish", desc: "Wood stains, varnishes, and enamel paints for furniture and doors." },
            { name: "Metal Paint", desc: "Anti-rust and anti-corrosion paints for metal surfaces." },
            { name: "Primer", desc: "Wall and metal primers for better paint adhesion and coverage." },
            { name: "Waterproof Paint", desc: "Specialized waterproofing coatings for damp-prone surfaces." },
        ],
    },
    {
        slug: "construction-chemicals",
        title: "Construction Chemicals",
        shortDesc: "Waterproofing, tile adhesive, putty, grout, and admixtures.",
        image: "/cat-construction.png",
        products: [
            { name: "Waterproofing Compound", desc: "Integral and surface waterproofing compounds for concrete and masonry." },
            { name: "Tile Adhesive", desc: "Cement-based tile adhesives for wall and floor tile fixing." },
            { name: "Wall Putty", desc: "Smooth finish wall putty for interior and exterior surfaces." },
            { name: "Grout", desc: "Non-shrink grout and tile joint grout in various colors." },
            { name: "Concrete Admixture", desc: "Plasticizers and retarders for improving concrete workability." },
            { name: "Anti-Corrosion Coating", desc: "Protective coatings for reinforcement bars and metal embedments." },
        ],
    },
    {
        slug: "pipe-fittings",
        title: "Pipe Fittings",
        shortDesc: "Elbows, tees, couplings, reducers, unions, flanges in SS, Brass, PVC.",
        image: "/cat-pipe-fittings.png",
        products: [
            { name: "90° Elbows (SS, Brass, PVC)", desc: "Right-angle elbows in stainless steel, brass, and PVC materials." },
            { name: "45° Elbows (SS, Brass, PVC)", desc: "45-degree elbows for gradual change of pipe direction." },
            { name: "Equal Tees", desc: "Three-way pipe connectors with equal outlet sizes." },
            { name: "Reducing Tees", desc: "Branch tees with reduced outlet for flow distribution." },
            { name: "Couplings", desc: "Straight pipe connectors for joining two pipes of same diameter." },
            { name: "Concentric Reducers", desc: "Centered reducers for smooth transition between pipe sizes." },
            { name: "Eccentric Reducers", desc: "Off-center reducers maintaining flat bottom for horizontal runs." },
            { name: "Unions", desc: "Detachable pipe joints for easy maintenance and disconnection." },
            { name: "Caps & Plugs", desc: "End caps and threaded plugs for sealing pipe ends." },
            { name: "Close / Short / Long Nipples", desc: "Threaded nipples in various lengths for pipe connections." },
            { name: "Slip-on Flanges", desc: "Welded flanges that slip over pipe end for bolted connections." },
            { name: "Weld Neck Flanges", desc: "Butt-weld flanges for high-pressure piping systems." },
            { name: "Blind Flanges", desc: "Solid disc flanges for blanking off pipeline ends." },
        ],
    },
    {
        slug: "hose-clamps",
        title: "Hose Clamps",
        shortDesc: "Worm drive, spring, T-bolt, and wire hose clamps.",
        image: "/service-parts.png",
        products: [
            { name: "Worm Drive Clamps", desc: "Adjustable band clamps with screw mechanism for hose connections." },
            { name: "Spring Clamps", desc: "Self-adjusting spring-loaded clamps for constant tension." },
            { name: "T-Bolt Clamps", desc: "Heavy-duty T-bolt clamps for high-pressure hose applications." },
            { name: "Wire Clamps", desc: "Double-wire spring clamps for quick-release hose connections." },
        ],
    },
    {
        slug: "fasteners",
        title: "Fasteners",
        shortDesc: "Bolts, nuts, screws, washers, anchors, rivets, rods.",
        image: "/hero-2.png",
        products: [
            { name: "Hex Bolts", desc: "Standard hexagonal head bolts in various sizes and grades." },
            { name: "Hex Nuts", desc: "Standard hex nuts for bolted joint assemblies." },
            { name: "Lock Nuts", desc: "Self-locking nuts for vibration-resistant connections." },
            { name: "Wing Nuts", desc: "Hand-tightenable wing nuts for tool-free assembly." },
            { name: "Cap Nuts", desc: "Dome-shaped acorn nuts for decorative and protective finishes." },
            { name: "Wood Screws", desc: "Self-tapping screws designed for wood-to-wood fastening." },
            { name: "Machine Screws", desc: "Precision screws for metal and machine component assembly." },
            { name: "Self-Tapping Screws", desc: "Thread-forming screws for metal sheet and thin material fastening." },
            { name: "Flat Washers", desc: "Plain flat washers for load distribution under bolt heads." },
            { name: "Spring Washers", desc: "Split ring washers to prevent loosening from vibration." },
            { name: "Lock Washers", desc: "External and internal tooth washers for secure locking." },
            { name: "Expansion Anchors", desc: "Heavy-duty anchors for concrete and masonry applications." },
            { name: "Sleeve Anchors", desc: "Medium-duty anchors for solid and hollow base materials." },
            { name: "Wedge Anchors", desc: "High-strength anchors for critical structural connections." },
            { name: "Rivets", desc: "Solid and blind rivets for permanent sheet metal fastening." },
            { name: "Threaded Rods", desc: "Fully threaded rods for suspension, bracing and anchoring." },
            { name: "Studs", desc: "Double-ended threaded studs for flange and equipment mounting." },
        ],
    },
    {
        slug: "design-series",
        title: "Design Series",
        shortDesc: "Aria, Florentine, FLT, Opal Prime, Ornamix, Panta, Prime.",
        image: "/about-1.png",
        products: [
            { name: "Aria Series", desc: "Contemporary design faucets and mixers with sleek curves and chrome finish." },
            { name: "Florentine Series", desc: "Italian-inspired premium bathroom fittings with ornate detailing." },
            { name: "FLT Series", desc: "Flat-design minimalist faucets for modern bathroom aesthetics." },
            { name: "Opal Prime Series", desc: "Luxury line featuring opal-inspired textures and premium finishes." },
            { name: "Ornamix Series", desc: "Decorative mixer taps with artistic ornamental handles." },
            { name: "Panta Series", desc: "Five-way multifunction shower systems and diverter sets." },
            { name: "Prime Series", desc: "Best-selling value range with durable construction and classic design." },
        ],
    },
    {
        slug: "industrial-valves",
        title: "Industrial Valves",
        shortDesc: "Gate, ball, globe, check, butterfly, needle, fire hydrant valves.",
        image: "/service-plumbing.png",
        products: [
            { name: "Gate / Sluice Valve", desc: "Full-bore gate valves for on/off isolation in pipelines." },
            { name: "Ball Valve", desc: "Quarter-turn ball valves for quick shut-off and flow control." },
            { name: "Globe Valve", desc: "Linear-motion valves for precise throttling and flow regulation." },
            { name: "Check Valve (NRV)", desc: "Non-return valves to prevent backflow in piping systems." },
            { name: "Butterfly Valve", desc: "Lightweight quarter-turn valves for large diameter pipelines." },
            { name: "Pressure Reducing Valve", desc: "PRVs for maintaining downstream pressure in water systems." },
            { name: "Needle Valve", desc: "Fine-adjustment valves for precise low-flow control." },
            { name: "Steam Traps", desc: "Automatic devices for draining condensate from steam systems." },
            { name: "Strainers", desc: "Y-type and basket strainers for debris filtration in pipelines." },
            { name: "Double Regulating Balancing Valve", desc: "Commissioning valves for HVAC hydronic balancing." },
            { name: "Fire Hydrant Valve", desc: "Fire-fighting valves conforming to IS standards for buildings." },
            { name: "Transformer Valve", desc: "Specialized valves for oil-filled transformer applications." },
        ],
    },
    {
        slug: "hardware-accessories",
        title: "Hardware Accessories",
        shortDesc: "Brackets, hinges, handles, locks, wire mesh, hand tools.",
        image: "/hero-1.png",
        products: [
            { name: "L-Brackets", desc: "Right-angle L-brackets for shelving and structural support." },
            { name: "Corner Brackets", desc: "Corner reinforcement brackets for furniture and frames." },
            { name: "Shelf Brackets", desc: "Decorative and heavy-duty shelf mounting brackets." },
            { name: "Hinges", desc: "Door, cabinet, and gate hinges in various styles and materials." },
            { name: "Handles & Knobs", desc: "Door handles, cabinet pulls, and decorative knobs." },
            { name: "Locks & Latches", desc: "Padlocks, mortise locks, and door latches for security." },
            { name: "Chains & Cables", desc: "Galvanized chains and steel cables for various applications." },
            { name: "Wire Mesh (Galvanized)", desc: "Hot-dip galvanized wire mesh for fencing and protection." },
            { name: "Chicken Wire Mesh", desc: "Hexagonal wire netting for poultry, garden, and craft use." },
            { name: "Welded Wire Mesh", desc: "Heavy-duty welded mesh panels for construction and security." },
            { name: "Adhesives & Sealants", desc: "General-purpose adhesives and industrial sealants." },
            { name: "Hand Tools", desc: "Pliers, hammers, wrenches, screwdrivers, and more." },
            { name: "Measuring Instruments", desc: "Tape measures, spirit levels, and marking tools." },
        ],
    },
];
