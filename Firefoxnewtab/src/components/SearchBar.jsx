function SearchBar({search,setSearch}){

return(

<div className="flex justify-center mb-10">

<div className="flex items-center bg-[#3a3945]/80 rounded-lg px-4 py-3 w-[582px]">

<img
src="https://www.google.com/favicon.ico"
className="w-5 h-5 mr-3"
/>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search with Google or enter address"
className="bg-transparent outline-none w-full"
/>

</div>

</div>

)

}

export default SearchBar