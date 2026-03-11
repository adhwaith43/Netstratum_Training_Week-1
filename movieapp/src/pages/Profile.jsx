import { useAuth0 } from "@auth0/auth0-react";

function Profile(){

const { user, isAuthenticated } = useAuth0();

if(!isAuthenticated){

return <p>Please login</p>

}

return(

<div style={{padding:"40px"}}>

<h1>Profile</h1>

<img src={user.picture} width="120"/>

<p>{user.name}</p>

<p>{user.email}</p>

</div>

)

}

export default Profile;