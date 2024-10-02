import NewSection from "./NewSection";


function FollowSuggestions() {
  return (
    <div className="w-64  bg-[#232323] text-[#d9e4ed]  p-4 m-6 rounded-2xl  ">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Who to follow</h3>
        <ul>
          {['Scarlett Floyd', 'Rohan Mckenzie', 'Bibi Shelton', 'Beatrice Cox', 'Fletcher Morse'].map((name, index) => 
          (
            <li key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={`/imagees/girl.jpg`} alt={name} className="w-8 h-8 rounded-full mr-2 border border-[#2975d8]" />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-xs text-gray-400">@{name.toLowerCase().replace(' ', '')}</p>
                </div>
              </div>
              <button className="bg-[#131415] text-[#ffd37d] px-3 py-1 justify-center flex rounded-full text-sm hover:bg-[#ffd37d] hover:text-[#131415] border border-[#323539] hover:border-[#131415]">
                Follow
              </button>
            </li>
          ))
          }
        </ul>
        <a href="#" className="text-[#ffd37d]  text-sm justify-center flex hover:underline">View more</a>
      </div>
      <NewSection />
    </div>
  )
}

export default FollowSuggestions
