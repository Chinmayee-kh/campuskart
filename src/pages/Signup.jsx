import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, ArrowRight, AlertCircle, CheckCircle2, GraduationCap, Hash } from 'lucide-react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [year, setYear] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            await signup(name, email, password, year, registrationNumber);
            setSuccess('Account created successfully! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const isFormValid = name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && year.trim() !== '' && registrationNumber.trim() !== '';

    return (
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-gradient)] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-md w-full space-y-8 bg-[var(--color-surface)] p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-none border border-[var(--color-border)] relative z-10 transition-all duration-300">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-[var(--color-text)] tracking-tight">
                        Create an account
                    </h2>
                    <p className="mt-3 text-center text-sm text-[var(--color-text-muted)]">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-accent-neon hover:text-accent-hover transition-colors">
                            Sign in here
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm flex items-center gap-2 animate-fade-in">
                            <AlertCircle size={16} /> <span>{error}</span>
                        </div>
                    )}
                    {success && (
                        <div className="p-3 bg-green-500/10 border border-green-500/50 rounded-xl text-green-600 dark:text-green-400 text-sm flex items-center gap-2 animate-fade-in">
                            <CheckCircle2 size={16} /> <span>{success}</span>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Full Name</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User size={18} className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Email address</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                    placeholder="you@university.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Year of College</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <GraduationCap size={18} className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors" />
                                    </div>
                                    <select
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300 appearance-none"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        disabled={loading}
                                    >
                                        <option value="" disabled>Select Year</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                        <option value="5th Year">5th Year+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Registration No.</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Hash size={18} className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                        placeholder="e.g. 21BCE0000"
                                        value={registrationNumber}
                                        onChange={(e) => setRegistrationNumber(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Password</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={!isFormValid || loading}
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-accent-neon to-accent-hover hover:from-accent-neon hover:to-[#22C55E] focus:outline-none focus:ring-4 focus:ring-accent-neon/30 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_10px_25px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Processing...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
