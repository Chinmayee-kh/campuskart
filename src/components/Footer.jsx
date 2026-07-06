import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../public/campuskartlogo.PNG';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-14 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 mb-12">

                    {/* Brand column */}
                    <div className="flex flex-col">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <img src={logo} alt="CampusKart Logo" className="h-9 object-contain group-hover:scale-105 transition-transform rounded-lg" />
                            <span className="font-bold text-lg tracking-tight text-[var(--color-text)] font-outfit">
                                Campus<span className="text-[var(--color-accent)]">Kart</span>
                            </span>
                        </Link>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 max-w-sm">
                            The #1 peer-to-peer marketplace for students. Buy, sell & rent within your campus network.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-2">
                            <a href="https://www.instagram.com/_campus.kart_?igsh=MTlrMHdvbXJ0ZWg2bg==" target="_blank" rel="noopener noreferrer"
                               className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-200">
                                <Instagram size={16} />
                            </a>
                            <a href="https://github.com/Akshatsah04/campuskart" target="_blank" rel="noopener noreferrer"
                               className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-200">
                                <Github size={16} />
                            </a>
                            <button
                                onClick={(e) => {
                                    navigator.clipboard.writeText("9060926686");
                                    const btn = e.currentTarget;
                                    const span = document.createElement('span');
                                    span.textContent = 'Copied!';
                                    span.style.cssText = 'position:absolute;top:-32px;left:50%;transform:translateX(-50%);background:var(--color-accent);color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none;';
                                    btn.style.position = 'relative';
                                    btn.appendChild(span);
                                    setTimeout(() => span.remove(), 1800);
                                }}
                                title="Copy Phone Number"
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-200 cursor-pointer outline-none relative"
                            >
                                <Phone size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-col md:items-end">
                        <div className="w-full md:max-w-xs">
                            <h4 className="font-bold text-[var(--color-text)] mb-5 text-sm tracking-wide uppercase">Contact Us</h4>
                            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
                                <li className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Mail size={13} className="text-[var(--color-accent)]" />
                                    </div>
                                    <span className="font-medium">hello@campuskart.in</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Phone size={13} className="text-[var(--color-accent)]" />
                                    </div>
                                    <span className="font-medium">+91 90609 26686</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin size={13} className="text-[var(--color-accent)]" />
                                    </div>
                                    <span className="font-medium leading-relaxed">Your Campus, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-7 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-[var(--color-text-muted)]">
                        © {new Date().getFullYear()} Campus<strong>Kart</strong>. All rights reserved.
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                        Made with ❤️ for students
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
