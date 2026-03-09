import { useRef, useEffect } from "react"
import WallpaperOptions from "./WallpaperOptions"

function CustomizePanel({
open,
setOpen,
setWallpaper,
showShortcuts,
setShowShortcuts,
shortcutRows,
setShortcutRows,
showStories,
setShowStories
}){

const panelRef = useRef()

useEffect(()=>{

function handleClick(e){

if(panelRef.current && !panelRef.current.contains(e.target)){
setOpen(false)
}

}

document.addEventListener("mousedown",handleClick)

return ()=>document.removeEventListener("mousedown",handleClick)

},[])

if(!open) return null

return(

<div className="fixed inset-0 bg-black/20 flex justify-end z-50">
<div
ref={panelRef}
className="w-[432px] bg-[#3a3945] h-full p-6 overflow-y-auto firefox-panel"
>

{/* Header */}
<div className="flex flex-col items-end mb-3">
<button onClick={()=>setOpen(false)}>✕</button>
</div>


<div className="flex justify-between items-start mb-6">


<h2 className="text-s font-semibold">Wallpapers</h2>

<div className="flex flex-col items-end">


<button
onClick={()=>{
setWallpaper("")
localStorage.removeItem("wallpaper")
}}
className="text-xs text-cyan-400 hover:underline"
>
Reset to default
</button>

</div>

</div>

{/* Wallpaper options */}

<WallpaperOptions setWallpaper={setWallpaper}/>

<hr className="my-6 border-gray-600"/>

{/* Shortcuts */}

<div className="flex justify-between items-center mb-2">

<div>

<p className="text-sm font-medium">
Shortcuts
</p>

<p className="text-xs text-gray-400">
Sites you save or visit
</p>

</div>

{/* Toggle */}

<button
onClick={()=>setShowShortcuts(!showShortcuts)}
className={`w-10 h-5 rounded-full flex items-center px-1 transition ${
showShortcuts ? "bg-cyan-400" : "bg-gray-500"
}`}
>

<div
className={`bg-white w-4 h-4 rounded-full transition ${
showShortcuts ? "translate-x-5" : ""
}`}
></div>

</button>

</div>

{/* Row selector */}

<select
value={shortcutRows}
onChange={(e)=>setShortcutRows(Number(e.target.value))}
className="bg-[#2b2a33] text-sm px-2 py-1 rounded mb-6 mt-2 "
>

<option value={1}>1 row</option>
<option value={2}>2 rows</option>
<option value={3}>3 rows</option>
<option value={4}>4 rows</option>

</select>

<hr className="my-6 border-gray-600"/>

{/* Recommended stories */}

<div className="flex justify-between items-center">

<div>

<p className="text-sm font-medium">
Recommended stories
</p>

<p className="text-xs text-gray-400">
Exceptional content curated by the Firefox family
</p>

</div>

<button
onClick={()=>setShowStories(!showStories)}
className={`w-10 h-5 rounded-full flex items-center px-1 transition ${
showStories ? "bg-cyan-400" : "bg-gray-500"
}`}
>

<div
className={`bg-white w-4 h-4 rounded-full transition ${
showStories ? "translate-x-5" : ""
}`}
></div>

</button>

</div>

{/* Footer link */}

<div className="mt-8">

<a
href="#"
className="text-sm text-cyan-400 flex items-center gap-2 hover:underline"
>

⚙ Manage more settings

</a>

</div>

</div>

</div>

)

}

export default CustomizePanel