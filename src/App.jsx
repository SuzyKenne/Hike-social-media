import ProfileSideBar from './components/sideBar/ProfileSideBar';
import TopBar from './components/sideBar/TopBar';
import './App.css';
import FollowSuggestions from './components/sideBar/FollowSuggestions';
import Header from './components/main-component/Header';
import UpComingHikes from './components/main-component/UpComingHikes';

function App() {
  return (
    <div className="font-helvetica bg-[#131415] min-h-screen text-[#d9e4ed]">
      <TopBar />
      <div className="flex">
        <ProfileSideBar />
        <main className="flex-1 p-4">
          <Header />
          <UpComingHikes />
        </main>
        <FollowSuggestions />
      </div>
    </div>
  );
}

export default App;
