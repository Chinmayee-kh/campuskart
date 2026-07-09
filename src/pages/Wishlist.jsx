import React from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Wishlist = () => {
    const { user, removeFromWishlist, addToCart } = useAuth();
    const wishlistItems = user?.wishlist || [];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">Your Wishlist</h1>

            {wishlistItems.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Wishlist Items List */}
                    {wishlistItems.map(item => (
                        <div key={item.id} className="group flex gap-4 p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-[var(--color-accent)]/50 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-24 h-24 bg-[var(--color-surface2)] rounded-lg overflow-hidden flex-shrink-0 border border-[var(--color-border)] relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                <div className="absolute top-1 left-1 px-2 py-0.5 backdrop-blur-md text-[10px] font-bold uppercase tracking-wide rounded-full bg-[var(--color-accent)] text-white shadow-[0_0_5px_rgba(37,99,235,0.3)]">
                                    {item.type}
                                </div>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <Link to={`/product/₹{item.id}`} className="flex justify-between items-start hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                                    <h3 className="font-semibold text-[var(--color-text)] line-clamp-2 text-sm leading-snug">{item.title}</h3>
                                </Link>
                                <div className="mt-1 mb-2">
                                    <p className="font-bold text-[var(--color-text)]">₹{item.price}</p>
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <button 
                                        onClick={() => addToCart(item)}
                                        className="flex-1 py-1.5 bg-[var(--color-surface2)] border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-1 group/btn"
                                    >
                                        <ShoppingCart size={14} className="group-hover/btn:scale-110 transition-transform" /> Add to Cart
                                    </button>
                                    <button 
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="px-3 py-1.5 bg-[var(--color-surface2)] border border-[var(--color-border)] text-red-500 rounded-lg text-sm hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-[var(--color-surface)] rounded-2xl border-dashed border-2 border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                    <p className="text-[var(--color-text-muted)] mb-4 text-lg">Your wishlist is empty.</p>
                    <Link to="/market" className="text-[var(--color-accent)] font-bold hover:underline transition-all">Explore Marketplace</Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
