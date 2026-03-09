import StoryCard from "./StoryCard"
import useNews from "../hooks/useNews"

function StoryGrid(){

const stories = useNews()

return(

<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

{stories.map((story)=> (

<StoryCard
key={story.id}
story={{
title:story.title,
source:story.news_site,
image:story.image_url
}}
/>

))}

</div>

)

}

export default StoryGrid