import NavLinkList from "./NavLinkList";

function ProfileSideBar() {
  return (
    <div className="w-64 bg-[#131415] text-[#d9e4ed] h-screen p-4 flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <img src="/imagees/girl.jpg" alt="User avatar" className="w-24 h-24 rounded-full mb-2" />
        <h2 className="text-lg font-semibold">Alexis Wells</h2>
        <p className="text-sm text-gray-400">@wellsalex</p>
        <div className="flex justify-between w-full mt-4 bg-[#232323] p-3 rounded-2xl" >
          <div className="text-center">
            <p className="font-semibold">4.6k</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">4.6k</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">4.6k</p>
            <p className="text-xs text-gray-400">Event</p>
          </div>
        </div>
      </div>
      <NavLinkList />
    </div>
  )
}

export default ProfileSideBar;
