const shortcuts = [
{name:"Inbox",icon:"📧"},
{name:"Spotify",icon:"🎧"},
{name:"HRM Nest",icon:"📁"},
{name:"Course",icon:"📘"},
{name:"LeetCode",icon:"💻"},
{name:"Netstratum",icon:"⚙️"},
{name:"Youtube",icon:"▶️"},
{name:"ChatGPT",icon:"🤖"},
{name:"LinkedIn",icon:"🔗"},
{name:"Github",icon:"🐱"},
{name:"Docs",icon:"📄"},
{name:"Drive",icon:"☁️"},
{name:"Gmail",icon:"✉️"},
{name:"Calendar",icon:"📅"},
{name:"Maps",icon:"🗺️"},
{name:"News",icon:"📰"},
{name:"Reddit",icon:"👽"},
{name:"StackOverflow",icon:"💬"},
{name:"VSCode",icon:"🧑‍💻"},
{name:"Notion",icon:"📝"},
{name:"Twitter",icon:"🐦"},
{name:"Instagram",icon:"📷"},
{name:"Netflix",icon:"🎬"},
{name:"Amazon",icon:"📦"},
{name:"Spotify2",icon:"🎵"},
{name:"Coursera",icon:"🎓"},
{name:"Udemy",icon:"📚"},
{name:"Medium",icon:"✍️"},
{name:"Dev.to",icon:"👨‍💻"},
{name:"Wikipedia",icon:"📖"},
{name:"Google",icon:"🔍"},
{name:"Bing",icon:"🌐"}
]

function Shortcuts({rows}){

const visibleShortcuts = shortcuts.slice(0, rows * 8)

return(

<div className="grid grid-cols-8 gap-6 max-w-[680px] mx-auto mb-12">

{visibleShortcuts.map((s,i)=>(

<div key={i} className="flex flex-col items-center gap-1">

<div className="bg-[#3a3945] w-12 h-12 rounded-xl flex items-center justify-center hover:bg-[#444] transition">
{s.icon}
</div>

<p className="text-xs text-gray-300 text-center w-16 truncate">
{s.name}
</p>

</div>

))}

</div>

)

}

export default Shortcuts