import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
    const { user, removeFromCart } = useAuth();
    const cartItems = user?.cart || [];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        alert("We are still working on it!");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">Your Cart</h1>

            {cartItems.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-[var(--color-accent)]/50 transition-colors duration-300">
                                <div className="w-24 h-24 bg-[var(--color-surface2)] rounded-lg overflow-hidden flex-shrink-0 border border-[var(--color-border)]">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-[var(--color-text)] text-sm leading-snug">{item.title}</h3>
                                        <p className="font-bold text-[var(--color-text)]">₹{item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-400 hover:underline text-sm flex items-center gap-1 self-start transition-all"
                                    >
                                        <Trash2 size={16} /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                            <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Order Summary</h3>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-[var(--color-text-muted)] text-sm">
                                    <span>Subtotal</span>
                                    <span>₹{total}</span>
                                </div>
                                <div className="flex justify-between text-[var(--color-text-muted)] text-sm">
                                    <span>Tax (Included)</span>
                                    <span>₹0.00</span>
                                </div>
                            </div>
                            <div className="border-t border-[var(--color-border)] pt-4 mb-6">
                                <div className="flex justify-between font-bold text-lg text-[var(--color-text)]">
                                    <span>Total</span>
                                    <span className="text-[var(--color-text)]">₹{total}</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleCheckout}
                                className="w-full py-3 bg-[var(--color-accent)] text-white rounded-xl font-bold shadow-btn hover:shadow-btn-hover hover:bg-[var(--color-accent-hover)] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
                            >
                                Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 bg-[var(--color-surface)] rounded-2xl border-dashed border-2 border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                    <p className="text-[var(--color-text-muted)] mb-4 text-lg">Your cart is empty.</p>
                    <Link to="/market" className="text-[var(--color-accent)] font-bold hover:underline transition-all">Start Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
