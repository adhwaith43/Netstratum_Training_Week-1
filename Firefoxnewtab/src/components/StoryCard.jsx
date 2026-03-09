function StoryCard({story}){

return(

<div className="rounded-xl overflow-hidden bg-[#3a3945] hover:scale-[1.02] transition hover:cursor-pointer">

<div className="h-40 w-full overflow-hidden ">
<img
src={story.image_url || "https://picsum.photos/400/200"}
alt={story.title}
className="w-full h-full object-cover"
onError={(e)=>{
e.target.src="https://picsum.photos/400/200"
}}
/>
</div>

<div className="p-4">

<a
href={story.url}
target="_blank"
rel="noopener noreferrer"
className="text-sm font-medium hover:underline block"
>
{story.title}
</a>

<p className="text-xs text-gray-400 mt-2">
{story.news_site}
</p>

</div>

</div>

)

}

export default StoryCard