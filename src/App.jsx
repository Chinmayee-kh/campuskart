import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import PostItem from './pages/PostItem';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <div className="min-h-screen flex flex-col transition-colors duration-300">
                    <Navbar />
                    <main className="flex-grow flex flex-col">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/market" element={<Marketplace />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/post-item" element={<ProtectedRoute><PostItem /></ProtectedRoute>} />
                            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                            <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
