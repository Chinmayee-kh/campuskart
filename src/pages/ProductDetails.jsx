import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Share2, Heart } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();

    // In a real app, fetch fetch based on ID
    const product = {
        id: id,
        title: 'Calculus Textbook',
        price: 45,
        type: 'Sale',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
        description: 'Calculus: Early Transcendentals, 8th Edition. Used for one semester, minimal highlighting. Great condition overall. Saves you ₹100 compared to the bookstore price!',
        seller: {
            name: 'Alex Johnson',
            major: 'Engineering',
            year: 'Junior'
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Link to="/market" className="inline-flex items-center text-gray-400 hover:text-accent-neon hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)] mb-6 transition-colors duration-300">
                <ArrowLeft size={18} className="mr-2" /> Back to Market
            </Link>

            <div className="grid md:grid-cols-2 gap-0 bg-dark-surface rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-dark-border overflow-hidden">
                <div className="h-96 md:h-auto bg-dark-bg relative border-b md:border-b-0 md:border-r border-dark-border">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute top-4 left-4 px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wide rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.3)] ₹{
                        product.type === 'Rent' 
                        ? 'bg-accent-neon/90 text-black shadow-[0_0_10px_rgba(0,255,157,0.4)]' 
                        : 'bg-dark-surface/90 text-gray-200 border border-gray-500'
                    }`}>
                        For {product.type}
                    </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">{product.title}</h1>
                        <p className="text-3xl font-bold text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)] mb-6">₹{product.price}</p>

                        <div className="prose text-[var(--color-text-muted)] mb-8 leading-relaxed text-sm md:text-base">
                            <p>{product.description}</p>
                        </div>

                        <div className="border-t border-dark-border pt-6">
                            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">Seller Info</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent-neon/10 rounded-full flex items-center justify-center text-accent-neon font-bold shadow-[0_0_10px_rgba(0,255,157,0.1)]">
                                    {product.seller.name[0]}
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--color-text)]">{product.seller.name}</p>
                                    <p className="text-sm text-[var(--color-text-muted)]">{product.seller.major}, {product.seller.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button className="flex-1 bg-accent-neon text-[var(--color-bg)] py-3 rounded-xl font-bold hover:bg-accent-hover shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                            <MessageCircle size={20} /> Contact Seller
                        </button>
                        <button className="p-3 border border-dark-border rounded-xl text-[var(--color-text-muted)] hover:text-red-500 hover:bg-dark-bg hover:border-red-500/50 hover:shadow-[0_0_10px_rgba(239,68,68,0.3)] transition-all duration-300 h-12 w-12 flex items-center justify-center">
                            <Heart size={20} />
                        </button>
                        <button className="p-3 border border-dark-border rounded-xl text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-bg hover:border-accent-neon/50 hover:shadow-[0_0_10px_rgba(0,255,157,0.3)] transition-all duration-300 h-12 w-12 flex items-center justify-center">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
