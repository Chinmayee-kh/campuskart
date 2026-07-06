import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const DUMMY_PRODUCTS = [
    { id: 1, title: 'Calculus Textbook', price: 45, type: 'Sale', category: 'textbooks', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800', description: 'Calculus: Early Transcendentals, 8th Edition. Slightly used but in good condition.' },
    { id: 2, title: 'Graphing Calculator', price: 20, type: 'Rent', category: 'stationery', image: 'https://images.unsplash.com/photo-1587145820266-a5951eebebb1?auto=format&fit=crop&q=80&w=800', description: 'TI-84 Plus CE. Perfect for math and science classes. Rent for the semester.' },
    { id: 3, title: 'Dorm Mini Fridge', price: 80, type: 'Sale', category: 'furniture', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800', description: 'Compact mini fridge, perfect for dorm rooms. Keeps drinks cold!' },
    { id: 4, title: 'Wireless Headphones', price: 120, type: 'Sale', category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', description: 'Noise cancelling headphones, great for studying in noisy places.' },
    { id: 5, title: 'Lab Coat', price: 15, type: 'Rent', category: 'lab gear', image: 'https://images.unsplash.com/photo-1581093458791-9f302e68383e?auto=format&fit=crop&q=80&w=800', description: 'Standard white lab coat, size M. Clean and ready for chemistry labs.' },
    { id: 6, title: 'Desk Lamp', price: 25, type: 'Sale', category: 'stationery', image: 'https://images.unsplash.com/photo-1534073828943-f801091a7d58?auto=format&fit=crop&q=80&w=800', description: 'Adjustable LED desk lamp. Multiple brightness settings.' },
];

const STUDY_CATEGORIES = ['textbooks', 'stationery'];

const Marketplace = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredProducts = DUMMY_PRODUCTS.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || product.type === filter;

        let matchesCategory = true;
        if (categoryParam) {
            if (categoryParam === 'study') {
                matchesCategory = STUDY_CATEGORIES.includes(product.category);
            } else {
                matchesCategory = product.category === categoryParam;
            }
        }

        return matchesSearch && matchesFilter && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--color-text)] font-outfit">Marketplace</h1>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        {/* Search */}
                        <div className="relative flex-grow md:w-80 group">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all duration-200"
                                style={{ boxShadow: 'var(--shadow-card)' }}
                            />
                            <Search className="absolute left-3 top-3 text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent)] transition-colors duration-200" size={17} />
                        </div>

                        {/* Filter */}
                        <div className="relative group">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="pl-10 pr-8 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl appearance-none text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] cursor-pointer transition-all duration-200"
                                style={{ boxShadow: 'var(--shadow-card)' }}
                            >
                                <option value="All">All Items</option>
                                <option value="Sale">For Sale</option>
                                <option value="Rent">For Rent</option>
                            </select>
                            <Filter className="absolute left-3 top-3 text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent)] transition-colors duration-200" size={17} />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-24 text-[var(--color-text-muted)]">
                        <p className="text-5xl mb-4">🔍</p>
                        <p className="text-xl font-semibold">No products found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filter</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;
