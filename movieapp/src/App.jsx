import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
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
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/favorites" element={<ProtectedRoute component={Favorites} />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}