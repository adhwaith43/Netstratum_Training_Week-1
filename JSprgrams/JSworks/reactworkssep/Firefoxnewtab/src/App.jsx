import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Shortcuts from "./components/Shortcuts"
import StoryGrid from "./components/StoryGrid"
import CustomizePanel from "./components/CustomizePanel"
import CustomizeButton from "./components/CustomizeButton"

function App() {

const [panelOpen,setPanelOpen] = useState(false)

/* wallpaper */
const [wallpaper,setWallpaper] = useState(()=>{
return localStorage.getItem("wallpaper") || ""
})

/* shortcuts toggle */
const [showShortcuts,setShowShortcuts] = useState(true)

/* shortcut rows */
const [shortcutRows,setShortcutRows] = useState(1)

/* stories toggle */
const [showStories,setShowStories] = useState(true)

const [search,setSearch] = useState("")


/* store wallpaper */
useEffect(()=>{
localStorage.setItem("wallpaper", wallpaper)
},[wallpaper])


return (

<div
className="bg-[#2b2a33] text-white min-h-screen bg-cover bg-center"
style={{backgroundImage: wallpaper ? `url(${wallpaper})` : ""}}
>

<Header/>

<div className="max-w-[1150px] mx-auto px-6 pb-20">

<SearchBar search={search} setSearch={setSearch}/>

{/* shortcuts */}

{showShortcuts && (
<Shortcuts rows={shortcutRows}/>
)}

{/* stories */}

{showStories && (
<>
<h2 className="mt-10 mb-4 text-lg font-semibold">
Thought-provoking stories
</h2>

<StoryGrid search={search}/>

</>
)}

</div>


{/* customize button */}

<CustomizeButton
open={panelOpen}
setOpen={setPanelOpen}
/>


{/* customize panel */}

<CustomizePanel
open={panelOpen}
setOpen={setPanelOpen}
setWallpaper={setWallpaper}
showShortcuts={showShortcuts}
setShowShortcuts={setShowShortcuts}
shortcutRows={shortcutRows}
setShortcutRows={setShortcutRows}
showStories={showStories}
setShowStories={setShowStories}
/>


</div>

)

}

export default App