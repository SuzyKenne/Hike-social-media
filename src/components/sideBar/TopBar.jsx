import {
  PencilSquareIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
} from '@heroicons/react/16/solid';
const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-[#232323] text-[#d9e4ed]">
      <div className="flex items-center">
        <div className="bg-[#ffd37d] rounded-lg p-2 mr-4">
          <PencilSquareIcon className="h-5 w-5 mr-2 text-[#232323]" />
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
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
        <BellIcon className="h-5 w-5 mr-2" />
        <Cog6ToothIcon className="h-5 w-5 mr-2" />
        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
          <img
            src="/imagees/girl.jpg"
            alt="User avatar"
            className="w-14 h-14 rounded-sm m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
