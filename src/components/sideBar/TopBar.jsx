
const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-[#232323] text-[#d9e4ed]">
      <div className="flex items-center">
        <div className="bg-[#ffd37d] rounded-lg p-2 mr-4">
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className="h-6 w-6 cursor-pointer hover:text-[#ffd37d]" fill="none"  stroke="currentColor"
          >
            <path 
            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 
            33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 
            33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 
            6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 
            8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 
            23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 
            28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 
            103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 
            88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0
            112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 
            17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#323539] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd37d]"
        />
      </div>
      <div className="flex space-x-4">
        <button className="hover:text-[#ffd37d]">Search</button>
        <button className="hover:text-[#ffd37d]">Pages</button>
        <button className="hover:text-[#ffd37d]">My Network</button>
        <button className="hover:text-[#ffd37d]">Account</button>
      </div>
      <div className="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-[#ffd37d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-[#ffd37d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
         <img src="/imagees/girl.jpg" alt="User avatar" className="w-14 h-14 rounded-sm m-2" />
        </div>
      </div>
    </div>
  )
}

export default TopBar;
