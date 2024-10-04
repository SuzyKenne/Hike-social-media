import {
  HomeIcon,
  UsersIcon,
  MapIcon,
  VideoCameraIcon,
  PhotoIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';
import SuggestedPageList from './SuggestedPageList';

function NavLinkList() {
  return (
    <div className="bg-[#232323] p-3 rounded-md">
      <nav className="mb-6">
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-[#ffd37d]"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Feed
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-[#ffd37d]"
            >
              <UsersIcon className="h-5 w-5 mr-2" />
              Friends
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-[#ffd37d]">
              <MapPinIcon className="h-5 w-5 mr-2" />
              Hikes
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-[#ffd37d]"
            >
              <VideoCameraIcon className="h-5 w-5 mr-2" />
              Videos
            </a>
          </li>
          <li className="mb-2  flex justify-between">
            <a
              href="#"
              className="flex items-center text-gray-400  hover:text-[#ffd37d]"
            >
              <PhotoIcon className="h-5 w-5 mr-2" />
              Photos
            </a>
            <span className="bg-red-500 text-white w-5 h-5 text-[12px]  rounded-full">
              +2
            </span>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-400 hover:text-[#ffd37d]"
            >
              <MapIcon className="h-5 w-5 mr-2" />
              Map
            </a>
          </li>
        </ul>
      </nav>
      <SuggestedPageList />
    </div>
  );
}

export default NavLinkList;
