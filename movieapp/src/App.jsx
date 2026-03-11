import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./auth/ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/details/:type/:id" element={<Details/>}/>

<Route path="/search/:query" element={<Search/>}/>

<Route path="/profile" element={<Profile/>}/>

<Route
path="/favorites"
element={
<ProtectedRoute>
<Favorites/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App;