import React, { useState } from 'react';
import { Package, Info } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=200';

const Profile = () => {
    const { user } = useAuth();
    const [showTooltip, setShowTooltip] = useState(false);

    const joinedDate = user?.joined || 'Jan 2026';
    const avatarUrl = user?.avatar || DEFAULT_AVATAR;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Profile Info Header */}
            <div className="bg-[var(--color-surface)] rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none border border-[var(--color-border)] p-6 md:p-8 mb-8 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Avatar Icon */}
                    <div className="w-24 h-24 bg-[var(--color-surface2)] rounded-full p-1 border border-[var(--color-border)] overflow-hidden shadow-sm flex-shrink-0">
                        <img src={avatarUrl} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    {/* Details Column */}
                    <div className="text-center sm:text-left flex-grow">
                        <div className="flex flex-row items-center gap-2 justify-center sm:justify-start">
                            <h1 className="text-2xl font-bold text-[var(--color-text)] transition-colors duration-300">
                                {user?.name}
                            </h1>
                            {/* Hover info tooltip */}
                            <div className="relative inline-block">
                                <button 
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                    onFocus={() => setShowTooltip(true)}
                                    onBlur={() => setShowTooltip(false)}
                                    className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors p-1 rounded-full hover:bg-[var(--color-surface2)] cursor-pointer flex items-center justify-center"
                                    aria-label="Joined Date Info"
                                >
                                    <Info size={16} />
                                </button>
                                {showTooltip && (
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-[var(--color-text)] text-[var(--color-bg)] text-xs text-center rounded-lg py-1 px-3.5 shadow-lg z-50 animate-fade-in font-semibold whitespace-nowrap">
                                        Joined {joinedDate}
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-text)]" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-[var(--color-text-muted)] mt-1 transition-colors duration-300 text-sm md:text-base">
                            {user?.email}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.05)] transition-colors duration-300">
                <Package className="text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]" /> Your Listings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] text-center py-12 shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
                    <p className="text-[var(--color-text-muted)] transition-colors duration-300">You haven't listed any items yet.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
