import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>
          CINEVAULT
        </Link>
        <div style={{ display: 'flex', gap: '15px', display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <Link to="/" style={{ fontWeight: '500' }}>{t('home')}</Link>
          <Link to="/search?type=tv" style={{ fontWeight: '500' }}>{t('tvShows')}</Link>
          <Link to="/search?type=movie" style={{ fontWeight: '500' }}>{t('movies')}</Link>
        </div>
      </div>
      
      <div className="nav-links">
        <FaSearch size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/search')} />

        <select className="lang-select" onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="hi">हिंदी</option>
          <option value="ml">മലയാളം</option>
        </select>

        {isAuthenticated ? (
          <>
            <Link to="/favorites" style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>{t('favorites')}</Link>
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