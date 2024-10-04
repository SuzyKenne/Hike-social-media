import {
  HomeIcon,
  UsersIcon,
  VideoCameraIcon,
  PhotoIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';

import SuggestedPageList from './SuggestedPageList';
import NavListComponent from '../../reusableComponent/NavListComponent';

function NavLinkList() {
  return (
    <div className="bg-[#232323] p-3 rounded-md">
      <nav className="mb-6">
        <ul>
          <NavListComponent
            label="Feed"
            icon={<HomeIcon className="h-5 w-5 mr-2" />}
          />
          <NavListComponent
            label="Friends"
            icon={<UsersIcon className="h-5 w-5 mr-2" />}
          />
          <NavListComponent
            label="Hikes"
            icon={<MapPinIcon className="h-5 w-5 mr-2" />}
          />
          <NavListComponent
            label="Videos"
            icon={<VideoCameraIcon className="h-5 w-5 mr-2" />}
          />
          <NavListComponent
            label="Photos"
            icon={<PhotoIcon className="h-5 w-5 mr-2" />}
            value={+2}
          />

          {/* 
          
          
          <li className="mb-2  flex justify-between">
            
            <span className="bg-red-500 text-white w-5 h-5 text-[12px]  rounded-full">
              +2
            </span>
          </li> */}
        </ul>
      </nav>
      <SuggestedPageList />
    </div>
  );
}

export default NavLinkList;
