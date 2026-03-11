import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold' }}>NETFLIX</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        {isAuthenticated ? (
          <>
            <Link to="/favorites">Favorites</Link>
            <Link to="/profile">
              <img src={user.picture} alt={user.name} style={{ width: 30, borderRadius: '50%' }} />
            </Link>
            <button className="btn-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
          </>
        ) : (
          <button className="btn-primary" onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </nav>
  );
}