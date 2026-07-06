import React from 'react';
import { Upload, DollarSign } from 'lucide-react';

const PostItem = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-10 text-center tracking-tight">Sell Your Item</h1>

            <div className="bg-[var(--color-surface)] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-none border border-[var(--color-border)] p-8 md:p-10 transition-all duration-300">
                <form className="space-y-8">
                    {/* Section 1: Basic Info */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">Basic Info</h2>
                        
                        <div>
                            <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Item Title</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                placeholder="e.g. Calculus Textbook, 8th Ed."
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Product Images</label>
                            <div className="border-2 border-dashed border-[var(--color-border)] hover:border-accent-neon hover:bg-[#DCFCE7]/40 dark:hover:bg-accent-neon/5 rounded-2xl p-10 text-center cursor-pointer group transition-all duration-300">
                                <div className="w-14 h-14 bg-accent-neon/10 text-accent-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Upload size={28} />
                                </div>
                                <p className="font-bold text-[var(--color-text)] text-lg">Upload Product Images</p>
                                <p className="text-sm text-[var(--color-text-muted)] mt-1">Drag & drop or click to browse (SVG, PNG, JPG)</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Pricing */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">Pricing Details</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Price</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="text-[var(--color-text-muted)] group-focus-within/input:text-accent-neon transition-colors font-medium">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        className="w-full pl-9 pr-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Listing Type</label>
                                <select className="w-full px-4 py-3.5 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300 appearance-none">
                                    <option value="sale">For Sale</option>
                                    <option value="rent">For Rent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Description */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">Description</h2>
                        
                        <div>
                            <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Item Details</label>
                            <textarea
                                rows="6"
                                className="w-full px-4 py-4 bg-[#F9FAFB] dark:bg-[var(--color-surface2)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-accent-neon focus:ring-4 focus:ring-accent-neon/10 transition-all duration-300 resize-none leading-relaxed"
                                placeholder="Describe your item in detail... (condition, features, reason for selling)"
                            ></textarea>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            className="w-full h-14 bg-gradient-to-r from-accent-neon to-accent-hover text-white rounded-xl font-bold text-lg shadow-[0_8px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_10px_25px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:scale-[1.02] flex justify-center items-center"
                        >
                            Publish Listing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostItem;
