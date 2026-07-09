import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart, LogOut, ChevronDown, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=200';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, user, logout } = useAuth();

    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        logout();
        setShowDropdown(false);
        navigate('/login');
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/market', label: 'Shop' },
        { to: '/post-item', label: 'Sell Item' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)]" style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                       <img
  src="/campuskartlogo.png"
  alt="CampusKart Logo"
  className="h-9 object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
/>
                        <span className="font-bold text-xl tracking-tight text-[var(--color-text)] hidden md:block font-outfit">
                            Campus<span className="text-[var(--color-accent)]">Kart</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links — centered */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 group
                                    ₹{isActive(to)
                                        ? 'text-[var(--color-accent)] bg-blue-50'
                                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface2)]'
                                    }`}
                            >
                                {label}
                                {isActive(to) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--color-accent)] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    {isLoggedIn ? (
                        <div className="hidden md:flex items-center gap-2">
                            {/* Search */}
                          

                            {/* Wishlist */}
                            <Link
                                to="/wishlist"
                                className="p-2 text-[var(--color-text-muted)] hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                                title="Wishlist"
                            >
                                <Heart size={20} />
                            </Link>

                            {/* Cart */}
                            <Link
                                to="/cart"
                                className="relative p-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-blue-50 rounded-full transition-all duration-200"
                                title="Cart"
                            >
                                <ShoppingCart size={20} />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-accent-2)] rounded-full ring-2 ring-white" />
                            </Link>

                            {/* User Avatar */}
                            <div className="relative ml-1">
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-btn transition-all duration-200 group"
                                >
                                    <div className="w-7 h-7 rounded-full bg-[var(--color-surface2)] overflow-hidden border border-[var(--color-border)] flex items-center justify-center">
                                        <img src={user?.avatar || DEFAULT_AVATAR} alt={user?.name || "User"} className="w-full h-full object-cover" />
                                    </div>
                                    <ChevronDown size={13} className={`text-[var(--color-text-muted)] transition-transform duration-200 ₹{showDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
                                        <div className="absolute right-0 mt-2 w-56 bg-[var(--color-surface)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[var(--color-border)] py-1.5 z-50 animate-fade-in">
                                            <div className="px-4 py-3 border-b border-[var(--color-border)]">
                                                <p className="text-sm font-semibold text-[var(--color-text)] truncate">{user?.name}</p>
                                                <p className="text-xs text-[var(--color-text-muted)] truncate mt-0.5">{user?.email}</p>
                                            </div>
                                            <div className="py-1">
                                                <Link to="/profile" onClick={() => setShowDropdown(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-blue-50 hover:text-[var(--color-accent)] transition-colors">
                                                    <User size={15} /> Profile
                                                </Link>
                                                <Link to="/cart" onClick={() => setShowDropdown(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-blue-50 hover:text-[var(--color-accent)] transition-colors">
                                                    <ShoppingCart size={15} /> My Orders
                                                </Link>
                                                <Link to="/settings" onClick={() => setShowDropdown(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-blue-50 hover:text-[var(--color-accent)] transition-colors">
                                                    <Settings size={15} /> Settings
                                                </Link>
                                            </div>
                                            <div className="border-t border-[var(--color-border)] pt-1">
                                                <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                                                    <LogOut size={15} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-2">
                            <Link to="/login" className="px-5 py-2 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                Log In
                            </Link>
                            <Link to="/signup" className="px-5 py-2 text-sm font-bold text-white bg-[var(--color-accent)] rounded-xl hover:bg-[var(--color-accent-hover)] shadow-btn hover:shadow-btn-hover transition-all duration-200 transform hover:-translate-y-0.5">
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface2)] rounded-lg transition-all"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] absolute w-full left-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] animate-fade-in">
                    <div className="px-4 py-4 space-y-1">
                        {/* Search mobile */}
                       
                        <div className="relative mb-3">
                            <input type="text" placeholder="Search items..." className="w-full pl-9 pr-4 py-2.5 bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30" />
                            <Search className="absolute left-3 top-3 text-[var(--color-text-muted)]" size={15} />
                        </div>

                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors
                                    ₹{isActive(to) ? 'bg-blue-50 text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-[var(--color-text)]'}`}
                            >
                                {label}
                            </Link>
                        ))}
                        <Link to="/wishlist" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-[var(--color-text)] transition-colors">Wishlist</Link>
                        <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-[var(--color-text)] transition-colors">Cart</Link>
                        <Link to="/profile" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-[var(--color-text)] transition-colors">Profile</Link>
                        <Link to="/settings" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-[var(--color-text)] transition-colors">Settings</Link>

                        {!isLoggedIn && (
                            <div className="pt-2 flex gap-2 border-t border-[var(--color-border)] mt-2">
                                <Link to="/login" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 text-sm font-semibold text-[var(--color-text)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-colors">Log In</Link>
                                <Link to="/signup" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 text-sm font-bold text-white bg-[var(--color-accent)] rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
