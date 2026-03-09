function StoryCard({story}){

return(

<div className="bg-[#3a3945] rounded-xl overflow-hidden hover:scale-[1.02] transition duration-200 cursor-pointer">
<img
src={story.image}
alt={story.title}
className="w-full h-40 object-cover"
/>

<div className="p-4">

<h3 className="text-sm font-medium mb-2">
{story.title}
</h3>

<p className="text-xs text-gray-400">
{story.source}
</p>

</div>

</div>

)

}

export default StoryCard