import useNews from "../hooks/useNews"
import StoryCard from "./StoryCard"

function StoryGrid({search}){

const stories = useNews()

const filteredStories = stories.filter((story)=>
story.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{filteredStories.map((story)=>(
<StoryCard key={story.id} story={story}/>
))}

</div>

)

}

export default StoryGrid