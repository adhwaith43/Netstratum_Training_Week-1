import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({children}){

const { isAuthenticated, loginWithRedirect } = useAuth0();

if(!isAuthenticated){

loginWithRedirect();

return null;

}

return children;

}

export default ProtectedRoute;