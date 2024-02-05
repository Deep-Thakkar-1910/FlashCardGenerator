const FlashcardComponent= () => {
  return (
  
< div className= "sm:w-72 w-full md:w-80 lg:w-80 mx-auto sm:mx-0 bg-white border border-gray-300 shadow-sm rounded-md p-5 pt-8 flex flex-col justify-between m-10 relative z-0">


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Location_dot_lightgrey.svg/640px-Location_dot_lightgrey.svg.png" alt="" className="w-14 h-14 min-w-max object-cover aspect-square rounded-full absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] "/>


<h1 className="font-black text-center m-4">Web3</h1>

<p >Take a tour of our Full Stack Data Science Course to learn about curriculum.. </p>

<p className="font-semibold text-center m-4">9 Cards</p>

<button className=  "p-1 rounded-md text-red-500 text-xl transition-all bg-red-100 hover:bg-red-200 active:bg-red-300">View Cards</button>
</div>




)
}
export default FlashcardComponent ;