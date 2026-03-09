import { Pencil } from "lucide-react"

function CustomizeButton({open,setOpen}){

return(

<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 bg-[#3a3945] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#444]"
>

<Pencil size={18}/>

</button>

)

}

export default CustomizeButton