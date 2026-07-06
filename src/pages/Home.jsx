import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, BookOpen, Monitor, PenTool, Shirt, Sofa, FlaskConical } from 'lucide-react';
import ProductCard from '../components/ProductCard';

/* ─── Static data ─────────────────────────────────────────── */
const CATEGORIES = [
    { label: 'Textbooks',   icon: BookOpen,     color: '#EFF6FF', iconColor: '#2563EB' },
    { label: 'Electronics', icon: Monitor,       color: '#FFF7ED', iconColor: '#EA580C' },
    { label: 'Stationery',  icon: PenTool,       color: '#F0FDF4', iconColor: '#16A34A' },
    { label: 'Clothing',    icon: Shirt,         color: '#FDF4FF', iconColor: '#9333EA' },
    { label: 'Furniture',   icon: Sofa,          color: '#FFFBEB', iconColor: '#D97706' },
];

const FEATURED_PRODUCTS = [
    { id: 1, title: 'Calculus Textbook', price: 45, type: 'Sale', rating: 4.5, reviews: 128,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      description: 'Calculus: Early Transcendentals, 8th Edition. Slightly used but in good condition.' },
    { id: 2, title: 'Graphing Calculator', price: 20, type: 'Rent', rating: 4.0, reviews: 74,
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800',
      description: 'TI-84 Plus CE. Perfect for math and science classes. Rent for the semester.' },
    { id: 3, title: 'Dorm Mini Fridge', price: 80, type: 'Sale', rating: 4.5, reviews: 56,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800',
      description: 'Compact mini fridge, perfect for dorm rooms.' },
    { id: 4, title: 'Wireless Headphones', price: 120, type: 'Sale', rating: 5.0, reviews: 203,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      description: 'Noise cancelling headphones, great for studying.' },
    { id: 5, title: 'Lab Coat', price: 15, type: 'Rent', rating: 3.5, reviews: 41,
      image: 'https://images.unsplash.com/photo-1583912267550-d974498e3b34?auto=format&fit=crop&q=80&w=800',
      description: 'Standard white lab coat, size M.' },
    { id: 6, title: 'Adjustable Desk Lamp', price: 25, type: 'Sale', rating: 4.0, reviews: 88,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
      description: 'Adjustable LED desk lamp. Multiple brightness settings.' },
    { id: 7, title: 'Scientific Calculator', price: 35, type: 'Sale', rating: 4.5, reviews: 95,
      image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=800',
      description: 'Casio fx-991EX, perfect for engineering students.' },
    { id: 8, title: 'Backpack', price: 55, type: 'Sale', rating: 4.0, reviews: 67,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
      description: '25L waterproof backpack with laptop compartment.' },
];

/* ─── Sub-components ─────────────────────────────────────── */
const SectionLabel = ({ children }) => (
    <div className="section-label">
        <span className="dot" />
        {children}
    </div>
);

const SectionHeader = ({ label, title, to }) => (
    <div className="flex items-end justify-between mb-8">
        <div>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] font-outfit">{title}</h2>
        </div>
    </div>
);

/* ─── Main Component ─────────────────────────────────────── */
const Home = () => {

    return (
        <div className="flex-grow flex flex-col bg-[var(--color-bg)]">

            {/* ══════════════ HERO ══════════════ */}
            <section className="relative overflow-hidden" style={{ background: 'var(--color-hero-bg)' }}>
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full opacity-60 pointer-events-none"
                     style={{ background: 'radial-gradient(circle, #FFD6C0 0%, #FFF4F0 60%, transparent 100%)', transform: 'translate(20%, -20%)' }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-30 pointer-events-none"
                     style={{ background: 'radial-gradient(circle, #BFDBFE 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left: Text */}
                        <div className="animate-slide-right">

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text)] font-outfit leading-[1.1] mb-5">
                                Find The Perfect<br />
                                <span style={{ color: 'var(--color-accent)' }}>Campus</span> Items
                            </h1>

                            <p className="text-[var(--color-text-muted)] text-base md:text-lg mb-8 max-w-md leading-relaxed">
                                Buy, sell, and rent everything you need for your campus life, whether it is textbooks, electronics, furniture & more.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    to="/market"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-white font-bold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 group"
                                    style={{ boxShadow: '0 4px 18px rgba(37,99,235,0.35)' }}
                                >
                                    Start exploring
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/post-item"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-surface)] text-[var(--color-text)] font-bold rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
                                >
                                    List an Item
                                </Link>
                            </div>

                        </div>

                        {/* Right: Floating product image */}
                        <div className="flex justify-center items-center animate-fade-in">
                            <div className="relative">
                                {/* Soft circle backdrop */}
                                <div className="absolute inset-0 rounded-full"
                                     style={{ background: 'radial-gradient(circle, #FFD6C0 0%, #FFF4F0 70%, transparent 100%)', transform: 'scale(1.15)' }} />
                                <img
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
                                    alt="Wireless Headphones"
                                    className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float drop-shadow-2xl"
                                />
                                {/* Floating price tag */}
                                <div className="absolute top-6 right-0 bg-[var(--color-surface)] rounded-2xl px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                    <p className="text-xs text-[var(--color-text-muted)] font-medium"> starting from</p>
                                    <p className="text-lg font-extrabold text-[var(--color-text)]">₹890.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════ CATEGORIES ══════════════ */}
            <section className="py-14 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label="Categories" title="Browse by Category" to="/market" />

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {CATEGORIES.map(({ label, icon: Icon, color, iconColor }) => (
                            <Link
                            key={label}
                            to={`/market?category=${label.toLowerCase()}`}
                            className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:-translate-y-1.5 hover:border-[var(--color-accent)]/40 transition-all duration-250 group cursor-pointer"
                            style={{ boxShadow: 'var(--shadow-card)' }}
                        >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                                     style={{ background: color }}>
                                    <Icon size={22} style={{ color: iconColor }} />
                                </div>
                                <span className="text-xs font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] text-center transition-colors">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════ FEATURED BANNER ══════════════ */}
            <section className="py-6 bg-[var(--color-bg)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-center"
                         style={{ background: 'var(--color-banner-bg)', minHeight: '260px' }}>

                        {/* Decorative circle */}
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 pointer-events-none hidden md:block"
                             style={{ background: 'radial-gradient(circle, #93C5FD 0%, transparent 70%)' }} />

                        {/* Left: copy */}
                        <div className="flex-1 px-8 md:px-12 py-10 relative z-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text)] font-outfit mb-4 leading-tight">
                                Enhance Your<br />Study Experience
                            </h2>

                            <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed mb-6 max-w-md">
                                Check out the latest books and stationery you will need while studying. Everything from textbooks to pens, all in one place.
                            </p>

                            <Link
                                to="/market?category=study"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-bold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 group"
                                style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
                            >
                                Check it Out!
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: product image */}
                        <div className="flex-1 flex justify-center items-center px-8 py-6 md:py-0 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=500"
                                alt="Featured Product"
                                className="w-48 h-48 md:w-56 md:h-56 object-contain animate-float drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════ PRODUCTS GRID ══════════════ */}
            <section className="py-14 bg-[var(--color-surface)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label="Our Products" title="Explore our Products" to="/market" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                        {FEATURED_PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/market"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 group"
                        >
                            View All Products
                            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
