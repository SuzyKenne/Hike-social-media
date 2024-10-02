
function SuggestedPageList() {
  return (
    <div>
        <h3 className="text-sm font-semibold mb-2">PAGES YOU LIKE</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-400 hover:text-[#ffd37d]">
              <img src="/imagees/girl.jpg" alt="World of Mountains" className="w-6 h-6 rounded mr-2" />
              World of Mountains
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-400 hover:text-[#ffd37d]">
              <img src="/imagees/girl.jpg" alt="Mountain Life" className="w-6 h-6 rounded mr-2" />
              Mountain Life
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-gray-400 hover:text-[#ffd37d]">
              <img src="/imagees/girl.jpg" alt="Mountains Calling in P..." className="w-6 h-6 rounded mr-2" />
              Mountains Calling in P...
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-[#ffd37d]">
              <img src="/imagees/girl.jpg" alt="Mountaineering" className="w-6 h-6 rounded mr-2" />
              Mountaineering
            </a>
          </li>
        </ul>
    </div>
  )
}

export default SuggestedPageList
