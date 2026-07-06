import React, { createContext, useContext, useState, useEffect } from 'react';

// NOTE: This is a frontend-only mock authentication system.
// Passwords are stored in plaintext for demo purposes.
// In production, use backend authentication with password hashing (bcrypt).

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Sync state with localStorage on app load
        const storedUser = localStorage.getItem("currentUser");
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

        if (storedUser && storedIsLoggedIn === "true") {
            try {
                setUser(JSON.parse(storedUser));
                setIsLoggedIn(true);
            } catch (e) {
                console.error("Failed to parse stored user", e);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem("users")) || [];
                const foundUser = users.find(u => u.email === email && u.password === password);

                if (foundUser) {
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("currentUser", JSON.stringify(foundUser));
                    setUser(foundUser);
                    setIsLoggedIn(true);
                    resolve({ success: true, user: foundUser });
                } else {
                    reject({ success: false, message: "Invalid email or password." });
                }
            }, 800); // Simulate network delay
        });
    };

    const signup = async (name, email, password, year, registrationNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem("users")) || [];
                
                if (users.find(u => u.email === email)) {
                    reject({ success: false, message: "Email already exists." });
                    return;
                }

                const newUser = { id: Date.now(), name, email, password, year, registrationNumber };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                
                resolve({ success: true });
            }, 800);
        });
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setUser(null);
        setIsLoggedIn(false);
    };

    const updateUserProfile = (name, avatar) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            const updatedUser = { ...currentUser, name, avatar };
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            setUser(updatedUser);

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const updatedUsers = users.map(u => u.email === currentUser.email ? { ...u, name, avatar } : u);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
    };

    const addToWishlist = (product) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            const wishlist = currentUser.wishlist || [];
            if (!wishlist.some(item => item.id === product.id)) {
                const updatedUser = { ...currentUser, wishlist: [...wishlist, product] };
                localStorage.setItem("currentUser", JSON.stringify(updatedUser));
                setUser(updatedUser);

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const updatedUsers = users.map(u => u.email === currentUser.email ? updatedUser : u);
                localStorage.setItem("users", JSON.stringify(updatedUsers));
            }
        }
    };

    const removeFromWishlist = (productId) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            const wishlist = currentUser.wishlist || [];
            const updatedWishlist = wishlist.filter(item => item.id !== productId);
            const updatedUser = { ...currentUser, wishlist: updatedWishlist };
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            setUser(updatedUser);

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const updatedUsers = users.map(u => u.email === currentUser.email ? updatedUser : u);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
    };

    const addToCart = (product) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            const cart = currentUser.cart || [];
            if (!cart.some(item => item.id === product.id)) {
                const updatedUser = { ...currentUser, cart: [...cart, product] };
                localStorage.setItem("currentUser", JSON.stringify(updatedUser));
                setUser(updatedUser);

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const updatedUsers = users.map(u => u.email === currentUser.email ? updatedUser : u);
                localStorage.setItem("users", JSON.stringify(updatedUsers));
            }
        }
    };

    const removeFromCart = (productId) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            const cart = currentUser.cart || [];
            const updatedCart = cart.filter(item => item.id !== productId);
            const updatedUser = { ...currentUser, cart: updatedCart };
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            setUser(updatedUser);

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const updatedUsers = users.map(u => u.email === currentUser.email ? updatedUser : u);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
    };

    if (loading) {
        return <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-accent-neon border-t-transparent rounded-full animate-spin"></div>
        </div>;
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            isLoggedIn, 
            login, 
            signup, 
            logout, 
            updateUserProfile, 
            addToWishlist, 
            removeFromWishlist, 
            addToCart, 
            removeFromCart 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
