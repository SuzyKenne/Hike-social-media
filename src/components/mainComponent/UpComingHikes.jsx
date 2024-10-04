import HikeCard from './HikeCard';
import { hikes } from '../../../data';

const UpComingHikes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
      {hikes.map((hike) => {
        return (
          <HikeCard
            mountain={hike.mountain}
            date={hike.date}
            location={hike.location}
            time={hike.time}
            hikeDetails={hike.hikeDetails}
            image={hike.image}
            key={hike.id}
          />
        );
      })}
    </div>
  );
};

export default UpComingHikes;
