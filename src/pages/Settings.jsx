import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Palette, User, Mail, Sun, Moon, Check, AlertCircle, Edit, ArrowRight } from 'lucide-react';

const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=200';

const Settings = () => {
    const { user, updateUserProfile } = useAuth();
    const { isDark, setIsDark } = useTheme();
    
    // States for expanding sub-sections or editing inline
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    
    // Profile form state
    const [name, setName] = useState(user?.name || '');
    const [avatar, setAvatar] = useState(user?.avatar || '');
    const [profileSuccess, setProfileSuccess] = useState(false);
    
    // Email form state
    const [email, setEmail] = useState(user?.email || '');
    const [emailFeedback, setEmailFeedback] = useState('');

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(name, avatar);
        setProfileSuccess(true);
        setIsEditingProfile(false);
        setTimeout(() => setProfileSuccess(false), 3000);
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        setEmailFeedback("Email change functionality is not active in this prototype.");
        setTimeout(() => setEmailFeedback(''), 4000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 w-full flex-grow">
            <h1 className="text-3xl font-bold text-[var(--color-text)] font-outfit mb-8 drop-shadow-[0_0_5px_rgba(255,255,255,0.05)]">
                Settings
            </h1>

            <div className="space-y-6">
                {/* 1. Theme Selection Option (Buttons) */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300">
                    <h2 className="text-lg font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <Palette size={20} className="text-[var(--color-accent)]" /> Change Appearance
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4">Toggle between light and dark modes instantly.</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setIsDark(false)}
                            className={`flex-1 py-3 px-4 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2
                                ₹{!isDark 
                                    ? 'bg-[var(--color-accent)] text-white border-transparent shadow-btn' 
                                    : 'bg-[var(--color-surface2)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-text-muted)]'}`}
                        >
                            <Sun size={16} /> Light Mode
                        </button>
                        <button 
                            onClick={() => setIsDark(true)}
                            className={`flex-1 py-3 px-4 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2
                                ₹{isDark 
                                    ? 'bg-[var(--color-accent)] text-white border-transparent shadow-btn' 
                                    : 'bg-[var(--color-surface2)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-text-muted)]'}`}
                        >
                            <Moon size={16} /> Dark Mode
                        </button>
                    </div>
                </div>

                {/* 2. Edit Profile Option */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300">
                    <h2 className="text-lg font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <User size={20} className="text-[var(--color-accent)]" /> Edit User Profile
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4">Modify your public name and display picture URL.</p>
                    
                    {profileSuccess && (
                        <div className="p-3.5 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm rounded-xl flex items-center gap-2.5 mb-4 animate-fade-in">
                            <Check size={18} />
                            <span>Profile details updated successfully!</span>
                        </div>
                    )}

                    {!isEditingProfile ? (
                        <button 
                            onClick={() => {
                                setName(user?.name || '');
                                setAvatar(user?.avatar || '');
                                setIsEditingProfile(true);
                            }}
                            className="w-full py-3 px-4 bg-[var(--color-surface2)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] text-[var(--color-text)] border border-[var(--color-border)] rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                        >
                            <Edit size={16} /> Edit Display Name & Photo
                        </button>
                    ) : (
                        <form onSubmit={handleProfileSubmit} className="space-y-4 pt-2 border-t border-[var(--color-border)] animate-fade-in">
                            <div className="flex items-center gap-4 pb-2">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-surface2)] p-1 border border-[var(--color-border)] overflow-hidden">
                                    <img 
                                        src={avatar || DEFAULT_AVATAR} 
                                        alt="Preview" 
                                        className="w-full h-full rounded-full object-cover"
                                        onError={(e) => { e.target.src = DEFAULT_AVATAR; }}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--color-text-muted)]">Image URL preview updates live.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-1">
                                <label className="block text-xs font-semibold text-[var(--color-text)]">Display Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Jane Doe"
                                    className="w-full px-4 py-2.5 bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all text-sm"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label className="block text-xs font-semibold text-[var(--color-text)]">Profile Picture URL</label>
                                <input 
                                    type="text" 
                                    value={avatar}
                                    onChange={(e) => setAvatar(e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                    className="w-full px-4 py-2.5 bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all text-sm font-mono"
                                />
                            </div>
                            
                            <div className="flex gap-2 justify-end pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setIsEditingProfile(false)}
                                    className="px-4 py-2 text-xs font-bold text-[var(--color-text-muted)] bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    disabled={!name.trim()}
                                    className="px-4 py-2 text-xs font-bold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-lg shadow-btn transition-all"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* 3. Change Email Address Option */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300">
                    <h2 className="text-lg font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                        <Mail size={20} className="text-[var(--color-accent)]" /> Change Email Address
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4">View or request a change for your account email.</p>
                    
                    {emailFeedback && (
                        <div className="p-3.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-sm rounded-xl flex items-center gap-2.5 mb-4 animate-fade-in">
                            <AlertCircle size={18} />
                            <span>{emailFeedback}</span>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            disabled
                            value={email}
                            className="flex-grow px-4 py-3 bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-muted)] select-none opacity-80 text-sm"
                        />
                        <button 
                            onClick={handleEmailClick}
                            className="py-3 px-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold rounded-xl text-sm transition-all shadow-btn"
                        >
                            Change Email Address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
