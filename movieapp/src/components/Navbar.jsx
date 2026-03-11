import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>
        CINEVAULT
      </Link>
      
      <div className="nav-links">
        <Link to="/" style={{ fontWeight: '500' }}>{t('home')}</Link>
        <Link to="/search" style={{ fontWeight: '500' }}>Search</Link>

        {/* Language Selector */}
        <select className="lang-select" onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
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