import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
  const { user } = useAuth0();
  
  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <img src={user.picture} alt={user.name} style={{ width: 150, borderRadius: '50%', marginBottom: '20px' }} />
      <h2>{user.name}</h2>
      <p style={{ color: '#aaa' }}>{user.email}</p>
    </div>
  );
}