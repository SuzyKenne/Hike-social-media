import { useState } from "react";
import NewSection from "./NewSection";


function FollowSuggestions({ expandedButton = "View less", collapseButton = "View more", expanded = false }) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  
  const followers = [
   
   {
      id: 1,
      userName: 'Suzy Kenne',
      photo: "https://media.istockphoto.com/id/1309250045/photo/lifestyle-portrait-of-attractive-brunette-woman-with-cup-of-coffee-walking-at-the-street.webp?a=1&s=612x612&w=0&k=20&c=HltkSu1fCUsbxg2o3rYyPYpAnZMR8pw40j4aZTXtp58="
    },
    {
      id: 2,
      userName: 'Amah Laurel',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_Ihzl6MQvaOe4ENwKcYm6_pGMmdhoi1g_w&s"
    },
    {
      id: 3,
      userName: 'Nkwi Cyril',
      photo: "data:image/jpeg;base64,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"
    },
  ];

  

  return (
    <div className="w-64 bg-[#232323] text-[#d9e4ed] p-4 m-6 rounded-2xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Who to follow</h3>
        {isExpanded ? (
          <ul>
            {followers.map((user) => (
              <li key={user.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={user.photo} alt={user.userName} className="w-8 h-8 rounded-full mr-2 border border-[#2975d8]" />
                  <div>
                    <p className="font-semibold">{user.userName}</p>
                    <p className="text-xs text-gray-400">@{user.userName.toLowerCase().replace(' ', '')}</p>
                  </div>
                </div>
                <button className="bg-[#131415] text-[#ffd37d] px-3 py-1 justify-center flex rounded-full text-sm hover:bg-[#ffd37d] hover:text-[#131415] border border-[#323539] hover:border-[#131415]">
                  Follow
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {/* Add a temporary ID for each user here since the array doesn't have ID properties */}
            {['Suzy Kenne', 'Amah Laurel', 'Cyril Nkwi', 'Mesueh Christian'].map((userName, index) => (
              <li key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={followers[0].photo} alt={userName} className="w-8 h-8 rounded-full mr-2 border border-[#2975d8]" />
                  <div>
                    <p className="font-semibold">{userName}</p>
                    <p className="text-xs text-gray-400">@{userName.toLowerCase().replace(' ', '')}</p>
                  </div>
                </div>
                <button className="bg-[#131415] text-[#ffd37d] px-3 py-1 justify-center flex rounded-full text-sm hover:bg-[#ffd37d] hover:text-[#131415] border border-[#323539] hover:border-[#131415]">
                  Follow
                </button>
              </li>
            ))}
          </ul>
        )}

        <button onClick={() => setIsExpanded((exp) => !exp)} className="text-[#ffd37d] text-sm justify-center flex hover:underline">
          {isExpanded ? collapseButton : expandedButton}
        </button>
      </div>
      <NewSection />
    </div>
  );
}

export default FollowSuggestions;
