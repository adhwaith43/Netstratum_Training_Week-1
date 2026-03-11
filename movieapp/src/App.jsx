import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Import Footer
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProtectedRoute from './auth/ProtectedRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh' }}> {/* Ensure content pushes footer down */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="/favorites" element={<ProtectedRoute component={Favorites} />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer /> {/* <-- Add Footer here */}
    </>
  );
}