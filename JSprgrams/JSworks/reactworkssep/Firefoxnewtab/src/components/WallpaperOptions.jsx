const wallpapers = [

{
name:"Abstract",
url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
},

{
name:"Solid",
url:"https://images.unsplash.com/photo-1557682250-33bd709cbe85"
},

{
name:"Photographs",
url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
},

{
name:"Firefox",
url:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
},

{
name:"Celestial",
url:"https://images.unsplash.com/photo-1503264116251-35a269479413"
}

]

function WallpaperOptions({setWallpaper}){

function uploadWallpaper(e){

const file = e.target.files[0]

if(file){

const url = URL.createObjectURL(file)

setWallpaper(url)

}

}

return(

<div className="grid grid-cols-3 gap-4 mb-6">

{wallpapers.map((w,i)=>(

<div
key={i}
onClick={()=>setWallpaper(w.url)}
className="cursor-pointer"
>

<img
src={w.url}
className="rounded-lg h-20 w-full object-cover"
/>

<p className="text-xs mt-1 text-center text-gray-300">
{w.name}
</p>

</div>

))}

<label className="border border-dashed border-gray-500 h-20 flex items-center justify-center rounded-lg cursor-pointer">

+

<input
type="file"
className="hidden"
onChange={uploadWallpaper}
/>

</label>

</div>

)

}

export default WallpaperOptions