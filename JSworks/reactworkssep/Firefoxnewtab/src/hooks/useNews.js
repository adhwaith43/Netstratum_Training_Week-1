import { useEffect,useState } from "react"

function useNews(){

const [stories,setStories] = useState([])

useEffect(()=>{

fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=24")
.then(res=>res.json())
.then(data=>setStories(data.results))

},[])

return stories

}

export default useNews