import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../components/Loader';

const ProtectedRoute = ({ component: Component }) => {
  const Protected = withAuthenticationRequired(Component, {
    onRedirecting: () => <Loader />,
  });
  return <Protected />;
};

export default ProtectedRoute;