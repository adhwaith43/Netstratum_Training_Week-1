function Toggle({enabled,setEnabled}){

return(

<div
onClick={()=>setEnabled(!enabled)}
className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
enabled ? "bg-cyan-400" : "bg-gray-500"
}`}
>

<div
className={`bg-white w-4 h-4 rounded-full transform duration-200 ${
enabled ? "translate-x-5" : ""
}`}
/>

</div>

)

}

export default Toggle