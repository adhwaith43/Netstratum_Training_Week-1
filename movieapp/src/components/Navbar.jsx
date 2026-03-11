import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

function Navbar(){

const [query,setQuery] = useState("");

const navigate = useNavigate();

const {
loginWithRedirect,
logout,
user,
isAuthenticated
} = useAuth0();

const handleSearch = (e)=>{

if(e.key === "Enter"){

navigate(`/search/${query}`);

}

}

return(

<nav className="navbar">

<Link to="/" className="logo">MOVIEBOX</Link>

<input
className="search"
placeholder="Search movies or TV"
onChange={(e)=>setQuery(e.target.value)}
onKeyDown={handleSearch}
/>

<div className="nav-right">

<Link to="/favorites">Favorites</Link>

{!isAuthenticated ? (

<button onClick={loginWithRedirect}>Login</button>

):(

<div className="profile">

<img src={user.picture}/>

<button
onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}
>
Logout
</button>

</div>

)}

</div>

</nav>

)

}

export default Navbar;