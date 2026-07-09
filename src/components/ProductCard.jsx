import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const STAR_COUNT = 5;

const ProductCard = ({ product }) => {
    const { user, addToWishlist, removeFromWishlist } = useAuth();
    const isWishlisted = user?.wishlist?.some(item => item.id === product.id) || false;
    // Static rating for demo: random between 3.5–5
    const rating = product.rating ?? (3.5 + (product.id % 3) * 0.5);
    const reviewCount = product.reviews ?? (40 + product.id * 17);
    const originalPrice = product.originalPrice ?? Math.round(product.price * 1.35);
    const discountPct = Math.round(((originalPrice - product.price) / originalPrice) * 100);

    const renderStars = (r) => {
        return Array.from({ length: STAR_COUNT }, (_, i) => {
            const filled = i < Math.floor(r);
            const half = !filled && i < r;
            return (
                <Star
                    key={i}
                    size={13}
                    className={filled || half ? 'text-yellow-400' : 'text-gray-200'}
                    fill={filled ? 'currentColor' : half ? 'url(#half)' : 'none'}
                />
            );
        });
    };

    return (
        <div className="group bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/30"
             style={{ boxShadow: 'var(--shadow-card)' }}
             onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'}
             onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
        >
            {/* Image area */}
            <div className="relative aspect-square overflow-hidden bg-[var(--color-surface2)]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    style={{ transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Discount badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full text-white
                    ₹{product.type === 'Rent'
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-accent-2)]'
                    }`}>
                    {product.type === 'Rent' ? 'RENT' : `₹{discountPct}% OFF`}
                </div>

                <button
                    onClick={(e) => { 
                        e.preventDefault(); 
                        if (!user) {
                            alert("Please log in to add items to your wishlist.");
                            return;
                        }
                        if (isWishlisted) {
                            removeFromWishlist(product.id);
                        } else {
                            addToWishlist(product);
                        }
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[var(--color-surface)] rounded-full border transition-all duration-200
                        ₹{isWishlisted
                            ? 'border-red-300 text-red-500 shadow-[0_2px_8px_rgba(239,68,68,0.25)]'
                            : 'border-[var(--color-border)] text-gray-400 hover:border-red-300 hover:text-red-400'
                        }`}
                >
                    <Heart size={15} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>

                {/* Quick Add overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link
                        to={`/product/₹{product.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--color-accent)] text-white text-xs font-bold hover:bg-[var(--color-accent-hover)] transition-colors"
                    >
                        <ShoppingCart size={13} />
                        Quick View
                    </Link>
                </div>
            </div>

            {/* Card body */}
            <div className="p-4">
                {/* Stars + review count */}
                <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex items-center gap-0.5">
                        {renderStars(rating)}
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)] font-medium">({reviewCount})</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[var(--color-text)] line-clamp-2 mb-1 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {product.title}
                </h3>

                {/* Price row */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-base font-bold text-[var(--color-text)]">
                        ₹{product.price}
                    </span>
                    {product.type !== 'Rent' && (
                        <span className="text-xs text-[var(--color-text-muted)] line-through">
                            ₹{originalPrice}
                        </span>
                    )}
                    {product.type === 'Rent' && (
                        <span className="text-xs text-[var(--color-text-muted)]">/sem</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
