import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>
            CINEVAULT
          </Link>
          <div style={{ gap: '15px', display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            {/* These links now act as powerful filters for the Search page */}
            <Link to="/search?type=tv" style={{ fontWeight: '500' }}>{t('tvShows')}</Link>
            <Link to="/search?type=movie" style={{ fontWeight: '500' }}>{t('movies')}</Link>
          </div>
        </div>
        
        <div className="nav-links">
          {/* Default Search Icon routes to 'all' */}
          <FaSearch size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/search?type=all')} />
          
          <button onClick={toggleTheme} style={{ background: 'transparent', color: 'var(--text-color)', fontSize: '1.2rem', padding: '0 5px' }}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <select className="lang-select" onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिंदी</option>
            <option value="ml">മലയാളം</option>
          </select>

          {isAuthenticated ? (
            <>
              <Link to="/favorites" style={{ fontWeight: 'bold', display: window.innerWidth > 768 ? 'block' : 'none' }}>{t('favorites')}</Link>
              <Link to="/profile">
                <img src={user.picture} alt={user.name} style={{ width: 35, borderRadius: '50%', border: '2px solid var(--text-color)' }} />
              </Link>
              <button className="btn-secondary" onClick={() => setShowLogoutModal(true)}>{t('logout')}</button>
            </>
          ) : (
            <button className="btn-primary" onClick={() => loginWithRedirect()}>{t('signIn')}</button>
          )}
        </div>
      </nav>

      {/* Logout Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} style={{ background: 'var(--bg-color)', padding: '40px', borderRadius: '8px', border: '1px solid #555', textAlign: 'center', maxWidth: '400px' }}>
              <h2 style={{ marginBottom: '10px' }}>Ready to leave?</h2>
              <p style={{ color: '#888', marginBottom: '30px' }}>You will be securely signed out of Cinevault.</p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button className="btn-secondary" onClick={() => setShowLogoutModal(false)}>Cancel</button>
                <button className="btn-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}