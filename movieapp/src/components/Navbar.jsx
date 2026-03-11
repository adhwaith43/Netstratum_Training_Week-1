import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // <-- Import i18n hook

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // <-- Init i18n

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>
          CINEVAULT
        </Link>
        {/* New Navigation Links */}
        <div style={{ display: 'flex', gap: '15px', display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <Link to="/" style={{ fontWeight: '500' }}>{t('home')}</Link>
          <Link to="/" style={{ fontWeight: '500' }}>{t('tvShows')}</Link>
          <Link to="/" style={{ fontWeight: '500' }}>{t('movies')}</Link>
        </div>
      </div>
      
      <div className="nav-links">
        <div className="search-container">
          <FaSearch 
            size={20} 
            style={{ cursor: 'pointer', marginRight: showSearch ? '10px' : '0' }} 
            onClick={() => setShowSearch(!showSearch)} 
          />
          <AnimatePresence>
            {showSearch && (
              <motion.form 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '200px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
              >
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder={t('searchPlaceholder')} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Language Selector */}
        <select className="lang-select" onChange={changeLanguage} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>

        {isAuthenticated ? (
          <>
            <Link to="/favorites" style={{ fontWeight: 'bold' }}>{t('favorites')}</Link>
            <Link to="/profile">
              <img src={user.picture} alt={user.name} style={{ width: 35, borderRadius: '50%', border: '2px solid white' }} />
            </Link>
            <button className="btn-secondary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>{t('logout')}</button>
          </>
        ) : (
          <button className="btn-primary" onClick={() => loginWithRedirect()}>{t('signIn')}</button>
        )}
      </div>
    </nav>
  );
}