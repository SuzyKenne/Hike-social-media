import {
  HomeIcon,
  UsersIcon,
  MapIcon,
  VideoCameraIcon,
  PhotoIcon,
  MapPinIcon,
  PencilSquareIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
} from '@heroicons/react/16/solid';

const getRandomDate = () => {
  const today = new Date();
  const threeMonthsLater = new Date(
    today.getFullYear(),
    today.getMonth() + 3,
    today.getDate()
  );
  const randomTime =
    today.getTime() +
    Math.random() * (threeMonthsLater.getTime() - today.getTime());
  const randomDate = new Date(randomTime);

  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const month = monthNames[randomDate.getMonth()];
  const date = randomDate.getDate().toString().padStart(2, '0');

  // Generate a random time
  const hours = Math.floor(Math.random() * 24)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const time = `${hours % 12 || 12}:${minutes} ${ampm}`;

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = dayNames[randomDate.getDay()];

  return { month, date, startTime: `${day} ${time}` };
};

export const hikes = [
  {
    id: 1,
    mountain: 'Mount Cameroon',
    location: 'Buea, Cameroon',
    date: getRandomDate(),
    time: '07:15 AM',
    hikeDetails: {
      difficulty: 'Medium',
      elevation: '4,040m',
      distance: '48km',
    },
    image:
      'https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1603189807717-FJWB1MX6RW1GNXZOS7YP/brandon-jean-w79UXGGlvhQ-unsplash.jpg',
  },
  {
    id: 2,
    mountain: 'Mount Kilimanjaro',
    location: 'Tanzania, East Africa',
    date: getRandomDate(),
    time: '07:00 AM',
    hikeDetails: {
      difficulty: 'Hard',
      elevation: '5,895m',
      distance: '62km',
    },
    image:
      'https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg',
  },
  {
    id: 3,
    mountain: 'Mount Cameroon',
    location: 'Buea, Cameroon',
    date: getRandomDate(),
    time: '12:00 AM',
    hikeDetails: {
      difficulty: 'Hard',
      elevation: '4,040m ',
      distance: '12.5km',
    },
    image:
      'https://discover-cameroon.com/wp-content/uploads/2015/05/Cratere-du-Mont-Cameroun.jpg',
  },
  {
    id: 4,
    mountain: 'Mount Kilimanjaro',
    location: 'Tanzania, East Africa',
    date: getRandomDate(),
    time: '08:30 AM',
    hikeDetails: {
      difficulty: 'Hard',
      elevation: '5,895m',
      distance: '62km',
    },
    image:
      'https://www.tikitouringkiwi.com/wp-content/uploads/2017/05/tatra-mountains.jpg',
  },
];

export const icons = [
  {
    notificationIcon: <BellIcon />,
    ChatBubbleBottomCenterTextIcon: <ChatBubbleBottomCenterTextIcon />,
    Cog6ToothIcon: <Cog6ToothIcon />,
    PencilSquareIcon: <PencilSquareIcon />,
    MapPinIcon: <MapPinIcon />,
    PhotoIcon: <PhotoIcon />,
    VideoCameraIcon: <VideoCameraIcon />,
    HomeIcon: <HomeIcon />,
    UsersIcon: <UsersIcon />,
    MapIcon: <MapIcon />,
  },
];
